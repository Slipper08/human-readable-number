module.exports = function toReadable(number) {
	let numberLength = number.toString().length;
	let totalNumber;
	let firstPart;
	let firstPart2;
	let secondPart;
	let secondPart2;
	let thirdPart;
	let firstNumber = +number.toString()[0];
	let firstNumber2 = +number.toString().slice(0);
	let secondNumber = +number.toString()[1];
	let secondNumber2 = +number.toString().slice(1);
	let thirdNumber = +number.toString()[2];
	if (numberLength == 3) {
		// let firstNumber = +number.toString()[0];
		// let secondNumber = +number.toString()[1];
		// let thirdNumber = +number.toString()[2];
		switch (firstNumber) {
			case 1:
				firstPart = 'one hundred ';
				break;
			case 2:
				firstPart = 'two hundred ';
				break;
			case 3:
				firstPart = 'three hundred ';
				break;
			case 4:
				firstPart = 'four hundred ';
				break;
			case 5:
				firstPart = 'five hundred ';
				break;
			case 6:
				firstPart = 'six hundred ';
				break;
			case 7:
				firstPart = 'seven hundred ';
				break;
			case 8:
				firstPart = 'eight hundred ';
				break;
			case 9:
				firstPart = 'nine hundred ';
				break;
		}
		switch (secondNumber) {
			case 1:
				switch (secondNumber2) {
					case 10:
						secondPart2 = 'ten';
						break;
					case 11:
						secondPart2 = 'eleven';
						break;
					case 12:
						secondPart2 = 'twelve';
						break;
					case 13:
						secondPart2 = 'thirteen';
						break;
					case 14:
						secondPart2 = 'fourteen';
						break;
					case 15:
						secondPart2 = 'fifteen';
						break;
					case 16:
						secondPart2 = 'sixteen';
						break;
					case 17:
						secondPart2 = 'seventeen';
						break;
					case 18:
						secondPart2 = 'eighteen';
						break;
					case 19:
						secondPart2 = 'nineteen';
						break;
				}
			case 2:
				secondPart = 'twenty ';
				break;
			case 3:
				secondPart = 'thirty ';
				break;
			case 4:
				secondPart = 'forty ';
				break;
			case 5:
				secondPart = 'fifty ';
				break;
			case 6:
				secondPart = 'sixty ';
				break;
			case 7:
				secondPart = 'seventy ';
				break;
			case 8:
				secondPart = 'eighty ';
				break;
			case 9:
				secondPart = 'ninety ';
				break;
			case 0:
				secondPart = 'zero ';
				break;
		}
		switch (thirdNumber) {
			case 1:
				thirdPart = 'one';
				break;
			case 2:
				thirdPart = 'two';
				break;
			case 3:
				thirdPart = 'three';
				break;
			case 4:
				thirdPart = 'four';
				break;
			case 5:
				thirdPart = 'five';
				break;
			case 6:
				thirdPart = 'six';
				break;
			case 7:
				thirdPart = 'seven';
				break;
			case 8:
				thirdPart = 'eight';
				break;
			case 9:
				thirdPart = 'nine';
				break;
			case 0:
				thirdPart = 'zero';
				break;
		}
		if (secondNumber == 1) {
			totalNumber = (firstPart + secondPart2).replace(/zero/g, "").trim();
		} else if (secondNumber == 0) {
			totalNumber = (firstPart + thirdPart).replace(/zero/g, "").trim();
		} else if (thirdNumber == 0) {
			totalNumber = (firstPart + secondPart).replace(/zero/g, "").trim();
		} else {
			totalNumber = (firstPart + secondPart + thirdPart).replace(/zero/g, "").trim();
		}
	} else if (numberLength == 2) {
		// let firstNumber = +number.toString()[0];
		// let secondNumber = +number.toString()[1];
		switch (firstNumber) {
			case 1:
				switch (firstNumber2) {
					case 10:
						firstPart2 = 'ten';
						break;
					case 11:
						firstPart2 = 'eleven';
						break;
					case 12:
						firstPart2 = 'twelve';
						break;
					case 13:
						firstPart2 = 'thirteen';
						break;
					case 14:
						firstPart2 = 'fourteen';
						break;
					case 15:
						firstPart2 = 'fifteen';
						break;
					case 16:
						firstPart2 = 'sixteen';
						break;
					case 17:
						firstPart2 = 'seventeen';
						break;
					case 18:
						firstPart2 = 'eighteen';
						break;
					case 19:
						firstPart2 = 'nineteen';
						break;
				}
			case 2:
				firstPart = 'twenty ';
				break;
			case 3:
				firstPart = 'thirty ';
				break;
			case 4:
				firstPart = 'forty ';
				break;
			case 5:
				firstPart = 'fifty ';
				break;
			case 6:
				firstPart = 'sixty ';
				break;
			case 7:
				firstPart = 'seventy ';
				break;
			case 8:
				firstPart = 'eighty ';
				break;
			case 9:
				firstPart = 'ninety ';
				break;
			case 0:
				firstPart = 'zero';
				break;
		}
		switch (secondNumber) {
			case 1:
				secondPart = 'one';
				break;
			case 2:
				secondPart = 'two';
				break;
			case 3:
				secondPart = 'three';
				break;
			case 4:
				secondPart = 'four';
				break;
			case 5:
				secondPart = 'five';
				break;
			case 6:
				secondPart = 'six';
				break;
			case 7:
				secondPart = 'seven';
				break;
			case 8:
				secondPart = 'eight';
				break;
			case 9:
				secondPart = 'nine';
				break;
			case 0:
				secondPart = 'zero';
				break;
		}
		if (firstNumber == 1) {
			totalNumber = firstPart2.replace(/zero/g, "").trim();
		} else if (secondNumber == 0) {
			totalNumber = firstPart.replace(/zero/g, "").trim();
		} else {
			totalNumber = (firstPart + secondPart).replace(/zero/g, "").trim();
		}
	} else if (numberLength == 1) {
		// let firstNumber = +number.toString()[0];
		switch (firstNumber) {
			case 1:
				firstPart = 'one';
				break;
			case 2:
				firstPart = 'two';
				break;
			case 3:
				firstPart = 'three';
				break;
			case 4:
				firstPart = 'four';
				break;
			case 5:
				firstPart = 'five';
				break;
			case 6:
				firstPart = 'six';
				break;
			case 7:
				firstPart = 'seven';
				break;
			case 8:
				firstPart = 'eight';
				break;
			case 9:
				firstPart = 'nine';
				break;
			case 0:
				firstPart = 'zero';
				break;
		}
		totalNumber = firstPart;
	} else {
		console.log('укажите число в промежутке от 0 до 999')
	}
	return totalNumber;
}
