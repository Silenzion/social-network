import BaseService from "@/_core/service/BaseService";
import UserModel from "@/modules/User/models/UserModel";

class UserService extends BaseService {
  //TODO: later will add auth by local storage
  get isAuthenticated() {
    return true;
  }

  getUser(): UserModel {
    return new UserModel({
      id: 1,
      name: "John",
      surname: "Doe",
      age: 20,
    });
  }
}

export default UserService;
