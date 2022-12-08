<template>

  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
  <Footer />


</template>


<script setup>
definePageMeta({
  pageTransition: 'page',
})

useHead({
  title: 'DASS',
  meta: [
    {
      hid: 'description',
      name: 'description',
      content: 'Depression, Anxiety and Stress Scale',
    },
  ],

  link: [
    {
      rel: 'icon',
      type: 'image/x-icon',
      href: '/favicon.ico',
    },
    {
      rel: 'prefetch',
      href: '/emotion/extreme.png',
      as: 'image',
    },
    {
      rel: 'prefetch',
      href: '/emotion/mild.png',
      as: 'image',
    },
    {
      rel: 'prefetch',
      href: '/emotion/moderate.png',
      as: 'image',
    },
    {
      rel: 'prefetch',
      href: '/emotion/normal.png',
      as: 'image',
    },
    {
      rel: 'prefetch',
      href: '/emotion/severe.png',
      as: 'image',
    }
  ],
})

</script>

<style>
.page-enter-active,
.page-leave-active {
  transition: all 0.25s;

}

.page-enter-from,
.page-leave-to {
  opacity: 0;
  transform: translateY(2%);
  filter: blur(0.3rem);
}
</style>

