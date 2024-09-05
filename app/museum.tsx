import { Text, View, Image, Pressable, StyleSheet, ScrollView } from "react-native";
import { Link } from "expo-router";
import list from './products.json';

export default function Museu(){
    return (
        <ScrollView>
            <Text>Nosso museu de carros</Text>

            {list.listProduct.map((item) => (

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
        backgroundColor: '#F2D8C2',
        borderRadius: 8,
        padding: 10,
    },
    image: {
        width: 100,
        height: 100,
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
