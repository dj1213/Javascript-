var array = new Array(4)

for(var b = 0; b <= 3; b++)
{
    array[b] = prompt('enter the value');
}

document.write('<ul>')
for(var a = 0; a <= 3; a++)
{
    document.write('<li>'+array[a] + '</li>');

}
document.write('</ul>')
