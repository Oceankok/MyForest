import { View, Text, TextInput, Button, StyleSheet, Pressable } from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useState } from "react";
import { useRouter } from "expo-router";

export default function LoginScreen(){
    const [username , setUsernames] = useState('')
    const [password , setPassword] = useState('')
    const router = useRouter();

    const handleLogin = async () => {
        if(username === 'box0516'&&password ==='1234'){
            await AsyncStorage.setItem('token','dummy_token');
            router.replace('/(tabs)');
        }else{
            alert('아이디와 비번을 입력하시오');
        }
    };

    return (
        <View style={styles.container}>
            <Text style = {styles.title}>MyForest</Text>
            <TextInput 
            placeholder="아이디"
            style={styles.input}
            value={username}
            onChangeText={setUsernames}
            />
            <TextInput
            placeholder="비밀번호"
            secureTextEntry
            style={styles.input}
            value={password}
            onChangeText={setPassword}
/>
      <Button title="로그인" onPress={handleLogin} />
      <Text style={styles.signin}>계정이 없으신가요?</Text>
      <Pressable onPress={handleLogin}>
        <Text style={[styles.signin, styles.link]}>회원가입</Text>
      </Pressable>
    </View>
  );

} // 나중에 로그인 화면 연결

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        paddingHorizontal: 200,
        backgroundColor: '#fff',
    },
    title: {
        fontSize: 28,
        marginBottom: 8,
        textAlign: 'center',
    },
    input: {
        borderBottomWidth: 1,
        borderColor: '#ccc',
        padding: 12,
        marginBottom: 8,
    },
    signin: {
        fontSize: 12,
        textAlign: 'center',
        color: '#666'
    },
    link: {
        color: '#2e78b7',
        fontWeight: 'bold',
    },
});

