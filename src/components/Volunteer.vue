<script>
import topdogs from '@/assets/images/jump_dogs.png'
import bottomdogs from '@/assets/images/bottom_dogs.png'

export default {
    data: () => ({
        window: 0,
        technical: false,
        nontech: false,
        topsrc: topdogs,
        bottomsrc: bottomdogs,
        ubcbestlink: "https://www.linkedin.com/company/ubcbest/",
        vrralink: "https://www.vrra.org/wp-beta1/",
        ubcreclink: "https://recreation.ubc.ca/intramurals/events/",
        micyrnlink: "https://www.micyrn.ca/",
        bearlink: "https://www.ubcbionics.com/",
        cityofsurreylink: "https://www.surrey.ca/about-surrey/volunteer-opportunities",
        laurellink: "https://www.parkplaceseniorsliving.com/find-a-location/british-columbia/lower-mainland/laurel-place/",
        amenidaslink: "https://www.amenidaseniorliving.ca/amenities/leisure/",
        bcparktrainlink: "https://www.bctrains.com/",
        timhortonslink: "https://www.timhortons.com/",
    }),
}

</script>

<!--https://codesandbox.io/p/sandbox/stack-70202529-v4251?file=%2Fsrc%2Fcomponents%2FCarouselExample.vue-->
<template>
    <v-container>
        
        <v-row justify="end" v-name="filter">
            <v-col cols=2>
                <v-checkbox-btn class = "d-flex justify-end" v-model="technical" color="pink-lighten-2" label="Career Related" :disabled = nontech></v-checkbox-btn>
            </v-col>
            <v-col cols=3>
                <v-checkbox-btn v-model="nontech" color="pink-lighten-2" label="Interests Based" :disabled = technical></v-checkbox-btn>
            </v-col>
        </v-row>
        <v-window v-model="window" show-arrows="hover" v-if="!technical && !nontech">
            <v-window-item name=empty>
                <v-sheet height=500>
                    <v-img class="mx-auto my-6" :src="topsrc" max-width ="800"></v-img>
                    <v-text class="d-flex justify-center align-center text-decoration-overline text-button"> 
                        Select a filter above to view Tina's various volunteer roles
                    </v-text>
                    <v-img class="mx-auto mt-16" :src="bottomsrc" max-width =500></v-img>
                </v-sheet>
            </v-window-item>
        </v-window>
        <v-window v-name="window" show-arrows="hover" v-if="technical">
            <v-window-item name="ubcbest">
                <v-card class="mx-10 my-5">
                    <v-banner bg-color="pink-lighten-4" sticky>
                        <template v-slot:actions>
                            <v-list-item :href="artorglink" target="_blank" class="mt-n15">
                                <v-icon icon="mdi-open-in-new" class="text-h4 font-weight-bold" :to=artorglink></v-icon>
                            </v-list-item>
                        </template>
                        <v-banner-text class="text-h6 font-weight-bold"> UBC Biomedical Engineering Student Team
                            <v-banner-text class="text-body-1"> Vancouver, BC </v-banner-text>
                        </v-banner-text>
                    </v-banner>
                    <v-card-text class="text-h6">
                        <v-row>
                            <v-col class="text-decoration-underline">
                                Multi-faceted Innovations in NeuroTechnology (MINT)
                            </v-col>
                            <v-col class="text-right">
                                July 2025 - December 2025
                            </v-col>
                        </v-row>
                    </v-card-text>
                    <v-card-text class="font-italic text-body-1 mt-n5 mb-n3"> Electrical Engineer </v-card-text>
                    <div class="mx-10 text-body-1">
                        <ul>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                        </ul>
                    </div>
                    <v-card-text class="text-h6">
                        <v-row>
                            <v-col class="text-decoration-underline">
                                Uplift
                            </v-col>
                            <v-col class="text-right">
                                July 2025 - December 2025
                            </v-col>
                        </v-row>
                    </v-card-text>
                    <v-card-text class="font-italic text-body-1 mt-n5 mb-n3"> Electrical Engineering Sub-team Member
                    </v-card-text>
                    <div class="mx-10 text-body-1">
                        <ul>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                        </ul>
                    </div>
                    <v-card-text value="spacer"></v-card-text>
                </v-card>
            </v-window-item>
            <v-window-item name="micyrn">
                <v-card class="mx-10 my-5">
                    <v-banner bg-color="pink-lighten-4" sticky>
                        <template v-slot:actions>
                            <v-list-item :href="artorglink" target="_blank" class="mt-n15">
                                <v-icon icon="mdi-open-in-new" class="text-h4 font-weight-bold" :to=artorglink></v-icon>
                            </v-list-item>
                        </template>
                        <v-banner-text class="text-h6 font-weight-bold"> BC Children's Hospital Summer Student Research
                            Program
                            <v-banner-text class="text-body-1"> Vancouver, BC </v-banner-text>
                        </v-banner-text>
                    </v-banner>
                    <v-card-text class="text-h6">
                        <v-row>
                            <v-col class="text-decoration-underline">
                                Maternal Infant Child Youth Research Network (MICYRN)
                            </v-col>
                            <v-col class="text-right">
                                July 2025 - December 2025
                            </v-col>
                        </v-row>
                    </v-card-text>
                    <v-card-text class="font-italic text-body-1 mt-n5 mb-n3"> Research Assistant </v-card-text>
                    <div class="mx-10 text-body-1">
                        <ul>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                        </ul>
                    </div>
                    <v-card-text value="spacer"></v-card-text>
                </v-card>
            </v-window-item>
            <v-window-item name="bear">
                <v-card class="mx-10 my-5">
                    <v-banner bg-color="pink-lighten-4" sticky>
                        <template v-slot:actions>
                            <v-list-item :href="artorglink" target="_blank" class="mt-n15">
                                <v-icon icon="mdi-open-in-new" class="text-h4 font-weight-bold" :to=artorglink></v-icon>
                            </v-list-item>
                        </template>
                        <v-banner-text class="text-h6 font-weight-bold"> Bionics UBC (Formerly known as BEAR UBC)
                            <v-banner-text class="text-body-1"> Vancouver, BC </v-banner-text>
                        </v-banner-text>
                    </v-banner>
                    <v-card-text class="text-h6">
                        <v-row>
                            <v-col class="text-decoration-underline">
                                Mechanical Sub-team
                            </v-col>
                            <v-col class="text-right">
                                July 2025 - December 2025
                            </v-col>
                        </v-row>
                    </v-card-text>
                    <v-card-text class="font-italic text-body-1 mt-n5 mb-n3"> Member </v-card-text>
                    <div class="mx-10 text-body-1">
                        <ul>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                        </ul>
                    </div>
                    <v-card-text value="spacer"></v-card-text>
                </v-card>
            </v-window-item>
            <v-window-item name="laurel">
                <v-card class="mx-10 my-5">
                    <v-banner bg-color="pink-lighten-4" sticky>
                        <template v-slot:actions>
                            <v-list-item :href="artorglink" target="_blank" class="mt-n15">
                                <v-icon icon="mdi-open-in-new" class="text-h4 font-weight-bold" :to=artorglink></v-icon>
                            </v-list-item>
                        </template>
                        <v-banner-text class="text-h6 font-weight-bold"> Laurel Place Care Centre
                            <v-banner-text class="text-body-1"> Surrey, BC </v-banner-text>
                        </v-banner-text>
                    </v-banner>
                    <v-card-text class="text-h6">
                        <v-row>
                            <v-col class="text-decoration-underline">
                                Artificial Intelligence in Medical Imaging (AIMI) Group
                            </v-col>
                            <v-col class="text-right">
                                July 2025 - December 2025
                            </v-col>
                        </v-row>
                    </v-card-text>
                    <v-card-text class="font-italic text-body-1 mt-n5 mb-n3"> Research Intern </v-card-text>
                    <div class="mx-10 text-body-1">
                        <ul>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                        </ul>
                    </div>
                    <v-card-text value="spacer"></v-card-text>
                </v-card>
            </v-window-item>
            <v-window-item name="amenidas">
                <v-card class="mx-10 my-5">
                    <v-banner bg-color="pink-lighten-4" sticky>
                        <template v-slot:actions>
                            <v-list-item :href="artorglink" target="_blank" class="mt-n15">
                                <v-icon icon="mdi-open-in-new" class="text-h4 font-weight-bold" :to=artorglink></v-icon>
                            </v-list-item>
                        </template>
                        <v-banner-text class="text-h6 font-weight-bold"> Amenida Seniors Community
                            <v-banner-text class="text-body-1"> Surrey, BC </v-banner-text>
                        </v-banner-text>
                    </v-banner>
                    <v-card-text class="text-h6">
                        <v-row>
                            <v-col class="text-decoration-underline">
                                Artificial Intelligence in Medical Imaging (AIMI) Group
                            </v-col>
                            <v-col class="text-right">
                                July 2025 - December 2025
                            </v-col>
                        </v-row>
                    </v-card-text>
                    <v-card-text class="font-italic text-body-1 mt-n5 mb-n3"> Research Intern </v-card-text>
                    <div class="mx-10 text-body-1">
                        <ul>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                        </ul>
                    </div>
                    <v-card-text value="spacer"></v-card-text>
                </v-card>
            </v-window-item>
        </v-window>
        <v-window v-name="window" show-arrows="hover" v-if="nontech">
            <v-window-item name="vrra">
                <v-card class="mx-10 my-5">
                    <v-banner bg-color="pink-lighten-4" sticky>
                        <template v-slot:actions>
                            <v-list-item :href="artorglink" target="_blank" class="mt-n15">
                                <v-icon icon="mdi-open-in-new" class="text-h4 font-weight-bold" :to=artorglink></v-icon>
                            </v-list-item>
                        </template>
                        <v-banner-text class="text-h6 font-weight-bold"> Vancouver Rabbit Rescue and Advocacy
                            <v-banner-text class="text-body-1"> Vancouver, BC </v-banner-text>
                        </v-banner-text>
                    </v-banner>
                    <v-card-text class="text-h6">
                        <v-row>
                            <v-col class="text-decoration-underline">
                                Indoor Pen Cleaner Volunteer
                            </v-col>
                            <v-col class="text-right">
                                July 2025 - December 2025
                            </v-col>
                        </v-row>
                    </v-card-text>
                    <v-card-text class="font-italic text-body-1 mt-n5 mb-n3"> Research Intern </v-card-text>
                    <div class="mx-10 text-body-1">
                        <ul>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                        </ul>
                    </div>
                    <v-card-text value="spacer"></v-card-text>
                </v-card>
            </v-window-item>
            <v-window-item name="ubcrec">
                <v-card class="mx-10 my-5">
                    <v-banner bg-color="pink-lighten-4" sticky>
                        <template v-slot:actions>
                            <v-list-item :href="artorglink" target="_blank" class="mt-n15">
                                <v-icon icon="mdi-open-in-new" class="text-h4 font-weight-bold" :to=artorglink></v-icon>
                            </v-list-item>
                        </template>
                        <v-banner-text class="text-h6 font-weight-bold"> UBC Recreation and Events
                            <v-banner-text class="text-body-1"> Vancouver, BC </v-banner-text>
                        </v-banner-text>
                    </v-banner>
                    <v-card-text class="text-h6">
                        <v-row>
                            <v-col class="text-decoration-underline">
                                Artificial Intelligence in Medical Imaging (AIMI) Group
                            </v-col>
                            <v-col class="text-right">
                                July 2025 - December 2025
                            </v-col>
                        </v-row>
                    </v-card-text>
                    <v-card-text class="font-italic text-body-1 mt-n5 mb-n3"> Research Intern </v-card-text>
                    <div class="mx-10 text-body-1">
                        <ul>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                        </ul>
                    </div>
                    <v-card-text value="spacer"></v-card-text>
                </v-card>
            </v-window-item>
            <v-window-item name="cityofsurrey">
                <v-card class="mx-10 my-5">
                    <v-banner bg-color="pink-lighten-4" sticky>
                        <template v-slot:actions>
                            <v-list-item :href="artorglink" target="_blank" class="mt-n15">
                                <v-icon icon="mdi-open-in-new" class="text-h4 font-weight-bold" :to=artorglink></v-icon>
                            </v-list-item>
                        </template>
                        <v-banner-text class="text-h6 font-weight-bold"> City of Surrey Recreation and Events
                            <v-banner-text class="text-body-1"> Surrey, BC </v-banner-text>
                        </v-banner-text>
                    </v-banner>
                    <v-card-text class="text-h6">
                        <v-row>
                            <v-col class="text-decoration-underline">
                                Artificial Intelligence in Medical Imaging (AIMI) Group
                            </v-col>
                            <v-col class="text-right">
                                July 2025 - December 2025
                            </v-col>
                        </v-row>
                    </v-card-text>
                    <v-card-text class="font-italic text-body-1 mt-n5 mb-n3"> Research Intern </v-card-text>
                    <div class="mx-10 text-body-1">
                        <ul>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                        </ul>
                    </div>
                    <v-card-text value="spacer"></v-card-text>
                </v-card>
            </v-window-item>
            <v-window-item name="bcptrain">
                <v-card class="mx-10 my-5">
                    <v-banner bg-color="pink-lighten-4" sticky>
                        <template v-slot:actions>
                            <v-list-item :href="artorglink" target="_blank" class="mt-n15">
                                <v-icon icon="mdi-open-in-new" class="text-h4 font-weight-bold" :to=artorglink></v-icon>
                            </v-list-item>
                        </template>
                        <v-banner-text class="text-h6 font-weight-bold"> Bear Creek Park Train and Mini Golf
                            <v-banner-text class="text-body-1"> Surrey, BC </v-banner-text>
                        </v-banner-text>
                    </v-banner>
                    <v-card-text class="text-h6">
                        <v-row>
                            <v-col class="text-decoration-underline">
                                Volunteer
                            </v-col>
                            <v-col class="text-right">
                                July 2025 - December 2025
                            </v-col>
                        </v-row>
                    </v-card-text>
                    <div class="mx-10 text-body-1">
                        <ul>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                        </ul>
                    </div>
                    <v-card-text value="spacer"></v-card-text>
                </v-card>
            </v-window-item>
            <v-window-item name="timhortons">
                <v-card class="mx-10 my-5">
                    <v-banner bg-color="pink-lighten-4" sticky>
                        <template v-slot:actions>
                            <v-list-item :href="timhortonslink" target="_blank" class="mt-n15">
                                <v-icon icon="mdi-open-in-new" class="text-h4 font-weight-bold" :to=timhortonslink></v-icon>
                            </v-list-item>
                        </template>
                        <v-banner-text class="text-h6 font-weight-bold"> Tim Horton's
                            <v-banner-text class="text-body-1"> Surrey, BC </v-banner-text>
                        </v-banner-text>
                    </v-banner>
                    <v-card-text class="text-h6">
                        <v-row>
                            <v-col class="text-decoration-underline">
                                Guildford Location
                            </v-col>
                            <v-col class="text-right">
                                July 2025 - December 2025
                            </v-col>
                        </v-row>
                    </v-card-text>
                    <v-card-text class="font-italic text-body-1 mt-n5 mb-n3"> Research Intern </v-card-text>
                    <div class="mx-10 text-body-1">
                        <ul>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                        </ul>
                    </div>
                    <v-card-text value="spacer"></v-card-text>
                </v-card>
            </v-window-item>
        </v-window>
        <v-card-text class="text-body-1 font-italic text-center font-weight-bold">Tina loves to donate any spare
                time to support her community. </v-card-text>
    </v-container>
</template>