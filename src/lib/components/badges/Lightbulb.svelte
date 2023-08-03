<script>
	//@ts-nocheck
	import { getColors } from '$lib/actions';
	import { blendTarget } from '$lib/utils';
	let glow;
	let img;
	import lightbulb from '$lib/assets/Lightbulb.svg';
</script>

<div class="container">
	<div class="glow" bind:this={glow} />
	<div class="badge-border px-2">
		<img
			class="icon"
			src={lightbulb}
			alt="Star Badge"
			use:getColors={(colors) => blendTarget(colors, glow)}
			bind:this={img}
			crossorigin="anonymous"
		/>
		<div class="glow-strip" />
	</div>
</div>

<style>
	.container {
		position: relative;
		width: fit-content;
	}
	.badge-border {
		width: 36px;
		height: 36px;
		border-radius: 8px;
		border: 3px solid rgba(30, 41, 59, 1);
		box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.35);
		overflow: hidden;
		display: flex;
		justify-content: center;
		align-items: center;
		position: relative;
	}

	.icon {
		width: 100%;
		height: 50%;
		object-fit: cover;
		overflow: hidden;
	}

	.glow {
		width: 125%;
		height: 125%;
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translateX(-50%) translateY(-50%) rotate(180deg);
		filter: blur(30px);
		opacity: 0.5;
	}
</style>
