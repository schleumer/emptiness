$(function() {
  $("#words").typed({
    strings: [
      [
        "Você acorda de repente",
        "está sendo uma noite dificil",
        "você para um pouco",
        "e observa seu quarto",
        "ele está vázio",
        "está muito frio e escuro ^500",
        "e você está sozinho ^500",
        "não, isso não é um jogo,",
        "essa é a sua <span class=\"fading\">vida</span>"
      ].join("<br />"),
      "brincadeira, é só um teste de keyframes mesmo^1000."
    ],
    typeSpeed: 50,
    backDelay: 10000,
    loop: false,
    loopCount: false,
    contentType: 'html'
  });
});