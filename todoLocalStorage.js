(function()
{
    var list = document.querySelector('#list'),
        form = document.querySelector('form'),
        item = document.querySelector('#item');
    
    form.addEventListener('submit',function(e)
    {
        e.preventDefault();
        list.innerHTML += '<li>' + item.value + '</li>';
        store();
        item.value = "";
    })
    
    list.addEventListener('click',function(e)
    {
        var t = e.target;
        t.classList.contains('checked')? t.parentNode.removeChild(t):   //ternary operator
                                        t.classList.add('checked');
        store();
    })
    
    function store() 
    {
        localStorage.myitems = list.innerHTML;      //locally store the listed items from HTML
    }
    
    function getValues() 
    {
        var storedValues = localStorage.myitems;        //get the locally stored values from myitems as storedValues
        if(!storedValues) 
        {
            list.innerHTML ='<li class="ckecked">Make to do list with local storage</li>';  //for default items
        }
        else        //for new added items
        {
            list.innerHTML = storedValues;
        }
    }
    getValues();
  })();         //IIFE