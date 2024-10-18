import React from "react";
import { Button } from "./ui/button";
import Up from "./Up";
import { cn } from "@/lib/utils";

function ButtonWithUp({ children, containerStyle, ...props }) {
  return (
    <div className={cn("flex items-center", containerStyle)}>
      <Button {...props}>{children}</Button>
      <Up />
    </div>
  );
}

export default ButtonWithUp;
