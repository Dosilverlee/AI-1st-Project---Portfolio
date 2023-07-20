function Footer() {
  return (
    <div
      style={{
        width: "100%",
        height: "200px",
        background: "#E4E4E4",
        marginTop: "30px",
        padding: "30px",
      }}
    >
      
      <span
        style={{
          display: "flex",
          justifyContent: "left",
          marginTop: "10px",
          marginBottom: "30px",
        }}
      >
        <img
          style={{ width: "100px", height: "35px" }}
          src="https://elice.io/_next/image?url=%2Fimages%2Felice_logo_gray.png&w=2048&q=100"
        />
      </span>
      <span style={{fontSize:"10px"}}>
        주소 : 서울특별시 강남구 선릉로 433, 신관 6층 대표자 김재원 | 통신판매업
        신고번호 제2022-서울강남-04515호 | 직업정보제공사업 신고번호:
        J1200020220004 | 사업자등록번호 581-88-00303| 전화 070-4633-2017 |
        이메일 contact@elice.io
      </span>
      <span>
        서비스 이용약관
      </span>
    </div>
  );
}

export default Footer;
