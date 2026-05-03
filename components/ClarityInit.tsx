"use client";

import { useEffect } from "react";
import Clarity from "@microsoft/clarity";

export default function ClarityInit() {
  useEffect(() => {
    Clarity.init("wlbn4591mp");
  }, []);
  return null;
}
