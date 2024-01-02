function logMethod(target: any, key: string, descriptor: PropertyDescriptor) {
    const originalMethod = descriptor.value;

    descriptor.value = function (...args: any[]) {
        document.writeln(`Method ${key} is called with arguments: ${JSON.stringify(args)}<br />`)
        const result = originalMethod.apply(this, args)
        document.writeln(`Method ${key} returns: ${JSON.stringify(result)}<br />`)
        return result
    };

    return descriptor;
}

class MyExampleClass {
    @logMethod
    addNumbers(a: number, b: number): number {
        return a + b
    }

    @logMethod
    greet(name: string): string {
        return `Hello, ${name}!`
    }
}

export default function runApp6() {
    const exampleInstance = new MyExampleClass();
    document.writeln("exampleInstance.addNumbers(7, 9)<br />")
    exampleInstance.addNumbers(7, 9)
    document.writeln("exampleInstance.greet('Jim')<br />")
    exampleInstance.greet('Jim')
}