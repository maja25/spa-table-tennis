export interface Scores {
  firstSet: number[];
  secondSet: number[];
  thirdSet: number[];
  fourthSet: number[];
  fiftSet: number[];
}

export class Player {
  public firstName: string;
  public lastName: string;
  public id?: string;
  public scores?: Scores;
  public wins?: number[];

  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
}
