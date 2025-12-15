# react-board-project
## 프로젝트 이름: React + Spring 게시판 웹 애플리케이션

## 프로젝트 개요
이 프로젝트는 React와 React Router를 활용한 **웹 기반 게시판 애플리케이션**입니다.  
데이터 저장은 초기에는 LocalStorage를 사용했고, 이후 **Spring Boot와 H2 DB**를 연동하여 서버 기반 데이터 관리를 구현했습니다.  

주요 기능은 다음과 같습니다:

- **사용자 인증**
  - 회원가입, 로그인, 로그아웃
  - 로그인 상태에 따른 페이지 접근 제어
- **마이페이지**
  - 로그인한 사용자의 정보 확인
  - 게시판 이동 버튼 제공
- **게시판 CRUD 기능**
  - 게시글 작성(Create)
  - 게시글 목록 조회(Read)
  - 게시글 수정(Update)
  - 게시글 삭제(Delete)
  - 게시글 이미지 업로드(URL 기반)
  - 게시글 가격 정보 입력 가능
- **DB 연동**
  - Spring Boot와 H2 DB를 이용한 데이터 저장 및 조회
  - JPA를 활용한 엔티티 매핑 및 Repository 사용

---

## 기술 스택
- **Frontend:** React, React Router, Styled-Components
- **Backend:** Spring Boot, Spring Data JPA
- **Database:** H2 Database (인메모리 DB)
- **Storage:** LocalStorage (임시 데이터 용도, 초기 버전)
- **Language:** JavaScript(ES6+), Java
- **기타:** Axios (API 통신)

---

## 기능 상세
1. **회원 관리**
   - 이메일 기반 회원가입 및 로그인
   - JWT 또는 세션 없이 간단히 로그인 상태 관리
2. **게시판**
   - **작성:** 제목, 내용, 가격, 이미지 입력 가능
   - **조회:** 게시글 목록 페이지에서 제목, 작성자, 가격 확인
   - **상세보기:** 게시글 클릭 시 세부 내용 확인
   - **수정/삭제:** 작성자만 수정/삭제 가능
3. **데이터 처리**
   - 프론트: Axios를 이용해 REST API 호출
   - 백엔드: Spring Boot Controller → Service → Repository 구조
   - DB: H2를 사용하여 게시글과 사용자 정보 저장
