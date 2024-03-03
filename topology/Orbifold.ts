
interface LieGroup {
    multiply(g1: any, g2: any): any;
    getInverse(g: any): any;
    identity: GroupElement;
    multiply(g1: GroupElement, g2: GroupElement): GroupElement;
    inverse(g: GroupElement): GroupElement;
}

interface GroupElement{
    value: any;
    display(): string;
}
class SpecificLieGroup {
    identity: GroupElement = { value: 1, display: () => 'Identity element' };
    multiply(g1: GroupElement, g2: GroupElement): GroupElement {

        return { value: g1.value * g2.value, display: () => `Product: ${g1.value} *${g2.value}` };
    }
}
const LieGroup = new SpecificLieGroup()
console.log('LieGroup','identity','Obrifold')

