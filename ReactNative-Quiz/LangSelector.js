import React from 'react';
import { LangContext } from "./App";
import {Picker,View} from 'react-native';
//import { Picker } from '@react-native-picker/picker';

export default function LangSelector(props) {
    return <LangContext.Consumer>
        {(context) => {
            return (
                <View>
                    <Picker
                        selectedValue={context.userLang}
                        style={{ height: 50, width: 150 }}
                        onValueChange={(itemValue, itemIndex) => context.handleLanguageChange}>

                        <Picker.Item label={context.dictionary["sp"]} value="sp" />
                        <Picker.Item label={context.dictionary["en"]} value="en" />
                    </Picker>
                </View>
            );
           
        }
        }
    </LangContext.Consumer>
}
