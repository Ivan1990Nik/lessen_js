/* $(function () {
  $('.menuBurger').on('click', function () {
    $('.menu').slideToggle(200, function () {
      if ($(this).css('display') === 'none') {
        $(this).removeAttr('style');
      }
    });
  });
}); */


const word0 = "Wassup"
const wordTranslition0 = "здорова"

const word1 = "Bye"
const wordTranslition1 = "пока"

const word2 = "Programmer"
const wordTranslition2 = "программист"


let wordsCount = 3;

const finishMessageGood = "молодец"
const finishMessage = "неудачник"

let correctAnswersCount = 0;

let correctAnswersMinPercent = 50;

const userAnswer0 = prompt(word0)
alert(userAnswer0 === wordTranslition0);
if (userAnswer0 === wordTranslition0) {
  correctAnswersCount = correctAnswersCount + 1;
}

const userAnswer1 = prompt(word1)
alert(userAnswer1 === wordTranslition1);
if (userAnswer1 === wordTranslition1) {
  correctAnswersCount = correctAnswersCount + 1;
}

const userAnswer2 = prompt(word2)
alert(userAnswer2 === wordTranslition2);
if (userAnswer2 === wordTranslition2) {
  correctAnswersCount = correctAnswersCount + 1;
}

let correctAnswersPercent = correctAnswersCount / wordsCount * 100;

if (correctAnswersPercent > correctAnswersMinPercent ) {
  alert (finishMessageGood)
} else {
  alert (finishMessage)
}

























/* 
const article1Title = "experts Warn of Ransomware";
const article1Category1Title = "Cyber";
const articl1PartnershipUrl = null
const articl1PartnershipTitle = "Институт SANS"
const article1Category2Title = "Malware";
const article1Description = "Lorem ipsum dolor sit amet consectetur adipisicing elit.Error corporis non reprehenderit illum consequatur pariatur magni omnis nostrum officia incidunt.Iusto maiores atque ducimus sapiente.Beatae ea nulla labore culpa.";
const isArtical1PartnershipPublication = false;
const articl1PublicationDate = "Nov 07.2014"
const articl1ImageUrl = "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhlIxxfhgvEbEYDG3wHQ2eKqzhAqQ6QYBSgpg5F4fNXxf3N_OUK6wVpDby0mrHMMk89hVFAbePc8wJo_yt-NyNLTIexlKrKZ5e1vPOUQwWbzCgixXsOzFkD6-cTfHIh0ExIj-yeH0DoVcyLlWxNgyft-L_BWAyjZgJ6JSRzVVM7ncNvc0nDAUiGvO2F9PGu/s728-rw-e365/ms.png"




const article2Title = "experts Warn of Ransomware";
const article2PublicationTitle = "Nov 07.2014";
const article2Category1Title = "Cyber";
const article2Category2Title = "Malware";
const articl2PartnershipUrl = "https://thehackernews.uk/netsec-2024-sans-2"
const articl2PartnershipTitle = "🪐 Институт SANS"
const articl2PublicationDate = null
const isArtical2PartnershipPublication = true;
const article2Description = "Lorem ipsum dolor sit amet consectetur adipisicing elit.Error corporis non reprehenderit illum consequatur pariatur magni omnis nostrum officia incidunt.Iusto maiores atque ducimus sapiente.Beatae ea nulla labore culpa.";
const articl2ImageUrl = "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEje0lWT5FYYzNQnVockdk1Qi0mOVU7eB18sCSs5myIa1bh9-_kvxcc99hGZUyCAMiua4RT-nViXwpaNQAND1WPmoqqqWUfW85r8x-3PMzm1EHajUW8rQTDC9C7a_54drmTdaAx0nRujIEGpbq_8ORZgc1vUNtpuDB9jVh6tFpdJlSHEfYf_fD_hVNyuAVjv/s728-rw-e365/chrome.png"

 */
document.write("<h1>", article1Title, "</h1>")
document.write('<img  src="', articl1ImageUrl, '"/>')
document.write("<p>", articl1PublicationDate, "</p>")
document.write("<p>", article1Category1Title, " / ", article1Category2Title, "</p>")
document.write("<p>", article1Description, "</p>")

document.write('<hr/>')

document.write("<h1>", article2Title, "</h1>")
document.write('<img  src="', articl2ImageUrl, '"/>')
document.write('<p><a href="', articl2PartnershipUrl, '">', articl2PartnershipTitle, '</a></p>')
document.write("<p>", article2Category1Title, " / ", article2Category2Title, "</p>")
document.write("<p>", article2Description, "</p>")

document.write('<hr/>')

