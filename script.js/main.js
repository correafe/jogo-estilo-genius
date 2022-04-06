
let order = [];
let clickedorder = [];
let score = 0;

// 0 = verde
// 1 = vermelho
// 2 = amarelo
// 3 = azul

const blue = document.querySelector('.blue')
const red = document.querySelector('.red')
const green = document.querySelector('.green')
const yellow = document.querySelector('.yellow')

let shuffleorder = () => {
    let colororder = Math.floor(Math.random() * 4);
    order[order.length] = colororder;
    clickedorder = [];

    for (let i in order) {
        let elementcolor = createcolorelement(order[i]);
        lightcolor(elementcolor, Number[i] + 1);
    }
}

let lightcolor = (element, number) => {
    number = number * 1000;
    setTimeout(() => {
        element.classList.add('selected');
    }, number - 250);
    setTimeout(() => {
        element.classList.remove('selected');
    });
}

let checkorder = () => {
    for(let i in clickedorder) {
        if(clickedorder[i] != order[i]) {
            gameover();
            break;
        }
    }
    if(clickedorder.length == order.length) {
        alert('pontuação: ${score}\nvocê acertou! iniciando próximo nível');
        nextlevel();
    }
}

let click = (color) => {
    clickedorder[clickedorder.length] = color;
    createcolorelement(color).classList.add('selected');

    setTimeout(() => {
        createcolorelement(color).classList.remove('selected');
        checkorder();
    },250);
}

let createcolorelement = (color) => {
    if(color == 0) {
        return green;
    } else if(color == 1){
        return red;
    } else if(color == 2){
        return yellow;
    } else if(color == 3){
        return blue;
    }
}

let nextlevel = () => {
    score++;
    shuffleorder();
}

let gameover = () => {
    alert('pontuação: ${score}\nvocê perdeu o jogo!\nclique em ok para iniciar um novo jogo!')
    order = [];
    clickedorder = [];
    playgame();
}

let playgame = () => {
    alert('bem vindo ao gênesis!\niniciando novo jogo!')
    score = 0;
    nextlevel();
}


green.onclick = () => click(0);
red.onclick = () => click(1);
yellow.onclick = () => click(2);
blue.onclick = () => click(3);

playgame();