## 접근 불가능한 변수
> 변수명에 언더바(`__`)를 붙이면 외부에서 접근할 수 없게 된다.

### 예제
```python
class C(object):
    def __init__(self, v):
        self.value = v

c = C(10)
print(c.value)
```
> 10이 출력된다.

```python
class C(object):
    def __init__(self, v):
        self.__value = v

c = C(10)
print(c.value)
```
> AttributeError: 'C' object has no attribute 'value'

```python
class C(object):
    def __init__(self, v):
        self.__value = v
    def show(self):
        print(self.__value)

c = C(10)
c.show()
```
> 10 출력. 정의된 함수로 접근하는 건 영향을 받지 않는다.
