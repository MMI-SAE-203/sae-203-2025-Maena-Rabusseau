import {  Allevents, sortedfilms, AllActivitessorted, AllInvitessorted, oneIDFilm, oneIDActivites, oneIDInvites, AllActivitesByid, AllActivitesByinvitesName} from './backend.mjs'
import {addNewFilms,updateFilmsbyId, addNewActivites, updateActivitesbyId, addNewInvites, updateInvitesbyId, DeleteFilmbyId,DeleteActivitebyId, DeleteInvitebyId} from './backend.mjs'
import {newUser} from './backend.mjs'
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
    "Genre": "Animation" ,
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




