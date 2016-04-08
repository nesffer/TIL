#### 패키지 일괄 업그레이드
```shell
pip freeze --local | grep -v '^\-e' | cut -d = -f 1  | xargs -n1 pip install -U
```

#### 패키지 리스트 저장
```shell
pip freeze > requirements.txt
```
