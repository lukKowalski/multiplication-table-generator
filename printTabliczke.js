#! /usr/bin/env node

const {
    printList
} = require("./src/utils");

//Generuje tabliczkę mnozenia/dzielenia w dwoch kolumnach, do 50, po 18 w slupku
//Wymagany: node
//uruchomienie: ./generujTabliczke_xD.js >> tabliczka (wrzuci tabliczke do pliku "tabliczka")
// 2 * 9 = ___        16 : 2 = ___
// 9 * 1 = ___        35 : 7 = ___
// 5 * 6 = ___        30 : 3 = ___
// 7 * 4 = ___        5 : 5 = ___
// 9 * 6 = ___        45 : 5 = ___
// 2 * 2 = ___        18 : 9 = ___
// 2 * 3 = ___        24 : 8 = ___
// 2 * 6 = ___        40 : 8 = ___
// 1 * 6 = ___        15 : 3 = ___
// 1 * 3 = ___        10 : 10 = ___
// 1 * 2 = ___        50 : 5 = ___
// 3 * 7 = ___        24 : 6 = ___
// 9 * 4 = ___        8 : 8 = ___
// 1 * 1 = ___        42 : 7 = ___
// 4 * 3 = ___        27 : 3 = ___
// 8 * 4 = ___        7 : 1 = ___
// 7 * 2 = ___        40 : 10 = ___
// 8 * 6 = ___        18 : 6 = ___

console.log(printList(50, 36));