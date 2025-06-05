"use client";
import { cn } from "@/lib/utils";
import React, { forwardRef } from "react";

const Project = forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>((props, ref) => {
  const { className, ...rest } = props;
  return (
    <div className={cn("h-[calc(100dvh-1rem)]", className)} ref={ref} {...rest}>
      Project
    </div>
  );
});

Project.displayName = "Project";

export default Project;
