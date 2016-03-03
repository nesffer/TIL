## 스레드(Thread)
스레드(thread)는 어떠한 프로그램 내에서, 특히 프로세스 내에서 실행되는 흐름의 단위를 말한다. 일반적으로 한 프로그램은 하나의 스레드를 가지고 있지만, 프로그램 환경에 따라 둘 이상의 스레드를 동시에 실행할 수 있다. 이러한 실행 방식을 멀티스레드(multithread)라고 한다.

## 프로세스와 스레드
| 항목 | 멀티프로세서 | 멀티스레드 |
| :--: | :------: | :----: |
| 흐름 | 동시 | 동시 |
| 프로세스 | 독립 | 단일 |
| 메모리 | 각각 | 공유 |
| 전환속도 | 느림 | 빠름 |

## 멀티스레딩(Multithreading)
장점: 멀티코어에서 코어 하나가 하나의 스레드를 담당하여 속도를 높일 수 있다.

단점: 각각의 스레드 중 어떤 것이 먼저 실행될지 그 순서를 알 수 없다. 이러한 문제를 '경쟁 조건'이라고 한다. 이를 막을 수 있는 방법으로 '세마포어'가 있다.