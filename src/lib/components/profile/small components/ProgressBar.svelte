<script>
	export let stage = 0;
</script>

<!-- {#if stage === 0}
	<div class="" /> -->
{#if stage === 1}
	<div class="progressBar">
		<div class="progress unactive w-1/5" />
		<div class="progress unactive w-1/5" />
		<div class="progress unactive w-1/5" />
		<div class="progress unactive w-1/5" />
		<div class="progress unactive w-1/5" />
	</div>
	w-1/5
{:else if stage === 2}
	<div class="progressBar">
		<div class="container relative">
			<div class="progress completed fade absolute top-0" />
			<div class="progress unactive absolute top-0 w-full" />
		</div>
		<div class="progress unactive w-1/5" />
		<div class="progress unactive w-1/5" />
		<div class="progress unactive w-1/5" />
		<div class="progress unactive w-1/5" />
	</div>
{:else if stage === 3}
	<div class="progressBar">
		<div class="container relative">
			<div class="progress completed absolute top-0" />
			<div class="progress unactive absolute top-0 w-full" />
		</div>
		<div class="container relative">
			<div class="progress completed fade absolute top-0" />
			<div class="progress unactive absolute top-0 w-full" />
		</div>
		<div class="progress unactive w-1/5" />
		<div class="progress unactive w-1/5" />
		<div class="progress unactive w-1/5" />
	</div>
{:else if stage === 4}
	<div class="progressBar">
		<div class="container relative">
			<div class="progress completed absolute top-0" />
			<div class="progress unactive absolute top-0 w-full" />
		</div>
		<div class="container relative">
			<div class="progress completed absolute top-0" />
			<div class="progress unactive absolute top-0 w-full" />
		</div>
		<div class="container relative">
			<div class="progress completed fade absolute top-0" />
			<div class="progress unactive absolute top-0 w-full" />
		</div>
		<div class="progress unactive w-1/5" />
		<div class="progress unactive w-1/5" />
	</div>
{:else if stage === 5}
	<div class="progressBar">
		<div class="container relative">
			<div class="progress completed absolute top-0" />
			<div class="progress unactive absolute top-0 w-full" />
		</div>
		<div class="container relative">
			<div class="progress completed absolute top-0" />
			<div class="progress unactive absolute top-0 w-full" />
		</div>
		<div class="container relative">
			<div class="progress completed absolute top-0" />
			<div class="progress unactive absolute top-0 w-full" />
		</div>
		<div class="container relative">
			<div class="progress completed fade absolute top-0" />
			<div class="progress unactive absolute top-0 w-full" />
		</div>
		<div class="progress unactive w-1/5" />
	</div>
{/if}

<style>
	.progressBar {
		width: 30%;
		height: 18px;
		border: 2px solid #1e293b;
		box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.15);
		border-radius: 8px;
		backdrop-filter: blur(10px);
		padding: 4px;
		display: flex;
		gap: 4px;
		position: relative;
	}

	.unactive {
		opacity: 0.2;
		box-shadow: inset 0px 2px 2px 0px rgba(138, 255, 180, 1),
			inset 0px -3px 4px 0px rgba(19, 141, 63, 1);
	}

	.completed {
		width: 100%;
		opacity: 1;
		box-shadow: inset 0px 2px 2px 0px rgba(138, 255, 180, 1),
			inset 0px -3px 4px 0px rgba(19, 141, 63, 1), 0px 0px 20px 2px rgba(138, 255, 180, 0.4);
	}

	.progress {
		height: 100%;

		background-color: rgba(138, 255, 180, 1);
		border-radius: 16px;
		transition: all 0.5s ease-in-out;
	}

	.fade {
		animation: progress 1s ease-in-out;
	}
	.container {
		width: 20%;
	}

	@keyframes progress {
		0% {
			opacity: 0%;
			width: 0%;
		}
		100% {
			opacity: 100%;
			width: 100%;
		}
	}
</style>
