$(document).ready(function(){

  var currentQuote = "";
  var currentAuthor = "";

  function getQuote(){
    $.ajax({
      url: 'https://andruxnet-random-famous-quotes.p.mashape.com/', 
      type: 'POST', 
      data: {}, 
      datatype: 'json',
      success: function(data) { 
        var response = JSON.parse(data); 
        currentQuote = response.quote;
        currentAuthor = response.author;
        UpdatePage();
      },
      error: function(err) { alert(err); },
        beforeSend: function(xhr) {
        xhr.setRequestHeader("X-Mashape-Authorization", " WWwGuEctFPmshchLCTShe3qHNtx1p1heEjKjsnURtAxZIEyXah"); 
      }
    });
  }

  function UpdatePage() {

    var _colors = [
      "#E9860E",
      "#68A563",
      "#E2625C",
      "#CF8D3D",
      "#703771",
      "#AE374C",
      "#3B4B95",
      "#7546A6",
      "#3E3E53",
      "#557DC7",
      "#B54D7E",
      "#D65042",
    ]
    var _color = _colors[Math.floor(Math.random() * _colors.length)]
    $("html body").animate({
      backgroundColor: _color
    }, 500);
    $("#twitter-btn").animate({
      backgroundColor: _color
    }, 500);
    $("#new-quote").animate({
      backgroundColor: _color
    }, 500);

    $('#quote-div').animate({'opacity': 0}, 0, function () {
      $('#quote-text').html('"' + currentQuote +'"');
      $('#author-text').html("- " + currentAuthor);
    }).animate({'opacity': 1}, 500);

  }


  $("#new-quote").click(function(){
    getQuote();
  });

  $("#twitter-btn").click(function(){

    var url = 'https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=' + encodeURIComponent('"' + currentQuote + '" ' + currentAuthor);
    window.open(url);

  });

  getQuote();
});
