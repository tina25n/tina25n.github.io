<script>
    export default {
    data: () => ({
      tab: null,
      length: 3,
      onboarding: 0,
    }),
  }

</script>

<template>
  <v-card class="ma-10">
    <v-tabs
      v-model="tab"
      bg-color="pink-lighten-2"
      align-tabs="center"
    >
      <v-tab value="W1">Technical Roles</v-tab>
      <v-tab value="W2">Non-Technical Positions</v-tab>
      <v-tab value="W3">Volunteer Work</v-tab>
    </v-tabs>

    <v-card-text>
      <v-window v-model="tab">
        <v-window-item value="W1">
          <v-window v-model="onboarding" show-arrows >
            <v-window-item name="Toch">
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
            <v-card-text class="text-body-1 text-center">Tina completed the Applied science Co-op program during her time at UBC. </v-card-text>
          </v-window>
        </v-window-item>

        <v-window-item value="W2">
          
        </v-window-item>

        <v-window-item value="W3">
          
        </v-window-item>
      </v-window>
    </v-card-text>
  </v-card>
</template>