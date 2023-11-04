let rastgeleSayi = Math.ceil(Math.random() * 20);
let mesaj = document.querySelector(".msg");

let skor = 10;
let enYüksekSkor = localStorage.getItem("top-score") || 0

document.querySelector(".top-score").textContent = enYüksekSkor

document.querySelector(".check").addEventListener("click", () => {
  const tahmin = document.querySelector(".guess").value;

  if (!tahmin) {
    mesaj.textContent = "Lütfen bir sayi giriniz";
  } else if (tahmin == rastgeleSayi) {
    mesaj.textContent = "Tebrikler Bildiniz👏";
    document.querySelector("body").style.backgroundColor = "green";
    document.querySelector(".number").textContent = rastgeleSayi;
    if(skor>enYüksekSkor){
          localStorage.setItem('top-score',skor)

          enYüksekSkor = skor
          document.querySelector('.top-score').textContent = enYüksekSkor
    }

  } else {
    if (skor > 1) {
      skor--;
      document.querySelector(".score").textContent = skor;
      tahmin < rastgeleSayi ? (mesaj.textContent = "Arttır👆") : "Azalt👇";
    } else {
      mesaj.textContent = "Oyunu Kaybettiniz😑";
      document.querySelector(".score").textContent = 0;
      document.querySelector("body").style.backgroundColor = "red";
    }
  }
});





document.querySelector('.again').onclick = ()=>{

    document.querySelector('body').style.backgroundColor ="#2d3436"
    rastgeleSayi =  Math.ceil(Math.random() * 20);
    skor = 10
    document.querySelector('.score').textContent= skor
    document.querySelector('.number').textContent = "?"
    document.querySelector('.guess').value =''
    mesaj.textContent = 'Oyun yeni oyuncu için başlıyor...'

 }


 document.addEventListener("keydown",function(event){

    if(event.key === "Enter"){

        document.querySelector(".check").click()
    }
 })



document.querySelector('.check').addEventListener('click',()=>{

    tahmin = document.querySelector(".guess").value
    const tahminSayi = parseInt(tahmin)

    if(tahminSayi>=1 && tahminSayi<=20 && !isNaN(tahminSayi)){


    }else{
             mesaj.textContent = "Geçersiz sayi girdiniz. 1- 20 arası sayi giriniz"
             skor++
    }



})