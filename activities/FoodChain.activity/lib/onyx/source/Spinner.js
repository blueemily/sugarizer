/**
	A control that displays a spinner animation to indicate that activity is
	taking place. By default, onyx.Spinner will display a light spinner,
	suitable for displaying against a dark background. To render a dark spinner
	to be shown on a lighter background, add the "onyx-light" class to the
	spinner:
	
		{kind: "onyx.Spinner", classes: "onyx-light"}
	
	Typically, a spinner is shown to indicate activity and hidden to indicate
	that the activity has ended. The spinner animation will automatically start
	when a spinner is shown. If you wish, you may control the animation directly
	by calling the *start*, *stop*, and *toggle* methods.
*/
enyo.kind({
	name: "onyx.Spinner",
	classes: "onyx-spinner",
	//* @public
	//* Stops the spinner animation.
	stop: function() {
		this.setShowing(false);
	},
	//* Starts the spinner animation.
	start: function() {
		this.setShowing(true);
	},
	//* Toggles the spinner animation on or off.
	toggle: function() {
		this.setShowing(!this.getShowing());
	}
});
