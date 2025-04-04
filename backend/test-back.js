import { Allevents, sortedfilms, AllActivitessorted, AllInvitessorted, oneIDFilm, oneIDActivites, oneIDInvites, AllActivitesByid, AllActivitesByinvitesName } from './backend.mjs'
import { addNewFilms, updateFilmsbyId, addNewActivites, updateActivitesbyId, addNewInvites, updateInvitesbyId, DeleteFilmbyId, DeleteActivitebyId, DeleteInvitebyId } from './backend.mjs'
import { newUser, oneIDInvite, sortedinvite, oneIDActivite, sortedactivite, updateuserbyId, DeleteUserbyId, newUserauth2 } from './backend.mjs'
/*
try {
    const records = await Allevents() ;
    console.table(records) ;
    } catch (e) {
    console.error(e) ;
    }
*/


// une fonction qui retourne la liste de tous les films triés par date de projection



/* try {
     const records = await sortedfilms();
     console.table((records));
 } catch (e) {
     console.error(e);
 }
 */





// une fonction qui retourne la liste des activités (Ateliers, expositions, animations…) triés par date de projection    


/*  try {
      const records = await AllActivitessorted();
      console.table((records));
  } catch (e) {
      console.error(e);
  }



  */
//une fonction qui retourne la liste de tous les acteurs / réalisateurs participant au festival triés par ordre alphabétique
/*


try {
    const records = await AllInvitessorted();
    console.table((records));
} catch (e) {
    console.error(e);
}
*/



//une fonction qui retourne les infos d'un film en donnant son id en paramètre
/*


try {
    const Onerecords = await oneIDFilm('y9lkmxpija5m6w6');
    console.table((Onerecords));
} catch (e) {
    console.error(e);
}
*/




//une fonction qui retourne les infos d'une activité en donnant son id en paramètre
/*



try {
    const Onerecordsactivites = await oneIDActivites('xywx836247t352w');
    console.table((Onerecordsactivites));
} catch (e) {
    console.error(e);
}
*/



//une fonction qui retourne les infos d'un acteur / réalisateur en donnant son id en paramètre


/*
try {
    const OnerecordsInvites = await oneIDInvites('axkqs94x871it97');
    console.table((OnerecordsInvites));
} catch (e) {
    console.error(e);
}
*/




//Une fonction qui retourne toutes les activités d’un animateur donné par son id
/*



try {
    const Recordsactivites = await AllActivitesByid('ok2k280xnnwr641');
    console.table((Recordsactivites));
} catch (e) {
    console.error(e);
}
*/




//Une fonction qui retourne toutes les activités d’un animateur donné par son nom

/*



try {
    const RecordsactivitesinvitesName = await AllActivitesByinvitesName("Torun");
    console.table(RecordsactivitesinvitesName);
} catch (e) {
    console.error(e);
    
}*/





//Une fonction qui permet d’ajouter ou modifier les informations d’un film, activité ou invité

//films

const Newfilm = {
    "Titre": "test",
    "Genre": "horreur",
    "Description": "test",

};
//await addNewFilms(Newfilm);



const data = {
    "Titre": "Le chat Potté 2 ",
    "Genre": "Animation",
};
//await updateFilmsbyId('vlhj227r9lup79u',data);

//await DeleteFilmbyId ('vlhj227r9lup79u');






// Activites 

const Newactivites = {
    "Description": "Atelier de peinture",
    "Type": "Atelier",

};
//await addNewActivites(Newactivites);


const data1 = {
    "Description": "Atelier de peinture pour les enfants",

};
//await updateActivitesbyId('obft5av60evc1l5',data1);

//await DeleteActivitebyId('obft5av60evc1l5');





// Invites

const Newinvites = {
    "Nom": "aguilar",
    "Prenom": "Julien",
    "Email": "julien@juju.fr",

};
//await addNewInvites(Newinvites);


const data2 = {

    "Prenom": "Justine",
    "Email": "justine@juju.com",
};
//await updateInvitesbyId('z1p54288b8pnohn',data2);

//await DeleteInvitebyId('z1p54288b8pnohn');





const newuser = {
    "email": "test@test.fr",
    "name": "Jack",
};
//await newUser(newuser);

//Invités

//une fonction qui retourne les infos d'un film en donnant son id en paramètre

/*

try {
    const Onerecordss = await oneIDInvite('axkqs94x871it97');
    console.table((Onerecordss));
} catch (e) {
    console.error(e);
}
*/



// une fonction qui retourne la liste de tous les films triés par prénom


/*
    try {
        const recordss = await sortedinvite();
        console.table((recordss));
    } catch (e) {
        console.error(e);
    }

*/



//Activités

//une fonction qui retourne les infos d'une activité en donnant son id en paramètre

/*

try {
    const Onerecordsss = await oneIDActivite('66k3z3zz935e0g0');
    console.table((Onerecordsss));
} catch (e) {
    console.error(e);
}
*/



// une fonction qui retourne la liste de toutes les activités triés par description
/*

    try {
        const recordsss = await sortedactivite();
        console.table((recordsss));
    } catch (e) {
        console.error(e);
    }
    
*/


// fonctions d’authentification .

/*modification*/

const datacaroline = {
    "name": "Caro"
};
//await updateuserbyId('59ofj55xq40z860', datacaroline);



/*suppression*/

//await DeleteUserbyId('5771bw247484gmk');


/*ajout*/

const newuser3 = {
    "email": "test@test3.fr",
    "password": "andré123456",
    "passwordConfirm": "andré123456",
    "name": "André",
};
await newUserauth2(newuser3);