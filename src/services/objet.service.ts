import { Objet } from "../models/objet";

export class ObjetsService {
    appareilsList: Objet[] = [
        {
          name: 'Mobi Dick',
          isBook: true,
          isLent: false
        },
        {
            name: 'Eminem',
            isBook: false,
            isLent: false
          },
          {
            name: 'Soprano',
            isBook: false,
            isLent: true
          }
      ];
}