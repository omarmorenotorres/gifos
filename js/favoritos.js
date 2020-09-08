var limit = 12;
let logoDesktop = document.getElementById('logoDesktop');
let logoNigth = document.getElementById('logoNocturno');
let item = document.getElementById('modeName');
let textFavoritos = document.getElementById('text-favoritos');
let header = document.getElementsByTagName('header');
let footer = document.getElementsByTagName('footer');
let icon = document.getElementsByTagName('i');
let sectionGifDescription = document.getElementById('section-gif-description');
let sectionGifTittle = document.getElementById('section-gif-tittle');
let sectionGif = document.getElementById('section-gif');
let search = document.getElementsByClassName('search');
let span = document.getElementsByClassName('span');
let body = document.getElementsByTagName('body');

modeChange = () =>{   
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

nigthMode = () =>{
    let resolution = screen.width;
    let btnSeeMore = document.getElementById('btn-see-more');
    btnSeeMore.className = 'seeMoreNocturno';
    document.querySelector("html").style.setProperty('--navBackground', '#000');
    document.querySelector("html").style.setProperty('--button', '#000');
    document.querySelector("html").style.setProperty('--navText', '#fff');
    textFavoritos.style.color = '#fff';

    if ( resolution < 800) {
        logoDesktop.style.width = '48.8px';
        logoNigth.style.width = '48.8px';
    }

    logoDesktop.style.display = 'none';
    logoNigth.style.display = 'block';
    
    item.textContent = "Modo Diurno";
    sectionGif.style.backgroundColor = '#222326';
    sectionGifTittle.style.color = '#fff';
    sectionGifDescription.style.color = '#fff';
    
    for (let index = 0; index < header.length; index++) {
        header[ index ].style.borderTop = '5px solid #000';         
    }

    for (let index = 0; index < footer.length; index++) {
        footer[ index ].style.borderBottom = '5px solid #000';         
    }
    
    for (let index = 0; index < icon.length; index++) {
        icon[ index ].style.color = '#fff';        
    }

    for (let index = 0; index < search.length; index++) {
        search[ index ].style.borderColor = '#fff';
        search[ index ].style.borderWidth= '1px';
        search[ index ].style.borderStyle= 'solid';
        search[ index ].style.background= '#37383C';
    }

    for (let index = 0; index < span.length; index++) {
        span[ index ].style.background = '#fff';        
    }

    for (let index = 0; index < body.length; index++) {
        body[ index ].style.backgroundColor = '#37383C';
    }

}

dayMode = () =>{
    let resolution = screen.width;
    let btnSeeMore = document.getElementById('btn-see-more');
    btnSeeMore.className = 'btn-see-more';

    let button = document.getElementsByClassName('buttonPlus');
    document.querySelector("html").style.setProperty('--navBackground', '#562ee5e6');
    document.querySelector("html").style.setProperty('--button', '#562ee5e6');
    document.querySelector("html").style.setProperty('--navText', '#562ee5e6');

    if ( resolution < 800) {
        logoDesktop.style.width = '48.8px';
        logoNigth.style.width = '48.8px';
    }
    
    logoDesktop.style.display = 'block';
    logoNigth.style.display = 'none';
    item.textContent = "Modo Nocturno";
    sectionGif.style.backgroundColor = '#F3F5F8';
    sectionGifTittle.style.color = '#562ee5e6';
    sectionGifDescription.style.color = '#000';

    textFavoritos.style.color = '#562ee5e6';

    for (let index = 0; index < header.length; index++) {
        header[ index ].style.borderTop = '5px solid #562ee5e6';         
    }

    for (let index = 0; index < footer.length; index++) {
        footer[ index ].style.borderBottom = '5px solid #562ee5e6';         
    }

    for (let index = 0; index < icon.length; index++) {
        icon[ index ].style.color = 'rgb(0, 0, 0, 0.2)';        
    }    

    for (let index = 0; index < search.length; index++) {
        search[ index ].style.borderColor = '#562ee5e6';
        search[ index ].style.borderWidth= '1px';
        search[ index ].style.borderStyle= 'solid';
        search[ index ].style.background = '#fff';        
    }

    for (let index = 0; index < span.length; index++) {
        span[ index ].style.background = '#572EE5';        
    }

    for (let index = 0; index < body.length; index++) {
        body[ index ].style.backgroundColor = '#fff';        
    }
}

load = () =>{
    if(localStorage.getItem('modo') === 'Modo Nocturno'){
        nigthMode();
    }else{
       // alert("Normal");
        dayMode();
    }
}

load();