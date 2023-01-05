# \`cat\` Syntax Highlighting ~~문법 색 입히기~~

## 1. Pygments 설치
```shell
sudo -H python3 -m pip install -U pygments
```

## 2. alias 추가
`.bashrc` 또는 `.zshrc`에 추가
```shell
alias cat="pygmentize -g"
```

## 3. `.rc` 파일 갱신
```shell
source ~/.zshrc
```

![](https://coderwall-assets-0.s3.amazonaws.com/uploads/picture/file/1951/Screen_Shot_2013-08-07_at_15.14.06.png)
