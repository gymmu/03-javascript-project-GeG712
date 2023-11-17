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