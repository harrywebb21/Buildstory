<script>
	import { getColors } from '$lib/actions.js';
	import { blendTarget } from '$lib/utils.js';
	import uploadImg from '$lib/assets/upload.svg';
	import ImageUpload from '../ImageUpload.svelte';
	export let coverImg = '';
	let placeholder =
		'https://s3-alpha-sig.figma.com/img/d591/3104/b315483a4512abb8ec7bb6d090f99098?Expires=1691366400&Signature=S8W1apOUzL-1EIoMuc4Tl6u4uFHdw9IQu5vceBOj1NM3DULjDC29NM0SX0OqNv0mrUNDrDOBCvVcloSOcjylUFh~iJ78cnxj0L4p8xYhuE-WhsQ745jzc7SrO0Su2uhQvnzxJPV6xO7m34ZctOAdZYIWLDTy0B3ElAQi~ejw2JkmzCAZ9pXt-z1NkRJPGnV5~FbKaU8JIESevKlGo0IdU0vDTNo09Er8BufqO3iTaj9rvMng7wW2UmlmXpfNsJ7IktrTUyNzUmy3OjleVlqr6fg0XmAeAWjlIFid5zwX5~si0aL7Il8M~WDJH4eTI36w-YTGC0YB49vP~N8E2Lk9FA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4';
	export let test;
	let img;
</script>

<div class="wrapper">
	<div class="glow" bind:this={test} />
	<div class="container">
		<img
			class="coverImgPlaceholder"
			use:getColors={(colors) => blendTarget(colors, test)}
			src={placeholder}
			bind:this={img}
			alt=""
			crossorigin="anonymous"
		/>
		<ImageUpload />
		<img class="uploadIcon" src={uploadImg} alt="upload icon" />
	</div>
</div>

<!-- <div class="wrapper">
	<div class="glow" bind:this={test} />
	<div class="container">
		<img
			use:getColors={(colors) => blendTarget(colors, test)}
			src={coverImg}
			bind:this={img}
			alt=""
			crossorigin="anonymous"
		/>
	</div>
</div> -->

<style>
	.upload {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		cursor: pointer;
		opacity: 0;
	}

	.container {
		width: 100%;
		height: 100%;
		position: relative;
		border-radius: 16px;
		overflow: hidden;
		background-color: rgba(255, 255, 255, 0.05);
		box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.15);
		border: 3px dashed rgba(255, 255, 255, 0.3);
		backdrop-filter: blur(10px);
		animation: borderPulse 2s ease-in-out infinite;
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.uploadIcon {
		opacity: 0.3;
		animation: uploadIconPulse 2s ease-in-out infinite;
	}

	.coverImgPlaceholder {
		width: 100%;
		height: 100%;
		object-fit: cover;
		display: none;
	}

	.glow {
		width: 100%;
		height: 100%;
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translateX(-50%) translateY(-50%) rotate(180deg);
		filter: blur(100px) hue-rotate(305deg);
		opacity: 1;
		/* animation: glow 5s ease-in-out infinite; */
	}
	.wrapper {
		position: relative;
		width: 100%;
		height: 200px;
	}

	@keyframes borderPulse {
		0% {
			border: 2px dashed rgba(255, 255, 255, 0.3);
		}
		50% {
			border: 2px dashed rgba(255, 255, 255, 1);
		}
		100% {
			border: 2px dashed rgba(255, 255, 255, 0.3);
		}
	}

	@keyframes glow {
		0% {
			transform: translateX(-50%) translateY(-50%) rotate(180deg);
			filter: blur(100px) hue-rotate(305deg);
			opacity: 1;
		}
		50% {
			transform: translateX(-50%) translateY(-50%) rotate(180deg);
			filter: blur(100px) hue-rotate(305deg);
			opacity: 0;
		}
		100% {
			transform: translateX(-50%) translateY(-50%) rotate(180deg);
			filter: blur(100px) hue-rotate(305deg);
			opacity: 1;
		}
	}
	@keyframes uploadIconPulse {
		0% {
			opacity: 0.3;
		}
		50% {
			opacity: 1;
		}
		100% {
			opacity: 0.3;
		}
	}
</style>
