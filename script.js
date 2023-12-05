export function aufgabe01(args) {
  const input = args
  const result = []

  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    if (currentElement === "e"|| currentElement === "E") {
      result.push("")
    } else {
      result.push(currentElement)
    }

  }

    
  return result.join("")
}


export function aufgabe02(args) {
  const input = args
  const result = []

  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    result.push(currentElement.toUpperCase() ) 
  }
  
  return result.join("")
}

export function aufgabe03 (args) {
  const input = args
  const result = []

  let countE = 0

    for (let i = 0; i < input.length; i++) {
      const currentElement = input[i]

      if(currentElement === "e") {
      countE = countE + 1
    }
      else if(currentElement ==="E"){
      countE = countE + 1
      }
    }
  
  return countE
}

export function aufgabe04 (args) {
  const input = args
  const result = []

  let countEr = 1

  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]

    if(currentElement === " ") {
    countEr = countEr + 1 
    }
  }
  
  return countEr
}


export function aufgabe05 (args) {
  const input = args
  
  for (let i = 0; i < input.length; i++) {
    const currentAscii = input[i].charCodeAt(0)
   
    if (65 <= currentAscii && currentAscii <=90) return true
    
  }
return false
} 


//Wenn man Chat Gpt frägt: 

// export function aufgabe06(args) {
//   const input = args;
//   const result = [];

//   function Sonderzeichen(char) { 
//       const XSonderzeichen = (char >= 48 && char <= 57) || (char >= 65 && char <= 90) || (char >= 97 && char <= 122);

//     return !XSonderzeichen;
//   }

//   for (let i = 0; i < input.length; i++) {
//     const currentElement = input[i];

//     if (typeof currentElement === 'string') {
//       const KeinSonderzeichen = currentElement.split('').filter(char => Sonderzeichen(char.charCodeAt(0))).join('');

//       result.push(KeinSonderzeichen);
//     }
//   }

//   return result.join("");
// }


export function aufgabe06(args) {
  const input = args

  if (input.length <= 0) return false
  
  for (let i = 0; i < input.length; i++) {
    const ascii = input[i].charCodeAt(0)

    if(0 <= ascii && ascii <=31) return true
    else if (33 <= ascii && ascii <= 47) return true
    else if (58 <= ascii && ascii <= 64) return true
    else if (91 <= ascii && ascii <= 96) return true
    else if (123 <= ascii && ascii <= 127) return true
  
  }
  return false
}




export function aufgabe07 (args) {
  const input = args
  const result = []
  for (let i = 0; i < input.length; i++) {
  const currentElement = input[i]
  
  }
  return result.join("")
}



export function aufgabe09 (args) {
  const input = args


let len = 0

  for (let i = 0; i < input.length; i++) {
  len++ 
  }

  if (len === 6){
    return true
  }
  return false
}

export function aufgabe11 (args) {
  const input = args
  const result = []

  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]

    return currentElement.charCodeAt(0)
    
  }

return null
}



export function aufgabe12 (args) {
  const input = args
  let Count = 0
  let posE = -1

    for (let i = 0; i < input.length; i++) {
      const currentElement = input[i]
      

      if(currentElement=== "e"){
        Count++
        if (Count === 1) {
         return i
        }
       }

      }
      return posE
}




export function aufgabe13 (args) {
  const input = args
  let posE= -1 
  for (let i = 0; i < input.length; i++) {
  const currentElement = input[i]

  if(currentElement=== "e"){
    posE = i
  }
}

  return posE
}
 
 
 
export function aufgabe14 (args) {
  const input = args
 let Count = 0
  let posE= -1 
  for (let i = 0; i < input.length; i++) {
  const currentElement = input[i]



  if(currentElement=== "e"){
   Count++
   if (Count === 3) {
    return i
   }
  }
}

  return posE 
}

