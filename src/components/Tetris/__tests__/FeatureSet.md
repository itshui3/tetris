# Tetris Functionality

meta: 
[] - start button should 'start' the game
[] - kill active pc should kill the currently active pc and a new piece should respawn

in-game: 

- movement
[] - movement keys changes piece position if possible(includes rotation)
[] - movement keys should not change piece position if not possible

- drop
[] - piece should drop asynchronously(is it possible to test the timing?)

- transforms
[] - piece should become static when it falls to a surface
[] - a new active pc should spawn when prev becomes a static piece of the board
[] - rows formations should consume
[] - row formations should cause pieces above it to drop