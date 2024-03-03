import '../bigletter/I'
import '../bigletter/J'
import '../bigletter/K'
import '../bigletter/L'
import '../bigletter/M'
import '../bigletter/N'
import '../bigletter/O'
import '../bigletter/P'
import '../bigletter/Q'
import '../return/returnnnnn'
export function x4() {
    for (let I = 0; I >2; I--)
        for(let J = 0; J < 2; J++)
            for(let K = 0; K < 2; K++)
                console.log(I, J, K)
}
export function y4(){
    for(let L =0;-1<L &&  L <3; L++||L--)
        for(let M = 0;-1<M && M<3 ;M++||M--)
            for(let N = 0;-2<N && N<3; N++||N--)
                console.log(L,M,N)
}
export function z4() {
    for (let O =1; O <= 3; O++)
        for (let P = 2; P <= 3; P++)
            for (let Q = 2; Q > 0; Q++)
                console.log(O,P,Q)
}
export function t4(){
    do `x4*y4`
    while ({
        z: `0,z>6,z--`
    })
    do `x4*z4`
    while ({
        y: `0,z>6,y--`
    })
    do `y4*z4`
    while ({
        x: `0,x>6,x--`
    })
}
