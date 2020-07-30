import React, { FunctionComponent } from "react";
import News from "./News";

interface VnlProps {
  newslist: News[];
  amountToShow: Number;
}

export const VerticalNewsList: FunctionComponent<VnlProps> = ({
  newslist,
  amountToShow,
}: VnlProps) => {
  return (
    //loop over all article and list them
    null
  );
};
