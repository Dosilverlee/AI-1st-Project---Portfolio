// 페이지 최하단 Footer 부분
function Footer() {
  return (
    <div style={{minWidth:"833px", display: "flex", justifyContent: "center", background: "#E4E4E4"}}>
      <div
        style={{
          width: "1128px",
          height: "200px",
          padding: "30px",
          color: "#929292",
          fontFamily: "Arial, sans-serif",
        }}
      >
        <span
          style={{
            display: "flex",
            justifyContent: "left",
            marginTop: "0px",
            marginBottom: "15px",
          }}
        >
          <img
            style={{ width: "100px", height: "35px" }}
            src="https://elice.io/_next/image?url=%2Fimages%2Felice_logo_gray.png&w=2048&q=100"
          />
        </span>
        <div style={{ fontSize: "12px" }}>
          주소 : 아름다운 이 땅에 금수강산에 단군할아버지가 터 잡으심
        </div>
        <div style={{ fontSize: "12px" }}>
          팀장 정현수 | 통신판매업 신고번호 제2023-우리집-0515호 |
          직업정보제공해줘 신고번호: J00700dd999828254 | 사업자등록번호
          486-33-00755
        </div>

        <div style={{ fontSize: "12px" }}>
          전화 070-377-7777 | 이메일 DoNotContactUs@testelice.io
        </div>

        <div
          style={{ display: "flex", alignItems: "center", marginTop: "5px" }}
        >
          <span
            style={{
              fontSize: "12px",
              color: "#616161",
              fontWeight: "520",
              marginRight: "20px",
            }}
          >
            서비스 이용약관
          </span>
          <span
            style={{
              fontSize: "12px",
              color: "#616161",
              fontWeight: "520",
              marginRight: "20px",
            }}
          >
            개인정보는지켜줘요
          </span>
          <span
            style={{
              fontSize: "12px",
              color: "#616161",
              fontWeight: "520",
              marginRight: "20px",
            }}
          >
            업데이트소식
          </span>
          <span
            style={{
              fontSize: "12px",
              color: "#616161",
              fontWeight: "520",
              marginRight: "20px",
            }}
          >
            고객센터
          </span>
          <span
            style={{
              fontSize: "12px",
              color: "#616161",
              fontWeight: "520",
              marginRight: "20px",
            }}
          >
            채용소식
          </span>
        </div>

        <div style={{ marginTop: "10px" }}>
          <span style={{ fontSize: "12px", color: "#757575" }}>
            Copyright ⓒ 2016 - 2023 Elice Inc. All Rights Reserved.
          </span>
        </div>
      </div>
    </div>
  );
}

export default Footer;
