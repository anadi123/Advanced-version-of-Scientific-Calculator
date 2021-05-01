var input, button, outputText;

function setup() {
	//create input text box
	input = createInput();
	//create button with text "Derive!"
	button = createButton('Integrate!');

	//Whenever  the button is clicked, run function "evaluate"
	button.mousePressed(evaluate);

}

function evaluate() {
  //input
	var strIn = input.value();

	//find all equation before the ":";
	var inEquation = strIn.substring(0, strIn.indexOf(":")).replaceAll("pi","Math.PI");
	//find the number between ":" and ","
	var inA = strIn.substring(strIn.indexOf(":") + 1, strIn.indexOf(","));
	var inB = strIn.substring(strIn.indexOf(",") + 1, strIn.length);

	inA = eval(inA.replaceAll("pi","Math.PI"));
	inB = eval(inB.replaceAll("pi","Math.PI"));

	//create the output texts
	outputText = createElement('p', "INTEGRAL of equation " + inEquation + " from " + inA + " to " + inB + " equals " + integrate(inA, inB, inEquation, .001));
}

function plugIn(x, equation) {
	return eval(equation);
}

function trapezoid(length, h1, h2) {
	return ((h1 + h2) / 2) * length;
}

function integrate(a, b, equation, stepsize) {
	var area = 0;
	for (var i = a*1.0; i < b; i += stepsize) {
		var h1 = plugIn(i, equation);
		var h2 = plugIn(i + stepsize, equation);
		area = area + trapezoid(stepsize, h1, h2);
	}
	return area;
}





String.prototype.replaceAll = function (find, replace) {
    var str = this;
    return str.replace(new RegExp(find.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&'), 'g'), replace);
};