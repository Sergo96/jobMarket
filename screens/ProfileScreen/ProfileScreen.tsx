import { MainButton, Wrapper } from '../../components';

import { RootTabScreenProps } from '../../types';

export function ProfileScreen({ navigation }: RootTabScreenProps<'TabOne'>) {
    return (
        <Wrapper>
            <MainButton>Click</MainButton>
        </Wrapper>
    );
}
