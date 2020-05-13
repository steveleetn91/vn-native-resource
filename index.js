#!/usr/bin/env node
const fs = require('fs');
const resizeImg = require('resize-img');
/**
 * IOS 
 */
//(async () => {
    async function makeIconiOs(size = 20){
        const image = await resizeImg(fs.readFileSync('resources/ios.png'), {
            width: size,
            height: size
        });
        
        fs.writeFileSync('resources/ios/icon/' + size + '.png', image);
    }
    makeIconiOs(16);
    makeIconiOs(20);
    makeIconiOs(29);
    makeIconiOs(32);
    makeIconiOs(40);
    makeIconiOs(48);
    makeIconiOs(50);
    makeIconiOs(55);
    makeIconiOs(57);
    makeIconiOs(58);
    makeIconiOs(60);
    makeIconiOs(64);
    makeIconiOs(72);
    makeIconiOs(76);
    makeIconiOs(80);
    makeIconiOs(87);
    makeIconiOs(88);
    makeIconiOs(100);
    makeIconiOs(114);
    makeIconiOs(120);
    makeIconiOs(128);
    makeIconiOs(144);
    makeIconiOs(152);
    makeIconiOs(167);
    makeIconiOs(172);
    makeIconiOs(180);
    makeIconiOs(196);
    makeIconiOs(216);
    makeIconiOs(256);
    makeIconiOs(512);
    makeIconiOs(1024);
//})();
/**
 * Android 
 */
async function makeIconAndroid(size = 20){
    const image = await resizeImg(fs.readFileSync('resources/android.png'), {
        width: size,
        height: size
    });
    fs.writeFileSync('resources/android/icon/' + size + '.png', image);
}
makeIconAndroid(36);
makeIconAndroid(48);
makeIconAndroid(64);
makeIconAndroid(72);
makeIconAndroid(96);
makeIconAndroid(144);
makeIconAndroid(192);
makeIconAndroid(512);
makeIconAndroid(1024);
/**
 * IOS 
 */
async function makeWaitImage(platform,width,height){
    const image = await resizeImg(fs.readFileSync('resources/wait.jpg'), {
        width: width,
        height: height
    });
    
    fs.writeFileSync('resources/' + platform + '/wait/' + width + 'x' + height + '.jpg', image);
}
makeWaitImage('ios',2048,2732);
makeWaitImage('ios',2732,2048);
makeWaitImage('ios',1668,2388);
makeWaitImage('ios',2388,1668);
makeWaitImage('ios',1668,2224);
makeWaitImage('ios',2224,1668);
makeWaitImage('ios',1536,2048);
makeWaitImage('ios',2048,1536);
makeWaitImage('ios',1242,2688);
makeWaitImage('ios',2688,1242);
makeWaitImage('ios',1125,2436);
makeWaitImage('ios',2436,1125);
makeWaitImage('ios',828,1792);
makeWaitImage('ios',1792,828);
makeWaitImage('ios',1242,2208);
makeWaitImage('ios',2208,1242);
makeWaitImage('ios',750,1334);
makeWaitImage('ios',1334,750);
makeWaitImage('android',240,320);
makeWaitImage('android',320,240);
makeWaitImage('android',320,480);
makeWaitImage('android',480,320);
makeWaitImage('android',480,800);
makeWaitImage('android',800,480);
makeWaitImage('android',600,1024);
makeWaitImage('android',1024,600);
makeWaitImage('android',720,1280);
makeWaitImage('android',1280,720);
makeWaitImage('android',800,1280);
makeWaitImage('android',1280,800);