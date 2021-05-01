function addChar(input,character)
{
	if(input.value == null || input.value == "0")
		input.value = character
	else
		input.value += character
}

function cos(form)
{
	form.display.value = Math.cos(form.display.value * (Math.PI / 180));
}

function sin(form)
{
	form.display.value = Math.sin(form.display.value * (Math.PI/180));
}
function tan(form)
{
	form.display.value = Math.tan(form.display.value * (Math.PI/180));
}
function acos(form)
{
	form.display.value = Math.acos(form.display.value * (Math.PI/180));
}

function asin(form)
{
	form.display.value = Math.asin(form.display.value * (Math.PI/180));
}
function atan(form)
{
	form.display.value = Math.atan(form.display.value * (Math.PI/180));
}

function sqrt(form)
{
	form.display.value = Math.sqrt(form.display.value);
}
function ln(form)
{
	form.display.value = Math.log(form.display.value);
}
function exp(form)
{
	form.display.value = Math.exp(form.display.value);
}
function radians(form) {
  form.display.value = form.display.value * (Math.PI / 180);
}

function degrees(form) {
  form.display.value = form.display.value * (180 / Math.PI);
}
function log(form) {
  form.display.value = Math.log10(form.display.value);
}
function exponent(form) {
  form.display.value = form.display.value + "^";
  
}
function exponentu(form) {
  form.display.value = form.display.value + "^";
  equals();
}

function fact(form)
{
	var number=1;
	if(form.display.value === 0)
	{
		form.display.value = "1";
	}
	else if(form.display.value < 0)
	{
		form.display.value="undefined";
	}
	else
	{
		var number=1;
		for(var i=display.value;i>0;i--)
		{
			number*=i;
		}
		form.display.value=number;
	}
}

function deleteChar(input)
{
	input.value = input.value.substring(0,input.value.length - 1)
}
var val=0.0;
function percent(input)
{
	val = input.value;
	input.value = input.value + "%";
}
function changeSign(input)
{
	if(input.value.substring(0,1)=="-")
		input.value = input.value.substring(1,input.value.length)
	else
		input.value = "-" + input.value
}
function compute(form)
{
/*	form.display.value = eval(form.display.value); */
	if ((display.value).indexOf("^") > -1) {
		var base = (display.value).slice(0, (display.value).indexOf("^"));
		var exponent = (display.value).slice((display.value).indexOf("^") + 1);
		display.value = eval("Math.pow(" + base + "," + exponent + ")");
	  } else {
		display.value = eval(display.value);
		checkLength();
		syntaxError();
	  }
}
function square(form)
{
	form.display.value = eval(form.display.value) * eval(form.display.value);
}
function power(form)
{
	form.display.value=Math.pow(form.display.value);
}


function checkNum(str)
{
	for(var i = 0;i < str.length; i++)
		{
		var ch = str.charAt(i);
		if(ch < "0" || ch > "9")
		{
			if(ch != "/" && ch !="*" && ch != "+" && ch != "-" && ch !=  "." && ch != "(" && ch != ")" && ch != "%" && ch!="^" )
			{
				alert("invalid entry!")
				return false
			}
		}
	}
	return true
}
/* function equals() {
  if ((display.value).indexOf("^") > -1) {
    var base = (display.value).slice(0, (display.value).indexOf("^"));
    var exponent = (display.value).slice((display.value).indexOf("^") + 1);
    display.value = eval("Math.pow(" + base + "," + exponent + ")");
  } else {
    display.value = eval(display.value);
    checkLength();
    syntaxError();
  }
}--> */
function checkLength() {
  if (display.value.length >= 23) {
    display.value = "Overload Error";
  }
}

function syntaxError() {
  if (eval(display.value) == SyntaxError) {
    display.value = "Syntax Error";
  }
}

function equals() {
  if ((display.value).indexOf("^") > -1) {
    var base = (display.value).slice(0, (display.value).indexOf("^"));
    var exponent = (display.value).slice((display.value).indexOf("^") + 1);
    display.value = eval("Math.pow(" + base + "," + exponent + ")");
  } else {
    display.value = eval(display.value);
    checkLength();
    syntaxError();
  }
}
