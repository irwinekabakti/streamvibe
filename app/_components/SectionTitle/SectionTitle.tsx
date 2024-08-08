import { FC } from "react";
import { BaseLinkPrimary } from "@/styles/ui/Button";
import { Container, HeadingTitle, Paragraph } from "@/styles/global/default";
import { SectionTitleWrapper } from "./style";

interface SectionTitleProps {
  title: string | any;
  text: string | any;
  rightContenType?: string | object | any;
}

const SectionTitle: FC<SectionTitleProps> = ({
  title,
  text,
  rightContenType,
}) => {
  return (
    <SectionTitleWrapper>
      <Container>
        <div className="title-grid flex items-center justify-between flex-wrap">
          <div className="title-left">
            <HeadingTitle>{title}</HeadingTitle>
            <Paragraph>{text}</Paragraph>
          </div>
          <div className="title-right">
            {rightContenType === "title-button" && (
              <BaseLinkPrimary href="/">
                <span className="btn-text">Ask a Question</span>
              </BaseLinkPrimary>
            )}
          </div>
        </div>
      </Container>
    </SectionTitleWrapper>
  );
};

export default SectionTitle;
