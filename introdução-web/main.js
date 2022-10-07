function addNewTesk() {
    var list = document.getElementById("list");
    var text = document.getElementById("task-name").value;

    if(text.length ===0 ){
        alert('Tarefa precisa de ter mais de 1 caracter')
        return;
    }
    var listitem = document.createElement("li");
    listitem.className = "list-item"

    const textElement = document.createTextNode(text);

    listitem.appendChild(textElement);
    list.appendChild(listitem);
}