var testOne= "what kind of variable am i?";
// string
var testTwo=256;
// number
var testThree=false;
// boolean
var testFour='true'
// string
var testFive='128'
// string
var testSix="";
// undefined

var testOne= "hello" + "there";
// string hello string there
var testTwo='100' +28;
// string 100 number 28
var testThree= true+3;
// boolean 1 number 3
var testFour= 'false' +5;
// string false number 5
var testFive= '128'-3;
// string 128 number 3
var testSix= "" *9;
// undefined number 9
var testSeven= 'zero' -1;
// string zero number 1
var testEight= 'five' .length;
// static property, 4
var testNine= 'five'[0] + 'ever';
// index f + string ever
var testTen='a'>'b';
// variables string a and string b
var testEleven= 'number'.length<7;
// number, the lenght of number and number 7, true
var testTwelve='12'==12;
// true, they are equal to each other but are not identical 
var testThirteen='twelve'==12;
// string number false not identical and not equal to
var testFourteen= '14'===14;
// string number false, not identical
var testFifteen= "Hi there"[0]+ "open sesame"[2]+ 
"alohamora"[1] + "eulalia"[4]+ "harkonnen"[4]
+ "batman!"[6];
// Hello!
var string1="hello,";
var string2="my name is";
var string3="Kingsley Pappagiorgio";
var combinedStrings=string1+string2+string3;
console.log(combinedStrings);
// #7 Hello, my name is Kingsley Pappagiorgio.
// #8 120
var num1=8;
var num2=52;
var num3=60;
var combinedNumbers=num1+num2+num3;
console.log(combinedNumbers);
// 120

var mixedNum1=10;
var mixedString1="ten";
var mixedNum2="10";
var mixedConcatenation=mixedNum1+mixedNum2+mixedString1;
console.log(mixedConcatenation);
// 1010ten


var num4=5;
var num5=0;
if (num4>1){
	console.log("Num4 is greater than 1");
} else{
	console.log("Num4 is NOT greater than 1");
};
// Num4 is greater than 1


// #11
var num4=5;
var num5=0;
if (num4<num5 || num4===num5){
	console.log("if statement ran!");
} else if (num5==="0"||true){
	console.log("Else if statement ran");
}else{
	console.log("Else statement ran");
}
// else if statement ran

// #12
var num4 = 5;
var num5=0;

if (num4>num5 && num4 ===num5){
	console.log("If statement ran!");
} else if (num5==="0" || true){
	console.log("Else if statement ran");
} else {
	console.log("Else statement ran");
};

//else if statement ran

//#13
var string1 = "this is a string";
for (var i=0; i<string1.length; i++){
	console.log(i, string1[i]);
};
//it will log 0-16 and t-g, checked in console to verify

//14 
var string2= "coding";
var total=0;
for (var i=0; i<string2.length; i++){
	total=total+i;
};
console.log(total);
//total is 15


//15 
var string3 = "onomatopoeia";

for (var i=0; i<string3.length; i++){
	if(string3[i]=="o"){
		console.log(i, string3[i]);
	};
};
//when i is 0 string3[i] is o, at the end of the loop i is 12 and string3[i] is a

//16 what will the console message be?
var string4= "You're gonna need a bigger boat.";
for (var i=0; i<string4.length; i++){
	if (string4[i]=="a"||string4[i]=="e"||string4[i]=="i"||string4[i]=="o"||string4[i]=="u"){
	console.log(string4[i]);
	};
};
// this one is tricky, when using the console log it seems that
//it logs string4[i] only for the condition that was submitted
//so the output is  o, u, o, a, a, i, o, a and undefinited 
//undefined represents the period
//my initial guess was that the console would only log the period



//17 what will be console message?
function testStuff (a, b){
	//for this function if a is greater than 25 AND b is less 
	//than 100 it will display the following message
	if (a>25 && b<100){
		console.log (a + " is greater than 25 and " +
			b + "is less than 100");
	//if it is not it will display this message
	} else{
				console.log(a + " Is NOT greater than 25 other"
					+b + " is NOT less than 100");
	};
};
testStuff(10, 101); 
// 10 is not greater than 25 so the second message runs
testStuff(26, 99);
// 26 is greater than 25 and 99 is less than 100/first message runs
testStuff(100, 25);
// 100 is greater than 25 and 25 is less than 100/ first message


//18 what will be the message?
function testsStuff2 (c, d){
	if (c==25){
		return c+ "is equal to 25";
	}else if (d<=100){
		return d+ " is less than or equal to 100";
	} else{
		return "Neither if nor else if statement ran";
	};
};
testStuff (26, 101);
// returns the last message
testStuff (25, 99);
// returns first message
testStuff (102, 24);
// returns second message


// 19 what will be the console message
function countVowels (someString){
	var vowels=0;
	for (var i=0; i<someString.length; i++){
		if (someString[i])
	}
}