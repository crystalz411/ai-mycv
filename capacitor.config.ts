import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.cv.snap',
  appName: 'snap-cv',
  webDir: 'build',
  server: {
    androidScheme: 'https'
  }
};

export default config;
