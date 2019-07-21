import React, { useState, useContext, useEffect, createContext } from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import Store, { myContext } from "./components/Store";

export default (AppWrapper = (): JSX.Element => {
  return (
    <Store>
      <App />
    </Store>
  );
});

function App(): JSX.Element {
  const { state, dispatch } = useContext(myContext);

  return (
    <View style={styles.wrapper}>
      <Text>HEY</Text>
      <Store>
        <Text>Counter: {state}</Text>
        <Button title="Incr" onPress={() => dispatch(1)} />
        <Button title="Decr" onPress={() => dispatch(-1)} />
      </Store>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    marginTop: 100
  }
});

// import { CounterContext, CounterProvider } from "./components/Store";
// import { StyleSheet, Text, View, TextInput, Button } from "react-native";

// //const Store = createContext("sharma");

// export default function App(): JSX.Element {
//   const { state, dispatch } = useContext(CounterContext);

//   // const URL =
//   //   "https://api.tvmaze.com/singlesearch/shows?q=rick-&-morty&embed=episodes";

//   // const fetchDataAction = async () => {
//   //   const data = await fetch(URL);
//   //   const dataJson = await data.json();
//   //   // return dispatch({
//   //   //   type: "FETCH_DATA",
//   //   //   payload: dataJson._embedded.episodes
//   //   // });
//   // };

//   return (
//     <CounterProvider>
//       <View style={styles.container}>
//         <Text>aaa {state.count}</Text>
//       </View>
//     </CounterProvider>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     paddingTop: 50,
//     alignItems: "center"
//   },
//   inputWrapper: {
//     width: "100%",
//     flexDirection: "row",
//     justifyContent: "space-between",
//     marginBottom: 20
//   },
//   inputBox: {
//     width: 200,
//     borderColor: "purple",
//     borderRadius: 8,
//     borderWidth: 2,
//     paddingLeft: 8
//   },
//   title: {
//     fontSize: 40,
//     marginBottom: 40,
//     fontWeight: "bold",
//     textDecorationLine: "underline"
//   },
//   subtitle: {
//     fontSize: 20,
//     marginBottom: 20,
//     color: "purple"
//   },
//   listItem: {
//     flexDirection: "row",
//     justifyContent: "space-between",
//     alignItems: "center",
//     width: "100%",
//     marginBottom: 10
//   },
//   addButton: {
//     alignItems: "flex-end"
//   },
//   task: {
//     width: 200
//   },
//   error: {
//     color: "red"
//   }
// });
