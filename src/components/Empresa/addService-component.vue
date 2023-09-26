<template>
    <header>
              <navbarEmpresaComponent />
        </header>

        
                <router-view>   
                    
            
                </router-view>
</template>

<script>

import navbarEmpresaComponent from './navbarEmpresa-component.vue';

export default {
    name: "AddServiceComponent",
    components: {
        navbarEmpresaComponent,
    }
}
</script>

<style>

</style>
