"use client";
import { cn } from "@/lib/utils";
import React, { forwardRef } from "react";

const Experience = forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>((props, ref) => {
  const { className, ...rest } = props;
  return (
    <div className={cn("h-[calc(100dvh-1rem)]", className)} ref={ref} {...rest}>
      Experience
    </div>
  );
});

Experience.displayName = "Experience";

export default Experience;
