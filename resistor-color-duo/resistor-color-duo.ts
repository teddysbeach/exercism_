export class ResistorColor {
  private colors: string[];

  constructor(colors: string[]) {
    colors = colors.slice(0,2);
    if(colors.length != 2)
      throw 'At least two colors need to be present';
    this.colors = colors;
  }
  value = (): number => {
    let res: string = '';
    this.colors.forEach((inputed) => res += String(['black','brown', 'red', 'orange', 'yellow', 'green', 'blue', 'violet', 'grey', 'white'].indexOf(inputed)));
    return Number(res);
  } 
}