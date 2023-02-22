// ;
let count=0;
function increment(){
    count=count+1
    document.getElementById('counterId').innerText=count
}

function save(){
document.getElementById('previousCount').textContent += count + ' - ';
document.getElementById('counterId').innerText=0;
count=0
}