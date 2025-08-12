<script>
export default {
    data: () => ({
        window: 0,
        artorglink: "https://www.artorg.unibe.ch/research/aimi/index_eng.html",
        tochlink: "https://www.tochtech.com/",
        faisallink: "https://www.sfu.ca/~mfbeg/",
        ubcirplink: "https://isc.ubc.ca/about/irp",
    }),
}

</script>


<template>
    <v-container>
        <v-window v-model="window" show-arrows="hover">
            <v-window-item name="Artorg">
                <v-card class="mx-10 my-5">
                    <v-banner bg-color="pink-lighten-4" sticky>
                        <template v-slot:actions>
                            <v-list-item :href="artorglink" target="_blank" class="mt-n15">
                                <v-icon icon="mdi-open-in-new" class="text-h4 font-weight-bold" :to=artorglink></v-icon>
                            </v-list-item>
                        </template>
                        <v-banner-text class="text-h6 font-weight-bold">
                            University of Bern ARTORG Center for Biomedical Engineering Research
                            <v-banner-text class="text-body-1"> Bern, Switzerland </v-banner-text>
                        </v-banner-text>
                    </v-banner>
                    <v-card-text class="text-h6">
                        <v-row>
                            <v-col class="text-decoration-underline">
                                Artificial Intelligence in Medical Imaging (AIMI) Lab
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
                                clinical accuracy and educational value of simulation tools.</li>
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
                <v-card class="mx-10 my-5">
                    <v-banner bg-color="pink-lighten-4" sticky>
                        <template v-slot:actions>
                            <v-list-item :href="tochlink" target="_blank" class="mt-n15">
                                <v-icon icon="mdi-open-in-new" class="text-h4 font-weight-bold" :to=tochlink></v-icon>
                            </v-list-item>
                        </template>
                        <v-banner-text class="text-h6 font-weight-bold"> Tochtech Technologies
                            <v-banner-text class="text-body-1"> Vancouver, BC </v-banner-text>
                        </v-banner-text>
                    </v-banner>
                    <v-card-text class="text-h6">
                        <v-row>
                            <v-col class="text-decoration-underline">
                                Research and Development
                            </v-col>
                            <v-col class="text-right">
                                November 2023 - September 2024
                            </v-col>
                        </v-row>
                    </v-card-text>
                    <v-card-text class="font-italic text-body-1 mt-n5 mb-n3"> Data Analyst </v-card-text>
                    <div class="mx-10 text-body-1">
                        <ul>
                            <li>Analyzed large sleep datasets to identify inconsistencies and anomalies, tracing root
                                causes and recommending corrective actions to improve data accuracy </li>
                            <li>Designed and executed targeted test plans to isolate error sources in sensor data,
                                enabling faster resolution and higher reliability in future collections.</li>
                            <li>Developed a detailed comparison report between Tochtech’s Sleepsense bed sensor and the
                                Muse headband, providing quantitative insights into performance differences.</li>
                        </ul>
                    </div>
                    <v-card-text class="text-h6">
                        <v-row>
                            <v-col class="text-decoration-underline">
                                Software
                            </v-col>
                            <v-col class="text-right">
                                May 2022 - September 2022
                            </v-col>
                        </v-row>
                    </v-card-text>
                    <v-card-text class="font-italic text-body-1 mt-n5 mb-n3"> Software Tester Co-op Student
                    </v-card-text>
                    <div class="mx-10 text-body-1">
                        <ul>
                            <li>Designed, executed, and documented 500+ software test cases for a business portal
                                integrated with a bed sensor, ensuring feature functionality and system reliability.
                            </li>
                            <li>Provided actionable feedback on new and existing features, directly influencing product
                                enhancements and improving overall user experience.</li>
                            <li>Authored and maintained clear, user-friendly help page documentation to guide end users
                                through new software functionalities.</li>
                            <li>Composed targeted communications to introduce and explain feature updates, reducing
                                support inquiries and improving adoption rates.</li>
                            <li>Collaborated with developers and product teams to prioritize and resolve defects,
                                accelerating release cycles.</li>
                        </ul>
                    </div>
                    <v-card-text value="spacer"></v-card-text>
                </v-card>
            </v-window-item>
            <v-window-item name="Faisal">
                <v-card class="mx-10 my-5">
                    <v-banner bg-color="pink-lighten-4" sticky>
                        <template v-slot:actions>
                            <v-list-item :href="faisallink" target="_blank" class="mt-n15">
                                <v-icon icon="mdi-open-in-new" class="text-h4 font-weight-bold" :to=faisallink></v-icon>
                            </v-list-item>
                        </template>
                        <v-banner-text class="text-h6 font-weight-bold"> Simon Fraser University Functional & Anatomical
                            Imaging & Shape Analysis Lab

                            <v-banner-text class="text-body-1"> Vancouver, BC </v-banner-text>
                        </v-banner-text>
                    </v-banner>
                    <v-card-text class="text-h6">
                        <v-row>
                            <v-col class="text-decoration-underline">
                                Data Quality Assurance Co-op Student
                            </v-col>
                            <v-col class="text-right">
                                January 2022 - May 2022
                            </v-col>
                        </v-row>
                    </v-card-text>
                    <div class="mx-10 text-body-1">
                        <ul>
                            <li>Edited anatomical segmentations on MRI and CT datasets using 3D Slicer, enhancing the
                                quality of training data for machine learning algorithms—contributing to more accurate
                                whole-body analysis models.</li>
                            <li>Maintained strict adherence to file transfer workflows and email communication
                                protocols, ensuring secure and compliant data handling across research collaborators.
                            </li>
                        </ul>
                    </div>
                    <v-card-text value="spacer"></v-card-text>
                </v-card>
            </v-window-item>
            <v-window-item name="LearningR">
                <v-card max-height="500" class="mx-10 my-5">
                    <v-banner bg-color="pink-lighten-4" sticky>
                        <template v-slot:actions>
                            <v-list-item :href="ubcirplink" target="_blank" class="mt-n15">
                                <v-icon icon="mdi-open-in-new" class="text-h4 font-weight-bold" :to=ubcirplink></v-icon>
                            </v-list-item>
                        </template>
                        <v-banner-text class="text-h6 font-weight-bold"> University of British Columbia Integrated
                            Renewal Program
                            <v-banner-text class="text-body-1"> Vancouver, BC </v-banner-text>
                        </v-banner-text>
                    </v-banner>
                    <v-card-text class="text-h6">
                        <v-row>
                            <v-col class="text-decoration-underline">
                                Workday Learning Rover
                            </v-col>
                            <v-col class="text-right">
                                June 2020 - January 2021
                            </v-col>
                        </v-row>
                    </v-card-text>
                    <div class="mx-10 text-body-1">
                        <ul>
                            <li>Co-led a team of Learning Rovers to coordinate system-wide communications and events
                                within the Faculty of Medicine promoting the launch of Workday—UBC’s new HR, finance,
                                and payroll platform launched on November 2, 2020</li>
                            <li>Authored and maintained WordPress blog posts using HTML to inform the UBC community of
                                updates, training opportunities, and key Workday workflows.</li>
                            <li>Delivered efficient technical support and troubleshooting for end users navigating the
                                new Workday system, leveraging structured “Learning Rover Office Hours” and ISC support
                                resources</li>
                            <li>Guided peers and staff through critical tasks like setting up delegations and
                                notifications, ensuring smoother adoption of the Workday platform.</li>
                        </ul>
                    </div>
                    <v-card-text value="spacer"></v-card-text>
                </v-card>
            </v-window-item>
        </v-window>
        <v-card-text class="text-body-1 font-italic text-center font-weight-bold">Tina completed the Applied Science
            Co-op program during her time at UBC. </v-card-text>
    </v-container>
</template>

<!-- Old banner style
<v-banner bg-color="pink-lighten-4" sticky >
    <v-list-item :href="artorglink" target="_blank" class="ml-n4">
        <v-banner-text class="text-h6 font-weight-bold" :to=artorglink>
            University of Bern ARTORG Center for Biomedical Engineering Research
            <v-icon icon="mdi-open-in-new"></v-icon>
        </v-banner-text>
    <v-text class="text-body-1"> Bern, Switzerland </v-text>
    </v-list-item>
</v-banner>
-->