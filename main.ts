sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    game.gameOver(false)
})
let crab = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . 7 . . . . 7 . . . . . . 
    . . . . 7 . . . . 7 . . . . . . 
    . . . . f . . . . f . . . . . . 
    . . f f f f f f f f f f . . . . 
    . . f 5 5 5 5 5 5 5 5 f . . . . 
    . . f 5 5 5 5 5 5 5 5 f . . . . 
    . . f 5 7 5 5 5 5 7 5 f . . . . 
    . f f 5 7 7 7 7 7 7 5 f f . . . 
    . f 5 5 5 5 5 5 5 5 5 5 f . . . 
    . f f f f f f f f f f f f . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
let fish = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . f f f f f f . . . . . . . 
    f . . f 9 9 9 9 f f . . . . . . 
    f f f f 9 9 9 9 9 9 f f . . . . 
    f 6 f f 9 9 9 9 9 9 9 f f . . . 
    f 6 f f 9 9 9 9 9 2 9 9 f f . . 
    f 6 f f 9 9 9 9 9 9 9 9 9 f . . 
    f 6 f f 9 9 9 9 4 4 9 9 9 f . . 
    f f . f 9 9 9 9 9 9 4 4 f f . . 
    f . . f 9 9 9 9 9 f f f f . . . 
    . . . f f f f f f f . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Enemy)
scene.setBackgroundColor(1)
crab.setPosition(76, 59)
fish.setPosition(116, 94)
tiles.setCurrentTilemap(tilemap`level1`)
scene.cameraFollowSprite(crab)
controller.moveSprite(crab)
fish.follow(crab, 50)
forever(function () {
    pause(100)
    info.changeScoreBy(1)
})
forever(function () {
	
})
forever(function () {
    pause(3000)
    if (info.score() < 50) {
        fish = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . f f f f f f . . . . . . . 
            f . . f 9 9 9 9 f f . . . . . . 
            f f f f 9 9 9 9 9 9 f f . . . . 
            f 6 f f 9 9 9 9 9 9 9 f f . . . 
            f 6 f f 9 9 9 9 9 2 9 9 f f . . 
            f 6 f f 9 9 9 9 9 9 9 9 9 f . . 
            f 6 f f 9 9 9 9 4 4 9 9 9 f . . 
            f f . f 9 9 9 9 9 9 4 4 f f . . 
            f . . f 9 9 9 9 9 f f f f . . . 
            . . . f f f f f f f . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.Enemy)
        fish.setPosition(116, 94)
        fish.follow(crab, 50)
    }
    if (info.score() >= 50 && info.score() < 100) {
        fish = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . f f f f f f . . . . . . . 
            f . . f 9 9 9 9 f f . . . . . . 
            f f f f 9 9 9 9 9 9 f f . . . . 
            f 6 f f 9 9 9 9 9 9 9 f f . . . 
            f 6 f f 9 9 9 9 9 2 9 9 f f . . 
            f 6 f f 9 9 9 9 9 9 9 9 9 f . . 
            f 6 f f 9 9 9 9 4 4 9 9 9 f . . 
            f f . f 9 9 9 9 9 9 4 4 f f . . 
            f . . f 9 9 9 9 9 f f f f . . . 
            . . . f f f f f f f . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.Enemy)
        fish.setPosition(116, 94)
        fish.follow(crab, 60)
    }
    if (info.score() >= 100 && info.score() < 150) {
        fish = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . f f f f f f . . . . . . . 
            f . . f 9 9 9 9 f f . . . . . . 
            f f f f 9 9 9 9 9 9 f f . . . . 
            f 6 f f 9 9 9 9 9 9 9 f f . . . 
            f 6 f f 9 9 9 9 9 2 9 9 f f . . 
            f 6 f f 9 9 9 9 9 9 9 9 9 f . . 
            f 6 f f 9 9 9 9 4 4 9 9 9 f . . 
            f f . f 9 9 9 9 9 9 4 4 f f . . 
            f . . f 9 9 9 9 9 f f f f . . . 
            . . . f f f f f f f . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.Enemy)
        fish.setPosition(116, 94)
        fish.follow(crab, 70)
    }
    if (info.score() >= 150 && info.score() < 250) {
        fish = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . f f f f f f . . . . . . . 
            f . . f 9 9 9 9 f f . . . . . . 
            f f f f 9 9 9 9 9 9 f f . . . . 
            f 6 f f 9 9 9 9 9 9 9 f f . . . 
            f 6 f f 9 9 9 9 9 2 9 9 f f . . 
            f 6 f f 9 9 9 9 9 9 9 9 9 f . . 
            f 6 f f 9 9 9 9 4 4 9 9 9 f . . 
            f f . f 9 9 9 9 9 9 4 4 f f . . 
            f . . f 9 9 9 9 9 f f f f . . . 
            . . . f f f f f f f . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.Enemy)
        fish.setPosition(116, 94)
        fish.follow(crab, 80)
    }
    if (info.score() >= 250) {
        fish = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . f f f f f f . . . . . . . 
            f . . f 9 9 9 9 f f . . . . . . 
            f f f f 9 9 9 9 9 9 f f . . . . 
            f 6 f f 9 9 9 9 9 9 9 f f . . . 
            f 6 f f 9 9 9 9 9 2 9 9 f f . . 
            f 6 f f 9 9 9 9 9 9 9 9 9 f . . 
            f 6 f f 9 9 9 9 4 4 9 9 9 f . . 
            f f . f 9 9 9 9 9 9 4 4 f f . . 
            f . . f 9 9 9 9 9 f f f f . . . 
            . . . f f f f f f f . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.Enemy)
        fish.setPosition(116, 94)
        fish.follow(crab, 95)
    }
})
