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

const port = 5000;
app.listen(port, () => console.log('Server is listening on port', port));
