<script>
	//@ts-nocheck
	import search from '$lib/assets/search.svg';
	import book from '$lib/assets/book.svg';

	export let icon;
	export let title;
	export let description;
</script>

<div
	class=" flex md:gap-8 h-full flex-col md:flex-row items-center justify-center md:justify-start md:items-start w-full"
>
	<div class=" flex flex-row md:flex-col gap-4 md:w-1/3 items-center md:items-start">
		{#if icon === 'search'}
			<img class=" w-8 h-8 p-2 rounded-lg border-2 border-slate-800" src={search} alt="" />
		{:else if icon === 'book'}
			<img class=" w-8 h-8 p-2 rounded-lg border-2 border-slate-800" src={book} alt="" />
		{/if}
		<p class=" text-slate-50 font-medium">{title}</p>
	</div>
	<div class=" flex md:justify-end md:items-end w-4/5 md:w-2/3 pt-12">
		<p class="text-slate-400 font-medium">
			{description}
		</p>
	</div>
</div>
