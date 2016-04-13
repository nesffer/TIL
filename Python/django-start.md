# Django 시작하기

## 1. VirtualEnv 생성
```shell
python3 -m venv myvenv
```

> The virtual environment was not created successfully because ensurepip is not
> available.  On Debian/Ubuntu systems, you need to install the python3-venv
> package using the following command.
>
>     apt-get install python3-venv
>
> You may need to use sudo with that command.  After installing the python3-venv
> package, recreate your virtual environment.

위와 같은 경고가 출력된다면 아래 패키지를 설치.
```shell
sudo apt-get install python3.4-venv
```

## 2. myvenv로 환경 변경
```shell
source ./bin/activate   # 나갈 때는 deactivate
```

## 3. pip 업그레이드, Django 설치
```shell
python -m pip install -U pip
pip install django==1.9.2
```

## 4. 프로젝트 생성
```shell
django-admin startproject mysite .  # 마지막 . 필수
```

## 5. 서버 실행
```shell
python manage.py runserver
```

## 6. 앱 생성
```shell
python manage.py startapp simpleprint   # helloworld이라는 앱 생성
```
