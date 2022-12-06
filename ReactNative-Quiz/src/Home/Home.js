import React from 'react';
//import './Home.css';
import { LangContext } from '../../App';
import { Image, View, StyleSheet, Text } from 'react-native';


export default function Home({ navigation }){
    return(
        <LangContext.Consumer>
            {(context) => {
                return <View>
               
                    <Text style={styles.h2}>
                        {context.dictionary["home"]}
                    </Text>
                    <Text style={styles.h1}>
                        {context.dictionary["bienvenida"]}
                    </Text>

                    <Image style={styles.foto} source='../../public/fondo.jpg'></Image>
               
                </View>
                    }
                }
        </LangContext.Consumer>
    );
}

const styles = StyleSheet.create({

    h1 : {

        backgroundColor: 'blue'
        },

    h2 : {
        color: 'green',
        alignItems: 'center'
        },

    foto : {
            height: 52
        },
    select_language :{
            height: 15,
            alignItems: 'center',
            margin: 50
    },

});