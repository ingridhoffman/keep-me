/** @format */

// global
import React from "react";
import { StyleSheet, Pressable, Text } from "react-native";

export const HomeButton = ({ title, action }) => {
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
		padding: 20,
		borderRadius: 6,
	},
	buttonText: {
		color: "white",
	},
});
