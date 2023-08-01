<script>
	import { tweened } from 'svelte/motion';
	import { cubicOut } from 'svelte/easing';
	export let fill;

	const progress = tweened(0, {
		duration: 800,
		easing: cubicOut
	});

	$: if (fill) {
		$progress = 1;
	} else {
		$progress = 0;
	}
</script>

<div class="w-full outer h-2 rounded-full">
	<div class="inner h-full rounded-full" style="--progress: {$progress}" />
</div>

<style lang="postcss">
	.inner {
		width: calc(100% * var(--progress));
		background-color: rgba(138, 255, 180, 1);
		box-shadow: inset 0px 2px 2px 0px rgba(138, 255, 180, 1),
			inset 0px -3px 4px 0px rgba(19, 141, 63, 1), 0px 0px 20px 2px rgba(138, 255, 180, 0.4);
	}

	.outer {
		background-color: rgba(138, 255, 180, 0.2);
		box-shadow: inset 0px 2px 2px 0px rgba(138, 255, 180, 0.1),
			inset 0px -3px 4px 0px rgba(19, 141, 63, 0.1);
	}
</style>
