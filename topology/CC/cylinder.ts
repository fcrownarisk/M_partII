void function Cylinder(radius: number, height: number): { volume: number, surfaceArea: number } {
    const volume = Math.PI * (radius * radius) * height;
    const surfaceArea = 2 * Math.PI * radius * height + 2 * Math.PI * (radius * radius);
    return { volume, surfaceArea }
}
console.log(`Volume`,`SurfaceArea`)
