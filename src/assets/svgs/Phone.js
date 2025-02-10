import * as React from 'react';
import Svg, {G, Path, Defs, ClipPath, Rect} from 'react-native-svg';

const PhoneIcon = props => (
  <Svg
    width={25}
    height={26}
    viewBox="0 0 25 26"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <G clipPath="url(#clip0_5101_3104)">
      <Path
        d="M20.0312 16.3288L17.3853 16.0267C17.0742 15.9902 16.7589 16.0246 16.463 16.1274C16.1671 16.2303 15.8984 16.3988 15.677 16.6204L13.7603 18.5371C10.8032 17.0332 8.39969 14.6296 6.89575 11.6725L8.82284 9.74544C9.27075 9.29753 9.4895 8.67253 9.41659 8.03711L9.1145 5.41211C9.05545 4.90396 8.81158 4.43527 8.42933 4.09529C8.04709 3.7553 7.55316 3.56775 7.04159 3.56836H5.2395C4.06242 3.56836 3.08325 4.54753 3.15617 5.72461C3.70825 14.6204 10.8228 21.7246 19.7083 22.2767C20.8853 22.3496 21.8645 21.3704 21.8645 20.1934V18.3913C21.8749 17.3392 21.0833 16.4538 20.0312 16.3288Z"
        fill="white"
      />
    </G>
    <Defs>
      <ClipPath id="clip0_5101_3104">
        <Rect
          width={25}
          height={25}
          fill="white"
          transform="translate(0 0.432617)"
        />
      </ClipPath>
    </Defs>
  </Svg>
);
export default PhoneIcon;
