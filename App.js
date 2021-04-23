import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { View, StyleSheet, AppRegistry } from 'react-native';
import { WebView } from 'react-native-webview';

export default function App () {
	return <WebView source={{ uri: 'https://smart-park-frontend-9v01lom1w-urvish25296.vercel.app/' }} />;
}

const styles = StyleSheet.create({
	container : {
		flex            : 1,
		backgroundColor : '#fff',
		alignItems      : 'center',
		justifyContent  : 'center'
	}
});
