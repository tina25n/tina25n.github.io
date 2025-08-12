<script>
import upshiba from '@/assets/images/up_shiba.png'
import sheep from '@/assets/images/sheep.png'
import rottie from '@/assets/images/rottie.png'

export default {
  data: () => ({
    upshibasrc: upshiba,
    sheepsrc: sheep,
    rottiesrc: rottie,
    ubcCPSCCourses: [
      { code: 'CPSC 210', title: 'Software Construction' },
      { code: 'CPSC 221', title: 'Basic Algorithms and Data Structures' },
      { code: 'CPSC 304', title: 'Introduction to Relational Databases' },
      { code: 'CPSC 320', title: 'Intermediate Algorithm Design and Analysis' },
      { code: 'CPSC 322', title: 'Introduction to Artificial Intelligence' },
      { code: 'CPSC 330', title: 'Applied Machine Learning', },
      { code: 'CPSC 436R', title: 'Randomized Algorithms', }
    ],
    ubcEngCourses: [
      { code: 'BMEG 410', title: 'Biomedical Equipment, Physiology, and Anatomy' },
      { code: 'ELEC 311', title: 'Electromagnetic Fields and Waves' },
      { code: 'ELEC 315', title: 'Electronic Materials and Devices' },
      { code: 'ELEC 331', title: 'Computer Communications' },
      { code: 'ELEC 341', title: 'Systems and Control' },
      { code: 'ELEC 422', title: 'Biosignals and Systems' },
      { code: 'ELEC 471', title: 'Medical Imaging' }

    ],
    hkuCourses: [
      { hkucode: 'BMED 4500', title: 'Biomedical Instrumentation and Systems', ubccode: 'ELEC 371' },
      { hkucode: 'BMED 4601', title: 'Biomaterials Design and Applications', ubccode: 'MTRL 495' },
      { hkucode: 'BMED 4602', title: 'Molecular and Cellular Biomechanics', ubccode: 'BMEG 4TH' },
      { hkucode: 'COMP 3314', title: 'Machine Learning', ubccode: 'CPSC 340' },
      { hkucode: 'COMP 3366', title: 'Quantum Algorithms and Computer Architecture', ubccode: 'ELEC 571S' }
    ],
    kpuCourses: [
      { kpucode: 'FINA 1100', title: 'Introduction to Drawing', ubccode: 'FINA1ST', term: 'Fall 2016' },
      { kpucode: 'PHIL 1150', title: 'Introduction to Formal Logic', ubccode: 'PHIL120', term: 'Fall 2017' },
    ],
    pmExtra: [
      { name: 'REACH program', desc: 'Employment Readiness and Leadership Development Program', time: '2017-2018', },
      { name: 'Princess Margaret Vocal arts and Board Council', desc: "School's Choir and Acapella Group", time: '2015-2018' },
      { name: 'Princess Margaret Concert Band', desc: 'Flutist in School Band', time: '2016-2018' },
      { name: 'Princess Margaret A-team', desc: "Princess Margaret's local volunteer group for events", time: '2016-2018' },
      { name: 'Princess Margaret Student Council', desc: 'Student Organization for planning school events and fundraising', time: '2016-2018' },
      { name: 'Code Blue', desc: 'Physical Activity and Training Program Led by RCMP Officers to Build Strength, Confidence and Self-Discipline ', time: '2017-2018' },
      { name: 'Yo-Bro/Yo-Girl', desc: 'Self-Defense and Mentorship Program', time: '2017-2018' },
      { name: 'Science Co-op', desc: 'Integrated Volunteer Work at 2 Senior Homes ', time: '2017' },
      { name: 'Humanities Co-op', desc: 'Integrated Volunteer Work at 2 Establishments', time: '2016' },


    ],
    pmAwards: [
      { name: 'Princess Margaret Valedictorian', time: '2018' },
      { name: 'Top Academic Student', time: '2018' },
      { name: 'Schulich Leader Nominee', time: '2018' },
      { name: 'BC Excellence Scholarship', time: '2018' },
      { name: 'Vietnamese Cultural Bursary', time: '2018' },
      { name: 'District Authority Scholarship in International Languages', time: '2018' },
      { name: 'Honour Roll (4.0 GPA)', time: '2014-2018' },

    ],
    cpsclink: 'https://vancouver.calendar.ubc.ca/course-descriptions/subject/cpscv',
    englink: 'https://ece.ubc.ca/undergraduates/programs/biomedical-engineering-option/',
    cielink: 'https://experience.apsc.ubc.ca/cie/student-experience/student-stories',
    duallink: 'https://www.kpu.ca/dual-credit-and-concurrent-studies',
    lclink: 'https://www.collegelacite.ca/explore',
    udemlink: 'https://englishfrench.ca/explore/'

  }),
}
</script>

<template>

  <v-container fill-height fluid>
    <v-card flat>
      <v-card-text class="text-center text-h5 font-weight-bold">Education Timeline</v-card-text>
    </v-card>
    <v-timeline align="start" line-color="pink-lighten-4">
      <v-timeline-item name="UBC" dot-color="pink-lighten-2" fill-dot size="large" icon="mdi-school">
        <v-banner bg-color="pink-lighten-2" sticky max-height="100" min-height="100" rounded>
          <template v-slot:actions>
            <v-text class="text-body-1 mt-n10">May 2024</v-text></template>
          <v-banner-text class="text-h6 mt-n2"> University of British Columbia
            <v-banner-text class="text-body-2"> Vancouver, BC </v-banner-text>
          </v-banner-text>
        </v-banner>
        <v-card max-height="300" class="overflow-y-auto">
          <v-card-text class="bg-white text-body-1 text--primary">
            <b> Degree: </b> Bachelor of Applied Science <i>(BAsc)</i> <br>
            <b> Major: </b> Electrical Engineering, Biomedical Option <br>
            <b> Minor: </b> Computer Science <br>
            <b> Awards: </b> Centennial Scholars Entrance Award<br>
            <b> Highlighted Coursework: </b>
            <v-row>
              <v-col>
                <v-list-item :href="cpsclink" target="_blank">
                  <v-list-item-title :to="cpsclink" class="text-center">Computer Science
                    <v-icon icon="mdi-open-in-new"></v-icon>
                  </v-list-item-title>
                </v-list-item>
                <v-table class="text-body-2 mt-n1" density="compact">
                  <thead>
                    <tr>
                      <th class="text-left">
                        Code
                      </th>
                      <th class="text-left">
                        Title
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="item in ubcCPSCCourses">
                      <td :to="item.link">{{ item.code }}</td>
                      <td :to="item.link">{{ item.title }}</td>
                    </tr>
                  </tbody>
                </v-table>
              </v-col>
              <v-col>
                <v-list-item :href="englink" target="_blank">
                  <v-list-item-title :to="englink" class="text-center">Engineering
                    <v-icon icon="mdi-open-in-new"></v-icon>
                  </v-list-item-title>
                </v-list-item>
                <v-table class="text-body-2 mt-n1" density="compact">
                  <thead>
                    <tr>
                      <th class="text-left">
                        Course Code
                      </th>
                      <th class="text-left">
                        Title
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="item in ubcEngCourses">
                      <td>{{ item.code }}</td>
                      <td>{{ item.title }}</td>
                    </tr>
                  </tbody>
                </v-table>
              </v-col>
            </v-row>
          </v-card-text>
        </v-card>
        <template v-slot:opposite>
            <div class="mt-16 pt-16">
            <v-img class="mt-5 pt-16 mb-n16" :src="sheepsrc" width="200" ></v-img>
            </div>
        </template>
      </v-timeline-item>
      <v-timeline-item name="HKU" dot-color="pink-lighten-2" fill-dot size="large" icon="mdi-airplane-takeoff">
        <v-banner bg-color="pink-lighten-2" sticky max-height="100" rounded>
          <template v-slot:actions>
            <v-text class="text-body-1 mt-n10">Sept. 2022 - Jan. 2023</v-text></template>
          <v-banner-text class="text-h6 mt-n2"> University of Hong Kong
            <v-banner-text class="text-body-2"> Pok Fu Lam, HKSAR </v-banner-text>
          </v-banner-text>
        </v-banner>
        <v-card max-height="200" class="overflow-y-auto">
          <v-card-text class="bg-white text-body-1 text--primary">
            <v-list-item :href="cielink" target="_blank">
              <v-list-item-title :to="cielink" class="text-center">
                Coordinated International Experience (CIE) Exchange
                <v-icon icon="mdi-open-in-new"></v-icon>
              </v-list-item-title>
            </v-list-item>
            <b> Major: </b> Biomedical Engineering <br>
            <b> Awards: </b> <br>
            Chan Tat Chee Memorial Education Abroad Scholarship <br>
            Coordinated International Experience Award <br>
            <b class="mt-2">Coursework: </b>
            <v-table class="text-body-2" density="compact">
              <thead>
                <tr>
                  <th class="text-left">
                    HKU Course Code
                  </th>
                  <th class="text-left">
                    Title
                  </th>
                  <th class="text-left">
                    UBC Course Code
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="item in hkuCourses">
                  <td>{{ item.hkucode }}</td>
                  <td>{{ item.title }}</td>
                  <td>{{ item.ubccode }}</td>
                </tr>
              </tbody>
            </v-table>
          </v-card-text>
        </v-card>
        <template v-slot:opposite>
            <div class="mt-16 pt-16 ">
            <v-img class="ml-auto mt-6 mb-n16" :src="rottiesrc" width="200" ></v-img>
            </div>
        </template>
      </v-timeline-item>
      <v-timeline-item name="lacite" dot-color="pink-lighten-2" fill-dot size="large" icon="mdi-translate-variant">
        <v-banner bg-color="pink-lighten-2" sticky max-height="100" rounded>
          <template v-slot:actions>
            <v-text class="text-body-1 mt-n10">Summer 2023</v-text></template>
          <v-banner-text class="text-h6 mt-n2"> Coll&egravege La Cit&eacute
            <v-banner-text class="text-body-2"> Ottawa, ON </v-banner-text>
          </v-banner-text>
        </v-banner>
        <v-card max-height="150" class="overflow-y-auto">
          <v-card-text class="bg-white text-body-1 text--primary">
            <v-list-item :href="lclink" target="_blank">
              <v-list-item-title :to="lclink" class="text-center">
                Taken as part of the Explore Program
                <v-icon icon="mdi-open-in-new"></v-icon>
              </v-list-item-title>
            </v-list-item>
            <b>French Class Level:</b> Intermediate
          </v-card-text>
        </v-card>
      </v-timeline-item>
      <v-timeline-item name="udem" dot-color="pink-lighten-2" fill-dot size="large" icon="mdi-translate-variant">
        <v-banner bg-color="pink-lighten-2" sticky max-height="100" rounded>
          <template v-slot:actions>
            <v-text class="text-body-1 mt-n10">Summer 2018</v-text></template>
          <v-banner-text class="text-h6 mt-n2"> Universit&eacute de Montr&eacuteal
            <v-banner-text class="text-body-2"> Montr&eacuteal, QC </v-banner-text>
          </v-banner-text>
        </v-banner>
        <v-card max-height="150" class="overflow-y-auto">
          <v-card-text class="bg-white text-body-1 text--primary">
            <v-list-item :href="udemlink" target="_blank">
              <v-list-item-title :to="udemlink" class="text-center">
                Taken as part of the Explore Program
                <v-icon icon="mdi-open-in-new"></v-icon>
              </v-list-item-title>
            </v-list-item>
            Please note that the program at the Universit&eacute de Montr&eacuteal has since been suspended. <br>
            <b>French Class Level:</b> 3 (Intermediate)
          </v-card-text>
        </v-card>
      </v-timeline-item>
      <v-timeline-item name="kpu" dot-color="pink-lighten-2" fill-dot size="large" icon="mdi-chair-school">
        <v-banner bg-color="pink-lighten-2" sticky max-height="200">
          <template v-slot:actions>
            <v-text class="text-body-1 mt-n10">Fall 2016 & Fall 2017</v-text></template>
          <v-banner-text class="text-h6 mt-n2"> Kwantlen Polytechnic University
            <v-banner-text class="text-body-2"> Surrey, BC </v-banner-text>
          </v-banner-text>
        </v-banner>
        <v-card max-height="200" class="overflow-y-auto">
          <v-card-text class="bg-white text-body-1 text--primary">
            <v-list-item :href="duallink" target="_blank">
              <v-list-item-title :to="duallink" class="text-center">
                Taken as a Dual Credit Student
                <v-icon icon="mdi-open-in-new"></v-icon>
              </v-list-item-title>
            </v-list-item>
            <div> As a dual credit student, the courses taken at Kwantlen Polytechnic University
              were completed during high school in my 10th and 11th year. </div><br>
            <b class="mt-2">Coursework: </b>
            <v-table class="text-body-2" density="compact">
              <thead>
                <tr>
                  <th class="text-left">
                    KPU Course Code
                  </th>
                  <th class="text-left">
                    Title
                  </th>
                  <th class="text-left">
                    UBC Course Code
                  </th>
                  <th class="text-left">
                    Term Taken
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="item in kpuCourses">
                  <td>{{ item.kpucode }}</td>
                  <td>{{ item.title }}</td>
                  <td>{{ item.ubccode }}</td>
                  <td>{{ item.term }}</td>
                </tr>
              </tbody>
            </v-table>
          </v-card-text>
        </v-card>
      </v-timeline-item>
      <v-timeline-item name="pmss" dot-color="pink-lighten-2" fill-dot size="large" icon="mdi-school">
        <v-banner bg-color="pink-lighten-2" sticky max-height="100">
          <template v-slot:actions>
            <v-text class="text-body-1 mt-n10">June 2018</v-text></template>
          <v-banner-text class="text-h6 mt-n2"> Princess Margaret Seconday School
            <v-banner-text class="text-body-2"> Surrey, BC </v-banner-text>
          </v-banner-text>
        </v-banner>
        <v-card max-height="200" class="overflow-y-auto">
          <v-card-text class="bg-white text-body-1 text--primary">
            <b>Awards and Accomplishments:</b> <br>
            <v-table class="text-body-2" density="compact">
              <thead>
              </thead>
              <tbody>
                <tr v-for="item in pmAwards">
                  <td>{{ item.name }}</td>
                  <td>{{ item.time }}</td>
                </tr>
              </tbody>
            </v-table>
            <b>Extracurricular Activities:</b> <br>
            <v-table class="text-body-2" density="compact">
              <thead>
                <tr>
                  <th class="text-left">
                    Program Name
                  </th>
                  <th class="text-left">
                    Description
                  </th>
                  <th class="text-left">
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="item in pmExtra">
                  <td>{{ item.name }}</td>
                  <td>{{ item.desc }}</td>
                  <td>{{ item.time }}</td>
                </tr>
              </tbody>
            </v-table>
          </v-card-text>
        </v-card>
               <template v-slot:opposite fill-width>
            <v-sheet class="mt-10 ml-auto" >
            <v-img class="mt-5 mb-n16" :src="upshibasrc" width="250" ></v-img>
            </v-sheet>
        </template>
      </v-timeline-item>
    </v-timeline>
  </v-container>
</template>