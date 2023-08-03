<script>
	// @ts-nocheck

	import PuffyBtn from '$lib/components/buttons/PuffyBtn.svelte';
	import BgGlow from '$lib/components/layout/BgGlow.svelte';
	import NavBar from '$lib/components/layout/NavBar.svelte';
	import Logo from '$lib/components/profile/small components/Logo.svelte';
</script>

<div class="p-2 w-full flex items-center justify-center">
	<div
		class="h-full w-4/5 border-4 border-slate-700 flex flex-col items-center justify-center px-3 py-6 overflow-hidden relative"
	>
		<BgGlow />
		<NavBar />
		<slot />
		<div class=" h-56 flex flex-col items-center justify-center gap-4">
			<Logo />
			<p class="text-center text-slate-400 text-xl font-medium leading-7">Built for the Builders</p>
		</div>
	</div>
</div>
