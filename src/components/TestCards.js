import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View
} from 'react-native';
import { CardList } from 'react-native-card-list';


const cards = [
    {
        id: "0",
        title: "Starry Night",
        picture: require('../images/13.jpg'),
        content: <Text>Team Dev</Text>
    },
    {
        id: "1",
        title: "Wheat Field",
        picture: require('../images/10.jpg'),
        content: <View>
                    <Text>Team QC</Text>
                    <Text>Team QC</Text>
                 </View>

    },
    {
        id: "2",
        title: "Bedroom in Arles",
        picture: require('../images/5.jpeg'),
        content: <Text>Team Pro</Text>
    }
]

export default class TestCars extends Component {
    render() {
        return (
            <View style={styles.container}>
                <CardList cards={cards} />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    }
});