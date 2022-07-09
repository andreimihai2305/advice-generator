const nextAdvice = document.getElementById("myImg");
const p = document.getElementById("adviceNumber");
const h1 = document.getElementById('advice');

async function getAdvice() {
    let promise = await fetch("https://api.adviceslip.com/advice");
    let res = await promise;
    let data = await res.json();

    const {advice, id} = data.slip;
    h1.innerHTML = advice;
    p.innerHTML = `Advice #${id}`;

}
nextAdvice.addEventListener('click', getAdvice);