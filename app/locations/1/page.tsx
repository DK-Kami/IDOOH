import React from "react";
import { Metadata } from "next";

import UnitLayout from "@/components/UnitLayout";
import { baseMetadata } from "@/utils/constants";

export const metadata: Metadata = {
  title: "SMBZ Arabian Ranches",
  ...baseMetadata,
};

const UnitPage = () => {
  return <UnitLayout id={1} />;
};

export default UnitPage;
