# Music Visualiser

A browser-based music visualiser built with p5.js. It takes a song, runs an FFT on it in real time, and draws the frequencies as colored bars that move with the music.

I'm building this from scratch to learn audio signal processing and creative coding.

## How it works

1. p5.sound loads and plays the audio file.
2. `p5.FFT` splits each moment of sound into frequency strengths (bass on the left, treble on the right).
3. Every frame, a loop reads those values and draws one bar per frequency range.
4. Bar color comes from HSB mode, so the hue sweeps across the rainbow from bass to treble.

## Run it

1. Clone the repo.
2. Add your own audio file named `song.mp3` in the project folder (not included, for copyright reasons).
3. Open the folder in VS Code and run `index.html` with the **Live Server** extension. It needs a local server, so opening the file directly won't work.
4. Click the page to play or pause.

## Built with

- JavaScript
- [p5.js](https://p5js.org/) and p5.sound

## Roadmap

- [ ] Logarithmic bar spacing, so the treble side gets more movement
- [ ] Beat detection
- [ ] Particles that react to the kick drum
- [ ] File upload and live mic input
- [ ] Live demo on GitHub Pages
