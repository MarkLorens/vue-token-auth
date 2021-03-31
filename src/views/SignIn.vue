<template>
    <form @submit.prevent="submit">
        <input type="email" v-model="form.email" placeholder="Email">
        <input type="password" v-model="form.password" placeholder="Password">
        <div class="submit">
            <button>
                Sign In
            </button>
        </div>

    </form>
</template>

<script>
    import { mapActions } from 'vuex'
    export default {
        data() {
            return {
                form: {
                    email: '',
                    password: ''
                }
            }
        },
        methods: {
            ...mapActions({
                signIn: 'auth/signIn'
            }),
            submit() {
                this.signIn(this.form).then(() => {
                    this.$router.replace('/')
                    console.log(this.$route.path);
                }).catch(() => {
                    console.log('Failed')
                })
            }
        }
    }
</script>

<style>
form {
        max-width: 420px;
        margin: 30px auto;
        background: white;
        text-align: left;
        padding: 40px;
        border-radius: 10px;
    }
    input, select {
        display: block;
        padding: 10px 6px;
        width: 100%;
        box-sizing: border-box;
        border: none;
        border-bottom: 1px solid #ddd;
        color: #555;
    }
    button {
        background: #0b5dff;
        border: 0;
        padding: 10px 20px;
        margin-top: 20px;
        color: white;
        border-radius: 20px;
    }
    .submit {
        text-align: center;
    }
</style>