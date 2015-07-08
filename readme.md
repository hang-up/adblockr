# AdBlockr

AdBlockr is a javascript plugin used to detect if a user has any kind of ad blocker installed.

### Version
1.1.0

### Dependencies

Starting on 1.1.0 (July 07 2015), there are *** two*** versions of AdBlockr: 

`adblockr_jquery.js` (and its minified version `/js/min/adblockr_jquery.js`) which rely on jQuery.

`adblockr.js` (and `/js/min/adblockr.js`) which do **NOT** have any dependencies.




### Installation

```sh
<head>
    <link rel="stylesheet" href="adblockr.css">
    <script src="/js/ads.js"></script>
</head>

<body>
    <script src="/js/min/adblockr.js"></script>
</body>

<script>
    blockrContainer.init()
</script>
```


*Note that jQuery must be dropped in when using the jQuery version... Pretty obvious, but we never know* 
### Options

AdBlockr is currently extended with the following options: 


* colors [```array```] : specifies a list of colors
* title [```string```] : specify main text
* caption [```string```] : specify caption
* aggressive [```boolean```, ```false```] : true prevents the overlay to be closed. ```false``` by default.

```sh
blockrContainer.init({
    colors: ["#F19A2A", "#F2B635", "#F25648"],
    title: "You are using an adblocker!",
    caption: "Thanks for making the countless sleepless developments nights made completely worthless.",
    aggressive: false
});
```


### Contribution
Please, by all mean fork this project to make it even more awesome! A couple of things to be aware of:
* blockrContainer is the base object. Feel free to extend it.
* The jQuery version is much preferred when implementing new features. 
* Comment every new function at the beginning of its definition by following the current pattern. 
* Don't be shy commenting unclear parts of your code.
 
###TODO'S
* Turn setInterval into setTimeout IIFE
* Give the option to change the overlay into a banner (top, bottom)

License
----

MIT


**From [Hang-Up] in Montreal.**


[jQuery]:http://jquery.com
[Hang-Up]:http://hang-up.github.io
