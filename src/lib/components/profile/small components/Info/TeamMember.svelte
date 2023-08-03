<script>
	export let img;
	export let name;
	export let location;
	export let description;
	export let twitter;
	export let twitch;
	import twitterIcon from '$lib/assets/Twitter.svg';
	import twitchIcon from '$lib/assets/Twitch.svg';
</script>

<div class=" flex flex-col gap-2 w-[216px]">
	<div class="img-container w-24 h-24">
		<img class=" w-full h-full object-cover filter grayscale" src={img} alt="Image of {name}" />
	</div>
	<div class="">
		<p class=" text-lg font-bold text-slate-200 capitalize">{name}</p>
		<p class=" font-medium text-slate-200 italic capitalize">{location}</p>
		<p class="text-slate-400">{description}</p>
	</div>

	<div class=" flex gap-4">
		{#if twitter}
			<a href="https://twitter.com/{twitter}">
				<img src={twitterIcon} alt="Twitter Icon" />
			</a>
		{/if}
		{#if twitch}
			<a href="https://twitch.com/{twitch}">
				<img src={twitchIcon} alt="Twitch Icon" />
			</a>
		{/if}
	</div>
</div>
