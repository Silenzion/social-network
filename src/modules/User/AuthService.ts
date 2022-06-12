import BaseService from "@/_core/service/BaseService";
import LoginData from "@/modules/User/models/LoginData";
import userModel from "@/modules/User/models/UserModel";
import UserModel from "@/modules/User/models/UserModel";
import { useUserStore } from "@/modules/User/store";

class AuthService extends BaseService {
  userStore = useUserStore();

  get isAuthenticated() {
    // return this.userStore.getUser;
    return false;
  }

  getCurrentUser(): UserModel {
    return this.userStore.getUser || new userModel();
  }

  login(loginData: LoginData){

  }
}

export default AuthService;