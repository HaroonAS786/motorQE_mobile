import * as React from "react";
import Svg, { Path } from "react-native-svg";

const OfferSent = (props) => (
    <Svg
        width={16}
        height={20}
        viewBox="0 0 16 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <Path
            d="M2 0C0.905745 0 0 0.905745 0 2V18C0 19.0943 0.905745 20 2 20H14C15.0943 20 16 19.0943 16 18V6L10 0H2ZM2 2H9V7H14V18H2V2ZM4 10V12H12V10H4ZM4 14V16H12V14H4Z"
            fill="white"
        />
    </Svg>
);
export default OfferSent;
