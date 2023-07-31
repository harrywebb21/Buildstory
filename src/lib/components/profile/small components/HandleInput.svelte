<script>
	import PuffyBtn from '../../buttons/PuffyBtn.svelte';
	import { fade, fly } from 'svelte/transition';

	let nextStep = 0;
</script>

{#if nextStep === 0}
	<div class="flex flex-col w-full gap-4 items-center" in:fly={{ duration: 2000, delay: 2000 }}>
		<p class=" text-lg text-slate-200 font-medium leading-7">Reserve your username</p>

		<form
			class="flex flex-col pl-0 sm:flex-row sm:pl-28 gap-4"
			on:submit={() => console.log('submitted')}
		>
			<input
				id="handleInput"
				class=" w-64 h-12 rounded-lg bg-transparent border-2 border-slate-800 pl-4 text-slate-500 placeholder:text-slate-500"
				type="text"
				placeholder="@ash_ketchum"
				onfocus="this.value='@'"
			/>
			<PuffyBtn
				btnText="Reserve"
				type="submit"
				on:click={() => {
					nextStep = 1;
					console.log(nextStep);
				}}
			/>
		</form>
	</div>
{:else if nextStep === 1}
	<div
		class="flex flex-col w-full gap-4 items-center"
		in:fly={{ x: 500, duration: 2000, delay: 500 }}
	>
		<p class=" text-lg text-slate-200 font-medium leading-7">Enter your first name</p>

		<form
			class="flex flex-col pl-0 sm:flex-row sm:pl-28 gap-4"
			on:submit={() => console.log('submitted')}
		>
			<input
				id="handleInput"
				class=" w-64 h-12 rounded-lg bg-transparent border-2 border-slate-800 pl-4 text-slate-500 placeholder:text-slate-500"
				type="text"
				placeholder="Ash"
			/>
			<PuffyBtn
				btnText="Submit"
				type="submit"
				on:click={() => {
					nextStep = 2;
					console.log(nextStep);
				}}
			/>
		</form>
	</div>
{:else if nextStep === 2}
	<div
		class="flex flex-col w-full gap-4 items-center"
		in:fly={{ x: 500, duration: 2000, delay: 500 }}
	>
		<p class=" text-lg text-slate-200 font-medium leading-7">Enter your surname</p>

		<form
			class="flex flex-col pl-0 sm:flex-row sm:pl-28 gap-4"
			on:submit={() => console.log('submitted')}
		>
			<input
				id="handleInput"
				class=" w-64 h-12 rounded-lg bg-transparent border-2 border-slate-800 pl-4 text-slate-500 placeholder:text-slate-500"
				type="text"
				placeholder="Ketchum"
			/>
			<PuffyBtn
				btnText="Submit"
				type="submit"
				on:click={() => {
					nextStep = 3;
				}}
			/>
		</form>
	</div>
{:else if nextStep === 3}
	<div
		class="flex flex-col w-full gap-4 items-center"
		in:fly={{ x: 500, duration: 2000, delay: 500 }}
		out:fade
	>
		<p class=" text-lg text-slate-200 font-medium leading-7">Enter your email</p>
		<div class="w-[480px] gap-4">
			<form
				class="flex flex-col pl-0 sm:flex-row sm:pl-28 gap-4"
				on:submit={() => console.log('submitted')}
			>
				<input
					id="handleInput"
					class=" w-64 h-12 rounded-lg bg-transparent border-2 border-slate-800 pl-4 text-slate-500 placeholder:text-slate-500"
					type="text"
					placeholder="ashketchum@me.com"
				/>
				<PuffyBtn
					btnText="Submit"
					type="submit"
					on:click={() => {
						nextStep = 4;
					}}
				/>
			</form>
		</div>
	</div>
{:else if nextStep === 4}
	<div
		class=" flex flex-col w-fit gap-4 items-center justify-center h-12 rounded-lg bg-transparent border-2 border-slate-800"
		in:fade={{ duration: 2000, delay: 1500 }}
	>
		<p class=" text-lg text-slate-200 font-medium leading-7">Thank you for your submission!</p>
	</div>
{/if}

<style>
</style>
