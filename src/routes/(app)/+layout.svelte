<script>
	// @ts-nocheck

	import BgGlow from '$lib/components/layout/BgGlow.svelte';
	import NavBar from '$lib/components/layout/NavBar.svelte';
	import Logo from '$lib/components/layout/Logo.svelte';
</script>

<div class="p-2 w-full h-full flex items-center justify-center">
	<div
		class="h-full w-full border-4 border-slate-700 flex flex-col items-center justify-center px-3 py-6 relative"
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
