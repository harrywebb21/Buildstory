<script>
	import MottoSingle from './MottoSingle.svelte';

	import Ship from '$lib/assets/Boat.svg';
	import Hammer from '$lib/assets/hammer.svg';
	import Connect from '$lib/assets/connected.svg';
</script>

<div class="flex gap-8">
	<MottoSingle title="Connect" icon={Connect} />
	<MottoSingle title="Build" icon={Hammer} />
	<MottoSingle title="Ship" icon={Ship} />
</div>
