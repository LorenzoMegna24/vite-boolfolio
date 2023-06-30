<script >
import axios from 'axios';
import ProjectCardComp from '../components/ProjectCardComp.vue';

export default{
    components:{
        ProjectCardComp
    },

    data(){
        return{
            projects: [],
            types: [],
            urlBase: 'http://127.0.0.1:8000',
            selectedType: 'all'
        }
    },
    mounted(){
        this.getProjects();
        this.getTypes();
    },
    methods: {
        getProjects(){

            const params = ''

           if (this.selectedType !== 'all') {
                params.type_id = this.selectedType
           }

            axios.get(`${this.urlBase}/api/projects`,{params}).then(res=>{
                this.projects = res.data.projects
            })
        },
        getTypes(){
            axios.get(`${this.urlBase}/api/types`).then(res =>{
                this.types = res.data.types
            })
        }
    },
}

</script>

<template>
 <h1>Projects</h1>

    <main>
        <div class="mb-3 container w-50">
            <label for="" class="form-label">Types filter</label>

            <select @change="getProjects()" v-model="selectedType" class="form-select form-select-lg" name="" id="">
                <option value="all">--All--</option>
                <option :value="elem.id" v-for="(elem, index) in types" :key="index">{{ elem.name_type }}</option>
            </select>
        </div>
        <div class="container">
            <div class="row">
                <ProjectCardComp v-for="(elem, index) in projects" :key="index" :proj="elem"/>
            </div>
        </div>
    </main>
</template>

<style lang="scss">
</style>