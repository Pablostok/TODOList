var cont = 0;

function loadData(){
    let finished = false;
    let contSearch = 0;
    while(finished == false){
        var currentItem = localStorage.getItem('tarea-'+contSearch);
        contSearch++;
        if(currentItem == null){
            finished = true;
            break;
        }
        //Creación elemento HTML
        var div = document.createElement("div");
        div.classList.add("estilo-item");
        var paragraph = document.createElement("p");

        div.appendChild(paragraph);
        paragraph.innerText = currentItem;

        var container = document.querySelector(".Container");
        container.appendChild(div);
    }
}

function addItem(){
    var textoFormulario = document.querySelector('#tareaARecoger').value;
    console.log(textoFormulario);

    localStorage.setItem('tarea-'+cont, textoFormulario);
    cont++;

    var div = document.createElement("div");
    div.classList.add("estilo-item");
    var paragraph = document.createElement("p");

    div.appendChild(paragraph);
    paragraph.innerText = textoFormulario;

    var buttonDelete = document.createElement("button");
    buttonDelete.innerHTML = "Eliminar";
    buttonDelete.setAttribute('id', 'boton-eliminar-'+cont);
    buttonDelete.addEventListener('click', () => this.deleteItem(cont-1));
    div.appendChild(buttonDelete);

    var container = document.querySelector(".Container");
    container.appendChild(div);
}

function deleteItem(id){
    localStorage.removeItem('tarea-'+id);
}