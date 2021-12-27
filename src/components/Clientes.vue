<template>
    <div>
        <h1>Entrou</h1>
        
    </div>
    
    
</template>
// <script>
//     import axios from 'axios'
    export default{
        name: 'Clientes',
        mounted(){
            this.$http.get('clientes')
                .then(response => console.log('Entrou', response))
                .catch(error => console.log(error))
        }  ,
        // beforeRouteEnter(to, from, next){
        //     if(!this.$store.state.token){
        //         next({name: 'home'})
        //     }
        //     next()
        // }
        // mounted(){
        //     const token = localStorage.getItem('user-token')
        //     const cookie = document.cookie
        //     console.log(cookie);
        //     console.log(token)
        //     axios.get('http://localhost:3000/clientes',{
        //         headers: {"Authorization": `Baerer ${token}`}
        //     })
        //     .then(res => console.log(res))
        //     .catch(error => console.log(error))
        // }
    }
</script>
