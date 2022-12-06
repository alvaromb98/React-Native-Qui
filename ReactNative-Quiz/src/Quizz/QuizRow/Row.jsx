import React from 'react';
import Each from './Each';

import { LangContext } from '../../../App';

import {View,Button, StyleSheet} from 'react-native';

export default function Row(props) {

    function toQuiz(numero) {
        props.setCurrentQuiz(numero);
    }

    return (

        <LangContext.Consumer>
            {(context) => {
                return <View style = {styles.questionView} >
                    
                    <View style={{flex:1, flexDirection:'column', justifyContent: 'space-between'}}>
                        <Button
                            onPress={() => { toQuiz(0) }}
                            title={context.dictionary["quiz"] + "1"}
                            style={styles.toQuizButton}> 
                        </Button>

                        <Button
                            onPress={() => { toQuiz(1) }} 
                            title={context.dictionary["quiz"]+ "2"}
                            style={styles.toQuizButton}> 
                        </Button>

                        <Button
                            onPress={() => { toQuiz(2) }}
                            title={context.dictionary["quiz"]+ "3"}
                            style={styles.toQuizButton}>   
                        </Button>

                        <Button
                            onPress={() => { toQuiz(3) }}
                            title={context.dictionary["quiz"]+ "4"}
                            style={styles.toQuizButton}>  
                        </Button>

                        <Button
                            onPress={() => { toQuiz(4) }}
                            title={context.dictionary["quiz"]+ "5"}
                            style={styles.toQuizButton}>   
                        </Button>

                        <Button
                            onPress={() => { toQuiz(5) }}
                            title={context.dictionary["quiz"]+ "6"}
                            style={styles.toQuizButton}>  
                        </Button>

                        <Button
                            onPress={() => { toQuiz(6) }}
                            title={context.dictionary["quiz"]+ "7"}
                            style={styles.toQuizButton}> 
                        </Button>

                       <Button
                            onPress={() => { toQuiz(7) }}
                            title={context.dictionary["quiz"]+ "8"}
                            style={styles.toQuizButton}>  
                        </Button>

                        <Button
                            onPress={() => { toQuiz(8) }}
                            title={context.dictionary["quiz"]+ "9"}
                            style={styles.toQuizButton}>  
                        </Button>

                        <Button
                            onPress={() => { toQuiz(9) }}
                            title={context.dictionary["quiz"]+ "10"}
                            style={styles.toQuizButton}>   
                        </Button>

                    </View>
                    
                </View>
            }
        }
        </LangContext.Consumer>
    );

    
}

const styles = StyleSheet.create({
    
    toQuizButton : {
       flex:1,
       justifyContent: 'flex-end',
       alignItems:'flex-start'
       
       
},

    questionView: {
        flex:1

},
    
});
