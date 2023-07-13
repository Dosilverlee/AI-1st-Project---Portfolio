1.models/schema에서 자료의 구조 정의(string 타입 등)
2.models/에서 schema를 통한 모델과, 그 모델의 메서드(create, findOne 등)들을 정의
3.services/에서 실제로 모델의 메서드를 활용해서, 데이터를 만들기(findOne으로 데이터를 찾아서 가공하는 등)
4.routers/에서 각 경로별로 service를 활용하기

작동구조
1)프론트에서 값 그릴때, mongoDB의 _id값을 요소의 ID에 삽입
2)차후 해당값 요청해서 가져올때, href="_id" 경로로 요청
3)req.parmas._id 값으로 몽고DB에서 값 찾기
4)찾은 값 그리기

작업 진행중인 부분
1.각 메서드의 작동 관련 디테일
2.변수명 수정