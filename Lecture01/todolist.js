window.onload = function () {
    window.newtask = document.getElementById('newtask')
    window.addtask = document.getElementById('addtask')
    window.list = document.getElementById('todolist')

    addtask.onclick = function () {
        let task = newtask.value
        let listItem = document.createElement('li')
        listItem.innerText = task
        
        let crossBtn = document.createElement('button')
        crossBtn.innerText = "x"
        listItem.appendChild(crossBtn)
        listItem.setAttribute('data-id', 5)

        crossBtn.onclick = function (event) {
            console.log(event.target.parentElement.getAttribute('data-id'))
            list.removeChild(event.target.parentElement)
        }
        
        list.appendChild(listItem)
    }
}