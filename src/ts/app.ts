const $selectLotto: Element | null = document.querySelector('.select-lotto');
const $lotto: Element | null = document.querySelector('.lotto');

const render: Function = <T> (lotto: Array<T>) => {
  const $lottoList = document.createElement('li');
  $lottoList.setAttribute('id', 'lotto-list');
  lotto?.map((number) => {
    const $lottoNumber = document.createElement('span');
    $lottoNumber.setAttribute('class', 'lotto-number');
    $lottoList.appendChild($lottoNumber);
    const $numberText = document.createTextNode(`${number}`);
    $lottoNumber.appendChild($numberText);
  })
  $lotto?.appendChild($lottoList);
}

const draw:Function = () => {
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
  render(lotto);
};

const printNumber: any = (e: Event) => {
  const target: HTMLElement = <HTMLElement>e.target;
  const $removeContainer = document.getElementById('lotto-list');
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
}

$selectLotto !== null && $selectLotto.addEventListener('click', printNumber);
