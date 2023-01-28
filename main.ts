sphero.wake()
basic.forever(function () {
    sphero.setRawMotors(
    sphero.RawMotorModes.forward,
    50,
    sphero.RawMotorModes.forward,
    50
    )
    basic.pause(1000)
    sphero.setRawMotors(
    sphero.RawMotorModes.forward,
    0,
    sphero.RawMotorModes.forward,
    50
    )
    basic.pause(1000)
    sphero.stop(0)
})
