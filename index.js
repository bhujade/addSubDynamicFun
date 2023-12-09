//  create a add ,sub,mul div html dynamic function to print on html   (file2) 
console.log("this is index file")

// const add = () =>{
//     const val1 = parseFloat(document.getElementById('val1').value);
//     const val2 = parseFloat(document.getElementById('val2').value);

//     console.log('val1',val1,typeof val1 )
//     console.log('val2',val2,typeof val2)

//     if(isNaN(val1) || isNaN(val2)){
//       alert("something is wrong")
//     }
//     const outputvalue = `${val1} + ${val2} = ${val1 + val2}`;
//     console.log('outputvalue',outputvalue)

//     document.getElementById('output').innerText = outputvalue

// }


const operation = (op)=>{
  console.log('op',op)

  const val1 = parseFloat(document.getElementById('val1').value);
    const val2 = parseFloat(document.getElementById('val2').value);

    console.log('val1',val1,typeof val1 )
    console.log('val2',val2,typeof val2)

    if(isNaN(val1) || isNaN(val2)){
      alert("something is wrong")
    }
    let outputvalue = 0;
     if (op === 'add') {
      outputvalue = `${val1} + ${val2} = ${val1 + val2}`;
     } else if(op === 'sub') {
      outputvalue = `${val1} - ${val2} = ${val1 - val2}`;      
     }else if (op === 'div'){
      outputvalue = `${val1} / ${val2} = ${val1 / val2}`;
     }else if (op === 'mul'){
      outputvalue = `${val1} * ${val2} = ${val1 * val2}`;
     }else {
      alert (' no operation found')
     }
    console.log('outputvalue',outputvalue)

    document.getElementById('output').innerText = outputvalue


}