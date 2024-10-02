import { NativeModules } from 'react-native';
const { UnitechLibrary  } = NativeModules;

export function getDeviceName(callback: (deviceName: string) => void): void {
    // Llama al método nativo y pasa el callback
    UnitechLibrary.getDeviceName(callback);
}

/* export const getDeviceName = async (): Promise<string> => {
    try {
      const deviceName = await UnitechLibrary.getDeviceName();
      return deviceName;
    } catch (e) {
      console.error('Error fetching device name:', e);
      throw e;
    }
  }; */