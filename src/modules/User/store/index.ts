import UserModel from "@/modules/User/models/UserModel";
import { defineStore } from "pinia";

export type UserState = {
  user: UserModel | null;
  userList: UserModel[];
};

const createMockData = (): UserModel[] => {
  return new Array(2).map((elem, index) => {
    return new UserModel({
      id: index,
      name: index == 0 ? "John" : "Joanna",
      surname: "Doe",
      email: "wxample@mail.com",
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
    getUser: (state) => state.user,
    getUserList: (state) => state.userList,
  },

  actions: {
    login(data: UserModel) {
      const user = this.userList.find((elem) => {
        return elem.id == data.id && elem.email == data.email;
      });
      if (!user) return;
      this.updateDataInLocalStorage(user);
      this.user = user;
    },

    logout() {
      this.user = null;
      localStorage.removeItem("user");
    },

    updateUser(id: number | string, data: Partial<UserModel>) {
      if (!id || !!data) return;
      const userIndex = this.findIndexById(id);
      if (userIndex == -1) return;
      Object.assign(this.userList[userIndex], data);
    },

    deleteUser(id: number | string) {
      const userIndex = this.findIndexById(id);
      if (userIndex == -1) return;
      this.userList.splice(userIndex, 1);
    },

    findIndexById(id: number | string) {
      return this.userList.findIndex((item) => item.id == id);
    },

    updateDataInLocalStorage(data: Partial<UserModel>) {
      if (!data) return;
      // @ts-ignore
      localStorage.setItem("user", data?.toJson());
    },
  },
});
