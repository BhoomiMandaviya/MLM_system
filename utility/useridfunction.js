exports.userId = (str,n)=>{
    let ascii1 = str.charCodeAt(0);
    let id = String.fromCharCode(ascii1+1)
    id+=n
return id
}