import React from "react";
import { Metadata } from "next";

import UnitLayout from "@/components/UnitLayout";
import { baseMetadata } from "@/utils/constants";

export const metadata: Metadata = {
  title: "#1 SZR Palm Jebel Ali",
  ...baseMetadata,
};

const UnitPage = () => {
  return <UnitLayout id={3} />;
};

export default UnitPage;
