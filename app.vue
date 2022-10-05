<template>

  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
  <Footer />


</template>


<script setup>
definePageMeta({
  pageTransition: 'fade',
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
      rel: 'preload',
      href: '/emotion/extreme.png',
      as: 'image',
    },
    {
      rel: 'preload',
      href: '/emotion/mild.png',
      as: 'image',
    },
    {
      rel: 'preload',
      href: '/emotion/moderate.png',
      as: 'image',
    },
    {
      rel: 'preload',
      href: '/emotion/normal.png',
      as: 'image',
    },
    {
      rel: 'preload',
      href: '/emotion/severe.png',
      as: 'image',
    }

  ],
})

</script>

