let inventory = {
  Sallad: {price: 10, foundation: true, vegan: true}, 
  Pasta: {price: 10, foundation: true, gluten: true},
  'Salad + Pasta': {price: 10, foundation: true, gluten: true},
  'Salad + Matvete': {price: 10, foundation: true, vegan: true, gluten: true},
  'Salad + Glasnudlar': {price: 10, foundation: true, gluten: true},
  'Salad + Quinoa': {price: 10, foundation: true, vegan: true},

  'KycklingfilÃ©': {price: 10, protein: true},
  'RÃ¶kt kalkonfilÃ©': {price: 10, protein: true},
  'Norsk fjordlax': {price: 30, protein: true},
  'Handskalade rÃ¤kor frÃ¥n SmÃ¶gen': {price: 40, protein: true},
  'Pulled beef frÃ¥n Sverige': {price: 15, protein: true},
  'Marinerad bÃ¶nmix': {price: 10, protein: true, vegan: true},

  Avocado: {price: 10, extra: true, vegan: true},
  'BÃ¶ngroddar': {price: 5, extra: true, vegan: true},
  'CashewnÃ¶tter': {price: 5, extra: true, vegan: true},
  'ChÃ¨vreost': {price: 15, extra: true, lactose: true},
  Fetaost: {price: 5, extra: true, lactose: true},
  'FÃ¤rsk koriander': {price: 10, extra: true, vegan: true},
  Gurka: {price: 5, extra: true, vegan: true},
  'Inlagd lÃ¶k': {price: 5, extra: true, vegan: true},
  Jalapeno: {price: 5, extra: true, vegan: true},
  'Krossade jordnÃ¶tter': {price: 5, extra: true, vegan: true},
  Krutonger: {price: 5, extra: true, gluten: true},
  Lime: {price: 5, extra: true, vegan: true},
  Majs: {price: 5, extra: true, vegan: true},
  Oliver: {price: 5, extra: true, vegan: true},
  Paprika: {price: 5, extra: true, vegan: true},
  Parmesan: {price: 5, extra: true, lactose: true},
  'Rivna morÃ¶tter': {price: 5, extra: true, vegan: true},
  'Rostade sesamfrÃ¶n': {price: 5, extra: true, vegan: true},
  Ruccola: {price: 5, extra: true, vegan: true},
  'RÃ¶dlÃ¶k': {price: 5, extra: true, vegan: true},
  'SojabÃ¶nor': {price: 5, extra: true, vegan: true},
  'Soltorkad tomat': {price: 5, extra: true, vegan: true},
  Tomat: {price: 5, extra: true, vegan: true},
  'ValnÃ¶tter': {price: 5, extra: true, vegan: true},
  'Ãgg': {price: 5, extra: true},

  Ceasardressing: {price: 5, dressing: true, lactose: true},
  Dillmayo: {price: 5, dressing: true},
  Honungsdijon: {price: 5, dressing: true, vegan: true},
  Kimchimayo: {price: 5, dressing: true},
  Pesto: {price: 5, dressing: true, lactose: true},
  Rhodeisland: {price: 5, dressing: true, lactose: true},
  'Rostad aioli': {price: 5, dressing: true},
  'SoyavinÃ¤grett': {price: 5, dressing: true, vegan: true},
  'ÃrtvinÃ¤grett': {price: 5, dressing: true, vegan: true},
};

// recursivly freeze the datastructure.
(function () {
  function deepFreeze(obj) {
      Object.keys(obj).map(prop => deepFreeze(obj[prop]));
      Object.freeze(obj);
  }
  deepFreeze(inventory);
})();

export default inventory;