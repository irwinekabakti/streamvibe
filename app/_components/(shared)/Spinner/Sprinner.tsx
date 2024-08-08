import { FC } from "react";
import { SpinnerWrapper } from "./style";

const Spinner: FC = () => {
  return (
    <SpinnerWrapper>
      <div className="sk-chase">
        <div className="sk-chase-dot"></div>
        <div className="sk-chase-dot"></div>
        <div className="sk-chase-dot"></div>
        <div className="sk-chase-dot"></div>
        <div className="sk-chase-dot"></div>
        <div className="sk-chase-dot"></div>
      </div>
    </SpinnerWrapper>
  );
};

export default Spinner;
