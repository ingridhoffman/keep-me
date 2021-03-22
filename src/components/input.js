/** @format */

// global
import React from "react";
import { StyleSheet, Text, TextInput } from "react-native";

export default function Input({ type, value, onChange }) {
	switch (type) {
		case "text":
			return (
				<TextInput
					style={styles.input}
					label="New Text Entry:"
					multiline
					placeholder="start typing here..."
					onChangeText={onChange}
					value={value}
				/>
			);
		default:
			return <Text>Oops. Something isn't right...</Text>;
	}
}

const styles = StyleSheet.create({
	input: {
		marginTop: 6,
		marginBottom: 6,
		borderWidth: 1,
		borderColor: "grey",
		padding: 6,
	},
});
