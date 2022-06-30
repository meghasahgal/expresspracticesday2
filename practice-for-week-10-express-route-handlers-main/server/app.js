// Phase 2
const {
  getAllArtists,
  getLatestArtist,
  getArtistByArtistId,
  addArtist,
  editArtistByArtistId,
  deleteArtistByArtistId,
  getAlbumsForLatestArtist,
  getAlbumsByArtistId,
  getAlbumByAlbumId,
  addAlbumByArtistId,
  editAlbumByAlbumId,
  deleteAlbumByAlbumId,
  getFilteredAlbums,
  getSongsByArtistId,
  getSongsByAlbumId,
  getSongBySongId,
  addSongByAlbumId,
  editSongBySongId,
  deleteSongBySongId
} = require('./data');

const express = require('express');
const app = express();

// Your code here
app.use(express.json());

app.use((req, res, next) => {
  console.log('Body: ', req.body);
  next();
});

app.get('/artists', (req, res, next) => {
  res.status(200);
  res.json(getAllArtists());
});

app.post('/artists', (req, res, next) =>{
  res.status(201)
  res.json(addArtist(req.body))
})
//{
//     "name": "Led Zeppelin",
//     "artistId": 2
// }

app.get('/artists/latest', (req, res, next)=>{
  res.status(200)
  res.json(getLatestArtist())
})

// {
//     "latest": {
//         "artistId": 1,
//         "name": "Red Hot Chili Peppers"
//     }
// }


app.get('/artists/latest/albums', (req, res, next)=>{
  res.status(200)
  res.json(getAlbumsForLatestArtist())
})

// {
//     "latest": {
//         "albums": [
//             {
//                 "albumId": 1,
//                 "name": "Stadium Arcadium",
//                 "artistId": 1
//             }
//         ]
//     }
// }

// Get the latest artist added.
app.get('/artists/latest', (req, res) => {
  res.status(200);
  res.json(getLatestArtist());
});

// Get all albums of the latest artist.
app.get('/artists/latest/albums', (req, res) => {
  res.status(200);
  res.json(getAlbumsForLatestArtist());
});

// Get a specific artist's details based on artistId
app.get('/artists/:artistId', (req, res) => {
  res.status(200);
  res.json(getArtistByArtistId(req.params.artistId));
});

// Edit a specified artist by artistId
app.put('/artists/:artistId', (req, res) => {
  res.status(200);
  res.json(editArtistByArtistId(req.params.artistId, req.body));
});

//### Delete a specified artist by artistId
app.delete('/artists/:artistId', (req, res) =>{
  res.status(200)
  res.json({"message": "Sucessfully deleted."})
})

//### Get all albums of a specific artist based on artistId
app.get('/artists/:artistId/albums', (req, res) =>{
  res.status(200)
  res.json(getAlbumsByArtistId(req.params.artistId))
})

//Get a specific album's details based on albumId

app.get('/albums/:albumId', (req, res)=>{
  res.status(200)
  res.json(getAlbumByAlbumId(req.params.albumId))
})

//Add an album to a specific artist based on artistId
app.post('/artist/:artistId/albums', (req, res) =>{
  res.status(201)
  // req.body = {
  //     "name": "Stadium Arcadium"
  // }
  res.json(addAlbumByArtistId(req.params.artistId, req.body))

})

// Get all albums with names filtered by first letter
app.get('/albums', (req, res)=>{
  res.status(200)
  res.json(getFilteredAlbums(req.query.startsWith))
});

// Get all songs of a specific artist based on artistId
app.get('/artists/:artistId/songs', (req, res)=>{
  res.status(200)
  res.json(getSongsByArtistId(req.params.artistId))
});

// Get all songs of a specific album based on albumId
app.get('/albums/:albumId/songs', (req, res)=>{
  res.status(200)
  res.json(getSongsByAlbumId(req.params.albumId) )
});

// Get a specific song's details based on songId
app.get('/songs/:songId', (req, res)=>{
  res.status(200)
  res.json( getSongBySongId(req.params.songId))
});

// Add a song to a specific album based on albumId
app.post('/albums/:albumId/songs', (req, res)=>{
  res.status(201)
  req.body = {
    "name": "Dani California",
    "trackNumber": 1,
    "lyrics": "...",
    "albumId": 1
  }
  res.json(addSongByAlbumId(req.params.albumId, req.body))
});

//Edit a specified song by songId

app.patch('/songs/:songId', (req, res)=>{
  res.status(200)
  req.body = {
    "name": "Dani California",
    "trackNumber": 1,
    "lyrics": "..."
  }
  res.json(editSongBySongId(req.params.songId, req.body))
})

// Delete a specified song by songId

app.delete('/songs/:songId', (req, res)=>{
  res.status(200)
  res.json({"message" : "Successfully deleted"})
})

//

const port = 5000;
app.listen(port, () => console.log('Server is listening on port', port));
