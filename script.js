var items = [
  { name: 'じゃがいも', price: 50, count: 3 },
  { name: 'にんじん', price: 60, count: 1 },
  { name: '豚肉', price: 200, count: 1 },
  { name: '玉ねぎ', price: 50, count: 2 }
];

// targetPriceより小計の高額な商品を出力
function higherPrice (targetPrice) {
  for (var i = 0; i < items.length; i++) {
    if (items[i].price * items[i].count > targetPrice) {
      console.log(items[i].name);
    }
  }
}

higherPrice(120);

//   return num1 * num1;
// }
// console.log(square(3));

// function hello(name) {
//   window.alert(name + 'さん、こんにちわ！');
// }
// hello('太郎');

// var obj = { name: 'TECH::CAMP' };
// obj.name = 'Hello'
// for (var i = 0; i < 5; i = i + 1) {
//   window.alert(obj.name);
//   console.log(i);
// }

