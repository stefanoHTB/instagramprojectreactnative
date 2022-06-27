import React from "react";
import { Image } from "react-native";
import styles from "./styles";

const Body = ( ) => {
    return (
    <Image source={require('../../../../assets/images/paris.jpg')} style={styles.image} />
    )
}

export default Body;