<script>
	import Crown from './badges/Crown.svelte';

	export let variant = 'handle';
</script>

<p class=" flex items-center justify-center text-slate-400 font-medium">
	{#if variant === 'handle'}
		You’ll get a shiny<span class="px-2"><Crown variant="gold" /></span><span class="text-amber-500"
			>[Founding Member]
		</span>&nbsp;badge
	{:else if variant === 'email'}
		So we can let you know when we launch
	{:else if variant === 'name'}
		So others know what to call you by
	{:else if variant === 'surname'}
		This doesn’t have to be your real name, but we highly encourage it!
	{:else if variant === 'avatar'}
		Don’t be shy, slap your face on here! Or, if you’d prefer, an image is fine too
	{:else if variant === 'cover'}
		Go on. Express yourself.
	{/if}
</p>
