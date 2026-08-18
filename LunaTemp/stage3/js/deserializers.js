var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i2476 = root || request.c( 'UnityEngine.JointSpring' )
  var i2477 = data
  i2476.spring = i2477[0]
  i2476.damper = i2477[1]
  i2476.targetPosition = i2477[2]
  return i2476
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i2478 = root || request.c( 'UnityEngine.JointMotor' )
  var i2479 = data
  i2478.m_TargetVelocity = i2479[0]
  i2478.m_Force = i2479[1]
  i2478.m_FreeSpin = i2479[2]
  return i2478
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i2480 = root || request.c( 'UnityEngine.JointLimits' )
  var i2481 = data
  i2480.m_Min = i2481[0]
  i2480.m_Max = i2481[1]
  i2480.m_Bounciness = i2481[2]
  i2480.m_BounceMinVelocity = i2481[3]
  i2480.m_ContactDistance = i2481[4]
  i2480.minBounce = i2481[5]
  i2480.maxBounce = i2481[6]
  return i2480
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i2482 = root || request.c( 'UnityEngine.JointDrive' )
  var i2483 = data
  i2482.m_PositionSpring = i2483[0]
  i2482.m_PositionDamper = i2483[1]
  i2482.m_MaximumForce = i2483[2]
  i2482.m_UseAcceleration = i2483[3]
  return i2482
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i2484 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i2485 = data
  i2484.m_Spring = i2485[0]
  i2484.m_Damper = i2485[1]
  return i2484
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i2486 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i2487 = data
  i2486.m_Limit = i2487[0]
  i2486.m_Bounciness = i2487[1]
  i2486.m_ContactDistance = i2487[2]
  return i2486
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i2488 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i2489 = data
  i2488.m_ExtremumSlip = i2489[0]
  i2488.m_ExtremumValue = i2489[1]
  i2488.m_AsymptoteSlip = i2489[2]
  i2488.m_AsymptoteValue = i2489[3]
  i2488.m_Stiffness = i2489[4]
  return i2488
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i2490 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i2491 = data
  i2490.m_LowerAngle = i2491[0]
  i2490.m_UpperAngle = i2491[1]
  return i2490
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i2492 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i2493 = data
  i2492.m_MotorSpeed = i2493[0]
  i2492.m_MaximumMotorTorque = i2493[1]
  return i2492
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i2494 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i2495 = data
  i2494.m_DampingRatio = i2495[0]
  i2494.m_Frequency = i2495[1]
  i2494.m_Angle = i2495[2]
  return i2494
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i2496 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i2497 = data
  i2496.m_LowerTranslation = i2497[0]
  i2496.m_UpperTranslation = i2497[1]
  return i2496
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i2498 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i2499 = data
  i2498.name = i2499[0]
  i2498.width = i2499[1]
  i2498.height = i2499[2]
  i2498.mipmapCount = i2499[3]
  i2498.anisoLevel = i2499[4]
  i2498.filterMode = i2499[5]
  i2498.hdr = !!i2499[6]
  i2498.format = i2499[7]
  i2498.wrapMode = i2499[8]
  i2498.alphaIsTransparency = !!i2499[9]
  i2498.alphaSource = i2499[10]
  i2498.graphicsFormat = i2499[11]
  i2498.sRGBTexture = !!i2499[12]
  i2498.desiredColorSpace = i2499[13]
  i2498.wrapU = i2499[14]
  i2498.wrapV = i2499[15]
  return i2498
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i2500 = root || new pc.UnityMaterial()
  var i2501 = data
  i2500.name = i2501[0]
  request.r(i2501[1], i2501[2], 0, i2500, 'shader')
  i2500.renderQueue = i2501[3]
  i2500.enableInstancing = !!i2501[4]
  var i2503 = i2501[5]
  var i2502 = []
  for(var i = 0; i < i2503.length; i += 1) {
    i2502.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i2503[i + 0]) );
  }
  i2500.floatParameters = i2502
  var i2505 = i2501[6]
  var i2504 = []
  for(var i = 0; i < i2505.length; i += 1) {
    i2504.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i2505[i + 0]) );
  }
  i2500.colorParameters = i2504
  var i2507 = i2501[7]
  var i2506 = []
  for(var i = 0; i < i2507.length; i += 1) {
    i2506.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i2507[i + 0]) );
  }
  i2500.vectorParameters = i2506
  var i2509 = i2501[8]
  var i2508 = []
  for(var i = 0; i < i2509.length; i += 1) {
    i2508.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i2509[i + 0]) );
  }
  i2500.textureParameters = i2508
  var i2511 = i2501[9]
  var i2510 = []
  for(var i = 0; i < i2511.length; i += 1) {
    i2510.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i2511[i + 0]) );
  }
  i2500.materialFlags = i2510
  return i2500
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i2514 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i2515 = data
  i2514.name = i2515[0]
  i2514.value = i2515[1]
  return i2514
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i2518 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i2519 = data
  i2518.name = i2519[0]
  i2518.value = new pc.Color(i2519[1], i2519[2], i2519[3], i2519[4])
  return i2518
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i2522 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i2523 = data
  i2522.name = i2523[0]
  i2522.value = new pc.Vec4( i2523[1], i2523[2], i2523[3], i2523[4] )
  return i2522
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i2526 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i2527 = data
  i2526.name = i2527[0]
  request.r(i2527[1], i2527[2], 0, i2526, 'value')
  return i2526
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i2530 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i2531 = data
  i2530.name = i2531[0]
  i2530.enabled = !!i2531[1]
  return i2530
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i2532 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i2533 = data
  i2532.position = new pc.Vec3( i2533[0], i2533[1], i2533[2] )
  i2532.scale = new pc.Vec3( i2533[3], i2533[4], i2533[5] )
  i2532.rotation = new pc.Quat(i2533[6], i2533[7], i2533[8], i2533[9])
  return i2532
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer"] = function (request, data, root) {
  var i2534 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer' )
  var i2535 = data
  i2534.color = new pc.Color(i2535[0], i2535[1], i2535[2], i2535[3])
  request.r(i2535[4], i2535[5], 0, i2534, 'sprite')
  i2534.flipX = !!i2535[6]
  i2534.flipY = !!i2535[7]
  i2534.drawMode = i2535[8]
  i2534.size = new pc.Vec2( i2535[9], i2535[10] )
  i2534.tileMode = i2535[11]
  i2534.adaptiveModeThreshold = i2535[12]
  i2534.maskInteraction = i2535[13]
  i2534.spriteSortPoint = i2535[14]
  i2534.enabled = !!i2535[15]
  request.r(i2535[16], i2535[17], 0, i2534, 'sharedMaterial')
  var i2537 = i2535[18]
  var i2536 = []
  for(var i = 0; i < i2537.length; i += 2) {
  request.r(i2537[i + 0], i2537[i + 1], 2, i2536, '')
  }
  i2534.sharedMaterials = i2536
  i2534.receiveShadows = !!i2535[19]
  i2534.shadowCastingMode = i2535[20]
  i2534.sortingLayerID = i2535[21]
  i2534.sortingOrder = i2535[22]
  i2534.lightmapIndex = i2535[23]
  i2534.lightmapSceneIndex = i2535[24]
  i2534.lightmapScaleOffset = new pc.Vec4( i2535[25], i2535[26], i2535[27], i2535[28] )
  i2534.lightProbeUsage = i2535[29]
  i2534.reflectionProbeUsage = i2535[30]
  return i2534
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CircleCollider2D"] = function (request, data, root) {
  var i2540 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CircleCollider2D' )
  var i2541 = data
  i2540.radius = i2541[0]
  i2540.enabled = !!i2541[1]
  i2540.isTrigger = !!i2541[2]
  i2540.usedByEffector = !!i2541[3]
  i2540.density = i2541[4]
  i2540.offset = new pc.Vec2( i2541[5], i2541[6] )
  request.r(i2541[7], i2541[8], 0, i2540, 'material')
  return i2540
}

Deserializers["BulletController"] = function (request, data, root) {
  var i2542 = root || request.c( 'BulletController' )
  var i2543 = data
  i2542.speed = i2543[0]
  i2542.damage = i2543[1]
  request.r(i2543[2], i2543[3], 0, i2542, 'hitMonsterSound')
  request.r(i2543[4], i2543[5], 0, i2542, 'hitSound')
  i2542.lifeTime = i2543[6]
  i2542.hit = !!i2543[7]
  return i2542
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i2544 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i2545 = data
  i2544.name = i2545[0]
  i2544.tagId = i2545[1]
  i2544.enabled = !!i2545[2]
  i2544.isStatic = !!i2545[3]
  i2544.layer = i2545[4]
  return i2544
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SortingGroup"] = function (request, data, root) {
  var i2546 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SortingGroup' )
  var i2547 = data
  i2546.sortingLayerIndex = i2547[0]
  i2546.sortingOrder = i2547[1]
  i2546.sortingLayerName = i2547[2]
  i2546.enabled = !!i2547[3]
  return i2546
}

Deserializers["MonsterController"] = function (request, data, root) {
  var i2548 = root || request.c( 'MonsterController' )
  var i2549 = data
  i2548.maxHP = i2549[0]
  i2548.currentHP = i2549[1]
  var i2551 = i2549[2]
  var i2550 = new (System.Collections.Generic.List$1(Bridge.ns('Piece')))
  for(var i = 0; i < i2551.length; i += 1) {
    i2550.add(request.d('Piece', i2551[i + 0]));
  }
  i2548.pieces = i2550
  request.r(i2549[3], i2549[4], 0, i2548, 'deadSFX')
  i2548.maxForce = new pc.Vec2( i2549[5], i2549[6] )
  i2548.minForce = new pc.Vec2( i2549[7], i2549[8] )
  request.r(i2549[9], i2549[10], 0, i2548, 'balance')
  i2548.isDead = !!i2549[11]
  request.r(i2549[12], i2549[13], 0, i2548, 'trigger')
  request.r(i2549[14], i2549[15], 0, i2548, 'groundCheck')
  i2548.speed = i2549[16]
  request.r(i2549[17], i2549[18], 0, i2548, 'body')
  request.r(i2549[19], i2549[20], 0, i2548, 'leftHand')
  request.r(i2549[21], i2549[22], 0, i2548, 'rightHand')
  request.r(i2549[23], i2549[24], 0, i2548, 'leftLeg')
  request.r(i2549[25], i2549[26], 0, i2548, 'rightLeg')
  return i2548
}

Deserializers["Piece"] = function (request, data, root) {
  var i2554 = root || request.c( 'Piece' )
  var i2555 = data
  request.r(i2555[0], i2555[1], 0, i2554, 'Joint')
  request.r(i2555[2], i2555[3], 0, i2554, 'Rb')
  return i2554
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Rigidbody2D"] = function (request, data, root) {
  var i2556 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Rigidbody2D' )
  var i2557 = data
  i2556.bodyType = i2557[0]
  request.r(i2557[1], i2557[2], 0, i2556, 'material')
  i2556.simulated = !!i2557[3]
  i2556.useAutoMass = !!i2557[4]
  i2556.mass = i2557[5]
  i2556.drag = i2557[6]
  i2556.angularDrag = i2557[7]
  i2556.gravityScale = i2557[8]
  i2556.collisionDetectionMode = i2557[9]
  i2556.sleepMode = i2557[10]
  i2556.constraints = i2557[11]
  return i2556
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.FixedJoint2D"] = function (request, data, root) {
  var i2558 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.FixedJoint2D' )
  var i2559 = data
  i2558.dampingRatio = i2559[0]
  i2558.frequency = i2559[1]
  i2558.anchor = new pc.Vec2( i2559[2], i2559[3] )
  i2558.connectedAnchor = new pc.Vec2( i2559[4], i2559[5] )
  i2558.autoConfigureConnectedAnchor = !!i2559[6]
  request.r(i2559[7], i2559[8], 0, i2558, 'connectedBody')
  i2558.breakForce = i2559[9]
  i2558.breakTorque = i2559[10]
  i2558.enableCollision = !!i2559[11]
  i2558.enabled = !!i2559[12]
  return i2558
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D"] = function (request, data, root) {
  var i2560 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D' )
  var i2561 = data
  i2560.usedByComposite = !!i2561[0]
  i2560.autoTiling = !!i2561[1]
  i2560.size = new pc.Vec2( i2561[2], i2561[3] )
  i2560.edgeRadius = i2561[4]
  i2560.enabled = !!i2561[5]
  i2560.isTrigger = !!i2561[6]
  i2560.usedByEffector = !!i2561[7]
  i2560.density = i2561[8]
  i2560.offset = new pc.Vec2( i2561[9], i2561[10] )
  request.r(i2561[11], i2561[12], 0, i2560, 'material')
  return i2560
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.HingeJoint2D"] = function (request, data, root) {
  var i2562 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.HingeJoint2D' )
  var i2563 = data
  i2562.useLimits = !!i2563[0]
  i2562.limits = request.d('UnityEngine.JointAngleLimits2D', i2563[1], i2562.limits)
  i2562.useMotor = !!i2563[2]
  i2562.motor = request.d('UnityEngine.JointMotor2D', i2563[3], i2562.motor)
  i2562.anchor = new pc.Vec2( i2563[4], i2563[5] )
  i2562.connectedAnchor = new pc.Vec2( i2563[6], i2563[7] )
  i2562.autoConfigureConnectedAnchor = !!i2563[8]
  request.r(i2563[9], i2563[10], 0, i2562, 'connectedBody')
  i2562.breakForce = i2563[11]
  i2562.breakTorque = i2563[12]
  i2562.enableCollision = !!i2563[13]
  i2562.enabled = !!i2563[14]
  return i2562
}

Deserializers["BalanceController"] = function (request, data, root) {
  var i2564 = root || request.c( 'BalanceController' )
  var i2565 = data
  i2564.targetRotation = i2565[0]
  i2564.force = i2565[1]
  return i2564
}

Deserializers["MonsterTrigger"] = function (request, data, root) {
  var i2566 = root || request.c( 'MonsterTrigger' )
  var i2567 = data
  request.r(i2567[0], i2567[1], 0, i2566, 'player')
  return i2566
}

Deserializers["GroundCheck"] = function (request, data, root) {
  var i2568 = root || request.c( 'GroundCheck' )
  var i2569 = data
  i2568.OnGround = !!i2569[0]
  return i2568
}

Deserializers["PlayerController"] = function (request, data, root) {
  var i2570 = root || request.c( 'PlayerController' )
  var i2571 = data
  i2570.IsZombie = !!i2571[0]
  i2570.OnDead = request.d('System.Action', i2571[1], i2570.OnDead)
  var i2573 = i2571[2]
  var i2572 = new (System.Collections.Generic.List$1(Bridge.ns('BodyRenderer')))
  for(var i = 0; i < i2573.length; i += 1) {
    i2572.add(request.d('BodyRenderer', i2573[i + 0]));
  }
  i2570.bodyRenderers = i2572
  request.r(i2571[3], i2571[4], 0, i2570, 'biteSound')
  request.r(i2571[5], i2571[6], 0, i2570, 'zombieSound')
  request.r(i2571[7], i2571[8], 0, i2570, 'body')
  return i2570
}

Deserializers["System.Action"] = function (request, data, root) {
  var i2574 = root || request.c( 'System.Action' )
  var i2575 = data
  return i2574
}

Deserializers["BodyRenderer"] = function (request, data, root) {
  var i2578 = root || request.c( 'BodyRenderer' )
  var i2579 = data
  request.r(i2579[0], i2579[1], 0, i2578, 'Renderer')
  request.r(i2579[2], i2579[3], 0, i2578, 'ZSprite')
  return i2578
}

Deserializers["PlayerAttack"] = function (request, data, root) {
  var i2580 = root || request.c( 'PlayerAttack' )
  var i2581 = data
  i2580.ShootCD = i2581[0]
  request.r(i2581[1], i2581[2], 0, i2580, 'left')
  request.r(i2581[3], i2581[4], 0, i2580, 'right')
  request.r(i2581[5], i2581[6], 0, i2580, 'gun')
  request.r(i2581[7], i2581[8], 0, i2580, 'bulletPrefab')
  i2580.onCD = !!i2581[9]
  request.r(i2581[10], i2581[11], 0, i2580, 'shootSound')
  i2580.timeMotor = i2581[12]
  request.r(i2581[13], i2581[14], 0, i2580, 'playerTrigger')
  request.r(i2581[15], i2581[16], 0, i2580, 'player')
  return i2580
}

Deserializers["BodyPiece"] = function (request, data, root) {
  var i2582 = root || request.c( 'BodyPiece' )
  var i2583 = data
  request.r(i2583[0], i2583[1], 0, i2582, 'player')
  return i2582
}

Deserializers["PlayerTrigger"] = function (request, data, root) {
  var i2584 = root || request.c( 'PlayerTrigger' )
  var i2585 = data
  request.r(i2585[0], i2585[1], 0, i2584, 'monster')
  return i2584
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i2586 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i2587 = data
  i2586.name = i2587[0]
  i2586.index = i2587[1]
  i2586.startup = !!i2587[2]
  return i2586
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i2588 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i2589 = data
  i2588.aspect = i2589[0]
  i2588.orthographic = !!i2589[1]
  i2588.orthographicSize = i2589[2]
  i2588.backgroundColor = new pc.Color(i2589[3], i2589[4], i2589[5], i2589[6])
  i2588.nearClipPlane = i2589[7]
  i2588.farClipPlane = i2589[8]
  i2588.fieldOfView = i2589[9]
  i2588.depth = i2589[10]
  i2588.clearFlags = i2589[11]
  i2588.cullingMask = i2589[12]
  i2588.rect = i2589[13]
  request.r(i2589[14], i2589[15], 0, i2588, 'targetTexture')
  i2588.usePhysicalProperties = !!i2589[16]
  i2588.focalLength = i2589[17]
  i2588.sensorSize = new pc.Vec2( i2589[18], i2589[19] )
  i2588.lensShift = new pc.Vec2( i2589[20], i2589[21] )
  i2588.gateFit = i2589[22]
  i2588.commandBufferCount = i2589[23]
  i2588.cameraType = i2589[24]
  i2588.enabled = !!i2589[25]
  return i2588
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i2590 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i2591 = data
  request.r(i2591[0], i2591[1], 0, i2590, 'm_FirstSelected')
  i2590.m_sendNavigationEvents = !!i2591[2]
  i2590.m_DragThreshold = i2591[3]
  return i2590
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i2592 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i2593 = data
  i2592.m_HorizontalAxis = i2593[0]
  i2592.m_VerticalAxis = i2593[1]
  i2592.m_SubmitButton = i2593[2]
  i2592.m_CancelButton = i2593[3]
  i2592.m_InputActionsPerSecond = i2593[4]
  i2592.m_RepeatDelay = i2593[5]
  i2592.m_ForceModuleActive = !!i2593[6]
  i2592.m_SendPointerHoverToParent = !!i2593[7]
  return i2592
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i2594 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i2595 = data
  i2594.pivot = new pc.Vec2( i2595[0], i2595[1] )
  i2594.anchorMin = new pc.Vec2( i2595[2], i2595[3] )
  i2594.anchorMax = new pc.Vec2( i2595[4], i2595[5] )
  i2594.sizeDelta = new pc.Vec2( i2595[6], i2595[7] )
  i2594.anchoredPosition3D = new pc.Vec3( i2595[8], i2595[9], i2595[10] )
  i2594.rotation = new pc.Quat(i2595[11], i2595[12], i2595[13], i2595[14])
  i2594.scale = new pc.Vec3( i2595[15], i2595[16], i2595[17] )
  return i2594
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i2596 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i2597 = data
  i2596.planeDistance = i2597[0]
  i2596.referencePixelsPerUnit = i2597[1]
  i2596.isFallbackOverlay = !!i2597[2]
  i2596.renderMode = i2597[3]
  i2596.renderOrder = i2597[4]
  i2596.sortingLayerName = i2597[5]
  i2596.sortingOrder = i2597[6]
  i2596.scaleFactor = i2597[7]
  request.r(i2597[8], i2597[9], 0, i2596, 'worldCamera')
  i2596.overrideSorting = !!i2597[10]
  i2596.pixelPerfect = !!i2597[11]
  i2596.targetDisplay = i2597[12]
  i2596.overridePixelPerfect = !!i2597[13]
  i2596.enabled = !!i2597[14]
  return i2596
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i2598 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i2599 = data
  i2598.m_UiScaleMode = i2599[0]
  i2598.m_ReferencePixelsPerUnit = i2599[1]
  i2598.m_ScaleFactor = i2599[2]
  i2598.m_ReferenceResolution = new pc.Vec2( i2599[3], i2599[4] )
  i2598.m_ScreenMatchMode = i2599[5]
  i2598.m_MatchWidthOrHeight = i2599[6]
  i2598.m_PhysicalUnit = i2599[7]
  i2598.m_FallbackScreenDPI = i2599[8]
  i2598.m_DefaultSpriteDPI = i2599[9]
  i2598.m_DynamicPixelsPerUnit = i2599[10]
  i2598.m_PresetInfoIsWorld = !!i2599[11]
  return i2598
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i2600 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i2601 = data
  i2600.m_IgnoreReversedGraphics = !!i2601[0]
  i2600.m_BlockingObjects = i2601[1]
  i2600.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i2601[2] )
  return i2600
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i2602 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i2603 = data
  i2602.cullTransparentMesh = !!i2603[0]
  return i2602
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i2604 = root || request.c( 'UnityEngine.UI.Image' )
  var i2605 = data
  request.r(i2605[0], i2605[1], 0, i2604, 'm_Sprite')
  i2604.m_Type = i2605[2]
  i2604.m_PreserveAspect = !!i2605[3]
  i2604.m_FillCenter = !!i2605[4]
  i2604.m_FillMethod = i2605[5]
  i2604.m_FillAmount = i2605[6]
  i2604.m_FillClockwise = !!i2605[7]
  i2604.m_FillOrigin = i2605[8]
  i2604.m_UseSpriteMesh = !!i2605[9]
  i2604.m_PixelsPerUnitMultiplier = i2605[10]
  request.r(i2605[11], i2605[12], 0, i2604, 'm_Material')
  i2604.m_Maskable = !!i2605[13]
  i2604.m_Color = new pc.Color(i2605[14], i2605[15], i2605[16], i2605[17])
  i2604.m_RaycastTarget = !!i2605[18]
  i2604.m_RaycastPadding = new pc.Vec4( i2605[19], i2605[20], i2605[21], i2605[22] )
  return i2604
}

Deserializers["UnityEngine.UI.Text"] = function (request, data, root) {
  var i2606 = root || request.c( 'UnityEngine.UI.Text' )
  var i2607 = data
  i2606.m_FontData = request.d('UnityEngine.UI.FontData', i2607[0], i2606.m_FontData)
  i2606.m_Text = i2607[1]
  request.r(i2607[2], i2607[3], 0, i2606, 'm_Material')
  i2606.m_Maskable = !!i2607[4]
  i2606.m_Color = new pc.Color(i2607[5], i2607[6], i2607[7], i2607[8])
  i2606.m_RaycastTarget = !!i2607[9]
  i2606.m_RaycastPadding = new pc.Vec4( i2607[10], i2607[11], i2607[12], i2607[13] )
  return i2606
}

Deserializers["UnityEngine.UI.FontData"] = function (request, data, root) {
  var i2608 = root || request.c( 'UnityEngine.UI.FontData' )
  var i2609 = data
  request.r(i2609[0], i2609[1], 0, i2608, 'm_Font')
  i2608.m_FontSize = i2609[2]
  i2608.m_FontStyle = i2609[3]
  i2608.m_BestFit = !!i2609[4]
  i2608.m_MinSize = i2609[5]
  i2608.m_MaxSize = i2609[6]
  i2608.m_Alignment = i2609[7]
  i2608.m_AlignByGeometry = !!i2609[8]
  i2608.m_RichText = !!i2609[9]
  i2608.m_HorizontalOverflow = i2609[10]
  i2608.m_VerticalOverflow = i2609[11]
  i2608.m_LineSpacing = i2609[12]
  return i2608
}

Deserializers["DG.Tweening.DOTweenAnimation"] = function (request, data, root) {
  var i2610 = root || request.c( 'DG.Tweening.DOTweenAnimation' )
  var i2611 = data
  i2610.targetIsSelf = !!i2611[0]
  request.r(i2611[1], i2611[2], 0, i2610, 'targetGO')
  i2610.tweenTargetIsTargetGO = !!i2611[3]
  i2610.delay = i2611[4]
  i2610.duration = i2611[5]
  i2610.easeType = i2611[6]
  i2610.easeCurve = new pc.AnimationCurve( { keys_flow: i2611[7] } )
  i2610.loopType = i2611[8]
  i2610.loops = i2611[9]
  i2610.id = i2611[10]
  i2610.isRelative = !!i2611[11]
  i2610.isFrom = !!i2611[12]
  i2610.isIndependentUpdate = !!i2611[13]
  i2610.autoKill = !!i2611[14]
  i2610.autoGenerate = !!i2611[15]
  i2610.isActive = !!i2611[16]
  i2610.isValid = !!i2611[17]
  request.r(i2611[18], i2611[19], 0, i2610, 'target')
  i2610.animationType = i2611[20]
  i2610.targetType = i2611[21]
  i2610.forcedTargetType = i2611[22]
  i2610.autoPlay = !!i2611[23]
  i2610.useTargetAsV3 = !!i2611[24]
  i2610.endValueFloat = i2611[25]
  i2610.endValueV3 = new pc.Vec3( i2611[26], i2611[27], i2611[28] )
  i2610.endValueV2 = new pc.Vec2( i2611[29], i2611[30] )
  i2610.endValueColor = new pc.Color(i2611[31], i2611[32], i2611[33], i2611[34])
  i2610.endValueString = i2611[35]
  i2610.endValueRect = UnityEngine.Rect.MinMaxRect(i2611[36], i2611[37], i2611[38], i2611[39])
  request.r(i2611[40], i2611[41], 0, i2610, 'endValueTransform')
  i2610.optionalBool0 = !!i2611[42]
  i2610.optionalBool1 = !!i2611[43]
  i2610.optionalFloat0 = i2611[44]
  i2610.optionalInt0 = i2611[45]
  i2610.optionalRotationMode = i2611[46]
  i2610.optionalScrambleMode = i2611[47]
  i2610.optionalShakeRandomnessMode = i2611[48]
  i2610.optionalString = i2611[49]
  i2610.updateType = i2611[50]
  i2610.isSpeedBased = !!i2611[51]
  i2610.hasOnStart = !!i2611[52]
  i2610.hasOnPlay = !!i2611[53]
  i2610.hasOnUpdate = !!i2611[54]
  i2610.hasOnStepComplete = !!i2611[55]
  i2610.hasOnComplete = !!i2611[56]
  i2610.hasOnTweenCreated = !!i2611[57]
  i2610.hasOnRewind = !!i2611[58]
  i2610.onStart = request.d('UnityEngine.Events.UnityEvent', i2611[59], i2610.onStart)
  i2610.onPlay = request.d('UnityEngine.Events.UnityEvent', i2611[60], i2610.onPlay)
  i2610.onUpdate = request.d('UnityEngine.Events.UnityEvent', i2611[61], i2610.onUpdate)
  i2610.onStepComplete = request.d('UnityEngine.Events.UnityEvent', i2611[62], i2610.onStepComplete)
  i2610.onComplete = request.d('UnityEngine.Events.UnityEvent', i2611[63], i2610.onComplete)
  i2610.onTweenCreated = request.d('UnityEngine.Events.UnityEvent', i2611[64], i2610.onTweenCreated)
  i2610.onRewind = request.d('UnityEngine.Events.UnityEvent', i2611[65], i2610.onRewind)
  return i2610
}

Deserializers["UnityEngine.Events.UnityEvent"] = function (request, data, root) {
  var i2612 = root || request.c( 'UnityEngine.Events.UnityEvent' )
  var i2613 = data
  i2612.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i2613[0], i2612.m_PersistentCalls)
  return i2612
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i2614 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i2615 = data
  var i2617 = i2615[0]
  var i2616 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i2617.length; i += 1) {
    i2616.add(request.d('UnityEngine.Events.PersistentCall', i2617[i + 0]));
  }
  i2614.m_Calls = i2616
  return i2614
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i2620 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i2621 = data
  request.r(i2621[0], i2621[1], 0, i2620, 'm_Target')
  i2620.m_TargetAssemblyTypeName = i2621[2]
  i2620.m_MethodName = i2621[3]
  i2620.m_Mode = i2621[4]
  i2620.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i2621[5], i2620.m_Arguments)
  i2620.m_CallState = i2621[6]
  return i2620
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i2622 = root || request.c( 'UnityEngine.UI.Button' )
  var i2623 = data
  i2622.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i2623[0], i2622.m_OnClick)
  i2622.m_Navigation = request.d('UnityEngine.UI.Navigation', i2623[1], i2622.m_Navigation)
  i2622.m_Transition = i2623[2]
  i2622.m_Colors = request.d('UnityEngine.UI.ColorBlock', i2623[3], i2622.m_Colors)
  i2622.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i2623[4], i2622.m_SpriteState)
  i2622.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i2623[5], i2622.m_AnimationTriggers)
  i2622.m_Interactable = !!i2623[6]
  request.r(i2623[7], i2623[8], 0, i2622, 'm_TargetGraphic')
  return i2622
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i2624 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i2625 = data
  i2624.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i2625[0], i2624.m_PersistentCalls)
  return i2624
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i2626 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i2627 = data
  i2626.m_Mode = i2627[0]
  i2626.m_WrapAround = !!i2627[1]
  request.r(i2627[2], i2627[3], 0, i2626, 'm_SelectOnUp')
  request.r(i2627[4], i2627[5], 0, i2626, 'm_SelectOnDown')
  request.r(i2627[6], i2627[7], 0, i2626, 'm_SelectOnLeft')
  request.r(i2627[8], i2627[9], 0, i2626, 'm_SelectOnRight')
  return i2626
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i2628 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i2629 = data
  i2628.m_NormalColor = new pc.Color(i2629[0], i2629[1], i2629[2], i2629[3])
  i2628.m_HighlightedColor = new pc.Color(i2629[4], i2629[5], i2629[6], i2629[7])
  i2628.m_PressedColor = new pc.Color(i2629[8], i2629[9], i2629[10], i2629[11])
  i2628.m_SelectedColor = new pc.Color(i2629[12], i2629[13], i2629[14], i2629[15])
  i2628.m_DisabledColor = new pc.Color(i2629[16], i2629[17], i2629[18], i2629[19])
  i2628.m_ColorMultiplier = i2629[20]
  i2628.m_FadeDuration = i2629[21]
  return i2628
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i2630 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i2631 = data
  request.r(i2631[0], i2631[1], 0, i2630, 'm_HighlightedSprite')
  request.r(i2631[2], i2631[3], 0, i2630, 'm_PressedSprite')
  request.r(i2631[4], i2631[5], 0, i2630, 'm_SelectedSprite')
  request.r(i2631[6], i2631[7], 0, i2630, 'm_DisabledSprite')
  return i2630
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i2632 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i2633 = data
  i2632.m_NormalTrigger = i2633[0]
  i2632.m_HighlightedTrigger = i2633[1]
  i2632.m_PressedTrigger = i2633[2]
  i2632.m_SelectedTrigger = i2633[3]
  i2632.m_DisabledTrigger = i2633[4]
  return i2632
}

Deserializers["UnityEngine.UI.RawImage"] = function (request, data, root) {
  var i2634 = root || request.c( 'UnityEngine.UI.RawImage' )
  var i2635 = data
  request.r(i2635[0], i2635[1], 0, i2634, 'm_Texture')
  i2634.m_UVRect = UnityEngine.Rect.MinMaxRect(i2635[2], i2635[3], i2635[4], i2635[5])
  request.r(i2635[6], i2635[7], 0, i2634, 'm_Material')
  i2634.m_Maskable = !!i2635[8]
  i2634.m_Color = new pc.Color(i2635[9], i2635[10], i2635[11], i2635[12])
  i2634.m_RaycastTarget = !!i2635[13]
  i2634.m_RaycastPadding = new pc.Vec4( i2635[14], i2635[15], i2635[16], i2635[17] )
  return i2634
}

Deserializers["UnityEngine.UI.AspectRatioFitter"] = function (request, data, root) {
  var i2636 = root || request.c( 'UnityEngine.UI.AspectRatioFitter' )
  var i2637 = data
  i2636.m_AspectMode = i2637[0]
  i2636.m_AspectRatio = i2637[1]
  return i2636
}

Deserializers["MonsterOptionController"] = function (request, data, root) {
  var i2638 = root || request.c( 'MonsterOptionController' )
  var i2639 = data
  i2638.OnSpawn = request.d('System.Action', i2639[0], i2638.OnSpawn)
  i2638.OnEmpty = request.d('System.Action', i2639[1], i2638.OnEmpty)
  i2638.OnEnd = request.d('System.Action', i2639[2], i2638.OnEnd)
  request.r(i2639[3], i2639[4], 0, i2638, 'spawnPrefab')
  i2638.numCharacter = i2639[5]
  request.r(i2639[6], i2639[7], 0, i2638, 'numText')
  request.r(i2639[8], i2639[9], 0, i2638, 'world')
  request.r(i2639[10], i2639[11], 0, i2638, 'area')
  request.r(i2639[12], i2639[13], 0, i2638, 'areaTut')
  return i2638
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.TargetJoint2D"] = function (request, data, root) {
  var i2640 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.TargetJoint2D' )
  var i2641 = data
  i2640.autoConfigureTarget = !!i2641[0]
  i2640.target = new pc.Vec2( i2641[1], i2641[2] )
  i2640.anchor = new pc.Vec2( i2641[3], i2641[4] )
  i2640.maxForce = i2641[5]
  i2640.dampingRatio = i2641[6]
  i2640.frequency = i2641[7]
  request.r(i2641[8], i2641[9], 0, i2640, 'connectedBody')
  i2640.breakForce = i2641[10]
  i2640.breakTorque = i2641[11]
  i2640.enableCollision = !!i2641[12]
  i2640.enabled = !!i2641[13]
  return i2640
}

Deserializers["HumanOptionController"] = function (request, data, root) {
  var i2642 = root || request.c( 'HumanOptionController' )
  var i2643 = data
  i2642.OnSpawn = request.d('System.Action', i2643[0], i2642.OnSpawn)
  i2642.OnEmpty = request.d('System.Action', i2643[1], i2642.OnEmpty)
  i2642.OnEnd = request.d('System.Action', i2643[2], i2642.OnEnd)
  request.r(i2643[3], i2643[4], 0, i2642, 'spawnPrefab')
  i2642.numCharacter = i2643[5]
  request.r(i2643[6], i2643[7], 0, i2642, 'numText')
  request.r(i2643[8], i2643[9], 0, i2642, 'world')
  request.r(i2643[10], i2643[11], 0, i2642, 'area')
  request.r(i2643[12], i2643[13], 0, i2642, 'areaTut')
  return i2642
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.AudioSource"] = function (request, data, root) {
  var i2644 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.AudioSource' )
  var i2645 = data
  request.r(i2645[0], i2645[1], 0, i2644, 'clip')
  request.r(i2645[2], i2645[3], 0, i2644, 'outputAudioMixerGroup')
  i2644.playOnAwake = !!i2645[4]
  i2644.loop = !!i2645[5]
  i2644.time = i2645[6]
  i2644.volume = i2645[7]
  i2644.pitch = i2645[8]
  i2644.enabled = !!i2645[9]
  return i2644
}

Deserializers["GameController"] = function (request, data, root) {
  var i2646 = root || request.c( 'GameController' )
  var i2647 = data
  i2646.maxSpawn = i2647[0]
  i2646.OnSpawn = request.d('System.Action', i2647[1], i2646.OnSpawn)
  i2646.OnEmpty = request.d('System.Action', i2647[2], i2646.OnEmpty)
  request.r(i2647[3], i2647[4], 0, i2646, 'startScene')
  request.r(i2647[5], i2647[6], 0, i2646, 'endScene')
  i2646.human = request.d('Option', i2647[7], i2646.human)
  i2646.monster = request.d('Option', i2647[8], i2646.monster)
  request.r(i2647[9], i2647[10], 0, i2646, 'clickSound')
  request.r(i2647[11], i2647[12], 0, i2646, 'optionController')
  return i2646
}

Deserializers["Option"] = function (request, data, root) {
  var i2648 = root || request.c( 'Option' )
  var i2649 = data
  request.r(i2649[0], i2649[1], 0, i2648, 'Button')
  request.r(i2649[2], i2649[3], 0, i2648, 'Controller')
  return i2648
}

Deserializers["LayoutController"] = function (request, data, root) {
  var i2650 = root || request.c( 'LayoutController' )
  var i2651 = data
  request.r(i2651[0], i2651[1], 0, i2650, 'main')
  request.r(i2651[2], i2651[3], 0, i2650, 'UI')
  return i2650
}

Deserializers["LunaController"] = function (request, data, root) {
  var i2652 = root || request.c( 'LunaController' )
  var i2653 = data
  i2652.OneClick = !!i2653[0]
  request.r(i2653[1], i2653[2], 0, i2652, 'BGTexture')
  i2652.Header = i2653[3]
  i2652.HeaderColor = new pc.Color(i2653[4], i2653[5], i2653[6], i2653[7])
  i2652.UseTime = !!i2653[8]
  i2652.TimePlay = i2653[9]
  i2652.MaxCountPlay = i2653[10]
  request.r(i2653[11], i2653[12], 0, i2652, 'clickCard')
  request.r(i2653[13], i2653[14], 0, i2652, 'BGImage')
  request.r(i2653[15], i2653[16], 0, i2652, 'headerText')
  var i2655 = i2653[17]
  var i2654 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.UI.Button')))
  for(var i = 0; i < i2655.length; i += 2) {
  request.r(i2655[i + 0], i2655[i + 1], 1, i2654, '')
  }
  i2652.CTA = i2654
  return i2652
}

Deserializers["AudioController"] = function (request, data, root) {
  var i2658 = root || request.c( 'AudioController' )
  var i2659 = data
  request.r(i2659[0], i2659[1], 0, i2658, 'BGM')
  request.r(i2659[2], i2659[3], 0, i2658, 'musicSource')
  request.r(i2659[4], i2659[5], 0, i2658, 'pool')
  return i2658
}

Deserializers["PoolController"] = function (request, data, root) {
  var i2660 = root || request.c( 'PoolController' )
  var i2661 = data
  request.r(i2661[0], i2661[1], 0, i2660, 'poolParent')
  return i2660
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i2662 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i2663 = data
  i2662.ambientIntensity = i2663[0]
  i2662.reflectionIntensity = i2663[1]
  i2662.ambientMode = i2663[2]
  i2662.ambientLight = new pc.Color(i2663[3], i2663[4], i2663[5], i2663[6])
  i2662.ambientSkyColor = new pc.Color(i2663[7], i2663[8], i2663[9], i2663[10])
  i2662.ambientGroundColor = new pc.Color(i2663[11], i2663[12], i2663[13], i2663[14])
  i2662.ambientEquatorColor = new pc.Color(i2663[15], i2663[16], i2663[17], i2663[18])
  i2662.fogColor = new pc.Color(i2663[19], i2663[20], i2663[21], i2663[22])
  i2662.fogEndDistance = i2663[23]
  i2662.fogStartDistance = i2663[24]
  i2662.fogDensity = i2663[25]
  i2662.fog = !!i2663[26]
  request.r(i2663[27], i2663[28], 0, i2662, 'skybox')
  i2662.fogMode = i2663[29]
  var i2665 = i2663[30]
  var i2664 = []
  for(var i = 0; i < i2665.length; i += 1) {
    i2664.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i2665[i + 0]) );
  }
  i2662.lightmaps = i2664
  i2662.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i2663[31], i2662.lightProbes)
  i2662.lightmapsMode = i2663[32]
  i2662.mixedBakeMode = i2663[33]
  i2662.environmentLightingMode = i2663[34]
  i2662.ambientProbe = new pc.SphericalHarmonicsL2(i2663[35])
  request.r(i2663[36], i2663[37], 0, i2662, 'customReflection')
  request.r(i2663[38], i2663[39], 0, i2662, 'defaultReflection')
  i2662.defaultReflectionMode = i2663[40]
  i2662.defaultReflectionResolution = i2663[41]
  i2662.sunLightObjectId = i2663[42]
  i2662.pixelLightCount = i2663[43]
  i2662.defaultReflectionHDR = !!i2663[44]
  i2662.hasLightDataAsset = !!i2663[45]
  i2662.hasManualGenerate = !!i2663[46]
  return i2662
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i2668 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i2669 = data
  request.r(i2669[0], i2669[1], 0, i2668, 'lightmapColor')
  request.r(i2669[2], i2669[3], 0, i2668, 'lightmapDirection')
  request.r(i2669[4], i2669[5], 0, i2668, 'shadowMask')
  return i2668
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i2670 = root || new UnityEngine.LightProbes()
  var i2671 = data
  return i2670
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i2678 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i2679 = data
  var i2681 = i2679[0]
  var i2680 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i2681.length; i += 1) {
    i2680.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i2681[i + 0]));
  }
  i2678.ShaderCompilationErrors = i2680
  i2678.name = i2679[1]
  i2678.guid = i2679[2]
  var i2683 = i2679[3]
  var i2682 = []
  for(var i = 0; i < i2683.length; i += 1) {
    i2682.push( i2683[i + 0] );
  }
  i2678.shaderDefinedKeywords = i2682
  var i2685 = i2679[4]
  var i2684 = []
  for(var i = 0; i < i2685.length; i += 1) {
    i2684.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i2685[i + 0]) );
  }
  i2678.passes = i2684
  var i2687 = i2679[5]
  var i2686 = []
  for(var i = 0; i < i2687.length; i += 1) {
    i2686.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i2687[i + 0]) );
  }
  i2678.usePasses = i2686
  var i2689 = i2679[6]
  var i2688 = []
  for(var i = 0; i < i2689.length; i += 1) {
    i2688.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i2689[i + 0]) );
  }
  i2678.defaultParameterValues = i2688
  request.r(i2679[7], i2679[8], 0, i2678, 'unityFallbackShader')
  i2678.readDepth = !!i2679[9]
  i2678.hasDepthOnlyPass = !!i2679[10]
  i2678.isCreatedByShaderGraph = !!i2679[11]
  i2678.disableBatching = !!i2679[12]
  i2678.compiled = !!i2679[13]
  return i2678
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i2692 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i2693 = data
  i2692.shaderName = i2693[0]
  i2692.errorMessage = i2693[1]
  return i2692
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i2698 = root || new pc.UnityShaderPass()
  var i2699 = data
  i2698.id = i2699[0]
  i2698.subShaderIndex = i2699[1]
  i2698.name = i2699[2]
  i2698.passType = i2699[3]
  i2698.grabPassTextureName = i2699[4]
  i2698.usePass = !!i2699[5]
  i2698.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2699[6], i2698.zTest)
  i2698.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2699[7], i2698.zWrite)
  i2698.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2699[8], i2698.culling)
  i2698.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i2699[9], i2698.blending)
  i2698.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i2699[10], i2698.alphaBlending)
  i2698.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2699[11], i2698.colorWriteMask)
  i2698.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2699[12], i2698.offsetUnits)
  i2698.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2699[13], i2698.offsetFactor)
  i2698.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2699[14], i2698.stencilRef)
  i2698.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2699[15], i2698.stencilReadMask)
  i2698.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2699[16], i2698.stencilWriteMask)
  i2698.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i2699[17], i2698.stencilOp)
  i2698.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i2699[18], i2698.stencilOpFront)
  i2698.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i2699[19], i2698.stencilOpBack)
  var i2701 = i2699[20]
  var i2700 = []
  for(var i = 0; i < i2701.length; i += 1) {
    i2700.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i2701[i + 0]) );
  }
  i2698.tags = i2700
  var i2703 = i2699[21]
  var i2702 = []
  for(var i = 0; i < i2703.length; i += 1) {
    i2702.push( i2703[i + 0] );
  }
  i2698.passDefinedKeywords = i2702
  var i2705 = i2699[22]
  var i2704 = []
  for(var i = 0; i < i2705.length; i += 1) {
    i2704.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i2705[i + 0]) );
  }
  i2698.passDefinedKeywordGroups = i2704
  var i2707 = i2699[23]
  var i2706 = []
  for(var i = 0; i < i2707.length; i += 1) {
    i2706.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i2707[i + 0]) );
  }
  i2698.variants = i2706
  var i2709 = i2699[24]
  var i2708 = []
  for(var i = 0; i < i2709.length; i += 1) {
    i2708.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i2709[i + 0]) );
  }
  i2698.excludedVariants = i2708
  i2698.hasDepthReader = !!i2699[25]
  return i2698
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i2710 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i2711 = data
  i2710.val = i2711[0]
  i2710.name = i2711[1]
  return i2710
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i2712 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i2713 = data
  i2712.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2713[0], i2712.src)
  i2712.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2713[1], i2712.dst)
  i2712.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2713[2], i2712.op)
  return i2712
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i2714 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i2715 = data
  i2714.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2715[0], i2714.pass)
  i2714.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2715[1], i2714.fail)
  i2714.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2715[2], i2714.zFail)
  i2714.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2715[3], i2714.comp)
  return i2714
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i2718 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i2719 = data
  i2718.name = i2719[0]
  i2718.value = i2719[1]
  return i2718
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i2722 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i2723 = data
  var i2725 = i2723[0]
  var i2724 = []
  for(var i = 0; i < i2725.length; i += 1) {
    i2724.push( i2725[i + 0] );
  }
  i2722.keywords = i2724
  i2722.hasDiscard = !!i2723[1]
  return i2722
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i2728 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i2729 = data
  i2728.passId = i2729[0]
  i2728.subShaderIndex = i2729[1]
  var i2731 = i2729[2]
  var i2730 = []
  for(var i = 0; i < i2731.length; i += 1) {
    i2730.push( i2731[i + 0] );
  }
  i2728.keywords = i2730
  i2728.vertexProgram = i2729[3]
  i2728.fragmentProgram = i2729[4]
  i2728.exportedForWebGl2 = !!i2729[5]
  i2728.readDepth = !!i2729[6]
  return i2728
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i2734 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i2735 = data
  request.r(i2735[0], i2735[1], 0, i2734, 'shader')
  i2734.pass = i2735[2]
  return i2734
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i2738 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i2739 = data
  i2738.name = i2739[0]
  i2738.type = i2739[1]
  i2738.value = new pc.Vec4( i2739[2], i2739[3], i2739[4], i2739[5] )
  i2738.textureValue = i2739[6]
  i2738.shaderPropertyFlag = i2739[7]
  return i2738
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i2740 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i2741 = data
  i2740.name = i2741[0]
  request.r(i2741[1], i2741[2], 0, i2740, 'texture')
  i2740.aabb = i2741[3]
  i2740.vertices = i2741[4]
  i2740.triangles = i2741[5]
  i2740.textureRect = UnityEngine.Rect.MinMaxRect(i2741[6], i2741[7], i2741[8], i2741[9])
  i2740.packedRect = UnityEngine.Rect.MinMaxRect(i2741[10], i2741[11], i2741[12], i2741[13])
  i2740.border = new pc.Vec4( i2741[14], i2741[15], i2741[16], i2741[17] )
  i2740.transparency = i2741[18]
  i2740.bounds = i2741[19]
  i2740.pixelsPerUnit = i2741[20]
  i2740.textureWidth = i2741[21]
  i2740.textureHeight = i2741[22]
  i2740.nativeSize = new pc.Vec2( i2741[23], i2741[24] )
  i2740.pivot = new pc.Vec2( i2741[25], i2741[26] )
  i2740.textureRectOffset = new pc.Vec2( i2741[27], i2741[28] )
  return i2740
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i2742 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i2743 = data
  i2742.name = i2743[0]
  return i2742
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font"] = function (request, data, root) {
  var i2744 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font' )
  var i2745 = data
  i2744.name = i2745[0]
  i2744.ascent = i2745[1]
  i2744.originalLineHeight = i2745[2]
  i2744.fontSize = i2745[3]
  var i2747 = i2745[4]
  var i2746 = []
  for(var i = 0; i < i2747.length; i += 1) {
    i2746.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo', i2747[i + 0]) );
  }
  i2744.characterInfo = i2746
  request.r(i2745[5], i2745[6], 0, i2744, 'texture')
  i2744.originalFontSize = i2745[7]
  return i2744
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo"] = function (request, data, root) {
  var i2750 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo' )
  var i2751 = data
  i2750.index = i2751[0]
  i2750.advance = i2751[1]
  i2750.bearing = i2751[2]
  i2750.glyphWidth = i2751[3]
  i2750.glyphHeight = i2751[4]
  i2750.minX = i2751[5]
  i2750.maxX = i2751[6]
  i2750.minY = i2751[7]
  i2750.maxY = i2751[8]
  i2750.uvBottomLeftX = i2751[9]
  i2750.uvBottomLeftY = i2751[10]
  i2750.uvBottomRightX = i2751[11]
  i2750.uvBottomRightY = i2751[12]
  i2750.uvTopLeftX = i2751[13]
  i2750.uvTopLeftY = i2751[14]
  i2750.uvTopRightX = i2751[15]
  i2750.uvTopRightY = i2751[16]
  return i2750
}

Deserializers["DG.Tweening.Core.DOTweenSettings"] = function (request, data, root) {
  var i2752 = root || request.c( 'DG.Tweening.Core.DOTweenSettings' )
  var i2753 = data
  i2752.useSafeMode = !!i2753[0]
  i2752.safeModeOptions = request.d('DG.Tweening.Core.DOTweenSettings+SafeModeOptions', i2753[1], i2752.safeModeOptions)
  i2752.timeScale = i2753[2]
  i2752.unscaledTimeScale = i2753[3]
  i2752.useSmoothDeltaTime = !!i2753[4]
  i2752.maxSmoothUnscaledTime = i2753[5]
  i2752.rewindCallbackMode = i2753[6]
  i2752.showUnityEditorReport = !!i2753[7]
  i2752.logBehaviour = i2753[8]
  i2752.drawGizmos = !!i2753[9]
  i2752.defaultRecyclable = !!i2753[10]
  i2752.defaultAutoPlay = i2753[11]
  i2752.defaultUpdateType = i2753[12]
  i2752.defaultTimeScaleIndependent = !!i2753[13]
  i2752.defaultEaseType = i2753[14]
  i2752.defaultEaseOvershootOrAmplitude = i2753[15]
  i2752.defaultEasePeriod = i2753[16]
  i2752.defaultAutoKill = !!i2753[17]
  i2752.defaultLoopType = i2753[18]
  i2752.debugMode = !!i2753[19]
  i2752.debugStoreTargetId = !!i2753[20]
  i2752.showPreviewPanel = !!i2753[21]
  i2752.storeSettingsLocation = i2753[22]
  i2752.modules = request.d('DG.Tweening.Core.DOTweenSettings+ModulesSetup', i2753[23], i2752.modules)
  i2752.createASMDEF = !!i2753[24]
  i2752.showPlayingTweens = !!i2753[25]
  i2752.showPausedTweens = !!i2753[26]
  return i2752
}

Deserializers["DG.Tweening.Core.DOTweenSettings+SafeModeOptions"] = function (request, data, root) {
  var i2754 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+SafeModeOptions' )
  var i2755 = data
  i2754.logBehaviour = i2755[0]
  i2754.nestedTweenFailureBehaviour = i2755[1]
  return i2754
}

Deserializers["DG.Tweening.Core.DOTweenSettings+ModulesSetup"] = function (request, data, root) {
  var i2756 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+ModulesSetup' )
  var i2757 = data
  i2756.showPanel = !!i2757[0]
  i2756.audioEnabled = !!i2757[1]
  i2756.physicsEnabled = !!i2757[2]
  i2756.physics2DEnabled = !!i2757[3]
  i2756.spriteEnabled = !!i2757[4]
  i2756.uiEnabled = !!i2757[5]
  i2756.textMeshProEnabled = !!i2757[6]
  i2756.tk2DEnabled = !!i2757[7]
  i2756.deAudioEnabled = !!i2757[8]
  i2756.deUnityExtendedEnabled = !!i2757[9]
  i2756.epoOutlineEnabled = !!i2757[10]
  return i2756
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i2758 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i2759 = data
  var i2761 = i2759[0]
  var i2760 = []
  for(var i = 0; i < i2761.length; i += 1) {
    i2760.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i2761[i + 0]) );
  }
  i2758.files = i2760
  i2758.componentToPrefabIds = i2759[1]
  return i2758
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i2764 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i2765 = data
  i2764.path = i2765[0]
  request.r(i2765[1], i2765[2], 0, i2764, 'unityObject')
  return i2764
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i2766 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i2767 = data
  var i2769 = i2767[0]
  var i2768 = []
  for(var i = 0; i < i2769.length; i += 1) {
    i2768.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i2769[i + 0]) );
  }
  i2766.scriptsExecutionOrder = i2768
  var i2771 = i2767[1]
  var i2770 = []
  for(var i = 0; i < i2771.length; i += 1) {
    i2770.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i2771[i + 0]) );
  }
  i2766.sortingLayers = i2770
  var i2773 = i2767[2]
  var i2772 = []
  for(var i = 0; i < i2773.length; i += 1) {
    i2772.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i2773[i + 0]) );
  }
  i2766.cullingLayers = i2772
  i2766.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i2767[3], i2766.timeSettings)
  i2766.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i2767[4], i2766.physicsSettings)
  i2766.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i2767[5], i2766.physics2DSettings)
  i2766.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i2767[6], i2766.qualitySettings)
  i2766.enableRealtimeShadows = !!i2767[7]
  i2766.enableAutoInstancing = !!i2767[8]
  i2766.enableStaticBatching = !!i2767[9]
  i2766.enableDynamicBatching = !!i2767[10]
  i2766.usePreservativeDynamicBatching = !!i2767[11]
  i2766.lightmapEncodingQuality = i2767[12]
  i2766.desiredColorSpace = i2767[13]
  var i2775 = i2767[14]
  var i2774 = []
  for(var i = 0; i < i2775.length; i += 1) {
    i2774.push( i2775[i + 0] );
  }
  i2766.allTags = i2774
  return i2766
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i2778 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i2779 = data
  i2778.name = i2779[0]
  i2778.value = i2779[1]
  return i2778
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i2782 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i2783 = data
  i2782.id = i2783[0]
  i2782.name = i2783[1]
  i2782.value = i2783[2]
  return i2782
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i2786 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i2787 = data
  i2786.id = i2787[0]
  i2786.name = i2787[1]
  return i2786
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i2788 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i2789 = data
  i2788.fixedDeltaTime = i2789[0]
  i2788.maximumDeltaTime = i2789[1]
  i2788.timeScale = i2789[2]
  i2788.maximumParticleTimestep = i2789[3]
  return i2788
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i2790 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i2791 = data
  i2790.gravity = new pc.Vec3( i2791[0], i2791[1], i2791[2] )
  i2790.defaultSolverIterations = i2791[3]
  i2790.bounceThreshold = i2791[4]
  i2790.autoSyncTransforms = !!i2791[5]
  i2790.autoSimulation = !!i2791[6]
  var i2793 = i2791[7]
  var i2792 = []
  for(var i = 0; i < i2793.length; i += 1) {
    i2792.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i2793[i + 0]) );
  }
  i2790.collisionMatrix = i2792
  return i2790
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i2796 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i2797 = data
  i2796.enabled = !!i2797[0]
  i2796.layerId = i2797[1]
  i2796.otherLayerId = i2797[2]
  return i2796
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i2798 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i2799 = data
  request.r(i2799[0], i2799[1], 0, i2798, 'material')
  i2798.gravity = new pc.Vec2( i2799[2], i2799[3] )
  i2798.positionIterations = i2799[4]
  i2798.velocityIterations = i2799[5]
  i2798.velocityThreshold = i2799[6]
  i2798.maxLinearCorrection = i2799[7]
  i2798.maxAngularCorrection = i2799[8]
  i2798.maxTranslationSpeed = i2799[9]
  i2798.maxRotationSpeed = i2799[10]
  i2798.baumgarteScale = i2799[11]
  i2798.baumgarteTOIScale = i2799[12]
  i2798.timeToSleep = i2799[13]
  i2798.linearSleepTolerance = i2799[14]
  i2798.angularSleepTolerance = i2799[15]
  i2798.defaultContactOffset = i2799[16]
  i2798.autoSimulation = !!i2799[17]
  i2798.queriesHitTriggers = !!i2799[18]
  i2798.queriesStartInColliders = !!i2799[19]
  i2798.callbacksOnDisable = !!i2799[20]
  i2798.reuseCollisionCallbacks = !!i2799[21]
  i2798.autoSyncTransforms = !!i2799[22]
  var i2801 = i2799[23]
  var i2800 = []
  for(var i = 0; i < i2801.length; i += 1) {
    i2800.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i2801[i + 0]) );
  }
  i2798.collisionMatrix = i2800
  return i2798
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i2804 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i2805 = data
  i2804.enabled = !!i2805[0]
  i2804.layerId = i2805[1]
  i2804.otherLayerId = i2805[2]
  return i2804
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i2806 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i2807 = data
  var i2809 = i2807[0]
  var i2808 = []
  for(var i = 0; i < i2809.length; i += 1) {
    i2808.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i2809[i + 0]) );
  }
  i2806.qualityLevels = i2808
  var i2811 = i2807[1]
  var i2810 = []
  for(var i = 0; i < i2811.length; i += 1) {
    i2810.push( i2811[i + 0] );
  }
  i2806.names = i2810
  i2806.shadows = i2807[2]
  i2806.anisotropicFiltering = i2807[3]
  i2806.antiAliasing = i2807[4]
  i2806.lodBias = i2807[5]
  i2806.shadowCascades = i2807[6]
  i2806.shadowDistance = i2807[7]
  i2806.shadowmaskMode = i2807[8]
  i2806.shadowProjection = i2807[9]
  i2806.shadowResolution = i2807[10]
  i2806.softParticles = !!i2807[11]
  i2806.softVegetation = !!i2807[12]
  i2806.activeColorSpace = i2807[13]
  i2806.desiredColorSpace = i2807[14]
  i2806.masterTextureLimit = i2807[15]
  i2806.maxQueuedFrames = i2807[16]
  i2806.particleRaycastBudget = i2807[17]
  i2806.pixelLightCount = i2807[18]
  i2806.realtimeReflectionProbes = !!i2807[19]
  i2806.shadowCascade2Split = i2807[20]
  i2806.shadowCascade4Split = new pc.Vec3( i2807[21], i2807[22], i2807[23] )
  i2806.streamingMipmapsActive = !!i2807[24]
  i2806.vSyncCount = i2807[25]
  i2806.asyncUploadBufferSize = i2807[26]
  i2806.asyncUploadTimeSlice = i2807[27]
  i2806.billboardsFaceCameraPosition = !!i2807[28]
  i2806.shadowNearPlaneOffset = i2807[29]
  i2806.streamingMipmapsMemoryBudget = i2807[30]
  i2806.maximumLODLevel = i2807[31]
  i2806.streamingMipmapsAddAllCameras = !!i2807[32]
  i2806.streamingMipmapsMaxLevelReduction = i2807[33]
  i2806.streamingMipmapsRenderersPerFrame = i2807[34]
  i2806.resolutionScalingFixedDPIFactor = i2807[35]
  i2806.streamingMipmapsMaxFileIORequests = i2807[36]
  i2806.currentQualityLevel = i2807[37]
  return i2806
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i2814 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i2815 = data
  request.r(i2815[0], i2815[1], 0, i2814, 'm_ObjectArgument')
  i2814.m_ObjectArgumentAssemblyTypeName = i2815[2]
  i2814.m_IntArgument = i2815[3]
  i2814.m_FloatArgument = i2815[4]
  i2814.m_StringArgument = i2815[5]
  i2814.m_BoolArgument = !!i2815[6]
  return i2814
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10,"graphicsFormat":11,"sRGBTexture":12,"desiredColorSpace":13,"wrapU":14,"wrapV":15},"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Components.Transform":{"position":0,"scale":3,"rotation":6},"Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer":{"color":0,"sprite":4,"flipX":6,"flipY":7,"drawMode":8,"size":9,"tileMode":11,"adaptiveModeThreshold":12,"maskInteraction":13,"spriteSortPoint":14,"enabled":15,"sharedMaterial":16,"sharedMaterials":18,"receiveShadows":19,"shadowCastingMode":20,"sortingLayerID":21,"sortingOrder":22,"lightmapIndex":23,"lightmapSceneIndex":24,"lightmapScaleOffset":25,"lightProbeUsage":29,"reflectionProbeUsage":30},"Luna.Unity.DTO.UnityEngine.Components.CircleCollider2D":{"radius":0,"enabled":1,"isTrigger":2,"usedByEffector":3,"density":4,"offset":5,"material":7},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Components.SortingGroup":{"sortingLayerIndex":0,"sortingOrder":1,"sortingLayerName":2,"enabled":3},"Luna.Unity.DTO.UnityEngine.Components.Rigidbody2D":{"bodyType":0,"material":1,"simulated":3,"useAutoMass":4,"mass":5,"drag":6,"angularDrag":7,"gravityScale":8,"collisionDetectionMode":9,"sleepMode":10,"constraints":11},"Luna.Unity.DTO.UnityEngine.Components.FixedJoint2D":{"dampingRatio":0,"frequency":1,"anchor":2,"connectedAnchor":4,"autoConfigureConnectedAnchor":6,"connectedBody":7,"breakForce":9,"breakTorque":10,"enableCollision":11,"enabled":12},"Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D":{"usedByComposite":0,"autoTiling":1,"size":2,"edgeRadius":4,"enabled":5,"isTrigger":6,"usedByEffector":7,"density":8,"offset":9,"material":11},"Luna.Unity.DTO.UnityEngine.Components.HingeJoint2D":{"useLimits":0,"limits":1,"useMotor":2,"motor":3,"anchor":4,"connectedAnchor":6,"autoConfigureConnectedAnchor":8,"connectedBody":9,"breakForce":11,"breakTorque":12,"enableCollision":13,"enabled":14},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"aspect":0,"orthographic":1,"orthographicSize":2,"backgroundColor":3,"nearClipPlane":7,"farClipPlane":8,"fieldOfView":9,"depth":10,"clearFlags":11,"cullingMask":12,"rect":13,"targetTexture":14,"usePhysicalProperties":16,"focalLength":17,"sensorSize":18,"lensShift":20,"gateFit":22,"commandBufferCount":23,"cameraType":24,"enabled":25},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"planeDistance":0,"referencePixelsPerUnit":1,"isFallbackOverlay":2,"renderMode":3,"renderOrder":4,"sortingLayerName":5,"sortingOrder":6,"scaleFactor":7,"worldCamera":8,"overrideSorting":10,"pixelPerfect":11,"targetDisplay":12,"overridePixelPerfect":13,"enabled":14},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Components.TargetJoint2D":{"autoConfigureTarget":0,"target":1,"anchor":3,"maxForce":5,"dampingRatio":6,"frequency":7,"connectedBody":8,"breakForce":10,"breakTorque":11,"enableCollision":12,"enabled":13},"Luna.Unity.DTO.UnityEngine.Components.AudioSource":{"clip":0,"outputAudioMixerGroup":2,"playOnAwake":4,"loop":5,"time":6,"volume":7,"pitch":8,"enabled":9},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"customReflection":36,"defaultReflection":38,"defaultReflectionMode":40,"defaultReflectionResolution":41,"sunLightObjectId":42,"pixelLightCount":43,"defaultReflectionHDR":44,"hasLightDataAsset":45,"hasManualGenerate":46},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2,"shadowMask":4},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"hasDepthOnlyPass":10,"isCreatedByShaderGraph":11,"disableBatching":12,"compiled":13},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"exportedForWebGl2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.AudioClip":{"name":0},"Luna.Unity.DTO.UnityEngine.Assets.Font":{"name":0,"ascent":1,"originalLineHeight":2,"fontSize":3,"characterInfo":4,"texture":5,"originalFontSize":7},"Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo":{"index":0,"advance":1,"bearing":2,"glyphWidth":3,"glyphHeight":4,"minX":5,"maxX":6,"minY":7,"maxY":8,"uvBottomLeftX":9,"uvBottomLeftY":10,"uvBottomRightX":11,"uvBottomRightY":12,"uvTopLeftX":13,"uvTopLeftY":14,"uvTopRightX":15,"uvTopRightY":16},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableStaticBatching":9,"enableDynamicBatching":10,"usePreservativeDynamicBatching":11,"lightmapEncodingQuality":12,"desiredColorSpace":13,"allTags":14},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37}}

Deserializers.requiredComponents = {"51":[52],"53":[52],"54":[52],"55":[52],"56":[52],"57":[52],"58":[59],"60":[23],"61":[62],"63":[62],"64":[62],"65":[62],"66":[62],"67":[62],"68":[12],"69":[12],"70":[12],"71":[12],"72":[12],"73":[12],"11":[12],"74":[12],"75":[12],"41":[12],"16":[12],"76":[12],"77":[12],"78":[23],"79":[80],"81":[82],"83":[82],"29":[28],"84":[2],"85":[23],"86":[87],"88":[28],"89":[32,28],"90":[80],"91":[32,28],"92":[28],"93":[28],"94":[80,28],"95":[28,32],"96":[97],"98":[97],"99":[97],"100":[28],"101":[28],"31":[29],"33":[32,28],"39":[28],"30":[29],"102":[28],"103":[28],"104":[28],"105":[28],"106":[28],"107":[28],"108":[28],"109":[28],"110":[28],"38":[32,28],"111":[28],"112":[28],"113":[28],"114":[28],"34":[32,28],"115":[28],"116":[26],"117":[26],"27":[26],"118":[26],"119":[23],"120":[23]}

Deserializers.types = ["UnityEngine.Shader","UnityEngine.Transform","UnityEngine.SpriteRenderer","UnityEngine.Sprite","UnityEngine.Material","UnityEngine.CircleCollider2D","UnityEngine.MonoBehaviour","BulletController","UnityEngine.AudioClip","UnityEngine.Rendering.SortingGroup","MonsterController","UnityEngine.HingeJoint2D","UnityEngine.Rigidbody2D","BalanceController","MonsterTrigger","GroundCheck","UnityEngine.FixedJoint2D","UnityEngine.BoxCollider2D","PlayerController","PlayerAttack","UnityEngine.GameObject","PlayerTrigger","BodyPiece","UnityEngine.Camera","UnityEngine.AudioListener","UnityEngine.EventSystems.UIBehaviour","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","UnityEngine.RectTransform","UnityEngine.Canvas","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","UnityEngine.CanvasRenderer","UnityEngine.UI.Image","UnityEngine.UI.Text","UnityEngine.Font","DG.Tweening.DOTweenAnimation","UnityEngine.UI.Button","UnityEngine.UI.RawImage","UnityEngine.UI.AspectRatioFitter","MonsterOptionController","UnityEngine.TargetJoint2D","HumanOptionController","UnityEngine.AudioSource","GameController","LayoutController","LunaController","UnityEngine.Texture2D","AudioController","PoolController","DG.Tweening.Core.DOTweenSettings","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.SkinnedMeshRenderer","UnityEngine.FlareLayer","UnityEngine.CharacterJoint","UnityEngine.Rigidbody","UnityEngine.ConfigurableJoint","UnityEngine.ConstantForce","UnityEngine.FixedJoint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.CompositeCollider2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.MeshRenderer","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","UnityEngine.U2D.Animation.SpriteSkin","UnityEngine.U2D.PixelPerfectCamera","UnityEngine.U2D.SpriteShapeController","UnityEngine.U2D.SpriteShapeRenderer","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text","TMPro.TextContainer","TMPro.TextMeshPro","TMPro.TextMeshProUGUI","Unity.VisualScripting.SceneVariables","Unity.VisualScripting.Variables","Unity.VisualScripting.ScriptMachine","Unity.VisualScripting.StateMachine","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.Mask","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RectMask2D","UnityEngine.UI.ScrollRect","UnityEngine.UI.Scrollbar","UnityEngine.UI.Slider","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster"]

Deserializers.unityVersion = "6000.0.78f1";

Deserializers.productName = "SSP_Luna-SSP_V03";

Deserializers.lunaInitializationTime = "08/17/2026 07:10:25";

Deserializers.lunaDaysRunning = "0.8";

Deserializers.lunaVersion = "7.2.0";

Deserializers.lunaSHA = "ea08d29afe2968efcb8d91d5624f033c6485cc68";

Deserializers.creativeName = "RSNM_V04_YenTTH_TamNTM";

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

Deserializers.runtimeAnalysisExcludedMethodsCount = "4442";

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

Deserializers.buildID = "54c89e16-d94b-4a29-a7d6-788509ba92d0";

Deserializers.runtimeInitializeOnLoadInfos = [[["Unity","PerformanceTesting","PerformanceTest","ResetStaticsOnLoad"],["UnityEngine","U2D","Animation","GpuDeformationSystem","CreateFallbackBuffer"],["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"],["UnityEngine","AI","NavMesh","ClearPreUpdateListeners"]],[["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"]],[],[["UnityEngine","Timeline","AnimatorBindingCache","ResetStaticsOnLoad"],["UnityEngine","Timeline","TrackAsset","ResetStaticsOnLoad"],["UnityEngine","Timeline","AnimationPreviewUtilities","ResetStaticsOnLoad"],["Unity","PerformanceTesting","Data","RunSettings","ResetStaticsOnLoad"],["Unity","PerformanceTesting","PlayerCallbacks","ResetStaticsOnLoad"]]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

