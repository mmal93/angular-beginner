enum Colours {
    RED     = 'red',
    GREEN   = 'green',
    BLUE    = 'blue'
}

const printColour = (colour: Colours) => {
    document.writeln(`Color name: ${colour}`)
}

export {
    Colours,
    printColour
}
