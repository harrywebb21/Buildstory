<script>
	import { spring } from 'svelte/motion';
	import { writable } from 'svelte/store';
	export let btnText = 'Button';
	export let type = '';

	let size = writable(10);
</script>

<button on:click on:mousedown={() => size.set(100)} on:mouseup={() => size.set(10)} {type}>
	<div
		class="inner h-12 px-5 py-3 bg-gradient-to-b from-green-700 to-green-300 rounded-xl shadow-inner border border-green-700 justify-center items-center gap-2 inline-flex"
	>
		<div class="text-center text-green-700 text-sm font-bold leading-tight">{btnText}</div>
	</div>
</button>

<style>
	.inner {
		background: linear-gradient(180deg, #86efac 0%, #86efac 100%),
			linear-gradient(180deg, rgba(21, 128, 61, 0.2) 0%, rgba(134, 239, 172, 0.2) 100%), #86efac;
		box-shadow: 0px -3px 4px 0px #138d3f inset, 0px 2px 2px 0px #8affb4 inset;
		cursor: pointer;
	}

	button {
		padding: none;
		outline: none;
		transition: all 0.2s ease-in-out;
	}

	button:active {
		transform: scale(0.9);
	}
</style>
