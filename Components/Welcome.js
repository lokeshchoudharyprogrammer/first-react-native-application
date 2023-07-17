import React from 'react'
import { Text, View } from 'react-native'

const Welcome = (props) => {
    return (
        <View>
            <Text>Hello Welcome To The React Navtive Application</Text>
            <Text>{props?.yes}</Text>
        </View>
    )
}

export default Welcome
