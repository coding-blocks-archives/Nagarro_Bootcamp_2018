let x = 10;

function myfun () {
    var let = 10
    var x = 20;
    if (true) {
        var x = 30;
        console.log(x);
        x = let
    }
    console.log(x)
}

myfun()