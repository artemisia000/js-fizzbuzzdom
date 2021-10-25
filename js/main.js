//container boxes

const boxes = document.querySelector('.boxes');

//genera boxes

for (let i = 1; i <= 100; i++){
    boxes.innerHTML += `<div class="box box-${i}">${i}</div>`;
}

