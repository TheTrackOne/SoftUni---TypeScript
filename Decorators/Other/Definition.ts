function enumerable(value: boolean) {
    return function (
        target: Object,
        key: string,
        descriptor: PropertyDescriptor) 
        {
            descriptor.enumerable = value;
        };
}