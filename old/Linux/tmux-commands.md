# tmux

**새로운 세션**

```shell
$ tmux new-session -s 세션이름
or
$ tmux new -s 세션이름
```


**세션이름 변경**

```
C-b + $
```

```
C-b + :
```

```
rename-session new-name
or
rename-session -t 바꿀세션이름 바뀔세션이름
```


**세션 분리**

```
C-b + d
```


**세션 목록**

```shell
$ tmux list-session
or
$ tmux list-sessions
or
$ tmux ls
```


**세션 결합**

```shell
$ tmux attach -t 번호/이름
```


**세션 죽이기**

```shell
$ tmux kill-session -t 번호/이름
```
