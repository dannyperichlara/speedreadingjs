SpeedReadingJS
==============

Add speed reading functionality to your website.

# Installation

SpeedReadingJS depends only on jQuery. Link, jQuery and the *speedtest.js* file and SpeedTestJS will be ready to use.

```javascript
<script src='js/jquery.js'></script>
<script src='js/speedreading.js'></script>
```

To start reading, just call the javascript speedreading.read('some text') function

```javascript
<script>
  speedreading.read('Add speed reading functionality to your website. SpeedReadingJS depends only on jQuery. Link, jQuery and the speedtest.js file and SpeedTestJS will be ready to use it.');
</script>
```

# Options

You can customize some properties of the speedreading object:

```javascript
  speedreading.position = 0.260; // Sets the position (in percentaje of the word) where eyes will fix their attention
  speedreading.dottime = 800; // Sets the time of punctuation dots lag.
  speedreading.commatime = 300; // Sets the time of punctuation commas lag.
  speedreading.defaulttime = 180; // Sets the average time in milliseconds between words. The time that ong and short words will remain visible is a factor of this number.
  speedreading.text = 'This is a default text'; // Sets a default text for speedreading.read() with no parameters
```