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
    setBackgroundColor : function() {
        var index = Math.floor(Math.random()*blockrContainer.options.colors.length);
        document.getElementsByClassName("adblocker-overlay")[0].style.backgroundColor = blockrContainer.options.colors[index];
    },


    /**
     * Creates the basic dom element of the overlay and returns its value.
     *
     * @returns {*}
     */
    getText: function() {
        return blockrContainer.buildDomElement("<div class='adblocker-overlay'>" +
        "<span class='close-cross' data-target='adblocker-overlay'></span>" +
        "<h1 class='center'><img width='100' height='100' src='palm1.svg' id='adblocker-icon'></h1>" +
        "<h1 class='center' id='adblocker-title'></h1> " +
        "<p class='center' id='adblocker-caption'></p>" +
        "</div>")
    },


    /**
     * Append the appropriate title and captions from the options attributes.
     *
     */
    appendText : function() {
        if (!document.getElementById("ad-blockr")) {
            //Cache the body.
            var body = document.getElementsByTagName("body")[0];

            //Append main text to the body.
            body.style.display = "none";
            body.appendChild(blockrContainer.getText());

            //Append title and captions.
            document.getElementById("adblocker-title").innerHTML = blockrContainer.options.title;
            document.getElementById("adblocker-caption").innerHTML = blockrContainer.options.caption;

            //Fade in the container.
            blockrContainer.fadeIn(body);
        }
    },


    /**
     * Close the overlay panel when clicked on the cross button.
     *
     */
    closePanel : function() {
        var closeCross = document.querySelector(".adblocker-overlay .close-cross"),
            overlay = document.getElementsByClassName("adblocker-overlay")[0];

        closeCross.onclick = function() {
            if (this.dataset.target === "adblocker-overlay") {
                var self = this;

                blockrContainer.fadeOut(overlay);
            }
        };
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
            document.querySelector(".adblocker-overlay .close-cross").style.display = "block";
            blockrContainer.closePanel();
        }
    },


    //Courtesy of http://stackoverflow.com/a/6121270
    fadeIn: function(element) {
        var op = 0.1;  // initial opacity
        element.style.display = 'block';
        var timer = setInterval(function () {
            if (op >= 1){
                clearInterval(timer);
            }
            element.style.opacity = op;
            element.style.filter = 'alpha(opacity=' + op * 100 + ")";
            op += op * 0.1;
        }, 10);
    },


    //Courtesy of http://stackoverflow.com/a/6121270
    fadeOut: function(element, callback) {
        var op = 1,
            timer = setInterval(function () {
                if (op <= 0.1){
                    clearInterval(timer);
                    element.style.display = 'none';
                }
                element.style.opacity = op;
                element.style.filter = 'alpha(opacity=' + op * 100 + ")";
                op -= op * 0.1;
            }, 10);

        callback();
    },


    //http://stackoverflow.com/a/814649
    buildDomElement: function (htmlStr) {
        var frag = document.createDocumentFragment(),
            temp = document.createElement('div');
        temp.innerHTML = htmlStr;
        while (temp.firstChild) {
            frag.appendChild(temp.firstChild);
        }
        return frag;
    },


    /**
     * Register all functions for outside calling.
     *
     * @param options
     */
    init: function(options) {
        if (options) {
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
