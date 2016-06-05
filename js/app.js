$(window).load(function() {
  $("#page-overlay").delay(800).fadeOut("slow")
})
$(document).ready(function(){
  

  var title = "~$ Campbell_Hawkess" 
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
      $('#return')
        .show()
      $('#profile-img')
        .show()
        .css('display', 'inline-block')
      $('#content')
        .fadeIn()
  }

  typeText('typed-title', title, 0, showAll)

  for(var key in sections){
    loadSection(sections[key])
  }

  var sections = {
    web:{
      display: false,
      name: "web-portfolio",
      items: [
        {
          title: 'Old Personal Site',
          img: 'img/old-site-screenshot.png',
          link: '/in-color.html'}]
    },
    RoR: {
      display: false,
      name: 'RoR-portfolio',
      items: [
        {
          title: '',
          img: ''
        },
      ],
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

  var loadHtmlString = function(template){
    $.get(("partials/" + template + '.html'), function(temp) {
      console.log("htmlString:", temp)
      return temp
      //WORKING
    })
   }

  var renderTemplate = function(htmlString, target) {
       console.log("We have a template:", template, "Some details:", details, "And a target:", target)
    var htmlString = loadHtmlString(template, details)
    $('#'+ target).html(htmlString)
  }

  loadSection = function(section){
    console.log("Section name: " + section.name)
    console.log("Section items: " + section.items)
    var tempString = ""
    var loadTemplate = function(callback){

      tempString = loadHtmlString('section')
      callback(tempString, {contents: section.items})
    }
    loadTemplate(Mustache.render) 
    $('#'+ section.name + " .contents").html(sectionTemp())
  }

  var loadAll = function(sectionsObj){
    for (var key in sectionsObj){
         console.log("This is a section being loaded: " + key)
      loadSection(sectionsObj['web'])
    }
  }
  // loadAll({web:{}})
  
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
            console.log(secName)
        $('html, body')
          .animate({
            scrollTop: $('#' + secName).offset().top 
        }, 1500);
      }
    }
  }


  for (var key in sections) {
     createClickEvent(key, [key])
  }
  // createClickEvent('portfolio', ["js", "RoR", "web"])

  function createClickEvent(target, keys){
    $('#' + target + '-link').on('click', function(){
      var toAdjust = sections
      function adjust(obj){
        for(var i in keys) {
          var key = keys[i]
          console.log(sections[key].display)
          var oldVal = sections[key].display
          obj[key].display =! oldVal
          console.log(i)
          console.log(keys.length-1)
        }
      }
      adjust(toAdjust)
      reveal(toAdjust,  keys)
    })
  }

  $('#EDA-link').on('click', function(){
    var eda = $('#EDA')
    if (eda.hasClass('hidden')) {
      eda.removeClass('hidden')
    } else {
      eda.addClass('hidden')
    }
  })





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




