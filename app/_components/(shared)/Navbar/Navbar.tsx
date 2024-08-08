"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import routeConstants from "@/constant/route-constant";
import { Container } from "@/styles/global/default";
import {
  BrandWrapper,
  HeaderIconsWrapper,
  HeaderWrapper,
  NavWrapper,
} from "./style";
import { Images } from "@/assets/images";
import { Icons } from "@/assets/icons";
import useHeaderBackground from "@/hooks/useHeaderBackground";
import {
  closeSidebar,
  openSidebar,
  selectIsSidebarOpen,
} from "@/store/action/sidebar-slice";
import { useAppDispatch, useAppSelector } from "@/store";
import { usePathname } from "next/navigation";
import Image from "next/image";

const Header: React.FC = () => {
  const pathname = usePathname();
  const scrollThreshold = 0;
  const hasBackground = useHeaderBackground(scrollThreshold);
  const headerStyle = hasBackground ? "bg-black06 sm-header" : "bg-transparent";
  const dispatch = useAppDispatch();
  const isSidebarOpen = useAppSelector(selectIsSidebarOpen);
  const navRef = useRef<HTMLDivElement>(null);

  const handleNavClose = (event: MouseEvent) => {
    if (
      navRef?.current &&
      !navRef.current.contains(event.target as Node) &&
      !isDescendantOf(event.target as Element, "sidebar-open-btn")
    ) {
      dispatch(closeSidebar());
    }
  };

  const isDescendantOf = (element: Element, className: string) => {
    let currentElement: Element | null = element;
    while (
      currentElement !== null &&
      !currentElement.classList.contains(className)
    ) {
      currentElement = currentElement.parentElement;
    }
    return currentElement?.classList.contains(className) ?? false;
  };

  useEffect(() => {
    document.body.addEventListener("click", handleNavClose);
    return () => {
      document.body.removeEventListener("click", handleNavClose);
    };
  }, []);

  const handleNavLinkClick = () => {
    dispatch(closeSidebar());
  };

  return (
    <HeaderWrapper className={`flex items-center ${headerStyle}`}>
      <Container className="w-full">
        <div className="header-content flex items-center justify-between">
          <BrandWrapper href={routeConstants.HOME}>
            <Image src={Images.Logo} alt="site logo" />
          </BrandWrapper>
          <NavWrapper
            ref={navRef}
            className={`flex items-center justify-center ${
              isSidebarOpen ? "show" : ""
            }`}>
            <button
              aria-label="btn"
              type="button"
              className="sidebar-close-btn"
              onClick={() => dispatch(closeSidebar())}>
              <Image src={Icons.Close} alt="" />
            </button>
            <ul className="nav-list flex items-center justify-center bg-black06">
              <li className="nav-item">
                <Link
                  onClick={handleNavLinkClick}
                  href={routeConstants.HOME}
                  className={`nav-link inline-flex items-center justify-center text-center ${
                    pathname === routeConstants.HOME ? "active" : ""
                  }`}>
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  onClick={handleNavLinkClick}
                  href={routeConstants.SHOWS}
                  className={`nav-link inline-flex items-center justify-center text-center ${
                    pathname === routeConstants.SHOWS ||
                    pathname.startsWith(routeConstants.SHOWS)
                      ? "active"
                      : ""
                  }`}>
                  Shows
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  onClick={handleNavLinkClick}
                  href="/support"
                  className={`nav-link inline-flex items-center justify-center text-center ${
                    pathname === "/support" ? "active" : ""
                  }`}>
                  Support
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  onClick={handleNavLinkClick}
                  href="/subscription"
                  className={`nav-link inline-flex items-center justify-center text-center ${
                    pathname === "/subscription" ? "active" : ""
                  }`}>
                  Subscription
                </Link>
              </li>
            </ul>
          </NavWrapper>
          <HeaderIconsWrapper className="flex items-center">
            <Link
              href="/search"
              className="icon-link flex items-center justify-center">
              <Image src={Icons.Search} alt="" />
            </Link>
            <Link
              href="/"
              className="icon-link flex items-center justify-center">
              <Image src={Icons.Bell} alt="" />
            </Link>
            <button
              aria-label="btn"
              type="button"
              className="icon-link flex items-center justify-center sidebar-open-btn"
              onClick={() => dispatch(openSidebar())}>
              <Image src={Icons.Menu} alt="" />
            </button>
          </HeaderIconsWrapper>
        </div>
      </Container>
    </HeaderWrapper>
  );
};

export default Header;
