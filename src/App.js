import React from 'react';
import { NavigationContainer } from '@react-navigation/native'
import {HomeStack} from './navigation';

const App = () => {
  return (
    <NavigationContainer>
       <HomeStack name="Home" /> 
   </NavigationContainer>
  );
};

export default App;