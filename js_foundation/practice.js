//
// 将name变量中的字母全部转为为大写，输出：'HELLO'。
//
var name = 'hello';
var upperName = name.toUpperCase();
console.log(upperName);
alert upperName; // HELLO

//
// 将sentence变量中的所有单词首字母变为大写，输出：'Good Afternoon, Mr Mike.'。
//
var sentence = 'good afternoon, mr mike.';
var sentenceArray = sentence.split(" ");
for (var i = 0; i < sentenceArray.length; i++) {
    sentenceArray[i] = sentenceArray[i].substr(0, 1).toUpperCase() + sentenceArray[i].substr(1);
}
var sentenceUpper = sentenceArray.join(" ");
console.log(sentenceUpper);

// 抽成函数
function toUpperInitial(str) {
    var strArray = str.split(" ");
    for (var i = 0; i < strArray.length; i++) {
        strArray[i] = strArray[i].substr(0, 1).toUpperCase() + strArray[i].substr(1);
    }
    return strArray.join(" ");
}
var sentence = 'good afternoon, mr mike.';
console.log(toUpperInitial(sentence));

//
// 将money变量中的金额提取出来，输出：20。
//
var money = '￥20';
var moneyNum = money.replace(/[^0-9]/ig, "");
console.log(moneyNum);

//
// 写程序判断下列变量是不是数组类型。
//
var a = '[a, b, c, d]';
Array.isArray(a); // false
var b = [1, 2, 3, 4];
Array.isArray(b); // true

//
// 编写程序，将下面数组中的每一项都乘以2。
//
var a = [1, 2, 3, 4, 5];
var doubles = a.map(function (num) {
    return num * 2;
});
console.log(doubles); // [2, 4, 6, 8, 10]

//
// 编写程序，按下面的要求输出结果。
//
var colors = ["Red", "Green", "White", "Black"];
// case 1 output: 'Red Green White Black'
// case 2 output: 'Red+Green+White+Black'
// case 3 output: 'Red,Green,White,Black'
alert(colors.join(" ")); // Red Green White Black
alert(colors.join("+")); // Red+Green+White+Black
alert(colors.join(",")); // Red,Green,White,Black

//
// 编写程序，将下面数组中的数字按从大到小的顺序排序。
//
var a = [5, 1, 8, 10, 4];
var numbers = a.sort(function (x, y) {
    return y - x;
});
console.log(numbers); // [10, 8, 5, 4, 1]

//
// 找出下列数组中出现频率最高的元素。（改）
//

// 计算数组中每个元素出现的次数
function countEles(arr) {
    var obj = arr.reduce(function (allEles, ele) {
        if (ele in allEles) {
            allEles[ele]++;
        } else {
            allEles[ele] = 1;
        }
        return allEles;
    }, {});
    return obj;
}

// 找出出现次数最多的元素
function findMostEle(count) {
    var sortCount = Object.keys(count).sort(function (a, b) {
        return count[b] - count[a];
    });
    return sortCount[0];
}
var a = [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
console.log(findMostEle(countEles(a))); // a

//
// 保留两位小数
//

// 不补位：
var y = 2.367;
y = Math.round(y * 100) / 100;
alert(y); // 2.37

// 补位：
function reserveTwoDecimals(num) {
    num = Math.round(num * 100) / 100;
    var str = num.toString();
    var decimalPoint = str.indexOf('.');
    if (decimalPoint < 0) {
        decimalPoint = str.length;
        str += '.';
    }
    while (str.length <= decimalPoint + 2) {
        str += '0';
    }
    return str;
}
console.log(reserveTwoDecimals(2.3)); // 2.30
console.log(reserveTwoDecimals(2.367)); // 2.37

// 
// 四舍五入round(x)
// 
var x = Math.round(2.3);
alert(x); // 2
var x = Math.round(2.6);
alert(x); // 3

// 
// 向上取整ceil(x)
// 
var x = Math.ceil(2.35);
alert(x); // 3

// 
// 向下取整floor(x)
// 
var x = Math.floor(2.35);
alert(x); // 2

// 
// 从0循环到20，分别判断该数是奇数还是偶数，并输出。
// 
for (var i = 0; i <= 20; i++) {
    if (i % 2 === 0) {
        console.log(i + '是偶数。');
    } else {
        console.log(i + '是奇数。');
    }
}

// 
// 写程序输出9*9乘法表。
// 
for (var i = 1; i <= 9; i++) {
    var j = 1;
    var str = '';
    do {
        str += i + '*' + j + '=' + i * j + ' ';
        j++;
    } while (j <= i)
    console.log(str);
}

// 
// 将一个字符串逆序输出。
// 
function reverseString(message) {
    var i = message.length - 1;
    var str = '';
    while (i >= 0) {
        str += message.charAt(i);
        i--;
    }
    return str;
}
reverseString('hello');

// 
//判断一个字符串是否是回文串。
// 
function palindrome(message) {
    var i = 0, j = message.length - 1;
    for (i, j; i < j; i++ , j--) {
        if (message.charAt(i) !== message.charAt(j)) {
            return false;
        }
    }
    return true;
}
palindrome('hello'); // should return false
palindrome('abcba'); // should return true

// 
// 计算出一个字符串共有多少个单词组成。
// 
function countWords(message) {
    var strArray = message.split(" ");
    var i = strArray.length;
    console.log(i);
}
countWords('Good morning, I love JavaScript.'); // should return 5

// 
// 按字母表顺序输出传入的参数字符串。
// 
function alphabetSort(message) {
    var strArray = message.split('');
    var sortArray = strArray.sort(function (x, y) {
        return x.localeCompare(y);
    });
    return sortArray.join('');
}
alphabetSort('hello');
