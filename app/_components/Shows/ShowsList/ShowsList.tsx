"use client";

import { useState } from "react";
import { PaginationWrapper, ShowsListWrapper } from "./style";
import SectionTitle from "../../SectionTitle/SectionTitle";
import { Container } from "@/styles/global/default";
import ShowsItem from "../ShowsItem/ShowsItem";
import { DEFAULT_SHOWS } from "@/constant/shows-constant";
import { Icons } from "@/assets/icons";
import Image from "next/image";

const ShowsList = ({ showsData, showsTitle }: any) => {
  // pagination
  const [currentPage, setCurrentPage] = useState(1);
  const showsPerPage = 40;
  const indexOfLastShow = currentPage * showsPerPage;
  const indexOfFirstShow = indexOfLastShow - showsPerPage;
  const currentShows = showsData.slice(indexOfFirstShow, indexOfLastShow);
  const totalPages = Math.ceil(showsData.length / showsPerPage);

  const handleNextPage = () => {
    if (currentPage < Math.ceil(showsData.length / showsPerPage)) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNumberPage = (pageNum: number) => {
    if (pageNum) {
      setCurrentPage(pageNum);
    }
  };

  return (
    <ShowsListWrapper>
      <SectionTitle title={showsTitle} />
      <Container>
        <div className="shows-list grid">
          {currentShows?.map((show: any) => (
            <ShowsItem key={show.id} itemData={show} itemType={DEFAULT_SHOWS} />
          ))}
        </div>
        <PaginationWrapper className="flex items-center justify-center">
          <button
            aria-label="btn"
            type="button"
            className="paginate-btn paginate-prev inline-flex items-center justify-center"
            // disabled={currentPage === 1 ? "disabled" : ""}
            disabled={currentPage === 1 ? true : false}
            onClick={handlePrevPage}>
            <Image src={Icons.ArrowLeft} alt="arrow-left-icon" />
          </button>
          <ul className="flex items-center">
            {Array.from({ length: totalPages }, (_, index) => {
              const tempPageNo = index + 1;
              return (
                <li key={index}>
                  <button
                    type="button"
                    onClick={() => handleNumberPage(tempPageNo)}
                    className={`paginate-btn paginate-num text-white text-lg font-medium ${
                      tempPageNo === currentPage ? "active" : ""
                    }`}>
                    {tempPageNo}
                  </button>
                </li>
              );
            })}
          </ul>
          <button
            aria-label="btn"
            type="button"
            className="paginate-btn paginate-next inline-flex items-center justify-center"
            disabled={currentPage === totalPages ? true : false}
            onClick={handleNextPage}>
            <Image src={Icons.ArrowRight} alt="arrow-right-icon" />
          </button>
        </PaginationWrapper>
      </Container>
    </ShowsListWrapper>
  );
};

export default ShowsList;

// ShowsList.propTypes = {
//   showsData: PropTypes.array.isRequired,
//   showsTitle: PropTypes.string.isRequired,
// };
