const {SHA256}=require('crypto-js');
const jwt=require('jsonwebtoken');

var data= {
    id:10
};

var token=jwt.sign(data,'123abc');
console.log(token);
var decoded=jwt.verify(token,'123abc');
console.log(decoded);



/*
var message='I am user number 3';
var hash=SHA256(message).toString();

console.log(message);
console.log(hash);

var data={
    id:4
};
var token={
    data,
    hash:SHA256(JSON.stringify(data)+'Secret').toString()
}

//token.data.id=5;

var hashResult=SHA256(JSON.stringify(token.data)+'Secret').toString();

if(hashResult===token.hash)
{
    console.log('Date not changed');
}
else 
{
    console.log('Date changed,do not trust');
}
*/