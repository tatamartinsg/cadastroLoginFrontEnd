<template>
    <section class="container">
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
    export default{
        name: 'SecondPage'
    }
</script>
