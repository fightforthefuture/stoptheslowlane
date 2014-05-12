#StopTheSlowLane Widget
=======================
#### Slowing down the web to protest the FCC and save Net Neutrality!

[**Main project site here!**][1]
[**See the widget in action here!**][2]


Introduction
------------
The FCC could soon let Internet providers charge websites to access a bogus
"fast lane" and slow down every site that doesn't pay. Do you want a slower
Internet? Neither do we. Show the world what the FCC's "slow lane" looks like
by embedding the #StopTheSlowLane Widget on your site!


Installation instructions
-------------------------
To add the #StopTheSlowLane widget to your site, simply add the following code
to the HEAD section of your page (after all scripts and CSS)

```html

    <style id="_sl_hide" type="text/css">body { display: none; }</style>
	<script src="https://fightforthefuture.github.io/stoptheslowlane/widget/slowlane.js></script>
```

If you're feeling extra seditious, there's a special version of the animation
that rips Comcast / Time Warner and simulates a progressive loading blur on the
whole page. You can use the alternate version by adding this __sl_options_
block before you include the slowlane.js script:

```html

	<script type="text/javascript">
		var _sl_options = {
			animation: 'blur'
		}
	</script>
```

We are working on adding more animations, including a "lite" version that
doesn't block out the whole site.


Testing instructions
--------------------
The widget uses a cookie to only show once on your site. If you're testing it
and you want to always see it, (re)load the page with #ALWAYS_SHOW_SL_WIDGET in
the URL (eg: http://rubbingalcoholic.com/#ALWAYS_SHOW_SL_WIDGET)



Adding your own animations
--------------------------
Info coming soon!


[1]: http://www.stoptheslowlane.com
[2]: http://rubbingalcoholic.com/#ALWAYS_SHOW_SL_WIDGET