const express = require('express');
const router = express.Router();
//const galleryItems = require('../modules/gallery.data');
const pool = require('../modules/pool.js')

// DO NOT MODIFY THIS FILE FOR BASE MODE

// PUT Route
router.put('/like/:id', (req, res) => {
    console.log(req.params);
    const id = req.params.id;
    const likes = req.params.likes
    queryText =`
        UPDATE "image_gallery"
        SET "likes" = $2
        WHERE "id" = $1;`;
    pool.query(queryText, [id, likes]).then(result => {
        res.sendStatus(200)
    }).catch(err => {
        console.log(err)
        res.sendStatus(500)
    })
    // for(const galleryItem of galleryItems) {
    //     if(galleryItem.id == galleryId) {
    //         galleryItem.likes += 1;
    //     }
    // }
    //res.sendStatus(200);
}); // END PUT Route

// GET Route
router.get('/', (req, res) => {
    const sqlText = `SELECT * FROM "image_gallery"`;
    pool.query(sqlText).then((results) => {
        res.send(results.rows);
    }).catch((error) => {
        console.log(error)
        res.sendStatus(500)
    })
    //res.send(galleryItems);
}); // END GET Route

module.exports = router;