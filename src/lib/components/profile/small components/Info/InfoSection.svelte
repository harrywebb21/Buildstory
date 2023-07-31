<script>
	import { getColors } from '$lib/actions.js';
	import { blendTarget } from '$lib/utils.js';
	let glow;
	let img;

	export let title = '';
	export let subheading = '';
	export let description = '';
	export let icon = '';
</script>

<div class="w-[362.67px] h-[164px] flex-col justify-start items-start gap-2 inline-flex">
	<p class="text-center text-slate-50 text-3xl font-bold leading-9">{title}</p>
	<p class="text-center text-slate-400 text-xl font-medium leading-7">{subheading}</p>
	<div class=" flex justify-between items-center w-full">
		<div class=" relative w-8 h-8 flex justify-center items-center">
			<div class="img-color" bind:this={glow} />
			<img
				src={icon}
				alt="icon"
				bind:this={img}
				use:getColors={(colors) => blendTarget(colors, glow)}
			/>
		</div>

		<p class="w-[290.67px] text-slate-200 text-lg font-medium leading-7">{description}</p>
	</div>
</div>

<style>
	.img-color {
		width: 32px;
		height: 32px;
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		filter: blur(25px);
		opacity: 0.5;
	}
</style>
