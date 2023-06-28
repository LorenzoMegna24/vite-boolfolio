<script>

export default{
    name: 'ProjectCardComp',
    data(){
      return{
        
      }
    }
  }

</script>

<template>

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

<style lang="scss" scoped>

</style>