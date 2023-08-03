<script>
	// @ts-nocheck

	export let type = '';
	export let text = '';
	export let icon = '';

	import back from '$lib/assets/Arrow.svg';
	import right from '$lib/assets/Right Button.svg';
</script>

<button class="flex items-center gap-2" on:click {type} {text} {icon}>
	{#if icon === 'back'}
		<img src={back} alt="" />
	{/if}
	<p class=" text-slate-300">{text}</p>
	{#if icon === 'right'}
		<img src={right} alt="" />
	{:else if icon === 'Next'}
		<img class=" rotate-180" src={back} alt="" />
	{/if}
</button>
