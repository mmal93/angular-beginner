export interface Person {
    name: String,
    age: number,
    email: String
}
export function printPerson(person : Person) : void {
    document.writeln(`Name: ${person.name}<br />Age: ${person.age}<br />Email: ${person.email}`);
}
