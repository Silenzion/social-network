class UserModel {
  id?: number;
  name: string;
  surname: string;
  age: number;
  password: string;
  avatar: string | null = "https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png";

  public constructor(init?: Partial<UserModel>) {
    Object.assign(this, init);
  }
}

export default UserModel;
