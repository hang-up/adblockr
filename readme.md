# AdBlockr

AdBlockr is a javascript plugin used to detect if a user has any kind of ad blocker installed.

### Version
1.0.1

### Dependencies

As of the time being (June 4th 2015), AdBlockr relies on 
* [JQuery] - next releases will be library free - all vanilla javascript!


### Installation

```sh
<head>
    <link rel="stylesheet" href="adblockr.css">
    <script src="/js/ads.js"></script>
</head>

<body>
    <script src="//ajax.googleapis.com/ajax/libs/jquery/1.11.2/jquery.min.js"></script>
    <script src="/js/adblockr.js"></script>
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

```sh
blockrContainer.init({
    colors: ["#F19A2A", "#F2B635", "#F25648"],
    title: "You are using an adblocker!",
    caption: "Thanks for making the countless sleepless developments nights made completely worthless.",
    aggressive: false
});
```


### Todo's

* Get rid of jQuery

License
----

MIT


*From [Hang-Up] in Montreal.*


[jQuery]:http://jquery.com
[Hang-Up]:http://hang-up.github.io
