// 1. Buatlah sebuah fungsi yang menerima satu input berupa integer n. Fungsi ini harus mencetak angka dari 1 sampai n dengan ketentuan:

// Jika angka tersebut habis dibagi 3, cetak "Fizz"

// Jika angka tersebut habis dibagi 5, cetak "Buzz"
// Buzz
// 1 2 fizz 4 Buzz

// Jika angka tersebut habis dibagi 3 dan 5 sekaligus, cetak "FizzBuzz"

// Jika tidak, cetak angka itu sendiri.


function myfunc(int) {

    let arr = []

    for (let i=1 ; i <= int ; i++){ 
        if ( i%3 === 0 && i%5 === 0) {
            arr.push("FizzBuzz")
        } else if (i%3 === 0){
            arr.push("Fizz")
        } else if (i%5 === 0 ) {
            arr.push("Buzz")
        } else {
            arr.push(i)
        }
    }

    return arr
}

// console.log(myfunc(15))
// myfunc(10)
// myfunc(15)




// . Buatlah sebuah fungsi bernama isPrime yang menerima sebuah parameter berupa angka n. Fungsi ini harus mengembalikan:

// true jika n adalah bilangan prima.

// false jika n bukan bilangan prima.


function isPrime(n) {

    if (n==2) return true
    if (n%2 === 0 ) return false //karena bilangan genap gak ada yg bilangan prima

    for (let i=2 ; i < n ; i++){
        if (n % i == 0) {
            return false
        } else {
            return true
        }
    }



}

console.log(isPrime(4))



