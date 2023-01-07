song_1 ="";
song_2 ="";
leftWristX = 0;
leftWristY = 0;
rightWristX = 0;
rightWristY = 0;
scoreLeftWrist = 0;
scoreRightWrist =0;
song_variable_1 ="";

function preload(){
    song_1 = loadSound("music.mp3");
    song_2 = loadSound("music2.mp3");
}

function setup(){
    canvas = createCanvas(600,450);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded(){
    console.log('PoseNet Is Initialized');
}

function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);
        scoreLeftWrist = results[0].pose.keypoints[9].score;
        console.log("scoreLeftWrist =" + scoreLeftWrist);

        leftWristX = results[0].pose.leftWrist.x;
        leftWristY = results[0].pose.leftWrist.y;
        console.log("leftWristX =" + leftWristX +"leftWristY =" + leftWristY);

        console.log(results);
        rightWristX = results[0].pose.rightWrist.x;
        rightWristY = results[0].pose.rightWrist.y;
        console.log("rightWristX =" + rightWristX +"rightWristY =" + rightWristY);
    }

}

function draw(){
    image(video, 0,0, 600,450);

    fill('#3D0B37');
    stroke('#3D0B37');

    song_variable_1 = song_1.isPlaying();
    console.log(song_variable_1);

    if(scoreLeftWrist >0.2)
    {
        circle(leftWristX,leftWristY,20);
       song_2.stop();

       if(song_variable_1 == false){
        song_1.play();
        document.getElementById("song_id").innerHTML = "Song Name: Harry Potter Theme Song"
       }

    }

}
