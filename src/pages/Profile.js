import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    StatusBar
} from 'react-native';
import { Container, Header, Content, Footer, FooterTab, Button, Icon, Text, Left, Right, Body, Title, Card, CardItem, } from 'native-base';
import { Actions } from 'react-native-router-flux';



const Profile = () => {
    return (

        <Container>
            <View>
                <StatusBar
                    backgroundColor="#B41212"
                />
                <Header style={styles.HeaderBackground}>
                    <Left>
                        <Button transparent onPress={() => Actions.Board({})}>
                            <Icon name='arrow-back' />
                        </Button>
                    </Left>
                    <Body>
                        <Title>Projects</Title>
                    </Body>
                    <Right>
                        <Button transparent>
                            <Icon name='search' />
                        </Button>
                        <Button transparent>
                            <Icon name='menu' />
                        </Button>
                    </Right>
                </Header>
            </View>



            <Content />
            <View >
                <Footer >
                    <FooterTab style={styles.footerBackground}>
                        <Button vertical onPress={() => Actions.Board({})}>
                            <Icon name="trophy" />
                            <Text style={styles.BtnText}>
                                Board</Text>
                        </Button>
                        <Button vertical onPress={() => Actions.Projects({})}>
                            <Icon name="clipboard" />
                            <Text style={styles.BtnText}>
                                Projects</Text>
                        </Button>
                        <Button vertical onPress={() => Actions.Goals({})}>
                            <Icon name="list" />
                            <Text style={styles.BtnText}>
                                Goals
                            </Text>
                        </Button>
                        <Button vertical style={styles.ActiveBtn} onPress={() => Actions.Projects({})}>
                            <Icon name="person" />
                            <Text style={styles.BtnText}>
                                Profile
                            </Text>
                        </Button>
                    </FooterTab>
                </Footer>
            </View>

        </Container>

    );
}

const styles = StyleSheet.create({
    footerBackground: {
        backgroundColor: '#B41212',
        justifyContent: 'center',
        height: 65,
    },
    ActiveBtn: {
        backgroundColor: '#ffffff',
        height: 65,
    },
    BtnText: {
        color: '#000000',
    }

});

export default Profile;