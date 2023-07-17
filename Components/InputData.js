import React, { useState } from 'react'
import { TextInput, View, Text, TouchableOpacity, Button } from 'react-native'
// TextInput
const InputData = () => {
    const [email, setemail] = useState()

    const [password, setpassword] = useState()
    // .setState({ password: text })

    const login = () => {
        alert('email: ' + email + ' password: ' + password)
    }
    return (
        <View>
            <TextInput
                underlineColorAndroid="transparent"
                placeholder="Email"
                placeholderTextColor="#9a73ef"
                autoCapitalize="none"
                onChangeText={text => setemail(text)} />

            <TextInput
                underlineColorAndroid="transparent"
                placeholder="Password"
                placeholderTextColor="#9a73ef"
                autoCapitalize="none"
                onChangeText={text => setpassword(text)} />

            <Text>Hello Welcome to Input Data Render</Text>
            <TouchableOpacity

                onPress={login}>
                <Button   title='Submit' />
            </TouchableOpacity>
            <Button title="Press me" onPress={login} />

        </View>
    )
}

export default InputData
