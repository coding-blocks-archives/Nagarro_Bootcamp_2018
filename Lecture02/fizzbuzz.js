window.onload = function () {
    let n = document.getElementById('n')
    let fb = document.getElementById('fb')
    let list = document.getElementById('list')

    fb.onclick = function () {
        let start = new Date().getTime()
        let num = n.value
        let data = ''
        for (let i = 1; i <= num; i++) {
            let print = ''
            if (i % 3 == 0) print = 'fizz'
            
            if (i % 5 == 0) print += 'buzz'

            if (print == '') print = i

            data += '<li>' + print + '</li>'

            // let item = document.createElement('li')
            // item.innerText = print
            // list.appendChild(item)
        }
        list.innerHTML = data

        let time = new Date().getTime() - start
        console.log(time)
    }
}