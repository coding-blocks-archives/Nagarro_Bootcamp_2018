function fun1 () {
    console.log("fun1 runnning")
}

function fun2 (f) {
    console.log("fun2 running")
    f()
}
console.log("starting fun")
fun2(function () {
    console.log("newfun running")
})
console.log("stopping fun")