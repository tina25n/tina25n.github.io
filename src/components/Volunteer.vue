<script>
import { VCol } from 'vuetify/lib/components/index.mjs';

export default {
    data: () => ({
        window: 0,
        ubcbestlink: "",
        vrralink: "",
        ubcreclink: "",
        micyrnlink: "",
        bearlink: "",
        cityofsurreylink: "",
        laurellink: "",
        amenidaslink: "https://www.amenidaseniorliving.ca/amenities/leisure/",
        bcparktrainlink: "",
        timhortonslink: "",
    }),
}

</script>

<!--https://codesandbox.io/p/sandbox/stack-70202529-v4251?file=%2Fsrc%2Fcomponents%2FCarouselExample.vue-->
<template>
    <v-container>
        <v-row justify="end" v-name="filter">
            <v-spacer></v-spacer>
            <v-spacer></v-spacer>
            <v-spacer></v-spacer>
            <v-spacer></v-spacer>
            <v-col cols =2>
                <v-btn class="primary" color="pink-lighten-2">Technical</v-btn>
            </v-col>
            <v-col cols =3>
                <v-btn class="primary" color="pink-lighten-2">Non-Technical</v-btn>
            </v-col>
        </v-row>
        <v-window v-model="window" show-arrows="hover">
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
            <v-window-item name="bcptrain">
                <v-card class="mx-10 my-5">
                    <v-banner bg-color="pink-lighten-4" sticky>
                        <template v-slot:actions>
                            <v-list-item :href="artorglink" target="_blank" class="mt-n15">
                                <v-icon icon="mdi-open-in-new" class="text-h4 font-weight-bold" :to=artorglink></v-icon>
                            </v-list-item>
                        </template>
                        <v-banner-text class="text-h6 font-weight-bold"> EngKidz
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
            <v-window-item name="timhortons">
                <v-card class="mx-10 my-5">
                    <v-banner bg-color="pink-lighten-4" sticky>
                        <template v-slot:actions>
                            <v-list-item :href="artorglink" target="_blank" class="mt-n15">
                                <v-icon icon="mdi-open-in-new" class="text-h4 font-weight-bold" :to=artorglink></v-icon>
                            </v-list-item>
                        </template>
                        <v-banner-text class="text-h6 font-weight-bold"> EngKidz
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
            <v-card-text class="text-body-1 font-italic text-center font-weight-bold">Tina loves to donate any spare
                time to support
                her community. </v-card-text>
        </v-window>
    </v-container>
</template>