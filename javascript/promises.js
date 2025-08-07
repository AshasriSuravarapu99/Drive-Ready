// Promises are used to execute the tasks in the dependent manner even in the asynchronous environment so that they are executed only one function completes the task
// Promises are mainly used to get the progress of the task
// Promises are used in online payments 

// Here with promises fun2 executes only fun1 is completed, and fun3 is completed only when fun2 is completed

// If promise is resolved then it executes .then function else it executes .catch function
function fun1()
{
    return new Promise(function(resolved){
        setTimeout(function()
        {
            resolved(1);
        },1000)
    }
)
}

function fun2(value)
{
    return new Promise(function(resolved){
        setTimeout(function()
        {
            resolved(value+1);
        },1000)
    }
)
}

function fun3(value)
{
    return new Promise(function(resolved){
        setTimeout(function()
        {
            resolved(value+1);
        },1000)
    }
)
}

fun1().then(function(res1){
    console.log("Function 1 is completed ",res1);
    fun2(res1).then(function(res2){
        console.log("Function2 is completed ",res2);
        fun3(res2).then(function(res3){ 
            console.log("Function 3 is completed ",res3)
        })
    })
})


// Without promises three executes at a time
// function f1()
// {
//     setTimeout(function(){
//     console.log("1")
// },1000)
// }

// function f2()
// {
//     setTimeout(function(){
//     console.log("2")
// },1000)
// }


// function f3()
// {
//     setTimeout(function(){
//     console.log("3")
// },1000)
// }

// f1()
// f2()
// f3()