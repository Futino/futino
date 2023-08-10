<script lang="ts">
	import FAQCard from '../molecules/FAQCard.svelte';
	import SearchBox from '../molecules/SearchBox.svelte';
	// Gets the Frequently Asked Questions by parent component
	export let faqs: {
		index: number;
		question: string;
		answer: string;
	}[] = [];
	let activeEntry: number;

	const handleClick = (questionIndex: number) => () => (activeEntry = questionIndex);

	// For Search Input
	let searchInput = '';
	let filteredFaqs: {
		index: number;
		question: string;
		answer: string;
	}[] = [];

	// Matches photoData
	const searchPhotos = () => {
		return (filteredFaqs = faqs.filter((faq) => {
			if (faq.question.toLowerCase().includes(searchInput.toLowerCase())) return true;
			if (faq.answer.toLowerCase().includes(searchInput.toLowerCase())) return true;
		}));
	};
</script>

<section
	class="grid grid-cols-1 md:grid-cols-3 items-center gap-3 section overflow-hidden relative">
	<div
		class="absolute bottom-0 w-screen bg-gradient-to-t from-surface-variant-dark to-transparent h-24" />
	<div class="col-span-1 gap-y-2 self-start text-left text-surface-on-dark">
		<h1 class="font-bold display-medium leading-tight">Your Safari Questions, Answered</h1>
		<h1 class="pb-6 body-large">
			Find Clarity and Confidence in Planning Your Unforgettable African Adventure.
		</h1>
	</div>
	<div class="flex flex-col gap-4 h-screen col-span-2 items-center">
		<SearchBox class="w-full mb-4" bind:searchInput on:input={searchPhotos} />

		{#if searchInput && filteredFaqs.length === 0}
			<section>
				<div class="w-full py-12 display-small inline">
					<h1 class="">Sorry, we couldn't find your question.</h1>
					<a href="/contact" class="underline text-tertiary-dark">Try Asking Us Here</a>
				</div>
			</section>
		{:else if filteredFaqs.length > 0}
			{#each filteredFaqs as { question, answer, index }}
				<FAQCard {question} {answer} isOpen={index == activeEntry} />
			{/each}
		{:else}
			{#each faqs as { question, answer, index }}
				<FAQCard {question} {answer} isOpen={index == activeEntry} />
			{/each}
		{/if}
	</div>
</section>