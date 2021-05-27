basic.forever(function () {
    if (cuteBot.ultrasonic(cuteBot.SonarUnit.Centimeters) > 8) {
        cuteBot.motors(50, 50)
    }
    if (cuteBot.ultrasonic(cuteBot.SonarUnit.Centimeters) < 8) {
        cuteBot.motors(-70, 70)
        basic.pause(200)
    }
})
