import React from "react";

import { Text, Image, View, TouchableOpacity } from 'react-native';

import DiscordImg from '../../assets/discord.png';

import { styles } from "./styles";

type Props = {
    title: string;
}

export function ButtonIcon({ title } : Props) {
    return(
        <TouchableOpacity style={styles.container}>
            <View style={styles.iconWrapper}>
                <Image source={DiscordImg} />
            </View>

            <Text style={styles.title}>
                {title}
            </Text>
        </TouchableOpacity>
    )
}