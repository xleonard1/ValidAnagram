function validAnagram(str1, str2){
    //check whether the strings are even equal in length
    if(str1.length !== str2.length) {
        return false
    }
    let frequencyCounter = {}
    for(let char of str1) {
        frequencyCounter[char] = (frequencyCounter[char] || 0) + 1
    }
    
    for (let char of str2) {
        if(!frequencyCounter[char]) {
            return false
        } else {
            frequencyCounter[char] -= 1
        }
    }
    return true
  }