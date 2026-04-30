arr = [1,2,3];

// while
let j = 1;
while (j < arr.length) {
    console.log(arr[j]);
    j+=1;    
}

// do while 
do{
    console.log(arr[j]);
    j+=1;
}while (j < arr.length);

// for each
arr.forEach((ele) => {
    console.log("hii");
    console.log(ele)
});
