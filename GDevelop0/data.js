gdjs.projectData = {"firstLayout": "","gdVersion": {"build": 98,"major": 4,"minor": 0,"revision": 0},"properties": {"adMobAppId": "","folderProject": false,"linuxExecutableFilename": "","macExecutableFilename": "","orientation": "landscape","packageName": "com.example.gamename","projectFile": "C:\\Users\\KAZUAKI\\GDevelop projects\\My project\\game.json","scaleMode": "linear","sizeOnStartupMode": "adaptWidth","useExternalSourceFiles": false,"version": "1.0.0","winExecutableFilename": "","winExecutableIconFile": "","name": "Project","author": "","windowWidth": 800,"windowHeight": 600,"latestCompilationDirectory": "C:\\Users\\KAZUAKI\\GDevelop projects\\My project\\HTML5","maxFPS": 60,"minFPS": 10,"verticalSync": false,"platformSpecificAssets": {},"loadingScreen": {"showGDevelopSplash": true},"extensions": [{"name": "BuiltinObject"},{"name": "BuiltinAudio"},{"name": "BuiltinVariables"},{"name": "BuiltinTime"},{"name": "BuiltinMouse"},{"name": "BuiltinKeyboard"},{"name": "BuiltinJoystick"},{"name": "BuiltinCamera"},{"name": "BuiltinWindow"},{"name": "BuiltinFile"},{"name": "BuiltinNetwork"},{"name": "BuiltinScene"},{"name": "BuiltinAdvanced"},{"name": "Sprite"},{"name": "BuiltinCommonInstructions"},{"name": "BuiltinCommonConversions"},{"name": "BuiltinStringInstructions"},{"name": "BuiltinMathematicalTools"},{"name": "BuiltinExternalLayouts"}],"platforms": [{"name": "GDevelop JS platform"}],"currentPlatform": "GDevelop JS platform"},"resources": {"resources": [{"alwaysLoaded": false,"file": "G-GEAR3.JPG","kind": "image","metadata": "","name": "G-GEAR3.JPG","smoothed": true,"userAdded": true},{"alwaysLoaded": false,"file": "p1_stand.png","kind": "image","metadata": "","name": "PlatformerTutorialResources\\p1_stand.png","smoothed": true,"userAdded": true},{"alwaysLoaded": false,"file": "grassHalfMid.png","kind": "image","metadata": "","name": "PlatformerTutorialResources\\grassHalfMid.png","smoothed": true,"userAdded": false},{"alwaysLoaded": false,"file": "p1_jump.png","kind": "image","metadata": "","name": "PlatformerTutorialResources\\p1_jump.png","smoothed": true,"userAdded": false},{"alwaysLoaded": false,"file": "p1_walk03.png","kind": "image","metadata": "","name": "PlatformerTutorialResources\\p1_walk03.png","smoothed": true,"userAdded": false},{"alwaysLoaded": false,"file": "p1_walk04.png","kind": "image","metadata": "","name": "PlatformerTutorialResources\\p1_walk04.png","smoothed": true,"userAdded": true},{"alwaysLoaded": false,"file": "p1_walk05.png","kind": "image","metadata": "","name": "PlatformerTutorialResources\\p1_walk05.png","smoothed": true,"userAdded": true},{"alwaysLoaded": false,"file": "p1_walk06.png","kind": "image","metadata": "","name": "PlatformerTutorialResources\\p1_walk06.png","smoothed": true,"userAdded": false},{"alwaysLoaded": false,"file": "p1_walk07.png","kind": "image","metadata": "","name": "PlatformerTutorialResources\\p1_walk07.png","smoothed": true,"userAdded": false}],"resourceFolders": []},"objects": [],"objectsGroups": [],"variables": [],"layouts": [{"b": 235,"disableInputWhenNotFocused": true,"mangledName": "NewScene","name": "NewScene","oglFOV": 90,"oglZFar": 500,"oglZNear": 1,"r": 171,"standardSortMethod": true,"stopSoundsOnStartup": true,"title": "","v": 231,"uiSettings": {"grid": false,"gridB": 255,"gridG": 180,"gridHeight": 32,"gridOffsetX": 0,"gridOffsetY": 0,"gridR": 158,"gridWidth": 32,"snap": true,"windowMask": false,"zoomFactor": 1},"objectsGroups": [],"variables": [],"instances": [{"angle": 0,"customSize": false,"height": 0,"layer": "","locked": false,"name": "Player","width": 0,"x": 160,"y": 226,"zOrder": 1,"numberProperties": [],"stringProperties": [],"initialVariables": []},{"angle": 0,"customSize": true,"height": 32,"layer": "","locked": false,"name": "NewObject","width": 339,"x": 154.885,"y": 484.439,"zOrder": 2,"numberProperties": [],"stringProperties": [],"initialVariables": []},{"angle": 0,"customSize": true,"height": 32,"layer": "","locked": false,"name": "GrassPlatform","width": 465,"x": 53,"y": 416,"zOrder": 3,"numberProperties": [],"stringProperties": [],"initialVariables": []}],"objects": [{"name": "Player","type": "Sprite","updateIfNotVisible": false,"variables": [],"behaviors": [{"acceleration": 1500,"canGrabPlatforms": false,"deceleration": 1500,"gravity": 1000,"ignoreDefaultControls": false,"jumpSpeed": 800,"maxFallingSpeed": 700,"maxSpeed": 250,"name": "PlatformerObject","roundCoordinates": true,"slopeMaxAngle": 60,"type": "PlatformBehavior::PlatformerObjectBehavior","xGrabTolerance": 10,"yGrabOffset": 0}],"animations": [{"name": "Idle","useMultipleDirections": false,"directions": [{"looping": false,"timeBetweenFrames": 0.08,"sprites": [{"hasCustomCollisionMask": false,"image": "PlatformerTutorialResources\\p1_stand.png","points": [],"originPoint": {"name": "origine","x": 0,"y": 0},"centerPoint": {"automatic": true,"name": "centre","x": 0,"y": 0},"customCollisionMask": []}]}]},{"name": "Jumping","useMultipleDirections": false,"directions": [{"looping": false,"timeBetweenFrames": 0.08,"sprites": [{"hasCustomCollisionMask": false,"image": "PlatformerTutorialResources\\p1_jump.png","points": [],"originPoint": {"name": "origine","x": 0,"y": 0},"centerPoint": {"automatic": true,"name": "centre","x": 0,"y": 0},"customCollisionMask": []}]}]},{"name": "Running","useMultipleDirections": false,"directions": [{"looping": true,"timeBetweenFrames": 0.05,"sprites": [{"hasCustomCollisionMask": false,"image": "PlatformerTutorialResources\\p1_walk03.png","points": [],"originPoint": {"name": "origine","x": 0,"y": 0},"centerPoint": {"automatic": true,"name": "centre","x": 0,"y": 0},"customCollisionMask": []},{"hasCustomCollisionMask": false,"image": "PlatformerTutorialResources\\p1_walk04.png","points": [],"originPoint": {"name": "origine","x": 0,"y": 0},"centerPoint": {"automatic": true,"name": "centre","x": 0,"y": 0},"customCollisionMask": []},{"hasCustomCollisionMask": false,"image": "PlatformerTutorialResources\\p1_walk05.png","points": [],"originPoint": {"name": "origine","x": 0,"y": 0},"centerPoint": {"automatic": true,"name": "centre","x": 0,"y": 0},"customCollisionMask": []},{"hasCustomCollisionMask": false,"image": "PlatformerTutorialResources\\p1_walk06.png","points": [],"originPoint": {"name": "origine","x": 0,"y": 0},"centerPoint": {"automatic": true,"name": "centre","x": 0,"y": 0},"customCollisionMask": []},{"hasCustomCollisionMask": false,"image": "PlatformerTutorialResources\\p1_walk07.png","points": [],"originPoint": {"name": "origine","x": 0,"y": 0},"centerPoint": {"automatic": true,"name": "centre","x": 0,"y": 0},"customCollisionMask": []}]}]}]},{"height": 32,"name": "GrassPlatform","texture": "PlatformerTutorialResources\\grassHalfMid.png","type": "TiledSpriteObject::TiledSprite","width": 32,"variables": [],"behaviors": [{"canBeGrabbed": false,"name": "Platform","platformType": "NormalPlatform","type": "PlatformBehavior::PlatformBehavior","yGrabOffset": 0}]}],"events": [],"layers": [{"name": "","visibility": true,"cameras": [{"defaultSize": true,"defaultViewport": true,"height": 0,"viewportBottom": 1,"viewportLeft": 0,"viewportRight": 1,"viewportTop": 0,"width": 0}],"effects": []}],"behaviorsSharedData": [{"name": "Platform","type": "PlatformBehavior::PlatformBehavior"},{"name": "PlatformerObject","type": "PlatformBehavior::PlatformerObjectBehavior"}]}],"externalEvents": [],"eventsFunctionsExtensions": [],"externalLayouts": [],"externalSourceFiles": []};