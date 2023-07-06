import React, { FC, useLayoutEffect, useState } from 'react';
import { View, KeyboardAvoidingView, Platform } from 'react-native';
import { MainContainerStyled, Typography } from '../../components';
import { elements } from '../../styles';
import { MessageContainer, InputContainer, Input, SendButton, SendButtonText } from './styles';
import { RootStackScreenProps } from '../../types';
import { NavbarOptions } from '../../classes';

interface IProps extends RootStackScreenProps<'Messages'> {}

export const Messages: FC<IProps> = ({ navigation }) => {
    const [message, setMessage] = useState('');
    const messageOptions = new NavbarOptions('User Name', false, 'center');

    const handleMessageSend = () => {
        console.log('Message sent:', message);
        setMessage('');
    };

    useLayoutEffect(() => {
        navigation.setOptions(messageOptions);
    }, []);

    return (
        <KeyboardAvoidingView
            style={{ flex: 1, height: '100%' }}
            behavior={Platform.OS === 'ios' ? 'padding' : undefined}
            keyboardVerticalOffset={Platform.OS === 'ios' ? 85 : 0} // Adjust if needed
        >
            <MainContainerStyled>
                <View style={{ flex: 1 }}>
                    <MessageContainer isUser={false}>
                        <Typography
                            textType={'p'}
                            children={'Example message from the other user'}
                            color={elements.TEXT_PRIMARY}
                        />
                    </MessageContainer>
                    <MessageContainer isUser={true}>
                        <Typography
                            textType={'p'}
                            children={'Example message from the other user'}
                            color={elements.WHITE_PRIMARY}
                        />
                    </MessageContainer>
                </View>

                <InputContainer>
                    <Input
                        placeholder="Type a message..."
                        value={message}
                        onChangeText={text => setMessage(text)}
                    />
                    <SendButton onPress={handleMessageSend}>
                        <SendButtonText>Send</SendButtonText>
                    </SendButton>
                </InputContainer>
            </MainContainerStyled>
        </KeyboardAvoidingView>
    );
};
