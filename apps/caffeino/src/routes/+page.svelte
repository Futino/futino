<script lang="ts">
	import { Prose } from '$lib/components/ui/prose';
	import { Section } from '$lib/components/ui/section';
	import * as Card from '$lib/components/ui/card';
	import { Button } from '$lib/components/ui/button';
	import PricingSlider from './PricingSlider.svelte';
</script>

<main class="flex flex-col justify-center items-center bg-background text-white">
	<!-- Hero -->
	<section
		class="h-screen grid justify-center items-center w-screen bg-gradient-to-b from-secondary to-background
	"
	>
		<div class="max-w-5xl h-screen grid grid-cols-2 justify-center items-center">
			<div class="text-left text-background flex flex-col justify-center items-center">
				<h1>Brew</h1>
				<h1>Your</h1>
				<h1>Digital Presence</h1>
				<h1>With a</h1>
				<h1>Custom Website</h1>
			</div>
			<div class="text-left flex flex-col justify-center items-center">
				<Card.Root>
					<Card.Header>
						<Card.Title>Design</Card.Title>
						<Card.Description>
							Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint
							consectetur cupidatat.
						</Card.Description>
					</Card.Header>
					<Card.Footer>
						<Button variant="outline">See pricing</Button>
					</Card.Footer>
				</Card.Root>
			</div>
		</div>
	</section>

	<!-- Services -->
	<section class="max-w-5xl grid grid-cols-4 gap-4">
		<Card.Root>
			<Card.Header>
				<Card.Title>Design</Card.Title>
				<Card.Description>
					We create eye-catching and user-friendly coffee shop websites that uniquely reflect your
					brand. Our designs are all about making a memorable impression for your visitors.
				</Card.Description>
			</Card.Header>
		</Card.Root>

		<Card.Root>
			<Card.Header>
				<Card.Title>Development</Card.Title>
				<Card.Description>
					We build seamless and scalable coffee shop websites using the latest web tech. From smooth
					menus to online ordering, our solutions simplify operations and elevate customer
					engagement.
				</Card.Description>
			</Card.Header>
		</Card.Root>

		<Card.Root>
			<Card.Header>
				<Card.Title>Hosting</Card.Title>
				<Card.Description>
					Experience top-tier website performance with our reliable hosting services. Our
					cutting-edge servers ensure fast loading, high uptime, and secure data management,
					providing a consistently smooth online experience.
				</Card.Description>
			</Card.Header>
		</Card.Root>

		<Card.Root>
			<Card.Header>
				<Card.Title>Search Engine Optimization</Card.Title>
				<Card.Description>
					We use smart strategies to make sure your coffee shop pops up first when people search
					online. Think of it as giving your business a spotlight on the internet stage.
				</Card.Description>
			</Card.Header>
		</Card.Root>
	</section>

	<!-- Give some spacing on the bottom for looking at section above -->
	<section class="h-screen" />

	<Section>
		<div class="grid grid-cols-1 md:grid-cols-2 gap-6">
			<img src=".." alt="" class="w-full h-full aspect-[1] bg-primary not-prose" />
			<Prose>
				<div class="flex flex-col gap-4 prose">
					<h1 class="prose lg:prose-xl">THE #1 COFFEE WEB-SERVICES AGENCY</h1>
					<p>
						Welcome to Caffeino, where passion for coffee meets digital excellence. As a specialized
						web-services agency tailored for coffee shops and roasters, we’ve navigated the unique
						landscape of the coffee industry to gain an expertise that extends beyond anyother
						freelancer or agency.
					</p>
					<p>
						At Caffeino, we understand the pulse of the coffee community. Beyond just creating
						websites, we craft digital experiences that resonate with coffee enthusiasts — where
						every click, scroll, and interaction brews a blend of technology and coffee culture.
						Join us in this journey as we elevate your coffee brand in the digital world. Your
						success is our daily grind.
					</p>
				</div>
			</Prose>
		</div>
	</Section>
	<div />
	<PricingSlider />
</main>
