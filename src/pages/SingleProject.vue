<script >
import axios from 'axios';

export default{
    components:{
    },

    data(){
        return{
            urlBase: 'http://127.0.0.1:8000',
            project: null
        }
    },
    created(){
        this.getSingleProj();
        // this.getProjects();
    },
    methods: {
        getSingleProj(){
            axios.get(`${this.urlBase}/api/projects/${this.$route.params.slug}`).then((response) => {
                this.project = response.data.project;},
                error=>{
                    if (error.response.status === 404) {
                        this.$router.push({ name: 'not-found' })
                    }
                }

                // if (response.data.success) {
                //     this.project = response.data.project;
                // } else {
                //     // redirect alla pagina 404
                //     this.$router.push({ name: 'not-found' })
                // }
            );
        },
        // getProjects(){
        //     axios.get(`${this.urlBase}/api/projects`).then(res=>{
        //         this.projects = res.data.projects
        //     })
        // }
        goBack(){
            // this.$router.back();
            this.$router.go(-1)
        }
    },
}

</script>

<template>
    <div class="mt-5 container">
        <a class="btn btn-primary mt-5" href="" @click.prevent="goBack">Back</a>
    </div>
    <h1 class="text-center mb-5">Single Project:  {{ project.project_title }}</h1>
    <div class="container">
        <div class="row">
            <div class="col-lg-12">
                <div class="card mb-3">
                    <img class="card-img-top" :src="`${urlBase}/storage/${project.img}`" alt="project">
                    <div class="card-body">
                        <p class="card-text">{{ project.description }}</p>
                        <div class="d-flex justify-content-around">
                            <h6>Technologies:</h6>
                            <ul>
                                <li v-for="(elem, index) in project.technologies">
                                    {{ elem.name_technology }}
                                </li>
                            </ul>
                            <h6>Types:</h6>
                            <ul>
                                <li>
                                    {{ project.type.name_type }}
                                </li>
                            </ul>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss">
</style>