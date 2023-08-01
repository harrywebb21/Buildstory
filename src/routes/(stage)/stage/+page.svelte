<!-- <script>
	import ImageUploader from '$lib/components/ImageUploader.svelte';
	import { fileInput, files, upload } from '$lib/imageupload';
</script>

<div>
	{#each $files?.urls as url}
		<div class="h-52 w-52 border-4 rounded">
			<img src={url} class="w-full h-full" alt="blah" />
		</div>
	{/each}

	<form on:submit|preventDefault={upload}>
		<button use:fileInput type="button">Image uploader</button>
		<button type="submit">Upload</button>
	</form>
</div> -->

<script>
	import { fade, fly } from 'svelte/transition';
	let selected = 'Home';

	$: console.log(selected);
</script>

<div class="h-96 flex max-w-3xl mx-auto">
	<ul class="flex flex-col gap-4 pr-4 border-r mr-4">
		{#each ['Home', 'Feed', 'Projects'] as item}
			<div class="flex gap-2">
				<input hidden id={item} type="radio" name="nav" value={item} bind:group={selected} />
				<label for={item}>{item}</label>
			</div>
		{/each}
	</ul>

	<div class="h-full w-full relative flex-1">
		{#if selected === 'Home'}
			<div
				out:fade
				in:fly={{ x: 500, duration: 2000, opacity: 0 }}
				class="h-full w-full bg-blue-500 absolute"
			/>
		{:else if selected === 'Feed'}
			<div
				out:fade
				in:fly={{ x: 500, duration: 2000 }}
				class="h-full w-full bg-emerald-500 absolute"
			/>
		{:else}
			<div
				out:fade
				in:fly={{ x: 500, duration: 2000 }}
				class="h-full w-full bg-fuchsia-500 absolute"
			/>
		{/if}
	</div>
</div>
