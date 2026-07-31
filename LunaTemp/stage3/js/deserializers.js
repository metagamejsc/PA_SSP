var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i542 = root || request.c( 'UnityEngine.JointSpring' )
  var i543 = data
  i542.spring = i543[0]
  i542.damper = i543[1]
  i542.targetPosition = i543[2]
  return i542
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i544 = root || request.c( 'UnityEngine.JointMotor' )
  var i545 = data
  i544.m_TargetVelocity = i545[0]
  i544.m_Force = i545[1]
  i544.m_FreeSpin = i545[2]
  return i544
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i546 = root || request.c( 'UnityEngine.JointLimits' )
  var i547 = data
  i546.m_Min = i547[0]
  i546.m_Max = i547[1]
  i546.m_Bounciness = i547[2]
  i546.m_BounceMinVelocity = i547[3]
  i546.m_ContactDistance = i547[4]
  i546.minBounce = i547[5]
  i546.maxBounce = i547[6]
  return i546
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i548 = root || request.c( 'UnityEngine.JointDrive' )
  var i549 = data
  i548.m_PositionSpring = i549[0]
  i548.m_PositionDamper = i549[1]
  i548.m_MaximumForce = i549[2]
  i548.m_UseAcceleration = i549[3]
  return i548
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i550 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i551 = data
  i550.m_Spring = i551[0]
  i550.m_Damper = i551[1]
  return i550
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i552 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i553 = data
  i552.m_Limit = i553[0]
  i552.m_Bounciness = i553[1]
  i552.m_ContactDistance = i553[2]
  return i552
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i554 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i555 = data
  i554.m_ExtremumSlip = i555[0]
  i554.m_ExtremumValue = i555[1]
  i554.m_AsymptoteSlip = i555[2]
  i554.m_AsymptoteValue = i555[3]
  i554.m_Stiffness = i555[4]
  return i554
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i556 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i557 = data
  i556.m_LowerAngle = i557[0]
  i556.m_UpperAngle = i557[1]
  return i556
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i558 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i559 = data
  i558.m_MotorSpeed = i559[0]
  i558.m_MaximumMotorTorque = i559[1]
  return i558
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i560 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i561 = data
  i560.m_DampingRatio = i561[0]
  i560.m_Frequency = i561[1]
  i560.m_Angle = i561[2]
  return i560
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i562 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i563 = data
  i562.m_LowerTranslation = i563[0]
  i562.m_UpperTranslation = i563[1]
  return i562
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i564 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i565 = data
  i564.name = i565[0]
  i564.width = i565[1]
  i564.height = i565[2]
  i564.mipmapCount = i565[3]
  i564.anisoLevel = i565[4]
  i564.filterMode = i565[5]
  i564.hdr = !!i565[6]
  i564.format = i565[7]
  i564.wrapMode = i565[8]
  i564.alphaIsTransparency = !!i565[9]
  i564.alphaSource = i565[10]
  i564.graphicsFormat = i565[11]
  i564.sRGBTexture = !!i565[12]
  i564.desiredColorSpace = i565[13]
  i564.wrapU = i565[14]
  i564.wrapV = i565[15]
  return i564
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i566 = root || new pc.UnityMaterial()
  var i567 = data
  i566.name = i567[0]
  request.r(i567[1], i567[2], 0, i566, 'shader')
  i566.renderQueue = i567[3]
  i566.enableInstancing = !!i567[4]
  var i569 = i567[5]
  var i568 = []
  for(var i = 0; i < i569.length; i += 1) {
    i568.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i569[i + 0]) );
  }
  i566.floatParameters = i568
  var i571 = i567[6]
  var i570 = []
  for(var i = 0; i < i571.length; i += 1) {
    i570.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i571[i + 0]) );
  }
  i566.colorParameters = i570
  var i573 = i567[7]
  var i572 = []
  for(var i = 0; i < i573.length; i += 1) {
    i572.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i573[i + 0]) );
  }
  i566.vectorParameters = i572
  var i575 = i567[8]
  var i574 = []
  for(var i = 0; i < i575.length; i += 1) {
    i574.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i575[i + 0]) );
  }
  i566.textureParameters = i574
  var i577 = i567[9]
  var i576 = []
  for(var i = 0; i < i577.length; i += 1) {
    i576.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i577[i + 0]) );
  }
  i566.materialFlags = i576
  return i566
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i580 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i581 = data
  i580.name = i581[0]
  i580.value = i581[1]
  return i580
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i584 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i585 = data
  i584.name = i585[0]
  i584.value = new pc.Color(i585[1], i585[2], i585[3], i585[4])
  return i584
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i588 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i589 = data
  i588.name = i589[0]
  i588.value = new pc.Vec4( i589[1], i589[2], i589[3], i589[4] )
  return i588
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i592 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i593 = data
  i592.name = i593[0]
  request.r(i593[1], i593[2], 0, i592, 'value')
  return i592
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i596 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i597 = data
  i596.name = i597[0]
  i596.enabled = !!i597[1]
  return i596
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i598 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i599 = data
  i598.position = new pc.Vec3( i599[0], i599[1], i599[2] )
  i598.scale = new pc.Vec3( i599[3], i599[4], i599[5] )
  i598.rotation = new pc.Quat(i599[6], i599[7], i599[8], i599[9])
  return i598
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer"] = function (request, data, root) {
  var i600 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer' )
  var i601 = data
  i600.color = new pc.Color(i601[0], i601[1], i601[2], i601[3])
  request.r(i601[4], i601[5], 0, i600, 'sprite')
  i600.flipX = !!i601[6]
  i600.flipY = !!i601[7]
  i600.drawMode = i601[8]
  i600.size = new pc.Vec2( i601[9], i601[10] )
  i600.tileMode = i601[11]
  i600.adaptiveModeThreshold = i601[12]
  i600.maskInteraction = i601[13]
  i600.spriteSortPoint = i601[14]
  i600.enabled = !!i601[15]
  request.r(i601[16], i601[17], 0, i600, 'sharedMaterial')
  var i603 = i601[18]
  var i602 = []
  for(var i = 0; i < i603.length; i += 2) {
  request.r(i603[i + 0], i603[i + 1], 2, i602, '')
  }
  i600.sharedMaterials = i602
  i600.receiveShadows = !!i601[19]
  i600.shadowCastingMode = i601[20]
  i600.sortingLayerID = i601[21]
  i600.sortingOrder = i601[22]
  i600.lightmapIndex = i601[23]
  i600.lightmapSceneIndex = i601[24]
  i600.lightmapScaleOffset = new pc.Vec4( i601[25], i601[26], i601[27], i601[28] )
  i600.lightProbeUsage = i601[29]
  i600.reflectionProbeUsage = i601[30]
  return i600
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CircleCollider2D"] = function (request, data, root) {
  var i606 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CircleCollider2D' )
  var i607 = data
  i606.radius = i607[0]
  i606.enabled = !!i607[1]
  i606.isTrigger = !!i607[2]
  i606.usedByEffector = !!i607[3]
  i606.density = i607[4]
  i606.offset = new pc.Vec2( i607[5], i607[6] )
  request.r(i607[7], i607[8], 0, i606, 'material')
  return i606
}

Deserializers["BulletController"] = function (request, data, root) {
  var i608 = root || request.c( 'BulletController' )
  var i609 = data
  i608.speed = i609[0]
  i608.damage = i609[1]
  request.r(i609[2], i609[3], 0, i608, 'hitMonsterSound')
  request.r(i609[4], i609[5], 0, i608, 'hitSound')
  i608.lifeTime = i609[6]
  i608.hit = !!i609[7]
  return i608
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i610 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i611 = data
  i610.name = i611[0]
  i610.tagId = i611[1]
  i610.enabled = !!i611[2]
  i610.isStatic = !!i611[3]
  i610.layer = i611[4]
  return i610
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D"] = function (request, data, root) {
  var i612 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D' )
  var i613 = data
  i612.usedByComposite = !!i613[0]
  i612.autoTiling = !!i613[1]
  i612.size = new pc.Vec2( i613[2], i613[3] )
  i612.edgeRadius = i613[4]
  i612.enabled = !!i613[5]
  i612.isTrigger = !!i613[6]
  i612.usedByEffector = !!i613[7]
  i612.density = i613[8]
  i612.offset = new pc.Vec2( i613[9], i613[10] )
  request.r(i613[11], i613[12], 0, i612, 'material')
  return i612
}

Deserializers["KunaiController"] = function (request, data, root) {
  var i614 = root || request.c( 'KunaiController' )
  var i615 = data
  i614.damage = i615[0]
  request.r(i615[1], i615[2], 0, i614, 'hitMonsterSound')
  request.r(i615[3], i615[4], 0, i614, 'hitSound')
  i614.lifeTime = i615[5]
  i614.rotateSpeed = i615[6]
  i614.moveSpeed = i615[7]
  i614.hit = !!i615[8]
  return i614
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Rigidbody2D"] = function (request, data, root) {
  var i616 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Rigidbody2D' )
  var i617 = data
  i616.bodyType = i617[0]
  request.r(i617[1], i617[2], 0, i616, 'material')
  i616.simulated = !!i617[3]
  i616.useAutoMass = !!i617[4]
  i616.mass = i617[5]
  i616.drag = i617[6]
  i616.angularDrag = i617[7]
  i616.gravityScale = i617[8]
  i616.collisionDetectionMode = i617[9]
  i616.sleepMode = i617[10]
  i616.constraints = i617[11]
  return i616
}

Deserializers["BombController"] = function (request, data, root) {
  var i618 = root || request.c( 'BombController' )
  var i619 = data
  i618.damage = i619[0]
  i618.layer = UnityEngine.LayerMask.FromIntegerValue( i619[1] )
  request.r(i619[2], i619[3], 0, i618, 'startSound')
  request.r(i619[4], i619[5], 0, i618, 'actionSound')
  i618.delay = i619[6]
  request.r(i619[7], i619[8], 0, i618, 'anim')
  request.r(i619[9], i619[10], 0, i618, 'vfx1')
  request.r(i619[11], i619[12], 0, i618, 'vfx2')
  i618.scale = i619[13]
  i618.radius = i619[14]
  return i618
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Animator"] = function (request, data, root) {
  var i620 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Animator' )
  var i621 = data
  request.r(i621[0], i621[1], 0, i620, 'animatorController')
  request.r(i621[2], i621[3], 0, i620, 'avatar')
  i620.updateMode = i621[4]
  i620.hasTransformHierarchy = !!i621[5]
  i620.applyRootMotion = !!i621[6]
  var i623 = i621[7]
  var i622 = []
  for(var i = 0; i < i623.length; i += 2) {
  request.r(i623[i + 0], i623[i + 1], 2, i622, '')
  }
  i620.humanBones = i622
  i620.enabled = !!i621[8]
  return i620
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystem"] = function (request, data, root) {
  var i626 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystem' )
  var i627 = data
  i626.main = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule', i627[0], i626.main)
  i626.colorBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule', i627[1], i626.colorBySpeed)
  i626.colorOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule', i627[2], i626.colorOverLifetime)
  i626.emission = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule', i627[3], i626.emission)
  i626.rotationBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule', i627[4], i626.rotationBySpeed)
  i626.rotationOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule', i627[5], i626.rotationOverLifetime)
  i626.shape = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule', i627[6], i626.shape)
  i626.sizeBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule', i627[7], i626.sizeBySpeed)
  i626.sizeOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule', i627[8], i626.sizeOverLifetime)
  i626.textureSheetAnimation = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule', i627[9], i626.textureSheetAnimation)
  i626.velocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule', i627[10], i626.velocityOverLifetime)
  i626.noise = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule', i627[11], i626.noise)
  i626.inheritVelocity = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule', i627[12], i626.inheritVelocity)
  i626.forceOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule', i627[13], i626.forceOverLifetime)
  i626.limitVelocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule', i627[14], i626.limitVelocityOverLifetime)
  i626.useAutoRandomSeed = !!i627[15]
  i626.randomSeed = i627[16]
  return i626
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule"] = function (request, data, root) {
  var i628 = root || new pc.ParticleSystemMain()
  var i629 = data
  i628.duration = i629[0]
  i628.loop = !!i629[1]
  i628.prewarm = !!i629[2]
  i628.startDelay = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i629[3], i628.startDelay)
  i628.startLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i629[4], i628.startLifetime)
  i628.startSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i629[5], i628.startSpeed)
  i628.startSize3D = !!i629[6]
  i628.startSizeX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i629[7], i628.startSizeX)
  i628.startSizeY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i629[8], i628.startSizeY)
  i628.startSizeZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i629[9], i628.startSizeZ)
  i628.startRotation3D = !!i629[10]
  i628.startRotationX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i629[11], i628.startRotationX)
  i628.startRotationY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i629[12], i628.startRotationY)
  i628.startRotationZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i629[13], i628.startRotationZ)
  i628.startColor = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i629[14], i628.startColor)
  i628.gravityModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i629[15], i628.gravityModifier)
  i628.simulationSpace = i629[16]
  request.r(i629[17], i629[18], 0, i628, 'customSimulationSpace')
  i628.simulationSpeed = i629[19]
  i628.useUnscaledTime = !!i629[20]
  i628.scalingMode = i629[21]
  i628.playOnAwake = !!i629[22]
  i628.maxParticles = i629[23]
  i628.emitterVelocityMode = i629[24]
  i628.stopAction = i629[25]
  return i628
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve"] = function (request, data, root) {
  var i630 = root || new pc.MinMaxCurve()
  var i631 = data
  i630.mode = i631[0]
  i630.curveMin = new pc.AnimationCurve( { keys_flow: i631[1] } )
  i630.curveMax = new pc.AnimationCurve( { keys_flow: i631[2] } )
  i630.curveMultiplier = i631[3]
  i630.constantMin = i631[4]
  i630.constantMax = i631[5]
  return i630
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient"] = function (request, data, root) {
  var i632 = root || new pc.MinMaxGradient()
  var i633 = data
  i632.mode = i633[0]
  i632.gradientMin = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i633[1], i632.gradientMin)
  i632.gradientMax = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i633[2], i632.gradientMax)
  i632.colorMin = new pc.Color(i633[3], i633[4], i633[5], i633[6])
  i632.colorMax = new pc.Color(i633[7], i633[8], i633[9], i633[10])
  return i632
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient"] = function (request, data, root) {
  var i634 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient' )
  var i635 = data
  i634.mode = i635[0]
  var i637 = i635[1]
  var i636 = []
  for(var i = 0; i < i637.length; i += 1) {
    i636.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey', i637[i + 0]) );
  }
  i634.colorKeys = i636
  var i639 = i635[2]
  var i638 = []
  for(var i = 0; i < i639.length; i += 1) {
    i638.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey', i639[i + 0]) );
  }
  i634.alphaKeys = i638
  return i634
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule"] = function (request, data, root) {
  var i640 = root || new pc.ParticleSystemColorBySpeed()
  var i641 = data
  i640.enabled = !!i641[0]
  i640.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i641[1], i640.color)
  i640.range = new pc.Vec2( i641[2], i641[3] )
  return i640
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey"] = function (request, data, root) {
  var i644 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey' )
  var i645 = data
  i644.color = new pc.Color(i645[0], i645[1], i645[2], i645[3])
  i644.time = i645[4]
  return i644
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey"] = function (request, data, root) {
  var i648 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey' )
  var i649 = data
  i648.alpha = i649[0]
  i648.time = i649[1]
  return i648
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule"] = function (request, data, root) {
  var i650 = root || new pc.ParticleSystemColorOverLifetime()
  var i651 = data
  i650.enabled = !!i651[0]
  i650.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i651[1], i650.color)
  return i650
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule"] = function (request, data, root) {
  var i652 = root || new pc.ParticleSystemEmitter()
  var i653 = data
  i652.enabled = !!i653[0]
  i652.rateOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i653[1], i652.rateOverTime)
  i652.rateOverDistance = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i653[2], i652.rateOverDistance)
  var i655 = i653[3]
  var i654 = []
  for(var i = 0; i < i655.length; i += 1) {
    i654.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst', i655[i + 0]) );
  }
  i652.bursts = i654
  return i652
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst"] = function (request, data, root) {
  var i658 = root || new pc.ParticleSystemBurst()
  var i659 = data
  i658.count = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i659[0], i658.count)
  i658.cycleCount = i659[1]
  i658.minCount = i659[2]
  i658.maxCount = i659[3]
  i658.repeatInterval = i659[4]
  i658.time = i659[5]
  return i658
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule"] = function (request, data, root) {
  var i660 = root || new pc.ParticleSystemRotationBySpeed()
  var i661 = data
  i660.enabled = !!i661[0]
  i660.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i661[1], i660.x)
  i660.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i661[2], i660.y)
  i660.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i661[3], i660.z)
  i660.separateAxes = !!i661[4]
  i660.range = new pc.Vec2( i661[5], i661[6] )
  return i660
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule"] = function (request, data, root) {
  var i662 = root || new pc.ParticleSystemRotationOverLifetime()
  var i663 = data
  i662.enabled = !!i663[0]
  i662.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i663[1], i662.x)
  i662.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i663[2], i662.y)
  i662.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i663[3], i662.z)
  i662.separateAxes = !!i663[4]
  return i662
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule"] = function (request, data, root) {
  var i664 = root || new pc.ParticleSystemShape()
  var i665 = data
  i664.enabled = !!i665[0]
  i664.shapeType = i665[1]
  i664.randomDirectionAmount = i665[2]
  i664.sphericalDirectionAmount = i665[3]
  i664.randomPositionAmount = i665[4]
  i664.alignToDirection = !!i665[5]
  i664.radius = i665[6]
  i664.radiusMode = i665[7]
  i664.radiusSpread = i665[8]
  i664.radiusSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i665[9], i664.radiusSpeed)
  i664.radiusThickness = i665[10]
  i664.angle = i665[11]
  i664.length = i665[12]
  i664.boxThickness = new pc.Vec3( i665[13], i665[14], i665[15] )
  i664.meshShapeType = i665[16]
  request.r(i665[17], i665[18], 0, i664, 'mesh')
  request.r(i665[19], i665[20], 0, i664, 'meshRenderer')
  request.r(i665[21], i665[22], 0, i664, 'skinnedMeshRenderer')
  i664.useMeshMaterialIndex = !!i665[23]
  i664.meshMaterialIndex = i665[24]
  i664.useMeshColors = !!i665[25]
  i664.normalOffset = i665[26]
  i664.arc = i665[27]
  i664.arcMode = i665[28]
  i664.arcSpread = i665[29]
  i664.arcSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i665[30], i664.arcSpeed)
  i664.donutRadius = i665[31]
  i664.position = new pc.Vec3( i665[32], i665[33], i665[34] )
  i664.rotation = new pc.Vec3( i665[35], i665[36], i665[37] )
  i664.scale = new pc.Vec3( i665[38], i665[39], i665[40] )
  return i664
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule"] = function (request, data, root) {
  var i666 = root || new pc.ParticleSystemSizeBySpeed()
  var i667 = data
  i666.enabled = !!i667[0]
  i666.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i667[1], i666.x)
  i666.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i667[2], i666.y)
  i666.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i667[3], i666.z)
  i666.separateAxes = !!i667[4]
  i666.range = new pc.Vec2( i667[5], i667[6] )
  return i666
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule"] = function (request, data, root) {
  var i668 = root || new pc.ParticleSystemSizeOverLifetime()
  var i669 = data
  i668.enabled = !!i669[0]
  i668.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i669[1], i668.x)
  i668.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i669[2], i668.y)
  i668.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i669[3], i668.z)
  i668.separateAxes = !!i669[4]
  return i668
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule"] = function (request, data, root) {
  var i670 = root || new pc.ParticleSystemTextureSheetAnimation()
  var i671 = data
  i670.enabled = !!i671[0]
  i670.mode = i671[1]
  i670.animation = i671[2]
  i670.numTilesX = i671[3]
  i670.numTilesY = i671[4]
  i670.useRandomRow = !!i671[5]
  i670.frameOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i671[6], i670.frameOverTime)
  i670.startFrame = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i671[7], i670.startFrame)
  i670.cycleCount = i671[8]
  i670.rowIndex = i671[9]
  i670.flipU = i671[10]
  i670.flipV = i671[11]
  i670.spriteCount = i671[12]
  var i673 = i671[13]
  var i672 = []
  for(var i = 0; i < i673.length; i += 2) {
  request.r(i673[i + 0], i673[i + 1], 2, i672, '')
  }
  i670.sprites = i672
  return i670
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule"] = function (request, data, root) {
  var i676 = root || new pc.ParticleSystemVelocityOverLifetime()
  var i677 = data
  i676.enabled = !!i677[0]
  i676.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i677[1], i676.x)
  i676.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i677[2], i676.y)
  i676.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i677[3], i676.z)
  i676.radial = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i677[4], i676.radial)
  i676.speedModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i677[5], i676.speedModifier)
  i676.space = i677[6]
  i676.orbitalX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i677[7], i676.orbitalX)
  i676.orbitalY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i677[8], i676.orbitalY)
  i676.orbitalZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i677[9], i676.orbitalZ)
  i676.orbitalOffsetX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i677[10], i676.orbitalOffsetX)
  i676.orbitalOffsetY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i677[11], i676.orbitalOffsetY)
  i676.orbitalOffsetZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i677[12], i676.orbitalOffsetZ)
  return i676
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule"] = function (request, data, root) {
  var i678 = root || new pc.ParticleSystemNoise()
  var i679 = data
  i678.enabled = !!i679[0]
  i678.separateAxes = !!i679[1]
  i678.strengthX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i679[2], i678.strengthX)
  i678.strengthY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i679[3], i678.strengthY)
  i678.strengthZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i679[4], i678.strengthZ)
  i678.frequency = i679[5]
  i678.damping = !!i679[6]
  i678.octaveCount = i679[7]
  i678.octaveMultiplier = i679[8]
  i678.octaveScale = i679[9]
  i678.quality = i679[10]
  i678.scrollSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i679[11], i678.scrollSpeed)
  i678.scrollSpeedMultiplier = i679[12]
  i678.remapEnabled = !!i679[13]
  i678.remapX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i679[14], i678.remapX)
  i678.remapY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i679[15], i678.remapY)
  i678.remapZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i679[16], i678.remapZ)
  i678.positionAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i679[17], i678.positionAmount)
  i678.rotationAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i679[18], i678.rotationAmount)
  i678.sizeAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i679[19], i678.sizeAmount)
  return i678
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule"] = function (request, data, root) {
  var i680 = root || new pc.ParticleSystemInheritVelocity()
  var i681 = data
  i680.enabled = !!i681[0]
  i680.mode = i681[1]
  i680.curve = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i681[2], i680.curve)
  return i680
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule"] = function (request, data, root) {
  var i682 = root || new pc.ParticleSystemForceOverLifetime()
  var i683 = data
  i682.enabled = !!i683[0]
  i682.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i683[1], i682.x)
  i682.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i683[2], i682.y)
  i682.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i683[3], i682.z)
  i682.space = i683[4]
  i682.randomized = !!i683[5]
  return i682
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule"] = function (request, data, root) {
  var i684 = root || new pc.ParticleSystemLimitVelocityOverLifetime()
  var i685 = data
  i684.enabled = !!i685[0]
  i684.limit = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i685[1], i684.limit)
  i684.limitX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i685[2], i684.limitX)
  i684.limitY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i685[3], i684.limitY)
  i684.limitZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i685[4], i684.limitZ)
  i684.dampen = i685[5]
  i684.separateAxes = !!i685[6]
  i684.space = i685[7]
  i684.drag = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i685[8], i684.drag)
  i684.multiplyDragByParticleSize = !!i685[9]
  i684.multiplyDragByParticleVelocity = !!i685[10]
  return i684
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer"] = function (request, data, root) {
  var i686 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer' )
  var i687 = data
  request.r(i687[0], i687[1], 0, i686, 'mesh')
  i686.meshCount = i687[2]
  i686.activeVertexStreamsCount = i687[3]
  i686.alignment = i687[4]
  i686.renderMode = i687[5]
  i686.sortMode = i687[6]
  i686.lengthScale = i687[7]
  i686.velocityScale = i687[8]
  i686.cameraVelocityScale = i687[9]
  i686.normalDirection = i687[10]
  i686.sortingFudge = i687[11]
  i686.minParticleSize = i687[12]
  i686.maxParticleSize = i687[13]
  i686.pivot = new pc.Vec3( i687[14], i687[15], i687[16] )
  request.r(i687[17], i687[18], 0, i686, 'trailMaterial')
  i686.applyActiveColorSpace = !!i687[19]
  i686.enabled = !!i687[20]
  request.r(i687[21], i687[22], 0, i686, 'sharedMaterial')
  var i689 = i687[23]
  var i688 = []
  for(var i = 0; i < i689.length; i += 2) {
  request.r(i689[i + 0], i689[i + 1], 2, i688, '')
  }
  i686.sharedMaterials = i688
  i686.receiveShadows = !!i687[24]
  i686.shadowCastingMode = i687[25]
  i686.sortingLayerID = i687[26]
  i686.sortingOrder = i687[27]
  i686.lightmapIndex = i687[28]
  i686.lightmapSceneIndex = i687[29]
  i686.lightmapScaleOffset = new pc.Vec4( i687[30], i687[31], i687[32], i687[33] )
  i686.lightProbeUsage = i687[34]
  i686.reflectionProbeUsage = i687[35]
  return i686
}

Deserializers["BlockController"] = function (request, data, root) {
  var i690 = root || request.c( 'BlockController' )
  var i691 = data
  i690.maxHP = i691[0]
  i690.currentHP = i691[1]
  i690.isBreak = !!i691[2]
  i690.numMonster = i691[3]
  request.r(i691[4], i691[5], 0, i690, 'hitSFX')
  request.r(i691[6], i691[7], 0, i690, 'breakVFX')
  request.r(i691[8], i691[9], 0, i690, 'breakSFX')
  return i690
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh"] = function (request, data, root) {
  var i692 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh' )
  var i693 = data
  i692.name = i693[0]
  i692.halfPrecision = !!i693[1]
  i692.useSimplification = !!i693[2]
  i692.useUInt32IndexFormat = !!i693[3]
  i692.vertexCount = i693[4]
  i692.aabb = i693[5]
  var i695 = i693[6]
  var i694 = []
  for(var i = 0; i < i695.length; i += 1) {
    i694.push( !!i695[i + 0] );
  }
  i692.streams = i694
  i692.vertices = i693[7]
  var i697 = i693[8]
  var i696 = []
  for(var i = 0; i < i697.length; i += 1) {
    i696.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh', i697[i + 0]) );
  }
  i692.subMeshes = i696
  var i699 = i693[9]
  var i698 = []
  for(var i = 0; i < i699.length; i += 16) {
    i698.push( new pc.Mat4().setData(i699[i + 0], i699[i + 1], i699[i + 2], i699[i + 3],  i699[i + 4], i699[i + 5], i699[i + 6], i699[i + 7],  i699[i + 8], i699[i + 9], i699[i + 10], i699[i + 11],  i699[i + 12], i699[i + 13], i699[i + 14], i699[i + 15]) );
  }
  i692.bindposes = i698
  var i701 = i693[10]
  var i700 = []
  for(var i = 0; i < i701.length; i += 1) {
    i700.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape', i701[i + 0]) );
  }
  i692.blendShapes = i700
  return i692
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh"] = function (request, data, root) {
  var i706 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh' )
  var i707 = data
  i706.triangles = i707[0]
  return i706
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape"] = function (request, data, root) {
  var i712 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape' )
  var i713 = data
  i712.name = i713[0]
  var i715 = i713[1]
  var i714 = []
  for(var i = 0; i < i715.length; i += 1) {
    i714.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame', i715[i + 0]) );
  }
  i712.frames = i714
  return i712
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SortingGroup"] = function (request, data, root) {
  var i716 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SortingGroup' )
  var i717 = data
  i716.sortingLayerIndex = i717[0]
  i716.sortingOrder = i717[1]
  i716.sortingLayerName = i717[2]
  i716.enabled = !!i717[3]
  return i716
}

Deserializers["MonsterController"] = function (request, data, root) {
  var i718 = root || request.c( 'MonsterController' )
  var i719 = data
  i718.maxHP = i719[0]
  i718.currentHP = i719[1]
  var i721 = i719[2]
  var i720 = new (System.Collections.Generic.List$1(Bridge.ns('Piece')))
  for(var i = 0; i < i721.length; i += 1) {
    i720.add(request.d('Piece', i721[i + 0]));
  }
  i718.pieces = i720
  request.r(i719[3], i719[4], 0, i718, 'deadSFX')
  i718.maxForce = new pc.Vec2( i719[5], i719[6] )
  i718.minForce = new pc.Vec2( i719[7], i719[8] )
  request.r(i719[9], i719[10], 0, i718, 'balance')
  i718.isDead = !!i719[11]
  i718.speed = i719[12]
  request.r(i719[13], i719[14], 0, i718, 'body')
  request.r(i719[15], i719[16], 0, i718, 'leftHand')
  request.r(i719[17], i719[18], 0, i718, 'rightHand')
  request.r(i719[19], i719[20], 0, i718, 'leftLeg')
  request.r(i719[21], i719[22], 0, i718, 'rightLeg')
  return i718
}

Deserializers["Piece"] = function (request, data, root) {
  var i724 = root || request.c( 'Piece' )
  var i725 = data
  request.r(i725[0], i725[1], 0, i724, 'Joint')
  request.r(i725[2], i725[3], 0, i724, 'Rb')
  return i724
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.HingeJoint2D"] = function (request, data, root) {
  var i726 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.HingeJoint2D' )
  var i727 = data
  i726.useLimits = !!i727[0]
  i726.limits = request.d('UnityEngine.JointAngleLimits2D', i727[1], i726.limits)
  i726.useMotor = !!i727[2]
  i726.motor = request.d('UnityEngine.JointMotor2D', i727[3], i726.motor)
  i726.anchor = new pc.Vec2( i727[4], i727[5] )
  i726.connectedAnchor = new pc.Vec2( i727[6], i727[7] )
  i726.autoConfigureConnectedAnchor = !!i727[8]
  request.r(i727[9], i727[10], 0, i726, 'connectedBody')
  i726.breakForce = i727[11]
  i726.breakTorque = i727[12]
  i726.enableCollision = !!i727[13]
  i726.enabled = !!i727[14]
  return i726
}

Deserializers["BalanceController"] = function (request, data, root) {
  var i728 = root || request.c( 'BalanceController' )
  var i729 = data
  i728.targetRotation = i729[0]
  i728.force = i729[1]
  return i728
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i730 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i731 = data
  i730.name = i731[0]
  i730.index = i731[1]
  i730.startup = !!i731[2]
  return i730
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i732 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i733 = data
  i732.aspect = i733[0]
  i732.orthographic = !!i733[1]
  i732.orthographicSize = i733[2]
  i732.backgroundColor = new pc.Color(i733[3], i733[4], i733[5], i733[6])
  i732.nearClipPlane = i733[7]
  i732.farClipPlane = i733[8]
  i732.fieldOfView = i733[9]
  i732.depth = i733[10]
  i732.clearFlags = i733[11]
  i732.cullingMask = i733[12]
  i732.rect = i733[13]
  request.r(i733[14], i733[15], 0, i732, 'targetTexture')
  i732.usePhysicalProperties = !!i733[16]
  i732.focalLength = i733[17]
  i732.sensorSize = new pc.Vec2( i733[18], i733[19] )
  i732.lensShift = new pc.Vec2( i733[20], i733[21] )
  i732.gateFit = i733[22]
  i732.commandBufferCount = i733[23]
  i732.cameraType = i733[24]
  i732.enabled = !!i733[25]
  return i732
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i734 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i735 = data
  request.r(i735[0], i735[1], 0, i734, 'm_FirstSelected')
  i734.m_sendNavigationEvents = !!i735[2]
  i734.m_DragThreshold = i735[3]
  return i734
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i736 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i737 = data
  i736.m_HorizontalAxis = i737[0]
  i736.m_VerticalAxis = i737[1]
  i736.m_SubmitButton = i737[2]
  i736.m_CancelButton = i737[3]
  i736.m_InputActionsPerSecond = i737[4]
  i736.m_RepeatDelay = i737[5]
  i736.m_ForceModuleActive = !!i737[6]
  i736.m_SendPointerHoverToParent = !!i737[7]
  return i736
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i738 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i739 = data
  i738.pivot = new pc.Vec2( i739[0], i739[1] )
  i738.anchorMin = new pc.Vec2( i739[2], i739[3] )
  i738.anchorMax = new pc.Vec2( i739[4], i739[5] )
  i738.sizeDelta = new pc.Vec2( i739[6], i739[7] )
  i738.anchoredPosition3D = new pc.Vec3( i739[8], i739[9], i739[10] )
  i738.rotation = new pc.Quat(i739[11], i739[12], i739[13], i739[14])
  i738.scale = new pc.Vec3( i739[15], i739[16], i739[17] )
  return i738
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i740 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i741 = data
  i740.planeDistance = i741[0]
  i740.referencePixelsPerUnit = i741[1]
  i740.isFallbackOverlay = !!i741[2]
  i740.renderMode = i741[3]
  i740.renderOrder = i741[4]
  i740.sortingLayerName = i741[5]
  i740.sortingOrder = i741[6]
  i740.scaleFactor = i741[7]
  request.r(i741[8], i741[9], 0, i740, 'worldCamera')
  i740.overrideSorting = !!i741[10]
  i740.pixelPerfect = !!i741[11]
  i740.targetDisplay = i741[12]
  i740.overridePixelPerfect = !!i741[13]
  i740.enabled = !!i741[14]
  return i740
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i742 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i743 = data
  i742.m_UiScaleMode = i743[0]
  i742.m_ReferencePixelsPerUnit = i743[1]
  i742.m_ScaleFactor = i743[2]
  i742.m_ReferenceResolution = new pc.Vec2( i743[3], i743[4] )
  i742.m_ScreenMatchMode = i743[5]
  i742.m_MatchWidthOrHeight = i743[6]
  i742.m_PhysicalUnit = i743[7]
  i742.m_FallbackScreenDPI = i743[8]
  i742.m_DefaultSpriteDPI = i743[9]
  i742.m_DynamicPixelsPerUnit = i743[10]
  i742.m_PresetInfoIsWorld = !!i743[11]
  return i742
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i744 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i745 = data
  i744.m_IgnoreReversedGraphics = !!i745[0]
  i744.m_BlockingObjects = i745[1]
  i744.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i745[2] )
  return i744
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i746 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i747 = data
  i746.cullTransparentMesh = !!i747[0]
  return i746
}

Deserializers["UnityEngine.UI.RawImage"] = function (request, data, root) {
  var i748 = root || request.c( 'UnityEngine.UI.RawImage' )
  var i749 = data
  request.r(i749[0], i749[1], 0, i748, 'm_Texture')
  i748.m_UVRect = UnityEngine.Rect.MinMaxRect(i749[2], i749[3], i749[4], i749[5])
  request.r(i749[6], i749[7], 0, i748, 'm_Material')
  i748.m_Maskable = !!i749[8]
  i748.m_Color = new pc.Color(i749[9], i749[10], i749[11], i749[12])
  i748.m_RaycastTarget = !!i749[13]
  i748.m_RaycastPadding = new pc.Vec4( i749[14], i749[15], i749[16], i749[17] )
  return i748
}

Deserializers["UnityEngine.UI.AspectRatioFitter"] = function (request, data, root) {
  var i750 = root || request.c( 'UnityEngine.UI.AspectRatioFitter' )
  var i751 = data
  i750.m_AspectMode = i751[0]
  i750.m_AspectRatio = i751[1]
  return i750
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i752 = root || request.c( 'UnityEngine.UI.Image' )
  var i753 = data
  request.r(i753[0], i753[1], 0, i752, 'm_Sprite')
  i752.m_Type = i753[2]
  i752.m_PreserveAspect = !!i753[3]
  i752.m_FillCenter = !!i753[4]
  i752.m_FillMethod = i753[5]
  i752.m_FillAmount = i753[6]
  i752.m_FillClockwise = !!i753[7]
  i752.m_FillOrigin = i753[8]
  i752.m_UseSpriteMesh = !!i753[9]
  i752.m_PixelsPerUnitMultiplier = i753[10]
  request.r(i753[11], i753[12], 0, i752, 'm_Material')
  i752.m_Maskable = !!i753[13]
  i752.m_Color = new pc.Color(i753[14], i753[15], i753[16], i753[17])
  i752.m_RaycastTarget = !!i753[18]
  i752.m_RaycastPadding = new pc.Vec4( i753[19], i753[20], i753[21], i753[22] )
  return i752
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i754 = root || request.c( 'UnityEngine.UI.Button' )
  var i755 = data
  i754.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i755[0], i754.m_OnClick)
  i754.m_Navigation = request.d('UnityEngine.UI.Navigation', i755[1], i754.m_Navigation)
  i754.m_Transition = i755[2]
  i754.m_Colors = request.d('UnityEngine.UI.ColorBlock', i755[3], i754.m_Colors)
  i754.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i755[4], i754.m_SpriteState)
  i754.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i755[5], i754.m_AnimationTriggers)
  i754.m_Interactable = !!i755[6]
  request.r(i755[7], i755[8], 0, i754, 'm_TargetGraphic')
  return i754
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i756 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i757 = data
  i756.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i757[0], i756.m_PersistentCalls)
  return i756
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i758 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i759 = data
  var i761 = i759[0]
  var i760 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i761.length; i += 1) {
    i760.add(request.d('UnityEngine.Events.PersistentCall', i761[i + 0]));
  }
  i758.m_Calls = i760
  return i758
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i764 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i765 = data
  request.r(i765[0], i765[1], 0, i764, 'm_Target')
  i764.m_TargetAssemblyTypeName = i765[2]
  i764.m_MethodName = i765[3]
  i764.m_Mode = i765[4]
  i764.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i765[5], i764.m_Arguments)
  i764.m_CallState = i765[6]
  return i764
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i766 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i767 = data
  i766.m_Mode = i767[0]
  i766.m_WrapAround = !!i767[1]
  request.r(i767[2], i767[3], 0, i766, 'm_SelectOnUp')
  request.r(i767[4], i767[5], 0, i766, 'm_SelectOnDown')
  request.r(i767[6], i767[7], 0, i766, 'm_SelectOnLeft')
  request.r(i767[8], i767[9], 0, i766, 'm_SelectOnRight')
  return i766
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i768 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i769 = data
  i768.m_NormalColor = new pc.Color(i769[0], i769[1], i769[2], i769[3])
  i768.m_HighlightedColor = new pc.Color(i769[4], i769[5], i769[6], i769[7])
  i768.m_PressedColor = new pc.Color(i769[8], i769[9], i769[10], i769[11])
  i768.m_SelectedColor = new pc.Color(i769[12], i769[13], i769[14], i769[15])
  i768.m_DisabledColor = new pc.Color(i769[16], i769[17], i769[18], i769[19])
  i768.m_ColorMultiplier = i769[20]
  i768.m_FadeDuration = i769[21]
  return i768
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i770 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i771 = data
  request.r(i771[0], i771[1], 0, i770, 'm_HighlightedSprite')
  request.r(i771[2], i771[3], 0, i770, 'm_PressedSprite')
  request.r(i771[4], i771[5], 0, i770, 'm_SelectedSprite')
  request.r(i771[6], i771[7], 0, i770, 'm_DisabledSprite')
  return i770
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i772 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i773 = data
  i772.m_NormalTrigger = i773[0]
  i772.m_HighlightedTrigger = i773[1]
  i772.m_PressedTrigger = i773[2]
  i772.m_SelectedTrigger = i773[3]
  i772.m_DisabledTrigger = i773[4]
  return i772
}

Deserializers["UnityEngine.UI.Text"] = function (request, data, root) {
  var i774 = root || request.c( 'UnityEngine.UI.Text' )
  var i775 = data
  i774.m_FontData = request.d('UnityEngine.UI.FontData', i775[0], i774.m_FontData)
  i774.m_Text = i775[1]
  request.r(i775[2], i775[3], 0, i774, 'm_Material')
  i774.m_Maskable = !!i775[4]
  i774.m_Color = new pc.Color(i775[5], i775[6], i775[7], i775[8])
  i774.m_RaycastTarget = !!i775[9]
  i774.m_RaycastPadding = new pc.Vec4( i775[10], i775[11], i775[12], i775[13] )
  return i774
}

Deserializers["UnityEngine.UI.FontData"] = function (request, data, root) {
  var i776 = root || request.c( 'UnityEngine.UI.FontData' )
  var i777 = data
  request.r(i777[0], i777[1], 0, i776, 'm_Font')
  i776.m_FontSize = i777[2]
  i776.m_FontStyle = i777[3]
  i776.m_BestFit = !!i777[4]
  i776.m_MinSize = i777[5]
  i776.m_MaxSize = i777[6]
  i776.m_Alignment = i777[7]
  i776.m_AlignByGeometry = !!i777[8]
  i776.m_RichText = !!i777[9]
  i776.m_HorizontalOverflow = i777[10]
  i776.m_VerticalOverflow = i777[11]
  i776.m_LineSpacing = i777[12]
  return i776
}

Deserializers["TutController"] = function (request, data, root) {
  var i778 = root || request.c( 'TutController' )
  var i779 = data
  var i781 = i779[0]
  var i780 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Vector2')))
  for(var i = 0; i < i781.length; i += 2) {
    i780.add(new pc.Vec2( i781[i + 0], i781[i + 1] ));
  }
  i778.movePos = i780
  i778.moveTime = i779[1]
  i778.fromScale = i779[2]
  i778.toScale = i779[3]
  i778.scaleTime = i779[4]
  return i778
}

Deserializers["DG.Tweening.DOTweenAnimation"] = function (request, data, root) {
  var i784 = root || request.c( 'DG.Tweening.DOTweenAnimation' )
  var i785 = data
  i784.targetIsSelf = !!i785[0]
  request.r(i785[1], i785[2], 0, i784, 'targetGO')
  i784.tweenTargetIsTargetGO = !!i785[3]
  i784.delay = i785[4]
  i784.duration = i785[5]
  i784.easeType = i785[6]
  i784.easeCurve = new pc.AnimationCurve( { keys_flow: i785[7] } )
  i784.loopType = i785[8]
  i784.loops = i785[9]
  i784.id = i785[10]
  i784.isRelative = !!i785[11]
  i784.isFrom = !!i785[12]
  i784.isIndependentUpdate = !!i785[13]
  i784.autoKill = !!i785[14]
  i784.autoGenerate = !!i785[15]
  i784.isActive = !!i785[16]
  i784.isValid = !!i785[17]
  request.r(i785[18], i785[19], 0, i784, 'target')
  i784.animationType = i785[20]
  i784.targetType = i785[21]
  i784.forcedTargetType = i785[22]
  i784.autoPlay = !!i785[23]
  i784.useTargetAsV3 = !!i785[24]
  i784.endValueFloat = i785[25]
  i784.endValueV3 = new pc.Vec3( i785[26], i785[27], i785[28] )
  i784.endValueV2 = new pc.Vec2( i785[29], i785[30] )
  i784.endValueColor = new pc.Color(i785[31], i785[32], i785[33], i785[34])
  i784.endValueString = i785[35]
  i784.endValueRect = UnityEngine.Rect.MinMaxRect(i785[36], i785[37], i785[38], i785[39])
  request.r(i785[40], i785[41], 0, i784, 'endValueTransform')
  i784.optionalBool0 = !!i785[42]
  i784.optionalBool1 = !!i785[43]
  i784.optionalFloat0 = i785[44]
  i784.optionalInt0 = i785[45]
  i784.optionalRotationMode = i785[46]
  i784.optionalScrambleMode = i785[47]
  i784.optionalShakeRandomnessMode = i785[48]
  i784.optionalString = i785[49]
  i784.updateType = i785[50]
  i784.isSpeedBased = !!i785[51]
  i784.hasOnStart = !!i785[52]
  i784.hasOnPlay = !!i785[53]
  i784.hasOnUpdate = !!i785[54]
  i784.hasOnStepComplete = !!i785[55]
  i784.hasOnComplete = !!i785[56]
  i784.hasOnTweenCreated = !!i785[57]
  i784.hasOnRewind = !!i785[58]
  i784.onStart = request.d('UnityEngine.Events.UnityEvent', i785[59], i784.onStart)
  i784.onPlay = request.d('UnityEngine.Events.UnityEvent', i785[60], i784.onPlay)
  i784.onUpdate = request.d('UnityEngine.Events.UnityEvent', i785[61], i784.onUpdate)
  i784.onStepComplete = request.d('UnityEngine.Events.UnityEvent', i785[62], i784.onStepComplete)
  i784.onComplete = request.d('UnityEngine.Events.UnityEvent', i785[63], i784.onComplete)
  i784.onTweenCreated = request.d('UnityEngine.Events.UnityEvent', i785[64], i784.onTweenCreated)
  i784.onRewind = request.d('UnityEngine.Events.UnityEvent', i785[65], i784.onRewind)
  return i784
}

Deserializers["UnityEngine.Events.UnityEvent"] = function (request, data, root) {
  var i786 = root || request.c( 'UnityEngine.Events.UnityEvent' )
  var i787 = data
  i786.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i787[0], i786.m_PersistentCalls)
  return i786
}

Deserializers["PlayerController"] = function (request, data, root) {
  var i788 = root || request.c( 'PlayerController' )
  var i789 = data
  var i791 = i789[0]
  var i790 = new (System.Collections.Generic.List$1(Bridge.ns('Piece')))
  for(var i = 0; i < i791.length; i += 1) {
    i790.add(request.d('Piece', i791[i + 0]));
  }
  i788.pieces = i790
  request.r(i789[1], i789[2], 0, i788, 'head')
  request.r(i789[3], i789[4], 0, i788, 'deadSFX')
  i788.maxForce = new pc.Vec2( i789[5], i789[6] )
  i788.minForce = new pc.Vec2( i789[7], i789[8] )
  var i793 = i789[9]
  var i792 = new (System.Collections.Generic.List$1(Bridge.ns('FightOption')))
  for(var i = 0; i < i793.length; i += 1) {
    i792.add(request.d('FightOption', i793[i + 0]));
  }
  i788.fightOptions = i792
  request.r(i789[10], i789[11], 0, i788, 'optionTut')
  request.r(i789[12], i789[13], 0, i788, 'attackTut')
  i788.fight = request.d('FightOption', i789[14], i788.fight)
  request.r(i789[15], i789[16], 0, i788, 'clickSound')
  return i788
}

Deserializers["FightOption"] = function (request, data, root) {
  var i796 = root || request.c( 'FightOption' )
  var i797 = data
  request.r(i797[0], i797[1], 0, i796, 'Button')
  request.r(i797[2], i797[3], 0, i796, 'Selected')
  request.r(i797[4], i797[5], 0, i796, 'Controller')
  return i796
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.TargetJoint2D"] = function (request, data, root) {
  var i798 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.TargetJoint2D' )
  var i799 = data
  i798.autoConfigureTarget = !!i799[0]
  i798.target = new pc.Vec2( i799[1], i799[2] )
  i798.anchor = new pc.Vec2( i799[3], i799[4] )
  i798.maxForce = i799[5]
  i798.dampingRatio = i799[6]
  i798.frequency = i799[7]
  request.r(i799[8], i799[9], 0, i798, 'connectedBody')
  i798.breakForce = i799[10]
  i798.breakTorque = i799[11]
  i798.enableCollision = !!i799[12]
  i798.enabled = !!i799[13]
  return i798
}

Deserializers["ShootController"] = function (request, data, root) {
  var i800 = root || request.c( 'ShootController' )
  var i801 = data
  request.r(i801[0], i801[1], 0, i800, 'currentMonster')
  request.r(i801[2], i801[3], 0, i800, 'left')
  request.r(i801[4], i801[5], 0, i800, 'right')
  i800.timeMotor = i801[6]
  i800.onCD = !!i801[7]
  i800.CD = i801[8]
  request.r(i801[9], i801[10], 0, i800, 'startPos')
  request.r(i801[11], i801[12], 0, i800, 'attackSound')
  request.r(i801[13], i801[14], 0, i800, 'spawnPrefab')
  request.r(i801[15], i801[16], 0, i800, 'poolParent')
  return i800
}

Deserializers["DropController"] = function (request, data, root) {
  var i802 = root || request.c( 'DropController' )
  var i803 = data
  request.r(i803[0], i803[1], 0, i802, 'attackSound')
  request.r(i803[2], i803[3], 0, i802, 'spawnPrefab')
  request.r(i803[4], i803[5], 0, i802, 'poolParent')
  return i802
}

Deserializers["DefenseController"] = function (request, data, root) {
  var i804 = root || request.c( 'DefenseController' )
  var i805 = data
  request.r(i805[0], i805[1], 0, i804, 'world')
  i804.offset = new pc.Vec2( i805[2], i805[3] )
  i804.cellSize = i805[4]
  request.r(i805[5], i805[6], 0, i804, 'putSound')
  request.r(i805[7], i805[8], 0, i804, 'clickSound')
  var i807 = i805[9]
  var i806 = new (System.Collections.Generic.List$1(Bridge.ns('BlockType')))
  for(var i = 0; i < i807.length; i += 1) {
    i806.add(request.d('BlockType', i807[i + 0]));
  }
  i804.blockTypes = i806
  request.r(i805[10], i805[11], 0, i804, 'optionTut')
  request.r(i805[12], i805[13], 0, i804, 'buildTut')
  return i804
}

Deserializers["BlockType"] = function (request, data, root) {
  var i810 = root || request.c( 'BlockType' )
  var i811 = data
  request.r(i811[0], i811[1], 0, i810, 'Button')
  request.r(i811[2], i811[3], 0, i810, 'Selected')
  request.r(i811[4], i811[5], 0, i810, 'Prefab')
  i810.blockSize = new pc.Vec2( i811[6], i811[7] )
  return i810
}

Deserializers["GameController"] = function (request, data, root) {
  var i812 = root || request.c( 'GameController' )
  var i813 = data
  i812.OnStart = request.d('System.Action', i813[0], i812.OnStart)
  i812.OnClick = request.d('System.Action', i813[1], i812.OnClick)
  i812.OnGameOver = request.d('System.Action', i813[2], i812.OnGameOver)
  i812.OnGameComplete = request.d('System.Action', i813[3], i812.OnGameComplete)
  var i815 = i813[4]
  var i814 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.GameObject')))
  for(var i = 0; i < i815.length; i += 2) {
  request.r(i815[i + 0], i815[i + 1], 1, i814, '')
  }
  i812.monsterList = i814
  var i817 = i813[5]
  var i816 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Vector3')))
  for(var i = 0; i < i817.length; i += 3) {
    i816.add(new pc.Vec3( i817[i + 0], i817[i + 1], i817[i + 2] ));
  }
  i812.posM1 = i816
  var i819 = i813[6]
  var i818 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Vector3')))
  for(var i = 0; i < i819.length; i += 3) {
    i818.add(new pc.Vec3( i819[i + 0], i819[i + 1], i819[i + 2] ));
  }
  i812.posM2 = i818
  request.r(i813[7], i813[8], 0, i812, 'startScene')
  request.r(i813[9], i813[10], 0, i812, 'buttonFight')
  request.r(i813[11], i813[12], 0, i812, 'buttonDefense')
  request.r(i813[13], i813[14], 0, i812, 'clickSound')
  request.r(i813[15], i813[16], 0, i812, 'fightOptions')
  request.r(i813[17], i813[18], 0, i812, 'tut')
  request.r(i813[19], i813[20], 0, i812, 'defenseOptions')
  request.r(i813[21], i813[22], 0, i812, 'defense')
  request.r(i813[23], i813[24], 0, i812, 'endScene')
  request.r(i813[25], i813[26], 0, i812, 'completeScene')
  request.r(i813[27], i813[28], 0, i812, 'gameOverScene')
  request.r(i813[29], i813[30], 0, i812, 'player')
  i812.numMonster = i813[31]
  request.r(i813[32], i813[33], 0, i812, 'world')
  return i812
}

Deserializers["System.Action"] = function (request, data, root) {
  var i820 = root || request.c( 'System.Action' )
  var i821 = data
  return i820
}

Deserializers["LayoutController"] = function (request, data, root) {
  var i826 = root || request.c( 'LayoutController' )
  var i827 = data
  request.r(i827[0], i827[1], 0, i826, 'main')
  request.r(i827[2], i827[3], 0, i826, 'fight')
  request.r(i827[4], i827[5], 0, i826, 'defense')
  return i826
}

Deserializers["LunaController"] = function (request, data, root) {
  var i828 = root || request.c( 'LunaController' )
  var i829 = data
  request.r(i829[0], i829[1], 0, i828, 'BGTexture')
  i828.UseTime = !!i829[2]
  i828.TimePlay = i829[3]
  i828.UseCountPlay = !!i829[4]
  i828.MaxCountPlay = i829[5]
  i828.TypeMonster1 = i829[6]
  i828.TypeMonster2 = i829[7]
  i828.Header1 = i829[8]
  i828.Header2 = i829[9]
  request.r(i829[10], i829[11], 0, i828, 'Header1Text')
  request.r(i829[12], i829[13], 0, i828, 'Header2Text')
  request.r(i829[14], i829[15], 0, i828, 'BGImage')
  var i831 = i829[16]
  var i830 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.UI.Button')))
  for(var i = 0; i < i831.length; i += 2) {
  request.r(i831[i + 0], i831[i + 1], 1, i830, '')
  }
  i828.CTA = i830
  i828.count = i829[17]
  return i828
}

Deserializers["AudioController"] = function (request, data, root) {
  var i834 = root || request.c( 'AudioController' )
  var i835 = data
  request.r(i835[0], i835[1], 0, i834, 'BGM')
  request.r(i835[2], i835[3], 0, i834, 'musicSource')
  request.r(i835[4], i835[5], 0, i834, 'pool')
  return i834
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.AudioSource"] = function (request, data, root) {
  var i836 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.AudioSource' )
  var i837 = data
  request.r(i837[0], i837[1], 0, i836, 'clip')
  request.r(i837[2], i837[3], 0, i836, 'outputAudioMixerGroup')
  i836.playOnAwake = !!i837[4]
  i836.loop = !!i837[5]
  i836.time = i837[6]
  i836.volume = i837[7]
  i836.pitch = i837[8]
  i836.enabled = !!i837[9]
  return i836
}

Deserializers["VFXController"] = function (request, data, root) {
  var i838 = root || request.c( 'VFXController' )
  var i839 = data
  request.r(i839[0], i839[1], 0, i838, 'poolParent')
  return i838
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i840 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i841 = data
  i840.ambientIntensity = i841[0]
  i840.reflectionIntensity = i841[1]
  i840.ambientMode = i841[2]
  i840.ambientLight = new pc.Color(i841[3], i841[4], i841[5], i841[6])
  i840.ambientSkyColor = new pc.Color(i841[7], i841[8], i841[9], i841[10])
  i840.ambientGroundColor = new pc.Color(i841[11], i841[12], i841[13], i841[14])
  i840.ambientEquatorColor = new pc.Color(i841[15], i841[16], i841[17], i841[18])
  i840.fogColor = new pc.Color(i841[19], i841[20], i841[21], i841[22])
  i840.fogEndDistance = i841[23]
  i840.fogStartDistance = i841[24]
  i840.fogDensity = i841[25]
  i840.fog = !!i841[26]
  request.r(i841[27], i841[28], 0, i840, 'skybox')
  i840.fogMode = i841[29]
  var i843 = i841[30]
  var i842 = []
  for(var i = 0; i < i843.length; i += 1) {
    i842.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i843[i + 0]) );
  }
  i840.lightmaps = i842
  i840.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i841[31], i840.lightProbes)
  i840.lightmapsMode = i841[32]
  i840.mixedBakeMode = i841[33]
  i840.environmentLightingMode = i841[34]
  i840.ambientProbe = new pc.SphericalHarmonicsL2(i841[35])
  request.r(i841[36], i841[37], 0, i840, 'customReflection')
  request.r(i841[38], i841[39], 0, i840, 'defaultReflection')
  i840.defaultReflectionMode = i841[40]
  i840.defaultReflectionResolution = i841[41]
  i840.sunLightObjectId = i841[42]
  i840.pixelLightCount = i841[43]
  i840.defaultReflectionHDR = !!i841[44]
  i840.hasLightDataAsset = !!i841[45]
  i840.hasManualGenerate = !!i841[46]
  return i840
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i846 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i847 = data
  request.r(i847[0], i847[1], 0, i846, 'lightmapColor')
  request.r(i847[2], i847[3], 0, i846, 'lightmapDirection')
  request.r(i847[4], i847[5], 0, i846, 'shadowMask')
  return i846
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i848 = root || new UnityEngine.LightProbes()
  var i849 = data
  return i848
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i856 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i857 = data
  var i859 = i857[0]
  var i858 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i859.length; i += 1) {
    i858.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i859[i + 0]));
  }
  i856.ShaderCompilationErrors = i858
  i856.name = i857[1]
  i856.guid = i857[2]
  var i861 = i857[3]
  var i860 = []
  for(var i = 0; i < i861.length; i += 1) {
    i860.push( i861[i + 0] );
  }
  i856.shaderDefinedKeywords = i860
  var i863 = i857[4]
  var i862 = []
  for(var i = 0; i < i863.length; i += 1) {
    i862.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i863[i + 0]) );
  }
  i856.passes = i862
  var i865 = i857[5]
  var i864 = []
  for(var i = 0; i < i865.length; i += 1) {
    i864.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i865[i + 0]) );
  }
  i856.usePasses = i864
  var i867 = i857[6]
  var i866 = []
  for(var i = 0; i < i867.length; i += 1) {
    i866.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i867[i + 0]) );
  }
  i856.defaultParameterValues = i866
  request.r(i857[7], i857[8], 0, i856, 'unityFallbackShader')
  i856.readDepth = !!i857[9]
  i856.hasDepthOnlyPass = !!i857[10]
  i856.isCreatedByShaderGraph = !!i857[11]
  i856.disableBatching = !!i857[12]
  i856.compiled = !!i857[13]
  return i856
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i870 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i871 = data
  i870.shaderName = i871[0]
  i870.errorMessage = i871[1]
  return i870
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i876 = root || new pc.UnityShaderPass()
  var i877 = data
  i876.id = i877[0]
  i876.subShaderIndex = i877[1]
  i876.name = i877[2]
  i876.passType = i877[3]
  i876.grabPassTextureName = i877[4]
  i876.usePass = !!i877[5]
  i876.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i877[6], i876.zTest)
  i876.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i877[7], i876.zWrite)
  i876.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i877[8], i876.culling)
  i876.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i877[9], i876.blending)
  i876.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i877[10], i876.alphaBlending)
  i876.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i877[11], i876.colorWriteMask)
  i876.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i877[12], i876.offsetUnits)
  i876.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i877[13], i876.offsetFactor)
  i876.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i877[14], i876.stencilRef)
  i876.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i877[15], i876.stencilReadMask)
  i876.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i877[16], i876.stencilWriteMask)
  i876.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i877[17], i876.stencilOp)
  i876.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i877[18], i876.stencilOpFront)
  i876.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i877[19], i876.stencilOpBack)
  var i879 = i877[20]
  var i878 = []
  for(var i = 0; i < i879.length; i += 1) {
    i878.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i879[i + 0]) );
  }
  i876.tags = i878
  var i881 = i877[21]
  var i880 = []
  for(var i = 0; i < i881.length; i += 1) {
    i880.push( i881[i + 0] );
  }
  i876.passDefinedKeywords = i880
  var i883 = i877[22]
  var i882 = []
  for(var i = 0; i < i883.length; i += 1) {
    i882.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i883[i + 0]) );
  }
  i876.passDefinedKeywordGroups = i882
  var i885 = i877[23]
  var i884 = []
  for(var i = 0; i < i885.length; i += 1) {
    i884.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i885[i + 0]) );
  }
  i876.variants = i884
  var i887 = i877[24]
  var i886 = []
  for(var i = 0; i < i887.length; i += 1) {
    i886.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i887[i + 0]) );
  }
  i876.excludedVariants = i886
  i876.hasDepthReader = !!i877[25]
  return i876
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i888 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i889 = data
  i888.val = i889[0]
  i888.name = i889[1]
  return i888
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i890 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i891 = data
  i890.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i891[0], i890.src)
  i890.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i891[1], i890.dst)
  i890.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i891[2], i890.op)
  return i890
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i892 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i893 = data
  i892.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i893[0], i892.pass)
  i892.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i893[1], i892.fail)
  i892.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i893[2], i892.zFail)
  i892.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i893[3], i892.comp)
  return i892
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i896 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i897 = data
  i896.name = i897[0]
  i896.value = i897[1]
  return i896
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i900 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i901 = data
  var i903 = i901[0]
  var i902 = []
  for(var i = 0; i < i903.length; i += 1) {
    i902.push( i903[i + 0] );
  }
  i900.keywords = i902
  i900.hasDiscard = !!i901[1]
  return i900
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i906 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i907 = data
  i906.passId = i907[0]
  i906.subShaderIndex = i907[1]
  var i909 = i907[2]
  var i908 = []
  for(var i = 0; i < i909.length; i += 1) {
    i908.push( i909[i + 0] );
  }
  i906.keywords = i908
  i906.vertexProgram = i907[3]
  i906.fragmentProgram = i907[4]
  i906.exportedForWebGl2 = !!i907[5]
  i906.readDepth = !!i907[6]
  return i906
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i912 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i913 = data
  request.r(i913[0], i913[1], 0, i912, 'shader')
  i912.pass = i913[2]
  return i912
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i916 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i917 = data
  i916.name = i917[0]
  i916.type = i917[1]
  i916.value = new pc.Vec4( i917[2], i917[3], i917[4], i917[5] )
  i916.textureValue = i917[6]
  i916.shaderPropertyFlag = i917[7]
  return i916
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i918 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i919 = data
  i918.name = i919[0]
  request.r(i919[1], i919[2], 0, i918, 'texture')
  i918.aabb = i919[3]
  i918.vertices = i919[4]
  i918.triangles = i919[5]
  i918.textureRect = UnityEngine.Rect.MinMaxRect(i919[6], i919[7], i919[8], i919[9])
  i918.packedRect = UnityEngine.Rect.MinMaxRect(i919[10], i919[11], i919[12], i919[13])
  i918.border = new pc.Vec4( i919[14], i919[15], i919[16], i919[17] )
  i918.transparency = i919[18]
  i918.bounds = i919[19]
  i918.pixelsPerUnit = i919[20]
  i918.textureWidth = i919[21]
  i918.textureHeight = i919[22]
  i918.nativeSize = new pc.Vec2( i919[23], i919[24] )
  i918.pivot = new pc.Vec2( i919[25], i919[26] )
  i918.textureRectOffset = new pc.Vec2( i919[27], i919[28] )
  return i918
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i920 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i921 = data
  i920.name = i921[0]
  return i920
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip"] = function (request, data, root) {
  var i922 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip' )
  var i923 = data
  i922.name = i923[0]
  i922.wrapMode = i923[1]
  i922.isLooping = !!i923[2]
  i922.length = i923[3]
  var i925 = i923[4]
  var i924 = []
  for(var i = 0; i < i925.length; i += 1) {
    i924.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve', i925[i + 0]) );
  }
  i922.curves = i924
  var i927 = i923[5]
  var i926 = []
  for(var i = 0; i < i927.length; i += 1) {
    i926.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent', i927[i + 0]) );
  }
  i922.events = i926
  i922.halfPrecision = !!i923[6]
  i922._frameRate = i923[7]
  i922.localBounds = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds', i923[8], i922.localBounds)
  i922.hasMuscleCurves = !!i923[9]
  var i929 = i923[10]
  var i928 = []
  for(var i = 0; i < i929.length; i += 1) {
    i928.push( i929[i + 0] );
  }
  i922.clipMuscleConstant = i928
  i922.clipBindingConstant = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant', i923[11], i922.clipBindingConstant)
  return i922
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve"] = function (request, data, root) {
  var i932 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve' )
  var i933 = data
  i932.path = i933[0]
  i932.hash = i933[1]
  i932.componentType = i933[2]
  i932.property = i933[3]
  i932.keys = i933[4]
  var i935 = i933[5]
  var i934 = []
  for(var i = 0; i < i935.length; i += 1) {
    i934.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey', i935[i + 0]) );
  }
  i932.objectReferenceKeys = i934
  return i932
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey"] = function (request, data, root) {
  var i938 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey' )
  var i939 = data
  i938.time = i939[0]
  request.r(i939[1], i939[2], 0, i938, 'value')
  return i938
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent"] = function (request, data, root) {
  var i942 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent' )
  var i943 = data
  i942.functionName = i943[0]
  i942.floatParameter = i943[1]
  i942.intParameter = i943[2]
  i942.stringParameter = i943[3]
  request.r(i943[4], i943[5], 0, i942, 'objectReferenceParameter')
  i942.time = i943[6]
  return i942
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds"] = function (request, data, root) {
  var i944 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds' )
  var i945 = data
  i944.center = new pc.Vec3( i945[0], i945[1], i945[2] )
  i944.extends = new pc.Vec3( i945[3], i945[4], i945[5] )
  return i944
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant"] = function (request, data, root) {
  var i948 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant' )
  var i949 = data
  var i951 = i949[0]
  var i950 = []
  for(var i = 0; i < i951.length; i += 1) {
    i950.push( i951[i + 0] );
  }
  i948.genericBindings = i950
  var i953 = i949[1]
  var i952 = []
  for(var i = 0; i < i953.length; i += 1) {
    i952.push( i953[i + 0] );
  }
  i948.pptrCurveMapping = i952
  return i948
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font"] = function (request, data, root) {
  var i954 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font' )
  var i955 = data
  i954.name = i955[0]
  i954.ascent = i955[1]
  i954.originalLineHeight = i955[2]
  i954.fontSize = i955[3]
  var i957 = i955[4]
  var i956 = []
  for(var i = 0; i < i957.length; i += 1) {
    i956.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo', i957[i + 0]) );
  }
  i954.characterInfo = i956
  request.r(i955[5], i955[6], 0, i954, 'texture')
  i954.originalFontSize = i955[7]
  return i954
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo"] = function (request, data, root) {
  var i960 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo' )
  var i961 = data
  i960.index = i961[0]
  i960.advance = i961[1]
  i960.bearing = i961[2]
  i960.glyphWidth = i961[3]
  i960.glyphHeight = i961[4]
  i960.minX = i961[5]
  i960.maxX = i961[6]
  i960.minY = i961[7]
  i960.maxY = i961[8]
  i960.uvBottomLeftX = i961[9]
  i960.uvBottomLeftY = i961[10]
  i960.uvBottomRightX = i961[11]
  i960.uvBottomRightY = i961[12]
  i960.uvTopLeftX = i961[13]
  i960.uvTopLeftY = i961[14]
  i960.uvTopRightX = i961[15]
  i960.uvTopRightY = i961[16]
  return i960
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController"] = function (request, data, root) {
  var i962 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController' )
  var i963 = data
  i962.name = i963[0]
  var i965 = i963[1]
  var i964 = []
  for(var i = 0; i < i965.length; i += 1) {
    i964.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer', i965[i + 0]) );
  }
  i962.layers = i964
  var i967 = i963[2]
  var i966 = []
  for(var i = 0; i < i967.length; i += 1) {
    i966.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter', i967[i + 0]) );
  }
  i962.parameters = i966
  i962.animationClips = i963[3]
  i962.avatarUnsupported = i963[4]
  return i962
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer"] = function (request, data, root) {
  var i970 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer' )
  var i971 = data
  i970.name = i971[0]
  i970.defaultWeight = i971[1]
  i970.blendingMode = i971[2]
  i970.avatarMask = i971[3]
  i970.syncedLayerIndex = i971[4]
  i970.syncedLayerAffectsTiming = !!i971[5]
  i970.syncedLayers = i971[6]
  i970.stateMachine = request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i971[7], i970.stateMachine)
  return i970
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine"] = function (request, data, root) {
  var i972 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine' )
  var i973 = data
  i972.id = i973[0]
  i972.name = i973[1]
  i972.path = i973[2]
  var i975 = i973[3]
  var i974 = []
  for(var i = 0; i < i975.length; i += 1) {
    i974.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState', i975[i + 0]) );
  }
  i972.states = i974
  var i977 = i973[4]
  var i976 = []
  for(var i = 0; i < i977.length; i += 1) {
    i976.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i977[i + 0]) );
  }
  i972.machines = i976
  var i979 = i973[5]
  var i978 = []
  for(var i = 0; i < i979.length; i += 1) {
    i978.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i979[i + 0]) );
  }
  i972.entryStateTransitions = i978
  var i981 = i973[6]
  var i980 = []
  for(var i = 0; i < i981.length; i += 1) {
    i980.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i981[i + 0]) );
  }
  i972.exitStateTransitions = i980
  var i983 = i973[7]
  var i982 = []
  for(var i = 0; i < i983.length; i += 1) {
    i982.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i983[i + 0]) );
  }
  i972.anyStateTransitions = i982
  i972.defaultStateId = i973[8]
  return i972
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState"] = function (request, data, root) {
  var i986 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState' )
  var i987 = data
  i986.id = i987[0]
  i986.name = i987[1]
  i986.cycleOffset = i987[2]
  i986.cycleOffsetParameter = i987[3]
  i986.cycleOffsetParameterActive = !!i987[4]
  i986.mirror = !!i987[5]
  i986.mirrorParameter = i987[6]
  i986.mirrorParameterActive = !!i987[7]
  i986.motionId = i987[8]
  i986.nameHash = i987[9]
  i986.fullPathHash = i987[10]
  i986.speed = i987[11]
  i986.speedParameter = i987[12]
  i986.speedParameterActive = !!i987[13]
  i986.tag = i987[14]
  i986.tagHash = i987[15]
  i986.writeDefaultValues = !!i987[16]
  var i989 = i987[17]
  var i988 = []
  for(var i = 0; i < i989.length; i += 2) {
  request.r(i989[i + 0], i989[i + 1], 2, i988, '')
  }
  i986.behaviours = i988
  var i991 = i987[18]
  var i990 = []
  for(var i = 0; i < i991.length; i += 1) {
    i990.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i991[i + 0]) );
  }
  i986.transitions = i990
  return i986
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition"] = function (request, data, root) {
  var i996 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition' )
  var i997 = data
  i996.fullPath = i997[0]
  i996.canTransitionToSelf = !!i997[1]
  i996.duration = i997[2]
  i996.exitTime = i997[3]
  i996.hasExitTime = !!i997[4]
  i996.hasFixedDuration = !!i997[5]
  i996.interruptionSource = i997[6]
  i996.offset = i997[7]
  i996.orderedInterruption = !!i997[8]
  i996.destinationStateId = i997[9]
  i996.isExit = !!i997[10]
  i996.mute = !!i997[11]
  i996.solo = !!i997[12]
  var i999 = i997[13]
  var i998 = []
  for(var i = 0; i < i999.length; i += 1) {
    i998.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i999[i + 0]) );
  }
  i996.conditions = i998
  return i996
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition"] = function (request, data, root) {
  var i1002 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition' )
  var i1003 = data
  i1002.mode = i1003[0]
  i1002.parameter = i1003[1]
  i1002.threshold = i1003[2]
  return i1002
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition"] = function (request, data, root) {
  var i1008 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition' )
  var i1009 = data
  i1008.destinationStateId = i1009[0]
  i1008.isExit = !!i1009[1]
  i1008.mute = !!i1009[2]
  i1008.solo = !!i1009[3]
  var i1011 = i1009[4]
  var i1010 = []
  for(var i = 0; i < i1011.length; i += 1) {
    i1010.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i1011[i + 0]) );
  }
  i1008.conditions = i1010
  return i1008
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter"] = function (request, data, root) {
  var i1014 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter' )
  var i1015 = data
  i1014.defaultBool = !!i1015[0]
  i1014.defaultFloat = i1015[1]
  i1014.defaultInt = i1015[2]
  i1014.name = i1015[3]
  i1014.nameHash = i1015[4]
  i1014.type = i1015[5]
  return i1014
}

Deserializers["DG.Tweening.Core.DOTweenSettings"] = function (request, data, root) {
  var i1016 = root || request.c( 'DG.Tweening.Core.DOTweenSettings' )
  var i1017 = data
  i1016.useSafeMode = !!i1017[0]
  i1016.safeModeOptions = request.d('DG.Tweening.Core.DOTweenSettings+SafeModeOptions', i1017[1], i1016.safeModeOptions)
  i1016.timeScale = i1017[2]
  i1016.unscaledTimeScale = i1017[3]
  i1016.useSmoothDeltaTime = !!i1017[4]
  i1016.maxSmoothUnscaledTime = i1017[5]
  i1016.rewindCallbackMode = i1017[6]
  i1016.showUnityEditorReport = !!i1017[7]
  i1016.logBehaviour = i1017[8]
  i1016.drawGizmos = !!i1017[9]
  i1016.defaultRecyclable = !!i1017[10]
  i1016.defaultAutoPlay = i1017[11]
  i1016.defaultUpdateType = i1017[12]
  i1016.defaultTimeScaleIndependent = !!i1017[13]
  i1016.defaultEaseType = i1017[14]
  i1016.defaultEaseOvershootOrAmplitude = i1017[15]
  i1016.defaultEasePeriod = i1017[16]
  i1016.defaultAutoKill = !!i1017[17]
  i1016.defaultLoopType = i1017[18]
  i1016.debugMode = !!i1017[19]
  i1016.debugStoreTargetId = !!i1017[20]
  i1016.showPreviewPanel = !!i1017[21]
  i1016.storeSettingsLocation = i1017[22]
  i1016.modules = request.d('DG.Tweening.Core.DOTweenSettings+ModulesSetup', i1017[23], i1016.modules)
  i1016.createASMDEF = !!i1017[24]
  i1016.showPlayingTweens = !!i1017[25]
  i1016.showPausedTweens = !!i1017[26]
  return i1016
}

Deserializers["DG.Tweening.Core.DOTweenSettings+SafeModeOptions"] = function (request, data, root) {
  var i1018 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+SafeModeOptions' )
  var i1019 = data
  i1018.logBehaviour = i1019[0]
  i1018.nestedTweenFailureBehaviour = i1019[1]
  return i1018
}

Deserializers["DG.Tweening.Core.DOTweenSettings+ModulesSetup"] = function (request, data, root) {
  var i1020 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+ModulesSetup' )
  var i1021 = data
  i1020.showPanel = !!i1021[0]
  i1020.audioEnabled = !!i1021[1]
  i1020.physicsEnabled = !!i1021[2]
  i1020.physics2DEnabled = !!i1021[3]
  i1020.spriteEnabled = !!i1021[4]
  i1020.uiEnabled = !!i1021[5]
  i1020.textMeshProEnabled = !!i1021[6]
  i1020.tk2DEnabled = !!i1021[7]
  i1020.deAudioEnabled = !!i1021[8]
  i1020.deUnityExtendedEnabled = !!i1021[9]
  i1020.epoOutlineEnabled = !!i1021[10]
  return i1020
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i1022 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i1023 = data
  var i1025 = i1023[0]
  var i1024 = []
  for(var i = 0; i < i1025.length; i += 1) {
    i1024.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i1025[i + 0]) );
  }
  i1022.files = i1024
  i1022.componentToPrefabIds = i1023[1]
  return i1022
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i1028 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i1029 = data
  i1028.path = i1029[0]
  request.r(i1029[1], i1029[2], 0, i1028, 'unityObject')
  return i1028
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i1030 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i1031 = data
  var i1033 = i1031[0]
  var i1032 = []
  for(var i = 0; i < i1033.length; i += 1) {
    i1032.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i1033[i + 0]) );
  }
  i1030.scriptsExecutionOrder = i1032
  var i1035 = i1031[1]
  var i1034 = []
  for(var i = 0; i < i1035.length; i += 1) {
    i1034.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i1035[i + 0]) );
  }
  i1030.sortingLayers = i1034
  var i1037 = i1031[2]
  var i1036 = []
  for(var i = 0; i < i1037.length; i += 1) {
    i1036.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i1037[i + 0]) );
  }
  i1030.cullingLayers = i1036
  i1030.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i1031[3], i1030.timeSettings)
  i1030.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i1031[4], i1030.physicsSettings)
  i1030.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i1031[5], i1030.physics2DSettings)
  i1030.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i1031[6], i1030.qualitySettings)
  i1030.enableRealtimeShadows = !!i1031[7]
  i1030.enableAutoInstancing = !!i1031[8]
  i1030.enableStaticBatching = !!i1031[9]
  i1030.enableDynamicBatching = !!i1031[10]
  i1030.usePreservativeDynamicBatching = !!i1031[11]
  i1030.lightmapEncodingQuality = i1031[12]
  i1030.desiredColorSpace = i1031[13]
  var i1039 = i1031[14]
  var i1038 = []
  for(var i = 0; i < i1039.length; i += 1) {
    i1038.push( i1039[i + 0] );
  }
  i1030.allTags = i1038
  return i1030
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i1042 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i1043 = data
  i1042.name = i1043[0]
  i1042.value = i1043[1]
  return i1042
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i1046 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i1047 = data
  i1046.id = i1047[0]
  i1046.name = i1047[1]
  i1046.value = i1047[2]
  return i1046
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i1050 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i1051 = data
  i1050.id = i1051[0]
  i1050.name = i1051[1]
  return i1050
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i1052 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i1053 = data
  i1052.fixedDeltaTime = i1053[0]
  i1052.maximumDeltaTime = i1053[1]
  i1052.timeScale = i1053[2]
  i1052.maximumParticleTimestep = i1053[3]
  return i1052
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i1054 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i1055 = data
  i1054.gravity = new pc.Vec3( i1055[0], i1055[1], i1055[2] )
  i1054.defaultSolverIterations = i1055[3]
  i1054.bounceThreshold = i1055[4]
  i1054.autoSyncTransforms = !!i1055[5]
  i1054.autoSimulation = !!i1055[6]
  var i1057 = i1055[7]
  var i1056 = []
  for(var i = 0; i < i1057.length; i += 1) {
    i1056.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i1057[i + 0]) );
  }
  i1054.collisionMatrix = i1056
  return i1054
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i1060 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i1061 = data
  i1060.enabled = !!i1061[0]
  i1060.layerId = i1061[1]
  i1060.otherLayerId = i1061[2]
  return i1060
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i1062 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i1063 = data
  request.r(i1063[0], i1063[1], 0, i1062, 'material')
  i1062.gravity = new pc.Vec2( i1063[2], i1063[3] )
  i1062.positionIterations = i1063[4]
  i1062.velocityIterations = i1063[5]
  i1062.velocityThreshold = i1063[6]
  i1062.maxLinearCorrection = i1063[7]
  i1062.maxAngularCorrection = i1063[8]
  i1062.maxTranslationSpeed = i1063[9]
  i1062.maxRotationSpeed = i1063[10]
  i1062.baumgarteScale = i1063[11]
  i1062.baumgarteTOIScale = i1063[12]
  i1062.timeToSleep = i1063[13]
  i1062.linearSleepTolerance = i1063[14]
  i1062.angularSleepTolerance = i1063[15]
  i1062.defaultContactOffset = i1063[16]
  i1062.autoSimulation = !!i1063[17]
  i1062.queriesHitTriggers = !!i1063[18]
  i1062.queriesStartInColliders = !!i1063[19]
  i1062.callbacksOnDisable = !!i1063[20]
  i1062.reuseCollisionCallbacks = !!i1063[21]
  i1062.autoSyncTransforms = !!i1063[22]
  var i1065 = i1063[23]
  var i1064 = []
  for(var i = 0; i < i1065.length; i += 1) {
    i1064.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i1065[i + 0]) );
  }
  i1062.collisionMatrix = i1064
  return i1062
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i1068 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i1069 = data
  i1068.enabled = !!i1069[0]
  i1068.layerId = i1069[1]
  i1068.otherLayerId = i1069[2]
  return i1068
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i1070 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i1071 = data
  var i1073 = i1071[0]
  var i1072 = []
  for(var i = 0; i < i1073.length; i += 1) {
    i1072.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i1073[i + 0]) );
  }
  i1070.qualityLevels = i1072
  var i1075 = i1071[1]
  var i1074 = []
  for(var i = 0; i < i1075.length; i += 1) {
    i1074.push( i1075[i + 0] );
  }
  i1070.names = i1074
  i1070.shadows = i1071[2]
  i1070.anisotropicFiltering = i1071[3]
  i1070.antiAliasing = i1071[4]
  i1070.lodBias = i1071[5]
  i1070.shadowCascades = i1071[6]
  i1070.shadowDistance = i1071[7]
  i1070.shadowmaskMode = i1071[8]
  i1070.shadowProjection = i1071[9]
  i1070.shadowResolution = i1071[10]
  i1070.softParticles = !!i1071[11]
  i1070.softVegetation = !!i1071[12]
  i1070.activeColorSpace = i1071[13]
  i1070.desiredColorSpace = i1071[14]
  i1070.masterTextureLimit = i1071[15]
  i1070.maxQueuedFrames = i1071[16]
  i1070.particleRaycastBudget = i1071[17]
  i1070.pixelLightCount = i1071[18]
  i1070.realtimeReflectionProbes = !!i1071[19]
  i1070.shadowCascade2Split = i1071[20]
  i1070.shadowCascade4Split = new pc.Vec3( i1071[21], i1071[22], i1071[23] )
  i1070.streamingMipmapsActive = !!i1071[24]
  i1070.vSyncCount = i1071[25]
  i1070.asyncUploadBufferSize = i1071[26]
  i1070.asyncUploadTimeSlice = i1071[27]
  i1070.billboardsFaceCameraPosition = !!i1071[28]
  i1070.shadowNearPlaneOffset = i1071[29]
  i1070.streamingMipmapsMemoryBudget = i1071[30]
  i1070.maximumLODLevel = i1071[31]
  i1070.streamingMipmapsAddAllCameras = !!i1071[32]
  i1070.streamingMipmapsMaxLevelReduction = i1071[33]
  i1070.streamingMipmapsRenderersPerFrame = i1071[34]
  i1070.resolutionScalingFixedDPIFactor = i1071[35]
  i1070.streamingMipmapsMaxFileIORequests = i1071[36]
  i1070.currentQualityLevel = i1071[37]
  return i1070
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame"] = function (request, data, root) {
  var i1080 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame' )
  var i1081 = data
  i1080.weight = i1081[0]
  i1080.vertices = i1081[1]
  i1080.normals = i1081[2]
  i1080.tangents = i1081[3]
  return i1080
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i1082 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i1083 = data
  request.r(i1083[0], i1083[1], 0, i1082, 'm_ObjectArgument')
  i1082.m_ObjectArgumentAssemblyTypeName = i1083[2]
  i1082.m_IntArgument = i1083[3]
  i1082.m_FloatArgument = i1083[4]
  i1082.m_StringArgument = i1083[5]
  i1082.m_BoolArgument = !!i1083[6]
  return i1082
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10,"graphicsFormat":11,"sRGBTexture":12,"desiredColorSpace":13,"wrapU":14,"wrapV":15},"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Components.Transform":{"position":0,"scale":3,"rotation":6},"Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer":{"color":0,"sprite":4,"flipX":6,"flipY":7,"drawMode":8,"size":9,"tileMode":11,"adaptiveModeThreshold":12,"maskInteraction":13,"spriteSortPoint":14,"enabled":15,"sharedMaterial":16,"sharedMaterials":18,"receiveShadows":19,"shadowCastingMode":20,"sortingLayerID":21,"sortingOrder":22,"lightmapIndex":23,"lightmapSceneIndex":24,"lightmapScaleOffset":25,"lightProbeUsage":29,"reflectionProbeUsage":30},"Luna.Unity.DTO.UnityEngine.Components.CircleCollider2D":{"radius":0,"enabled":1,"isTrigger":2,"usedByEffector":3,"density":4,"offset":5,"material":7},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D":{"usedByComposite":0,"autoTiling":1,"size":2,"edgeRadius":4,"enabled":5,"isTrigger":6,"usedByEffector":7,"density":8,"offset":9,"material":11},"Luna.Unity.DTO.UnityEngine.Components.Rigidbody2D":{"bodyType":0,"material":1,"simulated":3,"useAutoMass":4,"mass":5,"drag":6,"angularDrag":7,"gravityScale":8,"collisionDetectionMode":9,"sleepMode":10,"constraints":11},"Luna.Unity.DTO.UnityEngine.Components.Animator":{"animatorController":0,"avatar":2,"updateMode":4,"hasTransformHierarchy":5,"applyRootMotion":6,"humanBones":7,"enabled":8},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystem":{"main":0,"colorBySpeed":1,"colorOverLifetime":2,"emission":3,"rotationBySpeed":4,"rotationOverLifetime":5,"shape":6,"sizeBySpeed":7,"sizeOverLifetime":8,"textureSheetAnimation":9,"velocityOverLifetime":10,"noise":11,"inheritVelocity":12,"forceOverLifetime":13,"limitVelocityOverLifetime":14,"useAutoRandomSeed":15,"randomSeed":16},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule":{"duration":0,"loop":1,"prewarm":2,"startDelay":3,"startLifetime":4,"startSpeed":5,"startSize3D":6,"startSizeX":7,"startSizeY":8,"startSizeZ":9,"startRotation3D":10,"startRotationX":11,"startRotationY":12,"startRotationZ":13,"startColor":14,"gravityModifier":15,"simulationSpace":16,"customSimulationSpace":17,"simulationSpeed":19,"useUnscaledTime":20,"scalingMode":21,"playOnAwake":22,"maxParticles":23,"emitterVelocityMode":24,"stopAction":25},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve":{"mode":0,"curveMin":1,"curveMax":2,"curveMultiplier":3,"constantMin":4,"constantMax":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient":{"mode":0,"gradientMin":1,"gradientMax":2,"colorMin":3,"colorMax":7},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient":{"mode":0,"colorKeys":1,"alphaKeys":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule":{"enabled":0,"color":1,"range":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey":{"color":0,"time":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey":{"alpha":0,"time":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule":{"enabled":0,"color":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule":{"enabled":0,"rateOverTime":1,"rateOverDistance":2,"bursts":3},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst":{"count":0,"cycleCount":1,"minCount":2,"maxCount":3,"repeatInterval":4,"time":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule":{"enabled":0,"shapeType":1,"randomDirectionAmount":2,"sphericalDirectionAmount":3,"randomPositionAmount":4,"alignToDirection":5,"radius":6,"radiusMode":7,"radiusSpread":8,"radiusSpeed":9,"radiusThickness":10,"angle":11,"length":12,"boxThickness":13,"meshShapeType":16,"mesh":17,"meshRenderer":19,"skinnedMeshRenderer":21,"useMeshMaterialIndex":23,"meshMaterialIndex":24,"useMeshColors":25,"normalOffset":26,"arc":27,"arcMode":28,"arcSpread":29,"arcSpeed":30,"donutRadius":31,"position":32,"rotation":35,"scale":38},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule":{"enabled":0,"mode":1,"animation":2,"numTilesX":3,"numTilesY":4,"useRandomRow":5,"frameOverTime":6,"startFrame":7,"cycleCount":8,"rowIndex":9,"flipU":10,"flipV":11,"spriteCount":12,"sprites":13},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"radial":4,"speedModifier":5,"space":6,"orbitalX":7,"orbitalY":8,"orbitalZ":9,"orbitalOffsetX":10,"orbitalOffsetY":11,"orbitalOffsetZ":12},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule":{"enabled":0,"separateAxes":1,"strengthX":2,"strengthY":3,"strengthZ":4,"frequency":5,"damping":6,"octaveCount":7,"octaveMultiplier":8,"octaveScale":9,"quality":10,"scrollSpeed":11,"scrollSpeedMultiplier":12,"remapEnabled":13,"remapX":14,"remapY":15,"remapZ":16,"positionAmount":17,"rotationAmount":18,"sizeAmount":19},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule":{"enabled":0,"mode":1,"curve":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"space":4,"randomized":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule":{"enabled":0,"limit":1,"limitX":2,"limitY":3,"limitZ":4,"dampen":5,"separateAxes":6,"space":7,"drag":8,"multiplyDragByParticleSize":9,"multiplyDragByParticleVelocity":10},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer":{"mesh":0,"meshCount":2,"activeVertexStreamsCount":3,"alignment":4,"renderMode":5,"sortMode":6,"lengthScale":7,"velocityScale":8,"cameraVelocityScale":9,"normalDirection":10,"sortingFudge":11,"minParticleSize":12,"maxParticleSize":13,"pivot":14,"trailMaterial":17,"applyActiveColorSpace":19,"enabled":20,"sharedMaterial":21,"sharedMaterials":23,"receiveShadows":24,"shadowCastingMode":25,"sortingLayerID":26,"sortingOrder":27,"lightmapIndex":28,"lightmapSceneIndex":29,"lightmapScaleOffset":30,"lightProbeUsage":34,"reflectionProbeUsage":35},"Luna.Unity.DTO.UnityEngine.Assets.Mesh":{"name":0,"halfPrecision":1,"useSimplification":2,"useUInt32IndexFormat":3,"vertexCount":4,"aabb":5,"streams":6,"vertices":7,"subMeshes":8,"bindposes":9,"blendShapes":10},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh":{"triangles":0},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape":{"name":0,"frames":1},"Luna.Unity.DTO.UnityEngine.Components.SortingGroup":{"sortingLayerIndex":0,"sortingOrder":1,"sortingLayerName":2,"enabled":3},"Luna.Unity.DTO.UnityEngine.Components.HingeJoint2D":{"useLimits":0,"limits":1,"useMotor":2,"motor":3,"anchor":4,"connectedAnchor":6,"autoConfigureConnectedAnchor":8,"connectedBody":9,"breakForce":11,"breakTorque":12,"enableCollision":13,"enabled":14},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"aspect":0,"orthographic":1,"orthographicSize":2,"backgroundColor":3,"nearClipPlane":7,"farClipPlane":8,"fieldOfView":9,"depth":10,"clearFlags":11,"cullingMask":12,"rect":13,"targetTexture":14,"usePhysicalProperties":16,"focalLength":17,"sensorSize":18,"lensShift":20,"gateFit":22,"commandBufferCount":23,"cameraType":24,"enabled":25},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"planeDistance":0,"referencePixelsPerUnit":1,"isFallbackOverlay":2,"renderMode":3,"renderOrder":4,"sortingLayerName":5,"sortingOrder":6,"scaleFactor":7,"worldCamera":8,"overrideSorting":10,"pixelPerfect":11,"targetDisplay":12,"overridePixelPerfect":13,"enabled":14},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Components.TargetJoint2D":{"autoConfigureTarget":0,"target":1,"anchor":3,"maxForce":5,"dampingRatio":6,"frequency":7,"connectedBody":8,"breakForce":10,"breakTorque":11,"enableCollision":12,"enabled":13},"Luna.Unity.DTO.UnityEngine.Components.AudioSource":{"clip":0,"outputAudioMixerGroup":2,"playOnAwake":4,"loop":5,"time":6,"volume":7,"pitch":8,"enabled":9},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"customReflection":36,"defaultReflection":38,"defaultReflectionMode":40,"defaultReflectionResolution":41,"sunLightObjectId":42,"pixelLightCount":43,"defaultReflectionHDR":44,"hasLightDataAsset":45,"hasManualGenerate":46},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2,"shadowMask":4},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"hasDepthOnlyPass":10,"isCreatedByShaderGraph":11,"disableBatching":12,"compiled":13},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"exportedForWebGl2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.AudioClip":{"name":0},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip":{"name":0,"wrapMode":1,"isLooping":2,"length":3,"curves":4,"events":5,"halfPrecision":6,"_frameRate":7,"localBounds":8,"hasMuscleCurves":9,"clipMuscleConstant":10,"clipBindingConstant":11},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve":{"path":0,"hash":1,"componentType":2,"property":3,"keys":4,"objectReferenceKeys":5},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey":{"time":0,"value":1},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent":{"functionName":0,"floatParameter":1,"intParameter":2,"stringParameter":3,"objectReferenceParameter":4,"time":6},"Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds":{"center":0,"extends":3},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant":{"genericBindings":0,"pptrCurveMapping":1},"Luna.Unity.DTO.UnityEngine.Assets.Font":{"name":0,"ascent":1,"originalLineHeight":2,"fontSize":3,"characterInfo":4,"texture":5,"originalFontSize":7},"Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo":{"index":0,"advance":1,"bearing":2,"glyphWidth":3,"glyphHeight":4,"minX":5,"maxX":6,"minY":7,"maxY":8,"uvBottomLeftX":9,"uvBottomLeftY":10,"uvBottomRightX":11,"uvBottomRightY":12,"uvTopLeftX":13,"uvTopLeftY":14,"uvTopRightX":15,"uvTopRightY":16},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController":{"name":0,"layers":1,"parameters":2,"animationClips":3,"avatarUnsupported":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer":{"name":0,"defaultWeight":1,"blendingMode":2,"avatarMask":3,"syncedLayerIndex":4,"syncedLayerAffectsTiming":5,"syncedLayers":6,"stateMachine":7},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine":{"id":0,"name":1,"path":2,"states":3,"machines":4,"entryStateTransitions":5,"exitStateTransitions":6,"anyStateTransitions":7,"defaultStateId":8},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState":{"id":0,"name":1,"cycleOffset":2,"cycleOffsetParameter":3,"cycleOffsetParameterActive":4,"mirror":5,"mirrorParameter":6,"mirrorParameterActive":7,"motionId":8,"nameHash":9,"fullPathHash":10,"speed":11,"speedParameter":12,"speedParameterActive":13,"tag":14,"tagHash":15,"writeDefaultValues":16,"behaviours":17,"transitions":18},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition":{"fullPath":0,"canTransitionToSelf":1,"duration":2,"exitTime":3,"hasExitTime":4,"hasFixedDuration":5,"interruptionSource":6,"offset":7,"orderedInterruption":8,"destinationStateId":9,"isExit":10,"mute":11,"solo":12,"conditions":13},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition":{"mode":0,"parameter":1,"threshold":2},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition":{"destinationStateId":0,"isExit":1,"mute":2,"solo":3,"conditions":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter":{"defaultBool":0,"defaultFloat":1,"defaultInt":2,"name":3,"nameHash":4,"type":5},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableStaticBatching":9,"enableDynamicBatching":10,"usePreservativeDynamicBatching":11,"lightmapEncodingQuality":12,"desiredColorSpace":13,"allTags":14},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame":{"weight":0,"vertices":1,"normals":2,"tangents":3}}

Deserializers.requiredComponents = {"55":[56],"57":[56],"58":[56],"59":[56],"60":[56],"61":[56],"62":[63],"64":[24],"65":[66],"67":[66],"68":[66],"69":[66],"70":[66],"71":[66],"72":[11],"73":[11],"74":[11],"75":[11],"76":[11],"77":[11],"22":[11],"78":[11],"79":[11],"44":[11],"80":[11],"81":[11],"82":[11],"83":[24],"84":[85],"86":[87],"88":[87],"30":[29],"89":[2],"90":[24],"91":[92],"93":[29],"94":[33,29],"95":[85],"96":[33,29],"97":[29],"98":[29],"99":[85,29],"100":[29,33],"101":[102],"103":[102],"104":[102],"105":[29],"106":[29],"32":[30],"37":[33,29],"36":[29],"31":[30],"107":[29],"108":[29],"109":[29],"110":[29],"111":[29],"112":[29],"113":[29],"114":[29],"115":[29],"34":[33,29],"116":[29],"117":[29],"118":[29],"119":[29],"39":[33,29],"120":[29],"121":[27],"122":[27],"28":[27],"123":[27],"124":[24],"125":[24]}

Deserializers.types = ["UnityEngine.Shader","UnityEngine.Transform","UnityEngine.SpriteRenderer","UnityEngine.Sprite","UnityEngine.Material","UnityEngine.CircleCollider2D","UnityEngine.MonoBehaviour","BulletController","UnityEngine.AudioClip","UnityEngine.BoxCollider2D","KunaiController","UnityEngine.Rigidbody2D","BombController","UnityEngine.Animator","UnityEditor.Animations.AnimatorController","UnityEngine.ParticleSystem","UnityEngine.ParticleSystemRenderer","BlockController","UnityEngine.GameObject","UnityEngine.Mesh","UnityEngine.Rendering.SortingGroup","MonsterController","UnityEngine.HingeJoint2D","BalanceController","UnityEngine.Camera","UnityEngine.AudioListener","UnityEngine.EventSystems.UIBehaviour","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","UnityEngine.RectTransform","UnityEngine.Canvas","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","UnityEngine.CanvasRenderer","UnityEngine.UI.RawImage","UnityEngine.Texture2D","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.Image","UnityEngine.UI.Button","UnityEngine.UI.Text","UnityEngine.Font","TutController","DG.Tweening.DOTweenAnimation","PlayerController","UnityEngine.TargetJoint2D","ShootController","DropController","DefenseController","GameController","LayoutController","LunaController","AudioController","UnityEngine.AudioSource","VFXController","DG.Tweening.Core.DOTweenSettings","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.SkinnedMeshRenderer","UnityEngine.FlareLayer","UnityEngine.CharacterJoint","UnityEngine.Rigidbody","UnityEngine.ConfigurableJoint","UnityEngine.ConstantForce","UnityEngine.FixedJoint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.CompositeCollider2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.MeshRenderer","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","UnityEngine.U2D.Animation.SpriteSkin","UnityEngine.U2D.PixelPerfectCamera","UnityEngine.U2D.SpriteShapeController","UnityEngine.U2D.SpriteShapeRenderer","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text","TMPro.TextContainer","TMPro.TextMeshPro","TMPro.TextMeshProUGUI","Unity.VisualScripting.SceneVariables","Unity.VisualScripting.Variables","Unity.VisualScripting.ScriptMachine","Unity.VisualScripting.StateMachine","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.Mask","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RectMask2D","UnityEngine.UI.ScrollRect","UnityEngine.UI.Scrollbar","UnityEngine.UI.Slider","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster"]

Deserializers.unityVersion = "6000.0.78f1";

Deserializers.productName = "SSP_Luna-SSP_V03";

Deserializers.lunaInitializationTime = "07/31/2026 07:07:26";

Deserializers.lunaDaysRunning = "0.0";

Deserializers.lunaVersion = "7.2.0";

Deserializers.lunaSHA = "ea08d29afe2968efcb8d91d5624f033c6485cc68";

Deserializers.creativeName = "SSP_V04_YenTTH_TamNTM";

Deserializers.lunaAppID = "41346";

Deserializers.projectId = "ff24b2211bd970c4d920bad068d2912a";

Deserializers.packagesInfo = "com.unity.ugui: 2.0.0";

Deserializers.externalJsLibraries = "";

Deserializers.androidLink = ( typeof window !== "undefined")&&window.$environment.packageConfig.androidLink?window.$environment.packageConfig.androidLink:'Empty';

Deserializers.iosLink = ( typeof window !== "undefined")&&window.$environment.packageConfig.iosLink?window.$environment.packageConfig.iosLink:'Empty';

Deserializers.base64Enabled = "True";

Deserializers.minifyEnabled = "True";

Deserializers.isForceUncompressed = "False";

Deserializers.isAntiAliasingEnabled = "False";

Deserializers.isRuntimeAnalysisEnabledForCode = "False";

Deserializers.runtimeAnalysisExcludedClassesCount = "1760";

Deserializers.runtimeAnalysisExcludedMethodsCount = "4464";

Deserializers.runtimeAnalysisExcludedModules = "physics3d";

Deserializers.isRuntimeAnalysisEnabledForShaders = "True";

Deserializers.isRealtimeShadowsEnabled = "False";

Deserializers.isLunaCompilerV2Used = "False";

Deserializers.companyName = "DefaultCompany";

Deserializers.buildPlatform = "StandaloneWindows64";

Deserializers.applicationIdentifier = "com.DefaultCompany.2D-Project";

Deserializers.disableAntiAliasing = true;

Deserializers.graphicsConstraint = 24;

Deserializers.linearColorSpace = true;

Deserializers.buildID = "341ffe8a-0620-43e6-bd68-70551c3a77da";

Deserializers.runtimeInitializeOnLoadInfos = [[["Unity","PerformanceTesting","PerformanceTest","ResetStaticsOnLoad"],["UnityEngine","U2D","Animation","GpuDeformationSystem","CreateFallbackBuffer"],["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"],["UnityEngine","AI","NavMesh","ClearPreUpdateListeners"]],[["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"]],[],[["Unity","PerformanceTesting","Data","RunSettings","ResetStaticsOnLoad"],["Unity","PerformanceTesting","PlayerCallbacks","ResetStaticsOnLoad"]]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

