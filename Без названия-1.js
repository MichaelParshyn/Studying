//№4;Для каждого элемента сгенерировать массив встречающихся дифтонгов;массив кодов символов;
//№5;Создать API для работы с массивом;шифрование и дешифрование;поиск строк в массиве по подстроке;
var flowers = ['Агератум', 'Алиссум', 'Анемона', 'Жасмин', 'Мать и мачеха',
'Роза-ругоза', 'Ромашка луговая', 'Шток-роза', 'Волчий глаз', 'Хризантема',
'Анютины глазки', 'Фиалка', 'Тюльпан', 'Тысячелистник', 'Снежноягодник',
'Примула', 'Подсолнух', 'Герань', 'Лаванда', 'Венерин волос', 'Гортензия',
'Древовидный папоротник', 'Ванька-выскочка', 'Львиный зев', 'Мини роза'];

  console.log("Изначальный массив:");
  console.log(flowers);
function sDecrease(i, ii) { 
if (i > ii)
return -1;
else if (i < ii)
return 1;
else
return 0;
}
console.log("Отсортированный массив в обратном порядке (Я-А):");
let mass = flowers;
mass.sort(sDecrease); 
console.log(flowers);
 
console.log("Только слова имеющие буквы 'я','ю','е':");
console.log(flowers = flowers.incrementalSearch('я','ю','е'));

/*function encode_utf8( flowers )
{
  return unescape( encodeURIComponent( flowers ) );
}*/
var result = flowers.filter(function(value) {
  return !/\s|-/.test(value)});
console.log("Отфильтрованный массив, только буквы (без пробелов и дефисов):");
console.log(result);