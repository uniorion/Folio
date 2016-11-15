# Folio
##1. 주제
반응형/적응형 웹 제작
<br><br>

##2. 프로젝트 목적
일주일 동안 높은 완성도와 Github의 Pull Request 방식으로 협업
<br><br>

##3. 프로젝트 수행 후 얻을 수 있는 것
 - 반응형/적응형 웹 제작시 고려해야 할 점
 - 반응형/적응형 웹 제작시 문제점 및 해결방법
 - Github Pull Request 기능 경험
 - Topic branch를 이용한 개발 방법
<br><br>

##4. 작업 방법
 - 공통부분과 작업영역을 나눠서 Issue 등록 후 선택해서 작업
 - 가운데 이미지를 위한 반응형 그리드 각자 제작해보기
 - dev를 통합 브랜치로 이용하고 각자 Fork 후 로컬에서 Topic 브랜치 생성하여 작업
 <br><br>
 
##5. 기타
 - 가이드에 포함할 후보 목록 뽑기
<br><br>

---

#프로젝트 종료 후 토론 및 후기(11.10)

##1. 토론 
 - 가이드 관련 내용은 guide repository에 정리
 - 리팩토링은 새 과제와 팀 프로젝트가 끝난 후에 진행
<br><br>

##2. 후기
### 진기
- 반응형 웹에서 font size를 가변 단위로 할 경우 최소 사이즈를 고려해야 가독성을 잃지 않음.
    - media query를 이용해서 각 font size를 설정. [[참고]](http://naradesign.net/wp/2014/11/06/2077/)
    - font size가 레이아웃을 무너뜨리지 않는다면 고정값을 고려.
- Mobile first 로 접근
    - tablet, desktop 디자인을 고려하지 않아 마크업을 다시 작성함. Mobile first의 필요성을 아직 찾지 못했음.
    - css 작성 시, mobile 스타일 먼저 작성하게 되는데, mobile에서 노출되지 않는 요소의 스타일을 어디서 작성할지 고민됨.
- media query에 따라 변경되는 스타일은 media query를 한 곳에 작성 후 변경되는 스타일을 몰아 작성하는것이 아닌, 각 요소의 스타일이 정의되는 곳에 media query 별 스타일을 작성한다.
- margin, padding 의 % 값은 부모 요소의 __width__ 값에 따라 가변함.
- position % 값의 경우 left/right는 __width__ 값에 따라, top/bottom 은 부모 요소의 __height__ 값에 따라 가변함.
- sass의 function, mixin 등은 여러 상황을 고려하지 않고 만들면 재사용성이 매우 떨어짐.
- github의 pull request 방식의 협업에 대한 이해도가 약간 상승함.

<br>
### 나예

<br>
### 진호
 - 경험이 없는 상태에서 가이드를 작성하는 것은 무리였다는 점을 이해함. 가이드가 필요한 부분을 느끼고 있으니 좋은 가이드 레퍼런스를 활용해서 필요했던 가이드에 대하여 토론.
 - 작업영역을 나누고 그 기준으로 스타일을 나눠서 작업이 잘못된 판단임을 인식하고 공유. 다음 작업은 다르게 접근할 필요가 있음.
 - 팀이 github, pull request, branch에 대해 성숙해진 것을 느낌.
 - 크롬의 고급설정에서 최하 폰트 사이즈에 대해서 제한할 수 있음을 알게 됨. 또한 폰트 값이 상대값으로 변동될 때 가장 작은 폰트 사이즈에 대해서 제한하여 가독성을 놓치지 않아야 함.
 - 스타일의 모듈화 및 HTML과의 결합도가 높아져 Sass의 depth가 깊어져서 유지보수가 어려움.
 - 야무(강사)님에게 요청한 News, Twitter 섹션을 보고 문제점들 인식(꼭 다시 제작해봐야함)[[Yamoo9/Folio]](https://github.com/yamoo9/FDS/tree/master/2nd/DAY25/Folio)
