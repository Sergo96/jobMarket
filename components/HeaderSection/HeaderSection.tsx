import { FC } from 'react';
import { Typography } from '../Typography';
import { Divider } from '../Divider';

interface IProps {
    title: string;
    subTitle: string;
}

export const HeaderSection: FC<IProps> = ({ title, subTitle }) => {
    return (
        <>
            <Typography textType={'h1'} align={'center'}>
                {title}
            </Typography>
            <Divider size={8} />
            <Typography textType={'p'} align={'center'}>
                {subTitle}
            </Typography>
        </>
    );
};
