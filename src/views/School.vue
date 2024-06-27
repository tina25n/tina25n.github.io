<script>
export default {
    data: () => ({
      ubcCPSCCourses: [
          { code: 'CPSC 210', title: 'Software Construction', link: ''},
          { code: 'CPSC 221', title: 'Basic Algorithms and Data Structures', link: ''},
          { code: 'CPSC 304', title: 'Introduction to Relational Databases', link: ''},
          { code: 'CPSC 320', title: 'Intermediate Algorithm Design and Analysis', link: ''},
          { code: 'CPSC 322', title: 'Introduction to Artificial Intelligence', link: ''},
          { code: 'CPSC 330', title: 'Applied Machine Learning', link: ''}
      ],
      ubcEngCourses: [
          { code: '', title: 'Education', link: ''},
          { code: '', title: 'Projects', link: ''},
          { code: '', title: 'Employment', link: ''},
          { code: '', title: 'Education', link: ''},
          { code: '', title: 'Projects', link: ''},
          { code: '', title: 'Employment', link: ''}
      ]
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
      <v-card max-height="300" class="overflow-y-auto">
        <v-banner bg-color = "pink-lighten-2" sticky max-height="100">
          <template v-slot:actions>
            <v-text class="text-body-1 mt-n10">May 2024</v-text></template>
          <v-banner-text class ="text-h6 mt-n2" > University of British Columbia 
            <v-banner-text class="text-body-2"> Vancouver, BC </v-banner-text>
          </v-banner-text>
        </v-banner>
        <v-card-text class="bg-white text-body-1 text--primary">
        <b> Degree: </b> Bachelor of Applied Science <i>(BAsc)</i> <br>
        <b> Major: </b> Electrical Engineering, Biomedical Option <br>
        <b> Minor: </b> Computer Science <br>
        <b> Related Courses: </b>  
        <v-row>
        <v-col>
          <v-card-text class ="text-center text-body-2 mt-n3"> Computer Science </v-card-text>
        <v-table class = "text-body-2 mt-n3" density="compact">
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
        <td>{{ item.code }}</td>
        <td>{{ item.title }}</td>
        </tr>
        </tbody>
      </v-table>
      </v-col>

      <v-col>
        <v-card-text class ="text-center text-body-2 mt-n3"> Engineering </v-card-text>
        <v-table class = "text-body-2 mt-n3" density="compact">  
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
    >
    <v-card max-height="200" class="overflow-y-auto">
        <v-banner bg-color = "pink-lighten-2" sticky max-height="100">
          <template v-slot:actions>
            <v-text class="text-body-1 mt-n10">Sept. 2022 - Jan. 2023</v-text></template>
          <v-banner-text class ="text-h6 mt-n2" > University of Hong Kong 
            <v-banner-text class="text-body-2"> Pok Fu Lam, HKSAR </v-banner-text>
          </v-banner-text>
        </v-banner>
        <v-card-text class="bg-white text--primary">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam earum, est illo quae fugit voluptatum fuga magni hic maiores ipsa, illum, tenetur accusamus cupiditate? Dolorem ad nisi eveniet officia voluptatibus.Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam earum, est illo quae fugit voluptatum fuga magni hic maiores ipsa, illum, tenetur accusamus cupiditate? Dolorem ad nisi eveniet officia voluptatibus.Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam earum, est illo quae fugit voluptatum fuga magni hic maiores ipsa, illum, tenetur accusamus cupiditate? Dolorem ad nisi eveniet officia voluptatibus.Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam earum, est illo quae fugit voluptatum fuga magni hic maiores ipsa, illum, tenetur accusamus cupiditate? Dolorem ad nisi eveniet officia voluptatibus.Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam earum, est illo quae fugit voluptatum fuga magni hic maiores ipsa, illum, tenetur accusamus cupiditate? Dolorem ad nisi eveniet officia voluptatibus.Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam earum, est illo quae fugit voluptatum fuga magni hic maiores ipsa, illum, tenetur accusamus cupiditate? Dolorem ad nisi eveniet officia voluptatibus.Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam earum, est illo quae fugit voluptatum fuga magni hic maiores ipsa, illum, tenetur accusamus cupiditate? Dolorem ad nisi eveniet officia voluptatibus.Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam earum, est illo quae fugit voluptatum fuga magni hic maiores ipsa, illum, tenetur accusamus cupiditate? Dolorem ad nisi eveniet officia voluptatibus.Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam earum, est illo quae fugit voluptatum fuga magni hic maiores ipsa, illum, tenetur accusamus cupiditate? Dolorem ad nisi eveniet officia voluptatibus.Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam earum, est illo quae fugit voluptatum fuga magni hic maiores ipsa, illum, tenetur accusamus cupiditate? Dolorem ad nisi eveniet officia voluptatibus.Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam earum, est illo quae fugit voluptatum fuga magni hic maiores ipsa, illum, tenetur accusamus cupiditate? Dolorem ad nisi eveniet officia voluptatibus.
        </v-card-text>
      </v-card>
      
    </v-timeline-item>

    <v-timeline-item
      name = "lacite"
      dot-color="pink-lighten-2"
      fill-dot
      size="large"
    >
    <v-card max-height="150"  class="overflow-y-auto">
        <v-banner bg-color = "pink-lighten-2" sticky max-height="100">
          <template v-slot:actions>
            <v-text class="text-body-1 mt-n10">Summer 2023</v-text></template>
          <v-banner-text class ="text-h6 mt-n2" > College La Cite
            <v-banner-text class="text-body-2"> Ottawa, ON </v-banner-text>
          </v-banner-text>
        </v-banner>
        <v-card-text class="bg-white text--primary">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam earum, est illo quae fugit voluptatum fuga magni hic maiores ipsa, illum, tenetur accusamus cupiditate? Dolorem ad nisi eveniet officia voluptatibus.Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam earum, est illo quae fugit voluptatum fuga magni hic maiores ipsa, illum, tenetur accusamus cupiditate? Dolorem ad nisi eveniet officia voluptatibus.Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam earum, est illo quae fugit voluptatum fuga magni hic maiores ipsa, illum, tenetur accusamus cupiditate? Dolorem ad nisi eveniet officia voluptatibus.Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam earum, est illo quae fugit voluptatum fuga magni hic maiores ipsa, illum, tenetur accusamus cupiditate? Dolorem ad nisi eveniet officia voluptatibus.Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam earum, est illo quae fugit voluptatum fuga magni hic maiores ipsa, illum, tenetur accusamus cupiditate? Dolorem ad nisi eveniet officia voluptatibus.Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam earum, est illo quae fugit voluptatum fuga magni hic maiores ipsa, illum, tenetur accusamus cupiditate? Dolorem ad nisi eveniet officia voluptatibus.Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam earum, est illo quae fugit voluptatum fuga magni hic maiores ipsa, illum, tenetur accusamus cupiditate? Dolorem ad nisi eveniet officia voluptatibus.Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam earum, est illo quae fugit voluptatum fuga magni hic maiores ipsa, illum, tenetur accusamus cupiditate? Dolorem ad nisi eveniet officia voluptatibus.Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam earum, est illo quae fugit voluptatum fuga magni hic maiores ipsa, illum, tenetur accusamus cupiditate? Dolorem ad nisi eveniet officia voluptatibus.Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam earum, est illo quae fugit voluptatum fuga magni hic maiores ipsa, illum, tenetur accusamus cupiditate? Dolorem ad nisi eveniet officia voluptatibus.Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam earum, est illo quae fugit voluptatum fuga magni hic maiores ipsa, illum, tenetur accusamus cupiditate? Dolorem ad nisi eveniet officia voluptatibus.
        </v-card-text>
      </v-card>
    </v-timeline-item>

    <v-timeline-item
      name = "udem"
      dot-color="pink-lighten-2"
      fill-dot
      size="large"
    >
    <v-card max-height="150" class="overflow-y-auto">
        <v-banner bg-color = "pink-lighten-2" sticky max-height="100">
          <template v-slot:actions>
            <v-text class="text-body-1 mt-n10">Summer 2018</v-text></template>
          <v-banner-text class ="text-h6 mt-n2" > Universite de Montreal
            <v-banner-text class="text-body-2"> Montreal, QC </v-banner-text>
          </v-banner-text>
        </v-banner>
        <v-card-text class="bg-white text--primary">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam earum, est illo quae fugit voluptatum fuga magni hic maiores ipsa, illum, tenetur accusamus cupiditate? Dolorem ad nisi eveniet officia voluptatibus.Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam earum, est illo quae fugit voluptatum fuga magni hic maiores ipsa, illum, tenetur accusamus cupiditate? Dolorem ad nisi eveniet officia voluptatibus.Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam earum, est illo quae fugit voluptatum fuga magni hic maiores ipsa, illum, tenetur accusamus cupiditate? Dolorem ad nisi eveniet officia voluptatibus.Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam earum, est illo quae fugit voluptatum fuga magni hic maiores ipsa, illum, tenetur accusamus cupiditate? Dolorem ad nisi eveniet officia voluptatibus.Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam earum, est illo quae fugit voluptatum fuga magni hic maiores ipsa, illum, tenetur accusamus cupiditate? Dolorem ad nisi eveniet officia voluptatibus.Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam earum, est illo quae fugit voluptatum fuga magni hic maiores ipsa, illum, tenetur accusamus cupiditate? Dolorem ad nisi eveniet officia voluptatibus.Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam earum, est illo quae fugit voluptatum fuga magni hic maiores ipsa, illum, tenetur accusamus cupiditate? Dolorem ad nisi eveniet officia voluptatibus.Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam earum, est illo quae fugit voluptatum fuga magni hic maiores ipsa, illum, tenetur accusamus cupiditate? Dolorem ad nisi eveniet officia voluptatibus.Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam earum, est illo quae fugit voluptatum fuga magni hic maiores ipsa, illum, tenetur accusamus cupiditate? Dolorem ad nisi eveniet officia voluptatibus.Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam earum, est illo quae fugit voluptatum fuga magni hic maiores ipsa, illum, tenetur accusamus cupiditate? Dolorem ad nisi eveniet officia voluptatibus.Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam earum, est illo quae fugit voluptatum fuga magni hic maiores ipsa, illum, tenetur accusamus cupiditate? Dolorem ad nisi eveniet officia voluptatibus.
        </v-card-text>
      </v-card>
    </v-timeline-item>

    <v-timeline-item
      name = "kpu"
      dot-color="pink-lighten-2"
      fill-dot
      size="large"
    >
    <v-card max-height="200" class="overflow-y-auto">
        <v-banner bg-color = "pink-lighten-2" sticky max-height="200">
          <template v-slot:actions>
            <v-text class="text-body-1 mt-n10">Fall 2016 & Fall 2017</v-text></template>
          <v-banner-text class ="text-h6 mt-n2" > Kwantlen Polytechnic University
            <v-banner-text class="text-body-2"> Surrey, BC </v-banner-text>
          </v-banner-text>
        </v-banner>
        <v-card-text class="bg-white text--primary">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam earum, est illo quae fugit voluptatum fuga magni hic maiores ipsa, illum, tenetur accusamus cupiditate? Dolorem ad nisi eveniet officia voluptatibus.Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam earum, est illo quae fugit voluptatum fuga magni hic maiores ipsa, illum, tenetur accusamus cupiditate? Dolorem ad nisi eveniet officia voluptatibus.Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam earum, est illo quae fugit voluptatum fuga magni hic maiores ipsa, illum, tenetur accusamus cupiditate? Dolorem ad nisi eveniet officia voluptatibus.Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam earum, est illo quae fugit voluptatum fuga magni hic maiores ipsa, illum, tenetur accusamus cupiditate? Dolorem ad nisi eveniet officia voluptatibus.Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam earum, est illo quae fugit voluptatum fuga magni hic maiores ipsa, illum, tenetur accusamus cupiditate? Dolorem ad nisi eveniet officia voluptatibus.Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam earum, est illo quae fugit voluptatum fuga magni hic maiores ipsa, illum, tenetur accusamus cupiditate? Dolorem ad nisi eveniet officia voluptatibus.Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam earum, est illo quae fugit voluptatum fuga magni hic maiores ipsa, illum, tenetur accusamus cupiditate? Dolorem ad nisi eveniet officia voluptatibus.Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam earum, est illo quae fugit voluptatum fuga magni hic maiores ipsa, illum, tenetur accusamus cupiditate? Dolorem ad nisi eveniet officia voluptatibus.Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam earum, est illo quae fugit voluptatum fuga magni hic maiores ipsa, illum, tenetur accusamus cupiditate? Dolorem ad nisi eveniet officia voluptatibus.Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam earum, est illo quae fugit voluptatum fuga magni hic maiores ipsa, illum, tenetur accusamus cupiditate? Dolorem ad nisi eveniet officia voluptatibus.Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam earum, est illo quae fugit voluptatum fuga magni hic maiores ipsa, illum, tenetur accusamus cupiditate? Dolorem ad nisi eveniet officia voluptatibus.
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
    <v-card max-height="200"class="overflow-y-auto">
        <v-banner bg-color = "pink-lighten-2" sticky max-height="100">
          <template v-slot:actions>
            <v-text class="text-body-1 mt-n10">June 2018</v-text></template>
          <v-banner-text class ="text-h6 mt-n2" > Princess Margaret Seconday School
            <v-banner-text class="text-body-2"> Surrey, BC </v-banner-text>
          </v-banner-text>
        </v-banner>
        <v-card-text class="bg-white text--primary">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam earum, est illo quae fugit voluptatum fuga magni hic maiores ipsa, illum, tenetur accusamus cupiditate? Dolorem ad nisi eveniet officia voluptatibus.Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam earum, est illo quae fugit voluptatum fuga magni hic maiores ipsa, illum, tenetur accusamus cupiditate? Dolorem ad nisi eveniet officia voluptatibus.Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam earum, est illo quae fugit voluptatum fuga magni hic maiores ipsa, illum, tenetur accusamus cupiditate? Dolorem ad nisi eveniet officia voluptatibus.Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam earum, est illo quae fugit voluptatum fuga magni hic maiores ipsa, illum, tenetur accusamus cupiditate? Dolorem ad nisi eveniet officia voluptatibus.Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam earum, est illo quae fugit voluptatum fuga magni hic maiores ipsa, illum, tenetur accusamus cupiditate? Dolorem ad nisi eveniet officia voluptatibus.Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam earum, est illo quae fugit voluptatum fuga magni hic maiores ipsa, illum, tenetur accusamus cupiditate? Dolorem ad nisi eveniet officia voluptatibus.Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam earum, est illo quae fugit voluptatum fuga magni hic maiores ipsa, illum, tenetur accusamus cupiditate? Dolorem ad nisi eveniet officia voluptatibus.Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam earum, est illo quae fugit voluptatum fuga magni hic maiores ipsa, illum, tenetur accusamus cupiditate? Dolorem ad nisi eveniet officia voluptatibus.Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam earum, est illo quae fugit voluptatum fuga magni hic maiores ipsa, illum, tenetur accusamus cupiditate? Dolorem ad nisi eveniet officia voluptatibus.Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam earum, est illo quae fugit voluptatum fuga magni hic maiores ipsa, illum, tenetur accusamus cupiditate? Dolorem ad nisi eveniet officia voluptatibus.Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam earum, est illo quae fugit voluptatum fuga magni hic maiores ipsa, illum, tenetur accusamus cupiditate? Dolorem ad nisi eveniet officia voluptatibus.
        </v-card-text>
      </v-card>
      
    </v-timeline-item>
  </v-timeline>
</v-container>
</template>