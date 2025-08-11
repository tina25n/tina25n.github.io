<script>
    export default {
    data: () => ({
      onboarding: 0,
    }),
  }

</script>


<template>
<v-container>
    <v-window hide-delimiters show-arrows>
            <v-window-item name="Santa" max-height="200">
                <v-card height = "100%"  class="mx-10 my-5">
                    <v-banner bg-color = "pink-lighten-4" sticky>
                        <v-banner-text class ="text-h6 font-weight-bold" > Santa Set Photographer
                        <v-banner-text class="text-body-2"> Surrey, BC </v-banner-text>
                        </v-banner-text>
                    </v-banner>
                    <v-card-text class="bg-white text--primary">
                    
                    </v-card-text>
                </v-card>
            </v-window-item>
            <v-window-item name="RNM" max-height="200">
                <v-card  class="mx-10 my-5">
                    <v-banner bg-color = "pink-lighten-4" sticky>
                        <v-banner-text class ="text-h6 font-weight-bold" > Richmond Night Market Lemonade Stand
                        <v-banner-text class="text-body-2"> Richmond, BC </v-banner-text>
                        </v-banner-text>
                    </v-banner>
                    <v-card-text class="bg-white text--primary">
                    </v-card-text>
                </v-card>
            </v-window-item>
            <v-window-item name="UBC Bookstore" max-height="200">
                <v-card  class="mx-10 my-5">
                    <v-banner bg-color = "pink-lighten-4" sticky>
                        <v-banner-text class ="text-h6 font-weight-bold" > University of British Columbia Bookstore
                        <v-banner-text class="text-body-2"> Vancouver, BC </v-banner-text>
                        </v-banner-text>
                    </v-banner>
                    <v-card-text class="bg-white text--primary">
                    </v-card-text>
                </v-card>
            </v-window-item>
            <v-window-item name="Famous" max-height="200">
                <v-card class="mx-10 my-5">
                    <v-banner bg-color = "pink-lighten-4" sticky>
                        <v-banner-text class ="text-h6 font-weight-bold" > Famous Footwear
                        <v-banner-text class="text-body-2"> Surrey, BC </v-banner-text>
                        </v-banner-text>
                    </v-banner>
                    <v-card-text class="bg-white text--primary">
                    </v-card-text>
                </v-card>
            </v-window-item>
            <v-window-item name="Blenz">
                <v-card class="mx-10 my-5">
                    <v-banner bg-color = "pink-lighten-4" sticky>
                        <v-banner-text class ="text-h6 font-weight-bold" > Blenz Coffee
                        <v-banner-text class="text-body-2"> Surrey, BC </v-banner-text>
                        </v-banner-text>
                    </v-banner>
                    <v-card-text class="bg-white text--primary">
                    </v-card-text>
                </v-card>
            </v-window-item>
        </v-window>
        <v-card-text class="text-body-1 font-italic text-center font-weight-bold">Tina enjoys roles where she can connect with people, solve problems, 
            and provide service that reflects both professionalism and genuine care.  With a background in many 
            customer-focused roles, she often takes on temporary and seasonal positions to upkeep her skills. </v-card-text>
        </v-container>
</template>