<script>
	import Profile from '$lib/components/profile/Profile.svelte';
	import HandleInput from '$lib/components/profile/small components/HandleInput.svelte';
	import Bio from '$lib/components/profile/small components/Info/Bio.svelte';
	import Features from '$lib/components/profile/Features.svelte';
	import MottoSection from '$lib/components/profile/small components/motto/MottoSection.svelte';
	import DashedLine from '$lib/components/profile/small components/DashedLine.svelte';
</script>

<div class="gap-12 mb-16 flex flex-col items-center justify-center">
	<MottoSection />
	<Bio />
</div>
<!-- <Features /> -->

<HandleInput />
<div class="h-32">
	<DashedLine />
</div>
<Profile />
