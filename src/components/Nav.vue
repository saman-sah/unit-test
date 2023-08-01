<template>
    <nav>
        <a href="" id="home">Home</a>
        <a v-if="isLoggedIn" id="profile" href="" style="margin-left: 1em;">My Profile</a>

    </nav>
</template>
<script>
export default {
    name: "nav",
    data() {
        return {
            isLoggedIn: false, 
        }
    },
}
</script>