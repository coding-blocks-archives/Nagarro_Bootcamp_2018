let now = new Date().getTime()

function hello () {
    console.log("hello")
    console.log(new Date().getTime() - now)
}
setTimeout(hello, 1000)