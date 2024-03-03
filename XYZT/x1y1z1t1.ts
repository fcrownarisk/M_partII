import '../smallletter/i'
import '../smallletter/j'
import '../smallletter/k'
import '../smallletter/l'
import '../smallletter/m'
import '../smallletter/n'
import '../smallletter/o'
import '../smallletter/p'
import '../smallletter/q'
import "../return/returnn"
export function x1() {
    for (let i = 1; i < 3; i++)
        for(let j = 1; i < 3; j++)
            for(let k = 1; k < 3; k++)
console.log(i, j, k)
}
export function y1(){
    for(let l = 1;-2<l && l<3; l++||l--)
       for(let m = 1;-1<m && m<3 ;m++||m--)
          for(let n = 0 ;-2<n && n<3; n++||n--)
console.log(l,m,n)
}
export function z1(){
    for(let o=1; o<3; o++)
        for(let p=2; p<3; p++)
            for(let q=-2; q>0; q--)
console.log(o,p,q)
}
export function t1(){
        do `x1*y1`
        while ({
            z: `0,z<3,z++`
        })
        do `x1*z1`
        while ({
            y: `0,z<3,y++`
        })
        do `y1*z1`
        while ({
            x: `0,x<3,x++`
        })
}
