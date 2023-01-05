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

## Shortcut Keys
| lazy | mnemonic | open file explorer |
| :--- | :------- | :------------------|
| :e . | :edit . | at current working directory |
| :sp . | :split . |	in split at current working directory |
| :vs . | :vsplit . | in vertical split at current working directory |
| :E | :Explore | at directory of current file |
| :Se |	:Sexplore | in split at directory of current file |
| :Vex | :Vexplore | in vertical split at directory of current file |

[The file Explorer](http://vimcasts.org/episodes/the-file-explorer)

[Resize splits more quickly](http://vim.wikia.com/wiki/Resize_splits_more_quickly)
