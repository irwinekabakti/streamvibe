import { FC, useState } from "react";
import Image from "next/image";
import { Paragraph } from "@/styles/global/default";
import { CommonQItemWrapper } from "./style";
import { Icons } from "@/assets/icons";

interface QuestionData {
  question: string;
  answer: string;
}

interface CommonQuestionItemProps {
  data: QuestionData;
  count: number;
}

const CommonQuestionItem: FC<CommonQuestionItemProps> = ({ data, count }) => {
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

export default CommonQuestionItem;
