#### 1. VirtualBox, Vagrant 다운로드 및 설치
* VirtualBox
  - https://www.virtualbox.org/wiki/Downloads
* Vagrant
  - https://www.vagrantup.com/downloads.html

#### 2. Ubuntu Server 14.04 LTS 64bit 설치
```shell
$ vagrant init ubuntu/trusty64; vagrant up --provider virtualbox
```
> * https://atlas.hashicorp.com/boxes/search
> * ubuntu/trusty32: Ubuntu Server 14.04 LTS 32bit
> * ubuntu/trusty64: Ubuntu Server 14.04 LTS 64bit
> * debian/jessie64: Debian 8 "Jessie"

#### 3. SSH 접속
```shell
$ vagrant ssh
```

#### VirtualBox Guest Additions
Guest Additions 설치 전에 필요함

```shell
$ sudo apt-get install linux-headers-$(uname -r) build-essential dkms
```

```shell
$ wget http://download.virtualbox.org/virtualbox/5.0.16/VBoxGuestAdditions_5.0.16.iso
$ sudo mkdir /media/VBoxGuestAdditions
$ sudo mount -o loop,ro VBoxGuestAdditions_5.0.16.iso /media/VBoxGuestAdditions
$ sudo sh /media/VBoxGuestAdditions/VBoxLinuxAdditions.run
$ rm VBoxGuestAdditions_5.0.16.iso
$ sudo umount /media/VBoxGuestAdditions
$ sudo rmdir /media/VBoxGuestAdditions
```
