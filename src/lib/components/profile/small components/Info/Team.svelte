<script>
	// @ts-nocheck

	import teamIcon from '$lib/assets/Safety Collection Place.svg';
	import TeamMember from './TeamMember.svelte';
</script>

<div id="team" class="flex flex-col gap-12">
	<div class="heading-container flex flex-col items-center justify-center gap-2">
		<img class=" w-8 h-8 p-2 rounded-lg border-2 border-slate-800" src={teamIcon} alt="" />
		<h1 class=" font-bold text-5xl text-slate-50">Team</h1>
		<p class=" text-xl font-medium text-slate-400">
			A misfit bunch of indie hackers from across the globe
		</p>
	</div>
	<div class=" flex gap-8">
		<TeamMember
			img="https://media.licdn.com/dms/image/D5603AQEiuVbBVwCutA/profile-displayphoto-shrink_100_100/0/1669101942098?e=1714608000&v=beta&t=opn93j8x4VPdfO7w7P0vT9HzGnPH9hFZA3b9qewGEWY"
			name="Noel"
			location="USA"
			description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. "
			twitch="codefork"
		/>
		<TeamMember
			img="https://media.licdn.com/dms/image/D5603AQFfh2_ARLvNtQ/profile-displayphoto-shrink_200_200/0/1680043806832?e=1714608000&v=beta&t=kmcHTOO43oZbL8drndIkFczah_vM5s5lgIFbHFuePW8"
			name="Harry"
			location="UK"
			description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. "
			twitter="harry_webb98"
			twitch="mysticharry_"
		/>
		<!-- <TeamMember
			img="https://s3-alpha-sig.figma.com/img/1d20/9719/1ef4ec7009c9165f5acb172b7d2be76d?Expires=1691971200&Signature=ofgAZhVsI0vHpzFVaff9SpNQjLI2YLRgMpbfVML43bFxKy5H1nD-sRxXA~3XifZHq7ZfxwjQ3crZQ5lgL0xkVsyfHxYDlDDX1F7plEUnudzYPJ8Rov~uaY5e3R6Qb~MAmxw~85IA6BCSHF8z-4BngXLx5wym2843kHqP5a7c7jC-I3X1-WHKdJezkLdcznpoMiigW-4KpKgnXdiBVIs2z0Pmq0JInKXM2rjx7tzFJV5LFakurJOQLTPGKHKmJENb-h~pzFOClwKZHn8nvOJAXQbNBh368IrcJSu3ZIxMOQgSy6y1WjBCftboapexsQKFNky~ph4t8o4155E9oidXNw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
			name="Brett"
			location="New Zealand"
			description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. "
		/> -->
		<TeamMember
			img="https://media.licdn.com/dms/image/C5603AQFDGEmMXFp3Pw/profile-displayphoto-shrink_100_100/0/1615759702116?e=1714608000&v=beta&t=p6TSOToqr2-Ct3b_5sdJ5REV25_jXyRR8sPDjYejmE0"
			name="Charlie"
			location="New Zealand"
			description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. "
			twitter="thecoppinger"
			twitch="thecoppinger"
		/>
	</div>
</div>
