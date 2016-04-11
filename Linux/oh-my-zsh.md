## Zsh, Oh-My-Zsh 설치
```shell
sudo apt-get install zsh git    # Git 필요
chsh -s `which zsh`             # 기본 셸 변경
curl -L https://raw.github.com/robbyrussell/oh-my-zsh/master/tools/install.sh | sh
```

#### 스펠체크 사용
```shell
setopt correct
```

#### alias-tips
```shell
cd ${ZSH_CUSTOM1:-$ZSH/custom}/plugins
git clone https://github.com/djui/alias-tips.git
vim ~/.zshrc
```

**alias-tips** 추가
```shell
plugins=(git, ... alias-tips)
```

Zsh 반영
```shell
source ~/.zshrc
```
