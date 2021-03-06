import React from 'react'
import { View, StyleSheet, TextInput,Image } from 'react-native'

const SearchBar = ({ term, onTermChange, onTermSubmit }) => {
    return <View style={style.background}>
        <Image source={require('../assets/loupe.png')} style={style.iconStyle} />
        <TextInput
            placeholder="Search Food"
            style={style.inputStyle}
            value={term}
            onChangeText={onTermChange}
            autoCapitalize="none"
            autoCorrect={false}
            onEndEditing={onTermSubmit}
        />
    </View>
}

const style = StyleSheet.create({
    background: {
        backgroundColor: '#F0EEEE',
        margin: 16,
        height: 40,
        borderRadius: 5,
        flexDirection: 'row'
    },

    inputStyle: {
        flex: 1
    },

    iconStyle: {
        height: 24,
        width:24,
        margin: 8,
        alignSelf: 'center'
    }
})

export default SearchBar