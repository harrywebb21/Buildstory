<script>
	import ReferralLink from './ReferralLink.svelte';
	import ReferralTiers from './ReferralTiers.svelte';

	export let name = '';
</script>

<div
	class="border-2 flex flex-col border-slate-800 rounded-2xl p-16 justify-center items-center gap-8 w-full sm:w-[700px]"
>
	<div class="heading-container flex flex-col gap-2 items-center justify-center w-full">
		<h1 class="text-3xl font-bold text-slate-50">You're in, {name}</h1>
		<p class=" text-slate-400 font-medium">
			We’re glad you’re joining us for the future of social indie hacking.
		</p>
	</div>
	<div class="tiers flex gap-2 w-full justify-center">
		<ReferralTiers tier="bronze" />
		<ReferralTiers tier="silver" />
		<ReferralTiers tier="gold" />
	</div>
	<ReferralLink />
</div>
