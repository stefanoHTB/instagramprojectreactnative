import React from "react";
import { FlatList, View } from "react-native";
import Story from "../Story";
import Logo1 from '../../assets/images/cat.jpg';
import Logo2 from '../../assets/images/gog.jpg';
import Logo3 from '../../assets/images/bird.jpg';
import Logo4 from '../../assets/images/llama.jpg';
import styles from "./styles";

const data = [
    {
        image: require('../../assets/images/cat.jpg'),
        name: 'andrea',
    },
    {
        image: require('../../assets/images/cat.jpg'),
        name: 'francisco',
    },
    {
        image: require('../../assets/images/cat.jpg'),
        name: 'lily',
    },
    {
        image: require('../../assets/images/cat.jpg'),
        name: 'darko',
    },


    {
        image: require('../../assets/images/cat.jpg'),
        name: 'andrea',
    },
    {
        image: require('../../assets/images/cat.jpg'),
        name: 'francisco',
    },
    {
        image: require('../../assets/images/cat.jpg'),
        name: 'lily',
    },
    {
        image: require('../../assets/images/cat.jpg'),
        name: 'darko',
    },


];

const logo = ( {item} ) => {
    <View>
        <Image loadingIndicatorSource={item.logo} />
    </View>
}


const Stories = () => {
    return (

    <FlatList
    data={data}
    keyExtractor={({name}) => name}
    horizontal
    style={styles.container}
    renderItem={({item}) => <Story logo={item.image} name={item.name}/>}
       />
    
    )

}

export default Stories;