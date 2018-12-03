// 创建一个空对象，变量名为user
var user = {};

// 添加一个name属性，并设置值为John
user.name = 'John';
console.log(user); // { name: 'John' }

// 添加一个surname属性，并设置其值为Mike；
user.surname = 'Mike';
console.log(user); // { name: 'John', surname: 'Mike' }

// 将name属性的值改为Peter
user['name'] = 'Peter';
console.log(user); // { name: 'Peter', surname: 'Mike' }

// 删除user的name属性
delete user.name;
console.log(user); // { surname: 'Mike' }

var fruit = {
  apple: 20,
  pear: 20,
  peach: 10
};
// 计算fruit对象共有多少个水果，应该输出50。
function sumObjValues(obj) {
  var objValues = Object.values(obj);
  function reducer(accumulator, currentValue) {
    return accumulator + currentValue;
  }
  return objValues.reduce(reducer);
}
console.log(sumObjValues(fruit)); // 50