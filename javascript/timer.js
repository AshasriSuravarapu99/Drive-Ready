var IntervalName;

function Start()
{
        // var sec = document.getElementById("inp").value * 60
        var sec=600;
        IntervalName = setInterval(function(){
        sec = sec-1;
        console.log(parseInt(sec/60),':',sec%60)

        document.getElementsByClassName("minutes")[0].innerText = parseInt(sec/60)
        document.getElementsByClassName("seconds")[0].innerText = sec%60
    },1000)
}

function Stop()
{
    console.log("Stoped")
    clearInterval(IntervalName)
}

setTimeout(function()
{
      clearInterval(IntervalName)
},60000)

