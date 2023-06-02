import { FlatList, ScrollView, StyleSheet, Text, View } from 'react-native';

// Importação dos componentes
import Header from '../../components/header';
import Actions from '../../components/actions';
import Balance from '../../components/balance';
import Movements from '../../components/Movements';

const list = [
  {
    id: 1,
    label: 'Boleto Conta de Luz',
    value: '300,90',
    date: '20/05/2023',
    type: 0
  },
  {
    id: 2,
    label: 'Boleto da Faculdade',
    value: '1175,00',
    date: '30/05/2023',
    type: 0
  },
  {
    id: 3,
    label: 'Multa Detran',
    value: '523,20',
    date: '02/06/2023',
    type: 0
  },
  {
    id: 4,
    label: 'IPVA Carro',
    value: '1200,00',
    date: '02/06/2023',
    type: 0
  }
]


// Função da página Home
export default function Home({ navigation }) {

  return (
    <View style={styles.container}>

      <Header />

      <Actions navigation={navigation} />

      <ScrollView>
        <Text style={styles.title}>Últimas movimentações:</Text>

        <Balance />

        <FlatList 
          style={styles.list}
          data={list}
          keyExtractor={ (item) => String(item.id) }   
          showsVerticalScrollIndicator={false}
          renderItem={ ({ item }) => <Movements data={item}/>}     
        />
      </ScrollView>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f3f6f9',
    paddingBottom: 50,
  },
  title: {
    paddingVertical: 50,
    paddingTop: 5,
    fontWeight: 'bold',
    paddingStart: 20,
    paddingEnd: 20,
    fontSize: 18
  },
  list: {
    marginEnd: 14,
    marginStart: 14,
    
  },
})