radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 0) {
        basic.showLeds(`
            . # # # .
            # . . . #
            # . . . #
            # . . . #
            . # # # .
            `)
    } else if (receivedNumber == 1) {
        basic.showLeds(`
            . . . . .
            . . # . .
            . . # # .
            . . # . .
            . . . . .
            `)
    } else {
    	
    }
})
radio.setGroup(137)
basic.forever(function () {
    radio.sendNumber(0)
    basic.showLeds(`
        . # # # .
        # . . . #
        # . . . #
        # . . . #
        . # # # .
        `)
    basic.pause(5000)
    radio.sendNumber(1)
    basic.showLeds(`
        . . . . .
        . . # . .
        . . # # .
        . . # . .
        . . . . .
        `)
})
