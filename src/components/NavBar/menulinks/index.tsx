import imgcv from '@/components/icons/cv2.png';
import imgletter from '@/components/icons/letter.png';

export type menuInfo = {
  url: string;
  text: string;
  icon: string;
};

export const menu: { [key: string]: menuInfo } = {
  createcv: {
    url: '/createcv',
    text: 'Create CV',
    icon: ''
  },
  createletter: {
    url: '/createletter',
    text: 'Cover Letter',
    icon: ''
  }
};

export const menuKeys = Object.getOwnPropertyNames(menu);
