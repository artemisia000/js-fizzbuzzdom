//genera boxes

const boxes = document.querySelector('.boxes');


for (let i = 1; i <= 100; i++) {
 
    if (i % 3 == 0 && i % 5 == 0) {
                square = `<div class="box box-fizzbuzz">fizzbuz</div>`;
            }
        
            else if (i % 3 == 0) {
                square = `<div class="box box-fizz">fizz</div>`;
            }
        
            else if (i % 5 == 0) {
                square = `<div class="box box-buzz">buzz</div>`;
            }
        
            else {
                square = `<div class="box box-null"> ${i} </div>`;
            }

            boxes.innerHTML += square;

}












