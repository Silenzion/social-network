import { required, email } from "@vuelidate/validators";

export default class LoginData {
  public constructor(init?: Partial<LoginData>) {
    Object.assign(this, init);
  }

  public email = "";
  public password = "";
}

export const validationsRule = () => {
  return {
    email: { required, email },
    password: { required },
  };
};
