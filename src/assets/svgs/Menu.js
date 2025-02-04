import * as React from "react";
import Svg, { Path } from "react-native-svg";

const MenuIcon = (props) => (
    <Svg
        width={24}
        height={24}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <Path
            d="M12 12H12.01V12.01H12V12ZM12 5H12.01V5.01H12V5ZM12 19H12.01V19.01H12V19Z"
            stroke="white"
            strokeWidth={3.75}
            strokeLinejoin="round"
        />
    </Svg>
);
export default MenuIcon;
