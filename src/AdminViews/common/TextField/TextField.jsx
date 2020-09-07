import React, { Component, Fragment } from "react";

class TextField extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {
      id,
      label,
      isRequired,
      value,
      onChange,
      name,
      ...rest
    } = this.props;
    return (
      <Fragment>
        <label>
          {label}
          {isRequired && <span className="text-danger">*</span>}
        </label>
        <input
          id={id}
          className="form-control"
          type="text"
          value={value}
          onChange={onChange}
          name={name}
          {...rest}
        />
      </Fragment>
    );
  }
}
export { TextField };
