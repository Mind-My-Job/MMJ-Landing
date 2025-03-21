"use client";
import React from "react";
import type { NextPage } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

const ErrorPage: NextPage = () => {
  return (
    <div className="flex-center flex min-h-screen flex-col items-center justify-center gap-4 p-4">
      <h1 className="text-[150px] font-bold leading-tight text-blue-500">
        404
      </h1>
      <h2 className="text-2xl font-bold">Page Not Found</h2>
      <p className="text-center text-gray-600">
        Don&apos;t worry, even the best data sometimes gets lost in the
        Internet.
      </p>
      <Link
        href="/dashboard"
        className="flex w-fit items-center gap-2 rounded-lg bg-blue-500 px-6 py-3 text-white transition-colors hover:bg-blue-600"
      >
        <ArrowLeft size={20} />
        Back to Dashboard
      </Link>
      <p className="text-sm text-gray-500">
        If you believe this is an error, please contact our support team.
      </p>
    </div>
  );
};

export default ErrorPage;
