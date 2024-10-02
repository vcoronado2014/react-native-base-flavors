import { useEffect, useState } from "react";
import { View, Platform, ToastAndroid, PermissionsAndroid, AppState, AppStateStatus } from "react-native";
import { Button, Dialog, DialogActions, DialogContent, DialogHeader, Text } from "@react-native-material/core";
import Config from 'react-native-config';
// import BleManager from 'react-native-ble-manager';

/* interface Device {
    id: string;
    name?: string;
}

const requestBluetoothPermissions = async (): Promise<boolean> => {
    try {
        if (Platform.OS === 'android') {
            // Solicita los permisos de Bluetooth y ubicación
            const granted = await PermissionsAndroid.requestMultiple([
                PermissionsAndroid.PERMISSIONS.BLUETOOTH_SCAN,
                PermissionsAndroid.PERMISSIONS.BLUETOOTH_CONNECT,
                PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
                PermissionsAndroid.PERMISSIONS.ACCESS_COARSE_LOCATION
            ]);

            if (granted[PermissionsAndroid.PERMISSIONS.BLUETOOTH_SCAN] === PermissionsAndroid.RESULTS.GRANTED &&
                granted[PermissionsAndroid.PERMISSIONS.BLUETOOTH_CONNECT] === PermissionsAndroid.RESULTS.GRANTED &&
                (granted[PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION] === PermissionsAndroid.RESULTS.GRANTED ||
                granted[PermissionsAndroid.PERMISSIONS.ACCESS_COARSE_LOCATION] === PermissionsAndroid.RESULTS.GRANTED)) {
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
}; */


export const HomeScreen = () => {
/*     const [bluetoothEnabled, setBluetoothEnabled] = useState(false);
    const [devices, setDevices] = useState<Device[]>([]);
    const [isScanning, setIsScanning] = useState<boolean>(false);

    useEffect(() => {
        const checkBluetoothState = async () => {
            try {
                const permissionsGranted = await requestBluetoothPermissions();
                
                if (!permissionsGranted) return;
                
                await BleManager.enableBluetooth()
                    .then(() => {
                        setBluetoothEnabled(true);
                        console.log("Bluetooth habilitado o ya estaba habilitado");
                    })
                    .catch((error) => {
                        console.log('Error al habilitar Bluetooth:', error);
                        setBluetoothEnabled(false);
                    });
            } catch (error) {
                console.log('Error inesperado:', error);
                setBluetoothEnabled(false);
            }
        };

        const handleAppStateChange = (nextAppState: AppStateStatus) => {
            if (nextAppState === 'active') {
                checkBluetoothState();
            }
        };

        const appStateListener = AppState.addEventListener('change', handleAppStateChange);

        return () => {
            appStateListener.remove();
        };
    }, []); */

/*     useEffect(() => {
        const requestLocationPermission = async () => {
          try {
            const granted = await PermissionsAndroid.request(
              PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION, 
              {
                title: 'Permiso de ubicación',
                message: 'Necesitamos tu ubicación para escanear dispositivos Bluetooth.',
                buttonNeutral: 'Más tarde',
                buttonNegative: 'Cancelar',
                buttonPositive: 'OK',
              },
            );
            if (granted === PermissionsAndroid.RESULTS.GRANTED) {
              console.log('Se ha otorgado el permiso de ubicación');
            } else {
              console.log('El usuario no ha otorgado el permiso de ubicación');
            }
          } catch (err) {
            console.warn(err);
          }
        };
    
        BleManager.start();
    

          const checkBluetoothState = async () => {
            try {
                    setTimeout(async () => {
                        await BleManager.enableBluetooth()
                            .then(() => {
                                setBluetoothEnabled(true);
                                console.log("Bluetooth is already enabled or the user confirmed");
                            })
                            .catch((error) => {
                                console.log('Error al habilitar Bluetooth:', error);
                                setBluetoothEnabled(false);
                            });
                    }, 5000); 
            } catch (error) {
                setBluetoothEnabled(false);
                console.log('Unexpected error:', error);
            }
      
            if (!bluetoothEnabled) {
              ToastAndroid.show('¿Deseas habilitar el Bluetooth?', ToastAndroid.LONG);
            } else {
              // Solicitar permiso de ubicación en Android si es necesario
              if (Platform.OS === 'android') {
                try {
                  await requestLocationPermission();
                } catch (error) {
                  console.error('Error al solicitar permiso de ubicación:', error);
                }
              }
            }
          };
      
          checkBluetoothState();

      }, []); */


    return (
        
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: Config.LOGIN_CONTAINER_BACKGROUND }}>
            <Text variant="h6">Home Screen</Text>
            <Text variant="subtitle2">environment: {Config.ENVIRONMENT}</Text>
        </View>

    );
}