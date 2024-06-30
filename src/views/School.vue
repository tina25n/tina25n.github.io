<script>
export default {
    data: () => ({
      ubcCPSCCourses: [
          { code: 'CPSC 210', title: 'Software Construction'},
          { code: 'CPSC 221', title: 'Basic Algorithms and Data Structures'},
          { code: 'CPSC 304', title: 'Introduction to Relational Databases'},
          { code: 'CPSC 320', title: 'Intermediate Algorithm Design and Analysis'},
          { code: 'CPSC 322', title: 'Introduction to Artificial Intelligence'},
          { code: 'CPSC 330', title: 'Applied Machine Learning',},
          { code: 'CPSC 436R', title: 'Randomized Algorithms',}
      ],
      ubcEngCourses: [
          { code: 'BMEG 410', title: 'Biomedical Equipment, Physiology, and Anatomy'},
          { code: 'ELEC 311', title: 'Electromagnetic Fields and Waves'},
          { code: 'ELEC 315', title: 'Electronic Materials and Devices'},
          { code: 'ELEC 331', title: 'Computer Communications'},
          { code: 'ELEC 341', title: 'Systems and Control'},
          { code: 'ELEC 422', title: 'Biosignals and Systems'},
          { code: 'ELEC 471', title: 'Medical Imaging'}
          
      ],
      hkuCourses: [
          {hkucode:'BMED 4500', title: 'Biomedical Instrumentation and Systems', ubccode: 'ELEC 371'},
          {hkucode:'BMED 4601', title: 'Biomaterials Design and Applications', ubccode: 'MTRL 495'},
          {hkucode:'BMED 4602', title: 'Molecular and Cellular Biomechanics', ubccode: 'BMEG 4TH'},
          {hkucode:'COMP 3314', title: 'Machine Learning', ubccode: 'CPSC 340'},
          {hkucode:'COMP 3366', title: 'Quantum Algorithms and Computer Architecture', ubccode: 'ELEC 571S'}
      ],
      cpsclink: 'https://vancouver.calendar.ubc.ca/course-descriptions/subject/cpscv',
      englink: 'https://ece.ubc.ca/undergraduates/programs/biomedical-engineering-option/',
      cielink: 'https://experience.apsc.ubc.ca/cie/student-experience/student-stories',
      duallink: 'https://www.kpu.ca/dual-credit-and-concurrent-studies',
      explorelink: 'https://englishfrench.ca/explore/',

    }),
  }
</script>

<template>

  <v-container fill-height fluid>
    <v-card flat>
    <v-card-text class="text-center text-h6 font-weight-black">Education Timeline</v-card-text>
    </v-card>
  <v-timeline align="start" line-color="pink-lighten-4">
    <v-timeline-item 
      name = "UBC"
      dot-color="pink-lighten-2"
      fill-dot
      size="large"
      icon = "mdi-school"
    >
    <v-banner bg-color = "pink-lighten-2" sticky max-height="100" rounded>
          <template v-slot:actions>
            <v-text class="text-body-1 mt-n10">May 2024</v-text></template>
          <v-banner-text class ="text-h6 mt-n2" > University of British Columbia 
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
          <v-list-item  :href="cpsclink" target="_blank">
            <v-list-item-title :to="cpsclink" class="text-center">Computer Science 
              <v-icon icon="mdi-open-in-new"></v-icon> 
            </v-list-item-title>
          </v-list-item>
        <v-table class = "text-body-2 mt-n1" density="compact">
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
        <tr
        v-for="item in ubcCPSCCourses"
        :key="item.code"
        >
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
        <v-table class = "text-body-2 mt-n1" density="compact">  
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
        <tr
        v-for="item in ubcEngCourses"
        :key="item.code"
        >
        <td>{{ item.code }}</td>
        <td>{{ item.title }}</td>
        </tr>
        </tbody>
      </v-table>
      </v-col>
      </v-row>

        </v-card-text>
      </v-card>
    </v-timeline-item>

    <v-timeline-item
      name = "HKU"
      dot-color="pink-lighten-2"
      fill-dot
      size="large"
      icon = "mdi-airplane-takeoff"
    >
    <v-banner bg-color = "pink-lighten-2" sticky max-height="100" rounded>
          <template v-slot:actions>
            <v-text class="text-body-1 mt-n10">Sept. 2022 - Jan. 2023</v-text></template>
          <v-banner-text class ="text-h6 mt-n2" > University of Hong Kong 
            <v-banner-text class="text-body-2"> Pok Fu Lam, HKSAR </v-banner-text>
          </v-banner-text>
    </v-banner>
    <v-card max-height="200" class="overflow-y-auto">
        
        <v-card-text class="bg-white text-body-1 text--primary">
          <v-list-item  :href="cielink" target="_blank">
            <v-list-item-title :to="cielink" class="text-center">
              Coordinated International Experience (CIE) Exchange
              <v-icon icon="mdi-open-in-new"></v-icon> 
            </v-list-item-title>
          </v-list-item>
          
          <b> Major: </b> Biomedical Engineering <br> 
          <b> Awards: </b> <br> 
          Chan Tat Chee Memorial Education Abroad Scholarship <br>
          Coordinated International Experience Award <br>
          <b class ="mt-2">Coursework: </b>  
        <v-table class = "text-body-2" density="compact">  
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
        <tr
        v-for="item in hkuCourses"
        :key="item.code"
        >
        <td>{{ item.hkucode }}</td>
        <td>{{ item.title }}</td>
        <td>{{ item.ubccode }}</td>
        </tr>
        </tbody>
      </v-table>
        </v-card-text>
      </v-card>
      
    </v-timeline-item>

    <v-timeline-item
      name = "lacite"
      dot-color="pink-lighten-2"
      fill-dot
      size="large"
      icon = "mdi-translate-variant"
    >
    <v-banner bg-color = "pink-lighten-2" sticky max-height="100" rounded>
          <template v-slot:actions>
            <v-text class="text-body-1 mt-n10">Summer 2023</v-text></template>
          <v-banner-text class ="text-h6 mt-n2" > College La Cite
            <v-banner-text class="text-body-2"> Ottawa, ON </v-banner-text>
          </v-banner-text>
        </v-banner>
    <v-card max-height="150"  class="overflow-y-auto">
        <v-card-text class="bg-white text-body-1 text--primary">
          
        </v-card-text>
      </v-card>
    </v-timeline-item>

    <v-timeline-item
      name = "udem"
      dot-color="pink-lighten-2"
      fill-dot
      size="large"
      icon = "mdi-translate-variant"
    >
    <v-banner bg-color = "pink-lighten-2" sticky max-height="100" rounded>
          <template v-slot:actions>
            <v-text class="text-body-1 mt-n10">Summer 2018</v-text></template>
          <v-banner-text class ="text-h6 mt-n2" > Universite de Montreal
            <v-banner-text class="text-body-2"> Montreal, QC </v-banner-text>
          </v-banner-text>
        </v-banner>

    <v-card max-height="150" class="overflow-y-auto">
        <v-card-text class="bg-white text-body-1 text--primary">
    
        </v-card-text>
      </v-card>
    </v-timeline-item>

    <v-timeline-item
      name = "kpu"
      dot-color="pink-lighten-2"
      fill-dot
      size="large"
      icon = "mdi-chair-school"
    >
    <v-banner bg-color = "pink-lighten-2" sticky max-height="200">
          <template v-slot:actions>
            <v-text class="text-body-1 mt-n10">Fall 2016 & Fall 2017</v-text></template>
          <v-banner-text class ="text-h6 mt-n2" > Kwantlen Polytechnic University
            <v-banner-text class="text-body-2"> Surrey, BC </v-banner-text>
          </v-banner-text>
        </v-banner>
    <v-card max-height="200" class="overflow-y-auto">
        <v-card-text class="bg-white text-body-1 text--primary">
          FINA 1100: Introduction to Drawing -> FINA1ST
          PHIL 1150: Introduction to Formal Logic  -> PHIL120
        </v-card-text>
      </v-card>
    </v-timeline-item>

    <v-timeline-item
      name = "pmss"
      dot-color="pink-lighten-2"
      fill-dot
      size="large"
      icon = "mdi-school"
    >
    <v-banner bg-color = "pink-lighten-2" sticky max-height="100">
          <template v-slot:actions>
            <v-text class="text-body-1 mt-n10">June 2018</v-text></template>
          <v-banner-text class ="text-h6 mt-n2" > Princess Margaret Seconday School
            <v-banner-text class="text-body-2"> Surrey, BC </v-banner-text>
          </v-banner-text>
        </v-banner>
    <v-card max-height="200"class="overflow-y-auto">
        <v-card-text class="bg-white text-body-1 text--primary">
          <b>Extracurricular Activities</b>  
        </v-card-text>
      </v-card>
      
    </v-timeline-item>
  </v-timeline>
</v-container>
</template>