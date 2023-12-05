<script lang="ts">
	import * as Card from '$lib/components/ui/card';
</script>

<main class="flex flex-col justify-center items-center bg-background text-white">
	<!-- Hero -->
	<section
		class="h-screen flex justify-center items-center w-screen bg-gradient-to-b from-secondary to-background"
	>
		<div class="text-left text-background flex flex-col justify-center items-center">
			<h1>Brew</h1>
			<h1>Your</h1>
			<h1>Digital Presence</h1>
			<h1>With a</h1>
			<h1>Custom Website</h1>
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
				<Card.Title>Design</Card.Title>
				<Card.Description>
					Lorem ipsum dolor sit amet, qui minim labore adipisicing minim sint cillum sint
					consectetur cupidatat.
				</Card.Description>
			</Card.Header>
		</Card.Root>

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
				<Card.Title>Design</Card.Title>
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
