'use strict';

import {Schema, arrayOf} from 'normalizr';

const playlist = new Schema('items', {idAttribute:'id'});
//const imagesSchema = new Schema('images', {idAttribute: 'url'});
const owner = new Schema('owner', {idAttribute: 'id'});


playlist.define({
    //images: arrayOf(imagesSchema),
    owner: owner
});


export const playlistSchema = playlist;