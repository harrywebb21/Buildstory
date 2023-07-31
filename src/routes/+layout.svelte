<script>
	import '../app.postcss';
	import PuffyBtn from '../lib/components/buttons/PuffyBtn.svelte';
	import Logo from '../lib/components/profile/small components/Logo.svelte';
</script>

<div class="p-2">
	<div
		class="h-full w-full border-4 border-slate-700 flex flex-col items-center justify-center px-3 py-6"
	>
		<div class=" h-12 w-full flex justify-center sm:justify-between px-8 mb-10">
			<Logo />
			<div class=" hidden sm:block">
				<PuffyBtn btnText="Reserve username" />
			</div>
		</div>
		<slot />
		<div class=" h-56 flex flex-col items-center justify-center gap-4">
			<Logo />
			<p class="text-center text-slate-400 text-xl font-medium leading-7">Built for the Builders</p>
		</div>
	</div>
</div>
