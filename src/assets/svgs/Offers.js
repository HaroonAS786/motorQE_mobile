import * as React from "react";
import Svg, { Path } from "react-native-svg";

const OffersIcon = (props) => (
    <Svg
        width={28}
        height={28}
        viewBox="0 0 21 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <Path
            d="M0.5 16V0H20.5V16H0.5ZM2.5 14H18.5V2H2.5V14ZM6.5 13H8.5V12H9.5C9.78333 12 10.021 11.904 10.213 11.712C10.405 11.52 10.5007 11.2827 10.5 11V8C10.5 7.71667 10.404 7.479 10.212 7.287C10.02 7.095 9.78267 6.99933 9.5 7H6.5V6H10.5V4H8.5V3H6.5V4H5.5C5.21667 4 4.979 4.096 4.787 4.288C4.595 4.48 4.49933 4.71733 4.5 5V8C4.5 8.28333 4.596 8.521 4.788 8.713C4.98 8.905 5.21733 9.00067 5.5 9H8.5V10H4.5V12H6.5V13ZM14.5 12.25L16.5 10.25H12.5L14.5 12.25ZM12.5 6H16.5L14.5 4L12.5 6Z"
            fill={props.strokeColor}
        />
    </Svg>
);
export default OffersIcon;
