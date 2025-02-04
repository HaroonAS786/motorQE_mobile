import * as React from "react";
import Svg, { Path } from "react-native-svg";

const AddIcon = (props) => (
    <Svg
        width={16}
        height={16}
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <Path
            d="M6.85714 9.14286H0V6.85714H6.85714V0H9.14286V6.85714H16V9.14286H9.14286V16H6.85714V9.14286Z"
            fill={props.stroke ? props.stroke : "white"}
        />
    </Svg>
);
export default AddIcon;
