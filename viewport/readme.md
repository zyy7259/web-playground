# Terms

Hardware pixel: a physical pixel on a display. For example, iPhone 5 has a screen with 640 horizontal hardware pixels.
Device-independent pixel (dip): iPhone 5 is 320 dips wide.
CSS pixel: The unit used for page layout.

# Use case

use `viewport` meta tag to set the width and initial scale of the viewport.

- `width=device-width` instructs the page to match the screen's width in dip.
- `initial-scale=1` instructs browsers to establish a 1:1 relationship between CSS pixels and dips regardless of device orientation.

