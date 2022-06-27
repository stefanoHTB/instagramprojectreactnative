import React from "react";
import { FlatList } from "react-native";
import Post from "../Post";
import Stories from "../Stories";

const data = [
   {
    user: {
        imageUri: '',
        name: 'Andrea',
    },

    imageUri: require('../../assets/images/cat.jpg'),
    caption: 'this is my first post',
    likesCount: 1234,
    postedAt: '6 minutes ago'

    },
    {
        user: {
            imageUri: '',
            name: 'Andrea',
        },
    
        imageUri: require('../../assets/images/cat.jpg'),
        caption: 'this is my first post',
        likesCount: 1234,
        postedAt: '6 minutes ago'
    
        },
    
]



const Feed = () => {
    return (

        <FlatList 
        data={data}
        renderItem={({item}) => <Post post={item} />}
        ListHeaderComponent={Stories}
        />

    )

}

export default Feed;