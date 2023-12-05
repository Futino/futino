<script lang="ts">
	import * as Card from '$lib/components/ui/card';
</script>

<main class="flex flex-col justify-center items-center bg-background text-white">
	<!-- Hero -->
	<section class="h-screen w-screen bg-gradient-to-b from-secondary to-background" />

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
