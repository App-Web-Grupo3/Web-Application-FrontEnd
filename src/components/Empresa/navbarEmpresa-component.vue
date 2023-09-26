<script>
export default {
    name: "NavbarEmpresaComponent",
    data() {
        return {
            menuItems: [
                {
                    label: this.$t('home'),
                    icon: 'pi pi-home',
                    to: '/homeEmpresa'
                },

            ]
        };
    }
};
</script>

<template>
    <pv-menubar :model="menuItems" class="nav">
        <template #start>
            <a class="logo">UNIQUETRIP</a>
        </template>
    </pv-menubar>
</template>

<style scoped>
.nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 80px;
    padding: 0 20px;
    width: 100%;
    background-color: hsla(204, 74%, 31%, 0.7);
    position: absolute;
}

.logo {
    font-size: 2.5rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 1px;
    color: #333;
    text-decoration: none;
}
</style>