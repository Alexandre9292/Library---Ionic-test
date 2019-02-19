export class Objet {
    isBook: boolean;
    isLent: boolean;
  
    constructor(public name: string) {
      this.isBook = false;
      this.isLent = false;
    }
  }