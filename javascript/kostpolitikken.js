//Javascript for at give horizontal text
let linje1 = document.querySelector("#kostpolitik1")
let linje2 = document.querySelector("#kostpolitik2")
let linje3 = document.querySelector("#kostpolitik3")
let linje4 = document.querySelector("#kostpolitik4")
let linje5 = document.querySelector("#kostpolitik5")
let linje6 = document.querySelector("#kostpolitik6")
let linje7 = document.querySelector("#kostpolitik7")
let linje8 = document.querySelector("#kostpolitik8")
let linje9 = document.querySelector("#kostpolitik9")
let linje10 = document.querySelector("#kostpolitik10")
let linje11 = document.querySelector("#kostpolitik11")
let linje12 = document.querySelector("#kostpolitik12")
let linje13 = document.querySelector("#kostpolitik13")
let linje14 = document.querySelector("#kostpolitik14")

window.onscroll = () => {
    let pos = window .scrollY - 1200;
    let pos1 = window .scrollY - 5600;
    let pos2 = window .scrollY - 7500;
    let pos3 = window .scrollY - 9500;
    let pos4 = window .scrollY - 14000;
    let pos5 = window .scrollY - 17000;
    let pos6 = window .scrollY - 15000;
    let pos7 = window .scrollY - 19000;
    let pos8 = window .scrollY - 26000;
    let pos9 = window .scrollY - 29000;
    let pos10 = window .scrollY - 35000;
    let pos11 = window .scrollY - 34400;
    let pos12 = window .scrollY - 35600;
    let pos13 = window .scrollY - 38800;
    

    linje1.style.left =  `${pos}px`
    linje2.style.right =  `${pos1}px`
    linje3.style.right =  `${pos2}px`
    linje4.style.left =  `${pos3}px`
    linje5.style.right =  `${pos4}px`
    linje6.style.right =  `${pos5}px`
    linje7.style.left =  `${pos6}px`
    linje8.style.left =  `${pos7}px`
    linje9.style.right =  `${pos8}px`
    linje10.style.left =  `${pos9}px`
    linje11.style.right =  `${pos10}px`
    linje12.style.left =  `${pos11}px`
    linje13.style.left =  `${pos12}px`
    linje14.style.right =  `${pos13}px`
}