import { Divider, MainContainerStyled, MainInput, Typography, UserItem } from '../../components';

import EditScreenInfo from '../../components/EditScreenInfo';

import { View, FlatList } from 'react-native';
import { FC, useState } from 'react';
import { ChatItem, UserImage } from './styles';
import { RootTabScreenProps } from '../../types';

interface Chat {
    id: string;
    user: string;
    message: string;
}

const chatsArr: Chat[] = [
    { id: '1', user: 'John', message: 'Hello!' },
    { id: '2', user: 'Alice', message: 'Hi there!' },
    { id: '3', user: 'John', message: 'How are you?' },
    { id: '4', user: 'Alice', message: 'I am good, thanks!' },
];

interface IProps extends RootTabScreenProps<'TabTwo'> {}

export const ChatScreen: FC<IProps> = ({ navigation }) => {
    const [chats, setChats] = useState<Chat[]>(chatsArr);

    const [searchQuery, setSearchQuery] = useState<string>('');

    const filteredChats = chats.filter(
        chat =>
            chat.user.toLowerCase().includes(searchQuery.toLowerCase()) ||
            chat.message.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const handleChatPress = (chat: Chat) => {
        // Navigate to chat messages screen with the selected chat
        navigation.navigate('Messages');
    };

    const renderChatItem = ({ item }: { item: Chat }) => (
        <UserItem item={item} onPress={handleChatPress} isChat />
    );

    return (
        <>
            <MainContainerStyled>
                <Divider size={15} />
                <MainInput
                    placeholder="Search chats..."
                    value={searchQuery}
                    onChangeText={text => setSearchQuery(text)}
                />
                <Divider size={15} />
                <FlatList
                    data={filteredChats}
                    renderItem={renderChatItem}
                    keyExtractor={item => item.id}
                />
            </MainContainerStyled>
        </>
    );
};
