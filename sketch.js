let song;
let fft;
function preload() {
  song = loadSound('song.mp3');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  fft = new p5.FFT(0.8);//number is how jumpy the graph is, 0.8  good for music
  colorMode(HSB, 360, 100, 100);
}

function mousePressed() {
  if (song.isPlaying()) { //pause song when mouse pressed
    song.pause();
  } else {
    song.play();
  }
}

function draw() {
  background(20);


  let spectrum = fft.analyze(); //convert song to frequency
  let numBars = 256;
  let barWidth = width / numBars;

  
  
  for (let i = 0; i < numBars; i++) {//llop runs 64 times, draws 64 bars
    let value = spectrum[i];//spectrum[0] lowest frequency
    let barHeight = map(value,0,255,0,height*0.7);
    fill(i*4,0,255);
    let hue = map(i, 0, numBars, 180, 300);
    fill(hue, 80, map(value, 0, 255, 40, 100));
    rect(i * barWidth, height - barHeight, barWidth - 1, barHeight); //draws rectangle (x,y,w,h)
  }
}