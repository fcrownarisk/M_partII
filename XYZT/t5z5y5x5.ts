import '../bigletter/I'
import '../bigletter/J'
import '../bigletter/K'
import '../bigletter/L'
import '../bigletter/M'
import '../bigletter/N'
import '../bigletter/O'
import '../bigletter/P'
import '../bigletter/Q'
import '../return/returnnnnnnn'
export function x5(){
    for (let I = 2; I < 4; ++I)
       for (let J= 2;J < 4; ++J)
          for (let K= 2; K < 4;++K)
    console.log(I,J,K)
}
export function y5() {
    for (let L = 0; L <= -4 && L >= 4; ++L || L--)
        for (let M = 0; M <= -4 && M >= 4; ++M || M--)
            for (let N = 0; N <= -4 && N >= 4; ++N || N--)
                console.log(L,M,N)
}
export function z5(){
    for (let O= 2; O <= 8; O--)
       for (let P = 5; P <= 8; ++P)
          for (let Q = 2; Q <= 8;++Q)
              console.log(O,P,Q)
}
export function t5(){
    do `x5*y5`
    while ({
        z: `0,z>5,z--`
    })
    do `x5*z5`
    while ({
        y: `0,z>5,y--`
    })
    do `y5*z5`
    while ({
        x: `0,x>5,x--`
    })
}

