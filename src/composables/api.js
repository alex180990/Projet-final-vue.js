import { ref } from "vue";

export default function getAllCharacters() {
  const liste = ref([]);

  const allCharacters = () => {
    fetch("https://hp-api.onrender.com/api/characters/")
      .then(response => response.json())
      .then(data => {
        liste.value = data;
        console.log('Liste des acteurs:', liste.value);
      })
      .catch(error => {
        console.error("Une erreur s'est produite lors de la récupération des données:", error);
      });
      return liste.value;
  };

  return {
    liste,
    allCharacters,
  };
}