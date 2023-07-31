<script>
	import InfoSection from './small components/Info/InfoSection.svelte';

	import crowdOrange from '$lib/assets/CrowdOrange.svg';
	import crowdPink from '$lib/assets/CrowdPink.svg';
	import checkBox from '$lib/assets/CheckedCheckBox.svg';
</script>

<div class=" flex justify-evenly gap-4">
	<InfoSection
		title="Built for the Builders"
		subheading="Twitter for indie hackers"
		description="Share your journey, engage with your peers, and get the visibility you deserve."
		icon={crowdOrange}
	/>
	<InfoSection
		title="Get shit done"
		subheading="Find contributors & co-founders"
		description="From idea to execution, manage your workflow efficiently & stay organized."
		icon={checkBox}
	/>
	<InfoSection
		title="Ship it together"
		subheading="Find contributors & co-founders"
		description="Connect with contributors and potential co-founders."
		icon={crowdPink}
	/>
</div>
