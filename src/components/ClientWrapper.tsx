"use client";
import type React from "react";
import { useEffect } from "react";

const ClientWrapper = ({ children }: { children: React.ReactNode }) => {
  useEffect(() => {
    if (process.env.NEXT_PUBLIC_NODE_ENV === "production") {
      console.log = () => {};
    }
  }, []);
  return <div>{children}</div>;
};

export default ClientWrapper;
