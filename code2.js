gdjs.OpeningStory4Code = {};
gdjs.OpeningStory4Code.GDNextObjects1= [];
gdjs.OpeningStory4Code.GDNextObjects2= [];
gdjs.OpeningStory4Code.GDNextObjects3= [];
gdjs.OpeningStory4Code.GDOP1Objects1= [];
gdjs.OpeningStory4Code.GDOP1Objects2= [];
gdjs.OpeningStory4Code.GDOP1Objects3= [];
gdjs.OpeningStory4Code.GDbackgroundObjects1= [];
gdjs.OpeningStory4Code.GDbackgroundObjects2= [];
gdjs.OpeningStory4Code.GDbackgroundObjects3= [];
gdjs.OpeningStory4Code.GDOpScene1Objects1= [];
gdjs.OpeningStory4Code.GDOpScene1Objects2= [];
gdjs.OpeningStory4Code.GDOpScene1Objects3= [];
gdjs.OpeningStory4Code.GDOpScene2Objects1= [];
gdjs.OpeningStory4Code.GDOpScene2Objects2= [];
gdjs.OpeningStory4Code.GDOpScene2Objects3= [];
gdjs.OpeningStory4Code.GDOpScene3Objects1= [];
gdjs.OpeningStory4Code.GDOpScene3Objects2= [];
gdjs.OpeningStory4Code.GDOpScene3Objects3= [];
gdjs.OpeningStory4Code.GDNewSpriteObjects1= [];
gdjs.OpeningStory4Code.GDNewSpriteObjects2= [];
gdjs.OpeningStory4Code.GDNewSpriteObjects3= [];
gdjs.OpeningStory4Code.GDNewSprite2Objects1= [];
gdjs.OpeningStory4Code.GDNewSprite2Objects2= [];
gdjs.OpeningStory4Code.GDNewSprite2Objects3= [];


gdjs.OpeningStory4Code.mapOfGDgdjs_9546OpeningStory4Code_9546GDNextObjects3Objects = Hashtable.newFrom({"Next": gdjs.OpeningStory4Code.GDNextObjects3});
gdjs.OpeningStory4Code.asyncCallback21631236 = function (runtimeScene, asyncObjectsList) {
gdjs.OpeningStory4Code.GDNextObjects3.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.OpeningStory4Code.mapOfGDgdjs_9546OpeningStory4Code_9546GDNextObjects3Objects, 987, 653, "");
}}
gdjs.OpeningStory4Code.eventsList0 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(6), (runtimeScene) => (gdjs.OpeningStory4Code.asyncCallback21631236(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.OpeningStory4Code.eventsList1 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("background"), gdjs.OpeningStory4Code.GDbackgroundObjects2);
{for(var i = 0, len = gdjs.OpeningStory4Code.GDbackgroundObjects2.length ;i < len;++i) {
    gdjs.OpeningStory4Code.GDbackgroundObjects2[i].resetTimer("OpTimer1");
}
}
{ //Subevents
gdjs.OpeningStory4Code.eventsList0(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("background"), gdjs.OpeningStory4Code.GDbackgroundObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.OpeningStory4Code.GDbackgroundObjects1.length;i<l;++i) {
    if ( gdjs.OpeningStory4Code.GDbackgroundObjects1[i].getTimerElapsedTimeInSecondsOrNaN("OpTimer1") >= 6 ) {
        isConditionTrue_0 = true;
        gdjs.OpeningStory4Code.GDbackgroundObjects1[k] = gdjs.OpeningStory4Code.GDbackgroundObjects1[i];
        ++k;
    }
}
gdjs.OpeningStory4Code.GDbackgroundObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(21632468);
}
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.OpeningStory4Code.GDbackgroundObjects1 */
{for(var i = 0, len = gdjs.OpeningStory4Code.GDbackgroundObjects1.length ;i < len;++i) {
    gdjs.OpeningStory4Code.GDbackgroundObjects1[i].removeTimer("OpTimer1");
}
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Level1", false);
}}

}


};gdjs.OpeningStory4Code.eventsList2 = function(runtimeScene) {

{


gdjs.OpeningStory4Code.eventsList1(runtimeScene);
}


};

gdjs.OpeningStory4Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.OpeningStory4Code.GDNextObjects1.length = 0;
gdjs.OpeningStory4Code.GDNextObjects2.length = 0;
gdjs.OpeningStory4Code.GDNextObjects3.length = 0;
gdjs.OpeningStory4Code.GDOP1Objects1.length = 0;
gdjs.OpeningStory4Code.GDOP1Objects2.length = 0;
gdjs.OpeningStory4Code.GDOP1Objects3.length = 0;
gdjs.OpeningStory4Code.GDbackgroundObjects1.length = 0;
gdjs.OpeningStory4Code.GDbackgroundObjects2.length = 0;
gdjs.OpeningStory4Code.GDbackgroundObjects3.length = 0;
gdjs.OpeningStory4Code.GDOpScene1Objects1.length = 0;
gdjs.OpeningStory4Code.GDOpScene1Objects2.length = 0;
gdjs.OpeningStory4Code.GDOpScene1Objects3.length = 0;
gdjs.OpeningStory4Code.GDOpScene2Objects1.length = 0;
gdjs.OpeningStory4Code.GDOpScene2Objects2.length = 0;
gdjs.OpeningStory4Code.GDOpScene2Objects3.length = 0;
gdjs.OpeningStory4Code.GDOpScene3Objects1.length = 0;
gdjs.OpeningStory4Code.GDOpScene3Objects2.length = 0;
gdjs.OpeningStory4Code.GDOpScene3Objects3.length = 0;
gdjs.OpeningStory4Code.GDNewSpriteObjects1.length = 0;
gdjs.OpeningStory4Code.GDNewSpriteObjects2.length = 0;
gdjs.OpeningStory4Code.GDNewSpriteObjects3.length = 0;
gdjs.OpeningStory4Code.GDNewSprite2Objects1.length = 0;
gdjs.OpeningStory4Code.GDNewSprite2Objects2.length = 0;
gdjs.OpeningStory4Code.GDNewSprite2Objects3.length = 0;

gdjs.OpeningStory4Code.eventsList2(runtimeScene);

return;

}

gdjs['OpeningStory4Code'] = gdjs.OpeningStory4Code;
