const { allowedRoutes } = require("./routes");

exports.menuLinks = [
  {
    title: "Home",
    link: allowedRoutes.home,
  },
  {
    title: "Business",
    link: allowedRoutes.businessmain,
  },
  {
    title: "Restaurants ",
    link: allowedRoutes.restaurants,
  },
  // {
  //   title: "Delivery",
  //   link: allowedRoutes.delivery,
  // },
  // { title: "FAQ", link: allowedRoutes.faq },
  {
    title: "Contact",
    link: allowedRoutes.contact,
  },
];
