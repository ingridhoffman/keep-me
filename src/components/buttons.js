/** @format */

// global
import React from "react";
import { StyleSheet, Pressable, Text } from "react-native";

// general buttons
export const Button = ({ title, action }) => {
	return (
		<Pressable style={styles.button} onPress={action}>
			<Text style={styles.buttonText}>{title}</Text>
		</Pressable>
	);
};

export const ReverseButton = ({ title, action }) => {
	return (
		<Pressable style={styles.reverseButton} onPress={action}>
			<Text style={styles.reverseButtonText}>{title}</Text>
		</Pressable>
	);
};

//specialty buttons
export const HomeButton = ({ title, action }) => {
	return (
		<Pressable style={[styles.button, styles.homeButton]} onPress={action}>
			<Text style={styles.buttonText}>{title}</Text>
		</Pressable>
	);
};

export const CloseButton = ({ action }) => {
	return (
		<Pressable style={styles.reverseButton} onPress={action}>
			<Text style={styles.reverseButtonText}>X</Text>
		</Pressable>
	);
};

const styles = StyleSheet.create({
	button: {
		marginTop: 10,
		marginBottom: 10,
		backgroundColor: "black",
		alignItems: "center",
		padding: 10,
		borderRadius: 6,
	},
	buttonText: {
		color: "white",
		fontWeight: "bold",
	},
	reverseButton: {
		alignItems: "center",
		backgroundColor: "white",
		padding: 6,
		borderWidth: 1,
		borderColor: "grey",
		borderRadius: 6,
	},
	reverseButtonText: {
		color: "black",
		fontWeight: "bold",
	},
	homeButton: {
		padding: 20,
	},
});
