/** @format */

// global
import React, { useState } from "react";
import { StyleSheet, View, Text, TextInput } from "react-native";
// local
import { Button } from "../components/buttons";
import Input from "../components/input";

export default function MemoryEntry() {
	// type of entry = text, photo, audio, submitted
	const [entryType, setEntryType] = useState("text");

	// content to be saved to database
	const [entry, setEntry] = useState("");

	// function to save content to database
	const saveEntry = () => {
		const submitEntry = { date: new Date(), content: entry };
		console.log("submit: ", submitEntry);
		setEntryType("submitted");
	};

	return (
		<View>
			{entryType === "submitted" ? (
				<Text>Your entry has been submitted.</Text>
			) : (
				<View>
					<View style={styles.optionsView}>
						<Text>entry options here - text, photo, audio</Text>
					</View>
					<View style={styles.entryView}>
						<Input type={entryType} value={entry} onChange={setEntry} />
						<Button title="submit" action={saveEntry} />
					</View>
				</View>
			)}
		</View>
	);
}

const styles = StyleSheet.create({
	optionsView: {
		alignItems: "flex-start",
		borderBottomWidth: 1,
		borderBottomColor: "grey",
		marginBottom: 10,
	},
	entryView: {
		alignItems: "flex-start",
	},
});
