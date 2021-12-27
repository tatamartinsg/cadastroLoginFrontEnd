<template>
    <header>
       
        <div class="pos-f-t div-header" :class="{teste: isActive}">
        <div :class="{ collapse: isActive}" id="navbarToggleExternalContent">
            <div class=" div-third" :class="{teste: isActive}">     
                <nav v-if="userIsLogged()" class="navbar navbar-expand-lg bg-li">
                     <div >
                        <router-link class="home navbar-brand text-white" to="/">Home</router-link>
                    </div>
                    <div>
                        <router-link class="navbar text-white" to="/clientes">Teste</router-link>                  
                    </div>
                     <div>
                       <a class="nav-link" @click.prevent="logout()" href="/">LogOut</a>
                     </div>
                </nav>
                <nav v-else class="navbar navbar-expand-lg bg-li">
                    <div>
                        <router-link class="home navbar-brand text-white" to="/">Home</router-link>
                    </div>
                </nav>
                
                <!-- <span class="text-white spannav">Toggleable via the navbar brand.</span> -->
            </div>
        </div>
        <router-view/>
        <!-- <nav class="navbar navbar-dark bg-dark" id="navheaderblack">
            <button class="navbar-toggler" @click="clicou()" @dblclick="clicoudnv()" type="button" aria-label="Toggle navigation" style="margin-left: 1%;">
                <span class="navbar-toggler-icon"></span>
            </button>
        </nav> -->
    </div>
    </header>
</template>
<script>
    export default{
        props:{
            rotas:{
                type: Array,
                required: true
            }
        },
        data(){
            return{
                isActiveDropdown: false,
                isActiveDropdownCategorias: false,
                isActive: false
            }
        },
        methods:{  
            logout(){
                alert('clicou')
                this.$store.commit('LOGOUT_USER')
                this.$router.push({name: 'home'})
            },
            clicou(){
                this.isActive =! this.isActive
            },
            clicouDropdown(){
                this.isActiveDropdown =! this.isActiveDropdown
            },
            clicouDropdownCategorias(){
                this.isActiveDropdownCategorias =! this.isActiveDropdownCategorias
            },
            userIsLogged(){
                if(this.$store.state.token){
                    return true
                }
              
            }
        }
    }
</script>
<style scoped>
    li a:hover, .dropdown:hover .dropbtn {
        background-color: none;
    }
    .navbar{
        justify-content: flex-start;
    }
    #navbarToggleExternalContent{
        transition: all .2s;
    }
    /* .collapse:active, #navbarToggleExternalContent:active{
        transition: scale(1.2);
    } */
    .dropdownClick{
        display: block;
    }
    /* .dropdown:hover .dropdown-content {
        display: block;
    } */
    .spannav{
        opacity: 0.6;
    }
    .div-header{
         transition: all .2s;
        /* box-shadow: 0 4px 2px 2px rgb(32, 31, 31); */
    }
   .teste{
       transform: scale(1.01);
   }
   .div-third{
       padding-left: 20px;
       background: rgb(59, 57, 57);
   }
   header{
       position: fixed;
       top: 0;
       left: 0;
       width: 100%;
       z-index: 99;
   }
   /* #navheaderblack{
       position: relative;
       box-shadow: 0 4px 2px 2px rgb(34, 34, 34);
       top: -6px;
   } */
   .mudaCorBotao{
       background: rgb(160, 15, 15);
       border: 0;
   }
   .navbar-toggler{
       margin-top: 5px;
   }
   .navbar-brand{
       margin-right: 5px;
   }

</style>
