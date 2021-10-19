noseX=0;
noseY=0;
function preload(){
clown_nose=loadImage("https://i.postimg.cc/G3v7wRRT/Clown-nose-removebg-preview.png");
}
function setup(){
    canvas=createCanvas(300,300);
    canvas.center();
    video=createCapture(VIDEO);
    video.size(300,300);
    video.hide();
    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);
}
function draw(){
image(video,0,0,300,300);
image(clown_nose,noseX-15,noseY-15,30,30);
fill(255,0,0);
stroke(255,0,0);
}
function take_snapshot(){
    save("myFilterImage.png");
}
function modelLoaded(){
    console.log("posenet is initialized");
}
function gotPoses(results){
if (results.length>0) {
    console.log(results);
    noseX=results[0].pose.nose.x;
    noseY=results[0].pose.nose.y;
    console.log("x Axis="+results[0].pose.nose.x);
    console.log("y Axis="+results[0].pose.nose.y);
}
}