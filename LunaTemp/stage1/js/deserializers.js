var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i1278 = root || request.c( 'UnityEngine.JointSpring' )
  var i1279 = data
  i1278.spring = i1279[0]
  i1278.damper = i1279[1]
  i1278.targetPosition = i1279[2]
  return i1278
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i1280 = root || request.c( 'UnityEngine.JointMotor' )
  var i1281 = data
  i1280.m_TargetVelocity = i1281[0]
  i1280.m_Force = i1281[1]
  i1280.m_FreeSpin = i1281[2]
  return i1280
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i1282 = root || request.c( 'UnityEngine.JointLimits' )
  var i1283 = data
  i1282.m_Min = i1283[0]
  i1282.m_Max = i1283[1]
  i1282.m_Bounciness = i1283[2]
  i1282.m_BounceMinVelocity = i1283[3]
  i1282.m_ContactDistance = i1283[4]
  i1282.minBounce = i1283[5]
  i1282.maxBounce = i1283[6]
  return i1282
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i1284 = root || request.c( 'UnityEngine.JointDrive' )
  var i1285 = data
  i1284.m_PositionSpring = i1285[0]
  i1284.m_PositionDamper = i1285[1]
  i1284.m_MaximumForce = i1285[2]
  i1284.m_UseAcceleration = i1285[3]
  return i1284
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i1286 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i1287 = data
  i1286.m_Spring = i1287[0]
  i1286.m_Damper = i1287[1]
  return i1286
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i1288 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i1289 = data
  i1288.m_Limit = i1289[0]
  i1288.m_Bounciness = i1289[1]
  i1288.m_ContactDistance = i1289[2]
  return i1288
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i1290 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i1291 = data
  i1290.m_ExtremumSlip = i1291[0]
  i1290.m_ExtremumValue = i1291[1]
  i1290.m_AsymptoteSlip = i1291[2]
  i1290.m_AsymptoteValue = i1291[3]
  i1290.m_Stiffness = i1291[4]
  return i1290
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i1292 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i1293 = data
  i1292.m_LowerAngle = i1293[0]
  i1292.m_UpperAngle = i1293[1]
  return i1292
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i1294 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i1295 = data
  i1294.m_MotorSpeed = i1295[0]
  i1294.m_MaximumMotorTorque = i1295[1]
  return i1294
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i1296 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i1297 = data
  i1296.m_DampingRatio = i1297[0]
  i1296.m_Frequency = i1297[1]
  i1296.m_Angle = i1297[2]
  return i1296
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i1298 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i1299 = data
  i1298.m_LowerTranslation = i1299[0]
  i1298.m_UpperTranslation = i1299[1]
  return i1298
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i1300 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i1301 = data
  i1300.name = i1301[0]
  i1300.width = i1301[1]
  i1300.height = i1301[2]
  i1300.mipmapCount = i1301[3]
  i1300.anisoLevel = i1301[4]
  i1300.filterMode = i1301[5]
  i1300.hdr = !!i1301[6]
  i1300.format = i1301[7]
  i1300.wrapMode = i1301[8]
  i1300.alphaIsTransparency = !!i1301[9]
  i1300.alphaSource = i1301[10]
  i1300.graphicsFormat = i1301[11]
  i1300.sRGBTexture = !!i1301[12]
  i1300.desiredColorSpace = i1301[13]
  i1300.wrapU = i1301[14]
  i1300.wrapV = i1301[15]
  return i1300
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i1302 = root || new pc.UnityMaterial()
  var i1303 = data
  i1302.name = i1303[0]
  request.r(i1303[1], i1303[2], 0, i1302, 'shader')
  i1302.renderQueue = i1303[3]
  i1302.enableInstancing = !!i1303[4]
  var i1305 = i1303[5]
  var i1304 = []
  for(var i = 0; i < i1305.length; i += 1) {
    i1304.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i1305[i + 0]) );
  }
  i1302.floatParameters = i1304
  var i1307 = i1303[6]
  var i1306 = []
  for(var i = 0; i < i1307.length; i += 1) {
    i1306.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i1307[i + 0]) );
  }
  i1302.colorParameters = i1306
  var i1309 = i1303[7]
  var i1308 = []
  for(var i = 0; i < i1309.length; i += 1) {
    i1308.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i1309[i + 0]) );
  }
  i1302.vectorParameters = i1308
  var i1311 = i1303[8]
  var i1310 = []
  for(var i = 0; i < i1311.length; i += 1) {
    i1310.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i1311[i + 0]) );
  }
  i1302.textureParameters = i1310
  var i1313 = i1303[9]
  var i1312 = []
  for(var i = 0; i < i1313.length; i += 1) {
    i1312.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i1313[i + 0]) );
  }
  i1302.materialFlags = i1312
  return i1302
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i1316 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i1317 = data
  i1316.name = i1317[0]
  i1316.value = i1317[1]
  return i1316
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i1320 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i1321 = data
  i1320.name = i1321[0]
  i1320.value = new pc.Color(i1321[1], i1321[2], i1321[3], i1321[4])
  return i1320
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i1324 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i1325 = data
  i1324.name = i1325[0]
  i1324.value = new pc.Vec4( i1325[1], i1325[2], i1325[3], i1325[4] )
  return i1324
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i1328 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i1329 = data
  i1328.name = i1329[0]
  request.r(i1329[1], i1329[2], 0, i1328, 'value')
  return i1328
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i1332 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i1333 = data
  i1332.name = i1333[0]
  i1332.enabled = !!i1333[1]
  return i1332
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i1334 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i1335 = data
  i1334.name = i1335[0]
  i1334.index = i1335[1]
  i1334.startup = !!i1335[2]
  return i1334
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i1336 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i1337 = data
  i1336.aspect = i1337[0]
  i1336.orthographic = !!i1337[1]
  i1336.orthographicSize = i1337[2]
  i1336.backgroundColor = new pc.Color(i1337[3], i1337[4], i1337[5], i1337[6])
  i1336.nearClipPlane = i1337[7]
  i1336.farClipPlane = i1337[8]
  i1336.fieldOfView = i1337[9]
  i1336.depth = i1337[10]
  i1336.clearFlags = i1337[11]
  i1336.cullingMask = i1337[12]
  i1336.rect = i1337[13]
  request.r(i1337[14], i1337[15], 0, i1336, 'targetTexture')
  i1336.usePhysicalProperties = !!i1337[16]
  i1336.focalLength = i1337[17]
  i1336.sensorSize = new pc.Vec2( i1337[18], i1337[19] )
  i1336.lensShift = new pc.Vec2( i1337[20], i1337[21] )
  i1336.gateFit = i1337[22]
  i1336.commandBufferCount = i1337[23]
  i1336.cameraType = i1337[24]
  i1336.enabled = !!i1337[25]
  return i1336
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i1338 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i1339 = data
  i1338.name = i1339[0]
  i1338.tagId = i1339[1]
  i1338.enabled = !!i1339[2]
  i1338.isStatic = !!i1339[3]
  i1338.layer = i1339[4]
  return i1338
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i1340 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i1341 = data
  request.r(i1341[0], i1341[1], 0, i1340, 'm_FirstSelected')
  i1340.m_sendNavigationEvents = !!i1341[2]
  i1340.m_DragThreshold = i1341[3]
  return i1340
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i1342 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i1343 = data
  i1342.m_HorizontalAxis = i1343[0]
  i1342.m_VerticalAxis = i1343[1]
  i1342.m_SubmitButton = i1343[2]
  i1342.m_CancelButton = i1343[3]
  i1342.m_InputActionsPerSecond = i1343[4]
  i1342.m_RepeatDelay = i1343[5]
  i1342.m_ForceModuleActive = !!i1343[6]
  i1342.m_SendPointerHoverToParent = !!i1343[7]
  return i1342
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i1344 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i1345 = data
  i1344.pivot = new pc.Vec2( i1345[0], i1345[1] )
  i1344.anchorMin = new pc.Vec2( i1345[2], i1345[3] )
  i1344.anchorMax = new pc.Vec2( i1345[4], i1345[5] )
  i1344.sizeDelta = new pc.Vec2( i1345[6], i1345[7] )
  i1344.anchoredPosition3D = new pc.Vec3( i1345[8], i1345[9], i1345[10] )
  i1344.rotation = new pc.Quat(i1345[11], i1345[12], i1345[13], i1345[14])
  i1344.scale = new pc.Vec3( i1345[15], i1345[16], i1345[17] )
  return i1344
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i1346 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i1347 = data
  i1346.planeDistance = i1347[0]
  i1346.referencePixelsPerUnit = i1347[1]
  i1346.isFallbackOverlay = !!i1347[2]
  i1346.renderMode = i1347[3]
  i1346.renderOrder = i1347[4]
  i1346.sortingLayerName = i1347[5]
  i1346.sortingOrder = i1347[6]
  i1346.scaleFactor = i1347[7]
  request.r(i1347[8], i1347[9], 0, i1346, 'worldCamera')
  i1346.overrideSorting = !!i1347[10]
  i1346.pixelPerfect = !!i1347[11]
  i1346.targetDisplay = i1347[12]
  i1346.overridePixelPerfect = !!i1347[13]
  i1346.enabled = !!i1347[14]
  return i1346
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i1348 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i1349 = data
  i1348.m_UiScaleMode = i1349[0]
  i1348.m_ReferencePixelsPerUnit = i1349[1]
  i1348.m_ScaleFactor = i1349[2]
  i1348.m_ReferenceResolution = new pc.Vec2( i1349[3], i1349[4] )
  i1348.m_ScreenMatchMode = i1349[5]
  i1348.m_MatchWidthOrHeight = i1349[6]
  i1348.m_PhysicalUnit = i1349[7]
  i1348.m_FallbackScreenDPI = i1349[8]
  i1348.m_DefaultSpriteDPI = i1349[9]
  i1348.m_DynamicPixelsPerUnit = i1349[10]
  i1348.m_PresetInfoIsWorld = !!i1349[11]
  return i1348
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i1350 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i1351 = data
  i1350.m_IgnoreReversedGraphics = !!i1351[0]
  i1350.m_BlockingObjects = i1351[1]
  i1350.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i1351[2] )
  return i1350
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i1352 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i1353 = data
  i1352.cullTransparentMesh = !!i1353[0]
  return i1352
}

Deserializers["UnityEngine.UI.RawImage"] = function (request, data, root) {
  var i1354 = root || request.c( 'UnityEngine.UI.RawImage' )
  var i1355 = data
  request.r(i1355[0], i1355[1], 0, i1354, 'm_Texture')
  i1354.m_UVRect = UnityEngine.Rect.MinMaxRect(i1355[2], i1355[3], i1355[4], i1355[5])
  request.r(i1355[6], i1355[7], 0, i1354, 'm_Material')
  i1354.m_Maskable = !!i1355[8]
  i1354.m_Color = new pc.Color(i1355[9], i1355[10], i1355[11], i1355[12])
  i1354.m_RaycastTarget = !!i1355[13]
  i1354.m_RaycastPadding = new pc.Vec4( i1355[14], i1355[15], i1355[16], i1355[17] )
  return i1354
}

Deserializers["UnityEngine.UI.AspectRatioFitter"] = function (request, data, root) {
  var i1356 = root || request.c( 'UnityEngine.UI.AspectRatioFitter' )
  var i1357 = data
  i1356.m_AspectMode = i1357[0]
  i1356.m_AspectRatio = i1357[1]
  return i1356
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i1358 = root || request.c( 'UnityEngine.UI.Image' )
  var i1359 = data
  request.r(i1359[0], i1359[1], 0, i1358, 'm_Sprite')
  i1358.m_Type = i1359[2]
  i1358.m_PreserveAspect = !!i1359[3]
  i1358.m_FillCenter = !!i1359[4]
  i1358.m_FillMethod = i1359[5]
  i1358.m_FillAmount = i1359[6]
  i1358.m_FillClockwise = !!i1359[7]
  i1358.m_FillOrigin = i1359[8]
  i1358.m_UseSpriteMesh = !!i1359[9]
  i1358.m_PixelsPerUnitMultiplier = i1359[10]
  request.r(i1359[11], i1359[12], 0, i1358, 'm_Material')
  i1358.m_Maskable = !!i1359[13]
  i1358.m_Color = new pc.Color(i1359[14], i1359[15], i1359[16], i1359[17])
  i1358.m_RaycastTarget = !!i1359[18]
  i1358.m_RaycastPadding = new pc.Vec4( i1359[19], i1359[20], i1359[21], i1359[22] )
  return i1358
}

Deserializers["TMPro.TextMeshProUGUI"] = function (request, data, root) {
  var i1360 = root || request.c( 'TMPro.TextMeshProUGUI' )
  var i1361 = data
  i1360.m_hasFontAssetChanged = !!i1361[0]
  request.r(i1361[1], i1361[2], 0, i1360, 'm_baseMaterial')
  i1360.m_maskOffset = new pc.Vec4( i1361[3], i1361[4], i1361[5], i1361[6] )
  i1360.m_text = i1361[7]
  i1360.m_isRightToLeft = !!i1361[8]
  request.r(i1361[9], i1361[10], 0, i1360, 'm_fontAsset')
  request.r(i1361[11], i1361[12], 0, i1360, 'm_sharedMaterial')
  var i1363 = i1361[13]
  var i1362 = []
  for(var i = 0; i < i1363.length; i += 2) {
  request.r(i1363[i + 0], i1363[i + 1], 2, i1362, '')
  }
  i1360.m_fontSharedMaterials = i1362
  request.r(i1361[14], i1361[15], 0, i1360, 'm_fontMaterial')
  var i1365 = i1361[16]
  var i1364 = []
  for(var i = 0; i < i1365.length; i += 2) {
  request.r(i1365[i + 0], i1365[i + 1], 2, i1364, '')
  }
  i1360.m_fontMaterials = i1364
  i1360.m_fontColor32 = UnityEngine.Color32.ConstructColor(i1361[17], i1361[18], i1361[19], i1361[20])
  i1360.m_fontColor = new pc.Color(i1361[21], i1361[22], i1361[23], i1361[24])
  i1360.m_enableVertexGradient = !!i1361[25]
  i1360.m_colorMode = i1361[26]
  i1360.m_fontColorGradient = request.d('TMPro.VertexGradient', i1361[27], i1360.m_fontColorGradient)
  request.r(i1361[28], i1361[29], 0, i1360, 'm_fontColorGradientPreset')
  request.r(i1361[30], i1361[31], 0, i1360, 'm_spriteAsset')
  i1360.m_tintAllSprites = !!i1361[32]
  request.r(i1361[33], i1361[34], 0, i1360, 'm_StyleSheet')
  i1360.m_TextStyleHashCode = i1361[35]
  i1360.m_overrideHtmlColors = !!i1361[36]
  i1360.m_faceColor = UnityEngine.Color32.ConstructColor(i1361[37], i1361[38], i1361[39], i1361[40])
  i1360.m_fontSize = i1361[41]
  i1360.m_fontSizeBase = i1361[42]
  i1360.m_fontWeight = i1361[43]
  i1360.m_enableAutoSizing = !!i1361[44]
  i1360.m_fontSizeMin = i1361[45]
  i1360.m_fontSizeMax = i1361[46]
  i1360.m_fontStyle = i1361[47]
  i1360.m_HorizontalAlignment = i1361[48]
  i1360.m_VerticalAlignment = i1361[49]
  i1360.m_textAlignment = i1361[50]
  i1360.m_characterSpacing = i1361[51]
  i1360.m_characterHorizontalScale = i1361[52]
  i1360.m_wordSpacing = i1361[53]
  i1360.m_lineSpacing = i1361[54]
  i1360.m_lineSpacingMax = i1361[55]
  i1360.m_paragraphSpacing = i1361[56]
  i1360.m_charWidthMaxAdj = i1361[57]
  i1360.m_TextWrappingMode = i1361[58]
  i1360.m_wordWrappingRatios = i1361[59]
  i1360.m_overflowMode = i1361[60]
  request.r(i1361[61], i1361[62], 0, i1360, 'm_linkedTextComponent')
  request.r(i1361[63], i1361[64], 0, i1360, 'parentLinkedComponent')
  i1360.m_enableKerning = !!i1361[65]
  var i1367 = i1361[66]
  var i1366 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.OTL_FeatureTag')))
  for(var i = 0; i < i1367.length; i += 1) {
    i1366.add(i1367[i + 0]);
  }
  i1360.m_ActiveFontFeatures = i1366
  i1360.m_enableExtraPadding = !!i1361[67]
  i1360.checkPaddingRequired = !!i1361[68]
  i1360.m_isRichText = !!i1361[69]
  i1360.m_parseCtrlCharacters = !!i1361[70]
  i1360.m_isOrthographic = !!i1361[71]
  i1360.m_isCullingEnabled = !!i1361[72]
  i1360.m_horizontalMapping = i1361[73]
  i1360.m_verticalMapping = i1361[74]
  i1360.m_uvLineOffset = i1361[75]
  i1360.m_geometrySortingOrder = i1361[76]
  i1360.m_IsTextObjectScaleStatic = !!i1361[77]
  i1360.m_VertexBufferAutoSizeReduction = !!i1361[78]
  i1360.m_useMaxVisibleDescender = !!i1361[79]
  i1360.m_pageToDisplay = i1361[80]
  i1360.m_margin = new pc.Vec4( i1361[81], i1361[82], i1361[83], i1361[84] )
  i1360.m_isUsingLegacyAnimationComponent = !!i1361[85]
  i1360.m_isVolumetricText = !!i1361[86]
  request.r(i1361[87], i1361[88], 0, i1360, 'm_Material')
  i1360.m_EmojiFallbackSupport = !!i1361[89]
  i1360.m_Maskable = !!i1361[90]
  i1360.m_Color = new pc.Color(i1361[91], i1361[92], i1361[93], i1361[94])
  i1360.m_RaycastTarget = !!i1361[95]
  i1360.m_RaycastPadding = new pc.Vec4( i1361[96], i1361[97], i1361[98], i1361[99] )
  return i1360
}

Deserializers["TMPro.VertexGradient"] = function (request, data, root) {
  var i1370 = root || request.c( 'TMPro.VertexGradient' )
  var i1371 = data
  i1370.topLeft = new pc.Color(i1371[0], i1371[1], i1371[2], i1371[3])
  i1370.topRight = new pc.Color(i1371[4], i1371[5], i1371[6], i1371[7])
  i1370.bottomLeft = new pc.Color(i1371[8], i1371[9], i1371[10], i1371[11])
  i1370.bottomRight = new pc.Color(i1371[12], i1371[13], i1371[14], i1371[15])
  return i1370
}

Deserializers["TutController"] = function (request, data, root) {
  var i1374 = root || request.c( 'TutController' )
  var i1375 = data
  request.r(i1375[0], i1375[1], 0, i1374, 'rt')
  var i1377 = i1375[2]
  var i1376 = new (System.Collections.Generic.List$1(Bridge.ns('Option')))
  for(var i = 0; i < i1377.length; i += 1) {
    i1376.add(request.d('Option', i1377[i + 0]));
  }
  i1374.options = i1376
  i1374.moveTime = i1375[3]
  i1374.fromScale = i1375[4]
  i1374.toScale = i1375[5]
  i1374.scaleTime = i1375[6]
  return i1374
}

Deserializers["Option"] = function (request, data, root) {
  var i1380 = root || request.c( 'Option' )
  var i1381 = data
  i1380.Position = new pc.Vec3( i1381[0], i1381[1], i1381[2] )
  request.r(i1381[3], i1381[4], 0, i1380, 'Demo')
  return i1380
}

Deserializers["DG.Tweening.DOTweenAnimation"] = function (request, data, root) {
  var i1382 = root || request.c( 'DG.Tweening.DOTweenAnimation' )
  var i1383 = data
  i1382.targetIsSelf = !!i1383[0]
  request.r(i1383[1], i1383[2], 0, i1382, 'targetGO')
  i1382.tweenTargetIsTargetGO = !!i1383[3]
  i1382.delay = i1383[4]
  i1382.duration = i1383[5]
  i1382.easeType = i1383[6]
  i1382.easeCurve = new pc.AnimationCurve( { keys_flow: i1383[7] } )
  i1382.loopType = i1383[8]
  i1382.loops = i1383[9]
  i1382.id = i1383[10]
  i1382.isRelative = !!i1383[11]
  i1382.isFrom = !!i1383[12]
  i1382.isIndependentUpdate = !!i1383[13]
  i1382.autoKill = !!i1383[14]
  i1382.autoGenerate = !!i1383[15]
  i1382.isActive = !!i1383[16]
  i1382.isValid = !!i1383[17]
  request.r(i1383[18], i1383[19], 0, i1382, 'target')
  i1382.animationType = i1383[20]
  i1382.targetType = i1383[21]
  i1382.forcedTargetType = i1383[22]
  i1382.autoPlay = !!i1383[23]
  i1382.useTargetAsV3 = !!i1383[24]
  i1382.endValueFloat = i1383[25]
  i1382.endValueV3 = new pc.Vec3( i1383[26], i1383[27], i1383[28] )
  i1382.endValueV2 = new pc.Vec2( i1383[29], i1383[30] )
  i1382.endValueColor = new pc.Color(i1383[31], i1383[32], i1383[33], i1383[34])
  i1382.endValueString = i1383[35]
  i1382.endValueRect = UnityEngine.Rect.MinMaxRect(i1383[36], i1383[37], i1383[38], i1383[39])
  request.r(i1383[40], i1383[41], 0, i1382, 'endValueTransform')
  i1382.optionalBool0 = !!i1383[42]
  i1382.optionalBool1 = !!i1383[43]
  i1382.optionalFloat0 = i1383[44]
  i1382.optionalInt0 = i1383[45]
  i1382.optionalRotationMode = i1383[46]
  i1382.optionalScrambleMode = i1383[47]
  i1382.optionalShakeRandomnessMode = i1383[48]
  i1382.optionalString = i1383[49]
  i1382.updateType = i1383[50]
  i1382.isSpeedBased = !!i1383[51]
  i1382.hasOnStart = !!i1383[52]
  i1382.hasOnPlay = !!i1383[53]
  i1382.hasOnUpdate = !!i1383[54]
  i1382.hasOnStepComplete = !!i1383[55]
  i1382.hasOnComplete = !!i1383[56]
  i1382.hasOnTweenCreated = !!i1383[57]
  i1382.hasOnRewind = !!i1383[58]
  i1382.onStart = request.d('UnityEngine.Events.UnityEvent', i1383[59], i1382.onStart)
  i1382.onPlay = request.d('UnityEngine.Events.UnityEvent', i1383[60], i1382.onPlay)
  i1382.onUpdate = request.d('UnityEngine.Events.UnityEvent', i1383[61], i1382.onUpdate)
  i1382.onStepComplete = request.d('UnityEngine.Events.UnityEvent', i1383[62], i1382.onStepComplete)
  i1382.onComplete = request.d('UnityEngine.Events.UnityEvent', i1383[63], i1382.onComplete)
  i1382.onTweenCreated = request.d('UnityEngine.Events.UnityEvent', i1383[64], i1382.onTweenCreated)
  i1382.onRewind = request.d('UnityEngine.Events.UnityEvent', i1383[65], i1382.onRewind)
  return i1382
}

Deserializers["UnityEngine.Events.UnityEvent"] = function (request, data, root) {
  var i1384 = root || request.c( 'UnityEngine.Events.UnityEvent' )
  var i1385 = data
  i1384.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i1385[0], i1384.m_PersistentCalls)
  return i1384
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i1386 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i1387 = data
  var i1389 = i1387[0]
  var i1388 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i1389.length; i += 1) {
    i1388.add(request.d('UnityEngine.Events.PersistentCall', i1389[i + 0]));
  }
  i1386.m_Calls = i1388
  return i1386
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i1392 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i1393 = data
  request.r(i1393[0], i1393[1], 0, i1392, 'm_Target')
  i1392.m_TargetAssemblyTypeName = i1393[2]
  i1392.m_MethodName = i1393[3]
  i1392.m_Mode = i1393[4]
  i1392.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i1393[5], i1392.m_Arguments)
  i1392.m_CallState = i1393[6]
  return i1392
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i1394 = root || request.c( 'UnityEngine.UI.Button' )
  var i1395 = data
  i1394.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i1395[0], i1394.m_OnClick)
  i1394.m_Navigation = request.d('UnityEngine.UI.Navigation', i1395[1], i1394.m_Navigation)
  i1394.m_Transition = i1395[2]
  i1394.m_Colors = request.d('UnityEngine.UI.ColorBlock', i1395[3], i1394.m_Colors)
  i1394.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i1395[4], i1394.m_SpriteState)
  i1394.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i1395[5], i1394.m_AnimationTriggers)
  i1394.m_Interactable = !!i1395[6]
  request.r(i1395[7], i1395[8], 0, i1394, 'm_TargetGraphic')
  return i1394
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i1396 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i1397 = data
  i1396.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i1397[0], i1396.m_PersistentCalls)
  return i1396
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i1398 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i1399 = data
  i1398.m_Mode = i1399[0]
  i1398.m_WrapAround = !!i1399[1]
  request.r(i1399[2], i1399[3], 0, i1398, 'm_SelectOnUp')
  request.r(i1399[4], i1399[5], 0, i1398, 'm_SelectOnDown')
  request.r(i1399[6], i1399[7], 0, i1398, 'm_SelectOnLeft')
  request.r(i1399[8], i1399[9], 0, i1398, 'm_SelectOnRight')
  return i1398
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i1400 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i1401 = data
  i1400.m_NormalColor = new pc.Color(i1401[0], i1401[1], i1401[2], i1401[3])
  i1400.m_HighlightedColor = new pc.Color(i1401[4], i1401[5], i1401[6], i1401[7])
  i1400.m_PressedColor = new pc.Color(i1401[8], i1401[9], i1401[10], i1401[11])
  i1400.m_SelectedColor = new pc.Color(i1401[12], i1401[13], i1401[14], i1401[15])
  i1400.m_DisabledColor = new pc.Color(i1401[16], i1401[17], i1401[18], i1401[19])
  i1400.m_ColorMultiplier = i1401[20]
  i1400.m_FadeDuration = i1401[21]
  return i1400
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i1402 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i1403 = data
  request.r(i1403[0], i1403[1], 0, i1402, 'm_HighlightedSprite')
  request.r(i1403[2], i1403[3], 0, i1402, 'm_PressedSprite')
  request.r(i1403[4], i1403[5], 0, i1402, 'm_SelectedSprite')
  request.r(i1403[6], i1403[7], 0, i1402, 'm_DisabledSprite')
  return i1402
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i1404 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i1405 = data
  i1404.m_NormalTrigger = i1405[0]
  i1404.m_HighlightedTrigger = i1405[1]
  i1404.m_PressedTrigger = i1405[2]
  i1404.m_SelectedTrigger = i1405[3]
  i1404.m_DisabledTrigger = i1405[4]
  return i1404
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.AudioSource"] = function (request, data, root) {
  var i1406 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.AudioSource' )
  var i1407 = data
  request.r(i1407[0], i1407[1], 0, i1406, 'clip')
  request.r(i1407[2], i1407[3], 0, i1406, 'outputAudioMixerGroup')
  i1406.playOnAwake = !!i1407[4]
  i1406.loop = !!i1407[5]
  i1406.time = i1407[6]
  i1406.volume = i1407[7]
  i1406.pitch = i1407[8]
  i1406.enabled = !!i1407[9]
  return i1406
}

Deserializers["LunaController"] = function (request, data, root) {
  var i1408 = root || request.c( 'LunaController' )
  var i1409 = data
  i1408.TimePlay = i1409[0]
  i1408.LimitTimePlay = !!i1409[1]
  request.r(i1409[2], i1409[3], 0, i1408, 'BGTexture')
  i1408.BGColor = new pc.Color(i1409[4], i1409[5], i1409[6], i1409[7])
  request.r(i1409[8], i1409[9], 0, i1408, 'BGM')
  request.r(i1409[10], i1409[11], 0, i1408, 'LogoTexture')
  request.r(i1409[12], i1409[13], 0, i1408, 'Demo1Texture')
  i1408.Demo1Name = i1409[14]
  request.r(i1409[15], i1409[16], 0, i1408, 'Demo2Texture')
  i1408.Demo2Name = i1409[17]
  request.r(i1409[18], i1409[19], 0, i1408, 'Demo3Texture')
  i1408.Demo3Name = i1409[20]
  request.r(i1409[21], i1409[22], 0, i1408, 'Demo4Texture')
  i1408.Demo4Name = i1409[23]
  request.r(i1409[24], i1409[25], 0, i1408, 'CTATexture')
  i1408.CTAColor = new pc.Color(i1409[26], i1409[27], i1409[28], i1409[29])
  i1408.CTAText = i1409[30]
  i1408.CTATextColor = new pc.Color(i1409[31], i1409[32], i1409[33], i1409[34])
  request.r(i1409[35], i1409[36], 0, i1408, 'BGImage')
  request.r(i1409[37], i1409[38], 0, i1408, 'musicSource')
  request.r(i1409[39], i1409[40], 0, i1408, 'logoImage')
  request.r(i1409[41], i1409[42], 0, i1408, 'demo1Image')
  request.r(i1409[43], i1409[44], 0, i1408, 'demo1Text')
  request.r(i1409[45], i1409[46], 0, i1408, 'demo2Image')
  request.r(i1409[47], i1409[48], 0, i1408, 'demo2Text')
  request.r(i1409[49], i1409[50], 0, i1408, 'demo3Image')
  request.r(i1409[51], i1409[52], 0, i1408, 'demo3Text')
  request.r(i1409[53], i1409[54], 0, i1408, 'demo4Image')
  request.r(i1409[55], i1409[56], 0, i1408, 'demo4Text')
  request.r(i1409[57], i1409[58], 0, i1408, 'CTAImage')
  request.r(i1409[59], i1409[60], 0, i1408, 'CTATextField')
  request.r(i1409[61], i1409[62], 0, i1408, 'endCard')
  return i1408
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i1410 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i1411 = data
  i1410.ambientIntensity = i1411[0]
  i1410.reflectionIntensity = i1411[1]
  i1410.ambientMode = i1411[2]
  i1410.ambientLight = new pc.Color(i1411[3], i1411[4], i1411[5], i1411[6])
  i1410.ambientSkyColor = new pc.Color(i1411[7], i1411[8], i1411[9], i1411[10])
  i1410.ambientGroundColor = new pc.Color(i1411[11], i1411[12], i1411[13], i1411[14])
  i1410.ambientEquatorColor = new pc.Color(i1411[15], i1411[16], i1411[17], i1411[18])
  i1410.fogColor = new pc.Color(i1411[19], i1411[20], i1411[21], i1411[22])
  i1410.fogEndDistance = i1411[23]
  i1410.fogStartDistance = i1411[24]
  i1410.fogDensity = i1411[25]
  i1410.fog = !!i1411[26]
  request.r(i1411[27], i1411[28], 0, i1410, 'skybox')
  i1410.fogMode = i1411[29]
  var i1413 = i1411[30]
  var i1412 = []
  for(var i = 0; i < i1413.length; i += 1) {
    i1412.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i1413[i + 0]) );
  }
  i1410.lightmaps = i1412
  i1410.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i1411[31], i1410.lightProbes)
  i1410.lightmapsMode = i1411[32]
  i1410.mixedBakeMode = i1411[33]
  i1410.environmentLightingMode = i1411[34]
  i1410.ambientProbe = new pc.SphericalHarmonicsL2(i1411[35])
  request.r(i1411[36], i1411[37], 0, i1410, 'customReflection')
  request.r(i1411[38], i1411[39], 0, i1410, 'defaultReflection')
  i1410.defaultReflectionMode = i1411[40]
  i1410.defaultReflectionResolution = i1411[41]
  i1410.sunLightObjectId = i1411[42]
  i1410.pixelLightCount = i1411[43]
  i1410.defaultReflectionHDR = !!i1411[44]
  i1410.hasLightDataAsset = !!i1411[45]
  i1410.hasManualGenerate = !!i1411[46]
  return i1410
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i1416 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i1417 = data
  request.r(i1417[0], i1417[1], 0, i1416, 'lightmapColor')
  request.r(i1417[2], i1417[3], 0, i1416, 'lightmapDirection')
  request.r(i1417[4], i1417[5], 0, i1416, 'shadowMask')
  return i1416
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i1418 = root || new UnityEngine.LightProbes()
  var i1419 = data
  return i1418
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i1426 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i1427 = data
  var i1429 = i1427[0]
  var i1428 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i1429.length; i += 1) {
    i1428.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i1429[i + 0]));
  }
  i1426.ShaderCompilationErrors = i1428
  i1426.name = i1427[1]
  i1426.guid = i1427[2]
  var i1431 = i1427[3]
  var i1430 = []
  for(var i = 0; i < i1431.length; i += 1) {
    i1430.push( i1431[i + 0] );
  }
  i1426.shaderDefinedKeywords = i1430
  var i1433 = i1427[4]
  var i1432 = []
  for(var i = 0; i < i1433.length; i += 1) {
    i1432.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i1433[i + 0]) );
  }
  i1426.passes = i1432
  var i1435 = i1427[5]
  var i1434 = []
  for(var i = 0; i < i1435.length; i += 1) {
    i1434.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i1435[i + 0]) );
  }
  i1426.usePasses = i1434
  var i1437 = i1427[6]
  var i1436 = []
  for(var i = 0; i < i1437.length; i += 1) {
    i1436.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i1437[i + 0]) );
  }
  i1426.defaultParameterValues = i1436
  request.r(i1427[7], i1427[8], 0, i1426, 'unityFallbackShader')
  i1426.readDepth = !!i1427[9]
  i1426.hasDepthOnlyPass = !!i1427[10]
  i1426.isCreatedByShaderGraph = !!i1427[11]
  i1426.disableBatching = !!i1427[12]
  i1426.compiled = !!i1427[13]
  return i1426
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i1440 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i1441 = data
  i1440.shaderName = i1441[0]
  i1440.errorMessage = i1441[1]
  return i1440
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i1446 = root || new pc.UnityShaderPass()
  var i1447 = data
  i1446.id = i1447[0]
  i1446.subShaderIndex = i1447[1]
  i1446.name = i1447[2]
  i1446.passType = i1447[3]
  i1446.grabPassTextureName = i1447[4]
  i1446.usePass = !!i1447[5]
  i1446.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1447[6], i1446.zTest)
  i1446.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1447[7], i1446.zWrite)
  i1446.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1447[8], i1446.culling)
  i1446.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i1447[9], i1446.blending)
  i1446.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i1447[10], i1446.alphaBlending)
  i1446.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1447[11], i1446.colorWriteMask)
  i1446.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1447[12], i1446.offsetUnits)
  i1446.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1447[13], i1446.offsetFactor)
  i1446.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1447[14], i1446.stencilRef)
  i1446.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1447[15], i1446.stencilReadMask)
  i1446.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1447[16], i1446.stencilWriteMask)
  i1446.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1447[17], i1446.stencilOp)
  i1446.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1447[18], i1446.stencilOpFront)
  i1446.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1447[19], i1446.stencilOpBack)
  var i1449 = i1447[20]
  var i1448 = []
  for(var i = 0; i < i1449.length; i += 1) {
    i1448.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i1449[i + 0]) );
  }
  i1446.tags = i1448
  var i1451 = i1447[21]
  var i1450 = []
  for(var i = 0; i < i1451.length; i += 1) {
    i1450.push( i1451[i + 0] );
  }
  i1446.passDefinedKeywords = i1450
  var i1453 = i1447[22]
  var i1452 = []
  for(var i = 0; i < i1453.length; i += 1) {
    i1452.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i1453[i + 0]) );
  }
  i1446.passDefinedKeywordGroups = i1452
  var i1455 = i1447[23]
  var i1454 = []
  for(var i = 0; i < i1455.length; i += 1) {
    i1454.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i1455[i + 0]) );
  }
  i1446.variants = i1454
  var i1457 = i1447[24]
  var i1456 = []
  for(var i = 0; i < i1457.length; i += 1) {
    i1456.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i1457[i + 0]) );
  }
  i1446.excludedVariants = i1456
  i1446.hasDepthReader = !!i1447[25]
  return i1446
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i1458 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i1459 = data
  i1458.val = i1459[0]
  i1458.name = i1459[1]
  return i1458
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i1460 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i1461 = data
  i1460.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1461[0], i1460.src)
  i1460.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1461[1], i1460.dst)
  i1460.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1461[2], i1460.op)
  return i1460
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i1462 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i1463 = data
  i1462.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1463[0], i1462.pass)
  i1462.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1463[1], i1462.fail)
  i1462.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1463[2], i1462.zFail)
  i1462.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1463[3], i1462.comp)
  return i1462
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i1466 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i1467 = data
  i1466.name = i1467[0]
  i1466.value = i1467[1]
  return i1466
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i1470 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i1471 = data
  var i1473 = i1471[0]
  var i1472 = []
  for(var i = 0; i < i1473.length; i += 1) {
    i1472.push( i1473[i + 0] );
  }
  i1470.keywords = i1472
  i1470.hasDiscard = !!i1471[1]
  return i1470
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i1476 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i1477 = data
  i1476.passId = i1477[0]
  i1476.subShaderIndex = i1477[1]
  var i1479 = i1477[2]
  var i1478 = []
  for(var i = 0; i < i1479.length; i += 1) {
    i1478.push( i1479[i + 0] );
  }
  i1476.keywords = i1478
  i1476.vertexProgram = i1477[3]
  i1476.fragmentProgram = i1477[4]
  i1476.exportedForWebGl2 = !!i1477[5]
  i1476.readDepth = !!i1477[6]
  return i1476
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i1482 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i1483 = data
  request.r(i1483[0], i1483[1], 0, i1482, 'shader')
  i1482.pass = i1483[2]
  return i1482
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i1486 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i1487 = data
  i1486.name = i1487[0]
  i1486.type = i1487[1]
  i1486.value = new pc.Vec4( i1487[2], i1487[3], i1487[4], i1487[5] )
  i1486.textureValue = i1487[6]
  i1486.shaderPropertyFlag = i1487[7]
  return i1486
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i1488 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i1489 = data
  i1488.name = i1489[0]
  request.r(i1489[1], i1489[2], 0, i1488, 'texture')
  i1488.aabb = i1489[3]
  i1488.vertices = i1489[4]
  i1488.triangles = i1489[5]
  i1488.textureRect = UnityEngine.Rect.MinMaxRect(i1489[6], i1489[7], i1489[8], i1489[9])
  i1488.packedRect = UnityEngine.Rect.MinMaxRect(i1489[10], i1489[11], i1489[12], i1489[13])
  i1488.border = new pc.Vec4( i1489[14], i1489[15], i1489[16], i1489[17] )
  i1488.transparency = i1489[18]
  i1488.bounds = i1489[19]
  i1488.pixelsPerUnit = i1489[20]
  i1488.textureWidth = i1489[21]
  i1488.textureHeight = i1489[22]
  i1488.nativeSize = new pc.Vec2( i1489[23], i1489[24] )
  i1488.pivot = new pc.Vec2( i1489[25], i1489[26] )
  i1488.textureRectOffset = new pc.Vec2( i1489[27], i1489[28] )
  return i1488
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i1490 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i1491 = data
  i1490.name = i1491[0]
  return i1490
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.TextAsset"] = function (request, data, root) {
  var i1492 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.TextAsset' )
  var i1493 = data
  i1492.name = i1493[0]
  i1492.bytes64 = i1493[1]
  i1492.data = i1493[2]
  return i1492
}

Deserializers["TMPro.TMP_FontAsset"] = function (request, data, root) {
  var i1494 = root || request.c( 'TMPro.TMP_FontAsset' )
  var i1495 = data
  i1494.normalStyle = i1495[0]
  i1494.normalSpacingOffset = i1495[1]
  i1494.boldStyle = i1495[2]
  i1494.boldSpacing = i1495[3]
  i1494.italicStyle = i1495[4]
  i1494.tabSize = i1495[5]
  request.r(i1495[6], i1495[7], 0, i1494, 'atlas')
  i1494.m_SourceFontFileGUID = i1495[8]
  i1494.m_CreationSettings = request.d('TMPro.FontAssetCreationSettings', i1495[9], i1494.m_CreationSettings)
  request.r(i1495[10], i1495[11], 0, i1494, 'm_SourceFontFile')
  i1494.m_SourceFontFilePath = i1495[12]
  i1494.m_AtlasPopulationMode = i1495[13]
  i1494.InternalDynamicOS = !!i1495[14]
  var i1497 = i1495[15]
  var i1496 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.Glyph')))
  for(var i = 0; i < i1497.length; i += 1) {
    i1496.add(request.d('UnityEngine.TextCore.Glyph', i1497[i + 0]));
  }
  i1494.m_GlyphTable = i1496
  var i1499 = i1495[16]
  var i1498 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Character')))
  for(var i = 0; i < i1499.length; i += 1) {
    i1498.add(request.d('TMPro.TMP_Character', i1499[i + 0]));
  }
  i1494.m_CharacterTable = i1498
  var i1501 = i1495[17]
  var i1500 = []
  for(var i = 0; i < i1501.length; i += 2) {
  request.r(i1501[i + 0], i1501[i + 1], 2, i1500, '')
  }
  i1494.m_AtlasTextures = i1500
  i1494.m_AtlasTextureIndex = i1495[18]
  i1494.m_IsMultiAtlasTexturesEnabled = !!i1495[19]
  i1494.m_GetFontFeatures = !!i1495[20]
  i1494.m_ClearDynamicDataOnBuild = !!i1495[21]
  i1494.m_AtlasWidth = i1495[22]
  i1494.m_AtlasHeight = i1495[23]
  i1494.m_AtlasPadding = i1495[24]
  i1494.m_AtlasRenderMode = i1495[25]
  var i1503 = i1495[26]
  var i1502 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i1503.length; i += 1) {
    i1502.add(request.d('UnityEngine.TextCore.GlyphRect', i1503[i + 0]));
  }
  i1494.m_UsedGlyphRects = i1502
  var i1505 = i1495[27]
  var i1504 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i1505.length; i += 1) {
    i1504.add(request.d('UnityEngine.TextCore.GlyphRect', i1505[i + 0]));
  }
  i1494.m_FreeGlyphRects = i1504
  i1494.m_FontFeatureTable = request.d('TMPro.TMP_FontFeatureTable', i1495[28], i1494.m_FontFeatureTable)
  i1494.m_ShouldReimportFontFeatures = !!i1495[29]
  var i1507 = i1495[30]
  var i1506 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i1507.length; i += 2) {
  request.r(i1507[i + 0], i1507[i + 1], 1, i1506, '')
  }
  i1494.m_FallbackFontAssetTable = i1506
  var i1509 = i1495[31]
  var i1508 = []
  for(var i = 0; i < i1509.length; i += 1) {
    i1508.push( request.d('TMPro.TMP_FontWeightPair', i1509[i + 0]) );
  }
  i1494.m_FontWeightTable = i1508
  var i1511 = i1495[32]
  var i1510 = []
  for(var i = 0; i < i1511.length; i += 1) {
    i1510.push( request.d('TMPro.TMP_FontWeightPair', i1511[i + 0]) );
  }
  i1494.fontWeights = i1510
  i1494.m_fontInfo = request.d('TMPro.FaceInfo_Legacy', i1495[33], i1494.m_fontInfo)
  var i1513 = i1495[34]
  var i1512 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Glyph')))
  for(var i = 0; i < i1513.length; i += 1) {
    i1512.add(request.d('TMPro.TMP_Glyph', i1513[i + 0]));
  }
  i1494.m_glyphInfoList = i1512
  i1494.m_KerningTable = request.d('TMPro.KerningTable', i1495[35], i1494.m_KerningTable)
  var i1515 = i1495[36]
  var i1514 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i1515.length; i += 2) {
  request.r(i1515[i + 0], i1515[i + 1], 1, i1514, '')
  }
  i1494.fallbackFontAssets = i1514
  i1494.m_Version = i1495[37]
  i1494.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i1495[38], i1494.m_FaceInfo)
  request.r(i1495[39], i1495[40], 0, i1494, 'm_Material')
  return i1494
}

Deserializers["TMPro.FontAssetCreationSettings"] = function (request, data, root) {
  var i1516 = root || request.c( 'TMPro.FontAssetCreationSettings' )
  var i1517 = data
  i1516.sourceFontFileName = i1517[0]
  i1516.sourceFontFileGUID = i1517[1]
  i1516.faceIndex = i1517[2]
  i1516.pointSizeSamplingMode = i1517[3]
  i1516.pointSize = i1517[4]
  i1516.padding = i1517[5]
  i1516.paddingMode = i1517[6]
  i1516.packingMode = i1517[7]
  i1516.atlasWidth = i1517[8]
  i1516.atlasHeight = i1517[9]
  i1516.characterSetSelectionMode = i1517[10]
  i1516.characterSequence = i1517[11]
  i1516.referencedFontAssetGUID = i1517[12]
  i1516.referencedTextAssetGUID = i1517[13]
  i1516.fontStyle = i1517[14]
  i1516.fontStyleModifier = i1517[15]
  i1516.renderMode = i1517[16]
  i1516.includeFontFeatures = !!i1517[17]
  return i1516
}

Deserializers["UnityEngine.TextCore.Glyph"] = function (request, data, root) {
  var i1520 = root || request.c( 'UnityEngine.TextCore.Glyph' )
  var i1521 = data
  i1520.m_Index = i1521[0]
  i1520.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i1521[1], i1520.m_Metrics)
  i1520.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i1521[2], i1520.m_GlyphRect)
  i1520.m_Scale = i1521[3]
  i1520.m_AtlasIndex = i1521[4]
  i1520.m_ClassDefinitionType = i1521[5]
  return i1520
}

Deserializers["UnityEngine.TextCore.GlyphMetrics"] = function (request, data, root) {
  var i1522 = root || request.c( 'UnityEngine.TextCore.GlyphMetrics' )
  var i1523 = data
  i1522.m_Width = i1523[0]
  i1522.m_Height = i1523[1]
  i1522.m_HorizontalBearingX = i1523[2]
  i1522.m_HorizontalBearingY = i1523[3]
  i1522.m_HorizontalAdvance = i1523[4]
  return i1522
}

Deserializers["UnityEngine.TextCore.GlyphRect"] = function (request, data, root) {
  var i1524 = root || request.c( 'UnityEngine.TextCore.GlyphRect' )
  var i1525 = data
  i1524.m_X = i1525[0]
  i1524.m_Y = i1525[1]
  i1524.m_Width = i1525[2]
  i1524.m_Height = i1525[3]
  return i1524
}

Deserializers["TMPro.TMP_Character"] = function (request, data, root) {
  var i1528 = root || request.c( 'TMPro.TMP_Character' )
  var i1529 = data
  i1528.m_ElementType = i1529[0]
  i1528.m_Unicode = i1529[1]
  i1528.m_GlyphIndex = i1529[2]
  i1528.m_Scale = i1529[3]
  return i1528
}

Deserializers["TMPro.TMP_FontFeatureTable"] = function (request, data, root) {
  var i1534 = root || request.c( 'TMPro.TMP_FontFeatureTable' )
  var i1535 = data
  var i1537 = i1535[0]
  var i1536 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.MultipleSubstitutionRecord')))
  for(var i = 0; i < i1537.length; i += 1) {
    i1536.add(request.d('TMPro.MultipleSubstitutionRecord', i1537[i + 0]));
  }
  i1534.m_MultipleSubstitutionRecords = i1536
  var i1539 = i1535[1]
  var i1538 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.LigatureSubstitutionRecord')))
  for(var i = 0; i < i1539.length; i += 1) {
    i1538.add(request.d('TMPro.LigatureSubstitutionRecord', i1539[i + 0]));
  }
  i1534.m_LigatureSubstitutionRecords = i1538
  var i1541 = i1535[2]
  var i1540 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord')))
  for(var i = 0; i < i1541.length; i += 1) {
    i1540.add(request.d('UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord', i1541[i + 0]));
  }
  i1534.m_GlyphPairAdjustmentRecords = i1540
  var i1543 = i1535[3]
  var i1542 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.MarkToBaseAdjustmentRecord')))
  for(var i = 0; i < i1543.length; i += 1) {
    i1542.add(request.d('TMPro.MarkToBaseAdjustmentRecord', i1543[i + 0]));
  }
  i1534.m_MarkToBaseAdjustmentRecords = i1542
  var i1545 = i1535[4]
  var i1544 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.MarkToMarkAdjustmentRecord')))
  for(var i = 0; i < i1545.length; i += 1) {
    i1544.add(request.d('TMPro.MarkToMarkAdjustmentRecord', i1545[i + 0]));
  }
  i1534.m_MarkToMarkAdjustmentRecords = i1544
  return i1534
}

Deserializers["TMPro.MultipleSubstitutionRecord"] = function (request, data, root) {
  var i1548 = root || request.c( 'TMPro.MultipleSubstitutionRecord' )
  var i1549 = data
  i1548.m_TargetGlyphID = i1549[0]
  i1548.m_SubstituteGlyphIDs = i1549[1]
  return i1548
}

Deserializers["TMPro.LigatureSubstitutionRecord"] = function (request, data, root) {
  var i1552 = root || request.c( 'TMPro.LigatureSubstitutionRecord' )
  var i1553 = data
  i1552.m_ComponentGlyphIDs = i1553[0]
  i1552.m_LigatureGlyphID = i1553[1]
  return i1552
}

Deserializers["UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord"] = function (request, data, root) {
  var i1556 = root || request.c( 'UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord' )
  var i1557 = data
  i1556.m_FirstAdjustmentRecord = request.d('UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord', i1557[0], i1556.m_FirstAdjustmentRecord)
  i1556.m_SecondAdjustmentRecord = request.d('UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord', i1557[1], i1556.m_SecondAdjustmentRecord)
  i1556.m_FeatureLookupFlags = i1557[2]
  return i1556
}

Deserializers["TMPro.MarkToBaseAdjustmentRecord"] = function (request, data, root) {
  var i1560 = root || request.c( 'TMPro.MarkToBaseAdjustmentRecord' )
  var i1561 = data
  i1560.m_BaseGlyphID = i1561[0]
  i1560.m_BaseGlyphAnchorPoint = request.d('TMPro.GlyphAnchorPoint', i1561[1], i1560.m_BaseGlyphAnchorPoint)
  i1560.m_MarkGlyphID = i1561[2]
  i1560.m_MarkPositionAdjustment = request.d('TMPro.MarkPositionAdjustment', i1561[3], i1560.m_MarkPositionAdjustment)
  return i1560
}

Deserializers["TMPro.MarkToMarkAdjustmentRecord"] = function (request, data, root) {
  var i1564 = root || request.c( 'TMPro.MarkToMarkAdjustmentRecord' )
  var i1565 = data
  i1564.m_BaseMarkGlyphID = i1565[0]
  i1564.m_BaseMarkGlyphAnchorPoint = request.d('TMPro.GlyphAnchorPoint', i1565[1], i1564.m_BaseMarkGlyphAnchorPoint)
  i1564.m_CombiningMarkGlyphID = i1565[2]
  i1564.m_CombiningMarkPositionAdjustment = request.d('TMPro.MarkPositionAdjustment', i1565[3], i1564.m_CombiningMarkPositionAdjustment)
  return i1564
}

Deserializers["TMPro.TMP_FontWeightPair"] = function (request, data, root) {
  var i1570 = root || request.c( 'TMPro.TMP_FontWeightPair' )
  var i1571 = data
  request.r(i1571[0], i1571[1], 0, i1570, 'regularTypeface')
  request.r(i1571[2], i1571[3], 0, i1570, 'italicTypeface')
  return i1570
}

Deserializers["TMPro.FaceInfo_Legacy"] = function (request, data, root) {
  var i1572 = root || request.c( 'TMPro.FaceInfo_Legacy' )
  var i1573 = data
  i1572.Name = i1573[0]
  i1572.PointSize = i1573[1]
  i1572.Scale = i1573[2]
  i1572.CharacterCount = i1573[3]
  i1572.LineHeight = i1573[4]
  i1572.Baseline = i1573[5]
  i1572.Ascender = i1573[6]
  i1572.CapHeight = i1573[7]
  i1572.Descender = i1573[8]
  i1572.CenterLine = i1573[9]
  i1572.SuperscriptOffset = i1573[10]
  i1572.SubscriptOffset = i1573[11]
  i1572.SubSize = i1573[12]
  i1572.Underline = i1573[13]
  i1572.UnderlineThickness = i1573[14]
  i1572.strikethrough = i1573[15]
  i1572.strikethroughThickness = i1573[16]
  i1572.TabWidth = i1573[17]
  i1572.Padding = i1573[18]
  i1572.AtlasWidth = i1573[19]
  i1572.AtlasHeight = i1573[20]
  return i1572
}

Deserializers["TMPro.TMP_Glyph"] = function (request, data, root) {
  var i1576 = root || request.c( 'TMPro.TMP_Glyph' )
  var i1577 = data
  i1576.id = i1577[0]
  i1576.x = i1577[1]
  i1576.y = i1577[2]
  i1576.width = i1577[3]
  i1576.height = i1577[4]
  i1576.xOffset = i1577[5]
  i1576.yOffset = i1577[6]
  i1576.xAdvance = i1577[7]
  i1576.scale = i1577[8]
  return i1576
}

Deserializers["TMPro.KerningTable"] = function (request, data, root) {
  var i1578 = root || request.c( 'TMPro.KerningTable' )
  var i1579 = data
  var i1581 = i1579[0]
  var i1580 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.KerningPair')))
  for(var i = 0; i < i1581.length; i += 1) {
    i1580.add(request.d('TMPro.KerningPair', i1581[i + 0]));
  }
  i1578.kerningPairs = i1580
  return i1578
}

Deserializers["TMPro.KerningPair"] = function (request, data, root) {
  var i1584 = root || request.c( 'TMPro.KerningPair' )
  var i1585 = data
  i1584.xOffset = i1585[0]
  i1584.m_FirstGlyph = i1585[1]
  i1584.m_FirstGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i1585[2], i1584.m_FirstGlyphAdjustments)
  i1584.m_SecondGlyph = i1585[3]
  i1584.m_SecondGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i1585[4], i1584.m_SecondGlyphAdjustments)
  i1584.m_IgnoreSpacingAdjustments = !!i1585[5]
  return i1584
}

Deserializers["UnityEngine.TextCore.FaceInfo"] = function (request, data, root) {
  var i1586 = root || request.c( 'UnityEngine.TextCore.FaceInfo' )
  var i1587 = data
  i1586.m_FaceIndex = i1587[0]
  i1586.m_FamilyName = i1587[1]
  i1586.m_StyleName = i1587[2]
  i1586.m_PointSize = i1587[3]
  i1586.m_Scale = i1587[4]
  i1586.m_UnitsPerEM = i1587[5]
  i1586.m_LineHeight = i1587[6]
  i1586.m_AscentLine = i1587[7]
  i1586.m_CapLine = i1587[8]
  i1586.m_MeanLine = i1587[9]
  i1586.m_Baseline = i1587[10]
  i1586.m_DescentLine = i1587[11]
  i1586.m_SuperscriptOffset = i1587[12]
  i1586.m_SuperscriptSize = i1587[13]
  i1586.m_SubscriptOffset = i1587[14]
  i1586.m_SubscriptSize = i1587[15]
  i1586.m_UnderlineOffset = i1587[16]
  i1586.m_UnderlineThickness = i1587[17]
  i1586.m_StrikethroughOffset = i1587[18]
  i1586.m_StrikethroughThickness = i1587[19]
  i1586.m_TabWidth = i1587[20]
  return i1586
}

Deserializers["DG.Tweening.Core.DOTweenSettings"] = function (request, data, root) {
  var i1588 = root || request.c( 'DG.Tweening.Core.DOTweenSettings' )
  var i1589 = data
  i1588.useSafeMode = !!i1589[0]
  i1588.safeModeOptions = request.d('DG.Tweening.Core.DOTweenSettings+SafeModeOptions', i1589[1], i1588.safeModeOptions)
  i1588.timeScale = i1589[2]
  i1588.unscaledTimeScale = i1589[3]
  i1588.useSmoothDeltaTime = !!i1589[4]
  i1588.maxSmoothUnscaledTime = i1589[5]
  i1588.rewindCallbackMode = i1589[6]
  i1588.showUnityEditorReport = !!i1589[7]
  i1588.logBehaviour = i1589[8]
  i1588.drawGizmos = !!i1589[9]
  i1588.defaultRecyclable = !!i1589[10]
  i1588.defaultAutoPlay = i1589[11]
  i1588.defaultUpdateType = i1589[12]
  i1588.defaultTimeScaleIndependent = !!i1589[13]
  i1588.defaultEaseType = i1589[14]
  i1588.defaultEaseOvershootOrAmplitude = i1589[15]
  i1588.defaultEasePeriod = i1589[16]
  i1588.defaultAutoKill = !!i1589[17]
  i1588.defaultLoopType = i1589[18]
  i1588.debugMode = !!i1589[19]
  i1588.debugStoreTargetId = !!i1589[20]
  i1588.showPreviewPanel = !!i1589[21]
  i1588.storeSettingsLocation = i1589[22]
  i1588.modules = request.d('DG.Tweening.Core.DOTweenSettings+ModulesSetup', i1589[23], i1588.modules)
  i1588.createASMDEF = !!i1589[24]
  i1588.showPlayingTweens = !!i1589[25]
  i1588.showPausedTweens = !!i1589[26]
  return i1588
}

Deserializers["DG.Tweening.Core.DOTweenSettings+SafeModeOptions"] = function (request, data, root) {
  var i1590 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+SafeModeOptions' )
  var i1591 = data
  i1590.logBehaviour = i1591[0]
  i1590.nestedTweenFailureBehaviour = i1591[1]
  return i1590
}

Deserializers["DG.Tweening.Core.DOTweenSettings+ModulesSetup"] = function (request, data, root) {
  var i1592 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+ModulesSetup' )
  var i1593 = data
  i1592.showPanel = !!i1593[0]
  i1592.audioEnabled = !!i1593[1]
  i1592.physicsEnabled = !!i1593[2]
  i1592.physics2DEnabled = !!i1593[3]
  i1592.spriteEnabled = !!i1593[4]
  i1592.uiEnabled = !!i1593[5]
  i1592.textMeshProEnabled = !!i1593[6]
  i1592.tk2DEnabled = !!i1593[7]
  i1592.deAudioEnabled = !!i1593[8]
  i1592.deUnityExtendedEnabled = !!i1593[9]
  i1592.epoOutlineEnabled = !!i1593[10]
  return i1592
}

Deserializers["TMPro.TMP_Settings"] = function (request, data, root) {
  var i1594 = root || request.c( 'TMPro.TMP_Settings' )
  var i1595 = data
  i1594.assetVersion = i1595[0]
  i1594.m_TextWrappingMode = i1595[1]
  i1594.m_enableKerning = !!i1595[2]
  var i1597 = i1595[3]
  var i1596 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.OTL_FeatureTag')))
  for(var i = 0; i < i1597.length; i += 1) {
    i1596.add(i1597[i + 0]);
  }
  i1594.m_ActiveFontFeatures = i1596
  i1594.m_enableExtraPadding = !!i1595[4]
  i1594.m_enableTintAllSprites = !!i1595[5]
  i1594.m_enableParseEscapeCharacters = !!i1595[6]
  i1594.m_EnableRaycastTarget = !!i1595[7]
  i1594.m_GetFontFeaturesAtRuntime = !!i1595[8]
  i1594.m_missingGlyphCharacter = i1595[9]
  i1594.m_ClearDynamicDataOnBuild = !!i1595[10]
  i1594.m_warningsDisabled = !!i1595[11]
  request.r(i1595[12], i1595[13], 0, i1594, 'm_defaultFontAsset')
  i1594.m_defaultFontAssetPath = i1595[14]
  i1594.m_defaultFontSize = i1595[15]
  i1594.m_defaultAutoSizeMinRatio = i1595[16]
  i1594.m_defaultAutoSizeMaxRatio = i1595[17]
  i1594.m_defaultTextMeshProTextContainerSize = new pc.Vec2( i1595[18], i1595[19] )
  i1594.m_defaultTextMeshProUITextContainerSize = new pc.Vec2( i1595[20], i1595[21] )
  i1594.m_autoSizeTextContainer = !!i1595[22]
  i1594.m_IsTextObjectScaleStatic = !!i1595[23]
  var i1599 = i1595[24]
  var i1598 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i1599.length; i += 2) {
  request.r(i1599[i + 0], i1599[i + 1], 1, i1598, '')
  }
  i1594.m_fallbackFontAssets = i1598
  i1594.m_matchMaterialPreset = !!i1595[25]
  i1594.m_HideSubTextObjects = !!i1595[26]
  request.r(i1595[27], i1595[28], 0, i1594, 'm_defaultSpriteAsset')
  i1594.m_defaultSpriteAssetPath = i1595[29]
  i1594.m_enableEmojiSupport = !!i1595[30]
  i1594.m_MissingCharacterSpriteUnicode = i1595[31]
  var i1601 = i1595[32]
  var i1600 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Asset')))
  for(var i = 0; i < i1601.length; i += 2) {
  request.r(i1601[i + 0], i1601[i + 1], 1, i1600, '')
  }
  i1594.m_EmojiFallbackTextAssets = i1600
  i1594.m_defaultColorGradientPresetsPath = i1595[33]
  request.r(i1595[34], i1595[35], 0, i1594, 'm_defaultStyleSheet')
  i1594.m_StyleSheetsResourcePath = i1595[36]
  request.r(i1595[37], i1595[38], 0, i1594, 'm_leadingCharacters')
  request.r(i1595[39], i1595[40], 0, i1594, 'm_followingCharacters')
  i1594.m_UseModernHangulLineBreakingRules = !!i1595[41]
  return i1594
}

Deserializers["TMPro.TMP_SpriteAsset"] = function (request, data, root) {
  var i1604 = root || request.c( 'TMPro.TMP_SpriteAsset' )
  var i1605 = data
  request.r(i1605[0], i1605[1], 0, i1604, 'spriteSheet')
  var i1607 = i1605[2]
  var i1606 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Sprite')))
  for(var i = 0; i < i1607.length; i += 1) {
    i1606.add(request.d('TMPro.TMP_Sprite', i1607[i + 0]));
  }
  i1604.spriteInfoList = i1606
  var i1609 = i1605[3]
  var i1608 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteAsset')))
  for(var i = 0; i < i1609.length; i += 2) {
  request.r(i1609[i + 0], i1609[i + 1], 1, i1608, '')
  }
  i1604.fallbackSpriteAssets = i1608
  var i1611 = i1605[4]
  var i1610 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteCharacter')))
  for(var i = 0; i < i1611.length; i += 1) {
    i1610.add(request.d('TMPro.TMP_SpriteCharacter', i1611[i + 0]));
  }
  i1604.m_SpriteCharacterTable = i1610
  var i1613 = i1605[5]
  var i1612 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteGlyph')))
  for(var i = 0; i < i1613.length; i += 1) {
    i1612.add(request.d('TMPro.TMP_SpriteGlyph', i1613[i + 0]));
  }
  i1604.m_GlyphTable = i1612
  i1604.m_Version = i1605[6]
  i1604.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i1605[7], i1604.m_FaceInfo)
  request.r(i1605[8], i1605[9], 0, i1604, 'm_Material')
  return i1604
}

Deserializers["TMPro.TMP_Sprite"] = function (request, data, root) {
  var i1616 = root || request.c( 'TMPro.TMP_Sprite' )
  var i1617 = data
  i1616.name = i1617[0]
  i1616.hashCode = i1617[1]
  i1616.unicode = i1617[2]
  i1616.pivot = new pc.Vec2( i1617[3], i1617[4] )
  request.r(i1617[5], i1617[6], 0, i1616, 'sprite')
  i1616.id = i1617[7]
  i1616.x = i1617[8]
  i1616.y = i1617[9]
  i1616.width = i1617[10]
  i1616.height = i1617[11]
  i1616.xOffset = i1617[12]
  i1616.yOffset = i1617[13]
  i1616.xAdvance = i1617[14]
  i1616.scale = i1617[15]
  return i1616
}

Deserializers["TMPro.TMP_SpriteCharacter"] = function (request, data, root) {
  var i1622 = root || request.c( 'TMPro.TMP_SpriteCharacter' )
  var i1623 = data
  i1622.m_Name = i1623[0]
  i1622.m_ElementType = i1623[1]
  i1622.m_Unicode = i1623[2]
  i1622.m_GlyphIndex = i1623[3]
  i1622.m_Scale = i1623[4]
  return i1622
}

Deserializers["TMPro.TMP_SpriteGlyph"] = function (request, data, root) {
  var i1626 = root || request.c( 'TMPro.TMP_SpriteGlyph' )
  var i1627 = data
  request.r(i1627[0], i1627[1], 0, i1626, 'sprite')
  i1626.m_Index = i1627[2]
  i1626.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i1627[3], i1626.m_Metrics)
  i1626.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i1627[4], i1626.m_GlyphRect)
  i1626.m_Scale = i1627[5]
  i1626.m_AtlasIndex = i1627[6]
  i1626.m_ClassDefinitionType = i1627[7]
  return i1626
}

Deserializers["TMPro.TMP_StyleSheet"] = function (request, data, root) {
  var i1628 = root || request.c( 'TMPro.TMP_StyleSheet' )
  var i1629 = data
  var i1631 = i1629[0]
  var i1630 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Style')))
  for(var i = 0; i < i1631.length; i += 1) {
    i1630.add(request.d('TMPro.TMP_Style', i1631[i + 0]));
  }
  i1628.m_StyleList = i1630
  return i1628
}

Deserializers["TMPro.TMP_Style"] = function (request, data, root) {
  var i1634 = root || request.c( 'TMPro.TMP_Style' )
  var i1635 = data
  i1634.m_Name = i1635[0]
  i1634.m_HashCode = i1635[1]
  i1634.m_OpeningDefinition = i1635[2]
  i1634.m_ClosingDefinition = i1635[3]
  i1634.m_OpeningTagArray = i1635[4]
  i1634.m_ClosingTagArray = i1635[5]
  return i1634
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i1636 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i1637 = data
  var i1639 = i1637[0]
  var i1638 = []
  for(var i = 0; i < i1639.length; i += 1) {
    i1638.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i1639[i + 0]) );
  }
  i1636.files = i1638
  i1636.componentToPrefabIds = i1637[1]
  return i1636
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i1642 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i1643 = data
  i1642.path = i1643[0]
  request.r(i1643[1], i1643[2], 0, i1642, 'unityObject')
  return i1642
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i1644 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i1645 = data
  var i1647 = i1645[0]
  var i1646 = []
  for(var i = 0; i < i1647.length; i += 1) {
    i1646.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i1647[i + 0]) );
  }
  i1644.scriptsExecutionOrder = i1646
  var i1649 = i1645[1]
  var i1648 = []
  for(var i = 0; i < i1649.length; i += 1) {
    i1648.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i1649[i + 0]) );
  }
  i1644.sortingLayers = i1648
  var i1651 = i1645[2]
  var i1650 = []
  for(var i = 0; i < i1651.length; i += 1) {
    i1650.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i1651[i + 0]) );
  }
  i1644.cullingLayers = i1650
  i1644.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i1645[3], i1644.timeSettings)
  i1644.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i1645[4], i1644.physicsSettings)
  i1644.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i1645[5], i1644.physics2DSettings)
  i1644.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i1645[6], i1644.qualitySettings)
  i1644.enableRealtimeShadows = !!i1645[7]
  i1644.enableAutoInstancing = !!i1645[8]
  i1644.enableStaticBatching = !!i1645[9]
  i1644.enableDynamicBatching = !!i1645[10]
  i1644.usePreservativeDynamicBatching = !!i1645[11]
  i1644.lightmapEncodingQuality = i1645[12]
  i1644.desiredColorSpace = i1645[13]
  var i1653 = i1645[14]
  var i1652 = []
  for(var i = 0; i < i1653.length; i += 1) {
    i1652.push( i1653[i + 0] );
  }
  i1644.allTags = i1652
  return i1644
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i1656 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i1657 = data
  i1656.name = i1657[0]
  i1656.value = i1657[1]
  return i1656
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i1660 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i1661 = data
  i1660.id = i1661[0]
  i1660.name = i1661[1]
  i1660.value = i1661[2]
  return i1660
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i1664 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i1665 = data
  i1664.id = i1665[0]
  i1664.name = i1665[1]
  return i1664
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i1666 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i1667 = data
  i1666.fixedDeltaTime = i1667[0]
  i1666.maximumDeltaTime = i1667[1]
  i1666.timeScale = i1667[2]
  i1666.maximumParticleTimestep = i1667[3]
  return i1666
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i1668 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i1669 = data
  i1668.gravity = new pc.Vec3( i1669[0], i1669[1], i1669[2] )
  i1668.defaultSolverIterations = i1669[3]
  i1668.bounceThreshold = i1669[4]
  i1668.autoSyncTransforms = !!i1669[5]
  i1668.autoSimulation = !!i1669[6]
  var i1671 = i1669[7]
  var i1670 = []
  for(var i = 0; i < i1671.length; i += 1) {
    i1670.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i1671[i + 0]) );
  }
  i1668.collisionMatrix = i1670
  return i1668
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i1674 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i1675 = data
  i1674.enabled = !!i1675[0]
  i1674.layerId = i1675[1]
  i1674.otherLayerId = i1675[2]
  return i1674
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i1676 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i1677 = data
  request.r(i1677[0], i1677[1], 0, i1676, 'material')
  i1676.gravity = new pc.Vec2( i1677[2], i1677[3] )
  i1676.positionIterations = i1677[4]
  i1676.velocityIterations = i1677[5]
  i1676.velocityThreshold = i1677[6]
  i1676.maxLinearCorrection = i1677[7]
  i1676.maxAngularCorrection = i1677[8]
  i1676.maxTranslationSpeed = i1677[9]
  i1676.maxRotationSpeed = i1677[10]
  i1676.baumgarteScale = i1677[11]
  i1676.baumgarteTOIScale = i1677[12]
  i1676.timeToSleep = i1677[13]
  i1676.linearSleepTolerance = i1677[14]
  i1676.angularSleepTolerance = i1677[15]
  i1676.defaultContactOffset = i1677[16]
  i1676.autoSimulation = !!i1677[17]
  i1676.queriesHitTriggers = !!i1677[18]
  i1676.queriesStartInColliders = !!i1677[19]
  i1676.callbacksOnDisable = !!i1677[20]
  i1676.reuseCollisionCallbacks = !!i1677[21]
  i1676.autoSyncTransforms = !!i1677[22]
  var i1679 = i1677[23]
  var i1678 = []
  for(var i = 0; i < i1679.length; i += 1) {
    i1678.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i1679[i + 0]) );
  }
  i1676.collisionMatrix = i1678
  return i1676
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i1682 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i1683 = data
  i1682.enabled = !!i1683[0]
  i1682.layerId = i1683[1]
  i1682.otherLayerId = i1683[2]
  return i1682
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i1684 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i1685 = data
  var i1687 = i1685[0]
  var i1686 = []
  for(var i = 0; i < i1687.length; i += 1) {
    i1686.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i1687[i + 0]) );
  }
  i1684.qualityLevels = i1686
  var i1689 = i1685[1]
  var i1688 = []
  for(var i = 0; i < i1689.length; i += 1) {
    i1688.push( i1689[i + 0] );
  }
  i1684.names = i1688
  i1684.shadows = i1685[2]
  i1684.anisotropicFiltering = i1685[3]
  i1684.antiAliasing = i1685[4]
  i1684.lodBias = i1685[5]
  i1684.shadowCascades = i1685[6]
  i1684.shadowDistance = i1685[7]
  i1684.shadowmaskMode = i1685[8]
  i1684.shadowProjection = i1685[9]
  i1684.shadowResolution = i1685[10]
  i1684.softParticles = !!i1685[11]
  i1684.softVegetation = !!i1685[12]
  i1684.activeColorSpace = i1685[13]
  i1684.desiredColorSpace = i1685[14]
  i1684.masterTextureLimit = i1685[15]
  i1684.maxQueuedFrames = i1685[16]
  i1684.particleRaycastBudget = i1685[17]
  i1684.pixelLightCount = i1685[18]
  i1684.realtimeReflectionProbes = !!i1685[19]
  i1684.shadowCascade2Split = i1685[20]
  i1684.shadowCascade4Split = new pc.Vec3( i1685[21], i1685[22], i1685[23] )
  i1684.streamingMipmapsActive = !!i1685[24]
  i1684.vSyncCount = i1685[25]
  i1684.asyncUploadBufferSize = i1685[26]
  i1684.asyncUploadTimeSlice = i1685[27]
  i1684.billboardsFaceCameraPosition = !!i1685[28]
  i1684.shadowNearPlaneOffset = i1685[29]
  i1684.streamingMipmapsMemoryBudget = i1685[30]
  i1684.maximumLODLevel = i1685[31]
  i1684.streamingMipmapsAddAllCameras = !!i1685[32]
  i1684.streamingMipmapsMaxLevelReduction = i1685[33]
  i1684.streamingMipmapsRenderersPerFrame = i1685[34]
  i1684.resolutionScalingFixedDPIFactor = i1685[35]
  i1684.streamingMipmapsMaxFileIORequests = i1685[36]
  i1684.currentQualityLevel = i1685[37]
  return i1684
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i1692 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i1693 = data
  request.r(i1693[0], i1693[1], 0, i1692, 'm_ObjectArgument')
  i1692.m_ObjectArgumentAssemblyTypeName = i1693[2]
  i1692.m_IntArgument = i1693[3]
  i1692.m_FloatArgument = i1693[4]
  i1692.m_StringArgument = i1693[5]
  i1692.m_BoolArgument = !!i1693[6]
  return i1692
}

Deserializers["UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord"] = function (request, data, root) {
  var i1694 = root || request.c( 'UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord' )
  var i1695 = data
  i1694.m_GlyphIndex = i1695[0]
  i1694.m_GlyphValueRecord = request.d('UnityEngine.TextCore.LowLevel.GlyphValueRecord', i1695[1], i1694.m_GlyphValueRecord)
  return i1694
}

Deserializers["TMPro.GlyphAnchorPoint"] = function (request, data, root) {
  var i1696 = root || request.c( 'TMPro.GlyphAnchorPoint' )
  var i1697 = data
  i1696.m_XCoordinate = i1697[0]
  i1696.m_YCoordinate = i1697[1]
  return i1696
}

Deserializers["TMPro.MarkPositionAdjustment"] = function (request, data, root) {
  var i1698 = root || request.c( 'TMPro.MarkPositionAdjustment' )
  var i1699 = data
  i1698.m_XPositionAdjustment = i1699[0]
  i1698.m_YPositionAdjustment = i1699[1]
  return i1698
}

Deserializers["TMPro.GlyphValueRecord_Legacy"] = function (request, data, root) {
  var i1700 = root || request.c( 'TMPro.GlyphValueRecord_Legacy' )
  var i1701 = data
  i1700.xPlacement = i1701[0]
  i1700.yPlacement = i1701[1]
  i1700.xAdvance = i1701[2]
  i1700.yAdvance = i1701[3]
  return i1700
}

Deserializers["UnityEngine.TextCore.LowLevel.GlyphValueRecord"] = function (request, data, root) {
  var i1702 = root || request.c( 'UnityEngine.TextCore.LowLevel.GlyphValueRecord' )
  var i1703 = data
  i1702.m_XPlacement = i1703[0]
  i1702.m_YPlacement = i1703[1]
  i1702.m_XAdvance = i1703[2]
  i1702.m_YAdvance = i1703[3]
  return i1702
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10,"graphicsFormat":11,"sRGBTexture":12,"desiredColorSpace":13,"wrapU":14,"wrapV":15},"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"aspect":0,"orthographic":1,"orthographicSize":2,"backgroundColor":3,"nearClipPlane":7,"farClipPlane":8,"fieldOfView":9,"depth":10,"clearFlags":11,"cullingMask":12,"rect":13,"targetTexture":14,"usePhysicalProperties":16,"focalLength":17,"sensorSize":18,"lensShift":20,"gateFit":22,"commandBufferCount":23,"cameraType":24,"enabled":25},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"planeDistance":0,"referencePixelsPerUnit":1,"isFallbackOverlay":2,"renderMode":3,"renderOrder":4,"sortingLayerName":5,"sortingOrder":6,"scaleFactor":7,"worldCamera":8,"overrideSorting":10,"pixelPerfect":11,"targetDisplay":12,"overridePixelPerfect":13,"enabled":14},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Components.AudioSource":{"clip":0,"outputAudioMixerGroup":2,"playOnAwake":4,"loop":5,"time":6,"volume":7,"pitch":8,"enabled":9},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"customReflection":36,"defaultReflection":38,"defaultReflectionMode":40,"defaultReflectionResolution":41,"sunLightObjectId":42,"pixelLightCount":43,"defaultReflectionHDR":44,"hasLightDataAsset":45,"hasManualGenerate":46},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2,"shadowMask":4},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"hasDepthOnlyPass":10,"isCreatedByShaderGraph":11,"disableBatching":12,"compiled":13},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"exportedForWebGl2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.AudioClip":{"name":0},"Luna.Unity.DTO.UnityEngine.Assets.TextAsset":{"name":0,"bytes64":1,"data":2},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableStaticBatching":9,"enableDynamicBatching":10,"usePreservativeDynamicBatching":11,"lightmapEncodingQuality":12,"desiredColorSpace":13,"allTags":14},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37}}

Deserializers.requiredComponents = {"31":[32],"33":[32],"34":[32],"35":[32],"36":[32],"37":[32],"38":[39],"40":[2],"41":[42],"43":[42],"44":[42],"45":[42],"46":[42],"47":[42],"48":[49],"50":[49],"51":[49],"52":[49],"53":[49],"54":[49],"55":[49],"56":[49],"57":[49],"58":[49],"59":[49],"60":[49],"61":[49],"62":[2],"63":[64],"65":[66],"67":[66],"8":[7],"68":[69],"70":[2],"71":[72],"73":[7],"74":[11,7],"75":[64],"76":[11,7],"77":[7],"78":[7],"79":[64,7],"16":[7,11],"80":[81],"82":[81],"83":[81],"84":[7],"85":[7],"10":[8],"14":[11,7],"13":[7],"9":[8],"86":[7],"87":[7],"88":[7],"89":[7],"90":[7],"91":[7],"92":[7],"93":[7],"94":[7],"12":[11,7],"95":[7],"96":[7],"97":[7],"98":[7],"99":[11,7],"100":[7],"101":[5],"102":[5],"6":[5],"103":[5],"104":[2],"105":[2]}

Deserializers.types = ["UnityEngine.Shader","UnityEngine.Texture2D","UnityEngine.Camera","UnityEngine.AudioListener","UnityEngine.EventSystems.UIBehaviour","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","UnityEngine.RectTransform","UnityEngine.Canvas","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","UnityEngine.CanvasRenderer","UnityEngine.UI.RawImage","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.Image","UnityEngine.Sprite","TMPro.TextMeshProUGUI","TMPro.TMP_FontAsset","UnityEngine.Material","UnityEngine.MonoBehaviour","TutController","DG.Tweening.DOTweenAnimation","UnityEngine.UI.Button","UnityEngine.AudioSource","LunaController","UnityEngine.AudioClip","DG.Tweening.Core.DOTweenSettings","TMPro.TMP_Settings","TMPro.TMP_SpriteAsset","TMPro.TMP_StyleSheet","UnityEngine.TextAsset","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.SkinnedMeshRenderer","UnityEngine.FlareLayer","UnityEngine.CharacterJoint","UnityEngine.Rigidbody","UnityEngine.ConfigurableJoint","UnityEngine.ConstantForce","UnityEngine.FixedJoint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.CompositeCollider2D","UnityEngine.Rigidbody2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.MeshRenderer","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","UnityEngine.U2D.Animation.SpriteSkin","UnityEngine.SpriteRenderer","UnityEngine.U2D.PixelPerfectCamera","UnityEngine.U2D.SpriteShapeController","UnityEngine.U2D.SpriteShapeRenderer","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text","TMPro.TextContainer","TMPro.TextMeshPro","Unity.VisualScripting.SceneVariables","Unity.VisualScripting.Variables","Unity.VisualScripting.ScriptMachine","Unity.VisualScripting.StateMachine","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.Mask","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RectMask2D","UnityEngine.UI.ScrollRect","UnityEngine.UI.Scrollbar","UnityEngine.UI.Slider","UnityEngine.UI.Text","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster"]

Deserializers.unityVersion = "6000.0.78f1";

Deserializers.productName = "BP_V26";

Deserializers.lunaInitializationTime = "08/28/2026 02:07:08";

Deserializers.lunaDaysRunning = "0.0";

Deserializers.lunaVersion = "7.2.0";

Deserializers.lunaSHA = "ea08d29afe2968efcb8d91d5624f033c6485cc68";

Deserializers.creativeName = "BTR_V02_NgocNDL_TamNTM";

Deserializers.lunaAppID = "42274";

Deserializers.projectId = "cf5fc950f05ab5e4dbc1af58c0178185";

Deserializers.packagesInfo = "com.unity.ugui: 2.0.0";

Deserializers.externalJsLibraries = "";

Deserializers.androidLink = ( typeof window !== "undefined")&&window.$environment.packageConfig.androidLink?window.$environment.packageConfig.androidLink:'Empty';

Deserializers.iosLink = ( typeof window !== "undefined")&&window.$environment.packageConfig.iosLink?window.$environment.packageConfig.iosLink:'Empty';

Deserializers.base64Enabled = "True";

Deserializers.minifyEnabled = "True";

Deserializers.isForceUncompressed = "False";

Deserializers.isAntiAliasingEnabled = "False";

Deserializers.isRuntimeAnalysisEnabledForCode = "False";

Deserializers.runtimeAnalysisExcludedClassesCount = "1772";

Deserializers.runtimeAnalysisExcludedMethodsCount = "4114";

Deserializers.runtimeAnalysisExcludedModules = "physics3d, physics2d, particle-system, prefabs, mecanim-wasm";

Deserializers.isRuntimeAnalysisEnabledForShaders = "True";

Deserializers.isRealtimeShadowsEnabled = "False";

Deserializers.isLunaCompilerV2Used = "False";

Deserializers.companyName = "DefaultCompany";

Deserializers.buildPlatform = "StandaloneWindows64";

Deserializers.applicationIdentifier = "com.DefaultCompany.2D-Project";

Deserializers.disableAntiAliasing = true;

Deserializers.graphicsConstraint = 24;

Deserializers.linearColorSpace = true;

Deserializers.buildID = "44b23d72-ce00-4f5e-9ab0-88d0f9cc9135";

Deserializers.runtimeInitializeOnLoadInfos = [[["Unity","PerformanceTesting","PerformanceTest","ResetStaticsOnLoad"],["UnityEngine","U2D","Animation","GpuDeformationSystem","CreateFallbackBuffer"],["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"],["UnityEngine","AI","NavMesh","ClearPreUpdateListeners"]],[["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"]],[],[["Unity","PerformanceTesting","Data","RunSettings","ResetStaticsOnLoad"],["Unity","PerformanceTesting","PlayerCallbacks","ResetStaticsOnLoad"]]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

