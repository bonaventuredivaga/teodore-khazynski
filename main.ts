radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber <= 3) {
        basic.showIcon(IconNames.Happy)
        basic.pause(500)
        basic.clearScreen()
    } else if (receivedNumber > 3) {
        basic.showIcon(IconNames.Sad)
        basic.pause(500)
        basic.clearScreen()
    }
})
input.onButtonPressed(Button.A, function () {
    radio.sendNumber(randint(1, 3))
    basic.showIcon(IconNames.Happy)
    basic.pause(500)
    basic.clearScreen()
})
input.onButtonPressed(Button.B, function () {
    radio.sendNumber(randint(5, 7))
    basic.showIcon(IconNames.Sad)
    basic.pause(500)
    basic.clearScreen()
})
radio.setGroup(1)
