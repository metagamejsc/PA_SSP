var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i458 = root || request.c( 'UnityEngine.JointSpring' )
  var i459 = data
  i458.spring = i459[0]
  i458.damper = i459[1]
  i458.targetPosition = i459[2]
  return i458
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i460 = root || request.c( 'UnityEngine.JointMotor' )
  var i461 = data
  i460.m_TargetVelocity = i461[0]
  i460.m_Force = i461[1]
  i460.m_FreeSpin = i461[2]
  return i460
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i462 = root || request.c( 'UnityEngine.JointLimits' )
  var i463 = data
  i462.m_Min = i463[0]
  i462.m_Max = i463[1]
  i462.m_Bounciness = i463[2]
  i462.m_BounceMinVelocity = i463[3]
  i462.m_ContactDistance = i463[4]
  i462.minBounce = i463[5]
  i462.maxBounce = i463[6]
  return i462
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i464 = root || request.c( 'UnityEngine.JointDrive' )
  var i465 = data
  i464.m_PositionSpring = i465[0]
  i464.m_PositionDamper = i465[1]
  i464.m_MaximumForce = i465[2]
  i464.m_UseAcceleration = i465[3]
  return i464
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i466 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i467 = data
  i466.m_Spring = i467[0]
  i466.m_Damper = i467[1]
  return i466
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i468 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i469 = data
  i468.m_Limit = i469[0]
  i468.m_Bounciness = i469[1]
  i468.m_ContactDistance = i469[2]
  return i468
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i470 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i471 = data
  i470.m_ExtremumSlip = i471[0]
  i470.m_ExtremumValue = i471[1]
  i470.m_AsymptoteSlip = i471[2]
  i470.m_AsymptoteValue = i471[3]
  i470.m_Stiffness = i471[4]
  return i470
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i472 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i473 = data
  i472.m_LowerAngle = i473[0]
  i472.m_UpperAngle = i473[1]
  return i472
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i474 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i475 = data
  i474.m_MotorSpeed = i475[0]
  i474.m_MaximumMotorTorque = i475[1]
  return i474
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i476 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i477 = data
  i476.m_DampingRatio = i477[0]
  i476.m_Frequency = i477[1]
  i476.m_Angle = i477[2]
  return i476
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i478 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i479 = data
  i478.m_LowerTranslation = i479[0]
  i478.m_UpperTranslation = i479[1]
  return i478
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i480 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i481 = data
  i480.position = new pc.Vec3( i481[0], i481[1], i481[2] )
  i480.scale = new pc.Vec3( i481[3], i481[4], i481[5] )
  i480.rotation = new pc.Quat(i481[6], i481[7], i481[8], i481[9])
  return i480
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer"] = function (request, data, root) {
  var i482 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer' )
  var i483 = data
  request.r(i483[0], i483[1], 0, i482, 'sharedMesh')
  var i485 = i483[2]
  var i484 = []
  for(var i = 0; i < i485.length; i += 2) {
  request.r(i485[i + 0], i485[i + 1], 2, i484, '')
  }
  i482.bones = i484
  i482.updateWhenOffscreen = !!i483[3]
  i482.localBounds = i483[4]
  request.r(i483[5], i483[6], 0, i482, 'rootBone')
  var i487 = i483[7]
  var i486 = []
  for(var i = 0; i < i487.length; i += 1) {
    i486.push( request.d('Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight', i487[i + 0]) );
  }
  i482.blendShapesWeights = i486
  i482.enabled = !!i483[8]
  request.r(i483[9], i483[10], 0, i482, 'sharedMaterial')
  var i489 = i483[11]
  var i488 = []
  for(var i = 0; i < i489.length; i += 2) {
  request.r(i489[i + 0], i489[i + 1], 2, i488, '')
  }
  i482.sharedMaterials = i488
  i482.receiveShadows = !!i483[12]
  i482.shadowCastingMode = i483[13]
  i482.sortingLayerID = i483[14]
  i482.sortingOrder = i483[15]
  i482.lightmapIndex = i483[16]
  i482.lightmapSceneIndex = i483[17]
  i482.lightmapScaleOffset = new pc.Vec4( i483[18], i483[19], i483[20], i483[21] )
  i482.lightProbeUsage = i483[22]
  i482.reflectionProbeUsage = i483[23]
  return i482
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight"] = function (request, data, root) {
  var i494 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight' )
  var i495 = data
  i494.weight = i495[0]
  return i494
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i498 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i499 = data
  i498.name = i499[0]
  i498.tagId = i499[1]
  i498.enabled = !!i499[2]
  i498.isStatic = !!i499[3]
  i498.layer = i499[4]
  return i498
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshFilter"] = function (request, data, root) {
  var i500 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshFilter' )
  var i501 = data
  request.r(i501[0], i501[1], 0, i500, 'sharedMesh')
  return i500
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshRenderer"] = function (request, data, root) {
  var i502 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshRenderer' )
  var i503 = data
  request.r(i503[0], i503[1], 0, i502, 'additionalVertexStreams')
  i502.enabled = !!i503[2]
  request.r(i503[3], i503[4], 0, i502, 'sharedMaterial')
  var i505 = i503[5]
  var i504 = []
  for(var i = 0; i < i505.length; i += 2) {
  request.r(i505[i + 0], i505[i + 1], 2, i504, '')
  }
  i502.sharedMaterials = i504
  i502.receiveShadows = !!i503[6]
  i502.shadowCastingMode = i503[7]
  i502.sortingLayerID = i503[8]
  i502.sortingOrder = i503[9]
  i502.lightmapIndex = i503[10]
  i502.lightmapSceneIndex = i503[11]
  i502.lightmapScaleOffset = new pc.Vec4( i503[12], i503[13], i503[14], i503[15] )
  i502.lightProbeUsage = i503[16]
  i502.reflectionProbeUsage = i503[17]
  return i502
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i506 = root || new pc.UnityMaterial()
  var i507 = data
  i506.name = i507[0]
  request.r(i507[1], i507[2], 0, i506, 'shader')
  i506.renderQueue = i507[3]
  i506.enableInstancing = !!i507[4]
  var i509 = i507[5]
  var i508 = []
  for(var i = 0; i < i509.length; i += 1) {
    i508.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i509[i + 0]) );
  }
  i506.floatParameters = i508
  var i511 = i507[6]
  var i510 = []
  for(var i = 0; i < i511.length; i += 1) {
    i510.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i511[i + 0]) );
  }
  i506.colorParameters = i510
  var i513 = i507[7]
  var i512 = []
  for(var i = 0; i < i513.length; i += 1) {
    i512.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i513[i + 0]) );
  }
  i506.vectorParameters = i512
  var i515 = i507[8]
  var i514 = []
  for(var i = 0; i < i515.length; i += 1) {
    i514.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i515[i + 0]) );
  }
  i506.textureParameters = i514
  var i517 = i507[9]
  var i516 = []
  for(var i = 0; i < i517.length; i += 1) {
    i516.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i517[i + 0]) );
  }
  i506.materialFlags = i516
  return i506
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i520 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i521 = data
  i520.name = i521[0]
  i520.value = i521[1]
  return i520
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i524 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i525 = data
  i524.name = i525[0]
  i524.value = new pc.Color(i525[1], i525[2], i525[3], i525[4])
  return i524
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i528 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i529 = data
  i528.name = i529[0]
  i528.value = new pc.Vec4( i529[1], i529[2], i529[3], i529[4] )
  return i528
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i532 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i533 = data
  i532.name = i533[0]
  request.r(i533[1], i533[2], 0, i532, 'value')
  return i532
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i536 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i537 = data
  i536.name = i537[0]
  i536.enabled = !!i537[1]
  return i536
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i538 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i539 = data
  i538.name = i539[0]
  i538.width = i539[1]
  i538.height = i539[2]
  i538.mipmapCount = i539[3]
  i538.anisoLevel = i539[4]
  i538.filterMode = i539[5]
  i538.hdr = !!i539[6]
  i538.format = i539[7]
  i538.wrapMode = i539[8]
  i538.alphaIsTransparency = !!i539[9]
  i538.alphaSource = i539[10]
  i538.graphicsFormat = i539[11]
  i538.sRGBTexture = !!i539[12]
  i538.desiredColorSpace = i539[13]
  i538.wrapU = i539[14]
  i538.wrapV = i539[15]
  return i538
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh"] = function (request, data, root) {
  var i540 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh' )
  var i541 = data
  i540.name = i541[0]
  i540.halfPrecision = !!i541[1]
  i540.useSimplification = !!i541[2]
  i540.useUInt32IndexFormat = !!i541[3]
  i540.vertexCount = i541[4]
  i540.aabb = i541[5]
  var i543 = i541[6]
  var i542 = []
  for(var i = 0; i < i543.length; i += 1) {
    i542.push( !!i543[i + 0] );
  }
  i540.streams = i542
  i540.vertices = i541[7]
  var i545 = i541[8]
  var i544 = []
  for(var i = 0; i < i545.length; i += 1) {
    i544.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh', i545[i + 0]) );
  }
  i540.subMeshes = i544
  var i547 = i541[9]
  var i546 = []
  for(var i = 0; i < i547.length; i += 16) {
    i546.push( new pc.Mat4().setData(i547[i + 0], i547[i + 1], i547[i + 2], i547[i + 3],  i547[i + 4], i547[i + 5], i547[i + 6], i547[i + 7],  i547[i + 8], i547[i + 9], i547[i + 10], i547[i + 11],  i547[i + 12], i547[i + 13], i547[i + 14], i547[i + 15]) );
  }
  i540.bindposes = i546
  var i549 = i541[10]
  var i548 = []
  for(var i = 0; i < i549.length; i += 1) {
    i548.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape', i549[i + 0]) );
  }
  i540.blendShapes = i548
  return i540
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh"] = function (request, data, root) {
  var i554 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh' )
  var i555 = data
  i554.triangles = i555[0]
  return i554
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape"] = function (request, data, root) {
  var i560 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape' )
  var i561 = data
  i560.name = i561[0]
  var i563 = i561[1]
  var i562 = []
  for(var i = 0; i < i563.length; i += 1) {
    i562.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame', i563[i + 0]) );
  }
  i560.frames = i562
  return i560
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Cubemap"] = function (request, data, root) {
  var i564 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Cubemap' )
  var i565 = data
  i564.name = i565[0]
  i564.atlasId = i565[1]
  i564.mipmapCount = i565[2]
  i564.hdr = !!i565[3]
  i564.size = i565[4]
  i564.anisoLevel = i565[5]
  i564.filterMode = i565[6]
  var i567 = i565[7]
  var i566 = []
  for(var i = 0; i < i567.length; i += 4) {
    i566.push( UnityEngine.Rect.MinMaxRect(i567[i + 0], i567[i + 1], i567[i + 2], i567[i + 3]) );
  }
  i564.rects = i566
  i564.wrapU = i565[8]
  i564.wrapV = i565[9]
  return i564
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i570 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i571 = data
  i570.name = i571[0]
  i570.index = i571[1]
  i570.startup = !!i571[2]
  return i570
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i572 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i573 = data
  i572.aspect = i573[0]
  i572.orthographic = !!i573[1]
  i572.orthographicSize = i573[2]
  i572.backgroundColor = new pc.Color(i573[3], i573[4], i573[5], i573[6])
  i572.nearClipPlane = i573[7]
  i572.farClipPlane = i573[8]
  i572.fieldOfView = i573[9]
  i572.depth = i573[10]
  i572.clearFlags = i573[11]
  i572.cullingMask = i573[12]
  i572.rect = i573[13]
  request.r(i573[14], i573[15], 0, i572, 'targetTexture')
  i572.usePhysicalProperties = !!i573[16]
  i572.focalLength = i573[17]
  i572.sensorSize = new pc.Vec2( i573[18], i573[19] )
  i572.lensShift = new pc.Vec2( i573[20], i573[21] )
  i572.gateFit = i573[22]
  i572.commandBufferCount = i573[23]
  i572.cameraType = i573[24]
  i572.enabled = !!i573[25]
  return i572
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i574 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i575 = data
  request.r(i575[0], i575[1], 0, i574, 'm_FirstSelected')
  i574.m_sendNavigationEvents = !!i575[2]
  i574.m_DragThreshold = i575[3]
  return i574
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i576 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i577 = data
  i576.m_HorizontalAxis = i577[0]
  i576.m_VerticalAxis = i577[1]
  i576.m_SubmitButton = i577[2]
  i576.m_CancelButton = i577[3]
  i576.m_InputActionsPerSecond = i577[4]
  i576.m_RepeatDelay = i577[5]
  i576.m_ForceModuleActive = !!i577[6]
  i576.m_SendPointerHoverToParent = !!i577[7]
  return i576
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Light"] = function (request, data, root) {
  var i578 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Light' )
  var i579 = data
  i578.type = i579[0]
  i578.color = new pc.Color(i579[1], i579[2], i579[3], i579[4])
  i578.cullingMask = i579[5]
  i578.intensity = i579[6]
  i578.range = i579[7]
  i578.spotAngle = i579[8]
  i578.shadows = i579[9]
  i578.shadowNormalBias = i579[10]
  i578.shadowBias = i579[11]
  i578.shadowStrength = i579[12]
  i578.shadowResolution = i579[13]
  i578.lightmapBakeType = i579[14]
  i578.renderMode = i579[15]
  request.r(i579[16], i579[17], 0, i578, 'cookie')
  i578.cookieSize = i579[18]
  i578.shadowNearPlane = i579[19]
  i578.occlusionMaskChannel = i579[20]
  i578.isBaked = !!i579[21]
  i578.mixedLightingMode = i579[22]
  i578.enabled = !!i579[23]
  return i578
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i580 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i581 = data
  i580.pivot = new pc.Vec2( i581[0], i581[1] )
  i580.anchorMin = new pc.Vec2( i581[2], i581[3] )
  i580.anchorMax = new pc.Vec2( i581[4], i581[5] )
  i580.sizeDelta = new pc.Vec2( i581[6], i581[7] )
  i580.anchoredPosition3D = new pc.Vec3( i581[8], i581[9], i581[10] )
  i580.rotation = new pc.Quat(i581[11], i581[12], i581[13], i581[14])
  i580.scale = new pc.Vec3( i581[15], i581[16], i581[17] )
  return i580
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i582 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i583 = data
  i582.planeDistance = i583[0]
  i582.referencePixelsPerUnit = i583[1]
  i582.isFallbackOverlay = !!i583[2]
  i582.renderMode = i583[3]
  i582.renderOrder = i583[4]
  i582.sortingLayerName = i583[5]
  i582.sortingOrder = i583[6]
  i582.scaleFactor = i583[7]
  request.r(i583[8], i583[9], 0, i582, 'worldCamera')
  i582.overrideSorting = !!i583[10]
  i582.pixelPerfect = !!i583[11]
  i582.targetDisplay = i583[12]
  i582.overridePixelPerfect = !!i583[13]
  i582.enabled = !!i583[14]
  return i582
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i584 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i585 = data
  i584.m_UiScaleMode = i585[0]
  i584.m_ReferencePixelsPerUnit = i585[1]
  i584.m_ScaleFactor = i585[2]
  i584.m_ReferenceResolution = new pc.Vec2( i585[3], i585[4] )
  i584.m_ScreenMatchMode = i585[5]
  i584.m_MatchWidthOrHeight = i585[6]
  i584.m_PhysicalUnit = i585[7]
  i584.m_FallbackScreenDPI = i585[8]
  i584.m_DefaultSpriteDPI = i585[9]
  i584.m_DynamicPixelsPerUnit = i585[10]
  i584.m_PresetInfoIsWorld = !!i585[11]
  return i584
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i586 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i587 = data
  i586.cullTransparentMesh = !!i587[0]
  return i586
}

Deserializers["UnityEngine.UI.RawImage"] = function (request, data, root) {
  var i588 = root || request.c( 'UnityEngine.UI.RawImage' )
  var i589 = data
  request.r(i589[0], i589[1], 0, i588, 'm_Texture')
  i588.m_UVRect = UnityEngine.Rect.MinMaxRect(i589[2], i589[3], i589[4], i589[5])
  request.r(i589[6], i589[7], 0, i588, 'm_Material')
  i588.m_Maskable = !!i589[8]
  i588.m_Color = new pc.Color(i589[9], i589[10], i589[11], i589[12])
  i588.m_RaycastTarget = !!i589[13]
  i588.m_RaycastPadding = new pc.Vec4( i589[14], i589[15], i589[16], i589[17] )
  return i588
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.BoxCollider"] = function (request, data, root) {
  var i590 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.BoxCollider' )
  var i591 = data
  i590.center = new pc.Vec3( i591[0], i591[1], i591[2] )
  i590.size = new pc.Vec3( i591[3], i591[4], i591[5] )
  i590.enabled = !!i591[6]
  i590.isTrigger = !!i591[7]
  request.r(i591[8], i591[9], 0, i590, 'material')
  return i590
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Rigidbody"] = function (request, data, root) {
  var i592 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Rigidbody' )
  var i593 = data
  i592.mass = i593[0]
  i592.drag = i593[1]
  i592.angularDrag = i593[2]
  i592.useGravity = !!i593[3]
  i592.isKinematic = !!i593[4]
  i592.constraints = i593[5]
  i592.maxAngularVelocity = i593[6]
  i592.collisionDetectionMode = i593[7]
  i592.interpolation = i593[8]
  return i592
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ConfigurableJoint"] = function (request, data, root) {
  var i594 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ConfigurableJoint' )
  var i595 = data
  i594.angularXDrive = request.d('UnityEngine.JointDrive', i595[0], i594.angularXDrive)
  i594.angularXLimitSpring = request.d('UnityEngine.SoftJointLimitSpring', i595[1], i594.angularXLimitSpring)
  i594.angularXMotion = i595[2]
  i594.angularYLimit = request.d('UnityEngine.SoftJointLimit', i595[3], i594.angularYLimit)
  i594.angularYMotion = i595[4]
  i594.angularYZDrive = request.d('UnityEngine.JointDrive', i595[5], i594.angularYZDrive)
  i594.angularYZLimitSpring = request.d('UnityEngine.SoftJointLimitSpring', i595[6], i594.angularYZLimitSpring)
  i594.angularZLimit = request.d('UnityEngine.SoftJointLimit', i595[7], i594.angularZLimit)
  i594.angularZMotion = i595[8]
  i594.configuredInWorldSpace = !!i595[9]
  i594.highAngularXLimit = request.d('UnityEngine.SoftJointLimit', i595[10], i594.highAngularXLimit)
  i594.linearLimit = request.d('UnityEngine.SoftJointLimit', i595[11], i594.linearLimit)
  i594.linearLimitSpring = request.d('UnityEngine.SoftJointLimitSpring', i595[12], i594.linearLimitSpring)
  i594.lowAngularXLimit = request.d('UnityEngine.SoftJointLimit', i595[13], i594.lowAngularXLimit)
  i594.rotationDriveMode = i595[14]
  i594.secondaryAxis = new pc.Vec3( i595[15], i595[16], i595[17] )
  i594.slerpDrive = request.d('UnityEngine.JointDrive', i595[18], i594.slerpDrive)
  i594.swapBodies = !!i595[19]
  i594.targetAngularVelocity = new pc.Vec3( i595[20], i595[21], i595[22] )
  i594.targetPosition = new pc.Vec3( i595[23], i595[24], i595[25] )
  i594.targetRotation = new pc.Quat(i595[26], i595[27], i595[28], i595[29])
  i594.targetVelocity = new pc.Vec3( i595[30], i595[31], i595[32] )
  i594.xDrive = request.d('UnityEngine.JointDrive', i595[33], i594.xDrive)
  i594.xMotion = i595[34]
  i594.yDrive = request.d('UnityEngine.JointDrive', i595[35], i594.yDrive)
  i594.yMotion = i595[36]
  i594.zDrive = request.d('UnityEngine.JointDrive', i595[37], i594.zDrive)
  i594.zMotion = i595[38]
  request.r(i595[39], i595[40], 0, i594, 'connectedBody')
  i594.axis = new pc.Vec3( i595[41], i595[42], i595[43] )
  i594.anchor = new pc.Vec3( i595[44], i595[45], i595[46] )
  i594.connectedAnchor = new pc.Vec3( i595[47], i595[48], i595[49] )
  i594.autoConfigureConnectedAnchor = !!i595[50]
  i594.massScale = i595[51]
  i594.connectedMassScale = i595[52]
  i594.enableCollision = !!i595[53]
  i594.breakForce = i595[54]
  i594.breakTorque = i595[55]
  return i594
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CapsuleCollider"] = function (request, data, root) {
  var i596 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CapsuleCollider' )
  var i597 = data
  i596.center = new pc.Vec3( i597[0], i597[1], i597[2] )
  i596.radius = i597[3]
  i596.height = i597[4]
  i596.direction = i597[5]
  i596.enabled = !!i597[6]
  i596.isTrigger = !!i597[7]
  request.r(i597[8], i597[9], 0, i596, 'material')
  return i596
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Animator"] = function (request, data, root) {
  var i598 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Animator' )
  var i599 = data
  request.r(i599[0], i599[1], 0, i598, 'animatorController')
  request.r(i599[2], i599[3], 0, i598, 'avatar')
  i598.updateMode = i599[4]
  i598.hasTransformHierarchy = !!i599[5]
  i598.applyRootMotion = !!i599[6]
  var i601 = i599[7]
  var i600 = []
  for(var i = 0; i < i601.length; i += 2) {
  request.r(i601[i + 0], i601[i + 1], 2, i600, '')
  }
  i598.humanBones = i600
  i598.enabled = !!i599[8]
  return i598
}

Deserializers["Attack"] = function (request, data, root) {
  var i602 = root || request.c( 'Attack' )
  var i603 = data
  i602.offset = new pc.Vec3( i603[0], i603[1], i603[2] )
  i602.boxSize = new pc.Vec3( i603[3], i603[4], i603[5] )
  return i602
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.AudioSource"] = function (request, data, root) {
  var i604 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.AudioSource' )
  var i605 = data
  request.r(i605[0], i605[1], 0, i604, 'clip')
  request.r(i605[2], i605[3], 0, i604, 'outputAudioMixerGroup')
  i604.playOnAwake = !!i605[4]
  i604.loop = !!i605[5]
  i604.time = i605[6]
  i604.volume = i605[7]
  i604.pitch = i605[8]
  i604.enabled = !!i605[9]
  return i604
}

Deserializers["GameController"] = function (request, data, root) {
  var i606 = root || request.c( 'GameController' )
  var i607 = data
  return i606
}

Deserializers["LunaController"] = function (request, data, root) {
  var i608 = root || request.c( 'LunaController' )
  var i609 = data
  i608.TimePlay = i609[0]
  i608.LimitTimePlay = !!i609[1]
  i608.UseCustomBG = !!i609[2]
  request.r(i609[3], i609[4], 0, i608, 'BGTexture')
  request.r(i609[5], i609[6], 0, i608, 'BGImage')
  var i611 = i609[7]
  var i610 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.UI.Button')))
  for(var i = 0; i < i611.length; i += 2) {
  request.r(i611[i + 0], i611[i + 1], 1, i610, '')
  }
  i608.CTA = i610
  return i608
}

Deserializers["AudioController"] = function (request, data, root) {
  var i614 = root || request.c( 'AudioController' )
  var i615 = data
  return i614
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i616 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i617 = data
  i616.m_IgnoreReversedGraphics = !!i617[0]
  i616.m_BlockingObjects = i617[1]
  i616.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i617[2] )
  return i616
}

Deserializers["UnityEngine.UI.Text"] = function (request, data, root) {
  var i618 = root || request.c( 'UnityEngine.UI.Text' )
  var i619 = data
  i618.m_FontData = request.d('UnityEngine.UI.FontData', i619[0], i618.m_FontData)
  i618.m_Text = i619[1]
  request.r(i619[2], i619[3], 0, i618, 'm_Material')
  i618.m_Maskable = !!i619[4]
  i618.m_Color = new pc.Color(i619[5], i619[6], i619[7], i619[8])
  i618.m_RaycastTarget = !!i619[9]
  i618.m_RaycastPadding = new pc.Vec4( i619[10], i619[11], i619[12], i619[13] )
  return i618
}

Deserializers["UnityEngine.UI.FontData"] = function (request, data, root) {
  var i620 = root || request.c( 'UnityEngine.UI.FontData' )
  var i621 = data
  request.r(i621[0], i621[1], 0, i620, 'm_Font')
  i620.m_FontSize = i621[2]
  i620.m_FontStyle = i621[3]
  i620.m_BestFit = !!i621[4]
  i620.m_MinSize = i621[5]
  i620.m_MaxSize = i621[6]
  i620.m_Alignment = i621[7]
  i620.m_AlignByGeometry = !!i621[8]
  i620.m_RichText = !!i621[9]
  i620.m_HorizontalOverflow = i621[10]
  i620.m_VerticalOverflow = i621[11]
  i620.m_LineSpacing = i621[12]
  return i620
}

Deserializers["DG.Tweening.DOTweenAnimation"] = function (request, data, root) {
  var i622 = root || request.c( 'DG.Tweening.DOTweenAnimation' )
  var i623 = data
  i622.targetIsSelf = !!i623[0]
  request.r(i623[1], i623[2], 0, i622, 'targetGO')
  i622.tweenTargetIsTargetGO = !!i623[3]
  i622.delay = i623[4]
  i622.duration = i623[5]
  i622.easeType = i623[6]
  i622.easeCurve = new pc.AnimationCurve( { keys_flow: i623[7] } )
  i622.loopType = i623[8]
  i622.loops = i623[9]
  i622.id = i623[10]
  i622.isRelative = !!i623[11]
  i622.isFrom = !!i623[12]
  i622.isIndependentUpdate = !!i623[13]
  i622.autoKill = !!i623[14]
  i622.autoGenerate = !!i623[15]
  i622.isActive = !!i623[16]
  i622.isValid = !!i623[17]
  request.r(i623[18], i623[19], 0, i622, 'target')
  i622.animationType = i623[20]
  i622.targetType = i623[21]
  i622.forcedTargetType = i623[22]
  i622.autoPlay = !!i623[23]
  i622.useTargetAsV3 = !!i623[24]
  i622.endValueFloat = i623[25]
  i622.endValueV3 = new pc.Vec3( i623[26], i623[27], i623[28] )
  i622.endValueV2 = new pc.Vec2( i623[29], i623[30] )
  i622.endValueColor = new pc.Color(i623[31], i623[32], i623[33], i623[34])
  i622.endValueString = i623[35]
  i622.endValueRect = UnityEngine.Rect.MinMaxRect(i623[36], i623[37], i623[38], i623[39])
  request.r(i623[40], i623[41], 0, i622, 'endValueTransform')
  i622.optionalBool0 = !!i623[42]
  i622.optionalBool1 = !!i623[43]
  i622.optionalFloat0 = i623[44]
  i622.optionalInt0 = i623[45]
  i622.optionalRotationMode = i623[46]
  i622.optionalScrambleMode = i623[47]
  i622.optionalShakeRandomnessMode = i623[48]
  i622.optionalString = i623[49]
  i622.updateType = i623[50]
  i622.isSpeedBased = !!i623[51]
  i622.hasOnStart = !!i623[52]
  i622.hasOnPlay = !!i623[53]
  i622.hasOnUpdate = !!i623[54]
  i622.hasOnStepComplete = !!i623[55]
  i622.hasOnComplete = !!i623[56]
  i622.hasOnTweenCreated = !!i623[57]
  i622.hasOnRewind = !!i623[58]
  i622.onStart = request.d('UnityEngine.Events.UnityEvent', i623[59], i622.onStart)
  i622.onPlay = request.d('UnityEngine.Events.UnityEvent', i623[60], i622.onPlay)
  i622.onUpdate = request.d('UnityEngine.Events.UnityEvent', i623[61], i622.onUpdate)
  i622.onStepComplete = request.d('UnityEngine.Events.UnityEvent', i623[62], i622.onStepComplete)
  i622.onComplete = request.d('UnityEngine.Events.UnityEvent', i623[63], i622.onComplete)
  i622.onTweenCreated = request.d('UnityEngine.Events.UnityEvent', i623[64], i622.onTweenCreated)
  i622.onRewind = request.d('UnityEngine.Events.UnityEvent', i623[65], i622.onRewind)
  return i622
}

Deserializers["UnityEngine.Events.UnityEvent"] = function (request, data, root) {
  var i624 = root || request.c( 'UnityEngine.Events.UnityEvent' )
  var i625 = data
  i624.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i625[0], i624.m_PersistentCalls)
  return i624
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i626 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i627 = data
  var i629 = i627[0]
  var i628 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i629.length; i += 1) {
    i628.add(request.d('UnityEngine.Events.PersistentCall', i629[i + 0]));
  }
  i626.m_Calls = i628
  return i626
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i632 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i633 = data
  request.r(i633[0], i633[1], 0, i632, 'm_Target')
  i632.m_TargetAssemblyTypeName = i633[2]
  i632.m_MethodName = i633[3]
  i632.m_Mode = i633[4]
  i632.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i633[5], i632.m_Arguments)
  i632.m_CallState = i633[6]
  return i632
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i634 = root || request.c( 'UnityEngine.UI.Image' )
  var i635 = data
  request.r(i635[0], i635[1], 0, i634, 'm_Sprite')
  i634.m_Type = i635[2]
  i634.m_PreserveAspect = !!i635[3]
  i634.m_FillCenter = !!i635[4]
  i634.m_FillMethod = i635[5]
  i634.m_FillAmount = i635[6]
  i634.m_FillClockwise = !!i635[7]
  i634.m_FillOrigin = i635[8]
  i634.m_UseSpriteMesh = !!i635[9]
  i634.m_PixelsPerUnitMultiplier = i635[10]
  request.r(i635[11], i635[12], 0, i634, 'm_Material')
  i634.m_Maskable = !!i635[13]
  i634.m_Color = new pc.Color(i635[14], i635[15], i635[16], i635[17])
  i634.m_RaycastTarget = !!i635[18]
  i634.m_RaycastPadding = new pc.Vec4( i635[19], i635[20], i635[21], i635[22] )
  return i634
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i636 = root || request.c( 'UnityEngine.UI.Button' )
  var i637 = data
  i636.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i637[0], i636.m_OnClick)
  i636.m_Navigation = request.d('UnityEngine.UI.Navigation', i637[1], i636.m_Navigation)
  i636.m_Transition = i637[2]
  i636.m_Colors = request.d('UnityEngine.UI.ColorBlock', i637[3], i636.m_Colors)
  i636.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i637[4], i636.m_SpriteState)
  i636.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i637[5], i636.m_AnimationTriggers)
  i636.m_Interactable = !!i637[6]
  request.r(i637[7], i637[8], 0, i636, 'm_TargetGraphic')
  return i636
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i638 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i639 = data
  i638.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i639[0], i638.m_PersistentCalls)
  return i638
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i640 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i641 = data
  i640.m_Mode = i641[0]
  i640.m_WrapAround = !!i641[1]
  request.r(i641[2], i641[3], 0, i640, 'm_SelectOnUp')
  request.r(i641[4], i641[5], 0, i640, 'm_SelectOnDown')
  request.r(i641[6], i641[7], 0, i640, 'm_SelectOnLeft')
  request.r(i641[8], i641[9], 0, i640, 'm_SelectOnRight')
  return i640
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i642 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i643 = data
  i642.m_NormalColor = new pc.Color(i643[0], i643[1], i643[2], i643[3])
  i642.m_HighlightedColor = new pc.Color(i643[4], i643[5], i643[6], i643[7])
  i642.m_PressedColor = new pc.Color(i643[8], i643[9], i643[10], i643[11])
  i642.m_SelectedColor = new pc.Color(i643[12], i643[13], i643[14], i643[15])
  i642.m_DisabledColor = new pc.Color(i643[16], i643[17], i643[18], i643[19])
  i642.m_ColorMultiplier = i643[20]
  i642.m_FadeDuration = i643[21]
  return i642
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i644 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i645 = data
  request.r(i645[0], i645[1], 0, i644, 'm_HighlightedSprite')
  request.r(i645[2], i645[3], 0, i644, 'm_PressedSprite')
  request.r(i645[4], i645[5], 0, i644, 'm_SelectedSprite')
  request.r(i645[6], i645[7], 0, i644, 'm_DisabledSprite')
  return i644
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i646 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i647 = data
  i646.m_NormalTrigger = i647[0]
  i646.m_HighlightedTrigger = i647[1]
  i646.m_PressedTrigger = i647[2]
  i646.m_SelectedTrigger = i647[3]
  i646.m_DisabledTrigger = i647[4]
  return i646
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i648 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i649 = data
  i648.ambientIntensity = i649[0]
  i648.reflectionIntensity = i649[1]
  i648.ambientMode = i649[2]
  i648.ambientLight = new pc.Color(i649[3], i649[4], i649[5], i649[6])
  i648.ambientSkyColor = new pc.Color(i649[7], i649[8], i649[9], i649[10])
  i648.ambientGroundColor = new pc.Color(i649[11], i649[12], i649[13], i649[14])
  i648.ambientEquatorColor = new pc.Color(i649[15], i649[16], i649[17], i649[18])
  i648.fogColor = new pc.Color(i649[19], i649[20], i649[21], i649[22])
  i648.fogEndDistance = i649[23]
  i648.fogStartDistance = i649[24]
  i648.fogDensity = i649[25]
  i648.fog = !!i649[26]
  request.r(i649[27], i649[28], 0, i648, 'skybox')
  i648.fogMode = i649[29]
  var i651 = i649[30]
  var i650 = []
  for(var i = 0; i < i651.length; i += 1) {
    i650.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i651[i + 0]) );
  }
  i648.lightmaps = i650
  i648.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i649[31], i648.lightProbes)
  i648.lightmapsMode = i649[32]
  i648.mixedBakeMode = i649[33]
  i648.environmentLightingMode = i649[34]
  i648.ambientProbe = new pc.SphericalHarmonicsL2(i649[35])
  request.r(i649[36], i649[37], 0, i648, 'customReflection')
  request.r(i649[38], i649[39], 0, i648, 'defaultReflection')
  i648.defaultReflectionMode = i649[40]
  i648.defaultReflectionResolution = i649[41]
  i648.sunLightObjectId = i649[42]
  i648.pixelLightCount = i649[43]
  i648.defaultReflectionHDR = !!i649[44]
  i648.hasLightDataAsset = !!i649[45]
  i648.hasManualGenerate = !!i649[46]
  return i648
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i654 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i655 = data
  request.r(i655[0], i655[1], 0, i654, 'lightmapColor')
  request.r(i655[2], i655[3], 0, i654, 'lightmapDirection')
  request.r(i655[4], i655[5], 0, i654, 'shadowMask')
  return i654
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i656 = root || new UnityEngine.LightProbes()
  var i657 = data
  return i656
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i664 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i665 = data
  var i667 = i665[0]
  var i666 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i667.length; i += 1) {
    i666.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i667[i + 0]));
  }
  i664.ShaderCompilationErrors = i666
  i664.name = i665[1]
  i664.guid = i665[2]
  var i669 = i665[3]
  var i668 = []
  for(var i = 0; i < i669.length; i += 1) {
    i668.push( i669[i + 0] );
  }
  i664.shaderDefinedKeywords = i668
  var i671 = i665[4]
  var i670 = []
  for(var i = 0; i < i671.length; i += 1) {
    i670.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i671[i + 0]) );
  }
  i664.passes = i670
  var i673 = i665[5]
  var i672 = []
  for(var i = 0; i < i673.length; i += 1) {
    i672.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i673[i + 0]) );
  }
  i664.usePasses = i672
  var i675 = i665[6]
  var i674 = []
  for(var i = 0; i < i675.length; i += 1) {
    i674.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i675[i + 0]) );
  }
  i664.defaultParameterValues = i674
  request.r(i665[7], i665[8], 0, i664, 'unityFallbackShader')
  i664.readDepth = !!i665[9]
  i664.hasDepthOnlyPass = !!i665[10]
  i664.isCreatedByShaderGraph = !!i665[11]
  i664.disableBatching = !!i665[12]
  i664.compiled = !!i665[13]
  return i664
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i678 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i679 = data
  i678.shaderName = i679[0]
  i678.errorMessage = i679[1]
  return i678
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i684 = root || new pc.UnityShaderPass()
  var i685 = data
  i684.id = i685[0]
  i684.subShaderIndex = i685[1]
  i684.name = i685[2]
  i684.passType = i685[3]
  i684.grabPassTextureName = i685[4]
  i684.usePass = !!i685[5]
  i684.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i685[6], i684.zTest)
  i684.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i685[7], i684.zWrite)
  i684.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i685[8], i684.culling)
  i684.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i685[9], i684.blending)
  i684.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i685[10], i684.alphaBlending)
  i684.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i685[11], i684.colorWriteMask)
  i684.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i685[12], i684.offsetUnits)
  i684.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i685[13], i684.offsetFactor)
  i684.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i685[14], i684.stencilRef)
  i684.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i685[15], i684.stencilReadMask)
  i684.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i685[16], i684.stencilWriteMask)
  i684.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i685[17], i684.stencilOp)
  i684.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i685[18], i684.stencilOpFront)
  i684.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i685[19], i684.stencilOpBack)
  var i687 = i685[20]
  var i686 = []
  for(var i = 0; i < i687.length; i += 1) {
    i686.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i687[i + 0]) );
  }
  i684.tags = i686
  var i689 = i685[21]
  var i688 = []
  for(var i = 0; i < i689.length; i += 1) {
    i688.push( i689[i + 0] );
  }
  i684.passDefinedKeywords = i688
  var i691 = i685[22]
  var i690 = []
  for(var i = 0; i < i691.length; i += 1) {
    i690.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i691[i + 0]) );
  }
  i684.passDefinedKeywordGroups = i690
  var i693 = i685[23]
  var i692 = []
  for(var i = 0; i < i693.length; i += 1) {
    i692.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i693[i + 0]) );
  }
  i684.variants = i692
  var i695 = i685[24]
  var i694 = []
  for(var i = 0; i < i695.length; i += 1) {
    i694.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i695[i + 0]) );
  }
  i684.excludedVariants = i694
  i684.hasDepthReader = !!i685[25]
  return i684
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i696 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i697 = data
  i696.val = i697[0]
  i696.name = i697[1]
  return i696
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i698 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i699 = data
  i698.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i699[0], i698.src)
  i698.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i699[1], i698.dst)
  i698.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i699[2], i698.op)
  return i698
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i700 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i701 = data
  i700.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i701[0], i700.pass)
  i700.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i701[1], i700.fail)
  i700.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i701[2], i700.zFail)
  i700.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i701[3], i700.comp)
  return i700
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i704 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i705 = data
  i704.name = i705[0]
  i704.value = i705[1]
  return i704
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i708 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i709 = data
  var i711 = i709[0]
  var i710 = []
  for(var i = 0; i < i711.length; i += 1) {
    i710.push( i711[i + 0] );
  }
  i708.keywords = i710
  i708.hasDiscard = !!i709[1]
  return i708
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i714 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i715 = data
  i714.passId = i715[0]
  i714.subShaderIndex = i715[1]
  var i717 = i715[2]
  var i716 = []
  for(var i = 0; i < i717.length; i += 1) {
    i716.push( i717[i + 0] );
  }
  i714.keywords = i716
  i714.vertexProgram = i715[3]
  i714.fragmentProgram = i715[4]
  i714.exportedForWebGl2 = !!i715[5]
  i714.readDepth = !!i715[6]
  return i714
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i720 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i721 = data
  request.r(i721[0], i721[1], 0, i720, 'shader')
  i720.pass = i721[2]
  return i720
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i724 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i725 = data
  i724.name = i725[0]
  i724.type = i725[1]
  i724.value = new pc.Vec4( i725[2], i725[3], i725[4], i725[5] )
  i724.textureValue = i725[6]
  i724.shaderPropertyFlag = i725[7]
  return i724
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i726 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i727 = data
  i726.name = i727[0]
  request.r(i727[1], i727[2], 0, i726, 'texture')
  i726.aabb = i727[3]
  i726.vertices = i727[4]
  i726.triangles = i727[5]
  i726.textureRect = UnityEngine.Rect.MinMaxRect(i727[6], i727[7], i727[8], i727[9])
  i726.packedRect = UnityEngine.Rect.MinMaxRect(i727[10], i727[11], i727[12], i727[13])
  i726.border = new pc.Vec4( i727[14], i727[15], i727[16], i727[17] )
  i726.transparency = i727[18]
  i726.bounds = i727[19]
  i726.pixelsPerUnit = i727[20]
  i726.textureWidth = i727[21]
  i726.textureHeight = i727[22]
  i726.nativeSize = new pc.Vec2( i727[23], i727[24] )
  i726.pivot = new pc.Vec2( i727[25], i727[26] )
  i726.textureRectOffset = new pc.Vec2( i727[27], i727[28] )
  return i726
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip"] = function (request, data, root) {
  var i728 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip' )
  var i729 = data
  i728.name = i729[0]
  i728.wrapMode = i729[1]
  i728.isLooping = !!i729[2]
  i728.length = i729[3]
  var i731 = i729[4]
  var i730 = []
  for(var i = 0; i < i731.length; i += 1) {
    i730.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve', i731[i + 0]) );
  }
  i728.curves = i730
  var i733 = i729[5]
  var i732 = []
  for(var i = 0; i < i733.length; i += 1) {
    i732.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent', i733[i + 0]) );
  }
  i728.events = i732
  i728.halfPrecision = !!i729[6]
  i728._frameRate = i729[7]
  i728.localBounds = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds', i729[8], i728.localBounds)
  i728.hasMuscleCurves = !!i729[9]
  var i735 = i729[10]
  var i734 = []
  for(var i = 0; i < i735.length; i += 1) {
    i734.push( i735[i + 0] );
  }
  i728.clipMuscleConstant = i734
  i728.clipBindingConstant = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant', i729[11], i728.clipBindingConstant)
  return i728
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve"] = function (request, data, root) {
  var i738 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve' )
  var i739 = data
  i738.path = i739[0]
  i738.hash = i739[1]
  i738.componentType = i739[2]
  i738.property = i739[3]
  i738.keys = i739[4]
  var i741 = i739[5]
  var i740 = []
  for(var i = 0; i < i741.length; i += 1) {
    i740.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey', i741[i + 0]) );
  }
  i738.objectReferenceKeys = i740
  return i738
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent"] = function (request, data, root) {
  var i744 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent' )
  var i745 = data
  i744.functionName = i745[0]
  i744.floatParameter = i745[1]
  i744.intParameter = i745[2]
  i744.stringParameter = i745[3]
  request.r(i745[4], i745[5], 0, i744, 'objectReferenceParameter')
  i744.time = i745[6]
  return i744
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds"] = function (request, data, root) {
  var i746 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds' )
  var i747 = data
  i746.center = new pc.Vec3( i747[0], i747[1], i747[2] )
  i746.extends = new pc.Vec3( i747[3], i747[4], i747[5] )
  return i746
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant"] = function (request, data, root) {
  var i750 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant' )
  var i751 = data
  var i753 = i751[0]
  var i752 = []
  for(var i = 0; i < i753.length; i += 1) {
    i752.push( i753[i + 0] );
  }
  i750.genericBindings = i752
  var i755 = i751[1]
  var i754 = []
  for(var i = 0; i < i755.length; i += 1) {
    i754.push( i755[i + 0] );
  }
  i750.pptrCurveMapping = i754
  return i750
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font"] = function (request, data, root) {
  var i756 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font' )
  var i757 = data
  i756.name = i757[0]
  i756.ascent = i757[1]
  i756.originalLineHeight = i757[2]
  i756.fontSize = i757[3]
  var i759 = i757[4]
  var i758 = []
  for(var i = 0; i < i759.length; i += 1) {
    i758.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo', i759[i + 0]) );
  }
  i756.characterInfo = i758
  request.r(i757[5], i757[6], 0, i756, 'texture')
  i756.originalFontSize = i757[7]
  return i756
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo"] = function (request, data, root) {
  var i762 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo' )
  var i763 = data
  i762.index = i763[0]
  i762.advance = i763[1]
  i762.bearing = i763[2]
  i762.glyphWidth = i763[3]
  i762.glyphHeight = i763[4]
  i762.minX = i763[5]
  i762.maxX = i763[6]
  i762.minY = i763[7]
  i762.maxY = i763[8]
  i762.uvBottomLeftX = i763[9]
  i762.uvBottomLeftY = i763[10]
  i762.uvBottomRightX = i763[11]
  i762.uvBottomRightY = i763[12]
  i762.uvTopLeftX = i763[13]
  i762.uvTopLeftY = i763[14]
  i762.uvTopRightX = i763[15]
  i762.uvTopRightY = i763[16]
  return i762
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController"] = function (request, data, root) {
  var i764 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController' )
  var i765 = data
  i764.name = i765[0]
  var i767 = i765[1]
  var i766 = []
  for(var i = 0; i < i767.length; i += 1) {
    i766.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer', i767[i + 0]) );
  }
  i764.layers = i766
  var i769 = i765[2]
  var i768 = []
  for(var i = 0; i < i769.length; i += 1) {
    i768.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter', i769[i + 0]) );
  }
  i764.parameters = i768
  i764.animationClips = i765[3]
  i764.avatarUnsupported = i765[4]
  return i764
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer"] = function (request, data, root) {
  var i772 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer' )
  var i773 = data
  i772.name = i773[0]
  i772.defaultWeight = i773[1]
  i772.blendingMode = i773[2]
  i772.avatarMask = i773[3]
  i772.syncedLayerIndex = i773[4]
  i772.syncedLayerAffectsTiming = !!i773[5]
  i772.syncedLayers = i773[6]
  i772.stateMachine = request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i773[7], i772.stateMachine)
  return i772
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine"] = function (request, data, root) {
  var i774 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine' )
  var i775 = data
  i774.id = i775[0]
  i774.name = i775[1]
  i774.path = i775[2]
  var i777 = i775[3]
  var i776 = []
  for(var i = 0; i < i777.length; i += 1) {
    i776.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState', i777[i + 0]) );
  }
  i774.states = i776
  var i779 = i775[4]
  var i778 = []
  for(var i = 0; i < i779.length; i += 1) {
    i778.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i779[i + 0]) );
  }
  i774.machines = i778
  var i781 = i775[5]
  var i780 = []
  for(var i = 0; i < i781.length; i += 1) {
    i780.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i781[i + 0]) );
  }
  i774.entryStateTransitions = i780
  var i783 = i775[6]
  var i782 = []
  for(var i = 0; i < i783.length; i += 1) {
    i782.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i783[i + 0]) );
  }
  i774.exitStateTransitions = i782
  var i785 = i775[7]
  var i784 = []
  for(var i = 0; i < i785.length; i += 1) {
    i784.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i785[i + 0]) );
  }
  i774.anyStateTransitions = i784
  i774.defaultStateId = i775[8]
  return i774
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState"] = function (request, data, root) {
  var i788 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState' )
  var i789 = data
  i788.id = i789[0]
  i788.name = i789[1]
  i788.cycleOffset = i789[2]
  i788.cycleOffsetParameter = i789[3]
  i788.cycleOffsetParameterActive = !!i789[4]
  i788.mirror = !!i789[5]
  i788.mirrorParameter = i789[6]
  i788.mirrorParameterActive = !!i789[7]
  i788.motionId = i789[8]
  i788.nameHash = i789[9]
  i788.fullPathHash = i789[10]
  i788.speed = i789[11]
  i788.speedParameter = i789[12]
  i788.speedParameterActive = !!i789[13]
  i788.tag = i789[14]
  i788.tagHash = i789[15]
  i788.writeDefaultValues = !!i789[16]
  var i791 = i789[17]
  var i790 = []
  for(var i = 0; i < i791.length; i += 2) {
  request.r(i791[i + 0], i791[i + 1], 2, i790, '')
  }
  i788.behaviours = i790
  var i793 = i789[18]
  var i792 = []
  for(var i = 0; i < i793.length; i += 1) {
    i792.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i793[i + 0]) );
  }
  i788.transitions = i792
  return i788
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition"] = function (request, data, root) {
  var i798 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition' )
  var i799 = data
  i798.fullPath = i799[0]
  i798.canTransitionToSelf = !!i799[1]
  i798.duration = i799[2]
  i798.exitTime = i799[3]
  i798.hasExitTime = !!i799[4]
  i798.hasFixedDuration = !!i799[5]
  i798.interruptionSource = i799[6]
  i798.offset = i799[7]
  i798.orderedInterruption = !!i799[8]
  i798.destinationStateId = i799[9]
  i798.isExit = !!i799[10]
  i798.mute = !!i799[11]
  i798.solo = !!i799[12]
  var i801 = i799[13]
  var i800 = []
  for(var i = 0; i < i801.length; i += 1) {
    i800.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i801[i + 0]) );
  }
  i798.conditions = i800
  return i798
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition"] = function (request, data, root) {
  var i804 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition' )
  var i805 = data
  i804.mode = i805[0]
  i804.parameter = i805[1]
  i804.threshold = i805[2]
  return i804
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition"] = function (request, data, root) {
  var i810 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition' )
  var i811 = data
  i810.destinationStateId = i811[0]
  i810.isExit = !!i811[1]
  i810.mute = !!i811[2]
  i810.solo = !!i811[3]
  var i813 = i811[4]
  var i812 = []
  for(var i = 0; i < i813.length; i += 1) {
    i812.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i813[i + 0]) );
  }
  i810.conditions = i812
  return i810
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter"] = function (request, data, root) {
  var i816 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter' )
  var i817 = data
  i816.defaultBool = !!i817[0]
  i816.defaultFloat = i817[1]
  i816.defaultInt = i817[2]
  i816.name = i817[3]
  i816.nameHash = i817[4]
  i816.type = i817[5]
  return i816
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorOverrideController"] = function (request, data, root) {
  var i818 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorOverrideController' )
  var i819 = data
  i818.name = i819[0]
  request.r(i819[1], i819[2], 0, i818, '_runtimeAnimatorController')
  var i821 = i819[3]
  var i820 = []
  for(var i = 0; i < i821.length; i += 2) {
  request.r(i821[i + 0], i821[i + 1], 2, i820, '')
  }
  i818._originalAnimationClips = i820
  var i823 = i819[4]
  var i822 = []
  for(var i = 0; i < i823.length; i += 2) {
  request.r(i823[i + 0], i823[i + 1], 2, i822, '')
  }
  i818._overrideAnimationClips = i822
  var i825 = i819[5]
  var i824 = []
  for(var i = 0; i < i825.length; i += 2) {
  request.r(i825[i + 0], i825[i + 1], 2, i824, '')
  }
  i818._animationClips = i824
  var i827 = i819[6]
  var i826 = []
  for(var i = 0; i < i827.length; i += 1) {
    i826.push( request.d('UnityEngine.AnimationClipPair', i827[i + 0]) );
  }
  i818._animationClipPairs = i826
  return i818
}

Deserializers["UnityEngine.AnimationClipPair"] = function (request, data, root) {
  var i832 = root || request.c( 'UnityEngine.AnimationClipPair' )
  var i833 = data
  request.r(i833[0], i833[1], 0, i832, 'originalClip')
  request.r(i833[2], i833[3], 0, i832, 'overrideClip')
  return i832
}

Deserializers["DG.Tweening.Core.DOTweenSettings"] = function (request, data, root) {
  var i834 = root || request.c( 'DG.Tweening.Core.DOTweenSettings' )
  var i835 = data
  i834.useSafeMode = !!i835[0]
  i834.safeModeOptions = request.d('DG.Tweening.Core.DOTweenSettings+SafeModeOptions', i835[1], i834.safeModeOptions)
  i834.timeScale = i835[2]
  i834.unscaledTimeScale = i835[3]
  i834.useSmoothDeltaTime = !!i835[4]
  i834.maxSmoothUnscaledTime = i835[5]
  i834.rewindCallbackMode = i835[6]
  i834.showUnityEditorReport = !!i835[7]
  i834.logBehaviour = i835[8]
  i834.drawGizmos = !!i835[9]
  i834.defaultRecyclable = !!i835[10]
  i834.defaultAutoPlay = i835[11]
  i834.defaultUpdateType = i835[12]
  i834.defaultTimeScaleIndependent = !!i835[13]
  i834.defaultEaseType = i835[14]
  i834.defaultEaseOvershootOrAmplitude = i835[15]
  i834.defaultEasePeriod = i835[16]
  i834.defaultAutoKill = !!i835[17]
  i834.defaultLoopType = i835[18]
  i834.debugMode = !!i835[19]
  i834.debugStoreTargetId = !!i835[20]
  i834.showPreviewPanel = !!i835[21]
  i834.storeSettingsLocation = i835[22]
  i834.modules = request.d('DG.Tweening.Core.DOTweenSettings+ModulesSetup', i835[23], i834.modules)
  i834.createASMDEF = !!i835[24]
  i834.showPlayingTweens = !!i835[25]
  i834.showPausedTweens = !!i835[26]
  return i834
}

Deserializers["DG.Tweening.Core.DOTweenSettings+SafeModeOptions"] = function (request, data, root) {
  var i836 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+SafeModeOptions' )
  var i837 = data
  i836.logBehaviour = i837[0]
  i836.nestedTweenFailureBehaviour = i837[1]
  return i836
}

Deserializers["DG.Tweening.Core.DOTweenSettings+ModulesSetup"] = function (request, data, root) {
  var i838 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+ModulesSetup' )
  var i839 = data
  i838.showPanel = !!i839[0]
  i838.audioEnabled = !!i839[1]
  i838.physicsEnabled = !!i839[2]
  i838.physics2DEnabled = !!i839[3]
  i838.spriteEnabled = !!i839[4]
  i838.uiEnabled = !!i839[5]
  i838.textMeshProEnabled = !!i839[6]
  i838.tk2DEnabled = !!i839[7]
  i838.deAudioEnabled = !!i839[8]
  i838.deUnityExtendedEnabled = !!i839[9]
  i838.epoOutlineEnabled = !!i839[10]
  return i838
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i840 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i841 = data
  var i843 = i841[0]
  var i842 = []
  for(var i = 0; i < i843.length; i += 1) {
    i842.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i843[i + 0]) );
  }
  i840.files = i842
  i840.componentToPrefabIds = i841[1]
  return i840
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i846 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i847 = data
  i846.path = i847[0]
  request.r(i847[1], i847[2], 0, i846, 'unityObject')
  return i846
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i848 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i849 = data
  var i851 = i849[0]
  var i850 = []
  for(var i = 0; i < i851.length; i += 1) {
    i850.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i851[i + 0]) );
  }
  i848.scriptsExecutionOrder = i850
  var i853 = i849[1]
  var i852 = []
  for(var i = 0; i < i853.length; i += 1) {
    i852.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i853[i + 0]) );
  }
  i848.sortingLayers = i852
  var i855 = i849[2]
  var i854 = []
  for(var i = 0; i < i855.length; i += 1) {
    i854.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i855[i + 0]) );
  }
  i848.cullingLayers = i854
  i848.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i849[3], i848.timeSettings)
  i848.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i849[4], i848.physicsSettings)
  i848.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i849[5], i848.physics2DSettings)
  i848.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i849[6], i848.qualitySettings)
  i848.enableRealtimeShadows = !!i849[7]
  i848.enableAutoInstancing = !!i849[8]
  i848.enableStaticBatching = !!i849[9]
  i848.enableDynamicBatching = !!i849[10]
  i848.usePreservativeDynamicBatching = !!i849[11]
  i848.lightmapEncodingQuality = i849[12]
  i848.desiredColorSpace = i849[13]
  var i857 = i849[14]
  var i856 = []
  for(var i = 0; i < i857.length; i += 1) {
    i856.push( i857[i + 0] );
  }
  i848.allTags = i856
  return i848
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i860 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i861 = data
  i860.name = i861[0]
  i860.value = i861[1]
  return i860
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i864 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i865 = data
  i864.id = i865[0]
  i864.name = i865[1]
  i864.value = i865[2]
  return i864
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i868 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i869 = data
  i868.id = i869[0]
  i868.name = i869[1]
  return i868
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i870 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i871 = data
  i870.fixedDeltaTime = i871[0]
  i870.maximumDeltaTime = i871[1]
  i870.timeScale = i871[2]
  i870.maximumParticleTimestep = i871[3]
  return i870
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i872 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i873 = data
  i872.gravity = new pc.Vec3( i873[0], i873[1], i873[2] )
  i872.defaultSolverIterations = i873[3]
  i872.bounceThreshold = i873[4]
  i872.autoSyncTransforms = !!i873[5]
  i872.autoSimulation = !!i873[6]
  var i875 = i873[7]
  var i874 = []
  for(var i = 0; i < i875.length; i += 1) {
    i874.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i875[i + 0]) );
  }
  i872.collisionMatrix = i874
  return i872
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i878 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i879 = data
  i878.enabled = !!i879[0]
  i878.layerId = i879[1]
  i878.otherLayerId = i879[2]
  return i878
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i880 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i881 = data
  request.r(i881[0], i881[1], 0, i880, 'material')
  i880.gravity = new pc.Vec2( i881[2], i881[3] )
  i880.positionIterations = i881[4]
  i880.velocityIterations = i881[5]
  i880.velocityThreshold = i881[6]
  i880.maxLinearCorrection = i881[7]
  i880.maxAngularCorrection = i881[8]
  i880.maxTranslationSpeed = i881[9]
  i880.maxRotationSpeed = i881[10]
  i880.baumgarteScale = i881[11]
  i880.baumgarteTOIScale = i881[12]
  i880.timeToSleep = i881[13]
  i880.linearSleepTolerance = i881[14]
  i880.angularSleepTolerance = i881[15]
  i880.defaultContactOffset = i881[16]
  i880.autoSimulation = !!i881[17]
  i880.queriesHitTriggers = !!i881[18]
  i880.queriesStartInColliders = !!i881[19]
  i880.callbacksOnDisable = !!i881[20]
  i880.reuseCollisionCallbacks = !!i881[21]
  i880.autoSyncTransforms = !!i881[22]
  var i883 = i881[23]
  var i882 = []
  for(var i = 0; i < i883.length; i += 1) {
    i882.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i883[i + 0]) );
  }
  i880.collisionMatrix = i882
  return i880
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i886 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i887 = data
  i886.enabled = !!i887[0]
  i886.layerId = i887[1]
  i886.otherLayerId = i887[2]
  return i886
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i888 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i889 = data
  var i891 = i889[0]
  var i890 = []
  for(var i = 0; i < i891.length; i += 1) {
    i890.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i891[i + 0]) );
  }
  i888.qualityLevels = i890
  var i893 = i889[1]
  var i892 = []
  for(var i = 0; i < i893.length; i += 1) {
    i892.push( i893[i + 0] );
  }
  i888.names = i892
  i888.shadows = i889[2]
  i888.anisotropicFiltering = i889[3]
  i888.antiAliasing = i889[4]
  i888.lodBias = i889[5]
  i888.shadowCascades = i889[6]
  i888.shadowDistance = i889[7]
  i888.shadowmaskMode = i889[8]
  i888.shadowProjection = i889[9]
  i888.shadowResolution = i889[10]
  i888.softParticles = !!i889[11]
  i888.softVegetation = !!i889[12]
  i888.activeColorSpace = i889[13]
  i888.desiredColorSpace = i889[14]
  i888.masterTextureLimit = i889[15]
  i888.maxQueuedFrames = i889[16]
  i888.particleRaycastBudget = i889[17]
  i888.pixelLightCount = i889[18]
  i888.realtimeReflectionProbes = !!i889[19]
  i888.shadowCascade2Split = i889[20]
  i888.shadowCascade4Split = new pc.Vec3( i889[21], i889[22], i889[23] )
  i888.streamingMipmapsActive = !!i889[24]
  i888.vSyncCount = i889[25]
  i888.asyncUploadBufferSize = i889[26]
  i888.asyncUploadTimeSlice = i889[27]
  i888.billboardsFaceCameraPosition = !!i889[28]
  i888.shadowNearPlaneOffset = i889[29]
  i888.streamingMipmapsMemoryBudget = i889[30]
  i888.maximumLODLevel = i889[31]
  i888.streamingMipmapsAddAllCameras = !!i889[32]
  i888.streamingMipmapsMaxLevelReduction = i889[33]
  i888.streamingMipmapsRenderersPerFrame = i889[34]
  i888.resolutionScalingFixedDPIFactor = i889[35]
  i888.streamingMipmapsMaxFileIORequests = i889[36]
  i888.currentQualityLevel = i889[37]
  return i888
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.Avatar"] = function (request, data, root) {
  var i896 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.Avatar' )
  var i897 = data
  i896.name = i897[0]
  var i899 = i897[1]
  var i898 = []
  for(var i = 0; i < i899.length; i += 1) {
    i898.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.Avatar+TOSPair', i899[i + 0]) );
  }
  i896.tos = i898
  var i901 = i897[2]
  var i900 = []
  for(var i = 0; i < i901.length; i += 1) {
    i900.push( i901[i + 0] );
  }
  i896.constant = i900
  i896.isValid = !!i897[3]
  i896.isHuman = !!i897[4]
  i896.hasRootMotion = !!i897[5]
  return i896
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.Avatar+TOSPair"] = function (request, data, root) {
  var i904 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.Avatar+TOSPair' )
  var i905 = data
  i904.hash = i905[0]
  i904.path = i905[1]
  return i904
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame"] = function (request, data, root) {
  var i908 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame' )
  var i909 = data
  i908.weight = i909[0]
  i908.vertices = i909[1]
  i908.normals = i909[2]
  i908.tangents = i909[3]
  return i908
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i910 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i911 = data
  request.r(i911[0], i911[1], 0, i910, 'm_ObjectArgument')
  i910.m_ObjectArgumentAssemblyTypeName = i911[2]
  i910.m_IntArgument = i911[3]
  i910.m_FloatArgument = i911[4]
  i910.m_StringArgument = i911[5]
  i910.m_BoolArgument = !!i911[6]
  return i910
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey"] = function (request, data, root) {
  var i914 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey' )
  var i915 = data
  i914.time = i915[0]
  request.r(i915[1], i915[2], 0, i914, 'value')
  return i914
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Components.Transform":{"position":0,"scale":3,"rotation":6},"Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer":{"sharedMesh":0,"bones":2,"updateWhenOffscreen":3,"localBounds":4,"rootBone":5,"blendShapesWeights":7,"enabled":8,"sharedMaterial":9,"sharedMaterials":11,"receiveShadows":12,"shadowCastingMode":13,"sortingLayerID":14,"sortingOrder":15,"lightmapIndex":16,"lightmapSceneIndex":17,"lightmapScaleOffset":18,"lightProbeUsage":22,"reflectionProbeUsage":23},"Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight":{"weight":0},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Components.MeshFilter":{"sharedMesh":0},"Luna.Unity.DTO.UnityEngine.Components.MeshRenderer":{"additionalVertexStreams":0,"enabled":2,"sharedMaterial":3,"sharedMaterials":5,"receiveShadows":6,"shadowCastingMode":7,"sortingLayerID":8,"sortingOrder":9,"lightmapIndex":10,"lightmapSceneIndex":11,"lightmapScaleOffset":12,"lightProbeUsage":16,"reflectionProbeUsage":17},"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10,"graphicsFormat":11,"sRGBTexture":12,"desiredColorSpace":13,"wrapU":14,"wrapV":15},"Luna.Unity.DTO.UnityEngine.Assets.Mesh":{"name":0,"halfPrecision":1,"useSimplification":2,"useUInt32IndexFormat":3,"vertexCount":4,"aabb":5,"streams":6,"vertices":7,"subMeshes":8,"bindposes":9,"blendShapes":10},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh":{"triangles":0},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape":{"name":0,"frames":1},"Luna.Unity.DTO.UnityEngine.Textures.Cubemap":{"name":0,"atlasId":1,"mipmapCount":2,"hdr":3,"size":4,"anisoLevel":5,"filterMode":6,"rects":7,"wrapU":8,"wrapV":9},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"aspect":0,"orthographic":1,"orthographicSize":2,"backgroundColor":3,"nearClipPlane":7,"farClipPlane":8,"fieldOfView":9,"depth":10,"clearFlags":11,"cullingMask":12,"rect":13,"targetTexture":14,"usePhysicalProperties":16,"focalLength":17,"sensorSize":18,"lensShift":20,"gateFit":22,"commandBufferCount":23,"cameraType":24,"enabled":25},"Luna.Unity.DTO.UnityEngine.Components.Light":{"type":0,"color":1,"cullingMask":5,"intensity":6,"range":7,"spotAngle":8,"shadows":9,"shadowNormalBias":10,"shadowBias":11,"shadowStrength":12,"shadowResolution":13,"lightmapBakeType":14,"renderMode":15,"cookie":16,"cookieSize":18,"shadowNearPlane":19,"occlusionMaskChannel":20,"isBaked":21,"mixedLightingMode":22,"enabled":23},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"planeDistance":0,"referencePixelsPerUnit":1,"isFallbackOverlay":2,"renderMode":3,"renderOrder":4,"sortingLayerName":5,"sortingOrder":6,"scaleFactor":7,"worldCamera":8,"overrideSorting":10,"pixelPerfect":11,"targetDisplay":12,"overridePixelPerfect":13,"enabled":14},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Components.BoxCollider":{"center":0,"size":3,"enabled":6,"isTrigger":7,"material":8},"Luna.Unity.DTO.UnityEngine.Components.Rigidbody":{"mass":0,"drag":1,"angularDrag":2,"useGravity":3,"isKinematic":4,"constraints":5,"maxAngularVelocity":6,"collisionDetectionMode":7,"interpolation":8},"Luna.Unity.DTO.UnityEngine.Components.ConfigurableJoint":{"angularXDrive":0,"angularXLimitSpring":1,"angularXMotion":2,"angularYLimit":3,"angularYMotion":4,"angularYZDrive":5,"angularYZLimitSpring":6,"angularZLimit":7,"angularZMotion":8,"configuredInWorldSpace":9,"highAngularXLimit":10,"linearLimit":11,"linearLimitSpring":12,"lowAngularXLimit":13,"rotationDriveMode":14,"secondaryAxis":15,"slerpDrive":18,"swapBodies":19,"targetAngularVelocity":20,"targetPosition":23,"targetRotation":26,"targetVelocity":30,"xDrive":33,"xMotion":34,"yDrive":35,"yMotion":36,"zDrive":37,"zMotion":38,"connectedBody":39,"axis":41,"anchor":44,"connectedAnchor":47,"autoConfigureConnectedAnchor":50,"massScale":51,"connectedMassScale":52,"enableCollision":53,"breakForce":54,"breakTorque":55},"Luna.Unity.DTO.UnityEngine.Components.CapsuleCollider":{"center":0,"radius":3,"height":4,"direction":5,"enabled":6,"isTrigger":7,"material":8},"Luna.Unity.DTO.UnityEngine.Components.Animator":{"animatorController":0,"avatar":2,"updateMode":4,"hasTransformHierarchy":5,"applyRootMotion":6,"humanBones":7,"enabled":8},"Luna.Unity.DTO.UnityEngine.Components.AudioSource":{"clip":0,"outputAudioMixerGroup":2,"playOnAwake":4,"loop":5,"time":6,"volume":7,"pitch":8,"enabled":9},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"customReflection":36,"defaultReflection":38,"defaultReflectionMode":40,"defaultReflectionResolution":41,"sunLightObjectId":42,"pixelLightCount":43,"defaultReflectionHDR":44,"hasLightDataAsset":45,"hasManualGenerate":46},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2,"shadowMask":4},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"hasDepthOnlyPass":10,"isCreatedByShaderGraph":11,"disableBatching":12,"compiled":13},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"exportedForWebGl2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip":{"name":0,"wrapMode":1,"isLooping":2,"length":3,"curves":4,"events":5,"halfPrecision":6,"_frameRate":7,"localBounds":8,"hasMuscleCurves":9,"clipMuscleConstant":10,"clipBindingConstant":11},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve":{"path":0,"hash":1,"componentType":2,"property":3,"keys":4,"objectReferenceKeys":5},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent":{"functionName":0,"floatParameter":1,"intParameter":2,"stringParameter":3,"objectReferenceParameter":4,"time":6},"Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds":{"center":0,"extends":3},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant":{"genericBindings":0,"pptrCurveMapping":1},"Luna.Unity.DTO.UnityEngine.Assets.Font":{"name":0,"ascent":1,"originalLineHeight":2,"fontSize":3,"characterInfo":4,"texture":5,"originalFontSize":7},"Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo":{"index":0,"advance":1,"bearing":2,"glyphWidth":3,"glyphHeight":4,"minX":5,"maxX":6,"minY":7,"maxY":8,"uvBottomLeftX":9,"uvBottomLeftY":10,"uvBottomRightX":11,"uvBottomRightY":12,"uvTopLeftX":13,"uvTopLeftY":14,"uvTopRightX":15,"uvTopRightY":16},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController":{"name":0,"layers":1,"parameters":2,"animationClips":3,"avatarUnsupported":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer":{"name":0,"defaultWeight":1,"blendingMode":2,"avatarMask":3,"syncedLayerIndex":4,"syncedLayerAffectsTiming":5,"syncedLayers":6,"stateMachine":7},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine":{"id":0,"name":1,"path":2,"states":3,"machines":4,"entryStateTransitions":5,"exitStateTransitions":6,"anyStateTransitions":7,"defaultStateId":8},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState":{"id":0,"name":1,"cycleOffset":2,"cycleOffsetParameter":3,"cycleOffsetParameterActive":4,"mirror":5,"mirrorParameter":6,"mirrorParameterActive":7,"motionId":8,"nameHash":9,"fullPathHash":10,"speed":11,"speedParameter":12,"speedParameterActive":13,"tag":14,"tagHash":15,"writeDefaultValues":16,"behaviours":17,"transitions":18},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition":{"fullPath":0,"canTransitionToSelf":1,"duration":2,"exitTime":3,"hasExitTime":4,"hasFixedDuration":5,"interruptionSource":6,"offset":7,"orderedInterruption":8,"destinationStateId":9,"isExit":10,"mute":11,"solo":12,"conditions":13},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition":{"mode":0,"parameter":1,"threshold":2},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition":{"destinationStateId":0,"isExit":1,"mute":2,"solo":3,"conditions":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter":{"defaultBool":0,"defaultFloat":1,"defaultInt":2,"name":3,"nameHash":4,"type":5},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorOverrideController":{"name":0,"_runtimeAnimatorController":1,"_originalAnimationClips":3,"_overrideAnimationClips":4,"_animationClips":5,"_animationClipPairs":6},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableStaticBatching":9,"enableDynamicBatching":10,"usePreservativeDynamicBatching":11,"lightmapEncodingQuality":12,"desiredColorSpace":13,"allTags":14},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.Avatar":{"name":0,"tos":1,"constant":2,"isValid":3,"isHuman":4,"hasRootMotion":5},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.Avatar+TOSPair":{"hash":0,"path":1},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame":{"weight":0,"vertices":1,"normals":2,"tangents":3},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey":{"time":0,"value":1}}

Deserializers.requiredComponents = {"44":[45],"46":[45],"47":[45],"48":[45],"49":[45],"50":[45],"51":[1],"52":[8],"53":[20],"21":[20],"54":[20],"55":[20],"56":[20],"57":[20],"58":[59],"60":[59],"61":[59],"62":[59],"63":[59],"64":[59],"65":[59],"66":[59],"67":[59],"68":[59],"69":[59],"70":[59],"71":[59],"72":[8],"73":[5],"74":[75],"76":[75],"15":[14],"77":[14],"78":[17,14],"79":[5],"80":[17,14],"81":[14],"82":[14],"83":[5,14],"84":[14,17],"85":[86],"87":[86],"88":[86],"89":[14],"90":[14],"34":[15],"38":[17,14],"91":[14],"16":[15],"92":[14],"93":[14],"94":[14],"95":[14],"96":[14],"97":[14],"98":[14],"99":[14],"100":[14],"18":[17,14],"101":[14],"102":[14],"103":[14],"104":[14],"35":[17,14],"105":[14],"106":[11],"107":[11],"12":[11],"108":[11],"109":[8],"110":[8]}

Deserializers.types = ["UnityEngine.Transform","UnityEngine.SkinnedMeshRenderer","UnityEngine.Mesh","UnityEngine.Material","UnityEngine.MeshFilter","UnityEngine.MeshRenderer","UnityEngine.Shader","UnityEngine.Texture2D","UnityEngine.Camera","UnityEngine.AudioListener","UnityEngine.EventSystems.UIBehaviour","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","UnityEngine.Light","UnityEngine.RectTransform","UnityEngine.Canvas","UnityEngine.UI.CanvasScaler","UnityEngine.CanvasRenderer","UnityEngine.UI.RawImage","UnityEngine.BoxCollider","UnityEngine.Rigidbody","UnityEngine.ConfigurableJoint","UnityEngine.CapsuleCollider","UnityEngine.Animator","UnityEngine.AnimatorOverrideController","UnityEngine.Avatar","UnityEngine.MonoBehaviour","Attack","UnityEngine.AudioSource","UnityEditor.Animations.AnimatorController","GameController","LunaController","UnityEngine.UI.Button","AudioController","UnityEngine.UI.GraphicRaycaster","UnityEngine.UI.Text","UnityEngine.Font","DG.Tweening.DOTweenAnimation","UnityEngine.UI.Image","UnityEngine.Sprite","UnityEngine.Cubemap","UnityEditor.MonoScript","UnityEngine.AnimationClip","DG.Tweening.Core.DOTweenSettings","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.FlareLayer","UnityEngine.CharacterJoint","UnityEngine.ConstantForce","UnityEngine.FixedJoint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.CompositeCollider2D","UnityEngine.Rigidbody2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text","TMPro.TextContainer","TMPro.TextMeshPro","TMPro.TextMeshProUGUI","Unity.VisualScripting.SceneVariables","Unity.VisualScripting.Variables","Unity.VisualScripting.ScriptMachine","Unity.VisualScripting.StateMachine","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.Mask","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RectMask2D","UnityEngine.UI.ScrollRect","UnityEngine.UI.Scrollbar","UnityEngine.UI.Slider","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster"]

Deserializers.unityVersion = "6000.0.78f1";

Deserializers.productName = "SRG_V01";

Deserializers.lunaInitializationTime = "07/21/2026 03:45:20";

Deserializers.lunaDaysRunning = "2.2";

Deserializers.lunaVersion = "7.2.0";

Deserializers.lunaSHA = "ea08d29afe2968efcb8d91d5624f033c6485cc68";

Deserializers.creativeName = "";

Deserializers.lunaAppID = "39964";

Deserializers.projectId = "2ee65b7bf37279a4a8c8b2625d5057f9";

Deserializers.packagesInfo = "com.unity.timeline: 1.8.12\ncom.unity.ugui: 2.0.0";

Deserializers.externalJsLibraries = "";

Deserializers.androidLink = ( typeof window !== "undefined")&&window.$environment.packageConfig.androidLink?window.$environment.packageConfig.androidLink:'Empty';

Deserializers.iosLink = ( typeof window !== "undefined")&&window.$environment.packageConfig.iosLink?window.$environment.packageConfig.iosLink:'Empty';

Deserializers.base64Enabled = "True";

Deserializers.minifyEnabled = "True";

Deserializers.isForceUncompressed = "False";

Deserializers.isAntiAliasingEnabled = "False";

Deserializers.isRuntimeAnalysisEnabledForCode = "False";

Deserializers.runtimeAnalysisExcludedClassesCount = "1756";

Deserializers.runtimeAnalysisExcludedMethodsCount = "3545";

Deserializers.runtimeAnalysisExcludedModules = "physics2d, particle-system, reflection, prefabs";

Deserializers.isRuntimeAnalysisEnabledForShaders = "True";

Deserializers.isRealtimeShadowsEnabled = "True";

Deserializers.isLunaCompilerV2Used = "False";

Deserializers.companyName = "DefaultCompany";

Deserializers.buildPlatform = "Android";

Deserializers.applicationIdentifier = "com.DefaultCompany.SRG_V01";

Deserializers.disableAntiAliasing = true;

Deserializers.graphicsConstraint = 24;

Deserializers.linearColorSpace = true;

Deserializers.buildID = "c240c9ea-8e0a-4ba4-926e-4c1fd20cc82d";

Deserializers.runtimeInitializeOnLoadInfos = [[["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"],["UnityEngine","AI","NavMesh","ClearPreUpdateListeners"]],[],[],[["UnityEngine","Timeline","AnimatorBindingCache","ResetStaticsOnLoad"],["UnityEngine","Timeline","TrackAsset","ResetStaticsOnLoad"],["UnityEngine","Timeline","AnimationPreviewUtilities","ResetStaticsOnLoad"]]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

