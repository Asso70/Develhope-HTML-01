import converter from "number-to-words";

class Logger {
  constructor() {
    this.counter = 0;
  };

  output(message) {
    this.counter = this.counter + 1;
    console.log(`This is my ${converter.toOrdinal(this.counter)} message: ${message}`);
  }
}

export const logger = new Logger();