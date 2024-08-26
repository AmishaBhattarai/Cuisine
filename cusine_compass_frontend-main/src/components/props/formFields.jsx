import PropTypes from "prop-types";

export const formFielsProps = {
  title: PropTypes.string,
  req: PropTypes.bool,
  type: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.any,
  onchange: PropTypes.func,
  onblur: PropTypes.func,
  id: PropTypes.string,
  error: PropTypes.func,
  touched: PropTypes.bool,
  placeholder: PropTypes.string,
  className: PropTypes.string,
};
