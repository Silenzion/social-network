import { FormRules } from "element-plus";
import { reactive } from "vue";

export default class LoginData {
  public constructor(init?: Partial<LoginData>) {
    Object.assign(this, init);
  }

  public email = "";
  public password = "";
}

export const validationsRule = reactive<FormRules>({
  email: [{ required: true, type: "email", message: "Please enter correct email!", trigger: ["blur", "change"] }],
  password: [{ required: true, min: 6, message: "Passwords must have at least 6 symbols!", trigger: ["blur", "change"] }],
});
