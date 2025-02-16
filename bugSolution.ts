function greeter(person: string): string {
  return "Hello, "+ person;
}
let user = ["Haylee", "Imani", "Emmett", "Vada"];
user.forEach(person => console.log(greeter(person))); //Solution 1

function greeterArray(persons: string[]): string[]{
    return persons.map(person => "Hello, "+ person);
}
console.log(greeterArray(user));//Solution 2