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