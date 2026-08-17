var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i340 = root || request.c( 'UnityEngine.JointSpring' )
  var i341 = data
  i340.spring = i341[0]
  i340.damper = i341[1]
  i340.targetPosition = i341[2]
  return i340
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i342 = root || request.c( 'UnityEngine.JointMotor' )
  var i343 = data
  i342.m_TargetVelocity = i343[0]
  i342.m_Force = i343[1]
  i342.m_FreeSpin = i343[2]
  return i342
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i344 = root || request.c( 'UnityEngine.JointLimits' )
  var i345 = data
  i344.m_Min = i345[0]
  i344.m_Max = i345[1]
  i344.m_Bounciness = i345[2]
  i344.m_BounceMinVelocity = i345[3]
  i344.m_ContactDistance = i345[4]
  i344.minBounce = i345[5]
  i344.maxBounce = i345[6]
  return i344
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i346 = root || request.c( 'UnityEngine.JointDrive' )
  var i347 = data
  i346.m_PositionSpring = i347[0]
  i346.m_PositionDamper = i347[1]
  i346.m_MaximumForce = i347[2]
  i346.m_UseAcceleration = i347[3]
  return i346
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i348 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i349 = data
  i348.m_Spring = i349[0]
  i348.m_Damper = i349[1]
  return i348
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i350 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i351 = data
  i350.m_Limit = i351[0]
  i350.m_Bounciness = i351[1]
  i350.m_ContactDistance = i351[2]
  return i350
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i352 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i353 = data
  i352.m_ExtremumSlip = i353[0]
  i352.m_ExtremumValue = i353[1]
  i352.m_AsymptoteSlip = i353[2]
  i352.m_AsymptoteValue = i353[3]
  i352.m_Stiffness = i353[4]
  return i352
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i354 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i355 = data
  i354.m_LowerAngle = i355[0]
  i354.m_UpperAngle = i355[1]
  return i354
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i356 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i357 = data
  i356.m_MotorSpeed = i357[0]
  i356.m_MaximumMotorTorque = i357[1]
  return i356
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i358 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i359 = data
  i358.m_DampingRatio = i359[0]
  i358.m_Frequency = i359[1]
  i358.m_Angle = i359[2]
  return i358
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i360 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i361 = data
  i360.m_LowerTranslation = i361[0]
  i360.m_UpperTranslation = i361[1]
  return i360
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i362 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i363 = data
  i362.name = i363[0]
  i362.width = i363[1]
  i362.height = i363[2]
  i362.mipmapCount = i363[3]
  i362.anisoLevel = i363[4]
  i362.filterMode = i363[5]
  i362.hdr = !!i363[6]
  i362.format = i363[7]
  i362.wrapMode = i363[8]
  i362.alphaIsTransparency = !!i363[9]
  i362.alphaSource = i363[10]
  i362.graphicsFormat = i363[11]
  i362.sRGBTexture = !!i363[12]
  i362.desiredColorSpace = i363[13]
  i362.wrapU = i363[14]
  i362.wrapV = i363[15]
  return i362
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i364 = root || new pc.UnityMaterial()
  var i365 = data
  i364.name = i365[0]
  request.r(i365[1], i365[2], 0, i364, 'shader')
  i364.renderQueue = i365[3]
  i364.enableInstancing = !!i365[4]
  var i367 = i365[5]
  var i366 = []
  for(var i = 0; i < i367.length; i += 1) {
    i366.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i367[i + 0]) );
  }
  i364.floatParameters = i366
  var i369 = i365[6]
  var i368 = []
  for(var i = 0; i < i369.length; i += 1) {
    i368.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i369[i + 0]) );
  }
  i364.colorParameters = i368
  var i371 = i365[7]
  var i370 = []
  for(var i = 0; i < i371.length; i += 1) {
    i370.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i371[i + 0]) );
  }
  i364.vectorParameters = i370
  var i373 = i365[8]
  var i372 = []
  for(var i = 0; i < i373.length; i += 1) {
    i372.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i373[i + 0]) );
  }
  i364.textureParameters = i372
  var i375 = i365[9]
  var i374 = []
  for(var i = 0; i < i375.length; i += 1) {
    i374.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i375[i + 0]) );
  }
  i364.materialFlags = i374
  return i364
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i378 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i379 = data
  i378.name = i379[0]
  i378.value = i379[1]
  return i378
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i382 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i383 = data
  i382.name = i383[0]
  i382.value = new pc.Color(i383[1], i383[2], i383[3], i383[4])
  return i382
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i386 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i387 = data
  i386.name = i387[0]
  i386.value = new pc.Vec4( i387[1], i387[2], i387[3], i387[4] )
  return i386
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i390 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i391 = data
  i390.name = i391[0]
  request.r(i391[1], i391[2], 0, i390, 'value')
  return i390
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i394 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i395 = data
  i394.name = i395[0]
  i394.enabled = !!i395[1]
  return i394
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i396 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i397 = data
  i396.position = new pc.Vec3( i397[0], i397[1], i397[2] )
  i396.scale = new pc.Vec3( i397[3], i397[4], i397[5] )
  i396.rotation = new pc.Quat(i397[6], i397[7], i397[8], i397[9])
  return i396
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer"] = function (request, data, root) {
  var i398 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer' )
  var i399 = data
  i398.color = new pc.Color(i399[0], i399[1], i399[2], i399[3])
  request.r(i399[4], i399[5], 0, i398, 'sprite')
  i398.flipX = !!i399[6]
  i398.flipY = !!i399[7]
  i398.drawMode = i399[8]
  i398.size = new pc.Vec2( i399[9], i399[10] )
  i398.tileMode = i399[11]
  i398.adaptiveModeThreshold = i399[12]
  i398.maskInteraction = i399[13]
  i398.spriteSortPoint = i399[14]
  i398.enabled = !!i399[15]
  request.r(i399[16], i399[17], 0, i398, 'sharedMaterial')
  var i401 = i399[18]
  var i400 = []
  for(var i = 0; i < i401.length; i += 2) {
  request.r(i401[i + 0], i401[i + 1], 2, i400, '')
  }
  i398.sharedMaterials = i400
  i398.receiveShadows = !!i399[19]
  i398.shadowCastingMode = i399[20]
  i398.sortingLayerID = i399[21]
  i398.sortingOrder = i399[22]
  i398.lightmapIndex = i399[23]
  i398.lightmapSceneIndex = i399[24]
  i398.lightmapScaleOffset = new pc.Vec4( i399[25], i399[26], i399[27], i399[28] )
  i398.lightProbeUsage = i399[29]
  i398.reflectionProbeUsage = i399[30]
  return i398
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CircleCollider2D"] = function (request, data, root) {
  var i404 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CircleCollider2D' )
  var i405 = data
  i404.radius = i405[0]
  i404.enabled = !!i405[1]
  i404.isTrigger = !!i405[2]
  i404.usedByEffector = !!i405[3]
  i404.density = i405[4]
  i404.offset = new pc.Vec2( i405[5], i405[6] )
  request.r(i405[7], i405[8], 0, i404, 'material')
  return i404
}

Deserializers["BulletController"] = function (request, data, root) {
  var i406 = root || request.c( 'BulletController' )
  var i407 = data
  i406.speed = i407[0]
  i406.damage = i407[1]
  request.r(i407[2], i407[3], 0, i406, 'hitMonsterSound')
  request.r(i407[4], i407[5], 0, i406, 'hitSound')
  i406.lifeTime = i407[6]
  i406.hit = !!i407[7]
  return i406
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i408 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i409 = data
  i408.name = i409[0]
  i408.tagId = i409[1]
  i408.enabled = !!i409[2]
  i408.isStatic = !!i409[3]
  i408.layer = i409[4]
  return i408
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SortingGroup"] = function (request, data, root) {
  var i410 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SortingGroup' )
  var i411 = data
  i410.sortingLayerIndex = i411[0]
  i410.sortingOrder = i411[1]
  i410.sortingLayerName = i411[2]
  i410.enabled = !!i411[3]
  return i410
}

Deserializers["MonsterController"] = function (request, data, root) {
  var i412 = root || request.c( 'MonsterController' )
  var i413 = data
  i412.maxHP = i413[0]
  i412.currentHP = i413[1]
  var i415 = i413[2]
  var i414 = new (System.Collections.Generic.List$1(Bridge.ns('Piece')))
  for(var i = 0; i < i415.length; i += 1) {
    i414.add(request.d('Piece', i415[i + 0]));
  }
  i412.pieces = i414
  request.r(i413[3], i413[4], 0, i412, 'deadSFX')
  i412.maxForce = new pc.Vec2( i413[5], i413[6] )
  i412.minForce = new pc.Vec2( i413[7], i413[8] )
  request.r(i413[9], i413[10], 0, i412, 'balance')
  i412.isDead = !!i413[11]
  request.r(i413[12], i413[13], 0, i412, 'trigger')
  request.r(i413[14], i413[15], 0, i412, 'groundCheck')
  i412.speed = i413[16]
  request.r(i413[17], i413[18], 0, i412, 'body')
  request.r(i413[19], i413[20], 0, i412, 'leftHand')
  request.r(i413[21], i413[22], 0, i412, 'rightHand')
  request.r(i413[23], i413[24], 0, i412, 'leftLeg')
  request.r(i413[25], i413[26], 0, i412, 'rightLeg')
  return i412
}

Deserializers["Piece"] = function (request, data, root) {
  var i418 = root || request.c( 'Piece' )
  var i419 = data
  request.r(i419[0], i419[1], 0, i418, 'Joint')
  request.r(i419[2], i419[3], 0, i418, 'Rb')
  return i418
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Rigidbody2D"] = function (request, data, root) {
  var i420 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Rigidbody2D' )
  var i421 = data
  i420.bodyType = i421[0]
  request.r(i421[1], i421[2], 0, i420, 'material')
  i420.simulated = !!i421[3]
  i420.useAutoMass = !!i421[4]
  i420.mass = i421[5]
  i420.drag = i421[6]
  i420.angularDrag = i421[7]
  i420.gravityScale = i421[8]
  i420.collisionDetectionMode = i421[9]
  i420.sleepMode = i421[10]
  i420.constraints = i421[11]
  return i420
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.FixedJoint2D"] = function (request, data, root) {
  var i422 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.FixedJoint2D' )
  var i423 = data
  i422.dampingRatio = i423[0]
  i422.frequency = i423[1]
  i422.anchor = new pc.Vec2( i423[2], i423[3] )
  i422.connectedAnchor = new pc.Vec2( i423[4], i423[5] )
  i422.autoConfigureConnectedAnchor = !!i423[6]
  request.r(i423[7], i423[8], 0, i422, 'connectedBody')
  i422.breakForce = i423[9]
  i422.breakTorque = i423[10]
  i422.enableCollision = !!i423[11]
  i422.enabled = !!i423[12]
  return i422
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D"] = function (request, data, root) {
  var i424 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D' )
  var i425 = data
  i424.usedByComposite = !!i425[0]
  i424.autoTiling = !!i425[1]
  i424.size = new pc.Vec2( i425[2], i425[3] )
  i424.edgeRadius = i425[4]
  i424.enabled = !!i425[5]
  i424.isTrigger = !!i425[6]
  i424.usedByEffector = !!i425[7]
  i424.density = i425[8]
  i424.offset = new pc.Vec2( i425[9], i425[10] )
  request.r(i425[11], i425[12], 0, i424, 'material')
  return i424
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.HingeJoint2D"] = function (request, data, root) {
  var i426 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.HingeJoint2D' )
  var i427 = data
  i426.useLimits = !!i427[0]
  i426.limits = request.d('UnityEngine.JointAngleLimits2D', i427[1], i426.limits)
  i426.useMotor = !!i427[2]
  i426.motor = request.d('UnityEngine.JointMotor2D', i427[3], i426.motor)
  i426.anchor = new pc.Vec2( i427[4], i427[5] )
  i426.connectedAnchor = new pc.Vec2( i427[6], i427[7] )
  i426.autoConfigureConnectedAnchor = !!i427[8]
  request.r(i427[9], i427[10], 0, i426, 'connectedBody')
  i426.breakForce = i427[11]
  i426.breakTorque = i427[12]
  i426.enableCollision = !!i427[13]
  i426.enabled = !!i427[14]
  return i426
}

Deserializers["BalanceController"] = function (request, data, root) {
  var i428 = root || request.c( 'BalanceController' )
  var i429 = data
  i428.targetRotation = i429[0]
  i428.force = i429[1]
  return i428
}

Deserializers["MonsterTrigger"] = function (request, data, root) {
  var i430 = root || request.c( 'MonsterTrigger' )
  var i431 = data
  request.r(i431[0], i431[1], 0, i430, 'player')
  return i430
}

Deserializers["GroundCheck"] = function (request, data, root) {
  var i432 = root || request.c( 'GroundCheck' )
  var i433 = data
  i432.OnGround = !!i433[0]
  return i432
}

Deserializers["PlayerController"] = function (request, data, root) {
  var i434 = root || request.c( 'PlayerController' )
  var i435 = data
  i434.IsZombie = !!i435[0]
  i434.OnDead = request.d('System.Action', i435[1], i434.OnDead)
  var i437 = i435[2]
  var i436 = new (System.Collections.Generic.List$1(Bridge.ns('BodyRenderer')))
  for(var i = 0; i < i437.length; i += 1) {
    i436.add(request.d('BodyRenderer', i437[i + 0]));
  }
  i434.bodyRenderers = i436
  request.r(i435[3], i435[4], 0, i434, 'biteSound')
  request.r(i435[5], i435[6], 0, i434, 'zombieSound')
  request.r(i435[7], i435[8], 0, i434, 'body')
  return i434
}

Deserializers["System.Action"] = function (request, data, root) {
  var i438 = root || request.c( 'System.Action' )
  var i439 = data
  return i438
}

Deserializers["BodyRenderer"] = function (request, data, root) {
  var i442 = root || request.c( 'BodyRenderer' )
  var i443 = data
  request.r(i443[0], i443[1], 0, i442, 'Renderer')
  request.r(i443[2], i443[3], 0, i442, 'ZSprite')
  return i442
}

Deserializers["PlayerAttack"] = function (request, data, root) {
  var i444 = root || request.c( 'PlayerAttack' )
  var i445 = data
  i444.ShootCD = i445[0]
  request.r(i445[1], i445[2], 0, i444, 'left')
  request.r(i445[3], i445[4], 0, i444, 'right')
  request.r(i445[5], i445[6], 0, i444, 'gun')
  request.r(i445[7], i445[8], 0, i444, 'bulletPrefab')
  i444.onCD = !!i445[9]
  request.r(i445[10], i445[11], 0, i444, 'shootSound')
  i444.timeMotor = i445[12]
  request.r(i445[13], i445[14], 0, i444, 'playerTrigger')
  request.r(i445[15], i445[16], 0, i444, 'player')
  return i444
}

Deserializers["BodyPiece"] = function (request, data, root) {
  var i446 = root || request.c( 'BodyPiece' )
  var i447 = data
  request.r(i447[0], i447[1], 0, i446, 'player')
  return i446
}

Deserializers["PlayerTrigger"] = function (request, data, root) {
  var i448 = root || request.c( 'PlayerTrigger' )
  var i449 = data
  request.r(i449[0], i449[1], 0, i448, 'monster')
  return i448
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i450 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i451 = data
  i450.name = i451[0]
  i450.index = i451[1]
  i450.startup = !!i451[2]
  return i450
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i452 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i453 = data
  i452.aspect = i453[0]
  i452.orthographic = !!i453[1]
  i452.orthographicSize = i453[2]
  i452.backgroundColor = new pc.Color(i453[3], i453[4], i453[5], i453[6])
  i452.nearClipPlane = i453[7]
  i452.farClipPlane = i453[8]
  i452.fieldOfView = i453[9]
  i452.depth = i453[10]
  i452.clearFlags = i453[11]
  i452.cullingMask = i453[12]
  i452.rect = i453[13]
  request.r(i453[14], i453[15], 0, i452, 'targetTexture')
  i452.usePhysicalProperties = !!i453[16]
  i452.focalLength = i453[17]
  i452.sensorSize = new pc.Vec2( i453[18], i453[19] )
  i452.lensShift = new pc.Vec2( i453[20], i453[21] )
  i452.gateFit = i453[22]
  i452.commandBufferCount = i453[23]
  i452.cameraType = i453[24]
  i452.enabled = !!i453[25]
  return i452
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i454 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i455 = data
  request.r(i455[0], i455[1], 0, i454, 'm_FirstSelected')
  i454.m_sendNavigationEvents = !!i455[2]
  i454.m_DragThreshold = i455[3]
  return i454
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i456 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i457 = data
  i456.m_HorizontalAxis = i457[0]
  i456.m_VerticalAxis = i457[1]
  i456.m_SubmitButton = i457[2]
  i456.m_CancelButton = i457[3]
  i456.m_InputActionsPerSecond = i457[4]
  i456.m_RepeatDelay = i457[5]
  i456.m_ForceModuleActive = !!i457[6]
  i456.m_SendPointerHoverToParent = !!i457[7]
  return i456
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i458 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i459 = data
  i458.pivot = new pc.Vec2( i459[0], i459[1] )
  i458.anchorMin = new pc.Vec2( i459[2], i459[3] )
  i458.anchorMax = new pc.Vec2( i459[4], i459[5] )
  i458.sizeDelta = new pc.Vec2( i459[6], i459[7] )
  i458.anchoredPosition3D = new pc.Vec3( i459[8], i459[9], i459[10] )
  i458.rotation = new pc.Quat(i459[11], i459[12], i459[13], i459[14])
  i458.scale = new pc.Vec3( i459[15], i459[16], i459[17] )
  return i458
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i460 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i461 = data
  i460.planeDistance = i461[0]
  i460.referencePixelsPerUnit = i461[1]
  i460.isFallbackOverlay = !!i461[2]
  i460.renderMode = i461[3]
  i460.renderOrder = i461[4]
  i460.sortingLayerName = i461[5]
  i460.sortingOrder = i461[6]
  i460.scaleFactor = i461[7]
  request.r(i461[8], i461[9], 0, i460, 'worldCamera')
  i460.overrideSorting = !!i461[10]
  i460.pixelPerfect = !!i461[11]
  i460.targetDisplay = i461[12]
  i460.overridePixelPerfect = !!i461[13]
  i460.enabled = !!i461[14]
  return i460
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i462 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i463 = data
  i462.m_UiScaleMode = i463[0]
  i462.m_ReferencePixelsPerUnit = i463[1]
  i462.m_ScaleFactor = i463[2]
  i462.m_ReferenceResolution = new pc.Vec2( i463[3], i463[4] )
  i462.m_ScreenMatchMode = i463[5]
  i462.m_MatchWidthOrHeight = i463[6]
  i462.m_PhysicalUnit = i463[7]
  i462.m_FallbackScreenDPI = i463[8]
  i462.m_DefaultSpriteDPI = i463[9]
  i462.m_DynamicPixelsPerUnit = i463[10]
  i462.m_PresetInfoIsWorld = !!i463[11]
  return i462
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i464 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i465 = data
  i464.m_IgnoreReversedGraphics = !!i465[0]
  i464.m_BlockingObjects = i465[1]
  i464.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i465[2] )
  return i464
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i466 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i467 = data
  i466.cullTransparentMesh = !!i467[0]
  return i466
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i468 = root || request.c( 'UnityEngine.UI.Image' )
  var i469 = data
  request.r(i469[0], i469[1], 0, i468, 'm_Sprite')
  i468.m_Type = i469[2]
  i468.m_PreserveAspect = !!i469[3]
  i468.m_FillCenter = !!i469[4]
  i468.m_FillMethod = i469[5]
  i468.m_FillAmount = i469[6]
  i468.m_FillClockwise = !!i469[7]
  i468.m_FillOrigin = i469[8]
  i468.m_UseSpriteMesh = !!i469[9]
  i468.m_PixelsPerUnitMultiplier = i469[10]
  request.r(i469[11], i469[12], 0, i468, 'm_Material')
  i468.m_Maskable = !!i469[13]
  i468.m_Color = new pc.Color(i469[14], i469[15], i469[16], i469[17])
  i468.m_RaycastTarget = !!i469[18]
  i468.m_RaycastPadding = new pc.Vec4( i469[19], i469[20], i469[21], i469[22] )
  return i468
}

Deserializers["UnityEngine.UI.Text"] = function (request, data, root) {
  var i470 = root || request.c( 'UnityEngine.UI.Text' )
  var i471 = data
  i470.m_FontData = request.d('UnityEngine.UI.FontData', i471[0], i470.m_FontData)
  i470.m_Text = i471[1]
  request.r(i471[2], i471[3], 0, i470, 'm_Material')
  i470.m_Maskable = !!i471[4]
  i470.m_Color = new pc.Color(i471[5], i471[6], i471[7], i471[8])
  i470.m_RaycastTarget = !!i471[9]
  i470.m_RaycastPadding = new pc.Vec4( i471[10], i471[11], i471[12], i471[13] )
  return i470
}

Deserializers["UnityEngine.UI.FontData"] = function (request, data, root) {
  var i472 = root || request.c( 'UnityEngine.UI.FontData' )
  var i473 = data
  request.r(i473[0], i473[1], 0, i472, 'm_Font')
  i472.m_FontSize = i473[2]
  i472.m_FontStyle = i473[3]
  i472.m_BestFit = !!i473[4]
  i472.m_MinSize = i473[5]
  i472.m_MaxSize = i473[6]
  i472.m_Alignment = i473[7]
  i472.m_AlignByGeometry = !!i473[8]
  i472.m_RichText = !!i473[9]
  i472.m_HorizontalOverflow = i473[10]
  i472.m_VerticalOverflow = i473[11]
  i472.m_LineSpacing = i473[12]
  return i472
}

Deserializers["DG.Tweening.DOTweenAnimation"] = function (request, data, root) {
  var i474 = root || request.c( 'DG.Tweening.DOTweenAnimation' )
  var i475 = data
  i474.targetIsSelf = !!i475[0]
  request.r(i475[1], i475[2], 0, i474, 'targetGO')
  i474.tweenTargetIsTargetGO = !!i475[3]
  i474.delay = i475[4]
  i474.duration = i475[5]
  i474.easeType = i475[6]
  i474.easeCurve = new pc.AnimationCurve( { keys_flow: i475[7] } )
  i474.loopType = i475[8]
  i474.loops = i475[9]
  i474.id = i475[10]
  i474.isRelative = !!i475[11]
  i474.isFrom = !!i475[12]
  i474.isIndependentUpdate = !!i475[13]
  i474.autoKill = !!i475[14]
  i474.autoGenerate = !!i475[15]
  i474.isActive = !!i475[16]
  i474.isValid = !!i475[17]
  request.r(i475[18], i475[19], 0, i474, 'target')
  i474.animationType = i475[20]
  i474.targetType = i475[21]
  i474.forcedTargetType = i475[22]
  i474.autoPlay = !!i475[23]
  i474.useTargetAsV3 = !!i475[24]
  i474.endValueFloat = i475[25]
  i474.endValueV3 = new pc.Vec3( i475[26], i475[27], i475[28] )
  i474.endValueV2 = new pc.Vec2( i475[29], i475[30] )
  i474.endValueColor = new pc.Color(i475[31], i475[32], i475[33], i475[34])
  i474.endValueString = i475[35]
  i474.endValueRect = UnityEngine.Rect.MinMaxRect(i475[36], i475[37], i475[38], i475[39])
  request.r(i475[40], i475[41], 0, i474, 'endValueTransform')
  i474.optionalBool0 = !!i475[42]
  i474.optionalBool1 = !!i475[43]
  i474.optionalFloat0 = i475[44]
  i474.optionalInt0 = i475[45]
  i474.optionalRotationMode = i475[46]
  i474.optionalScrambleMode = i475[47]
  i474.optionalShakeRandomnessMode = i475[48]
  i474.optionalString = i475[49]
  i474.updateType = i475[50]
  i474.isSpeedBased = !!i475[51]
  i474.hasOnStart = !!i475[52]
  i474.hasOnPlay = !!i475[53]
  i474.hasOnUpdate = !!i475[54]
  i474.hasOnStepComplete = !!i475[55]
  i474.hasOnComplete = !!i475[56]
  i474.hasOnTweenCreated = !!i475[57]
  i474.hasOnRewind = !!i475[58]
  i474.onStart = request.d('UnityEngine.Events.UnityEvent', i475[59], i474.onStart)
  i474.onPlay = request.d('UnityEngine.Events.UnityEvent', i475[60], i474.onPlay)
  i474.onUpdate = request.d('UnityEngine.Events.UnityEvent', i475[61], i474.onUpdate)
  i474.onStepComplete = request.d('UnityEngine.Events.UnityEvent', i475[62], i474.onStepComplete)
  i474.onComplete = request.d('UnityEngine.Events.UnityEvent', i475[63], i474.onComplete)
  i474.onTweenCreated = request.d('UnityEngine.Events.UnityEvent', i475[64], i474.onTweenCreated)
  i474.onRewind = request.d('UnityEngine.Events.UnityEvent', i475[65], i474.onRewind)
  return i474
}

Deserializers["UnityEngine.Events.UnityEvent"] = function (request, data, root) {
  var i476 = root || request.c( 'UnityEngine.Events.UnityEvent' )
  var i477 = data
  i476.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i477[0], i476.m_PersistentCalls)
  return i476
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i478 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i479 = data
  var i481 = i479[0]
  var i480 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i481.length; i += 1) {
    i480.add(request.d('UnityEngine.Events.PersistentCall', i481[i + 0]));
  }
  i478.m_Calls = i480
  return i478
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i484 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i485 = data
  request.r(i485[0], i485[1], 0, i484, 'm_Target')
  i484.m_TargetAssemblyTypeName = i485[2]
  i484.m_MethodName = i485[3]
  i484.m_Mode = i485[4]
  i484.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i485[5], i484.m_Arguments)
  i484.m_CallState = i485[6]
  return i484
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i486 = root || request.c( 'UnityEngine.UI.Button' )
  var i487 = data
  i486.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i487[0], i486.m_OnClick)
  i486.m_Navigation = request.d('UnityEngine.UI.Navigation', i487[1], i486.m_Navigation)
  i486.m_Transition = i487[2]
  i486.m_Colors = request.d('UnityEngine.UI.ColorBlock', i487[3], i486.m_Colors)
  i486.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i487[4], i486.m_SpriteState)
  i486.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i487[5], i486.m_AnimationTriggers)
  i486.m_Interactable = !!i487[6]
  request.r(i487[7], i487[8], 0, i486, 'm_TargetGraphic')
  return i486
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i488 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i489 = data
  i488.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i489[0], i488.m_PersistentCalls)
  return i488
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i490 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i491 = data
  i490.m_Mode = i491[0]
  i490.m_WrapAround = !!i491[1]
  request.r(i491[2], i491[3], 0, i490, 'm_SelectOnUp')
  request.r(i491[4], i491[5], 0, i490, 'm_SelectOnDown')
  request.r(i491[6], i491[7], 0, i490, 'm_SelectOnLeft')
  request.r(i491[8], i491[9], 0, i490, 'm_SelectOnRight')
  return i490
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i492 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i493 = data
  i492.m_NormalColor = new pc.Color(i493[0], i493[1], i493[2], i493[3])
  i492.m_HighlightedColor = new pc.Color(i493[4], i493[5], i493[6], i493[7])
  i492.m_PressedColor = new pc.Color(i493[8], i493[9], i493[10], i493[11])
  i492.m_SelectedColor = new pc.Color(i493[12], i493[13], i493[14], i493[15])
  i492.m_DisabledColor = new pc.Color(i493[16], i493[17], i493[18], i493[19])
  i492.m_ColorMultiplier = i493[20]
  i492.m_FadeDuration = i493[21]
  return i492
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i494 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i495 = data
  request.r(i495[0], i495[1], 0, i494, 'm_HighlightedSprite')
  request.r(i495[2], i495[3], 0, i494, 'm_PressedSprite')
  request.r(i495[4], i495[5], 0, i494, 'm_SelectedSprite')
  request.r(i495[6], i495[7], 0, i494, 'm_DisabledSprite')
  return i494
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i496 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i497 = data
  i496.m_NormalTrigger = i497[0]
  i496.m_HighlightedTrigger = i497[1]
  i496.m_PressedTrigger = i497[2]
  i496.m_SelectedTrigger = i497[3]
  i496.m_DisabledTrigger = i497[4]
  return i496
}

Deserializers["UnityEngine.UI.RawImage"] = function (request, data, root) {
  var i498 = root || request.c( 'UnityEngine.UI.RawImage' )
  var i499 = data
  request.r(i499[0], i499[1], 0, i498, 'm_Texture')
  i498.m_UVRect = UnityEngine.Rect.MinMaxRect(i499[2], i499[3], i499[4], i499[5])
  request.r(i499[6], i499[7], 0, i498, 'm_Material')
  i498.m_Maskable = !!i499[8]
  i498.m_Color = new pc.Color(i499[9], i499[10], i499[11], i499[12])
  i498.m_RaycastTarget = !!i499[13]
  i498.m_RaycastPadding = new pc.Vec4( i499[14], i499[15], i499[16], i499[17] )
  return i498
}

Deserializers["UnityEngine.UI.AspectRatioFitter"] = function (request, data, root) {
  var i500 = root || request.c( 'UnityEngine.UI.AspectRatioFitter' )
  var i501 = data
  i500.m_AspectMode = i501[0]
  i500.m_AspectRatio = i501[1]
  return i500
}

Deserializers["MonsterOptionController"] = function (request, data, root) {
  var i502 = root || request.c( 'MonsterOptionController' )
  var i503 = data
  i502.OnSpawn = request.d('System.Action', i503[0], i502.OnSpawn)
  i502.OnEmpty = request.d('System.Action', i503[1], i502.OnEmpty)
  i502.OnEnd = request.d('System.Action', i503[2], i502.OnEnd)
  request.r(i503[3], i503[4], 0, i502, 'spawnPrefab')
  i502.numCharacter = i503[5]
  request.r(i503[6], i503[7], 0, i502, 'numText')
  request.r(i503[8], i503[9], 0, i502, 'world')
  request.r(i503[10], i503[11], 0, i502, 'area')
  request.r(i503[12], i503[13], 0, i502, 'areaTut')
  return i502
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.TargetJoint2D"] = function (request, data, root) {
  var i504 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.TargetJoint2D' )
  var i505 = data
  i504.autoConfigureTarget = !!i505[0]
  i504.target = new pc.Vec2( i505[1], i505[2] )
  i504.anchor = new pc.Vec2( i505[3], i505[4] )
  i504.maxForce = i505[5]
  i504.dampingRatio = i505[6]
  i504.frequency = i505[7]
  request.r(i505[8], i505[9], 0, i504, 'connectedBody')
  i504.breakForce = i505[10]
  i504.breakTorque = i505[11]
  i504.enableCollision = !!i505[12]
  i504.enabled = !!i505[13]
  return i504
}

Deserializers["HumanOptionController"] = function (request, data, root) {
  var i506 = root || request.c( 'HumanOptionController' )
  var i507 = data
  i506.OnSpawn = request.d('System.Action', i507[0], i506.OnSpawn)
  i506.OnEmpty = request.d('System.Action', i507[1], i506.OnEmpty)
  i506.OnEnd = request.d('System.Action', i507[2], i506.OnEnd)
  request.r(i507[3], i507[4], 0, i506, 'spawnPrefab')
  i506.numCharacter = i507[5]
  request.r(i507[6], i507[7], 0, i506, 'numText')
  request.r(i507[8], i507[9], 0, i506, 'world')
  request.r(i507[10], i507[11], 0, i506, 'area')
  request.r(i507[12], i507[13], 0, i506, 'areaTut')
  return i506
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.AudioSource"] = function (request, data, root) {
  var i508 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.AudioSource' )
  var i509 = data
  request.r(i509[0], i509[1], 0, i508, 'clip')
  request.r(i509[2], i509[3], 0, i508, 'outputAudioMixerGroup')
  i508.playOnAwake = !!i509[4]
  i508.loop = !!i509[5]
  i508.time = i509[6]
  i508.volume = i509[7]
  i508.pitch = i509[8]
  i508.enabled = !!i509[9]
  return i508
}

Deserializers["GameController"] = function (request, data, root) {
  var i510 = root || request.c( 'GameController' )
  var i511 = data
  i510.maxSpawn = i511[0]
  i510.OnSpawn = request.d('System.Action', i511[1], i510.OnSpawn)
  i510.OnEmpty = request.d('System.Action', i511[2], i510.OnEmpty)
  request.r(i511[3], i511[4], 0, i510, 'startScene')
  request.r(i511[5], i511[6], 0, i510, 'endScene')
  i510.human = request.d('Option', i511[7], i510.human)
  i510.monster = request.d('Option', i511[8], i510.monster)
  request.r(i511[9], i511[10], 0, i510, 'clickSound')
  request.r(i511[11], i511[12], 0, i510, 'optionController')
  return i510
}

Deserializers["Option"] = function (request, data, root) {
  var i512 = root || request.c( 'Option' )
  var i513 = data
  request.r(i513[0], i513[1], 0, i512, 'Button')
  request.r(i513[2], i513[3], 0, i512, 'Controller')
  return i512
}

Deserializers["LayoutController"] = function (request, data, root) {
  var i514 = root || request.c( 'LayoutController' )
  var i515 = data
  request.r(i515[0], i515[1], 0, i514, 'main')
  request.r(i515[2], i515[3], 0, i514, 'UI')
  return i514
}

Deserializers["LunaController"] = function (request, data, root) {
  var i516 = root || request.c( 'LunaController' )
  var i517 = data
  i516.OneClick = !!i517[0]
  request.r(i517[1], i517[2], 0, i516, 'BGTexture')
  i516.Header = i517[3]
  i516.HeaderColor = new pc.Color(i517[4], i517[5], i517[6], i517[7])
  i516.UseTime = !!i517[8]
  i516.TimePlay = i517[9]
  i516.MaxCountPlay = i517[10]
  request.r(i517[11], i517[12], 0, i516, 'clickCard')
  request.r(i517[13], i517[14], 0, i516, 'BGImage')
  request.r(i517[15], i517[16], 0, i516, 'headerText')
  var i519 = i517[17]
  var i518 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.UI.Button')))
  for(var i = 0; i < i519.length; i += 2) {
  request.r(i519[i + 0], i519[i + 1], 1, i518, '')
  }
  i516.CTA = i518
  return i516
}

Deserializers["AudioController"] = function (request, data, root) {
  var i522 = root || request.c( 'AudioController' )
  var i523 = data
  request.r(i523[0], i523[1], 0, i522, 'BGM')
  request.r(i523[2], i523[3], 0, i522, 'musicSource')
  request.r(i523[4], i523[5], 0, i522, 'pool')
  return i522
}

Deserializers["PoolController"] = function (request, data, root) {
  var i524 = root || request.c( 'PoolController' )
  var i525 = data
  request.r(i525[0], i525[1], 0, i524, 'poolParent')
  return i524
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i526 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i527 = data
  i526.ambientIntensity = i527[0]
  i526.reflectionIntensity = i527[1]
  i526.ambientMode = i527[2]
  i526.ambientLight = new pc.Color(i527[3], i527[4], i527[5], i527[6])
  i526.ambientSkyColor = new pc.Color(i527[7], i527[8], i527[9], i527[10])
  i526.ambientGroundColor = new pc.Color(i527[11], i527[12], i527[13], i527[14])
  i526.ambientEquatorColor = new pc.Color(i527[15], i527[16], i527[17], i527[18])
  i526.fogColor = new pc.Color(i527[19], i527[20], i527[21], i527[22])
  i526.fogEndDistance = i527[23]
  i526.fogStartDistance = i527[24]
  i526.fogDensity = i527[25]
  i526.fog = !!i527[26]
  request.r(i527[27], i527[28], 0, i526, 'skybox')
  i526.fogMode = i527[29]
  var i529 = i527[30]
  var i528 = []
  for(var i = 0; i < i529.length; i += 1) {
    i528.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i529[i + 0]) );
  }
  i526.lightmaps = i528
  i526.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i527[31], i526.lightProbes)
  i526.lightmapsMode = i527[32]
  i526.mixedBakeMode = i527[33]
  i526.environmentLightingMode = i527[34]
  i526.ambientProbe = new pc.SphericalHarmonicsL2(i527[35])
  request.r(i527[36], i527[37], 0, i526, 'customReflection')
  request.r(i527[38], i527[39], 0, i526, 'defaultReflection')
  i526.defaultReflectionMode = i527[40]
  i526.defaultReflectionResolution = i527[41]
  i526.sunLightObjectId = i527[42]
  i526.pixelLightCount = i527[43]
  i526.defaultReflectionHDR = !!i527[44]
  i526.hasLightDataAsset = !!i527[45]
  i526.hasManualGenerate = !!i527[46]
  return i526
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i532 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i533 = data
  request.r(i533[0], i533[1], 0, i532, 'lightmapColor')
  request.r(i533[2], i533[3], 0, i532, 'lightmapDirection')
  request.r(i533[4], i533[5], 0, i532, 'shadowMask')
  return i532
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i534 = root || new UnityEngine.LightProbes()
  var i535 = data
  return i534
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i542 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i543 = data
  var i545 = i543[0]
  var i544 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i545.length; i += 1) {
    i544.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i545[i + 0]));
  }
  i542.ShaderCompilationErrors = i544
  i542.name = i543[1]
  i542.guid = i543[2]
  var i547 = i543[3]
  var i546 = []
  for(var i = 0; i < i547.length; i += 1) {
    i546.push( i547[i + 0] );
  }
  i542.shaderDefinedKeywords = i546
  var i549 = i543[4]
  var i548 = []
  for(var i = 0; i < i549.length; i += 1) {
    i548.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i549[i + 0]) );
  }
  i542.passes = i548
  var i551 = i543[5]
  var i550 = []
  for(var i = 0; i < i551.length; i += 1) {
    i550.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i551[i + 0]) );
  }
  i542.usePasses = i550
  var i553 = i543[6]
  var i552 = []
  for(var i = 0; i < i553.length; i += 1) {
    i552.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i553[i + 0]) );
  }
  i542.defaultParameterValues = i552
  request.r(i543[7], i543[8], 0, i542, 'unityFallbackShader')
  i542.readDepth = !!i543[9]
  i542.hasDepthOnlyPass = !!i543[10]
  i542.isCreatedByShaderGraph = !!i543[11]
  i542.disableBatching = !!i543[12]
  i542.compiled = !!i543[13]
  return i542
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i556 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i557 = data
  i556.shaderName = i557[0]
  i556.errorMessage = i557[1]
  return i556
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i562 = root || new pc.UnityShaderPass()
  var i563 = data
  i562.id = i563[0]
  i562.subShaderIndex = i563[1]
  i562.name = i563[2]
  i562.passType = i563[3]
  i562.grabPassTextureName = i563[4]
  i562.usePass = !!i563[5]
  i562.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i563[6], i562.zTest)
  i562.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i563[7], i562.zWrite)
  i562.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i563[8], i562.culling)
  i562.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i563[9], i562.blending)
  i562.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i563[10], i562.alphaBlending)
  i562.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i563[11], i562.colorWriteMask)
  i562.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i563[12], i562.offsetUnits)
  i562.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i563[13], i562.offsetFactor)
  i562.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i563[14], i562.stencilRef)
  i562.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i563[15], i562.stencilReadMask)
  i562.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i563[16], i562.stencilWriteMask)
  i562.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i563[17], i562.stencilOp)
  i562.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i563[18], i562.stencilOpFront)
  i562.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i563[19], i562.stencilOpBack)
  var i565 = i563[20]
  var i564 = []
  for(var i = 0; i < i565.length; i += 1) {
    i564.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i565[i + 0]) );
  }
  i562.tags = i564
  var i567 = i563[21]
  var i566 = []
  for(var i = 0; i < i567.length; i += 1) {
    i566.push( i567[i + 0] );
  }
  i562.passDefinedKeywords = i566
  var i569 = i563[22]
  var i568 = []
  for(var i = 0; i < i569.length; i += 1) {
    i568.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i569[i + 0]) );
  }
  i562.passDefinedKeywordGroups = i568
  var i571 = i563[23]
  var i570 = []
  for(var i = 0; i < i571.length; i += 1) {
    i570.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i571[i + 0]) );
  }
  i562.variants = i570
  var i573 = i563[24]
  var i572 = []
  for(var i = 0; i < i573.length; i += 1) {
    i572.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i573[i + 0]) );
  }
  i562.excludedVariants = i572
  i562.hasDepthReader = !!i563[25]
  return i562
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i574 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i575 = data
  i574.val = i575[0]
  i574.name = i575[1]
  return i574
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i576 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i577 = data
  i576.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i577[0], i576.src)
  i576.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i577[1], i576.dst)
  i576.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i577[2], i576.op)
  return i576
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i578 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i579 = data
  i578.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i579[0], i578.pass)
  i578.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i579[1], i578.fail)
  i578.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i579[2], i578.zFail)
  i578.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i579[3], i578.comp)
  return i578
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i582 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i583 = data
  i582.name = i583[0]
  i582.value = i583[1]
  return i582
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i586 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i587 = data
  var i589 = i587[0]
  var i588 = []
  for(var i = 0; i < i589.length; i += 1) {
    i588.push( i589[i + 0] );
  }
  i586.keywords = i588
  i586.hasDiscard = !!i587[1]
  return i586
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i592 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i593 = data
  i592.passId = i593[0]
  i592.subShaderIndex = i593[1]
  var i595 = i593[2]
  var i594 = []
  for(var i = 0; i < i595.length; i += 1) {
    i594.push( i595[i + 0] );
  }
  i592.keywords = i594
  i592.vertexProgram = i593[3]
  i592.fragmentProgram = i593[4]
  i592.exportedForWebGl2 = !!i593[5]
  i592.readDepth = !!i593[6]
  return i592
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i598 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i599 = data
  request.r(i599[0], i599[1], 0, i598, 'shader')
  i598.pass = i599[2]
  return i598
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i602 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i603 = data
  i602.name = i603[0]
  i602.type = i603[1]
  i602.value = new pc.Vec4( i603[2], i603[3], i603[4], i603[5] )
  i602.textureValue = i603[6]
  i602.shaderPropertyFlag = i603[7]
  return i602
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i604 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i605 = data
  i604.name = i605[0]
  request.r(i605[1], i605[2], 0, i604, 'texture')
  i604.aabb = i605[3]
  i604.vertices = i605[4]
  i604.triangles = i605[5]
  i604.textureRect = UnityEngine.Rect.MinMaxRect(i605[6], i605[7], i605[8], i605[9])
  i604.packedRect = UnityEngine.Rect.MinMaxRect(i605[10], i605[11], i605[12], i605[13])
  i604.border = new pc.Vec4( i605[14], i605[15], i605[16], i605[17] )
  i604.transparency = i605[18]
  i604.bounds = i605[19]
  i604.pixelsPerUnit = i605[20]
  i604.textureWidth = i605[21]
  i604.textureHeight = i605[22]
  i604.nativeSize = new pc.Vec2( i605[23], i605[24] )
  i604.pivot = new pc.Vec2( i605[25], i605[26] )
  i604.textureRectOffset = new pc.Vec2( i605[27], i605[28] )
  return i604
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i606 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i607 = data
  i606.name = i607[0]
  return i606
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font"] = function (request, data, root) {
  var i608 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font' )
  var i609 = data
  i608.name = i609[0]
  i608.ascent = i609[1]
  i608.originalLineHeight = i609[2]
  i608.fontSize = i609[3]
  var i611 = i609[4]
  var i610 = []
  for(var i = 0; i < i611.length; i += 1) {
    i610.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo', i611[i + 0]) );
  }
  i608.characterInfo = i610
  request.r(i609[5], i609[6], 0, i608, 'texture')
  i608.originalFontSize = i609[7]
  return i608
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo"] = function (request, data, root) {
  var i614 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo' )
  var i615 = data
  i614.index = i615[0]
  i614.advance = i615[1]
  i614.bearing = i615[2]
  i614.glyphWidth = i615[3]
  i614.glyphHeight = i615[4]
  i614.minX = i615[5]
  i614.maxX = i615[6]
  i614.minY = i615[7]
  i614.maxY = i615[8]
  i614.uvBottomLeftX = i615[9]
  i614.uvBottomLeftY = i615[10]
  i614.uvBottomRightX = i615[11]
  i614.uvBottomRightY = i615[12]
  i614.uvTopLeftX = i615[13]
  i614.uvTopLeftY = i615[14]
  i614.uvTopRightX = i615[15]
  i614.uvTopRightY = i615[16]
  return i614
}

Deserializers["DG.Tweening.Core.DOTweenSettings"] = function (request, data, root) {
  var i616 = root || request.c( 'DG.Tweening.Core.DOTweenSettings' )
  var i617 = data
  i616.useSafeMode = !!i617[0]
  i616.safeModeOptions = request.d('DG.Tweening.Core.DOTweenSettings+SafeModeOptions', i617[1], i616.safeModeOptions)
  i616.timeScale = i617[2]
  i616.unscaledTimeScale = i617[3]
  i616.useSmoothDeltaTime = !!i617[4]
  i616.maxSmoothUnscaledTime = i617[5]
  i616.rewindCallbackMode = i617[6]
  i616.showUnityEditorReport = !!i617[7]
  i616.logBehaviour = i617[8]
  i616.drawGizmos = !!i617[9]
  i616.defaultRecyclable = !!i617[10]
  i616.defaultAutoPlay = i617[11]
  i616.defaultUpdateType = i617[12]
  i616.defaultTimeScaleIndependent = !!i617[13]
  i616.defaultEaseType = i617[14]
  i616.defaultEaseOvershootOrAmplitude = i617[15]
  i616.defaultEasePeriod = i617[16]
  i616.defaultAutoKill = !!i617[17]
  i616.defaultLoopType = i617[18]
  i616.debugMode = !!i617[19]
  i616.debugStoreTargetId = !!i617[20]
  i616.showPreviewPanel = !!i617[21]
  i616.storeSettingsLocation = i617[22]
  i616.modules = request.d('DG.Tweening.Core.DOTweenSettings+ModulesSetup', i617[23], i616.modules)
  i616.createASMDEF = !!i617[24]
  i616.showPlayingTweens = !!i617[25]
  i616.showPausedTweens = !!i617[26]
  return i616
}

Deserializers["DG.Tweening.Core.DOTweenSettings+SafeModeOptions"] = function (request, data, root) {
  var i618 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+SafeModeOptions' )
  var i619 = data
  i618.logBehaviour = i619[0]
  i618.nestedTweenFailureBehaviour = i619[1]
  return i618
}

Deserializers["DG.Tweening.Core.DOTweenSettings+ModulesSetup"] = function (request, data, root) {
  var i620 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+ModulesSetup' )
  var i621 = data
  i620.showPanel = !!i621[0]
  i620.audioEnabled = !!i621[1]
  i620.physicsEnabled = !!i621[2]
  i620.physics2DEnabled = !!i621[3]
  i620.spriteEnabled = !!i621[4]
  i620.uiEnabled = !!i621[5]
  i620.textMeshProEnabled = !!i621[6]
  i620.tk2DEnabled = !!i621[7]
  i620.deAudioEnabled = !!i621[8]
  i620.deUnityExtendedEnabled = !!i621[9]
  i620.epoOutlineEnabled = !!i621[10]
  return i620
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i622 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i623 = data
  var i625 = i623[0]
  var i624 = []
  for(var i = 0; i < i625.length; i += 1) {
    i624.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i625[i + 0]) );
  }
  i622.files = i624
  i622.componentToPrefabIds = i623[1]
  return i622
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i628 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i629 = data
  i628.path = i629[0]
  request.r(i629[1], i629[2], 0, i628, 'unityObject')
  return i628
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i630 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i631 = data
  var i633 = i631[0]
  var i632 = []
  for(var i = 0; i < i633.length; i += 1) {
    i632.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i633[i + 0]) );
  }
  i630.scriptsExecutionOrder = i632
  var i635 = i631[1]
  var i634 = []
  for(var i = 0; i < i635.length; i += 1) {
    i634.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i635[i + 0]) );
  }
  i630.sortingLayers = i634
  var i637 = i631[2]
  var i636 = []
  for(var i = 0; i < i637.length; i += 1) {
    i636.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i637[i + 0]) );
  }
  i630.cullingLayers = i636
  i630.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i631[3], i630.timeSettings)
  i630.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i631[4], i630.physicsSettings)
  i630.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i631[5], i630.physics2DSettings)
  i630.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i631[6], i630.qualitySettings)
  i630.enableRealtimeShadows = !!i631[7]
  i630.enableAutoInstancing = !!i631[8]
  i630.enableStaticBatching = !!i631[9]
  i630.enableDynamicBatching = !!i631[10]
  i630.usePreservativeDynamicBatching = !!i631[11]
  i630.lightmapEncodingQuality = i631[12]
  i630.desiredColorSpace = i631[13]
  var i639 = i631[14]
  var i638 = []
  for(var i = 0; i < i639.length; i += 1) {
    i638.push( i639[i + 0] );
  }
  i630.allTags = i638
  return i630
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i642 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i643 = data
  i642.name = i643[0]
  i642.value = i643[1]
  return i642
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i646 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i647 = data
  i646.id = i647[0]
  i646.name = i647[1]
  i646.value = i647[2]
  return i646
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i650 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i651 = data
  i650.id = i651[0]
  i650.name = i651[1]
  return i650
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i652 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i653 = data
  i652.fixedDeltaTime = i653[0]
  i652.maximumDeltaTime = i653[1]
  i652.timeScale = i653[2]
  i652.maximumParticleTimestep = i653[3]
  return i652
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i654 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i655 = data
  i654.gravity = new pc.Vec3( i655[0], i655[1], i655[2] )
  i654.defaultSolverIterations = i655[3]
  i654.bounceThreshold = i655[4]
  i654.autoSyncTransforms = !!i655[5]
  i654.autoSimulation = !!i655[6]
  var i657 = i655[7]
  var i656 = []
  for(var i = 0; i < i657.length; i += 1) {
    i656.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i657[i + 0]) );
  }
  i654.collisionMatrix = i656
  return i654
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i660 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i661 = data
  i660.enabled = !!i661[0]
  i660.layerId = i661[1]
  i660.otherLayerId = i661[2]
  return i660
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i662 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i663 = data
  request.r(i663[0], i663[1], 0, i662, 'material')
  i662.gravity = new pc.Vec2( i663[2], i663[3] )
  i662.positionIterations = i663[4]
  i662.velocityIterations = i663[5]
  i662.velocityThreshold = i663[6]
  i662.maxLinearCorrection = i663[7]
  i662.maxAngularCorrection = i663[8]
  i662.maxTranslationSpeed = i663[9]
  i662.maxRotationSpeed = i663[10]
  i662.baumgarteScale = i663[11]
  i662.baumgarteTOIScale = i663[12]
  i662.timeToSleep = i663[13]
  i662.linearSleepTolerance = i663[14]
  i662.angularSleepTolerance = i663[15]
  i662.defaultContactOffset = i663[16]
  i662.autoSimulation = !!i663[17]
  i662.queriesHitTriggers = !!i663[18]
  i662.queriesStartInColliders = !!i663[19]
  i662.callbacksOnDisable = !!i663[20]
  i662.reuseCollisionCallbacks = !!i663[21]
  i662.autoSyncTransforms = !!i663[22]
  var i665 = i663[23]
  var i664 = []
  for(var i = 0; i < i665.length; i += 1) {
    i664.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i665[i + 0]) );
  }
  i662.collisionMatrix = i664
  return i662
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i668 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i669 = data
  i668.enabled = !!i669[0]
  i668.layerId = i669[1]
  i668.otherLayerId = i669[2]
  return i668
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i670 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i671 = data
  var i673 = i671[0]
  var i672 = []
  for(var i = 0; i < i673.length; i += 1) {
    i672.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i673[i + 0]) );
  }
  i670.qualityLevels = i672
  var i675 = i671[1]
  var i674 = []
  for(var i = 0; i < i675.length; i += 1) {
    i674.push( i675[i + 0] );
  }
  i670.names = i674
  i670.shadows = i671[2]
  i670.anisotropicFiltering = i671[3]
  i670.antiAliasing = i671[4]
  i670.lodBias = i671[5]
  i670.shadowCascades = i671[6]
  i670.shadowDistance = i671[7]
  i670.shadowmaskMode = i671[8]
  i670.shadowProjection = i671[9]
  i670.shadowResolution = i671[10]
  i670.softParticles = !!i671[11]
  i670.softVegetation = !!i671[12]
  i670.activeColorSpace = i671[13]
  i670.desiredColorSpace = i671[14]
  i670.masterTextureLimit = i671[15]
  i670.maxQueuedFrames = i671[16]
  i670.particleRaycastBudget = i671[17]
  i670.pixelLightCount = i671[18]
  i670.realtimeReflectionProbes = !!i671[19]
  i670.shadowCascade2Split = i671[20]
  i670.shadowCascade4Split = new pc.Vec3( i671[21], i671[22], i671[23] )
  i670.streamingMipmapsActive = !!i671[24]
  i670.vSyncCount = i671[25]
  i670.asyncUploadBufferSize = i671[26]
  i670.asyncUploadTimeSlice = i671[27]
  i670.billboardsFaceCameraPosition = !!i671[28]
  i670.shadowNearPlaneOffset = i671[29]
  i670.streamingMipmapsMemoryBudget = i671[30]
  i670.maximumLODLevel = i671[31]
  i670.streamingMipmapsAddAllCameras = !!i671[32]
  i670.streamingMipmapsMaxLevelReduction = i671[33]
  i670.streamingMipmapsRenderersPerFrame = i671[34]
  i670.resolutionScalingFixedDPIFactor = i671[35]
  i670.streamingMipmapsMaxFileIORequests = i671[36]
  i670.currentQualityLevel = i671[37]
  return i670
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i678 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i679 = data
  request.r(i679[0], i679[1], 0, i678, 'm_ObjectArgument')
  i678.m_ObjectArgumentAssemblyTypeName = i679[2]
  i678.m_IntArgument = i679[3]
  i678.m_FloatArgument = i679[4]
  i678.m_StringArgument = i679[5]
  i678.m_BoolArgument = !!i679[6]
  return i678
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10,"graphicsFormat":11,"sRGBTexture":12,"desiredColorSpace":13,"wrapU":14,"wrapV":15},"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Components.Transform":{"position":0,"scale":3,"rotation":6},"Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer":{"color":0,"sprite":4,"flipX":6,"flipY":7,"drawMode":8,"size":9,"tileMode":11,"adaptiveModeThreshold":12,"maskInteraction":13,"spriteSortPoint":14,"enabled":15,"sharedMaterial":16,"sharedMaterials":18,"receiveShadows":19,"shadowCastingMode":20,"sortingLayerID":21,"sortingOrder":22,"lightmapIndex":23,"lightmapSceneIndex":24,"lightmapScaleOffset":25,"lightProbeUsage":29,"reflectionProbeUsage":30},"Luna.Unity.DTO.UnityEngine.Components.CircleCollider2D":{"radius":0,"enabled":1,"isTrigger":2,"usedByEffector":3,"density":4,"offset":5,"material":7},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Components.SortingGroup":{"sortingLayerIndex":0,"sortingOrder":1,"sortingLayerName":2,"enabled":3},"Luna.Unity.DTO.UnityEngine.Components.Rigidbody2D":{"bodyType":0,"material":1,"simulated":3,"useAutoMass":4,"mass":5,"drag":6,"angularDrag":7,"gravityScale":8,"collisionDetectionMode":9,"sleepMode":10,"constraints":11},"Luna.Unity.DTO.UnityEngine.Components.FixedJoint2D":{"dampingRatio":0,"frequency":1,"anchor":2,"connectedAnchor":4,"autoConfigureConnectedAnchor":6,"connectedBody":7,"breakForce":9,"breakTorque":10,"enableCollision":11,"enabled":12},"Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D":{"usedByComposite":0,"autoTiling":1,"size":2,"edgeRadius":4,"enabled":5,"isTrigger":6,"usedByEffector":7,"density":8,"offset":9,"material":11},"Luna.Unity.DTO.UnityEngine.Components.HingeJoint2D":{"useLimits":0,"limits":1,"useMotor":2,"motor":3,"anchor":4,"connectedAnchor":6,"autoConfigureConnectedAnchor":8,"connectedBody":9,"breakForce":11,"breakTorque":12,"enableCollision":13,"enabled":14},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"aspect":0,"orthographic":1,"orthographicSize":2,"backgroundColor":3,"nearClipPlane":7,"farClipPlane":8,"fieldOfView":9,"depth":10,"clearFlags":11,"cullingMask":12,"rect":13,"targetTexture":14,"usePhysicalProperties":16,"focalLength":17,"sensorSize":18,"lensShift":20,"gateFit":22,"commandBufferCount":23,"cameraType":24,"enabled":25},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"planeDistance":0,"referencePixelsPerUnit":1,"isFallbackOverlay":2,"renderMode":3,"renderOrder":4,"sortingLayerName":5,"sortingOrder":6,"scaleFactor":7,"worldCamera":8,"overrideSorting":10,"pixelPerfect":11,"targetDisplay":12,"overridePixelPerfect":13,"enabled":14},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Components.TargetJoint2D":{"autoConfigureTarget":0,"target":1,"anchor":3,"maxForce":5,"dampingRatio":6,"frequency":7,"connectedBody":8,"breakForce":10,"breakTorque":11,"enableCollision":12,"enabled":13},"Luna.Unity.DTO.UnityEngine.Components.AudioSource":{"clip":0,"outputAudioMixerGroup":2,"playOnAwake":4,"loop":5,"time":6,"volume":7,"pitch":8,"enabled":9},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"customReflection":36,"defaultReflection":38,"defaultReflectionMode":40,"defaultReflectionResolution":41,"sunLightObjectId":42,"pixelLightCount":43,"defaultReflectionHDR":44,"hasLightDataAsset":45,"hasManualGenerate":46},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2,"shadowMask":4},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"hasDepthOnlyPass":10,"isCreatedByShaderGraph":11,"disableBatching":12,"compiled":13},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"exportedForWebGl2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.AudioClip":{"name":0},"Luna.Unity.DTO.UnityEngine.Assets.Font":{"name":0,"ascent":1,"originalLineHeight":2,"fontSize":3,"characterInfo":4,"texture":5,"originalFontSize":7},"Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo":{"index":0,"advance":1,"bearing":2,"glyphWidth":3,"glyphHeight":4,"minX":5,"maxX":6,"minY":7,"maxY":8,"uvBottomLeftX":9,"uvBottomLeftY":10,"uvBottomRightX":11,"uvBottomRightY":12,"uvTopLeftX":13,"uvTopLeftY":14,"uvTopRightX":15,"uvTopRightY":16},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableStaticBatching":9,"enableDynamicBatching":10,"usePreservativeDynamicBatching":11,"lightmapEncodingQuality":12,"desiredColorSpace":13,"allTags":14},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37}}

Deserializers.requiredComponents = {"51":[52],"53":[52],"54":[52],"55":[52],"56":[52],"57":[52],"58":[59],"60":[23],"61":[62],"63":[62],"64":[62],"65":[62],"66":[62],"67":[62],"68":[12],"69":[12],"70":[12],"71":[12],"72":[12],"73":[12],"11":[12],"74":[12],"75":[12],"41":[12],"16":[12],"76":[12],"77":[12],"78":[23],"79":[80],"81":[82],"83":[82],"29":[28],"84":[2],"85":[23],"86":[87],"88":[28],"89":[32,28],"90":[80],"91":[32,28],"92":[28],"93":[28],"94":[80,28],"95":[28,32],"96":[97],"98":[97],"99":[97],"100":[28],"101":[28],"31":[29],"33":[32,28],"39":[28],"30":[29],"102":[28],"103":[28],"104":[28],"105":[28],"106":[28],"107":[28],"108":[28],"109":[28],"110":[28],"38":[32,28],"111":[28],"112":[28],"113":[28],"114":[28],"34":[32,28],"115":[28],"116":[26],"117":[26],"27":[26],"118":[26],"119":[23],"120":[23]}

Deserializers.types = ["UnityEngine.Shader","UnityEngine.Transform","UnityEngine.SpriteRenderer","UnityEngine.Sprite","UnityEngine.Material","UnityEngine.CircleCollider2D","UnityEngine.MonoBehaviour","BulletController","UnityEngine.AudioClip","UnityEngine.Rendering.SortingGroup","MonsterController","UnityEngine.HingeJoint2D","UnityEngine.Rigidbody2D","BalanceController","MonsterTrigger","GroundCheck","UnityEngine.FixedJoint2D","UnityEngine.BoxCollider2D","PlayerController","PlayerAttack","UnityEngine.GameObject","PlayerTrigger","BodyPiece","UnityEngine.Camera","UnityEngine.AudioListener","UnityEngine.EventSystems.UIBehaviour","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","UnityEngine.RectTransform","UnityEngine.Canvas","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","UnityEngine.CanvasRenderer","UnityEngine.UI.Image","UnityEngine.UI.Text","UnityEngine.Font","DG.Tweening.DOTweenAnimation","UnityEngine.UI.Button","UnityEngine.UI.RawImage","UnityEngine.UI.AspectRatioFitter","MonsterOptionController","UnityEngine.TargetJoint2D","HumanOptionController","UnityEngine.AudioSource","GameController","LayoutController","LunaController","UnityEngine.Texture2D","AudioController","PoolController","DG.Tweening.Core.DOTweenSettings","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.SkinnedMeshRenderer","UnityEngine.FlareLayer","UnityEngine.CharacterJoint","UnityEngine.Rigidbody","UnityEngine.ConfigurableJoint","UnityEngine.ConstantForce","UnityEngine.FixedJoint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.CompositeCollider2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.MeshRenderer","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","UnityEngine.U2D.Animation.SpriteSkin","UnityEngine.U2D.PixelPerfectCamera","UnityEngine.U2D.SpriteShapeController","UnityEngine.U2D.SpriteShapeRenderer","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text","TMPro.TextContainer","TMPro.TextMeshPro","TMPro.TextMeshProUGUI","Unity.VisualScripting.SceneVariables","Unity.VisualScripting.Variables","Unity.VisualScripting.ScriptMachine","Unity.VisualScripting.StateMachine","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.Mask","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RectMask2D","UnityEngine.UI.ScrollRect","UnityEngine.UI.Scrollbar","UnityEngine.UI.Slider","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster"]

Deserializers.unityVersion = "6000.0.78f1";

Deserializers.productName = "SSP_Luna-SSP_V03";

Deserializers.lunaInitializationTime = "08/17/2026 07:10:25";

Deserializers.lunaDaysRunning = "0.1";

Deserializers.lunaVersion = "7.2.0";

Deserializers.lunaSHA = "ea08d29afe2968efcb8d91d5624f033c6485cc68";

Deserializers.creativeName = "SSP_V06_YenTTH_TamNTM";

Deserializers.lunaAppID = "40364";

Deserializers.projectId = "ff24b2211bd970c4d920bad068d2912a";

Deserializers.packagesInfo = "com.unity.timeline: 1.8.12\ncom.unity.ugui: 2.0.0";

Deserializers.externalJsLibraries = "";

Deserializers.androidLink = ( typeof window !== "undefined")&&window.$environment.packageConfig.androidLink?window.$environment.packageConfig.androidLink:'Empty';

Deserializers.iosLink = ( typeof window !== "undefined")&&window.$environment.packageConfig.iosLink?window.$environment.packageConfig.iosLink:'Empty';

Deserializers.base64Enabled = "True";

Deserializers.minifyEnabled = "True";

Deserializers.isForceUncompressed = "False";

Deserializers.isAntiAliasingEnabled = "False";

Deserializers.isRuntimeAnalysisEnabledForCode = "False";

Deserializers.runtimeAnalysisExcludedClassesCount = "1793";

Deserializers.runtimeAnalysisExcludedMethodsCount = "4443";

Deserializers.runtimeAnalysisExcludedModules = "physics3d, particle-system, mecanim-wasm";

Deserializers.isRuntimeAnalysisEnabledForShaders = "True";

Deserializers.isRealtimeShadowsEnabled = "False";

Deserializers.isLunaCompilerV2Used = "False";

Deserializers.companyName = "DefaultCompany";

Deserializers.buildPlatform = "Android";

Deserializers.applicationIdentifier = "com.DefaultCompany.SSP_LunaSSP_V03";

Deserializers.disableAntiAliasing = true;

Deserializers.graphicsConstraint = 24;

Deserializers.linearColorSpace = true;

Deserializers.buildID = "651b39c3-65cf-440a-82e3-9c4473d28459";

Deserializers.runtimeInitializeOnLoadInfos = [[["Unity","PerformanceTesting","PerformanceTest","ResetStaticsOnLoad"],["UnityEngine","U2D","Animation","GpuDeformationSystem","CreateFallbackBuffer"],["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"],["UnityEngine","AI","NavMesh","ClearPreUpdateListeners"]],[["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"]],[],[["UnityEngine","Timeline","AnimatorBindingCache","ResetStaticsOnLoad"],["UnityEngine","Timeline","TrackAsset","ResetStaticsOnLoad"],["UnityEngine","Timeline","AnimationPreviewUtilities","ResetStaticsOnLoad"],["Unity","PerformanceTesting","Data","RunSettings","ResetStaticsOnLoad"],["Unity","PerformanceTesting","PlayerCallbacks","ResetStaticsOnLoad"]]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

