var prediction1 ="";
var prediction2 ="";

Webcam.set({
    width:350,
    height:250,
    image_format:"png",
    png_quality:90
    });
    camera = document.getElementById("camera");
    Webcam.attach("#camera")

    function take_snapshot()
    {
        Webcam.snap(function(data_uri){
            document.getElementById("result").innerHTML="<img id='captured_img' src='"+data_uri+"'/>";
        });
    }

    console.log("ml5.version:", ml5.version);
    classifier=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/dMZRryxbg/model.json",modelloaded);

    function modelloaded()
    { 
        console.log("moadelloaded");
    }

    function speak()
    {

var synth=window.speechSynthesis;
speak_data1="the first prediction is"+prediction1;
speak_data2="the second prediction is"+prediction2;
    }
    function check()
    {
    
    img=document.getElementById('captured_img');
    classifier.classify(img, gotResult);
    
    }
    
    function gotResult(error, results){
    if(error){
        console.error(error);
    }
    else{
        console.log(results)
        document.getElementById("result_gesture_name").innerHTML=results[0].label;
        document.getElementById("result_gesture_name2").innerHTML=results[1].label;
        prediction1=results[0].label;
        prediction2=results[1].label;
        speak();
    }
}