const accountId = 144553
let accountEmail = "DumyDipak@google.com"
var accountpassword = "12345"
accountCity = "Jaipur" // we can also declare a variable in this way (not a good practice)
let accountState;
// Two forward  slash is used for comment (shortcut is: ctrl + /)
// we can not change valuse inside a "const "
//  accountId = 2  // not allowed 

accountEmail = "dumdum@emil.com"
accountpassword = "6969"
accountCity = "Dehradun"

 console.log(accountId);
/*
(Multi line comment)

Prefer NOT TO USE VAR
Because of issue in BLOCK SCOPE and FUNCTION SCOPE

*/


 console.table([accountId, accountEmail, accountpassword, accountCity, accountState])
