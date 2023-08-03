<script>
	// @ts-nocheck
	import Nakedbtn from '../buttons/Nakedbtn.svelte';
	import PuffyBtn from '../buttons/PuffyBtn.svelte';
	import Logo from '../profile/small components/Logo.svelte';
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
