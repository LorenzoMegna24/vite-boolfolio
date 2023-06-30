<script>

import { router } from '../router';
    export default {
    name: "AppHeader",
    data() {
        return {};
    },
    components: { router }
}
</script>

<template>
    <div>
        <nav class="navbar navbar-expand-sm navbar-dark bg-dark fixed-top">
              <div class="container">
                <router-link class="navbar-brand" :to="{name: 'home'}">Boolfolio</router-link>
                <button class="navbar-toggler d-lg-none" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavId" aria-controls="collapsibleNavId"
                    aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="collapsibleNavId">
                    <ul class="navbar-nav me-auto mt-2 mt-lg-0">
                        <li class="nav-item">
                            <router-link class="nav-link" :to="{name: 'home'}" aria-current="page">Home</router-link>
                        </li>
                        <li class="nav-item">
                            <router-link class="nav-link" :to="{name: 'projects'}">Project</router-link>
                        </li>
                    </ul>
                </div>
          </div>
        </nav>
        
    </div>
</template>


<style lang="scss" scoped>

#collapsibleNavId .router-link-active{
    color: coral;
}

</style>