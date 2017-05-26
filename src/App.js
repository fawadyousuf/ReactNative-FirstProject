import React from 'react';
import Header from './component/header';
import AlbumList from './component/AlbumList'
import { View } from 'react-native'

class App extends React.Component {
    render() {
        return (
            <View>
                <Header hText={'Album'}></Header>
                <AlbumList/>
            </View>
        )
    }
}
export default App;