<script>
	// @ts-nocheck

	import PuffyBtn from '$lib/components/buttons/PuffyBtn.svelte';
	import Crown from '../../../badges/Crown.svelte';
</script>

<div
	class=" bg-slate-900 w-11/12 rounded-[32px] py-20 flex flex-col items-center justify-center gap-6"
>
	<div class=" flex flex-col items-center justify-center">
		<p class=" font-bold text-4xl text-slate-50">Want in?</p>
		<p class=" font-medium text-xl text-slate-400">Reserve your username now</p>
	</div>
	<PuffyBtn
		text="Reserve"
		icon="checkmark"
		on:click={() => {
			document.getElementById('landingHeader').scrollIntoView();
		}}
	/>
	<p class=" flex items-center justify-center text-slate-400 font-medium">
		You’ll get a shiny<span class="px-2"><Crown variant="gold" /></span><span class="text-amber-500"
			>[Founding Member]
		</span>&nbsp;badge
	</p>
</div>
