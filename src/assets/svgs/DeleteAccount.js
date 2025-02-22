import * as React from "react";
import Svg, { Path } from "react-native-svg";

const DeleteAccountIcon = (props) => (
    <Svg
        width={15}
        height={18}
        viewBox="0 0 15 18"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <Path
            d="M11.75 6V16H3.75V6H11.75ZM10.25 0H5.25L4.25 1H0.75V3H14.75V1H11.25L10.25 0ZM13.75 4H1.75V16C1.75 17.1 2.65 18 3.75 18H11.75C12.85 18 13.75 17.1 13.75 16V4Z"
            // fill="#5E5E5E"
            fill={props?.strokeColor ? props.strokeColor : "#BA1A1A"}
        />
    </Svg>
);
export default DeleteAccountIcon;