# Improving code quality and maintainability

We understand TypeScript as a new form of JavaScript code that has been ``polished.`` It has brought **Well-structured** to the quality of the code and made it easier to maintain. Let's take a quick look at how the code quality and maintainability have improved.

### Improving code quality and maintainability
The main **advantage** of using TypeScript is the ability to improve **code quality and maintainability.**

TypeScript allows developers to catch potential errors and bugs early in the development process. This early detection saves time, which further improves the quality of the code.

**Example:**
<pre><code>Javascript 

function call(input) {
  return "Hello, " + input.toUpperCase();
}

console.log(call(123)); ❌//Runtime Error</code> </pre>

In JavaScript there is no way  to know that ``(123)`` is not a string until the code is run. As a result, it shows an error at ``runtime``, which **wastes time.**

<pre><code>Typescript 

function call(input : string) : string {
  return "Hello, " + input.toUpperCase();
}

console.log(call(123)); 🎯//Compile-time Error</code> </pre>

Typescript will report an error at ``Compile-time`` that **Input must be a string**


### Early bug detection and improved performance
TypeScript static typing not only improved the quality of the code, but also played an important role in quickly identifying bugs.

**Example:**
<pre><code>Javascript 

function call(user){
  return "Hello," + user.name.toUpperCase();
}

console.log(call({})); ❌//passing the wrong data</code> </pre>

Output(Runtime Error):
<pre><code>TypeError: Cannot read property 'toUpperCase' of undefined
</code> </pre>

In JavaScript, we won't know this problem until we run the code.

<pre><code>Typescript 

type User = {
  input: string;
};

function call(user: User): string {
  return 'Hello, ' + user.input.toUpperCase();
}

console.log(call({})); 🎯//Error at compile time</code> </pre>

Typescript will show us errors at compile time. It means that we don't need to run the code, we need to bug it.

---

# Key Differences Between Interfaces and Types in TypeScript

In TypeScript, both ``Interfaces`` and ``Types`` are used to define the structure of objects. Interfaces are **extensible,** but Types are allowing **unions and intersections.**

### The Nature of ``Interfaces`` and ``Types`` in TypeScript

#### Interfaces
The only major difference is that ``Interfaces`` can be **extended.** When we use an Interface, we don't really know what it contains, because it can be changed or extended at any time, which is the **nature of Interfaces.** Let's break this into code and show how Interfaces can be extended.

<pre><code>Interfaces Can Be Extended

interface Person {
  id: number;
}

interface Employee extends Person {
  email: string;
}

const employee: Employee = {
  id: 121,
  email: "x@gmail.com",
};</code> </pre>
``Employee`` extends ``Person``, it inherits the ``id`` property.

#### Types
**Types cannot be extended**, but Types can be combined into a new Type using **Unions**. The main difference here is that it does not change the original Type.
<pre><code>Types Cannot Be Extended

type Person = {
  id: number;
};

type Employee = Person & {
  email : string;
};

const employee: Employee = {
  id: 123,
  email: "y@gmail.com",
};</code> </pre>
We **didn't extend** ``PersonType``, but created a **new type.**
<pre><code>Union Types Combine

type Admin = {
  role: "admin";
  serialNumber: number;
};

type Member = {
  role: "member";
  reasonForVisit: string;
};

type groupCommunity = Admin | Member;

const groupParticipant1: groupCommunity = {
  role: "admin",
  serialNumber: 2,
};

const groupParticipant2: groupCommunity = {
  role: "member",
  reasonForVisit: "information",
};</code> </pre>
Union combines alternative ``types``


### The Declaration merging of ``Interfaces`` and ``Types`` in TypeScript

``Interfaces`` support **declaration merging,** so we can define **multiple Interfaces with the same name**. Typescript will automatically merge them into a single interface. On the other hand, Types **don't support** declaration merging. This can be helpful for us when we want to add additional functionality. 
<pre><code>interface Name {
  a: string;
}
interface Name {
  b: string;
}
const name: Name = {
  a: 'aa',
  b: 'bb',
};</code> </pre>


##### Types in TypeScript are more flexible, it can define intersection, union, tuple, or different types of data, while interfaces are used to describe the shape of an object.