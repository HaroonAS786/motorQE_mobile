import * as React from "react";
import Svg, { Path } from "react-native-svg";

const DatePickerIcon = (props) => (
    <Svg
        width={20}
        height={22}
        viewBox="0 0 20 22"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <Path
            d="M18 2H17V0H15V2H5V0H3V2H2C0.9 2 0 2.9 0 4V20C0 21.1 0.9 22 2 22H18C19.1 22 20 21.1 20 20V4C20 2.9 19.1 2 18 2ZM18 20H2V9H18V20ZM18 7H2V4H18V7Z"
            fill="#5E5E5E"
        />
    </Svg>
);
export default DatePickerIcon;
