function getName () {
    return "World"
}

function libused () {
    console.log("you are using lib")
}
libused()

global.x = 10
module.exports = {
    getName,
    a: 10
}