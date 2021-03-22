/** @format */

// global
import React, { useState } from "react";
import { StyleSheet, View, Modal, Text, Pressable } from "react-native";
// local
import { HomeButton, CloseButton } from "../components/buttons";
import MemoryEntry from "../screens/memoryentry";

export default function Home() {
	// data entry windows triggered by quick action buttons
	const [dataEntry, setDataEntry] = useState(null);
	const homeButtonPressed = (buttonID) => {
		console.log("button pressed: ", buttonID);
		setDataEntry(buttonID);
	};
	return (
		<View>
			<Text style={styles.sectionHeading}>Quick Entry</Text>
			<HomeButton title="Don't Forget!" action={() => homeButtonPressed("remember")} />
			<Modal animationType="slide" transparent={true} visible={dataEntry !== null}>
				<View style={styles.centeredView}>
					<View style={styles.modalView}>
						<View style={styles.modalViewClose}>
							<CloseButton action={() => setDataEntry(null)} />
						</View>
						<View style={styles.modalViewContent}>
							{dataEntry === "remember" && <MemoryEntry />}
						</View>
					</View>
				</View>
			</Modal>
		</View>
	);
}

const styles = StyleSheet.create({
	sectionHeading: {
		fontWeight: "bold",
		textTransform: "uppercase",
		paddingBottom: 10,
	},
	centeredView: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
		backgroundColor: "rgba(50, 50, 50, 0.5)",
	},
	modalView: {
		margin: 20,
		backgroundColor: "white",
		borderRadius: 20,
		padding: 20,
		shadowColor: "#000",
		shadowOffset: {
			width: 0,
			height: 2,
		},
		shadowOpacity: 0.25,
		shadowRadius: 4,
		elevation: 5,
	},
	modalViewClose: {
		alignItems: "flex-end",
		marginBottom: 20,
	},
	modalViewContent: {
		alignItems: "center",
	},
});
