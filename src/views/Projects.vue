<script>
export default {
  data: () => ({
  }),
}

</script>

<!--Need to do a v-for for this one-->
<template>
  <v-window>
    <v-row no-gutters>
      <v-col>
        <v-sheet class="mt-5">
          <v-card max-height="500" class=" mx-4">
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
    </v-row>
    <v-row>
      <v-col>
        <v-sheet class="my-2">
          <v-card max-height="500" class=" ml-4">
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
    </v-row>
    <v-row>
      <v-col>
        <v-sheet class="my-2">
          <v-card max-height="500" class=" ml-4">
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
    </v-row>
  </v-window>
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