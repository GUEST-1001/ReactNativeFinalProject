import { StyleSheet} from 'react-native'
import React from 'react'


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#63E0A3',
      alignItems: 'center',
      justifyContent: 'center',
      padding:'5%'
    },
    content: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        verticalAlign: 'center',
    },
    image: {
        flex:5,
        width:'100%',
        resizeMode: 'contain'
    },
    text: {
        fontWeight: 'bold',
        fontSize: 30,
        textAlign: 'center',
    }
  });

  export default styles