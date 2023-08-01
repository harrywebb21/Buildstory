<script>
	import PuffyBtn from '../../buttons/PuffyBtn.svelte';
	import { fade, fly } from 'svelte/transition';
	import ProgressBar from './ProgressBar.svelte';
	import Progress from '../../Progress.svelte';
	import Profile from '$lib/components/profile/Profile.svelte';
	import Nakedbtn from '../../buttons/Nakedbtn.svelte';
	// import { createStepper } from '$lib/bookstory-ui';
	// const { currentStep, next, prev } = createStepper();
	let currentStep = 1;
	let firstName;
	let surname;
	let handle;
	let email;
	let preview = true;
	const next = () => (currentStep += 1);
	const prev = () => (currentStep -= 1);
</script>

{#if currentStep !== 1}
	<div
		class=" mx-auto mb-5 gap-2 flex justify-center border-2 border-slate-800 p-1 rounded-full"
		in:fade={{ duration: 2000 }}
		style="width: 33%"
	>
		<!-- <ProgressBar stage={currentStep - 2} /> -->
		{#each [1, 2, 3, 4, 5, 6] as step}
			<Progress fill={currentStep > step} />
		{/each}
	</div>
{/if}

<div
	class="flex flex-col w-full gap-4 items-center"
	in:fly={{ duration: 2000, delay: 2000 }}
	out:blur={{ duration: 1500 }}
>
	<form
		class="flex flex-col gap-4 justify-center items-center"
		autocomplete="off"
		on:submit={() => console.log('submitted')}
	>
		{#if currentStep === 1}
			<p class=" text-lg text-slate-200 font-medium leading-7">Reserve your username</p>
			<div
				class="flex flex-col w-full items-center sm:flex-row sm:pl-28 gap-4"
				in:fly={{ x: 500, duration: 2000, delay: 1000 }}
				out:blur={{ duration: 1500 }}
			>
				<div class="flex h-12">
					<div
						class="text-slate-500 h-full items-center flex border-l-2 px-2 border-slate-800 rounded-l-lg border-y-2"
					>
						@
					</div>

					<input
						id="handleInput"
						class=" w-64 h-full rounded-r bg-transparent border-2 border-slate-800 pl-4 text-slate-500 placeholder:text-slate-500 outline-none autofill:!bg-none"
						type="text"
						placeholder="ash_ketchum"
						bind:value={handle}
						on:focus={() => {
							preview = false;
						}}
						on:blur={() => {
							if (!handle?.trim()) {
								preview = true;
							}
						}}
					/>
				</div>

				<PuffyBtn
					btnText="Reserve"
					on:click={() => {
						if (handle) {
							next();
						}
					}}
				/>
			</div>
		{:else if currentStep === 2}
			<div class=" flex flex-col justify-center items-center gap-4">
				<p class=" text-lg text-slate-200 font-medium leading-7" in:blur>Whats your email?</p>
				<div
					class="flex flex-col w-full items-center justify-center sm:flex-row gap-4"
					in:fly={{ x: 500, duration: 2000, delay: 1000 }}
					out:blur={{ duration: 1500 }}
				>
					<Nakedbtn text="Back" icon="back" on:click={prev} />

					<input
						id="emailInput"
						class=" w-64 h-12 rounded-lg bg-transparent border-2 border-slate-800 pl-4 text-slate-500 placeholder:text-slate-500"
						type="text"
						placeholder="ashketchum@me.com"
						bind:value={email}
					/>
					<PuffyBtn
						btnText="Next"
						on:click={() => {
							if (email.trim()) {
								next();
								console.log(currentStep);
							}
						}}
					/>
				</div>
			</div>
		{:else if currentStep === 3}
			<p class=" text-lg text-slate-200 font-medium leading-7">Enter your name</p>
			<div
				class="flex flex-col w-full items-center justify-center sm:flex-row gap-4"
				in:fly={{ x: 500, duration: 2000, delay: 1000 }}
				out:blur={{ duration: 1500 }}
			>
				<Nakedbtn text="Back" icon="back" on:click={prev} />
				<input
					id="nameInput"
					class=" w-64 h-12 rounded-lg bg-transparent border-2 border-slate-800 pl-4 text-slate-500 placeholder:text-slate-500"
					type="text"
					placeholder="Ash"
					bind:value={firstName}
				/>
				<PuffyBtn
					btnText="next"
					on:click={() => {
						if (firstName.trim()) {
							firstName = document.getElementById('nameInput').value;
							next();
							console.log(currentStep);
						}
					}}
				/>
			</div>
		{:else if currentStep === 4}
			<div class=" flex flex-col justify-center items-center gap-4">
				<p class=" text-lg text-slate-200 font-medium leading-7">Enter your surname</p>
				<div
					class="flex flex-col w-full items-center justify-center sm:flex-row gap-4"
					in:fly={{ x: 500, duration: 2000, delay: 1000 }}
					out:blur={{ duration: 1500 }}
				>
					<Nakedbtn
						text="Back"
						icon="back"
						on:click={() => {
							prev();
							console.log(currentStep);
						}}
					/>
					<input
						id="surnameInput"
						class=" w-64 h-12 rounded-lg bg-transparent border-2 border-slate-800 pl-4 text-slate-500 placeholder:text-slate-500"
						type="text"
						placeholder="Ketchum"
						bind:value={surname}
					/>
					<PuffyBtn
						btnText="Next"
						on:click={() => {
							if (surname.trim()) {
								surname = document.getElementById('surnameInput').value;
								next();
								console.log(currentStep);
							}
						}}
					/>
				</div>
			</div>
		{:else if currentStep === 5}
			<div
				class=" flex flex-col w-fit gap-4 items-center justify-center h-12 rounded-lg bg-transparent border-2 border-slate-800"
				in:fade={{ duration: 2000, delay: 1500 }}
			>
				<p class=" text-lg text-slate-200 font-medium leading-7">Thank you for your submission!</p>
			</div>
		{/if}
	</form>
</div>

<Profile {preview} {currentStep} {handle} {firstName} {surname} />

<style>
</style>
