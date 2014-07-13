/* Mark slides as incomplete to spot them easier */
.incomplete.slide::after {
	content: 'INCOMPLETE';
	font-weight: bold;
	position: absolute;
	top: 40%;
	left: 30%;
	padding: .1em .4em 0;
	border: .1em solid;
	color: rgba(255, 0, 0, .8);
	font-size: 140%;
	border-radius: .2em;
	transform: rotate(30deg);
}

/* Ribbon */
[data-type].slide:not(.hide-ribbon):after {
	content: attr(data-type);
	position: fixed;
	top: 0;
	right: 0;
	color: white;
	font-size: 50%;
	text-align: center;
	text-transform: uppercase;
	font-weight: bold;
	background: hsl(40,100%,50%);
	background-image: linear-gradient(rgba(255, 255, 255, .3), rgba(255, 255, 255, 0));
	line-height: 1.6;
	min-width: 20em;
	box-shadow: 0 10px 5px -5px rgba(0,0,0,.3);
	transform: rotate(45deg) translate(6em, -2em);
}

/* Full image slides */

@keyframes scroll {
	from, to { background-position: 0 0; }
	80%, 95% { background-position: 0 100%; }
}
	
.image.slide {
	padding: 0;
	background-size: cover;
	background-position: center;
	background-repeat: no-repeat;
	background-color: black;
	image-rendering: crisp-edges;
}

/* When you don't want to clip the image at all */
.partial.image.slide {
	background-size: contain;
}

/* An image that scrolls indefinitely */
.scrolling.image.slide:target {
	background-position: 0 0;
	background-repeat: repeat-y;
	animation: scroll 10s 1s infinite linear forwards;
}

.bottom-heavy.image.slide {
	background-position: center bottom;
}

.top-heavy.image.slide {
	background-position: center top;
}

.top-heavy.image.slide:target,
.bottom-heavy.image.slide:target {
	display: block;
}

	.image.slide > .caption,
	.image.slide > h1:only-child,
	.image.slide > hgroup:only-child {
		position: relative;
		z-index: 1;
		box-sizing: border-box;
		width: 100%;
		padding: .2em 0;
		margin: 0;
		margin-top: 300px;
		margin-top: calc(384px - 1em);
		margin-top: calc(50vh - 1em);
		text-align: center;
		font-family: inherit;
		font-weight: inherit;
		color: white;
		background: rgba(0,0,0,.4);
		text-shadow: 0 -.05em .1em black;
		white-space: nowrap;
	}
	
	.image.slide > .caption,
	.image.slide > h1:only-child {
		font-size: 200%;
		line-height: 1.2;
	}
	
	.top-heavy.image.slide > .caption,
	.top-heavy.image.slide > h1:only-child,
	.top-heavy.image.slide > hgroup:only-child {
		position: fixed;
		left: 0; right: 0;
		bottom: .5in;
	}
	
	.bottom-heavy.image.slide > .caption,
	.bottom-heavy.image.slide > h1:only-child,
	.bottom-heavy.image.slide > hgroup:only-child {
		margin: .5in 0 0;
	}
	
		.image.slide > .caption h1 {
			font: inherit;
			margin-bottom: 0;
		}
		
		.image.slide > .caption h1 + a {
			font-size: 30%;
			display: block;
			text-shadow: inherit;
		}
		
.slide[data-source]:after {
	content: attr(data-source);
	position: absolute;
	bottom: 5px;
	right: 10px;
	z-index: 100;
	color: white;
	font-size: 15px;
	text-shadow: 0 0 .1em black;
	text-shadow: 0 0 .1em .1em black;
}

/* END Full image slides */