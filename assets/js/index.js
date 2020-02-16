<script class = "generator-box">
            // Creates 5 arrays that will be randomly chosen from

            var passwordTypes = ["lc", "uc", "num", "sc"];

            var lc = passwordLowerCase
            var uc = passwordUpperCase
            var num = passwordNumbers
            var sc = passwordSpecialCharacters
            
            
            var passwordLowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
            var passwordUpperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
            var passwordNumbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
            var passwordSpecialCharacters = ["?", "!", "@", "$", "&", "*", "#"];
            
            var passwordArrays = [passwordLowerCase, passwordUpperCase, passwordNumbers, passwordSpecialCharacters];
            
            var userNumber = prompt("How many characters do you want your password to be?");

            for (var i = 0; i < userNumber; i++) {
                
                var passwordRandom = passwordArrays[Math.floor(Math.random() * passwordArrays.length)];
                var userTypes = prompt("Select at least one option for password: lower case = ls, Upper Case = uc, Special Character = sc, and numbers = num.")
                    userTypes = userTypes.toLocaleLowerCase();

                


            }
        </script>