import React, { useEffect, useState, useContext } from 'react';
import { View, Text, Image, TouchableOpacity, TextInput, StyleSheet, Platform } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import Checkbox from 'expo-checkbox';
import Button from '../../components/Button';
import axios from 'axios';
import * as Google from 'expo-auth-session/providers/google';
import * as WebBrowser from 'expo-web-browser';
import COLORS from '../../constants/colors';
import { LoginContext } from '../../Functions/LoginProvider';

WebBrowser.maybeCompleteAuthSession();

const Login = ({ navigation }) => {
  const [isPasswordShown, setIsPasswordShown] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  const { updateLogin, updateToken, updateUser } = useContext(LoginContext);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  // Google login configuration
  const [request, response, promptAsync] = Google.useAuthRequest({
    expoClientId: 'YOUR_EXPO_CLIENT_ID',
    iosClientId: 'YOUR_IOS_CLIENT_ID',
    androidClientId: 'YOUR_ANDROID_CLIENT_ID',
    webClientId: 'YOUR_WEB_CLIENT_ID',
  });

  useEffect(() => {
    if (response?.type === 'success') {
      const { authentication } = response;
      fetchGoogleUserInfo(authentication.accessToken);
    }
  }, [response]);

  const fetchGoogleUserInfo = async (accessToken) => {
    try {
      const response = await axios.get('https://www.googleapis.com/userinfo/v2/me', {
        headers: { Authorization: `Bearer ${accessToken}` },
      });
      const user = response.data;
      console.log(user);

      updateUser(user);
      updateLogin(true);
      updateToken(accessToken);
      navigation.navigate('Home');
    } catch (error) {
      console.log(error);
      alert('Failed to fetch user info from Google');
    }
  };

  const fetchUser = async () => {
    try {
      const user = { username, password };
      const response = await axios.post('http://127.0.0.1:8000/backend/token/', user);
      const token = response.data.access;
      console.log('Login Token: ', token);

      if (response.data.access === undefined) {
        alert('Login not successful');
      } else {
        updateUser(user);
        updateLogin(true);
        updateToken(token);
        navigation.navigate('Home');
      }
    } catch (error) {
      console.log(error);
      alert('ID not found!');
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.innerContainer}>
        <View style={styles.headerContainer}>
          <Text style={styles.headerTitle}>Hi Welcome Back ! 👋</Text>
          <Text style={styles.headerSubtitle}>Time to take a break for lunch?</Text>
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.inputLabel}>Username</Text>
          <View style={styles.inputWrapper}>
            <TextInput
              placeholder="Enter your user name"
              placeholderTextColor={COLORS.black}
              keyboardType="ascii-capable"
              onChangeText={setUsername}
              style={styles.input}
            />
          </View>
        </View>

        <View style={styles.inputContainer}>
          <Text style={styles.inputLabel}>Password</Text>
          <View style={styles.inputWrapper}>
            <TextInput
              placeholder="Enter your password"
              placeholderTextColor={COLORS.black}
              secureTextEntry={!isPasswordShown}
              onChangeText={setPassword}
              style={styles.input}
            />
            <TouchableOpacity
              onPress={() => setIsPasswordShown(!isPasswordShown)}
              style={styles.eyeIcon}
            >
              <Ionicons 
                name={isPasswordShown ? 'eye' : 'eye-off'} 
                size={24} 
                color={COLORS.black} 
              />
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.checkboxContainer}>
          <Checkbox
            style={styles.checkbox}
            value={isChecked}
            onValueChange={setIsChecked}
            color={isChecked ? COLORS.primary : undefined}
          />
          <Text>Remember Me</Text>
        </View>

        <Button
          title="Login"
          filled
          style={styles.loginButton}
          onPress={fetchUser}
        />

        <View style={styles.dividerContainer}>
          <View style={styles.divider} />
          <Text style={styles.dividerText}>Or Login with</Text>
          <View style={styles.divider} />
        </View>

        <View style={styles.socialLoginContainer}>
          <TouchableOpacity
            onPress={() => console.log('Pressed')}
            style={styles.socialButton}
          >
            <Image
              source={require('../../assets/facebook.png')}
              style={styles.socialIcon}
              resizeMode="contain"
            />
            <Text>Facebook</Text>
          </TouchableOpacity>

          <TouchableOpacity
            disabled={!request}
            onPress={() => promptAsync()}
            style={styles.socialButton}
          >
            <Image
              source={require('../../assets/google.png')}
              style={styles.socialIcon}
              resizeMode="contain"
            />
            <Text>Google</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.registerContainer}>
          <Text style={styles.registerText}>Don't have an account?</Text>
          <TouchableOpacity onPress={() => navigation.navigate('Register')}>
            <Text style={styles.registerLink}>Register</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  innerContainer: {
    flex: 1,
    marginHorizontal: 22,
  },
  headerContainer: {
    marginVertical: 22,
  },
  headerTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    marginVertical: 12,
    color: COLORS.black,
  },
  headerSubtitle: {
    fontSize: 16,
    color: COLORS.black,
  },
  inputContainer: {
    marginBottom: 12,
  },
  inputLabel: {
    fontSize: 16,
    fontWeight: '400',
    marginVertical: 8,
  },
  inputWrapper: {
    width: '100%',
    height: 48,
    borderColor: COLORS.black,
    borderWidth: 1,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    paddingLeft: 22,
  },
  input: {
    width: '100%',
  },
  eyeIcon: {
    position: 'absolute',
    right: 12,
  },
  checkboxContainer: {
    flexDirection: 'row',
    marginVertical: 6,
  },
  checkbox: {
    marginRight: 8,
  },
  loginButton: {
    marginTop: 18,
    marginBottom: 4,
  },
  dividerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 20,
  },
  divider: {
    flex: 1,
    height: 1,
    backgroundColor: COLORS.grey,
    marginHorizontal: 10,
  },
  dividerText: {
    fontSize: 14,
  },
  socialLoginContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  socialButton: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    height: 52,
    borderWidth: 1,
    borderColor: COLORS.grey,
    marginRight: 4,
    borderRadius: 10,
  },
  socialIcon: {
    height: 36,
    width: 36,
    marginRight: 8,
  },
  registerContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 22,
  },
  registerText: {
    fontSize: 16,
    color: COLORS.black,
  },
  registerLink: {
    fontSize: 16,
    color: COLORS.primary,
    fontWeight: 'bold',
    marginLeft: 6,
  },
});

export default Login;
