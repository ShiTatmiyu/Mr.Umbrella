gdjs.OpeningStory3Code = {};
gdjs.OpeningStory3Code.GDOP1Objects1= [];
gdjs.OpeningStory3Code.GDOP1Objects2= [];
gdjs.OpeningStory3Code.GDOP1Objects3= [];
gdjs.OpeningStory3Code.GDbackgroundObjects1= [];
gdjs.OpeningStory3Code.GDbackgroundObjects2= [];
gdjs.OpeningStory3Code.GDbackgroundObjects3= [];
gdjs.OpeningStory3Code.GDOpScene1Objects1= [];
gdjs.OpeningStory3Code.GDOpScene1Objects2= [];
gdjs.OpeningStory3Code.GDOpScene1Objects3= [];
gdjs.OpeningStory3Code.GDOpScene2Objects1= [];
gdjs.OpeningStory3Code.GDOpScene2Objects2= [];
gdjs.OpeningStory3Code.GDOpScene2Objects3= [];
gdjs.OpeningStory3Code.GDOpScene3Objects1= [];
gdjs.OpeningStory3Code.GDOpScene3Objects2= [];
gdjs.OpeningStory3Code.GDOpScene3Objects3= [];
gdjs.OpeningStory3Code.GDPhotoObjects1= [];
gdjs.OpeningStory3Code.GDPhotoObjects2= [];
gdjs.OpeningStory3Code.GDPhotoObjects3= [];
gdjs.OpeningStory3Code.GDNextObjects1= [];
gdjs.OpeningStory3Code.GDNextObjects2= [];
gdjs.OpeningStory3Code.GDNextObjects3= [];
gdjs.OpeningStory3Code.GDphotoObjects1= [];
gdjs.OpeningStory3Code.GDphotoObjects2= [];
gdjs.OpeningStory3Code.GDphotoObjects3= [];


gdjs.OpeningStory3Code.mapOfGDgdjs_9546OpeningStory3Code_9546GDNextObjects3Objects = Hashtable.newFrom({"Next": gdjs.OpeningStory3Code.GDNextObjects3});
gdjs.OpeningStory3Code.asyncCallback21642700 = function (runtimeScene, asyncObjectsList) {
gdjs.OpeningStory3Code.GDNextObjects3.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.OpeningStory3Code.mapOfGDgdjs_9546OpeningStory3Code_9546GDNextObjects3Objects, 987, 653, "");
}}
gdjs.OpeningStory3Code.eventsList0 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(6), (runtimeScene) => (gdjs.OpeningStory3Code.asyncCallback21642700(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.OpeningStory3Code.eventsList1 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("background"), gdjs.OpeningStory3Code.GDbackgroundObjects2);
{for(var i = 0, len = gdjs.OpeningStory3Code.GDbackgroundObjects2.length ;i < len;++i) {
    gdjs.OpeningStory3Code.GDbackgroundObjects2[i].resetTimer("OpTimer1");
}
}
{ //Subevents
gdjs.OpeningStory3Code.eventsList0(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("background"), gdjs.OpeningStory3Code.GDbackgroundObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.OpeningStory3Code.GDbackgroundObjects1.length;i<l;++i) {
    if ( gdjs.OpeningStory3Code.GDbackgroundObjects1[i].getTimerElapsedTimeInSecondsOrNaN("OpTimer1") >= 6 ) {
        isConditionTrue_0 = true;
        gdjs.OpeningStory3Code.GDbackgroundObjects1[k] = gdjs.OpeningStory3Code.GDbackgroundObjects1[i];
        ++k;
    }
}
gdjs.OpeningStory3Code.GDbackgroundObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(21643932);
}
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.OpeningStory3Code.GDbackgroundObjects1 */
{for(var i = 0, len = gdjs.OpeningStory3Code.GDbackgroundObjects1.length ;i < len;++i) {
    gdjs.OpeningStory3Code.GDbackgroundObjects1[i].removeTimer("OpTimer1");
}
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "OpeningStory4", false);
}}

}


};gdjs.OpeningStory3Code.eventsList2 = function(runtimeScene) {

{


gdjs.OpeningStory3Code.eventsList1(runtimeScene);
}


};

gdjs.OpeningStory3Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.OpeningStory3Code.GDOP1Objects1.length = 0;
gdjs.OpeningStory3Code.GDOP1Objects2.length = 0;
gdjs.OpeningStory3Code.GDOP1Objects3.length = 0;
gdjs.OpeningStory3Code.GDbackgroundObjects1.length = 0;
gdjs.OpeningStory3Code.GDbackgroundObjects2.length = 0;
gdjs.OpeningStory3Code.GDbackgroundObjects3.length = 0;
gdjs.OpeningStory3Code.GDOpScene1Objects1.length = 0;
gdjs.OpeningStory3Code.GDOpScene1Objects2.length = 0;
gdjs.OpeningStory3Code.GDOpScene1Objects3.length = 0;
gdjs.OpeningStory3Code.GDOpScene2Objects1.length = 0;
gdjs.OpeningStory3Code.GDOpScene2Objects2.length = 0;
gdjs.OpeningStory3Code.GDOpScene2Objects3.length = 0;
gdjs.OpeningStory3Code.GDOpScene3Objects1.length = 0;
gdjs.OpeningStory3Code.GDOpScene3Objects2.length = 0;
gdjs.OpeningStory3Code.GDOpScene3Objects3.length = 0;
gdjs.OpeningStory3Code.GDPhotoObjects1.length = 0;
gdjs.OpeningStory3Code.GDPhotoObjects2.length = 0;
gdjs.OpeningStory3Code.GDPhotoObjects3.length = 0;
gdjs.OpeningStory3Code.GDNextObjects1.length = 0;
gdjs.OpeningStory3Code.GDNextObjects2.length = 0;
gdjs.OpeningStory3Code.GDNextObjects3.length = 0;
gdjs.OpeningStory3Code.GDphotoObjects1.length = 0;
gdjs.OpeningStory3Code.GDphotoObjects2.length = 0;
gdjs.OpeningStory3Code.GDphotoObjects3.length = 0;

gdjs.OpeningStory3Code.eventsList2(runtimeScene);

return;

}

gdjs['OpeningStory3Code'] = gdjs.OpeningStory3Code;
