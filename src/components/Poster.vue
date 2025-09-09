<script>
import middle from "@/assets/images/poster.png"
import Rtop from "@/assets/images/RTop.png"
import Rbottom from "@/assets/images/RBottom.png"
import Ltop from "@/assets/images/LTop.png"
import Lbottom from "@/assets/images/LBottom.png"

export default {
    data: () => ({
        middlesrc: middle,
        Rtopsrc: Rtop,
        Ltopsrc: Ltop,
        Rbottomsrc: Rbottom,
        Lbottomsrc: Lbottom
    }),
}
</script>

<template>
  <v-container >
    <v-row class="d-flex justify-center" no-gutters>
      <v-col class="d-flex flex-column" cols="auto">
        <v-img class="ma-auto" :src="Ltopsrc" width="210"></v-img>
        <v-img class="ma-auto" :src="Lbottomsrc" width="210"></v-img>
      </v-col>

      <v-col cols="auto">
        <v-img class="ma-auto" :src="middlesrc" width="400"></v-img>
      </v-col>

      <v-col class="d-flex flex-column" cols="auto">
        <v-img class="ma-auto" :src="Rtopsrc" width="210"></v-img>
        <v-img class="ma-auto" :src="Rbottomsrc" width="210"></v-img>
      </v-col>
    </v-row>
  </v-container>
</template>