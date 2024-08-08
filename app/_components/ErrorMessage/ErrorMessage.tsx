import errorConstants from "@/constant/error-constant";
import { ErrorMessageWrapper } from "./style";
import { Images } from "@/assets/images";
import { Container, HeadingTitleMd } from "@/styles/global/default";
import Image from "next/image";

const ErrorMessage = ({ error }: any) => {
  const displayErrorImage = () => {
    if (error?.code === errorConstants.ERR_404) {
      return (
        <Image className="error-img" src={Images.Error404} alt="error 404" />
      );
    } else if (error?.code === errorConstants.ERR_429) {
      return (
        <Image className="error-img" src={Images.Error429} alt="error 429" />
      );
    } else {
      return (
        <Image className="error-img" src={Images.ErrorNoData} alt="error 429" />
      );
    }
  };
  return (
    <ErrorMessageWrapper className="text-center top-spacing-fix">
      <Container>
        <div className="error-content flex flex-col justify-between items-center">
          {displayErrorImage()}
          <HeadingTitleMd className="error-title">
            {error?.message}
          </HeadingTitleMd>
        </div>
      </Container>
    </ErrorMessageWrapper>
  );
};

export default ErrorMessage;

// ErrorMessage.propTypes = {
//   error: PropTypes.object,
// };
