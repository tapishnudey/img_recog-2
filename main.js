camera=document.getElementById("camera");

Webcam.attach('#camera');

Webcam.set({
    width:350,
    height:300,
    image_format:'png',
    png_quality:900
});

function takesnapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("output").innerHTML='<img id="snapshot" src="'+data_uri+'">';
    });
}

console.log("ml5 version:",ml5version);

classifier = ml5.classifier('https://teachablemachine.withgoogle.com/models/zPx18p5Vi/model.json',modelLoded)