/**
 * Created by m-hak on 04.02.2016.
 */
window.onload = function () {

    var srcs = ['Interstellar+Main+Theme+Piano+cover++++-+Hans+Zimmer.mp3',
                'Yann Tiersen - Comptine d`un autre ete - l`apres-midi.mp3',
                'Summer 78 - Yann Tiersen.mp3',
                'Dont Turn Back  - Silent Partner.mp3',
                'Delain-Sleepwalkers-dream-Symphonic-Metal-Gothic-Metal_(get-tune.net).mp3',
                'Delain-Hit-Me-With-Your-Best-Shot_(get-tune.net).mp3',
                'Days Are Long  - Silent Partner.mp3',
                'Alan Walker-Spectre.mp3',
                'Alan Walker-Fade.mp3'
    ];

    var play = document.getElementById('play'),
        pause = document.getElementById('pause'),
        stop = document.getElementById('stop'),
        prev = document.getElementById('prev'),
        next = document.getElementById('next'),
        volOff = document.getElementById('volOff'),
        mute = document.getElementById('mute'),
        volDown = document.getElementById('volDown'),
        volUp = document.getElementById('volUp'),
        audio = [],
        currentAudio,
        currentAudioIndex;

        for (var i = 0; i < srcs.length; i++) {
            audio[i] = new Audio();
            audio[i].src = 'playlist/' + srcs[i];
        };

        currentAudio = audio[0];
        currentAudioIndex = 0;

        play.onclick = function () {
            currentAudio.play();
            play.style.display = 'none';
            pause.style.display = 'block';
        }

        pause.onclick = function () {
            currentAudio.pause();
            play.style.display = 'block';
            pause.style.display = 'none';
        }

        stop.onclick = function () {
            currentAudio.pause();
            location.reload();
        }

    prev.onclick = function () {

        currentAudio.pause();
        currentAudioIndex = --currentAudioIndex%audio.length;
        currentAudio = audio[currentAudioIndex];
        currentAudio.play();

    }

    next.onclick = function() {
     currentAudio.pause();
     currentAudioIndex = ++currentAudioIndex%audio.length;
     currentAudio = audio[currentAudioIndex];
     currentAudio.play();
    }



}
