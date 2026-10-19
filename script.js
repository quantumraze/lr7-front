let style = document.createElement("style");

style.textContent = `
    * {
        box-sizing: border-box;
    }

    body {
        margin: 0;
        min-height: 100vh;
        font-family: Arial, sans-serif;
        background: #080d25;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 20px;
    }

    .container {
        width: 100%;
        max-width: 600px;
        padding: 30px;
        text-align: center;
        background: #101735;
        border: 2px solid #5b438e;
        border-radius: 20px;
        box-shadow: 0 0 30px #6e3fa0;
    }

    h1 {
        color: white;
        font-size: 28px;
    }

    p {
        color: #cfc6e8;
    }

    input {
        width: 100%;
        padding: 14px;
        margin: 20px 0;
        border: none;
        border-radius: 25px;
        background: #eee0ff;
        font-size: 17px;
        text-align: center;
        outline: none;
    }

    button {
        padding: 12px 30px;
        border: none;
        border-radius: 25px;
        background: #8954d0;
        color: white;
        font-size: 17px;
        cursor: pointer;
    }

    button:hover {
        background: #a66df0;
    }

    .ball {
        width: 350px;
        height: 350px;
        max-width: 100%;
        margin: 30px auto;
        border-radius: 50%;
        background:
            radial-gradient(
                circle at 30% 25%,
                rgba(255,255,255,0.85),
                transparent 18%
            ),
            radial-gradient(
                circle at 70% 65%,
                #36b9d9,
                transparent 35%
            ),
            radial-gradient(
                circle at 35% 60%,
                #e35dbe,
                transparent 45%
            ),
            radial-gradient(
                circle at 60% 30%,
                #8a52da,
                #17122c 75%
            );

        border: 8px solid #151020;
        box-shadow:
            0 0 25px #ad69e8,
            inset 0 0 45px #000;

        display: flex;
        justify-content: center;
        align-items: center;
        transition: transform 0.5s;
    }

    .answer {
        color: white;
        font-size: 30px;
        font-weight: bold;
        text-shadow: 0 0 12px white;
        padding: 20px;
    }

    .shake {
        animation: shake 0.5s;
    }

    @keyframes shake {
        0% { transform: rotate(0deg); }
        25% { transform: rotate(10deg); }
        50% { transform: rotate(-10deg); }
        75% { transform: rotate(10deg); }
        100% { transform: rotate(0deg); }
    }

    .error {
        color: #ff7777;
        min-height: 20px;
    }

    @media (max-width: 480px) {
        .container {
            padding: 15px;
        }

        h1 {
            font-size: 22px;
        }

        .ball {
            width: 260px;
            height: 260px;
        }

        .answer {
            font-size: 23px;
        }
    }
`;

document.head.appendChild(style);

let container = document.createElement("div");
container.className = "container";
document.body.appendChild(container);

let title = document.createElement("h1");
title.textContent = "Магічна куля";
container.appendChild(title);

let description = document.createElement("p");
description.textContent = "Постав запитання та дізнайся відповідь!";
container.appendChild(description);

let input = document.createElement("input");
input.type = "text";
input.placeholder = "Введіть ваше запитання...";
input.maxLength = 150;
container.appendChild(input);

let button = document.createElement("button");
button.textContent = "Запитати кулю";
container.appendChild(button);

let = errordocument.createElement("p");
error.className = "error";
container.appendChild(error);

let ball = document.createElement("div");
ball.className = "ball";
container.appendChild(ball);

let answer = document.createElement("div");
answer.className = "answer";
answer.textContent = "?";
ball.appendChild(answer);


let answers = ["Так","Ні","Можливо","Без сумнівів","Скоріше за все","Запитай пізніше","Точно ні","Звичайно","Не можу сказати","Шанси високі"];


function askBall() {

    let question = input.value.trim();

    if (question === "") 
    {
        error.textContent = "Введіть запитання!";
        answer.textContent = "?";
        return;
    }

    if (question.length < 3) 
        {
        error.textContent ="Запитання повинно містити хоча б 3 символи!";
        answer.textContent = "?";
        return;
    }

    if (!/[а-яіїєґa-z]/i.test(question)) 
    {
        error.textContent = "Запитання повинно містити літери!";
        answer.textContent = "?";
        return;
    }

    error.textContent = "";

    let index = Math.floor(Math.random() * answers.length);

    ball.classList.remove("shake");
    void ball.offsetWidth;
    ball.classList.add("shake");

    answer.textContent = answers[index];
}

button.addEventListener("click", askBall);

input.addEventListener("keydown", function(event) 
{
    if (event.key === "Enter") 
    {
        askBall();
    }
});