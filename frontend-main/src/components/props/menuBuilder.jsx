import PropTypes from "prop-types";

export const menuBuilderProps = {
  title: PropTypes.string.isRequired,
  desc: PropTypes.string,
  price: PropTypes.number.isRequired,
};
