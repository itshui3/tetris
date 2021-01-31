<h1>Tetris</h1>
<b>capstone project to my own side-project journey</b>

Tasks: 
<h2>[0] : ideate:</h2> <b>https://www.figma.com/file/c0gEFa1p9FW7zXabF8VuBb/Tetris-Ideas</b>

Dev Stories: Like user stories, but chunked for progression meaningful to me rather than user-facing features. 
<h3>[0] : Piece placement. active vs. in-waiting vs static pieces and how they exist(or DO they exist....)</h3>
  <p>- hold active piece outside of board itself as a coordinates object</p>
  <p>- both active && static pieces can be represented by 1, </p>
  <p>therefore to line validate later I can simply if(line) and use the boolean nature of 0/1</p>
  <p>0's being empty spaces</p>
  <p>1's being static, or instantiated pieces</p>
  
------------------------------------- stop thinking about the stuff below this line --------------------------------------------<br />
<h3>[1] : Drop protocol & piece instantiation. </h3>
  <p>- expects always 1 active piece & 1 piece in-waiting</p>
  <p>- when active piece 'lands' => ie. bottoms out y-axis or 'runs into' inactive pc, piece should become inactive</p>
    <p>=> expects board to notice no current active pc && game not ended, spawn next active pc && randomize piece in-waiting</p>
    <p>?=> how can I handle initial spawn of active/in-waiting vs. re-instantiation with the same system?</p>
<h3>[2] : Line validation, consupmtion, and effects. </h3>
  <p>- perform check whenever piece instantiation occurs to determine: </p>
    <p>=> are there lines?</p>
    <p>=> how many? </p>
    <p>?=> how do I handle static pieces dropping due to lineConsumption? </p>
    <p>?=> determine pieces that need to drop. pieces with gaps underneath, vs ground pulled out from under[check how actual tetris does this]</p>
    <p>?=> how do I handle lines that occur due to previous lines being emptied out? should they be treated as part of a combo? </p>
      <p>!=> we can do comboAmt as a point multiplier!! </p>
      <p>!=> maybe if the staticDrop occurs recursively off consumption/validation </p>
      <p><i>I can pass combo-chain info and create a visual sequence of events as well as calculate points</i></p>
      <p>point calculation protocol: each instance of lineConsumption should increase points</p>
      <p>because the comboChain paradigm makes point-accumulation non-linear, the proceeding point gain can occur as a product of curComboAmt * linesConsumed</p>
