import {
  // FiUser,
  FiGift,
  FiAlertCircle,
  FiHelpCircle,
  FiTruck,
  FiPhoneCall,
  FiCreditCard,
  FiMail,
  FiMapPin,
} from 'react-icons/fi';
import {
  HiOutlineDocumentText,
  HiOutlinePhoneIncoming,
  HiOutlineShieldCheck,
  HiOutlineUserGroup,
} from 'react-icons/hi';
import {
  IoBagCheckOutline,
  IoGridOutline,
  IoListOutline,
  IoSettingsOutline,
} from 'react-icons/io5';

const pages = [
  // {
  //   title: 'User',
  //   href: '/user/dashboard',
  //   icon: FiUser,
  // },
  {
    title: 'offer-page',
    href: '/offer',
    icon: FiGift,
  },
  {
    title: 'checkout-page',
    href: '/checkout',
    icon: IoBagCheckOutline,
  },
  {
    title: 'faq-page',
    href: '/faq',
    icon: FiHelpCircle,
  },
  {
    title: 'about-us-page',
    href: '/about-us',
    icon: HiOutlineUserGroup,
  },
  {
    title: 'contact-us-page',
    href: '/contact-us',
    icon: HiOutlinePhoneIncoming,
  },
  {
    title: 'privacy-policy-page',
    href: '/privacy-policy',
    icon: HiOutlineShieldCheck,
  },
  {
    title: 'terms-and-conditions-page',
    href: '/terms-and-conditions',
    icon: HiOutlineDocumentText,
  },
  {
    title: 'not-found-page',
    href: '/404',
    icon: FiAlertCircle,
  },
];

const userSidebar = [
  {
    title: 'Dashboard',
    href: '/user/dashboard',
    icon: IoGridOutline,
  },
  {
    title: 'My Orders',
    href: '/user/my-orders',
    icon: IoListOutline,
  },
  {
    title: 'Update Profile',
    href: '/user/update-profile',
    icon: IoSettingsOutline,
  },
  {
    title: 'Change Password',
    href: '/user/change-password',
    icon: HiOutlineDocumentText,
  },
];

const sliderData = [
  {
    id: 1,
    title: 'Slider1Title',
    info: 'Slider1description',
    url: '/search?Category=biscuits--cakes',
    image: '/slider/slider-1.jpg',
  },
  {
    id: 2,
    title: 'Slider2Title',
    info: 'Slider2description',
    url: '/search?Category=fish--meat',
    image: '/slider/slider-2.jpg',
  },
  {
    id: 3,
    title: 'Slider3Title',
    info: 'Slider3description',
    url: '/search?category=fresh-vegetable',
    image: '/slider/slider-3.jpg',
  },
];

const ctaCardData = [
  {
    id: 1,
    title: 'Taste of',
    subTitle: 'Fresh & Natural',
    image: '/cta/cta-bg-1.jpg',
    url: '/search?category=fresh-vegetable',
  },
  {
    id: 2,
    title: 'Taste of',
    subTitle: 'Fish & Meat',
    image: '/cta/cta-bg-2.jpg',
    url: '/search?Category=fish--meat',
  },
  {
    id: 3,
    title: 'Taste of',
    subTitle: 'Bread & Bakery',
    image: '/cta/cta-bg-3.jpg',
    url: '/search?Category=biscuits--cakes',
  },
];

const featurePromo = [
  {
    id: 1,
    title: 'featurePromo1-title',
    info: 'featurePromo1-info',
    icon: FiTruck,
  },
  {
    id: 2,
    title: 'featurePromo2-title',
    info: 'featurePromo2-info',
    icon: FiPhoneCall,
  },
  {
    id: 3,
    title: 'featurePromo3-title',
    info: 'featurePromo3-info',
    icon: FiCreditCard,
  },
  {
    id: 4,
    title: 'featurePromo4-title',
    info: 'featurePromo4-info',
    icon: FiGift,
  },
];

const contactData = [
  {
    id: 1,
    title: 'contact-page-box1-title',
    info: 'contact-page-box1-info',
    icon: FiMail,
    contact: 'kachabazar@gmail.com',
    className: 'bg-emerald-100',
  },
  {
    id: 2,
    title: 'contact-page-box2-title',
    info: 'contact-page-box2-info',
    icon: FiPhoneCall,
    contact: '029-00124667',
    className: 'bg-yellow-100',
  },
  {
    id: 3,
    title: 'contact-page-box3-title',
    info: 'contact-page-box3-info',
    icon: FiMapPin,
    contact: '',
    className: 'bg-indigo-100',
  },
];

export {
  pages,
  userSidebar,
  sliderData,
  ctaCardData,
  featurePromo,
  contactData,
};
