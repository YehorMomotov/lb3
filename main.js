const need = document.getElementsByTagName("tr"),
  tbody = document.getElementsByTagName("tbody");
  
const defineMax = () => {
  const arrMax = [];
  const arrMin = [];
  for (let i = 1; i < need.length; i++) {
    arrMax.push(Number(need[i].children[3].innerHTML));
  }
  for (let i = 1; i < need.length; i++) {
    if (
      need[i].children[5].innerHTML === " " ||
      !need[i].children[5].innerHTML
    ) {
    } else {
      arrMin.push(Number(need[i].children[5].innerHTML));
    }
  }

  const max = Math.max.apply(null, arrMax);
  const min = Math.min.apply(null, arrMin);
  let result = [0, 0];
  for (let i = 1; i < need.length; i++) {
    if (need[i].children[3].innerHTML == max) {
      result[1] = i;
    }
    if (need[i].children[5].innerHTML == min) {
      result[0] = i;
    }
  }
  return result;
};

const printMax = () => {
  const index = defineMax();
  const min = need[index[0]].innerHTML;
  const max = need[index[1]].innerHTML;
  tbody[0].innerHTML = need[0].innerHTML;
  tbody[0].innerHTML += max;
  tbody[0].innerHTML += min;
  document.body.style.display = "block";
};

printMax();
