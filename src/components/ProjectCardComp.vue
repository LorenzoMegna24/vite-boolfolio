<script>

export default{
    name: 'ProjectCardComp',
    props: ['proj'],
    data(){
      return{
        
      }
    }
  }

</script>

<template>
        <div class="col-lg-6">
            <div class="card">
                <img class="card-img-top" :src="`${urlBase}/storage/${proj.img}`" alt="Title">
                <div class="card-body">
                    <h4 class="card-title">{{ proj.project_title }}</h4>
                    <p class="card-text">{{ proj.description }}</p>
                </div>
            </div>
        </div>

</template>

<style lang="scss" scoped>

</style>