export const passwordValidator = (passwordArg: string, repeatPassword?: string) => {
    const lowerRe = /[a-z]+/g;
    const upperRe = /[A-Z]+/g;

    return {
        eightChars: passwordArg.length >= 8,
        oneLowerCase: lowerRe.test(passwordArg),
        oneUpperCase: upperRe.test(passwordArg),
        isMatched: passwordArg === repeatPassword && !!passwordArg.length,
    };
};
