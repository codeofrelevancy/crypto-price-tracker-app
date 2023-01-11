/* eslint-disable @next/next/no-img-element */
import React, { memo } from "react";

import Loader from "./Loader";
import Status from "./Status";
import { formatPrice } from "../utils";

interface Props {
  crypto: {
    id: string;
    name: string;
    symbol: string;
    iconCode: number;
    price: number;
    highPrice: number;
    lowPrice: number;
    prevPrice: number;
    explorer: string;
  };
}

function Crypto({ crypto }: Props) {
  return (
    <div className="max-w p-6 bg-white border border-gray-100 rounded-lg shadow-lg">
      {/* TODO: crypto card code */}
    </div>
  );
}

export default memo(Crypto);
