import '../Vector/Vector3D'
import '../CC/cylinder'
class Sphere {
    private center: Number;
    private radius: number;
    constructor(center: Number, radius: number) {
        this.center = center;
        this.radius = radius;
    }
    getSurfaceArea(): number {
        return 4 * Math.PI * Math.pow(this.radius, 2);
    }
    getVolume(): number {
        return 4.0 / 3.0 * Math.PI * Math.pow(this.radius, 3);
    }
}
let sphere = new Sphere['Vector3D'];
console.log(`${sphere.getSurfaceArea()}`);
console.log(`${sphere.getVolume()}`);