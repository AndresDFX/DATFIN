<template>
<div class="register">
<h1>Prueba</h1>
<input type="email" name="email" v-model="email_v">
<br>
<input type="password" name="password" v-model="password_v">
<br>
<button @click="register">Registrar</button>
</div>
</template>
<script>
import AuthenticationService from '@/services/AuthenticationService'
export default {
  data () {
    return {
      email_v:'',
      password_v:''
    }
  },
  methods:{

    async register(){
      await AuthenticationService.register({
        email:this.email_v,
        password:this.password_v       
      })
      //console.log("button register", this.email, this.password)
    }
  }
}
</script>
<style scoped></style>
