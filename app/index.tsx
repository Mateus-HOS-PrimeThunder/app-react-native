import { Text, View, ImageBackground, Pressable, StyleSheet, Dimensions } from "react-native";
import { Link } from "expo-router";
import { LinearGradient } from 'expo-linear-gradient';

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
     
      <ImageBackground
        source={require("../assets/images/teste.webp")}
        style={styles.imgFundo}>
        <LinearGradient
        colors={['rgba(0,0,0,0.8)', 'rgba(0,0,0,0.6223739495798319)']}
        start={{ x:0, y:0}}
        end={{ x:0, y:1}}
        style={{
            position: 'absolute',
            left: 0,
            right: 0,
            top: 0,
            bottom: 0,
        }}
         />
        <Text style={styles.txt}>Bem vindo ao Museu de carros</Text>


        <Link style={styles.button} href="/museum" asChild>
          <Pressable>
            <Text>Entrar no Museu</Text>
          </Pressable>
        </Link>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  button: {
    margin: 10,
    padding: 10,
    backgroundColor: '#fff',
    color: 'black',
    borderRadius: 5,
    textAlign: 'center',
    top: '40%',
  },
  imgFundo: {
    width: windowWidth * 1,
    height: windowHeight * 1,
    resizeMode: 'contain',
    justifyContent: "center",
    alignItems: "center",
  },
  txt: {
    color: "white",
    fontSize: 20,
    fontWeight: 'bold',
    bottom: '35%'
  },
})