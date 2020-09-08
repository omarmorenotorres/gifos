let listMyGifs = document.getElementById('myGifList');

//Acá hay un problema con el video

let box = document.createElement("video");
box.className = 'myGif';
box.src = './video.mp4';
box.autoplay = 'true';
box.loop = 'true';
//box.style.backgroundImage = './2420580805.webm';

let textBox = document.createElement("div");
textBox.className = 'text__box';

let imgFav = document.createElement('img');
imgFav.src = '../img/icon-fav-hover.svg';

let fav = document.createElement('a');
fav.className = 'icon__box';
fav.addEventListener('click', function () {
    //createFavorite(obj);
    imgFav.src = '../img/icon-fav-active.svg';
});

let dow = document.createElement('a');
dow.className = 'icon__box';
dow.addEventListener('click', function () {
    //gifDownload(url);
});

let imgDow = document.createElement('img');
imgDow.src = '../img/icon-download.svg';

let max = document.createElement('a');
max.className = 'icon__box';
max.addEventListener('click', function () {
    //crearModal(url, username, gifTitle, max);
});

let imgMax = document.createElement('img');
imgMax.src = '../img/icon-max.svg';

let user = document.createElement('p');
user.className = 'text__box-user';
//let shortUser = obj.username;
//user.textContent = `${shortUser.slice(0, 15)}`;

let title = document.createElement('p');
title.className = 'text__box-title';
//let shortTitle = gifTitle;
//title.textContent = `${shortTitle.slice(0, 15)}`;

max.appendChild(imgMax);
dow.appendChild(imgDow);
fav.appendChild(imgFav);

textBox.appendChild(max);
textBox.appendChild(dow);
textBox.appendChild(fav);
textBox.appendChild(user);
textBox.appendChild(title);
box.appendChild(textBox);
listMyGifs.appendChild(box);






