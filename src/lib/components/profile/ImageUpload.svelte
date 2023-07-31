<script>
	import { enhance, applyAction } from '$app/forms';
	/** @type {import('./$types').ActionData} */
	export let form;

	let isLoading = false;
	function onSubmit() {
		isLoading = true;
		return async ({ result }) => {
			if (result.type === 'success') {
				isLoading = false;
			}
			await applyAction(result);
		};
	}
</script>

<main class="main">
	<div class="container">
		<form method="POST" action="/" enctype="multipart/form-data" use:enhance={onSubmit}>
			<div class="card-body">
				<div class="form-control">
					<input
						name="file"
						type="file"
						class="file-input file-input-bordered file-input-info w-full max-w-xs"
					/>
				</div>
				<div class="form-control mt-6">
					<button class="btn btn-primary" type="submit" disabled={isLoading}
						>{#if isLoading} Uploading... {:else}Upload{/if}</button
					>
				</div>
			</div>
		</form>

		{#if form?.success && form?.image}
			<img src={form.image} class="max-w-sm rounded-lg shadow-2xl" alt="uploaded" />
		{/if}
		{#if isLoading}
			Uploading your image to Cloudinary...
		{/if}
	</div>
</main>

<style>
	.container {
		width: 100%;
		max-width: 1024px;
		padding: 0 1em;
		margin: 0 auto;
		color: white;
	}
</style>
