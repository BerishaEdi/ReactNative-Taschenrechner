import { StatusBar} from 'expo-status-bar';
import { StyleSheet, Text, View, Button} from 'react-native';
import { useState } from 'react';

export default function App() {

  const [display, setDisplay] = useState()
  const [result, setResult] = useState()
  const [nr1, setNr1] = useState()
  const [nr2, setNr2] = useState()
  const [operator, setOperator] = useState()
let x = true
let operatorPlus = false
let operatorMinus = false

function operatorPress(oper){
  x = false
  setOperator(oper)
  setNr1(display)
  setDisplay("")
  
}

function rechne(btnValue){
  if(x === true){
    setDisplay(btnValue)
  }
  
  if(x === false){
    setNr2(btnValue)
    setDisplay(btnValue)
  }
} 

function printResultat(operator){
  console.log("printResultat " + operator)

  setNr2(display)
  setDisplay(getResult(operator))
  operatorPlus = false
  operatorMinus = false
}

const getResult = (operator) => {
  let num2 = Number(nr2)
  let num1 = Number(nr1)

  switch(operator) {
    case "+": {
      return num1 + num2
    }
    case "-": {
      return num1 - num2
    }
    case "*": {
      return num1 * num2
    }
    case "/": {
      return num1 / num2
    } 
  }
}

function clearPrint(){
  setDisplay("")
  setOperator("")
  setResult("")
}

  return (
      <View style={styles.container}>
        <View style={styles.input}>
          <Text style={styles.txtinput}>
            {display}
          </Text>
        </View>
        <View style={styles.resultat}></View>
        <View style={styles.button}>
          <View style={styles.zahlen}>
              <View style={styles.anordnungZahlen}>
                <Button title='1' onPress={() => rechne("1")}/>
                <Button title='2' onPress={() => rechne("2")}/>
                <Button title='3' onPress={() => rechne("3")}/>
                </View>
               <View style={styles.anordnungZahlen}>
                <Button title='4' onPress={() => rechne("4")}/>
                <Button title='5' onPress={() => rechne("5")}/>
                <Button title='6' onPress={() => rechne("6")}/>
                </View>
               <View style={styles.anordnungZahlen}>
                <Button title='7' onPress={() => rechne("7")}/>
                <Button title='8' onPress={() => rechne("8")}/>
                <Button title='9' onPress={() => rechne("9")}/>
              </View>
              <View style={styles.anordnungZahlen}>
                <Button title='0' onPress={() => rechne("0")}/>
                <Button title='.' onPress={() => rechne(".")}/>
                <Button title='CE'  onPress={() => clearPrint()}/>
              </View>
            </View>   
          <View style={styles.operatoren}>
          <Button title='+' onPress={() => operatorPress("+")}/>
          <Button title='-' onPress={() => operatorPress("-")}/>
          <Button title='*' onPress={() => operatorPress("*")}/>
          <Button title='/' onPress={() => operatorPress("/")}/>
          <Button title='=' onPress={() => printResultat(operator)}/>
          </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,    
  },
  input: {
    flex: 2,
    alignItems: "center",
    backgroundColor: "white", 
    justifyContent: "flex-end",
    fontSize:20,
    justifyContent: "space-around",
       
  },
  txtinput: { 
    alignItems: "center",
    justifyContent: "flex-end",
    fontSize:20
       
  },
 
  button: {
    flexGrow: 7,
    flexDirection: "row",

  },
  zahlen: {
    flex: 3,
    color: "white",

  },
  anordnungZahlen: {
    backgroundColor: "lightgray",
    flexDirection: "row",
    flex: 1,
    alignItems: "center",
    justifyContent: "space-around",
    borderColor: "white",
    borderWidth: 1,

         
  },
  operatoren: {
    flex: 1,
    backgroundColor: "black",
    alignItems: 'center',
    justifyContent: "space-around",

  },
});
