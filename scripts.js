// upd 3: Я поняла что нужно записывать const/let в функции а не отдельно их выводить, менять уже поздно, поэтому оставлю так. Будет напоминаем :/

// 1
const a = 7;
const b = 9;

console.log(a*b);

// 2
const div2 = document.querySelector(".div2");
const c = 7;
const d = 9;

console.log(c/d);
div2.innerHTML += '<p>' + c/d + '</p>';

// 3
const div3 = document.querySelector(".div3");
const e = 3;
const f = 5;

console.log(e+f);
div3.innerHTML += '<p>' + (e+f) + '</p>'; // upd: Тут было обычные + e + f +
// И тут у меня возникли проблемы с плюсом, вместо того что бы "соединять" числа, он (innerhtml) их выводил как строчки
const e2f2 = e + f;
// ...поэтому я создала эту констанцию 
div3.innerHTML += '<p>' + e2f2 + '</p>';
// upd: я допетрила как это решить :D

// 4
const div4 = document.querySelector(".div4");
const e1 = '3';
const f1 = 5;

console.log(e1+f1);
div3.innerHTML += '<p>' + e1+f1 + '</p>';
// Главное отличие от предыдущего задания - e1 это не цифра, а строчка, поэтому оно не "соединяет" числа

// 5
const div5 = document.querySelector(".div5");
const e2 = 3;
const f2 = 0;

console.log(e2*f2);
div5.innerHTML += '<p>' + e2/f2 + '</p>';

// 6
const div6 = document.querySelector(".div6");
const e3 = 3;
const f3 = 'Hello';

console.log(e3+f3);
div6.innerHTML += '<p>' +(e3+f3)+ '</p>';

// 7 
const div7 = document.querySelector(".div7");
const e4 = 3;
const f4 = 'Hello';

console.log(e4*f4);
div7.innerHTML += '<p>' + (e4*f4) + '</p>';

// 8 
const div8 = document.querySelector(".div8");
const input8 = document.querySelector("#text");
const btn8 = document.querySelector(".btn8");

btn8.addEventListener("click", btn8Function);
function btn8Function() {
    div8.innerHTML += '<p>' + input8.value + '</p>';
}

// 9 
const div9 = document.querySelector(".div9");
const input9 = document.querySelector("#password");
const btn9 = document.querySelector(".btn9");
const check = document.querySelector("#forPassword");

check.addEventListener("click", () => {
    if (input9.type === "password") 
        {
            input9.type = "text";
        } 
    else 
        {
            input9.type = "password";
        }
})

btn9.addEventListener("click", () => {
    div9.innerHTML += '<p>' + input9.value + '</p>';
    input9.value = "";
} )

// 10
const div10 = document.querySelector(".div10");
const input10 = document.querySelector("#number");
const btn10 = document.querySelector(".btn10");

btn10.addEventListener("click", () => {
    div10.innerHTML += '<p>' + (input10.value*20) + '</p>';
})

// 11
const div11 = document.querySelector(".div11");
const input11 = document.querySelector("#text11");
const btn11 = document.querySelector(".btn11");

btn11.addEventListener("click", () => {
    div11.innerHTML += '<p>' + (input11.value) + ' 55' + '</p>'; 
})
// Я на самом деле плохо поняла задание, как мне кажется, "В этой задаче мы не приводим к числу полученное
// из input.", означает ли это что инпут не number а именно text?

// 12
const div12 = document.querySelector(".div12");
const inputName = document.querySelector("#name");
const inputSurname = document.querySelector("#surname");
let helloNameSurname = 'Hello ';
const btn12 = document.querySelector(".btn12");

btn12.addEventListener("click", () => {
    div12.innerHTML += '<p>' + helloNameSurname + inputName.value + ' ' + inputSurname.value + '</p>';
})

// 13
const div13 = document.querySelector(".div13");
let input13_1 = document.querySelector("#input13_1");
let input13_2 = document.querySelector("#input13_2");
const btn13 = document.querySelector(".btn13");

btn13.addEventListener("click", () => {
    div13.innerHTML += '<p>' + (+input13_1.value + +input13_2.value) + '</p>';
})

// Честно сказать, мне кажется что я не так поняла задание; 
// При нажатии кнопки13, в переменную input13_1/2  кладется значение что ввел пользователь, скрипт преобразовывает это в number (с помощью модификатора +), суммирует это с двух инпутов и выдает пользователю, я правильно поняла?
// Просто, эта строка: "Функция получает из input.i-13-1 и .i-13-2 числа в переменные a, b." дает мне повод думать что я что-то не так делаю. Я могу прописать в let input value, но тогда в let будет пустое значение, потому что оно берется с "чистого" инпута. Хз короче, я туплю жоска.

// 14 

const div14 = document.querySelector(".div14");
const input14 = document.querySelector("#input14");
const btn14 = document.querySelector(".btn14");

btn14.addEventListener("click", () => {
    input14.value = 'Go';
})

// 15
const div15 = document.querySelector(".div15");
const btn15 = document.querySelector(".btn15");

btn15.addEventListener("click", () => {
    div15.setAttribute('style', 'border: 4px solid red; width: 40px; height: 40px;');
})

// 16 
const div16 = document.querySelector(".div16");
const input16_1 = document.querySelector("#input16_1");
const input16_2 = document.querySelector("#input16_2");
const btn16 = document.querySelector(".btn16");

btn16.addEventListener("click", () => {
    div16.innerHTML += '<p>' + (input16_1.value + input16_2.value) + '</p>';
})

// 17
const div17 = document.querySelector(".div17");
const input17 = document.querySelector("#input17");
const btn17 = document.querySelector(".btn17");

btn17.addEventListener("click", () => {
    console.log(+input17.value);
})

// 18 
const btn18 = document.querySelector(".btn18");

        function task18()    
        {
            const div18 = document.querySelector(".div18");
            let input18 = document.getElementById("input18");

            div18.innerHTML = '<p>' + (parseFloat(input18.value)) + '</p>'
        }       
    btn18.addEventListener("click", (task18));

// upd 3: Тут я допетрила что нужно записывать консты в функцию, но все равно как-то неуверенно себя ощущаю из-за этого. Ощущение что код "грязный", чи шо.

// 19
const btn19 = document.querySelector(".btn19");

        function task19() 
        {
            const div19 = document.querySelector(".div19");
            let input19_1 = document.getElementById("input19_1");
            let input19_2 = document.getElementById("input19_2");

            div19.innerHTML = '<p>' + (+input19_1.value + +input19_2.value) + '</p>';
        }
    btn19.addEventListener("click", (task19));

// 20
const btn20 = document.querySelector(".btn20");
let counter = 0;

btn20.addEventListener("click", () => {
    counter += 1;
    btn20.innerText = 'click on me ' + counter;
})
// Пыталась сделать "по правильному", но в итоге сделала как смогла =_=