This is a very basic set of tools for ear training. To use, make a new card template in Anki and copy card.js in. Then you can put things like the following on the front:

```playNotes([C#4, F4], 2);```

with the answer "Minor third" on the back. 

Better though, is to put something like ```a = randomNote(); playNotes([a, minthird(a)], 2);``` on the front, to avoid memorizing a particular interval and instead measure the sound of the interval itself.

Other options are 
- ```majChord(root);```: plays 1-3-5
- ```minChord(root);```: plays 1-b3-5
- ```dimChord(root);```: plays 1-b3-b5
- ```majSeventhChord(root);```: plays 1-3-5-7
- ```seventhChord(root);```: plays 1-3-5-b7

Again, I suggest using ```randomNote()``` as the root.
