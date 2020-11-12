export const sleep = (seconds: number) => {
    return new Promise(resolve => setTimeout(resolve, seconds));
}

export const sleep2 = (seconds: number) => {
    const time = Date.now();
    while(Date.now() - time <= seconds * 1000){}
}