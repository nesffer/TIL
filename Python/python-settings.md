# Python Settings

## Uninstall pip
```shell
sudo apt-get remove python{,3}-pip
```

## Install pip
```shell
wget https://bootstrap.pypa.io/get-pip.py
python get-pip.py --user
python3 get-pip.py --user
```

## Install Packages
```shell
sudo apt-get install python-{dev,tk} python3-{dev,tk,lxml} python3.4-venv pylint
sudo -H python3 -m pip install -U pip setuptools wheel pep8 flake8 jedi requests beautifulsoup4
```
