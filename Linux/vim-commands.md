# Vim Commands

## Open Window
### Horizental Split
  - `CTRL-W s` or `CTRL-W S`
  - `CTRL-W CTRL-S`
  - `:sp[lit] [++opt] [+cmd]`

### Vertical Split
  - `CTRL-W v`
  - `CTRL-W CTRL-V`
  - `:[N]vs[plit] [++opt] [+cmd] [file]`

### New Split
  - `CTRL-W n`
  - `CTRL-W CTRL-N`

  Horizental
  - `:[N]new [++opt] [+cmd]`

  Vertical
  - `:[N]vne[w] [++opt] [+cmd] [file]`

## Window Change Layout
`Ctrl-w H` or type `:wincmd H` to go from horizontal to vertical layout.

`Ctrl-w J` or type `:wincmd J` to go from vertical to horizontal layout.

`Ctrl-w r` or type `:wincmd r` to swap the two buffers but keep the window layout the same.

`Ctrl-w w` or type `:wincmd w` to move the cursor between the two windows/buffers.
