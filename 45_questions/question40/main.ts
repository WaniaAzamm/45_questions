function make_album( artist: string, Album:string, tracks?:number):{ artist: string; Album: string; tracks?:number} {
    let album : { artist: string; Album: string; tracks?:number} ={artist, Album};
   
    if(tracks !== undefined){
        album.tracks = tracks
    }
    return album;
    }

let album1 =make_album("Wania","Lily");
console.log(album1);
let album2 =make_album("Anosha","lava",12);
console.log(album2);
let album3 =make_album("Alisha","flower");
console.log(album3);
