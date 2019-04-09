import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    TouchableOpacity,
    Image,
    Dimensions
} from 'react-native';
import { Actions } from 'react-native-router-flux';
import { Container, Header, Content, Item, Input, Icon } from 'native-base';

import logo from '../images/atc-01.png'

const { width: WIDTH } = Dimensions.get('window')

const Login = () => {
    return (
        <Container style={styles.backgroundContainer}>
            <View style={styles.LogoContainer}>
                <Image source={logo} style={styles.logo} />
            </View>
            <View style={styles.inputContainer}>
                <Icon name="person" style={styles.inputIcon} />
                <TextInput
                    style={styles.input}
                    placeholder={'Username'}
                    placeholderTextColor={'rgba(52, 52, 52, 0.8)'}
                    underlineColorAndroid={'transparent'}
                />
            </View>

            <View style={styles.inputContainer}>
                <Icon name="lock" style={styles.inputIcon} />
                <Icon name="eye" style={styles.EyeIcon} />
                <TextInput
                    style={styles.input}
                    placeholder={'Password'}
                    placeholderTextColor={'rgba(52, 52, 52, 0.8)'}
                    underlineColorAndroid={'transparent'}
                />
            </View>

            <TouchableOpacity style={styles.btnLogin} onPress={() => Actions.Board({})}>
                <Text style={styles.btnText}>
                    Login
                </Text>
            </TouchableOpacity>
        </Container>
    );
}

const styles = StyleSheet.create({
    backgroundContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    LogoContainer: {
        alignItems: 'center',
        marginBottom: 50,
        borderRadius: 25,
    },
    logo: {
        width: 300,
        height: 300,
    },
    inputContainer: {
        marginTop: 10,
        backgroundColor: '#F3F3F3',
        width: WIDTH - 55,
    },
    input: {
        height: 45,
        fontSize: 16,
        color: 'rgba(255, 255, 255, 0.7)',
        marginHorizontal: 30,
        paddingLeft: 16,
    },
    inputIcon: {
        position: 'absolute',
        top: 4,
        paddingLeft: 7,
        width: 30,
        height: 45,
    },
    EyeIcon: {
        height: 45,
        position: 'absolute',
        paddingLeft: 320,
        top: 6,
    },
    btnLogin: {
        width: WIDTH - 55,
        height: 45,
        backgroundColor: '#B41212',
        justifyContent: 'center',
        marginTop: 20
    },
    btnText: {
        color: '#ffffff',
        fontSize: 22,
        textAlign: 'center'
    }
});

export default Login;