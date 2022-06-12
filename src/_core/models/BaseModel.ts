class BaseModel {
  toJson() {
    return JSON.stringify({ ...this });
  }
}
export default BaseModel;
