const { tryCatch } = require("../Utils/tryCatchController");
const RegisteredContacts = require("../Model/contact");

exports.postSpecial = tryCatch(async (req, res, next) => {
  const { link } = req.body;
  console.log("Hello", link);
  try {
    const response = await fetch(`${link}`);
    // const response = await fetch(
    //   "https://github.com/NirdoshL/office/raw/main/chinese.glb"
    // );
    const glbData = await response.arrayBuffer();
    // console.log(glbData);
    res.setHeader("Content-Type", "model/gltf-binary");
    res.send(Buffer.from(glbData));
  } catch (error) {
    console.error("Error fetching GLB file:", error);
    res.status(500).send("Internal Server Error");
  }
});
exports.postOrder = tryCatch(async (req, res, next) => {
  console.log(req.body);
  const { data, amount } = req.body;
  try {
    RegisteredContacts.create({
      data: data,
      amount: amount,
    });
    res.status(200).json({
      success: true,
      message: "Order Posted",
    });
  } catch (error) {
    console.error("Error fetching GLB file:", error);
    res.status(500).send("Internal Server Error");
  }
});

exports.getOrder = tryCatch(async (req, res, next) => {
  try {
    const response = await RegisteredContacts.find();
    res.status(200).json({
      success: true,
      data: response,
    });
  } catch (error) {
    console.error("Error fetching order:", error);
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
});
