<script>
export default {
    data () {
        return {
            name: '',
            email: '', 
            message: '',
            urlBase: 'http://127.0.0.1:8000',
            success: false,
            errors: {},
        }
    },
    methods: {
        sendForm(){
            const data = {
                name: this.name,
                email: this.email,
                message: this.message
            }
            axios.post( `${this.urlBase}/api/contacts`, data ).then(res=>{
                this.success = res.data.success

                if (this.success) {
                    this.name = '';
                    this.email = '';
                    this.message = '';
                }else{
                    this.errors = res.data.errors
                }

            })
        }
    }
}
</script>

<template>
    <div class="container pt-5">
        <h1>Contact Form</h1>
        <form @submit.prevent="sendForm()">
            <div class="mb-3">
              <label for="" class="form-label">Name</label>
              <input v-model="name" type="text" class="form-control" name="name" id="" aria-describedby="helpId" placeholder="Nome Cognome">
            </div>
            <div class="mb-3">
              <label for="" class="form-label">Email</label>
              <input v-model="email" type="email"
                class="form-control" name="email" id="" aria-describedby="helpId" placeholder="Email">
            </div>
            <div class="mb-3">
              <label for="" class="form-label">Message</label>
              <textarea v-model="message" class="form-control" name="message" id="" rows="3"></textarea>
            </div>
            <button class="btn btn-success" type="submit">Invia</button>
        </form>
    </div>
</template>

<style lang="scss" scoped>

</style>