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
  const result = []

let count1 = 0

  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]

    if(currentElement === currentElement.toUpperCase()) {
        count1 = count1 + 1
    }
  }
  
 if(count1 > 0  )  {
    return true
  }
  else {return false}

}

export function aufgabe06(args) {
  const input = args;
  const result = [];

  function Sonderzeichen(char) { 
      const XSonderzeichen = (char >= 48 && char <= 57) || (char >= 65 && char <= 90) || (char >= 97 && char <= 122);

    return !XSonderzeichen;
  }

  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i];

    if (typeof currentElement === 'string') {
      const KeinSonderzeichen = currentElement.split('').filter(char => Sonderzeichen(char.charCodeAt(0))).join('');

      result.push(KeinSonderzeichen);
    }
  }

  return result.join("");
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


export function aufgabe (args) {
  const input = args
  const result = []
  
  return result.join("")
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

