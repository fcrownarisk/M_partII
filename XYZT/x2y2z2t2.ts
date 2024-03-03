import '../smallletter/i'
import '../smallletter/j'
import '../smallletter/k'
import '../smallletter/l'
import '../smallletter/m'
import '../smallletter/n'
import '../smallletter/o'
import '../smallletter/p'
import '../smallletter/q'
import '../InventorySlots/InventorySlot1234'
import '../return/returnnn'
export function x2(){
    for (let i = 2; i < 4; i++)
        for (let j = 2; j < 4; j++)
            for (let k = 2; k < 4; k++)
                console.log(i,j,k)
}
export function y2(){
    for (let l = 1; l >= 0 && l <= 4; ++l || l--)
        for (let m = 2; m >= 0 && m <= 4; ++m || m--)
            for (let n = 3; n >= 0 && n <= 4; ++n || n--)
                console.log(l,m,n)
}
export function z2(){
    for (let o = 4; o <= 8; o--)
        for (let p = 2; p <= 8; ++p)
            for (let q = 4; q <= 8; ++q)
                console.log(o,p,q)
}
export function t2(){
    do `x2*y2`
    while ({
        z: `0,z<2,z++`
    })
    do `x2*z2`
    while ({
        y: `0,z<2,y++`
    })
    do `y2*z2`
    while ({
        x: `0,x<2,x++`
    })
}



