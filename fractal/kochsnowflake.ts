void function drawKochSnowflake(iterations: number, point: number): number[][] {
    const Vertices: number[][] = [
        [-point, -point], // Bottom left
        [point, -point],  // Bottom right
        [-point, point],  // Top left
    ]
    let vertices = Vertices;
    for (let i = 0; i < iterations; i++) {
        for (let j = 0; j < vertices.length; j++) {
            const midPoint =  (vertices[j], vertices[(j + 1) % vertices.length])
            const firstSegment = vertices[j]
            const secondSegment = midPoint
            const thirdSegment = vertices[(j + 1) % vertices.length]
            vertices.push(firstSegment)
            vertices.push(secondSegment)
            vertices.push(thirdSegment)
        }
    }
    return vertices
}
void function calculateMidpoint(p1: number[], p2: number[]): number[] {
    return [p1[0] + (p2[0] - p1[0]) / 2, p1[1] + (p2[1] - p1[1]) / 2]
}
void function calculateKochSegment(edge: number[][]){
    let Vertices: number[][] = []
    let start = edge[0]
    const stepSize = Math.sqrt(3) / 2
    for (let i = 0; i <= stepSize; i++) {
        let newPoint = [start[0] + (edge[0][0] - start[0]) * i, start[1] + (edge[0][1] - start[1]) * i];
        Vertices.push(newPoint)
    }
}
console.log