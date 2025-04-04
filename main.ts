let counter = 0
input.onButtonPressed(Button.A, function () {
    counter = counter + 1
    basic.showNumber(counter)
})
input.onButtonPressed(Button.B, function () {
    counter = 0
    basic.showNumber(counter)
})
