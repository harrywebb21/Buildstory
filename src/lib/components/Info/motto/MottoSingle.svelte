<script>
	//@ts-nocheck
	import { getColors } from '$lib/actions';
	import { blendTarget } from '$lib/utils';
	let glow;
	let img;

	export let title = '';
	export let icon = '';
</script>

<div class=" relative h-8 gap-2 flex justify-center items-center">
	<div class="img-color" bind:this={glow} />
	<img
		src={icon}
		alt="icon"
		bind:this={img}
		use:getColors={(colors) => blendTarget(colors, glow)}
	/>
	{#if title === 'Connect'}
		<p class="text-center text-amber-500 text-3xl font-bold leading-9">{title}.</p>
	{:else if title === 'Build'}
		<p class="text-center text-blue-500 text-3xl font-bold leading-9">{title}.</p>
	{:else if title === 'Ship'}
		<p class="text-center text-fuchsia-500 text-3xl font-bold leading-9">{title}.</p>
	{/if}
</div>

<style>
	.img-color {
		width: 100%;
		height: 32px;
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		filter: blur(50px);
		opacity: 0.5;
	}
</style>
