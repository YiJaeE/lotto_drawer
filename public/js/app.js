"use strict";
var $selectLotto = document.querySelector('.select-lotto');
var $lotto = document.querySelector('.lotto');
var render = function (lotto) {
    var $lottoList = document.createElement('li');
    $lottoList.setAttribute('id', 'lotto-list');
    lotto === null || lotto === void 0 ? void 0 : lotto.map(function (number) {
        var $lottoNumber = document.createElement('span');
        $lottoNumber.setAttribute('class', 'lotto-number');
        $lottoList.appendChild($lottoNumber);
        var $numberText = document.createTextNode("" + number);
        $lottoNumber.appendChild($numberText);
    });
    $lotto === null || $lotto === void 0 ? void 0 : $lotto.appendChild($lottoList);
};
var draw = function () {
    var lotto = [];
    var _loop_1 = function (i) {
        var num = Math.floor(Math.random() * 45) + 1;
        var duplicate = lotto.every(function (n) { return n !== num; });
        if (duplicate) {
            lotto.push(num);
        }
        else {
            i--;
        }
        lotto.sort(function (a, b) { return a - b; });
        out_i_1 = i;
    };
    var out_i_1;
    for (var i = 0; i < 6; i++) {
        _loop_1(i);
        i = out_i_1;
    }
    render(lotto);
};
var buttonClick = function (target) {
    if ($selectLotto) {
        var $button = $selectLotto.children;
        for (var i = 0; i < $button.length; i++) {
            if (target.id === $button[i].id) {
                $button[i].classList.add('button-click');
            }
            else {
                $button[i].classList.remove('button-click');
            }
        }
    }
};
var removeContainer = function () {
    var $removeContainer = document.getElementById('lotto-list');
    if ($removeContainer !== null && $lotto !== null) {
        var num = $lotto.children.length;
        while (num > 0) {
            for (var i = 0; i < $lotto.children.length; i++) {
                if ($lotto.children[i]) {
                    $lotto.removeChild($lotto.children[i]);
                }
            }
            num--;
        }
    }
};
var printNumber = function (e) {
    var target = e.target;
    buttonClick(target);
    removeContainer();
    for (var i = 0; i < +target.id; i++) {
        draw();
    }
};
$selectLotto === null || $selectLotto === void 0 ? void 0 : $selectLotto.addEventListener('click', printNumber);
