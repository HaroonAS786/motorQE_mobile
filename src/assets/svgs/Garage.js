import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
const GarageIcon = props => (
  <Svg
    width={23}
    height={21}
    strokeWidth={2}
    viewBox="0 0 23 21"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Path
      d="M0.709961 11.8179L11.5002 0.817871L22.2903 11.8179"
      stroke="black"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M3.10742 9.37354V19.1513C3.10742 19.8263 3.64419 20.3735 4.30633 20.3735H7.90306C8.5652 20.3735 9.10197 19.8263 9.10197 19.1513V14.2624C9.10197 13.5874 9.63874 13.0402 10.3009 13.0402H12.6987C13.3608 13.0402 13.8976 13.5874 13.8976 14.2624V19.1513C13.8976 19.8263 14.4344 20.3735 15.0965 20.3735H18.6933C19.3554 20.3735 19.8922 19.8263 19.8922 19.1513V9.37354"
      stroke="black"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
export default GarageIcon;
