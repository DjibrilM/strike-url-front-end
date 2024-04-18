import React, { ReactNode } from "react";

const Visibility = ({
  children,
  visible,
}: {
  children: React.JSX.Element | ReactNode;
  visible: boolean;
}) => {
  return visible ? children : <></>;
};

export default Visibility;
