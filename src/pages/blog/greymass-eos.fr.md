---
title: 'Greymass의 EOS 블록생산자 투표 도구 및 라이트 지갑 발표'
date: "2018-06-10"
author: "Greymass"
---
https://greymass.com/logo.png

EOS 출시가 곧 시작되므로, 저희의 EOS 라이트 지갑의 최신 버전을 세계에 공개하려고 합니다.

현재의 소프트웨어 릴리스는 대중의 참여와 실제 사용이 가능한 시간 사이에 큰 격차가 있습니다. Greymass의 목표는 모든 사람들이 EOS를 이해하고 편리하게 사용할 수 있도록 돕는 도구를 대중에게 제공 하는 것입니다. 우리는 계획 한 EOS 도구 중 첫 번째인 EOS 라이트 지갑 데스크탑 용 프로그램을 발표하게 된 것을 자랑스럽게 생각합니다.

---


# 보안 참고 사항

Cryptocurrency 세계에서 보안 (특히 개인 키)이 우리의 주요 관심사입니다.

이 투표 도구는 독립 실행 형 프로그램이므로, 개인 키는 본 컴퓨터에서 떠나지 않습니다. 개인 키는 (지정되면) AES-256 암호화를 사용하여 본 장치에 저장됩니다. 이 작업들은 로컬로만 서명되고 외부에서는 수행되지 않습니다.

이 프로그램이 만드는 유일한 연결은, 본인이 선택하는 API 노드입니다. 이것은 웹 사이트 인터페이스를 통한 투표보다 훨씬 안전한 해결책입니다.

마지막으로, @greymass에서하는 모든 일은 오픈 소스이며 항상 오픈 소스 될 것입니다.

# eos-voter 받기

가장 최근 버전

https://github.com/greymass/eos-voter/releases


# 특징

- 블록 생산자 투표하기: 지원할 블록생산자를 선택하시고 투표하세요. 블록생산자 투표 UI는 연구 도구가 아닙니다. 이것은 안전한 투표 방법을 제공하는 간단한 인터페이스입니다.
- 토큰 거래: EOS 또는 다른 토큰을 다른 사용자 또는 거래소로 전송할 수 있습니다.
- CPU / 대역폭 스테이킹: EOS를 대역폭 또는 CPU로 사용하십시오. 이렇게하면 블록 생성자에게 투표하는 동안 가중치를 전달하는 것 외에도 네트워크에서 리소스 사용에 대한 권한이 부여됩니다.
- 로컬 지갑: 개인 키를 가져 오는 동안 비밀번호를 설정하여 로컬 월렛을 만드십시오. 이 비밀번호를 사용하여 키가 로컬에서 암호화됩니다. 이 비밀번호는 지갑 잠금을 해제해야 할 때마다 필요합니다.
- 임시 사용하기: 이 프로그램에 키를 저장하지 않으시려면 비밀번호를 설정하지 않기 만하면됩니다. 이 프로그램이 종료되면 키가 잊어 버리게 됩니다.


---


# 튜토리얼 : 투표 도구 사용 방법

## 첫 번째 단계 : 언어가 한국어로 설정되어 있는지 확인

https://i.imgur.com/SeWgHDO.png

언어를 한국어로 변경하시려면 한글을 클릭하십시오.

## 두 번째 단계 : API 노드와 연결하십시오.

https://i.imgur.com/XyLLLcy.png

이 프로그램을 열 실 때, 첫 페이지에서 API 노드를 요청합니다. 여기에 신뢰할 수있는 커뮤니티 API 노드를 삽입하시거나, 자신이 소유하는 노드를 사용할 수도 있습니다.

Greymass는 출시를 위해, API 노드 https://eos.greymass.com을 호스팅 할 것이며 여기에서 바로 사용할 수 있습니다.

## 세 번째 단계 : 신임 정보 입력


https://i.imgur.com/SRaSgIK.png

https://i.imgur.com/QmmXtFO.png

다음으로 신임 정보를 입력해야합니다, 특히 계정 이름과 개인 키. 계정 이름을 모르십니까? 본 프로그램에 찾을 수 있습니다!

https://i.imgur.com/ROqZ6Yz.png

## 네 번째 (선택 사항) : 암호화 된 자격 증명 저장



https://i.imgur.com/IdNwmHL.png

계정 이름과 개인 키를 입력하면 나중에 다시 입력할 필요가 없도록 장치에 저장하고 암호화하도록 선택할 수 있습니다. 다음에 지갑을 잠금 해제하시면 준비가 완료됩니다. 그러나 이 작업을 원하지 않으시면 걱정할 필요가 없습니다. 각 세션이 시작할 때 자격 증명을 입력하여 지갑을 사용할 수 있습니다.

## 여섯 번째 단계 : 몇몇 생산자 투표하기

https://i.imgur.com/8wS8NbU.png

https://i.imgur.com/HWrLPiR.png

https://i.imgur.com/1RV6Duz.png

이제 생산자에 투표 할 준비가되었습니다. 투표 페이지로 돌아가서 원하는 생산자를 선택하십시오.

## 일곱 번째 (선택 사항) 단계 : 스플래시 페이지 확인

https://i.imgur.com/BdWVIfh.png

원하신다면 오른쪽 상단의 로고를 클릭하십시오. 이 스플래시 페이지에서 도구와 조직에 대한 자세한 정보를 볼 수 있습니다.

이 프로그램이 마음에 들신다면, 신뢰할 수있는 블록생산자 로 투표하는 것을 잊지 마십시오!


# 협찬

이 프로그램의 개발은 Greymass 팀 구성원이 이끌어 내며 이해 관계자가 EOS의 지배 구조에 참여할 수 있도록 노력하고 있습니다.