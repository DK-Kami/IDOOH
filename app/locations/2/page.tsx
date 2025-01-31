import React from "react";
import { Metadata } from "next";

import UnitLayout from "@/components/UnitLayout";
import { baseMetadata } from "@/utils/constants";

export const metadata: Metadata = {
  title: "AL AIN Nad Al Sheba",
  ...baseMetadata,
};

const UnitPage = () => {
  return <UnitLayout id={2} />;
};

export default UnitPage;
