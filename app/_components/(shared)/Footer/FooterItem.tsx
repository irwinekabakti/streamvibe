import { FC } from "react";
import Link from "next/link";
import { Text } from "@/styles/global/default";
import { FooterItemWrapper } from "./style";
import Image from "next/image";
import { FooterLinkSectionProps } from "@/types/type";

interface FooterItemProps {
  data: FooterLinkSectionProps;
}

const FooterItem: FC<FooterItemProps> = ({ data }) => {
  return (
    <FooterItemWrapper>
      <h4 className="item-title text-xl capitalize font-semibold">
        {data?.link_title}
      </h4>
      {data?.link_type === "text" ? (
        <ul className="item-text-links">
          {data?.links?.map((link: any, index: number) => (
            <li key={index}>
              <Link href={link?.link_url}>
                <Text className="capitalize font-medium">
                  {link?.link_name}
                </Text>
              </Link>
            </li>
          ))}
        </ul>
      ) : (
        <ul className="item-icons-links flex items-center items-wrap">
          {data?.links?.map((link: any, index: number) => (
            <li key={index}>
              <Link
                href={link?.link_url}
                className="item-icon-link bg-black10 inline-flex items-center justify-center">
                <Image src={link?.link_icon} alt="link-icon" />
              </Link>
            </li>
          ))}
        </ul>
      )}
    </FooterItemWrapper>
  );
};

export default FooterItem;

// { link_url: any; link_icon: string | undefined; }
// Key | null | undefined
