// Importation de la bibliothèque PocketBase
import PocketBase from "pocketbase";

// Définition de l'URL de l'instance PocketBase
const POCKETBASE_URL = "http://127.0.0.1:8090";

// Création de l'instance PocketBase avec l'URL définie plus haut
const pb = new PocketBase("http://127.0.0.1:8090");




export async function Allevents() {
    const record = await pb.collection('Films').getFullList();
    return record;}



// une fonction qui retourne la liste de tous les films triés par date de projection

export async function sortedfilms () {
    const records =  await pb.collection('Films').getFullList({ sort: 'projection', });
    return records;
}
