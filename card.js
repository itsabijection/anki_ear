<div id="front" class="card">Listen and identify</div>
<script src="http://unpkg.com/tone"></script>
<script>
function semitone(x){
	var note = x.slice(0, -1);
	var dict = {
		"C":"C#", "C#":"D", "D":"D#","D#":"E","E":"F","F":"F#","F#":"G","G":"G#","G#":"A","A":"A#","A#":"B","B":"C"
};
	var oct=x.charAt(x.length-1);
	if(note == "B"){oct = parseInt(oct) + 1;}
	return dict[note]+oct;
}

function minthird(x){
	return semitone(semitone(semitone(x)));
}
function majthird(x){
return semitone(minthird(x));
}
function fifth(x){
return minthird(majthird(x));
}
function dimfifth(x){
return minthird(minthird(x));
}
function majseven(x){
return majthird(fifth(x));
}
function minseven(x){
return minthird(fifth(x));
}
function playNotes(notes, dur){
	const synth = new Tone.PolySynth(Tone.Synth).toDestination();
	const now = Tone.now();
	synth.triggerAttack(notes, now);
	synth.triggerRelease(notes, now + dur);
}
function majChord(root){
	playNotes([root, majthird(root), fifth(root)], 2);
}
function minChord(root){
	playNotes([root, minthird(root), fifth(root)], 2);
}
function dimChord(root){
	playNotes([root, minthird(root), dimfifth(root)], 2);
}
function majSeventhChord(root){
	playNotes([root, minthird(root), fifth(root), majseven(root)], 2);
}
function seventhChord(root){
	playNotes([root, minthird(root), fifth(root), minseven(root)], 2);
}
const n = ["C","C#", "D","D#","E","F","F#","G","G#","A","A#","B"];
function randomNote(){
	const root = n[Math.floor(Math.random() * n.length)];
	//document.getElementById('front').innerHTML = root + (Math.floor(Math.random() * 2) + 2).toString();
	const oct = (Math.floor(Math.random() * 3) + 3).toString()
	return root + oct;
}
</script>
<script>
var code = (function () {/* {{Front}} */}).toString();
code = code.slice(16, code.length - 4);
eval(new DOMParser().parseFromString(code, "text/html").documentElement.textContent);
</script>
