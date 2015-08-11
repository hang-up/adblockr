# AdBlockr

AdBlockr is a javascript plugin used to detect if a user has any kind of ad blocker installed.

### Version
1.2.0

### Dependencies

Starting on 1.1.0 (July 07 2015), there are **TWO** versions of AdBlockr:

`adblockr_jquery.js` (and its minified version `/js/min/adblockr_jquery.js`) which relies on jQuery.

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



### Options

AdBlockr is currently extended with the following options:


* colors [```array```] : specifies a list of colors
* title [```string```] : specify main text
* caption [```string```] : specify caption
* aggressive [```boolean```, ```false```] : true prevents the overlay to be closed. ```false``` by default.
* mode [``string``, ``overlay``] : overlay or banner.

```sh
blockrContainer.init({
    colors: ["#F19A2A", "#F2B635", "#F25648"],
    title: "You are using an adblocker!",
    caption: "That's not cool.",
    aggressive: false,
    mode: "overlay"
});
```


### Contribution
Please, by all mean fork this project to make it even more awesome! A couple of things to be aware of:
* blockrContainer is the base object. Feel free to extend it.
* The jQuery version is much preferred when implementing new features.
* The vanilla javascript version was created as a personal challenge and will probably not be maintained in the future!

### TODOS
* Turn setInterval into setTimeout IIFE

License
----

MIT


Made by [Hang-Up].


[jQuery]:http://jquery.com
[Hang-Up]:http://hang-up.github.io
