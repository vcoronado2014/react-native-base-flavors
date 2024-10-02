import { Button, View } from "react-native";
import { Text } from "@react-native-material/core";
import Config from 'react-native-config';

import { getDeviceName } from "../../../native/MyUnitechLibrary";
import { useEffect, useState } from "react";

export const InfoScreen = () =>{

/*   const [deviceName, setDeviceName] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(true);

  const fetchDeviceName = async () => {
    try {
      const name = await getDeviceName();
      setDeviceName(name);
    } catch (error) {
      console.error('Failed to get device name:', error);
    } finally {
      setLoading(false);
    }
  };   
  
  useEffect(() => {
    fetchDeviceName();
  }, []);

  */

  const [deviceName, setDeviceName] = useState<string | null>(null);

  const handleGetDeviceName = () => {
      getDeviceName((name: string) => {
          setDeviceName(name);
      });
  };





return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: Config.LOGIN_CONTAINER_BACKGROUND }}>
      <Text variant="h6">Info Screen</Text>
      <Text variant="subtitle2">environment: {Config.ENVIRONMENT}</Text>
    <Button title="Get Device Name" onPress={handleGetDeviceName} />
    {deviceName && <Text>Device Name: {deviceName}</Text>}
    </View>
  );
}