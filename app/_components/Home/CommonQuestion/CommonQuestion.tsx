"use client";

import { FC } from "react";
import { FAQS } from "@/constant/mock-data";
import { Container } from "@/styles/global/default";
import SectionTitle from "../../SectionTitle/SectionTitle";
import { CommonQWrapper } from "./style";
import CommonQuestionItem from "./CommonQuestionItem";

const CommonQuestions: FC = () => {
  let halfValue = Math.ceil(FAQS.length / 2);

  return (
    <CommonQWrapper className="section-py">
      <SectionTitle
        title={"Frequently Asked Questions"}
        text={
          "Got questions? We've got answers! Check out our FAQ section to find answers to the most common questions about StreamVibe."
        }
        // rightContenType={"title-button"}
      />
      <Container>
        <div className="common-q-content">
          <div className="common-q-list grid">
            {/* first half of faq */}
            <div className="q-list-one">
              {FAQS?.slice(0, halfValue)?.map((faq: any, index: any) => {
                let tempIndex = index + 1;
                return (
                  <CommonQuestionItem
                    data={faq}
                    key={faq.id}
                    count={tempIndex}
                  />
                );
              })}
            </div>
            {/* second half of faq */}
            <div className="q-list-two">
              {FAQS?.slice(halfValue)?.map((faq: any, index: any) => {
                let tempIndex = halfValue + (index + 1);
                return (
                  <CommonQuestionItem
                    data={faq}
                    key={faq.id}
                    count={tempIndex}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </Container>
    </CommonQWrapper>
  );
};

export default CommonQuestions;
