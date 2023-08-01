<script>
	export let type;
	export let text = '';
	export let icon = '';

	import back from '$lib/assets/Arrow.svg';
</script>

<button class="flex items-center gap-2" on:click {type} {text} {icon}>
	{#if icon === 'back'}
		<img src={back} alt="" />
	{/if}
	<p class=" text-slate-300">{text}</p>
</button>
