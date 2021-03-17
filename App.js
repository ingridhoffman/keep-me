/** @format */

// global
import React from "react";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
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
		<SafeAreaView style={styles.container}>
			{/* insert header here */}
			{/* insert page navigation here */}
			<View style={styles.content}>
				<Home />
			</View>
			{/* insert footer here */}
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#A8DADC",
		alignItems: "flex-start",
		justifyContent: "flex-start",
	},
	content: {
		padding: 30,
	},
});
