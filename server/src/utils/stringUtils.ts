export const removeSpecialChars = (str: string) => {
    return str.replace(/[^\w\s]/gi, '');
}