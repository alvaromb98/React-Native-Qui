import React from "react";
import LangSelector from '../../LangSelector';
import {LangContext} from '../../App';
import { useContext } from "react";
import { Text, View, TextInput, StyleSheet} from 'react-native';


export default function Play(props) {
    /*const lang = useContext(LangContext);*/

    let intento = ["", "", "", "", "", "", "", "", "", ""]
    let nQuiz = props.n + 1;
    let resp = props.misRespuestas[props.n];

    _onTextInputChange = (text) => {
        for (let i = 0; i < 10; i++) {
            intento[i] = props.misRespuestas[i]
        }
        intento[props.n] = text
        props.setRespuestas(intento)
    }



    return (


        <LangContext.Consumer>
            {(context) => {
                return <View style={{  alignItems:'center', flexDirection: 'column' }}>

                    <View style={styles.game_style}>
                        <Text>
                            {context.dictionary["TituloPregunta"]}
                            {nQuiz}
                        </Text>
                                              
                        <Text style={styles.game_pregunta}>
                            {props.pregunta}
                        </Text>
                    </View>
                    
                    <TextInput style={{ height: 80, fontSize: 20 }}
                        placeholder="Respuesta"
                        onChangeText={_onTextInputChange}
                        value = {resp}
                        />
                </View>
            }
            }
        </LangContext.Consumer>



    );


}

const styles = StyleSheet.create({
    
    game_style: { color: 'red' },
    
    game_pregunta : {
        alignItems: "center",        
        color: 'red',
        fontSize: 12
        }
});

