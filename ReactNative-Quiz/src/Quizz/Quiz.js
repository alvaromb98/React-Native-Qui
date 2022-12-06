//Importamos los componentes necesarios para el Quiz
import React, {useState, useEffect} from "react";
import Author from './Author';
import Play from './Play';
import Attachment from './Attachment';
import Row from './QuizRow/Row';
import LangSelector from'../../LangSelector';
//import './quiz.css';
//import '../Home/Home.css';

//Importamos los componentes de las librerias de react
import {LangContext} from '../../App';
import { useContext } from "react";

import { Button,Text, Image, StyleSheet,View } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';



export default function Quiz(props) {

    const [score, setScore] = useState(0);
    const [finished, setFinished] = useState(false);
    const [currentQuiz, setCurrentQuiz] = useState(0);
    const [quizzes, setQuizzes] = useState([]);
    const [guardadas, setGuardadas] = useState(["@q:1", "@q:2", "@q:3", "@q:4", "@q:5", "@q:6", "@q:7", "@q:8", "@q:9", "@q:10"]);
    const [loading, setLoading] = useState(true);
    const [misRespuestas, setRespuestas] = useState(["", "", "", "", "", "", "", "", "", ""]);
    const [numeroQuiz, setNumeroQuiz] = useState(10);
    //const language = useContext(LangContext);
    const Async_Pass = '@P5_2021_IWEB:quiz';

    useEffect(() => {
        fetchData();
    }, []);

    async function fetchData() {
        const res = await fetch("https://core.dit.upm.es/api/quizzes/random10wa?token=6d728c029448ce60834d");
        const myjson = await res.json();
        console.log(myjson);
        const aux = [];
        myjson.map((quiz, i) => {
            aux[i] = quiz;
            return 0;
        })
        setQuizzes(aux);
        setLoading(false);
    }

    function compruebaCorrecta() {
        let puntos_aux = 0;
        for (let i = 0; i < 10; i++) {
            let correcta = quizzes[i].answer.trim().toLowerCase();
            let intro = misRespuestas[i].trim().toLowerCase();
            if (correcta === intro) {
                puntos_aux = puntos_aux + 1;
            }
        }
        setScore(puntos_aux)
        setFinished(true)
    }



    function escribeCorrecta() {
        let aux_respuestas = [];
        for (let i = 0; i < 10; i++) {
            aux_respuestas[i] = misRespuestas[i];
        }
        aux_respuestas[currentQuiz] = quizzes[currentQuiz].answer;
        setRespuestas(aux_respuestas);


    }

    function irAnterior() {
        if (currentQuiz > 0) {
            let n = currentQuiz - 1;
            setCurrentQuiz(n);
        }

    }

    function irSiguente() {
        if (currentQuiz < 9) {
            let n = currentQuiz + 1;
            setCurrentQuiz(n);
        }

    }

    function retry() {
        setScore(0);
        setCurrentQuiz(0);
        setRespuestas(["", "", "", "", "", "", "", "", "", ""]);
        setFinished(false);
    }

    function reset() {
      retry();
      fetchData();
    }


        
    async function guardarQuizzes() {
        try {
            await AsyncStorage.setItem('@P5_2021_IWEB:quiz', JSON.stringify({ quizzes }));
   
            
            alert("Todas las preguntas han sido correctamente almacenadas");
            }
            catch (error) {
                console.log(error)
            }
    }
    
    


    async function cargarGuardadas() {
    try {
        const aux = await AsyncStorage.getItem('@P5_2021_IWEB:quiz');
        const auX = JSON.parse(aux);
        
        if (auX.length !== 0) {
            setQuizzes(auX);
            alert("Cargando preguntas guardadas");
        }
        else {
            alert("No hay preguntas guardadas");
        }

    } catch (error) {
        console.log(error)
    }
}


    
    

    async function borrarGuardadas() {
        try {
            await AsyncStorage.clear();
            alert("Todas las preguntas han sido borradas");
        } catch(error) {
            console.log(error)
        }
}


    return (
        <View>
            <LangContext.Consumer>
                {(context) => {
                    return <View>
                        {finished ?
                            <View>
                                <Text>{context.dictionary["puntuacion"]}:
                                    {score}
                                </Text>
                                <Button  title= {context.dictionary["retry"]}  onPress={() => { retry() }}>
                                   
                                </Button>
                                <Button  title= {context.dictionary["reset"]}  onPress={() => { reset() }}>
                                    
                                </Button>
                            </View>
                            :
                            <View>
                                <View style={styles.loading}>
                                    {loading ? <Text>Cargando las preguntas ... </Text> :
                                    /*context.dictionary["cargando"] para el Selector*/
                                    <View style= {styles.row}>
                                            <Row style={{flex:1}} quizzes={quizzes} numero={currentQuiz} setCurrentQuiz={setCurrentQuiz} />
                                            <View style={{ flex: 6, alignItems:'center'}}>

                                                <Attachment attachment={quizzes[currentQuiz].attachment} />
                                                <Play n={currentQuiz} pregunta={quizzes[currentQuiz].question} misRespuestas={misRespuestas} setRespuestas={setRespuestas} escribeCorrecta={escribeCorrecta} />
                                                <View style={styles.row}>
                                                    <Button title={context.dictionary["anterior"]} onPress={() => { irAnterior() }}>
                                                    
                                                    </Button>

                                                    
                                                    <Button title= {context.dictionary["siguiente"]} onPress={() => { irSiguente() }}>
                                                    
                                                    </Button>
                                            
                                                    <Button title= {context.dictionary["comprobar"]} onPress={() => { compruebaCorrecta() }}>
                                                        
                                                    </Button>
                                                </View>
                                                <Button title={context.dictionary["completar"]} onPress={() => { escribeCorrecta() }}>

                                                </Button>
                                            
                                                <Author user={quizzes[currentQuiz].author} />
                                                <Text>
                                                    Preguntas guardadas:
                                                </Text>
                                                <View style={styles.row}>
                                                    <Button title={context.dictionary["guardarQuizzes"]} onPress={() => { guardarQuizzes() }}>

                                                    </Button>


                                                    <Button title={context.dictionary["load"]} onPress={() => { cargarGuardadas() }}>

                                                    </Button>

                                                    <Button title={context.dictionary["remove"]} onPress={() => { borrarGuardadas() }}>

                                                    </Button>
                                                </View>

                                                
                                        </View>

                                    </View>

                                }
                                </View>
                            </View>
                        }
                    </View>
                    }
                }
            </LangContext.Consumer>
        </View>


  );
}

const styles = StyleSheet.create({

    loading : {
        color: 'green',
        alignItems: "center",
        fontSize: 30
},
    row : {
        flexDirection: 'row',
        
       
    },
    colum: {
        flexDirection: 'column',

    },
    

});