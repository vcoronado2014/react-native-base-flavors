import React, { useEffect, useState } from 'react';
import { View, ActivityIndicator, Text, PermissionsAndroid, Platform } from 'react-native';
import BleManager from 'react-native-ble-manager';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../../../App'; // Ajusta la ruta según la estructura de tu proyecto

type InitialScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'InitialScreen'
>;

interface InitialScreenProps {
  navigation: InitialScreenNavigationProp;
}

const requestBluetoothPermissions = async (): Promise<boolean> => {
  try {
    if (Platform.OS === 'android') {
      const granted = await PermissionsAndroid.requestMultiple([
        PermissionsAndroid.PERMISSIONS.BLUETOOTH_SCAN,
        PermissionsAndroid.PERMISSIONS.BLUETOOTH_CONNECT,
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
        PermissionsAndroid.PERMISSIONS.ACCESS_COARSE_LOCATION,
      ]);

      if (
        granted[PermissionsAndroid.PERMISSIONS.BLUETOOTH_SCAN] === PermissionsAndroid.RESULTS.GRANTED &&
        granted[PermissionsAndroid.PERMISSIONS.BLUETOOTH_CONNECT] === PermissionsAndroid.RESULTS.GRANTED &&
        (granted[PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION] === PermissionsAndroid.RESULTS.GRANTED ||
          granted[PermissionsAndroid.PERMISSIONS.ACCESS_COARSE_LOCATION] === PermissionsAndroid.RESULTS.GRANTED)
      ) {
        console.log('Permisos de Bluetooth y ubicación otorgados');
        return true;
      } else {
        console.log('Permisos de Bluetooth o ubicación denegados');
        return false;
      }
    }
    return true;
  } catch (err) {
    console.warn('Error al solicitar permisos:', err);
    return false;
  }
};

export const InitialScreen: React.FC<InitialScreenProps> = ({ navigation }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkBluetoothState = async () => {
      const permissionsGranted = await requestBluetoothPermissions();

      if (permissionsGranted) {
        try {
          await BleManager.enableBluetooth();
          console.log('Bluetooth habilitado o ya estaba habilitado');
          navigation.navigate('HomeScreen');
        } catch (error) {
          console.log('Error al habilitar Bluetooth:', error);
          navigation.navigate('HomeScreen');
        }
      } else {
        navigation.navigate('HomeScreen');
      }

      setLoading(false);
    };

    checkBluetoothState();
  }, [navigation]);

  if (loading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" color="#0000ff" />
        <Text>Iniciando aplicación...</Text>
      </View>
    );
  }

  return null;
};
