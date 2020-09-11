import React, { Fragment } from "react";

interface Props {
  message: string;
}
export default function AlertBox({ message }: Props): JSX.Element {
  return (
    <Fragment>
      <div className="fa fa-exclamation-triangle">{message}</div>
    </Fragment>
  );
}
