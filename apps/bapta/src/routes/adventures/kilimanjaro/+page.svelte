<script lang="ts">
	import Header from '$lib/components/organisms/Header.svelte';
	import Footer from '$lib/components/organisms/Footer.svelte';
	import OutlineButton from '$lib/components/molecules/OutlineButton.svelte';
	import FAQ from '$lib/components/organisms/FAQSection.svelte';
	import MountPage from '$lib/components/pages/MountPage.svelte';
	import kilimanjaroFaq from '$lib/components/tsData/kilimanjaroFaq';
	import { addChosenJourney, journeysStore } from '$lib/journeysStore';

	const routes = [
		{
			id: 'marangu-route',
			label: 'Marangu Route',
			difficulty: 'Intermediate',
			days: 5,
			body: "The Machame Route, also known as the 'Whiskey Route', is a more challenging route with steeper inclines and longer duration, but offers more scenic views and better acclimatization.",
			img_path: '/images/kilimanjaro/2.webp',
		},
		{
			id: 'machame-route',
			label: 'Machame Route',
			difficulty: 'Expert',
			days: 6,
			body: "The Machame Route, also known as the 'Whiskey Route', is a more challenging route with steeper inclines and longer duration, but offers more scenic views and better acclimatization.",
			img_path: '/images/kilimanjaro/5.webp',
		},
		{
			id: 'lemosho route',
			label: 'Lemosho',
			difficulty: 'Easy',
			days: 7,
			body: `The Lemosho Route departs from the west side of the mountain, offering plenty of spectacular views of the dramatic gorges of the western side of Kilimanjaro. The route starts by taking you through the remote rainforest, before joining the Machame Route. `,
			img_path: '/images/kilimanjaro/11.webp',
		},
	];

	const overview_topics = [
		{
			label: 'The Climbing Experience',
			body: "Climbing Kilimanjaro is a once-in-a-lifetime experience that requires careful preparation and planning. Our team of expert guides and porters will ensure that you have a safe and memorable climb to the top of Africa's highest peak.",
		},
		{
			label: 'Difficulty Level',
			body: 'Climbing Kilimanjaro is a challenging trek, but it is accessible to most people with a good level of fitness and determination. The level of difficulty varies depending on the route and your level of experience.',
		},
		{
			label: 'Route Options',
			body: 'We offer a range of routes to suit your preferences and level of experience. Each route has its own unique features and challenges, from the shorter and less strenuous Marangu route to the longer and more scenic Lemosho route.',
		},
		{
			label: 'Duration',
			body: 'The duration of the climb depends on the route you choose and your pace. Most climbs take between five and nine days to complete, with some routes offering shorter or longer options.',
		},
	];
</script>

<svelte:head>
	<title>Bapta - Climbing Kilimanjaro</title>
	<meta
		name="description"
		content="Reach new heights by climbing Africa's highest mountain. We offer fully customizable routes for all levels of difficulty." />
</svelte:head>

<MountPage
	hero_header="Climb Africa's Highest Peak"
	hero_subtitle="Reach New Heights on Africa's Iconic Summit"
	hero="bg-kilimanjaro"
	FAQs={kilimanjaroFaq}
	{overview_topics}>
	<div class="grid grid-cols-1 md:grid-cols-2 gap-6 justify-items-center items-center">
		{#each routes as { label, difficulty, days, body, img_path, id }}
			<div class="bg-surface rounded-lg shadow-lg max-w-3xl flex flex-col h-full w-full">
				<img
					src={img_path}
					alt="Marangu Route"
					class="w-full object-cover object-center h-[400px] sm:h-[500px] md:h-[600px] lg:h-[700px] rounded-t-lg bg-gradient-to-b from-transparent to-surface" />

				<!-- svelte-ignore a11y-click-events-have-key-events -->
				<!-- svelte-ignore a11y-no-static-element-interactions -->
				<!--Route Details-->
				<div class="flex flex-col px-12 py-6 content-between h-fit">
					<h3 class="mb-2 font-bold headline-medium text-primary">{label}</h3>
					<div class="flex flex-col items-center gap-y-1 my-3">
						<h1 class="title-large text-primary">Difficulty</h1>
						<div
							class=" rounded-md [&>*]:py-2 [&>*]:px-3 [&>*]:w-fit [&>*]:rounded-md [&>*]:text-white">
							{#if difficulty == 'Easy'}
								<h1 class=" bg-green-800 label-large">NOVICE LEVEL</h1>
							{:else if difficulty == 'Intermediate'}
								<h1 class=" bg-orange-500 label-large">INTERMEDIATE LEVEL</h1>
							{:else if difficulty == 'Expert'}
								<h1 class=" bg-red-700 label-large">EXPERT LEVEL</h1>
							{/if}
						</div>
					</div>
					<!--Duration-->
					<div class="flex flex-col py-3 items-center">
						<h1 class="title-large text-primary">Duration</h1>
						<div class="flex flex-row flex-nowrap items-center py-2 gap-x-2">
							{#each { length: days } as i}
								<div class="w-8 h-3 bg-primary rounded-sm">
									<!--This block represents one day :)-->
								</div>
							{/each}
							<h1 class="title-large text-primary">
								{#if days > 1}
									{days} Days
								{:else}
									{days} Day
								{/if}
							</h1>
						</div>
					</div>

					<p class="text-secondary body-large">{body}</p>
					<div
						class="mt-auto pt-6 pb-2 mx-auto self-end"
						on:click={() => {
							addChosenJourney(id);
						}}>
						<OutlineButton href="/request-tour">
							<h1 class="p-3 title-medium">Request Journey</h1>
						</OutlineButton>
					</div>
				</div>
			</div>
		{/each}
	</div></MountPage>
