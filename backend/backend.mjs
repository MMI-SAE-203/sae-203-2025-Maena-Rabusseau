// Importation de la bibliothèque PocketBase
import PocketBase from "pocketbase";

// Définition de l'URL de l'instance PocketBase
const POCKETBASE_URL = "http://127.0.0.1:8090";

// Création de l'instance PocketBase avec l'URL définie plus haut
const pb = new PocketBase(POCKETBASE_URL);


// Exportation de l'instance PocketBase pour l'utiliser dans d'autres fichiers
export { pb };



export async function Allevents() {
    const record = await pb.collection('Films').getFullList();
    return record;
}



// une fonction qui retourne la liste de tous les films triés par date de projection

export async function sortedfilms() {
    let records = await pb.collection('Films').getFullList({ sort: 'projection', });
    records = records.map((film) => {
        film.imageUrl = pb.files.getURL(film, film.Affiche);
        return film;
    });
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
    const Onerecords = await pb.collection('Films').getOne(id, { expand: 'Invites' });
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






/*Films*/

/* fonction de filtage des films par genre*/

export async function filterByGenre(Genre) {
    try {
        let data = await pb.collection('Films').getFullList({
            sort: 'projection', filter: `Genre ~ '${Genre}'`
        });
        console.log(data);


        data = data.map((film) => {
            if (film.image) {
                film.imageFile = pb.files.getFile(film, film.image);
            }
            return film;
        });
        return data;
    } catch (error) {
        console.log('Une erreur est survenue en filtrant la liste des films', error);
        return [];
    }
}





// fonction pour la création des formulaires pour saisir et modifier des données.

export async function addfilm(film) {
    try {
        await pb.collection('Films').create(film);
        return {
            success: true,
            message: 'Film ajouté avec succès'
        };
    } catch (error) {
        console.log('Une erreur est survenue en ajoutant le film ', error);
        return {
            success: false,
            message: 'Une erreur est survenue en ajoutant le film'
        };
    }
}


// fonction non foctionnelle ....



// export async function getInvites(id) {
//     try {
//         let data = await pb.collection('Films').getOne(id, { expand: 'Films_via_Invites' });
//         console.log(data);
//         data.img = pb.files.getURL(data, data.image);
//         data.expand.Films_via_Invites = data.expand.Films_via_Invites.map((invite) => {
//             invite.img = pb.files.getURL(invite, invite.photo);
//             return invite;
//         });
//         return data;
//     } catch (error) {
//         console.log('Une erreur est survenue en lisant l invvités', error);
//         return null;
//     }
// }

//invités 

//une fonction qui retourne les infos d'un invité en donnant son id en paramètre

export async function oneIDInvite(id) {
    const Onerecordss = await pb.collection('Invites').getOne(id, { expand: 'Activites' });
    return Onerecordss;
}


// fonction pour la création des formulaires pour saisir et modifier des données des invités 

export async function addinvite(invite) {
    try {
        await pb.collection('Invites').create(invite);
        return {
            success: true,
            message: 'Invité ajouté avec succès'
        };
    } catch (error) {
        console.log('Une erreur est survenue en ajoutant l invité', error);
        return {
            success: false,
            message: 'Une erreur est survenue en ajoutant l invité'
        };
    }
}


/* fonction de filtage des invités par rôle*/


export async function filterByRole(role) {
    try {
        let data = await pb.collection('Invites').getFullList({
            sort: 'prenom',
            filter: `Role ~ '${role}'`
        });

        console.log(`Invités filtrés par rôle (${role}):`, data);

        data = data.map((invite) => {
            if (film.image) {
                film.imageFile = pb.files.getFile(invite, invite.image);
            }
            return invite;
        });

        return data;
    } catch (error) {
        console.error(`Erreur lors du filtrage des films par rôle (${role}) :`, error);
        return [];
    }
}



// une fonction qui retourne la liste de tous les invités triés par  prénom

export async function sortedinvite() {
    const recordss = await pb.collection('Invites').getFullList({ sort: 'Prenom', });
    return recordss;
}



//activités 



//une fonction qui retourne les infos d'une activité en donnant son id en paramètre

export async function oneIDActivite(id) {
    const Onerecordsss = await pb.collection('Activites').getOne(id, { expand: 'Invites' });
    return Onerecordsss;
}


// fonction pour la création des formulaires pour saisir et modifier des données des invités 

export async function addactivite(activite) {
    try {
        await pb.collection('Activites').create(activite);
        return {
            success: true,
            message: 'Activité ajouté avec succès'
        };
    } catch (error) {
        console.log('Une erreur est survenue en ajoutant l activité', error);
        return {
            success: false,
            message: 'Une erreur est survenue en ajoutant l activité'
        };
    }
}


/* fonction de filtage des activités par date*/


export async function filterByDate(activite) {
    try {
        let data = await pb.collection('Invites').getFullList({
            sort: 'Description',
            filter: `Date_activite ~ '${activite}'`
        });

        console.log(`Activité filtrés par date (${activite}):`, data);

        data = data.map((activite) => {
            if (film.image) {
                film.imageFile = pb.files.getFile(activite, activite.image);
            }
            return activite;
        });

        return data;
    } catch (error) {
        console.error(`Erreur lors du filtrage des films par rôle (${activite}) :`, error);
        return [];
    }
}



// une fonction pour retourner le nom de l'inviité dans activité 

export async function sortedactivite() {
    let recordsss = await pb.collection('Activites').getFullList({ sort: 'Description', });
    recordsss = recordsss.map((activite) => {
        activite.imageUrl = pb.files.getURL(activite, activite.Photo);
        return activite;
    }); return recordsss;
}



// une fonction pour retourner l'activité 

export async function sortedinvite() {
    let recordssss = await pb.collection('Invites').getFullList({ sort: 'Nom', });
    recordssss = recordssss.map((activite) => {
        activite.imageUrl = pb.files.getURL(activite, activite.Photo);
        return activite;
    });
    return recordssss;
}



