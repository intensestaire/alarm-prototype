let sound = 0
let ambient = input.soundLevel()
basic.forever(function () {
    sound = input.soundLevel()
    if (ambient + 15 < sound) {
        while (ambient + 15 < sound) {
            music.play(music.createSoundExpression(WaveShape.Sine, 5000, 5000, 255, 0, 500, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.UntilDone)
            music.play(music.createSoundExpression(WaveShape.Sine, 5000, 5000, 0, 255, 500, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.UntilDone)
        }
    } else {
    	
    }
})
