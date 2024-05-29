var userInput = ""; //reset values when loading
document.getElementById('password').value = "";
var key = "";

function random(max)
{
    key = (Math.floor(Math.random()*max)).toString();
    return key;
}

function generateQRCode()
{
    var qrcode = new QRCode("qrcode", random(10000)); //random input second
}

function checkInput()
{
    userInput = document.getElementById('password').value;
    if (userInput == key)
    {
        document.getElementById('secret').innerHTML = 'Secret text from verifying via QR code';
    }
}

