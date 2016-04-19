$(window).load(function() {
  $("#page-overlay").delay(800).fadeOut("slow")
})
$(document).ready(function(){
  

  var title = "//> Campbell_Hawkess" 
  var i = 0
  var isTag = true
  var text = ""

  function typeText(elementId, string, start, callback) {
    if (string) {
      var text = string.slice(0, ++start)

      document.getElementById(elementId).innerHTML = "<h2>" + text + "</h2>"
      
      if (text === string) return 
      
      var char = string.slice(-1)
      
      if( char === text.slice(-1)) {
        isTag = false
      }
      if (isTag === false) {
        return callback()
      }

      setTimeout(typeText, 140, elementId, string, start, callback)
    }
  }

  var showAll = function(){
      $('#return').show()
      $('#content').fadeIn()
  }

  typeText('typed-title', title, 0, showAll)

  for(var key in sections){
    loadSection(sections[key])
  }

  var sections = {
    EDA: {
      display: false,
      name: "EDA",
      items: [
        {id:"1st Item",
        img: "img/Dev-Academy-Flag.png",
        }
      ],
      details: {}
    },
    RoR: {
      display: false,
      name: 'RoR-portfolio',
      items: [
        {},
      ],
      details: {},
    },
    js: {
      display: false,
      name: 'js-portfolio',
      items: [
        {},
      ],
      details: {},
    }
  }

  var addNewClass = function(elementId, newClass) {
    $('#'+elementId).addClass(newClass)
  }

  var loadHtmlString = function(template, details){
    $.get(("partials/" + template + '.html'), function(temp) {
      return Mustache.render(temp, details)
    })
   }

  var loadTemplate = function(template, details, target) {
    var htmlString = loadHtmlString(template, details)

    $('#'+ target).html(htmlString)
  }

  var loadSection = function(section){
    loadTemplate("section", section.details, section.name)
    function contentsString(){
      var contents = ""
      for (i in section.items) {
        var item = item[i] 
        contents.concat(loadHtmlString("item", item.details))
      }
      return contents
    }
    $('#'+ section.name + " .contents").html(contentsString)

  }

  var loadAll = function(sectionsObj){
    for (var key in sectionsObj){
      loadSection(sectionsObj[key])
    }
  }
  loadAll(sections)
  
  var reveal = function(sections){
    for (key in sections) {
      if (sections[key].display === false){
        $('#' + sections[key].name).fadeOut()
      } else {
        $('#' + sections[key].name).fadeIn()
      }
    }
  }

  $('#portfolio-link')
    .click(function(){
      var allPortfolio = function(){
        var toReturn = false
        for (var key in sections) {
          if (sections[key].display == false){
            toReturn = true 
          } 
        }
        return toReturn
      }()
      for (var key in sections) {
        console.log("Opening portfolio")
        sections[key].display = allPortfolio
      }
      reveal(sections)
    })

  for (var key in sections) {
    createClickEvent(key)
  }

  function createClickEvent(key){
    $('#' + key + '-link').on('click', function(){
      var toToggle = sections[key]
      console.log(toToggle.name + " clicked")
      var display =! toToggle.display
      console.log(display)
      sections[key].display = display
     
      reveal(sections)

    })
  }





//==================================================

  $('#blerb')
    .mousemove(function(e){
      var moveX = (-(e.pageX)/ 80)
      $(this).css('background-position', moveX + 'px')
    })
  $('#contact-btn')
    .click(function(event){
      event.preventDefault()
      $('html, body').animate({
        scrollTop: $('#contact').offset().top
      }, 2000);
    })
  $('#CV-btn')
    .click(function(event){
      event.preventDefault()
      $('#CV-lightbox').css('visibility', 'visible')
      $('#page-overlay').css('background', 'rgba(0,0,0,0.8)').fadeIn('slow')
      $(document)
        .mouseup(function (e){
          var lightbox = $('#CV-lightbox iframe'); 
          if (!lightbox.is(e.target)) {
            $('#page-overlay').fadeOut('slow');
          }
        })
    })  
});




