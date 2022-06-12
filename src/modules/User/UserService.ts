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
      email: "wxample@mail.com",
      age: 20,
      city: {
        id: 1,
        name: "City on the edge of the world",
      },
    });
  }
}

export default UserService;
