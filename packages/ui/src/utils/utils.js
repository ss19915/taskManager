export const limitCharacter = (string, maxCharacters) => {
    let truncatedString = string;
    const tailLength = 3;
    const tail = ' . . .';
    
    if(string.length > maxCharacters){
        truncatedString = `${string.slice(0, maxCharacters - tailLength)}${tail}`;
    }

    return truncatedString;
};