"use client";

import { FC } from "react";
import { Icons } from "@/assets/icons";
import Image from "next/image";

interface CustomNextArrowProps {
  onClick?: () => void | any;
}

const CustomNextArrow: FC<CustomNextArrowProps> = ({ onClick }) => (
  <button
    aria-label="btn"
    className="custom-next-arrow bg-black06 flex items-center justify-center"
    onClick={onClick}>
    <Image src={Icons.ArrowRight} alt="icon-arrow-next" />
  </button>
);

export default CustomNextArrow;
