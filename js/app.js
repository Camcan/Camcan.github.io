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
      $('#profile-img').show().css('display', 'flex')
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
      console.log("htmlString:", temp)
      return Mustache.render(temp, details)
      //WORKING
    })
   }

  var renderTemplate = function(htmlString, target) {
       console.log("We have a template:", template, "Some details:", details, "And a target:", target)
    var htmlString = loadHtmlString(template, details)
    
    $('#'+ target).html(htmlString)
  }

  var loadSection = function(section){
    console.log("Section name: " + section.name)
    var sectionTemp = loadHtmlString("section", section.details)
    contentsString= function(){
         console.log("Retrieving Contents... " )
      var contents = ""
      for (i in section.items) {
        var item = section.items[i] 
        console.log("This is an item: " + item)
        // contents = contents.concat(loadHtmlString("item", {"Heh"}))
      }
      return contents
    }
    var toRender = Mustache.render(sectionTemp, contentsString())
    $('#'+ section.name + " .contents").html(toRender)

  }

  var loadAll = function(sectionsObj){
    for (var key in sectionsObj){
         console.log("This is a section being loaded: " + key)
      loadSection(sectionsObj[key])
    }
  }
  // loadAll(sections)
  
  var reveal = function(altered, keys){
    var adjusted = false
    for(var key in keys) {
      key = keys[i]
      var secName = sections[key].name
      if (altered[key].display === false){
        $('#' + secName)
          .addClass('hidden')
        sections[key].display = false
      } else {
        adjusted = true
        $('#' + secName)
          .removeClass('hidden')
        sections[key].display = true
      }
      if (adjusted == true){
        $('html, body')
          .animate({
            scrollTop: $('#' + secName).offset().top 
        }, 1500);
      }
    }
  }

  $('#portfolio-link')
    .click(function(){
      var allPortfolio = function(){
        var toReturn = false
        for (var key in sections) {
          if (key !== 'EDA' && sections[key].display == false){
            toReturn = true 
          } 
        }
        return toReturn
      }()
      console.log("It's " + allPortfolio)
      for (var key in sections) {
        console.log("Opening portfolio")
        if(key !== 'EDA'){
          console.log("Not EDA")
          sections[key].display = allPortfolio
        }
      }
      reveal(sections)
    })

  for (var key in sections) {
     createClickEvent(key, [key])
  }
  createClickEvent('portfolio', ["js", "RpR"])

  function createClickEvent(target, keys){
    $('#' + target + '-link').on('click', function(){
  
      var toAdjust = sections
      function adjust(obj){
        for(var i in keys) {
          var key = keys[i]
          console.log(sections[key].display)
          var oldVal = sections[key].display
          obj[key].display =! oldVal
        if (i = keys.length) {
        console.log("OOOORLO") 
            return toAdjust
          }
        }
      }
      reveal(adjust(toAdjust),  keys)
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
  $('#CV-lb-btn')
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




