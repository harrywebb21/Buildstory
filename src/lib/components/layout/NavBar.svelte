<script>
	// @ts-nocheck
	import Nakedbtn from '$lib/components/buttons/Nakedbtn.svelte';
	import PuffyBtn from '$lib/components/buttons/PuffyBtn.svelte';
	import Logo from './Logo.svelte';
</script>

<div class=" h-12 w-full flex justify-center sm:justify-between px-8 mb-10">
	<Logo />
	<div class="flex items-center justify-center gap-12">
		<ul class=" list-none flex gap-12 text-slate-200">
			<Nakedbtn
				text="Hypothesis"
				on:click={() => {
					document.getElementById('hypothesis').scrollIntoView();
				}}
			/>
			<Nakedbtn
				text="FAQ"
				on:click={() => {
					document.getElementById('faq').scrollIntoView();
				}}
			/>
			<Nakedbtn
				text="Team"
				on:click={() => {
					document.getElementById('team').scrollIntoView();
				}}
			/>
		</ul>
		<div class=" hidden sm:block">
			<PuffyBtn
				text="Reserve username"
				on:click={() => {
					document.getElementById('landingHeader').scrollIntoView();
				}}
			/>
		</div>
		<Nakedbtn text="Login" icon="right" />
	</div>
</div>
