/**
 * Namespace responsible for holding the adblocker behaviour.
 *
 * @type {Object}
 */
var blockrContainer = {

  options: {
    colors: ["#F19A2A", "#F2B635", "#00CAFF", "#00A0E6", "#F25648"],
    title: "You are using an adblocker!",
    caption: "Thanks for making the countless sleepless developments nights completely worthless.",
    aggressive: false,
    mode: "overlay"
  },


/**
 * Sets the background color based on the colors array passed in the options.
 *
 * @return {[type]} [description]
 */
  setBackgroundColor: function() {
    var index = Math.floor(Math.random() * blockrContainer.options.colors.length);
    $(".adblocker").css("background-color", blockrContainer.options.colors[index]);
  },


  /**
  * Creates the basic dom element of the overlay and returns its value.
  *
  * @type {String}
  */
  overlayText: "<div class='adblocker adblocker-overlay white' id='adblocker-overlay'>" +
  "<span class='adblocker-close-cross' data-target='adblocker-overlay'></span>" +
  "<h1 class='center'><img width='100' height='100' src='palm1.svg' id='adblocker-icon'></h1>" +
  "<h1 class='center' id='adblocker-title'></h1> " +
  "<p class='center' id='adblocker-caption'></p>",


  /**
  * Creates the basic dom element of the banner and return its value.
  *
  * @type {String}
  */
  bannerText: "<div class='adblocker adblocker-banner white' id='adblocker-banner'>" +
  "<span class='adblocker-close-cross' data-target='adblocker-banner'></span>" +
  "<div class='adblocker-wrapper'>" +
  "<img width='80' height='80' src='palm1.svg' id='adblocker-icon' class='vertical-align'></h1>" +
  "<h1 id='adblocker-title'></h1>" +
  "<p id='adblocker-caption'></p>" +
  "</div>" +
  "</div>",


  /**
   * Append the appropriate title and captions from the options attributes.
   *
   * @return {[type]} [description]
   */
  appendText: function() {
    if (!document.getElementById("ad-blockr"))
    {
      $("body").hide().append(blockrContainer.switchMode()).fadeIn();
      $("#adblocker-title").append(blockrContainer.options.title);
      $("#adblocker-caption").text(blockrContainer.options.caption);
    }
  },


  /**
   * Returns the appropriate string depending on the mode keyword entered.
   * By default: mode is set to "overlay".
   *
   * @return {[type]} [description]
   */
  switchMode: function() {
    return (blockrContainer.options.mode === "overlay") ? blockrContainer.overlayText : blockrContainer.bannerText;
  },


  /**
   * Close the adblocker notification when clicked on the cross button.
   *
   * @return {[type]} [description]
   */
  closePanel: function() {
    $(".adblocker-close-cross").on("click", function() {
      $(this).data("target") === $(this).parent().attr("id") ? $(this).parent().fadeOut(300, function() {
        $(this).remove();
      }) : "" ;
    });
  },


  /**
  * Parameters that enables or disables the cross button.
  * If true, make it invisible.
  * If false, make it visible.
  *
  * @param value
  */
  aggressive : function(value) {
    if(!value) {
      $(".adblocker-close-cross").show();
      blockrContainer.closePanel();
    }
  },


  /**
  * Register all functions for outside calling.
  *
  * @param options
  */
  init: function(o) {
    if (o) {
      for (var e in o) blockrContainer.options.hasOwnProperty(e) && (blockrContainer.options[e] = o[e])
    }

    blockrContainer.appendText();
    blockrContainer.setBackgroundColor();
    blockrContainer.aggressive(blockrContainer.options.aggressive);
  }
};
