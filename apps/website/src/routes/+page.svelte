<script lang="ts">
  import Button from "$lib/components/atoms/Button.svelte";
  import ClientCarousel from "$lib/components/organisms/ClientCarousel.svelte";
  import ChapterMenu from "$lib/components/organisms/ChapterMenu.svelte";
  import { servicesChapters } from "./serviceChapters";
  import { onMount } from "svelte";

  import { inview } from "svelte-inview";
  import type { Options } from "svelte-inview";
  import InView, {
    type TransitionOptions,
  } from "$lib/components/organisms/Inview.svelte";

  import ContactForm from "$lib/components/organisms/ContactForm.svelte";
  import ContactIconButton from "$lib/components/molecules/ContactIconButton.svelte";
  import Particles from "svelte-particles";
  import { loadSlim } from "tsparticles-slim";
  import type { Engine } from "tsparticles-engine";
  import { particlesConfig } from "./particlesConfig";
  import SmallBenefitCard from "./SmallBenefitCard.svelte";
  import Icon from "$lib/components/atoms/Icon.svelte";
  import BigBenefitCard from "./BigBenefitCard.svelte";
  import FaqSection from "$lib/components/organisms/FAQSection.svelte";
  import { faqs } from "$lib/faqs";
  import ClientCard from "./ClientCard.svelte";

  let scrollY: number;
  // Index of the current chapter that is in the viewport, used by chapter menu.
  let chapterInView: number;

  const chapterInViewOptions: Options = {
    rootMargin: "-20%",
    threshold: 0.1,
    unobserveOnEnter: false,
  };

  const leftFlyPreset: TransitionOptions = {
    delay: 500,
    duration: 300,
    once: true,
    fly: {
      x: -300,
      y: 0,
    },
  };
  const rightFlyPreset: TransitionOptions = {
    delay: 500,
    duration: 300,
    once: true,
    fly: {
      x: 300,
      y: 0,
    },
  };

  let onParticlesLoaded = (event: any) => {
    const particlesContainer = event.detail.particles;

    // you can use particlesContainer to call all the Container class
    // (from the core library) methods like play, pause, refresh, start, stop
  };

  let particlesInit = async (engine: Engine) => {
    // you can use main to customize the tsParticles instance adding presets or custom shapes
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    //await loadFull(engine);
    await loadSlim(engine);
  };

  const handleChapterInView =
    (inViewChapterId: string) =>
    ({ detail }: CustomEvent<ObserverEventDetails>) => {
      landingPageChapters.forEach((chapter) => {
        if (chapter.href.replace("#", "") == inViewChapterId) {
          chapterInView = chapter.chapterNumber;
          return;
        }
      });
    };

  const landingPageChapters: {
    chapterNumber: number;
    title: string;
    href: string;
  }[] = [
    {
      chapterNumber: 0,
      title: "Hero",
      href: "#hero",
    },
    {
      chapterNumber: 1,
      title: "Portfolio",
      href: "#portfolio",
    },
    {
      chapterNumber: 2,
      title: "Services",
      href: "#services",
    },
    {
      chapterNumber: 3,
      title: "Benefits",
      href: "#benefits",
    },
    {
      chapterNumber: 4,
      title: "Process",
      href: "#process",
    },
    {
      chapterNumber: 5,
      title: "Contact",
      href: "#contact",
    },
    {
      chapterNumber: 6,
      title: "FAQs",
      href: "#faqs",
    },
  ];

  const steps = [
    {
      title: "Plan",
      body: "Gather information and outline project goals to determine the best line of ascent.",
    },
    {
      title: "Create",
      body: "Dive into design & development, where we refine through unlimited revisions until perfection.",
    },
    {
      title: "Launch",
      body: `Finalize your website's design and content. Kick back, relax, and enjoy the show. 🍿`,
    },
  ];

  onMount(() => {});
</script>

<svelte:window bind:scrollY />

<ChapterMenu bind:chapterInView chapters={landingPageChapters} />

<main class="text-center border-b shadow-2xl border-primary/40">
  <!-- Hero -->
  <section
    id="hero"
    use:inview={chapterInViewOptions}
    on:inview_enter={handleChapterInView("hero")}
    class="relative h-screen place-items-center bg-[url('/glow_bg_2.png')] bg-no-repeat bg-fit bg-top"
  >
    <div
      class="pointer-events-none bg-gradient-to-b to-black/30 from-black/50 from-90% w-full h-full absolute z-10"
    />
    <Particles
      id="tsparticles"
      class="w-full h-full absolute z-0"
      options={particlesConfig}
      on:particlesLoaded={onParticlesLoaded}
      {particlesInit}
    />

    <div class="relative grid gap-12 z-20 justify-items-center inner-section">
      <h1 class="font-extrabold tracking-tight display-medium lg:display-large">
        Launch Your Tailor-made Website
      </h1>

      <h3 class=" headline-small lg:headline-medium max-w-3xl">
        Growing startups and companies with <span class="text-primary"
          >AI Design, Optimized Development,</span
        >
        and
        <span class="text-primary">Modern Hosting</span>
        <span class="inline-block"> for a flat monthly fee.</span>
      </h3>

      <div class="grid grid-cols-2 gap-x-4">
        <Button class="" href="/pricing">
          <p class="px-3 sm:px-5 md:px-6 title-medium">See Pricing</p>
        </Button>

        <Button class="" href="/contact" secondary={true}>
          <p class="px-3 sm:px-5 md:px-6 title-medium">Contact Us</p>
        </Button>
      </div>
    </div>
  </section>

  <div class="bg-gradient-to-b from-black/30 to-black/20 z-10">
    <!-- Big-Clients Slideshow -->
    <ClientCarousel />
  </div>

  <!-- Differences Section -->
  <section
    id="differences"
    class="justify-items-center bg-gradient-to-b from-black/20 to-30% to-transparent"
  >
    <div
      class="inner-section grid grid-cols-1 sm:grid-cols-2 items-center gap-x-6"
    >
      <img
        src="artwork/astronaut_1.png"
        alt=""
        class="object-center object-cover w-64 h-64 sm:h-fit sm:w-auto aspect-square justify-self-start md:place-self-center drop-shadow-service-art"
      />
      <div
        class="flex flex-col text-center sm:text-left lg:gap-14 gap-8 relative w-fit"
      >
        <!-- Main text content -->
        <div class="relative w-fit mx-auto sm:mx-0">
          <!-- New annotations -->
          <img
            src="artwork/arrow_1.png"
            alt=""
            class="hidden xl:flex object-cover object-center h-12 w-12 rotate-45 absolute -right-8 -top-3"
          />
          <h2
            class="hidden xl:flex absolute title-large -rotate-45 -top-12 uppercase -right-20"
          >
            Futino
          </h2>
          <!-- Old annotations -->
          <img
            src="artwork/arrow_1.png"
            alt=""
            class="hidden xl:flex object-cover object-center h-12 w-12 rotate-[110deg] absolute -right-14 -bottom-2"
          />
          <h2
            class="hidden xl:flex absolute whitespace-nowrap title-large -bottom-9 rotate-[20deg] -right-52 uppercase"
          >
            Boring Agencies
          </h2>
          <h1 class="display-medium text-center sm:text-left lg:display-large">
            <span class="text-primary font-extrabold"> In </span> with the new,
            <br />
            <span class="text-primary font-extrabold"> Out </span> with the old
          </h1>
        </div>

        <p class="title-large max-w-lg">
          Futino replaces the traditional path of unreliable freelancers and
          expensive agencies with our web-services for one flat monthly cost. We
          include everything you'd ever need for a web project.
        </p>
      </div>
    </div>
  </section>

  <!-- Portfolio -->
  <section
    id="portfolio"
    use:inview={chapterInViewOptions}
    on:inview_enter={handleChapterInView("portfolio")}
    class="justify-items-center"
  >
    <div
      class="flex flex-col gap-12 md:gap-24 inner-section w-full place-items-center"
    >
      <div>
        <h1 class="display-medium">The Portfolio</h1>
        <h2 class="body-large">
          Here's our most recent projects. Feel free to take a look!
        </h2>
      </div>

      <ClientCard
        name="Bapta Safaris"
        phone_src="/client_websites/phone_bapta.png"
        desktop_src="/client_websites/desktop_bapta.png"
        bgColor="bg-[#391A08]"
        href="https://bapta.futi.no"
        body="A midrange-premium safari company based in Tanzania."
        services={["Web Design", "Copywriting", "Development", "Web Hosting"]}
      />
      <ClientCard
        name="Wonderlee"
        phone_src="/client_websites/phone_wonderlee.png"
        desktop_src="/client_websites/desktop_wonderlee.png"
        bgColor="bg-[#001534]"
        href="https://wonderlee.com"
        body="Hong Kong's Leading Gate & Garage Firm."
        services={[
          "Web Design",
          "Branding",
          "Copywriting",
          "3D Design",
          "Development",
          "Web Hosting",
        ]}
      />
      <ClientCard
        name="Buffalo JiuJitsu"
        phone_src="/client_websites/phone_buffalo.png"
        desktop_src="/client_websites/desktop_buffalo.png"
        bgColor="bg-[#142131]"
        href="https://buffalo.futi.no"
        body="A local martial arts club and company."
        services={["Web Design", "Development", "Web Hosting"]}
      />
    </div>
  </section>

  <!-- Journey Section -->
  <section
    id="services"
    use:inview={chapterInViewOptions}
    on:inview_enter={handleChapterInView("services")}
    class="justify-items-center"
  >
    <!-- Absolute center line
		<div class="absolute z-50 w-1 h-6 -translate-x-1/2 bg-red-500 left-1/2 top-1/2" />
		 -->

    <div class="flex flex-col inner-section place-items-center">
      <div class="max-w-xl py-6 w-fit mx-auto">
        <h1 class="display-medium">Areas of Expertise</h1>
        <h2 class="body-large">
          From start to finish, we've got it all covered. Don't mention it.
        </h2>
      </div>
      {#each servicesChapters as { chapterNumber, inView, title, image, body, bullets }}
        <div
          class="relative grid w-full max-w-5xl grid-cols-1 my-6 py-16 overflow-y-hidden gap-y-14 gap-x-0 sm:grid-cols-2 place-items-center"
        >
          <!-- Center line and Chapter checkmark -->
          <div
            class="absolute flex-col items-center hidden h-full text-center sm:flex -translate-x-1/2 left-1/2 top-8"
          >
            <!-- Circle -->
            <div
              class="flex items-center w-11 h-11 text-center rounded-full bg-surface circle-shadow"
            >
              <h1 class="mx-auto display-small z-20">
                {chapterNumber}
              </h1>
            </div>

            <InView
              once={true}
              duration={800}
              dontFade={true}
              fly={{ x: 0, y: -620 }}
              axis={"y"}
              delay={100}
              bottom={300}
              class="flex justify-items-center h-full sm:flex w-full pb-2 mb-2"
            >
              <!-- Line -->
              <div
                class=" -mt-6 flex w-1 mx-auto h-full rounded-full bg-surface line-shadow"
              />
            </InView>
          </div>

          <!-- Content of Chapter -->

          <InView presetOptions={rightFlyPreset} class="sm:pr-7 md:pr-12">
            <img
              src={image}
              alt=""
              class="order-last object-cover object-center w-1/2 mx-auto bg-no-repeat sm:w-full sm:order-first drop-shadow-service-art"
            />
          </InView>

          <div
            class="flex flex-col max-w-2xl gap-2 p-1 overflow-hidden text-left justify-self-start"
          >
            <!-- Mobile text content -->
            <div
              class="flex flex-row items-center gap-3 pt-1 pl-1 sm:p-0 sm:hidden"
            >
              <div class="relative flex w-12 h-12 place-items-center">
                <div
                  class="flex items-center w-11 h-11 text-center rounded-full bg-surface circle-shadow shadow-primary"
                >
                  <h1 class="mx-auto display-small z-20">
                    {chapterNumber}
                  </h1>
                </div>
              </div>
              <!-- Mobile title -->
              <h1 class="headline-large uppercase text-primary">
                {title}
              </h1>
            </div>
            <InView fly={{ x: -100, y: 0 }} class="sm:hidden">
              <div class="w-1/4 h-0.5 mt-3 border-t border-outline" />
            </InView>
            <InView presetOptions={leftFlyPreset} class="sm:pl-7 md:pl-12">
              <!-- sm+ title -->
              <h1
                class="sm:headline-large md:title-large uppercase md:uppercase sm:text-primary hidden sm:flex pb-4"
              >
                {title}
              </h1>
              <p
                class="title-large md:headline-large lg:display-small sm:max-w-xs md:max-w-md"
              >
                {body}
              </p>
              <ul>
                <div
                  class="flex flex-col justify-self-end mt-auto gap-2 md:gap-3 pt-8"
                >
                  {#each bullets as point}
                    <!-- Bottom items -->
                    <div
                      href="https://youtube.com/Futino"
                      class="flex flex-row items-center gap-2"
                    >
                      <Icon
                        icon="checkmark"
                        height="32"
                        width="32"
                        class="-ml-0.5 text-secondary"
                      />
                      <h2 class="title-small md:title-medium">{point}</h2>
                    </div>
                  {/each}
                </div>
              </ul>
            </InView>
          </div>
        </div>
      {/each}
    </div>
  </section>

  <!-- Membership Benefits Section -->
  <section
    id="benefits"
    use:inview={chapterInViewOptions}
    on:inview_enter={handleChapterInView("benefits")}
    class="justify-items-center"
  >
    <div class="inner-section flex flex-col gap-6 items-center">
      <div class="max-w-xl py-6 w-fit">
        <h1 class="display-medium">Membership Benefits</h1>
        <h2 class="body-large">
          Perks that are simply too good to look anywhere else for your website
          needs. Seriously.
        </h2>
      </div>
      <div
        class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center"
      >
        <BigBenefitCard
          topIcon="artwork/mag_scope_1.png"
          title="Transparent Pricing"
          artwork="artwork/window_1.png"
          body={`
					Our simple and transparent subscription model fosters trust, gaurantees predictable prices, and provides peace of mind.
			`}
        >
          <!-- Bottom items -->
          <a
            href="https://youtube.com/Futino"
            class="flex flex-row items-center gap-2"
          >
            <Icon
              icon="checkmark"
              height="32"
              width="32"
              class="-ml-0.5 text-secondary"
            />
            <h3 class="body-large">No hidden fees</h3>
          </a>
          <a
            href="https://github.com/Futino"
            class="flex flex-row items-center gap-2"
          >
            <Icon
              icon="checkmark"
              height="32"
              width="32"
              class="-ml-0.5 text-secondary"
            />
            <h3 class="body-large">No upfront costs</h3>
          </a>
        </BigBenefitCard>

        <SmallBenefitCard
          topIcon="artwork/unlocked_3.png"
          title="Not Locked In"
          artwork="artwork/gate_1.png"
        >
          Enabling us to seamlessly swap providers in response to price changes,
          minimizing volatility, and providing peace of mind.
        </SmallBenefitCard>

        <SmallBenefitCard
          topIcon="artwork/scalable_1.png"
          title="Scalable Tiers"
          artwork="artwork/staircase_2.png"
        >
          Start with what you need and scale with your business.
        </SmallBenefitCard>
        <BigBenefitCard
          class="z-10"
          topIcon="artwork/book_1.png"
          title="Cost Efficient Tools"
          artwork="artwork/github_outline_6.png"
          body={`
				We resort to using open-source software, which
				translates directly into saving costs without compromising on quality.`}
        >
          <!-- Bottom items -->
          <a
            href="https://github.com/Futino"
            class="flex flex-row items-center gap-3"
          >
            <img
              src="artwork/github_outline_7.png"
              alt="youtube"
              class="object-center object-cover drop-shadow-github hover:drop-shadow-github-hover w-8 h-8"
            />
            <h3 class="body-large">View our code</h3>
          </a>
          <a
            href="https://www.youtube.com/@TryFutino"
            class="flex flex-row items-center gap-3"
          >
            <img
              src="artwork/yt_2.png"
              alt="youtube"
              class="object-center object-cover drop-shadow-youtube hover:drop-shadow-youtube-hover w-8 h-8"
            />
            <h3 class="body-large">Check out our streams</h3>
          </a>
        </BigBenefitCard>
      </div>
    </div>
  </section>

  <!-- Process Section -->
  <section
    id="process"
    use:inview={chapterInViewOptions}
    on:inview_enter={handleChapterInView("process")}
    class="justify-items-center"
  >
    <div class="inner-section flex flex-col md:gap-24">
      <div class="w-full hidden">
        <video
          id="campain_video"
          preload="auto"
          controls
          class="w-full transition-transform aspect-[16/9]"
        >
          <source
            title="Video"
            type="video/mp4"
            src="client_websites/ggsoccer_whole_dark.mp4"
          />
          Your Browser does not support our video types
          <track kind="captions" />
        </video>
      </div>
      <div class="max-w-xl py-6 w-fit mx-auto">
        <h1 class="display-medium">Here's How We Roll</h1>
        <h2 class="body-large">
          The lifecycle of your website in three simple steps.
        </h2>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-3 place-items-center gap-y-6">
        {#each steps as { title, body }, i}
          <div class="flex relative w-full h-full">
            <!-- md+ Journey line and Chapter checkmark -->
            <div
              class="absolute flex-row place-items-center hidden h-full w-full text-center md:flex top-0 -translate-y-1/2"
            >
              <!-- Circle -->
              <div
                class="flex items-center w-12 h-11 text-center rounded-full bg-surface circle-shadow"
              >
                <h1 class="mx-auto display-small z-20">{i + 1}</h1>
              </div>

              <InView
                once={true}
                duration={500}
                dontFade={true}
                fly={{ x: -350, y: 0 }}
                axis={"y"}
                delay={100 + 500 * i}
                bottom={300}
                class="flex justify-items-center pr-16 w-full items-center"
              >
                <!-- Line -->
                <div
                  class="flex h-1 w-full my-2 bg-surface line-shadow shadow-tertiary"
                />
              </InView>
            </div>
            <!-- Mobile Journey line and Chapter checkmark -->
            <div
              class="absolute flex-col items-center flex h-full text-center md:hidden top-8"
            >
              <!-- Circle -->
              <div
                class="flex items-center w-11 h-11 text-center rounded-full bg-surface circle-shadow"
              >
                <h1 class="mx-auto display-small z-20">
                  {i + 1}
                </h1>
              </div>

              <InView
                once={true}
                duration={600}
                dontFade={true}
                fly={{ x: 0, y: -320 }}
                axis={"y"}
                delay={100 + 600 * i}
                bottom={300}
                class="flex justify-items-center h-full sm:flex w-full pb-2 mb-2"
              >
                <!-- Line -->
                <div
                  class=" -mt-6 flex w-1 mx-auto h-full rounded-full bg-surface line-shadow"
                />
              </InView>
            </div>
            <InView
              once={true}
              duration={500}
              fly={{ x: -400, y: 0 }}
              axis={"y"}
              delay={100 + 500 * i}
              bottom={300}
            >
              <div
                class="mt-14 ml-12 pl-1 pr-8 md:ml-0 flex flex-col py-4 my-2 w-full text-left md:mr-2"
              >
                <h1
                  class="headline-large uppercase text-primary md:title-large md:uppercase sm:text-primary"
                >
                  {title}
                </h1>
                <p class="title-medium md:headline-large max-w-xs">
                  {body}
                </p>
              </div>
            </InView>
          </div>
        {/each}
      </div>
    </div>
  </section>
  <!-- Contact Section -->
  <section
    id="contact"
    use:inview={chapterInViewOptions}
    on:inview_enter={handleChapterInView("contact")}
    class="justify-items-center"
  >
    <div
      class="inner-section flex flex-col w-full gap-12 mx-auto
		"
    >
      <div class="grid mx-auto w-full gap-12">
        <InView
          duration={350}
          fly={{ x: -700, y: 0 }}
          delay={0}
          class="z-0 h-full max-w-5xl w-full mx-auto overflow-visible"
        >
          <!-- Contact form Option -->
          <div
            class="flex flex-col max-w-7xl w-full p-4 md:p-8 gap-y-8 text-left shadow-xl shadow-black drop-shadow-glow-md bg-surface border-1 border-primary rounded-md"
          >
            <div class="flex flex-row">
              <div class="flex flex-col ml-2">
                <h2 class="font-extrabold display-medium">Contact Us</h2>
                <p class="title-medium">
                  Feel free to send us an email for any requests or questions. <br
                  />
                  We'll get back to you within a couple hours.
                </p>
              </div>
              <!-- PM Option -->
              <div
                class="flex flex-col sm:flex-row self-center justify-self-end ml-auto justify-between gap-4 mr-2 md:gap-12"
              >
                <!-- WhatsApp -->
                <ContactIconButton
                  img="artwork/whatsapp_logo_6.png"
                  href="https://wa.me/+85297473013"
                  label="Futino Whatsapp"
                  class="hover:text-lime-400"
                  imgClass="drop-shadow-whatsapp group-hover:drop-shadow-whatsapp-hover"
                />
                <!-- Email -->
                <ContactIconButton
                  img="artwork/email_2.png"
                  href="mailto:contact@futi.no"
                  label="contact@futi.no"
                  class="hover:text-blue-400 scale-95"
                  imgClass="drop-shadow-email group-hover:drop-shadow-email-hover"
                />
              </div>
            </div>
            <ContactForm />
          </div>
        </InView>
      </div>
    </div>
  </section>
  <section
    id="faqs"
    use:inview={chapterInViewOptions}
    on:inview_enter={handleChapterInView("faqs")}
  >
    <div class="inner-section">
      <FaqSection {faqs} />
    </div>
  </section>
</main>

<style>
  .circle-shadow {
    @apply relative;
  }

  .circle-shadow:before {
    @apply absolute bottom-0 left-0 right-0 top-0 z-0 rounded-full shadow-glow shadow-primary content-[''];
  }
  .line-shadow {
    @apply relative;
  }

  .line-shadow::before {
    @apply absolute bottom-0 left-0 right-0 top-0 z-0 rounded-full  shadow-glow shadow-primary content-[''];
  }
</style>
