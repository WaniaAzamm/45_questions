function make_album( artist: string, Album:string, tracks?:number){
    let album : { artist: string; Album: string; tracks?:number} ={artist, Album};
   
    if(tracks !== undefined){
        album.tracks = tracks
    }
    return album;
    }

let album1 =make_album("Joe Keery","Decide");
console.log(album1);
let album2 =make_album("Olivia Rodrigo","Sour",11);
console.log(album2);
let album3 =make_album("Blackpink","Born Pink");
console.log(album3);
