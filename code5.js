gdjs.OpeningStory1Code = {};
gdjs.OpeningStory1Code.GDOP1Objects1= [];
gdjs.OpeningStory1Code.GDOP1Objects2= [];
gdjs.OpeningStory1Code.GDOP1Objects3= [];
gdjs.OpeningStory1Code.GDNextObjects1= [];
gdjs.OpeningStory1Code.GDNextObjects2= [];
gdjs.OpeningStory1Code.GDNextObjects3= [];
gdjs.OpeningStory1Code.GDbackgroundObjects1= [];
gdjs.OpeningStory1Code.GDbackgroundObjects2= [];
gdjs.OpeningStory1Code.GDbackgroundObjects3= [];
gdjs.OpeningStory1Code.GDNewSpriteObjects1= [];
gdjs.OpeningStory1Code.GDNewSpriteObjects2= [];
gdjs.OpeningStory1Code.GDNewSpriteObjects3= [];
gdjs.OpeningStory1Code.GDOpScene1Objects1= [];
gdjs.OpeningStory1Code.GDOpScene1Objects2= [];
gdjs.OpeningStory1Code.GDOpScene1Objects3= [];
gdjs.OpeningStory1Code.GDOpScene2Objects1= [];
gdjs.OpeningStory1Code.GDOpScene2Objects2= [];
gdjs.OpeningStory1Code.GDOpScene2Objects3= [];
gdjs.OpeningStory1Code.GDOpScene3Objects1= [];
gdjs.OpeningStory1Code.GDOpScene3Objects2= [];
gdjs.OpeningStory1Code.GDOpScene3Objects3= [];
gdjs.OpeningStory1Code.GDOPObjects1= [];
gdjs.OpeningStory1Code.GDOPObjects2= [];
gdjs.OpeningStory1Code.GDOPObjects3= [];


gdjs.OpeningStory1Code.mapOfGDgdjs_9546OpeningStory1Code_9546GDNextObjects3Objects = Hashtable.newFrom({"Next": gdjs.OpeningStory1Code.GDNextObjects3});
gdjs.OpeningStory1Code.asyncCallback21665660 = function (runtimeScene, asyncObjectsList) {
gdjs.OpeningStory1Code.GDNextObjects3.length = 0;

{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.OpeningStory1Code.mapOfGDgdjs_9546OpeningStory1Code_9546GDNextObjects3Objects, 987, 653, "");
}}
gdjs.OpeningStory1Code.eventsList0 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(6), (runtimeScene) => (gdjs.OpeningStory1Code.asyncCallback21665660(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.OpeningStory1Code.eventsList1 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("background"), gdjs.OpeningStory1Code.GDbackgroundObjects2);
{for(var i = 0, len = gdjs.OpeningStory1Code.GDbackgroundObjects2.length ;i < len;++i) {
    gdjs.OpeningStory1Code.GDbackgroundObjects2[i].resetTimer("OpTimer1");
}
}
{ //Subevents
gdjs.OpeningStory1Code.eventsList0(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("background"), gdjs.OpeningStory1Code.GDbackgroundObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.OpeningStory1Code.GDbackgroundObjects1.length;i<l;++i) {
    if ( gdjs.OpeningStory1Code.GDbackgroundObjects1[i].getTimerElapsedTimeInSecondsOrNaN("OpTimer1") >= 6 ) {
        isConditionTrue_0 = true;
        gdjs.OpeningStory1Code.GDbackgroundObjects1[k] = gdjs.OpeningStory1Code.GDbackgroundObjects1[i];
        ++k;
    }
}
gdjs.OpeningStory1Code.GDbackgroundObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(21666892);
}
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.OpeningStory1Code.GDbackgroundObjects1 */
{for(var i = 0, len = gdjs.OpeningStory1Code.GDbackgroundObjects1.length ;i < len;++i) {
    gdjs.OpeningStory1Code.GDbackgroundObjects1[i].removeTimer("OpTimer1");
}
}{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "OpeningStory2", false);
}}

}


};gdjs.OpeningStory1Code.eventsList2 = function(runtimeScene) {

{


gdjs.OpeningStory1Code.eventsList1(runtimeScene);
}


};

gdjs.OpeningStory1Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.OpeningStory1Code.GDOP1Objects1.length = 0;
gdjs.OpeningStory1Code.GDOP1Objects2.length = 0;
gdjs.OpeningStory1Code.GDOP1Objects3.length = 0;
gdjs.OpeningStory1Code.GDNextObjects1.length = 0;
gdjs.OpeningStory1Code.GDNextObjects2.length = 0;
gdjs.OpeningStory1Code.GDNextObjects3.length = 0;
gdjs.OpeningStory1Code.GDbackgroundObjects1.length = 0;
gdjs.OpeningStory1Code.GDbackgroundObjects2.length = 0;
gdjs.OpeningStory1Code.GDbackgroundObjects3.length = 0;
gdjs.OpeningStory1Code.GDNewSpriteObjects1.length = 0;
gdjs.OpeningStory1Code.GDNewSpriteObjects2.length = 0;
gdjs.OpeningStory1Code.GDNewSpriteObjects3.length = 0;
gdjs.OpeningStory1Code.GDOpScene1Objects1.length = 0;
gdjs.OpeningStory1Code.GDOpScene1Objects2.length = 0;
gdjs.OpeningStory1Code.GDOpScene1Objects3.length = 0;
gdjs.OpeningStory1Code.GDOpScene2Objects1.length = 0;
gdjs.OpeningStory1Code.GDOpScene2Objects2.length = 0;
gdjs.OpeningStory1Code.GDOpScene2Objects3.length = 0;
gdjs.OpeningStory1Code.GDOpScene3Objects1.length = 0;
gdjs.OpeningStory1Code.GDOpScene3Objects2.length = 0;
gdjs.OpeningStory1Code.GDOpScene3Objects3.length = 0;
gdjs.OpeningStory1Code.GDOPObjects1.length = 0;
gdjs.OpeningStory1Code.GDOPObjects2.length = 0;
gdjs.OpeningStory1Code.GDOPObjects3.length = 0;

gdjs.OpeningStory1Code.eventsList2(runtimeScene);

return;

}

gdjs['OpeningStory1Code'] = gdjs.OpeningStory1Code;
