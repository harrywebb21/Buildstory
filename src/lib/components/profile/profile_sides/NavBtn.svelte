<script>
	import homeIcon from '$lib/assets/Home.svg';
	import notificationIcon from '$lib/assets/Notification.svg';
	import messageIcon from '$lib/assets/Envelope.svg';
	import membersIcon from '$lib/assets/Members.svg';
	import listIcon from '$lib/assets/List.svg';
	export let text = '';
</script>

<div class=" flex items-center gap-4 pl-6 py-4">
	{#if text === 'Home'}
		<img src={homeIcon} alt="" />
	{:else if text === 'Notifications'}
		<img src={notificationIcon} alt="" />
	{:else if text === 'Video Logs'}
		<img src={messageIcon} alt="" />
	{:else if text === 'Members'}
		<img src={membersIcon} alt="" />
	{:else if text === 'Projects'}
		<img src={listIcon} alt="" />
	{:else if text === 'Messages'}
		<img src={messageIcon} alt="" />
	{/if}

	<p class=" font-medium text-slate-400">{text}</p>
</div>
