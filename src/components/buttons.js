/** @format */

// global
import React from "react";
import { StyleSheet, Pressable, Text } from "react-native";

export const QuickActionButton = ({ title, action }) => {
	return (
		<Pressable style={styles.button} onPress={action}>
			<Text style={styles.buttonText}>{title}</Text>
		</Pressable>
	);
};

const styles = StyleSheet.create({
	button: {
		alignItems: "center",
		backgroundColor: "#1D3557",
		padding: 10,
	},
	buttonText: {
		color: "white",
	},
});
