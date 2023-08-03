<script>
	// @ts-nocheck

	import { getColors } from '$lib/actions';
	import { blendTarget } from '$lib/utils';
	import uploadImg from '$lib/assets/document.svg';
	export let avatarImg = '';
	export let placeholder =
		'https://s3-alpha-sig.figma.com/img/d591/3104/b315483a4512abb8ec7bb6d090f99098?Expires=1691366400&Signature=S8W1apOUzL-1EIoMuc4Tl6u4uFHdw9IQu5vceBOj1NM3DULjDC29NM0SX0OqNv0mrUNDrDOBCvVcloSOcjylUFh~iJ78cnxj0L4p8xYhuE-WhsQ745jzc7SrO0Su2uhQvnzxJPV6xO7m34ZctOAdZYIWLDTy0B3ElAQi~ejw2JkmzCAZ9pXt-z1NkRJPGnV5~FbKaU8JIESevKlGo0IdU0vDTNo09Er8BufqO3iTaj9rvMng7wW2UmlmXpfNsJ7IktrTUyNzUmy3OjleVlqr6fg0XmAeAWjlIFid5zwX5~si0aL7Il8M~WDJH4eTI36w-YTGC0YB49vP~N8E2Lk9FA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4';

	export let glow;
	export let styleTag = '';
	let img;
</script>

<div class="wrapper">
	{#if avatarImg}
		<div class="glow" bind:this={glow} />
	{:else}
		<div class="glow-ph" bind:this={glow} />
	{/if}
	<div class="container {styleTag}">
		{#if avatarImg}
			<img
				id="avatarImg"
				class=""
				use:getColors={(colors) => blendTarget(colors, glow)}
				src={avatarImg}
				bind:this={img}
				alt=""
				crossorigin="anonymous"
			/>
		{:else}
			<img
				class="coverImgPlaceholder"
				use:getColors={(colors) => blendTarget(colors, glow)}
				src={placeholder}
				bind:this={img}
				alt=""
				crossorigin="anonymous"
			/>
			<img class="uploadIcon" src={uploadImg} alt="upload icon" />
		{/if}
	</div>
</div>

<style>
	.container {
		width: 100%;
		height: 100%;
		position: relative;
		border-radius: 50%;
		overflow: hidden;
		background-color: rgba(255, 255, 255, 0.05);
		box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.15);
		backdrop-filter: blur(2px);
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.uploadIcon {
		opacity: 0.3;
		animation: uploadIconPulse 2s ease-in-out infinite;
	}

	.pulse {
		border: 2px dashed rgba(255, 255, 255, 0.3);
		animation: borderPulse 2s ease-in-out infinite;
	}

	.coverImgPlaceholder {
		width: 100%;
		height: 100%;
		object-fit: cover;
		display: none;
		filter: blur(30px) hue-rotate(30deg);
	}

	.glow {
		width: 125%;
		height: 125%;
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translateX(-50%) translateY(-50%) rotate(180deg);
		filter: blur(30px);
		opacity: 0.8;
	}

	.glow-ph {
		width: 100%;
		height: 100%;
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translateX(-50%) translateY(-50%) rotate(180deg);
		filter: blur(30px) hue-rotate(30deg);
		opacity: 1;
	}

	.wrapper {
		width: 96px;
		height: 96px;
		position: relative;
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
