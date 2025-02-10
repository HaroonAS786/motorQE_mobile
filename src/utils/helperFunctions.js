import {IMAGES} from '../assets/images';
import {
  AboutIcon,
  AirConditionerIcon,
  AntiLockIcon,
  BrandIcon,
  CarIdIcon,
  CarsIcon,
  CylinderIcon,
  DeleteAccountIcon,
  EngineIcon,
  ExteriorIcon,
  FaqsIcon,
  FindGarageIcon,
  FogLampIcon,
  GearTypeIcon,
  ImportedCarsIcon,
  InspectCarIcon,
  Inspection,
  InsuranceTypeIcon,
  InteriorIcon,
  LanguageIcon,
  LogoutIcon,
  MileageIcon,
  NewsIcon,
  NewUsedCarIcon,
  OwnerIcon,
  PowerWindowIcon,
  PrivacyPolicyIcon,
  SellerIcon,
  ShowRoomIcon,
  SunRoofIcon,
  TermsAndConditionsIcon,
  TintedIcon,
  TypeOfAddIcon,
  VehicleIcon,
  WarrantyIcon,
  WheelDriveIcon,
  YearCalendarIcon,
} from '../assets/svgs';
import ContactIcon from '../assets/svgs/Contact';

export const OnBoardData = [
  {
    label: 'Find a Car',
    description: 'Choose from 1000+certified cars.',
    img: IMAGES.carGroupLogo,
  },
  {
    label: 'Find a Garage',
    description: 'Get your car serviced near you',
    img: IMAGES.garageLogo,
  },
];

export const moreArray = [
  {
    label: 'Find a Garage & other service providers',
    svg: <FindGarageIcon />,
  },
  {
    label: 'Showrooms',
    svg: <ShowRoomIcon />,
  },
  {
    label: 'News',
    svg: <NewsIcon />,
  },
  {
    label: 'FAQS',
    svg: <FaqsIcon />,
  },
  {
    label: 'About Us',
    svg: <AboutIcon />,
  },
  {
    label: 'Inspect Cars',
    svg: <InspectCarIcon />,
  },
  {
    label: 'Imported Cars',
    svg: <ImportedCarsIcon />,
  },
  {
    label: 'New Cars',
    svg: <NewUsedCarIcon />,
  },
  {
    label: 'Used Cars',
    svg: <NewUsedCarIcon />,
  },
  {
    label: 'Contact us',
    svg: <ContactIcon />,
  },
  {
    label: 'Terms & Conditions',
    svg: <TermsAndConditionsIcon />,
  },
  {
    label: 'Privacy Policy',
    svg: <PrivacyPolicyIcon />,
  },
  {
    label: 'ENG',
    svg: <LanguageIcon />,
  },
  {
    label: 'Delete Account',
    svg: <DeleteAccountIcon />,
  },
  {
    label: 'Logout',
    svg: <LogoutIcon />,
  },
];

export const aboutCarData = [
  {
    label: 'CAR ID',
    svg: <CarIdIcon />,
    val: '24039',
  },
  {
    label: 'Type of Ad',
    svg: <TypeOfAddIcon />,
    val: 'For Sale',
  },
  {
    label: 'Seller',
    svg: <SellerIcon />,
    val: 'Showroom',
  },
  {
    label: 'Brand',
    svg: <BrandIcon />,
    val: 'Land Rover',
  },
  {
    label: 'Model',
    svg: <CarsIcon />,
    val: '90s p300',
  },
  {
    label: 'Year',
    svg: <YearCalendarIcon />,
    val: '2022',
  },
  {
    label: 'Vehicle Condition',
    svg: <VehicleIcon />,
    val: 'Used',
  },
  {
    label: 'Mileage (KM)',
    svg: <MileageIcon />,
    val: '1,500',
  },
  {
    label: 'Category',
    svg: <CarsIcon />,
    val: 'SUV',
  },
  {
    label: 'Engine size',
    svg: <EngineIcon />,
    val: '5.0',
  },
  {
    label: 'Warranty',
    svg: <WarrantyIcon />,
    val: '18-12-2026',
  },
  {
    label: 'Inspection',
    svg: <Inspection />,
    val: 'Yes',
  },
  {
    label: 'Owner',
    svg: <OwnerIcon />,
    val: '1st',
  },
  {
    label: 'Cylinder',
    svg: <CylinderIcon />,
    val: '4',
  },
  {
    label: 'Wheel drive',
    svg: <WheelDriveIcon />,
    val: 'Rear-wheel drive',
  },
  {
    label: 'Exterior Colour',
    svg: <ExteriorIcon />,
    val: 'White',
  },
  {
    label: 'Interior Colour',
    svg: <InteriorIcon />,
    val: 'Black',
  },
  {
    label: 'Gear type ',
    svg: <GearTypeIcon />,
    val: 'Automatic',
  },
  {
    label: 'Insurance Type',
    svg: <InsuranceTypeIcon />,
    val: 'Fully Insured',
  },
  {
    label: 'Tinted/PPF',
    svg: <TintedIcon />,
    val: 'Yes',
  },
  {
    label: 'Date Posted',
    svg: <YearCalendarIcon />,
    val: '17 April 2023',
  },
];


export const spareParts=[
  {
    label: 'Engine oil',
    val: 'QR 100',
  },
  {
    label: 'Oil filter',
    val: 'QR 100',
  },
  {
    label: 'Gear Box Oil',
    val: 'QR 100',
  },
  {
    label: 'AC Filter',
    val: 'QR 100',
  },
  {
    label: 'Air Filter',
    val: 'QR 100',
  },
  {
    label: 'Fuel Filter',
    val: 'QR 100',
  },
  {
    label: 'Spark Plugs',
    val: 'QR 100',
  },
  {
    label: 'Front Brake Pads',
    val: 'QR 100',
  },
  {
    label: 'Rear Break Pads',
    val: 'QR 100',
  },
  {
    label: 'Battery',
    val: 'QR 100',
  },
]

export const spareSpecificationParts=[
  {
    label: 'Power Window',
    svg: <PowerWindowIcon/>,
  },
  {
    label: 'Anti-Lock Braking System (ABS)',
    svg: <AntiLockIcon/>,
  },
  {
    label: 'Air Conditioner',
    svg: <AirConditionerIcon/>,
  },
  {
    label: 'Fog Lamps',
    svg: <FogLampIcon/>,
  },
  {
    label: 'Sunroof',
    svg: <SunRoofIcon/>,
  },
]
export const carConditions=[
 'Exteriors',
 'Engine & Transmission',
 'Air-conditiong',
 'Electricals & interior',
 'Suspension & brakes ',
 'Tyres (Life remaining)', 
]
export const faqs=[
 'How can I buy a car?',
 'Where can i take a test drive of teh car',
 'Are all the cars in good condition?',
 'Electricals & interior',
 'How Does your team ensure the quality of cars? ',
 'What is the car Exchange Program (“offer”)?', 
]