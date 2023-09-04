<script>
	export let handle = '';
	import copyIcon from '$lib/assets/copy to clipboard.svg';
</script>

<div
	class="w-full p-6 rounded-2xl border-2 border-slate-800 flex flex-col justify-center items-center gap-4"
>
	<div class=" flex flex-col items-center w-full">
		<p class="text-slate-50 font-medium">
			Have friends who you think might want to join Buildstory, too?
		</p>
		<p class=" text-slate-400 font-medium">
			Invite them using your link, and if they join we’ll upgrade your badge
		</p>
	</div>
	<div class=" flex item justify-center w-full h-8 gap-2">
		<input
			class=" w-fit bg-slate-800 text-xs text-slate-400 px-2 py-2 rounded-lg"
			type="text"
			value="https://buildstory.com/join/{handle}"
		/>
		<button
			class=" w-8 flex items-center justify-center bg-none border-2 border-slate-800 p-2 rounded-lg"
		>
			<img src={copyIcon} alt="" />
		</button>
	</div>
</div>
