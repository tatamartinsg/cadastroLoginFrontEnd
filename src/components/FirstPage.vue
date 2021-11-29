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
                        <div class="form-group row">
                            <label for="exampleInputEmailIN"> <i class="far fa-envelope icon-modify"></i></label>
                            <div class="col-sm-10">
                                <input v-model="email"  type="email" class="form-control " id="exampleInputEmailIN" aria-describedby="emailHelp" placeholder="email" name="email">
                                <!-- <small id="emailHelp" class="form-text text-muted"></small> -->
                            </div>
                        </div>
                        <div class="form-group row">
                            <label for="exampleInputPasswordIN"><i class="far fas fa-lock icon-modify"></i></label>
                            <div class="col-sm-10">
                                <input v-model="password" placeholder="password" type="password" class="form-control" id="exampleInputPasswordIN" name="password">
                            </div>                            
                        </div>               
                        <button v-on:click.prevent="loginAxios()" id="signIN" class="btn btn-success">Sign In</button>              
                </form>
            </div>
        </div>
        
   </section>

</template>

<script>
// import Api from '../../services/cadastroAPI'
import axios from 'axios'
import Vue from 'vue'
import VueToastr from '@deveodk/vue-toastr'
import '@deveodk/vue-toastr/dist/@deveodk/vue-toastr.css'

import { ValidEmail } from '../js/ValidEmail.js'
import { ValidPassword } from '../js/ValidPassword.js'
import { ValidName } from '../js/ValidName.js'
// import func from 'vue-editor-bridge'

Vue.use(VueToastr, {
    defaultPosition: 'toast-top-right',
    defaultType: 'info',
    defaultTimeout: 3000
})

export default {
    name:'FirsPage',
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
        },
        alertToastr: function(type,message,title){
             this.$toastr(type,message,title)
        },
        validaEmail: function(emailValue){
            let message

            if (ValidEmail(emailValue) == 0){
                message = 'Email inválido'
                this.alertToastr('warning',message, 'Error')
                return 0;
            }

            else{
                return 1;
            }
        },
        postAxios: function(path,classForm){
            const form = document.querySelector(`${classForm}`)
            const formData = new FormData(form)
            const searchParams = new URLSearchParams()
            const URL = 'http://localhost:3000'
            for (const pair of formData){
                searchParams.append(pair[0],pair[1])
            }
            const data = axios.post(`${URL}${path}`, searchParams)
            return data
        },
        insertCadastro: function(){
            let emailValue = this.email
            let passwordValue = this.password
            let nameValue = this.name

            if(ValidName(nameValue) == 0){
                var message;
                message = 'Nome inválido'
                this.alertToastr('warning',message,'Error')
                return 0;
            }
    
            else if(this.validaEmail(emailValue) == 0){
                return 0
            }
            else if(ValidPassword(passwordValue) == 0){
                message = 'Password inválida'
                this.alertToastr('warning',message,'Error')
                return 0;
            }
            else{
                let path = '/cadastro'
                let classForm = '.formSIGNUP'
                this.postAxios(path,classForm)
                    .then(res =>{
                        console.log(res)
                        message = 'Cadastrado com sucesso!'
                        this.alertToastr('success',message,'Sucesso!')
                        this.changeClass()
                        this.email = ''
                        this.name = ''
                        this.password = ''
                    })
                    .catch(error => {
                        console.error("There was an error!", error);
                        if(error.response.status == 400){
                            let message = 'Cadastro inválido.'
                            this.alertToastr('warning', message )
                        }
                    })
            }
            
        },
        loginAxios: function(){
            let emailValue = this.email
            if(this.validaEmail(emailValue) == 0){
                return 0
            }
            else{
                console.log(emailValue )
                this.postAxios('/login','.formLOGIN')
                    .then(res => {
                        console.log(res)
                        console.log(res.data.token)
                        localStorage.setItem('user-token', res.data.token)
                        var expires = (new Date(Date.now()+ 86400)).toUTCString();
                        document.cookie = `token=${res.data.token}; expires= ${expires};path=/;`
                        document.cookie = `${res.data.token}`
                    })
                    .catch(error => {
                        console.log(error)
                        if(error.response.data.message == 'pass'){
                            this.alertToastr('warning','Password Invalid','Error')
                        }
                        else if(error.response.data.message == 'invalid email'){
                            this.alertToastr('warning','Email Invalid','Error')
                        }
                        else{
                            this.alertToastr('success','Autenticado com sucesso.', 'Sucesso!')
                        }
                    })
            }

            
        }
      

    }
}
</script>

<style scoped>

</style>
