import is from "@sindresorhus/is";
import { userAuthService } from "../services/userService";
import { logger } from "../winstonLogger";

const addUser = async (req, res, next) => {
  try {
    logger.info("addUser");
    if (is.emptyObject(req.body)) {
      throw new Error(
        "headers의 Content-Type을 application/json으로 설정해주세요"
      );
    }

    // req (request) 에서 데이터 가져오기
    const name = req.body.name;
    const email = req.body.email;
    const password = req.body.password;

    // 위 데이터를 유저 db에 추가하기
    const newUser = await userAuthService.addUser({
      name,
      email,
      password,
    });

    if (newUser.errorMessage) {
      logger.error("addUser 오류");
      throw new Error(newUser.errorMessage);
    }

    res.status(201).json(newUser);
  } catch (error) {
    next(error);
  }
}

const getUser = async (req, res, next) => {
  try {
    // req (request) 에서 데이터 가져오기
    const email = req.body.email;
    const password = req.body.password;

    // 위 데이터를 이용하여 유저 db에서 유저 찾기
    const user = await userAuthService.getUser({ email, password });

    if (user.errorMessage) {
      throw new Error(user.errorMessage);
    }

    res.status(200).send(user);
  } catch (error) {
    next(error);
  }
}

const getUsers = async (req, res, next) => {
  try {
    // 전체 사용자 목록을 얻음
    const users = await userAuthService.getUsers();
    res.status(200).send(users);
  } catch (error) {
    next(error);
  }
}

const setUser = async (req, res, next) => {
  try {
    // URI로부터 사용자 id를 추출함.
    const user_id = req.params.id;
    // body data 로부터 업데이트할 사용자 정보를 추출함.
    const name = req.body.name ?? null;
    const email = req.body.email ?? null;
    const password = req.body.password ?? null;
    const description = req.body.description ?? null;

    const toUpdate = { name, email, password, description };

    // 해당 사용자 아이디로 사용자 정보를 db에서 찾아 업데이트함. 업데이트 요소가 없을 시 생략함
    const updatedUser = await userAuthService.setUser({ user_id, toUpdate });

    if (updatedUser.errorMessage) {
      throw new Error(updatedUser.errorMessage);
    }

    res.status(200).json(updatedUser);
  } catch (error) {
    next(error);
  }
}

const getUserInfo = async (req, res, next) => {
  try {
    const user_id = req.params.id;
    const currentUserInfo = await userAuthService.getUserInfo({ user_id });

    if (currentUserInfo.errorMessage) {
      throw new Error(currentUserInfo.errorMessage);
    }

    res.status(200).send(currentUserInfo);
  } catch (error) {
    next(error);
  }
}

const updateUserProfileImage = async (req, res, next) => {
  try {
    const user_id = req.params.id;

    if (!req.file) {
      throw new Error("파일이 없습니다.");
    }

    const updatedUserInfo = await userAuthService.updateUserProfileImage(user_id, req.file.path);

    if (updatedUserInfo.errorMessage) {
      throw new Error(updatedUserInfo.errorMessage);
    }

    res.status(200).send(updatedUserInfo);
  } catch (error) {
    next(error);
  }
}

export const userController = {
  addUser,
  getUser,
  getUsers,
  setUser,
  getUserInfo,
  updateUserProfileImage
};