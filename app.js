var dice, item, rolls, total_rolls;

function randomInt(n) {
  // Return a random number from in [0, n[
  return Math.floor(Math.random()*n);
}

function randomMember(arr) {
  // Return a random member of the array
  return arr[randomInt(arr.length)]
}


dice = [1, 2, 3, 4, 5, 6];
rolls = [];


document.getElementById('button_roll').addEventListener('click', (event) => {
  rolls.forEach((item) => {
    let element_list = document.getElementById('list');
    element_list.innerText = randomMember(dice);
  });
  rolls.unshift(randomMember(dice));
  let element_total = document.getElementById('total');
  element_total.innerText = rolls.reduce((a,b) => a+b, 0);
  let new_ul = document.createElement('ul');
  new_ul.innerText = rolls;
  new_ul.style.backgroundColor = '#ff0000';

  element_total.appendChild(new_ul);
  total_rolls = rolls.reduce((a,b) => a+b, 0);
  if (total_rolls == 11) {
    let element_info = document.getElementById('info');
    element_info.innerText = 'You won';
  } else if (total_rolls > 11) {
    let element_info2 = document.getElementById('info');
    element_info2.innerText = 'You lose';
  } else {
    let element_info3 = document.getElementById('info');
    element_info3.innerText = 'Keep playing';
  }

});

document.getElementById('button_restart').addEventListener('click', (event) => {
  let element_list2 = document.getElementById('list');
  rolls = [];
  element_list2.replaceChildren();
  let element_total2 = document.getElementById('total');
  element_total2.innerText = '0';

});

document.getElementById('button_remove').addEventListener('click', (event) => {
  let element_total3 = document.getElementById('total');
  element_total3.innerText = rolls.reduce((a,b) => a+b, 0);
  let new_ul2 = document.createElement('ul');
  new_ul2.innerText = rolls;
  new_ul2.style.backgroundColor = '#ff0000';

  element_total3.appendChild(new_ul2);

});
[][0];