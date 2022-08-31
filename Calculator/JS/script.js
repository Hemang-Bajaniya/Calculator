function addScreen(n)
{
    document.getElementById('screen').innerHTML+=n;
}

function cls()
{
    document.getElementById('screen').innerHTML='';
}

function solve()
{
    var ans = eval(document.getElementById('screen').innerHTML.replace('^','**').replace('X','*'));
    if(ans==Infinity)
    {
        document.getElementById('screen').innerHTML = 'Can\'t divide by 0';
    }
    else
    {
    document.getElementById('screen').innerHTML = parseFloat(ans);
    }
}

function theme() {
    document.getElementById('mode').classList.toggle('dark');
    document.body.classList.toggle('dark');
}

let flag = false;
function theme() {
    document.getElementById('mode').classList.toggle('dark');
    document.body.classList.toggle('dark');
    if(flag==false)
    {
        document.getElementById('theme').src = 'svg/light.svg';
        flag = true;
    }
    else
    {
        document.getElementById('theme').src = 'svg/dark.svg';
        flag = false;
    }
}