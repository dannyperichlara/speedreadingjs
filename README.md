SpeedReadingJS
==============

Add speed reading functionality to your website.

# Installation

SpeedReadingJS depends only on jQuery. Link *jQuery* and the *speedtest.js* file and SpeedTestJS will be ready to use.

```javascript
<script src='js/jquery.js'></script>
<script src='js/speedreading.js'></script>
```

To start reading, just call the javascript speedreading.read('some text') function

```javascript
<script>
  speedreading.read('Add speed reading functionality
    to your website.SpeedReadingJS depends only on jQuery.
    Link jQuery and the speedtest.js file and SpeedTestJS
    will be ready to use it.');
</script>
```

# Options

You can customize some properties of the speedreading object:

```javascript
  // Set the position (in percentaje of the word) where
  // eyes will focus their attention
  speedreading.position = 0.260; 

  // Set the lag time of punctuation dots.
  speedreading.dottime = 800;
  
  // Set the lag time of punctuation commas.
  speedreading.commatime = 300;

  // Set the average time in milliseconds between words.
  // The time that ong and short words will
  // remain visible as a factor of this number.
  speedreading.defaulttime = 180;

  // Set a default text for speedreading.read() with no parameters
  speedreading.text = 'This is a default text';
```