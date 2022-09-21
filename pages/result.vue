<template>
    <div>
        <h1>Result</h1>
        <p>as of yet, not done</p>
        <pre>
        {{ JSON.stringify(answered, null, 2) }}
    </pre>
    </div>
</template>

<script setup>
const answered = useAnswered();
</script>
