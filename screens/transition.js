import React from 'react'
import {View,
TouchableOpacity,
Text,
StyleSheet,} from 'react-native'
import {Component} from 'react'
import {BarCodeScanner} from 'expo-barcode-scanner'
import  Permission  from 'expo-permissions'

export default class Transacao extends Component {
    constructor (props) {
        super (props) 
            this.state= {
                domstate:  'normal',
                hascamerapermissions: null,
                scanned: 'false',
                scanneddata: ''
            }
    }
    render () {
        return (
            <View style = {styles.OrganizationStyle}>
                <Text style = {styles.TextStyle}>
                    Tela de Transação
                </Text>
                <TouchableOpacity style = {styles.ButtonStyle}>
                    <Text>
                        qr code
                    </Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create ({
    OrganizationStyle: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "white"
    },
    TextStyle: {
        fontSize: 30,
        color: "black",
    },
    ButtonStyle: {
        width: '43%',
        height: 55,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'black',
        borderRadius: 15,
    }
})