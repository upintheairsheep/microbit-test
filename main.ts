input.onButtonPressed(Button.A, function () {
    sprite.move(-1)
})
input.onButtonPressed(Button.B, function () {
    sprite.move(1)
})
let sprite: game.LedSprite = null
music.playMelody("C D E F G A B C5 ", 120)
music.playMelody("C5 B A G F E D C ", 120)
sprite = game.createSprite(2, 2)
sprite.move(0)
music.playSoundEffect(music.createSoundEffect(WaveShape.Sine, 5000, 0, 255, 255, 1000, SoundExpressionEffect.None, InterpolationCurve.Linear), SoundExpressionPlayMode.InBackground)
sprite.set(LedSpriteProperty.Y, 1)
basic.pause(50)
sprite.set(LedSpriteProperty.Y, 2)
basic.pause(50)
sprite.set(LedSpriteProperty.Y, 3)
basic.pause(50)
sprite.set(LedSpriteProperty.Y, 4)
basic.pause(50)
sprite.set(LedSpriteProperty.Y, 5)
basic.forever(function () {
	
})
