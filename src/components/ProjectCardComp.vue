<script>

export default{
    name: 'ProjectCardComp',
    props: ['proj'],
    data(){
      return{
        urlBase: 'http://127.0.0.1:8000'

      }
    }
  }

</script>

<template>
        <div class="col-lg-6">
            <div class="card">
                <img class="card-img-top" :src="`${urlBase}/storage/${proj.img}`" alt="project">
                <div class="card-body">
                    <h4 class="card-title">{{ proj.project_title }}</h4>
                    <p class="card-text">{{ proj.description }}</p>
                </div>
            </div>
        </div>

</template>

<style lang="scss" scoped>

</style>