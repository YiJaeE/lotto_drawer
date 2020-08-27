const $selectLotto: Element | null = document.querySelector('.select-lotto');
const $lotto: Element | null = document.querySelector('.lotto');

const draw = () => {
  const lotto = [];
  for (let i = 0; i < 6; i++) {
    const num = Math.floor(Math.random() * 45) + 1;
    const duplicate = lotto.every(n => n !== num);
    if (duplicate) {
      lotto.push(num);
    } else {
      i--;
    }
    lotto.sort((a, b) => a - b);
  }
  const $lottoList = document.createElement('li');
  $lottoList.setAttribute('id', 'lotto-number');
  const $lottoNumber = document.createTextNode(`${lotto}`);
  $lottoList.appendChild($lottoNumber);
  $lotto !== null && $lotto.appendChild($lottoList);
};

$selectLotto !== null && $selectLotto.addEventListener('click', (e: Event) => {
  const target: HTMLElement = <HTMLElement>e.target;
  const $removeContainer = document.getElementById('lotto-number');
  if ($removeContainer !== null && $lotto !== null) {
    let num = $lotto.children.length;
    while (num > 0) {
      for (let i = 0; i < $lotto.children.length; i++) {
        if ($lotto.children[i]) {
          $lotto.removeChild($lotto.children[i]);
        }
      }
      num--;
    }
  }
  for (let i = 0; i < +target.id; i++) {
    draw();
  }
});
