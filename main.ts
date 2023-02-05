controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.stopAnimation(animation.AnimationTypes.All, mySprite)
    animation.runImageAnimation(
    mySprite,
    [img`
        . . . . . . . . . . . . . . . . 
        . . . f f f f f . . . . . . . . 
        . . . f . f . f . . . . . . . . 
        . . . f f f f f . . . . . . . . 
        . . . f f f f f . . . . . . . . 
        . . . . . f . . . . . . . . . . 
        . . . . . f . . . . . . . . . . 
        . f f f f f f f f f . . . . . . 
        . . . . . f . . . . . . . . . . 
        . . . . . f . . . . . . . . . . 
        . . . . . f . . . . . . . . . . 
        . . . f f f f f . . . . . . . . 
        . . . f . . . f . . . . . . . . 
        . . . f . . . f . . . . . . . . 
        . . . f . . . . . . . . . . . . 
        . . . f . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . f f f f f . . . . . . . . . 
        . . f . f . f . . . . . . . . . 
        . . f f f f f . . . . . . . . . 
        . . f f f f f . . . . . . . . . 
        . . . . f . . . . . . . . . . . 
        . f f f f f f f . . . . . . . . 
        . . . . f . . . . . . . . . . . 
        . . . . f . . . . . . . . . . . 
        . . f f f f f . . . . . . . . . 
        . . f . . . f . . . . . . . . . 
        . . f . . . f . . . . . . . . . 
        . . . . . . f . . . . . . . . . 
        . . . . . . f . . . . . . . . . 
        `],
    200,
    true
    )
})
controller.down.onEvent(ControllerButtonEvent.Released, function () {
    animation.stopAnimation(animation.AnimationTypes.All, mySprite)
    animation.runImageAnimation(
    mySprite,
    [img`
        . . . . . . . . . . . . . . . . 
        . . . f f f f f . . . . . . . . 
        . . . f . f . f . . . . . . . . 
        . . . f f f f f . . . . . . . . 
        . . . f f f f f . . . . . . . . 
        . . . . . f . . . . . . . . . . 
        . . . . . f . . . . . . . . . . 
        . f f f f f f f f f . . . . . . 
        . . . . . f . . . . . . . . . . 
        . . . . . f . . . . . . . . . . 
        . . . . . f . . . . . . . . . . 
        . . . f f f f f . . . . . . . . 
        . . . f . . . f . . . . . . . . 
        . . . f . . . f . . . . . . . . 
        . . . f . . . f . . . . . . . . 
        . . . f . . . f . . . . . . . . 
        `],
    200,
    true
    )
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.stopAnimation(animation.AnimationTypes.All, mySprite)
    animation.runImageAnimation(
    mySprite,
    [img`
        . . . . . . . . . . . . . . . . 
        . . . f f f f f . . . . . . . . 
        . . . f . f . f . . . . . . . . 
        . . . f f f f f . . . . . . . . 
        . . . f f f f f . . . . . . . . 
        . . . . . f . . . . . . . . . . 
        . . . . . f . . . . . . . . . . 
        . f f f f f f f f f . . . . . . 
        . . . . . f . . . . . . . . . . 
        . . . . . f . . . . . . . . . . 
        . . . . . f . . . . . . . . . . 
        . . f f f f f f . . . . . . . . 
        . . f . . . . f . . . . . . . . 
        . f f . . . . f . . . . . . . . 
        f f . . . . . f . . . . . . . . 
        . . . . . . . f . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . f f f f f . . . . . . 
        . . . . . f . f . f . . . . . . 
        . . . . . f f f f f . . . . . . 
        . . . . . f f f f f . . . . . . 
        . . . . . . . f . . . . . . . . 
        . . . . . . . f . . . . . . . . 
        . . . . . f f f f f . . . . . . 
        . . . . . . . f . . . . . . . . 
        . . . . . . . f . . . . . . . . 
        . . . . . f f f f f . . . . . . 
        . . . . . f . . . f . . . . . . 
        . . . . . f . . . f f . . . . . 
        . . . . . f . . . . f f . . . . 
        . . . . . f . . . . . f f . . . 
        . . . . . f . . . . . . . . . . 
        `],
    200,
    true
    )
})
controller.right.onEvent(ControllerButtonEvent.Released, function () {
    animation.stopAnimation(animation.AnimationTypes.All, mySprite)
    animation.runImageAnimation(
    mySprite,
    [img`
        . . . . . . . . . . . . . . . . 
        . . . f f f f f . . . . . . . . 
        . . . f . f . f . . . . . . . . 
        . . . f f f f f . . . . . . . . 
        . . . f f f f f . . . . . . . . 
        . . . . . f . . . . . . . . . . 
        . . . . . f . . . . . . . . . . 
        . f f f f f f f f f . . . . . . 
        . . . . . f . . . . . . . . . . 
        . . . . . f . . . . . . . . . . 
        . . . . . f . . . . . . . . . . 
        . . . f f f f f . . . . . . . . 
        . . . f . . . f . . . . . . . . 
        . . . f . . . f . . . . . . . . 
        . . . f . . . f . . . . . . . . 
        . . . f . . . f . . . . . . . . 
        `],
    200,
    true
    )
})
controller.left.onEvent(ControllerButtonEvent.Released, function () {
    animation.stopAnimation(animation.AnimationTypes.All, mySprite)
    animation.runImageAnimation(
    mySprite,
    [img`
        . . . . . . . . . . . . . . . . 
        . . . f f f f f . . . . . . . . 
        . . . f . f . f . . . . . . . . 
        . . . f f f f f . . . . . . . . 
        . . . f f f f f . . . . . . . . 
        . . . . . f . . . . . . . . . . 
        . . . . . f . . . . . . . . . . 
        . f f f f f f f f f . . . . . . 
        . . . . . f . . . . . . . . . . 
        . . . . . f . . . . . . . . . . 
        . . . . . f . . . . . . . . . . 
        . . . f f f f f . . . . . . . . 
        . . . f . . . f . . . . . . . . 
        . . . f . . . f . . . . . . . . 
        . . . f . . . f . . . . . . . . 
        . . . f . . . f . . . . . . . . 
        `],
    200,
    true
    )
})
scene.onOverlapTile(SpriteKind.Player, sprites.swamp.swampTile13, function (sprite, location) {
    game.over(true)
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.stopAnimation(animation.AnimationTypes.All, mySprite)
    animation.runImageAnimation(
    mySprite,
    [img`
        . . . . . . . . . . . . . . . . 
        . . . . . f f f f f . . . . . . 
        . . . . . f . f . f . . . . . . 
        . . . . . f f f f f . . . . . . 
        . . . . . f f f f f . . . . . . 
        . . . . . . . f . . . . . . . . 
        . . . . . . . f . . . . . . . . 
        . . . . . f f f f f . . . . . . 
        . . . . . . . f . . . . . . . . 
        . . . . . . . f . . . . . . . . 
        . . . . . f f f f f . . . . . . 
        . . . . . f . . . f . . . . . . 
        . . . . . f . . . f f . . . . . 
        . . . . . f . . . . f f . . . . 
        . . . . . f . . . . . f f . . . 
        . . . . . f . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . f f f f f . . . . . . . . 
        . . . f . f . f . . . . . . . . 
        . . . f f f f f . . . . . . . . 
        . . . f f f f f . . . . . . . . 
        . . . . . f . . . . . . . . . . 
        . . . . . f . . . . . . . . . . 
        . f f f f f f f f f . . . . . . 
        . . . . . f . . . . . . . . . . 
        . . . . . f . . . . . . . . . . 
        . . . . . f . . . . . . . . . . 
        . . f f f f f f . . . . . . . . 
        . . f . . . . f . . . . . . . . 
        . f f . . . . f . . . . . . . . 
        f f . . . . . f . . . . . . . . 
        . . . . . . . f . . . . . . . . 
        `],
    200,
    true
    )
})
controller.up.onEvent(ControllerButtonEvent.Released, function () {
    animation.stopAnimation(animation.AnimationTypes.All, mySprite)
    animation.runImageAnimation(
    mySprite,
    [img`
        . . . . . . . . . . . . . . . . 
        . . . f f f f f . . . . . . . . 
        . . . f . f . f . . . . . . . . 
        . . . f f f f f . . . . . . . . 
        . . . f f f f f . . . . . . . . 
        . . . . . f . . . . . . . . . . 
        . . . . . f . . . . . . . . . . 
        . f f f f f f f f f . . . . . . 
        . . . . . f . . . . . . . . . . 
        . . . . . f . . . . . . . . . . 
        . . . . . f . . . . . . . . . . 
        . . . f f f f f . . . . . . . . 
        . . . f . . . f . . . . . . . . 
        . . . f . . . f . . . . . . . . 
        . . . f . . . f . . . . . . . . 
        . . . f . . . f . . . . . . . . 
        `],
    200,
    true
    )
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.stopAnimation(animation.AnimationTypes.All, mySprite)
    animation.runImageAnimation(
    mySprite,
    [img`
        . . . . . . . . . . . . . . . . 
        . . . f f f f f . . . . . . . . 
        . . . f . f . f . . . . . . . . 
        . . . f f f f f . . . . . . . . 
        . . . f f f f f . . . . . . . . 
        . . . . . f . . . . . . . . . . 
        . . . . . f . . . . . . . . . . 
        . f f f f f f f f f . . . . . . 
        . . . . . f . . . . . . . . . . 
        . . . . . f . . . . . . . . . . 
        . . . . . f . . . . . . . . . . 
        . . . f f f f f . . . . . . . . 
        . . . f . . . f . . . . . . . . 
        . . . f . . . f . . . . . . . . 
        . . . f . . . . . . . . . . . . 
        . . . f . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . f f f f f . . . . . . . . . 
        . . f . f . f . . . . . . . . . 
        . . f f f f f . . . . . . . . . 
        . . f f f f f . . . . . . . . . 
        . . . . f . . . . . . . . . . . 
        . f f f f f f f . . . . . . . . 
        . . . . f . . . . . . . . . . . 
        . . . . f . . . . . . . . . . . 
        . . f f f f f . . . . . . . . . 
        . . f . . . f . . . . . . . . . 
        . . f . . . f . . . . . . . . . 
        . . . . . . f . . . . . . . . . 
        . . . . . . f . . . . . . . . . 
        `],
    200,
    true
    )
})
let mySprite: Sprite = null
mySprite = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . f f f f f . . . . . . 
    . . . . . f . f . f . . . . . . 
    . . . . . f f f f f . . . . . . 
    . . . . . f f f f f . . . . . . 
    . . . . . . . f . . . . . . . . 
    . . . . f f f f f f f . . . . . 
    . . . . . . . f . . . . . . . . 
    . . . . . . . f . . . . . . . . 
    . . . . . . . f . . . . . . . . 
    . . . . . f f f f f . . . . . . 
    . . . . . f . . . f . . . . . . 
    . . . . . f . . . f . . . . . . 
    . . . . . f . . . f . . . . . . 
    . . . . . f . . . f . . . . . . 
    `, SpriteKind.Player)
controller.moveSprite(mySprite)
scene.cameraFollowSprite(mySprite)
scene.setBackgroundColor(1)
tiles.setCurrentTilemap(tilemap`level1`)
