import * as React from "react";
import Svg, { Path } from "react-native-svg";

const SecondaryArrowLeft = (props) => (
    <Svg
        width={8}
        height={12}
        viewBox="0 0 8 12"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <Path
            d="M1.41 0L0 1.41L4.58 6L0 10.59L1.41 12L7.41 6L1.41 0Z"
            fill="#5E5E5E"
        />
    </Svg>
);
export default SecondaryArrowLeft;
