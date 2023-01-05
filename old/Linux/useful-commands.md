# 유용한 명령어

## 우분투 알림
아이콘: `/usr/share/icons/gnome/32x32`
```shell
notify-send -i face-glasses "I am wearing glasses"
notify-send -i face-laugh "I am happy"
```

## Tux + 말풍선 + 무지개 색상
```shell
fortune -s | cowsay -f tux | lolcat -s 64
```
```
 ______________________________________
/ You need more time; and you probably \
\ always will.                         /
 --------------------------------------
   \
    \
        .--.
       |o_o |
       |:_/ |
      //   \ \
     (|     | )
    /'\_   _/`\
    \___)=(___/

```

## at - 일회성 예약 실행
> at 시간 날짜

```shell
at 6pm + 2 days           # 2일 후 오후 6시에 실행
at 11am Jul 21            # 7월 21일 오전 11시에 실행
at 3pm tomorrow           # 내일 오후 3시에 실행
atq                       # 예약 목록
atrm <숫자>               # 예약 삭제
```

## 카메라 비활성화
> modprobe - Add and remove modules from the Linux Kernel

비활성화
```shell
sudo modprobe -r uvcvideo
```
활성화
```shell
sudo modprobe uvcvideo
```

## MD5 검사
```shell
md5sum -c MD5SUMS.txt                                   # MD5 검사
md5sum ubuntu-gnome-14.04.3-desktop-amd64.iso           # MD5 연산값
```

## 100,000개 이상의 폴더 모니터링
> You may need to increase the inotify limits on your system, via /proc/sys/fs/inotify/max\_user\_*

> max_user_watches 기본값 -> 8192

```shell
echo fs.inotify.max_user_watches=100000 | sudo tee -a /etc/sysctl.conf; sudo sysctl -p
```