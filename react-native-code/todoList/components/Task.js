import React from "react";
import { View, Text, Stylesheet } from "react-native";


const Task = ({text}) => {
  return (
    <View style={styles.item}>
        <View style={styles.itemLeft}>
            <View style={styles.squere}></View>
            <Text style={styles.itemText}>{text}</Text>
        </View>
        <View style={styles.circular}></View>
    </View>
  )
};

const styles = Stylesheet.create({
    item: {
        backgroundColor: '#fff',
        padding: 15,
        borderRadius: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 20
    },
    itemLeft: {
        flexDirection: 'row',
        alignItems: 'center',
        flexWrap: 'wrap'
    },
    squere: {
        width: 24,
        height: 24,
        backgroundColor: '#55BCF6',
        opacity: 0.4,
    },
    itemText: {},
    circular: {}
});

export default Task;
