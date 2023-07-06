import React, { FC } from 'react';
import { TouchableOpacity, View, Image } from 'react-native';

import { Typography } from '../Typography';
import styled from 'styled-components';

export const UserItemContainer = styled(TouchableOpacity)`
    flex-direction: row;
    align-items: center;
    padding: 16px;
    background-color: ${({ theme: { elements } }) => {
        return elements.BUTTON_PRIMARY_BACKGROUND;
    }};
    margin-bottom: 8px;
    border-radius: 15px;
`;

export const UserImage = styled(Image)`
    width: 40px;
    height: 40px;
    border-radius: 20px;
    margin-right: 12px;
`;

export const UserItem: FC<any> = ({ item, onPress, isChat }) => {
    return (
        <UserItemContainer onPress={() => onPress(item)}>
            <UserImage source={require('./profileFoto.jpeg')} />
            <View>
                {isChat ? (
                    <>
                        <Typography textType={'h2'} children={item.user} />
                        <Typography textType={'h3'} children={item.message} />
                    </>
                ) : (
                    <>
                        <Typography textType={'h2'} children={item.name} />
                    </>
                )}
            </View>
        </UserItemContainer>
    );
};
