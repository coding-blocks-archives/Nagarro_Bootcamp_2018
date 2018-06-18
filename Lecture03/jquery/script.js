
function getData() {
    $.get(
        'http://jsonplaceholder.typicode.com/posts', 
        function (data) {
            console.log(data)
            for (post of data) {
                $('body').append(`<div>${post.body}</div>`)
            }
        }
    )
}


(function () {

})()