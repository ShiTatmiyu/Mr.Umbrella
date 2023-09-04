gdjs.Level1Code = {};
gdjs.Level1Code.GDPlayerObjects1= [];
gdjs.Level1Code.GDPlayerObjects2= [];
gdjs.Level1Code.GDPlayerObjects3= [];
gdjs.Level1Code.GDPlayerObjects4= [];
gdjs.Level1Code.GDonewayObjects1= [];
gdjs.Level1Code.GDonewayObjects2= [];
gdjs.Level1Code.GDonewayObjects3= [];
gdjs.Level1Code.GDonewayObjects4= [];
gdjs.Level1Code.GDStoneObjects1= [];
gdjs.Level1Code.GDStoneObjects2= [];
gdjs.Level1Code.GDStoneObjects3= [];
gdjs.Level1Code.GDStoneObjects4= [];
gdjs.Level1Code.GDGroundObjects1= [];
gdjs.Level1Code.GDGroundObjects2= [];
gdjs.Level1Code.GDGroundObjects3= [];
gdjs.Level1Code.GDGroundObjects4= [];
gdjs.Level1Code.GDPOHONObjects1= [];
gdjs.Level1Code.GDPOHONObjects2= [];
gdjs.Level1Code.GDPOHONObjects3= [];
gdjs.Level1Code.GDPOHONObjects4= [];
gdjs.Level1Code.GDNewSpriteObjects1= [];
gdjs.Level1Code.GDNewSpriteObjects2= [];
gdjs.Level1Code.GDNewSpriteObjects3= [];
gdjs.Level1Code.GDNewSpriteObjects4= [];
gdjs.Level1Code.GDNewSprite2Objects1= [];
gdjs.Level1Code.GDNewSprite2Objects2= [];
gdjs.Level1Code.GDNewSprite2Objects3= [];
gdjs.Level1Code.GDNewSprite2Objects4= [];
gdjs.Level1Code.GDSlimeObjects1= [];
gdjs.Level1Code.GDSlimeObjects2= [];
gdjs.Level1Code.GDSlimeObjects3= [];
gdjs.Level1Code.GDSlimeObjects4= [];
gdjs.Level1Code.GDBulletObjects1= [];
gdjs.Level1Code.GDBulletObjects2= [];
gdjs.Level1Code.GDBulletObjects3= [];
gdjs.Level1Code.GDBulletObjects4= [];
gdjs.Level1Code.GDUmbrellaOpenObjects1= [];
gdjs.Level1Code.GDUmbrellaOpenObjects2= [];
gdjs.Level1Code.GDUmbrellaOpenObjects3= [];
gdjs.Level1Code.GDUmbrellaOpenObjects4= [];
gdjs.Level1Code.GDUmbrellaClosedObjects1= [];
gdjs.Level1Code.GDUmbrellaClosedObjects2= [];
gdjs.Level1Code.GDUmbrellaClosedObjects3= [];
gdjs.Level1Code.GDUmbrellaClosedObjects4= [];
gdjs.Level1Code.GDRainObjects1= [];
gdjs.Level1Code.GDRainObjects2= [];
gdjs.Level1Code.GDRainObjects3= [];
gdjs.Level1Code.GDRainObjects4= [];
gdjs.Level1Code.GDMeleeObjects1= [];
gdjs.Level1Code.GDMeleeObjects2= [];
gdjs.Level1Code.GDMeleeObjects3= [];
gdjs.Level1Code.GDMeleeObjects4= [];
gdjs.Level1Code.GDSpikesObjects1= [];
gdjs.Level1Code.GDSpikesObjects2= [];
gdjs.Level1Code.GDSpikesObjects3= [];
gdjs.Level1Code.GDSpikesObjects4= [];
gdjs.Level1Code.GDAObjects1= [];
gdjs.Level1Code.GDAObjects2= [];
gdjs.Level1Code.GDAObjects3= [];
gdjs.Level1Code.GDAObjects4= [];
gdjs.Level1Code.GDDObjects1= [];
gdjs.Level1Code.GDDObjects2= [];
gdjs.Level1Code.GDDObjects3= [];
gdjs.Level1Code.GDDObjects4= [];
gdjs.Level1Code.GDWObjects1= [];
gdjs.Level1Code.GDWObjects2= [];
gdjs.Level1Code.GDWObjects3= [];
gdjs.Level1Code.GDWObjects4= [];
gdjs.Level1Code.GDBuffArrow1Objects1= [];
gdjs.Level1Code.GDBuffArrow1Objects2= [];
gdjs.Level1Code.GDBuffArrow1Objects3= [];
gdjs.Level1Code.GDBuffArrow1Objects4= [];
gdjs.Level1Code.GDMouseObjects1= [];
gdjs.Level1Code.GDMouseObjects2= [];
gdjs.Level1Code.GDMouseObjects3= [];
gdjs.Level1Code.GDMouseObjects4= [];
gdjs.Level1Code.GDMouse2Objects1= [];
gdjs.Level1Code.GDMouse2Objects2= [];
gdjs.Level1Code.GDMouse2Objects3= [];
gdjs.Level1Code.GDMouse2Objects4= [];
gdjs.Level1Code.GDMouse3Objects1= [];
gdjs.Level1Code.GDMouse3Objects2= [];
gdjs.Level1Code.GDMouse3Objects3= [];
gdjs.Level1Code.GDMouse3Objects4= [];
gdjs.Level1Code.GDSignObjects1= [];
gdjs.Level1Code.GDSignObjects2= [];
gdjs.Level1Code.GDSignObjects3= [];
gdjs.Level1Code.GDSignObjects4= [];
gdjs.Level1Code.GDChangeObjects1= [];
gdjs.Level1Code.GDChangeObjects2= [];
gdjs.Level1Code.GDChangeObjects3= [];
gdjs.Level1Code.GDChangeObjects4= [];
gdjs.Level1Code.GDChange3Objects1= [];
gdjs.Level1Code.GDChange3Objects2= [];
gdjs.Level1Code.GDChange3Objects3= [];
gdjs.Level1Code.GDChange3Objects4= [];
gdjs.Level1Code.GDChange2Objects1= [];
gdjs.Level1Code.GDChange2Objects2= [];
gdjs.Level1Code.GDChange2Objects3= [];
gdjs.Level1Code.GDChange2Objects4= [];
gdjs.Level1Code.GDDummyObjects1= [];
gdjs.Level1Code.GDDummyObjects2= [];
gdjs.Level1Code.GDDummyObjects3= [];
gdjs.Level1Code.GDDummyObjects4= [];
gdjs.Level1Code.GDinvisObjects1= [];
gdjs.Level1Code.GDinvisObjects2= [];
gdjs.Level1Code.GDinvisObjects3= [];
gdjs.Level1Code.GDinvisObjects4= [];
gdjs.Level1Code.GDground2Objects1= [];
gdjs.Level1Code.GDground2Objects2= [];
gdjs.Level1Code.GDground2Objects3= [];
gdjs.Level1Code.GDground2Objects4= [];


gdjs.Level1Code.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Level1Code.GDPlayerObjects1);
gdjs.copyArray(runtimeScene.getObjects("UmbrellaOpen"), gdjs.Level1Code.GDUmbrellaOpenObjects1);
gdjs.copyArray(runtimeScene.getObjects("invis"), gdjs.Level1Code.GDinvisObjects1);
{gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "gentle-rainfall-16960.mp3", 1, true, 40, 2);
}{for(var i = 0, len = gdjs.Level1Code.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.Level1Code.GDPlayerObjects1[i].setZOrder(100);
}
}{runtimeScene.getGame().getVariables().getFromIndex(0).setNumber(30);
}{for(var i = 0, len = gdjs.Level1Code.GDUmbrellaOpenObjects1.length ;i < len;++i) {
    gdjs.Level1Code.GDUmbrellaOpenObjects1[i].returnVariable(gdjs.Level1Code.GDUmbrellaOpenObjects1[i].getVariables().get("Weapon_Type")).setNumber(0);
}
}{runtimeScene.getGame().getVariables().getFromIndex(1).setNumber(0);
}{gdjs.evtTools.sound.playSound(runtimeScene, "Ambience.MP3", true, 0, 1);
}{for(var i = 0, len = gdjs.Level1Code.GDinvisObjects1.length ;i < len;++i) {
    gdjs.Level1Code.GDinvisObjects1[i].setOpacity(1);
}
}}

}


};gdjs.Level1Code.mapOfGDgdjs_9546Level1Code_9546GDBulletObjects2Objects = Hashtable.newFrom({"Bullet": gdjs.Level1Code.GDBulletObjects2});
gdjs.Level1Code.mapOfGDgdjs_9546Level1Code_9546GDBulletObjects2Objects = Hashtable.newFrom({"Bullet": gdjs.Level1Code.GDBulletObjects2});
gdjs.Level1Code.mapOfGDgdjs_9546Level1Code_9546GDPlayerObjects2Objects = Hashtable.newFrom({"Player": gdjs.Level1Code.GDPlayerObjects2});
gdjs.Level1Code.mapOfGDgdjs_9546Level1Code_9546GDUmbrellaClosedObjects1Objects = Hashtable.newFrom({"UmbrellaClosed": gdjs.Level1Code.GDUmbrellaClosedObjects1});
gdjs.Level1Code.mapOfGDgdjs_9546Level1Code_9546GDDummyObjects1Objects = Hashtable.newFrom({"Dummy": gdjs.Level1Code.GDDummyObjects1});
gdjs.Level1Code.asyncCallback21446740 = function (runtimeScene, asyncObjectsList) {
}
gdjs.Level1Code.eventsList1 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs.Level1Code.asyncCallback21446740(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.Level1Code.eventsList2 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("UmbrellaClosed"), gdjs.Level1Code.GDUmbrellaClosedObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_1 = false;
isConditionTrue_1 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
if (isConditionTrue_1) {
isConditionTrue_1 = false;
for (var i = 0, k = 0, l = gdjs.Level1Code.GDUmbrellaClosedObjects2.length;i<l;++i) {
    if ( gdjs.Level1Code.GDUmbrellaClosedObjects2[i].isVisible() ) {
        isConditionTrue_1 = true;
        gdjs.Level1Code.GDUmbrellaClosedObjects2[k] = gdjs.Level1Code.GDUmbrellaClosedObjects2[i];
        ++k;
    }
}
gdjs.Level1Code.GDUmbrellaClosedObjects2.length = k;
if (isConditionTrue_1) {
isConditionTrue_1 = false;
for (var i = 0, k = 0, l = gdjs.Level1Code.GDUmbrellaClosedObjects2.length;i<l;++i) {
    if ( !(gdjs.Level1Code.GDUmbrellaClosedObjects2[i].getBehavior("FireBullet").IsOutOfAmmo((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))) ) {
        isConditionTrue_1 = true;
        gdjs.Level1Code.GDUmbrellaClosedObjects2[k] = gdjs.Level1Code.GDUmbrellaClosedObjects2[i];
        ++k;
    }
}
gdjs.Level1Code.GDUmbrellaClosedObjects2.length = k;
}
}
isConditionTrue_0 = isConditionTrue_1;
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(21443676);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.Level1Code.GDUmbrellaClosedObjects2 */
gdjs.Level1Code.GDBulletObjects2.length = 0;

{gdjs.evtTools.sound.playSound(runtimeScene, "shot.MP3", false, 80, 1);
}{gdjs.evtsExt__CameraShake__SetDefaultTranslationAmplitude.func(runtimeScene, 1, 1, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}{gdjs.evtsExt__CameraShake__ShakeCamera.func(runtimeScene, 0.5, 0.2, 0.1, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}{for(var i = 0, len = gdjs.Level1Code.GDUmbrellaClosedObjects2.length ;i < len;++i) {
    gdjs.Level1Code.GDUmbrellaClosedObjects2[i].getBehavior("FireBullet").Fire((gdjs.Level1Code.GDUmbrellaClosedObjects2[i].getPointX("Bullet")), (gdjs.Level1Code.GDUmbrellaClosedObjects2[i].getPointY("Bullet")), gdjs.Level1Code.mapOfGDgdjs_9546Level1Code_9546GDBulletObjects2Objects, (gdjs.Level1Code.GDUmbrellaClosedObjects2[i].getAngle()), 2000, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Bullet"), gdjs.Level1Code.GDBulletObjects2);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Level1Code.GDPlayerObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.distanceTest(gdjs.Level1Code.mapOfGDgdjs_9546Level1Code_9546GDBulletObjects2Objects, gdjs.Level1Code.mapOfGDgdjs_9546Level1Code_9546GDPlayerObjects2Objects, 700, true);
if (isConditionTrue_0) {
/* Reuse gdjs.Level1Code.GDBulletObjects2 */
{for(var i = 0, len = gdjs.Level1Code.GDBulletObjects2.length ;i < len;++i) {
    gdjs.Level1Code.GDBulletObjects2[i].deleteFromScene(runtimeScene);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Dummy"), gdjs.Level1Code.GDDummyObjects1);
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Level1Code.GDPlayerObjects1);
gdjs.copyArray(runtimeScene.getObjects("UmbrellaClosed"), gdjs.Level1Code.GDUmbrellaClosedObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Level1Code.GDPlayerObjects1.length;i<l;++i) {
    if ( gdjs.Level1Code.GDPlayerObjects1[i].getBehavior("HorizontalDash").IsDashing((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.Level1Code.GDPlayerObjects1[k] = gdjs.Level1Code.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.Level1Code.GDPlayerObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Level1Code.mapOfGDgdjs_9546Level1Code_9546GDUmbrellaClosedObjects1Objects, gdjs.Level1Code.mapOfGDgdjs_9546Level1Code_9546GDDummyObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(21446252);
}
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.Level1Code.GDDummyObjects1 */
{for(var i = 0, len = gdjs.Level1Code.GDDummyObjects1.length ;i < len;++i) {
    gdjs.Level1Code.GDDummyObjects1[i].getBehavior("Health").Hit(2, false, false, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}
{ //Subevents
gdjs.Level1Code.eventsList1(runtimeScene);} //End of subevents
}

}


};gdjs.Level1Code.eventsList3 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Level1Code.GDPlayerObjects2);
gdjs.copyArray(runtimeScene.getObjects("UmbrellaOpen"), gdjs.Level1Code.GDUmbrellaOpenObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_1 = false;
for (var i = 0, k = 0, l = gdjs.Level1Code.GDUmbrellaOpenObjects2.length;i<l;++i) {
    if ( gdjs.Level1Code.GDUmbrellaOpenObjects2[i].isVisible() ) {
        isConditionTrue_1 = true;
        gdjs.Level1Code.GDUmbrellaOpenObjects2[k] = gdjs.Level1Code.GDUmbrellaOpenObjects2[i];
        ++k;
    }
}
gdjs.Level1Code.GDUmbrellaOpenObjects2.length = k;
if (isConditionTrue_1) {
isConditionTrue_1 = false;
for (var i = 0, k = 0, l = gdjs.Level1Code.GDPlayerObjects2.length;i<l;++i) {
    if ( !(gdjs.Level1Code.GDPlayerObjects2[i].getBehavior("PlatformerObject").isOnFloor()) ) {
        isConditionTrue_1 = true;
        gdjs.Level1Code.GDPlayerObjects2[k] = gdjs.Level1Code.GDPlayerObjects2[i];
        ++k;
    }
}
gdjs.Level1Code.GDPlayerObjects2.length = k;
if (isConditionTrue_1) {
isConditionTrue_1 = false;
for (var i = 0, k = 0, l = gdjs.Level1Code.GDPlayerObjects2.length;i<l;++i) {
    if ( gdjs.Level1Code.GDPlayerObjects2[i].getBehavior("PlatformerObject").isFalling() ) {
        isConditionTrue_1 = true;
        gdjs.Level1Code.GDPlayerObjects2[k] = gdjs.Level1Code.GDPlayerObjects2[i];
        ++k;
    }
}
gdjs.Level1Code.GDPlayerObjects2.length = k;
}
}
isConditionTrue_0 = isConditionTrue_1;
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(21447604);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.Level1Code.GDPlayerObjects2 */
{for(var i = 0, len = gdjs.Level1Code.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.Level1Code.GDPlayerObjects2[i].getBehavior("PlatformerObject").setGravity(100);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Level1Code.GDPlayerObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Level1Code.GDPlayerObjects1.length;i<l;++i) {
    if ( gdjs.Level1Code.GDPlayerObjects1[i].getBehavior("PlatformerObject").isOnFloor() ) {
        isConditionTrue_0 = true;
        gdjs.Level1Code.GDPlayerObjects1[k] = gdjs.Level1Code.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.Level1Code.GDPlayerObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Level1Code.GDPlayerObjects1 */
{for(var i = 0, len = gdjs.Level1Code.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.Level1Code.GDPlayerObjects1[i].getBehavior("PlatformerObject").setGravity(980);
}
}}

}


};gdjs.Level1Code.eventsList4 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isScrollingDown(runtimeScene);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(21450220);
}
}
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(1).sub(1);
}{gdjs.evtTools.sound.playSound(runtimeScene, "Change_Weapon.MP3", false, 20, 2);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isScrollingUp(runtimeScene);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(21451244);
}
}
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(1).add(1);
}{gdjs.evtTools.sound.playSound(runtimeScene, "Change_Weapon.MP3", false, 10, 2);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1)) < 0;
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(1).setNumber(1);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1)) > 1;
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(1).setNumber(0);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1)) == 0;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Level1Code.GDPlayerObjects2);
gdjs.copyArray(runtimeScene.getObjects("UmbrellaClosed"), gdjs.Level1Code.GDUmbrellaClosedObjects2);
gdjs.copyArray(runtimeScene.getObjects("UmbrellaOpen"), gdjs.Level1Code.GDUmbrellaOpenObjects2);
{for(var i = 0, len = gdjs.Level1Code.GDUmbrellaClosedObjects2.length ;i < len;++i) {
    gdjs.Level1Code.GDUmbrellaClosedObjects2[i].hide();
}
}{for(var i = 0, len = gdjs.Level1Code.GDUmbrellaOpenObjects2.length ;i < len;++i) {
    gdjs.Level1Code.GDUmbrellaOpenObjects2[i].hide(false);
}
}{for(var i = 0, len = gdjs.Level1Code.GDUmbrellaOpenObjects2.length ;i < len;++i) {
    gdjs.Level1Code.GDUmbrellaOpenObjects2[i].setPosition((( gdjs.Level1Code.GDPlayerObjects2.length === 0 ) ? 0 :gdjs.Level1Code.GDPlayerObjects2[0].getPointX("Weapon")),(( gdjs.Level1Code.GDPlayerObjects2.length === 0 ) ? 0 :gdjs.Level1Code.GDPlayerObjects2[0].getPointY("Weapon")));
}
}{for(var i = 0, len = gdjs.Level1Code.GDUmbrellaOpenObjects2.length ;i < len;++i) {
    gdjs.Level1Code.GDUmbrellaOpenObjects2[i].rotateTowardPosition(gdjs.evtTools.input.getCursorX(runtimeScene, "", 0), gdjs.evtTools.input.getCursorY(runtimeScene, "", 0), 0, runtimeScene);
}
}{for(var i = 0, len = gdjs.Level1Code.GDUmbrellaOpenObjects2.length ;i < len;++i) {
    gdjs.Level1Code.GDUmbrellaOpenObjects2[i].setAnimation(0);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(1)) == 1;
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Level1Code.GDPlayerObjects1);
gdjs.copyArray(runtimeScene.getObjects("UmbrellaClosed"), gdjs.Level1Code.GDUmbrellaClosedObjects1);
gdjs.copyArray(runtimeScene.getObjects("UmbrellaOpen"), gdjs.Level1Code.GDUmbrellaOpenObjects1);
{for(var i = 0, len = gdjs.Level1Code.GDUmbrellaOpenObjects1.length ;i < len;++i) {
    gdjs.Level1Code.GDUmbrellaOpenObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.Level1Code.GDUmbrellaClosedObjects1.length ;i < len;++i) {
    gdjs.Level1Code.GDUmbrellaClosedObjects1[i].hide(false);
}
}{for(var i = 0, len = gdjs.Level1Code.GDUmbrellaClosedObjects1.length ;i < len;++i) {
    gdjs.Level1Code.GDUmbrellaClosedObjects1[i].setPosition((( gdjs.Level1Code.GDPlayerObjects1.length === 0 ) ? 0 :gdjs.Level1Code.GDPlayerObjects1[0].getPointX("Weapon")),(( gdjs.Level1Code.GDPlayerObjects1.length === 0 ) ? 0 :gdjs.Level1Code.GDPlayerObjects1[0].getPointY("Weapon")));
}
}{for(var i = 0, len = gdjs.Level1Code.GDUmbrellaClosedObjects1.length ;i < len;++i) {
    gdjs.Level1Code.GDUmbrellaClosedObjects1[i].rotateTowardPosition(gdjs.evtTools.input.getCursorX(runtimeScene, "", 0), gdjs.evtTools.input.getCursorY(runtimeScene, "", 0), 0, runtimeScene);
}
}{for(var i = 0, len = gdjs.Level1Code.GDUmbrellaClosedObjects1.length ;i < len;++i) {
    gdjs.Level1Code.GDUmbrellaClosedObjects1[i].setAnimation(1);
}
}}

}


};gdjs.Level1Code.eventsList5 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "a");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Level1Code.GDPlayerObjects2);
{for(var i = 0, len = gdjs.Level1Code.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.Level1Code.GDPlayerObjects2[i].getBehavior("PlatformerObject").simulateControl("Left");
}
}{for(var i = 0, len = gdjs.Level1Code.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.Level1Code.GDPlayerObjects2[i].flipX(true);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "d");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Level1Code.GDPlayerObjects2);
{for(var i = 0, len = gdjs.Level1Code.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.Level1Code.GDPlayerObjects2[i].getBehavior("PlatformerObject").simulateControl("Right");
}
}{for(var i = 0, len = gdjs.Level1Code.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.Level1Code.GDPlayerObjects2[i].flipX(false);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Level1Code.GDPlayerObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "w");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Level1Code.GDPlayerObjects2.length;i<l;++i) {
    if ( gdjs.Level1Code.GDPlayerObjects2[i].getBehavior("PlatformerObject").isOnFloor() ) {
        isConditionTrue_0 = true;
        gdjs.Level1Code.GDPlayerObjects2[k] = gdjs.Level1Code.GDPlayerObjects2[i];
        ++k;
    }
}
gdjs.Level1Code.GDPlayerObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(21458388);
}
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.Level1Code.GDPlayerObjects2 */
{for(var i = 0, len = gdjs.Level1Code.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.Level1Code.GDPlayerObjects2[i].getBehavior("PlatformerObject").simulateControl("Jump");
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "swing-whoosh-110410.mp3", false, 40, 1);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Right");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Level1Code.GDPlayerObjects1);
{for(var i = 0, len = gdjs.Level1Code.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.Level1Code.GDPlayerObjects1[i].getBehavior("HorizontalDash").SimulateDashKey((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}}

}


};gdjs.Level1Code.eventsList6 = function(runtimeScene) {

};gdjs.Level1Code.eventsList7 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Level1Code.GDPlayerObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Level1Code.GDPlayerObjects2.length;i<l;++i) {
    if ( gdjs.Level1Code.GDPlayerObjects2[i].getBehavior("PlatformerObject").isMovingEvenALittle() ) {
        isConditionTrue_0 = true;
        gdjs.Level1Code.GDPlayerObjects2[k] = gdjs.Level1Code.GDPlayerObjects2[i];
        ++k;
    }
}
gdjs.Level1Code.GDPlayerObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Level1Code.GDPlayerObjects2 */
{for(var i = 0, len = gdjs.Level1Code.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.Level1Code.GDPlayerObjects2[i].setAnimation(3);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Level1Code.GDPlayerObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Level1Code.GDPlayerObjects2.length;i<l;++i) {
    if ( gdjs.Level1Code.GDPlayerObjects2[i].getBehavior("PlatformerObject").isJumping() ) {
        isConditionTrue_0 = true;
        gdjs.Level1Code.GDPlayerObjects2[k] = gdjs.Level1Code.GDPlayerObjects2[i];
        ++k;
    }
}
gdjs.Level1Code.GDPlayerObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Level1Code.GDPlayerObjects2 */
{for(var i = 0, len = gdjs.Level1Code.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.Level1Code.GDPlayerObjects2[i].setAnimation(1);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Level1Code.GDPlayerObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Level1Code.GDPlayerObjects2.length;i<l;++i) {
    if ( gdjs.Level1Code.GDPlayerObjects2[i].getBehavior("PlatformerObject").isFalling() ) {
        isConditionTrue_0 = true;
        gdjs.Level1Code.GDPlayerObjects2[k] = gdjs.Level1Code.GDPlayerObjects2[i];
        ++k;
    }
}
gdjs.Level1Code.GDPlayerObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Level1Code.GDPlayerObjects2 */
{for(var i = 0, len = gdjs.Level1Code.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.Level1Code.GDPlayerObjects2[i].setAnimation(2);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Level1Code.GDPlayerObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Level1Code.GDPlayerObjects2.length;i<l;++i) {
    if ( !(gdjs.Level1Code.GDPlayerObjects2[i].getBehavior("PlatformerObject").isMovingEvenALittle()) ) {
        isConditionTrue_0 = true;
        gdjs.Level1Code.GDPlayerObjects2[k] = gdjs.Level1Code.GDPlayerObjects2[i];
        ++k;
    }
}
gdjs.Level1Code.GDPlayerObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Level1Code.GDPlayerObjects2.length;i<l;++i) {
    if ( !(gdjs.Level1Code.GDPlayerObjects2[i].getBehavior("PlatformerObject").isJumping()) ) {
        isConditionTrue_0 = true;
        gdjs.Level1Code.GDPlayerObjects2[k] = gdjs.Level1Code.GDPlayerObjects2[i];
        ++k;
    }
}
gdjs.Level1Code.GDPlayerObjects2.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Level1Code.GDPlayerObjects2.length;i<l;++i) {
    if ( gdjs.Level1Code.GDPlayerObjects2[i].getBehavior("PlatformerObject").isOnFloor() ) {
        isConditionTrue_0 = true;
        gdjs.Level1Code.GDPlayerObjects2[k] = gdjs.Level1Code.GDPlayerObjects2[i];
        ++k;
    }
}
gdjs.Level1Code.GDPlayerObjects2.length = k;
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.Level1Code.GDPlayerObjects2 */
{for(var i = 0, len = gdjs.Level1Code.GDPlayerObjects2.length ;i < len;++i) {
    gdjs.Level1Code.GDPlayerObjects2[i].setAnimation(0);
}
}}

}


{


let isConditionTrue_0 = false;
{
}

}


};gdjs.Level1Code.eventsList8 = function(runtimeScene) {

};gdjs.Level1Code.mapOfGDgdjs_9546Level1Code_9546GDSlimeObjects2Objects = Hashtable.newFrom({"Slime": gdjs.Level1Code.GDSlimeObjects2});
gdjs.Level1Code.mapOfGDgdjs_9546Level1Code_9546GDPlayerObjects2Objects = Hashtable.newFrom({"Player": gdjs.Level1Code.GDPlayerObjects2});
gdjs.Level1Code.eventsList9 = function(runtimeScene) {

{

gdjs.copyArray(gdjs.Level1Code.GDPlayerObjects2, gdjs.Level1Code.GDPlayerObjects3);

gdjs.copyArray(gdjs.Level1Code.GDSlimeObjects2, gdjs.Level1Code.GDSlimeObjects3);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Level1Code.GDSlimeObjects3.length;i<l;++i) {
    if ( gdjs.Level1Code.GDSlimeObjects3[i].getX() >= (( gdjs.Level1Code.GDPlayerObjects3.length === 0 ) ? 0 :gdjs.Level1Code.GDPlayerObjects3[0].getPointX("")) ) {
        isConditionTrue_0 = true;
        gdjs.Level1Code.GDSlimeObjects3[k] = gdjs.Level1Code.GDSlimeObjects3[i];
        ++k;
    }
}
gdjs.Level1Code.GDSlimeObjects3.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Level1Code.GDSlimeObjects3 */
{for(var i = 0, len = gdjs.Level1Code.GDSlimeObjects3.length ;i < len;++i) {
    gdjs.Level1Code.GDSlimeObjects3[i].setX(gdjs.Level1Code.GDSlimeObjects3[i].getX() - (2));
}
}{for(var i = 0, len = gdjs.Level1Code.GDSlimeObjects3.length ;i < len;++i) {
    gdjs.Level1Code.GDSlimeObjects3[i].flipX(false);
}
}}

}


{

/* Reuse gdjs.Level1Code.GDPlayerObjects2 */
/* Reuse gdjs.Level1Code.GDSlimeObjects2 */

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Level1Code.GDSlimeObjects2.length;i<l;++i) {
    if ( gdjs.Level1Code.GDSlimeObjects2[i].getX() <= (( gdjs.Level1Code.GDPlayerObjects2.length === 0 ) ? 0 :gdjs.Level1Code.GDPlayerObjects2[0].getPointX("")) ) {
        isConditionTrue_0 = true;
        gdjs.Level1Code.GDSlimeObjects2[k] = gdjs.Level1Code.GDSlimeObjects2[i];
        ++k;
    }
}
gdjs.Level1Code.GDSlimeObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Level1Code.GDSlimeObjects2 */
{for(var i = 0, len = gdjs.Level1Code.GDSlimeObjects2.length ;i < len;++i) {
    gdjs.Level1Code.GDSlimeObjects2[i].setX(gdjs.Level1Code.GDSlimeObjects2[i].getX() + (2));
}
}{for(var i = 0, len = gdjs.Level1Code.GDSlimeObjects2.length ;i < len;++i) {
    gdjs.Level1Code.GDSlimeObjects2[i].flipX(true);
}
}}

}


};gdjs.Level1Code.mapOfGDgdjs_9546Level1Code_9546GDSlimeObjects1Objects = Hashtable.newFrom({"Slime": gdjs.Level1Code.GDSlimeObjects1});
gdjs.Level1Code.mapOfGDgdjs_9546Level1Code_9546GDGroundObjects1Objects = Hashtable.newFrom({"Ground": gdjs.Level1Code.GDGroundObjects1});
gdjs.Level1Code.eventsList10 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Level1Code.GDPlayerObjects2);
gdjs.copyArray(runtimeScene.getObjects("Slime"), gdjs.Level1Code.GDSlimeObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.distanceTest(gdjs.Level1Code.mapOfGDgdjs_9546Level1Code_9546GDSlimeObjects2Objects, gdjs.Level1Code.mapOfGDgdjs_9546Level1Code_9546GDPlayerObjects2Objects, 700, false);
if (isConditionTrue_0) {

{ //Subevents
gdjs.Level1Code.eventsList9(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Ground"), gdjs.Level1Code.GDGroundObjects1);
gdjs.copyArray(runtimeScene.getObjects("Slime"), gdjs.Level1Code.GDSlimeObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Level1Code.mapOfGDgdjs_9546Level1Code_9546GDSlimeObjects1Objects, gdjs.Level1Code.mapOfGDgdjs_9546Level1Code_9546GDGroundObjects1Objects, true, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.Level1Code.GDSlimeObjects1 */
{for(var i = 0, len = gdjs.Level1Code.GDSlimeObjects1.length ;i < len;++i) {
    gdjs.Level1Code.GDSlimeObjects1[i].setY(gdjs.Level1Code.GDSlimeObjects1[i].getY() + (2));
}
}}

}


};gdjs.Level1Code.eventsList11 = function(runtimeScene) {

{


gdjs.Level1Code.eventsList10(runtimeScene);
}


};gdjs.Level1Code.mapOfGDgdjs_9546Level1Code_9546GDSpikesObjects1Objects = Hashtable.newFrom({"Spikes": gdjs.Level1Code.GDSpikesObjects1});
gdjs.Level1Code.mapOfGDgdjs_9546Level1Code_9546GDPlayerObjects1Objects = Hashtable.newFrom({"Player": gdjs.Level1Code.GDPlayerObjects1});
gdjs.Level1Code.eventsList12 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Level1Code.GDPlayerObjects1);
gdjs.copyArray(runtimeScene.getObjects("Spikes"), gdjs.Level1Code.GDSpikesObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Level1Code.mapOfGDgdjs_9546Level1Code_9546GDSpikesObjects1Objects, gdjs.Level1Code.mapOfGDgdjs_9546Level1Code_9546GDPlayerObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(0).setNumber(0);
}}

}


};gdjs.Level1Code.mapOfGDgdjs_9546Level1Code_9546GDBulletObjects1Objects = Hashtable.newFrom({"Bullet": gdjs.Level1Code.GDBulletObjects1});
gdjs.Level1Code.mapOfGDgdjs_9546Level1Code_9546GDDummyObjects1Objects = Hashtable.newFrom({"Dummy": gdjs.Level1Code.GDDummyObjects1});
gdjs.Level1Code.mapOfGDgdjs_9546Level1Code_9546GDBulletObjects1Objects = Hashtable.newFrom({"Bullet": gdjs.Level1Code.GDBulletObjects1});
gdjs.Level1Code.mapOfGDgdjs_9546Level1Code_9546GDGroundObjects1Objects = Hashtable.newFrom({"Ground": gdjs.Level1Code.GDGroundObjects1});
gdjs.Level1Code.mapOfGDgdjs_9546Level1Code_9546GDPlayerObjects1Objects = Hashtable.newFrom({"Player": gdjs.Level1Code.GDPlayerObjects1});
gdjs.Level1Code.mapOfGDgdjs_9546Level1Code_9546GDinvisObjects1Objects = Hashtable.newFrom({"invis": gdjs.Level1Code.GDinvisObjects1});
gdjs.Level1Code.eventsList13 = function(runtimeScene) {

{


gdjs.Level1Code.eventsList0(runtimeScene);
}


{


gdjs.Level1Code.eventsList2(runtimeScene);
}


{


gdjs.Level1Code.eventsList3(runtimeScene);
}


{


gdjs.Level1Code.eventsList4(runtimeScene);
}


{


gdjs.Level1Code.eventsList5(runtimeScene);
}


{


gdjs.Level1Code.eventsList6(runtimeScene);
}


{


gdjs.Level1Code.eventsList7(runtimeScene);
}


{


gdjs.Level1Code.eventsList8(runtimeScene);
}


{


gdjs.Level1Code.eventsList11(runtimeScene);
}


{


gdjs.Level1Code.eventsList12(runtimeScene);
}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getGame().getVariables().getFromIndex(0)) == 0;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.pushScene(runtimeScene, "Level1");
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Bullet"), gdjs.Level1Code.GDBulletObjects1);
gdjs.copyArray(runtimeScene.getObjects("Dummy"), gdjs.Level1Code.GDDummyObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Level1Code.mapOfGDgdjs_9546Level1Code_9546GDBulletObjects1Objects, gdjs.Level1Code.mapOfGDgdjs_9546Level1Code_9546GDDummyObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.Level1Code.GDBulletObjects1 */
/* Reuse gdjs.Level1Code.GDDummyObjects1 */
{for(var i = 0, len = gdjs.Level1Code.GDDummyObjects1.length ;i < len;++i) {
    gdjs.Level1Code.GDDummyObjects1[i].getBehavior("Health").Hit(3, false, false, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
}{for(var i = 0, len = gdjs.Level1Code.GDBulletObjects1.length ;i < len;++i) {
    gdjs.Level1Code.GDBulletObjects1[i].deleteFromScene(runtimeScene);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Dummy"), gdjs.Level1Code.GDDummyObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Level1Code.GDDummyObjects1.length;i<l;++i) {
    if ( gdjs.Level1Code.GDDummyObjects1[i].getBehavior("Health").IsDead((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.Level1Code.GDDummyObjects1[k] = gdjs.Level1Code.GDDummyObjects1[i];
        ++k;
    }
}
gdjs.Level1Code.GDDummyObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Level1Code.GDDummyObjects1 */
{for(var i = 0, len = gdjs.Level1Code.GDDummyObjects1.length ;i < len;++i) {
    gdjs.Level1Code.GDDummyObjects1[i].deleteFromScene(runtimeScene);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Bullet"), gdjs.Level1Code.GDBulletObjects1);
gdjs.copyArray(runtimeScene.getObjects("Ground"), gdjs.Level1Code.GDGroundObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Level1Code.mapOfGDgdjs_9546Level1Code_9546GDBulletObjects1Objects, gdjs.Level1Code.mapOfGDgdjs_9546Level1Code_9546GDGroundObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.Level1Code.GDBulletObjects1 */
{for(var i = 0, len = gdjs.Level1Code.GDBulletObjects1.length ;i < len;++i) {
    gdjs.Level1Code.GDBulletObjects1[i].deleteFromScene(runtimeScene);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Player"), gdjs.Level1Code.GDPlayerObjects1);
gdjs.copyArray(runtimeScene.getObjects("invis"), gdjs.Level1Code.GDinvisObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Level1Code.mapOfGDgdjs_9546Level1Code_9546GDPlayerObjects1Objects, gdjs.Level1Code.mapOfGDgdjs_9546Level1Code_9546GDinvisObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Level2", false);
}}

}


{


let isConditionTrue_0 = false;
{
}

}


};

gdjs.Level1Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Level1Code.GDPlayerObjects1.length = 0;
gdjs.Level1Code.GDPlayerObjects2.length = 0;
gdjs.Level1Code.GDPlayerObjects3.length = 0;
gdjs.Level1Code.GDPlayerObjects4.length = 0;
gdjs.Level1Code.GDonewayObjects1.length = 0;
gdjs.Level1Code.GDonewayObjects2.length = 0;
gdjs.Level1Code.GDonewayObjects3.length = 0;
gdjs.Level1Code.GDonewayObjects4.length = 0;
gdjs.Level1Code.GDStoneObjects1.length = 0;
gdjs.Level1Code.GDStoneObjects2.length = 0;
gdjs.Level1Code.GDStoneObjects3.length = 0;
gdjs.Level1Code.GDStoneObjects4.length = 0;
gdjs.Level1Code.GDGroundObjects1.length = 0;
gdjs.Level1Code.GDGroundObjects2.length = 0;
gdjs.Level1Code.GDGroundObjects3.length = 0;
gdjs.Level1Code.GDGroundObjects4.length = 0;
gdjs.Level1Code.GDPOHONObjects1.length = 0;
gdjs.Level1Code.GDPOHONObjects2.length = 0;
gdjs.Level1Code.GDPOHONObjects3.length = 0;
gdjs.Level1Code.GDPOHONObjects4.length = 0;
gdjs.Level1Code.GDNewSpriteObjects1.length = 0;
gdjs.Level1Code.GDNewSpriteObjects2.length = 0;
gdjs.Level1Code.GDNewSpriteObjects3.length = 0;
gdjs.Level1Code.GDNewSpriteObjects4.length = 0;
gdjs.Level1Code.GDNewSprite2Objects1.length = 0;
gdjs.Level1Code.GDNewSprite2Objects2.length = 0;
gdjs.Level1Code.GDNewSprite2Objects3.length = 0;
gdjs.Level1Code.GDNewSprite2Objects4.length = 0;
gdjs.Level1Code.GDSlimeObjects1.length = 0;
gdjs.Level1Code.GDSlimeObjects2.length = 0;
gdjs.Level1Code.GDSlimeObjects3.length = 0;
gdjs.Level1Code.GDSlimeObjects4.length = 0;
gdjs.Level1Code.GDBulletObjects1.length = 0;
gdjs.Level1Code.GDBulletObjects2.length = 0;
gdjs.Level1Code.GDBulletObjects3.length = 0;
gdjs.Level1Code.GDBulletObjects4.length = 0;
gdjs.Level1Code.GDUmbrellaOpenObjects1.length = 0;
gdjs.Level1Code.GDUmbrellaOpenObjects2.length = 0;
gdjs.Level1Code.GDUmbrellaOpenObjects3.length = 0;
gdjs.Level1Code.GDUmbrellaOpenObjects4.length = 0;
gdjs.Level1Code.GDUmbrellaClosedObjects1.length = 0;
gdjs.Level1Code.GDUmbrellaClosedObjects2.length = 0;
gdjs.Level1Code.GDUmbrellaClosedObjects3.length = 0;
gdjs.Level1Code.GDUmbrellaClosedObjects4.length = 0;
gdjs.Level1Code.GDRainObjects1.length = 0;
gdjs.Level1Code.GDRainObjects2.length = 0;
gdjs.Level1Code.GDRainObjects3.length = 0;
gdjs.Level1Code.GDRainObjects4.length = 0;
gdjs.Level1Code.GDMeleeObjects1.length = 0;
gdjs.Level1Code.GDMeleeObjects2.length = 0;
gdjs.Level1Code.GDMeleeObjects3.length = 0;
gdjs.Level1Code.GDMeleeObjects4.length = 0;
gdjs.Level1Code.GDSpikesObjects1.length = 0;
gdjs.Level1Code.GDSpikesObjects2.length = 0;
gdjs.Level1Code.GDSpikesObjects3.length = 0;
gdjs.Level1Code.GDSpikesObjects4.length = 0;
gdjs.Level1Code.GDAObjects1.length = 0;
gdjs.Level1Code.GDAObjects2.length = 0;
gdjs.Level1Code.GDAObjects3.length = 0;
gdjs.Level1Code.GDAObjects4.length = 0;
gdjs.Level1Code.GDDObjects1.length = 0;
gdjs.Level1Code.GDDObjects2.length = 0;
gdjs.Level1Code.GDDObjects3.length = 0;
gdjs.Level1Code.GDDObjects4.length = 0;
gdjs.Level1Code.GDWObjects1.length = 0;
gdjs.Level1Code.GDWObjects2.length = 0;
gdjs.Level1Code.GDWObjects3.length = 0;
gdjs.Level1Code.GDWObjects4.length = 0;
gdjs.Level1Code.GDBuffArrow1Objects1.length = 0;
gdjs.Level1Code.GDBuffArrow1Objects2.length = 0;
gdjs.Level1Code.GDBuffArrow1Objects3.length = 0;
gdjs.Level1Code.GDBuffArrow1Objects4.length = 0;
gdjs.Level1Code.GDMouseObjects1.length = 0;
gdjs.Level1Code.GDMouseObjects2.length = 0;
gdjs.Level1Code.GDMouseObjects3.length = 0;
gdjs.Level1Code.GDMouseObjects4.length = 0;
gdjs.Level1Code.GDMouse2Objects1.length = 0;
gdjs.Level1Code.GDMouse2Objects2.length = 0;
gdjs.Level1Code.GDMouse2Objects3.length = 0;
gdjs.Level1Code.GDMouse2Objects4.length = 0;
gdjs.Level1Code.GDMouse3Objects1.length = 0;
gdjs.Level1Code.GDMouse3Objects2.length = 0;
gdjs.Level1Code.GDMouse3Objects3.length = 0;
gdjs.Level1Code.GDMouse3Objects4.length = 0;
gdjs.Level1Code.GDSignObjects1.length = 0;
gdjs.Level1Code.GDSignObjects2.length = 0;
gdjs.Level1Code.GDSignObjects3.length = 0;
gdjs.Level1Code.GDSignObjects4.length = 0;
gdjs.Level1Code.GDChangeObjects1.length = 0;
gdjs.Level1Code.GDChangeObjects2.length = 0;
gdjs.Level1Code.GDChangeObjects3.length = 0;
gdjs.Level1Code.GDChangeObjects4.length = 0;
gdjs.Level1Code.GDChange3Objects1.length = 0;
gdjs.Level1Code.GDChange3Objects2.length = 0;
gdjs.Level1Code.GDChange3Objects3.length = 0;
gdjs.Level1Code.GDChange3Objects4.length = 0;
gdjs.Level1Code.GDChange2Objects1.length = 0;
gdjs.Level1Code.GDChange2Objects2.length = 0;
gdjs.Level1Code.GDChange2Objects3.length = 0;
gdjs.Level1Code.GDChange2Objects4.length = 0;
gdjs.Level1Code.GDDummyObjects1.length = 0;
gdjs.Level1Code.GDDummyObjects2.length = 0;
gdjs.Level1Code.GDDummyObjects3.length = 0;
gdjs.Level1Code.GDDummyObjects4.length = 0;
gdjs.Level1Code.GDinvisObjects1.length = 0;
gdjs.Level1Code.GDinvisObjects2.length = 0;
gdjs.Level1Code.GDinvisObjects3.length = 0;
gdjs.Level1Code.GDinvisObjects4.length = 0;
gdjs.Level1Code.GDground2Objects1.length = 0;
gdjs.Level1Code.GDground2Objects2.length = 0;
gdjs.Level1Code.GDground2Objects3.length = 0;
gdjs.Level1Code.GDground2Objects4.length = 0;

gdjs.Level1Code.eventsList13(runtimeScene);

return;

}

gdjs['Level1Code'] = gdjs.Level1Code;
