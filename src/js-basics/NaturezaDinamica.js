// Natureza Dinâmica no JS

const mouse = {
    cor: 'red',
    marca: 'Logitech'
}

console.log(mouse); // { cor: 'red', marca: 'Logitech' }

mouse.dpi = 5000;
console.log(mouse); // { cor: 'red', marca: 'Logitech', dpi: 5000 }

mouse.trocarDpi = function () {
    console.log('mudando dpi do mouse');
}

console.log(mouse); // { cor: 'red', marca: 'Logitech', dpi: 5000, trocarDpi: [Function] }

delete mouse.trocarDpi;
console.log(mouse); // { cor: 'red', marca: 'Logitech', dpi: 5000 }