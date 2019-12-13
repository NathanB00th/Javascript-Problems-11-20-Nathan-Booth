//Nathan Booth
//These are problems 11 - 20
//11 - 20 - 19

//problem 11

function firstLast6(array) {
    var placeFirst = array.indexOf(6);
    var placeLast = array.lastIndexOf(6);
    var length = array.length - 1;
    if (placeFirst == 0 || placeLast == length) {
        var result = true;
    } else {
        var result = false;
    }
    return result;
}

//problem 12

function has23(array) {
    var two = array.indexOf(2);
    var three = array.indexOf(3);
    if (two == -1 && three == -1) {
        var result = false;
    } else {
        var result = true;
    }
    return result;
}

//problem 13

function fix23(array) {
    var twoFront = array.indexOf(2);
    var twoBack = array.lastIndexOf(2);
    var three = array.indexOf(3);
    if (twoFront == three - 1 || twoBack == three - 1) {
        array.splice(three, 1);
        array.splice(three, 0, 0);
        var result = array;
    } else {
        var result = array;
    }
    return result;
}

//problem 14

function countYZ(string) {
    var newString = string;
    var newString = newString.toLowerCase();
    var yEnd = newString.endsWith("y");
    var zEnd = newString.endsWith("z");
    var counter = 0;
    var end = newString.length;
    if (yEnd == true || zEnd == true) {
        counter++;
    }
    while (true) {
        var yWord = newString.includes("y ");
        var zWord = newString.includes("z ");
        if (yWord == true) {
            counter++;
            var remove = newString.indexOf("y ");
            var newString = newString.substring(remove + 1, end);
        } else {
            if (zWord == true) {
                var remove = newString.indexOf("z ");
                var newString = newString.substring(remove + 1, end);
                counter++;
            } else {
                break;
            }
        }
    }
    return counter;
}

//problem 15

function endOther(stringOne, stringTwo) {
    var string1 = stringOne.toLowerCase();
    var string2 = stringTwo.toLowerCase();
    var string1Length = string1.length;
    var string2Length = string2.length;
    if (string1Length > string2Length) {
        var string1Small = string1.substring(string1Length - string2Length, string1Length);
        if (string1Small == string2) {
            var result = true;
        } else {
            var result = false;
        }
    } else {
        if (string1Length < string2Length) {
            var string2Small = string2.substring(string2Length - string1Length, string2Length);
            if (string2Small == string1) {
                var result = true;
            } else {
                var result = false;
            }
        } else {
            if (string1 == string2) {
                var result = true;
            } else {
                var result = false;
            }
        }
    }
    return result;
}

//problem 16

function starOut (string) {
    var gotStars = string.includes("*");
    if (gotStars == true) {
        var strang = string;
        var length = strang.length;
        if (length <= 3) {
            var strang = "";
        } else {
            var i = 0;
            while (true) {
                var gotStars = strang.includes("*");
                if (gotStars == false) {
                    break;
                }
                var posStar = strang.indexOf("*");
                var isStarBack = strang.charAt(posStar + 1);
                if (isStarBack == "*") {
                    var strang1 = strang.substring(0, posStar - 1);
                    var strang2 = strang.substring(posStar + 1);
                    while (true) {
                        var posStar = strang2.indexOf("*");
                        var isStarBack = strang2.charAt(posStar + 1);
                        if (isStarBack == "*") {
                            strang2 = strang2.substring(1);
                        } else {
                            strang2 = strang2.substring(1);
                            break;
                        }
                    }
                    var strang2 = strang2.substring(1);
                    var strang = strang1 + strang2;
                } else {
                    var length = strang.length;
                    var strang1 = strang.substring(0, posStar - 1);
                    var strang2 = strang.substring(posStar + 2, length);
                    var strang = strang1 + strang2;
                }
            }
        }
        var result = strang;
    } else {
        var result = string;
    }
    return result;
}

//problem 17

function getSandwich(sandWitch) {
    var breb = sandWitch.includes("bread");
    if (breb == false) {
        var result = "";
    } else {
        var whereFrontBreb = sandWitch.indexOf("bread");
        var whereBackBreb = sandWitch.lastIndexOf("bread");
        var middle = sandWitch.substring(whereFrontBreb + 5, whereBackBreb);
        var result = middle;
        if (whereFrontBreb == whereBackBreb) {
            var result = "";
        }
    }
    return result;
}

//problem 18

function canBalance(array) {
    var length = array.length;
    var canBalance = 0;
    var part1 = 0;
    var part2 = 0;
    if (length <= 1) {
        var result = false;
    } else {
        for (var i = 1; i < length; i++) {
            for (var num1 = 0; num1 < i; num1++) {
                var num = array[num1];
                var part1 = part1 + num;
            }
            for (var num2 = length - 1; num2 >= i; num2--){
                var numForTwo = array[num2];
                var part2 = part2 + numForTwo;
            }
            if (part1 == part2) {
                canBalance++;
            } else {
                var part1 = 0;
                var part2 = 0;
            }
        }
        if (canBalance >= 1) {
            var result = true;
        } else {
            var result = false;
        }
    }
    return result;
}

//problem 19

function countClumps(array){
    var length = array.length;
    var clumps = 0;
    for (var i = 0; i < length; i++) {
        var num = array[i];
        var nextNum = array[i + 1];
        if (num == nextNum) {
            clumps++;
        }
        var q = i;
        while (true) {
            var newNum = array[q + 1];
            if (newNum == num) {
                i++;
            } else {
                break;
            }
            q++
        }
    }
    return clumps;
}

//problem 20

function evenlySpaced(a, b, c) {
    if (a == b && a == c) {
        var result = true;
    } else {
        var result = false;
        if (a > b && c) {
            if (b > c) {
                var ab = a - b;
                var bc = b - c;
                if (ab == bc) {
                    var result = true;
                }
            } else {
                var ac = a - c;
                var cb = c - b;
                if (ac == cb) {
                    var result = true;
                }
            }
        }
        if (b > a && c) {
            if (a > c) {
                var ba = b - a;
                var ac = a - c;
                if (ac == ba) {
                    var result = true;
                }
            } else {
                var bc = b - c;
                var ca = c - a;
                if (ca == bc) {
                    var result = true;
                }
            }
        }
        if (c > a && b) {
            if (a > b) {
                var ca = c - a;
                var ab = a - b;
                if (ca == ab) {
                    var result = true;
                }
            } else {
                var cb = c - b;
                var ba = b - a;
                if (cb == ba) {
                    var result = true;
                }
            }
        }
    }
    return result;
}