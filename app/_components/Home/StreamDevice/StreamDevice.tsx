import { STREAM_DEVICES } from "@/constant/mock-data";
import { Container, HeadingTitleMd, Paragraph } from "@/styles/global/default";
import SectionTitle from "../../SectionTitle/SectionTitle";
import { StreamDevicesWrapper } from "./style";
import { FC } from "react";
import Image from "next/image";

const StreamDevices: FC = () => {
  return (
    <StreamDevicesWrapper className="section-py">
      <SectionTitle
        title={"We Provide you streaming experience across various devices."}
        text={
          "With StreamVibe, you can enjoy your favorite movies and TV shows anytime, anywhere. Our platform is designed to be compatiable with a wide range of devices, ensuring that you never miss a moment of entertainment."
        }
      />
      <Container>
        <div className="stream-dev-content">
          <div className="stream-dev-list grid">
            {STREAM_DEVICES?.map((streamDevice: any) => {
              return (
                <div className="stream-dev-item" key={streamDevice.id}>
                  <div className="item-head flex items-center justify-start">
                    <div className="item-icon bg-black12 flex items-center justify-center">
                      <div className="icon-wrapper flex items-center justify-center">
                        <Image
                          src={streamDevice.icon}
                          alt="stream-device-image"
                          quality={100}
                          width={100}
                          height={100}
                          rel="preload"
                        />
                      </div>
                    </div>
                    <HeadingTitleMd className="item-title">
                      {streamDevice.device_name}
                    </HeadingTitleMd>
                  </div>
                  <div className="item-body">
                    <Paragraph>{streamDevice.description}</Paragraph>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </Container>
    </StreamDevicesWrapper>
  );
};

export default StreamDevices;
