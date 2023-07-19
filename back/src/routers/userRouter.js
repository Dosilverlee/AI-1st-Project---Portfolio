import { Router } from "express";
import { login_required } from "../middlewares/login_required";
import { userController } from "../controller/userController";

const userAuthRouter = Router();
const multer = require("multer");
const storage = multer.diskStorage({
  // 경로설정
  destination: function (req, file, cb) {
    // 에러처리, 경로
    cb(null, 'uploads/')
  },
  // originalname이면 사용자가 입력한 파일명 사용
  filename: function (req, file, cb) {
    // 에러처리, 파일명
    cb(null, file.originalname)
  }
})
const upload = multer({ storage: storage });

userAuthRouter.post("/user/register", userController.addUser);
userAuthRouter.post("/user/login", userController.getUser);
userAuthRouter.get("/userlist", login_required, userController.getUsers);
userAuthRouter.get("/user/current", login_required, userController.getUserInfo);
userAuthRouter.put("/users/:id", login_required, userController.setUser);
userAuthRouter.get("/users/:id", login_required, userController.getUserInfo);
userAuthRouter.put("/users/:id/profileImage", login_required, upload.single('profileImage'), userController.updateUserProfileImage);

export { userAuthRouter };
