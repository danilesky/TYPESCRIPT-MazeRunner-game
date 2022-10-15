interface interfaceGame {
  level: any;
  gameLoop(): void;
}

export class Game implements interfaceGame {
  level = [];
  constructor(level: any) {
    this.level = level;
  }
  gameLoop() {
    setInterval(() => {
      console.log("hello");
      setTimeout(() => {
        console.clear();
      }, 100);
    }, 100);
  }
}
