<template>
  <div class="home">
    <p>Signed In</p>
    <section>
      <img src="@/assets/rick.gif" alt="">
    </section>
    <p>Leaving so soon?</p>
    <a href="#" @click.prevent="signOut">Yes </a>
    <br>
    <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">No, show me more</a>
  </div>
</template>

<script>
  import { mapActions } from 'vuex'

  export default {
    name: 'Home',
    methods: {
      ...mapActions({
        signOutAttempt: 'auth/signOut'
      }),

      signOut() {
        this.signOutAttempt().then(() => {
          this.$router.replace('/signin')
        })
      }
    }
  }
</script>
