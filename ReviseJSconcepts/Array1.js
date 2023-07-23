const fruits=['apple', 'oranges', '','mango', '','lemon'];
for(let i in fruits)
{
    if(fruits[i]=='')
    {
        fruits[i]='empty string';
    }
}
console.log(fruits);