// @ts-nocheck

import { promises as fs } from "fs";
import path from "path";

fs.readFile("/path/to/file", "utf-8");

type SuccessCode<T extends ApiResponseConfig> = keyof SuccessConfig<T>;

type SuccessConfig<T extends ApiResponseConfig> = T["success"] extends infer S
  ? S extends Record<string, unknown>
    ? S
    : never
  : never;

type SuccessDefinitions<T extends ApiResponseConfig> = {
  readonly [K in SuccessCode<T>]: SuccessDefinition & { code: K };
};

// Basic Types
let isDone: boolean = false;
let decimal: number = 6;
let color: string = "blue";

// Arrays
let list: number[] = [1, 2, 3];
let listGeneric: Array<number> = [1, 2, 3];

// Tuples
let x: [string, number];
x = ["hello", 10];

// Enums
enum Color {
  Red,
  Green,
  Blue,
}
let c: Color = Color.Green;

// Interfaces
export interface Person {
  firstName: string;
  lastName: string;
}

async function getJsonResponse(url: string): Promise<any> {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
}

// Any
let notSure: any = 4;
notSure = "maybe a string instead";
notSure = false;
// Void
function warnUser(): void {
  console.log("This is my warning message");
}

function greeter(person: Person) {
  return "Hello, " + person.firstName + " " + person.lastName;
}

let user = { firstName: "John", lastName: "Doe" };

console.log(greeter(user));

// Classes
class Animal {
  private name: string;

  constructor(name: string) {
    this.name = name;
  }

  move(distanceInMeters: number = 0) {
    console.log(`${this.name} moved ${distanceInMeters}m.`);
  }
}

class Dog extends Animal {
  bark() {
    console.log("Woof! Woof!");
  }
}

const dog = new Dog("Rex");
dog.bark();
dog.move(10);

// Generics
function identity<T>(arg: T): T {
  return arg;
}

let output = identity<string>("myString");
console.log(output);

// Async/Await
async function fetchData(url: string): Promise<any> {
  const response = await fetch(url);
  const data = await response.json();
  return data;
}

fetchData("https://api.github.com").then((data) => console.log(data));
