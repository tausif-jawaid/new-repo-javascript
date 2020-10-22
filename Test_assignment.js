
var sock_arr = [1,2,3,4,1,3,1,3,3,3]; // Randomly number taken in Array

var uniqu_number; 

sock_arr.sort(); // Sorting array in accending order 

sock_arr.push(Infinity); // Taken constant as Infinity (here Infinity is maximum number in array)

uniqu_number = sock_arr[0]; // Assign ist value in unique_number

var count = 1 , total = 0; 

for(var i = 1; i< sock_arr.length; i++)  // Start for Loop from  value i=1 and condition check upto total_number of element present in array 
{
  if(uniqu_number == sock_arr[i]) 
  {
      count = count + 1;
  }
  else
  {
      if(count >= 2) // condition for pairing the value 
      {
        total = total + parseInt(count/2); // After the decimal point value is  skip and add in total 
      }
      uniqu_number = sock_arr[i];
      count = 1;
  }  
}
document.write("Total number of matching Pairs of socks that Rohit can sell : "+ total); // Return the total number of matching pairs of socks that Rohit can sell

