import React from "react";

import {Text,Image,View, StyleSheet} from 'react-native';


import { LangContext } from '../../App';


export default function Author(props) {


    function verificaAuthor() {
        let author, user, photo;

        if (props.user.username === null) {
            user = <Text style={styles.author_unknown}> Anonimo </Text>
                
        } else {
               let nombre=  props.user.username          
            user = <Text style={styles.author_username}> {nombre} </Text>;
        }

        if (props.user.photo === null) {
            photo = <Text>???</Text>
        } else {
            let url= props.user.photo.url
            photo = <Image style={styles.author_photo} source={{ uri: url }} />
        }

        author =
            <View style={{alignItems:'center'}}>
                {photo}
                {user}
            </View>
        

        return author;
    }

    return (
        <View> 
            {verificaAuthor()}
        </View>
    );



}

const styles = StyleSheet.create({
    
    author_photo : {    
        height: 80,
        width: 80,
        marginTop: 25
    },
    author_username:{
        alignItems: "center",
        //textAlign: 'center',
        //fontFamily: ('Courier New', Courier, monospace),
        fontSize: 14
        /*margin-left: 100,
        margin-bottom: 50,
        color: magenta*/
    },
    author_unknown : {
        fontSize: 14
        
    }
});
    
