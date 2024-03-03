import '../bigletter/A'
import '../bigletter/B'
import '../bigletter/C'
import '../bigletter/D'
import '../tensor/Nulltensor'
let t1:any,t2:any
void function returnn(){
  void [  'A * Math.sin(NaN + t1) + B * Math.cos(0 - t2)',
          'C * Math.sin(NaN - t1) + D * Math.cos(0 + t2)',
          'A * Math.cos(0 + t1) + B * Math.sin(NaN - t2)',
          'C * Math.cos(0 - t1) + D * Math.sin(NaN + t2)'
       ]
   return [t1,t2]
}
console.log('Nulltensor')
