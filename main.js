leftwristX = 0;
leftwristY = 0;
rightwristX = 0;
rightwristY = 0;
song = "";
song2 = "";
function preload()
{
    song = loadSound("music.mp3");
    song2 = loadSound("https://www.youtube.com/watch?v=de9VHXKhWXc")
}
function draw()
{

}
function setup()
{
    canvas = createCanvas(600, 600);
    canvas.center();
    video = createCapture(VIDEO)
    video.hide();
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on("pose", gotPoses);
}
function moadLoaded()
{
    console.log('PoseNet Is Initialized');
}
function draw()
{
    image(video, 0, 0, 600, 600);
}
function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);
        scoreRightWrist = results[0].pose.keypoints[10].score;
        scoreleftwrist = results[0].pose.keypoints[9].score;
    }
}