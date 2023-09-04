<script>
	// @ts-nocheck
	import Step from '../Step.svelte';
	import PuffyBtn from '$lib/components/buttons/PuffyBtn.svelte';
	import { fade, fly } from 'svelte/transition';
	import Progress from '$lib/components/reserve/Progress.svelte';
	import Profile from '$lib/components/profile/Profile.svelte';
	import Nakedbtn from '$lib/components/buttons/Nakedbtn.svelte';
	import ThankYouCard from './submitted/ThankYouCard.svelte';
	import InputDescription from '../InputDescription.svelte';
	let currentStep = 1;
	let firstName;
	let surname;
	let handle;
	let email;
	let coverImg;
	let avatarImg;
	let preview = true;
	const next = () => (currentStep += 1);
	const prev = () => (currentStep -= 1);
</script>

<div class="h-10 mx-auto mb-5" style="width: 33%">
	{#if currentStep !== 1 && currentStep !== 7}
		<div
			class="flex gap-2 justify-center border-2 border-slate-800 p-1 rounded-full"
			in:fade={{ duration: 2000 }}
		>
			{#each [1, 2, 3, 4, 5, 6] as step}
				<Progress fill={currentStep > step} />
			{/each}
		</div>
	{/if}
</div>

<div
	id="reserveUsernameContainer"
	class="flex flex-col w-full gap-4 items-center"
	in:fly={{ duration: 2000, delay: 2000 }}
	out:blur={{ duration: 1500 }}
>
	<form autocomplete="off" class="relative">
		{#if currentStep === 1}
			<Step variant="handle">
				<div class="grid mb-4">
					<div class="flex flex-col items-center">
						<label for="handle" class="mb-4">Reserve your handle</label>
						<div class="flex">
							<div class="at">@</div>
							<input id="handle" type="text" placeholder="ash_ketchum" bind:value={handle} />
						</div>
					</div>

					<PuffyBtn
						type="button"
						text="Reserve"
						icon="checkmark"
						on:click={() => {
							console.log('clicked', handle);
							if (handle) {
								next();
							}
						}}
					/>
				</div>
				<!-- <InputDescription variant="handle" /> -->
			</Step>
		{:else if currentStep === 2}
			<Step variant="email">
				<div class="grid mb-4">
					<Nakedbtn text="Back" icon="back" on:click={prev} />
					<div class="flex flex-col items-center">
						<label for="email" class="mb-4">Enter your email</label>
						<input id="email" type="text" placeholder="ashketchum@me.com" bind:value={email} />
					</div>
					<PuffyBtn
						text="Next"
						icon="next"
						on:click={() => {
							if (email.trim()) {
								next();
								console.log(currentStep);
							}
						}}
					/>
				</div>
			</Step>
		{:else if currentStep === 3}
			<Step variant="name">
				<div class="grid mb-4">
					<Nakedbtn text="Back" icon="back" on:click={prev} />

					<div class="flex flex-col items-center">
						<label for="name" class="mb-4">What's your first name?</label>
						<input id="name" class=" " type="text" placeholder="Ash" bind:value={firstName} />
					</div>
					<PuffyBtn
						text="Next"
						icon="next"
						on:click={() => {
							if (firstName.trim()) {
								next();
								console.log(currentStep);
							}
						}}
					/>
				</div>
			</Step>
			<!-- <p>Enter your name</p>
			<div
				class="controls-wrapper"
				in:fly={{ x: 500, duration: 2000, delay: 1000 }}
				out:blur={{ duration: 1500 }}
			>
				<Nakedbtn text="Back" icon="back" on:click={prev} />
				<input id="nameInput" class=" " type="text" placeholder="Ash" bind:value={firstName} />
				<PuffyBtn
					text="Next"
					icon="next"
					on:click={() => {
						if (firstName.trim()) {
							firstName = document.getElementById('nameInput').value;
							next();
							console.log(currentStep);
						}
					}}
				/>
			</div>
			<InputDescription variant="name" /> -->
		{:else if currentStep === 4}
			<Step variant="surname">
				<div class="grid mb-4">
					<Nakedbtn text="Back" icon="back" on:click={prev} />
					<div class="flex flex-col items-center">
						<label for="surname" class="mb-4">What's your last name?</label>
						<input id="surname" type="text" placeholder="Ketchum" bind:value={surname} />
					</div>
					<PuffyBtn
						text="Next"
						icon="next"
						on:click={() => {
							if (surname.trim()) {
								next();
								console.log(currentStep);
							}
						}}
					/>
				</div>
			</Step>
			<!-- <p>Enter your surname</p>
			<div
				class="controls-wrapper"
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
				<input id="surnameInput" type="text" placeholder="Ketchum" bind:value={surname} />
				<PuffyBtn
					text="Next"
					icon="next"
					on:click={() => {
						if (surname.trim()) {
							surname = document.getElementById('surnameInput').value;
							next();
							console.log(currentStep);
						}
					}}
				/>
			</div>
			<InputDescription variant="surname" /> -->
		{:else if currentStep === 5}
			<Step variant="avatar">
				<div class="flex gap-8 items-end justify-center">
					<Nakedbtn text="Back" icon="back" on:click={prev} />
					<div class="flex flex-col items-center">
						<label for="avatar" class="mb-4">Upload a profile picture</label>
						<PuffyBtn id="avatar" text="Select file" icon="upload" />
					</div>
					<Nakedbtn
						text="Next"
						icon="Next"
						on:click={() => {
							next();
							console.log(currentStep);
						}}
					/>
				</div>
			</Step>
		{:else if currentStep === 6}
			<Step variant="cover">
				<div class="flex gap-8 items-end justify-center">
					<Nakedbtn text="Back" icon="back" on:click={prev} />
					<div class="flex flex-col items-center">
						<label for="cover" class="mb-4">Upload a profile picture</label>
						<PuffyBtn id="cover" text="Select file" icon="upload" />
					</div>
					<Nakedbtn
						text="Next"
						icon="Next"
						on:click={() => {
							next();
							console.log(currentStep);
						}}
					/>
				</div>
			</Step>
			<!-- <p>Upload a cover picture</p>
			<div
				class="controls-wrapper"
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
				<PuffyBtn text="Select file" icon="upload" />

				<Nakedbtn
					text="Next"
					icon="Next"
					on:click={() => {
						next();
						console.log(currentStep);
					}}
				/>
			</div>
			<InputDescription variant="cover" /> -->
		{:else if currentStep === 7}
			<!-- <div
				class=" flex flex-col gap-4 items-center justify-center rounded-lg bg-transparent w-full"
				in:fade={{ duration: 2000, delay: 1500 }}
			> -->
			<ThankYouCard />
			<!-- </div> -->
		{/if}
	</form>
</div>

<Profile {preview} {currentStep} {handle} {firstName} {surname} {coverImg} {avatarImg} />

<style lang="postcss">
	label {
		@apply text-lg text-slate-200 font-medium leading-7;
	}

	.at {
		@apply text-slate-500 h-12 items-center flex border-l-2 px-2 border-slate-800 rounded-l-lg border-y-2;
	}

	form {
		@apply flex flex-col gap-4 justify-center items-center max-w-[500px];
	}

	.controls-wrapper {
		@apply flex flex-col w-full items-center justify-center sm:flex-row gap-4;
	}

	.grid {
		display: grid;
		grid-template-columns: auto 1fr auto;
		align-items: end;
		gap: 20px;
	}
</style>
