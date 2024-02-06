let number = 0
input.onButtonPressed(Button.A, function () {
    basic.clearScreen()
    number = randint(1, 3)
    if (number == 3) {
        basic.showIcon(IconNames.Yes)
    } else if (number == 2) {
        basic.showIcon(IconNames.No)
    } else {
        basic.showIcon(IconNames.Meh)
    }
})
