var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i426 = root || request.c( 'UnityEngine.JointSpring' )
  var i427 = data
  i426.spring = i427[0]
  i426.damper = i427[1]
  i426.targetPosition = i427[2]
  return i426
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i428 = root || request.c( 'UnityEngine.JointMotor' )
  var i429 = data
  i428.m_TargetVelocity = i429[0]
  i428.m_Force = i429[1]
  i428.m_FreeSpin = i429[2]
  return i428
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i430 = root || request.c( 'UnityEngine.JointLimits' )
  var i431 = data
  i430.m_Min = i431[0]
  i430.m_Max = i431[1]
  i430.m_Bounciness = i431[2]
  i430.m_BounceMinVelocity = i431[3]
  i430.m_ContactDistance = i431[4]
  i430.minBounce = i431[5]
  i430.maxBounce = i431[6]
  return i430
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i432 = root || request.c( 'UnityEngine.JointDrive' )
  var i433 = data
  i432.m_PositionSpring = i433[0]
  i432.m_PositionDamper = i433[1]
  i432.m_MaximumForce = i433[2]
  i432.m_UseAcceleration = i433[3]
  return i432
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i434 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i435 = data
  i434.m_Spring = i435[0]
  i434.m_Damper = i435[1]
  return i434
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i436 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i437 = data
  i436.m_Limit = i437[0]
  i436.m_Bounciness = i437[1]
  i436.m_ContactDistance = i437[2]
  return i436
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i438 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i439 = data
  i438.m_ExtremumSlip = i439[0]
  i438.m_ExtremumValue = i439[1]
  i438.m_AsymptoteSlip = i439[2]
  i438.m_AsymptoteValue = i439[3]
  i438.m_Stiffness = i439[4]
  return i438
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i440 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i441 = data
  i440.m_LowerAngle = i441[0]
  i440.m_UpperAngle = i441[1]
  return i440
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i442 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i443 = data
  i442.m_MotorSpeed = i443[0]
  i442.m_MaximumMotorTorque = i443[1]
  return i442
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i444 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i445 = data
  i444.m_DampingRatio = i445[0]
  i444.m_Frequency = i445[1]
  i444.m_Angle = i445[2]
  return i444
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i446 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i447 = data
  i446.m_LowerTranslation = i447[0]
  i446.m_UpperTranslation = i447[1]
  return i446
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i448 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i449 = data
  i448.name = i449[0]
  i448.width = i449[1]
  i448.height = i449[2]
  i448.mipmapCount = i449[3]
  i448.anisoLevel = i449[4]
  i448.filterMode = i449[5]
  i448.hdr = !!i449[6]
  i448.format = i449[7]
  i448.wrapMode = i449[8]
  i448.alphaIsTransparency = !!i449[9]
  i448.alphaSource = i449[10]
  i448.graphicsFormat = i449[11]
  i448.sRGBTexture = !!i449[12]
  i448.desiredColorSpace = i449[13]
  i448.wrapU = i449[14]
  i448.wrapV = i449[15]
  return i448
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i450 = root || new pc.UnityMaterial()
  var i451 = data
  i450.name = i451[0]
  request.r(i451[1], i451[2], 0, i450, 'shader')
  i450.renderQueue = i451[3]
  i450.enableInstancing = !!i451[4]
  var i453 = i451[5]
  var i452 = []
  for(var i = 0; i < i453.length; i += 1) {
    i452.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i453[i + 0]) );
  }
  i450.floatParameters = i452
  var i455 = i451[6]
  var i454 = []
  for(var i = 0; i < i455.length; i += 1) {
    i454.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i455[i + 0]) );
  }
  i450.colorParameters = i454
  var i457 = i451[7]
  var i456 = []
  for(var i = 0; i < i457.length; i += 1) {
    i456.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i457[i + 0]) );
  }
  i450.vectorParameters = i456
  var i459 = i451[8]
  var i458 = []
  for(var i = 0; i < i459.length; i += 1) {
    i458.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i459[i + 0]) );
  }
  i450.textureParameters = i458
  var i461 = i451[9]
  var i460 = []
  for(var i = 0; i < i461.length; i += 1) {
    i460.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i461[i + 0]) );
  }
  i450.materialFlags = i460
  return i450
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i464 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i465 = data
  i464.name = i465[0]
  i464.value = i465[1]
  return i464
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i468 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i469 = data
  i468.name = i469[0]
  i468.value = new pc.Color(i469[1], i469[2], i469[3], i469[4])
  return i468
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i472 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i473 = data
  i472.name = i473[0]
  i472.value = new pc.Vec4( i473[1], i473[2], i473[3], i473[4] )
  return i472
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i476 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i477 = data
  i476.name = i477[0]
  request.r(i477[1], i477[2], 0, i476, 'value')
  return i476
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i480 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i481 = data
  i480.name = i481[0]
  i480.enabled = !!i481[1]
  return i480
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i482 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i483 = data
  i482.name = i483[0]
  i482.index = i483[1]
  i482.startup = !!i483[2]
  return i482
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i484 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i485 = data
  i484.aspect = i485[0]
  i484.orthographic = !!i485[1]
  i484.orthographicSize = i485[2]
  i484.backgroundColor = new pc.Color(i485[3], i485[4], i485[5], i485[6])
  i484.nearClipPlane = i485[7]
  i484.farClipPlane = i485[8]
  i484.fieldOfView = i485[9]
  i484.depth = i485[10]
  i484.clearFlags = i485[11]
  i484.cullingMask = i485[12]
  i484.rect = i485[13]
  request.r(i485[14], i485[15], 0, i484, 'targetTexture')
  i484.usePhysicalProperties = !!i485[16]
  i484.focalLength = i485[17]
  i484.sensorSize = new pc.Vec2( i485[18], i485[19] )
  i484.lensShift = new pc.Vec2( i485[20], i485[21] )
  i484.gateFit = i485[22]
  i484.commandBufferCount = i485[23]
  i484.cameraType = i485[24]
  i484.enabled = !!i485[25]
  return i484
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i486 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i487 = data
  i486.name = i487[0]
  i486.tagId = i487[1]
  i486.enabled = !!i487[2]
  i486.isStatic = !!i487[3]
  i486.layer = i487[4]
  return i486
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i488 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i489 = data
  request.r(i489[0], i489[1], 0, i488, 'm_FirstSelected')
  i488.m_sendNavigationEvents = !!i489[2]
  i488.m_DragThreshold = i489[3]
  return i488
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i490 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i491 = data
  i490.m_HorizontalAxis = i491[0]
  i490.m_VerticalAxis = i491[1]
  i490.m_SubmitButton = i491[2]
  i490.m_CancelButton = i491[3]
  i490.m_InputActionsPerSecond = i491[4]
  i490.m_RepeatDelay = i491[5]
  i490.m_ForceModuleActive = !!i491[6]
  i490.m_SendPointerHoverToParent = !!i491[7]
  return i490
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i492 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i493 = data
  i492.pivot = new pc.Vec2( i493[0], i493[1] )
  i492.anchorMin = new pc.Vec2( i493[2], i493[3] )
  i492.anchorMax = new pc.Vec2( i493[4], i493[5] )
  i492.sizeDelta = new pc.Vec2( i493[6], i493[7] )
  i492.anchoredPosition3D = new pc.Vec3( i493[8], i493[9], i493[10] )
  i492.rotation = new pc.Quat(i493[11], i493[12], i493[13], i493[14])
  i492.scale = new pc.Vec3( i493[15], i493[16], i493[17] )
  return i492
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i494 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i495 = data
  i494.planeDistance = i495[0]
  i494.referencePixelsPerUnit = i495[1]
  i494.isFallbackOverlay = !!i495[2]
  i494.renderMode = i495[3]
  i494.renderOrder = i495[4]
  i494.sortingLayerName = i495[5]
  i494.sortingOrder = i495[6]
  i494.scaleFactor = i495[7]
  request.r(i495[8], i495[9], 0, i494, 'worldCamera')
  i494.overrideSorting = !!i495[10]
  i494.pixelPerfect = !!i495[11]
  i494.targetDisplay = i495[12]
  i494.overridePixelPerfect = !!i495[13]
  i494.enabled = !!i495[14]
  return i494
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i496 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i497 = data
  i496.m_UiScaleMode = i497[0]
  i496.m_ReferencePixelsPerUnit = i497[1]
  i496.m_ScaleFactor = i497[2]
  i496.m_ReferenceResolution = new pc.Vec2( i497[3], i497[4] )
  i496.m_ScreenMatchMode = i497[5]
  i496.m_MatchWidthOrHeight = i497[6]
  i496.m_PhysicalUnit = i497[7]
  i496.m_FallbackScreenDPI = i497[8]
  i496.m_DefaultSpriteDPI = i497[9]
  i496.m_DynamicPixelsPerUnit = i497[10]
  i496.m_PresetInfoIsWorld = !!i497[11]
  return i496
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i498 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i499 = data
  i498.m_IgnoreReversedGraphics = !!i499[0]
  i498.m_BlockingObjects = i499[1]
  i498.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i499[2] )
  return i498
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i500 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i501 = data
  i500.cullTransparentMesh = !!i501[0]
  return i500
}

Deserializers["UnityEngine.UI.RawImage"] = function (request, data, root) {
  var i502 = root || request.c( 'UnityEngine.UI.RawImage' )
  var i503 = data
  request.r(i503[0], i503[1], 0, i502, 'm_Texture')
  i502.m_UVRect = UnityEngine.Rect.MinMaxRect(i503[2], i503[3], i503[4], i503[5])
  request.r(i503[6], i503[7], 0, i502, 'm_Material')
  i502.m_Maskable = !!i503[8]
  i502.m_Color = new pc.Color(i503[9], i503[10], i503[11], i503[12])
  i502.m_RaycastTarget = !!i503[13]
  i502.m_RaycastPadding = new pc.Vec4( i503[14], i503[15], i503[16], i503[17] )
  return i502
}

Deserializers["UnityEngine.UI.AspectRatioFitter"] = function (request, data, root) {
  var i504 = root || request.c( 'UnityEngine.UI.AspectRatioFitter' )
  var i505 = data
  i504.m_AspectMode = i505[0]
  i504.m_AspectRatio = i505[1]
  return i504
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i506 = root || request.c( 'UnityEngine.UI.Image' )
  var i507 = data
  request.r(i507[0], i507[1], 0, i506, 'm_Sprite')
  i506.m_Type = i507[2]
  i506.m_PreserveAspect = !!i507[3]
  i506.m_FillCenter = !!i507[4]
  i506.m_FillMethod = i507[5]
  i506.m_FillAmount = i507[6]
  i506.m_FillClockwise = !!i507[7]
  i506.m_FillOrigin = i507[8]
  i506.m_UseSpriteMesh = !!i507[9]
  i506.m_PixelsPerUnitMultiplier = i507[10]
  request.r(i507[11], i507[12], 0, i506, 'm_Material')
  i506.m_Maskable = !!i507[13]
  i506.m_Color = new pc.Color(i507[14], i507[15], i507[16], i507[17])
  i506.m_RaycastTarget = !!i507[18]
  i506.m_RaycastPadding = new pc.Vec4( i507[19], i507[20], i507[21], i507[22] )
  return i506
}

Deserializers["TMPro.TextMeshProUGUI"] = function (request, data, root) {
  var i508 = root || request.c( 'TMPro.TextMeshProUGUI' )
  var i509 = data
  i508.m_hasFontAssetChanged = !!i509[0]
  request.r(i509[1], i509[2], 0, i508, 'm_baseMaterial')
  i508.m_maskOffset = new pc.Vec4( i509[3], i509[4], i509[5], i509[6] )
  i508.m_text = i509[7]
  i508.m_isRightToLeft = !!i509[8]
  request.r(i509[9], i509[10], 0, i508, 'm_fontAsset')
  request.r(i509[11], i509[12], 0, i508, 'm_sharedMaterial')
  var i511 = i509[13]
  var i510 = []
  for(var i = 0; i < i511.length; i += 2) {
  request.r(i511[i + 0], i511[i + 1], 2, i510, '')
  }
  i508.m_fontSharedMaterials = i510
  request.r(i509[14], i509[15], 0, i508, 'm_fontMaterial')
  var i513 = i509[16]
  var i512 = []
  for(var i = 0; i < i513.length; i += 2) {
  request.r(i513[i + 0], i513[i + 1], 2, i512, '')
  }
  i508.m_fontMaterials = i512
  i508.m_fontColor32 = UnityEngine.Color32.ConstructColor(i509[17], i509[18], i509[19], i509[20])
  i508.m_fontColor = new pc.Color(i509[21], i509[22], i509[23], i509[24])
  i508.m_enableVertexGradient = !!i509[25]
  i508.m_colorMode = i509[26]
  i508.m_fontColorGradient = request.d('TMPro.VertexGradient', i509[27], i508.m_fontColorGradient)
  request.r(i509[28], i509[29], 0, i508, 'm_fontColorGradientPreset')
  request.r(i509[30], i509[31], 0, i508, 'm_spriteAsset')
  i508.m_tintAllSprites = !!i509[32]
  request.r(i509[33], i509[34], 0, i508, 'm_StyleSheet')
  i508.m_TextStyleHashCode = i509[35]
  i508.m_overrideHtmlColors = !!i509[36]
  i508.m_faceColor = UnityEngine.Color32.ConstructColor(i509[37], i509[38], i509[39], i509[40])
  i508.m_fontSize = i509[41]
  i508.m_fontSizeBase = i509[42]
  i508.m_fontWeight = i509[43]
  i508.m_enableAutoSizing = !!i509[44]
  i508.m_fontSizeMin = i509[45]
  i508.m_fontSizeMax = i509[46]
  i508.m_fontStyle = i509[47]
  i508.m_HorizontalAlignment = i509[48]
  i508.m_VerticalAlignment = i509[49]
  i508.m_textAlignment = i509[50]
  i508.m_characterSpacing = i509[51]
  i508.m_characterHorizontalScale = i509[52]
  i508.m_wordSpacing = i509[53]
  i508.m_lineSpacing = i509[54]
  i508.m_lineSpacingMax = i509[55]
  i508.m_paragraphSpacing = i509[56]
  i508.m_charWidthMaxAdj = i509[57]
  i508.m_TextWrappingMode = i509[58]
  i508.m_wordWrappingRatios = i509[59]
  i508.m_overflowMode = i509[60]
  request.r(i509[61], i509[62], 0, i508, 'm_linkedTextComponent')
  request.r(i509[63], i509[64], 0, i508, 'parentLinkedComponent')
  i508.m_enableKerning = !!i509[65]
  var i515 = i509[66]
  var i514 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.OTL_FeatureTag')))
  for(var i = 0; i < i515.length; i += 1) {
    i514.add(i515[i + 0]);
  }
  i508.m_ActiveFontFeatures = i514
  i508.m_enableExtraPadding = !!i509[67]
  i508.checkPaddingRequired = !!i509[68]
  i508.m_isRichText = !!i509[69]
  i508.m_parseCtrlCharacters = !!i509[70]
  i508.m_isOrthographic = !!i509[71]
  i508.m_isCullingEnabled = !!i509[72]
  i508.m_horizontalMapping = i509[73]
  i508.m_verticalMapping = i509[74]
  i508.m_uvLineOffset = i509[75]
  i508.m_geometrySortingOrder = i509[76]
  i508.m_IsTextObjectScaleStatic = !!i509[77]
  i508.m_VertexBufferAutoSizeReduction = !!i509[78]
  i508.m_useMaxVisibleDescender = !!i509[79]
  i508.m_pageToDisplay = i509[80]
  i508.m_margin = new pc.Vec4( i509[81], i509[82], i509[83], i509[84] )
  i508.m_isUsingLegacyAnimationComponent = !!i509[85]
  i508.m_isVolumetricText = !!i509[86]
  request.r(i509[87], i509[88], 0, i508, 'm_Material')
  i508.m_EmojiFallbackSupport = !!i509[89]
  i508.m_Maskable = !!i509[90]
  i508.m_Color = new pc.Color(i509[91], i509[92], i509[93], i509[94])
  i508.m_RaycastTarget = !!i509[95]
  i508.m_RaycastPadding = new pc.Vec4( i509[96], i509[97], i509[98], i509[99] )
  return i508
}

Deserializers["TMPro.VertexGradient"] = function (request, data, root) {
  var i518 = root || request.c( 'TMPro.VertexGradient' )
  var i519 = data
  i518.topLeft = new pc.Color(i519[0], i519[1], i519[2], i519[3])
  i518.topRight = new pc.Color(i519[4], i519[5], i519[6], i519[7])
  i518.bottomLeft = new pc.Color(i519[8], i519[9], i519[10], i519[11])
  i518.bottomRight = new pc.Color(i519[12], i519[13], i519[14], i519[15])
  return i518
}

Deserializers["TutController"] = function (request, data, root) {
  var i522 = root || request.c( 'TutController' )
  var i523 = data
  request.r(i523[0], i523[1], 0, i522, 'rt')
  var i525 = i523[2]
  var i524 = new (System.Collections.Generic.List$1(Bridge.ns('Option')))
  for(var i = 0; i < i525.length; i += 1) {
    i524.add(request.d('Option', i525[i + 0]));
  }
  i522.options = i524
  i522.moveTime = i523[3]
  i522.fromScale = i523[4]
  i522.toScale = i523[5]
  i522.scaleTime = i523[6]
  return i522
}

Deserializers["Option"] = function (request, data, root) {
  var i528 = root || request.c( 'Option' )
  var i529 = data
  i528.Position = new pc.Vec3( i529[0], i529[1], i529[2] )
  request.r(i529[3], i529[4], 0, i528, 'Demo')
  return i528
}

Deserializers["DG.Tweening.DOTweenAnimation"] = function (request, data, root) {
  var i530 = root || request.c( 'DG.Tweening.DOTweenAnimation' )
  var i531 = data
  i530.targetIsSelf = !!i531[0]
  request.r(i531[1], i531[2], 0, i530, 'targetGO')
  i530.tweenTargetIsTargetGO = !!i531[3]
  i530.delay = i531[4]
  i530.duration = i531[5]
  i530.easeType = i531[6]
  i530.easeCurve = new pc.AnimationCurve( { keys_flow: i531[7] } )
  i530.loopType = i531[8]
  i530.loops = i531[9]
  i530.id = i531[10]
  i530.isRelative = !!i531[11]
  i530.isFrom = !!i531[12]
  i530.isIndependentUpdate = !!i531[13]
  i530.autoKill = !!i531[14]
  i530.autoGenerate = !!i531[15]
  i530.isActive = !!i531[16]
  i530.isValid = !!i531[17]
  request.r(i531[18], i531[19], 0, i530, 'target')
  i530.animationType = i531[20]
  i530.targetType = i531[21]
  i530.forcedTargetType = i531[22]
  i530.autoPlay = !!i531[23]
  i530.useTargetAsV3 = !!i531[24]
  i530.endValueFloat = i531[25]
  i530.endValueV3 = new pc.Vec3( i531[26], i531[27], i531[28] )
  i530.endValueV2 = new pc.Vec2( i531[29], i531[30] )
  i530.endValueColor = new pc.Color(i531[31], i531[32], i531[33], i531[34])
  i530.endValueString = i531[35]
  i530.endValueRect = UnityEngine.Rect.MinMaxRect(i531[36], i531[37], i531[38], i531[39])
  request.r(i531[40], i531[41], 0, i530, 'endValueTransform')
  i530.optionalBool0 = !!i531[42]
  i530.optionalBool1 = !!i531[43]
  i530.optionalFloat0 = i531[44]
  i530.optionalInt0 = i531[45]
  i530.optionalRotationMode = i531[46]
  i530.optionalScrambleMode = i531[47]
  i530.optionalShakeRandomnessMode = i531[48]
  i530.optionalString = i531[49]
  i530.updateType = i531[50]
  i530.isSpeedBased = !!i531[51]
  i530.hasOnStart = !!i531[52]
  i530.hasOnPlay = !!i531[53]
  i530.hasOnUpdate = !!i531[54]
  i530.hasOnStepComplete = !!i531[55]
  i530.hasOnComplete = !!i531[56]
  i530.hasOnTweenCreated = !!i531[57]
  i530.hasOnRewind = !!i531[58]
  i530.onStart = request.d('UnityEngine.Events.UnityEvent', i531[59], i530.onStart)
  i530.onPlay = request.d('UnityEngine.Events.UnityEvent', i531[60], i530.onPlay)
  i530.onUpdate = request.d('UnityEngine.Events.UnityEvent', i531[61], i530.onUpdate)
  i530.onStepComplete = request.d('UnityEngine.Events.UnityEvent', i531[62], i530.onStepComplete)
  i530.onComplete = request.d('UnityEngine.Events.UnityEvent', i531[63], i530.onComplete)
  i530.onTweenCreated = request.d('UnityEngine.Events.UnityEvent', i531[64], i530.onTweenCreated)
  i530.onRewind = request.d('UnityEngine.Events.UnityEvent', i531[65], i530.onRewind)
  return i530
}

Deserializers["UnityEngine.Events.UnityEvent"] = function (request, data, root) {
  var i532 = root || request.c( 'UnityEngine.Events.UnityEvent' )
  var i533 = data
  i532.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i533[0], i532.m_PersistentCalls)
  return i532
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i534 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i535 = data
  var i537 = i535[0]
  var i536 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i537.length; i += 1) {
    i536.add(request.d('UnityEngine.Events.PersistentCall', i537[i + 0]));
  }
  i534.m_Calls = i536
  return i534
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i540 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i541 = data
  request.r(i541[0], i541[1], 0, i540, 'm_Target')
  i540.m_TargetAssemblyTypeName = i541[2]
  i540.m_MethodName = i541[3]
  i540.m_Mode = i541[4]
  i540.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i541[5], i540.m_Arguments)
  i540.m_CallState = i541[6]
  return i540
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i542 = root || request.c( 'UnityEngine.UI.Button' )
  var i543 = data
  i542.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i543[0], i542.m_OnClick)
  i542.m_Navigation = request.d('UnityEngine.UI.Navigation', i543[1], i542.m_Navigation)
  i542.m_Transition = i543[2]
  i542.m_Colors = request.d('UnityEngine.UI.ColorBlock', i543[3], i542.m_Colors)
  i542.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i543[4], i542.m_SpriteState)
  i542.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i543[5], i542.m_AnimationTriggers)
  i542.m_Interactable = !!i543[6]
  request.r(i543[7], i543[8], 0, i542, 'm_TargetGraphic')
  return i542
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i544 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i545 = data
  i544.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i545[0], i544.m_PersistentCalls)
  return i544
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i546 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i547 = data
  i546.m_Mode = i547[0]
  i546.m_WrapAround = !!i547[1]
  request.r(i547[2], i547[3], 0, i546, 'm_SelectOnUp')
  request.r(i547[4], i547[5], 0, i546, 'm_SelectOnDown')
  request.r(i547[6], i547[7], 0, i546, 'm_SelectOnLeft')
  request.r(i547[8], i547[9], 0, i546, 'm_SelectOnRight')
  return i546
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i548 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i549 = data
  i548.m_NormalColor = new pc.Color(i549[0], i549[1], i549[2], i549[3])
  i548.m_HighlightedColor = new pc.Color(i549[4], i549[5], i549[6], i549[7])
  i548.m_PressedColor = new pc.Color(i549[8], i549[9], i549[10], i549[11])
  i548.m_SelectedColor = new pc.Color(i549[12], i549[13], i549[14], i549[15])
  i548.m_DisabledColor = new pc.Color(i549[16], i549[17], i549[18], i549[19])
  i548.m_ColorMultiplier = i549[20]
  i548.m_FadeDuration = i549[21]
  return i548
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i550 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i551 = data
  request.r(i551[0], i551[1], 0, i550, 'm_HighlightedSprite')
  request.r(i551[2], i551[3], 0, i550, 'm_PressedSprite')
  request.r(i551[4], i551[5], 0, i550, 'm_SelectedSprite')
  request.r(i551[6], i551[7], 0, i550, 'm_DisabledSprite')
  return i550
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i552 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i553 = data
  i552.m_NormalTrigger = i553[0]
  i552.m_HighlightedTrigger = i553[1]
  i552.m_PressedTrigger = i553[2]
  i552.m_SelectedTrigger = i553[3]
  i552.m_DisabledTrigger = i553[4]
  return i552
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.AudioSource"] = function (request, data, root) {
  var i554 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.AudioSource' )
  var i555 = data
  request.r(i555[0], i555[1], 0, i554, 'clip')
  request.r(i555[2], i555[3], 0, i554, 'outputAudioMixerGroup')
  i554.playOnAwake = !!i555[4]
  i554.loop = !!i555[5]
  i554.time = i555[6]
  i554.volume = i555[7]
  i554.pitch = i555[8]
  i554.enabled = !!i555[9]
  return i554
}

Deserializers["LunaController"] = function (request, data, root) {
  var i556 = root || request.c( 'LunaController' )
  var i557 = data
  i556.TimePlay = i557[0]
  i556.LimitTimePlay = !!i557[1]
  request.r(i557[2], i557[3], 0, i556, 'BGTexture')
  i556.BGColor = new pc.Color(i557[4], i557[5], i557[6], i557[7])
  request.r(i557[8], i557[9], 0, i556, 'BGM')
  request.r(i557[10], i557[11], 0, i556, 'LogoTexture')
  request.r(i557[12], i557[13], 0, i556, 'Demo1Texture')
  i556.Demo1Name = i557[14]
  request.r(i557[15], i557[16], 0, i556, 'Demo2Texture')
  i556.Demo2Name = i557[17]
  request.r(i557[18], i557[19], 0, i556, 'Demo3Texture')
  i556.Demo3Name = i557[20]
  request.r(i557[21], i557[22], 0, i556, 'Demo4Texture')
  i556.Demo4Name = i557[23]
  request.r(i557[24], i557[25], 0, i556, 'CTATexture')
  i556.CTAColor = new pc.Color(i557[26], i557[27], i557[28], i557[29])
  i556.CTAText = i557[30]
  i556.CTATextColor = new pc.Color(i557[31], i557[32], i557[33], i557[34])
  request.r(i557[35], i557[36], 0, i556, 'BGImage')
  request.r(i557[37], i557[38], 0, i556, 'musicSource')
  request.r(i557[39], i557[40], 0, i556, 'logoImage')
  request.r(i557[41], i557[42], 0, i556, 'demo1Image')
  request.r(i557[43], i557[44], 0, i556, 'demo1Text')
  request.r(i557[45], i557[46], 0, i556, 'demo2Image')
  request.r(i557[47], i557[48], 0, i556, 'demo2Text')
  request.r(i557[49], i557[50], 0, i556, 'demo3Image')
  request.r(i557[51], i557[52], 0, i556, 'demo3Text')
  request.r(i557[53], i557[54], 0, i556, 'demo4Image')
  request.r(i557[55], i557[56], 0, i556, 'demo4Text')
  request.r(i557[57], i557[58], 0, i556, 'CTAImage')
  request.r(i557[59], i557[60], 0, i556, 'CTATextField')
  request.r(i557[61], i557[62], 0, i556, 'endCard')
  return i556
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i558 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i559 = data
  i558.ambientIntensity = i559[0]
  i558.reflectionIntensity = i559[1]
  i558.ambientMode = i559[2]
  i558.ambientLight = new pc.Color(i559[3], i559[4], i559[5], i559[6])
  i558.ambientSkyColor = new pc.Color(i559[7], i559[8], i559[9], i559[10])
  i558.ambientGroundColor = new pc.Color(i559[11], i559[12], i559[13], i559[14])
  i558.ambientEquatorColor = new pc.Color(i559[15], i559[16], i559[17], i559[18])
  i558.fogColor = new pc.Color(i559[19], i559[20], i559[21], i559[22])
  i558.fogEndDistance = i559[23]
  i558.fogStartDistance = i559[24]
  i558.fogDensity = i559[25]
  i558.fog = !!i559[26]
  request.r(i559[27], i559[28], 0, i558, 'skybox')
  i558.fogMode = i559[29]
  var i561 = i559[30]
  var i560 = []
  for(var i = 0; i < i561.length; i += 1) {
    i560.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i561[i + 0]) );
  }
  i558.lightmaps = i560
  i558.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i559[31], i558.lightProbes)
  i558.lightmapsMode = i559[32]
  i558.mixedBakeMode = i559[33]
  i558.environmentLightingMode = i559[34]
  i558.ambientProbe = new pc.SphericalHarmonicsL2(i559[35])
  request.r(i559[36], i559[37], 0, i558, 'customReflection')
  request.r(i559[38], i559[39], 0, i558, 'defaultReflection')
  i558.defaultReflectionMode = i559[40]
  i558.defaultReflectionResolution = i559[41]
  i558.sunLightObjectId = i559[42]
  i558.pixelLightCount = i559[43]
  i558.defaultReflectionHDR = !!i559[44]
  i558.hasLightDataAsset = !!i559[45]
  i558.hasManualGenerate = !!i559[46]
  return i558
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i564 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i565 = data
  request.r(i565[0], i565[1], 0, i564, 'lightmapColor')
  request.r(i565[2], i565[3], 0, i564, 'lightmapDirection')
  request.r(i565[4], i565[5], 0, i564, 'shadowMask')
  return i564
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i566 = root || new UnityEngine.LightProbes()
  var i567 = data
  return i566
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i574 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i575 = data
  var i577 = i575[0]
  var i576 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i577.length; i += 1) {
    i576.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i577[i + 0]));
  }
  i574.ShaderCompilationErrors = i576
  i574.name = i575[1]
  i574.guid = i575[2]
  var i579 = i575[3]
  var i578 = []
  for(var i = 0; i < i579.length; i += 1) {
    i578.push( i579[i + 0] );
  }
  i574.shaderDefinedKeywords = i578
  var i581 = i575[4]
  var i580 = []
  for(var i = 0; i < i581.length; i += 1) {
    i580.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i581[i + 0]) );
  }
  i574.passes = i580
  var i583 = i575[5]
  var i582 = []
  for(var i = 0; i < i583.length; i += 1) {
    i582.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i583[i + 0]) );
  }
  i574.usePasses = i582
  var i585 = i575[6]
  var i584 = []
  for(var i = 0; i < i585.length; i += 1) {
    i584.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i585[i + 0]) );
  }
  i574.defaultParameterValues = i584
  request.r(i575[7], i575[8], 0, i574, 'unityFallbackShader')
  i574.readDepth = !!i575[9]
  i574.hasDepthOnlyPass = !!i575[10]
  i574.isCreatedByShaderGraph = !!i575[11]
  i574.disableBatching = !!i575[12]
  i574.compiled = !!i575[13]
  return i574
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i588 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i589 = data
  i588.shaderName = i589[0]
  i588.errorMessage = i589[1]
  return i588
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i594 = root || new pc.UnityShaderPass()
  var i595 = data
  i594.id = i595[0]
  i594.subShaderIndex = i595[1]
  i594.name = i595[2]
  i594.passType = i595[3]
  i594.grabPassTextureName = i595[4]
  i594.usePass = !!i595[5]
  i594.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i595[6], i594.zTest)
  i594.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i595[7], i594.zWrite)
  i594.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i595[8], i594.culling)
  i594.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i595[9], i594.blending)
  i594.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i595[10], i594.alphaBlending)
  i594.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i595[11], i594.colorWriteMask)
  i594.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i595[12], i594.offsetUnits)
  i594.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i595[13], i594.offsetFactor)
  i594.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i595[14], i594.stencilRef)
  i594.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i595[15], i594.stencilReadMask)
  i594.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i595[16], i594.stencilWriteMask)
  i594.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i595[17], i594.stencilOp)
  i594.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i595[18], i594.stencilOpFront)
  i594.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i595[19], i594.stencilOpBack)
  var i597 = i595[20]
  var i596 = []
  for(var i = 0; i < i597.length; i += 1) {
    i596.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i597[i + 0]) );
  }
  i594.tags = i596
  var i599 = i595[21]
  var i598 = []
  for(var i = 0; i < i599.length; i += 1) {
    i598.push( i599[i + 0] );
  }
  i594.passDefinedKeywords = i598
  var i601 = i595[22]
  var i600 = []
  for(var i = 0; i < i601.length; i += 1) {
    i600.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i601[i + 0]) );
  }
  i594.passDefinedKeywordGroups = i600
  var i603 = i595[23]
  var i602 = []
  for(var i = 0; i < i603.length; i += 1) {
    i602.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i603[i + 0]) );
  }
  i594.variants = i602
  var i605 = i595[24]
  var i604 = []
  for(var i = 0; i < i605.length; i += 1) {
    i604.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i605[i + 0]) );
  }
  i594.excludedVariants = i604
  i594.hasDepthReader = !!i595[25]
  return i594
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i606 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i607 = data
  i606.val = i607[0]
  i606.name = i607[1]
  return i606
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i608 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i609 = data
  i608.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i609[0], i608.src)
  i608.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i609[1], i608.dst)
  i608.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i609[2], i608.op)
  return i608
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i610 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i611 = data
  i610.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i611[0], i610.pass)
  i610.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i611[1], i610.fail)
  i610.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i611[2], i610.zFail)
  i610.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i611[3], i610.comp)
  return i610
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i614 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i615 = data
  i614.name = i615[0]
  i614.value = i615[1]
  return i614
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i618 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i619 = data
  var i621 = i619[0]
  var i620 = []
  for(var i = 0; i < i621.length; i += 1) {
    i620.push( i621[i + 0] );
  }
  i618.keywords = i620
  i618.hasDiscard = !!i619[1]
  return i618
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i624 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i625 = data
  i624.passId = i625[0]
  i624.subShaderIndex = i625[1]
  var i627 = i625[2]
  var i626 = []
  for(var i = 0; i < i627.length; i += 1) {
    i626.push( i627[i + 0] );
  }
  i624.keywords = i626
  i624.vertexProgram = i625[3]
  i624.fragmentProgram = i625[4]
  i624.exportedForWebGl2 = !!i625[5]
  i624.readDepth = !!i625[6]
  return i624
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i630 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i631 = data
  request.r(i631[0], i631[1], 0, i630, 'shader')
  i630.pass = i631[2]
  return i630
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i634 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i635 = data
  i634.name = i635[0]
  i634.type = i635[1]
  i634.value = new pc.Vec4( i635[2], i635[3], i635[4], i635[5] )
  i634.textureValue = i635[6]
  i634.shaderPropertyFlag = i635[7]
  return i634
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i636 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i637 = data
  i636.name = i637[0]
  request.r(i637[1], i637[2], 0, i636, 'texture')
  i636.aabb = i637[3]
  i636.vertices = i637[4]
  i636.triangles = i637[5]
  i636.textureRect = UnityEngine.Rect.MinMaxRect(i637[6], i637[7], i637[8], i637[9])
  i636.packedRect = UnityEngine.Rect.MinMaxRect(i637[10], i637[11], i637[12], i637[13])
  i636.border = new pc.Vec4( i637[14], i637[15], i637[16], i637[17] )
  i636.transparency = i637[18]
  i636.bounds = i637[19]
  i636.pixelsPerUnit = i637[20]
  i636.textureWidth = i637[21]
  i636.textureHeight = i637[22]
  i636.nativeSize = new pc.Vec2( i637[23], i637[24] )
  i636.pivot = new pc.Vec2( i637[25], i637[26] )
  i636.textureRectOffset = new pc.Vec2( i637[27], i637[28] )
  return i636
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i638 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i639 = data
  i638.name = i639[0]
  return i638
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.TextAsset"] = function (request, data, root) {
  var i640 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.TextAsset' )
  var i641 = data
  i640.name = i641[0]
  i640.bytes64 = i641[1]
  i640.data = i641[2]
  return i640
}

Deserializers["TMPro.TMP_FontAsset"] = function (request, data, root) {
  var i642 = root || request.c( 'TMPro.TMP_FontAsset' )
  var i643 = data
  i642.normalStyle = i643[0]
  i642.normalSpacingOffset = i643[1]
  i642.boldStyle = i643[2]
  i642.boldSpacing = i643[3]
  i642.italicStyle = i643[4]
  i642.tabSize = i643[5]
  request.r(i643[6], i643[7], 0, i642, 'atlas')
  i642.m_SourceFontFileGUID = i643[8]
  i642.m_CreationSettings = request.d('TMPro.FontAssetCreationSettings', i643[9], i642.m_CreationSettings)
  request.r(i643[10], i643[11], 0, i642, 'm_SourceFontFile')
  i642.m_SourceFontFilePath = i643[12]
  i642.m_AtlasPopulationMode = i643[13]
  i642.InternalDynamicOS = !!i643[14]
  var i645 = i643[15]
  var i644 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.Glyph')))
  for(var i = 0; i < i645.length; i += 1) {
    i644.add(request.d('UnityEngine.TextCore.Glyph', i645[i + 0]));
  }
  i642.m_GlyphTable = i644
  var i647 = i643[16]
  var i646 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Character')))
  for(var i = 0; i < i647.length; i += 1) {
    i646.add(request.d('TMPro.TMP_Character', i647[i + 0]));
  }
  i642.m_CharacterTable = i646
  var i649 = i643[17]
  var i648 = []
  for(var i = 0; i < i649.length; i += 2) {
  request.r(i649[i + 0], i649[i + 1], 2, i648, '')
  }
  i642.m_AtlasTextures = i648
  i642.m_AtlasTextureIndex = i643[18]
  i642.m_IsMultiAtlasTexturesEnabled = !!i643[19]
  i642.m_GetFontFeatures = !!i643[20]
  i642.m_ClearDynamicDataOnBuild = !!i643[21]
  i642.m_AtlasWidth = i643[22]
  i642.m_AtlasHeight = i643[23]
  i642.m_AtlasPadding = i643[24]
  i642.m_AtlasRenderMode = i643[25]
  var i651 = i643[26]
  var i650 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i651.length; i += 1) {
    i650.add(request.d('UnityEngine.TextCore.GlyphRect', i651[i + 0]));
  }
  i642.m_UsedGlyphRects = i650
  var i653 = i643[27]
  var i652 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i653.length; i += 1) {
    i652.add(request.d('UnityEngine.TextCore.GlyphRect', i653[i + 0]));
  }
  i642.m_FreeGlyphRects = i652
  i642.m_FontFeatureTable = request.d('TMPro.TMP_FontFeatureTable', i643[28], i642.m_FontFeatureTable)
  i642.m_ShouldReimportFontFeatures = !!i643[29]
  var i655 = i643[30]
  var i654 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i655.length; i += 2) {
  request.r(i655[i + 0], i655[i + 1], 1, i654, '')
  }
  i642.m_FallbackFontAssetTable = i654
  var i657 = i643[31]
  var i656 = []
  for(var i = 0; i < i657.length; i += 1) {
    i656.push( request.d('TMPro.TMP_FontWeightPair', i657[i + 0]) );
  }
  i642.m_FontWeightTable = i656
  var i659 = i643[32]
  var i658 = []
  for(var i = 0; i < i659.length; i += 1) {
    i658.push( request.d('TMPro.TMP_FontWeightPair', i659[i + 0]) );
  }
  i642.fontWeights = i658
  i642.m_fontInfo = request.d('TMPro.FaceInfo_Legacy', i643[33], i642.m_fontInfo)
  var i661 = i643[34]
  var i660 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Glyph')))
  for(var i = 0; i < i661.length; i += 1) {
    i660.add(request.d('TMPro.TMP_Glyph', i661[i + 0]));
  }
  i642.m_glyphInfoList = i660
  i642.m_KerningTable = request.d('TMPro.KerningTable', i643[35], i642.m_KerningTable)
  var i663 = i643[36]
  var i662 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i663.length; i += 2) {
  request.r(i663[i + 0], i663[i + 1], 1, i662, '')
  }
  i642.fallbackFontAssets = i662
  i642.m_Version = i643[37]
  i642.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i643[38], i642.m_FaceInfo)
  request.r(i643[39], i643[40], 0, i642, 'm_Material')
  return i642
}

Deserializers["TMPro.FontAssetCreationSettings"] = function (request, data, root) {
  var i664 = root || request.c( 'TMPro.FontAssetCreationSettings' )
  var i665 = data
  i664.sourceFontFileName = i665[0]
  i664.sourceFontFileGUID = i665[1]
  i664.faceIndex = i665[2]
  i664.pointSizeSamplingMode = i665[3]
  i664.pointSize = i665[4]
  i664.padding = i665[5]
  i664.paddingMode = i665[6]
  i664.packingMode = i665[7]
  i664.atlasWidth = i665[8]
  i664.atlasHeight = i665[9]
  i664.characterSetSelectionMode = i665[10]
  i664.characterSequence = i665[11]
  i664.referencedFontAssetGUID = i665[12]
  i664.referencedTextAssetGUID = i665[13]
  i664.fontStyle = i665[14]
  i664.fontStyleModifier = i665[15]
  i664.renderMode = i665[16]
  i664.includeFontFeatures = !!i665[17]
  return i664
}

Deserializers["UnityEngine.TextCore.Glyph"] = function (request, data, root) {
  var i668 = root || request.c( 'UnityEngine.TextCore.Glyph' )
  var i669 = data
  i668.m_Index = i669[0]
  i668.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i669[1], i668.m_Metrics)
  i668.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i669[2], i668.m_GlyphRect)
  i668.m_Scale = i669[3]
  i668.m_AtlasIndex = i669[4]
  i668.m_ClassDefinitionType = i669[5]
  return i668
}

Deserializers["UnityEngine.TextCore.GlyphMetrics"] = function (request, data, root) {
  var i670 = root || request.c( 'UnityEngine.TextCore.GlyphMetrics' )
  var i671 = data
  i670.m_Width = i671[0]
  i670.m_Height = i671[1]
  i670.m_HorizontalBearingX = i671[2]
  i670.m_HorizontalBearingY = i671[3]
  i670.m_HorizontalAdvance = i671[4]
  return i670
}

Deserializers["UnityEngine.TextCore.GlyphRect"] = function (request, data, root) {
  var i672 = root || request.c( 'UnityEngine.TextCore.GlyphRect' )
  var i673 = data
  i672.m_X = i673[0]
  i672.m_Y = i673[1]
  i672.m_Width = i673[2]
  i672.m_Height = i673[3]
  return i672
}

Deserializers["TMPro.TMP_Character"] = function (request, data, root) {
  var i676 = root || request.c( 'TMPro.TMP_Character' )
  var i677 = data
  i676.m_ElementType = i677[0]
  i676.m_Unicode = i677[1]
  i676.m_GlyphIndex = i677[2]
  i676.m_Scale = i677[3]
  return i676
}

Deserializers["TMPro.TMP_FontFeatureTable"] = function (request, data, root) {
  var i682 = root || request.c( 'TMPro.TMP_FontFeatureTable' )
  var i683 = data
  var i685 = i683[0]
  var i684 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.MultipleSubstitutionRecord')))
  for(var i = 0; i < i685.length; i += 1) {
    i684.add(request.d('TMPro.MultipleSubstitutionRecord', i685[i + 0]));
  }
  i682.m_MultipleSubstitutionRecords = i684
  var i687 = i683[1]
  var i686 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.LigatureSubstitutionRecord')))
  for(var i = 0; i < i687.length; i += 1) {
    i686.add(request.d('TMPro.LigatureSubstitutionRecord', i687[i + 0]));
  }
  i682.m_LigatureSubstitutionRecords = i686
  var i689 = i683[2]
  var i688 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord')))
  for(var i = 0; i < i689.length; i += 1) {
    i688.add(request.d('UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord', i689[i + 0]));
  }
  i682.m_GlyphPairAdjustmentRecords = i688
  var i691 = i683[3]
  var i690 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.MarkToBaseAdjustmentRecord')))
  for(var i = 0; i < i691.length; i += 1) {
    i690.add(request.d('TMPro.MarkToBaseAdjustmentRecord', i691[i + 0]));
  }
  i682.m_MarkToBaseAdjustmentRecords = i690
  var i693 = i683[4]
  var i692 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.MarkToMarkAdjustmentRecord')))
  for(var i = 0; i < i693.length; i += 1) {
    i692.add(request.d('TMPro.MarkToMarkAdjustmentRecord', i693[i + 0]));
  }
  i682.m_MarkToMarkAdjustmentRecords = i692
  return i682
}

Deserializers["TMPro.MultipleSubstitutionRecord"] = function (request, data, root) {
  var i696 = root || request.c( 'TMPro.MultipleSubstitutionRecord' )
  var i697 = data
  i696.m_TargetGlyphID = i697[0]
  i696.m_SubstituteGlyphIDs = i697[1]
  return i696
}

Deserializers["TMPro.LigatureSubstitutionRecord"] = function (request, data, root) {
  var i700 = root || request.c( 'TMPro.LigatureSubstitutionRecord' )
  var i701 = data
  i700.m_ComponentGlyphIDs = i701[0]
  i700.m_LigatureGlyphID = i701[1]
  return i700
}

Deserializers["UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord"] = function (request, data, root) {
  var i704 = root || request.c( 'UnityEngine.TextCore.LowLevel.GlyphPairAdjustmentRecord' )
  var i705 = data
  i704.m_FirstAdjustmentRecord = request.d('UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord', i705[0], i704.m_FirstAdjustmentRecord)
  i704.m_SecondAdjustmentRecord = request.d('UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord', i705[1], i704.m_SecondAdjustmentRecord)
  i704.m_FeatureLookupFlags = i705[2]
  return i704
}

Deserializers["TMPro.MarkToBaseAdjustmentRecord"] = function (request, data, root) {
  var i708 = root || request.c( 'TMPro.MarkToBaseAdjustmentRecord' )
  var i709 = data
  i708.m_BaseGlyphID = i709[0]
  i708.m_BaseGlyphAnchorPoint = request.d('TMPro.GlyphAnchorPoint', i709[1], i708.m_BaseGlyphAnchorPoint)
  i708.m_MarkGlyphID = i709[2]
  i708.m_MarkPositionAdjustment = request.d('TMPro.MarkPositionAdjustment', i709[3], i708.m_MarkPositionAdjustment)
  return i708
}

Deserializers["TMPro.MarkToMarkAdjustmentRecord"] = function (request, data, root) {
  var i712 = root || request.c( 'TMPro.MarkToMarkAdjustmentRecord' )
  var i713 = data
  i712.m_BaseMarkGlyphID = i713[0]
  i712.m_BaseMarkGlyphAnchorPoint = request.d('TMPro.GlyphAnchorPoint', i713[1], i712.m_BaseMarkGlyphAnchorPoint)
  i712.m_CombiningMarkGlyphID = i713[2]
  i712.m_CombiningMarkPositionAdjustment = request.d('TMPro.MarkPositionAdjustment', i713[3], i712.m_CombiningMarkPositionAdjustment)
  return i712
}

Deserializers["TMPro.TMP_FontWeightPair"] = function (request, data, root) {
  var i718 = root || request.c( 'TMPro.TMP_FontWeightPair' )
  var i719 = data
  request.r(i719[0], i719[1], 0, i718, 'regularTypeface')
  request.r(i719[2], i719[3], 0, i718, 'italicTypeface')
  return i718
}

Deserializers["TMPro.FaceInfo_Legacy"] = function (request, data, root) {
  var i720 = root || request.c( 'TMPro.FaceInfo_Legacy' )
  var i721 = data
  i720.Name = i721[0]
  i720.PointSize = i721[1]
  i720.Scale = i721[2]
  i720.CharacterCount = i721[3]
  i720.LineHeight = i721[4]
  i720.Baseline = i721[5]
  i720.Ascender = i721[6]
  i720.CapHeight = i721[7]
  i720.Descender = i721[8]
  i720.CenterLine = i721[9]
  i720.SuperscriptOffset = i721[10]
  i720.SubscriptOffset = i721[11]
  i720.SubSize = i721[12]
  i720.Underline = i721[13]
  i720.UnderlineThickness = i721[14]
  i720.strikethrough = i721[15]
  i720.strikethroughThickness = i721[16]
  i720.TabWidth = i721[17]
  i720.Padding = i721[18]
  i720.AtlasWidth = i721[19]
  i720.AtlasHeight = i721[20]
  return i720
}

Deserializers["TMPro.TMP_Glyph"] = function (request, data, root) {
  var i724 = root || request.c( 'TMPro.TMP_Glyph' )
  var i725 = data
  i724.id = i725[0]
  i724.x = i725[1]
  i724.y = i725[2]
  i724.width = i725[3]
  i724.height = i725[4]
  i724.xOffset = i725[5]
  i724.yOffset = i725[6]
  i724.xAdvance = i725[7]
  i724.scale = i725[8]
  return i724
}

Deserializers["TMPro.KerningTable"] = function (request, data, root) {
  var i726 = root || request.c( 'TMPro.KerningTable' )
  var i727 = data
  var i729 = i727[0]
  var i728 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.KerningPair')))
  for(var i = 0; i < i729.length; i += 1) {
    i728.add(request.d('TMPro.KerningPair', i729[i + 0]));
  }
  i726.kerningPairs = i728
  return i726
}

Deserializers["TMPro.KerningPair"] = function (request, data, root) {
  var i732 = root || request.c( 'TMPro.KerningPair' )
  var i733 = data
  i732.xOffset = i733[0]
  i732.m_FirstGlyph = i733[1]
  i732.m_FirstGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i733[2], i732.m_FirstGlyphAdjustments)
  i732.m_SecondGlyph = i733[3]
  i732.m_SecondGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i733[4], i732.m_SecondGlyphAdjustments)
  i732.m_IgnoreSpacingAdjustments = !!i733[5]
  return i732
}

Deserializers["UnityEngine.TextCore.FaceInfo"] = function (request, data, root) {
  var i734 = root || request.c( 'UnityEngine.TextCore.FaceInfo' )
  var i735 = data
  i734.m_FaceIndex = i735[0]
  i734.m_FamilyName = i735[1]
  i734.m_StyleName = i735[2]
  i734.m_PointSize = i735[3]
  i734.m_Scale = i735[4]
  i734.m_UnitsPerEM = i735[5]
  i734.m_LineHeight = i735[6]
  i734.m_AscentLine = i735[7]
  i734.m_CapLine = i735[8]
  i734.m_MeanLine = i735[9]
  i734.m_Baseline = i735[10]
  i734.m_DescentLine = i735[11]
  i734.m_SuperscriptOffset = i735[12]
  i734.m_SuperscriptSize = i735[13]
  i734.m_SubscriptOffset = i735[14]
  i734.m_SubscriptSize = i735[15]
  i734.m_UnderlineOffset = i735[16]
  i734.m_UnderlineThickness = i735[17]
  i734.m_StrikethroughOffset = i735[18]
  i734.m_StrikethroughThickness = i735[19]
  i734.m_TabWidth = i735[20]
  return i734
}

Deserializers["DG.Tweening.Core.DOTweenSettings"] = function (request, data, root) {
  var i736 = root || request.c( 'DG.Tweening.Core.DOTweenSettings' )
  var i737 = data
  i736.useSafeMode = !!i737[0]
  i736.safeModeOptions = request.d('DG.Tweening.Core.DOTweenSettings+SafeModeOptions', i737[1], i736.safeModeOptions)
  i736.timeScale = i737[2]
  i736.unscaledTimeScale = i737[3]
  i736.useSmoothDeltaTime = !!i737[4]
  i736.maxSmoothUnscaledTime = i737[5]
  i736.rewindCallbackMode = i737[6]
  i736.showUnityEditorReport = !!i737[7]
  i736.logBehaviour = i737[8]
  i736.drawGizmos = !!i737[9]
  i736.defaultRecyclable = !!i737[10]
  i736.defaultAutoPlay = i737[11]
  i736.defaultUpdateType = i737[12]
  i736.defaultTimeScaleIndependent = !!i737[13]
  i736.defaultEaseType = i737[14]
  i736.defaultEaseOvershootOrAmplitude = i737[15]
  i736.defaultEasePeriod = i737[16]
  i736.defaultAutoKill = !!i737[17]
  i736.defaultLoopType = i737[18]
  i736.debugMode = !!i737[19]
  i736.debugStoreTargetId = !!i737[20]
  i736.showPreviewPanel = !!i737[21]
  i736.storeSettingsLocation = i737[22]
  i736.modules = request.d('DG.Tweening.Core.DOTweenSettings+ModulesSetup', i737[23], i736.modules)
  i736.createASMDEF = !!i737[24]
  i736.showPlayingTweens = !!i737[25]
  i736.showPausedTweens = !!i737[26]
  return i736
}

Deserializers["DG.Tweening.Core.DOTweenSettings+SafeModeOptions"] = function (request, data, root) {
  var i738 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+SafeModeOptions' )
  var i739 = data
  i738.logBehaviour = i739[0]
  i738.nestedTweenFailureBehaviour = i739[1]
  return i738
}

Deserializers["DG.Tweening.Core.DOTweenSettings+ModulesSetup"] = function (request, data, root) {
  var i740 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+ModulesSetup' )
  var i741 = data
  i740.showPanel = !!i741[0]
  i740.audioEnabled = !!i741[1]
  i740.physicsEnabled = !!i741[2]
  i740.physics2DEnabled = !!i741[3]
  i740.spriteEnabled = !!i741[4]
  i740.uiEnabled = !!i741[5]
  i740.textMeshProEnabled = !!i741[6]
  i740.tk2DEnabled = !!i741[7]
  i740.deAudioEnabled = !!i741[8]
  i740.deUnityExtendedEnabled = !!i741[9]
  i740.epoOutlineEnabled = !!i741[10]
  return i740
}

Deserializers["TMPro.TMP_Settings"] = function (request, data, root) {
  var i742 = root || request.c( 'TMPro.TMP_Settings' )
  var i743 = data
  i742.assetVersion = i743[0]
  i742.m_TextWrappingMode = i743[1]
  i742.m_enableKerning = !!i743[2]
  var i745 = i743[3]
  var i744 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.OTL_FeatureTag')))
  for(var i = 0; i < i745.length; i += 1) {
    i744.add(i745[i + 0]);
  }
  i742.m_ActiveFontFeatures = i744
  i742.m_enableExtraPadding = !!i743[4]
  i742.m_enableTintAllSprites = !!i743[5]
  i742.m_enableParseEscapeCharacters = !!i743[6]
  i742.m_EnableRaycastTarget = !!i743[7]
  i742.m_GetFontFeaturesAtRuntime = !!i743[8]
  i742.m_missingGlyphCharacter = i743[9]
  i742.m_ClearDynamicDataOnBuild = !!i743[10]
  i742.m_warningsDisabled = !!i743[11]
  request.r(i743[12], i743[13], 0, i742, 'm_defaultFontAsset')
  i742.m_defaultFontAssetPath = i743[14]
  i742.m_defaultFontSize = i743[15]
  i742.m_defaultAutoSizeMinRatio = i743[16]
  i742.m_defaultAutoSizeMaxRatio = i743[17]
  i742.m_defaultTextMeshProTextContainerSize = new pc.Vec2( i743[18], i743[19] )
  i742.m_defaultTextMeshProUITextContainerSize = new pc.Vec2( i743[20], i743[21] )
  i742.m_autoSizeTextContainer = !!i743[22]
  i742.m_IsTextObjectScaleStatic = !!i743[23]
  var i747 = i743[24]
  var i746 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i747.length; i += 2) {
  request.r(i747[i + 0], i747[i + 1], 1, i746, '')
  }
  i742.m_fallbackFontAssets = i746
  i742.m_matchMaterialPreset = !!i743[25]
  i742.m_HideSubTextObjects = !!i743[26]
  request.r(i743[27], i743[28], 0, i742, 'm_defaultSpriteAsset')
  i742.m_defaultSpriteAssetPath = i743[29]
  i742.m_enableEmojiSupport = !!i743[30]
  i742.m_MissingCharacterSpriteUnicode = i743[31]
  var i749 = i743[32]
  var i748 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Asset')))
  for(var i = 0; i < i749.length; i += 2) {
  request.r(i749[i + 0], i749[i + 1], 1, i748, '')
  }
  i742.m_EmojiFallbackTextAssets = i748
  i742.m_defaultColorGradientPresetsPath = i743[33]
  request.r(i743[34], i743[35], 0, i742, 'm_defaultStyleSheet')
  i742.m_StyleSheetsResourcePath = i743[36]
  request.r(i743[37], i743[38], 0, i742, 'm_leadingCharacters')
  request.r(i743[39], i743[40], 0, i742, 'm_followingCharacters')
  i742.m_UseModernHangulLineBreakingRules = !!i743[41]
  return i742
}

Deserializers["TMPro.TMP_SpriteAsset"] = function (request, data, root) {
  var i752 = root || request.c( 'TMPro.TMP_SpriteAsset' )
  var i753 = data
  request.r(i753[0], i753[1], 0, i752, 'spriteSheet')
  var i755 = i753[2]
  var i754 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Sprite')))
  for(var i = 0; i < i755.length; i += 1) {
    i754.add(request.d('TMPro.TMP_Sprite', i755[i + 0]));
  }
  i752.spriteInfoList = i754
  var i757 = i753[3]
  var i756 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteAsset')))
  for(var i = 0; i < i757.length; i += 2) {
  request.r(i757[i + 0], i757[i + 1], 1, i756, '')
  }
  i752.fallbackSpriteAssets = i756
  var i759 = i753[4]
  var i758 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteCharacter')))
  for(var i = 0; i < i759.length; i += 1) {
    i758.add(request.d('TMPro.TMP_SpriteCharacter', i759[i + 0]));
  }
  i752.m_SpriteCharacterTable = i758
  var i761 = i753[5]
  var i760 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteGlyph')))
  for(var i = 0; i < i761.length; i += 1) {
    i760.add(request.d('TMPro.TMP_SpriteGlyph', i761[i + 0]));
  }
  i752.m_GlyphTable = i760
  i752.m_Version = i753[6]
  i752.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i753[7], i752.m_FaceInfo)
  request.r(i753[8], i753[9], 0, i752, 'm_Material')
  return i752
}

Deserializers["TMPro.TMP_Sprite"] = function (request, data, root) {
  var i764 = root || request.c( 'TMPro.TMP_Sprite' )
  var i765 = data
  i764.name = i765[0]
  i764.hashCode = i765[1]
  i764.unicode = i765[2]
  i764.pivot = new pc.Vec2( i765[3], i765[4] )
  request.r(i765[5], i765[6], 0, i764, 'sprite')
  i764.id = i765[7]
  i764.x = i765[8]
  i764.y = i765[9]
  i764.width = i765[10]
  i764.height = i765[11]
  i764.xOffset = i765[12]
  i764.yOffset = i765[13]
  i764.xAdvance = i765[14]
  i764.scale = i765[15]
  return i764
}

Deserializers["TMPro.TMP_SpriteCharacter"] = function (request, data, root) {
  var i770 = root || request.c( 'TMPro.TMP_SpriteCharacter' )
  var i771 = data
  i770.m_Name = i771[0]
  i770.m_ElementType = i771[1]
  i770.m_Unicode = i771[2]
  i770.m_GlyphIndex = i771[3]
  i770.m_Scale = i771[4]
  return i770
}

Deserializers["TMPro.TMP_SpriteGlyph"] = function (request, data, root) {
  var i774 = root || request.c( 'TMPro.TMP_SpriteGlyph' )
  var i775 = data
  request.r(i775[0], i775[1], 0, i774, 'sprite')
  i774.m_Index = i775[2]
  i774.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i775[3], i774.m_Metrics)
  i774.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i775[4], i774.m_GlyphRect)
  i774.m_Scale = i775[5]
  i774.m_AtlasIndex = i775[6]
  i774.m_ClassDefinitionType = i775[7]
  return i774
}

Deserializers["TMPro.TMP_StyleSheet"] = function (request, data, root) {
  var i776 = root || request.c( 'TMPro.TMP_StyleSheet' )
  var i777 = data
  var i779 = i777[0]
  var i778 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Style')))
  for(var i = 0; i < i779.length; i += 1) {
    i778.add(request.d('TMPro.TMP_Style', i779[i + 0]));
  }
  i776.m_StyleList = i778
  return i776
}

Deserializers["TMPro.TMP_Style"] = function (request, data, root) {
  var i782 = root || request.c( 'TMPro.TMP_Style' )
  var i783 = data
  i782.m_Name = i783[0]
  i782.m_HashCode = i783[1]
  i782.m_OpeningDefinition = i783[2]
  i782.m_ClosingDefinition = i783[3]
  i782.m_OpeningTagArray = i783[4]
  i782.m_ClosingTagArray = i783[5]
  return i782
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i784 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i785 = data
  var i787 = i785[0]
  var i786 = []
  for(var i = 0; i < i787.length; i += 1) {
    i786.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i787[i + 0]) );
  }
  i784.files = i786
  i784.componentToPrefabIds = i785[1]
  return i784
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i790 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i791 = data
  i790.path = i791[0]
  request.r(i791[1], i791[2], 0, i790, 'unityObject')
  return i790
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i792 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i793 = data
  var i795 = i793[0]
  var i794 = []
  for(var i = 0; i < i795.length; i += 1) {
    i794.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i795[i + 0]) );
  }
  i792.scriptsExecutionOrder = i794
  var i797 = i793[1]
  var i796 = []
  for(var i = 0; i < i797.length; i += 1) {
    i796.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i797[i + 0]) );
  }
  i792.sortingLayers = i796
  var i799 = i793[2]
  var i798 = []
  for(var i = 0; i < i799.length; i += 1) {
    i798.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i799[i + 0]) );
  }
  i792.cullingLayers = i798
  i792.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i793[3], i792.timeSettings)
  i792.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i793[4], i792.physicsSettings)
  i792.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i793[5], i792.physics2DSettings)
  i792.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i793[6], i792.qualitySettings)
  i792.enableRealtimeShadows = !!i793[7]
  i792.enableAutoInstancing = !!i793[8]
  i792.enableStaticBatching = !!i793[9]
  i792.enableDynamicBatching = !!i793[10]
  i792.usePreservativeDynamicBatching = !!i793[11]
  i792.lightmapEncodingQuality = i793[12]
  i792.desiredColorSpace = i793[13]
  var i801 = i793[14]
  var i800 = []
  for(var i = 0; i < i801.length; i += 1) {
    i800.push( i801[i + 0] );
  }
  i792.allTags = i800
  return i792
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i804 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i805 = data
  i804.name = i805[0]
  i804.value = i805[1]
  return i804
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i808 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i809 = data
  i808.id = i809[0]
  i808.name = i809[1]
  i808.value = i809[2]
  return i808
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i812 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i813 = data
  i812.id = i813[0]
  i812.name = i813[1]
  return i812
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i814 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i815 = data
  i814.fixedDeltaTime = i815[0]
  i814.maximumDeltaTime = i815[1]
  i814.timeScale = i815[2]
  i814.maximumParticleTimestep = i815[3]
  return i814
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i816 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i817 = data
  i816.gravity = new pc.Vec3( i817[0], i817[1], i817[2] )
  i816.defaultSolverIterations = i817[3]
  i816.bounceThreshold = i817[4]
  i816.autoSyncTransforms = !!i817[5]
  i816.autoSimulation = !!i817[6]
  var i819 = i817[7]
  var i818 = []
  for(var i = 0; i < i819.length; i += 1) {
    i818.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i819[i + 0]) );
  }
  i816.collisionMatrix = i818
  return i816
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i822 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i823 = data
  i822.enabled = !!i823[0]
  i822.layerId = i823[1]
  i822.otherLayerId = i823[2]
  return i822
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i824 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i825 = data
  request.r(i825[0], i825[1], 0, i824, 'material')
  i824.gravity = new pc.Vec2( i825[2], i825[3] )
  i824.positionIterations = i825[4]
  i824.velocityIterations = i825[5]
  i824.velocityThreshold = i825[6]
  i824.maxLinearCorrection = i825[7]
  i824.maxAngularCorrection = i825[8]
  i824.maxTranslationSpeed = i825[9]
  i824.maxRotationSpeed = i825[10]
  i824.baumgarteScale = i825[11]
  i824.baumgarteTOIScale = i825[12]
  i824.timeToSleep = i825[13]
  i824.linearSleepTolerance = i825[14]
  i824.angularSleepTolerance = i825[15]
  i824.defaultContactOffset = i825[16]
  i824.autoSimulation = !!i825[17]
  i824.queriesHitTriggers = !!i825[18]
  i824.queriesStartInColliders = !!i825[19]
  i824.callbacksOnDisable = !!i825[20]
  i824.reuseCollisionCallbacks = !!i825[21]
  i824.autoSyncTransforms = !!i825[22]
  var i827 = i825[23]
  var i826 = []
  for(var i = 0; i < i827.length; i += 1) {
    i826.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i827[i + 0]) );
  }
  i824.collisionMatrix = i826
  return i824
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i830 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i831 = data
  i830.enabled = !!i831[0]
  i830.layerId = i831[1]
  i830.otherLayerId = i831[2]
  return i830
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i832 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i833 = data
  var i835 = i833[0]
  var i834 = []
  for(var i = 0; i < i835.length; i += 1) {
    i834.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i835[i + 0]) );
  }
  i832.qualityLevels = i834
  var i837 = i833[1]
  var i836 = []
  for(var i = 0; i < i837.length; i += 1) {
    i836.push( i837[i + 0] );
  }
  i832.names = i836
  i832.shadows = i833[2]
  i832.anisotropicFiltering = i833[3]
  i832.antiAliasing = i833[4]
  i832.lodBias = i833[5]
  i832.shadowCascades = i833[6]
  i832.shadowDistance = i833[7]
  i832.shadowmaskMode = i833[8]
  i832.shadowProjection = i833[9]
  i832.shadowResolution = i833[10]
  i832.softParticles = !!i833[11]
  i832.softVegetation = !!i833[12]
  i832.activeColorSpace = i833[13]
  i832.desiredColorSpace = i833[14]
  i832.masterTextureLimit = i833[15]
  i832.maxQueuedFrames = i833[16]
  i832.particleRaycastBudget = i833[17]
  i832.pixelLightCount = i833[18]
  i832.realtimeReflectionProbes = !!i833[19]
  i832.shadowCascade2Split = i833[20]
  i832.shadowCascade4Split = new pc.Vec3( i833[21], i833[22], i833[23] )
  i832.streamingMipmapsActive = !!i833[24]
  i832.vSyncCount = i833[25]
  i832.asyncUploadBufferSize = i833[26]
  i832.asyncUploadTimeSlice = i833[27]
  i832.billboardsFaceCameraPosition = !!i833[28]
  i832.shadowNearPlaneOffset = i833[29]
  i832.streamingMipmapsMemoryBudget = i833[30]
  i832.maximumLODLevel = i833[31]
  i832.streamingMipmapsAddAllCameras = !!i833[32]
  i832.streamingMipmapsMaxLevelReduction = i833[33]
  i832.streamingMipmapsRenderersPerFrame = i833[34]
  i832.resolutionScalingFixedDPIFactor = i833[35]
  i832.streamingMipmapsMaxFileIORequests = i833[36]
  i832.currentQualityLevel = i833[37]
  return i832
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i840 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i841 = data
  request.r(i841[0], i841[1], 0, i840, 'm_ObjectArgument')
  i840.m_ObjectArgumentAssemblyTypeName = i841[2]
  i840.m_IntArgument = i841[3]
  i840.m_FloatArgument = i841[4]
  i840.m_StringArgument = i841[5]
  i840.m_BoolArgument = !!i841[6]
  return i840
}

Deserializers["UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord"] = function (request, data, root) {
  var i842 = root || request.c( 'UnityEngine.TextCore.LowLevel.GlyphAdjustmentRecord' )
  var i843 = data
  i842.m_GlyphIndex = i843[0]
  i842.m_GlyphValueRecord = request.d('UnityEngine.TextCore.LowLevel.GlyphValueRecord', i843[1], i842.m_GlyphValueRecord)
  return i842
}

Deserializers["TMPro.GlyphAnchorPoint"] = function (request, data, root) {
  var i844 = root || request.c( 'TMPro.GlyphAnchorPoint' )
  var i845 = data
  i844.m_XCoordinate = i845[0]
  i844.m_YCoordinate = i845[1]
  return i844
}

Deserializers["TMPro.MarkPositionAdjustment"] = function (request, data, root) {
  var i846 = root || request.c( 'TMPro.MarkPositionAdjustment' )
  var i847 = data
  i846.m_XPositionAdjustment = i847[0]
  i846.m_YPositionAdjustment = i847[1]
  return i846
}

Deserializers["TMPro.GlyphValueRecord_Legacy"] = function (request, data, root) {
  var i848 = root || request.c( 'TMPro.GlyphValueRecord_Legacy' )
  var i849 = data
  i848.xPlacement = i849[0]
  i848.yPlacement = i849[1]
  i848.xAdvance = i849[2]
  i848.yAdvance = i849[3]
  return i848
}

Deserializers["UnityEngine.TextCore.LowLevel.GlyphValueRecord"] = function (request, data, root) {
  var i850 = root || request.c( 'UnityEngine.TextCore.LowLevel.GlyphValueRecord' )
  var i851 = data
  i850.m_XPlacement = i851[0]
  i850.m_YPlacement = i851[1]
  i850.m_XAdvance = i851[2]
  i850.m_YAdvance = i851[3]
  return i850
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

Deserializers.creativeName = "BP_V27_NgocNDL_TamNTM";

Deserializers.lunaAppID = "39964";

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

Deserializers.runtimeAnalysisExcludedMethodsCount = "4115";

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

Deserializers.buildID = "083281f5-cad7-4053-9716-4dc23be5cf59";

Deserializers.runtimeInitializeOnLoadInfos = [[["Unity","PerformanceTesting","PerformanceTest","ResetStaticsOnLoad"],["UnityEngine","U2D","Animation","GpuDeformationSystem","CreateFallbackBuffer"],["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"],["UnityEngine","AI","NavMesh","ClearPreUpdateListeners"]],[["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"]],[],[["Unity","PerformanceTesting","Data","RunSettings","ResetStaticsOnLoad"],["Unity","PerformanceTesting","PlayerCallbacks","ResetStaticsOnLoad"]]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

