//-----1 task------
var flowers = ['Агератум', 'Алиссум', 'Анемона', 'Жасмин', 'Мать и мачеха',
'Роза-ругоза', 'Ромашка луговая', 'Шток-роза', 'Волчий глаз', 'Хризантема',
'Анютины глазки', 'Фиалка', 'Тюльпан', 'Тысячелистник', 'Снежноягодник',
'Примула', 'Подсолнух', 'Герань', 'Лаванда', 'Венерин волос', 'Гортензия',
'Древовидный папоротник', 'Ванька-выскочка', 'Львиный зев', 'Мини роза'];
console.log('Task 1 \nИзначальный массив:\n');
console.log(flowers);
//-----2 task------
console.log('Task 2 \nОтсортированный массив в обратном порядке (Я-А):');
flowers.sort().reverse(); 
console.log(flowers);
flowers.sort();
//------3 task------
console.log('Task 3 \nОтфильтрованный массив, только буквы:');
var result = flowers.filter(function(value) {
return !/\s|-/.test(value)});
console.log(result);
 //-----4.1 task------
console.log('Task 4.1 \nТолько слова имеющие буквы я,ю,е:');
Array.prototype.incrementalSearch = function(s)
{
return this.filter(item => item.indexOf(s) >= 0)
//console.log(flowers = flowers.incrementalSearch('ю'||'я'||'е'))
}
var a = flowers;
var arr = flowers;
console.log(flowers = flowers.incrementalSearch('я'))
console.log(a = a.incrementalSearch('ю'))
console.log(arr = arr.incrementalSearch('е'))
//------4.2 task-----
console.log('Task 4.2\nМассив кодов символов:');
var arr = [];
for (var l = 0; l < flowers.length; l++){
  for (var j = 0, chr, res = ''; j < flowers[l].length; j++){
    chr = flowers[l].charCodeAt(j);
    res += chr;
  }
  arr.push(res);
}
console.log(arr);