<script>
	import HandleInput from '$lib/components/profile/small components/HandleInput.svelte';
	import Bio from '$lib/components/profile/small components/Info/Bio.svelte';
	import MottoSection from '$lib/components/profile/small components/motto/MottoSection.svelte';
	import Hypothesis from '$lib/components/profile/small components/Info/Hypothesis.svelte';
	import FAQ from '$lib/components/profile/small components/Info/FAQ.svelte';
	import Team from '$lib/components/profile/small components/Info/Team.svelte';
	import WantIn from '$lib/components/profile/small components/Info/WantIn.svelte';
</script>

<div class="gap-12 mb-16 flex flex-col items-center justify-center">
	<!-- <button class="bg-blue-500 text-white py-1 px-4" on:click={nextStep}>Next</button> -->

	<div class="flex w-8/12 gap-2 h-10" />
	<MottoSection />
	<Bio />
</div>
<!-- <Features /> -->

<HandleInput />
<div class=" flex flex-col gap-64 pt-64 h-full w-full justify-center items-center">
	<Hypothesis />
	<FAQ />
	<Team />
	<WantIn />
</div>
