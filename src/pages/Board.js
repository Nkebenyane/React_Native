import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    StatusBar,
    TextInput
} from 'react-native';
import { Container, Footer, FooterTab, Button, Icon, Text, Tab, Tabs, TabHeading, Left, Right } from 'native-base';
import { Actions } from 'react-native-router-flux';


import CardsScreen from '../components/Cards';
import TestCardsScreen from '../components/TestCards';


const Board = () => {
    return (

        <Container>
            <View>
                <StatusBar
                    backgroundColor="#B41212"
                />
            </View>
           
            {/* <View style={{height: 60, 
                backgroundColor:"#B41212",
                justifyContent:'center', 
                paddingHorizontal: 5,
                }}>
                <View style={{height: 50,
                    backgroundColor: "white", 
                    flexDirection: "row",
                    padding: 5, 
                    top: 9,
                    alignItems: "center"}}>
                    
                    <Icon name="arrow-back" style={{fontSize: 24}}  onPress={() => Actions.Login({})}/>
                    <TextInput placeholder="Search" style={{fontSize: 19, marginLeft: 15}}/>
                    <Icon name="people" style={{marginLeft: 260}}/>
                </View>
            </View> */}

            <Tabs style={styles.TabContainer}>
                <Tab heading={<TabHeading style={styles.TabStyles}>
                    <Text style={styles.TabsText}>Leader Board</Text>
                </TabHeading>}>
                    <CardsScreen />
                </Tab>
                <Tab heading={<TabHeading style={styles.TabStyles}>
                    <Text style={styles.TabsText}>Teams Board</Text>
                </TabHeading>}>
                    <TestCardsScreen />
                </Tab>
            </Tabs>


            <View style={styles.footerBackground}>
                <Footer >
                    <FooterTab>
                        <Button style={styles.btn}  style={styles.ActiveBtn} onPress={() => Actions.Board({})}>
                            <Icon name="trophy" style={{ color: '#B41212' }}/>
                            <Text style={{color: '#B41212'}}>
                                Board
                            </Text>
                        </Button>
                        <Button style={styles.btn}  onPress={() => Actions.Projects({})}>
                            <Icon name="clipboard" />
                            <Text style={styles.BtnText}>
                                Projects
                            </Text>
                        </Button>
                        <Button style={styles.btn}  onPress={() => Actions.Goals({})}>
                            <Icon name="list" />
                            <Text style={styles.BtnText}>
                                Goals
                            </Text>
                        </Button>
                        <Button style={styles.btn}  onPress={() => Actions.Profile({})}>
                            <Icon name="person" />
                            <Text style={styles.BtnText}>
                                Profile
                            </Text>
                        </Button>
                    </FooterTab>
                </Footer>
            </View>
        </Container >
    );
}

const styles = StyleSheet.create({
    footerBackground: {
        backgroundColor: '#B41212',
        justifyContent: 'center',
        height: 65,
    },
    HeaderBackground: {
        backgroundColor: '#BD9A9A',
    },
    btn:{
        backgroundColor: '#B41212',
        
    },
    ActiveBtn: {
        height: 65,
        backgroundColor: '#ffffff',

    },
    BtnText: {
       
        fontSize: 12,
    },
    logo: {
        width: 30,
        height: 24,
        marginTop: 15,
        right: 10,
    },
    TabContainer: {
        height: 50,
    },
    TabStyles: {
        width: 10,
        paddingLeft: 23,
        backgroundColor: '#B41212',
        alignItems: 'center',
    },
    TabsText: {
        color: "#ffffff",
        fontSize: 20,
    },
    // ArrowBack: {
    //     height: 50,
    //     position: 'absolute',
    //     backgroundColor: '#B41212',
    // }
});

export default Board;