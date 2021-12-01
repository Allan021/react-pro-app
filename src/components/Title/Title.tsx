import React from "react";

interface TitleProps {
  text: string;
}
export const Title = ({ text }: TitleProps) => {
  return <h2 style={{ textAlign: "center" }}>{text}</h2>;
};
