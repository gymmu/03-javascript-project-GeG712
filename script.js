export function aufgabe01(args) {
  const input = args
  const result = []

  for (let i = 0; i < input.length; i++) {
    //schaut ob es sich um eine E handelt welches dann zum leerzeichen gemacht wird
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
// macht alle zeichen groß
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
// zaehlt alle E und gibt diese dann als zahlenwert zurück
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
//zählt die leerzeichen und gibt diese dann wieder als zahl zurück + 1
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
   //gibt den ascii wert aus
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
//kontroloert den input mit den ascii werten und sagt an ob es sich um einen Sonderzeichen handelt
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
  // erkennt die wort UND in der rheienfolge und sagt ob diese Wort vorkommt
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
//erkennt ob es sich um ein E handelt und wechselt diese zur 3
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

//zählt die länge des Input und sagt ob es eine länge von 6 hat
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
  //kontrolert ob es sich um eine Hexadezimalzahl handelt
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

if (input.length > 1) {
  return null
}
//gibt den ascii code eines einzelnen zeichen an sagt aber null sobald es mehr als 1 Zeichen gibt
else if(currentElement.length === 1){
  return currentElement.charCodeAt(0)
}
  }

return null
}



export function aufgabe12 (args) {
  const input = args
  let Count = 0
  let posE = -1

    for (let i = 0; i < input.length; i++) {
      const currentElement = input[i]
      
//zählt die anzahl der E und gibt dessen position an
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
//zählt die E und gibt die position des letzten es an
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

//gibt und die position des 3. es sobald 3 gezählt wurden

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

  //gibt alle wörter bis zum letzten leerzeichen
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
//erkennt ob es sich um einen Dollar handelt und spaltet danach den text in den 2. Teil
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

export function aufgabe17 (args) {
  const text = args
const phrases = []
let currentPhrase = []
for (let i = 0; i < text.length; i++) {
  const currentElement = text[i]
  if (currentElement === ",") {
    // Wenn wir hier sind haben wir einen '.' gefunden, und möchten den aktuellen Satz als eine Element in phrases speichern.
    phrases.push(currentPhrase.join(""))
    currentPhrase = [] // Damit löschen wir alles was im aktuellen Satz drin war.
  } else {
    // Wenn wir keinen '.' lesen, dann möchten wir die Zeichen an den aktuellen Satz anhängen.
    currentPhrase.push(currentElement)
  }
}
phrases.push(currentPhrase.join(""))
return phrases
}

export function aufgabe18 (args) {
  const input = args
  const inputName = []
  const inputAge = []
  let readText = true

  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    
    if (currentElement === " " && readText !== false) {
      readText = false
    } else {
      if (readText === true) {
        inputName.push(currentElement)
      }
      else if (readText === false) {
        inputAge.push(currentElement)
      }
    }
  }
  if (inputName.join("") !== "" && inputAge.join("") !== "") return "Sie heissen " + inputName.join("") + " und sind " + inputAge.join("") + " Jahre alt"
  if (inputName.join("") == "" && inputAge.join("") !== "") return "Sie heissen" + inputName.join("") + " und sind " + inputAge.join("") + " Jahre alt"
  if (inputName.join("") !== "" && inputAge.join("") == "") return "Sie heissen " + inputName.join("") + " und sind " + inputAge.join("") + "Jahre alt"
  if (inputName.join("") == "" && inputAge.join("") == "") return "Sie heissen" + inputName.join("") + " und sind " + inputAge.join("") + "Jahre alt"
}

export function aufgabe19 (args) {
  const input = args
  const result = []
  
for (let i = 0; i < input.length; i++) {
  const currentElement = input[i]
  result.push(currentElement)
  result.push(currentElement)
}

  return result.join("")
}


export function aufgabe20 (args) {
  const input = args
  const result = []
  
  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    if(currentElement == "." && input[i+1] !== " ") return false
    else if(currentElement == "." && input[i+1] == " ") return true
  }

  return result.join("")


}

export function aufgabe21 (args) {
  const input = args
  const result = []
  
for (let i = 0; i < input.length; i++) {
//dreht die Zeichen um, indem man alle werte mit der anzahl an elementen subtrahiert.
  result.push(input[input.length - 1 - i])
}

  return result.join("")
}

export function aufgabe22 (args) {
  const input = args
  const result = []
  let condition = false
  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    
    if (currentElement === "k") {
      condition = true
    }
    
    if (condition === true) {
      result.push(currentElement)
    } else {
      result.push("_")
    }
  }
  return result.join("")
}

export function aufgabe23 (args) {
  const input = args
  const result = []
  
  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    result.push(currentElement)
  }
  // hänge das erste Zeichen nochmals vorne an.
  result.unshift(result[0])
  // hänge das erste Zeichen nochmals an
  result.push(result[0])


  return result.join("")
}

export function aufgabe24(args) {
  const input = args;
  const result = [];
  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i];
    result.push(currentElement);
  }
  // tausche das erste und letzte Zeichen
  const firstChar = result[0];
  const lastChar = result[result.length - 1];
  result[0] = lastChar;
  result[result.length - 1] = firstChar;
  
  return result.join("");
}  

export function aufgabe25(args) {
  const input = args;
  const result = [];

  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i];
    if (i !== Math.floor(input.length / 2)) {
      result.push(currentElement);
    }
  }

  return result.join("");
}

export function aufgabe26(args) {
  const input = args
  let result = []
const list = input.split("") // Damit wandeln wir den Text in eine Liste um, das brauchen wir wenn wir Elemente vertauschen möchten.
for (let i = 0; i < list.length - 1; i++) {
  const currentElement = list[i]
  const nextElement = list[i + 1]
  if (currentElement.charCodeAt(0) > nextElement.charCodeAt(0)) {
    // Reihenfolge stimmt nicht, Elemente müssen getauscht werden.
    const tmp = list[i + 1]
    list[i + 1] = list[i]
    list[i] = tmp
    i = -1 // starte von vorne wenn etwas vertauscht wurde.
  }
}
result = list.join("")
  return result
}




export function bubbleSort(args) {
  const input = args
  let result = []
const list = input.split("") // Damit wandeln wir den Text in eine Liste um, das brauchen wir wenn wir Elemente vertauschen möchten.
for (let i = 0; i < list.length - 1; i++) {
  const currentElement = list[i]
  const nextElement = list[i + 1]
  if (currentElement.charCodeAt(0) > nextElement.charCodeAt(0)) {
    // Reihenfolge stimmt nicht, Elemente müssen getauscht werden.
    const tmp = list[i + 1]
    list[i + 1] = list[i]
    list[i] = tmp
    i = -1 // starte von vorne wenn etwas vertauscht wurde.
  }
}
result = list.join("")
  return result
}
