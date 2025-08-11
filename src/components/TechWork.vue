<script>
export default {
    data: () => ({
        onboarding: 0,
    }),
}

</script>


<template>
    <v-container>
        <v-window v-model="onboarding" show-arrows>
            <v-window-item name="Artorg">
                <v-card class="mx-10 my-5">
                    <v-banner bg-color="pink-lighten-4" sticky>
                        <v-banner-text class="text-h6 font-weight-bold"> University of Bern ARTORG Center for Biomedical
                            Engineering Research
                            <v-banner-text class="text-body-1"> Bern, Switzerland </v-banner-text>
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
                            <li>Collaborated via GitHub to version-control code, track experiments,
                                and ensure reproducibility across multi-institutional research teams. </li>
                            <li>Learned and applied advanced polarimetry principles to medical imaging,
                                enabling quantitative tissue characterization for cancer margin assessment
                                post-resection.</li>
                            <li>Developed Python workflows using pydicom to acquire, process, and store polarimetric
                                imaging data, embedding Mueller matrices into compliant DICOM files for clinical
                                research use.</li>
                        </ul>
                    </div>
                    <v-card-text class="text-h6">
                        <v-row>
                            <v-col class="text-decoration-underline">
                                Image Guided Therapy (IGT) Group
                            </v-col>
                            <v-col class="text-right">
                                January 2025 - July 2025
                            </v-col>
                        </v-row>
                    </v-card-text>
                    <v-card-text class="font-italic text-body-1 mt-n5 mb-n3"> Research Intern </v-card-text>
                    <div class="mx-10 text-body-1">
                        <ul>
                            <li>Developed anatomically precise 3D surgical models for neurosurgery and spine training,
                                improving simulator realism and surgeon engagement at international conferences. </li>
                            <li>Applied neurosurgical incision mapping and spine pathology research to enhance the
                                clinical
                                accuracy and educational value of simulation tools.</li>
                            <li>Resolved technical simulator issues in high-pressure, live-event settings, maintaining
                                uninterrupted demonstrations and positive attendee experiences.</li>
                            <li>Incorporated direct surgeon feedback into iterative design improvements,
                                accelerating development cycles and aligning products with clinical needs.</li>
                        </ul>
                    </div>
                    <v-card-text value="spacer"></v-card-text>
                </v-card>
            </v-window-item>
            <v-window-item name="Toch">
                <v-card max-height="500" class="mx-10 my-5">
                    <v-banner bg-color="pink-lighten-4" sticky>
                        <v-banner-text class="text-h6 font-weight-bold"> Tochtech Technologies
                            <v-banner-text class="text-body-2"> Vancouver, BC </v-banner-text>
                        </v-banner-text>
                    </v-banner>
                    <v-card-text class="bg-white text--primary">

                    </v-card-text>
                </v-card>
            </v-window-item>
            <v-window-item name="Faisal">
                <v-card max-height="500" class="mx-10 my-5">
                    <v-banner bg-color="pink-lighten-4" sticky>
                        <v-banner-text class="text-h6 font-weight-bold"> Simon Fraser University Functional & Anatomical
                            Imaging & Shape Analysis Lab
                            <v-banner-text class="text-body-2"> Vancouver, BC </v-banner-text>
                        </v-banner-text>
                    </v-banner>
                    <v-card-text class="bg-white text--primary">

                    </v-card-text>
                </v-card>
            </v-window-item>
            <v-window-item name="LearningR">
                <v-card max-height="500" class="mx-10 my-5">
                    <v-banner bg-color="pink-lighten-4" sticky>
                        <v-banner-text class="text-h6 font-weight-bold"> University of British Columbia Integrated
                            Renewal Program
                            <v-banner-text class="text-body-2"> Vancouver, BC </v-banner-text>
                        </v-banner-text>
                    </v-banner>
                    <v-card-text class="bg-white text--primary">
                    </v-card-text>
                </v-card>
            </v-window-item>
        </v-window>
        <v-card-text class="text-body-1 font-italic text-center font-weight-bold">Tina completed the Applied Science
            Co-op program during her time at UBC. </v-card-text>
    </v-container>
</template>