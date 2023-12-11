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
    if(currentElement === "u" || input[0] === "U") {
        if(input[i +1] === "n") {
        if(input[i + 2] === "d") {
           return true
        }
      }
    }
  }
  return false
}

// die aufgabe 7 musste erneut gelöst werden, da es probleme dirch die merge conflicte gab.

export function aufgabe08(args) {
  const input = args        
  const result = []                     

  for (let i = 0; i < input.length; i++) {      
    const currentElement = input[i]        

    if (currentElement === "e") {   
      result.push(3)                                                           
    } else {                                                 
      result.push(currentElement)                             
    }
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

export function aufgabe10 (args) {
  const input = args
  
  if(input.length !== 7) return false
  if(input[0] !== "#") return false
  for (let i = 1; i < input.length; i++) {
    const currentElement = input[i]
    const ascii = currentElement.charCodeAt(0)

    if(48 <= ascii && ascii <=57) {
    } else if (65 <= ascii && ascii <= 70) {
    } else {
      return false
    }
  }
  return true
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

export function aufgabe15 (args) {
  const input = args
  const result = []

  if (input.lastIndexOf(' ') == input.length - 1) {
      for (let i = 0; i < input.length - 1; i++) {
        const currentElement = input[i]
        result.push(currentElement)
      }
 }
   else {
    for (let i = 0; i < input.length; i++) {
      const currentElement = input[i]
  
      if (currentElement !== " ") {
        result.push(currentElement)
      } else {
        return result.join("")
      }
    }

  }

  return result.join("")
}

export function aufgabe16 (args) {
  const input = args
  const result1 = []
  const result2 = []
  let Text = true

  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    
    if (currentElement === "$" && Text !== false) {
      Text = false
    } else {
      if (Text === true) {
        result1.push(currentElement)
      }
      else if (Text === false) {
        result2.push(currentElement)
      }
    }
  }
  if (result2.join("") !== "") {
  return result1.join("") + "," + result2.join("")
  } else {
    return result1.join("")
  }
}

