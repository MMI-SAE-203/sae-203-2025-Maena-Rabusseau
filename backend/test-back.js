import {  Allevents, sortedfilms } from './backend.mjs'



try {
    const records = await Allevents() ;
    console.table(records) ;
    } catch (e) {
    console.error(e) ;
    }

    // une fonction qui retourne la liste de tous les films triés par date de projection

    try {
        const records = await sortedfilms();
        console.table((records));
    } catch (e) {
        console.error(e);
    }
    