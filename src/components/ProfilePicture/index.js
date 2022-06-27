import React from "react";
import { Image, View } from "react-native";
import styles from "./styles";
import Logo from '../../assets/images/cat.jpg';

const ProfilePicture = ({Logo, size = 70}) => {
    return (
        <View style={[styles.container, { width: size + 6, height: size + 6}]}> 
    <Image source={require('../../assets/images/cat.jpg')} style={[styles.image, {width: size, height: size}]}/>

           </View >

    )

    

}

export default ProfilePicture