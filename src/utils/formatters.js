'use strict';

export function msToMinutes(num) {
    var seconds = Math.floor(num / 1000);
    var minutes = Math.floor(seconds / 60);
    var seconds = seconds - (minutes * 60);
    return minutes + ':' + seconds
}