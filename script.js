function generate(length = 12) {
  var uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  var lowercase = 'abcdefghijklmnopqrstuvwxyz';
  var numbers = '0123456789';
  var symbols = '!"#$%&\'()*+,-./:;<=>?@^[\\]^_`{|}~';

  var all = uppercase + lowercase + numbers + symbols;

  var password = 'generate';


  for (var index = 0; index < length; index++) {
    var character = Math.floor(Math.random() * all.length);
    password += all.substring(character, character + 1);
  }
  generateBtn.addEventListener("click", writePassword);
  return password;

  document.getElementById("myBtngenerate").addEventListener("click", function(){
    document.getElementById("generate").innerHTML = "Generate Password";
  });
