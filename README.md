<h1>Tetris</h1>
<b>capstone project to my own side-project journey</b>

Tasks: 
<h2>[0] : ideate:</h2> <b>https://www.figma.com/file/c0gEFa1p9FW7zXabF8VuBb/Tetris-Ideas</b>

Dev Stories: Like user stories, but chunked for progression meaningful to me rather than user-facing features. 
<h3>[0] : Piece placement. active vs. in-waiting vs static pieces and how they exist(or DO they exist....)</h3>

<p>[x]- hold active piece outside of board itself as a coordinates object</p>
<p>[x]- both active && static pieces can be represented by 1, </p>

<h3>[1] : Respawn protocol.</h3>
<p>[x]- In-Waiting Spawns on Init && on Reset(ie. if there's no in-waiting, expect empty-out)</p>
<p>[x]- Active Spawns copies from In-Waiting on empty-out(ie. on transform(active) => empty current active), and rehashes In-Waiting</p>

<h3>[2] : Single Unit Movement.</h3>
<p>[x]- Left/Right: with wall and static piece collision check</p>
<p>[ ]- Up: (I'm not sure what this is supposed to be. I think I'm gonna just make up my own paradigm with 2 up buttons for cw/ccw)</p>
<p>[ ]- Down</p>

<h3>[3] : Held Movement.</h3>
<p>Not sure how to register this type of a keystroke but some ideas: </p>
<p>Do left/right first: I guess register whatever keyStroke this is and set an interval that clears on keyUp</p>
<p>Naively, if we start counting time from keyPressDown and track how long user is holding it for, there can be a certain cut-off point where an interval side-effect fires.</p>
<p>Held down will likely have to inject logic to change the speed of current dropInterval rather than have it's own interval</p>
