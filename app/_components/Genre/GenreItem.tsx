import { FC } from "react";
import { Icons } from "@/assets/icons";
import { GenreItemWrapper } from "./style";
import Link from "next/link";
import Image from "next/image";
import { Genre } from "@/types/type";

interface GenreItemProps {
  data: Genre;
}

const GenreItem: FC<GenreItemProps> = ({ data }) => {
  return (
    <GenreItemWrapper>
      <div className="item-content">
        <div className="item-img">
          <Image
            src={data.thumbnail}
            alt="thumbnail-image"
            width={100}
            height={100}
            quality={100}
            rel="preload"
          />
        </div>
        <div className="item-body flex items-center justify-between">
          <div className="item-title font-semibold">{data.name}</div>
          <Link href="/" className="item-arrow-link">
            <Image src={Icons.ArrowRight} alt="icon-arrow-image" />
          </Link>
        </div>
      </div>
    </GenreItemWrapper>
  );
};

export default GenreItem;
