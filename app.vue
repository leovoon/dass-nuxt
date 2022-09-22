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
  ],


})

</script>

