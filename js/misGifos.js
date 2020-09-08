const apikey = 'w9XjMRAcNWtcFxYyQeCy0MeCntdp00LA'; 

let textOne = document.getElementById('txtOne');
let textTwo = document.getElementById('txtTwo');
let textThree = document.getElementById('txtThree');
let textFour = document.getElementById('txtFour');
let time = document.getElementById('time');

let one = document.getElementById('btnOne');
let btnRecord = document.getElementById('btnRecord');
let btnStop = document.getElementById('btnStop');
let start = document.getElementById('btnStart');
let btnUp = document.getElementById('btnUpGifo');
let reRecord = document.getElementById('reRecord');

start.addEventListener('click', function () {
    start.style.display = 'none';
    btnOne.style.color = '#fff';
    btnOne.style.backgroundColor = '#572EE5';

    textOne.innerHTML = '¿Nos dás acceso';
    textTwo.innerHTML = 'a tu camara?';
    textThree.innerHTML = 'El acceso a tu camara será válido sólo';
    textFour.innerHTML = 'por el tiempo en el que estés creando el GIFO.';

    navigator.mediaDevices.getUserMedia({
        video: true,
        audio: false
    }).then(async function (stream) {
        record(stream);
        recordGifo();
    });

    btnOne.style.backgroundColor = '#572EE5';
    btnOne.style.color = '#fff';

    //recordGifo();
});

recordGifo = () => {

    let btnTwo = document.getElementById('btnTwo');
    //btnTwo.addEventListener('click',function () {

    btnTwo.style.color = '#fff';
    btnTwo.style.backgroundColor = '#572EE5';
    btnOne.style.color = '#572EE5';
    btnOne.style.backgroundColor = '#fff';
    btnRecord.style.display = 'inline';

    textOne.style.display = 'none';
    textTwo.style.display = 'none';
    textThree.style.display = 'none';
    textFour.style.display = 'none';

    document.getElementById('textContainer').style.marginTop = '-280px';
    document.getElementById('video').style.display = 'block';
    //inicio();
    //});
}

const record = async (stream) => {
    let recorder = RecordRTC(stream, {
        type: 'video'
    });
    var video = document.querySelector('video');
    video.srcObject = stream;

    video.onloadedmetadata = function (e) {
        video.play();
    };

    //let time = document.getElementById('time');
    //let record = document.getElementById('btnRecord');        
    btnRecord.addEventListener('click', function () {
        console.log("Grabando...");
        //reinicio();
        inicio();
        recorder.startRecording();
        btnRecord.style.display = 'none';
        time.style.display = 'flex';
        btnStop.style.display = 'inline';

    });

    let arrayMisGifos = new Array();
    //let stop = document.getElementById('btnStop');        
    //btnStop.style.display = 'inline';
    btnStop.addEventListener('click', async function () {
        console.log("Deteniendo...");

        btnUp.style.display = 'inline';
        document.getElementById('time').style.display = 'none';
        document.getElementById('reRecord').style.display = 'flex';
        btnStop.style.display = 'none';

        parar();
        inicio();
        
        recorder.stopRecording(function () {
            //let recordedBlob = recorder.getBlob();
            let form = new FormData();
            form.append('file', recorder.getBlob(), 'myGif.gif');
            console.log(form.get('file'));
            
            /*
            fetch(`https://upload.giphy.com/v1/gifs?&api_key=${apikey}`,{
                mode: "no-cors",
                method: "POST",
                dataType: "json",
                body: form
            })
            .then(response =>{
                console.log(response.status);                
                let data = response.json();                
                return data;
            })
            .catch(err => {
                console.error(err);
            });*/
            
            invokeSaveAsDialog(form.get('file'), "Video");//Guarda la grabacion en local

           
        });
    });
}


var centesimas = 0;
var segundos = 0;
var minutos = 0;
var horas = 0;

function inicio() {
    control = setInterval(cronometro, 10);
    //document.getElementById("inicio").disabled = true;
    //document.getElementById("parar").disabled = false;
    //document.getElementById("continuar").disabled = true;
    //document.getElementById("reinicio").disabled = false;
}
function parar() {
    clearInterval(control);
    //document.getElementById("parar").disabled = true;
    //document.getElementById("continuar").disabled = false;
}
function reinicio() {
    clearInterval(control);
    centesimas = 0;
    segundos = 0;
    minutos = 0;
    horas = 0;
    //Centesimas.innerHTML = ":00";
    Segundos.innerHTML = ":00";
    Minutos.innerHTML = ":00";
    Horas.innerHTML = "00";
    /*document.getElementById("inicio").disabled = false;
    document.getElementById("parar").disabled = true;
    document.getElementById("continuar").disabled = true;
    document.getElementById("reinicio").disabled = true;*/
}
function cronometro() {
    if (centesimas < 99) {
        centesimas++;
        if (centesimas < 10) { centesimas = "0" + centesimas }
        //Centesimas.innerHTML = ":"+centesimas;
    }
    if (centesimas == 99) {
        centesimas = -1;
    }
    if (centesimas == 0) {
        segundos++;
        if (segundos < 10) { segundos = "0" + segundos }
        Segundos.innerHTML = ":" + segundos;
    }
    if (segundos == 59) {
        segundos = -1;
    }
    if ((centesimas == 0) && (segundos == 0)) {
        minutos++;
        if (minutos < 10) { minutos = "0" + minutos }
        Minutos.innerHTML = ":" + minutos;
    }
    if (minutos == 59) {
        minutos = -1;
    }
    if ((centesimas == 0) && (segundos == 0) && (minutos == 0)) {
        horas++;
        if (horas < 10) { horas = "0" + horas }
        Horas.innerHTML = horas;
    }
}

btnUp.addEventListener('click', function () {
    console.log("Subiendo gifo...");
});

reRecord.addEventListener('click', function () {

    console.log("Re Grabando");

    btnStop.style.display = 'none';
    btnUp.style.display = 'none';
    reRecord.style.display = 'none';
    parar();
    reinicio();

    time.style.display = 'flex';
    btnRecord.style.display = 'inline';
});

