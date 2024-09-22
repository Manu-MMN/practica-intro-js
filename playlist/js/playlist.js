/**
 * @typedef {Object} Song
 * @property {string} title - The title of the song.
 * @property {string} artist - The artist of the song.
 * @property {string} genre - The genre of the song.
 * @property {number} duration - The duration of the song in seconds.
 * @property {boolean} favorite - Whether the song is marked as a favorite.
 */
// Example: { title: 'Song Title', artist: 'Song Artist', genre: 'Song Genre', duration: 180, favorite: false }


/**
 * @typedef {Object} Playlist
 * @property {string} name - The name of the playlist.
 * @property {Song[]} songs - The list of songs in the playlist.
 */
// Example: { name: 'Playlist Name', songs: [{ title: 'Song Title', artist: 'Song Artist', genre: 'Song Genre', duration: 180, favorite: false }] }

const musicCatalog = () => {
  /**
   * Array of playlists in the catalog.
   * @type {Playlist[]}
   */
  let playlists = [];

  /**
   * Adds a new playlist to the catalog.
   * @param {string} playlistName - The name of the new playlist.
   */
  const createPlaylist = (playlistName) => { 
    const newPlaylist = {name: playlistName, songs:[]}
    playlists = [...playlists, newPlaylist]
  };

  /**
   * Gets all playlists in the catalog.
   * @returns {Playlist[]} The list of all playlists.
   */
  const getAllPlaylists = () => {
    return playlists;
  };

  /**
   * Removes a playlist from the catalog.
   * @param {string} playlistName - The name of the playlist to remove.
   */
    const removePlaylist = (playlistName) => {
      // playlists = playlists.filter(playList => playList.name !== playlistName) / de la lista playlists, me devuelves una lista de todos los elementos que pasan la condición (no tener el mismo nombre)
      playlists = playlists.filter(playList =>{   
        if (playList.name === playlistName) return false;
        return true;
      });
    };

  /**
   * Adds a song to a specific playlist.
   * @param {string} playlistName - The name of the playlist to add the song to.
   * @param {{ title: string, artist: string, genre: string, duration: number }} song - The song to add to the playlist.
   * @throws {Error} If the playlist is not found.
   */
  const addSongToPlaylist = (playlistName, song) => {
    // const p = playlists.find( playList => playList.name === playlistName)   // de la lista playlist, encuéntrame un elemento que coincida con el playlistName
    song.favorite = false;
    const playListElement = playlists.find(playList => {  
      if (playlistName === playList.name) {
        return true
      } 
      return false

    }) 
    if (!playListElement) throw new Error("PlayList doesn't exist")
    
    const playListUpdate = {name: playListElement.name, songs:[...playListElement.songs, song]}

    
    playlists = playlists.map(playList =>{
      if (playList.name === playlistName) {
        return playListUpdate
      }
      return playList 
    })
    


  };

  /**
   * Removes a song from a specific playlist.
   * @param {string} playlistName - The name of the playlist to remove the song from.
   * @param {string} title - The title of the song to remove.
   * @throws {Error} If the playlist or song is not found.
   */
  const removeSongFromPlaylist = (playlistName, title) => {
    const playListRemove = playlists.find(playList =>{
      return playlistName === playList.name    //Esto devuelve true si coinciden los nombres si no, false
    })  //con esto, tenemos la playlist a la que vamos a intervenir (PlayListRemove)
    const songUpdated = playListRemove.songs.filter(song =>{
      if (song.title === title) return false 
      return true    //en el caso del filter, usar condicionales me ayuda más a entender la estructura
    })
    const PlayListElementUpdated = {name: playlistName, songs: songUpdated}
    
    playlists = playlists.map(playList =>{
      if (playList.name === playlistName) {
        return PlayListElementUpdated
      }
      return playList

    })

  };

  /**
   * Marks a song as a favorite or removes the favorite status.
   * @param {string} playlistName - The name of the playlist containing the song.
   * @param {string} title - The title of the song to mark as a favorite.
   */
  const favoriteSong = (playlistName, title) => {
    const playListElement = playlists.find(playList =>{
      return playlistName === playList.name
    })
    const songUpdated = playListElement.songs.map( song =>{
      if (song.title === title) {
        song.favorite = true
        return song
      } else {
        return song
      }
    })
    const playListFavoriteUpdated = {name: playlistName, songs: songUpdated}
    playlists = playlists.map(playList => {
      if (playList.name === playlistName) {
        return playListFavoriteUpdated
      }
      return playList
    })
  };

  /**
   * Sorts songs in a specific playlist by a given criterion (title, artist, or duration).
   * @param {string} playlistName - The name of the playlist to sort songs in.
   * @param {'title' | 'artist' | 'duration'} criterion - The criterion to sort by.
   * @returns {Song[]} The list of sorted songs.
   * @throws {Error} If the playlist is not found or the criterion is invalid.
   */
  const sortSongs = (playlistName, criterion) => {
    let sortedSongs
    const playListElement = playlists.find(playList =>{
      return playlistName === playList.name   //ya hemos encontrado la lista que queremos "modificar"
    })
    const currentSongs = playListElement.songs; //ya tenemos las canciones antes de ordenarlas
    if (criterion === "duration") {
      //si criterion es en base a la duración se ordenará en valores numéricos
      sortedSongs = currentSongs.sort((a, b) =>{
        return a.duration - b.duration
      }  
    )
 //de no ser criterion será o artista o título, que son strings y se ordenarán por orden alfabético
    } else{
      sortedSongs = currentSongs.sort((a, b) =>{
        return a[criterion].localeCompare(b[criterion]) 
      }
    )
    }
    
    const updatedPlayListElement = {name: playlistName, songs: sortedSongs }

    playlists = playlists.map(playList =>{
      if (playList.name === playlistName) {
        return updatedPlayListElement
      } else{
        return playList
      }
    })

  };

  return { createPlaylist, addSongToPlaylist, removeSongFromPlaylist, sortSongs, getAllPlaylists, removePlaylist, favoriteSong };
};

export default musicCatalog