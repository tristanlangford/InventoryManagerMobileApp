import React from 'react'
import { View, StyleSheet, Text} from 'react-native'

const App = () => {

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Working?</Text>
    </View>
  )

}

  const styles = StyleSheet.create({
    text: {
      justifyContent: 'center',
      fontSize: 40
    },
    container: {
      flex: 1,
      justifyContent: "center",
      alignItems: 'center'
    }
  })

export default App