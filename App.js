import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity,} from 'react-native';

const App = () => {
  const [answer, setAnswer] = useState('')
  const [img, setImg] = useState(require('./assets/biscoito.png'))
  const answers = [
    "A vida trará coisas boas se tiveres paciência.",
    "Demonstre amor e alegria em todas as oportunidades e verás que a paz nasce dentro de você.",
    "Não compense na ira o que lhe falta na razão.",
    "Defeitos e virtudes são apenas dois lados da mesma moeda.",
    "A maior de todas as torres começa no solo.",
    "Não há que ser forte. Há que ser flexível.",
    "Gente todo dia arruma os cabelos, por que não o coração?",
    "Há três coisas que jamais voltam; a flecha lançada, a palavra dita e a oportunidade perdida.",
    "A juventude não é uma época da vida, é um estado de espírito.",
    "Podemos escolher o que semear, mas somos obrigados a colher o que plantamos."
  ];
  
  open = () => {
    let number = Math.floor(Math.random() * answers.length)
    setAnswer(' "' + answers[number] +'"')
    setImg(require('./assets/biscoitoAberto.png'))
    
  }


  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Text style={styles.h1}>Biscoito da Sorte</Text>
      <Image source={img} style={styles.img}/>
      <Text style={styles.h1}>Frases do dia:</Text>
      <Text style={styles.textAnswer}>{answer}</Text>
      <TouchableOpacity style={styles.button} onPress={open}>
        <Text style={styles.textButton}>Quebrar biscoito</Text>
      </TouchableOpacity>
    </View>
  );
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    marginTop: 100,
  },
  img: {
    width: 200,
    height: 200
  },
  h1: {
    fontSize: 30,
    color: '#FFA500',
    fontWeight: 'bold',
    marginBottom: 50,
    marginTop: 20
  },
  button: {
    backgroundColor: '#FFA500',
    padding: 10,
    marginTop: 200,
    borderRadius: 10
  },
  textButton: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold'
  },
  textAnswer: {
    fontSize: 16,
    color: '#FFA500',
    marginTop: 50,
    fontStyle: 'italic',
    textAlign: 'center'
  }
});
