import { Readable} from 'node:stream'

class OneToHundredStream extends Readable{
index = 1

    _read(){
        setTimeout(()=> {
        const i = this.index ++

        if(i > 100){
            this.push(null)
        }else{
            const buf = Buffer.from(String(i))
            this.push(buf)
        }
    },10)
    }
}

new OneToHundredStream().pipe(process.stdout)