let baseline = input.magneticForce(Dimension.Strength)
basic.forever(function () {
    if (input.magneticForce(Dimension.Strength) >= 3 + baseline) {
        basic.showLeds(`
            # . . . #
            . # . # .
            . . # . .
            . # . # .
            # . . . #
            `)
    } else {
        basic.showLeds(`
            . . . . .
            . . . . #
            . . . # .
            # . # . .
            . # . . .
            `)
    }
})
