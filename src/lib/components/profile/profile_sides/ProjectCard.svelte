<script>
	export let project = '';
</script>

{#if project === 'mock1'}
	<div class="flex flex-col">
		<div class=" flex gap-2 items-center p-4 border-2 border-slate-800 border-b-0 rounded-t-lg">
			<div class=" w-6 h-6 rounded-full">
				<img
					class="w-full h-full image-cover rounded-full"
					src="https://s3-alpha-sig.figma.com/img/3d66/5700/25d4c5d626f1ef5b0176dac8833e93ab?Expires=1691971200&Signature=U-Vdij6UH70xJBsyDI4PhYucjFBfAXds6qf~b-pv7H9vonhjLV7j8LRO8bhFwmNDU5n2OyM3V9wn8CNQQBWOSZsbuTiwWSDxLIPNWxE7rJIcnP-Pcl6bb3fMNvGtq9~vJExQOHffFBbVTZCNLFmO309sQYqhwjZmuQ2lu2kWkY5A4qehKXEdAUQERkt42iEPSuWIBgbutLYtX1kOwq2zmpLtPbbidiaX1grvyNSwHOQ9yO6d4y0t9kI-0UGJrlA5rr7QGIOfjS32OdeElpU6SuCp0wGr44ABKkxiZCStpyI9VdO5nG4IUTPS6HN7nRUN3K3ZcMQovkyutKh3jlDwog__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
					alt=""
				/>
			</div>
			<div class="flex flex-col">
				<p class=" font-medium text-slate-200 text-sm">Shiny</p>
				<p class="font-medium text-slate-400 text-sm">Community</p>
			</div>
		</div>
		<div class="flex items-center justify-center border-2 p-4 border-slate-800 rounded-b-lg">
			<p class=" font-medium text-slate-50 text-xs">
				1,073 <span class="text-slate-400">members</span>
			</p>
		</div>
	</div>
{:else if project === 'mock2'}
	<div class=" flex flex-col">
		<div class=" flex gap-2 items-center p-4 border-2 border-slate-800 border-b-0 rounded-t-lg">
			<div class=" w-6 h-6 rounded-full">
				<img
					class="w-full h-full image-cover rounded-full"
					src="https://s3-alpha-sig.figma.com/img/d596/1380/675b83e3a5006c459b49aa2f6f13bc69?Expires=1691971200&Signature=GWTGcxCX-cMZOdi6-S3SLgaBYi-eHpxgCPu-g4yWLuhGANHEbcZAhGjpUmxxc7eLlhoE1vnldeXVyNd4OhWzwCcKEpC0VaZX258aMOStzGBBxeXp8cA54jShYVtPP~~ePlIMRJbHgBCaazGGU7ya3aI5nJO5MMLj-lyC4QN3DLpXepCOlWUhSnPHlX2C-7IInBiXDyh7aCFrkw~NHImJJuV3oObsl~SNehexL-LYYHCizRhd6nJiOMJA~SHXJF1MJdm0UrzjjDvB9nnZQHVoo16DK0Z6Pil4sahZRECUq8zy-hOODFcKCKqllyM8gp5BRZfMcTa8DvyxldR-aqMjCg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
					alt=""
				/>
			</div>
			<div class="flex flex-col">
				<p class=" font-medium text-slate-200 text-sm">MakerPad</p>
				<p class="font-medium text-slate-400 text-sm">Education</p>
			</div>
		</div>
		<div class="flex items-center p-4 justify-between border-2 border-slate-800 rounded-b-lg">
			<p class="font-medium text-slate-50 text-xs">Status</p>
			<p class=" font-medium text-green-300 text-xs">Acquired</p>
		</div>
	</div>
{/if}
