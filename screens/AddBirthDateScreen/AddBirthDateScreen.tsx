import { FC, useLayoutEffect, useRef, useState } from 'react';
import { Typography, Wrapper, Divider, MainButton, HeaderSection } from '../../components';
import { useRegisterContext } from '../../context';
import { Platform, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { RootStackScreenProps } from '../../types';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
interface IProps extends RootStackScreenProps<'AddBirthDateScreen'> {}

export const AddBirthDateScreen: FC<IProps> = ({ navigation }) => {
    const { registerData, setRegisterData } = useRegisterContext();
    const disableRef = useRef(true);
    const [show, setShow] = useState(false);

    useLayoutEffect(() => {
        navigation.setOptions({
            title: 'Date',
            headerBackTitleVisible: false,
            headerTitleAlign: 'center',
            headerLeft: () => (
                <TouchableOpacity style={{ marginLeft: 10 }} onPress={navigation.goBack}>
                    <AntDesign name={'arrowleft'} size={24} color={'black'} />
                </TouchableOpacity>
            ),
        });
    }, [navigation]);

    const onContinuePress = () => {
        navigation.navigate('NicknameScreen');
    };

    const showDatePicker = () => setShow(true);

    const hideDatePicker = () => setShow(false);

    const handleConfirm = (date: Date) => {
        const resBirthDay = date.toLocaleDateString('en-US');
        disableRef.current = false;
        setRegisterData(prevState => ({
            ...prevState,
            birthDate: resBirthDay,
        }));
        hideDatePicker();
    };

    return (
        <Wrapper>
            <Divider size={40} />
            <HeaderSection
                title={'What’s your Birthday?'}
                subTitle={'We don’t share this information with other users.'}
            />
            <Divider size={30} />
            <Typography textType={'p'} align={'center'}>
                {registerData.birthDate}
            </Typography>
            <Divider size={30} />
            <MainButton onPress={showDatePicker}>Open Calendar</MainButton>
            <Divider size={30} />
            <DateTimePickerModal
                isVisible={show}
                mode="date"
                onConfirm={handleConfirm}
                onCancel={hideDatePicker}
            />

            <MainButton disabled={disableRef.current} onPress={onContinuePress}>
                Continue
            </MainButton>
        </Wrapper>
    );
};
