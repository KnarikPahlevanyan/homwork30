1.
// function fibonacciRecursion(n) {
//     if (n < 2){
//         return 1;
//     }else{
//         return fibonacciRecursion(n-2) + fibonacciRecursion(n-1);
//     }
// }

// console.log(fibonacciRecursion(7));//21
// console.log(fibonacciRecursion(8));//34
// console.log(fibonacciRecursion(10));//89


// function factorialRecursion(n) {
//     if (n === 1) {
//         return 1;
//     }
//     return n * factorialRecursion(n - 1);
// }
// console.log(factorialRecursion(4));//24
// console.log(factorialRecursion(5));//120
// console.log(factorialRecursion(7));//5040


2.
// function rec(num){
//     if(num > 5){
//         return;
//     }
//     console.log(num);
//     rec(num + 1);
// }

// rec(3);



// let x = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let n = sum(x);
// console.log(n);


// function sum(x)
// {
//     return num(x, x.length - 1);
// }

// function num(x, index)
// {
//     if (index === 0)
//         return x[0];

//     return x[index] + num(x, index - 1);
// }



// function func(arr) {
// 	for (let elem of arr) {
// 		console.log(elem);
// 	}
// }

// func([1, [2, 7, 8], [3, 4, [5, [6, 7]]]]);



3.
{/* <ul>
  <li>3</li>
  <li>4</li>
  <li>5</li>
</ul>

<script>
  li.insertAdjacentHTML("beforeBegin", "<li>1</li><li>2</li>");
</script> */}



//  <div id="one">one</div>
// let d1 = document.getElementById('one');
// d1.insertAdjacentHTML('afterend', '<div id="two">two</div>');