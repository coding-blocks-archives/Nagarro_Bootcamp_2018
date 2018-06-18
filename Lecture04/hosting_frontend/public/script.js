$(function () {
    $('#btn').click(function () {
        $.get('/json', function(data) {
            $('#text').text(JSON.stringify(data))
        })
    })
})