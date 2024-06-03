const output document.getElementById("output");
const input document.getElementById("ip");
const btn document.getElementById("btn");

btn.addEventListener('click', createInitialPromise);

const delayPromise (value, delay) => new Promise((resolve, reject) => { 
	setTimeout(() =>resolve(value), delay)

});
  function createInitialPromise() {
  	const userTypedValue=input.value;
  
	delayPromise(userTypedValue, 2000) //4

      .then((result) =>{
		  output.textContent ='Result: $(result).'; 
          return delayPromise(result * 2,1000);
    }). then((result) =>
		  output.textContent = 'Result: $(result).';
          return delayPromise(result - 3,1000);

   }).then((result)=> {
	  output.textContent ='Result: $(result).'; 
      return delayPromise(result / 2,1000);
   }).then((result)=> {
	  output.textContent ='Result: $(result).'; 
      return delayPromise(result + 10,1000);

   }).then((final) => {
	  output.textContent ='Final Result: $(Final).'; 
     
  });
}