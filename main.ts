function Face_Recognition () {
    huskylens.initI2c()
    huskylens.initMode(protocolAlgorithm.ALGORITHM_FACE_RECOGNITION)
    while (초기화 == 0) {
        huskylens.request()
        if (huskylens.isAppear(1, HUSKYLENSResultType_t.HUSKYLENSResultBlock)) {
            basic.showIcon(IconNames.Heart)
            basic.pause(100)
            basic.clearScreen()
            초기화 = 1
        }
    }
    music.playSoundEffect(music.builtinSoundEffect(soundExpression.giggle), SoundExpressionPlayMode.UntilDone)
    basic.showString("HI")
    basic.pause(100)
    기분 = 0
}
let 기분 = 0
let 초기화 = 0
Face_Recognition()
basic.forever(function () {
	
})
