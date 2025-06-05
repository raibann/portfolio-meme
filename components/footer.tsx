"use client";
import { Github } from "lucide-react";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer>
      <div className="py-8 flex flex-col-reverse sm:flex-row items-center justify-between gap-x-2 gap-y-5 px-6 xl:px-0">
        {/* Copyright */}
        <span className="text-muted-foreground">
          &copy; {new Date().getFullYear()}{" "}
          <Link href="/" target="_blank">
            Raibann
          </Link>
          . All rights reserved.
        </span>
        <div className="flex items-center gap-5 text-muted-foreground">
          <Link href="https://github.com/raibann" target="_blank">
            <Github className="h-5 w-5" />
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
