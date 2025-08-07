var dLeft = 0
var dTop = 0
var i=0;
var j=0
var r=0,c=0
function createTable()
{
    r = parseInt(document.getElementsByTagName("input")[0].value)
    c = parseInt(document.getElementsByTagName("input")[1].value)

    let table1 = document.createElement("table")
    for(let j=r;j>0;j--)
    {
        let row = document.createElement('tr')
        for(let i=c;i>0;i--)
        {
            let column = document.createElement('td')
            column.setAttribute('width','100px');
            column.setAttribute('height','100px');
            column.setAttribute('style','background-color:skyblue');
            3
            row.appendChild(column)

        }
        table1.appendChild(row)
    }
   
    
    table1.setAttribute('border','2px')
    table1.setAttribute('style','margin-top:30px')
    table1.setAttribute('cellspacing','0')
    var dis = document.getElementsByTagName('body')[0]
    dis.appendChild(table1)
    

    let image = document.createElement('img')
    image.setAttribute('src','./bubuWalk.gif')
    image.setAttribute('width','50px')
    image.setAttribute('height','50px')
    image.style.position = 'relative'
    image.style.transition = 'left 1s linear,top 1s linear'
    document.getElementsByTagName('td')[0].appendChild(image)
    //buttons

    let b1 = document.createElement('button')
    b1.innerText='top';
    b1.setAttribute('style','margin-top:10px;margin-left:10px')
    document.getElementsByTagName('body')[0].appendChild(b1)

    let b2 = document.createElement('button')
    b2.innerText='right';
    b2.setAttribute('style','margin-top:10px;margin-left:10px')
    document.getElementsByTagName('body')[0].appendChild(b2)

    let b3 = document.createElement('button')
    b3.innerText='left';
    b3.setAttribute('style','margin-top:10px;margin-left:10px')
    document.getElementsByTagName('body')[0].appendChild(b3)

    let b4 = document.createElement('button')
    b4.innerText='bottom';
    b4.setAttribute('style','margin-top:10px;margin-left:10px')
    document.getElementsByTagName('body')[0].appendChild(b4)

    b1.setAttribute('onclick','moveTop()')
    b2.setAttribute('onclick','moveRight(c)')
    b3.setAttribute('onclick','moveLeft()')
    b4.setAttribute('onclick','moveBottom(r)')



}
function moveRight(val)
{
   if(j+1 >= val) alert('no')
    else{
    var image = document.getElementsByTagName('img')[0]
   dLeft = dLeft + 100;
   image.style.left = dLeft+'px';
   j = j+1;
    }

}
function moveLeft()
{
        if(j-1 < 0) alert('no')
        else{
        var image = document.getElementsByTagName('img')[0]
        dLeft = dLeft - 100;
        image.style.left = dLeft+'px';
        j = j-1;
        }
}
function moveBottom(val)
{
    if(i+1 >= val)alert('no')
    else{
    var image = document.getElementsByTagName('img')[0]
    dTop = dTop+100
    image.style.top = dTop+'px'
    i = i+1;
    }
}
function moveTop()
{
    if(i-1 < 0) alert('no')
    else{
    var image = document.getElementsByTagName('img')[0]
    dTop = dTop-100
    image.style.top = dTop+'px'
    i = i-1;
    }
}

