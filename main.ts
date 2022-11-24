namespace SpriteKind {
    export const npc1 = SpriteKind.create()
    export const complete = SpriteKind.create()
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.npc1, function (sprite, otherSprite) {
    dialog_is_working = true
    game.showLongText("what is the capital of punjab", DialogLayout.Bottom)
    story.showPlayerChoices("chandighar", "new delhi")
    if (story.checkLastAnswer("chandighar")) {
        info.changeScoreBy(5)
        queen.setKind(SpriteKind.complete)
    } else if (story.checkLastAnswer("new delhi")) {
        info.changeScoreBy(-5)
    } else {
    	
    }
    dialog_is_working = false
    pause(1000)
})
let dialog_is_working = false
let queen: Sprite = null
tiles.setCurrentTilemap(tilemap`level1`)
let the_player = sprites.create(assets.image`heroWalkShieldFront1`, SpriteKind.Player)
tiles.placeOnTile(the_player, tiles.getTileLocation(1, 7))
queen = sprites.create(assets.image`princess2Front`, SpriteKind.npc1)
tiles.placeOnTile(queen, tiles.getTileLocation(4, 2))
scene.cameraFollowSprite(the_player)
dialog_is_working = false
forever(function () {
    if (dialog_is_working == false) {
        controller.moveSprite(the_player)
    } else if (dialog_is_working == true) {
        controller.moveSprite(the_player, 0, 0)
    } else {
    	
    }
})
