전체적인 흐름 in Education

1. db/schemas에서 DB 구조 정함
  - user의 경우  id, email, name, password, description
  - education의 경우 userId, title, description

2. db/models에서 사용할 method 정의
  - create // 생성
  - findById // userId가 userId인 것 찾기
  - update // fieldToUpdate 반영

3. educationService에서 router에서 사용할 method 정의
  (이때 db/models에서 만든 method 사용)
  - getEducationById // 학력 내역 불러옴
  - addEducation //학력 내역 추가
  - setEducation //학력 내역 수정
  - deleteEducation //학력 내역 삭제

4. educationRouter에서 각 경로별 기능 설정
  - app.js에서 app.use('/education', educationRouter)로 연결함
  - 따라서 Router에서 /education은 생략됨
  - get("/:id")
  - post("/:id")
  - put("/:id")
  - delete("/:id")
  - 3번과 동일한 기능을 수행함
