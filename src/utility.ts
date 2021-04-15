/** reduces multiple class names to a single string */
export const classify = (
    ...args: Array<string | Record<string, boolean>>
): string => {
    // merge string and objects
    return args.reduce((acc: Array<string>, cur) => {
        const result = [...acc];
        if (typeof cur === 'string') {
            if (!result.includes(cur)) { result.push(cur); }
        } else {
            for (const [key, value] of Object.entries(cur)) {
                if (value && !result.includes(key)) {
                    result.push(key);
                }
            }
        }
        return result;
    }, []).join(' ');
};
