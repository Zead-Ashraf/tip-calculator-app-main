let amount = document.getElementById("amount"),
  tipAmount = 0,
  custom = document.getElementById("custom"),
  numberPeople = document.getElementById("people"),
  tip = document.getElementById("tipPrice"),
  total = document.getElementById("totalPrice"),
  deleteItems = document.getElementById("reset"),
  regex = new RegExp("^\d+$");

/*********************** warning paragraph ************************************/

let warnningAmountP = document.getElementById("Bill-warnning");
let warnningNopP = document.getElementById("nop-warnning");
let warnningtipP = document.getElementById("select-tip-warnning");

/**************************** event listeners ***************************************/

document.getElementById("amount").addEventListener("input", Bill);
document.getElementById("people").addEventListener("input", nop);

//thanks for my dad to help me do this math form ^_^

document.getElementById("t5").addEventListener("click",function() {
  tipAmount = (5 / 100) * amount.value;
  warnningtipP.innerHTML = "";
  main();
})

document.getElementById("t10").addEventListener("click",function() {
  tipAmount = (10 / 100) * amount.value;
  warnningtipP.innerHTML = "";
  main();
})

document.getElementById("t15").addEventListener("click",function() {
  tipAmount = (15 / 100) * amount.value;
  warnningtipP.innerHTML = "";
  main();
})

document.getElementById("t25").addEventListener("click",function() {
  tipAmount = (25 / 100) * amount.value;
  warnningtipP.innerHTML = "";
  main();
})

document.getElementById("t50").addEventListener("click",function() {
  tipAmount = (50 / 100) * amount.value;
  warnningtipP.innerHTML = "";
  main();
})

document.getElementById("custom").addEventListener("input",function() {
  if (/^\d+$/.test(custom.value)) {
    tipAmount = custom.value;
    warnningtipP.innerHTML = "";
    main();
  }

  else {
    warnningtipP.innerHTML = "Please write The valid value"
  }
})

document.getElementById("reset").addEventListener("click", reset)

/************************************ functions needed ***************************************/

function main() {
  tip.innerHTML = Number(tipAmount)
  total.innerHTML = (Number(tipAmount) * Number(numberPeople.value)) + Number(amount.value)

}

function Bill () {
  if (regex.test(amount.value) || amount.value >= 0) {
    warnningAmountP.innerHTML = "";
    main()
  }

  else if (!regex.test(amount.value) || amount.value <= 0) {
    warnningAmountP.innerHTML = "Please write The valid value"
  }
}

function nop () {
  if (regex.test(numberPeople.value) || numberPeople.value >= 0) {
    warnningNopP.innerHTML = "";
    main()
  }

  else if (!regex.test(numberPeople.value) || numberPeople.value <= 0) {
    warnningNopP.innerHTML = "Please write The valid value"
  }
}

function reset () {
  tipAmount = 0;
  numberPeople.value = "";
  amount.value = "";
  custom.value = "";
  tip.innerHTML = "$0.00"
  total.innerHTML = "$0.00"
}