import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'

const UserData = () => {
    let names = [
        { name: 'John', email: 'baytu@' },
        { name: 'Jila', email: 'bmr@' },
        { name: 'Buka', email: 'yrtui@' }
    ]
    const alertItemName = (item) => {
        alert(item.name)

    }
    return (
        <View>
            {

                names.map((res) => {
                    return <TouchableOpacity key={res.email}  style={styles.container} onPress={() => alertItemName(res)}>
                        <Text style={styles.text}>{res.name}</Text>
                    </TouchableOpacity>
                })
            }

        </View>
    )
}

export default UserData


const styles = StyleSheet.create({
    container: {
        width:103,
        padding: 30,
        marginTop: 3, backgroundColor: '#d9f9b1',
        alignItems: 'center',
    },
    text: {
        color: '#4f603c'
    }
});