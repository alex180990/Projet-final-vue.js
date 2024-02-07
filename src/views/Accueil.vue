<template>
  <main class="conteneur">
    <h1 class="kaushan-script-regular titre">Page d'acceuil</h1>
    <div class="flex-1 p-5">
      <img src="../asset/image/image-2.jpg" alt="">
      <div>
        <p class="kaushan-script-regular p-5">
          La saga Harry Potter, fruit de l'imagination exceptionnelle de J.K. Rowling, est une série emblématique de sept
          romans qui transportent les lecteurs dans un monde magique fascinant.
          Tout commence avec la découverte par Harry de ses pouvoirs de sorcier et son entrée à Poudlard, l'école de
          sorcellerie.
          Accompagné de ses amis fidèles, Ron et Hermione, Harry se retrouve plongé dans des aventures extraordinaires,
          défiant les forces obscures menées par le redoutable Lord Voldemort, un mage noir assoiffé de pouvoir.
        </p>
        <p class="kaushan-script-regular p-5">
          L'histoire, au-delà des batailles magiques, explore des thèmes intemporels tels que l'amitié, le courage, la
          loyauté et la quête d'identité. Chaque tome révèle de nouveaux aspects du monde sorcier,
          des créatures fantastiques aux artefacts magiques, créant une immersion totale pour les lecteurs. La série
          évolue avec les personnages, passant de l'innocence de l'enfance à la complexité des enjeux adultes,
          tout en capturant l'imagination de générations entières.
        </p>
      </div>
    </div>
    <div class="flex-1 p-5">
      <div>
        <p class="kaushan-script-regular p-5">
          Les éléments mythologiques, les personnages complexes et les rebondissements imprévisibles font de la saga un
          chef-d'œuvre de la littérature fantastique.
          Rowling tisse habilement des intrigues interconnectées, offrant des moments palpitants et des révélations
          poignantes. L'impact culturel de Harry Potter va au-delà des livres,
          avec une adaptation cinématographique réussie et la création d'un véritable phénomène mondial, réunissant des
          fans de tous âges autour de la magie enchanteresse de Poudlard.
        </p>
        <p class="kaushan-script-regular p-5">
          La saga se clôture de manière épique, mettant en lumière la force de l'amour, de l'espoir et du sacrifice.
          L'héritage de Harry Potter perdure à travers les générations,
          rappelant aux lecteurs que même dans un monde de sorcellerie, les leçons fondamentales de l'humanité restent
          essentielles. Ainsi, la saga Harry Potter continue de captiver et d'inspirer,
          laissant un héritage indélébile dans le monde de la littérature et de l'imaginaire.
        </p>
      </div>
      <img src="../asset/image/image-1.jpg" alt="">
    </div>

    <hr>

    <div class="form">
      <form @submit.prevent="ajouterInscrit()">
        <div class="centre">
          <h2 class="kaushan-script-regular titre">Inscription à l'info lettre ?</h2>

          <div class="secInput">
            <div class="flex-1">
              <label class="kaushan-script-regular" for="prenom">Votre prénom:</label>

              <div v-if="inscrits.length === 0">
                <input v-model="inscrit.prenom" type="text" id="prenom">
              </div>
              <div v-if="messageErreurPrenom" class="erreur">{{ messageErreurPrenom }}</div>
            </div>

            <div class="flex-1">
              <label class="kaushan-script-regular" for="nom">Votre nom:</label>
              <div v-if="inscrits.length === 0">
                <input v-model="inscrit.nom" type="text" id="nom">
              </div>
              <div v-if="messageErreurNom" class="erreur">{{ messageErreurNom }}</div>
            </div>

            <div class="flex-1">
              <label class="kaushan-script-regular" for="email">Votre courriel:</label>
              <div v-if="inscrits.length === 0">
                <input v-model="inscrit.email" type="text" id="email">
              </div>
              <div v-if="messageErreurEmail" class="erreur">{{ messageErreurEmail }}</div>
            </div>

          </div>
          <div class="flex-1 centre" v-if="inscrits.length === 0">
            <button type="submit" class="kaushan-script-regular btn">Inscription</button>
          </div>
          <p class="kaushan-script-regular " v-else>Merci pour votre inscription !</p>
        </div>
      </form>
      <button class="kaushan-script-regular btn centre" v-if="inscrits.length !== 0" @click="supprimerInscrit()">Desinscription</button>
    </div>

  </main>
</template>

<script>
  export default{
    data(){
      return{
        inscrits:[],
        inscrit:{
          prenom: '',
          nom:'',
          email:'',
        },
        messageErreurPrenom:'',
        messageErreurNom:'',
        messageErreurEmail:'',
      };
    },
    methods:{
      validerFormulaire(){
        this.messageErreurPrenom='';
        this.messageErreurNom='';
        this.messageErreurEmail='';

        if(!this.inscrit.prenom){
          this.messageErreurPrenom = "Veuillez entrer votre prénom !";
        }

        if(!this.inscrit.nom){
          this.messageErreurNom = "Veuillez entrer votre nom !";
        }

        if(!this.inscrit.email){
          this.messageErreurEmail = "Veuillez entrer votre email !";
        }

        if(this.messageErreurPrenom || this.messageErreurNom || this.messageErreurEmail){
          return false;
        }else{
          return true;
        }
      },

      ajouterInscrit(){
        if(this.validerFormulaire()){
          this.inscrits.push({...this.inscrit});
          console.log(this.inscrits);
        }
      },

      supprimerInscrit() {
        this.inscrits.length = 0;
        console.log(this.inscrits.length);
        console.log(this.inscrit);
      }
    }
  }
</script>

<style scoped>
  img{
    width: 100%;
    height: auto;

    border-radius: 15px;
  }
  .flex-1{
    display: flex;
  }

  .p-5{
    padding: 5px;
  }

  .erreur {
    color: #B4500E;
    margin-top: 10px;
  }

  input{
    height: 25px;
  }

  label{
    width: 40%;
    text-align: center;
  }

  .form{
    width: 40%;
    margin: 0 auto;

    background-color: #7F5E45;
    border: 1px solid #D2AA5C;
    padding: 10px;
  }

  form h2{
    text-align: center;
  }

  form p{
    text-align: center;
  }


  .centre{
    justify-content: center;
  }

  .btn{
    display: flex;
    margin: 0 auto;
  }

  .secInput{
    margin-bottom: 10px;
  }
</style>
