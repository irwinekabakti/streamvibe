import { FC } from "react";
import { BaseLinkSecondary } from "@/styles/ui/Button";
import { HeadingTitleMd, Paragraph } from "@/styles/global/default";
import { SubscriptionItemWrapper } from "./style";

interface SubscriptionData {
  id: string;
  plan: string;
  description: string;
  monthly_price: number;
  yearly_price: number;
}

interface SubscriptionItemProps {
  data: SubscriptionData;
}

const SubscriptionItem: FC<SubscriptionItemProps> = ({ data }) => {
  return (
    <SubscriptionItemWrapper className="bg-black10 flex flex-col justify-between">
      <div className="item-top">
        <HeadingTitleMd>{data.plan}</HeadingTitleMd>
        <Paragraph>{data.description}</Paragraph>
      </div>
      <div className="item-bottom">
        <div className="item-price flex items-baseline flex-wrap">
          <p className="item-price-text font-semibold">${data.monthly_price}</p>
        </div>
        <div className="item-btn-group flex items-center flex-wrap">
          <BaseLinkSecondary href="/" className="item-btn">
            <span className="btn-text">Start Free Trial</span>
          </BaseLinkSecondary>
          <BaseLinkSecondary href="/" className="item-btn">
            <span className="btn-text">Choose Plan</span>
          </BaseLinkSecondary>
        </div>
      </div>
    </SubscriptionItemWrapper>
  );
};

export default SubscriptionItem;
