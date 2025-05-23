import React from "react";
import { Metadata } from "next";

import UnitLayout from "@/components/UnitLayout";
import { baseMetadata } from "@/utils/constants";

export const metadata: Metadata = {
  title: "SMBZ Mirdif City Centre",
  ...baseMetadata,
};

const UnitPage = () => {
  return <UnitLayout id={0} />;
};

export default UnitPage;
