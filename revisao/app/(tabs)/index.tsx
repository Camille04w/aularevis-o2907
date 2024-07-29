import { StyleSheet, View} from 'react-native';

import Olimpiada1 from './olimpiada1'
import Olimpiada2 from './olimpiada2'

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Olimpiada1  pais="Brasil" quantMedOuro="0" quantMedPrata="1" quantMedBronze="2" totalMed="3"/>
      <Olimpiada2  pais="Japão" quantMedOuro="5" quantMedPrata="2" quantMedBronze="4" totalMed="11"/>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center',
    alignItems:'center'
  

  },

});
