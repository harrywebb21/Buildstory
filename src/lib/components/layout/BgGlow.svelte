<div class="bg-glow" />

<style>
	.bg-glow {
		top: 0%;
		left: 50%;
		transform: translateX(-50%) translateY(-50%);
		position: absolute;
		width: 60%;
		height: 95%;
		border-radius: 50%;
		background: radial-gradient(
			circle,
			rgb(14, 35, 69) 0%,
			rgba(10, 38, 79, 0.5) 50%,
			rgba(47, 61, 85, 0.43872549019608) 100%
		);
		animation: glowColorShift 15s ease-in-out infinite;
		z-index: -1;
		filter: blur(100px);
		opacity: 0.8;
	}
</style>
