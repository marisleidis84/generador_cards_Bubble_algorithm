
let aux_catro;
let iconSperiorOrdenar = [];
let iconInferiorOrdenar = [];
let aux;
let arreglo1 = [];



//funcion para generar numeros de 1 al 13
function obtenerValorCard() {
    let iconNmero;
    aux = (Math.floor(Math.random() * 13 + 1));
    if (!(aux == 11 || aux == 12 || aux == 13 || aux == 1)) {
        if (aux_catro == 1 || aux_catro == 3) {
            let fontAux = aux.toString();
            iconNmero = fontAux.fontcolor('red');
        }
        else {
            //let fontAux = aux;
            iconNmero = aux;
        }

    }
    else if (aux == 11) {
        if (aux_catro == 1 || aux_catro == 3) {
            let fontAux = "J";
            iconNmero = fontAux.fontcolor('red');
        } else
            iconNmero = "J";
    }

    else if (aux == 12) {
        if (aux_catro == 1 || aux_catro == 3) {
            let fontAux = "Q";
            iconNmero = fontAux.fontcolor('red');
        }
        else
            iconNmero = "Q";
    }

    else if (aux == 13) {
        if (aux_catro == 1 || aux_catro == 3) {
            let fontAux = "K";
            iconNmero = fontAux.fontcolor('red');
        }
        else
            iconNmero = "K";
    }

    else if (aux == 1) {
        if (aux_catro == 1 || aux_catro == 3) {
            let fontAux = "A";
            iconNmero = fontAux.fontcolor('red');
        }
        else
            iconNmero = "A";
    }

    return iconNmero;

}

//funcion para generar numeros de 1 al 4

function obtenerImgPaloCard() {
    let iconSuperior;
    let iconInferior;
    aux_catro = (Math.floor(Math.random() * 4 + 1));
    if (aux_catro === 1) {
        iconSuperior = "<img src='./img/corazon-rojo.png'/>";
        iconInferior = "<img src='./img/corazon-rojo-reves.png'/>";
    }
    else if (aux_catro === 2) {
        iconSuperior = "<img src='./img/corazon-negro1.png'/>";
        iconInferior = "<img src='./img/corazon-negro-reves1.png'/>";
    }
    else if (aux_catro === 3) {
        iconSuperior = "<img src='./img/diamante.png'/>";
        iconInferior = "<img src='./img/diamante.png'/>";
    }
    else {
        iconSuperior = "<img src='./img/trebol.png'/>";
        iconInferior = "<img src='./img/trebol-reves.png'/>";

    }
    return [iconSuperior, iconInferior];
}

//aqui estoy dibujando la crata en el html
function dibujarCarta() {
    const [iconSuperior, iconInferior] = obtenerImgPaloCard();
    const iconNum = obtenerValorCard();
    //console.log(iconNum);
    //Arreglo de numero del 1 al 13
    arreglo1.push(iconNum);

    //iconSperiorOrdenar.push(iconSuperior);
    //iconInferiorOrdenar.push(iconInferior);



    //dibjando la card y la row1
    let divCard = document.createElement("div");
    let divRow1 = document.createElement("div");
    let divCol1 = document.createElement("div");
    divCard.classList.add("card");
    divRow1.classList.add("row", "rowSuperior");
    divCol1.classList.add("col-md-12", "icon1");
    divCol1.innerHTML = iconSuperior;

    document.body.appendChild(divCard);
    divCard.appendChild(divRow1);
    divRow1.appendChild(divCol1);

    //dibjando la row2
    let divRow2 = document.createElement("div");
    let divCol2 = document.createElement("div");
    divRow2.classList.add("row", "rowNumber");
    divCol2.classList.add("col-md-12", "numero");
    divCol2.innerHTML = iconNum;

    divCard.appendChild(divRow2);
    divRow2.appendChild(divCol2);

    //dibjando la row3
    let divRow3 = document.createElement("div");
    let divCol3 = document.createElement("div");
    divRow3.classList.add("row", "rowInferior");
    divCol3.classList.add("col-md-12", "icon2");
    divCol3.innerHTML = iconInferior;

    divCard.appendChild(divRow3);
    divRow3.appendChild(divCol3);
}

function generadorCards() {
    let cardNumbers = document.querySelector("#input").value;
    for (let i = 0; i < cardNumbers; i++) {
        dibujarCarta();
    }
}


//fncion que ordena
const ordenar = () => {
    console.log("cdcdgfsdj");
    //let cardNumbers = document.querySelector("#input").value;
    let wall = arreglo1 - 1; //we start the wall at the end of the arrayconsole.log(wall)
    while (wall > 0) {
        let index = 0;
        while (index < wall) {
            //compare the adjacent positions, if the right one is bigger, we have to swap
            if (arreglo1[index] > arreglo1[index + 1]) {
                let aux1 = arreglo1[index];
                arreglo1[index] = arreglo1[index + 1];
                arreglo1[index + 1] = aux1;


                
                //console.log(iconSuperiorOrdenar);
                //console.log(iconInferiorOrdenar);
            }
            console.log(arreglo1);
            index++;
        }
        wall--; //decrease the wall for optimization
    }

}

