<div class="bg-glow" />

<style>
	.bg-glow {
		top: -50%;
		left: 50%;
		transform: translateX(-50%) translateY(20%);
		position: absolute;
		width: 100%;
		height: 100vh;
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
		opacity: 0.5;
	}
</style>
