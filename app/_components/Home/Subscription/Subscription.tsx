import { FC } from "react";
import { SUBSCRIPTIONS } from "@/constant/mock-data";
import { Container } from "@/styles/global/default";
import SectionTitle from "../../SectionTitle/SectionTitle";
import { SubscriptionWrapper } from "./style";
import SubscriptionItem from "./SubscriptionItem";

const Subscription: FC = () => {
  return (
    <SubscriptionWrapper>
      <SectionTitle
        title={"Choose the plan that's right for you"}
        text={
          "Join StreamVibe and select from our flexible subscription options tailored to suit your viewing preferences. Get ready for non-stop entertainment!"
        }
      />
      <Container>
        <div className="subs-content">
          <div className="subs-list grid">
            {SUBSCRIPTIONS?.map((subscription: any) => (
              <SubscriptionItem key={subscription.id} data={subscription} />
            ))}
          </div>
        </div>
      </Container>
    </SubscriptionWrapper>
  );
};

export default Subscription;
