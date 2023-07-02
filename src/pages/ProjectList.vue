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
        }
    },
    mounted(){
        this.getProjects(1);
        this.getTypes();
    },
    methods: {
        getProjects(projectApiPage){

            // const params = ''

        //    if (this.selectedType !== 'all') {
        //         params.type_id = this.selectedType
        //    }

            axios.get(`${this.urlBase}/api/projects`,{
                params: {
                    page: projectApiPage
                }
            }).then(res=>{
                this.projects = res.data.projects.data
                this.currentPage = res.data.projects.current_page
                this.lastPage = res.data.projects.last_page
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