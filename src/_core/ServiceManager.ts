import BaseService from "@/_core/service/BaseService";

export type ServiceConstructor<T extends BaseService> = new (...args: any[]) => T;

class ServiceManager {
  private static instance: ServiceManager;

  private serviceList: Map<ServiceConstructor<BaseService>, any> = new Map();

  private constructor() {
    //  nothing
  }
  public static getInstance() {
    if (!this.instance) {
      this.instance = new ServiceManager();
    }
    return this.instance;
  }

  public getService(Ctor: new (...args: any[]) => any) {
    if (!this.serviceList.has(Ctor)) {
      this.serviceList.set(Ctor, new Ctor());
    }
    return this.serviceList.get(Ctor);
  }
}

export default ServiceManager;
