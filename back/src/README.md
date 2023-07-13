1.models/schema에서 자료의 구조 정의(string 타입 등)
2.models/에서 schema를 통한 모델과, 그 모델의 메서드(create, findOne 등)들을 정의
3.services/에서 실제로 모델의 메서드를 활용해서, 데이터를 만들기(findOne으로 데이터를 찾아서 가공하는 등)
4.routers/에서 각 경로별로 service를 활용하기

작동 구조
1)(기존재)로그인 성공하면 userlist를 반환
2)(기존재)카드 클릭시 유저페이지로 요청 onClick={() => navigate(`/users/${user.id}`)}
3)생성 / 검색 요청시 : 라우트 파라매터의 uuid값을 가져와 award, certificate, project, education에서 활용하기
4)수정 / 삭제요청시 : 프론트에서 get등으로 값 받아와 그려줄때, mongoDB의 _id를 요소의 id에 심어놓고, 프론트에서 요청할때 이 _id를 보내면, _id로 DB에서 값 찾아 지우기


작업 진행중인 부분
1)postman으로 award MVP의 기본구조 동작 확인(나머지 mvp도 동일구조) -> req.params.id로 값 가져와, router가 serivce로 전달하여 메서드 활용하는 부분

확인 필요한 부분
2)실제로 DB연결하여 값 생성/ 수정/ 삭제하는부분