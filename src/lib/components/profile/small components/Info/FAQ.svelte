<script>
	import faqIcon from '$lib/assets/FAQ.svg';
	import FaqItem from './FAQItem.svelte';
</script>

<div id="faq" class=" flex flex-col w-[560px] gap-12">
	<div class="heading-container flex flex-col gap-2">
		<div class="title-container flex items-center gap-2">
			<img src={faqIcon} alt="" />
			<h1 class="text-slate-50 text-5xl font-bold">FAQ</h1>
		</div>
		<p class=" text-xl font-medium text-slate-400">Got questions? We’ve got answers</p>
	</div>
	<div class="content-container flex flex-col gap-8">
		<FaqItem
			icon="book"
			title="Who is Buildstory for?"
			description="Anyone who wants be a part of a welcoming and engaged community centered around building indie startups."
		/>
		<FaqItem
			icon="search"
			title="What is an indie hacker?"
			description="We defer to Courtland Allen on this one: “an Indie Hacker is someone who aims to generate income independently [of venture capital etc.]”. More often than not, that income comes from software."
		/>
		<FaqItem
			icon="search"
			title="When are you launching?"
			description="Soon™️. We don’t have a date just yet, but we’re hoping to get the alpha out ASAP so we can start taking feedback."
		/>
		<FaqItem
			icon="search"
			title="Will membership be free?"
			description="Nope, Buildstory will be a paid community. While we want to make the platform accessible, we also want to keep it focused and free of noise. We’ll require a small but non-zero fee to be an active member, and that fee will be adjusted for purchasing power parity."
		/>
		<FaqItem
			icon="search"
			title="Talk tech to me—what’s the stack?"
			description="SvelteKit, NeonDB/Postgres (Supabase), Drizzle ORM, Upstash Redis, Tailwind, Vercel, Resend"
		/>
	</div>
</div>
