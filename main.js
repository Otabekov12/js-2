var elResultHeading = document.querySelector('.heading');

alert ("Assalomu alaykum  sayyohlik xizmatining so'rovnomasiga xush kelibsiz" );

alert ("Borish-kelish samolyot bileti - $500" );

alert ("Mehmonxona to’lovi to’liq safar davomiyligi uchun - $250")

alert ("Muzey va ko’ngilochar joylar uchun - 120 yevro")

var userMoney = prompt("Qancha pulingiz borini so'mda tin-tiynigacha yozing!")

var minMoney = 8317489 ;


if ( userMoney >= minMoney ) {
	elResultHeading.textContent = 'Oq yo’l, Alisher !!!';
} else {
	elResultHeading.textContent = 'Alisher, ozgina sabr qilish kerak bo’lar ekan.';
}
