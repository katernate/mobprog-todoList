import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { IconButton } from "react-native-paper";

export default class Note extends React.Component {
  render() {
    return (
      <View key={this.props.keyval} style={styles.note}>
        <Text style={styles.noteText}>{this.props.val.date}</Text>
        <Text style={styles.noteText}>{this.props.val.note}</Text>
        <TouchableOpacity
          onPress={this.props.deleteMethod}
          style={styles.noteDelete}
        >
          <IconButton
            style={styles.noteDeleteText}
            icon="trash-can"
            iconColor="#e91e63"
          />
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  note: {
    position: "relative",
    padding: 20,
    paddingRight: 100,
    borderBottomWidth: 2,
    borderBottomColor: "#ededed",
  },
  noteText: {
    paddingLeft: 30,
    borderLeftWidth: 10,
    borderLeftColor: "#000",
    color: "#000",
  },
  noteDelete: {
    position: "absolute",
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    top: 10,
    bottom: 10,
    right: 5,
  },
  noteDeleteText: {
    marginRight: 10,
  },
});