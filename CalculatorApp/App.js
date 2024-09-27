import React, { useState } from 'react';
import { SafeAreaView, Text, TextInput, View, Pressable, StyleSheet } from 'react-native';

const App = () => {
  const [firstNumber, setFirstNumber] = useState('');
  const [secondNumber, setSecondNumber] = useState('');
  const [result, setResult] = useState(null);
  const [selectedOperation, setSelectedOperation] = useState(null);

  const handleOperation = (operation) => {
    const num1 = parseFloat(firstNumber);
    const num2 = parseFloat(secondNumber);
    if (!isNaN(num1) && !isNaN(num2)) {
      setSelectedOperation(operation);
      switch (operation) {
        case 'Add':
          setResult(num1 + num2);
          break;
        case 'Subtract':
          setResult(num1 - num2);
          break;
        case 'Multiply':
          setResult(num1 * num2);
          break;
        case 'Divide':
          setResult(num1 / num2);
          break;
        default:
          setResult(null);
      }
    } else {
      setResult('Invalid Input');
    }
  };

  const resetCalculator = () => {
    setFirstNumber('');
    setSecondNumber('');
    setResult(null);
    setSelectedOperation(null);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.backButton}>Back</Text>
        <Text style={styles.headerText}>Calculator App</Text>
      </View>

      {}
      <View style={styles.headerLine} />

      <View style={styles.inputRow}>
        <Text style={styles.label}>First Number</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter First Number"
          keyboardType="numeric"
          value={firstNumber}
          onChangeText={setFirstNumber}
          placeholderTextColor="#C7C7CD"
        />
      </View>

      <View style={styles.inputRow}>
        <Text style={styles.label}>Second Number</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter Second Number"
          keyboardType="numeric"
          value={secondNumber}
          onChangeText={setSecondNumber}
          placeholderTextColor="#C7C7CD"
        />
      </View>

      <View style={styles.buttonContainer}>
        {['Add', 'Subtract', 'Multiply', 'Divide'].map((operation) => (
          <Pressable
            key={operation}
            style={[
              styles.button,
              selectedOperation === operation ? styles.buttonSelected : {},
            ]}
            onPress={() => handleOperation(operation)}
          >
            <Text style={styles.buttonText}>{operation}</Text>
          </Pressable>
        ))}
      </View>

      {}
      <View style={styles.resultRow}>
        <Text style={styles.resultLabel}>Result:</Text>
        <Text style={styles.result}>{result !== null ? result : ''}</Text>
      </View>

      {}
      <View style={styles.resultLine} />

      <Pressable style={styles.resetButton} onPress={resetCalculator}>
        <Text style={styles.resetText}>Reset</Text>
      </Pressable>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  backButton: {
    color: '#007AFF',
    fontSize: 18,
    paddingTop: 30,
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    flex: 1,
    marginRight: 40,
    paddingTop: 30,
  },
  headerLine: {
    height: 1,
    backgroundColor: '#C7C7CD',
    marginBottom: 100,
  },
  inputRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#C7C7CD',
    paddingBottom: 10,
  },
  label: {
    fontSize: 16,
    fontWeight: '500',
    color: '#000',
    width: '40%', 
  },
  input: {
    fontSize: 18,
    paddingVertical: 10,
    color: '#000',
    width: '55%', 
    textAlign: 'left', 
    marginLeft: 50,
  },
  buttonContainer: {
    marginTop: 20,
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#007AFF',
    paddingVertical: 15,
    marginBottom: 10,
    borderRadius: 25,
    justifyContent: 'center',
  },
  buttonSelected: {
    backgroundColor: 'rgba(0, 122, 255, 0.5)',
  },
  buttonText: {
    textAlign: 'center',
    color: '#fff',
    fontSize: 18,
  },
  resultRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginTop: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#C7C7CD',
    paddingBottom: 10,
  },
  resultLabel: {
    fontSize: 20,
    fontWeight: '500',
    color: '#000',
  },
  result: {
    fontSize: 20,
    fontWeight: '500',
    color: '#000',
    marginLeft: 10, 
  },
  resultLine: {
    height: 0.5,
    backgroundColor: '#C7C7CD',
    marginBottom: 20,
  },
  resetButton: {
    alignItems: 'center',
    marginTop: 20,
  },
  resetText: {
    color: '#007AFF',
    fontSize: 18,
  },
});

export default App;