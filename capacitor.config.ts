import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'qc.iosk.devs.v2',
  appName: 'qc-iosk-devs-2',
  webDir: 'dist',
  server: {
    androidScheme: 'https'
  }
};

export default config;
