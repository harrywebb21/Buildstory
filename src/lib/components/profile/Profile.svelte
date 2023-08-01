<script>
	import CoverImg from '$lib/components/profile/small components/CoverImg.svelte';
	import Avatar from '$lib/components/profile/small components/Avatar.svelte';
	import Line from '$lib/components/profile/small components/Line.svelte';
	import HLine from './small components/HLine.svelte';
	import Crown from '../badges/Crown.svelte';
	import DashedLine from '$lib/components/profile/small components/DashedLine.svelte';
	let coverImg =
		'https://s3-alpha-sig.figma.com/img/d591/3104/b315483a4512abb8ec7bb6d090f99098?Expires=1691366400&Signature=S8W1apOUzL-1EIoMuc4Tl6u4uFHdw9IQu5vceBOj1NM3DULjDC29NM0SX0OqNv0mrUNDrDOBCvVcloSOcjylUFh~iJ78cnxj0L4p8xYhuE-WhsQ745jzc7SrO0Su2uhQvnzxJPV6xO7m34ZctOAdZYIWLDTy0B3ElAQi~ejw2JkmzCAZ9pXt-z1NkRJPGnV5~FbKaU8JIESevKlGo0IdU0vDTNo09Er8BufqO3iTaj9rvMng7wW2UmlmXpfNsJ7IktrTUyNzUmy3OjleVlqr6fg0XmAeAWjlIFid5zwX5~si0aL7Il8M~WDJH4eTI36w-YTGC0YB49vP~N8E2Lk9FA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4';

	let avatarImg =
		'https://s3-alpha-sig.figma.com/img/0c26/9829/20807e48e8cbb2557a0f59cc06dfa292?Expires=1691366400&Signature=h9uPYc5rlmlMUShBYxsH5RK618w4oFDe~aOY6awWrTGTwBdHNoWL~iDIDb8fFRJPHtpjmGrZljSw9z3uWYuWw8IrXdVOXa6GI3IFXr6BpsAjkF521CYNA9BLIpWFmwspEIQyO1p29G6ta3i8tGY4YmyCWoHokbZNWGCxiVF2zm7nWJsImbFCmowxfpNMiLcCCd8Sz6YgQwtNCBXGPuscujjWFvBAq5Qvrvv0bX6OmhkGdgodhVMJkHuJn0fwac4RiqJ40JjEzfJ6n0GYzi6P1wBro9W32ycsaOzNpdTPjgm76vgqgC1N~W2ufKJvjcmN~oFawLPkzditGvfAOy8Xww__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4';

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
					<Crown variant="gold" />
				</div>
				<div class="flex flex-col justify-end items-center w-full h-full">
					<HLine />
				</div>
			</div>
		</div>

		<Line />
	</div>
	<!-- {:else if stage >= 2} -->
{:else}
	<div class="h-32" />
	<div class="flex items-center justify-center w-full h-[412px] -mt-12">
		<Line />
		<div class="flex flex-col w-[664px] h-[412px]">
			<div class=" flex justify-between w-full h-full">
				<div class="flex flex-col items-center h-fit p-12 w-full">
					{#if currentStep >= 5}
						<CoverImg {coverImg} />
					{:else}
						<CoverImg />
					{/if}

					<div class=" w-fit h-fit -m-[10%]">
						{#if currentStep >= 4}
							<Avatar {avatarImg} />
						{:else}
							<Avatar />
						{/if}
					</div>
				</div>
			</div>
			<div class="flex flex-col items-center justify-center font-medium pt-6 h-full z-10">
				<div class="flex flex-col items-center justify-center text-slate-400 gap-1">
					<p class=" text-white">{firstName} {surname}</p>
					<p>@{handle}</p>
					<Crown variant="gold" />
				</div>
				<div class="flex flex-col justify-end items-center w-full h-full">
					<HLine />
				</div>
			</div>
		</div>
		<Line />
	</div>
{/if}
