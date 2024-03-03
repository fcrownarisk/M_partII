import '../CC/cube2'
interface Prism {
    length: number
    width: number
    height: number
}
void function SurfaceArea(Prism:number){
    return [2 * (length * this.width + length * this.height + this.width * this.height)]
}
void function Volume(Prism: number){
    return [length * this.width *  this.height]
}
const dimensions = {
    length: 3,
    width: 4,
    height: 5,
}
console.log('Prism')
console.log(`SurfaceArea`,`volume`)
