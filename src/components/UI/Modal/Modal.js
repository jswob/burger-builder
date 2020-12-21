import React from "react";
// import PropTypes from 'prop-types';

import classes from "./Modal.module.css";

const Modal = (props) => <div className={classes.Modal}>{props.children}</div>;

// Modal.propTypes = {

// };

export default Modal;
