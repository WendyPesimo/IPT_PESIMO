
function add() {
const num1 = parseFloat(document.getElementById('num1').value);
const num2 = parseFloat(document.getElementById('num2').value);
const result = num1 + num2;
       


document.getElementById('result').textContent = `Result: ${result}`;
     }



document.getElementById('toggleTohhh').addEventListener('click', () => {
         document.body.classList.toggle('dark-mode');
});

