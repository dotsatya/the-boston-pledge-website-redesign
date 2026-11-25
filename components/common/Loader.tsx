"use client";

import React from "react";
import { Loader } from "pulsoicon-react";

export default function LoadingOverlay() {
  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/30 backdrop-blur-md">
      <Loader className="h-10 w-10 animate-spin text-white" strokeWidth={2} />
    </div>
  );
}
