<template>
    <div>
        <h2>{{ message }}</h2>
    </div>
</template>

<script>
export default {
    name: "Message",
    props: {
        message: String,
    }
}
</script>

<style>

</style>