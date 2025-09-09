<script setup>
import Poster from '@/components/Poster.vue';

</script>

<!--Need to do a v-for for this one-->
<template>
  <v-container>
    <v-row no-gutters>
      <v-col>
          <v-card class="mt-5 mx-auto">
            <v-banner bg-color="pink-lighten-2" sticky>
              <template v-slot:actions>
                <v-text class="text-body-1 mt-n5 mb-5">September 2024 - May 2024</v-text></template>
              <v-banner-text class="text-h6 mt-n2"> Capstone: A Wearable System for Health Status Monitoring
                <v-banner-text class="text-body-2"> Vancouver, BC </v-banner-text>
              </v-banner-text>
            </v-banner>
              <v-card-text class="text-body-1 text-center mx-5"> As part of my capstone, I served as the project manager for the development of a wearable
                health status
                monitoring system designed for use in hospital waiting rooms. In this role, I worked on the firmware
                development,
                verified and validated the hardware components, and collaborated closely with clients to ensure the
                system met
                real-world needs. I was responsible for testing the overall solution, troubleshooting issues, and
                guiding technical
                decisions throughout the project lifecycle. By balancing technical execution with client consultation, I
                ensured
                that the system was both reliable and user-centered. </v-card-text>
              <Poster class = "center"></Poster>
          </v-card>
      </v-col>
    </v-row>
    <!--
    <v-row>
      <v-col>
        <v-sheet class="my-2">
          <v-card max-height="500" class=" ml-4">
            <v-banner bg-color="pink-lighten-2" sticky>
              <template v-slot:actions>
                <v-text class="text-body-1 mt-n5 mb-5">May 2024</v-text></template>
              <v-banner-text class="text-h6 mt-n2"> 3
                <v-banner-text class="text-body-2"> Vancouver, BC </v-banner-text>
              </v-banner-text>
            </v-banner>
            <v-card-text class="bg-white text--primary">

            </v-card-text>
          </v-card>
        </v-sheet>
      </v-col>
      <v-col>
        <v-sheet class="my-2">
          <v-card max-height="500" class="mx-2">
            <v-banner bg-color="pink-lighten-4" sticky>
              <template v-slot:actions>
                <v-text class="text-body-1 mt-n5 mb-5">May 2024</v-text></template>
              <v-banner-text class="text-h6 mt-n2"> 3
                <v-banner-text class="text-body-2"> Vancouver, BC </v-banner-text>
              </v-banner-text>
            </v-banner>
            <v-card-text class="bg-white text--primary">

            </v-card-text>
          </v-card>
        </v-sheet>
      </v-col>

      <v-col>
        <v-sheet class="my-2">
          <v-card max-height="500" class="mr-4">
            <v-banner bg-color="pink-lighten-2" sticky>
              <template v-slot:actions>
                <v-text class="text-body-1 mt-n5 mb-5">May 2024</v-text></template>
              <v-banner-text class="text-h6 mt-n2"> 3
                <v-banner-text class="text-body-2"> Vancouver, BC </v-banner-text>
              </v-banner-text>
            </v-banner>
            <v-card-text class="bg-white text--primary">

            </v-card-text>
          </v-card>
        </v-sheet>
      </v-col>
    </v-row>
    -->
  </v-container>
</template>

<!--
<template>
  <v-card class="ma-10">
    <v-tabs
      v-model="tab"
      bg-color="pink-lighten-2"
      align-tabs="center"
    >
      <v-tab value="P1">Capstone</v-tab>
      <v-tab value="P2">BeLoved</v-tab>
      <v-tab value="P3">Furry Friends</v-tab>
      <v-tab value="P4">Wasteless</v-tab>
      <v-tab value="P5">Souvenir</v-tab>

    </v-tabs>

    <v-card-text>
      <v-window v-model="tab">
        <v-window-item value="P1">
          
          
        </v-window-item>

        <v-window-item value="P2">
          
        </v-window-item>

        <v-window-item value="P3">
          
        </v-window-item>

        <v-window-item value="P4">
          
        </v-window-item>

        <v-window-item value="P5">
          
        </v-window-item>
      </v-window>
    </v-card-text>
  </v-card>
</template>
-->