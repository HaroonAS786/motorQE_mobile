import * as React from "react";
import Svg, { Rect, G, Path, Defs, ClipPath } from "react-native-svg";

const WhatsappCheckIcon = (props) => (
  <Svg
    width={16}
    height={16}
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Rect x={0.5} y={0.5} width={15} height={15} rx={7.5} stroke="#FB5722" />
    <G clipPath="url(#clip0_5101_1965)">
      <Path
        d="M11.8127 5.19476C12.0638 5.45443 12.0638 5.87615 11.8127 6.13583L6.66981 11.454C6.41869 11.7137 6.01088 11.7137 5.75977 11.454L3.18834 8.79492C2.93722 8.53524 2.93722 8.11353 3.18834 7.85385C3.43945 7.59417 3.84727 7.59417 4.09838 7.85385L6.21579 10.0414L10.9046 5.19476C11.1557 4.93508 11.5636 4.93508 11.8147 5.19476H11.8127Z"
        fill="#535353"
      />
    </G>
    <Defs>
      <ClipPath id="clip0_5101_1965">
        <Rect
          width={9}
          height={9.81818}
          fill="white"
          transform="translate(3 3)"
        />
      </ClipPath>
    </Defs>
  </Svg>
);
export default WhatsappCheckIcon;
