<template>
    <h1>Entrou</h1>
</template>
<script>
    import axios from 'axios'
    export default{
        name: 'Teste',
        mounted(){
            const token = localStorage.getItem('user-token')
            const cookie = document.cookie
            console.log(cookie);
            console.log(token)
            axios.get('http://localhost:3000/clientes',{
                headers: {"Authorization": `Baerer ${token}`}
            })
            .then(res => console.log(res))
            .catch(error => console.log(error))
        }
    }
</script>
