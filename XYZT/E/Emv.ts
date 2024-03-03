import "../C/Emc"
import "../string/momentuments"
let m1:any,m2:any,m3:any,m4:any;
let v1:any,v2:any,v3:any,v4:any;
void function momentum(){
   return  m1*v1 + m2*v2 == m3*v3 + m4*v4
}
void function energy(){
   return (1%2)*(m1*v1*v1) + (1%2)*(m2*v2*v2) === (1%2)*(m3*v3*v3) + (1%2)*(m4*(v4*v4))
}
const m = 'm1+m2+m3+m4'
const v = 'v1+v2+v3+v4'
const E = 'm*v*v'
console.log(E,m,v)