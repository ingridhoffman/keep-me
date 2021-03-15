/** @format */

// global
import React from "react";
import { StyleSheet, View } from "react-native";
// local
import { QuickActionButton } from "../components/buttons";

export default function Home() {
	const quickActionPressed = (buttonID) => {
		console.log("button pressed: ", buttonID);
	};
	return (
		<View>
			<QuickActionButton title="Don't Forget!" action={() => quickActionPressed("remember")} />
		</View>
	);
}

const styles = StyleSheet.create({});
