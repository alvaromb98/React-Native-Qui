import React from 'react';
import { useContext,useState } from "react";
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';


//dependencias para los links de Navegación
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import GameScreen from './src/TicTacToe/GameScreen';
import Home from './src/Home/Home';
import Quiz from './src/Quizz/Quiz';


const Drawer = createDrawerNavigator();


import sp from './src/Home/sp.json';
import en from './src/Home/en.json';
import LangSelector from './LangSelector';


const dictionary = {sp , en};
export const LangContext = React.createContext({userLang:'sp',dictionary:sp});
 



export default function App(props) {

//para el selector de idiomas:
  const [lenguaje, setLenguaje] = useState('sp');
 const handleLanguageChange = (event) => {
      setLenguaje(event.target.value);
  }
  return (
              <NavigationContainer>
                    <Drawer.Navigator>
                        <Drawer.Screen name = "Home" component= {Home} />
                        <Drawer.Screen name = "TicTacToe" component= {GameScreen} />
                        <Drawer.Screen name = "Quizzes" component= {Quiz} />
                    </Drawer.Navigator>
              </NavigationContainer>
  );
             
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'green',
    alignItems: 'center',
    justifyContent: 'center',
  },

  navigation: {
    flex: 1,
    backgroundColor: 'yellow',
    alignItems: 'center',
    justifyContent: 'center',
  },

});
