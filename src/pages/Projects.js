import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    StatusBar
} from 'react-native';
import { Container, Header, Content, Footer, FooterTab, Button, Icon, Text, Left, Right, Body, Title, Card, CardItem, } from 'native-base';
import { Actions } from 'react-native-router-flux';


import * as Progress from 'react-native-progress';
import ProgressCircle from 'react-native-progress-circle'



const Projects = () => {
    return (

        <Container>
            <View>
                <StatusBar
                    backgroundColor="#B41212"
                />
            </View>
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

            <Content>
                <View>
                    <Card>
                        <CardItem header>
                            <Text>Project Title:</Text>
                        </CardItem>
                        <CardItem>
                            <Body>
                                <ProgressCircle
                                    percent={30}
                                    radius={80}
                                    borderWidth={15}
                                    color="#3399FF"
                                    shadowColor="#999"
                                    bgColor="#fff">
                                    <Text style={{ fontSize: 18 }}>{'30%'}</Text>
                                </ProgressCircle>
                            </Body>
                        </CardItem>
                    </Card>
                </View>
            </Content>
            <View >
                <Footer >
                    <FooterTab style={styles.footerBackground}>
                        <Button vertical onPress={() => Actions.Board({})}>
                            <Icon name="trophy" />
                            <Text style={styles.BtnText}>
                                Board</Text>
                        </Button>
                        <Button vertical style={styles.ActiveBtn} onPress={() => Actions.Projects({})}>
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
                        <Button vertical onPress={() => Actions.Profile({})}>
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
    HeaderBackground: {
        backgroundColor: '#B41212',
        // justifyContent: 'center',
    },
    ActiveBtn: {
        backgroundColor: '#ffffff',
        height: 65,
    },
    BtnText: {
        color: '#000000',
    }

});

export default Projects;