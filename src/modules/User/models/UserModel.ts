class UserModel {
  id?: number;
  name: string;
  surname: string;
  age: number;

  public constructor(init?: Partial<UserModel>) {
    Object.assign(this, init);
  }
}

export default UserModel;
