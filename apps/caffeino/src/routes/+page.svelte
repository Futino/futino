<script lang="ts">
	import * as Card from '$lib/components/ui/card';
	import { Button } from '$lib/components/ui/button';
</script>

<main class="flex flex-col justify-center items-center bg-background text-white">
	<!-- Hero -->
	<section
		class="h-screen grid grid-cols-2 justify-center items-center w-screen bg-gradient-to-b from-secondary to-background"
	>
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
	</section>

	<!-- Services -->
	<section class="max-w-5xl grid grid-cols-4 gap-4">
		<Card.Root>
			<Card.Header>
				<Card.Title>Design</Card.Title>
				<Card.Description>
					Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint
					consectetur cupidatat.
				</Card.Description>
			</Card.Header>
		</Card.Root>

		<Card.Root>
			<Card.Header>
				<Card.Title>Development</Card.Title>
				<Card.Description>
					Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint
					consectetur cupidatat.
				</Card.Description>
			</Card.Header>
		</Card.Root>

		<Card.Root>
			<Card.Header>
				<Card.Title>Hosting</Card.Title>
				<Card.Description>
					Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint
					consectetur cupidatat.
				</Card.Description>
			</Card.Header>
		</Card.Root>

		<Card.Root>
			<Card.Header>
				<Card.Title>SEO</Card.Title>
				<Card.Description>
					Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint
					consectetur cupidatat.
				</Card.Description>
			</Card.Header>
		</Card.Root>
	</section>

	<!-- Give some spacing on the bottom for looking at section above -->
	<section class="h-screen" />
</main>
