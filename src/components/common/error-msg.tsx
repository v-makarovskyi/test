import React, { FC } from "react";

type ErrorMsgProps = {
  msg: string;
};

export const ErrofMsg: FC<ErrorMsgProps> = ({ msg }): JSX.Element => {
  return <div style={{ color: "red" }}>{msg}</div>;
};
