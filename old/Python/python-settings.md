# Python Settings

> Ubuntu 16.04 기준으로 작성되었습니다.

## Uninstall pip
```shell
sudo apt remove python{,3}-pip
```

## Install pip
```shell
wget https://bootstrap.pypa.io/get-pip.py
sudo -H python get-pip.py
sudo -H python3 get-pip.py
```

## Install Packages
```shell
sudo apt install python-{dev,tk} python3-{dev,tk,lxml} pylint
sudo -H python3 -m pip install -U pip setuptools wheel pep8 flake8 jedi requests beautifulsoup4
```
