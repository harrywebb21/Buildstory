<script>
	import Crown from '$lib/components/badges/Crown.svelte';
	import checkmarkIcon from '$lib/assets/checkmark light.svg';
	import checkmarkHoloIcon from '$lib/assets/checkmark holo.svg';
	export let tier = '';
</script>

{#if tier === 'bronze'}
	<div class="flex flex-col gap-2 items-center justify-center w-full">
		<Crown variant="bronze" />
		<p class=" text-slate-50 font-medium">Bronze</p>
		<img src={checkmarkIcon} alt="" />
		<p class="text-slate-400 font-medium">Unlocked!</p>
	</div>
{:else if tier === 'silver'}
	<div class="flex flex-col gap-2 items-center justify-center w-full">
		<Crown variant="silver" />
		<p class=" text-slate-50 font-medium">Silver</p>
		<div class=" w-6 h-6 flex items-center justify-center">
			<img src={checkmarkHoloIcon} alt="" />
		</div>
		<p class="text-slate-400 font-medium">0/1 referral</p>
	</div>
{:else if tier === 'gold'}
	<div class="flex flex-col gap-2 items-center justify-center w-full">
		<Crown variant="gold" />
		<p class=" text-slate-50 font-medium">Gold</p>
		<div class=" w-6 h-6 flex items-center justify-center">
			<img src={checkmarkHoloIcon} alt="" />
		</div>
		<p class="text-slate-400 font-medium">0/3 referrals</p>
	</div>
{/if}
