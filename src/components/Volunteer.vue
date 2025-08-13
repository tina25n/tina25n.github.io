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
        ubcrexlink: "https://www.uroubc.com/rex-main/",
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
                <v-checkbox-btn class="d-flex justify-end" v-model="technical" color="pink-lighten-2"
                    label="Career Related" :disabled=nontech></v-checkbox-btn>
            </v-col>
            <v-col cols=3>
                <v-checkbox-btn v-model="nontech" color="pink-lighten-2" label="Interests Based"
                    :disabled=technical></v-checkbox-btn>
            </v-col>
        </v-row>
        <v-window v-model="window" show-arrows="hover" v-if="!technical && !nontech">
            <v-window-item name=empty>
                <v-sheet height=500>
                    <v-img class="mx-auto my-6" :src="topsrc" max-width="800"></v-img>
                    <v-text class="d-flex justify-center align-center text-decoration-overline text-button">
                        Select a filter above to view Tina's various volunteer roles
                    </v-text>
                    <v-img class="mx-auto mt-16" :src="bottomsrc" max-width=500></v-img>
                </v-sheet>
            </v-window-item>
        </v-window>
        <v-window v-name="window" show-arrows="hover" v-if="technical">
            <v-window-item name="ubcbest">
                <v-card class="mx-10 my-5">
                    <v-banner bg-color="pink-lighten-4" sticky>
                        <template v-slot:actions>
                            <v-list-item :href="ubcbestlink" target="_blank" class="mt-n15">
                                <v-icon icon="mdi-open-in-new" class="text-h4 font-weight-bold"
                                    :to=ubcbestlink></v-icon>
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
                                March 2021 - May 2024
                            </v-col>
                        </v-row>
                    </v-card-text>
                    <v-card-text class="font-italic text-body-1 mt-n5 mb-n3"> Electrical Engineer </v-card-text>
                    <v-card-text class="text-body-1 font-weight-bold">MINT designs accessible neurotechnology devices to
                        improve quality of
                        life for individuals with neurological conditions.</v-card-text>
                    <div class="mx-10 text-body-1">
                        <ul>
                            <li>Developed an Arduino-controlled TV remote operated via EEG headset, enabling hands-free
                                channel and volume
                                control.</li>
                            <li>Contributed to the circuit design and prototyping of the low pass filter for a low-cost
                                EEG headset,
                                collaborating with team members to optimize usability and affordability.</li>
                            <li>Programmed and integrated hardware components, testing EEG signal response and
                                troubleshooting for improved
                                reliability.</li>
                        </ul>
                    </div>
                    <v-card-text class="text-h6">
                        <v-row>
                            <v-col class="text-decoration-underline">
                                Uplift - Bedpan Transport Cart Project
                            </v-col>
                            <v-col class="text-right">
                                October 2019 - March 2021
                            </v-col>
                        </v-row>
                    </v-card-text>
                    <v-card-text class="font-italic text-body-1 mt-n5 mb-n3"> Electrical Engineering Sub-team Member
                    </v-card-text>
                    <v-card-text class="text-body-1 font-weight-bold">Uplift designs assistive devices for clients with
                        mobility
                        limitations, in collaboration with the Neil Squire Foundation and Hedgehog
                        Technologies.</v-card-text>
                    <div class="mx-10 text-body-1">
                        <ul>
                            <li>Worked on a custom cart to transport a bedpan from a client’s bedroom to their washroom,
                                directly addressing
                                needs of an individual with post-polio syndrome.</li>
                            <li>Participated in client meetings to understand functional requirements and ensure the
                                design was practical,
                                safe, and user-friendly.</li>
                            <li>Contributed to the design and integration of the cart’s battery and power system,
                                ensuring reliable and
                                consistent operation.</li>
                        </ul>
                    </div>
                    <v-card-text value="spacer"></v-card-text>
                </v-card>
            </v-window-item>
            <v-window-item name="micyrn">
                <v-card class="mx-10 my-5">
                    <v-banner bg-color="pink-lighten-4" sticky>
                        <template v-slot:actions>
                            <v-list-item :href="micyrnlink" target="_blank" class="mt-n15">
                                <v-icon icon="mdi-open-in-new" class="text-h4 font-weight-bold" :to=micyrnlink></v-icon>
                            </v-list-item>
                        </template>
                        <v-banner-text class="text-h6 font-weight-bold"> BC Children's Hospital INSPIRE and Summer
                            Student Research Program
                            <v-banner-text class="text-body-1"> Vancouver, BC </v-banner-text>
                        </v-banner-text>
                    </v-banner>
                    <v-card-text class="text-h6">
                        <v-row>
                            <v-col class="text-decoration-underline">
                                Maternal Infant Child Youth Research Network (MICYRN)
                            </v-col>
                            <v-col class="text-right">
                                October 2021 - September 2022
                            </v-col>
                        </v-row>
                    </v-card-text>
                    <v-card-text class="font-italic text-body-1 mt-n5 mb-n3"> Research Assistant </v-card-text>
                    <v-card-text class="text-body-1 font-weight-bold"> Through collaboration with INSPIRE, BCCHR’s
                        academic-year
                        training program that places students on child-health research teams, and the Summer Student
                        Research
                        Program (SSRP) which provides a summer research project and education with MICYRN, a national
                        network that
                        builds capacity for high-quality maternal, infant, child and youth health research across
                        Canada, an
                        induction video challenging nurses views on research was developed</v-card-text>
                    <div class="mx-10 text-body-1">
                        <ul>
                            <li>Assisted in developing an induction video to encourage nurses to engage with and support
                                research
                                activities.</li>
                            <li>Created storyboards and transcribed interviews with nurses, identifying recurring themes
                                to feature
                                in the video.</li>
                            <li>Participated in on-set filming and spoke with nurses and patient participants about
                                their
                                experiences with research.</li>
                        </ul>
                    </div>
                    <v-card-text value="spacer"></v-card-text>
                </v-card>
            </v-window-item>
            <v-window-item name="ubcrex">
                <v-card class="mx-10 my-5">
                    <v-banner bg-color="pink-lighten-4" sticky>
                        <template v-slot:actions>
                            <v-list-item :href="ubcrexlink" target="_blank" class="mt-n15">
                                <v-icon icon="mdi-open-in-new" class="text-h4 font-weight-bold" :to=ubcrexlink></v-icon>
                            </v-list-item>
                        </template>
                        <v-banner-text class="text-h6 font-weight-bold"> UBC Research Experience (REX)
                            <v-banner-text class="text-body-1"> Vancouver, BC </v-banner-text>
                        </v-banner-text>
                    </v-banner>
                    <v-card-text class="text-h6">
                        <v-row>
                            <v-col class="text-decoration-underline">
                                Automated Classification of Aggressive Behavior Using a Transformer
                            </v-col>
                            <v-col class="text-right">
                                October 2021 - January 2022
                            </v-col>
                        </v-row>
                    </v-card-text>
                    <v-card-text class="font-italic text-body-1 mt-n5 mb-n3"> Member </v-card-text>
                    <v-card-text class="text-body-1 font-weight-bold">UBC REX offers undergraduate students hands-on
                        research
                        experience in various disciplines. My project was at the intersection of neuropsychology and
                        computer
                        science.</v-card-text>
                    <div class="mx-10 text-body-1">
                        <ul>
                            <li>Contributed to a project analyzing mouse social isolation experiments by classifying
                                aggressive
                                behaviors captured in video.</li>
                            <li>Applied Auto-Regressive Hidden Markov Model (ARHMM) segmentation techniques to divide
                                multi-behavior
                                sequences into labeled classifications for machine learning analysis.</li>
                            <li>Wrote and tested Python scripts to preprocess behavioral video data, improving
                                segmentation accuracy
                                and model performance.</li>
                        </ul>
                    </div>
                    <v-card-text value="spacer"></v-card-text>
                </v-card>
            </v-window-item>
            <v-window-item name="bear">
                <v-card class="mx-10 my-5">
                    <v-banner bg-color="pink-lighten-4" sticky>
                        <template v-slot:actions>
                            <v-list-item :href="bearlink" target="_blank" class="mt-n15">
                                <v-icon icon="mdi-open-in-new" class="text-h4 font-weight-bold" :to=bearlink></v-icon>
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
                                January 2019 - September 2019
                            </v-col>
                        </v-row>
                    </v-card-text>
                    <v-card-text class="font-italic text-body-1 mt-n5 mb-n3"> Member </v-card-text>
                    <v-card-text class="text-body-1 font-weight-bold">Bionics UBC designs advanced prosthetics, including the GRASP bionic arm for the international Cybathlon competition.</v-card-text>
                    <div class="mx-10 text-body-1">
                        <ul>
                            <li>Created detailed 3D SolidWorks models of Cybathlon racecourse components for training simulations.</li>
                            <li>Researched materials and determined design specifications for prosthetic components to improve competition readiness.</li>
                            <li>Collaborated with mechanical and electrical subteams to ensure modeled racecourse elements met dimensional and durability requirements for training use.</li>
                        </ul>
                    </div>
                    <v-card-text value="spacer"></v-card-text>
                </v-card>
            </v-window-item>
            <v-window-item name="laurel">
                <v-card class="mx-10 my-5">
                    <v-banner bg-color="pink-lighten-4" sticky>
                        <template v-slot:actions>
                            <v-list-item :href="laurellink" target="_blank" class="mt-n15">
                                <v-icon icon="mdi-open-in-new" class="text-h4 font-weight-bold" :to=laurellink></v-icon>
                            </v-list-item>
                        </template>
                        <v-banner-text class="text-h6 font-weight-bold"> Laurel Place Care Centre
                            <v-banner-text class="text-body-1"> Surrey, BC </v-banner-text>
                        </v-banner-text>
                    </v-banner>
                    <v-card-text class="text-h6">
                        <v-row>
                            <v-col class="text-decoration-underline">
                                Administration
                            </v-col>
                            <v-col class="text-right">
                                June 2017
                            </v-col>
                        </v-row>
                    </v-card-text>
                    <v-card-text class="font-italic text-body-1 mt-n5 mb-n3"> Volunteer </v-card-text>
                    <v-card-text class="text-body-1 font-weight-bold">Laurel Place provides long-term care for low-functioning senior residents.</v-card-text>
                    <div class="mx-10 text-body-1">
                        <ul>
                            <li>Updated and organized a comprehensive database of entertainers using Microsoft Word and Excel to meet a set project deadline.</li>
                            <li>Made frequent professional calls to coordinate schedules and verify information, ensuring accuracy and clarity.</li>
                        </ul>
                    </div>
                    <v-card-text value="spacer"></v-card-text>
                </v-card>
            </v-window-item>
            <v-window-item name="amenidas">
                <v-card class="mx-10 my-5">
                    <v-banner bg-color="pink-lighten-4" sticky>
                        <template v-slot:actions>
                            <v-list-item :href="amenidaslink" target="_blank" class="mt-n15">
                                <v-icon icon="mdi-open-in-new" class="text-h4 font-weight-bold" :to=amenidaslink></v-icon>
                            </v-list-item>
                        </template>
                        <v-banner-text class="text-h6 font-weight-bold"> Amenida Seniors Community
                            <v-banner-text class="text-body-1"> Surrey, BC </v-banner-text>
                        </v-banner-text>
                    </v-banner>
                    <v-card-text class="text-h6">
                        <v-row>
                            <v-col class="text-decoration-underline">
                                Programs and Recreation
                            </v-col>
                            <v-col class="text-right">
                                April 2017
                            </v-col>
                        </v-row>
                    </v-card-text>
                    <v-card-text class="font-italic text-body-1 mt-n5 mb-n3"> Volunteer </v-card-text>
                    <v-card-text class="text-body-1 font-weight-bold">Amenida offers assisted living for higher-functioning senior residents, focusing on active lifestyle programs.</v-card-text>
                    <div class="mx-10 text-body-1">
                        <ul>
                            <li>Assisted in leading and setting up activities such as morning walks, chair yoga, current events discussions, and one-on-one conversations with residents.</li>
                            <li>Maintained resident comfort through proactive, respectful interaction and individualized engagement.</li>
                            <li>Completed administrative tasks, including filing resident profiles alphabetically for accurate record-keeping.</li>
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
                            <v-list-item :href="vrralink" target="_blank" class="mt-n15">
                                <v-icon icon="mdi-open-in-new" class="text-h4 font-weight-bold" :to=vrralink></v-icon>
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
                                October 2023 - May 2024
                            </v-col>
                        </v-row>
                    </v-card-text>
                    <v-card-text class="text-body-1 font-weight-bold"> Supports abandoned and surrendered rabbits by promoting adoption and proper care.</v-card-text>
                    <div class="mx-10 text-body-1">
                        <ul>
                            <li>Spent quality time with rabbits to help them feel comfortable with human interaction, building trust and positive socialization.</li>
                            <li>Maintained clean and welcoming pens each morning to ensure the animals’ comfort and well-being.</li>
                            <li>Volunteered on a self-directed schedule, demonstrating reliability, initiative, and dependability.</li>
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
                                Volunteer
                            </v-col>
                            <v-col class="text-right">
                                April 2021 - October 2023
                            </v-col>
                        </v-row>
                    </v-card-text>
                    <v-card-text class="text-body-1 font-weight-bold">UBC Rec coordinates recreational programs and events to promote student engagement and well-being on campus.</v-card-text>
                    <div class="mx-10 text-body-1">
                        <ul>
                            <li>Helped with various tasks at events such as the UBC Triathlon and Homecoming, ensuring smooth operations and participant safety.</li>
                            <li>Raised morale and engaged attendees with positivity and encouragement.</li>
                            <li>Assisted with setup, coordination, and on-site communication to enhance the overall event experience.</li>
                        </ul>
                    </div>
                    <v-card-text value="spacer"></v-card-text>
                </v-card>
            </v-window-item>
            <v-window-item name="cityofsurrey">
                <v-card class="mx-10 my-5">
                    <v-banner bg-color="pink-lighten-4" sticky>
                        <template v-slot:actions>
                            <v-list-item :href="cityofsurreylink" target="_blank" class="mt-n15">
                                <v-icon icon="mdi-open-in-new" class="text-h4 font-weight-bold" :to=cityofsurreylink></v-icon>
                            </v-list-item>
                        </template>
                        <v-banner-text class="text-h6 font-weight-bold"> City of Surrey Recreation
                            <v-banner-text class="text-body-1"> Surrey, BC </v-banner-text>
                        </v-banner-text>
                    </v-banner>
                    <v-card-text class="text-h6">
                        <v-row>
                            <v-col class="text-decoration-underline">
                                Special and City-Wide Events
                            </v-col>
                            <v-col class="text-right">
                                May 2016 - January 2020
                            </v-col>
                        </v-row>
                    </v-card-text>
                    <v-card-text class="font-italic text-body-1 mt-n5 mb-n3"> Volunteer </v-card-text>
                    <v-card-text class="text-body-1 font-weight-bold">The City of Surrey hosts many community festivals and public events to engage residents and promote local culture.</v-card-text>
                    <div class="mx-10 text-body-1">
                        <ul>
                            <li>Assisted at various booths and activities, engaging with attendees to create a fun, welcoming environment.</li>
                            <li>Performed roles such as face-painting at the Children’s Festival and distributing free items to guests.</li>
                            <li>Energized the crowd with enthusiasm and encouragement, ensuring guests felt included and excited to participate.</li>
                        </ul>
                    </div>
                    <v-card-text value="spacer"></v-card-text>
                </v-card>
            </v-window-item>
            <v-window-item name="bcptrain">
                <v-card class="mx-10 my-5">
                    <v-banner bg-color="pink-lighten-4" sticky>
                        <template v-slot:actions>
                            <v-list-item :href="bcparktrainlink" target="_blank" class="mt-n15">
                                <v-icon icon="mdi-open-in-new" class="text-h4 font-weight-bold" :to=bcparktrainlink></v-icon>
                            </v-list-item>
                        </template>
                        <v-banner-text class="text-h6 font-weight-bold"> Bear Creek Park Train and Mini Golf
                            <v-banner-text class="text-body-1"> Surrey, BC </v-banner-text>
                        </v-banner-text>
                    </v-banner>
                    <v-card-text class="text-h6">
                        <v-row>
                            <v-col class="text-decoration-underline">
                                Seasonal Volunteer
                            </v-col>
                            <v-col class="text-right">
                                October 2016/2017
                            </v-col>
                        </v-row>
                    </v-card-text>
                    <v-card-text class="text-body-1 font-weight-bold"> Provides family-friendly recreational activities, including mini golf and train rides, in a seasonal community park setting.</v-card-text>
                    <div class="mx-10 text-body-1">
                        <ul>
                            <li>Assisted at the activities table, engaging children and families with fun and interactive games.</li>
                            <li>Helped load children onto the train safely and distributed free items during seasonal events.</li>
                            <li>Communicated with families to ensure a positive, safe, and enjoyable experience.</li>
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
                                <v-icon icon="mdi-open-in-new" class="text-h4 font-weight-bold"
                                    :to=timhortonslink></v-icon>
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
                                December 2016
                            </v-col>
                        </v-row>
                    </v-card-text>
                    <v-card-text class="font-italic text-body-1 mt-n5 mb-n3"> Volunteer Crew Member</v-card-text>
                    <v-card-text class="text-body-1 font-weight-bold">A coffee shop chain providing beverages, food, and customer service.</v-card-text>
                    <div class="mx-10 text-body-1">
                        <ul>
                            <li>Prepared beverages and handled cash transactions efficiently while maintaining a friendly demeanor.</li>
                            <li>Balanced multiple tasks in a fast-paced environment, demonstrating reliability and excellent communication skills.</li>
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