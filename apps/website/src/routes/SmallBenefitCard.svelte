<div
  class="lg:col-span-1 group bg-surface max-w-lg lg:max-w-none rounded-md overflow-hidden items-center flex flex-col gap-4 py-10 pb-5 px-8 w-full drop-shadow-glow-sm border-1 border-primary"
>
  <div class="bg-background rounded-md p-3">
    <img
      src={$$props.topIcon}
      alt="book"
      class="w-7 h-7 object-center object-cover"
    />
  </div>
  <div class="flex flex-col gap-2 text-center h-full z-10">
    <h1 class="headline-large">{$$props.title}</h1>
    <p class="body-large max-w-sm px-2">
      <slot />
    </p>
  </div>
  <div class="flex z-0 -mx-10 -mb-16 -mt-32">
    <img
      src={$$props.artwork}
      class="object-center w-full h-full group-hover:drop-shadow-benefit-art-hover drop-shadow-benefit-art transition-all duration-300"
      alt="artwork"
    />
  </div>
</div>
