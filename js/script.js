var limit = 12;
var more = 0;

//const apikey = 'w9XjMRAcNWtcFxYyQeCy0MeCntdp00LA';

let resolution = screen.width;
let logoDesktop = document.getElementById('logoDesktop');
let logoNigth = document.getElementById('logoNocturno');
let searchInput = document.getElementById('input');
let header = document.getElementsByTagName('header');
let footer = document.getElementsByTagName('footer');
//let icon = document.getElementsByTagName('i');
let textShare = document.getElementById('share-text');
let textReserved = document.getElementById('container-text-reserved');
let sectionGifDescription = document.getElementById('section-gif-description');
let sectionGifTittle = document.getElementById('section-gif-tittle');
let sectionGif = document.getElementById('section-gif');
let textThird = document.getElementById('text-third');
let textSecondary = document.getElementById('text-secondary');
let search = document.getElementsByClassName('input');
let textPrincipal = document.getElementById('text-principal');
let span = document.getElementsByClassName('span');
let body = document.getElementsByTagName('body');
//let item = document.getElementById('modeName');
let leftArrow = document.getElementById('flecha-izquierda');
let rigthArrow = document.getElementById('flecha-derecha');
let btnLupa = document.getElementById('lupa');
let btnClose = document.getElementById('close');
let item = document.getElementById('modeName');
let socialIcons = document.getElementById('social-icons');  
let searchTitle = document.getElementById('search-title');
let modo;

modeChange = () => {
    console.log("Change");

    localStorage.setItem('modo', item.childNodes[0].nodeValue);

    console.log(localStorage.getItem('modo'));
    

    let screenResolution = screen.width;

    if (localStorage.getItem('modo') === 'Modo Nocturno') {
    //if (item.childNodes[0].nodeValue === 'Modo Nocturno') {
        nigthMode();
    } else {
        dayMode();
    }
}

nigthMode = () => {

    searchTitle.style.color = '#fff';
    textThird.style.color = '#fff';
    leftArrow.style.backgroundColor = '#222326'; 
    leftArrow.style.border = 'solid 1px #fff';
    leftArrow.style.color = '#fff'; 

    btnSeeMore.className = 'seeMoreNocturno';

    rigthArrow.style.backgroundColor = '#222326';
    rigthArrow.style.border = 'solid 1px #fff';
    rigthArrow.style.color = '#fff'; 

    document.querySelector("html").style.setProperty('--navBackground', '#000');
    document.querySelector("html").style.setProperty('--button', '#000');
    document.querySelector("html").style.setProperty('--navText', '#fff');

    if (resolution < 800) {
        logoDesktop.style.width = '48.8px';
        logoNigth.style.width = '48.8px';
    }   

    logoDesktop.style.display = 'none';
    logoNigth.style.display = 'block';

    item.textContent = "Modo Diurno";
    textPrincipal.style.color = '#fff';
    textSecondary.style.color = '#fff';
    //trendingList.style.color = '#fff';
    sectionGif.style.backgroundColor = '#222326';
    sectionGifTittle.style.color = '#fff';
    sectionGifDescription.style.color = '#fff';
    textShare.style.color = '#fff';
    textReserved.style.color = '#fff';

    searchInput.style.color = '#9CAFC3';
    searchInput.style.backgroundColor = '#37383c';

    for (let index = 0; index < header.length; index++) {
        header[index].style.borderTop = '5px solid #000';
    }

    for (let index = 0; index < footer.length; index++) {
        footer[index].style.borderBottom = '5px solid #000';
    }

    /*for (let index = 0; index < icon.length; index++) {
        icon[index].style.color = '#fff';
    }*/

    for (let index = 0; index < search.length; index++) {
        search[index].style.borderColor = '#fff';
        search[index].style.borderWidth = '1px';
        search[index].style.borderStyle = 'solid';
        search[index].style.background = '#37383C';
    }

    for (let index = 0; index < span.length; index++) {
        span[index].style.background = '#fff';
    }

    for (let index = 0; index < body.length; index++) {
        body[index].style.backgroundColor = '#37383C';
    }

}

dayMode = () => {
    
    searchTitle.style.color = '#562ee5e6';
    searchTitle.style.cursor = 'pointer';
    let spanText = document.getElementById('text-principal-color');
    let button = document.getElementsByClassName('buttonPlus');

    leftArrow.style.backgroundColor = '#fff';
    leftArrow.style.color = '#562ee5e6';

    rigthArrow.style.backgroundColor = '#fff';
    rigthArrow.style.color = '#562ee5e6';
    

    //document.getElementById('flecha-derecha').style.color = '#fff';
    document.querySelector("html").style.setProperty('--navBackground', '#562ee5e6');
    document.querySelector("html").style.setProperty('--button', '#562ee5e6');
    document.querySelector("html").style.setProperty('--navText', '#562ee5e6');

    if (resolution < 800) {
        logoDesktop.style.width = '48.8px';
        logoNigth.style.width = '48.8px';
    }

    logoDesktop.style.display = 'block';
    logoNigth.style.display = 'none';
    item.textContent = "Modo Nocturno";
    textPrincipal.style.color = '#562ee5e6';
    textSecondary.style.color = '#562ee5e6';
    textThird.style.color = '#562ee5e6';
    sectionGif.style.backgroundColor = '#F3F5F8';
    sectionGifTittle.style.color = '#562ee5e6';
    sectionGifDescription.style.color = '#000';
    textShare.style.color = '#000';
    textReserved.style.color = '#000';

    searchInput.style.color = '#000';
    searchInput.style.backgroundColor = '#fff';

    for (let index = 0; index < header.length; index++) {
        header[index].style.borderTop = '5px solid #562ee5e6';
    }

    for (let index = 0; index < footer.length; index++) {
        footer[index].style.borderBottom = '5px solid #562ee5e6';
    }

    /*for (let index = 0; index < icon.length; index++) {
        icon[index].style.color = 'rgb(0, 0, 0, 0.2)';
    }*/

    for (let index = 0; index < search.length; index++) {
        search[index].style.borderColor = '#562ee5e6';
        search[index].style.borderWidth = '1px';
        search[index].style.borderStyle = 'solid';
        search[index].style.background = '#fff';
    }

    for (let index = 0; index < span.length; index++) {
        span[index].style.background = '#572EE5';
    }

    for (let index = 0; index < body.length; index++) {
        body[index].style.backgroundColor = '#fff';
    }
}



let closeList = document.getElementById('close');
closeList.addEventListener('click', function () {
    document.getElementById('results').style.display = 'none';
    btnLupa.style.display = 'block';
    btnClose.style.display = 'none';
    input.value = "";
});

let input = document.getElementById('input');
input.addEventListener('keydown', function () {
    document.getElementById('results').style.display = 'none';

    btnClose.style.display = 'none';
    btnLupa.style.display = 'block';
    if (event.keyCode === 13) {        
        searchGifs();        
    }
});

search = () => {
    document.getElementById('results').style.borderTop = 'solid 1px #9CAFC3';
    document.getElementById('results').style.width = '145%';

    document.getElementById('results').innerHTML = '';
    const q = document.getElementById('input').value;

    const apikey = 'w9XjMRAcNWtcFxYyQeCy0MeCntdp00LA';    
    const path = `http://api.giphy.com/v1/gifs/search/tags?&api_key=${apikey}&q=${q}`;

    fetch(path).then(function (res) {

        return res.json();
    }).then(function (json) {

        const resultsEl = document.getElementById('results');

        json.data.forEach(function (obj) {

            let i = document.createElement('i');
            i.className = 'fa fa-search';

            let p = document.createElement('div');
            p.className = 'list';
            p.textContent = obj.name;
            p.addEventListener('click', function () {
                console.log("->" + p.textContent);
                document.getElementById('input').value = p.textContent;
                searchGifs();
                resultsEl.style.display = 'none';
                document.getElementById('close').style.display = 'none';
                document.getElementById('lupa').style.display = 'block';
            });

            resultsEl.style.display = 'grid';
            resultsEl.appendChild(i);
            resultsEl.appendChild(p);

        });
    }).catch(function (err) {
        console.log(err.message);
    });

}

let seeMore = document.getElementById('btn-see-more');
seeMore.style.display = 'none';
seeMore.addEventListener('click', function () {
    limit += 12;
    more += 1;
    searchGifs();
});


searchGifs = () => {
    document.getElementById('results').style.display = 'none';
    document.getElementById('lista-gifs').innerHTML = '';
    let botonSeeMore = document.getElementById('btn-see-more');

    let q;

    if (more > 0) {
        q = localStorage.getItem('busqueda');
    } else {
        q = document.getElementById('input').value;
        localStorage.setItem('busqueda', q);
    }

    if (q === "") {
        botonSeeMore.style.display = 'none';
    } else {
        botonSeeMore.style.display = 'block';
    }

    searchTitle.textContent = q;
    document.getElementById('web-divider').style.display = 'block';

    document.getElementById('input').value = '';
    const apikey = 'w9XjMRAcNWtcFxYyQeCy0MeCntdp00LA';
    const path = `http://api.giphy.com/v1/gifs/search?&api_key=${apikey}&limit=${limit}&q=${q}`;

    if (limit > 24) {
        botonSeeMore.style.display = 'none';
        limit = 12;
        more = 0;
    }

    fetch(path).then(function (res) {

        return res.json();
    }).then(function (json) {

        const resultsEl = document.getElementById('results');
        console.log(json.data.length);
        let failSearch = document.getElementById('fail-search');

        if (json.data.length === 0) {
            failSearch.style.display = 'block';
        } else {
            failSearch.style.display = 'none';
        }

        json.data.forEach(function (obj) {

            const url = obj.images.original.url;
            const gifTitle = obj.title;
            const username = obj.username;

            let listGifs = document.getElementById("lista-gifs");
            let box = document.createElement("div");
            box.className = 'gif';
            box.style.backgroundImage = "url('" + url + "')";

            let textBox = document.createElement("div");
            textBox.className = 'text__box';

            let imgFav = document.createElement('img');
            imgFav.src = '../img/icon-fav-hover.svg';

            let fav = document.createElement('a');
            fav.className = 'icon__box';
            fav.addEventListener('click', function () {
                createFavorite(obj);
                imgFav.src = '../img/icon-fav-active.svg';
            });

            let dow = document.createElement('a');
            dow.className = 'icon__box';
            dow.addEventListener('click', function () {
                gifDownload(url);
            });

            let imgDow = document.createElement('img');
            imgDow.src = '../img/icon-download.svg';

            let max = document.createElement('a');
            max.className = 'icon__box';
            max.addEventListener('click', function () {
                crearModal(url, username, gifTitle, max);
            });

            let imgMax = document.createElement('img');
            imgMax.src = '../img/icon-max.svg';

            let user = document.createElement('p');
            user.className = 'text__box-user';
            let shortUser = obj.username;
            user.textContent = `${shortUser.slice(0, 15)}`;

            let title = document.createElement('p');
            title.className = 'text__box-title';
            let shortTitle = gifTitle;
            title.textContent = `${shortTitle.slice(0, 15)}`;

            max.appendChild(imgMax);
            dow.appendChild(imgDow);
            fav.appendChild(imgFav);

            textBox.appendChild(max);
            textBox.appendChild(dow);
            textBox.appendChild(fav);
            textBox.appendChild(user);
            textBox.appendChild(title);
            box.appendChild(textBox);
            listGifs.appendChild(box);
        });
    }).catch(function (err) {
        console.log(err.message);
    });

}

gifDownload = (url) => {
    //***FUNCIÓN QUE DEVUELVE COMO OBJETO EL GIF A DESCARGARA*****/
    (async () => {
        //create new a element
        let a = document.createElement('a');
        // get image as blob
        let response = await fetch(url);
        let file = await response.blob();
        // use download attribute https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a#Attributes
        a.download = 'GiffosDownload';
        a.href = window.URL.createObjectURL(file);
        //store download url in javascript https://developer.mozilla.org/en-US/docs/Learn/HTML/Howto/Use_data_attributes#JavaScript_access
        a.dataset.downloadurl = ['application/octet-stream', a.download, a.href].join(':');
        //click on element to start download
        a.click();
    })();
}

crearModal = (url, username, gifTitle, max) => {
    max.href = '#modal-gif';

    let modal = document.createElement('div');
    modal.className = 'modal';
    modal.id = 'modal-gif';

    /********************BOTÓN CERRAR***********************/
    let divC = document.createElement('div');
    divC.className = 'close-container';

    let close = document.createElement('a');
    close.className = 'close';
    close.href = '#modal-close';
    close.addEventListener('click', function () {
        mod.removeChild(mod.childNodes[0]);
    });

    let iconClose = document.createElement('img');
    iconClose.src = '/img/close.svg';

    close.appendChild(iconClose);
    divC.appendChild(close);

    let modalContainer = document.createElement('div');
    modalContainer.className = 'modal-container';

    let imgGif = document.createElement('img');
    imgGif.className = 'gif-modal-url';
    imgGif.src = url;

    let divImg = document.createElement('div');
    divImg.appendChild(imgGif);

    /*********************************************************/

    let footerContainer = document.createElement('div');
    footerContainer.className = 'gif-footer';
    let divFooterInfo = document.createElement('div');

    let paragraphUser = document.createElement('p');
    paragraphUser.className = 'modal-username';
    let paragraphTitle = document.createElement('p');
    paragraphTitle.className = 'modal-title';
    paragraphUser.textContent = username;
    paragraphTitle.textContent = `${gifTitle.slice(0, 20)}`;

    divFooterInfo.appendChild(paragraphUser);
    divFooterInfo.appendChild(paragraphTitle);

    let modalFooterIcons = document.createElement('div');
    modalFooterIcons.className = 'modal-icons';

    let imgFavFooter = document.createElement('img');
    imgFavFooter.src = '/img/icon-fav-hover.svg';

    let imgDownFooter = document.createElement('img');
    imgDownFooter.src = '/img/icon-download.svg';
    imgDownFooter.style.cursor = 'pointer';
    imgDownFooter.addEventListener('click', function () {
        gifDownload(url);
    });

    modalFooterIcons.appendChild(imgDownFooter);
    modalFooterIcons.appendChild(imgFavFooter);


    footerContainer.appendChild(divFooterInfo);
    footerContainer.appendChild(modalFooterIcons);

    modalContainer.appendChild(divC);
    modalContainer.appendChild(divImg);
    modalContainer.appendChild(footerContainer);

    modal.appendChild(modalContainer);

    let mod = document.getElementById('modal');
    mod.appendChild(modal);
}



trendingList = () => {
    const apikey = 'w9XjMRAcNWtcFxYyQeCy0MeCntdp00LA';
    const path = `http://api.giphy.com/v1/trending/searches?&api_key=${apikey}`;

    fetch(path).then(function (res) {

        return res.json();
    }).then(function (json) {

        json.data.forEach(function (obj) {

            let trend = obj;

            let trendingList = document.createElement('a');
            if(localStorage.getItem('modo', 'Modo Nocturno')){
                trendingList.className = 'claseNueva';
            }else{
                trendingList.className = 'trendingList';    
            }
            
            trendingList.textContent = obj + ", ";
            trendingList.addEventListener('click', function () {

                input.value = trend;
                searchGifs();
            });

            let trendingContainer = document.getElementById('text-third');
            trendingContainer.appendChild(trendingList);
        });
    }).catch(function (err) {
        console.log(err.message);
    });
}

trendingList();


load = () =>{
    if(localStorage.getItem('modo') === 'Modo Nocturno'){
        nigthMode();
    }else{
       // alert("Normal");
        dayMode();
    }
}

load();