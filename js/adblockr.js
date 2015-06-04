var blockrContainer = {
    options: {
        colors: ["#F19A2A", "#F2B635", "#00CAFF", "#00A0E6", "#F25648"],
        title: "You are using an adblocker!",
        caption: "Thanks for making the countless sleepless developments nights made completely worthless.",
        aggressive: false
    },

    setBackgroundColor : function() {
        var index = Math.floor(Math.random()*blockrContainer.options.colors.length);
        $(".adblocker-overlay").css("background-color", blockrContainer.options.colors[index]);
    },

    getText: "<div class='adblocker-overlay'>" +
        "<span class='close-cross' data-target='adblocker-overlay'></span>" +
        "<h1 id='adblocker-title'> <img width='100' height='100' src='palm1.svg' id='adblocker-icon'><br></h1> " +
        "<p id='adblocker-caption'></p>" +
        "</div>",

    appendText : function() {
        if (document.getElementById("ad-blockr") != undefined) {
            $("body").hide().append(blockrContainer.getText).fadeIn();
            $("#adblocker-title").append(blockrContainer.options.title);
            $("#adblocker-caption").text(blockrContainer.options.caption);
        }
    },

    closePanel : function() {
        $(".close-cross").on("click", function() {
            if ($(this).data("target") === "adblocker-overlay") {
                $(".adblocker-overlay").fadeOut(300, function() {
                    $(this).remove();
                });
            }
        })
    },

    aggressive : function(value) {
        if(!value) {
            $(".adblocker-overlay .close-cross").show();
            blockrContainer.closePanel();
        }
    },

    init: function(options) {
        if (options) {
            console.log(options);

            for(var key in options) {
                if(blockrContainer.options.hasOwnProperty(key)) {
                    blockrContainer.options[key] = options[key];
                }
            }
        }

        blockrContainer.appendText();
        blockrContainer.setBackgroundColor();
        blockrContainer.aggressive(blockrContainer.options.aggressive);
    }
};
