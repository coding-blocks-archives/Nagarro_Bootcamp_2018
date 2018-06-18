$(function () {
    function updateData (data) {
        $('#text').text(JSON.stringify(data))
    }
    $('#get').click(function () {
        $.get('/json', updateData)
    })
    $('#post').click(function () {
        $.post(
            '/json', 
            {
                a: parseInt($('#a').val()),
                d: $('#d').val()
            },
            updateData
        )
    })
})