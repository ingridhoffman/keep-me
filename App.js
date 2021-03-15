/** @format */

// global
import React from "react";
import { StyleSheet, Text, View } from "react-native";
// local
import Home from "./src/pages/home";
// aws
import Amplify from "aws-amplify";
import config from "./aws-exports";
Amplify.configure(config);

export default function App() {
	return (
		// insert login entry sequence here in order to get to...
		// the app
		<View style={styles.container}>
			{/* insert header here */}
			{/* insert page navigation here */}
			<Home />
			{/* insert footer here */}
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#A8DADC",
		alignItems: "center",
		justifyContent: "center",
	},
});
