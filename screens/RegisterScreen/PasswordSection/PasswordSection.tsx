import React from 'react';
import { Divider, PasswordInput } from '../../../components';

export const PasswordSection = () => {
    return (
        <>
            <PasswordInput
                show={false}
                onTextDelete={function (): void {
                    throw new Error('Function not implemented.');
                }}
                placeholder="Your Password"
            />
            <Divider size={20} />
            <PasswordInput
                show={false}
                onTextDelete={function (): void {
                    throw new Error('Function not implemented.');
                }}
                placeholder="Repeat your password"
            />
        </>
    );
};
