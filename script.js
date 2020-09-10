const companies = [
    { name: "Company One", category: "Finance", start: 1981, end: 2004 },
    { name: "Company Two", category: "Retail", start: 1992, end: 2008 },
    { name: "Company Three", category: "Auto", start: 1999, end: 2007 },
    { name: "Company Four", category: "Retail", start: 1989, end: 2010 },
    { name: "Company Five", category: "Technology", start: 2009, end: 2014 },
    { name: "Company Six", category: "Finance", start: 1987, end: 2010 },
    { name: "Company Seven", category: "Auto", start: 1986, end: 1996 },
    { name: "Company Eight", category: "Technology", start: 2011, end: 2016 },
    { name: "Company Nine", category: "Retail", start: 1981, end: 1989 }
];

const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];

    // forEach
    // Filter
    // map
    // sort
    // reduce



    //ForEach


//Testing my knowledge of iteration
//   for(let i = 0; i < companies.length; i++){
//         console.log(companies[i].name)
//   }


// You can also achieve the same results above with forEach
// companies.forEach(function (company) {
//     console.log(company.category)
// })

// ages.forEach(function(numbers){
//     if(numbers > 21){
//         console.log(numbers*100);
//     }
// })


/*
Explanation

The foreach method takes a function as an argument. The function can also take three arguments, two of which are optional.

function(currentValue, index, arr)


Argument	      Description
currentValue  |   Required. The value of the current element
index	      |   Optional. The array index of the current element
arr	          |   Optional. The array object the current element belongs to


The code you write inside the function will run during the iteration.

*/






//Filter

/* 
This also takes in a function like the forEach. Let's do the second example again using this method!
*/
// ages.filter(function(validAge){
//     if(validAge <= 21){
//         console.log(validAge)
//     }
// })

// With the block of code Above, we just filtered the array to give us the underage group

// We can make it look better by putting it in this arrow fxn



//Filter Retail companies
// companies.filter(function(company){
//     if(company.category == "Retail"){
//         console.log(company)
//     }
// })





//Map
// Map creates another array from the aray you iterate over
const companyNames = companies.map(function(company){
    return company.name
})

console.log(companyNames)




// sort
// The sort() method sorts an array alphabetically. or in ascending orer because it lso works with numbers

// Understand reduce but i'll take notes tomorrow