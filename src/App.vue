<script >
import axios from 'axios';
import ProjectCardComp from './components/ProjectCardComp.vue';

export default{

    components:{
        ProjectCardComp
    },

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

    <main>
        <ProjectCardComp/>
    </main>
</template>

<style lang="scss">
@use './style/main.scss'
</style>
