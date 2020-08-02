const var1Node = $('.var1');
const var2Node = $('.var2');
const var3Node = $('.var3');
const var4Node = $('.var4');
const var5Node = $('.var5');
const var6Node = $('.var6');
const speachNode = $('.speach');

const btnCreate = $('.j-btn-create');
const btnReplace = $('.j-btn-replace');
const textNode = $('.result');


btnCreate.click(function () {
	const var1 = "Старик";
	const var2 = "Старуха";
	const var3 = "Курочка Ряба";
	const var4 = "Яйчко";
	const var5 = "Мышка";
	const var6 = "Хвостом";
	const speach = "Я снесу Вам новое яйцо";

	const startObj = {
		"text": [
			`Жили-были ${var1} да ${var2} </br>`,
			`Была у них ${var3} </br>`,
			`Снесла ${var3} ${var4}, не простое - золотое </br>`,
			`- ${var1} бил, бил - не разбил </br>`,
			`- ${var2} била, била - не разбила </br>`,
			`${var5} бежала, ${var6} задела, ${var4} упало и разбилось. </br>`,
			`${var1} плачет, ${var2} плачет, а ${var3} кудахчет: </br>`,
			`${speach}`,
		]
	};
	textNode.html(startObj.text);
})

btnReplace.click(function () {
	const var1 = var1Node.val();
	const var2 = var2Node.val();
	const var3 = var3Node.val();
	const var4 = var4Node.val();
	const var5 = var5Node.val();
	const var6 = var6Node.val();
	const speach = speachNode.val();

	const newObj = {
		"text": [
			`Жили-были ${var1} да ${var2} </br>`,
			`Была у них ${var3} </br>`,
			`Снесла ${var3} ${var4}, не простое - золотое </br>`,
			`- ${var1} бил, бил - не разбил </br>`,
			`- ${var2} била, била - не разбила </br>`,
			`${var5} бежала, ${var6} задела, ${var4} упало и разбилось. </br>`,
			`${var1} плачет, ${var2} плачет, а ${var3} кудахчет: </br>`,
			`${speach}`,
		]
	};
	textNode.html(newObj.text);
})