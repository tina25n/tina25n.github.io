<script>
    export default {
    data: () => ({
      onboarding: 0,
    }),
  }

</script>

<!--https://codesandbox.io/p/sandbox/stack-70202529-v4251?file=%2Fsrc%2Fcomponents%2FCarouselExample.vue-->
<template>
<v-container>
    <v-window v-model="onboarding" show-arrows >
            <v-window-item name="Rabbit">
                <v-card max-height="500"  class="mx-10 my-5">
                    <v-banner bg-color = "pink-lighten-4" sticky>
                        <template v-slot:actions>
                            <v-text class="text-body-1 mt-n15">May 2024</v-text></template>
                        <v-banner-text class ="text-h6 mt-n2" > 1
                        <v-banner-text class="text-body-2"> Vancouver, BC </v-banner-text>
                        </v-banner-text>
                    </v-banner>
                    <v-card-text class="bg-white text--primary">
                    
                    </v-card-text>
                </v-card>
            </v-window-item>
            <v-window-item name="Faisal">
                <v-card max-height="500"  class="mx-10 my-5">
                    <v-banner bg-color = "pink-lighten-4" sticky>
                        <template v-slot:actions>
                            <v-text class="text-body-1 mt-n15">May 2024</v-text></template>
                        <v-banner-text class ="text-h6 mt-n2" > 2
                        <v-banner-text class="text-body-2"> Vancouver, BC </v-banner-text>
                        </v-banner-text>
                    </v-banner>
                    <v-card-text class="bg-white text--primary">
                    </v-card-text>
                </v-card>
            </v-window-item>
            <v-window-item name="LearningR">
                <v-card max-height="500"  class="mx-10 my-5">
                    <v-banner bg-color = "pink-lighten-4" sticky>
                        <template v-slot:actions>
                            <v-text class="text-body-1 mt-n15">May 2024</v-text></template>
                        <v-banner-text class ="text-h6 mt-n2" > 3
                        <v-banner-text class="text-body-2"> Vancouver, BC </v-banner-text>
                        </v-banner-text>
                    </v-banner>
                    <v-card-text class="bg-white text--primary">
                    </v-card-text>
                </v-card>
            </v-window-item>
            <v-card-text class="text-body-1 font-italic text-center font-weight-bold">Tina loves to donate any spare time to support her community. </v-card-text>
          </v-window>
        </v-container>
</template>