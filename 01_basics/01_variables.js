const accountId = 11038
let accountEmail = "sunil@google.com"
var accountPassword = "123456"
accountCity = "Bengaluru"

accountEmail = "sunil@netflix.com"
accountPassword = "654321"
accountCity = "Mysore"

/*
prefer not to use var
because of issue in block scope and functional scope
*/

console.table([accountId, accountEmail, accountPassword, accountCity])
