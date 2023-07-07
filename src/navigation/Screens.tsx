import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import {Articles, Components, Home, Profile, Register, Pro} from '../screens';
import {useScreenOptions, useTranslation} from '../hooks';
import Signin from '../screens/Signin';
import ConsommationG from '../screens/ConsommationG';

const Stack = createStackNavigator();

export default () => {
  const {t} = useTranslation();
  const screenOptions = useScreenOptions();

  return (
    <Stack.Navigator screenOptions={screenOptions.stack}>
      
          <Stack.Screen
        name="Sign"
        component={Signin}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Register"
        component={Register}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Home"
        component={Components}
        // options={{title: t('navigation.components')}}
      />
     <Stack.Screen
        name="ConsommationG"
        component={ConsommationG}
        options={{headerShown: true}}
      />
      {/* <Stack.Screen
        name="Components"
        component={Components}
        options={screenOptions.components}
      /> */}

      <Stack.Screen
        name="Articles"
        component={Articles}
        options={{title: t('navigation.articles')}}
      />

      <Stack.Screen name="Pro" component={Pro} options={screenOptions.pro} />

      <Stack.Screen
        name="Profile"
        component={Profile}
        options={{headerShown: false}}
      />

    </Stack.Navigator>
  );
};
