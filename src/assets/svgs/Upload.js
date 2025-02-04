import * as React from "react";
import Svg, { G, Path, Defs, ClipPath, Rect } from "react-native-svg";

const UploadImageIcon = (props) => (
    <Svg
        width={25}
        height={25}
        viewBox="0 0 25 25"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <G clipPath="url(#clip0_986_8802)">
            <Path
                d="M9.5 16.5H15.5V10.5H19.5L12.5 3.5L5.5 10.5H9.5V16.5ZM12.5 6.33L14.67 8.5H13.5V14.5H11.5V8.5H10.33L12.5 6.33ZM5.5 18.5H19.5V20.5H5.5V18.5Z"
                fill="#5E5E5E"
            />
        </G>
        <Defs>
            <ClipPath id="clip0_986_8802">
                <Rect
                    width={24}
                    height={24}
                    fill="white"
                    transform="translate(0.5 0.5)"
                />
            </ClipPath>
        </Defs>
    </Svg>
);
export default UploadImageIcon;
