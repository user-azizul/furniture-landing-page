import React from "react";
import { cn } from "../utils/cn";

function Container({ children, className }) {
  return <div className={cn("px-[4vw] ", className)}>{children}</div>;
}

export default Container;
