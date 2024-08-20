import { Text, View, ImageBackground, Pressable, StyleSheet } from "react-native";
import{ Link } from "expo-router";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {/* <Text>Bem vindo ao Museu de carros</Text> */}
      <ImageBackground 
      source={require("../assets/images/dodge-challenger-demon.jpg")}
      style={styles.imgFundo}>
      <Link style={styles.button} href="/museum" >
      <Pressable>
        <Text >Entrar no Museu</Text>
      </Pressable>
      </Link>  
      </ImageBackground>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 3,
    backgroundColor: '#fff',
  

  },
  button: {
    margin: 10,
    padding: 10,
    backgroundColor: '#333',
    color: '#fff',
    borderRadius: 5,
    textAlign: 'center',
    top: '45%',
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  imgFundo:{
    resizeMode: 'contain',
    width: 490,
    height: 650,
    justifyContent: "center",
    alignItems: "center",
  },
})