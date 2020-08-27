"use strict";
var $selectLotto = document.querySelector('.select-lotto');
var $lotto = document.querySelector('.lotto');
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
    var $lottoList = document.createElement('li');
    $lottoList.setAttribute('id', 'lotto-number');
    var $lottoNumber = document.createTextNode("" + lotto);
    $lottoList.appendChild($lottoNumber);
    $lotto !== null && $lotto.appendChild($lottoList);
};
$selectLotto !== null && $selectLotto.addEventListener('click', function (e) {
    var target = e.target;
    var $removeContainer = document.getElementById('lotto-number');
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
    for (var i = 0; i < +target.id; i++) {
        draw();
    }
});
