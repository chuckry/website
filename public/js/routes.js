page.base();
page('/',function(ctx) {
    if(ctx.init){
        $('.page').hide();
        $('#home').show();
        $('#home').css('opacity',1);
    }
    else showPage('home');
});
page('/:section', function (ctx) {
    var section = ctx.params.section.toLowerCase();
    if(ctx.init){
        $('.page').hide();
        $('#'+section).show();
        $('#'+section).css('opacity',1);  
    } 
    else showPage(section);
});
page();

$('.nav-link').click(function (evt) {
    var section = evt.target.textContent.toLowerCase();
    showPage(section.toLowerCase());
    if (section == 'home') {
      section = '';
      updateTweets();
      console.log("hit home"); 
    } 
      
    window.history.pushState(section,section,'/'+section);
    $('.nav-link').removeClass('nav-link-selected');
    $(this).addClass('nav-link-selected');
    console.log(section);
});

function showPage(section) {
    $('.page').stop().animate({opacity:0},500, function() {
        window.scrollTo(0,0);
        $('.page').hide();
        $('#'+section).show();
        $('#'+section).stop().animate({opacity:1},500);
    });
}


// $('.carousel').carousel({
//     interval: 4500
// });






var firstBtn = ["Network", "Collaborate", "Friendship"];
var secondBtn = ["Develop", "Code", "Innovation"];
var thirdBtn = ["Socialize", "Consume", "Brotherhood"];

function rotateTerm() {
  var ct = $("#rotate1").data("term") || 0;
  $("#rotate1").data("term", ct == firstBtn.length -1 ? 0 : ct + 1).text(firstBtn[ct]).fadeIn()
              .delay(3000).fadeOut(200, rotateTerm);
}
$(rotateTerm);

function rotateTerm2() {
  var ct = $("#rotate2").data("term") || 0;
  $("#rotate2").data("term", ct == secondBtn.length -1 ? 0 : ct + 1).text(secondBtn[ct]).fadeIn()
              .delay(3000).fadeOut(200, rotateTerm2);
}
$(rotateTerm2);

function rotateTerm3() {
  var ct = $("#rotate3").data("term") || 0;
  $("#rotate3").data("term", ct == thirdBtn.length -1 ? 0 : ct + 1).text(thirdBtn[ct]).fadeIn()
              .delay(3000).fadeOut(200, rotateTerm3);
}
$(rotateTerm3);

//twitter

  


var tweeets = [];
function updateTweets() {
  $.getJSON('twitter.php', 
      function(feeds) {                        
      // console.log(JSON.stringify(feeds));
      var count = (feeds.length > 5) ? 5 : feeds.length;
      var actualCount = 0;
      for(var i=0; i<count; i++) {
        while(feeds[actualCount].retweeted_status) {
          actualCount++;
        }
        tweeets.push("\"" + feeds[actualCount].text + "\"");
        console.log(feeds[actualCount].text);
        actualCount++;
      }                     
  });
  console.log("in update");
  console.log(tweeets);
}

function rotateTweets() {
  var ct = $("#tweetRotate").data("term") || 0;
  $("#tweetRotate").data("term", ct == tweeets.length -1 ? 0 : ct + 1).text(tweeets[ct]).fadeIn()
              .delay(3000).fadeOut(200, rotateTweets);
}
$(rotateTweets);