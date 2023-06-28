<script >
import axios from 'axios';

export default{
    data(){
        return{
            projects: [],
            urlBase: 'http://127.0.0.1:8000'
        }
    },
    mounted(){
        this.getProjects();
    },
    methods: {
        getProjects(){
            axios.get(`${this.urlBase}/api/projects`).then(res=>{
                this.projects = res.data.projects
            })
        }
    },
}

</script>

<template>
 <h1>Projects</h1>

 <div class="container">
    <div class="row">
        <div class="col-lg-6" v-for="(elem, index) in projects" :key="index">
            <div class="card">
                <img class="card-img-top" :src="`${urlBase}/storage/${elem.img}`" alt="Title">
                <div class="card-body">
                    <h4 class="card-title">{{ elem.project_title }}</h4>
                    <p class="card-text">{{ elem.description }}</p>
                </div>
            </div>
        </div>
    </div>
 </div>

</template>

<style lang="scss">
@use './style/main.scss'
</style>
