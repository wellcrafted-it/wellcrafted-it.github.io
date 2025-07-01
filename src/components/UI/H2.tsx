import React, { ReactNode } from "react";

interface Props {
  id?: string;
  children?: ReactNode;
}

const H2: React.FC<Props> = (props: Props) => {
  return (
    <h2
      className="mb-10 text-5xl font-extrabold text-black dark:text-white"
      {...props}
    >
      {props.children}
    </h2>
  );
};

export default H2;
