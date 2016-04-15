# Ubuntu Favorite Packages

## fcitx
```shell
sudo add-apt-repository ppa:createsc/3beol
sudo apt-get update
sudo apt-get install fcitx fcitx-hangul fcitx-frontend-qt5
```

## System Load Indicator
```shell
sudo apt-get install indicator-multiload
```

## Psensor - A Graphical Temperature Monitor
```shell
sudo apt-get install lm-sensors
sudo sensors-detect
sensors
sudo add-apt-repository ppa:jfi/ppa
sudo apt-get update
sudo apt-get install psensor
```

## Shutter
```shell
sudo apt-get install shutter gnome-web-photo
```

## Google Chrome
```shell
wget -q -O - https://dl-ssl.google.com/linux/linux_signing_key.pub | sudo apt-key add -
sudo sh -c 'echo "deb [arch=amd64] http://dl.google.com/linux/chrome/deb/ stable main" >> /etc/apt/sources.list.d/google.list'
sudo apt-get update
sudo apt-get install google-chrome-stable
```

## Atom
```shell
sudo add-apt-repository ppa:webupd8team/atom
sudo apt-get update
sudo apt-get install atom
```

## Visual Studio Code
```shell
https://code.visualstudio.com/Docs/?dv=linux64_deb
https://az764295.vo.msecnd.net/stable/fa6d0f03813dfb9df4589c30121e9fcffa8a8ec8/vscode-amd64.deb
```

## 보미
```shell
sudo add-apt-repository ppa:darklin20/bomi
sudo apt-get update
sudo apt-get install bomi
```

## Alacarte (Main Menu)
```
sudo apt-get install alacarte
```

## 기본적인 개발 도구
```shell
sudo apt-get install ssh git build-essential synaptic filezilla gparted htop
sudo vim /etc/ssh/sshd_config   # 포트 변경
```

## GitKraken
```shell
wget https://release.gitkraken.com/linux/gitkraken-amd64.deb
sudo dpkg -i gitkraken-amd64.deb
```

## Oracle Java 8
```shell
sudo add-apt-repository ppa:webupd8team/java
sudo apt-get update
sudo apt-get install oracle-java8-installer
```

## Mono, MonoDevelop
```shell
sudo apt-key adv --keyserver hkp://keyserver.ubuntu.com:80 --recv-keys 3FA7E0328081BFF6A14DA29AA6A19B38D3D831EF
echo "deb http://download.mono-project.com/repo/debian wheezy main" | sudo tee /etc/apt/sources.list.d/mono-xamarin.list
sudo apt-get update
sudo apt-get install mono-complete momodevelop
```

## 멀티 모니터 창 이동 (Unity 환경에서 추천하지 않음)
```shell
sudo apt-get install compizconfig-settings-manager
```
1. Run it → Go to bottom (Window Management) → Go to "Put."
2. Enable the plugin.
3. Configure shortcut for "Put to next Output."
4. Log out and back in again.
5. If the plugin put doesn't appear in CCSM, install
```shell
sudo apt-get install compiz-plugins compiz-plugins-extra
```

## Unity Lens 비활성화
```shell
gsettings set com.canonical.Unity.Lenses disabled-scopes "['more_suggestions-amazon.scope', 'more_suggestions-u1ms.scope', 'more_suggestions-populartracks.scope', 'music-musicstore.scope', 'more_suggestions-ebay.scope', 'more_suggestions-ubuntushop.scope', 'more_suggestions-skimlinks.scope']"
```

## Unity Lens 활성화
```shell
gsettings set com.canonical.Unity.Lenses enabled-scopes "['more_suggestions-amazon.scope', 'more_suggestions-u1ms.scope', 'more_suggestions-populartracks.scope', 'music-musicstore.scope', 'more_suggestions-ebay.scope', 'more_suggestions-ubuntushop.scope', 'more_suggestions-skimlinks.scope']"
```

## 온라인 검색 결과 포함 비활성화
`System Settings` → `Security & Privacy` → `Search` → `OFF`

![Include online search results](http://i.imgur.com/Yomjm2o.png)
