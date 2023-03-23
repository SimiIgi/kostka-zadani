console.log('funguju!');

let hodeneCislo = 1
const kocka = document.querySelector('.dice')
const hodKockou = () => {
    hodeneCislo = hodeneCislo + 1
    if (hodeneCislo === 7) {
        hodeneCislo = 1
    }
    kocka.src = `img/side${hodeneCislo}.svg`
}
document.addEventListener('keydown', hodKockou)