<script setup>
import NavbarComponent from '@/components/navbar.component.vue';
import TouristProfileComponent from "@/components/tourist-profile.component.vue";
import FooterComponent from "@/components/footer.component.vue";
import CommentComponent from "@/components/comment-servicio.component.vue";
import GalleriaComponent from "@/components/services-galleria.component.vue";
import ServiceDataComponent from "@/components/service-data.component.vue";
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import { ActivitiesService } from '@/services/activities.service';
import { EnterprisesService } from '@/services/enterprises.service';

const route = useRoute();
const activitiesService = new ActivitiesService();
const enterprisesService = new EnterprisesService();

const activityId = ref(route.params.activityId);
const activity = ref([]);
const enterprise = ref([]);

console.log(activityId.value);
onMounted(() => {
  activitiesService.getActivityById(activityId.value).then((response) => {
    activity.value = response.data;
    enterprisesService.getEnterpriseById(activity.value.enterprise_id).then((response) => {
      enterprise.value = response.data;
    });
  });
});

</script>
<template>
  <div class="service-info">
    <navbar-component></navbar-component>
    <div class="container flex gap-5">
      <div class="start" style="flex-grow: 1">
        <tourist-profile-component></tourist-profile-component>
      </div>
      <div class="end flex gap-5" style="flex-grow: 9999">
        <div class="info layout">
          <h1 class="title">{{ $t('service') }}</h1>
          <div class="content flex gap-5 justify-content-between align-items-center">
            <galleria-component></galleria-component>
            <service-data-component
                :activity="activity"
                :enterprise="enterprise"></service-data-component>
          </div>
        </div>
        <div class="feedback layout">
          <h1 class="title">{{ $t('comment') }}</h1>
          <comment-component></comment-component>
        </div>
      </div>
    </div>
    <footer-component></footer-component>
  </div>
</template>


<style scoped>
.service-info {
  width: 100%;
  min-height: 100vh;
  background-color: #EDEDED;
  margin: 0;

  .container {
    padding-top: 5%;
  }
}

.end {
  flex-grow: 9999;
  flex-direction: column;
}

.feedback {
  padding: 2em;
}
</style>