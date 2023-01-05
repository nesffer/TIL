# Ubuntu Favorite Packages

> Ubuntu 16.04 기준으로 작성되었습니다.

## swappiness 값 변경
> swappiness 값 확인
> ```shell
> cat /proc/sys/vm/swappiness
> ```
>
> 임시로 swappiness 값 변경
> ```shell
> sudo sysctl vm.swappiness=10
> ```
>
> 영구적으로 변경하기 위해 에디터 실행
> ```shell
> sudo vim /etc/sysctl.conf
> ```
>
> 값 지정
> ```
> vm.swappiness=10
> ```
> 10으로 지정할 경우 메모리의 90%를 점유할 때 Swap을 사용하기 시작한다.

## fcitx
```shell
sudo apt-add-repository ppa:createsc/3beol
sudo apt update
sudo apt install fcitx fcitx-hangul fcitx-frontend-qt5
```

## 기본적인 사용 환경
```shell
sudo apt install nautilus-image-converter gparted indicator-multiload shutter gnome-web-photo alacarte unity-tweak-tool ubuntu-restricted-extras
```

## 나눔 폰트
```shell
sudo apt install fonts-nanum fonts-nanum-coding fonts-nanum-eco fonts-nanum-extra
```

## 기본적인 개발 도구
```shell
sudo apt install vim ssh git build-essential cmake synaptic filezilla htop
sudo vim /etc/ssh/sshd_config   # 포트 변경
```

## Psensor - A Graphical Temperature Monitor
```shell
sudo apt-get install lm-sensors
sudo sensors-detect
sensors
sudo apt-add-repository ppa:jfi/ppa
sudo apt update
sudo apt install psensor
```

## Google Chrome
```shell
wget -q -O - https://dl-ssl.google.com/linux/linux_signing_key.pub | sudo apt-key add -
sudo sh -c 'echo "deb [arch=amd64] http://dl.google.com/linux/chrome/deb/ stable main" >> /etc/apt/sources.list.d/google.list'
sudo apt update
sudo apt install google-chrome-stable
```

## Node.js
```shell
curl -sL https://deb.nodesource.com/setup_4.x | sudo -E bash -
sudo apt install -y nodejs
```

## Atom
```shell
sudo apt-add-repository ppa:webupd8team/atom
sudo apt update
sudo apt install atom
```

## Visual Studio Code
```
https://code.visualstudio.com/Docs/?dv=linux64_deb
https://az764295.vo.msecnd.net/stable/fa6d0f03813dfb9df4589c30121e9fcffa8a8ec8/vscode-amd64.deb
```

## 보미
```shell
sudo apt-add-repository ppa:darklin20/bomi
sudo apt update
sudo apt install bomi
```

## GitKraken
```shell
wget https://release.gitkraken.com/linux/gitkraken-amd64.deb
sudo dpkg -i gitkraken-amd64.deb
```

## Oracle Java 8
```shell
sudo apt-add-repository ppa:webupd8team/java
sudo apt update
sudo apt install oracle-java8-installer
```

## Mono, MonoDevelop
```shell
sudo apt-key adv --keyserver hkp://keyserver.ubuntu.com:80 --recv-keys 3FA7E0328081BFF6A14DA29AA6A19B38D3D831EF
echo "deb http://download.mono-project.com/repo/debian wheezy main" | sudo tee /etc/apt/sources.list.d/mono-xamarin.list
sudo apt update && sudo apt install mono-complete monodevelop
```

## f.lux
```shell
wget https://justgetflux.com/linux/xflux64.tgz
tar zxvf xflux64.tgz
./xflux -l 36 -g 127 -k 4200
```

## Synapse
```shell
sudo apt-add-repository -y ppa:synapse-core/ppa
sudo apt update && sudo apt install synapse
```

## My-Weather-Indicator
```shell
sudo apt-add-repository ppa:atareao/atareao
sudo apt update && sudo apt install my-weather-indicator
```
