import React, { Component } from 'react';
import {
    View,
    Text,
    TextInput,
    StyleSheet,
    TouchableOpacity,
} from 'react-native';


class Header extends Component {
    render() {
        return (
            <View style={styles.viewStyle}>
                <Text style={styles.title}>
                   {this.props.hText}
                    </Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    title: {
        fontSize: 20,
    },
    viewStyle: {
        backgroundColor: '#f8f8f8',
        justifyContent: 'center',
        alignItems: 'center',
        height: 60,
        paddingTop: 15,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 5 },
        shadowOpacity: 0.5
    },
})

export default Header;