<script>
export default {
    data: () => ({
        window: 0,
        engkidzlink: "https://engkidz.com/",
        santalink: "https://www.shopsemiahmoo.com/",
        teluslink: "https://www.telusdigital.com/solutions/data-and-ai-solutions",
        rnmlink: "https://richmondnightmarket.com/",
        ubcbooklink: "https://bookstore.ubc.ca/",
        famouslink: "https://www.famousfootwear.com/",
        blenzlink: "https://blenz.com/",

    }),
}

</script>


<template>
    <v-container>
        <v-window v-model="window" hide-delimiters show-arrows="hover">
            <v-window-item name="EngKidz">
                <v-card class="mx-10 my-5">
                    <v-banner bg-color="pink-lighten-4" sticky>
                        <template v-slot:actions>
                            <v-list-item :href="engkidzlink" target="_blank" class="mt-n15">
                                <v-icon icon="mdi-open-in-new" class="text-h4 font-weight-bold"
                                    :to=engkidzlink></v-icon>
                            </v-list-item>
                        </template>
                        <v-banner-text class="text-h6 font-weight-bold"> EngKidz
                            <v-banner-text class="text-body-1"> Surrey, BC </v-banner-text>
                        </v-banner-text>
                    </v-banner>
                    <v-card-text class="text-h6">
                        <v-row>
                            <v-col class="text-decoration-underline">
                                Science Kit Assistant
                            </v-col>
                            <v-col class="text-right">
                                October 2024 - December 2024
                            </v-col>
                        </v-row>
                    </v-card-text>
                    <div class="mx-10 text-body-1">
                        <ul>
                            <li>Managed and organized a storage facility of STEM teaching materials, ensuring all items
                                were prepared and
                                ready for each class without missed deadlines.</li>
                            <li>Independently set work hours while meeting all program requirements, demonstrating
                                strong self-management
                                and reliability.</li>
                            <li>Supported the delivery of engaging STEM lessons by providing instructors with accurate,
                                well-prepared
                                resources.</li>
                        </ul>
                    </div>
                    <v-card-text value="spacer"></v-card-text>
                </v-card>
            </v-window-item>
            <v-window-item name="Santa">
                <v-card height="100%" class="mx-10 my-5">
                    <v-banner bg-color="pink-lighten-4" sticky>
                        <template v-slot:actions>
                            <v-list-item :href="santalink" target="_blank" class="mt-n15">
                                <v-icon icon="mdi-open-in-new" class="text-h4 font-weight-bold" :to=santalink></v-icon>
                            </v-list-item>
                        </template>
                        <v-banner-text class="text-h6 font-weight-bold"> Santa Set Photography
                            <v-banner-text class="text-body-1"> Surrey, BC </v-banner-text>
                        </v-banner-text>
                    </v-banner>
                    <v-card-text class="text-h6">
                        <v-row>
                            <v-col class="text-decoration-underline">
                                Semiahmoo and Scottsdale Shopping Center
                            </v-col>
                            <v-col class="text-right">
                                November 2024 - December 2024
                            </v-col>
                        </v-row>
                    </v-card-text>
                    <v-card-text class="font-italic text-body-1 mt-n5 mb-n3"> Photographer and Assistant </v-card-text>
                    <div class="mx-10 text-body-1">
                        <ul>
                            <li>Quickly learned and operated professional camera and photo-management software to
                                capture
                                high-quality portraits of visiting families.</li>
                            <li>Assisted with payments and customer inquiries, ensuring smooth transactions and a
                                positive guest
                                experience.</li>
                            <li>Comforted children who were nervous about meeting Santa, creating a friendly and
                                welcoming
                                environment.</li>
                        </ul>
                    </div>
                    <v-card-text value="spacer"></v-card-text>
                </v-card>
            </v-window-item>
            <v-window-item name="Telus">
                <v-card height="100%" class="mx-10 my-5">
                    <v-banner bg-color="pink-lighten-4" sticky>
                        <template v-slot:actions>
                            <v-list-item :href="teluslink" target="_blank" class="mt-n15">
                                <v-icon icon="mdi-open-in-new" class="text-h4 font-weight-bold" :to=teluslink></v-icon>
                            </v-list-item>
                        </template>
                        <v-banner-text class="text-h6 font-weight-bold"> Telus Digital (Formerly known as Telus
                            International)
                            <v-banner-text class="text-body-1"> Surrey, BC </v-banner-text>
                        </v-banner-text>
                    </v-banner>
                    <v-card-text class="text-h6">
                        <v-row>
                            <v-col class="text-decoration-underline">
                                Remote in Canada
                            </v-col>
                            <v-col class="text-right">
                                September 2024 - November 2024
                            </v-col>
                        </v-row>
                    </v-card-text>
                    <v-card-text class="font-italic text-body-1 mt-n5 mb-n3"> Data Analyst </v-card-text>
                    <div class="mx-10 text-body-1">
                        <ul>
                            <li>Independently reviewed large volumes of AI-generated responses from home, identifying
                                inaccuracies
                                and inconsistencies without direct supervision.</li>
                            <li>Documented findings and submitted clear, actionable feedback to technical teams,
                                contributing to the
                                refinement of AI processing pipelines.</li>
                            <li>Followed detailed evaluation guidelines to categorize responses correctly, maintaining
                                strict
                                adherence to quality assurance standards.</li>
                        </ul>
                    </div>
                    <v-card-text value="spacer"></v-card-text>
                </v-card>
            </v-window-item>
            <v-window-item name="RNM" max-height="200">
                <v-card class="mx-10 my-5">
                    <v-banner bg-color="pink-lighten-4" sticky>
                        <template v-slot:actions>
                            <v-list-item :href="rnmlink" target="_blank" class="mt-n15">
                                <v-icon icon="mdi-open-in-new" class="text-h4 font-weight-bold" :to=rnmlink></v-icon>
                            </v-list-item>
                        </template>
                        <v-banner-text class="text-h6 font-weight-bold"> Richmond Night Market
                            <v-banner-text class="text-body-1"> Richmond, BC </v-banner-text>
                        </v-banner-text>
                    </v-banner>
                    <v-card-text class="text-h6">
                        <v-row>
                            <v-col class="text-decoration-underline">
                                Lemonade and Flying Cup Noodle Stand
                            </v-col>
                            <v-col class="text-right">
                                April 2024 - October 2024
                            </v-col>
                        </v-row>
                    </v-card-text>
                    <v-card-text class="font-italic text-body-1 mt-n5 mb-n3"> Cashier </v-card-text>
                    <div class="mx-10 text-body-1">
                        <ul>
                            <li>Accurately processed high-volume cash and card transactions while preparing fresh
                                lemonade and
                                fulfilling orders efficiently.</li>
                            <li>Collaborated closely with team members to manage long lines and maintain a smooth
                                workflow during
                                peak hours.</li>
                            <li>Handled product inquiries and special adjustments with professionalism and accuracy.
                            </li>
                            <li>Maintained a clean, organized work area to support fast-paced service.</li>
                        </ul>
                    </div>
                    <v-card-text value="spacer"></v-card-text>
                </v-card>
            </v-window-item>
            <v-window-item name="UBC Bookstore" max-height="200">
                <v-card class="mx-10 my-5">
                    <v-banner bg-color="pink-lighten-4" sticky>
                        <template v-slot:actions>
                            <v-list-item :href="ubcbooklink" target="_blank" class="mt-n15">
                                <v-icon icon="mdi-open-in-new" class="text-h4 font-weight-bold"
                                    :to=ubcbooklink></v-icon>
                            </v-list-item>
                        </template>
                        <v-banner-text class="text-h6 font-weight-bold"> University of British Columbia Bookstore
                            <v-banner-text class="text-body-1"> Vancouver, BC </v-banner-text>
                        </v-banner-text>
                    </v-banner>
                    <v-card-text class="text-h6">
                        <v-row>
                            <v-col class="text-decoration-underline">
                                Rush Cashier
                            </v-col>
                            <v-col class="text-right">
                                August 2021 - October 2021
                            </v-col>
                        </v-row>
                    </v-card-text>
                    <div class="mx-10 text-body-1">
                        <ul>
                            <li>Processed transactions quickly and accurately during high-traffic rush periods.</li>
                            <li>Provided friendly and efficient service to maintain a positive customer experience under
                                pressure.
                            </li>
                            <li>Supported team operations by restocking and organizing sales areas between transactions.
                            </li>
                            <li>Assisted customers in the clothing section by locating sizes, providing product
                                recommendations, and
                                maintaining neat, organized displays.</li>
                        </ul>
                    </div>
                    <v-card-text value="spacer"></v-card-text>
                </v-card>
            </v-window-item>
            <v-window-item name="Famous" max-height="200">
                <v-card class="mx-10 my-5">
                    <v-banner bg-color="pink-lighten-4" sticky>
                        <template v-slot:actions>
                            <v-list-item :href="famouslink" target="_blank" class="mt-n15">
                                <v-icon icon="mdi-open-in-new" class="text-h4 font-weight-bold" :to=famouslink></v-icon>
                            </v-list-item>
                        </template>
                        <v-banner-text class="text-h6 font-weight-bold"> Famous Footwear
                            <v-banner-text class="text-body-1"> Surrey, BC </v-banner-text>
                        </v-banner-text>
                    </v-banner>
                    <v-card-text class="text-h6">
                        <v-row>
                            <v-col class="text-decoration-underline">
                                Guildford Mall Location
                            </v-col>
                            <v-col class="text-right">
                                June 2019 - August 2019
                            </v-col>
                        </v-row>
                    </v-card-text>
                    <v-card-text class="font-italic text-body-1 mt-n5 mb-n3"> Seasonal Sales Associate </v-card-text>
                    <div class="mx-10 text-body-1">
                        <ul>
                            <li>Delivered exceptional customer service as part of the province’s top-performing branch.
                            </li>
                            <li>Organized and maintained stockrooms and sales displays to ensure a clean, inviting store
                                environment.</li>
                            <li>Assisted customers in finding products and provided style recommendations aligned with
                                store
                                branding.</li>
                        </ul>
                    </div>
                    <v-card-text value="spacer"></v-card-text>
                </v-card>
            </v-window-item>
            <v-window-item name="Blenz">
                <v-card class="mx-10 my-5">
                    <v-banner bg-color="pink-lighten-4" sticky>
                        <template v-slot:actions>
                            <v-list-item :href="blenzlink" target="_blank" class="mt-n15">
                                <v-icon icon="mdi-open-in-new" class="text-h4 font-weight-bold" :to=blenzlink></v-icon>
                            </v-list-item>
                        </template>
                        <v-banner-text class="text-h6 font-weight-bold"> Blenz Coffee
                            <v-banner-text class="text-body-1"> Surrey, BC </v-banner-text>
                        </v-banner-text>
                    </v-banner>
                    <v-card-text class="text-h6">
                        <v-row>
                            <v-col class="text-decoration-underline">
                                Surrey Central Mall Location
                            </v-col>
                            <v-col class="text-right">
                                August 2017 - June 2018
                            </v-col>
                        </v-row>
                    </v-card-text>
                    <v-card-text class="font-italic text-body-1 mt-n5 mb-n3"> Barista </v-card-text>
                    <div class="mx-10 text-body-1">
                        <ul>
                            <li>Prepared high-quality beverages from memory, meeting brand standards for taste,
                                consistency, and
                                presentation.</li>
                            <li>Maintained a clean and organized workspace, frequently restocking fridges and displays
                                to support
                                peak service hours.</li>
                            <li>Recognized for outstanding service through unsolicited customer praise sent directly to
                                management.
                            </li>
                        </ul>
                    </div>
                    <v-card-text value="spacer"></v-card-text>
                </v-card>
            </v-window-item>
        </v-window>
        <v-card-text class="text-body-1 font-italic text-center font-weight-bold">Tina enjoys roles where she can
            connect with people, solve problems,
            and provide service that reflects both professionalism and genuine care. With a background in many
            customer-focused roles, she often takes on temporary and seasonal positions to upkeep her skills.
        </v-card-text>
    </v-container>
</template>