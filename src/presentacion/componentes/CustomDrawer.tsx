import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import React, { useEffect, useState } from 'react'
import { StyleSheet, View } from 'react-native';
import { AppBar, Avatar, Text } from '@react-native-material/core';
import DeviceInfo from 'react-native-device-info';

import Config from 'react-native-config';
const customDrawer = React.memo((props: any) => {
    const [appVersion, setAppVersion] = useState('');

    const { navigation, usaAvatarUser, nombreMostrar, emailMostrar } = props;

    useEffect(() => {
        const fetchAppVersion = async () => {
          const version = await DeviceInfo.getVersion();
          setAppVersion(version);
        };
    
        fetchAppVersion();
      }, []);
  
    return (
      <View style={styles.contain}>
        <DrawerContentScrollView {...props}>
          {
            usaAvatarUser &&         
                    <View style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        paddingTop: 70,
                        paddingLeft: 16,
                    }}>
                        <View style={styles.avatarContainer}>
                            <Avatar label={nombreMostrar} autoColor />
                        </View>
                        <View style={styles.textContainer}>
                            <Text variant='h6' style={{ color: Config.MENU_LATERAL_COLOR }}>{nombreMostrar}</Text>
                            <Text variant='subtitle2'>{emailMostrar}</Text>
                        </View>
                    </View>
          }
          <DrawerItemList {...props} />
                
        </DrawerContentScrollView>
            <AppBar 
                color={Config.MENU_LATERAL_BACKGROUND} 
                subtitle={`Ambiente: ${Config.ENVIRONMENT}, ${appVersion}`} 
                variant='bottom' 
                style={{ position: "absolute", start: 0, end: 0, bottom: 0, }}
                subtitleStyle={{color: Config.MENU_LATERAL_COLOR}}
                />
      </View>
    )
  });
  
  
  const styles = StyleSheet.create({
      contain: {
          flex: 1,
          backgroundColor: Config.MENU_LATERAL_BACKGROUND
      },
      drawerList: {
          flex: 1,
          paddingTop: 10,
      },
      avatarContainer: {
        marginRight: 16, // Espacio entre el avatar y los textos
      },
      textContainer: {
        flex: 1, // Permite que el contenedor de texto use el espacio restante
      },
  
  });
  
  
  export default customDrawer;