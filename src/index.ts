class Hello {
  constructor() {
    // I'm not empty
  }

  sayHello(name: string) {
    console.log(`Hello ${name}`);
  }
}

const hello = new Hello();
hello.sayHello("World!");
