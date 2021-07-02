function rainbows() {
    let rainbows = prompt('How many rainbows do you want?');
    for(let i = 1; i <= rainbows; i++){
        document.write('<img src="rainbow.svg">');
    }
}

rainbows()