import * as React from "react";
import Svg, { Path } from "react-native-svg";
import { themeColors } from "../../config/colors";

const PasswordLock = (props) => (
    <Svg
        width={16}
        height={14}
        viewBox="0 0 16 14"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M0 6.99992C0.933333 3.13325 4.13333 0.333252 8 0.333252C11.8667 0.333252 15.0667 3.13325 16 6.99992C15.0667 10.8666 11.8667 13.6666 8 13.6666C4.13333 13.6666 0.933333 10.8666 0 6.99992ZM4.66667 6.99992C4.66667 8.86659 6.13333 10.3333 8 10.3333C9.86667 10.3333 11.3333 8.86659 11.3333 6.99992C11.3333 5.13325 9.86667 3.66659 8 3.66659C6.13333 3.66659 4.66667 5.13325 4.66667 6.99992ZM9.33333 6.99992C9.33333 7.7363 8.73638 8.33325 8 8.33325C7.26362 8.33325 6.66667 7.7363 6.66667 6.99992C6.66667 6.26354 7.26362 5.66658 8 5.66658C8.73638 5.66658 9.33333 6.26354 9.33333 6.99992Z"
            fill={themeColors.primary}
        />
    </Svg>
);
export default PasswordLock;
