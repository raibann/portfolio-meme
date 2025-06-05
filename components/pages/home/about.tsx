"use client";
import { cn } from "@/lib/utils";
import React, { forwardRef } from "react";

const About = forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  (props, ref) => {
    const { className, ...rest } = props;
    return (
      <div
        className={cn("h-[calc(100dvh-1rem)]", className)}
        ref={ref}
        {...rest}
      >
        <p>
          {
            "I'm a full-stack developer with a Bachelor's in Computer Science and over [X years] of experience building end-to-end web applications. I enjoy transforming complex problems into elegant, efficient solutions. My stack includes JavaScript, TypeScript, React, Next.js, Node.js, Express, and PostgreSQL—along with tools like Docker, Git, and CI/CD pipelines."
          }
        </p>
      </div>
    );
  }
);

About.displayName = "About";

export default About;
