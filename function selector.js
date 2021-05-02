/* write a function called "isEven" that takes a number as a parameter and returns true 
if the number is even and false otherwise.*/
function isEven (num){
  return num %2 == 0 ;
    }
   console.log(isEven(5));

//.....................................................................................
/*2. write a function called "getOdd" that takes an array of numbers as a parameter and returns 
an array containing the odd numbers only. you must use the "isEven" function above.*/
let nums = [0,8,7,5]
function getOdd(nums){
    let oddNums =[];
    oddNums.forEach(i=>{if(isEven(i)==0){
        oddNums.push(i);
    }
    })
return oddNums;
}
//document.write(getOdd(nums))

//..................................................................................

/*3. write a function called "getMax" that takes an array of numbers as a parameter and returns 
the largest number.*/

function getMax  (array){
    let highest = 0;
    for (
     let i=0; i<array.length; i+=1) {
     if (array[i] > highest){
         highest =array[i];
     }
}
  return highest;
} 
//alert(getMax([100,300,800,-428,1000]))

//..................................................................................
/*4. write a function called "stringContains" that takes two strings as parameters and returns 
true if the first string contains the second, and false otherwise.*/
let sentence1 = "javascript";
let sentence2 ="script"
function stringContains (string1,string2){
  
  return sentence1.contains(sentence2);
     }
  // console.log(stringContains)


//------------------------------------------------------------------------------------------

/*5. write a function called "capitalizeWords" that takes a string as a parameter and 
capitalizes each word.
    example: capitalizeWords("i love programming") returns "I Love Programming".*/

    function capitalizeWords(sentence) {  
      let CapitalizeWords = sentence[0].toUpperCase();  
  for ( let  i = 1; i <= sentence.length - 1; i++) {  
          let currentCharacter,  
              previousCharacter = sentence[i - 1];  
          if (previousCharacter && previousCharacter == ' ') {  
              currentCharacter = sentence[i].toUpperCase();  
          } else {  
              currentCharacter = sentence[i];  
          }  
          CapitalizeWords = CapitalizeWords + currentCharacter; 
      }  
      return CapitalizeWords;  
  } // document.write(capitalizeWords("i love javascript"))


//............................................................................................



/*6. write a function called "arrayContains" that takes two arrays as parameters and returns
 true if the first array contains the second, and false otherwise.*/

 let sentence1 = [77,55,11,8880];
 let sentence2 =[5,7];
 function arrayContains(){
     let equivalent = 0;
     for (let i = 0; i < sentence2.length;i++){
         if(sentence1.includes(sentence2[i])){
             equivalent++;
         }
     }return equivalent == sentence2.length;
 }
 //console.log(arrayContains(sentence1,sentence2));
//-----------------------------------------------------------------------------------

/*7. write a fnuction called "getSequence" that takes a number as a parameter and returns an 
array containing the numbers from 0 to that number. (e.g. getSequence(5)
 will return [0, 1, 2, 3, 4, 5], getSequence(0) will return [0], getSequence(-2) 
 will return [0, -1, -2]).*/


 let num = 10;
 function getSequence (){
     let result=[];
     if(num >0){
         for (let i= 0;i<=num;i++){
             result.push(i);
         }return result;
     }else if(num <0){
         for(let i= 0;i>=num;i--){
             result.push(i);
         }return result;
     }
 } //console.log(getSequence(num))

//-----------------------------------------------------------------------------------------
/*8. write a function called "getSlug" that takes a string as input and generates a slug 
(i.e. changes all uppercase letters into lowercase and replaces spaces with a dash "-").
    example: getSlug("I love JS") will return "i-love-js".*/

 let sentence = "I Love Js";
    function getSlug(lowerletter) {  
        let getSlug = sentence[0].toLowerCase();  
    for ( let  i = 1; i <= sentence.length - 1; i++) {  
            let currentCharacter,  
                previousCharacter = sentence[i - 1];  
            if (previousCharacter && previousCharacter == ' ') {  
                currentCharacter = sentence[i].toLowerCase();  
            } else {  
                currentCharacter = sentence[i];  
            }  
            getSlug = getSlug+ currentCharacter; 
            getSlug = sentence.split(" ").join("-");
        }  
        return getSlug;  
    } // document.write(getSlug(sentence))
 




