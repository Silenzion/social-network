import LoginData from "@/modules/User/models/LoginData";
import userModel from "@/modules/User/models/UserModel";
import UserModel from "@/modules/User/models/UserModel";
import { User } from "@element-plus/icons-vue";
import { defineStore } from "pinia";

export type UserState = {
  user: UserModel | null;
  userList: UserModel[];
};

const createMockData = (): UserModel[] => {
  return [...new Array(2)].map((elem, index) => {
    return new UserModel({
      id: index,
      name: index == 0 ? "John" : "Joanna",
      surname: "Doe",
      email: "example@mail.com",
      password: "123456",
      age: 20 + index,
      city: {
        id: 1,
        name: "Tokyo",
      },
    });
  });
};

export const useUserStore = defineStore({
  id: "userStore",

  state: () =>
    ({
      user: <UserModel | null>localStorage.getItem("user") ? JSON.parse(localStorage.getItem("user") || "") : null, //auth user
      userList: <UserModel[]>createMockData(),
    } as UserState),

  getters: {
    getUser: (state): userModel | null => state.user,
    getUserList: (state): UserModel[] => state.userList,
  },

  actions: {
    login(data: LoginData): boolean {
      if (!this.userList.length) return false;
      const user = this.userList.find((elem) => {
        return elem.password === data.password && elem.email === data.email;
      });
      if (!user) return false;
      this.updateDataInLocalStorage(user);
      this.user = user;
      return true;
    },

    logout(): void {
      this.user = null;
      localStorage.removeItem("user");
    },

    updateUser(id: number | string, data: Partial<UserModel>): void {
      if (!id || !!data) return;
      const userIndex = this.findIndexById(id);
      if (userIndex == -1) return;
      Object.assign(this.userList[userIndex], data);
    },

    deleteUser(id: number | string): void {
      const userIndex = this.findIndexById(id);
      if (userIndex == -1) return;
      this.userList.splice(userIndex, 1);
    },

    findIndexById(id: number | string): number {
      return this.userList.findIndex((item) => item.id == id);
    },

    updateDataInLocalStorage(data: Partial<UserModel>) {
      if (!data) return;
      // @ts-ignore
      localStorage.setItem("user", data?.toJson());
    },
  },
});
