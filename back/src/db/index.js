import mongoose from "mongoose";
import { User } from "./models/User";
import { Education  } from "./models/Educations";

const REAL_DB_URL = 
  process.env.REAL_DB_URL;
  /*
  "mongodb://127.0.0.1:27017/myDB" ||
  "MongoDB 서버 주소가 설정되지 않았습니다.\n./db/index.ts 파일을 확인해 주세요.";
  */

  console.log(REAL_DB_URL)
mongoose.connect(REAL_DB_URL);

const db = mongoose.connection;

db.on("connected", () =>
  console.log("정상적으로 MongoDB 서버에 연결되었습니다.  " + REAL_DB_URL)
);
db.on("error", (error) =>
  console.error("MongoDB 연결에 실패하였습니다...\n" + REAL_DB_URL + "\n" + error)
);

export { User, Education };
