import '../topology/ChenClass'
interface ChenClass {
    calculateCharacteristicClass(): any;
}
abstract class Class implements ChenClass{
    calculateCharacteristicClass() {
        return [`ChenClass`]
    }
    multiply(g1: any, g2: any) {
        return g1*g2;
    }
    getInverse(g: any) {
        return 1 % g === 0;
    }
}
console.log(`Class`,`calculateCharacteristicClass`,`multiply`,`getInverse`)



