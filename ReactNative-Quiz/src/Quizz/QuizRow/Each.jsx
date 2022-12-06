import React from 'react';
import { View, Text,Button, StyleSheet } from 'react-native';

import { LangContext } from '../../../App';

export default function Each(props) {

    function toQuiz(numero) {
        props.setCurrentQuiz(numero);
    }

    return (
        <LangContext.Consumer>
            {(context) => {
                return <View>
                    <Button style={styles.toQuizButton}
                            onPress={() => { toQuiz(props.numero) }} >
                        {context.dictionary["quiz"]}
                        {props.numero}
                    </Button>
                </View>
            }
        }
        </LangContext.Consumer>
    );

}

const styles = StyleSheet.create({
    
    toQuizButton : {
        alignItems: "center",
        //fontFamily: ('Georgia', 'Times New Roman', 'Times', 'serif'),
        marginRight: 'auto',
        marginLeft: 'auto',
        fontSize: 20
}
    
});

