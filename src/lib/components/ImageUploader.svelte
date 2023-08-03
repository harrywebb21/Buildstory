<script>
	//@ts-nocheck
	let input;

	const fileInput = (node) => {
		function openFileExplorer(e) {
			input.click();
		}
		node.addEventListener('click', openFileExplorer);

		return {
			destroy: () => {
				node.removeEventListener('click', openFileExplorer);
			}
		};
	};
</script>

<form>
	<button type="submit" use:fileInput>Image uploader</button>
	<input
		bind:this={input}
		type="file"
		on:input={(e) => console.log(e.target.files[0])}
		id="getImage"
		hidden
	/>
</form>
