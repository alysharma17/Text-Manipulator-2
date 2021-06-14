function preload() {

}

function setup() {
    webcam=createCapture(VIDEO);
    webcam.size(550,500);
    canvas=createCanvas(500,500,);
    canvas.position(560,150);
    poseNet=ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
   
}

function modelLoaded() {
    console.log("PoseNet Initialized!")
}

function draw() {
    background('pink');
}


function gotPoses(results) {
if (results.length>0) {
    console.log(results);
}
}