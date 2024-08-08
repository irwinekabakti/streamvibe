import { FC } from "react";
import Link from "next/link";
import { FOOTER_LINKS } from "@/constant/mock-data";
import { Container, Paragraph, Text } from "@/styles/global/default";
import { FooterWrapper } from "./style";
import FooterItem from "./FooterItem";

const Footer: FC = () => {
  const currentYear = new Date();
  return (
    <FooterWrapper>
      <Container>
        <div className="footer-top">
          <div className="footer-list grid">
            {FOOTER_LINKS?.map((footerLink: any) => {
              return <FooterItem key={footerLink.id} data={footerLink} />;
            })}
          </div>
        </div>
        <div className="footer-bottom flex items-center justify-between">
          <Paragraph className="copyright-text">
            &copy; {currentYear.getFullYear()} Stream Vibe. All Rights Reserved.
          </Paragraph>
          <ul className="flex items-center flex-wrap bottom-links">
            <li>
              <Link href="/" className="bottom-link">
                <Text>Terms of use</Text>
              </Link>
            </li>
            <li>
              <Link href="/" className="bottom-link">
                <Text>Privacy Policy</Text>
              </Link>
            </li>
            <li>
              <Link href="/" className="bottom-link">
                <Text>Cookie Policy</Text>
              </Link>
            </li>
          </ul>
        </div>
      </Container>
    </FooterWrapper>
  );
};

export default Footer;
