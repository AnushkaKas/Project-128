song1 = "";
song2 = "";
leftWristX = 0;
leftWristY = 0;
rightWristX = 0;
rightWristY = 0;

function preload() 
{
    song1 = loadSound("harrypotter.mp3");
    song2 = loadSound("tinkerbell.mp3");
}

function setup() 
{
    canvas = createCanvas(400, 400);
    canvas.center();
    canvas.position(400, 250);

    video = createCapture(400, 400);
    video.hide();

    posrNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function draw() 
{
    image(video, 0, 0, 400, 400);
}

function modelLoaded() 
{
    console.log('Model Loaded');
}

function gotPoses(results) 
{
    if (results.length > 0) 
    {
        console.log(results);
        leftWristX = results[0].pose.leftWrist.x;
        leftWristY = results[0].pose.leftWrist.y;
        console.log("Left Wrist X = " + leftWristX + "Left Wrist Y = " + leftWristY); right

        rightWristX = results[0].pose.rightWrist.x;
        rightWristY = results[0].pose.rightWrist.y;
        console.log("Right Wrist X = " + rightWristX + "Right Wrist Y = " + rightWristY);
    }
}

function play() 
{
    song1.play();
    song2.play();
    song1.setVolume(1);
    song2.setVolume(1);
    song1.rate(1);
    song2.rate(1);
}