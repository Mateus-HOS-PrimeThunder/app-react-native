import { Text, View, Image, Pressable, StyleSheet, ScrollView  } from "react-native";
import { Link } from "expo-router";
import { Card, Button, Icon } from '@rneui/themed';
// https://reactnativeelements.com/docs/components/card fremework "bootstrap???"
import list from './InfoCarros.json';
import { CardTitle } from "@rneui/base/dist/Card/Card.Title";
import { CardImage } from "@rneui/base/dist/Card/Card.Image";

export default function Museu(){
    return (
        <ScrollView>
            {/* <Text>Seja bem vindo ao nosso museu de carros</Text>

            {list.listCars.map((item) => (

<Link
    key={item.id}
    href={{
        pathname: "./carsingle/[id]",
        params: { id: item.id }
    }}>
    <View style={styles.itemContainer}>
        <Image source={{ uri: item.image }} style={styles.image} />
        <View style={styles.textContainer}>
            <Text style={styles.titleProduct}>{item.title}</Text>
            <Text style={styles.description}>{item.description}</Text>
        </View>
    </View>
</Link>

))
} */}


{list.listCars.map((item) => (
    
    <Card>
        {/* key={item.id}
    href={{
        pathname: "./carsingle/[id]",
        params: { id: item.id }
    }}> */}
          <Card.Title style={styles.titleProduct}>{item.title}</Card.Title>
          <Card.Image
          source={{ uri: item.image }} style={{ padding: 0}}
          />
          <Text style={{ marginBottom: 10 }}>
            {item.description}
          </Text>
          <Button
            buttonStyle={{
              borderRadius: 0,
              marginLeft: 0,
              marginRight: 0,
              marginBottom: 0,
            }}
            title="Detalhes"
          />
        </Card>

))
}
           
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    title: {
        textAlign: 'center', fontWeight: 'bold', marginBottom: 20, marginTop: 20,
        color: '#fff', fontSize: 20
    },
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#260F0D',
    },
    itemContainer: {
        flexDirection: 'row',
        marginBottom: 20,
        backgroundColor: '#F2D8C5',
        borderRadius: 8,
        padding: 10,
    },
    image: {
        width: 350,
        height: 200,
        borderRadius: 8,
    },
    textContainer: {
        flex: 1,
        marginLeft: 10,
    },
    titleProduct: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    description: {
        marginTop: 5,
        fontSize: 14,
    },
});
