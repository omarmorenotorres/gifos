

trendingGifs = () =>{
    
    const q = null;
    const limit = 12;    
    const apikey = 'w9XjMRAcNWtcFxYyQeCy0MeCntdp00LA&limit=6'
    const path = `http://api.giphy.com/v1/gifs/trending?&api_key=${apikey}&limit=${limit}&q=${q}}`;
    
    //console.log(path);
    
    fetch(path).then(function (res) {
        return res.json();
    }).then( function (json) {
    
        json.data.forEach(function (obj) {
            const url = obj.images.original.url;
            const gifTitle = obj.title;
            const username = obj.username;
            let carousel = document.getElementById('carousel');

            let gif = document.createElement('div');
            gif.className = 'gifCarousel';
            gif.style.backgroundImage = "url('"+url+"')";
            
            
            let textBox = document.createElement("div");
            textBox.className ='text__boxCarousel';

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
            user.textContent = `${shortUser.slice(0,15)}`;
            
            let title = document.createElement('p');
            title.className = 'text__box-title';
            let shortTitle = gifTitle;
            title.textContent = `${shortTitle.slice(0,15)}`;
            
            max.appendChild(imgMax);
            dow.appendChild(imgDow);
            fav.appendChild(imgFav);
            
            textBox.appendChild(max);
            textBox.appendChild(dow);
            textBox.appendChild(fav);
            textBox.appendChild(user);
            textBox.appendChild(title);
            gif.appendChild(textBox);            
            
            carousel.appendChild(gif);
        });
    }).catch(function (err) {
        console.log(err.message);    
    });
}

gifDownload = (url) =>{
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

crearModal = (url, username, gifTitle, max) =>{
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
    paragraphTitle.textContent = `${gifTitle.slice(0,20)}`;

    divFooterInfo.appendChild(paragraphUser);
    divFooterInfo.appendChild(paragraphTitle);

    let modalFooterIcons = document.createElement('div');
    modalFooterIcons.className = 'modal-icons';

    let imgFavFooter = document.createElement('img');
    imgFavFooter.src = '/img/icon-fav-hover.svg';

    let imgDownFooter = document.createElement('img');
    imgDownFooter.src = '/img/icon-download.svg';

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

var arrayFavorites = new Array();

createFavorite = (obj) =>{
    //console.log("Creando favorito..." + obj.title);
    let gif ={
        url: obj.images.original.url,
        title: obj.title,
        username: obj.username
    }

    console.log(arrayFavorites);

    arrayFavorites = JSON.parse(localStorage.getItem('favorites'));

    if(arrayFavorites === null){
        arrayFavorites = [];
    }
    arrayFavorites.push(gif);
    localStorage.setItem('favorites', JSON.stringify(arrayFavorites));
    location.reload();
}


var gifSaved = JSON.parse(localStorage.getItem('favorites'));
let btnSeeMore = document.getElementById('btn-see-more');
    btnSeeMore.addEventListener('click',function(){
    });

listFavorites = () =>{    
    
    if (gifSaved != null) {
        if (gifSaved.length >= 12) {
            btnSeeMore.style.display = 'block';
        }
        else{
            btnSeeMore.style.display = 'none';
        }        
    } else {
        gifSaved = "";
    }

    console.log(gifSaved.length);
    
    
    if (gifSaved != null) {
        for (let index = 0; index < gifSaved.length; index++) {
            
            var url = gifSaved[index].url;
            var username = gifSaved[index].username;
            var gifTitle = gifSaved[index].title;
            
            let listGifs = document.getElementById("favorite-list");

            if (listGifs != null) {
            let box = document.createElement("div");
            box.className = 'gif';
            box.style.backgroundImage = "url('"+url+"')";

            let textBox = document.createElement("div");
            textBox.className ='text__box';

            let fav = document.createElement('a');
            fav.className = 'icon__box';
            fav.href = "https://google.com";

            let imgFav = document.createElement('img');
            imgFav.src = '../img/icon-fav-active.svg';

            let dow = document.createElement('a');
            dow.className = 'icon__box';
            dow.addEventListener('click', function () {
               gifDownload(url);
            });           

            let imgDow = document.createElement('img');
            imgDow.src = '../img/icon-download.svg';

            let max = document.createElement('a');
            max.className = 'icon__box';
            max.href = "https://google.com";

            let imgMax = document.createElement('img');
            imgMax.src = '../img/icon-max.svg';

            let user = document.createElement('p');
            user.className = 'text__box-user';
            //let shortUser = username;
            //user.textContent = `${shortUser.slice(0,15)}`;
            user.textContent = username;
            
            let title = document.createElement('p');
            title.className = 'text__box-title';
            //let shortTitle = gifTitle;
            //title.textContent = `${shortTitle.slice(0,15)}`;
            title.textContent = gifTitle;
            
            max.appendChild(imgMax);
            dow.appendChild(imgDow);
            fav.appendChild(imgFav);
            
            textBox.appendChild(max);
            textBox.appendChild(dow);
            textBox.appendChild(fav);
            textBox.appendChild(user);
            textBox.appendChild(title);
            box.appendChild(textBox);            
            listGifs.appendChild( box );

            }else{
                listGifs == "";
            }
        }        
    }     
}

listFavorites();
trendingGifs();

let favIcon = document.getElementById('favIcon');
let favText = document.getElementById('favText');
let favText2 = document.getElementById('favText2');

if (favIcon != null && favText!= null && favText2 != null) {
    if (gifSaved.length != 0) {    
        if (favIcon != null) {
            favIcon.style.display = 'none';
            favText.style.display = 'none';
            favText2.style.display = 'none';
        }else{
            favIcon ="";
        }
    }else{
        favIcon.style.display = 'block';
        favText.style.display = 'block';
        favText2.style.display = 'block';
    }
} else {
    favIcon = "";
    favText = "";
    favText2 = "";
}

const fila = document.querySelector('.contenedor-carousel');
const peliculas = document.querySelector('pelicula');

const flechaIzquierda = document.getElementById('flecha-izquierda');
const flechaDerecha = document.getElementById('flecha-derecha');

flechaDerecha.addEventListener('click',() =>{
    fila.scrollLeft += fila.offsetWidth;
});

flechaIzquierda.addEventListener('click',() =>{
    fila.scrollLeft -= fila.offsetWidth; 
});


