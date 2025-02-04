import * as React from "react";
import Svg, { G, Path, Defs, ClipPath, Rect } from "react-native-svg";

const HomeIcon = (props) => (
    <Svg
        width={30}
        height={30}
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <G clipPath="url(#clip0_3523_7858)">
            <Path
                d="M16.0003 7.58667L22.667 13.5867V24H20.0003V16H12.0003V24H9.33366V13.5867L16.0003 7.58667ZM16.0003 4L2.66699 16H6.66699V26.6667H14.667V18.6667H17.3337V26.6667H25.3337V16H29.3337L16.0003 4Z"
                fill={props.strokeColor}
            />
        </G>
        <Defs>
            <ClipPath id="clip0_3523_7858">
                <Rect width={32} height={32} rx={4.8} fill={'white'} />
            </ClipPath>
        </Defs>
    </Svg>
);
export default HomeIcon;



