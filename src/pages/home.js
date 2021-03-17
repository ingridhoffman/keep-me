/** @format */

// global
import React, { useState } from "react";
import { StyleSheet, View, Modal, Text, Pressable } from "react-native";
// local
import { HomeButton } from "../components/buttons";

export default function Home() {
	// data entry windows triggered by quick action buttons
	const [dataEntry, setDataEntry] = useState(null);
	const homeButtonPressed = (buttonID) => {
		console.log("button pressed: ", buttonID);
		setDataEntry(buttonID);
	};
	return (
		<View>
			<HomeButton title="Don't Forget!" action={() => homeButtonPressed("remember")} />
			<Modal animationType="slide" transparent={true} visible={dataEntry !== null}>
				<View style={styles.centeredView}>
					<View style={styles.modalView}>
						<Text style={styles.modalText}>Hello World!</Text>
						<Pressable
							style={[styles.button, styles.buttonClose]}
							onPress={() => setDataEntry(null)}
						>
							<Text style={styles.textStyle}>Hide Modal</Text>
						</Pressable>
					</View>
				</View>
			</Modal>
			{/* {dataEntry === "remember" && <MemoryEntry />} */}
		</View>
	);
}

const styles = StyleSheet.create({
	centeredView: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
		marginTop: 22,
	},
	modalView: {
		margin: 20,
		backgroundColor: "white",
		borderRadius: 20,
		padding: 35,
		alignItems: "center",
		shadowColor: "#000",
		shadowOffset: {
			width: 0,
			height: 2,
		},
		shadowOpacity: 0.25,
		shadowRadius: 4,
		elevation: 5,
	},
	button: {
		borderRadius: 20,
		padding: 10,
		elevation: 2,
	},
	buttonOpen: {
		backgroundColor: "#F194FF",
	},
	buttonClose: {
		backgroundColor: "#2196F3",
	},
	textStyle: {
		color: "white",
		fontWeight: "bold",
		textAlign: "center",
	},
	modalText: {
		marginBottom: 15,
		textAlign: "center",
	},
});
