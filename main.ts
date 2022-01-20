input.onGesture(Gesture.TiltRight, function () {
    radio.sendString("R")
})
input.onGesture(Gesture.TiltLeft, function () {
    radio.sendString("L")
})
input.onGesture(Gesture.LogoUp, function () {
    radio.sendString("U")
})
serial.onDataReceived(serial.delimiters(Delimiters.NewLine), function () {
    radio.sendString(serial.readString())
})
input.onGesture(Gesture.LogoDown, function () {
    radio.sendString("D")
})
serial.redirectToUSB()
radio.setGroup(1)
basic.forever(function () {
	
})
