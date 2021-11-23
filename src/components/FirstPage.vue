<template>

   <section class="container">
       <!-- WELCOME BACK -->
       <div :class="{displayNONE:isActive, firstdiv: 'firstdiv'}">
            <div class="first-filho">
                <h1>Welcome Back</h1>
                <p>To keep conected with us</p>
                <p>please login in your account</p>
                <button v-on:click="changeClass()" id="sign-in-welcome" :class="{ displayNONE: isActive, btn: 'btn btn-light' }">Sign In</button>
            </div>
        </div>

        <!-- CREATEE ACCOUNT -->
        <div :class="{displayNONE:isActive, seconddiv:'seconddiv'}">
            <div class="second-filho">
                <h1 class="create-account">Create Account</h1>
                <a href="#"><i class="fab fa-google-plus-g"></i></a>
                <p>or use your email for registration:</p>
                
                <form class="form formSIGNUP">
                    <div class="form-group row">
                        <label class="label-input"  for=""> <i class="far fa-user icon-modify"></i></label>
                        <div class="col-sm-10">
                            <input v-model="name" id="inputnameUP" name="name" class="form-control" type="text" placeholder="name">
                        </div>
                    </div>
                    
                    <div class="form-group row">
                        <label for="exampleInputEmailUP"><i class="far fa-envelope icon-modify"></i> </label>
                        <div class="col-sm-10">
                            <input v-model="email" type="email" class="form-control " id="exampleInputEmailUP" aria-describedby="emailHelp" placeholder="email@hotmail.com" name="email">
                            <small id="emailHelp" class="form-text text-muted">We'll never share your email.</small>
                        </div>
                    </div>
                   
                     <div class="form-group row">
                        <label for="exampleInputPasswordUP"><i class="far fas fa-lock icon-modify"></i></label>
                        <div class="col-sm-10">
                            <input v-model="password" name="password" placeholder="password" type="password" class="form-control" id="exampleInputPasswordUP">
                            <small id="passHelp" class="form-text text-muted">Your password must have at least ...</small>
                        </div>
                     </div>
                    
                    
                    <button v-on:click.prevent="insertCadastro()" id="signUP" class="btn btn-success">Sign Up</button>
                    
                </form>
            </div>
        </div>
        

         <!-- HELLO FRIEND -->
        <div :class="{firstdiv2:'firstdiv2', displayNONE: isNotActive}">
            <div class="first-filho">
                <h1>Hello Friend!</h1>
                <p>Do your log in to join with us!</p>
                <p>please, if you do not have an account, click the button bellow:</p>
                <button v-on:click="changeClass()" id="sign-UP-welcome" class="btn btn-light">Sign Up</button>
            </div>
        </div>

         <!-- SIGN IN -->
        <div :class="{thirddiv:'thirddiv', displayNONE: isNotActive}">
            <div class="second-filho">
                <h1 class="create-account">Login Account</h1>
                <a href="#"><i class="fab fa-google-plus-g"></i></a>
                <p>or use your email for login:</p>
                
                <form class="form formLOGIN">
                    <label for="exampleInputEmailIN">
                        <i class="far fa-envelope icon-modify"></i>
                        <input  type="email" class="form-control " id="exampleInputEmailIN" aria-describedby="emailHelp" placeholder="email" name="email">
                        <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                    </label>
                            
                    <label for="exampleInputPasswordIN">
                        <i class="far fas fa-lock icon-modify"></i>
                        <input placeholder="password" type="password" class="form-control" id="exampleInputPasswordIN" name="password">
                    </label>
                
                    <button id="signIN" class="btn btn-success">Sign In</button>
                    
                </form>
            </div>
        </div>
        
   </section>

</template>

<script>
// import Api from '../../services/cadastroAPI'
// import axios from 'axios'
import Vue from 'vue'
import VueToastr from '@deveodk/vue-toastr'
import '@deveodk/vue-toastr/dist/@deveodk/vue-toastr.css'

import { ValidEmail } from '../js/ValidEmail.js'
import { ValidPassword } from '../js/ValidPassword.js'
import { ValidName } from '../js/ValidName.js'

Vue.use(VueToastr, {
    defaultPosition: 'toast-top-right',
    defaultType: 'info',
    defaultTimeout: 3000
})

export default {
    name:'FirsPage',
    // mounted(){
    //     Api.getAllCadastros()
    //         .then(response => {
    //             console.log('res', response)
    //         })
    //         .catch(error => {
    //             console.log('error', error)
    //         })
    // },
    data(){
        return{
            title: 'Home Page',
            isActive: false,
            isNotActive: true,
            email: '',
            name:'',
            password:''
        }
    },
    methods:{
        changeClass: function(){
            this.isActive =  !this.isActive
            this.isNotActive = !this.isNotActive
            this.$toastr('success', 'i am a toastr success', 'hello')
        },
        alertToastr: function(message){
             this.$toastr('warning',`${message}`)
        },
        insertCadastro: async function(){
            let message

            let emailValue = this.email
            let passwordValue = this.password
            let nameValue = this.name

            if(ValidName(nameValue) == 0){
                message = 'Nome inválido'
                this.alertToastr(message)
            }
            else if (ValidEmail(emailValue) == 0){
                message = 'Email inválido'
                this.alertToastr(message)
            }
            else if(ValidPassword(passwordValue) == 0){
                message = 'Password inválida'
                this.alertToastr(message)
            }
            
            else{
                const formSIGNUP = document.querySelector('.formSIGNUP')
                const formData = new FormData(formSIGNUP)
                const searchParams = new URLSearchParams()
            
                for (const pair of formData){
                    searchParams.append(pair[0],pair[1])
                }
                console.log('cadastro valido!')
                //CONSUMIR A API POST
            }
         

        }
    }
}
</script>

<style scoped>

</style>
