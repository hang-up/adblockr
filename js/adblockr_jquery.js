var blockrContainer = {

    options: {
        colors: ["#F19A2A", "#F2B635", "#00CAFF", "#00A0E6", "#F25648"],
        title: "You are using an adblocker!",
        caption: "Thanks for making the countless sleepless developments nights completely worthless.",
        aggressive: false
    },


    /**
     * Sets the background color based on the colors array passed in the options.
     *
     */
    setBackgroundColor: function() {
        var index = Math.floor(Math.random() * blockrContainer.options.colors.length);
        $(".adblocker-overlay").css("background-color", blockrContainer.options.colors[index]);
    },


    /**
     * Creates the basic dom element of the overlay and returns its value.
     *
     * @returns {*}
     */
    getText: "<div class='adblocker-overlay'>" +
        "<span class='close-cross' data-target='adblocker-overlay'></span>" +
        "<h1 class='center'><img width='100' height='100' src='palm1.svg' id='adblocker-icon'></h1>" +
        "<h1 class='center' id='adblocker-title'></h1> " +
        "<p class='center' id='adblocker-caption'></p>",


    /**
     * Append the appropriate title and captions from the options attributes.
     *
     */
    appendText: function() {
        if (!document.getElementById("ad-blockr"))
        {
            $("body").hide().append(blockrContainer.getText).fadeIn();
            $("#adblocker-title").append(blockrContainer.options.title);
            $("#adblocker-caption").text(blockrContainer.options.caption);
        }
    },

    /**
     * Close the overlay panel when clicked on the cross button.
     *
     */
    closePanel: function() {
        $(".close-cross").on("click", function() {
            "adblocker-overlay" === $(this).data("target") && $(".adblocker-overlay").fadeOut(300, function() {
                $(this).remove();
            });
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
            $(".close-cross").show();
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
