import { listenerCount } from "process";

class Transcriptor {
  toRna(inputText: string) {
    var res = '';
    let src = ['C','G','A','T'];
    let dest = ['G','C','U','A'];
    inputText.split("").forEach(e => {
      if(src.includes(e)) 
        res += dest[src.indexOf(e)];
      else
        throw 'Invalid input DNA.';
    });
    return res;
  }
}
export default Transcriptor

