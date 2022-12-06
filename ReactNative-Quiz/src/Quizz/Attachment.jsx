import React from "react";

import {View,Image, StyleSheet} from 'react-native';


export default function Attachment(props){


    function verificaImagen() {
        let muestraImagen;
        if (props.attachment == null) {
            muestraImagen = <Image  source={{uri: 'https://tecnonautas.net/wp-content/uploads/2019/01/shutterstock_325494917-5a68d8403418c600190a3e1f.jpg'}} style={styles.imagen_attachment} />
        } else{
            let url = props.attachment.url
            muestraImagen =     <Image  source= {{uri: url}} style={styles.imagen_attachment} />   
        }

        return muestraImagen;
    }

    return(
        <View>{verificaImagen()}</View>
               
        
    );



}

const styles = StyleSheet.create({
    
   sin_imagen: {
    backgroundColor: 'mediumturquoise'

},

imagen_attachment: {
    width: 355,
    height: 275
},
    
});
