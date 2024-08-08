"use client";

import { FC, useState } from "react";
import Image from "next/image";
import { FAQS } from "@/constant/mock-data";
import { Container, Paragraph } from "@/styles/global/default";
import SectionTitle from "../../SectionTitle/SectionTitle";
import { CommonQItemWrapper, CommonQWrapper } from "./style";
import { Icons } from "@/assets/icons";

const CommonQuestions: FC<any> = () => {
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

const CommonQuestionItem: FC<any> = ({ data, count }) => {
  const tempIndex = count < 10 ? `0${count}` : count;
  const [isCollapsed, setIsCollapsed] = useState(true);

  const handleAccordion = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <CommonQItemWrapper className="item">
      <div className="item-grid grid">
        <div className="item-sn bg-black12 text-white flex items-center justify-center text-xl font-semibold">
          {tempIndex}
        </div>
        <div className="item-body">
          <div
            className="item-head flex justify-between items-start"
            onClick={handleAccordion}>
            <h4 className="item-title text-xl">{data.question}</h4>
            <button className="item-btn bg-transparent">
              {isCollapsed ? (
                <Image src={Icons.Plus} alt="icon-plus" rel="preload" />
              ) : (
                <Image src={Icons.Minus} alt="icon-minus" rel="preload" />
              )}
            </button>
          </div>
          <div className={`item-text ${!isCollapsed ? "show" : ""}`}>
            <Paragraph>{data.answer}</Paragraph>
          </div>
        </div>
      </div>
    </CommonQItemWrapper>
  );
};
