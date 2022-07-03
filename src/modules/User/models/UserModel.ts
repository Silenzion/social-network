import BaseModel from "@/_core/models/BaseModel";

interface City {
  id: number;
  name: string;
}

class UserModel extends BaseModel{
  id?: number;
  name: string;
  surname: string;
  email: string;
  age: number;
  password: string;
  city: City;
  about: string | null;
  avatar: string | null = "https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png";

  public constructor(init?: Partial<UserModel>) {
    super();
    Object.assign(this, init);
  }
}

export default UserModel;
