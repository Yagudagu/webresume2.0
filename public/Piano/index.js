const Tone = require("tone");

const synth = new Tone.PolySynth().toDestination();
//Tone.now();
//synth.triggerAttachRelease("C4", "4n");

const WHITE_KEYS = ["z", "x", "c", "v", "b", "n", "m"];
const BLACK_KEYS = ["s", "d", "g", "h", "j"];

const keys = document.querySelectorAll(".key");
const whiteKeys = document.querySelectorAll(".key.white");
const blackKeys = document.querySelectorAll(".key.black");

keys.forEach((key) => {
  key.addEventListener("click", () => synth.triggerAttackRelease(key.id, "4n"));
});

document.addEventListener("keydown", (e) => {
  if (e.repeat) return;
  const key = e.key;
  const whiteKeyIndex = WHITE_KEYS.indexOf(key);
  const blackKeyIndex = BLACK_KEYS.indexOf(key);

  if (whiteKeyIndex > -1)
    document.addEventListener("keyup", (e) => {
      synth.triggerRelease(whiteKeys[whiteKeyIndex].id, Tone.now() + 0.3);
    });
  if (blackKeyIndex > -1)
    document.addEventListener("keyup", (e) => {
      synth.triggerRelease(blackKeys[blackKeyIndex].id, Tone.now() + 0.3);
    });

  if (whiteKeyIndex > -1) playNote(whiteKeys[whiteKeyIndex]);
  if (blackKeyIndex > -1) playNote(blackKeys[blackKeyIndex]);
});

function playNote(key) {
  synth.triggerAttack(key.id, Tone.now());

  // key.addEventListener("ended", () => {
  //   synth.triggerRelease(Tone.now());
  // });
  // const noteAudio = document.getElementById(key.dataset.note);
  // noteAudio.currentTime = 0;
  // noteAudio.play();
  // key.classList.add("active");
  // noteAudio.addEventListener("ended", () => {
  //   key.classList.remove("active");
  // });
}
