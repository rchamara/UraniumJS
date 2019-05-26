export class InstanceLoader {
    static getInstance<T>(classInstance: any,...args: any[]) : T {
        var instance = Object.create(classInstance).prototype.constructor;
        instance.constructor.apply(classInstance, args);
        return <T> instance;
    }
}