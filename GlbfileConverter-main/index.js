// //imports
const ENV = require("dotenv");
ENV.config(); // env configuration
const hpp = require("hpp");
const cors = require("cors");
const helmet = require("helmet");
const morgan = require("morgan");
const express = require("express");
const frameguard = require("frameguard");
const specialRoutes = require("./Routes/special");
const rateLimit = require("express-rate-limit");
const swaggerUi = require("swagger-ui-express");
const sanitize = require("express-mongo-sanitize");
const swaggerAutogen = require("swagger-autogen")();
const { errorHandler } = require("./Config/errorHandler");
const { corsOptionsDelegate } = require("./Utils/corsOrigin");
const PORT = process.env.PORT || 8000;

const endpoints = ["./index.js"];
const outputFile = "./swagger_output.json";

const app = express();

//middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(sanitize());
app.use(cors(corsOptionsDelegate));
//prevents from clickjacking attack
app.use(frameguard({ action: "deny" }));
// prevents from DDOS attack
const limiter = rateLimit({
  windowMs: 60 * 1000,
  max: 100,
  message: "Too many requests from this IP, please try again later",
});
app.use(hpp());
app.use(limiter);
app.use(helmet());
app.use(morgan("dev"));

//db Connect
require("./DataBase/dbConnect");
app.use((req, res, next) => {
  console.log("Request Body:", req.body);
  next();
});

app.use("/api/v1/special", specialRoutes);

app.get("/", (req, res) => {
  res.send("We are Comming soon..........");
});

let swaggerGenerated = false;

app.use(
  "/api-docs",
  (req, res, next) => {
    if (!swaggerGenerated) {
      swaggerAutogen(outputFile, endpoints).then(() => {
        swaggerGenerated = true;
        next();
      });
    } else {
      next();
    }
  },
  swaggerUi.serve,
  swaggerUi.setup(require(outputFile))
);

//running server
app.listen(PORT, () => {
  console.log(`☘️  Server running on http://localhost:${PORT}`);
});
//error Handler
app.use(errorHandler);
