import React, { ReactNode, Fragment } from "react";
import dynamic from "next/dynamic";

const NoSSR = ({ children }: { children: ReactNode }) => (
  <Fragment>{children}</Fragment>
);

export default dynamic(() => Promise.resolve(NoSSR), {
  ssr: false,
});
