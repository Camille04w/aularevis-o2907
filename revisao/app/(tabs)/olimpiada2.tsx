import React from 'react';
import { StyleSheet, View, Text} from 'react-native';


const olimpiada1 =({pais, quantMedOuro,quantMedPrata, quantMedBronze, totalMed})=>{
    return(
        <View style={styles.container}>
            <Text style={styles.text}>{pais}</Text>
            <Text style={styles.text}>{quantMedOuro} medalhes de Ouro </Text>
            <Text style={styles.text}>{quantMedPrata} medalhas de prata</Text>
            <Text style={styles.text}>{quantMedBronze} medalhas de bronze</Text>
            <Text style={styles.text}>No total esse país tem {totalMed} medalhas</Text>
        </View>
    )
}
const styles = StyleSheet.create({
    container:{
        padding:10,
        alignItems:'center'
    },
    text:{
        fontSize:30,
        color:'#333'
    }
})

export default olimpiada1;