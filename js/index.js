// instagramの写真生成
const photoArea = document.querySelector('.instagram__photo-area')

const photoBox = [];

for (let i = 0; i < 10; i++) {
    const img = document.createElement('img');
    img.classList.add('instagram__photo');
    photoBox.push(img);
}
photoBox.forEach((photo) => {
    photo.setAttribute('src', '../images/sample.jpg');
    photoArea.append(photo);
})

// Q&A
const questions = document.querySelectorAll('.questions__item');
const answers=document.querySelectorAll('.questions__a')
const qButtons = document.querySelectorAll('.questions__button img');
qButtons.forEach(qButton => {
    qButton.setAttribute('src','../images/circle-plus-solid.svg')
})
questions.forEach((question,index) => {
    question.addEventListener('click', () => {
        if (answers[index].classList.contains('active')) {
            answers[index].classList.remove('active')
                        question.classList.remove('active');
        }
        else {
            question.classList.add('active');
            answers[index].classList.add('active')
        }
        if (qButtons[index].getAttribute('src') === '../images/circle-plus-solid.svg') {
            qButtons[index].setAttribute('src','../images/circle-minus-solid.svg')
        }
        else {
            qButtons[index].setAttribute('src','../images/circle-plus-solid.svg')
        }
    })
})

const megaMenu = document.querySelector('.mega-menu');

const navFes = document.querySelector('.nav__item--fes');

navFes.addEventListener('mouseover', () => {
    megaMenu.classList.add('active');
})
navFes.addEventListener('mouseout', () => {
    megaMenu.classList.remove('active');
})

megaMenu.addEventListener('mouseover', () => {
    megaMenu.classList.add('active');
})
megaMenu.addEventListener('mouseout', () => {
    megaMenu.classList.remove('active');
})
