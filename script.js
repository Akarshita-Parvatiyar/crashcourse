function yourageinday(){
    var birthyear = prompt('ENTER YOUR BIRTH YEAR');
    var age = (2020-birthyear)*365;
    var h1 = document.createElement('h1');
    var textanswer = document.createTextNode('YOU ARE '+ age + ' DAYS OLD');
    h1.setAttribute('id','ageindays');
    h1.appendChild(textanswer);
    document.getElementById('result').appendChild(h1);
    
}
function reset(){
    document.getElementById('result').remove();
}
