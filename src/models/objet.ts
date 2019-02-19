export class Objet {
    description: string[];
    isBook: boolean;
    isLent: boolean;
  
    constructor(public name: string) {
      this.isBook = false;
      this.isLent = false;
    }
  }