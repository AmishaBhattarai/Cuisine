import PropTypes from "prop-types";

export const sideLinkProps = {
  title: PropTypes.string.isRequired,
  link: PropTypes.string,
  childrens: PropTypes.node.isRequired,
};
