<script>
	//@ts-nocheck
	import CoverImg from '$lib/components/profile/small components/CoverImg.svelte';
	import Avatar from '$lib/components/profile/small components/Avatar.svelte';
	import Line from '$lib/components/profile/small components/Line.svelte';
	import HLine from './small components/HLine.svelte';
	import Crown from '../badges/Crown.svelte';
	import Rocket from '../badges/Rocket.svelte';
	import Star from '../badges/Star.svelte';
	import MockProjects from './profile_sides/MockProjects.svelte';
	import MockNav from './profile_sides/MockNav.svelte';
	export let coverImg = 'cover.png';

	export let avatarImg = 'sam.jpeg';

	export let firstName = 'Leroy';
	export let surname = 'Jenkins';
	export let handle = 'leroy';

	export let preview;
	export let currentStep;
</script>

<!-- {#if stage === 1}
 -->
{#if preview}
	<div class="h-32" />
	<div class="flex items-center justify-center w-full h-[412px] -mt-12">
		<MockNav />
		<Line />
		<div class="flex flex-col w-[664px] h-[412px]">
			<div class=" flex justify-between w-full h-full">
				<div class="flex flex-col items-center h-fit p-12 w-full">
					<CoverImg {coverImg} />
					<div class=" w-fit h-fit -m-[10%]">
						<Avatar {avatarImg} />
					</div>
				</div>
			</div>
			<div class="flex flex-col items-center justify-center font-medium pt-6 h-full z-10">
				<div class="flex flex-col items-center justify-center text-slate-400 gap-1">
					<p class=" text-white">{firstName} {surname}</p>
					<p>@{handle}</p>
					<div class="flex gap-2 justify-center items-center">
						<Crown variant="gold" />
						<Star />
						<Rocket />
					</div>
				</div>
			</div>
		</div>
		<Line />
		<MockProjects />
	</div>
	<!-- {:else if stage >= 2} -->
{:else}
	<div class="h-32" />
	<div class="flex items-center justify-center w-full h-[412px] -mt-12">
		<MockNav />
		<Line />
		<div class="flex flex-col w-[664px] h-[412px]">
			<div class=" flex justify-between w-full h-full">
				<div class="flex flex-col items-center h-fit p-12 w-full">
					{#if currentStep >= 6}
						<CoverImg {coverImg} />
					{:else}
						<CoverImg styleTag="pulse" />
					{/if}

					<div class=" w-fit h-fit -m-[10%]">
						{#if currentStep >= 5}
							<Avatar {avatarImg} />
						{:else}
							<Avatar styleTag="pulse" />
						{/if}
					</div>
				</div>
			</div>
			<div class="flex flex-col items-center justify-center font-medium pt-6 h-full z-10">
				<div class="flex flex-col items-center justify-center text-slate-400 gap-1">
					<p class=" text-white">{firstName} {surname}</p>
					<p>@{handle}</p>
					<div class="flex gap-2">
						<!-- <Crown variant="gold" /> -->
						<Star />
						<Rocket />
					</div>
				</div>
			</div>
		</div>
		<Line />
		<MockProjects />
	</div>
{/if}
