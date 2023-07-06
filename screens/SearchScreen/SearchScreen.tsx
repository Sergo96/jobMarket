import { FlatList, Text } from 'react-native';
import { Divider, MainContainerStyled, MainInput, Typography, UserItem } from '../../components';

import { useState } from 'react';
import { elements } from '../../styles';
import { TabContainer, TabButton, ListContainer, MapContainer } from './styles';

const users = [
    { id: '1', name: 'John Doe', latitude: 37.78825, longitude: -122.4324 },
    { id: '2', name: 'Jane Smith', latitude: 37.78136, longitude: -122.42017 },
    { id: '3', name: 'Bob Johnson', latitude: 37.78954, longitude: -122.41514 },
];

export const SearchScreen = () => {
    const [searchText, setSearchText] = useState('');
    const [selectedTab, setSelectedTab] = useState('list');
    const [filteredUsers, setFilteredUsers] = useState(users);

    const handleSearch = (text: string) => {
        setSearchText(text);
        const filtered = users.filter(user => user.name.toLowerCase().includes(text.toLowerCase()));
        setFilteredUsers(filtered);
    };

    const renderListItem = ({ item }: { item: { id: string; name: string } }) => (
        <UserItem isChat={false} item={item} />
    );

    return (
        <MainContainerStyled>
            <TabContainer>
                <TabButton isActive={selectedTab === 'list'} onPress={() => setSelectedTab('list')}>
                    <Typography
                        textType="h2"
                        color={
                            selectedTab === 'list'
                                ? elements.HEADER_BACKGROUND
                                : elements.WHITE_PRIMARY
                        }
                        children={'List'}
                    />
                </TabButton>
                <TabButton isActive={selectedTab === 'map'} onPress={() => setSelectedTab('map')}>
                    <Typography
                        textType="h2"
                        color={
                            selectedTab === 'map'
                                ? elements.HEADER_BACKGROUND
                                : elements.WHITE_PRIMARY
                        }
                        children={'Map'}
                    />
                </TabButton>
            </TabContainer>
            <Divider size={15} />
            <MainInput
                placeholder="Search users..."
                value={searchText}
                onChangeText={handleSearch}
            />
            <Divider size={15} />
            {selectedTab === 'list' ? (
                <ListContainer>
                    <FlatList
                        data={filteredUsers}
                        renderItem={renderListItem}
                        keyExtractor={item => item.id}
                    />
                </ListContainer>
            ) : (
                <MapContainer>
                    <Text>Map</Text>
                </MapContainer>
            )}
        </MainContainerStyled>
    );
};
