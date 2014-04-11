/*
 if (number >= 1000) {
 var numberOfM = number / 1000;
 for (var i = 0; i < numberOfM; i++)
 result += "M";
 }

 number = number % 1000;
 */



module.exports.ConvertToRomanNumber = function (number) {

    var lettersByPosition = [
        ["X", "V", "I"],
        ["C", "L", "X"],
        ["M", "D", "C"]
    ];
    var result = '';


    var numberAsString = number.toString();

    for (var position = numberAsString.length - 1,
             rank = 0;
             position >= 0 && rank < 3;
             position--,
             rank++) {

        var currentDigit = numberAsString[position];

        switch (currentDigit) {
            case "1":
                result = lettersByPosition[rank][2] + result;
                break;
            case "2":
                result = lettersByPosition[rank][2] +
                    lettersByPosition[rank][2] + result;
                break;
            case "3":
                result = lettersByPosition[rank][2] +
                    lettersByPosition[rank][2] +
                    lettersByPosition[rank][2] + result;
                break;
            case "4":
                result = lettersByPosition[rank][2] +
                    lettersByPosition[rank][1] + result;
                break;
            case "5":
                result = lettersByPosition[rank][1] + result;
                break;
            case "6":
                result = lettersByPosition[rank][1] +
                    lettersByPosition[rank][2] + result;
                break;
            case "7":
                result = lettersByPosition[rank][1] +
                    lettersByPosition[rank][2] +
                    lettersByPosition[rank][2] + result;
                break;
            case "8":
                result = lettersByPosition[rank][1] +
                    lettersByPosition[rank][2] +
                    lettersByPosition[rank][2] +
                    lettersByPosition[rank][2] + result;
                break;
            case "9":
                result = lettersByPosition[rank][2] +
                    lettersByPosition[rank][0] + result;
                break;
        }
    }

    while(number >= 1000)
    {
        result = "M" + result;
        number -= 1000;
    }

    return result;


};


/*var specialNumbers = {
 "1": "I",
 "5": "V",
 "10": "X",
 "50": "L",
 "100": "C",
 "500": "D",
 "1000": "M"
 };

 var specialValues = [1000, 500, 100, 50, 10, 5, 1];

 module.exports.ConvertToRomanNumber = function (number) {

 var result = '';

 specialValues.forEach(function (special, index) {
 while (number >= special) {
 result += specialNumbers[special];
 number -= special;
 }

 if (number == (special - specialValues[index + 1])) {
 result += specialNumbers[special];
 result += specialNumbers[specialValues[index + 1]];
 number = 0;
 }

 });

 return result;

 }*/