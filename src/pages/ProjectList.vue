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
            selectedType: 'all',
            currentPage: 1,
            lastPage: null,
            technologies: null,
            selectedTechnology: [],
        }
    },
    mounted(){
        this.getProjects(1);
        this.getTypes();
        this.getTechnologies();
    },
    watch: {
        selectedTechnology:{
            handler: 'getProjects',
            deep: true,
        }
    },
    methods: {
        getProjects(projectApiPage){

             const params = {
                page: projectApiPage
             }

           if (this.selectedType !== 'all') {
                params.type_id = this.selectedType;
           }

           if (this.selectedTechnology.length > 0) {
                params.technologies_id = this.selectedTechnology.join(',');
           }

            axios.get(`${this.urlBase}/api/projects`, { params }).then(res=>{
                this.projects = res.data.projects.data
                this.currentPage = res.data.projects.current_page
                this.lastPage = res.data.projects.last_page
            })
        },
        getTypes(){
            axios.get(`${this.urlBase}/api/types`).then(res =>{
                this.types = res.data.types
            })
        },
        getTechnologies(){
            axios.get(`${this.urlBase}/api/technologies`).then(res =>{
                this.technologies = res.data.technologies
            })
        }
    },
}

</script>

<template>
 <h1>Projects</h1>

    <main>
        <!-- selezione per tipo -->
        <div class="mb-3 container w-50">
            <label for="" class="form-label">Types filter</label>

            <select @change="getProjects()" v-model="selectedType" class="form-select form-select-lg" name="" id="">
                <option value="all">--All--</option>
                <option :value="elem.id" v-for="(elem, index) in types" :key="index">{{ elem.name_type }}</option>
            </select>
        </div>
        <!-- selezione per tecnologia -->
        <div class="form-check">
            <label class="form-check-label me-5" for="" v-for="(elem, index) in technologies" :key="index">
              <input class="form-check-input" type="checkbox" :value="elem.id" v-model="selectedTechnology" id="">
             {{ elem.name_technology }}
            </label>
        </div>

        <div class="container">
            <div class="row">
                <ProjectCardComp v-for="(elem, index) in projects" :key="index" :proj="elem"/>
            </div>
        </div>
        <nav aria-label="Page navigation">
          <ul class="pagination    ">
            <li class="page-item">
              <a class="page-link" @click.prevent="getProjects(currentPage - 1)" href="#" aria-label="Previous">
                <span aria-hidden="true">&laquo;</span>
              </a>
            </li>
            <li class="page-item" :class="(currentPage === elem) ? 'active' : ''" aria-current="page" v-for="(elem, index) in lastPage" :key="index">
                <a class="page-link" @click.prevent="getProjects(elem)" href="#">{{elem}}</a>
            </li>
            <li class="page-item">
              <a class="page-link" @click.prevent="getProjects(currentPage + 1)" href="#" aria-label="Next">
                <span aria-hidden="true">&raquo;</span>
              </a>
            </li>
          </ul>
        </nav>
    </main>
</template>

<style lang="scss">
</style>