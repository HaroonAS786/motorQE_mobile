import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

const ArrowDown = props => (
  <Svg
    width={17}
    height={20}
    viewBox="0 0 17 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Path
      d="M7.64289 13.2853C8.11722 13.7596 8.88753 13.7596 9.36186 13.2853L15.4333 7.21388C15.9076 6.73955 15.9076 5.96924 15.4333 5.49491C14.959 5.02058 14.1886 5.02058 13.7143 5.49491L8.50047 10.7087L3.28664 5.4987C2.8123 5.02437 2.04199 5.02437 1.56766 5.4987C1.09333 5.97303 1.09333 6.74335 1.56766 7.21768L7.63909 13.2891L7.64289 13.2853Z"
      fill="#FB5722"
    />
  </Svg>
);
export default ArrowDown;
