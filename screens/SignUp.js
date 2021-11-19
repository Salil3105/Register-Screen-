import React, { useState } from 'react';
import { Item, Label, TextInput, View, ScrollView, Text, StyleSheet, ImageBackground, Dimensions } from 'react-native'
import { Input, Button, } from 'react-native-elements';

export default function SignUp() {

    const [text, setText] = useState()
    const [password, setPassword] = useState()
    const [fullname, setFullName] = useState()
    return (
        <ScrollView
            style={{ flex: 1, backgroundColor: "#f1f2f6" }}
            showsVerticalScrollIndicator={false}>

            <ImageBackground
                source={require('../asset/images/bg-image.png')}
                style={{ height: Dimensions.get('window').height / 2.5 }}>

                <View style={style.brandView}>
                    <ImageBackground
                        style={{ height: Dimensions.get('window').height / 6.5 }}>

                    </ImageBackground>
                    <Text style={style.brandViewText}> Vision Go !</Text>
                </View>
            </ImageBackground>

            {/* Bottom View  */}
            <View style={style.bottomView}>

                {/* <View style={{ padding: 40 }} >
                    <Text style={{ color: '#4632A1', fontSize: 34 }}> Welcome </Text>
                    <Text>
                        Don't have an account ?
                        <Text style={{ color: 'red', fontStyle: 'italic', paddingLeft: 10, }}>{''}Register Now</Text>
                    </Text>
                </View> */}

                {/* Form Inputs  */}
                <View style={{ marginTop: 50, marginLeft: 40, }}>
                    {/* <TextInput placeholder='Email id' style={style.inputs} value={text} onChangeText={() => { setText(text) }} textContentType='emailAddress' /> */}

                    <Input
                        color="black"
                        placeholder="Email id "
                        autoFocus
                        type="email"
                        value={text}
                        onChangeText={text => setText(text)}
                    />
                    <Input
                        color="black"
                        placeholder="Password "
                        autoFocus
                        type="password"
                        secureTextEntry
                        value={password}
                        onChangeText={password => setPassword(password)}
                    />
                    <Input
                        color="black"
                        autoFocus
                        type='text'
                        placeholder="Full Name"
                        value={fullname}
                        onChangeText={fullname => setFullName(fullname)}
                    />
                    <Button
                        containerStyle={style.button}
                        raised
                        // onPress={register}
                        title="Register"
                    />
                </View>
            </View>
        </ScrollView>
    );
}

const style = StyleSheet.create({
    brandView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },

    brandViewText: {
        color: '#ffffff',
        fontSize: 40,
        fontWeight: 'bold',
        textTransform: 'uppercase'
    },

    bottomView: {
        flex: 1.5,
        backgroundColor: '#f1f2f6',
        bottom: 45,
        borderBottomStartRadius: 40,
        borderRadius: 40,
        borderBottomEndRadius: 40,
    },

    // input: {
    //     color: 'red',
    //     borderColor: 'black',
    //     fontSize: 20,
    //     borderColor: '#4632A1',
    //     borderBottomColor: 'red',
    //     height: 40,
    //     margin: 12,
    //     borderWidth: 1,
    //     padding: 10,
    // },

    button: {
        marginLeft: 60,
        marginTop: 10,
        width: 200,
    }

})