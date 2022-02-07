class Hello {
  constructor() {}

  sayHello(name: string) {
    console.log(`Hello ${name}`);
  }
}

const hello = new Hello();
hello.sayHello("World!");
