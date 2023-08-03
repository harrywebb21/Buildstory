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
			img="https://s3-alpha-sig.figma.com/img/c87a/a7e3/6f897d4052d25dd912ac9012442a2745?Expires=1691971200&Signature=Hzz7U6GyvVWYpduvnLTh0ELGb0ixPmCL5kwXAdEt-eDNYigB4NJeSITIhTjJ7KjfIm6Nl6Q3yfdcge1IM8szvVX6jiT21UmgYmoHJBp1~V1WNSFUCeoyrHA6fcdPfnVMsQ5byeAWfBxKhjq8PqKNPLs3dPy2HSWDZr5rkJ8gW0pQgxkzAr2YabaNyeBOAxgJ2ocWOM8cQHsxfQe8S77dTfWRy7r5Pk0BXOpfX-fBn3058EBhadbS0o5m8K8i9pOnXN8dNaIqaukKsp4GsmtHHhctLYb2dp35oKpAp7zwhopjtTiLHAqDWicLoLH36E9GCzQI409kRJ-yvQkCOdpv-A__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
			name="Noel"
			location="USA"
			description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. "
			twitch="codefork"
		/>
		<TeamMember
			img="https://s3-alpha-sig.figma.com/img/08e9/63c5/0259ec1465ed1a7fbc7a358c013a7e72?Expires=1691971200&Signature=HjQHDw3ltFGHNJpDv~Y5nxEwBB5MS1g-yH3oUEb96nQIkLN7hpA1T694vonUvV~mzlBdNs72ZUbSSLAwFNLo4qKu2RzgBWeJGxh849ZDbcBc2o0kjaeRxIFBFRX4xnSeEU-qUPEIDKjoRTlw-HWAL3ir40PW~8JdkeRzF~Y29J~RonJ-eknxkrRADUeibBT4FePHntmFXK1a0C-n4pcUOPuQlk34A38auOka2ak2E1KTwNefVvmXwj1IlsVNhJPIcRbKZjvwHUAbLN0vXuzKcAviUCrue1WuwXh8NyYr0gYFN~d42aPvmXak6KsTs~DalOXPiOiHh0uQM59NCYPziQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
			name="Harry"
			location="UK"
			description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. "
			twitter="harry_webb98"
			twitch="mysticharry_"
		/>
		<TeamMember
			img="https://s3-alpha-sig.figma.com/img/1d20/9719/1ef4ec7009c9165f5acb172b7d2be76d?Expires=1691971200&Signature=ofgAZhVsI0vHpzFVaff9SpNQjLI2YLRgMpbfVML43bFxKy5H1nD-sRxXA~3XifZHq7ZfxwjQ3crZQ5lgL0xkVsyfHxYDlDDX1F7plEUnudzYPJ8Rov~uaY5e3R6Qb~MAmxw~85IA6BCSHF8z-4BngXLx5wym2843kHqP5a7c7jC-I3X1-WHKdJezkLdcznpoMiigW-4KpKgnXdiBVIs2z0Pmq0JInKXM2rjx7tzFJV5LFakurJOQLTPGKHKmJENb-h~pzFOClwKZHn8nvOJAXQbNBh368IrcJSu3ZIxMOQgSy6y1WjBCftboapexsQKFNky~ph4t8o4155E9oidXNw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
			name="Brett"
			location="New Zealand"
			description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. "
		/>
		<TeamMember
			img="https://s3-alpha-sig.figma.com/img/08e9/63c5/0259ec1465ed1a7fbc7a358c013a7e72?Expires=1691971200&Signature=HjQHDw3ltFGHNJpDv~Y5nxEwBB5MS1g-yH3oUEb96nQIkLN7hpA1T694vonUvV~mzlBdNs72ZUbSSLAwFNLo4qKu2RzgBWeJGxh849ZDbcBc2o0kjaeRxIFBFRX4xnSeEU-qUPEIDKjoRTlw-HWAL3ir40PW~8JdkeRzF~Y29J~RonJ-eknxkrRADUeibBT4FePHntmFXK1a0C-n4pcUOPuQlk34A38auOka2ak2E1KTwNefVvmXwj1IlsVNhJPIcRbKZjvwHUAbLN0vXuzKcAviUCrue1WuwXh8NyYr0gYFN~d42aPvmXak6KsTs~DalOXPiOiHh0uQM59NCYPziQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
			name="Charlie"
			location="New Zealand"
			description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. "
			twitter="thecoppinger"
			twitch="thecoppinger"
		/>
	</div>
</div>
