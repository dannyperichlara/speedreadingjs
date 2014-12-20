SpeedReadingJS
==============

Add speed reading functionality to your website or app.

### What are the main differences between SpeedReadingJS and other solutions?

Most of the speed reading code is written based on Spritz (http://www.spritzinc.com). While Spritz has an important scientific background, but it also has some basic characteristics that are annoying for most of readers:

* They are inserted somewhere in the middle of the webpage. This encourages the readers to lose their attention.
* They have a white background, black text and a red letter. The high level of contrast between this colors is the main reason for the feeling of eye fatigue.
* The font is not good for reading
* The font size is too big.

SpeedReadingJS fixes this problems with simple solutions.

* SpeedReadingJS appears on a lightbox. So, all elements of the webpage remain hidden to the reader while he reads.
* The color combination is low contrast, with a dark background, a grey text and an ocher yellow letter to fix the eyes.
* The font is Open Sans, one the clearest fonts of the web.
* The font has a size smaller than Spritz, allowing a better eye fixation without losing the understanding of the word.

# Installation

SpeedReadingJS depends only on jQuery. Link *jQuery* and the *speedreading.js* file and SpeedReadingJS will be ready to use:

```javascript
<script src='js/jquery.js'></script>
<script src='js/speedreading.js'></script>
```

To start reading, just call the javascript speedreading.read('some text') function:

```javascript
<script>
  speedreading.read('Add speed reading functionality
    to your website. SpeedReadingJS depends only on jQuery.
    Link jQuery and the speedreading.js file and SpeedReadingJS
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
  // The time that long and short words will
  // remain visible is a factor of this number.
  speedreading.defaulttime = 180;

  // Set a default text for speedreading.read() with no parameters
  speedreading.text = 'This is a default text';
```