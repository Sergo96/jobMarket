import { tld } from '../../constants';

export const validateEmail = (email: string) => {
    const tempEmail: string[] = email ? email.split('') : [''];

    if (
        !String(email)
            .toLowerCase()
            .match(
                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            )
    )
        return false;

    const currentEmailDomain = tempEmail
        .splice(tempEmail.indexOf('.'), tempEmail.length - 1)
        .join('');
    return tld.includes(currentEmailDomain);
};
