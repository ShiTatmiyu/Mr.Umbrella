gdjs.OpeningStory2Code = {};
gdjs.OpeningStory2Code.GDNextObjects1= [];
gdjs.OpeningStory2Code.GDNextObjects2= [];
gdjs.OpeningStory2Code.GDNextObjects3= [];
gdjs.OpeningStory2Code.GDbackgroundObjects1= [];
gdjs.OpeningStory2Code.GDbackgroundObjects2= [];
gdjs.OpeningStory2Code.GDbackgroundObjects3= [];
gdjs.OpeningStory2Code.GDOpScene1Objects1= [];
gdjs.OpeningStory2Code.GDOpScene1Objects2= [];
gdjs.OpeningStory2Code.GDOpScene1Objects3= [];
gdjs.OpeningStory2Code.GDPhotoObjects1= [];
gdjs.OpeningStory2Code.GDPhotoObjects2= [];
gdjs.OpeningStory2Code.GDPhotoObjects3= [];
gdjs.OpeningStory2Code.GDOP1Objects1= [];
gdjs.OpeningStory2Code.GDOP1Objects2= [];
gdjs.OpeningStory2Code.GDOP1Objects3= [];


gdjs.OpeningStory2Code.mapOfGDgdjs_9546OpeningStory2Code_9546GDNextObjects3Objects = Hashtable.newFrom({"Next": gdjs.OpeningStory2Code.GDNextObjects3});
gdjs.OpeningStory2Code.asyncCallback21654500 = function (runtimeScene, asyncObjectsList) {
gdjs.OpeningStory2Code.GDNextObjects3.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.OpeningStory2Code.mapOfGDgdjs_9546OpeningStory2Code_9546GDNextObjects3Objects, 987, 653, "");
}}
gdjs.OpeningStory2Code.eventsList0 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(3), (runtimeScene) => (gdjs.OpeningStory2Code.asyncCallback21654500(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.OpeningStory2Code.eventsList1 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("background"), gdjs.OpeningStory2Code.GDbackgroundObjects2);
{for(var i = 0, len = gdjs.OpeningStory2Code.GDbackgroundObjects2.length ;i < len;++i) {
    gdjs.OpeningStory2Code.GDbackgroundObjects2[i].resetTimer("OpTimer1");
}
}
{ //Subevents
gdjs.OpeningStory2Code.eventsList0(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("background"), gdjs.OpeningStory2Code.GDbackgroundObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.OpeningStory2Code.GDbackgroundObjects1.length;i<l;++i) {
    if ( gdjs.OpeningStory2Code.GDbackgroundObjects1[i].getTimerElapsedTimeInSecondsOrNaN("OpTimer1") >= 6 ) {
        isConditionTrue_0 = true;
        gdjs.OpeningStory2Code.GDbackgroundObjects1[k] = gdjs.OpeningStory2Code.GDbackgroundObjects1[i];
        ++k;
    }
}
gdjs.OpeningStory2Code.GDbackgroundObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(21655732);
}
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.OpeningStory2Code.GDbackgroundObjects1 */
{for(var i = 0, len = gdjs.OpeningStory2Code.GDbackgroundObjects1.length ;i < len;++i) {
    gdjs.OpeningStory2Code.GDbackgroundObjects1[i].removeTimer("OpTimer1");
}
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "OpeningStory3", false);
}}

}


};gdjs.OpeningStory2Code.eventsList2 = function(runtimeScene) {

{


gdjs.OpeningStory2Code.eventsList1(runtimeScene);
}


};

gdjs.OpeningStory2Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.OpeningStory2Code.GDNextObjects1.length = 0;
gdjs.OpeningStory2Code.GDNextObjects2.length = 0;
gdjs.OpeningStory2Code.GDNextObjects3.length = 0;
gdjs.OpeningStory2Code.GDbackgroundObjects1.length = 0;
gdjs.OpeningStory2Code.GDbackgroundObjects2.length = 0;
gdjs.OpeningStory2Code.GDbackgroundObjects3.length = 0;
gdjs.OpeningStory2Code.GDOpScene1Objects1.length = 0;
gdjs.OpeningStory2Code.GDOpScene1Objects2.length = 0;
gdjs.OpeningStory2Code.GDOpScene1Objects3.length = 0;
gdjs.OpeningStory2Code.GDPhotoObjects1.length = 0;
gdjs.OpeningStory2Code.GDPhotoObjects2.length = 0;
gdjs.OpeningStory2Code.GDPhotoObjects3.length = 0;
gdjs.OpeningStory2Code.GDOP1Objects1.length = 0;
gdjs.OpeningStory2Code.GDOP1Objects2.length = 0;
gdjs.OpeningStory2Code.GDOP1Objects3.length = 0;

gdjs.OpeningStory2Code.eventsList2(runtimeScene);

return;

}

gdjs['OpeningStory2Code'] = gdjs.OpeningStory2Code;
