<template>
  <div class="totally-real-website">
    <!-- Modal 1 -->
    <ModalItem v-if="numberOfModal === 0" isOpen="isModalOpened" @next="nextModal" @modal-close="closeModal" name="first-modal">
      <template #header>
        <h1 class="header">Ny og forbedret selvbetjening</h1>
        <p class="sub-header">Vi har udviklet og opdateret din selvbetjening. Vi arbejder fortsat på de små detaljer, men det vigtigste er på plads.</p>
      </template>
      <template #content>
        <div class="modal-wrapper">
          <div class="column">
            <img src="../assets/imgs/brugeroplevelse1.svg" />
          </div>
          <div class="column">
            <img src="../assets/imgs/brugeroplevelse2.svg" />
          </div>
          <div class="column">
            <img src="../assets/imgs/brugeroplevelse3.svg" />
          </div>
        </div>
        <div class="modal-wrapper">
          <div class="column text-wrapper">
            <p class="content-title">Bedre brugeroplevelse</p>
            <p class="content-paragraph">Vi har ryddet op og flyttet rundt, så det bliver nemmere at finde funktioner, knapper og overblik.</p>
          </div>
          <div class="column text-wrapper">
            <p class="content-title">Bedre brugeroplevelse</p>
            <p class="content-paragraph">Vi har ryddet op og flyttet rundt, så det bliver nemmere at finde funktioner, knapper og overblik.</p>
          </div>
          <div class="column text-wrapper">
            <p class="content-title">Bedre brugeroplevelse</p>
            <p class="content-paragraph">Vi har ryddet op og flyttet rundt, så det bliver nemmere at finde funktioner, knapper og overblik.</p>
          </div>
        </div>
      </template>
      <template #footer>
        <div class="button-wrapper">
          <p class="skip content-paragraph" @click.stop="closeModal()">Spring over</p>
          <div class="button-container">
            <button @click.stop="previousModal()" class="back-button button-icon"><img src="../assets/imgs/arrow-prev.svg">Forrige</button>
            <button @click.stop="nextModal()" class="button-icon">Næste<img src="../assets/imgs/arrow-next.svg"></button>
          </div>
        </div>
      </template>
    </ModalItem>

    <!-- Modal 2 -->
    <ModalItem v-if="numberOfModal === 1" isOpen="isModalOpened" @next="nextModal" @modal-close="closeModal" name="first-modal" :customStyle="true">
      <template #header>
        <h1 class="header">Ny og forbedret selvbetjening</h1>
        <p class="sub-header">Vi har udviklet og opdateret din selvbetjening. Vi arbejder fortsat på de små detaljer, men det vigtigste er på plads.</p>
      </template>
      <template #content>
        <div class="modal-wrapper">
          <div class="column-page2">
            <img src="../assets/imgs/laptop.svg" />
          </div>
          <div class="column-page2">
            <p class="sub-header">Bedre brugeroplevelse</p>
            <p class="content-paragraph">Find hurtigt og nemt vej, til det du har brug for i selvbetjeningen.</p>
            <ul class="listy">
              <li>Mød et opdateret design, der understøtter funktioner</li>
              <li>Find nemt rundt med færre menupunkter</li>
              <li>Naviger hurtigere med simpelt overblik</li>
            </ul>
          </div>
        </div>
        <div class="modal-wrapper">
        </div>
      </template>
      <template #footer>
        <Pagination
            :totalPages="totalPages"
            :numberOfModal="numberOfModal"
            @update:numberOfModal="numberOfModal = $event"
          />
        <div class="button-wrapper">
          <p class="skip content-paragraph" @click.stop="closeModal()">Spring over</p>
          <div class="button-container">
            <button @click.stop="previousModal()" class="back-button button-icon"><img src="../assets/imgs/arrow-prev.svg">Forrige</button>
            <button @click.stop="nextModal()" class="button-icon">Næste<img src="../assets/imgs/arrow-next.svg"></button>
          </div>
        </div>
      </template>
    </ModalItem>

    <!-- Modal 3 -->
    <ModalItem v-if="numberOfModal === 2" isOpen="isModalOpened" @next="nextModal" @modal-close="closeModal" name="first-modal" :customStyle="true">
      <template #header>
        <h1 class="header">Ny og forbedret selvbetjening</h1>
        <p class="sub-header">Vi har udviklet og opdateret din selvbetjening. Vi arbejder fortsat på de små detaljer, men det vigtigste er på plads.</p>
      </template>
      <template #content>
        <div class="modal-wrapper">
          <div class="column-page2">
            <img src="../assets/imgs/brugeroplevelse4.svg" />
          </div>
          <div class="column-page2">
            <p class="sub-header">Bedre brugeroplevelse</p>
            <p class="content-paragraph">Det er blevet endnu nemmere at håndtere forskellige kunder med forskellige abonnementer og ladeadfærd.</p>
            <ul class="listy">
              <li>Få det fulde overblik over jeres kunder</li>
              <li>Dyk ned i detaljer om kundernes abonnementer, ladeadfærd og forbrug</li>
              <li>Bestil og opsig abonnementer og ladebrikker</li>
            </ul>
          </div>
        </div>
      </template>
      <template #footer>
        <Pagination
            :totalPages="totalPages"
            :numberOfModal="numberOfModal"
            @update:numberOfModal="numberOfModal = $event"
          />
        <div class="button-wrapper">
              <p class="skip content-paragraph" @click.stop="closeModal()">Spring over</p>
              <div class="button-container">
                <button @click.stop="previousModal()" class="back-button button-icon"><img src="../assets/imgs/arrow-prev.svg">Forrige</button>
                <button @click.stop="nextModal()" class="button-icon">Næste<img src="../assets/imgs/arrow-next.svg"></button>
              </div>
            </div>
      </template>
    </ModalItem>

    <!-- Modal 4 -->
    <ModalItem v-if="numberOfModal === 3" isOpen="isModalOpened" @next="nextModal" @modal-close="closeModal" name="first-modal" :customStyle="true">
      <template #header>
        <h1 class="header">Ny og forbedret selvbetjening</h1>
        <p class="sub-header">Vi har udviklet og opdateret din selvbetjening. Vi arbejder fortsat på de små detaljer, men det vigtigste er på plads.</p>
      </template>
      <template #content>
        <div class="modal-wrapper">
          <div class="column-page2">
            <img src="../assets/imgs/brugeroplevelse5.svg" />
          </div>
          <div class="column-page2">
            <p class="sub-header">Bedre bestillingsflow</p>
            <p class="content-paragraph">Det skal være nemt at bestille abonnementer i selvbetjeningen. Derfor har vi forbedret funktionerne i i bestillingsflowet.</p>
            <ul class="listy">
              <li>Bliv guidet til det rette produkt</li>
              <li>Følg med i bestillingen med tydelig status på processen</li>
              <li>Modtag en kvitteringsmail i indbakken</li>
            </ul>
          </div>
        </div>
      </template>
      <template #footer>
        <Pagination
            :totalPages="totalPages"
            :numberOfModal="numberOfModal"
            @update:numberOfModal="numberOfModal = $event"
          />
        <div class="button-wrapper">
              <p class="skip content-paragraph" @click.stop="closeModal()">Spring over</p>
              <div class="button-container">
                <button @click.stop="previousModal()" class="back-button button-icon"><img src="../assets/imgs/arrow-prev.svg">Forrige</button>
                <button @click.stop="closeModal()">Færdig</button>
              </div>
            </div>
      </template>
    </ModalItem>
  </div>
</template>

<script>
import ModalItem from "../components/ModalItem.vue";
import Pagination from "../components/PaginationItem.vue"
import { mapActions } from 'vuex';

export default {
  components: { ModalItem, Pagination },
  data() {
    return {
      numberOfModal: 0,
      totalPages: 3
    };
  },
  methods: {
    ...mapActions(['login']),
    async handleLogin() {
      const success = await this.login({ username: this.username, password: this.password });
      if (!success) {
        this.errorMessage = 'Den e-mail eller adgangskode du har indtastet, er ugyldig. Prøv igen.';
      } else {
        this.errorMessage = '';
        this.$router.push('/about');
      }
    },
    nextModal() {
      this.numberOfModal++;
    },
    previousModal() {
      this.numberOfModal--;
    },
    closeModal() {
      this.numberOfModal = null;
    }
  },
};

</script>