// Importation de la bibliothèque PocketBase
import PocketBase from "pocketbase";

// Définition de l'URL de l'instance PocketBase
const POCKETBASE_URL = "http://127.0.0.1:8090";

// Création de l'instance PocketBase avec l'URL définie plus haut
const pb = new PocketBase("http://127.0.0.1:8090");




export async function Allevents() {
    const record = await pb.collection('Films').getFullList();
    return record;
}



// une fonction qui retourne la liste de tous les films triés par date de projection

export async function sortedfilms() {
    const records = await pb.collection('Films').getFullList({ sort: 'projection', });
    return records;
}


// une fonction qui retourne la liste des activités (Ateliers, expositions, animations…) triés par date de projection    

export async function AllActivitessorted() {
    const records = await pb.collection('Activites').getFullList({ sort: 'Date_activite', });
    return records;
}


//une fonction qui retourne la liste de tous les acteurs / réalisateurs participant au festival triés par ordre alphabétique

export async function AllInvitessorted() {
    const records = await pb.collection('Invites').getFullList({ sort: 'Prenom', });
    return records;
}

//une fonction qui retourne les infos d'un film en donnant son id en paramètre

export async function oneIDFilm(id) {
    const Onerecords = await pb.collection('Films').getOne(id);
    return Onerecords;
}

//une fonction qui retourne les infos d'une activité en donnant son id en paramètre

export async function oneIDActivites(id) {
    const Onerecordsactivites = await pb.collection('Activites').getOne(id);
    return Onerecordsactivites;
}


//une fonction qui retourne les infos d'un acteur / réalisateur en donnant son id en paramètre

export async function oneIDInvites(id) {
    const OnerecordsInvites = await pb.collection('Invites').getOne(id);
    return OnerecordsInvites;
}

//Une fonction qui retourne toutes les activités d’un animateur donné par son id

export async function AllActivitesByid(id) {
    const Recordsactivites = await pb.collection('Activites').getFullList({ filter: `Invites.id= '${id}'`, expand: 'Invites', });


    return Recordsactivites;
}

//Une fonction qui retourne toutes les activités d’un animateur donné par son nom

export async function AllActivitesByinvitesName(Nom) {
    const RecordsactivitesinvitesName = await pb.collection('Activites').getFullList({ filter: `Invites.Nom= '${Nom}'`, expand: 'Invites', });


    return RecordsactivitesinvitesName;
}

//Une fonction qui permet d’ajouter ou modifier les informations d’un film, activité ou invité

//film

export async function addNewFilms(Newfilm) {
    await pb.collection('Films').create(Newfilm);
}


export async function updateFilmsbyId(id, data) {
    await pb.collection('Films').update(id, data);
}


export async function DeleteFilmbyId(id) {
    await pb.collection('Films').delete(id);
}


//activites

export async function addNewActivites(Newactivites) {
    await pb.collection('Activites').create(Newactivites);
}


export async function updateActivitesbyId(id, data1) {
    await pb.collection('Activites').update(id, data1);
}

export async function DeleteActivitebyId(id) {
    await pb.collection('Activites').delete(id);
}

//invites

export async function addNewInvites(Newinvites) {
    await pb.collection('Invites').create(Newinvites);
}


export async function updateInvitesbyId(id, data2) {
    await pb.collection('Invites').update(id, data2);
}

export async function DeleteInvitebyId(id) {
    await pb.collection('Invites').delete(id);
}









export async function newUser(newuser) {
    await pb.collection("users").create(newuser);
}


