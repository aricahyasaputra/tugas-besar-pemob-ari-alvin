import * as React from 'react';
import firebase from '@react-native-firebase/app';
import database from '@react-native-firebase/database';
import { StyleSheet, View, Text, Button, Image, TextInput, TouchableOpacity, Touchable, ScrollView, ImageBackground, BackHandler} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import RadioForm, {RadioButton, RadioButtonInput, RadioButtonLabel} from 'react-native-simple-radio-button';
import Slider from '@react-native-community/slider';
import auth from '@react-native-firebase/auth';
//import { LoginManager, AccessToken } from 'react-native-fbsdk-next';


//database()
  //.ref('/Users')
  //.update({
    //TMPoints: 48,
  //})
  //.then(() => console.log('Data updated.'));


  
const Tab = createMaterialBottomTabNavigator();
const Stack = createNativeStackNavigator();

function App() {
  if (!firebase.apps.length) {
    firebase.initializeApp({
      apiKey: "AIzaSyDr0zG7bs9vSXkiee7IRVhMCIGrNmKbJzc",
      authDomain: "tugas-besar-pemrograman-mobile.firebaseapp.com",
      databaseURL: "https://tugas-besar-pemrograman-mobile-default-rtdb.asia-southeast1.firebasedatabase.app",
      projectId: "tugas-besar-pemrograman-mobile",
      storageBucket: "tugas-besar-pemrograman-mobile.appspot.com",
      messagingSenderId: "927195255936",
      appId: "1:927195255936:web:af18fcfee7334c4e254265"
     })
  }

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen options={{headerShown: false}} name="Splash Screen" component={SplashScreen} />
        <Stack.Screen options={{headerShown: false}} name="Login" component={Login} />
        <Stack.Screen options={{headerShown: false}} name="Register" component={Register} />
        <Stack.Screen options={{headerShown: false}} name="Register Berhasil" component={RegisterBerhasil} />
        <Stack.Screen options={{headerShown: false}} name="goHome" component={HomeTabScreen} />
        <Stack.Screen options={{headerShown: false}} name="Information" component={Information} />
        <Stack.Screen options={{headerShown: false}} name="Notification" component={Notification} />
        <Stack.Screen options={{headerStyle: {
            backgroundColor: '#E9FFFD',
          },
          headerTitleStyle:{
            textAlign: 'center', 
            fontFamily: 'NotoSansTC-Bold-Alphabetic', 
            color:'#554D4D', 
            fontSize: 26

          },
          headerTitleAlign:'center',
          }} name="Lokasi" component={Lokasi} />
        <Stack.Screen options={{headerStyle: {
            backgroundColor: '#E9FFFD',
          },
          headerTitleStyle:{
            textAlign: 'center', 
            fontFamily: 'NotoSansTC-Bold-Alphabetic', 
            color:'#554D4D', 
            fontSize: 20

          },
          headerTitleAlign:'center',
          }} name="Bank Sampah Wijaya Kusuma" component={BankSampahWijayaKusuma} />
          <Stack.Screen options={{headerStyle: {
            backgroundColor: '#E9FFFD',
          },
          headerTitleStyle:{
            textAlign: 'center', 
            fontFamily: 'NotoSansTC-Bold-Alphabetic', 
            color:'#554D4D', 
            fontSize: 20

          },
          headerTitleAlign:'center',
          }} name="Bank Sampah Melati" component={BankSampahMelati} />
          <Stack.Screen options={{headerStyle: {
            backgroundColor: '#E9FFFD',
          },
          headerTitleStyle:{
            textAlign: 'center', 
            fontFamily: 'NotoSansTC-Bold-Alphabetic', 
            color:'#554D4D', 
            fontSize: 20

          },
          headerTitleAlign:'center',
          }} name="Bank Sampah Hijau Lestari" component={BankHijauLestari} />
          <Stack.Screen options={{headerStyle: {
            backgroundColor: '#E9FFFD',
          },
          headerTitleStyle:{
            textAlign: 'center', 
            fontFamily: 'NotoSansTC-Bold-Alphabetic', 
            color:'#554D4D', 
            fontSize: 20

          },
          headerTitleAlign:'center',
          }} name="Bank Sampah Babakan Ciamis" component={BankBabakanCiamis} />
        <Stack.Screen options={{headerStyle: {
            backgroundColor: '#E9FFFD',
          },
          headerTitleStyle:{
            textAlign: 'center', 
            fontFamily: 'NotoSansTC-Bold-Alphabetic', 
            color:'#554D4D', 
            fontSize: 26

          },
          headerTitleAlign:'center',
          }} name="Event" component={Event} />
          <Stack.Screen options={{headerStyle: {
            backgroundColor: '#E9FFFD',
          },
          headerTitleStyle:{
            textAlign: 'center', 
            fontFamily: 'NotoSansTC-Bold-Alphabetic', 
            color:'#554D4D', 
            fontSize: 26

          },
          headerTitleAlign:'center',
          }} name="Ubah Profil" component={UbahProfil} />
          <Stack.Screen options={{headerStyle: {
            backgroundColor: '#E9FFFD',
          },
          headerTitleStyle:{
            textAlign: 'center', 
            fontFamily: 'NotoSansTC-Bold-Alphabetic', 
            color:'#554D4D', 
            fontSize: 26

          },
          headerTitleAlign:'center',
          }} name="Syarat Dan Ketentuan" component={SyaratDanKetentuan} />
          <Stack.Screen options={{headerStyle: {
            backgroundColor: '#E9FFFD',
          },
          headerTitleStyle:{
            textAlign: 'center', 
            fontFamily: 'NotoSansTC-Bold-Alphabetic', 
            color:'#554D4D', 
            fontSize: 26

          },
          headerTitleAlign:'center',
          }} name="Kebijakan Privasi" component={KebijakanPrivasi} />
          <Stack.Screen options={{headerStyle: {
            backgroundColor: '#E9FFFD',
          },
          headerTitleStyle:{
            textAlign: 'center', 
            fontFamily: 'NotoSansTC-Bold-Alphabetic', 
            color:'#554D4D', 
            fontSize: 26

          },
          headerTitleAlign:'center',
          }} name="Pernyataan Umum" component={PernyataanUmum} />
          <Stack.Screen options={{headerStyle: {
            backgroundColor: '#E9FFFD',
          },
          headerTitleStyle:{
            textAlign: 'center', 
            fontFamily: 'NotoSansTC-Bold-Alphabetic', 
            color:'#554D4D', 
            fontSize: 26

          },
          headerTitleAlign:'center',
          }} name="Sell" component={Sell} />
          <Stack.Screen options={{headerStyle: {
            backgroundColor: '#E9FFFD',
          },
          headerTitleStyle:{
            textAlign: 'center', 
            fontFamily: 'NotoSansTC-Bold-Alphabetic', 
            color:'#554D4D', 
            fontSize: 26

          },
          headerTitleAlign:'center',
          }} name="Drop Off" component={DropOff} />
          <Stack.Screen options={{headerStyle: {
            backgroundColor: '#E9FFFD',
          },
          title: 'Drop Off',
          headerTitleStyle:{
            textAlign: 'center', 
            fontFamily: 'NotoSansTC-Bold-Alphabetic', 
            color:'#554D4D', 
            fontSize: 26,
          },
          headerTitleAlign:'center',
          }} name="Drop Off Info" component={DropOffInfo} />
          <Stack.Screen options={{headerStyle: {
            backgroundColor: '#E9FFFD',
          },
          headerTitleStyle:{
            textAlign: 'center', 
            fontFamily: 'NotoSansTC-Bold-Alphabetic', 
            color:'#554D4D', 
            fontSize: 26,
          },
          headerTitleAlign:'center',
          }} name="Pick Up" component={PickUp} />
          <Stack.Screen options={{headerStyle: {
            backgroundColor: '#E9FFFD',
          },
          title: 'Pick Up',
          headerTitleStyle:{
            textAlign: 'center', 
            fontFamily: 'NotoSansTC-Bold-Alphabetic', 
            color:'#554D4D', 
            fontSize: 26,
          },
          headerTitleAlign:'center',
          }} name="Pick Up Info" component={PickUpInfo} />
          <Stack.Screen options={{headerStyle: {
            backgroundColor: '#E9FFFD',
          },
          headerTitleStyle:{
            textAlign: 'center', 
            fontFamily: 'NotoSansTC-Bold-Alphabetic', 
            color:'#554D4D', 
            fontSize: 26,
          },
          headerTitleAlign:'center',
          }} name="Redeem" component={Redeem} />
          <Stack.Screen options={{headerStyle: {
            backgroundColor: '#E9FFFD',
          },
          title: 'Tukar TM Points',
          headerTitleStyle:{
            textAlign: 'center', 
            fontFamily: 'NotoSansTC-Bold-Alphabetic', 
            color:'#554D4D', 
            fontSize: 26,
          },
          headerTitleAlign:'center',
          }} name="Redeem Pegadaian" component={RedeemPegadaian} />
          <Stack.Screen options={{headerStyle: {
            backgroundColor: '#E9FFFD',
          },
          title: 'Tukar TM Points',
          headerTitleStyle:{
            textAlign: 'center', 
            fontFamily: 'NotoSansTC-Bold-Alphabetic', 
            color:'#554D4D', 
            fontSize: 26,
          },
          headerTitleAlign:'center',
          }} name="Redeem Shopee Pay" component={RedeemShopeePay} />
          <Stack.Screen options={{headerStyle: {
            backgroundColor: '#E9FFFD',
          },
          title: 'Tukar TM Points',
          headerTitleStyle:{
            textAlign: 'center', 
            fontFamily: 'NotoSansTC-Bold-Alphabetic', 
            color:'#554D4D', 
            fontSize: 26,
          },
          headerTitleAlign:'center',
          }} name="Redeem Go Pay" component={RedeemGoPay} />
          <Stack.Screen options={{headerStyle: {
            backgroundColor: '#E9FFFD',
          },
          title: 'Tukar TM Points',
          headerTitleStyle:{
            textAlign: 'center', 
            fontFamily: 'NotoSansTC-Bold-Alphabetic', 
            color:'#554D4D', 
            fontSize: 26,
          },
          headerTitleAlign:'center',
          }} name="Redeem OVO" component={RedeemOVO} />
          <Stack.Screen options={{headerStyle: {
            backgroundColor: '#E9FFFD',
          },
          title: 'Tukar TM Points',
          headerTitleStyle:{
            textAlign: 'center', 
            fontFamily: 'NotoSansTC-Bold-Alphabetic', 
            color:'#554D4D', 
            fontSize: 26,
          },
          headerTitleAlign:'center',
          }} name="Redeem Dompet Dhuafa" component={RedeemDompetDhuafa} />
        <Stack.Screen options={{headerShown: false}} name="Drop Off Diproses" component={DropOffDiproses} />
        <Stack.Screen options={{headerShown: false}} name="Pick Up Diproses" component={PickUpDiproses} />
        <Stack.Screen options={{headerShown: false}} name="Edit Profil Berhasil" component={EditProfilBerhasil} />
        <Stack.Screen options={{headerShown: false}} name="Share" component={Share} />
        <Stack.Screen options={{headerShown: false}} name="Share Berhasil" component={ShareBerhasil} />
        <Stack.Screen options={{headerShown: false}} name="Redeem Berhasil" component={RedeemBerhasil} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

function SplashScreen({ navigation }) {
  setTimeout(() => {
    navigation.navigate('Login'); 
}, 3000)
  return (
    <View style={{backgroundColor : '#E9FFFD', flex: 1, alignSelf: 'center', justifyContent: 'center', paddingHorizontal: 100}}>
      <Image source={require('./assets/logo/trashmon.png')}/>
    </View>
  );
}

function Login({ navigation }) {
  const [email, setEmail] = React.useState()
  const [password, setPassword] = React.useState()
  const [emailError, setEmailError] = React.useState("")
  const [passwordError, setPasswordError] = React.useState("")
  const [emailPasswordErrorValidLogin, setEmailPasswordErrorValidLogin] = React.useState("")
  const [emailPasswordValidLogin, setEmailPasswordValidLogin] = React.useState(true)

  const handleSubmit = () => {
      var emailValid = false;
      if(!email){
          setEmailError("Masukkan email anda");
      }         
      else{
          setEmailError("")
          emailValid = true
      }
  
      var passwordValid = false;
      if(!password){
          setPasswordError("Masukkan password anda");
      }          
      else{
          setPasswordError("")
          passwordValid = true
      }        


      if(emailValid && passwordValid){            
          alert('Email: ' + email + '\nPassword: ' + password); 
      }        
  
    }
    
  return (
    <View  style={{backgroundColor : '#E9FFFD', flex: 1}}> 
      <View style={{alignSelf: 'center', paddingTop: 60}}>
        <Image source={require('./assets/logo/trashmon-kecil.png')}/>
      </View>
      <View style={{width: 320, paddingTop: 10, alignSelf:'center'}}>
        <TextInput style={{borderRadius: 6, fontSize: 14, fontFamily: 'NotoSansTC-Medium-Alphabetic', paddingLeft: 15, backgroundColor:'#FFFFFF', elevation: 5}}
        placeholder= "Email"
        placeholderTextColor='#7D7B92'
        onChangeText={text => setEmail(text)}
        value={email}
        />
        {emailError.length > 0 &&
          <Text style={{ fontFamily: 'NotoSansTC-Medium-Alphabetic', color:'#FF3B30', fontSize: 12, paddingLeft: 5, paddingTop: 8}}>{emailError}</Text>
        }
      </View>
      <View style={{width: 320, alignSelf:'center', paddingTop: 16}}>
        <TextInput style={{borderRadius: 6, fontSize: 14, fontFamily: 'NotoSansTC-Medium-Alphabetic', paddingLeft: 15, backgroundColor:'#FFFFFF', elevation: 5}}
        placeholder= "Password"
        placeholderTextColor='#7D7B92'
        secureTextEntry= {true}
        onChangeText={text => setPassword(text)}
        value={password}
        />
        {passwordError.length > 0 &&
          <Text style={{ fontFamily: 'NotoSansTC-Medium-Alphabetic', color:'#FF3B30', fontSize: 12, paddingLeft: 5, paddingTop: 8}}>{passwordError}</Text>
        }
      </View>
      <View style={{width: 320, alignSelf:'center', marginTop: 440, position: 'absolute', zIndex: 1}}>
        <TouchableOpacity onPress={()=> {
          handleSubmit()
          if(email&&password){
            auth()
            .signInWithEmailAndPassword(email, password)
            .then(() => {
            navigation.navigate('goHome')
            setEmailPasswordErrorValidLogin("")
            })
            .catch((error) => {
              if (error.code === 'auth/invalid-email' || error.code === 'auth/wrong-password') {
                setEmailPasswordErrorValidLogin("Email atau password yang anda masukkan salah")
              }            
            })
          }
        }} 
          style={{backgroundColor: '#33D1C1', paddingVertical: 8, borderRadius: 10, elevation: 5}}>
          <Text style={{fontSize: 14, fontFamily: 'NotoSansTC-Bold-Alphabetic', color: 'white', textAlign: 'center'}}>LOGIN</Text>
        </TouchableOpacity>
      </View>
      <View style={{paddingTop: 5, paddingLeft: 33}}>
      {emailPasswordValidLogin &&
          <Text style={{ fontFamily: 'NotoSansTC-Medium-Alphabetic', color:'#FF3B30', fontSize: 12, paddingLeft: 5, paddingTop: 8}}>{emailPasswordErrorValidLogin}</Text>
        }
      </View>
      <View style={{flexDirection: 'row', justifyContent: 'center', paddingTop: 170}}>
        <Text style={{ fontFamily: 'NotoSansTC-Medium-Alphabetic', color:'#757575', fontSize: 12, textAlign: 'center'}}>Tidak punya akun?</Text>
        <TouchableOpacity onPress={()=> {
          navigation.navigate('Register')
          }}>
          <Text style={{ fontFamily: 'NotoSansTC-Medium-Alphabetic', color:'#2295FF', fontSize: 12, textAlign: 'center'}}> Buat akun</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
function Register({ navigation }) {
  const [username, setUsername] = React.useState()
  const [email, setEmail] = React.useState()
  const [alamat, setAlamat] = React.useState()
  const [noHP, setNoHP] = React.useState()
  const [password, setPassword] = React.useState()


  //database()
    //.ref('/users')
    //.child('alvin-anandra-brilliandy')
    //.update({
    //Password: password,
    //}).then(data => {  
      

  function pushDataLogin(){
      auth()
      .createUserWithEmailAndPassword(email, password)
      .then(() => {
        var user = auth().currentUser;
        database()
        .ref('users')
        .child(user.uid)
        .set({
        username : username,
        email: email,
        alamat: alamat,
        noHP: noHP,
        password: password,
        TMPoint: 0,
        sampahPlastik: 0,
        sampahKaca: 0,
        sampahKertas: 0,
        totalTMPoint:0
       })
      console.log('User account created & signed in!');
    })
    .catch(error => {
      if (error.code === 'auth/email-already-in-use') {
        console.log('That email address is already in use!');
      }

      if (error.code === 'auth/invalid-email') {
        console.log('That email address is invalid!');
      }

      console.error(error);
        });

  }
  
  return (
    <View  style={{backgroundColor : '#E9FFFD', flex: 1}}> 
      <View style={{paddingTop: 40}}>
        <Text style={{ fontFamily: 'ABeeZee-Regular', color:'#7C7C7C', fontSize: 16, textAlign: 'center'}}>Buat akun anda</Text>
      </View>
      <View style={{width: 320, paddingTop: 40, alignSelf:'center'}}>
        <TextInput style={{borderRadius: 6, fontSize: 14, fontFamily: 'NotoSansTC-Medium-Alphabetic', paddingLeft: 15, backgroundColor:'#FFFFFF', elevation: 5}}
        placeholder= "Usarname"
        placeholderTextColor='#7D7B92'
        onChangeText={text => setUsername(text)}
        value={username}
        />
      </View>
      <View style={{width: 320, alignSelf:'center', paddingTop: 16}}>
        <TextInput style={{borderRadius: 6, fontSize: 14, fontFamily: 'NotoSansTC-Medium-Alphabetic', paddingLeft: 15, backgroundColor:'#FFFFFF', elevation: 5}}
        placeholder= "Email"
        placeholderTextColor='#7D7B92'
        onChangeText={text => setEmail(text)}
        value={email}
        />
      </View>
      <View style={{width: 320, alignSelf:'center', paddingTop: 16}}>
        <TextInput style={{borderRadius: 6, fontSize: 14, fontFamily: 'NotoSansTC-Medium-Alphabetic', paddingLeft: 15, backgroundColor:'#FFFFFF', elevation: 5}}
        placeholder= "Alamat"
        placeholderTextColor='#7D7B92'
        onChangeText={text => setAlamat(text)}
        value={alamat}
        />
      </View>
      <View style={{width: 320, alignSelf:'center', paddingTop: 16}}>
        <TextInput style={{borderRadius: 6, fontSize: 14, fontFamily: 'NotoSansTC-Medium-Alphabetic', paddingLeft: 15, backgroundColor:'#FFFFFF', elevation: 5}}
        placeholder= "Nomor Ponsel"
        placeholderTextColor='#7D7B92'
        onChangeText={text => setNoHP(text)}
        value={noHP}
        />
      </View>
      <View style={{width: 320, alignSelf:'center', paddingTop: 16}}>
        <TextInput style={{borderRadius: 6, fontSize: 14, fontFamily: 'NotoSansTC-Medium-Alphabetic', paddingLeft: 15, backgroundColor:'#FFFFFF', elevation: 5}}
        placeholder= "Password"
        placeholderTextColor='#7D7B92'
        secureTextEntry= {true}
        onChangeText={text => setPassword(text)}
        value={password}
        />
      </View>
      <View style={{alignSelf: 'center', paddingTop: 35}}>
        <TouchableOpacity style={{backgroundColor: '#33D1C1', paddingVertical: 8, borderRadius: 10, width: 320, elevation: 10}} 
        onPress={()=> {
          pushDataLogin()
          navigation.navigate('Register Berhasil')
            }}
          >
          <Text style={{fontSize: 14, fontFamily: 'NotoSansTC-Bold-Alphabetic', color: 'white', textAlign: 'center'}}>Register</Text>
        </TouchableOpacity>
      </View>
      <View style={{paddingLeft: 35, paddingTop: 35}}>
        <Text style={{ fontFamily: 'ABeeZee-Regular', color:'#7C7C7C', fontSize: 13}}>Dengan mendaftar, Anda menyetujui </Text>
        <View style={{position: 'absolute', paddingLeft: 270, paddingTop: 35}}>
          <Text style={{ fontFamily: 'ABeeZee-Regular', color:'#2295FF', fontSize: 13}}>Persyaratan</Text>
        </View>
        <Text style={{ fontFamily: 'ABeeZee-Regular', color:'#2295FF', fontSize: 13}}>Layanan kami</Text>
        <View style={{position: 'absolute', paddingLeft: 130, paddingTop: 50}}>
          <Text style={{ fontFamily: 'ABeeZee-Regular', color:'#7C7C7C', fontSize: 13}}>dan telah membaca dan mengakui </Text>
        </View>
        <Text style={{ fontFamily: 'ABeeZee-Regular', color:'#2295FF', fontSize: 13, paddingLeft: 80}}>Pernyataan Privasi kami</Text>      
      </View>
      <View style={{flexDirection: 'row', justifyContent: 'center', paddingTop: 80}}>
        <Text style={{ fontFamily: 'ABeeZee-Regular', color:'#7C7C7C', fontSize: 14}}>Sudah punya akun? </Text>
        <TouchableOpacity onPress={()=> {
            navigation.navigate('Login')
            }}>
          <Text style={{ fontFamily: 'ABeeZee-Regular', color:'#2295FF', fontSize: 14}}>Masuk</Text> 
        </TouchableOpacity>
      </View>
    </View>
  );
}

function RegisterBerhasil({ navigation }) {
  return (
    <View style={{flex: 1, backgroundColor : '#E9FFFD', alignItems: 'center'}}>
      <View style={{marginBottom: 20, paddingTop: 160}}>
        <Image source={require('./assets/logo/berhasil.png')}/>
      </View>
      <View style={{}}>
        <Text style={{fontSize: 24, color: '#424242', textAlign: 'center', fontFamily: 'ABeeZee-Regular'}}>Pendaftaran Berhasil</Text>
      </View>
      <View style={{paddingTop: 5}}>
        <Text style={{fontSize: 16, color: '#7C7C7C', textAlign: 'center', fontFamily: 'ABeeZee-Regular'}}>Akun berhasil dibuat silahkan masuk</Text>
      </View>
      <View style={{alignSelf: 'center', paddingTop: 105}}>
        <TouchableOpacity style={{backgroundColor: '#33D1C1', paddingVertical: 8, borderRadius: 10, width: 320, elevation: 10}} 
        onPress={()=> {
          navigation.navigate('Login')
            }}
          >
          <Text style={{fontSize: 14, fontFamily: 'NotoSansTC-Bold-Alphabetic', color: 'white', textAlign: 'center'}}>LOGIN</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

function HomeTabScreen() {
  return (
    <Tab.Navigator barStyle={{backgroundColor: '#B7E1DA'}}>
      <Tab.Screen 
      name="Home" 
      component={HomeScreen} 
      options={{
        tabBarIcon: ({focused}) => (
          <Icon name="home" color={focused ? "#33D1C1" : "#524848"} size={26}/>
        ),
      }}
      />
      <Tab.Screen 
      name="Feed" 
      component={Feed} 
      options={{
        tabBarIcon: ({focused}) => (
          <Icon name="list-alt" color={focused ? "#33D1C1" : "#524848"} size={26} />
        ),
      }}
      />
      <Tab.Screen 
      name="Statistic" 
      component={Statistic} 
      options={{
        tabBarIcon: ({focused}) => (
          <Icon name="bar-chart" color={focused ? "#33D1C1" : "#524848"} size={26} />
        ),
      }}
      />
      <Tab.Screen 
      name="Account" 
      component={Account} 
      options={{
        tabBarIcon: ({focused}) => (
          <Icon name="user" color={focused ? "#33D1C1" : "#524848"} size={26} />
        ),
      }}
      />
    </Tab.Navigator>
  );
}

function HomeScreen({ navigation }) {
  
  const [namaLengkap, setNamaLengkap] = React.useState()
  const [TMPoint, setTMPoint] = React.useState()
  const [data, setData] = React.useState()

  React.useEffect( () => {
    var user = auth().currentUser;
    database()
    .ref('users')
    .child(user.uid)
    .on('value', snapshot => {
      let data=snapshot.val()
      setData(snapshot.val())
      setNamaLengkap(data.username)
      setTMPoint(data.TMPoint)
    });
  }, [])

  
  return (
    <View style={{backgroundColor : '#E9FFFD', flex: 1}}>
      <View style={{ flexDirection: 'row', borderBottomWidth: 1, borderBottomColor: 'rgba(166, 164, 164, 0.3)'}}>
        <View style={{flex: 1, alignSelf:'flex-start', paddingTop: 20, paddingLeft: 25}}>
          <TouchableOpacity onPress={()=> {
            navigation.navigate('Information')
            }}>
            <Image source={require('./assets/icon/info.png')}/>
          </TouchableOpacity>
        </View>
        <View style={{flex: 2}}>
          <Text style={{ fontFamily: 'Oswald-SemiBold', color:'#33D1C1', fontSize: 36}}>TrashMon</Text>
        </View>
        <TouchableOpacity onPress={()=> {
            navigation.navigate('Notification')
            }}>
          <View style={{ paddingRight: 25, paddingTop: 20}}>
            <Image source={require('./assets/icon/notification.png')}/>
          </View>
        </TouchableOpacity>
      </View>
      <View style={{paddingHorizontal: 25}}>
        <View style={{paddingTop: 20, flexDirection: 'row', justifyContent: 'space-between'}}>
          <Text style={{ fontFamily: 'NotoSansTC-Bold-Alphabetic', color:'#554D4D', fontSize: 26}}>Hai, {namaLengkap}</Text>
          <Image source={require('./assets/icon/user-profile.png')}/>
        </View>
        <View style={{paddingTop: 55, position: 'absolute', paddingLeft: 25}}>
          <Text style={{ fontFamily: 'ABeeZee-Regular', color:'#7C7C7C', fontSize: 16}}>Mari peduli lingkungan dan tukarkan sampahmu !</Text>
        </View>
        <View style={{marginTop: 25, backgroundColor: '#DBF5F3', borderRadius: 4, borderWidth: 1, borderColor: '#A6A4A4'}}>
          <View style={{justifyContent:'space-between', flexDirection:'row', borderBottomWidth: 1, borderBottomColor: '#A6A4A4', paddingHorizontal: 20, marginTop: 10, paddingBottom: 10, marginBottom: 10}}>
            <Text style={{color:'#554D4D', fontFamily: 'NotoSansTC-Bold-Alphabetic', fontSize: 26}}>TM Points</Text>
            <Text style={{color:'#33D1C1', fontFamily: 'NotoSansTC-Bold-Alphabetic', fontSize: 26}}>{TMPoint}</Text>
          </View>
          <View style={{flexDirection:'row', justifyContent:'space-around'}}>
            <TouchableOpacity onPress={()=> {
            navigation.navigate('Sell')
            }}>
              <Image source={require('./assets/icon/sell.png')}/>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=> {
            navigation.navigate('Share')
            }}>
              <Image source={require('./assets/icon/share.png')}/>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=> {
            navigation.navigate('Redeem')
            }}>
              <Image source={require('./assets/icon/redeem.png')}/>
            </TouchableOpacity>
          </View>
          <View style={{flexDirection: 'row', justifyContent:'space-between', alignItems: 'center', marginBottom: 10}}>
              <Text style={{marginLeft: 40, fontFamily: 'ABeeZee-Regular', fontSize: 16}}>Sell</Text>
              <Text style={{marginLeft: 20, fontFamily: 'ABeeZee-Regular', fontSize: 16}}>Share</Text>
              <Text style={{marginRight: 25, fontFamily: 'ABeeZee-Regular', fontSize: 16}}>Redeem</Text>
          </View>
        </View>
        <View style={{paddingTop: 30}}>
          <Text style={{fontFamily: 'NotoSansTC-Bold-Alphabetic', color:'#554D4D', fontSize: 26}}>Rekomendasi</Text>
        </View>
        <View style={{marginTop: 15, backgroundColor: '#FFFFFF'}}>
          <Image style={{height: 212, width: 345}} source={require('./assets/dummy/pegadaian.png')}/>
          <View style={{width: 345, marginTop: 165, position: 'absolute', backgroundColor: '#FFFFFF', elevation: 5, borderBottomRightRadius: 6, borderBottomLeftRadius: 6}}>
            <Text style={{color:'#524848', fontFamily: 'NotoSansTC-Medium-Alphabetic', fontSize: 13, textAlign: 'center', paddingTop: 10}}>Tukarkan Poinmu menjadi tabungan emas senilai 15.000</Text>
            <View style={{flexDirection: 'row', paddingTop: 5, paddingLeft: 5, marginBottom: 12}}>
              <View style={{paddingTop: 10, flexDirection: 'row'}}>
                <Text style={{color:'#33D1C1', fontFamily: 'NotoSansTC-Bold-Alphabetic', fontSize: 16, textAlign: 'center'}}>15000 </Text>
                <Text style={{color:'#766F6F', fontFamily: 'NotoSansTC-Bold-Alphabetic', fontSize: 16, textAlign: 'center'}}>Points</Text>
              </View>
            
              <TouchableOpacity onPress={()=> {
                navigation.navigate('Redeem Pegadaian')
                }} 
               style={{backgroundColor: '#33D1C1', paddingHorizontal: 35, paddingVertical: 8, borderRadius: 10, marginLeft: 120, elevation: 5}}>
                <Text style={{fontSize: 13, fontWeight: 'bold', color: 'white', textAlign: 'center'}}>Tukar</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}

function Sell({ navigation }) {
  return (
    <View style={{backgroundColor : '#E9FFFD', flex: 1}}>
      <TouchableOpacity onPress={()=> {
        navigation.navigate('Drop Off')
        }}>
        <View style={{ flexDirection: 'row', paddingTop: 15, backgroundColor: '#BCE3E0', marginHorizontal: 25, borderRadius: 15, marginTop: 25, paddingBottom: 80}}>
            <View style={{position: 'absolute', paddingTop: 10, paddingLeft: 10}}>
              <Image source={require('./assets/icon/drop-off.png')}/>
            </View>
            <View style={{paddingLeft: 70, position:'absolute'}}>
              <Text style={{fontFamily: 'NotoSansTC-Bold-Alphabetic', fontSize: 16, marginLeft: 10, marginTop: 3, paddingTop: 5}}>Drop Off</Text>
              <Text style={{fontFamily: 'ABeeZee-Regular', fontSize: 16, marginLeft: 10, marginTop: 3}}>Antar sendiri sampahmu ke bank{"\n"}sampah terdekat. Dan dapatkan{"\n"}poin lebih banyak.</Text>
            </View>
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={()=> {
        navigation.navigate('Pick Up')
        }}>
        <View style={{ flexDirection: 'row', paddingTop: 15, backgroundColor: '#BCE3E0', marginHorizontal: 25, borderRadius: 15, marginTop: 20, paddingBottom: 100}}>
            <View style={{position: 'absolute', paddingTop: 10, paddingLeft: 10}}>
              <Image source={require('./assets/icon/pick-up.png')}/>
            </View>
            <View style={{paddingLeft: 70, position:'absolute'}}>
              <Text style={{fontFamily: 'NotoSansTC-Bold-Alphabetic', fontSize: 16, marginLeft: 10, marginTop: 3, paddingTop: 5}}>Pick Up</Text>
              <Text style={{fontFamily: 'ABeeZee-Regular', fontSize: 16, marginLeft: 10, marginTop: 3}}>Sampahmu akan dijemput{"\n"}kerumah. Kamu bisa bersantai{"\n"}sembari menunggu agen sampah{"\n"}kami.</Text>
            </View>
        </View>
      </TouchableOpacity>
    </View>
  );
}

function Share({ navigation }) {
  const [namaLengkap, setNamaLengkap] = React.useState()
  const [email, setEmail] = React.useState()	
  const [TMPoint, setTMPoint] = React.useState()
  const [sliderTMPoint, setSliderTMPoint] = React.useState()
  const [data, setData] = React.useState()

  React.useEffect( () => {
    var user = auth().currentUser;
    database()
    .ref('users')
    .child(user.uid)
    .once('value')
    .then(snapshot => {
      let data=snapshot.val()
      setData(snapshot.val())
      setTMPoint(data.TMPoint)
      setSliderTMPoint(data.TMPoint)
      setNamaLengkap(data.username)
    });
  }, [])
  
  return (
    <View style={{backgroundColor : '#E9FFFD', flex: 1}}>
      <View style={{ flexDirection: 'row', borderBottomWidth: 1, borderBottomColor: 'rgba(166, 164, 164, 0.3)', backgroundColor: '#7C7C7C', opacity: 0.5}}>
        <View style={{flex: 1, alignSelf:'flex-start', paddingTop: 20, paddingLeft: 25}}>
          <Image source={require('./assets/icon/info.png')}/>
        </View>
        <View style={{flex: 2}}>
          <Text style={{ fontFamily: 'Oswald-SemiBold', color:'#33D1C1', fontSize: 36}}>TrashMon</Text>
        </View>
        <View style={{ paddingRight: 25, paddingTop: 20}}>
          <Image source={require('./assets/icon/notification.png')}/>
        </View>
      </View>
      <View style={{paddingHorizontal: 25, backgroundColor: '#7C7C7C', opacity: 0.5}}>
        <View style={{paddingTop: 20, flexDirection: 'row', justifyContent: 'space-between'}}>
          <Text style={{ fontFamily: 'NotoSansTC-Bold-Alphabetic', color:'#554D4D', fontSize: 26}}>Hai, {namaLengkap}</Text>
          <Image source={require('./assets/icon/user-profile.png')}/>
        </View>
        <View style={{paddingTop: 55, position: 'absolute', paddingLeft: 25}}>
          <Text style={{ fontFamily: 'ABeeZee-Regular', color:'#7C7C7C', fontSize: 16}}>Mari peduli lingkungan dan tukarkan sampahmu !</Text>
        </View>
        <View style={{marginTop: 25, backgroundColor: '#DBF5F3', borderRadius: 4, borderWidth: 1, borderColor: '#A6A4A4'}}>
          <View style={{justifyContent:'space-between', flexDirection:'row', borderBottomWidth: 1, borderBottomColor: '#A6A4A4', paddingHorizontal: 20, marginTop: 10, paddingBottom: 10, marginBottom: 10}}>
            <Text style={{color:'#554D4D', fontFamily: 'NotoSansTC-Bold-Alphabetic', fontSize: 26}}>TM Points</Text>
            <Text style={{color:'#33D1C1', fontFamily: 'NotoSansTC-Bold-Alphabetic', fontSize: 26}}>{TMPoint}</Text>
          </View>
          <View style={{flexDirection:'row', justifyContent:'space-around'}}>
              <Image source={require('./assets/icon/sell.png')}/>
              <Image source={require('./assets/icon/share.png')}/>
              <Image source={require('./assets/icon/sell.png')}/>
          </View>
          <View style={{flexDirection: 'row', justifyContent:'space-between', alignItems: 'center', marginBottom: 10}}>
              <Text style={{marginLeft: 40, fontFamily: 'ABeeZee-Regular', fontSize: 16}}>Sell</Text>
              <Text style={{marginLeft: 20, fontFamily: 'ABeeZee-Regular', fontSize: 16}}>Share</Text>
              <Text style={{marginRight: 25, fontFamily: 'ABeeZee-Regular', fontSize: 16}}>Redeem</Text>
          </View>
        </View>
        <View style={{marginTop: 15, backgroundColor: '#FFFFFF'}}>
          <Image style={{height: 212, width: 345}} source={require('./assets/dummy/pegadaian.png')}/>
          <View style={{width: 345, marginTop: 165, position: 'absolute', backgroundColor: '#FFFFFF', elevation: 5, borderBottomRightRadius: 6, borderBottomLeftRadius: 6}}>
            <Text style={{color:'#524848', fontFamily: 'NotoSansTC-Medium-Alphabetic', fontSize: 13, textAlign: 'center', paddingTop: 10}}>Tukarkan Poinmu menjadi tabungan emas senilai 15.000</Text>
            <View style={{flexDirection: 'row', paddingTop: 5, paddingLeft: 5, marginBottom: 12}}>
              <View style={{paddingTop: 10, flexDirection: 'row'}}>
                <Text style={{color:'#33D1C1', fontFamily: 'NotoSansTC-Bold-Alphabetic', fontSize: 16, textAlign: 'center'}}>15000 </Text>
                <Text style={{color:'#766F6F', fontFamily: 'NotoSansTC-Bold-Alphabetic', fontSize: 16, textAlign: 'center'}}>Points</Text>
              </View>
              <TouchableOpacity style={{backgroundColor: '#33D1C1', paddingHorizontal: 35, paddingVertical: 8, borderRadius: 10, marginLeft: 120, elevation: 5}} onPress={()=> {
            navigation.navigate('Redeem Pegadaian')
            }}>
                <Text style={{fontSize: 13, fontWeight: 'bold', color: 'white', textAlign: 'center'}}>Tukar</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
      <View style={{backgroundColor: 'white', position: 'absolute', marginTop: 275, paddingHorizontal: 25, borderRadius: 10}}>
        <View style={{paddingTop: 30}}>
          <Text style={{fontFamily: 'ABeeZee-Regular', fontSize: 24, color: '#424242'}}>Kirim points ke teman kamu</Text>
        </View>
        <View style={{paddingTop: 10}}>
          <Text style={{fontFamily: 'ABeeZee-Regular', fontSize: 14, color: '#7C7C7C'}}>Sekarang kamu bisa membagikan points yang kamu miliki ke teman kamu. Tunggu apalagi, coba sekarang !</Text>
        </View>
        <View style={{ backgroundColor: 'white', elevation: 5, marginTop: 15, paddingTop: 15, borderRadius: 10}}>
          <View style={{paddingLeft: 10}}>
            <Text style={{fontFamily: 'ABeeZee-Regular', fontSize: 14, color: '#7C7C7C'}}>Jumlah Points</Text>
          </View>
          <View style={{paddingTop: 10}}>
            <Text style={{color:'#001311', fontFamily: 'NotoSansTC-Bold-Alphabetic', fontSize: 26, textAlign: 'center'}}>{sliderTMPoint}</Text>
          </View>
          <View>
            <Slider
              style={{width: 200, height: 40}}
              minimumValue={0}
              maximumValue={TMPoint}
              minimumTrackTintColor="#33D1C1"
              maximumTrackTintColor="#666666"
              step={1000}
              value={TMPoint}
              onValueChange={
                (sliderValue) => setSliderTMPoint(sliderValue)
              }
              style={{width: 340, height: 40}}
            />
          </View>
          <View style={{paddingRight: 15}}>
            <Text style={{color:'#001311', fontFamily: 'NotoSansTC-Bold-Alphabetic', fontSize: 16, textAlign: 'right'}}>{TMPoint}</Text>
          </View>
          <View style={{paddingHorizontal: 15, marginBottom: 25, paddingTop: 20}}>
            <TextInput style={{borderWidth: 1, borderRadius: 6, borderColor: 'rgba(0, 0, 0, 0.31)', fontSize: 14, fontFamily: 'NotoSansTC-Medium-Alphabetic', paddingLeft: 15}}
              placeholder= "Masukkan alamat email penerima"
              placeholderTextColor='#7C7C7C'
              onChangeText={text => setEmail(text)}
              value={email}
              />
          </View>
        </View>
        <View style={{paddingTop: 25, marginBottom: 50}}>
          <TouchableOpacity style={{backgroundColor: '#33D1C1', paddingHorizontal: 35, paddingVertical: 8, borderRadius: 10, elevation: 5}} onPress={()=> {
            if(email){
              navigation.navigate('Share Berhasil')
              let TMPointUpdate = TMPoint
              TMPointUpdate = TMPointUpdate-sliderTMPoint
              var user = auth().currentUser;
              database()
              .ref('users')
              .child(user.uid)
              .update({
              TMPoint: TMPointUpdate,
              })
            }else{
              alert("Alamat email kosong, mohon isi alamat email")
            }
            }}>
            <Text style={{fontSize: 14, color: 'white', textAlign: 'center', fontFamily: 'NotoSansTC-Regular-Alphabetic'}}>Kirim Sekarang</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

function Redeem({ navigation }) {
  const [TMPoint, setTMPoint] = React.useState()
  const [data, setData] = React.useState()

  React.useEffect( () => {
    var user = auth().currentUser;
    database()
    .ref('users')
    .child(user.uid)
    .on('value', snapshot => {
      let data=snapshot.val()
      setData(snapshot.val())
      setTMPoint(data.TMPoint)
    });
  }, [])
  return (
    <ScrollView style={{backgroundColor : '#E9FFFD', flex: 1}}>
      <View style={{paddingHorizontal: 25}}>
        <View style={{justifyContent:'space-between', flexDirection:'row', paddingHorizontal: 20, paddingTop: 10, paddingBottom: 10, marginBottom: 10, backgroundColor: '#FDF9F9', marginTop: 25, borderRadius: 6, elevation: 5}}>
          <Text style={{color:'#554D4D', fontFamily: 'NotoSansTC-Bold-Alphabetic', fontSize: 26}}>TM Points</Text>
          <Text style={{color:'#33D1C1', fontFamily: 'NotoSansTC-Bold-Alphabetic', fontSize: 26}}>{TMPoint}</Text>
        </View>
        <View>
          <View style={{marginTop: 15, backgroundColor: '#FFFFFF', marginBottom: 30}}>
            <Image style={{height: 212, width: 345}} source={require('./assets/dummy/pegadaian.png')}/>
            <View style={{width: 345, marginTop: 165, position: 'absolute', backgroundColor: '#FFFFFF', elevation: 5, borderBottomRightRadius: 6, borderBottomLeftRadius: 6}}>
              <Text style={{color:'#524848', fontFamily: 'NotoSansTC-Medium-Alphabetic', fontSize: 13, textAlign: 'center', paddingTop: 10}}>Tukarkan Poinmu menjadi tabungan emas senilai 15.000</Text>
              <View style={{flexDirection: 'row', paddingTop: 5, paddingLeft: 5, marginBottom: 12}}>
                <View style={{paddingTop: 10, flexDirection: 'row'}}>
                  <Text style={{color:'#33D1C1', fontFamily: 'NotoSansTC-Bold-Alphabetic', fontSize: 16, textAlign: 'center'}}>15000 </Text>
                  <Text style={{color:'#766F6F', fontFamily: 'NotoSansTC-Bold-Alphabetic', fontSize: 16, textAlign: 'center'}}>Points</Text>
                </View>
                <TouchableOpacity onPress={()=> {
                  navigation.navigate('Redeem Pegadaian')
                  }} 
                style={{backgroundColor: '#33D1C1', paddingHorizontal: 35, paddingVertical: 8, borderRadius: 10, marginLeft: 120, elevation: 5}}>
                  <Text style={{fontSize: 13, fontWeight: 'bold', color: 'white', textAlign: 'center'}}>Tukar</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
          <View style={{marginTop: 15, backgroundColor: '#FFFFFF', marginBottom: 30}}>
            <Image style={{height: 212, width: 345}} source={require('./assets/dummy/shopee-pay.png')}/>
            <View style={{width: 345, marginTop: 165, position: 'absolute', backgroundColor: '#FFFFFF', elevation: 5, borderBottomRightRadius: 6, borderBottomLeftRadius: 6}}>
              <Text style={{color:'#524848', fontFamily: 'NotoSansTC-Medium-Alphabetic', fontSize: 13, textAlign: 'left', paddingTop: 10, paddingLeft: 5}}>Tukarkan Poinmu dengan saldo ShopeePay senilai 10.000</Text>
              <View style={{flexDirection: 'row', paddingTop: 5, paddingLeft: 5, marginBottom: 12}}>
                <View style={{paddingTop: 10, flexDirection: 'row'}}>
                  <Text style={{color:'#33D1C1', fontFamily: 'NotoSansTC-Bold-Alphabetic', fontSize: 16, textAlign: 'center'}}>10000 </Text>
                  <Text style={{color:'#766F6F', fontFamily: 'NotoSansTC-Bold-Alphabetic', fontSize: 16, textAlign: 'center'}}>Points</Text>
                </View>
                <TouchableOpacity onPress={()=> {
                  navigation.navigate('Redeem Shopee Pay')
                  }} 
                style={{backgroundColor: '#33D1C1', paddingHorizontal: 35, paddingVertical: 8, borderRadius: 10, marginLeft: 120, elevation: 5}}>
                  <Text style={{fontSize: 13, fontWeight: 'bold', color: 'white', textAlign: 'center'}}>Tukar</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
          <View style={{marginTop: 15, backgroundColor: '#FFFFFF', marginBottom: 30}}>
            <Image style={{height: 212, width: 345}} source={require('./assets/dummy/ovo.png')}/>
            <View style={{width: 345, marginTop: 165, position: 'absolute', backgroundColor: '#FFFFFF', elevation: 5, borderBottomRightRadius: 6, borderBottomLeftRadius: 6}}>
              <Text style={{color:'#524848', fontFamily: 'NotoSansTC-Medium-Alphabetic', fontSize: 13, textAlign: 'left', paddingTop: 10, paddingLeft: 5}}>Tukarkan Poinmu dengan saldo OVO senilai 10.000</Text>
              <View style={{flexDirection: 'row', paddingTop: 5, paddingLeft: 5, marginBottom: 12}}>
                <View style={{paddingTop: 10, flexDirection: 'row'}}>
                  <Text style={{color:'#33D1C1', fontFamily: 'NotoSansTC-Bold-Alphabetic', fontSize: 16, textAlign: 'center'}}>10000 </Text>
                  <Text style={{color:'#766F6F', fontFamily: 'NotoSansTC-Bold-Alphabetic', fontSize: 16, textAlign: 'center'}}>Points</Text>
                </View>
                <TouchableOpacity onPress={()=> {
                  navigation.navigate('Redeem OVO')
                  }} 
                style={{backgroundColor: '#33D1C1', paddingHorizontal: 35, paddingVertical: 8, borderRadius: 10, marginLeft: 120, elevation: 5}}>
                  <Text style={{fontSize: 13, fontWeight: 'bold', color: 'white', textAlign: 'center'}}>Tukar</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
          <View style={{marginTop: 15, backgroundColor: '#FFFFFF', marginBottom: 30}}>
            <Image style={{height: 212, width: 345}} source={require('./assets/dummy/go-pay.png')}/>
            <View style={{width: 345, marginTop: 165, position: 'absolute', backgroundColor: '#FFFFFF', elevation: 5, borderBottomRightRadius: 6, borderBottomLeftRadius: 6}}>
              <Text style={{color:'#524848', fontFamily: 'NotoSansTC-Medium-Alphabetic', fontSize: 13, textAlign: 'left', paddingTop: 10, paddingLeft: 5}}>Tukarkan Poinmu dengan saldo GoPay senilai 10.000</Text>
              <View style={{flexDirection: 'row', paddingTop: 5, paddingLeft: 5, marginBottom: 12}}>
                <View style={{paddingTop: 10, flexDirection: 'row'}}>
                  <Text style={{color:'#33D1C1', fontFamily: 'NotoSansTC-Bold-Alphabetic', fontSize: 16, textAlign: 'center'}}>10000 </Text>
                  <Text style={{color:'#766F6F', fontFamily: 'NotoSansTC-Bold-Alphabetic', fontSize: 16, textAlign: 'center'}}>Points</Text>
                </View>
                <TouchableOpacity onPress={()=> {
                  navigation.navigate('Redeem Go Pay')
                  }} 
                style={{backgroundColor: '#33D1C1', paddingHorizontal: 35, paddingVertical: 8, borderRadius: 10, marginLeft: 120, elevation: 5}}>
                  <Text style={{fontSize: 13, fontWeight: 'bold', color: 'white', textAlign: 'center'}}>Tukar</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
          <View style={{marginTop: 15, backgroundColor: '#FFFFFF', marginBottom: 90}}>
            <Image style={{height: 175, width: 345}} source={require('./assets/dummy/dompet-dhuafa.png')}/>
            <View style={{width: 345, marginTop: 165, position: 'absolute', backgroundColor: '#FFFFFF', elevation: 5, borderBottomRightRadius: 6, borderBottomLeftRadius: 6}}>
              <Text style={{color:'#524848', fontFamily: 'NotoSansTC-Medium-Alphabetic', fontSize: 13, textAlign: 'left', paddingTop: 10, paddingLeft: 5}}>Tukarkan Poinmu ke Dompet Dhuafa</Text>
              <View style={{flexDirection: 'row', paddingTop: 5, paddingLeft: 5, marginBottom: 12}}>
                <View style={{paddingTop: 10, flexDirection: 'row'}}>
                  <Text style={{color:'#33D1C1', fontFamily: 'NotoSansTC-Bold-Alphabetic', fontSize: 16, textAlign: 'center'}}>10000 </Text>
                  <Text style={{color:'#766F6F', fontFamily: 'NotoSansTC-Bold-Alphabetic', fontSize: 16, textAlign: 'center'}}>Points</Text>
                </View>
                <TouchableOpacity onPress={()=> {
                  navigation.navigate('Redeem Dompet Dhuafa')
                  }} 
                style={{backgroundColor: '#33D1C1', paddingHorizontal: 35, paddingVertical: 8, borderRadius: 10, marginLeft: 120, elevation: 5}}>
                  <Text style={{fontSize: 13, fontWeight: 'bold', color: 'white', textAlign: 'center'}}>Tukar</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

function RedeemPegadaian({ navigation }) {
  const [TMPoint, setTMPoint] = React.useState()
  const [data, setData] = React.useState()

  React.useEffect( () => {
    var user = auth().currentUser;
    database()
    .ref('users')
    .child(user.uid)
    .on('value', snapshot => {
      let data=snapshot.val()
      setData(snapshot.val())
      setTMPoint(data.TMPoint)
    });
  }, [])

  function hitungNilaiSampah(){
    var TMPointSekarang = TMPoint

    TMPointSekarang = TMPointSekarang - 15000

    var user = auth().currentUser;
      database()
      .ref('users')
      .child(user.uid)
      .update({
        TMPoint: TMPointSekarang
      })
  }
  return (
    <View style={{backgroundColor : '#E9FFFD', flex: 1}}>
      <View style={{paddingHorizontal: 25}}>
        <View style={{flexDirection: 'row', paddingTop: 35, justifyContent: 'space-between'}}>
          <View style={{backgroundColor: 'rgba(255, 163, 24, 0.48)', paddingVertical: 15, paddingHorizontal: 25, borderRadius: 6, borderWidth: 1, borderColor: 'rgba(0, 0, 0, 0.1)'}}>
            <Text style={{color: '#666666', fontFamily: 'NotoSansTC-Medium-Alphabetic', opacity: 0.72, fontSize: 11}}>Harga beli saat ini</Text>
            <View style={{flexDirection: 'row'}}>
              <Text style={{color: '#FFB800', fontFamily: 'NotoSansTC-Bold-Alphabetic', fontSize: 14}}>Rp.8.730</Text>
              <Text style={{color: '#666666', fontFamily: 'NotoSansTC-Bold-Alphabetic', fontSize: 11}}>/0.01 gram</Text>
            </View>
          </View>
          <View style={{backgroundColor: 'rgba(255, 163, 24, 0.48)', paddingVertical: 15, paddingHorizontal: 25, borderRadius: 6, borderWidth: 1, borderColor: 'rgba(0, 0, 0, 0.1)'}}>
            <Text style={{color: '#666666', fontFamily: 'NotoSansTC-Medium-Alphabetic', opacity: 0.72, fontSize: 11}}>Harga jual saat ini</Text>
            <View style={{flexDirection: 'row'}}>
              <Text style={{color: '#FFB800', fontFamily: 'NotoSansTC-Bold-Alphabetic', fontSize: 14}}>Rp.9.000</Text>
              <Text style={{color: '#666666', fontFamily: 'NotoSansTC-Bold-Alphabetic', fontSize: 11}}>/0.01 gram</Text>
            </View>
          </View>
        </View>
        <View style={{paddingTop: 25}}>
          <Text style={{color: '#524848', fontFamily: 'NotoSansTC-Bold-Alphabetic', fontSize: 18}}>Tukarkan poinmu menjadi tabungan emas senilai Rp 15.000</Text>
        </View>
        <View style={{paddingTop: 10}}>
          <Text style={{color: '#666666', fontSize: 13}}>From waste into Gold. Tukar TS Points menjadi Tabungan Emas dari Pegadaian. Dengan Rp 15.000 kamu dapat mengubah sampah menjadi Tabungan Emas Pegadaian mulai dari 0,01 gram emas, Jumlah gram emas mengikuti harga dari hasil konversi senilai RP 15.000.</Text>
        </View>
        <View style={{backgroundColor: '#33D1C1', borderRadius: 6, marginTop: 320}}>
          <View style={{flexDirection: 'row', justifyContent: 'space-between', paddingVertical: 10}}>
            <View style={{paddingLeft: 10}}>
              <Text style={{color: '#FFFFFF', fontFamily: 'NotoSansTC-Bold-Alphabetic', fontSize: 14}}>15.000 TS Points</Text>
              <Text style={{color: '#FFFFFF', fontFamily: 'NotoSansTC-Medium-Alphabetic', fontSize: 11}}>TS Points Kamu : {TMPoint}</Text>
            </View>
            <View style={{paddingTop: 5, paddingRight: 10}}>
              <TouchableOpacity onPress={()=> {
                if(TMPoint>=15000){
                  hitungNilaiSampah()
                  navigation.navigate('Redeem Berhasil')
                }else{
                  alert("Mohon maaf Saldo anda kurang untuk melakukan transaksi ini")
                }
                  }} >
                <Text style={{color: '#FFFFFF', fontFamily: 'NotoSansTC-Bold-Alphabetic', fontSize: 14}}>Tukar Sekarang</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}

function RedeemShopeePay({ navigation }) {
  const [TMPoint, setTMPoint] = React.useState()
  const [data, setData] = React.useState()

  React.useEffect( () => {
    var user = auth().currentUser;
    database()
    .ref('users')
    .child(user.uid)
    .on('value', snapshot => {
      let data=snapshot.val()
      setData(snapshot.val())
      setTMPoint(data.TMPoint)
    });
  }, [])

  function hitungNilaiSampah(){
    var TMPointSekarang = TMPoint

    TMPointSekarang = TMPointSekarang - 10000

    var user = auth().currentUser;
      database()
      .ref('users')
      .child(user.uid)
      .update({
        TMPoint: TMPointSekarang
      })
  }
  return (
    <View style={{backgroundColor : '#E9FFFD', flex: 1}}>
      <View style={{paddingHorizontal: 25}}>
        <View style={{paddingTop: 25}}>
          <Text style={{color: '#524848', fontFamily: 'NotoSansTC-Bold-Alphabetic', fontSize: 18}}>Tukar poin dengan saldo ShopeePay senilai Rp 10.000</Text>
        </View>
        <View style={{paddingTop: 10}}>
          <Text style={{color: '#666666', fontSize: 13}}>Hai kabar gembira nih, buat para pecinta belanja online di Shopee. Sekarang!!! sampahmu bisa ditukar dengan saldo ShopeePay. Ayo segera kumpulkan sampahmu dan tukarkan dengan saldo ShopeePay.</Text>
        </View>
        <View style={{backgroundColor: '#33D1C1', borderRadius: 6, marginTop: 450}}>
          <View style={{flexDirection: 'row', justifyContent: 'space-between', paddingVertical: 10}}>
            <View style={{paddingLeft: 10}}>
              <Text style={{color: '#FFFFFF', fontFamily: 'NotoSansTC-Bold-Alphabetic', fontSize: 14}}>10.000 TS Points</Text>
              <Text style={{color: '#FFFFFF', fontFamily: 'NotoSansTC-Medium-Alphabetic', fontSize: 11}}>TS Points Kamu : {TMPoint}</Text>
            </View>
            <View style={{paddingTop: 5, paddingRight: 10}}>
              <TouchableOpacity onPress={()=> {
                  if(TMPoint>=10000){
                    hitungNilaiSampah()
                    navigation.navigate('Redeem Berhasil')
                  }else{
                    alert("Mohon maaf Saldo anda kurang untuk melakukan transaksi ini")
                  }
                  }}>
                <Text style={{color: '#FFFFFF', fontFamily: 'NotoSansTC-Bold-Alphabetic', fontSize: 14}}>Tukar Sekarang</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}

function RedeemOVO({ navigation }) {
  const [TMPoint, setTMPoint] = React.useState()
  const [data, setData] = React.useState()

  React.useEffect( () => {
    var user = auth().currentUser;
    database()
    .ref('users')
    .child(user.uid)
    .on('value', snapshot => {
      let data=snapshot.val()
      setData(snapshot.val())
      setTMPoint(data.TMPoint)
    });
  }, [])

  function hitungNilaiSampah(){
    var TMPointSekarang = TMPoint

    TMPointSekarang = TMPointSekarang - 10000

    var user = auth().currentUser;
      database()
      .ref('users')
      .child(user.uid)
      .update({
        TMPoint: TMPointSekarang
      })
  }
  return (
    <View style={{backgroundColor : '#E9FFFD', flex: 1}}>
      <View style={{paddingHorizontal: 25}}>
        <View style={{paddingTop: 25}}>
          <Text style={{color: '#524848', fontFamily: 'NotoSansTC-Bold-Alphabetic', fontSize: 18}}>Tukar poin dengan saldo OVO senilai     Rp 10.000</Text>
        </View>
        <View style={{paddingTop: 10}}>
          <Text style={{color: '#666666', fontSize: 13}}>Tukarkan segera TS Poinmu dengan Saldo Ovo senilai Rp 10.000 dan dapatkan berbagai macam promo menarik lainnya.</Text>
        </View>
        <View style={{backgroundColor: '#33D1C1', borderRadius: 6, marginTop: 460}}>
          <View style={{flexDirection: 'row', justifyContent: 'space-between', paddingVertical: 10}}>
            <View style={{paddingLeft: 10}}>
              <Text style={{color: '#FFFFFF', fontFamily: 'NotoSansTC-Bold-Alphabetic', fontSize: 14}}>10.000 TS Points</Text>
              <Text style={{color: '#FFFFFF', fontFamily: 'NotoSansTC-Medium-Alphabetic', fontSize: 11}}>TS Points Kamu : {TMPoint}</Text>
            </View>
            <View style={{paddingTop: 5, paddingRight: 10}}>
              <TouchableOpacity onPress={()=> {
                  if(TMPoint>=10000){
                    hitungNilaiSampah()
                    navigation.navigate('Redeem Berhasil')
                  }else{
                    alert("Mohon maaf Saldo anda kurang untuk melakukan transaksi ini")
                  }
                  }}>
                <Text style={{color: '#FFFFFF', fontFamily: 'NotoSansTC-Bold-Alphabetic', fontSize: 14}}>Tukar Sekarang</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}

function RedeemGoPay({ navigation }) {
  const [TMPoint, setTMPoint] = React.useState()
  const [data, setData] = React.useState()

  React.useEffect( () => {
    var user = auth().currentUser;
    database()
    .ref('users')
    .child(user.uid)
    .on('value', snapshot => {
      let data=snapshot.val()
      setData(snapshot.val())
      setTMPoint(data.TMPoint)
    });
  }, [])

  function hitungNilaiSampah(){
    var TMPointSekarang = TMPoint

    TMPointSekarang = TMPointSekarang - 10000

    var user = auth().currentUser;
      database()
      .ref('users')
      .child(user.uid)
      .update({
        TMPoint: TMPointSekarang
      })
  }
  return (
    <View style={{backgroundColor : '#E9FFFD', flex: 1}}>
      <View style={{paddingHorizontal: 25}}>
        <View style={{paddingTop: 25}}>
          <Text style={{color: '#524848', fontFamily: 'NotoSansTC-Bold-Alphabetic', fontSize: 18}}>Tukar poin dengan saldo GoPay senilai   Rp 10.000</Text>
        </View>
        <View style={{paddingTop: 10}}>
          <Text style={{color: '#666666', fontSize: 13}}>Ada kabar gembira!. Sekarang kamu bisa menukarkan TS Poin kamu dengan saldo Gopay senilai Rp 10.000, Buruan tukarkan TS poin kamu sekarang.</Text>
        </View>
        <View style={{backgroundColor: '#33D1C1', borderRadius: 6, marginTop: 460}}>
          <View style={{flexDirection: 'row', justifyContent: 'space-between', paddingVertical: 10}}>
            <View style={{paddingLeft: 10}}>
              <Text style={{color: '#FFFFFF', fontFamily: 'NotoSansTC-Bold-Alphabetic', fontSize: 14}}>10.000 TS Points</Text>
              <Text style={{color: '#FFFFFF', fontFamily: 'NotoSansTC-Medium-Alphabetic', fontSize: 11}}>TS Points Kamu : {TMPoint}</Text>
            </View>
            <View style={{paddingTop: 5, paddingRight: 10}}>
              <TouchableOpacity onPress={()=> {
                  if(TMPoint>=10000){
                    hitungNilaiSampah()
                    navigation.navigate('Redeem Berhasil')
                  }else{
                    alert("Mohon maaf Saldo anda kurang untuk melakukan transaksi ini")
                  }
                  }}>
                <Text style={{color: '#FFFFFF', fontFamily: 'NotoSansTC-Bold-Alphabetic', fontSize: 14}}>Tukar Sekarang</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}

function RedeemDompetDhuafa({ navigation }) {
  const [TMPoint, setTMPoint] = React.useState()
  const [data, setData] = React.useState()

  React.useEffect( () => {
    var user = auth().currentUser;
    database()
    .ref('users')
    .child(user.uid)
    .on('value', snapshot => {
      let data=snapshot.val()
      setData(snapshot.val())
      setTMPoint(data.TMPoint)
    });
  }, [])

  function hitungNilaiSampah(){
    var TMPointSekarang = TMPoint

    TMPointSekarang = TMPointSekarang - 10000

    var user = auth().currentUser;
      database()
      .ref('users')
      .child(user.uid)
      .update({
        TMPoint: TMPointSekarang
      })
  }
  return (
    <View style={{backgroundColor : '#E9FFFD', flex: 1}}>
      <View style={{paddingHorizontal: 25}}>
        <View style={{paddingTop: 25}}>
          <Text style={{color: '#524848', fontFamily: 'NotoSansTC-Bold-Alphabetic', fontSize: 18}}>Donasikan poinmu ke Dompet Dhuafa</Text>
        </View>
        <View style={{paddingTop: 10}}>
          <Text style={{color: '#666666', fontSize: 13}}>Berbagi itu indah. Ini kesempatan anda untuk membantu sesama dengan mendonasikan poin ke layanan Dompet Dhuafa.</Text>
        </View>
        <View style={{backgroundColor: '#33D1C1', borderRadius: 6, marginTop: 480}}>
          <View style={{flexDirection: 'row', justifyContent: 'space-between', paddingVertical: 10}}>
            <View style={{paddingLeft: 10}}>
              <Text style={{color: '#FFFFFF', fontFamily: 'NotoSansTC-Bold-Alphabetic', fontSize: 14}}>10.000 TS Points</Text>
              <Text style={{color: '#FFFFFF', fontFamily: 'NotoSansTC-Medium-Alphabetic', fontSize: 11}}>TS Points Kamu : {TMPoint}</Text>
            </View>
            <View style={{paddingTop: 5, paddingRight: 10}}>
              <TouchableOpacity onPress={()=> {
                  if(TMPoint>=10000){
                    hitungNilaiSampah()
                    navigation.navigate('Redeem Berhasil')
                  }else{
                    alert("Mohon maaf Saldo anda kurang untuk melakukan transaksi ini")
                  }
                  }}>
                <Text style={{color: '#FFFFFF', fontFamily: 'NotoSansTC-Bold-Alphabetic', fontSize: 14}}>Tukar Sekarang</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}

function RedeemBerhasil({ navigation }) {
  setTimeout(() => {
    navigation.navigate('Redeem'); 
}, 3000)
  return (
    <View style={{flex: 1, backgroundColor : '#E9FFFD', alignItems: 'center'}}>
      <View style={{marginBottom: 20, paddingTop: 200}}>
        <Image source={require('./assets/logo/hore.png')}/>
      </View>
      <View style={{}}>
        <Text style={{fontSize: 24, color: '#424242', textAlign: 'center', fontFamily: 'ABeeZee-Regular'}}>Horeeee !!</Text>
      </View>
      <View style={{paddingTop: 5}}>
        <Text style={{fontSize: 16, color: '#7C7C7C', textAlign: 'center', fontFamily: 'ABeeZee-Regular'}}>Selamat Penukaran TM Points Anda Berhasil</Text>
      </View>
    </View>
  );
}

function ShareBerhasil({ navigation }) {
  setTimeout(() => {
    navigation.navigate('goHome'); 
}, 3000)
  return (
    <View style={{flex: 1, backgroundColor : '#E9FFFD', alignItems: 'center'}}>
      <View style={{marginBottom: 20, paddingTop: 200}}>
        <Image source={require('./assets/logo/berhasil.png')}/>
      </View>
      <View style={{}}>
        <Text style={{fontSize: 24, color: '#424242', textAlign: 'center', fontFamily: 'ABeeZee-Regular'}}>Pengiriman Berhasil</Text>
      </View>
      <View style={{paddingTop: 5}}>
        <Text style={{fontSize: 16, color: '#7C7C7C', textAlign: 'center', fontFamily: 'ABeeZee-Regular'}}>Transaksi anda berhasil</Text>
      </View>
    </View>
  );
}

function DropOff({ navigation }) {
  const [sampahPlastik, setSampahPlastik] = React.useState(0)
  const [sampahKertas, setSampahKertas] = React.useState(0)
  const [sampahKaca, setSampahKaca] = React.useState(0)
  const [sampahElektronik, setSampahElektronik] = React.useState(0)

  const [TMPoint, setTMPoint] = React.useState()
  const [totalTMPoint, setTotalTMPoint] = React.useState()
  const [data, setData] = React.useState()

  const [sampahPlastikDatabase, setSampahPlastikDatabase] = React.useState(0)
  const [sampahKertasDatabase, setSampahKertasDatabase] = React.useState(0)
  const [sampahKacaDatabase, setSampahKacaDatabase] = React.useState(0)

  React.useEffect( () => {
    var user = auth().currentUser;
    database()
    .ref('users')
    .child(user.uid)
    .once('value')
    .then(snapshot => {
      let data=snapshot.val()
      setData(snapshot.val())
      setTMPoint(data.TMPoint)
      setSampahKacaDatabase(data.sampahKaca)
      setSampahKertasDatabase(data.sampahKertas)
      setSampahPlastikDatabase(data.sampahPlastik)
      setTotalTMPoint(data.totalTMPoint)
    });
  }, [])

  function hitungNilaiSampah(){
    var TMPointSekarang = TMPoint
    var totalNilaiSampah = 0

    totalNilaiSampah = (sampahPlastik * 5000) + (sampahKertas * 8000) + (sampahKaca * 10000) + (sampahElektronik * 20000)
    TMPointSekarang = TMPointSekarang + totalNilaiSampah

    var updateTotalSampahKaca
    updateTotalSampahKaca =  sampahKacaDatabase + parseInt(sampahKaca)

    var updateTotalSampahKertas
    updateTotalSampahKertas = sampahKertasDatabase + parseInt(sampahKertas)

    var updateTotalSampahPlastik
    updateTotalSampahPlastik = sampahPlastikDatabase + parseInt(sampahPlastik)
    
    var user = auth().currentUser;
      database()
      .ref('users')
      .child(user.uid)
      .update({
        TMPoint: TMPointSekarang,
        sampahKaca: updateTotalSampahKaca,
        sampahKertas: updateTotalSampahKertas,
        sampahPlastik: updateTotalSampahPlastik,
        totalTMPoint: TMPointSekarang
      })
  }
  return (
    <View style={{backgroundColor : '#E9FFFD', flex: 1}}>
      <View style={{paddingHorizontal: 25}}>
        <View>
          <View style={{paddingTop: 25, flexDirection:'row'}}>
            <View style={{}}>
              <Text style={{fontSize: 14, color: '#666666'}}>Antar langsung sampahmu ke Drop Off{"\n"}Point terdekat. Lihat panduan berat sampah</Text>
            </View>
            <TouchableOpacity onPress={()=> {
            navigation.navigate('Drop Off Info')
            }}>
              <View Style={{position: 'absolute'}}>
                <Text style={{color: '#00FFE5', paddingTop: 17, paddingLeft: 3, fontWeight:'bold'}}>disini</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
        <View>
          <View style={{paddingTop: 15}}>
            <Text style={{fontFamily: 'NotoSansTC-Bold-Alphabetic', fontSize: 14, color: '#524848'}}>Informasi Sampah</Text>
          </View>
          <View style={{paddingTop: 5}}>
            <Text style={{fontSize: 14, color: '#666666'}}>Pilih jenis dan masukkan perkiraan berat sampah, tidak ada batasan berat minimal.</Text>
          </View>
        </View>
        <View style={{paddingTop: 25}}>
          <View style={{width: 340, flexDirection: 'row'}}>
            <View style={{paddingTop: 5}}>
              <Image source={require('./assets/icon/plastik.png')}/>
            </View>
            <View style={{flexDirection: 'column', paddingLeft: 5}}>
              <Text style={{fontFamily: 'NotoSansTC-Bold-Alphabetic', fontSize: 14, color: '#000000', paddingBottom: 5}}>Plastik</Text>
              <TextInput style={{borderRadius: 6, fontSize: 14, fontFamily: 'NotoSansTC-Medium-Alphabetic', backgroundColor:'#FFFFFF', elevation: 5, width: 290, height: 35}}
              placeholder= "Masukkan berat sampah anda (Kg)"
              placeholderTextColor='rgba(125, 123, 146, 0.5)'
              onChangeText={text => setSampahPlastik(text)}
              />
            </View>
          </View>
        </View>
        <View style={{paddingTop: 25}}>
          <View style={{width: 340, flexDirection: 'row'}}>
            <View style={{paddingTop: 10}}>
              <Image source={require('./assets/icon/kertas.png')}/>
            </View>
            <View style={{flexDirection: 'column', paddingLeft: 11}}>
              <Text style={{fontFamily: 'NotoSansTC-Bold-Alphabetic', fontSize: 14, color: '#000000', paddingBottom: 5}}>Kertas</Text>
              <TextInput style={{borderRadius: 6, fontSize: 14, fontFamily: 'NotoSansTC-Medium-Alphabetic', backgroundColor:'#FFFFFF', elevation: 5, width: 290, height: 35}}
              placeholder= "Masukkan berat sampah anda (Kg)"
              placeholderTextColor='rgba(125, 123, 146, 0.5)'
              onChangeText={text => setSampahKertas(text)}
              />
            </View>
          </View>
        </View>
        <View style={{paddingTop: 25}}>
          <View style={{width: 340, flexDirection: 'row'}}>
            <View style={{paddingTop: 12}}>
              <Image source={require('./assets/icon/kaca.png')}/>
            </View>
            <View style={{flexDirection: 'column', paddingLeft: 5}}>
              <Text style={{fontFamily: 'NotoSansTC-Bold-Alphabetic', fontSize: 14, color: '#000000', paddingBottom: 5}}>Kaca</Text>
              <TextInput style={{borderRadius: 6, fontSize: 14, fontFamily: 'NotoSansTC-Medium-Alphabetic', backgroundColor:'#FFFFFF', elevation: 5, width: 290, height: 35}}
              placeholder= "Masukkan berat sampah anda (Kg)"
              placeholderTextColor='rgba(125, 123, 146, 0.5)'
              onChangeText={text => setSampahKaca(text)}
              />
            </View>
          </View>
        </View>
        <View style={{paddingTop: 25}}>
          <View style={{width: 340, flexDirection: 'row'}}>
            <View style={{paddingTop: 8}}>
              <Image source={require('./assets/icon/elektronik.png')}/>
            </View>
            <View style={{flexDirection: 'column', paddingLeft: 9}}>
              <Text style={{fontFamily: 'NotoSansTC-Bold-Alphabetic', fontSize: 14, color: '#000000', paddingBottom: 5}}>Elektronik</Text>
              <TextInput style={{borderRadius: 6, fontSize: 14, fontFamily: 'NotoSansTC-Medium-Alphabetic', backgroundColor:'#FFFFFF', elevation: 5, width: 290, height: 35}}
              placeholder= "Masukkan berat sampah anda (Kg)"
              placeholderTextColor='rgba(125, 123, 146, 0.5)'
              onChangeText={text => setSampahElektronik(text)}
              />
            </View>
          </View>
        </View>
        <View style={{paddingTop: 90}}>
          <TouchableOpacity style={{backgroundColor: '#33D1C1', paddingHorizontal: 35, paddingVertical: 8, borderRadius: 10, elevation: 5}} onPress={()=> {
            hitungNilaiSampah()
            navigation.navigate('Drop Off Diproses')
            }}>
            <Text style={{fontSize: 14, color: 'white', textAlign: 'center', fontFamily: 'NotoSansTC-Regular-Alphabetic'}}>Lanjut</Text>
          </TouchableOpacity>
        </View>
        <View style={{paddingTop: 15, paddingHorizontal: 80}}>
          <TouchableOpacity style={{backgroundColor: '#1E7970', paddingHorizontal: 35, paddingVertical: 8, borderRadius: 10, elevation: 5}} onPress={()=> {
            navigation.navigate('Lokasi')
            }}>
            <Text style={{fontSize: 14, color: 'white', textAlign: 'center', fontFamily: 'NotoSansTC-Regular-Alphabetic'}}>Lokasi</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

function DropOffDiproses({ navigation }) {
  return (
    <View style={{flex: 1, backgroundColor : '#E9FFFD', alignItems: 'center'}}>
      <View style={{marginBottom: 40, paddingTop: 140}}>
        <Image source={require('./assets/logo/transaksi-drop-off-diproses.png')}/>
      </View>
      <View style={{}}>
        <Text style={{fontSize: 24, color: '#424242', textAlign: 'center', fontFamily: 'ABeeZee-Regular'}}>Transaksi Sedang Diproses</Text>
      </View>
      <View style={{paddingTop: 5}}>
        <Text style={{fontSize: 16, color: '#7C7C7C', textAlign: 'center', fontFamily: 'ABeeZee-Regular'}}>Silahkan antar sampah anda</Text>
      </View>
      <View style={{paddingTop: 5}}>
        <Text style={{fontSize: 16, color: '#7C7C7C', textAlign: 'center', fontFamily: 'ABeeZee-Regular'}}>ke bank sampah terdekat dan dapatkan bayaran</Text>
      </View>
      <View style={{paddingTop: 90}}>
        <TouchableOpacity style={{backgroundColor: '#33D1C1', paddingHorizontal: 125, paddingVertical: 8, borderRadius: 10, elevation: 5}} onPress={()=> {
          navigation.navigate('goHome')
          }}>
          <Text style={{fontSize: 14, color: 'white', textAlign: 'center', fontFamily: 'NotoSansTC-Regular-Alphabetic'}}>Home</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

function DropOffInfo({ navigation }) {
  const [sampahPlastik, setSampahPlastik] = React.useState()
  const [sampahKertas, setSampahKertas] = React.useState()
  const [sampahKaca, setSampahKaca] = React.useState()
  const [sampahElektronik, setSampahElektronik] = React.useState()
  
  return (
    <View style={{}}>
      <View style={{paddingHorizontal: 25, backgroundColor : '#E9FFFD', backgroundColor: '#7C7C7C', opacity: 0.5}}>
        <View>
          <View style={{paddingTop: 25, flexDirection:'row'}}>
            <View style={{}}>
              <Text style={{fontSize: 14, color: '#000'}}>Antar langsung sampahmu ke Drop Off{"\n"}Point terdekat. Lihat panduan berat sampah</Text>
            </View>
            <View Style={{position: 'absolute'}}>
              <Text style={{color: '#33D1C1', paddingTop: 17, paddingLeft: 3, fontWeight:'bold'}}>disini</Text>
            </View>
          </View>
        </View>
        <View>
          <View style={{paddingTop: 15}}>
            <Text style={{fontFamily: 'NotoSansTC-Bold-Alphabetic', fontSize: 14, color: '#000'}}>Informasi Sampah</Text>
          </View>
          <View style={{paddingTop: 5}}>
            <Text style={{fontSize: 14, color: '#000'}}>Pilih jenis dan masukkan perkiraan berat sampah, tidak ada batasan berat minimal.</Text>
          </View>
        </View>
        <View style={{paddingTop: 25}}>
          <View style={{width: 340, flexDirection: 'row'}}>
            <View style={{paddingTop: 5}}>
              <Image source={require('./assets/icon/plastik.png')}/>
            </View>
            <View style={{flexDirection: 'column', paddingLeft: 5}}>
              <Text style={{fontFamily: 'NotoSansTC-Bold-Alphabetic', fontSize: 14, color: '#000000', paddingBottom: 5}}>Plastik</Text>
              <TextInput style={{borderRadius: 6, fontSize: 14, fontFamily: 'NotoSansTC-Medium-Alphabetic', backgroundColor:'#FFFFFF', elevation: 5, width: 290, height: 35, opacity: 0.3}}
              placeholder= "Masukkan berat sampah anda (Kg)"
              placeholderTextColor='#000'
              editable={false} 
              selectTextOnFocus={false}
              onChangeText={text => setSampahPlastik(text)}
              />
            </View>
          </View>
        </View>
        <View style={{paddingTop: 25}}>
          <View style={{width: 340, flexDirection: 'row'}}>
            <View style={{paddingTop: 10}}>
              <Image source={require('./assets/icon/kertas.png')}/>
            </View>
            <View style={{flexDirection: 'column', paddingLeft: 11}}>
              <Text style={{fontFamily: 'NotoSansTC-Bold-Alphabetic', fontSize: 14, color: '#000000', paddingBottom: 5}}>Kertas</Text>
              <TextInput style={{borderRadius: 6, fontSize: 14, fontFamily: 'NotoSansTC-Medium-Alphabetic', backgroundColor:'#FFFFFF', elevation: 5, width: 290, height: 35, opacity: 0.3}}
              placeholder= "Masukkan berat sampah anda (Kg)"
              placeholderTextColor='#000'
              editable={false} 
              selectTextOnFocus={false}
              onChangeText={text => setSampahKertas(text)}
              />
            </View>
          </View>
        </View>
        <View style={{paddingTop: 25}}>
          <View style={{width: 340, flexDirection: 'row'}}>
            <View style={{paddingTop: 12}}>
              <Image source={require('./assets/icon/kaca.png')}/>
            </View>
            <View style={{flexDirection: 'column', paddingLeft: 5}}>
              <Text style={{fontFamily: 'NotoSansTC-Bold-Alphabetic', fontSize: 14, color: '#000000', paddingBottom: 5}}>Kaca</Text>
              <TextInput style={{borderRadius: 6, fontSize: 14, fontFamily: 'NotoSansTC-Medium-Alphabetic', backgroundColor:'#FFFFFF', elevation: 5, width: 290, height: 35}}
              placeholder= "Masukkan berat sampah anda (Kg)"
              placeholderTextColor='rgba(125, 123, 146, 0.5)'
              onChangeText={text => setSampahKaca(text)}
              />
            </View>
          </View>
        </View>
        <View style={{paddingTop: 25, paddingBottom: 10}}>
          <View style={{width: 340, flexDirection: 'row'}}>
            <View style={{paddingTop: 8}}>
              <Image source={require('./assets/icon/elektronik.png')}/>
            </View>
            <View style={{flexDirection: 'column', paddingLeft: 9}}>
              <Text style={{fontFamily: 'NotoSansTC-Bold-Alphabetic', fontSize: 14, color: '#000000', paddingBottom: 5}}>Elektronik</Text>
              <TextInput style={{borderRadius: 6, fontSize: 14, fontFamily: 'NotoSansTC-Medium-Alphabetic', backgroundColor:'#FFFFFF', elevation: 5, width: 290, height: 35}}
              placeholder= "Masukkan berat sampah anda (Kg)"
              placeholderTextColor='rgba(125, 123, 146, 0.5)'
              onChangeText={text => setSampahElektronik(text)}
              />
            </View>
          </View>
        </View>
      </View>
      <View style={{backgroundColor: 'white', position: 'absolute', marginTop: 275, paddingHorizontal: 25, borderRadius: 10}}>
        <View style={{paddingTop: 20}}>
          <Text style={{color: '#524848', fontFamily: 'NotoSansTC-Bold-Alphabetic', fontSize: 24, marginRight: 168}}>Ketentuan Berat</Text>
        </View>
        <View style={{paddingTop: 25, flexDirection:'row'}}>
          <View style={{zIndex: 1}}>
            <Image source={require('./assets/icon/lingkaran-biru.png')}/>
          </View>
          <View style={{flexDirection: 'row', position: 'absolute', backgroundColor: 'white'}}>
            <Text style={{color: '#666666', fontSize: 14, paddingTop: 25, paddingLeft: 35}}>Berat dibawah </Text>
            <Text style={{color: '#666666', fontSize: 14, fontWeight: 'bold', paddingTop: 25}}>1 Kg </Text>
            <Text style={{color: '#666666', fontSize: 14, paddingTop: 25}}>dan sampah satuan (contoh : </Text>
          </View>
          <View style={{flexDirection: 'row', paddingTop: 25}}>
            <Text style={{color: '#666666', fontSize: 14, paddingLeft: 13}}>Botol, plastik, Gelas Plastik, Kemasan Oli, dsb)</Text>
          </View>
          <View style={{flexDirection: 'row', position: 'absolute'}}>
            <Text style={{color: '#666666', fontSize: 14, paddingLeft: 34, paddingTop: 75, zIndex: 1}}>dapat ditukarkan menjadi </Text>
            <Text style={{color: '#666666', fontSize: 14, fontWeight: 'bold', paddingTop: 75, zIndex: 1}}>10 Poin</Text>
          </View>
        </View>
        <View style={{paddingTop: 50, flexDirection:'row'}}>
          <View style={{zIndex: 1}}>
            <Image source={require('./assets/icon/lingkaran-biru.png')}/>
          </View>
          <View style={{flexDirection: 'row', position: 'absolute', backgroundColor: 'white'}}>
            <Text style={{color: '#666666', fontSize: 14, paddingTop: 50, paddingLeft: 35}}>Berat dibawah </Text>
            <Text style={{color: '#666666', fontSize: 14, fontWeight: 'bold', paddingTop: 50}}>1 Kg </Text>
            <Text style={{color: '#666666', fontSize: 14, paddingTop: 50}}>s.d </Text>
            <Text style={{color: '#666666', fontSize: 14, fontWeight: 'bold', paddingTop: 50}}>5 Kg </Text>
            <Text style={{color: '#666666', fontSize: 14, paddingTop: 50}}>hanya dapat </Text>
          </View>
          <View style={{flexDirection: 'row', paddingTop: 25}}>
            <Text style={{color: '#666666', fontSize: 14, paddingLeft: 13}}>ditukarkan menjadi TM Poin.</Text>
          </View>
        </View>
        <View style={{paddingTop: 25, flexDirection:'row'}}>
          <View style={{zIndex: 1}}>
            <Image source={require('./assets/icon/lingkaran-biru.png')}/>
          </View>
          <View style={{flexDirection: 'row', position: 'absolute', backgroundColor: 'white'}}>
            <Text style={{color: '#666666', fontSize: 14, paddingTop: 25, paddingLeft: 35}}>Berat melebihi </Text>
            <Text style={{color: '#666666', fontSize: 14, fontWeight: 'bold', paddingTop: 25}}>5 Kg </Text>
            <Text style={{color: '#666666', fontSize: 14, paddingTop: 25}}>dapat ditukarkan menjadi </Text>
          </View>
          <View style={{flexDirection: 'row', paddingTop: 25}}>
            <Text style={{color: '#666666', fontSize: 14, paddingLeft: 13}}>uang tunai atau TM Poin.</Text>
          </View>
        </View>
        <View style={{paddingTop: 25, marginBottom: 50}}>
          <TouchableOpacity style={{backgroundColor: '#33D1C1', paddingHorizontal: 35, paddingVertical: 8, borderRadius: 10, elevation: 5}} onPress={()=> {
            navigation.navigate('Drop Off')
            }}>
            <Text style={{fontSize: 14, color: 'white', textAlign: 'center', fontFamily: 'NotoSansTC-Regular-Alphabetic'}}>Mengerti</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

function PickUp({ navigation }) {
  const [sampahPlastik, setSampahPlastik] = React.useState()
  const [sampahKertas, setSampahKertas] = React.useState()
  const [sampahKaca, setSampahKaca] = React.useState()
  const [sampahElektronik, setSampahElektronik] = React.useState()
  const [noHP, setNoHP] = React.useState()
  const [noAlamat, setAlamat] = React.useState()

  const [totalTMPoint, setTotalTMPoint] = React.useState()
  const [TMPoint, setTMPoint] = React.useState()
  const [data, setData] = React.useState()

  const [sampahPlastikDatabase, setSampahPlastikDatabase] = React.useState(0)
  const [sampahKertasDatabase, setSampahKertasDatabase] = React.useState(0)
  const [sampahKacaDatabase, setSampahKacaDatabase] = React.useState(0)

  React.useEffect( () => {
    var user = auth().currentUser;
    database()
    .ref('users')
    .child(user.uid)
    .once('value')
    .then(snapshot => {
      let data=snapshot.val()
      setData(snapshot.val())
      setTMPoint(data.TMPoint)
      setSampahKacaDatabase(data.sampahKaca)
      setSampahKertasDatabase(data.sampahKertas)
      setSampahPlastikDatabase(data.sampahPlastik)
      setTotalTMPoint(data.totalTMPoint)
    });
  }, [])

  function hitungNilaiSampah(){
    var TMPointSekarang = TMPoint
    var totalNilaiSampah = 0

    totalNilaiSampah = (sampahPlastik * 5000) + (sampahKertas * 9000) + (sampahKaca * 10000) + (sampahElektronik * 18000)
    TMPointSekarang = TMPointSekarang + totalNilaiSampah

    var updateTotalSampahKaca
    updateTotalSampahKaca =  sampahKacaDatabase + parseInt(sampahKaca)

    var updateTotalSampahKertas
    updateTotalSampahKertas = sampahKertasDatabase + parseInt(sampahKertas)

    var updateTotalSampahPlastik
    updateTotalSampahPlastik = sampahPlastikDatabase + parseInt(sampahPlastik)
    
    var user = auth().currentUser;
      database()
      .ref('users')
      .child(user.uid)
      .update({
        TMPoint: TMPointSekarang,
        sampahKaca: updateTotalSampahKaca,
        sampahKertas: updateTotalSampahKertas,
        sampahPlastik: updateTotalSampahPlastik,
        totalTMPoint: TMPointSekarang
      })
  }

  return (
    <View style={{backgroundColor : '#E9FFFD', flex: 1}}>
      <View style={{paddingHorizontal: 25}}>
        <View>
          <View style={{position: 'absolute', paddingTop: 60, paddingLeft: 55, zIndex: 1}}>
            <TouchableOpacity onPress={()=> {
            navigation.navigate('Pick Up Info')
            }}>
              <View Style={{}}>
                <Text style={{color: '#00FFE5', fontWeight:'bold'}}>disini</Text>
              </View>
            </TouchableOpacity>
          </View>
          <View style={{paddingTop: 25, flexDirection:'row'}}>
            <View style={{}}>
              <Text style={{fontSize: 14, color: '#666666'}}>Order layanan Pickup, Kolektor akan segera menjemput sampahmu. Lihat panduan berat{'\n'}sampah </Text>
            </View>
          </View>
        </View>
        <View>
          <View style={{paddingTop: 15}}>
            <Text style={{fontFamily: 'NotoSansTC-Bold-Alphabetic', fontSize: 14, color: '#524848'}}>Informasi Sampah</Text>
          </View>
          <View style={{paddingTop: 5}}>
            <Text style={{fontSize: 14, color: '#666666'}}>Pilih jenis dan masukkan perkiraan berat sampah, tidak ada batasan berat minimal penjemputan.</Text>
          </View>
        </View>
        <View style={{paddingTop: 15}}>
          <View style={{width: 340, flexDirection: 'row'}}>
            <View style={{paddingTop: 5}}>
              <Image source={require('./assets/icon/plastik.png')}/>
            </View>
            <View style={{flexDirection: 'column', paddingLeft: 5}}>
              <Text style={{fontFamily: 'NotoSansTC-Bold-Alphabetic', fontSize: 14, color: '#000000', paddingBottom: 5}}>Plastik</Text>
              <TextInput style={{borderRadius: 6, fontSize: 14, fontFamily: 'NotoSansTC-Medium-Alphabetic', backgroundColor:'#FFFFFF', elevation: 5, width: 290, height: 35}}
              placeholder= "Masukkan berat sampah anda (Kg)"
              placeholderTextColor='rgba(125, 123, 146, 0.5)'
              onChangeText={text => setSampahPlastik(text)}
              />
            </View>
          </View>
        </View>
        <View style={{paddingTop: 10}}>
          <View style={{width: 340, flexDirection: 'row'}}>
            <View style={{paddingTop: 10}}>
              <Image source={require('./assets/icon/kertas.png')}/>
            </View>
            <View style={{flexDirection: 'column', paddingLeft: 11}}>
              <Text style={{fontFamily: 'NotoSansTC-Bold-Alphabetic', fontSize: 14, color: '#000000', paddingBottom: 5}}>Kertas</Text>
              <TextInput style={{borderRadius: 6, fontSize: 14, fontFamily: 'NotoSansTC-Medium-Alphabetic', backgroundColor:'#FFFFFF', elevation: 5, width: 290, height: 35}}
              placeholder= "Masukkan berat sampah anda (Kg)"
              placeholderTextColor='rgba(125, 123, 146, 0.5)'
              onChangeText={text => setSampahKertas(text)}
              />
            </View>
          </View>
        </View>
        <View style={{paddingTop: 10}}>
          <View style={{width: 340, flexDirection: 'row'}}>
            <View style={{paddingTop: 12}}>
              <Image source={require('./assets/icon/kaca.png')}/>
            </View>
            <View style={{flexDirection: 'column', paddingLeft: 5}}>
              <Text style={{fontFamily: 'NotoSansTC-Bold-Alphabetic', fontSize: 14, color: '#000000', paddingBottom: 5}}>Kaca</Text>
              <TextInput style={{borderRadius: 6, fontSize: 14, fontFamily: 'NotoSansTC-Medium-Alphabetic', backgroundColor:'#FFFFFF', elevation: 5, width: 290, height: 35}}
              placeholder= "Masukkan berat sampah anda (Kg)"
              placeholderTextColor='rgba(125, 123, 146, 0.5)'
              onChangeText={text => setSampahKaca(text)}
              />
            </View>
          </View>
        </View>
        <View style={{paddingTop: 10}}>
          <View style={{width: 340, flexDirection: 'row'}}>
            <View style={{paddingTop: 8}}>
              <Image source={require('./assets/icon/elektronik.png')}/>
            </View>
            <View style={{flexDirection: 'column', paddingLeft: 9}}>
              <Text style={{fontFamily: 'NotoSansTC-Bold-Alphabetic', fontSize: 14, color: '#000000', paddingBottom: 5}}>Elektronik</Text>
              <TextInput style={{borderRadius: 6, fontSize: 14, fontFamily: 'NotoSansTC-Medium-Alphabetic', backgroundColor:'#FFFFFF', elevation: 5, width: 290, height: 35}}
              placeholder= "Masukkan berat sampah anda (Kg)"
              placeholderTextColor='rgba(125, 123, 146, 0.5)'
              onChangeText={text => setSampahElektronik(text)}
              />
            </View>
          </View>
        </View>
        <View style={{paddingTop: 5}}>
          <Text style={{fontFamily: 'NotoSansTC-Bold-Alphabetic', fontSize: 18, color: '#000000', paddingBottom: 5, paddingTop: 10}}>Data diri</Text>
        </View>
        <View style={{paddingTop: 10}}>
          <View style={{width: 340, flexDirection: 'row'}}>
            <View style={{paddingTop: 8, paddingLeft: 5}}>
              <Icon name="phone" color= "#000" size={35}/>
            </View>
            <View style={{flexDirection: 'column', paddingLeft: 18}}>
              <Text style={{fontFamily: 'NotoSansTC-Bold-Alphabetic', fontSize: 14, color: '#000000', paddingBottom: 5}}>Nomor Handphone</Text>
              <TextInput style={{borderRadius: 6, fontSize: 14, fontFamily: 'NotoSansTC-Medium-Alphabetic', backgroundColor:'#FFFFFF', elevation: 5, width: 290, height: 35}}
              placeholder= "Masukkan nomor handphone anda "
              placeholderTextColor='rgba(125, 123, 146, 0.5)'
              onChangeText={text => setNoHP(text)}
              />
            </View>
          </View>
        </View>
        <View style={{paddingTop: 10}}>
          <View style={{width: 340, flexDirection: 'row'}}>
            <View style={{paddingTop: 8}}>
              <Icon name="home" color= "#000" size={40}/>
            </View>
            <View style={{flexDirection: 'column', paddingLeft: 15}}>
              <Text style={{fontFamily: 'NotoSansTC-Bold-Alphabetic', fontSize: 14, color: '#000000', paddingBottom: 5}}>Alamat</Text>
              <TextInput style={{borderRadius: 6, fontSize: 14, fontFamily: 'NotoSansTC-Medium-Alphabetic', backgroundColor:'#FFFFFF', elevation: 5, width: 290, height: 35}}
              placeholder= "Masukkan alamat anda "
              placeholderTextColor='rgba(125, 123, 146, 0.5)'
              onChangeText={text => setAlamat(text)}
              />
            </View>
          </View>
        </View>
        <View style={{paddingTop: 25}}>
          <TouchableOpacity style={{backgroundColor: '#33D1C1', paddingHorizontal: 35, paddingVertical: 8, borderRadius: 10, elevation: 5}} onPress={()=> {
            if(noHP && noAlamat){ 
              hitungNilaiSampah()
              navigation.navigate('Pick Up Diproses')
            }else{
              alert("Alamat atau nomor hp kosong")
              }
            }}>
            <Text style={{fontSize: 14, color: 'white', textAlign: 'center', fontFamily: 'NotoSansTC-Regular-Alphabetic'}}>Lanjut</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

function PickUpInfo({ navigation }) {
  const [sampahPlastik, setSampahPlastik] = React.useState()
  const [sampahKertas, setSampahKertas] = React.useState()
  const [sampahKaca, setSampahKaca] = React.useState()
  const [sampahElektronik, setSampahElektronik] = React.useState()

  return (
    <View style={{}}>
      <View style={{paddingHorizontal: 25, backgroundColor : '#E9FFFD', backgroundColor: '#7C7C7C', opacity: 0.5}}>
        <View>
            <View style={{position: 'absolute', paddingTop: 60, paddingLeft: 55, zIndex: 1}}>
              <View Style={{}}>
                <Text style={{color: '#00FFE5', fontWeight:'bold'}}>disini</Text>
              </View>
            </View>
            <View style={{paddingTop: 25, flexDirection:'row'}}>
              <View style={{}}>
                <Text style={{fontSize: 14, color: '#666666'}}>Order layanan Pickup, Kolektor akan segera menjemput sampahmu. Lihat panduan berat{'\n'}sampah </Text>
              </View>
            </View>
          </View>
        <View>
          <View style={{paddingTop: 15}}>
            <Text style={{fontFamily: 'NotoSansTC-Bold-Alphabetic', fontSize: 14, color: '#000'}}>Informasi Sampah</Text>
          </View>
          <View style={{paddingTop: 5}}>
            <Text style={{fontSize: 14, color: '#000'}}>Pilih jenis dan masukkan perkiraan berat sampah, tidak ada batasan berat minimal.</Text>
          </View>
        </View>
        <View style={{paddingTop: 25}}>
          <View style={{width: 340, flexDirection: 'row'}}>
            <View style={{paddingTop: 5}}>
              <Image source={require('./assets/icon/plastik.png')}/>
            </View>
            <View style={{flexDirection: 'column', paddingLeft: 5}}>
              <Text style={{fontFamily: 'NotoSansTC-Bold-Alphabetic', fontSize: 14, color: '#000000', paddingBottom: 5}}>Plastik</Text>
              <TextInput style={{borderRadius: 6, fontSize: 14, fontFamily: 'NotoSansTC-Medium-Alphabetic', backgroundColor:'#FFFFFF', elevation: 5, width: 290, height: 35, opacity: 0.3}}
              placeholder= "Masukkan berat sampah anda (Kg)"
              placeholderTextColor='#000'
              editable={false} 
              selectTextOnFocus={false}
              onChangeText={text => setSampahPlastik(text)}
              />
            </View>
          </View>
        </View>
        <View style={{paddingTop: 25}}>
          <View style={{width: 340, flexDirection: 'row'}}>
            <View style={{paddingTop: 10}}>
              <Image source={require('./assets/icon/kertas.png')}/>
            </View>
            <View style={{flexDirection: 'column', paddingLeft: 11}}>
              <Text style={{fontFamily: 'NotoSansTC-Bold-Alphabetic', fontSize: 14, color: '#000000', paddingBottom: 5}}>Kertas</Text>
              <TextInput style={{borderRadius: 6, fontSize: 14, fontFamily: 'NotoSansTC-Medium-Alphabetic', backgroundColor:'#FFFFFF', elevation: 5, width: 290, height: 35, opacity: 0.3}}
              placeholder= "Masukkan berat sampah anda (Kg)"
              placeholderTextColor='#000'
              onChangeText={text => setSampahKertas(text)}
              />
            </View>
          </View>
        </View>
        <View style={{paddingTop: 25}}>
          <View style={{width: 340, flexDirection: 'row'}}>
            <View style={{paddingTop: 12}}>
              <Image source={require('./assets/icon/kaca.png')}/>
            </View>
            <View style={{flexDirection: 'column', paddingLeft: 5}}>
              <Text style={{fontFamily: 'NotoSansTC-Bold-Alphabetic', fontSize: 14, color: '#000000', paddingBottom: 5}}>Kaca</Text>
              <TextInput style={{borderRadius: 6, fontSize: 14, fontFamily: 'NotoSansTC-Medium-Alphabetic', backgroundColor:'#FFFFFF', elevation: 5, width: 290, height: 35}}
              placeholder= "Masukkan berat sampah anda (Kg)"
              placeholderTextColor='rgba(125, 123, 146, 0.5)'
              onChangeText={text => setSampahKaca(text)}
              />
            </View>
          </View>
        </View>
        <View style={{paddingTop: 25, paddingBottom: 10}}>
          <View style={{width: 340, flexDirection: 'row'}}>
            <View style={{paddingTop: 8}}>
              <Image source={require('./assets/icon/elektronik.png')}/>
            </View>
            <View style={{flexDirection: 'column', paddingLeft: 9}}>
              <Text style={{fontFamily: 'NotoSansTC-Bold-Alphabetic', fontSize: 14, color: '#000000', paddingBottom: 5}}>Elektronik</Text>
              <TextInput style={{borderRadius: 6, fontSize: 14, fontFamily: 'NotoSansTC-Medium-Alphabetic', backgroundColor:'#FFFFFF', elevation: 5, width: 290, height: 35}}
              placeholder= "Masukkan berat sampah anda (Kg)"
              placeholderTextColor='rgba(125, 123, 146, 0.5)'
              onChangeText={text => setSampahElektronik(text)}
              />
            </View>
          </View>
        </View>
      </View>
      <View style={{backgroundColor: 'white', position: 'absolute', marginTop: 275, paddingHorizontal: 25, borderRadius: 10}}>
        <View style={{paddingTop: 20}}>
          <Text style={{color: '#524848', fontFamily: 'NotoSansTC-Bold-Alphabetic', fontSize: 24, marginRight: 168}}>Ketentuan Berat</Text>
        </View>
        <View style={{paddingTop: 25, flexDirection:'row'}}>
          <View style={{zIndex: 1}}>
            <Image source={require('./assets/icon/lingkaran-biru.png')}/>
          </View>
          <View style={{flexDirection: 'row', position: 'absolute', backgroundColor: 'white'}}>
            <Text style={{color: '#666666', fontSize: 14, paddingTop: 25, paddingLeft: 35}}>Berat dibawah </Text>
            <Text style={{color: '#666666', fontSize: 14, fontWeight: 'bold', paddingTop: 25}}>5 Kg </Text>
            <Text style={{color: '#666666', fontSize: 14, paddingTop: 25}}>mungkin saja Kamu akan</Text>
          </View>
          <View style={{flexDirection: 'row', paddingTop: 25}}>
            <Text style={{color: '#666666', fontSize: 14, paddingLeft: 13}}>dikenakan </Text>
            <Text style={{color: '#666666', fontSize: 14, fontWeight: 'bold'}}>Biaya Tambahan.</Text>
          </View>
        </View>
        <View style={{paddingTop: 25, flexDirection:'row'}}>
          <View style={{zIndex: 1}}>
            <Image source={require('./assets/icon/lingkaran-biru.png')}/>
          </View>
          <View style={{flexDirection: 'row', position: 'absolute', backgroundColor: 'white'}}>
            <Text style={{color: '#666666', fontSize: 14, paddingTop: 25, paddingLeft: 35}}>Berat dibawah </Text>
            <Text style={{color: '#666666', fontSize: 14, fontWeight: 'bold', paddingTop: 25}}>10 Kg </Text>
            <Text style={{color: '#666666', fontSize: 14, paddingTop: 25}}>hanya dapat ditukarkan </Text>
          </View>
          <View style={{flexDirection: 'row', paddingTop: 25}}>
            <Text style={{color: '#666666', fontSize: 14, paddingLeft: 13}}>menjadi TM Poin.</Text>
          </View>
        </View>
        <View style={{paddingTop: 25, flexDirection:'row'}}>
          <View style={{zIndex: 1}}>
            <Image source={require('./assets/icon/lingkaran-biru.png')}/>
          </View>
          <View style={{flexDirection: 'row', position: 'absolute', backgroundColor: 'white'}}>
            <Text style={{color: '#666666', fontSize: 14, paddingTop: 25, paddingLeft: 35}}>Berat melebihi </Text>
            <Text style={{color: '#666666', fontSize: 14, fontWeight: 'bold', paddingTop: 25}}>10 Kg </Text>
            <Text style={{color: '#666666', fontSize: 14, paddingTop: 25}}>dapat ditukarkan </Text>
          </View>
          <View style={{flexDirection: 'row', paddingTop: 25}}>
            <Text style={{color: '#666666', fontSize: 14, paddingLeft: 13}}>menjadi uang tunai atau TM Poin.</Text>
          </View>
        </View>
        <View style={{paddingTop: 25, marginBottom: 50}}>
          <TouchableOpacity style={{backgroundColor: '#33D1C1', paddingHorizontal: 35, paddingVertical: 8, borderRadius: 10, elevation: 5}} onPress={()=> {
            navigation.navigate('Pick Up')
            }}>
            <Text style={{fontSize: 14, color: 'white', textAlign: 'center', fontFamily: 'NotoSansTC-Regular-Alphabetic'}}>Mengerti</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

function PickUpDiproses({ navigation }) {
  return (
    <View style={{flex: 1, backgroundColor : '#E9FFFD', alignItems: 'center'}}>
      <View style={{marginBottom: 40, paddingTop: 140}}>
        <Image source={require('./assets/logo/transaksi-drop-off-diproses.png')}/>
      </View>
      <View style={{}}>
        <Text style={{fontSize: 24, color: '#424242', textAlign: 'center', fontFamily: 'ABeeZee-Regular'}}>Transaksi Sedang Diproses</Text>
      </View>
      <View style={{paddingTop: 5}}>
        <Text style={{fontSize: 16, color: '#7C7C7C', textAlign: 'center', fontFamily: 'ABeeZee-Regular'}}>Silahkan tunggu</Text>
      </View>
      <View style={{paddingTop: 5}}>
        <Text style={{fontSize: 16, color: '#7C7C7C', textAlign: 'center', fontFamily: 'ABeeZee-Regular'}}>agen sampah kami datang ketempat anda</Text>
      </View>
      <View style={{paddingTop: 90}}>
        <TouchableOpacity style={{backgroundColor: '#33D1C1', paddingHorizontal: 125, paddingVertical: 8, borderRadius: 10, elevation: 5}} onPress={()=> {
          navigation.navigate('goHome')
          }}>
          <Text style={{fontSize: 14, color: 'white', textAlign: 'center', fontFamily: 'NotoSansTC-Regular-Alphabetic'}}>Home</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

function Information({ navigation }) {
  return (
    <View style={{backgroundColor : '#E9FFFD', flex: 1}}>
      <View style={{ flexDirection: 'row', borderBottomWidth: 1, borderBottomColor: 'rgba(166, 164, 164, 0.3)', marginBottom: 30}}>
        <View style={{flex: 1, alignSelf:'flex-start', paddingTop: 20, paddingLeft: 25}}>
          <TouchableOpacity onPress={()=> {
            navigation.navigate('goHome')
            }}>
            <Image source={require('./assets/icon/info.png')}/>
          </TouchableOpacity>
        </View>
        <View style={{flex: 2}}>
          <Text style={{ fontFamily: 'Oswald-SemiBold', color:'#33D1C1', fontSize: 36}}>TrashMon</Text>
        </View>
        <TouchableOpacity onPress={()=> {
            navigation.navigate('Notification')
            }}>
          <View style={{ paddingRight: 25, paddingTop: 20}}>
            <Image source={require('./assets/icon/notification.png')}/>
          </View>
        </TouchableOpacity>
      </View>
      <View style={{backgroundColor: '#9EDCD7', marginHorizontal: 25, borderRadius: 8}}>
        <View>
          <View style={{paddingTop: 10, paddingBottom: 10, borderBottomWidth: 1, borderBottomColor: '#A6A4A4'}}>
            <Text style={{fontFamily: 'NotoSansTC-Bold-Alphabetic', color:'#554D4D', fontSize: 26, textAlign: 'center'}}>Info</Text>
          </View>
          <View style={{paddingTop: 20}}>
            <TouchableOpacity  onPress={()=> {
            navigation.navigate('Lokasi')
            }}>  
              <View style={{backgroundColor: '#BCE3E0', width: 200, height: 41, borderRadius: 15, marginLeft: 10, paddingLeft: 5, flexDirection: 'row', marginBottom: 15}}>
                <Image source={require('./assets/icon/location.png')}/>
                <Text style={{fontFamily: 'NotoSansTC-Bold-Alphabetic', fontSize: 13, marginTop: 13, marginLeft: 10}}>Lokasi Bank Sampah</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=> {
            navigation.navigate('Event')
            }}>
              <View style={{backgroundColor: '#BCE3E0', width: 120, height: 41, borderRadius: 15, marginLeft: 10, paddingLeft: 5, flexDirection: 'row', marginBottom: 15}}>
                <Image style={{marginTop: 5}} source={require('./assets/icon/event.png')}/>
                <Text style={{fontFamily: 'NotoSansTC-Bold-Alphabetic', fontSize: 13, marginTop: 13, marginLeft: 10}}>Event</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <View style={{paddingHorizontal: 25}}>
        <View style={{paddingTop: 60}}>
          <Text style={{fontFamily: 'NotoSansTC-Bold-Alphabetic', color:'#554D4D', fontSize: 26}}>Rekomendasi</Text>
        </View>
        <View style={{marginTop: 15, backgroundColor: '#FFFFFF'}}>
          <Image style={{height: 212, width: 345}} source={require('./assets/dummy/pegadaian.png')}/>
          <View style={{width: 345, marginTop: 165, position: 'absolute', backgroundColor: '#FFFFFF', elevation: 5, borderBottomRightRadius: 6, borderBottomLeftRadius: 6}}>
            <Text style={{color:'#524848', fontFamily: 'NotoSansTC-Medium-Alphabetic', fontSize: 13, textAlign: 'center', paddingTop: 10}}>Tukarkan Poinmu menjadi tabungan emas senilai 15.000</Text>
            <View style={{flexDirection: 'row', paddingTop: 5, paddingLeft: 5, marginBottom: 12}}>
              <View style={{paddingTop: 10, flexDirection: 'row'}}>
                <Text style={{color:'#33D1C1', fontFamily: 'NotoSansTC-Bold-Alphabetic', fontSize: 16, textAlign: 'center'}}>15000 </Text>
                <Text style={{color:'#766F6F', fontFamily: 'NotoSansTC-Bold-Alphabetic', fontSize: 16, textAlign: 'center'}}>Points</Text>
              </View>
              <TouchableOpacity style={{backgroundColor: '#33D1C1', paddingHorizontal: 35, paddingVertical: 8, borderRadius: 10, marginLeft: 120, elevation: 5}}>
                <Text style={{fontSize: 13, fontWeight: 'bold', color: 'white', textAlign: 'center'}}>Tukar</Text>
              </TouchableOpacity>
          </View>
        </View>
      </View>
      </View>
    </View>
  );
}

function Notification({ navigation }) {
  return (
    <View style={{backgroundColor : '#E9FFFD', flex: 1}}>
      <View style={{ flexDirection: 'row', borderBottomWidth: 1, borderBottomColor: 'rgba(166, 164, 164, 0.3)', marginBottom: 30}}>
        <View style={{flex: 1, alignSelf:'flex-start', paddingTop: 20, paddingLeft: 25}}>
          <TouchableOpacity onPress={()=> {
            navigation.navigate('Information')
            }}>
            <Image source={require('./assets/icon/info.png')}/>
          </TouchableOpacity>
        </View>
        <View style={{flex: 2}}>
          <Text style={{ fontFamily: 'Oswald-SemiBold', color:'#33D1C1', fontSize: 36}}>TrashMon</Text>
        </View>
        <TouchableOpacity  onPress={()=> {
            navigation.navigate('goHome')
            }}>
          <View style={{ paddingRight: 25, paddingTop: 20}}>
            <Image source={require('./assets/icon/notification.png')}/>
          </View>
        </TouchableOpacity>
      </View>
      <View style={{backgroundColor: '#9EDCD7', marginHorizontal: 25, borderRadius: 8}}>
        <View>
          <View style={{paddingTop: 10, paddingBottom: 10, borderBottomWidth: 1, borderBottomColor: '#A6A4A4'}}>
            <Text style={{fontFamily: 'NotoSansTC-Bold-Alphabetic', color:'#554D4D', fontSize: 26, textAlign: 'center'}}>Notification</Text>
          </View>
          <View style={{paddingTop: 20}}>
            <TouchableOpacity>  
              <View style={{ marginLeft: 10, paddingLeft: 5, flexDirection: 'row', marginBottom: 15}}>
                <Image source={require('./assets/icon/notification-mail.png')}/>
                <Text style={{fontFamily: 'NotoSansTC-Bold-Alphabetic', fontSize: 13, marginLeft: 10, marginTop: 3}}>Transaksi Anda Berhasil.{"\n"}Ayo kumpulkan lebih banyak poin</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View style={{ marginLeft: 10, paddingLeft: 5, flexDirection: 'row', marginBottom: 15}}>
                <Image style={{marginTop: 5}} source={require('./assets/icon/notification-mail.png')}/>
                <Text style={{fontFamily: 'NotoSansTC-Bold-Alphabetic', fontSize: 13, marginLeft: 10, marginTop: 7}}>Transaksi Anda Berhasil.{"\n"}Ayo kumpulkan lebih banyak poin</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <View style={{paddingHorizontal: 25}}>
        <View style={{paddingTop: 60}}>
          <Text style={{fontFamily: 'NotoSansTC-Bold-Alphabetic', color:'#554D4D', fontSize: 26}}>Rekomendasi</Text>
        </View>
        <View style={{marginTop: 15, backgroundColor: '#FFFFFF'}}>
          <Image style={{height: 212, width: 345}} source={require('./assets/dummy/pegadaian.png')}/>
          <View style={{width: 345, marginTop: 165, position: 'absolute', backgroundColor: '#FFFFFF', elevation: 5, borderBottomRightRadius: 6, borderBottomLeftRadius: 6}}>
            <Text style={{color:'#524848', fontFamily: 'NotoSansTC-Medium-Alphabetic', fontSize: 13, textAlign: 'center', paddingTop: 10}}>Tukarkan Poinmu menjadi tabungan emas senilai 15.000</Text>
            <View style={{flexDirection: 'row', paddingTop: 5, paddingLeft: 5, marginBottom: 12}}>
              <View style={{paddingTop: 10, flexDirection: 'row'}}>
                <Text style={{color:'#33D1C1', fontFamily: 'NotoSansTC-Bold-Alphabetic', fontSize: 16, textAlign: 'center'}}>15000 </Text>
                <Text style={{color:'#766F6F', fontFamily: 'NotoSansTC-Bold-Alphabetic', fontSize: 16, textAlign: 'center'}}>Points</Text>
              </View>
              <TouchableOpacity style={{backgroundColor: '#33D1C1', paddingHorizontal: 35, paddingVertical: 8, borderRadius: 10, marginLeft: 120, elevation: 5}}>
                <Text style={{fontSize: 13, fontWeight: 'bold', color: 'white', textAlign: 'center'}}>Tukar</Text>
              </TouchableOpacity>
          </View>
        </View>
      </View>
      </View>
    </View>
  );
}

function Lokasi({ navigation }) {
  return (
    <View style={{backgroundColor : '#E9FFFD', flex: 1}}>
      <View style={{}}>
        <TouchableOpacity onPress={()=> {
            navigation.navigate('Bank Sampah Wijaya Kusuma')
            }}>
          <View style={{paddingTop: 20, flexDirection: 'row', paddingHorizontal: 20, borderBottomColor: '#A6A4A4', borderBottomWidth: 1, paddingBottom: 20}}>
            <Image source={require('./assets/dummy/lokasi-1.png')}/>
            <View style={{paddingLeft: 10}}>
              <Text style={{color:'#524848', fontFamily: 'NotoSansTC-Bold-Alphabetic', fontSize: 14}}>Bank Sampah Wijaya Kusuma</Text>
              <Text style={{fontSize: 11, lineHeight: 25}} >Jl.Teuku Cik Ditiro II No.5 RT.1/RW2,{"\n"}Gondangdia, Kec. Menteng, Kota Jakarta{"\n"}Pusat, Daerah Khusus Ibukota Jakarta{"\n"}10350</Text>
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=> {
            navigation.navigate('Bank Sampah Melati')
            }}>
          <View style={{paddingTop: 20, flexDirection: 'row', paddingHorizontal: 20, borderBottomColor: '#A6A4A4', borderBottomWidth: 1, paddingBottom: 20}}>
            <Image source={require('./assets/dummy/lokasi-2.png')}/>
            <View style={{paddingLeft: 10}}>
              <Text style={{color:'#524848', fontFamily: 'NotoSansTC-Bold-Alphabetic', fontSize: 14}}>Bank Sampah Melati Bersih</Text>
              <Text style={{fontSize: 11, lineHeight: 25}} >Perumahan Ciputat Baru. Jl. Flamboyan{"\n"}RT 02/RW06, Kelurahan Sawah, Ciputat{"\n"}Tangerang Selatan</Text>
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=> {
            navigation.navigate('Bank Sampah Hijau Lestari')
            }}>
          <View style={{paddingTop: 20, flexDirection: 'row', paddingHorizontal: 20, borderBottomColor: '#A6A4A4', borderBottomWidth: 1, paddingBottom: 20}}>
            <Image source={require('./assets/dummy/lokasi-3.png')}/>
            <View style={{paddingLeft: 10}}>
              <Text style={{color:'#524848', fontFamily: 'NotoSansTC-Bold-Alphabetic', fontSize: 14}}>Bank Sampah Induk Hijau Lestari</Text>
              <Text style={{fontSize: 11, lineHeight: 25}} >Jl. Jendral Ahmad Yani No.752, Cicaheum,{"\n"}Kec. Kiaracondong, Kota Bandung, Jawa{"\n"}Barat 40282</Text>
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=> {
            navigation.navigate('Bank Sampah Babakan Ciamis')
            }}>
          <View style={{paddingTop: 20, flexDirection: 'row', paddingHorizontal: 20, borderBottomColor: '#A6A4A4', borderBottomWidth: 1, paddingBottom: 20}}>
            <Image source={require('./assets/dummy/lokasi-4.png')}/>
            <View style={{paddingLeft: 10}}>
              <Text style={{color:'#524848', fontFamily: 'NotoSansTC-Bold-Alphabetic', fontSize: 14}}>Bank Sampah Babakan Ciamis</Text>
              <Text style={{fontSize: 11, lineHeight: 25}} >Jl. Babakan Ciamis No.109, Babakan{"\n"}Ciamis, Kec. Sumur Bandung, Kota{"\n"}Bandung, Jawa Barat 40117</Text>
            </View>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}

function BankSampahWijayaKusuma({ navigation }) {
  return (
    <View style={{backgroundColor : '#E9FFFD', flex: 1}}>
      <View style={{paddingTop: 10}}>
        <View style={{backgroundColor: '#C4C4C4'}}>
          <Text style={{fontWeight: 'bold', textAlign: 'center', color: '#000', fontSize: 14}}>Bank Sampah Wijaya Kusuma</Text>
          <Text style={{fontWeight: '400', textAlign: 'center', color: '#000', fontSize: 14}}>Jl. Teuku Cik Ditiro II No.5, RT.1/RW.2, Gondangdia, Kec. Menteng, Kota Jakarta Pusat, Daerah Khusus Ibukota Jakarta 10350</Text>
        </View>
        <View style={{paddingTop: 10}}>
          <Image style={{height: 320}} source={require('./assets/dummy/map-wijayakusuma.png')}/>
        </View>
        <View style={{borderBottomWidth:1, paddingTop: 10, opacity: 0.5, borderBottomColor: '#A6A4A4'}}></View>
        <View style={{paddingTop: 10}}>
          <View style={{flexDirection: 'row', justifyContent: 'space-evenly'}}>
            <Image source={require('./assets/dummy/wijayakusuma.png')}/>
            <Image source={require('./assets/dummy/add-foto.png')}/>
          </View>
        </View>
        <View style={{paddingLeft: 15}}>
          <View style={{flexDirection: 'row', paddingTop: 10}}>
            <Image source={require('./assets/icon/profile-ari.png')}/>
            <View style={{paddingLeft: 10}}>
              <Text style={{fontWeight: 'bold', textAlign: 'center', color: '#000', fontSize: 14}}>Ari Cahya Saputra</Text>
              <View style={{flexDirection: 'row'}}>
                <Text style={{textAlign: 'center', color: '#686565', fontSize: 10}}>Local Guide</Text>
                <Text style={{textAlign: 'center', color: '#686565', fontSize: 10}}>. 125 ulasan</Text>
              </View>
            </View>
          </View>
          <View style={{flexDirection: 'row'}}>
            <Image source={require('./assets/icon/bintang-5.png')}/>
            <Text style={{color: '#686565', fontSize: 10, paddingTop: 3, paddingLeft: 8}}>1 Bulan lalu</Text>
          </View>
          <View style={{flexDirection: 'row'}}>
            <Text style={{fontWeight: '400', color: '#000', fontSize: 12, paddingTop: 5}}>Bank Sampah bagus, cuman tempat lumayan jauh</Text>
            <View style={{flexDirection: 'row'}}>
              <Image style={{marginTop: 3, marginLeft: 20}} source={require('./assets/icon/like.png')}/>
              <Image style={{marginTop: 3, marginLeft: 25}} source={require('./assets/icon/dislike.png')}/>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}

function BankSampahMelati({ navigation }) {
  return (
    <View style={{backgroundColor : '#E9FFFD', flex: 1}}>
      <View style={{paddingTop: 10}}>
        <View style={{backgroundColor: '#C4C4C4'}}>
          <Text style={{fontWeight: 'bold', textAlign: 'center', color: '#000', fontSize: 14}}>Bank Sampah Melati</Text>
          <Text style={{fontWeight: '400', textAlign: 'center', color: '#000', fontSize: 14}}>Jl. St. KA Cicayur No.27, Cisauk, Kec. Cisauk, Kabupaten Tangerang, Banten 15341</Text>
        </View>
        <View style={{paddingTop: 10}}>
          <Image style={{height: 320}} source={require('./assets/dummy/map-melati.png')}/>
        </View>
        <View style={{borderBottomWidth:1, paddingTop: 10, opacity: 0.5, borderBottomColor: '#A6A4A4'}}></View>
        <View style={{paddingTop: 10}}>
          <View style={{flexDirection: 'row', justifyContent: 'space-evenly'}}>
            <Image source={require('./assets/dummy/melati.png')}/>
            <Image source={require('./assets/dummy/add-foto.png')}/>
          </View>
        </View>
        <View style={{paddingLeft: 15}}>
          <View style={{flexDirection: 'row', paddingTop: 10}}>
            <Image source={require('./assets/icon/profile-alvin.png')}/>
            <View style={{paddingLeft: 10}}>
              <Text style={{fontWeight: 'bold', textAlign: 'center', color: '#000', fontSize: 14}}>Alvin Anandra Brilliandy</Text>
              <View style={{flexDirection: 'row'}}>
                <Text style={{textAlign: 'center', color: '#686565', fontSize: 10}}>Local Guide</Text>
                <Text style={{textAlign: 'center', color: '#686565', fontSize: 10}}>. 125 ulasan</Text>
              </View>
            </View>
          </View>
          <View style={{flexDirection: 'row'}}>
            <Image source={require('./assets/icon/bintang-3.png')}/>
            <Text style={{color: '#686565', fontSize: 10, paddingTop: 3, paddingLeft: 8}}>1 Bulan lalu</Text>
          </View>
          <View style={{flexDirection: 'row'}}>
            <Text style={{width: 280, fontWeight: '400', color: '#000', fontSize: 12, paddingTop: 5, paddingRight: 25}}>Bank Sampah bagus, cuman tempat lumayan jauh. Dan tidak memuaskan</Text>
            <View style={{flexDirection: 'row'}}>
              <Image style={{marginTop: 3, marginLeft: 0}} source={require('./assets/icon/like.png')}/>
              <Image style={{marginTop: 3, marginLeft: 25}} source={require('./assets/icon/dislike.png')}/>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}

function BankBabakanCiamis({ navigation }) {
  return (
    <View style={{backgroundColor : '#E9FFFD', flex: 1}}>
      <View style={{paddingTop: 10}}>
        <View style={{backgroundColor: '#C4C4C4'}}>
          <Text style={{fontWeight: 'bold', textAlign: 'center', color: '#000', fontSize: 14}}>Bank Sampah Melati</Text>
          <Text style={{fontWeight: '400', textAlign: 'center', color: '#000', fontSize: 14}}>Jl. St. KA Cicayur No.27, Cisauk, Kec. Cisauk, Kabupaten Tangerang, Banten 15341</Text>
        </View>
        <View style={{paddingTop: 10}}>
          <Image style={{height: 320}} source={require('./assets/dummy/map-babakanciamis.png')}/>
        </View>
        <View style={{borderBottomWidth:1, paddingTop: 10, opacity: 0.5, borderBottomColor: '#A6A4A4'}}></View>
        <View style={{paddingTop: 10}}>
          <View style={{flexDirection: 'row', justifyContent: 'space-evenly'}}>
            <Image source={require('./assets/dummy/babakan-ciamis.png')}/>
            <Image source={require('./assets/dummy/add-foto.png')}/>
          </View>
        </View>
        <View style={{paddingLeft: 15}}>
          <View style={{flexDirection: 'row', paddingTop: 10}}>
            <Image source={require('./assets/icon/profile-alvin.png')}/>
            <View style={{paddingLeft: 10}}>
              <Text style={{fontWeight: 'bold', textAlign: 'center', color: '#000', fontSize: 14}}>Alvin Anandra Brilliandy</Text>
              <View style={{flexDirection: 'row'}}>
                <Text style={{textAlign: 'center', color: '#686565', fontSize: 10}}>Local Guide</Text>
                <Text style={{textAlign: 'center', color: '#686565', fontSize: 10}}>. 125 ulasan</Text>
              </View>
            </View>
          </View>
          <View style={{flexDirection: 'row'}}>
            <Image source={require('./assets/icon/bintang-4.png')}/>
            <Text style={{color: '#686565', fontSize: 10, paddingTop: 3, paddingLeft: 8}}>1 Bulan lalu</Text>
          </View>
          <View style={{flexDirection: 'row'}}>
            <Text style={{width: 280, fontWeight: '400', color: '#000', fontSize: 12, paddingTop: 5, paddingRight: 25}}>Bank Sampah bagus, cuman tempat lumayan jauh.</Text>
            <View style={{flexDirection: 'row'}}>
              <Image style={{marginTop: 3, marginLeft: 0}} source={require('./assets/icon/like.png')}/>
              <Image style={{marginTop: 3, marginLeft: 25}} source={require('./assets/icon/dislike.png')}/>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}

function BankHijauLestari({ navigation }) {
  return (
    <View style={{backgroundColor : '#E9FFFD', flex: 1}}>
      <View style={{paddingTop: 10}}>
        <View style={{backgroundColor: '#C4C4C4'}}>
          <Text style={{fontWeight: 'bold', textAlign: 'center', color: '#000', fontSize: 14}}>Bank Sampah Melati</Text>
          <Text style={{fontWeight: '400', textAlign: 'center', color: '#000', fontSize: 14}}>Jl. St. KA Cicayur No.27, Cisauk, Kec. Cisauk, Kabupaten Tangerang, Banten 15341</Text>
        </View>
        <View style={{paddingTop: 10}}>
          <Image style={{height: 320}} source={require('./assets/dummy/map-hijaulestari.png')}/>
        </View>
        <View style={{borderBottomWidth:1, paddingTop: 10, opacity: 0.5, borderBottomColor: '#A6A4A4'}}></View>
        <View style={{paddingTop: 10}}>
          <View style={{flexDirection: 'row', justifyContent: 'space-evenly'}}>
            <Image source={require('./assets/dummy/hijau-lestari.png')}/>
            <Image source={require('./assets/dummy/add-foto.png')}/>
          </View>
        </View>
        <View style={{paddingLeft: 15}}>
          <View style={{flexDirection: 'row', paddingTop: 10}}>
            <Image source={require('./assets/icon/profile-ari.png')}/>
            <View style={{paddingLeft: 10}}>
              <Text style={{fontWeight: 'bold', textAlign: 'center', color: '#000', fontSize: 14}}>Ari Cahya Saputra</Text>
              <View style={{flexDirection: 'row'}}>
                <Text style={{textAlign: 'center', color: '#686565', fontSize: 10}}>Local Guide</Text>
                <Text style={{textAlign: 'center', color: '#686565', fontSize: 10}}>. 125 ulasan</Text>
              </View>
            </View>
          </View>
          <View style={{flexDirection: 'row'}}>
            <Image source={require('./assets/icon/bintang-4.png')}/>
            <Text style={{color: '#686565', fontSize: 10, paddingTop: 3, paddingLeft: 8}}>1 Bulan lalu</Text>
          </View>
          <View style={{flexDirection: 'row'}}>
            <Text style={{width: 280, fontWeight: '400', color: '#000', fontSize: 12, paddingTop: 5, paddingRight: 25}}>Bank Sampah bagus, cuman tempat lumayan jauh</Text>
            <View style={{flexDirection: 'row'}}>
              <Image style={{marginTop: 3, marginLeft: 0}} source={require('./assets/icon/like.png')}/>
              <Image style={{marginTop: 3, marginLeft: 25}} source={require('./assets/icon/dislike.png')}/>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}

function Event({ navigation }) {
  return (
    <ScrollView  style={{backgroundColor : '#E9FFFD', flex: 1}}>
      <View>
        <View style={{}}>
          <View style={{paddingHorizontal: 25}}>
            <View style={{marginTop: 15, backgroundColor: '#FFFFFF'}}>
              <Image style={{height: 212, width: 345}} source={require('./assets/dummy/event-1.png')}/>
              <View style={{width: 345, marginTop: 165, position: 'absolute', backgroundColor: '#FFFFFF', elevation: 5, borderBottomRightRadius: 6, borderBottomLeftRadius: 6}}>
                <Text style={{color:'#524848', fontFamily: 'NotoSansTC-Medium-Alphabetic', fontSize: 13, paddingLeft: 5, marginTop: 15}}>Sosialisasi Mengenai Bank Sampah</Text>
                <View style={{flexDirection: 'row', paddingTop: 5, paddingLeft: 5, marginBottom: 10}}>
                  <View style={{paddingTop: 10, flexDirection: 'row'}}>
                    <Text style={{color:'#33D1C1', fontFamily: 'NotoSansTC-Bold-Alphabetic', fontSize: 16, textAlign: 'center'}}>20-07-2021</Text>
                  </View>
                  <TouchableOpacity style={{backgroundColor: '#33D1C1', paddingHorizontal: 20, paddingVertical: 7, borderRadius: 10, marginLeft: 140, elevation: 5}}>
                    <Text style={{fontSize: 13, fontWeight: 'bold', color: 'white', textAlign: 'center'}}>Join Event</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
            <View style={{paddingTop: 35}}>
              <View style={{marginTop: 15, backgroundColor: '#FFFFFF'}}>
                <Image style={{height: 212, width: 345}} source={require('./assets/dummy/event-2.png')}/>
                <View style={{width: 345, marginTop: 165, position: 'absolute', backgroundColor: '#FFFFFF', elevation: 5, borderBottomRightRadius: 6, borderBottomLeftRadius: 6}}>
                  <Text style={{color:'#524848', fontFamily: 'NotoSansTC-Medium-Alphabetic', fontSize: 13, paddingLeft: 5, marginTop: 15}}>Kerja Bakti Bulanan, di kawasan Sukabirus</Text>
                  <View style={{flexDirection: 'row', paddingTop: 5, paddingLeft: 5, marginBottom: 10}}>
                    <View style={{paddingTop: 10, flexDirection: 'row'}}>
                      <Text style={{color:'#33D1C1', fontFamily: 'NotoSansTC-Bold-Alphabetic', fontSize: 16, textAlign: 'center'}}>20-03-2021</Text>
                    </View>
                    <TouchableOpacity style={{backgroundColor: '#33D1C1', paddingHorizontal: 20, paddingVertical: 7, borderRadius: 10, marginLeft: 115, elevation: 5}}>
                      <Text style={{fontSize: 13, fontWeight: 'bold', color: 'white', textAlign: 'center'}}>Event Berakhir</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            </View>
            <View style={{paddingTop: 35, marginBottom: 65}}>
              <View style={{marginTop: 15, backgroundColor: '#FFFFFF'}}>
                <Image style={{height: 212, width: 345}} source={require('./assets/dummy/event-3.png')}/>
                <View style={{width: 345, marginTop: 165, position: 'absolute', backgroundColor: '#FFFFFF', elevation: 5, borderBottomRightRadius: 6, borderBottomLeftRadius: 6}}>
                  <Text style={{color:'#524848', fontFamily: 'NotoSansTC-Medium-Alphabetic', fontSize: 13, paddingLeft: 5, marginTop: 15}}>Proses daur ulang sampah plastik, menjadi tas</Text>
                  <View style={{flexDirection: 'row', paddingTop: 5, paddingLeft: 5, marginBottom: 10}}>
                    <View style={{paddingTop: 10, flexDirection: 'row'}}>
                      <Text style={{color:'#33D1C1', fontFamily: 'NotoSansTC-Bold-Alphabetic', fontSize: 16, textAlign: 'center'}}>15-02-2021</Text>
                    </View>
                    <TouchableOpacity style={{backgroundColor: '#33D1C1', paddingHorizontal: 20, paddingVertical: 7, borderRadius: 10, marginLeft: 115, elevation: 5}}>
                      <Text style={{fontSize: 13, fontWeight: 'bold', color: 'white', textAlign: 'center'}}>Event Berakhir</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

function Feed({ navigation }) {
  return (
    <ScrollView>
      <View style={{backgroundColor : '#E9FFFD', flex: 1}}>
        <View style={{borderBottomWidth: 1, borderBottomColor: 'rgba(166, 164, 164, 0.3)'}}>
          <Text style={{ fontFamily: 'Oswald-SemiBold', color:'#33D1C1', fontSize: 36, textAlign: 'center'}}>TrashMon</Text>
        </View>
        <View style={{backgroundColor: '#FFF', marginHorizontal: 25, marginVertical: 25, paddingVertical: 10, paddingHorizontal: 10, borderRadius: 10, elevation: 10}}>
          <View>
            <Text style={{fontSize: 18, fontWeight: 'bold', color: '#000'}}>Update Fitur DANA Segera Hadir</Text>
            <Text style={{fontSize: 12, fontWeight: '400', color: '#000', paddingTop: 6}}>Reedem point akan lebih muda dengan menggunakan DANA. Tukarkan pointmu menjadi saldo DANA</Text>
          </View>
          <View style={{paddingTop: 15}}>
            <Image style={{width: 320, height: 180, resizeMode: 'stretch'}} source={require('./assets/dummy/dana.png')}/>
            <View style={{zIndex: 1, position: 'absolute', paddingTop: 165}}>
              <Image style={{width: 100, height: 28, resizeMode: 'stretch'}} source={require('./assets/dummy/update.png')}/>
            </View>
          </View>
        </View>
        <View style={{backgroundColor: '#FFF', marginHorizontal: 25, marginVertical: 10, paddingVertical: 10, paddingHorizontal: 10, borderRadius: 10, elevation: 10}}>
          <View>
            <Text style={{fontSize: 18, fontWeight: 'bold', color: '#000'}}>Update Fitur LinkAja Segera Hadir</Text>
            <Text style={{fontSize: 12, fontWeight: '400', color: '#000', paddingTop: 6}}>Reedem point akan lebih mudah dengan menggunakan LinkAja. Tukarkan pointmu menjadi saldo LinkAJa</Text>
          </View>
          <View style={{paddingTop: 15}}>
            <Image style={{width: 320, height: 180, resizeMode: 'stretch'}} source={require('./assets/dummy/linkaja.png')}/>
            <View style={{zIndex: 1, position: 'absolute', paddingTop: 170}}>
              <Image style={{width: 100, height: 28, resizeMode: 'stretch'}} source={require('./assets/dummy/update.png')}/>
            </View>
          </View>
        </View>
        <View style={{backgroundColor: '#FFF', marginHorizontal: 25, marginVertical: 10, paddingVertical: 10, paddingHorizontal: 10, borderRadius: 10, elevation: 10}}>
          <View>
            <Text style={{fontSize: 18, fontWeight: 'bold', color: '#000'}}>Movement bersama LeMinerale Segera Hadir</Text>
            <Text style={{fontSize: 12, fontWeight: '400', color: '#000', paddingTop: 6}}>Bergabunglah dengan gerakan kami. Le Minerale Recycling Program</Text>
          </View>
          <View style={{paddingTop: 15}}>
            <Image style={{width: 320, height: 180, resizeMode: 'stretch'}} source={require('./assets/dummy/leminerale.png')}/>
          </View>
        </View>
        <View style={{backgroundColor: '#FFF', marginHorizontal: 25, marginVertical: 10, paddingVertical: 10, paddingHorizontal: 10, borderRadius: 10, elevation: 10, marginBottom: 25}}>
          <View>
            <Text style={{fontSize: 18, fontWeight: 'bold', color: '#000'}}>TrashMon Peduli Lingkungan</Text>
            <Text style={{fontSize: 12, fontWeight: '400', color: '#000', paddingTop: 6}}>Terimakasih telah bergabung dan menggunakan aplikasi kami. sehingga kami dapat membantu alam sekitar.</Text>
          </View>
          <View style={{paddingTop: 15}}>
            <Image style={{width: 320, height: 180, resizeMode: 'stretch'}} source={require('./assets/dummy/mangrove.png')}/>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

function Statistic({ navigation }) {
  const [sampahPlastik, setSampahPlastik] = React.useState(0)
  const [sampahKertas, setSampahKertas] = React.useState(0)
  const [sampahKaca, setSampahKaca] = React.useState(0)
  const [totalTMPoint, setTotalTMPoint] = React.useState()
  const [data, setData] = React.useState()

  React.useEffect( () => {
    var user = auth().currentUser;
    database()
    .ref('users')
    .child(user.uid)
    .on('value', snapshot => {
      let data=snapshot.val()
      setData(snapshot.val())
      setSampahPlastik(data.sampahPlastik)
      setSampahKertas(data.sampahKertas)
      setSampahKaca(data.sampahKaca)
      setTotalTMPoint(data.totalTMPoint)

    });
  }, [])
  return (
    <ScrollView  style={{backgroundColor : '#E9FFFD', flex: 1}}>
      <View style={{borderBottomWidth: 1, borderBottomColor: 'rgba(166, 164, 164, 0.3)' }}>
        <Text style={{ fontFamily: 'Oswald-SemiBold', color:'#33D1C1', fontSize: 36, textAlign: 'center'}}>TrashMon</Text>
      </View>
      <View style={{paddingHorizontal: 25}}>
        <Text style={{fontFamily: 'NotoSansTC-Bold-Alphabetic', fontSize: 26, marginTop: 3, paddingTop: 25, color: '#554D4D'}}>Statistik Daur Ulang</Text>
        <View>
          <Text style={{fontFamily: 'NotoSansTC-Medium-Alphabetic', fontSize: 13, marginTop: 3, paddingTop: 5, color: '#524848', paddingBottom: 15}}>Kamu keren, berikut hasil usaha daur ulangmu bersama TrashMon</Text>
        </View>
        <View style={{paddingTop: 20}}>
          <View style={{zIndex: 1, flexDirection: 'row', marginLeft: 10}}>
            <Image style={{position: 'absolute'}} source={require('./assets/icon/botol.png')}/>
            <Text style={{position: 'absolute', fontFamily: 'NotoSansTC-Regular-Alphabetic', fontSize: 16, color: '#FFF', paddingLeft: 45, paddingTop: 3}}>Kaca</Text>
            <View>
              <Text style={{position: 'absolute', fontFamily: 'NotoSansTC-Medium-Alphabetic', fontSize: 36, color: '#FFF', paddingLeft: 155, paddingTop: 50}}>{sampahKaca}</Text>
              <Text style={{position: 'absolute', fontFamily: 'NotoSansTC-Regular-Alphabetic', fontSize: 18, color: '#FFF', paddingLeft: 130, paddingTop: 90}}>Kilogram</Text>
            </View>
          </View>
          <Image style={{width: 340, borderRadius: 10, position: 'absolute'}} source={require('./assets/dummy/kaca.png')}/>
        </View>
        <View style={{paddingTop: 180}}>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <View>
              <Image style={{width: 165, borderRadius: 10}} source={require('./assets/dummy/kertas.png')}/>
              <View style={{position: 'absolute', flexDirection: 'row'}}>
                <Image style={{position: 'absolute', marginLeft: 10, marginTop: 10}} source={require('./assets/icon/koran.png')}/>
                <Text style={{position: 'absolute', fontFamily: 'NotoSansTC-Regular-Alphabetic', fontSize: 16, color: '#FFF', paddingLeft: 35, paddingTop: 14}}>Kertas</Text>
                <View>
                  <Text style={{position: 'absolute', fontFamily: 'NotoSansTC-Medium-Alphabetic', fontSize: 36, color: '#FFF', paddingLeft: 75, paddingTop: 50}}>{sampahKertas}</Text>
                  <Text style={{position: 'absolute', fontFamily: 'NotoSansTC-Regular-Alphabetic', fontSize: 18, color: '#FFF', paddingLeft: 50, paddingTop: 90}}>Kilogram</Text>
                </View>
              </View>
            </View>
            <View>
              <Image style={{width: 165, borderRadius: 10}} source={require('./assets/dummy/plastik.png')}/>
              <View style={{position: 'absolute', flexDirection: 'row'}}>
                <Image style={{position: 'absolute', marginLeft: 10, marginTop: 10}} source={require('./assets/icon/botol-plastik.png')}/>
                <Text style={{position: 'absolute', fontFamily: 'NotoSansTC-Regular-Alphabetic', fontSize: 16, color: '#FFF', paddingLeft: 35, paddingTop: 14}}>Plastik</Text>
                <View>
                  <Text style={{position: 'absolute', fontFamily: 'NotoSansTC-Medium-Alphabetic', fontSize: 36, color: '#FFF', paddingLeft: 75, paddingTop: 50}}>{sampahPlastik}</Text>
                  <Text style={{position: 'absolute', fontFamily: 'NotoSansTC-Regular-Alphabetic', fontSize: 18, color: '#FFF', paddingLeft: 50, paddingTop: 90}}>Kilogram</Text>
                </View>
              </View>
            </View>
          </View>
        </View>
        <View style={{backgroundColor: '#FFF', marginTop: 25, borderRadius: 10, elevation: 10, marginBottom: 20}}>
          <Text style={{fontFamily: 'NotoSansTC-Bold-Alphabetic', fontSize: 20, paddingTop: 10, color: '#554D4D', textAlign: 'center'}}>Total Point yang kamu dapatkan</Text>
          <View style={{flexDirection: 'row', justifyContent: 'center'}}>
            <Text style={{fontFamily: 'NotoSansTC-Bold-Alphabetic', fontSize: 20, paddingTop: 15, color: '#554D4D', textAlign: 'center', paddingBottom: 15, color: '#33D1C1'}}>{totalTMPoint} </Text>
            <Text style={{fontFamily: 'NotoSansTC-Bold-Alphabetic', fontSize: 20, paddingTop: 15, color: '#554D4D', textAlign: 'center', paddingBottom: 15}}>TMPoints</Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

function Account({ navigation }) {
  const [namaLengkap, setNamaLengkap] = React.useState()
  const [TMPoint, setTMPoint] = React.useState()
  const [data, setData] = React.useState()

  React.useEffect( () => {
    var user = auth().currentUser;
    database()
    .ref('users')
    .child(user.uid)
    .on('value', snapshot => {
      let data=snapshot.val()
      setData(snapshot.val())
      setNamaLengkap(data.username)
      setTMPoint(data.TMPoint)
    });
  }, [])
  return (
    <View style={{backgroundColor : '#E9FFFD', flex: 1}}>
        <View style={{borderBottomWidth: 1, borderBottomColor: 'rgba(166, 164, 164, 0.3)' }}>
          <Text style={{ fontFamily: 'Oswald-SemiBold', color:'#33D1C1', fontSize: 36, textAlign: 'center'}}>TrashMon</Text>
        </View>
      <View style={{paddingHorizontal: 25, marginTop: 25}}>
        <View style={{alignItems: 'center', backgroundColor: '#DBF5F3', paddingTop: 15, borderRadius: 10}}>
          <Image source={require('./assets/icon/user-profile.png')}/>
          <Text style={{fontFamily: 'NotoSansTC-Bold-Alphabetic', fontSize: 26, marginTop: 3, paddingTop: 5, color: '#554D4D'}}>{namaLengkap}</Text>
          <View style={{flexDirection: 'row', marginBottom: 15}}>
            <Text style={{fontFamily: 'NotoSansTC-Bold-Alphabetic', fontSize: 16, marginTop: 3, paddingTop: 5, color: '#33D1C1'}}>{TMPoint} </Text>
            <Text style={{fontFamily: 'NotoSansTC-Bold-Alphabetic', fontSize: 16, marginTop: 3, paddingTop: 5, color: '#766F6F'}}>Points</Text>
          </View>
        </View>
        <View style={{paddingTop: 10}}>
          <Text style={{fontFamily: 'NotoSansTC-Medium-Alphabetic', fontSize: 14, marginTop: 3, paddingTop: 5, color: '#524848', opacity: 0.59}}>Profile</Text>
        </View>
        <TouchableOpacity  onPress={()=> {
            navigation.navigate('Ubah Profil')
            }}>
          <View>
            <View style={{flexDirection: 'row', paddingTop: 5}}>
              <Image style={{width: 27, height: 31}} source={require('./assets/icon/ubah-profil.png')}/>
              <Text style={{fontFamily: 'NotoSansTC-Medium-Alphabetic', fontSize: 16, marginTop: 3, paddingTop: 5, color: '#524848', paddingLeft: 10}}>Ubah Profil</Text>
              <View style={{marginLeft: 208, paddingTop: 3}}>
                <Image source={require('./assets/icon/next.png')}/>
              </View>
            </View>
          </View>
        </TouchableOpacity>
        <View style={{paddingTop: 10}}>
          <Text style={{fontFamily: 'NotoSansTC-Medium-Alphabetic', fontSize: 14, marginTop: 3, paddingTop: 5, color: '#524848', opacity: 0.59}}>Tentang</Text>
        </View>
        <TouchableOpacity onPress={()=> {
            navigation.navigate('Syarat Dan Ketentuan')
            }}>
          <View>
            <View style={{flexDirection: 'row', paddingTop: 5}}>
              <Image source={require('./assets/icon/syarat-dan-ketentuan.png')}/>
              <Text style={{fontFamily: 'NotoSansTC-Medium-Alphabetic', fontSize: 16, marginTop: 3, paddingTop: 5, color: '#524848', paddingLeft: 5}}>Syarat dan ketentuan</Text>
              <View style={{marginLeft: 133, paddingTop: 3}}>
                <Image source={require('./assets/icon/next.png')}/>
              </View>
            </View>
          </View>
        </TouchableOpacity>
        <View style={{borderBottomWidth: 1, borderBottomColor: '#A6A4A4', paddingTop: 10, opacity: 0.3}}></View>
        <TouchableOpacity onPress={()=> {
            navigation.navigate('Kebijakan Privasi')
            }}>
          <View style={{paddingTop: 5, paddingLeft: 3}}>
            <View style={{flexDirection: 'row', paddingTop: 5}}>
              <Image source={require('./assets/icon/kebijakan-privasi.png')}/>
              <Text style={{fontFamily: 'NotoSansTC-Medium-Alphabetic', fontSize: 16, marginTop: 3, paddingTop: 5, color: '#524848', paddingLeft: 10}}>Kebijakan Privasi</Text>
              <View style={{marginLeft: 161, paddingTop: 3}}>
                <Image source={require('./assets/icon/next.png')}/>
              </View>
            </View>
          </View>
        </TouchableOpacity>
        <View style={{borderBottomWidth: 1, borderBottomColor: '#A6A4A4', paddingTop: 10, opacity: 0.3}}></View>
        <TouchableOpacity onPress={()=> {
            navigation.navigate('Pernyataan Umum')
            }}>
          <View style={{paddingTop: 5, paddingLeft: 3}}>
            <View style={{flexDirection: 'row', paddingTop: 5}}>
              <Image source={require('./assets/icon/pernyataan-umum.png')}/>
              <Text style={{fontFamily: 'NotoSansTC-Medium-Alphabetic', fontSize: 16, marginTop: 3, paddingTop: 5, color: '#524848', paddingLeft: 10}}>Pernyataan Umum</Text>
              <View style={{marginLeft: 153, paddingTop: 3}}>
                <Image source={require('./assets/icon/next.png')}/>
              </View>
            </View>
          </View>
        </TouchableOpacity>
        <View style={{borderBottomWidth: 1, borderBottomColor: '#A6A4A4', paddingTop: 10, opacity: 0.3}}></View>
          <View style={{paddingTop: 10}}>
            <Text style={{fontFamily: 'NotoSansTC-Medium-Alphabetic', fontSize: 14, marginTop: 3, paddingTop: 5, color: '#524848', opacity: 0.59}}>Lainnya</Text>
          </View>
        </View>
        <View style={{paddingTop: 5, paddingLeft: 25}}>
            <View style={{flexDirection: 'row', paddingTop: 5}}>
              <Image source={require('./assets/icon/versi.png')}/>
              <Text style={{fontFamily: 'NotoSansTC-Medium-Alphabetic', fontSize: 16, marginTop: 3, paddingTop: 5, color: '#524848', paddingLeft: 10}}>Versi App</Text>
              <View style={{paddingLeft: 180}}>
                <Text style={{fontFamily: 'NotoSansTC-Medium-Alphabetic', fontSize: 16, marginTop: 3, paddingTop: 5, color: '#524848', paddingLeft: 10}}>1.0.34</Text>
              </View>
            </View>
        </View>
        <View style={{paddingHorizontal: 25}}>
          <View style={{borderBottomWidth: 1, borderBottomColor: '#A6A4A4', paddingTop: 10, opacity: 0.3}}></View>
        </View>
        <TouchableOpacity onPress={()=> {
            BackHandler.exitApp()
            }}>
          <View style={{paddingTop: 5, paddingLeft: 25}}>
            <View style={{flexDirection: 'row', paddingTop: 5}}>
              <Image source={require('./assets/icon/keluar.png')}/>
              <Text style={{fontFamily: 'NotoSansTC-Medium-Alphabetic', fontSize: 16, marginTop: 3, paddingTop: 5, color: '#F13535', paddingLeft: 10}}>Keluar</Text>
            </View>
          </View>
        </TouchableOpacity>
    </View>
  );
}

function UbahProfil({ navigation }) {
  const [namaLengkap, setNamaLengkap] = React.useState()
  const [NoHandphone, setNoHandphone] = React.useState()
  const [email, setEmail] = React.useState()
  const [password, setPassword] = React.useState()
  const [alamat, setAlamat] = React.useState()
  const [data, setData] = React.useState()

  React.useEffect( () => {
    var user = auth().currentUser;
    database()
    .ref('users')
    .child(user.uid)
    .once('value')
    .then(snapshot => {
      let data=snapshot.val()
      setData(snapshot.val())
      setNamaLengkap(data.username)
      setNoHandphone(data.noHP)
      setEmail(data.email)
      setPassword(data.password)
      setAlamat(data.alamat)
    });
  }, [])
   
  return (
    <View style={{backgroundColor : '#E9FFFD', flex: 1, paddingHorizontal: 25}}>
      <ScrollView>
        <View>
          <View style={{alignItems: 'center', paddingTop: 25}}>
            <Image source={require('./assets/icon/user-profile.png')}/>
          </View>
          <View>      
            <View style={{backgroundColor : '#E9FFFD', paddingLeft: 15}}>
              <Text style={{fontFamily: 'NotoSansTC-Medium-Alphabetic', fontSize: 14, paddingTop: 15, color: '#33D1C1'}}>Nama Lengkap</Text>
            </View>
            <View style={{width: 340, paddingTop: 10}}>
              <TextInput style={{borderWidth: 1, borderRadius: 6, borderColor: 'rgba(0, 0, 0, 0.31)', fontSize: 14, fontFamily: 'NotoSansTC-Medium-Alphabetic', paddingLeft: 15}}
              placeholder= {namaLengkap}
              placeholderTextColor='#33D1C1'
              onChangeText={text => setNamaLengkap(text)}
              value={namaLengkap}
              />
            </View>
          </View>
          <View style={{paddingLeft: 15}}>
            <Text style={{fontFamily: 'NotoSansTC-Medium-Alphabetic', fontSize: 14, paddingTop: 15, color: '#33D1C1'}}>No Handphone</Text>
          </View>
          <View style={{width: 340, paddingTop: 10}}>
              <TextInput style={{borderWidth: 1, borderRadius: 6, borderColor: 'rgba(0, 0, 0, 0.31)', fontSize: 14, fontFamily: 'NotoSansTC-Medium-Alphabetic', paddingLeft: 15}}
              placeholder= {NoHandphone}
              placeholderTextColor='#33D1C1'
              onChangeText={text => setNoHandphone(text)}
              value={NoHandphone}
              />
          </View>
          <View style={{paddingLeft: 15}}>
            <Text style={{fontFamily: 'NotoSansTC-Medium-Alphabetic', fontSize: 14, paddingTop: 15, color: '#33D1C1'}}>Email</Text>
          </View>
          <View style={{width: 340, paddingTop: 10}}>
              <TextInput style={{borderWidth: 1, borderRadius: 6, borderColor: 'rgba(0, 0, 0, 0.31)', fontSize: 14, fontFamily: 'NotoSansTC-Medium-Alphabetic', paddingLeft: 15}}
              placeholder= {email}
              placeholderTextColor='#33D1C1'
              onChangeText={text => setEmail(text)}
              value={email}
              />
          </View>
          <View style={{paddingLeft: 15}}>
            <Text style={{fontFamily: 'NotoSansTC-Medium-Alphabetic', fontSize: 14, paddingTop: 15, color: '#33D1C1'}}>Password</Text>
          </View>
          <View style={{width: 340, paddingTop: 10}}>
              <TextInput style={{borderWidth: 1, borderRadius: 6, borderColor: 'rgba(0, 0, 0, 0.31)', fontSize: 14, fontFamily: 'NotoSansTC-Medium-Alphabetic', paddingLeft: 15}}
              placeholder= {password}
              placeholderTextColor='#33D1C1'
              secureTextEntry= {true}
              onChangeText={text => setPassword(text)}
              value={password}
              />
          </View>
          <View style={{paddingLeft: 15}}>
            <Text style={{fontFamily: 'NotoSansTC-Medium-Alphabetic', fontSize: 14, paddingTop: 15, color: '#33D1C1'}}>Alamat</Text>
          </View>
          <View style={{width: 340, paddingTop: 10, marginBottom: 25}}>
              <TextInput style={{borderWidth: 1, borderRadius: 6, borderColor: 'rgba(0, 0, 0, 0.31)', fontSize: 14, fontFamily: 'NotoSansTC-Medium-Alphabetic', paddingLeft: 15}}
              placeholder= {alamat}
              placeholderTextColor='#33D1C1'
              onChangeText={text => setAlamat(text)}
              value={alamat}
              />
          </View>
          <View style={{marginBottom: 25}}>
            <TouchableOpacity
              onPress={()=> {
                var user = auth().currentUser;
                database()
                .ref('users')
                .child(user.uid)
                .update({
                  alamat: alamat,
                  email: email,
                  username: namaLengkap,
                  noHP: NoHandphone,
                  password: password,
                })
                navigation.navigate('Edit Profil Berhasil')
                }}
              style={{backgroundColor: '#33D1C1', paddingHorizontal: 35, paddingVertical: 8, borderRadius: 10, elevation: 5}}>
                <Text style={{fontSize: 16, color: 'white', textAlign: 'center', fontFamily: 'NotoSansTC-Regular-Alphabetic'}}>Simpan</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

function SyaratDanKetentuan({ navigation }) {
  return (
    <ScrollView  style={{backgroundColor : '#E9FFFD', flex: 1}}>
      <View style={{paddingHorizontal: 25}}>
        <View style={{paddingTop: 25}}>
          <Text style={{fontFamily: 'NotoSansTC-Bold-Alphabetic', fontSize: 18, color:'#524848'}}>Syarat dan ketentuan</Text>
        </View>
        <View style={{paddingTop: 10}}>
          <Text style={{fontFamily: 'NotoSansTC-Bold-Alphabetic', fontSize: 13, color:'#666666', lineHeight: 20}}>Dengan menggunakan atau mengunjungi situs aplikasi{"\n"}kami (aplikasi TrashMon), Anda dianggap telah{"\n"}membaca, memahami, menerima dan menyetujui{"\n"}Ketentuan Penggunaan ini. Ketentuan Penggunaan ini{"\n"}merupakan suatu perjanjian sah antara Anda dan PT{"\n"}TrashMon Indonesia.</Text>
        </View>
        <View style={{paddingTop: 10}}>
          <Text style={{fontFamily: 'NotoSansTC-Bold-Alphabetic', fontSize: 13, color:'#666666', lineHeight: 20}}>MOHON MEMBACA KETENTUAN PENGGUNAAN DAN{"\n"}KEBIJAKAN PRIVASI KAMI DENGAN SEKSAMA,{"\n"}SEBELUM MENGAKSES DAN MENGGUNAKAN{"\n"}LAYANAN KAMI.</Text>
        </View>
        <View style={{paddingTop: 10}}>
          <Text style={{fontFamily: 'NotoSansTC-Bold-Alphabetic', fontSize: 18, color:'#524848'}}>1. Hal-hal Umum</Text>
        </View>
        <View style={{paddingLeft: 15}}>
          <View style={{paddingTop: 10}}>
            <Text style={{fontFamily: 'NotoSansTC-Bold-Alphabetic', fontSize: 13, color:'#666666', lineHeight: 20}}>Aplikasi ini merupakan layanan berbentuk aplikasi yang{"\n"}menyediakan beragam layanan pengelolaan sampah{"\n"}dengan cara menghubungkan pengguna dengan{"\n"}penyedia layanan seperti Bank sampah maupun{"\n"}unit-unit pengelola sampah yang lain. Jenis layanan{"\n"}yang dapat dilayani melalui situs kami adalah: </Text>
          </View>
          <View style={{paddingTop: 10}}>
            <Text style={{fontFamily: 'NotoSansTC-Bold-Alphabetic', fontSize: 13, color:'#666666', lineHeight: 20}}>Layanan Jual-beli sampah yang transaksinya dilakukan{"\n"}secara langsung (COD) maupun melalui uang digital{"\n"}berupa poin (TrashMon poin)</Text>
          </View>
        </View>
        <View style={{paddingTop: 10}}>
          <Text style={{fontFamily: 'NotoSansTC-Bold-Alphabetic', fontSize: 18, color:'#524848'}}>2. Ketentuan untuk Menggunakan Aplikasi</Text>
        </View>
        <View style={{paddingLeft: 15}}>
          <View style={{paddingTop: 10, marginBottom: 20}}>
            <Text style={{fontFamily: 'NotoSansTC-Bold-Alphabetic', fontSize: 13, color:'#666666', lineHeight: 20}}>Anda menyatakan dan menjamin bahwa Anda adalah{"\n"}individu yang secara hukum berhak untuk mengadakan{"\n"}perjanjian yang mengikat berdasarkan hukum Negara{"\n"}Republik Indonesia, khususnya Ketentuan Penggunaan,{"\n"}untuk menggunakan situs Mallsampah dan bahwa Anda{"\n"}telah berusia minimal 13 tahun atau sudah menikah dan{"\n"}tidak berada di bawah perwalian. Jika tidak, kami atau{"\n"}Penyedia Layanan terkait, berhak berdasarkan hukum{"\n"}untuk membatalkan perjanjian yang dibuat dengan Anda.{"\n"}Anda selanjutnya menyatakan dan menjamin bahwa{"\n"}Anda memiliki hak, wewenang dan kapasitas untuk{"\n"}menggunakan Layanan dan mematuhi Ketentuan{"\n"}Penggunaan. Jika Anda mendaftar atas nama suatu{"\n"}badan hukum, Anda juga menyatakan dan menjamin{"\n"}bahwa Anda berwenang untuk mengadakan, dan{"\n"}mengikatkan diri entitas tersebut pada Ketentuan{"\n"}Penggunaan ini.</Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

function KebijakanPrivasi({ navigation }) {
  return (
    <ScrollView  style={{backgroundColor : '#E9FFFD', flex: 1}}>
      <View style={{paddingHorizontal: 25}}>
        <View style={{paddingTop: 25}}>
          <Text style={{fontFamily: 'NotoSansTC-Bold-Alphabetic', fontSize: 18, color:'#524848'}}>Kebijakan Privasi</Text>
        </View>
        <View style={{paddingTop: 10}}>
          <Text style={{fontFamily: 'NotoSansTC-Bold-Alphabetic', fontSize: 13, color:'#666666', lineHeight: 20}}>Ketentuan yang termuat di dalam Kebijakan Privasi{"\n"}berikut, menjelaskan bagaimana kami (PT. TrashMon{"\n"}Indonesia) mengumpulkan, dan menggunakan informasi{"\n"}pribadi anda yang kami dapatkan dari penggunaan{"\n"}layanan kami (Aps TrashMon). Dengan menggunakan atau{"\n"}mengunjungi situs/layanan Mallsampah, maka anda{"\n"}dianggap telah mengetahui dan menyetujui seluruh{"\n"}ketentuan kebijakan privasi ini. Berikut kami uraikan{"\n"}ketentuan Kebijakan Privasi dari layanan kami</Text>
        </View>
        <View style={{paddingTop: 30}}>
          <Text style={{fontFamily: 'NotoSansTC-Bold-Alphabetic', fontSize: 18, color:'#524848'}}>1. Informasi yang kami kumpulkan</Text>
        </View>
        <View style={{paddingLeft: 10}}>
          <View style={{paddingTop: 20}}>
            <Text style={{fontFamily: 'NotoSansTC-Bold-Alphabetic', fontSize: 13, color:'#666666', lineHeight: 20}}>1. Kami mengumpulkan Informasi Pribadi tertentu dari{"\n"}anda agar layanan kami dapat berjalan sebagaimana{"\n"}mestinya untuk anda akses dan gunakan, contoh :{"\n"}untuk dapat mengakses fitur-fitur yang lebih lengkap,{"\n"}anda diharuskan mendaftar dan melengkapi data{"\n"}pribadi anda terlebih dahulu.{"\n"}</Text>
          </View>
          <View>
            <Text style={{fontFamily: 'NotoSansTC-Bold-Alphabetic', fontSize: 13, color:'#666666', lineHeight: 20}}>2. Ketika anda mengunjungi Situs web/aplikasi kami,{"\n"}administrator situs web/aplikasi kami akan{"\n"}memproses data teknis seperti alamat IP anda,{"\n"}halaman web yang pernah anda kunjungi, browser{"\n"}internet yang anda gunakan, halaman web yang{"\n"}sebelumnya /selanjutnya anda kunjungi dan durasi{"\n"}setiap kunjungan/sesi yang memungkinkan kami{"\n"}untuk mengirimkan fungsi-fungsi Situs{"\n"}web/aplikasi.</Text>
          </View>
        </View>
        <View style={{paddingTop: 10}}>
          <Text style={{fontFamily: 'NotoSansTC-Bold-Alphabetic', fontSize: 18, color:'#524848'}}>2. Penggunaan Informasi yang Kami Kumpulkan</Text>
        </View>
        <View style={{paddingLeft: 15}}>
          <View style={{paddingTop: 10, marginBottom: 20}}>
            <Text style={{fontFamily: 'NotoSansTC-Bold-Alphabetic', fontSize: 13, color:'#666666', lineHeight: 20}}>Kami menggunakan email, nama, dan sandi akun{"\n"}anda untuk memverifikasi kepemilikan anda atas{"\n"}suatu akun, untuk berkomunikasi dengan anda{"\n"}sehubungan dengan penggunaan layanan dan{"\n"}untuk memberikan anda informasi mengenai situs{"\n"}Mallsampah. Kami juga dapat menggunakan email{"\n"}dan nomor telfon anda untuk mengirimkan pesan,{"\n"}pembaharuan yang bersifat umum atas situs{"\n"}Mallsampah, penawaran-penawaran khusus atau{"\n"}promosi-promosi. Kami juga akan mengirimkan email kepada anda yang meminta anda untuk{"\n"}berlangganan Daftar Surat Menyurat (Mailing List){"\n"}kami. Anda dapat memilih untuk tidak menerima{"\n"}informasi mengenai pembahrauan ini.</Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

function PernyataanUmum({ navigation }) {
  return (
    <ScrollView  style={{backgroundColor : '#E9FFFD', flex: 1}}>
      <View style={{paddingHorizontal: 25}}>
        <View style={{paddingTop: 25}}>
          <Text style={{fontFamily: 'NotoSansTC-Bold-Alphabetic', fontSize: 18, color:'#524848'}}>Apa itu TrashMon?</Text>
        </View>
        <View style={{paddingTop: 10}}>
          <Text style={{fontFamily: 'NotoSansTC-Bold-Alphabetic', fontSize: 13, color:'#666666', lineHeight: 20}}>TrashMon adalah aplikasi jual beli sampah online {"\n"}(Recycling platform). TrashMon menghubungkan{"\n"}penghasil sampah (rumah tangga, bisnis dan kantor){"\n"}dengan kolektor local (pengepul) terdekat, sehingga lebih{"\n"}mudah dalam menjual sampah. TrashMon berfokus pada{"\n"}pola daur ulang sampah di sektor hulu, bukan layanan{"\n"}pengangkutan sampah atau kerajinan tangan daur ulang.</Text>
        </View>
        <View style={{paddingTop: 20}}>
          <Text style={{fontFamily: 'NotoSansTC-Bold-Alphabetic', fontSize: 18, color:'#524848'}}>Apa perbedaan TrashMon dengan Bank Sampah atau layanan pengelola sampah lainnya?</Text>
        </View>
        <View style={{paddingTop: 20}}>
          <Text style={{fontFamily: 'NotoSansTC-Bold-Alphabetic', fontSize: 13, color:'#666666', lineHeight: 20}}>Layanan mallsampah gratis di gunakan oleh siapa saja, kami bukan perusahaan layanan penjemputan sampah, kami mencoba memberikan nilai yang lebih dari itu, yaitu sampah yang di jemput oleh mitra kami, seluruhnya akan di daur ulang dan tidak di buang ke TPA. Baik layanan menjual sampah atau program daur ulang, semuanya akan di daur ulang kembali.</Text>
        </View>
        <View style={{paddingTop: 20}}>
          <Text style={{fontFamily: 'NotoSansTC-Bold-Alphabetic', fontSize: 18, color:'#524848'}}>Bagaimana cara menjual sampah melalui TrashMon?</Text>
        </View>
        <View style={{paddingTop: 10}}>
          <Text style={{fontFamily: 'NotoSansTC-Bold-Alphabetic', fontSize: 13, color:'#666666', lineHeight: 20}}>Menjual sampah melalui TrashMon sangatlah mudah, pastikan kamu sudah mendownload aplikasi TrashMon di playstore atau ios, selanjutnya buka aplikasi TrashMon, pilih fitur ???jual sampah??? masukan informasi sampah, alamat dan waktu penjemputan, submit dan tunggu sampai pengepul menjemput dan membayar sampahmu. Selengkapnya lihat panduan menjual sampah.</Text>
        </View>
        <View style={{paddingTop: 20}}>
          <Text style={{fontFamily: 'NotoSansTC-Bold-Alphabetic', fontSize: 18, color:'#524848'}}>Bagaimana cara berlangganan program daur ulang sampah?</Text>
        </View>
        <View style={{paddingTop: 10, marginBottom: 20}}>
          <Text style={{fontFamily: 'NotoSansTC-Bold-Alphabetic', fontSize: 13, color:'#666666', lineHeight: 20}}>Jika kamu pemilik bisnis atau penyelenggara event, kamu dapat terlibat dalam menciptakan dunia yang lebih hijau, buka aplikasi mallsampah, pilih fitur ???program daur ulang??? selanjutnya masukan informasi bisnis/event mu, setelah berhasil mendaftar, kamu akan mendapatkan email panduan untuk mempelajari lebih lanjut. Selengkapnya lihat panduan ???program daur ulang???.</Text>
        </View>
      </View>
    </ScrollView>
  );
}

function EditProfilBerhasil({ navigation }) {
  setTimeout(() => {
    navigation.navigate('Account'); 
}, 3000)
  return (
    <View style={{flex: 1, backgroundColor : '#E9FFFD', alignItems: 'center'}}>
      <View style={{marginBottom: 20, paddingTop: 200}}>
        <Image source={require('./assets/logo/berhasil.png')}/>
      </View>
      <View style={{}}>
        <Text style={{fontSize: 24, color: '#424242', textAlign: 'center', fontFamily: 'ABeeZee-Regular'}}>Edit Profil Berhasil</Text>
      </View>
      <View style={{paddingTop: 5}}>
        <Text style={{fontSize: 16, color: '#7C7C7C', textAlign: 'center', fontFamily: 'ABeeZee-Regular'}}>Akun berhasil diedit</Text>
      </View>
    </View>
  );
}

export default App;