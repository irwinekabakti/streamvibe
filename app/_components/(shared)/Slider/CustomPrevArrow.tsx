import { FC } from "react";
import Image from "next/image";
import { Icons } from "@/assets/icons";

interface CustomPrevArrowProps {
  onClick?: () => void | any;
}

const CustomPrevArrow: FC<CustomPrevArrowProps> = ({ onClick }) => (
  <button
    aria-label="btn"
    className="custom-prev-arrow bg-black06 flex items-center justify-center"
    onClick={onClick}>
    <Image src={Icons.ArrowLeft} alt="icon-arrow-prev" />
  </button>
);

export default CustomPrevArrow;
