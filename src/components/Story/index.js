import React from "react";
import { View, Text } from "react-native";
import ProfilePicture from "../ProfilePicture";
import styles from "./styles";


const Story = ({image, name}) => {
    return (

    <View>
        <ProfilePicture image={image}/>
        <Text style={styles.name}>{name}</Text>
    </View>
    )

}

export default Story;