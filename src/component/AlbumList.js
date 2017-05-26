import React, { Component } from 'react';
import {
    View,
    Text,
    TextInput,
    StyleSheet,
} from 'react-native';


class AlbumList extends Component {
    componentWillMount(){
        console.log('componentWillMount in')
    }
    render() {
        return (
            <View>
                <Text>
                    AlbumList
                </Text>
            </View>
        );
    }
}

export default AlbumList;