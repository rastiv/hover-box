import { useState } from "react";
import {
  SiInstagram,
  SiApple,
  SiFacebook,
  SiGoogle,
  SiX,
  SiAmazon,
  SiMicrosoft,
  SiNetflix,
  SiTiktok,
} from "react-icons/si";
import HoverBox from "../components/HoverBox";
import ButtonGroup from "../components/ButtonGroup";

const HoverBoxExample = () => {
  const textColor = "text-white";
  const backgroundColor = "bg-neutral-700";

  const [clipShape, setClipShape] = useState("circle");

  const buttons = [
    { value: "polygon", label: "Polygon" },
    { value: "circle", label: "Circle" },
    { value: "rectangle", label: "Rectangle" },
    { value: "line", label: "Line" },
  ];

  return (
    <div className="flex flex-col gap-5">
      <div className="flex flex-col gap-2 items-center sm:gap-7 sm:flex-row">
        <span className="uppercase">Select clip shape:</span>
        <ButtonGroup
          buttons={buttons}
          value={clipShape}
          onChange={setClipShape}
        />
      </div>
      <div className="border border-neutral-700 divide-y divide-neutral-700 text-neutral-700">
        <div className="grid grid-cols-2 divide-x divide-neutral-700">
          <HoverBox
            clipShape={clipShape}
            hoverTextColor={textColor}
            hoverBackgroundColor={backgroundColor}
            className="flex flex-col gap-1 h-20 justify-center items-center sm:h-28 md:h-36"
          >
            <span className="invisible md:visible">Apple Inc.</span>
            <SiApple className="text-xl sm:text-3xl md:text-4xl" />
            <span className="invisible md:visible">(AAPL)</span>
          </HoverBox>
          <HoverBox
            clipShape={clipShape}
            hoverTextColor={textColor}
            hoverBackgroundColor={backgroundColor}
            className="flex flex-col gap-1 h-20 justify-center items-center sm:h-28 md:h-36"
          >
            <span className="invisible md:visible">Alphabet Inc.</span>
            <SiGoogle className="text-xl sm:text-3xl md:text-4xl" />
            <span className="invisible md:visible">(GOOG)</span>
          </HoverBox>
        </div>
        <div className="grid grid-cols-4 divide-x divide-neutral-700">
          <HoverBox
            clipShape={clipShape}
            href="https://www.facebook.com"
            target="_blank"
            hoverTextColor={textColor}
            hoverBackgroundColor={backgroundColor}
            className="flex h-20 justify-center items-center sm:h-28 md:h-36"
          >
            <SiFacebook className="text-xl sm:text-3xl md:text-4xl" />
          </HoverBox>
          <HoverBox
            clipShape={clipShape}
            href="https://www.instagrem.com"
            target="_blank"
            hoverTextColor={textColor}
            hoverBackgroundColor={backgroundColor}
            className="flex h-20 justify-center items-center sm:h-28 md:h-36"
          >
            <SiInstagram className="text-xl sm:text-3xl md:text-4xl" />
          </HoverBox>
          <HoverBox
            clipShape={clipShape}
            href="https://www.tiktok.com"
            target="_blank"
            hoverTextColor={textColor}
            hoverBackgroundColor={backgroundColor}
            className="flex h-20 justify-center items-center sm:h-28 md:h-36"
          >
            <SiTiktok className="text-xl sm:text-3xl md:text-4xl" />
          </HoverBox>
          <HoverBox
            clipShape={clipShape}
            href="https://www.x.com"
            target="_blank"
            hoverTextColor={textColor}
            hoverBackgroundColor={backgroundColor}
            className="flex h-20 justify-center items-center sm:h-28 md:h-36"
          >
            <SiX className="text-xl sm:text-3xl md:text-4xl" />
          </HoverBox>
        </div>
        <div className="grid grid-cols-3 divide-x divide-neutral-700">
          <HoverBox
            clipShape={clipShape}
            hoverTextColor={textColor}
            hoverBackgroundColor={backgroundColor}
            className="flex h-20 justify-center items-center sm:h-28 md:h-36"
          >
            <SiMicrosoft className="text-xl sm:text-3xl md:text-4xl" />
          </HoverBox>
          <HoverBox
            clipShape={clipShape}
            hoverTextColor={textColor}
            hoverBackgroundColor={backgroundColor}
            className="flex h-20 justify-center items-center sm:h-28 md:h-36"
          >
            <SiNetflix className="text-xl sm:text-3xl md:text-4xl" />
          </HoverBox>
          <HoverBox
            clipShape={clipShape}
            hoverTextColor={textColor}
            hoverBackgroundColor={backgroundColor}
            className="flex h-20 justify-center items-center sm:h-28 md:h-36"
          >
            <SiAmazon className="text-xl sm:text-3xl md:text-4xl" />
          </HoverBox>
        </div>
      </div>
    </div>
  );
};

export default HoverBoxExample;
