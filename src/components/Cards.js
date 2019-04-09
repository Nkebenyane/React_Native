import React, { Component } from 'react';
import {
    Image,
    StyleSheet,
} from 'react-native';
import { Container, Content, Card, CardItem, Text, Left, Body, View, ScrollView } from 'native-base';
import LinearGradient from 'react-native-linear-gradient';


import pic from '../images/pic.jpg';
import pic2 from '../images/pic2.jpg';
import pic3 from '../images/pic3.jpg';

export default class Cards extends Component {
    render() {
        return (
            <Container stayle={styles.ContainerStyle}>
                <Content>
                    <View>
                        <Card style={styles.CardStyle}>
                            <CardItem>
                                <Left>
                                    <Image source={pic3} style={styles.Imagesty} />
                                    <Body>
                                        <Text style={styles.BodyText}>Maipato Nkebenyane</Text>
                                        <Text style={styles.BodyText}>IT Developer</Text>
                                        <Text style={styles.BodyText}>Team Dev</Text>
                                    </Body>
                                </Left>
                            </CardItem>
                            <CardItem>
                                <View style={styles.PointsContainer}>
                                    <Text style={styles.PointsText}>Level 1-59%</Text>
                                    <View style={styles.PointsBody}>
                                    </View>
                                </View>
                            </CardItem>
                        </Card>
                    </View>
                    <Card style={styles.CardStyle}>
                        <CardItem>
                            <Left>
                                <Image source={pic} style={styles.Imagesty} />
                                <Body>
                                    <Text style={styles.BodyText}>Rahul Singh</Text>
                                    <Text style={styles.BodyText}>IT Developer</Text>
                                    <Text style={styles.BodyText}>Team Dev</Text>
                                </Body>

                            </Left>
                        </CardItem>
                        <CardItem>
                            <View style={styles.PointsContainer}>
                                <Text style={styles.PointsText}>Level 2-45%</Text>
                                <View style={styles.PointsBody}>

                                </View>
                            </View>
                        </CardItem>
                    </Card>

                    <Card style={styles.CardStyle}>
                        <CardItem>
                            <Left>
                                <Image source={pic2} style={styles.Imagesty} />
                                <Body>
                                    <Text style={styles.BodyText}>lello Brown</Text>
                                    <Text style={styles.BodyText}>IT Developer</Text>
                                    <Text style={styles.BodyText}>Team Dev</Text>
                                </Body>

                            </Left>
                        </CardItem>
                        <CardItem>
                            <View style={styles.PointsContainer}>
                                <Text style={styles.PointsText}>Level 3-29%</Text>
                                <View style={styles.PointsBody} >

                                </View>
                            </View>
                        </CardItem>
                    </Card>
                </Content>
            </Container>
        );
    }
}

const styles = StyleSheet.create({
    ContainerStyle: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    CardStyle: {
        // width: 150,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
        // paddingHorizontal: 9,
    },
    Imagesty: {
        height: 100,
        width: 100,
        borderRadius: 100,
    },
    BodyText: {
        marginTop: 20,
        left: 30,
        fontSize: 18,
    },
    PointsContainer: {
        borderColor: '#FAF1F1',
        borderWidth: 3,
        height: 30,
        width: '100%',
        justifyContent: 'center',
        borderRadius: 25,
    },
    PointsBody: {
        flex: 1,
        borderRadius: 25,
        width: 90,
        height: 30,
        backgroundColor: '#237C0C',
    },
    PointsText: {
        fontSize: 18,
        color: 'black',
        position: 'absolute',
        zIndex: 1,
        alignSelf: 'center',
    },
})