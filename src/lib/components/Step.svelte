<script lang="ts">
	import { fly, blur } from 'svelte/transition';
	import InputDescription from './InputDescription.svelte';
	import PuffyBtn from './buttons/PuffyBtn.svelte';
	export let title: string;
	export let variant: string;
	export let buttonText: string;
</script>

<div class="step-wrapper" in:fly={{ duration: 2000, delay: 500, x: 500 }}>
	<!-- <p>{title}</p> -->
	<div class="controls">
		<slot />
	</div>
	<InputDescription {variant} />
</div>

<style lang="postcss">
	.step-wrapper {
		/* @apply flex flex-col justify-center items-center gap-4 w-full border; */
		& > p:first-child {
			@apply text-lg text-slate-200 font-medium leading-7;
		}

		& .controls {
			/* @apply flex flex-col w-full items-center sm:flex-row sm:items-end gap-4; */
		}

		& input {
			@apply w-64 h-12 rounded-lg bg-transparent border-2 border-slate-800 pl-4 text-slate-500 placeholder:text-slate-500;
		}

		& #handleInput {
			@apply rounded-r-lg rounded-l-none border-2 border-l-0 bg-transparent pl-4 outline-none autofill:!bg-none;
		}
	}
</style>
