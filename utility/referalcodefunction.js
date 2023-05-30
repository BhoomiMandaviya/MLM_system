exports.random=()=> {
    let randomString     = '';
    let capital = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let small = "abcdefghijklmnopqrstuvwxyz";

    for ( let i = 0; i < 2; i++ ) {
      randomString += capital.charAt(Math.floor(Math.random()*capital.length));
   }

   for ( let i = 0; i < 2; i++ ) {
    randomString += small.charAt(Math.floor(Math.random()*small.length));
 }

 for ( let i = 0; i < 4; i++ ) {
    randomString += Math.floor(Math.random()*10);
 }
   return randomString;
}
