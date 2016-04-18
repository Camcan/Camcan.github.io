$(window).load(function() {
  $("#page-overlay").delay(800).fadeOut("slow")
})
$(document).ready(function(){
  

  var title = "//> Campbell_Hawkess" 
  var i = 0
  var isTag = true
  var text = ""

  function typeText(elementId, string, start, callback) {
      var typeText = arguments.callee
    if (string) {

      console.log("Run: " + start)
      var text = string.slice(0, ++start)

      document.getElementById(elementId).innerHTML = "<h2>" + text + "</h2>"
      
      if (text === string) return 
      
      var char = string.slice(-1)
      
      if( char === text.slice(-1)) {
        console.log("I'm False")
        isTag = false
      }
      if (isTag === false) return callback()

      setTimeout(typeText, 140, elementId, string, start, callback)
    }
  }
  
  typeText("typed-title", title, 0,
    function(){
      $("#return").show()
      $("#content").fadeIn()
      console.log("done")
    }
  )()

  // for(var key in sections){
  //   loadSection(sections[key])
  // }

  // var sections = {
  //   RoR: {
  //     display: false,
  //     name: "RoR-portfolio",
  //     items: [
  //       [],
  //       [],
  //       []
  //     ],
  //     details: {},
  //   },
  //   js: {
  //     display: false,
  //     name: "js-portfolio",
  //     items: [
  //       {
  //         id: "first-photo",
  //         background: "image "

  //       },
  //       {
  //         id: "second-photo",
  //         // background: 
  //       },
        
  //     ],
  //     details: {},
  //   }
  // }

  // var addNewClass = function(elementId, newClass) {
  //   $("#"+elementId).addClass(newClass)
  // }

 
  // var loadTemplate = function(template, details) {
  //   $.get((template.name + '.html'), function(temp) {
  //     var htmlString = Mustache.render(temp, details);
  //     $('#'+ template.name).html(htmlString);
  //   })
  // }

  // var loadSection = function(section){
  //   loadTemplate(section.name, section.xtra)
  //   for (i in section.items) {
  //     var item = item[i] 
  //     getTemplateString("item", item.content)
  //   }
  // }
  
  // var toDisplay = {
  //   RoR: false,
  //   js: false
  // }

  // var sectionToggle = function(sections){
  //   for (key in sections) {
  //     if (sections.key.display === false){
  //       $('#' + sections.key.name).fadeOut()
  //     } else {
  //       $('#' + sections.key.name).fadeIn()
  //     }
  //   }
  // }

  // $('#portfolio-link')
  //   .onclick(function(){
  //     toDisplay = {
  //       RoR: true,
  //       js: true
  //     }
  //     sectionToggle(toDisplay)
  //   })
  //   $('#nodejs-link')
  //     .onClick(function(){
  //       if (toDisplay.js === true) {
  //         toDisplay.js = false
  //       } else {
  //         toDisplay.js = true
  //       }
  //       if (toDisplay.RoR === true) {
  //         toDiplay.RoR = false
  //       } 
  //       sectionToggle(toDisplay)
  //     })
  //   $('#RoR-link')
  //     .onClick(function(){
  //       if (toDisplay.RoR === true) {
  //         toDisplay.RoR = false
  //       } else {
  //         toDisplay.RoR = true
  //       }
  //       if (toDisplay.js === true) {
  //         toDiplay.js = false
  //       } 
  //       sectionToggle(toDisplay)
  //     })
  



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




