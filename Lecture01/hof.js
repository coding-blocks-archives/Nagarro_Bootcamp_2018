
function greeter(greeting) {
    function greet(name) {
        console.log(greeting + " " + name)
    }

    return greet
}

let gm = greeter("Good Morning")
gm("John")
gm("Mary")

function fun1 () {
    console.log("This is fun1")
}

function fun2 (f) {
    console.log("This is fun2")
    f()
}

fun2(fun1)


function a () {
    function a () {

    }
}