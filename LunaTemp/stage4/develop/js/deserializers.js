var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i372 = root || request.c( 'UnityEngine.JointSpring' )
  var i373 = data
  i372.spring = i373[0]
  i372.damper = i373[1]
  i372.targetPosition = i373[2]
  return i372
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i374 = root || request.c( 'UnityEngine.JointMotor' )
  var i375 = data
  i374.m_TargetVelocity = i375[0]
  i374.m_Force = i375[1]
  i374.m_FreeSpin = i375[2]
  return i374
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i376 = root || request.c( 'UnityEngine.JointLimits' )
  var i377 = data
  i376.m_Min = i377[0]
  i376.m_Max = i377[1]
  i376.m_Bounciness = i377[2]
  i376.m_BounceMinVelocity = i377[3]
  i376.m_ContactDistance = i377[4]
  i376.minBounce = i377[5]
  i376.maxBounce = i377[6]
  return i376
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i378 = root || request.c( 'UnityEngine.JointDrive' )
  var i379 = data
  i378.m_PositionSpring = i379[0]
  i378.m_PositionDamper = i379[1]
  i378.m_MaximumForce = i379[2]
  i378.m_UseAcceleration = i379[3]
  return i378
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i380 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i381 = data
  i380.m_Spring = i381[0]
  i380.m_Damper = i381[1]
  return i380
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i382 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i383 = data
  i382.m_Limit = i383[0]
  i382.m_Bounciness = i383[1]
  i382.m_ContactDistance = i383[2]
  return i382
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i384 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i385 = data
  i384.m_ExtremumSlip = i385[0]
  i384.m_ExtremumValue = i385[1]
  i384.m_AsymptoteSlip = i385[2]
  i384.m_AsymptoteValue = i385[3]
  i384.m_Stiffness = i385[4]
  return i384
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i386 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i387 = data
  i386.m_LowerAngle = i387[0]
  i386.m_UpperAngle = i387[1]
  return i386
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i388 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i389 = data
  i388.m_MotorSpeed = i389[0]
  i388.m_MaximumMotorTorque = i389[1]
  return i388
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i390 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i391 = data
  i390.m_DampingRatio = i391[0]
  i390.m_Frequency = i391[1]
  i390.m_Angle = i391[2]
  return i390
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i392 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i393 = data
  i392.m_LowerTranslation = i393[0]
  i392.m_UpperTranslation = i393[1]
  return i392
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i394 = root || new pc.UnityMaterial()
  var i395 = data
  i394.name = i395[0]
  request.r(i395[1], i395[2], 0, i394, 'shader')
  i394.renderQueue = i395[3]
  i394.enableInstancing = !!i395[4]
  var i397 = i395[5]
  var i396 = []
  for(var i = 0; i < i397.length; i += 1) {
    i396.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i397[i + 0]) );
  }
  i394.floatParameters = i396
  var i399 = i395[6]
  var i398 = []
  for(var i = 0; i < i399.length; i += 1) {
    i398.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i399[i + 0]) );
  }
  i394.colorParameters = i398
  var i401 = i395[7]
  var i400 = []
  for(var i = 0; i < i401.length; i += 1) {
    i400.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i401[i + 0]) );
  }
  i394.vectorParameters = i400
  var i403 = i395[8]
  var i402 = []
  for(var i = 0; i < i403.length; i += 1) {
    i402.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i403[i + 0]) );
  }
  i394.textureParameters = i402
  var i405 = i395[9]
  var i404 = []
  for(var i = 0; i < i405.length; i += 1) {
    i404.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i405[i + 0]) );
  }
  i394.materialFlags = i404
  return i394
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i408 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i409 = data
  i408.name = i409[0]
  i408.value = i409[1]
  return i408
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i412 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i413 = data
  i412.name = i413[0]
  i412.value = new pc.Color(i413[1], i413[2], i413[3], i413[4])
  return i412
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i416 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i417 = data
  i416.name = i417[0]
  i416.value = new pc.Vec4( i417[1], i417[2], i417[3], i417[4] )
  return i416
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i420 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i421 = data
  i420.name = i421[0]
  request.r(i421[1], i421[2], 0, i420, 'value')
  return i420
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i424 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i425 = data
  i424.name = i425[0]
  i424.enabled = !!i425[1]
  return i424
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i426 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i427 = data
  i426.name = i427[0]
  i426.width = i427[1]
  i426.height = i427[2]
  i426.mipmapCount = i427[3]
  i426.anisoLevel = i427[4]
  i426.filterMode = i427[5]
  i426.hdr = !!i427[6]
  i426.format = i427[7]
  i426.wrapMode = i427[8]
  i426.alphaIsTransparency = !!i427[9]
  i426.alphaSource = i427[10]
  i426.graphicsFormat = i427[11]
  i426.sRGBTexture = !!i427[12]
  i426.desiredColorSpace = i427[13]
  i426.wrapU = i427[14]
  i426.wrapV = i427[15]
  return i426
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i428 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i429 = data
  i428.position = new pc.Vec3( i429[0], i429[1], i429[2] )
  i428.scale = new pc.Vec3( i429[3], i429[4], i429[5] )
  i428.rotation = new pc.Quat(i429[6], i429[7], i429[8], i429[9])
  return i428
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystem"] = function (request, data, root) {
  var i430 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystem' )
  var i431 = data
  i430.main = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule', i431[0], i430.main)
  i430.colorBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule', i431[1], i430.colorBySpeed)
  i430.colorOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule', i431[2], i430.colorOverLifetime)
  i430.emission = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule', i431[3], i430.emission)
  i430.rotationBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule', i431[4], i430.rotationBySpeed)
  i430.rotationOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule', i431[5], i430.rotationOverLifetime)
  i430.shape = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule', i431[6], i430.shape)
  i430.sizeBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule', i431[7], i430.sizeBySpeed)
  i430.sizeOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule', i431[8], i430.sizeOverLifetime)
  i430.textureSheetAnimation = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule', i431[9], i430.textureSheetAnimation)
  i430.velocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule', i431[10], i430.velocityOverLifetime)
  i430.noise = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule', i431[11], i430.noise)
  i430.inheritVelocity = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule', i431[12], i430.inheritVelocity)
  i430.forceOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule', i431[13], i430.forceOverLifetime)
  i430.limitVelocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule', i431[14], i430.limitVelocityOverLifetime)
  i430.useAutoRandomSeed = !!i431[15]
  i430.randomSeed = i431[16]
  return i430
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule"] = function (request, data, root) {
  var i432 = root || new pc.ParticleSystemMain()
  var i433 = data
  i432.duration = i433[0]
  i432.loop = !!i433[1]
  i432.prewarm = !!i433[2]
  i432.startDelay = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i433[3], i432.startDelay)
  i432.startLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i433[4], i432.startLifetime)
  i432.startSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i433[5], i432.startSpeed)
  i432.startSize3D = !!i433[6]
  i432.startSizeX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i433[7], i432.startSizeX)
  i432.startSizeY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i433[8], i432.startSizeY)
  i432.startSizeZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i433[9], i432.startSizeZ)
  i432.startRotation3D = !!i433[10]
  i432.startRotationX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i433[11], i432.startRotationX)
  i432.startRotationY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i433[12], i432.startRotationY)
  i432.startRotationZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i433[13], i432.startRotationZ)
  i432.startColor = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i433[14], i432.startColor)
  i432.gravityModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i433[15], i432.gravityModifier)
  i432.simulationSpace = i433[16]
  request.r(i433[17], i433[18], 0, i432, 'customSimulationSpace')
  i432.simulationSpeed = i433[19]
  i432.useUnscaledTime = !!i433[20]
  i432.scalingMode = i433[21]
  i432.playOnAwake = !!i433[22]
  i432.maxParticles = i433[23]
  i432.emitterVelocityMode = i433[24]
  i432.stopAction = i433[25]
  return i432
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve"] = function (request, data, root) {
  var i434 = root || new pc.MinMaxCurve()
  var i435 = data
  i434.mode = i435[0]
  i434.curveMin = new pc.AnimationCurve( { keys_flow: i435[1] } )
  i434.curveMax = new pc.AnimationCurve( { keys_flow: i435[2] } )
  i434.curveMultiplier = i435[3]
  i434.constantMin = i435[4]
  i434.constantMax = i435[5]
  return i434
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient"] = function (request, data, root) {
  var i436 = root || new pc.MinMaxGradient()
  var i437 = data
  i436.mode = i437[0]
  i436.gradientMin = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i437[1], i436.gradientMin)
  i436.gradientMax = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i437[2], i436.gradientMax)
  i436.colorMin = new pc.Color(i437[3], i437[4], i437[5], i437[6])
  i436.colorMax = new pc.Color(i437[7], i437[8], i437[9], i437[10])
  return i436
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient"] = function (request, data, root) {
  var i438 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient' )
  var i439 = data
  i438.mode = i439[0]
  var i441 = i439[1]
  var i440 = []
  for(var i = 0; i < i441.length; i += 1) {
    i440.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey', i441[i + 0]) );
  }
  i438.colorKeys = i440
  var i443 = i439[2]
  var i442 = []
  for(var i = 0; i < i443.length; i += 1) {
    i442.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey', i443[i + 0]) );
  }
  i438.alphaKeys = i442
  return i438
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule"] = function (request, data, root) {
  var i444 = root || new pc.ParticleSystemColorBySpeed()
  var i445 = data
  i444.enabled = !!i445[0]
  i444.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i445[1], i444.color)
  i444.range = new pc.Vec2( i445[2], i445[3] )
  return i444
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey"] = function (request, data, root) {
  var i448 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey' )
  var i449 = data
  i448.color = new pc.Color(i449[0], i449[1], i449[2], i449[3])
  i448.time = i449[4]
  return i448
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey"] = function (request, data, root) {
  var i452 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey' )
  var i453 = data
  i452.alpha = i453[0]
  i452.time = i453[1]
  return i452
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule"] = function (request, data, root) {
  var i454 = root || new pc.ParticleSystemColorOverLifetime()
  var i455 = data
  i454.enabled = !!i455[0]
  i454.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i455[1], i454.color)
  return i454
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule"] = function (request, data, root) {
  var i456 = root || new pc.ParticleSystemEmitter()
  var i457 = data
  i456.enabled = !!i457[0]
  i456.rateOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i457[1], i456.rateOverTime)
  i456.rateOverDistance = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i457[2], i456.rateOverDistance)
  var i459 = i457[3]
  var i458 = []
  for(var i = 0; i < i459.length; i += 1) {
    i458.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst', i459[i + 0]) );
  }
  i456.bursts = i458
  return i456
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst"] = function (request, data, root) {
  var i462 = root || new pc.ParticleSystemBurst()
  var i463 = data
  i462.count = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i463[0], i462.count)
  i462.cycleCount = i463[1]
  i462.minCount = i463[2]
  i462.maxCount = i463[3]
  i462.repeatInterval = i463[4]
  i462.time = i463[5]
  return i462
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule"] = function (request, data, root) {
  var i464 = root || new pc.ParticleSystemRotationBySpeed()
  var i465 = data
  i464.enabled = !!i465[0]
  i464.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i465[1], i464.x)
  i464.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i465[2], i464.y)
  i464.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i465[3], i464.z)
  i464.separateAxes = !!i465[4]
  i464.range = new pc.Vec2( i465[5], i465[6] )
  return i464
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule"] = function (request, data, root) {
  var i466 = root || new pc.ParticleSystemRotationOverLifetime()
  var i467 = data
  i466.enabled = !!i467[0]
  i466.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i467[1], i466.x)
  i466.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i467[2], i466.y)
  i466.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i467[3], i466.z)
  i466.separateAxes = !!i467[4]
  return i466
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule"] = function (request, data, root) {
  var i468 = root || new pc.ParticleSystemShape()
  var i469 = data
  i468.enabled = !!i469[0]
  i468.shapeType = i469[1]
  i468.randomDirectionAmount = i469[2]
  i468.sphericalDirectionAmount = i469[3]
  i468.randomPositionAmount = i469[4]
  i468.alignToDirection = !!i469[5]
  i468.radius = i469[6]
  i468.radiusMode = i469[7]
  i468.radiusSpread = i469[8]
  i468.radiusSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i469[9], i468.radiusSpeed)
  i468.radiusThickness = i469[10]
  i468.angle = i469[11]
  i468.length = i469[12]
  i468.boxThickness = new pc.Vec3( i469[13], i469[14], i469[15] )
  i468.meshShapeType = i469[16]
  request.r(i469[17], i469[18], 0, i468, 'mesh')
  request.r(i469[19], i469[20], 0, i468, 'meshRenderer')
  request.r(i469[21], i469[22], 0, i468, 'skinnedMeshRenderer')
  i468.useMeshMaterialIndex = !!i469[23]
  i468.meshMaterialIndex = i469[24]
  i468.useMeshColors = !!i469[25]
  i468.normalOffset = i469[26]
  i468.arc = i469[27]
  i468.arcMode = i469[28]
  i468.arcSpread = i469[29]
  i468.arcSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i469[30], i468.arcSpeed)
  i468.donutRadius = i469[31]
  i468.position = new pc.Vec3( i469[32], i469[33], i469[34] )
  i468.rotation = new pc.Vec3( i469[35], i469[36], i469[37] )
  i468.scale = new pc.Vec3( i469[38], i469[39], i469[40] )
  return i468
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule"] = function (request, data, root) {
  var i470 = root || new pc.ParticleSystemSizeBySpeed()
  var i471 = data
  i470.enabled = !!i471[0]
  i470.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i471[1], i470.x)
  i470.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i471[2], i470.y)
  i470.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i471[3], i470.z)
  i470.separateAxes = !!i471[4]
  i470.range = new pc.Vec2( i471[5], i471[6] )
  return i470
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule"] = function (request, data, root) {
  var i472 = root || new pc.ParticleSystemSizeOverLifetime()
  var i473 = data
  i472.enabled = !!i473[0]
  i472.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i473[1], i472.x)
  i472.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i473[2], i472.y)
  i472.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i473[3], i472.z)
  i472.separateAxes = !!i473[4]
  return i472
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule"] = function (request, data, root) {
  var i474 = root || new pc.ParticleSystemTextureSheetAnimation()
  var i475 = data
  i474.enabled = !!i475[0]
  i474.mode = i475[1]
  i474.animation = i475[2]
  i474.numTilesX = i475[3]
  i474.numTilesY = i475[4]
  i474.useRandomRow = !!i475[5]
  i474.frameOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i475[6], i474.frameOverTime)
  i474.startFrame = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i475[7], i474.startFrame)
  i474.cycleCount = i475[8]
  i474.rowIndex = i475[9]
  i474.flipU = i475[10]
  i474.flipV = i475[11]
  i474.spriteCount = i475[12]
  var i477 = i475[13]
  var i476 = []
  for(var i = 0; i < i477.length; i += 2) {
  request.r(i477[i + 0], i477[i + 1], 2, i476, '')
  }
  i474.sprites = i476
  return i474
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule"] = function (request, data, root) {
  var i480 = root || new pc.ParticleSystemVelocityOverLifetime()
  var i481 = data
  i480.enabled = !!i481[0]
  i480.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i481[1], i480.x)
  i480.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i481[2], i480.y)
  i480.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i481[3], i480.z)
  i480.radial = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i481[4], i480.radial)
  i480.speedModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i481[5], i480.speedModifier)
  i480.space = i481[6]
  i480.orbitalX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i481[7], i480.orbitalX)
  i480.orbitalY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i481[8], i480.orbitalY)
  i480.orbitalZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i481[9], i480.orbitalZ)
  i480.orbitalOffsetX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i481[10], i480.orbitalOffsetX)
  i480.orbitalOffsetY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i481[11], i480.orbitalOffsetY)
  i480.orbitalOffsetZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i481[12], i480.orbitalOffsetZ)
  return i480
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule"] = function (request, data, root) {
  var i482 = root || new pc.ParticleSystemNoise()
  var i483 = data
  i482.enabled = !!i483[0]
  i482.separateAxes = !!i483[1]
  i482.strengthX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i483[2], i482.strengthX)
  i482.strengthY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i483[3], i482.strengthY)
  i482.strengthZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i483[4], i482.strengthZ)
  i482.frequency = i483[5]
  i482.damping = !!i483[6]
  i482.octaveCount = i483[7]
  i482.octaveMultiplier = i483[8]
  i482.octaveScale = i483[9]
  i482.quality = i483[10]
  i482.scrollSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i483[11], i482.scrollSpeed)
  i482.scrollSpeedMultiplier = i483[12]
  i482.remapEnabled = !!i483[13]
  i482.remapX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i483[14], i482.remapX)
  i482.remapY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i483[15], i482.remapY)
  i482.remapZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i483[16], i482.remapZ)
  i482.positionAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i483[17], i482.positionAmount)
  i482.rotationAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i483[18], i482.rotationAmount)
  i482.sizeAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i483[19], i482.sizeAmount)
  return i482
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule"] = function (request, data, root) {
  var i484 = root || new pc.ParticleSystemInheritVelocity()
  var i485 = data
  i484.enabled = !!i485[0]
  i484.mode = i485[1]
  i484.curve = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i485[2], i484.curve)
  return i484
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule"] = function (request, data, root) {
  var i486 = root || new pc.ParticleSystemForceOverLifetime()
  var i487 = data
  i486.enabled = !!i487[0]
  i486.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i487[1], i486.x)
  i486.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i487[2], i486.y)
  i486.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i487[3], i486.z)
  i486.space = i487[4]
  i486.randomized = !!i487[5]
  return i486
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule"] = function (request, data, root) {
  var i488 = root || new pc.ParticleSystemLimitVelocityOverLifetime()
  var i489 = data
  i488.enabled = !!i489[0]
  i488.limit = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i489[1], i488.limit)
  i488.limitX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i489[2], i488.limitX)
  i488.limitY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i489[3], i488.limitY)
  i488.limitZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i489[4], i488.limitZ)
  i488.dampen = i489[5]
  i488.separateAxes = !!i489[6]
  i488.space = i489[7]
  i488.drag = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i489[8], i488.drag)
  i488.multiplyDragByParticleSize = !!i489[9]
  i488.multiplyDragByParticleVelocity = !!i489[10]
  return i488
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer"] = function (request, data, root) {
  var i490 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer' )
  var i491 = data
  request.r(i491[0], i491[1], 0, i490, 'mesh')
  i490.meshCount = i491[2]
  i490.activeVertexStreamsCount = i491[3]
  i490.alignment = i491[4]
  i490.renderMode = i491[5]
  i490.sortMode = i491[6]
  i490.lengthScale = i491[7]
  i490.velocityScale = i491[8]
  i490.cameraVelocityScale = i491[9]
  i490.normalDirection = i491[10]
  i490.sortingFudge = i491[11]
  i490.minParticleSize = i491[12]
  i490.maxParticleSize = i491[13]
  i490.pivot = new pc.Vec3( i491[14], i491[15], i491[16] )
  request.r(i491[17], i491[18], 0, i490, 'trailMaterial')
  i490.applyActiveColorSpace = !!i491[19]
  i490.enabled = !!i491[20]
  request.r(i491[21], i491[22], 0, i490, 'sharedMaterial')
  var i493 = i491[23]
  var i492 = []
  for(var i = 0; i < i493.length; i += 2) {
  request.r(i493[i + 0], i493[i + 1], 2, i492, '')
  }
  i490.sharedMaterials = i492
  i490.receiveShadows = !!i491[24]
  i490.shadowCastingMode = i491[25]
  i490.sortingLayerID = i491[26]
  i490.sortingOrder = i491[27]
  i490.lightmapIndex = i491[28]
  i490.lightmapSceneIndex = i491[29]
  i490.lightmapScaleOffset = new pc.Vec4( i491[30], i491[31], i491[32], i491[33] )
  i490.lightProbeUsage = i491[34]
  i490.reflectionProbeUsage = i491[35]
  return i490
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i496 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i497 = data
  i496.name = i497[0]
  i496.tagId = i497[1]
  i496.enabled = !!i497[2]
  i496.isStatic = !!i497[3]
  i496.layer = i497[4]
  return i496
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i498 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i499 = data
  i498.name = i499[0]
  i498.index = i499[1]
  i498.startup = !!i499[2]
  return i498
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i500 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i501 = data
  i500.aspect = i501[0]
  i500.orthographic = !!i501[1]
  i500.orthographicSize = i501[2]
  i500.backgroundColor = new pc.Color(i501[3], i501[4], i501[5], i501[6])
  i500.nearClipPlane = i501[7]
  i500.farClipPlane = i501[8]
  i500.fieldOfView = i501[9]
  i500.depth = i501[10]
  i500.clearFlags = i501[11]
  i500.cullingMask = i501[12]
  i500.rect = i501[13]
  request.r(i501[14], i501[15], 0, i500, 'targetTexture')
  i500.usePhysicalProperties = !!i501[16]
  i500.focalLength = i501[17]
  i500.sensorSize = new pc.Vec2( i501[18], i501[19] )
  i500.lensShift = new pc.Vec2( i501[20], i501[21] )
  i500.gateFit = i501[22]
  i500.commandBufferCount = i501[23]
  i500.cameraType = i501[24]
  i500.enabled = !!i501[25]
  return i500
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i502 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i503 = data
  request.r(i503[0], i503[1], 0, i502, 'm_FirstSelected')
  i502.m_sendNavigationEvents = !!i503[2]
  i502.m_DragThreshold = i503[3]
  return i502
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i504 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i505 = data
  i504.m_HorizontalAxis = i505[0]
  i504.m_VerticalAxis = i505[1]
  i504.m_SubmitButton = i505[2]
  i504.m_CancelButton = i505[3]
  i504.m_InputActionsPerSecond = i505[4]
  i504.m_RepeatDelay = i505[5]
  i504.m_ForceModuleActive = !!i505[6]
  i504.m_SendPointerHoverToParent = !!i505[7]
  return i504
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i506 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i507 = data
  i506.pivot = new pc.Vec2( i507[0], i507[1] )
  i506.anchorMin = new pc.Vec2( i507[2], i507[3] )
  i506.anchorMax = new pc.Vec2( i507[4], i507[5] )
  i506.sizeDelta = new pc.Vec2( i507[6], i507[7] )
  i506.anchoredPosition3D = new pc.Vec3( i507[8], i507[9], i507[10] )
  i506.rotation = new pc.Quat(i507[11], i507[12], i507[13], i507[14])
  i506.scale = new pc.Vec3( i507[15], i507[16], i507[17] )
  return i506
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i508 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i509 = data
  i508.planeDistance = i509[0]
  i508.referencePixelsPerUnit = i509[1]
  i508.isFallbackOverlay = !!i509[2]
  i508.renderMode = i509[3]
  i508.renderOrder = i509[4]
  i508.sortingLayerName = i509[5]
  i508.sortingOrder = i509[6]
  i508.scaleFactor = i509[7]
  request.r(i509[8], i509[9], 0, i508, 'worldCamera')
  i508.overrideSorting = !!i509[10]
  i508.pixelPerfect = !!i509[11]
  i508.targetDisplay = i509[12]
  i508.overridePixelPerfect = !!i509[13]
  i508.enabled = !!i509[14]
  return i508
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i510 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i511 = data
  i510.m_UiScaleMode = i511[0]
  i510.m_ReferencePixelsPerUnit = i511[1]
  i510.m_ScaleFactor = i511[2]
  i510.m_ReferenceResolution = new pc.Vec2( i511[3], i511[4] )
  i510.m_ScreenMatchMode = i511[5]
  i510.m_MatchWidthOrHeight = i511[6]
  i510.m_PhysicalUnit = i511[7]
  i510.m_FallbackScreenDPI = i511[8]
  i510.m_DefaultSpriteDPI = i511[9]
  i510.m_DynamicPixelsPerUnit = i511[10]
  i510.m_PresetInfoIsWorld = !!i511[11]
  return i510
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i512 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i513 = data
  i512.m_IgnoreReversedGraphics = !!i513[0]
  i512.m_BlockingObjects = i513[1]
  i512.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i513[2] )
  return i512
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i514 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i515 = data
  i514.cullTransparentMesh = !!i515[0]
  return i514
}

Deserializers["UnityEngine.UI.AspectRatioFitter"] = function (request, data, root) {
  var i516 = root || request.c( 'UnityEngine.UI.AspectRatioFitter' )
  var i517 = data
  i516.m_AspectMode = i517[0]
  i516.m_AspectRatio = i517[1]
  return i516
}

Deserializers["UnityEngine.UI.RawImage"] = function (request, data, root) {
  var i518 = root || request.c( 'UnityEngine.UI.RawImage' )
  var i519 = data
  request.r(i519[0], i519[1], 0, i518, 'm_Texture')
  i518.m_UVRect = UnityEngine.Rect.MinMaxRect(i519[2], i519[3], i519[4], i519[5])
  request.r(i519[6], i519[7], 0, i518, 'm_Material')
  i518.m_Maskable = !!i519[8]
  i518.m_Color = new pc.Color(i519[9], i519[10], i519[11], i519[12])
  i518.m_RaycastTarget = !!i519[13]
  i518.m_RaycastPadding = new pc.Vec4( i519[14], i519[15], i519[16], i519[17] )
  return i518
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer"] = function (request, data, root) {
  var i520 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer' )
  var i521 = data
  i520.color = new pc.Color(i521[0], i521[1], i521[2], i521[3])
  request.r(i521[4], i521[5], 0, i520, 'sprite')
  i520.flipX = !!i521[6]
  i520.flipY = !!i521[7]
  i520.drawMode = i521[8]
  i520.size = new pc.Vec2( i521[9], i521[10] )
  i520.tileMode = i521[11]
  i520.adaptiveModeThreshold = i521[12]
  i520.maskInteraction = i521[13]
  i520.spriteSortPoint = i521[14]
  i520.enabled = !!i521[15]
  request.r(i521[16], i521[17], 0, i520, 'sharedMaterial')
  var i523 = i521[18]
  var i522 = []
  for(var i = 0; i < i523.length; i += 2) {
  request.r(i523[i + 0], i523[i + 1], 2, i522, '')
  }
  i520.sharedMaterials = i522
  i520.receiveShadows = !!i521[19]
  i520.shadowCastingMode = i521[20]
  i520.sortingLayerID = i521[21]
  i520.sortingOrder = i521[22]
  i520.lightmapIndex = i521[23]
  i520.lightmapSceneIndex = i521[24]
  i520.lightmapScaleOffset = new pc.Vec4( i521[25], i521[26], i521[27], i521[28] )
  i520.lightProbeUsage = i521[29]
  i520.reflectionProbeUsage = i521[30]
  return i520
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D"] = function (request, data, root) {
  var i524 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D' )
  var i525 = data
  i524.usedByComposite = !!i525[0]
  i524.autoTiling = !!i525[1]
  i524.size = new pc.Vec2( i525[2], i525[3] )
  i524.edgeRadius = i525[4]
  i524.enabled = !!i525[5]
  i524.isTrigger = !!i525[6]
  i524.usedByEffector = !!i525[7]
  i524.density = i525[8]
  i524.offset = new pc.Vec2( i525[9], i525[10] )
  request.r(i525[11], i525[12], 0, i524, 'material')
  return i524
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SortingGroup"] = function (request, data, root) {
  var i526 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SortingGroup' )
  var i527 = data
  i526.sortingLayerIndex = i527[0]
  i526.sortingOrder = i527[1]
  i526.sortingLayerName = i527[2]
  i526.enabled = !!i527[3]
  return i526
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Rigidbody2D"] = function (request, data, root) {
  var i528 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Rigidbody2D' )
  var i529 = data
  i528.bodyType = i529[0]
  request.r(i529[1], i529[2], 0, i528, 'material')
  i528.simulated = !!i529[3]
  i528.useAutoMass = !!i529[4]
  i528.mass = i529[5]
  i528.drag = i529[6]
  i528.angularDrag = i529[7]
  i528.gravityScale = i529[8]
  i528.collisionDetectionMode = i529[9]
  i528.sleepMode = i529[10]
  i528.constraints = i529[11]
  return i528
}

Deserializers["MonsterController"] = function (request, data, root) {
  var i530 = root || request.c( 'MonsterController' )
  var i531 = data
  request.r(i531[0], i531[1], 0, i530, 'joint')
  request.r(i531[2], i531[3], 0, i530, 'rb')
  request.r(i531[4], i531[5], 0, i530, 'deadSFX')
  i530.force = new pc.Vec2( i531[6], i531[7] )
  return i530
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.HingeJoint2D"] = function (request, data, root) {
  var i532 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.HingeJoint2D' )
  var i533 = data
  i532.useLimits = !!i533[0]
  i532.limits = request.d('UnityEngine.JointAngleLimits2D', i533[1], i532.limits)
  i532.useMotor = !!i533[2]
  i532.motor = request.d('UnityEngine.JointMotor2D', i533[3], i532.motor)
  i532.anchor = new pc.Vec2( i533[4], i533[5] )
  i532.connectedAnchor = new pc.Vec2( i533[6], i533[7] )
  i532.autoConfigureConnectedAnchor = !!i533[8]
  request.r(i533[9], i533[10], 0, i532, 'connectedBody')
  i532.breakForce = i533[11]
  i532.breakTorque = i533[12]
  i532.enableCollision = !!i533[13]
  i532.enabled = !!i533[14]
  return i532
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.TargetJoint2D"] = function (request, data, root) {
  var i534 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.TargetJoint2D' )
  var i535 = data
  i534.autoConfigureTarget = !!i535[0]
  i534.target = new pc.Vec2( i535[1], i535[2] )
  i534.anchor = new pc.Vec2( i535[3], i535[4] )
  i534.maxForce = i535[5]
  i534.dampingRatio = i535[6]
  i534.frequency = i535[7]
  request.r(i535[8], i535[9], 0, i534, 'connectedBody')
  i534.breakForce = i535[10]
  i534.breakTorque = i535[11]
  i534.enableCollision = !!i535[12]
  i534.enabled = !!i535[13]
  return i534
}

Deserializers["BonkController"] = function (request, data, root) {
  var i536 = root || request.c( 'BonkController' )
  var i537 = data
  i536.target = i537[0]
  i536.maxBonk = i537[1]
  request.r(i537[2], i537[3], 0, i536, 'hitSound')
  return i536
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CircleCollider2D"] = function (request, data, root) {
  var i538 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CircleCollider2D' )
  var i539 = data
  i538.radius = i539[0]
  i538.enabled = !!i539[1]
  i538.isTrigger = !!i539[2]
  i538.usedByEffector = !!i539[3]
  i538.density = i539[4]
  i538.offset = new pc.Vec2( i539[5], i539[6] )
  request.r(i539[7], i539[8], 0, i538, 'material')
  return i538
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i540 = root || request.c( 'UnityEngine.UI.Button' )
  var i541 = data
  i540.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i541[0], i540.m_OnClick)
  i540.m_Navigation = request.d('UnityEngine.UI.Navigation', i541[1], i540.m_Navigation)
  i540.m_Transition = i541[2]
  i540.m_Colors = request.d('UnityEngine.UI.ColorBlock', i541[3], i540.m_Colors)
  i540.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i541[4], i540.m_SpriteState)
  i540.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i541[5], i540.m_AnimationTriggers)
  i540.m_Interactable = !!i541[6]
  request.r(i541[7], i541[8], 0, i540, 'm_TargetGraphic')
  return i540
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i542 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i543 = data
  i542.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i543[0], i542.m_PersistentCalls)
  return i542
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i544 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i545 = data
  var i547 = i545[0]
  var i546 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i547.length; i += 1) {
    i546.add(request.d('UnityEngine.Events.PersistentCall', i547[i + 0]));
  }
  i544.m_Calls = i546
  return i544
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i550 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i551 = data
  request.r(i551[0], i551[1], 0, i550, 'm_Target')
  i550.m_TargetAssemblyTypeName = i551[2]
  i550.m_MethodName = i551[3]
  i550.m_Mode = i551[4]
  i550.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i551[5], i550.m_Arguments)
  i550.m_CallState = i551[6]
  return i550
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i552 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i553 = data
  i552.m_Mode = i553[0]
  i552.m_WrapAround = !!i553[1]
  request.r(i553[2], i553[3], 0, i552, 'm_SelectOnUp')
  request.r(i553[4], i553[5], 0, i552, 'm_SelectOnDown')
  request.r(i553[6], i553[7], 0, i552, 'm_SelectOnLeft')
  request.r(i553[8], i553[9], 0, i552, 'm_SelectOnRight')
  return i552
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i554 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i555 = data
  i554.m_NormalColor = new pc.Color(i555[0], i555[1], i555[2], i555[3])
  i554.m_HighlightedColor = new pc.Color(i555[4], i555[5], i555[6], i555[7])
  i554.m_PressedColor = new pc.Color(i555[8], i555[9], i555[10], i555[11])
  i554.m_SelectedColor = new pc.Color(i555[12], i555[13], i555[14], i555[15])
  i554.m_DisabledColor = new pc.Color(i555[16], i555[17], i555[18], i555[19])
  i554.m_ColorMultiplier = i555[20]
  i554.m_FadeDuration = i555[21]
  return i554
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i556 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i557 = data
  request.r(i557[0], i557[1], 0, i556, 'm_HighlightedSprite')
  request.r(i557[2], i557[3], 0, i556, 'm_PressedSprite')
  request.r(i557[4], i557[5], 0, i556, 'm_SelectedSprite')
  request.r(i557[6], i557[7], 0, i556, 'm_DisabledSprite')
  return i556
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i558 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i559 = data
  i558.m_NormalTrigger = i559[0]
  i558.m_HighlightedTrigger = i559[1]
  i558.m_PressedTrigger = i559[2]
  i558.m_SelectedTrigger = i559[3]
  i558.m_DisabledTrigger = i559[4]
  return i558
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i560 = root || request.c( 'UnityEngine.UI.Image' )
  var i561 = data
  request.r(i561[0], i561[1], 0, i560, 'm_Sprite')
  i560.m_Type = i561[2]
  i560.m_PreserveAspect = !!i561[3]
  i560.m_FillCenter = !!i561[4]
  i560.m_FillMethod = i561[5]
  i560.m_FillAmount = i561[6]
  i560.m_FillClockwise = !!i561[7]
  i560.m_FillOrigin = i561[8]
  i560.m_UseSpriteMesh = !!i561[9]
  i560.m_PixelsPerUnitMultiplier = i561[10]
  request.r(i561[11], i561[12], 0, i560, 'm_Material')
  i560.m_Maskable = !!i561[13]
  i560.m_Color = new pc.Color(i561[14], i561[15], i561[16], i561[17])
  i560.m_RaycastTarget = !!i561[18]
  i560.m_RaycastPadding = new pc.Vec4( i561[19], i561[20], i561[21], i561[22] )
  return i560
}

Deserializers["DG.Tweening.DOTweenAnimation"] = function (request, data, root) {
  var i562 = root || request.c( 'DG.Tweening.DOTweenAnimation' )
  var i563 = data
  i562.targetIsSelf = !!i563[0]
  request.r(i563[1], i563[2], 0, i562, 'targetGO')
  i562.tweenTargetIsTargetGO = !!i563[3]
  i562.delay = i563[4]
  i562.duration = i563[5]
  i562.easeType = i563[6]
  i562.easeCurve = new pc.AnimationCurve( { keys_flow: i563[7] } )
  i562.loopType = i563[8]
  i562.loops = i563[9]
  i562.id = i563[10]
  i562.isRelative = !!i563[11]
  i562.isFrom = !!i563[12]
  i562.isIndependentUpdate = !!i563[13]
  i562.autoKill = !!i563[14]
  i562.autoGenerate = !!i563[15]
  i562.isActive = !!i563[16]
  i562.isValid = !!i563[17]
  request.r(i563[18], i563[19], 0, i562, 'target')
  i562.animationType = i563[20]
  i562.targetType = i563[21]
  i562.forcedTargetType = i563[22]
  i562.autoPlay = !!i563[23]
  i562.useTargetAsV3 = !!i563[24]
  i562.endValueFloat = i563[25]
  i562.endValueV3 = new pc.Vec3( i563[26], i563[27], i563[28] )
  i562.endValueV2 = new pc.Vec2( i563[29], i563[30] )
  i562.endValueColor = new pc.Color(i563[31], i563[32], i563[33], i563[34])
  i562.endValueString = i563[35]
  i562.endValueRect = UnityEngine.Rect.MinMaxRect(i563[36], i563[37], i563[38], i563[39])
  request.r(i563[40], i563[41], 0, i562, 'endValueTransform')
  i562.optionalBool0 = !!i563[42]
  i562.optionalBool1 = !!i563[43]
  i562.optionalFloat0 = i563[44]
  i562.optionalInt0 = i563[45]
  i562.optionalRotationMode = i563[46]
  i562.optionalScrambleMode = i563[47]
  i562.optionalShakeRandomnessMode = i563[48]
  i562.optionalString = i563[49]
  i562.updateType = i563[50]
  i562.isSpeedBased = !!i563[51]
  i562.hasOnStart = !!i563[52]
  i562.hasOnPlay = !!i563[53]
  i562.hasOnUpdate = !!i563[54]
  i562.hasOnStepComplete = !!i563[55]
  i562.hasOnComplete = !!i563[56]
  i562.hasOnTweenCreated = !!i563[57]
  i562.hasOnRewind = !!i563[58]
  i562.onStart = request.d('UnityEngine.Events.UnityEvent', i563[59], i562.onStart)
  i562.onPlay = request.d('UnityEngine.Events.UnityEvent', i563[60], i562.onPlay)
  i562.onUpdate = request.d('UnityEngine.Events.UnityEvent', i563[61], i562.onUpdate)
  i562.onStepComplete = request.d('UnityEngine.Events.UnityEvent', i563[62], i562.onStepComplete)
  i562.onComplete = request.d('UnityEngine.Events.UnityEvent', i563[63], i562.onComplete)
  i562.onTweenCreated = request.d('UnityEngine.Events.UnityEvent', i563[64], i562.onTweenCreated)
  i562.onRewind = request.d('UnityEngine.Events.UnityEvent', i563[65], i562.onRewind)
  return i562
}

Deserializers["UnityEngine.Events.UnityEvent"] = function (request, data, root) {
  var i564 = root || request.c( 'UnityEngine.Events.UnityEvent' )
  var i565 = data
  i564.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i565[0], i564.m_PersistentCalls)
  return i564
}

Deserializers["GameController"] = function (request, data, root) {
  var i566 = root || request.c( 'GameController' )
  var i567 = data
  var i569 = i567[0]
  var i568 = new (System.Collections.Generic.List$1(Bridge.ns('MonsterController')))
  for(var i = 0; i < i569.length; i += 2) {
  request.r(i569[i + 0], i569[i + 1], 1, i568, '')
  }
  i566.monsters = i568
  var i571 = i567[1]
  var i570 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Vector3')))
  for(var i = 0; i < i571.length; i += 3) {
    i570.add(new pc.Vec3( i571[i + 0], i571[i + 1], i571[i + 2] ));
  }
  i566.cameraPos = i570
  i566.speedMove = i567[2]
  request.r(i567[3], i567[4], 0, i566, 'target')
  i566.index = i567[5]
  i566.end = !!i567[6]
  request.r(i567[7], i567[8], 0, i566, 'mainCamera')
  request.r(i567[9], i567[10], 0, i566, 'endUI')
  return i566
}

Deserializers["TargetController"] = function (request, data, root) {
  var i576 = root || request.c( 'TargetController' )
  var i577 = data
  var i579 = i577[0]
  var i578 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TargetJoint2D')))
  for(var i = 0; i < i579.length; i += 2) {
  request.r(i579[i + 0], i579[i + 1], 1, i578, '')
  }
  i576.listTarget = i578
  var i581 = i577[1]
  var i580 = new (System.Collections.Generic.List$1(Bridge.ns('BonkController')))
  for(var i = 0; i < i581.length; i += 2) {
  request.r(i581[i + 0], i581[i + 1], 1, i580, '')
  }
  i576.listBonk = i580
  request.r(i577[2], i577[3], 0, i576, 'currentTarget')
  i576.index = i577[4]
  request.r(i577[5], i577[6], 0, i576, 'tut')
  return i576
}

Deserializers["LunaController"] = function (request, data, root) {
  var i586 = root || request.c( 'LunaController' )
  var i587 = data
  request.r(i587[0], i587[1], 0, i586, 'BGTexture')
  i586.UseTime = !!i587[2]
  i586.TimePlay = i587[3]
  request.r(i587[4], i587[5], 0, i586, 'BGImage')
  var i589 = i587[6]
  var i588 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.UI.Button')))
  for(var i = 0; i < i589.length; i += 2) {
  request.r(i589[i + 0], i589[i + 1], 1, i588, '')
  }
  i586.CTA = i588
  return i586
}

Deserializers["AudioController"] = function (request, data, root) {
  var i592 = root || request.c( 'AudioController' )
  var i593 = data
  request.r(i593[0], i593[1], 0, i592, 'BGM')
  request.r(i593[2], i593[3], 0, i592, 'musicSource')
  request.r(i593[4], i593[5], 0, i592, 'pool')
  return i592
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.AudioSource"] = function (request, data, root) {
  var i594 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.AudioSource' )
  var i595 = data
  request.r(i595[0], i595[1], 0, i594, 'clip')
  request.r(i595[2], i595[3], 0, i594, 'outputAudioMixerGroup')
  i594.playOnAwake = !!i595[4]
  i594.loop = !!i595[5]
  i594.time = i595[6]
  i594.volume = i595[7]
  i594.pitch = i595[8]
  i594.enabled = !!i595[9]
  return i594
}

Deserializers["VFXController"] = function (request, data, root) {
  var i596 = root || request.c( 'VFXController' )
  var i597 = data
  request.r(i597[0], i597[1], 0, i596, 'bloodPrefab')
  request.r(i597[2], i597[3], 0, i596, 'pool')
  return i596
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i598 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i599 = data
  i598.ambientIntensity = i599[0]
  i598.reflectionIntensity = i599[1]
  i598.ambientMode = i599[2]
  i598.ambientLight = new pc.Color(i599[3], i599[4], i599[5], i599[6])
  i598.ambientSkyColor = new pc.Color(i599[7], i599[8], i599[9], i599[10])
  i598.ambientGroundColor = new pc.Color(i599[11], i599[12], i599[13], i599[14])
  i598.ambientEquatorColor = new pc.Color(i599[15], i599[16], i599[17], i599[18])
  i598.fogColor = new pc.Color(i599[19], i599[20], i599[21], i599[22])
  i598.fogEndDistance = i599[23]
  i598.fogStartDistance = i599[24]
  i598.fogDensity = i599[25]
  i598.fog = !!i599[26]
  request.r(i599[27], i599[28], 0, i598, 'skybox')
  i598.fogMode = i599[29]
  var i601 = i599[30]
  var i600 = []
  for(var i = 0; i < i601.length; i += 1) {
    i600.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i601[i + 0]) );
  }
  i598.lightmaps = i600
  i598.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i599[31], i598.lightProbes)
  i598.lightmapsMode = i599[32]
  i598.mixedBakeMode = i599[33]
  i598.environmentLightingMode = i599[34]
  i598.ambientProbe = new pc.SphericalHarmonicsL2(i599[35])
  request.r(i599[36], i599[37], 0, i598, 'customReflection')
  request.r(i599[38], i599[39], 0, i598, 'defaultReflection')
  i598.defaultReflectionMode = i599[40]
  i598.defaultReflectionResolution = i599[41]
  i598.sunLightObjectId = i599[42]
  i598.pixelLightCount = i599[43]
  i598.defaultReflectionHDR = !!i599[44]
  i598.hasLightDataAsset = !!i599[45]
  i598.hasManualGenerate = !!i599[46]
  return i598
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i604 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i605 = data
  request.r(i605[0], i605[1], 0, i604, 'lightmapColor')
  request.r(i605[2], i605[3], 0, i604, 'lightmapDirection')
  request.r(i605[4], i605[5], 0, i604, 'shadowMask')
  return i604
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i606 = root || new UnityEngine.LightProbes()
  var i607 = data
  return i606
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i614 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i615 = data
  var i617 = i615[0]
  var i616 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i617.length; i += 1) {
    i616.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i617[i + 0]));
  }
  i614.ShaderCompilationErrors = i616
  i614.name = i615[1]
  i614.guid = i615[2]
  var i619 = i615[3]
  var i618 = []
  for(var i = 0; i < i619.length; i += 1) {
    i618.push( i619[i + 0] );
  }
  i614.shaderDefinedKeywords = i618
  var i621 = i615[4]
  var i620 = []
  for(var i = 0; i < i621.length; i += 1) {
    i620.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i621[i + 0]) );
  }
  i614.passes = i620
  var i623 = i615[5]
  var i622 = []
  for(var i = 0; i < i623.length; i += 1) {
    i622.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i623[i + 0]) );
  }
  i614.usePasses = i622
  var i625 = i615[6]
  var i624 = []
  for(var i = 0; i < i625.length; i += 1) {
    i624.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i625[i + 0]) );
  }
  i614.defaultParameterValues = i624
  request.r(i615[7], i615[8], 0, i614, 'unityFallbackShader')
  i614.readDepth = !!i615[9]
  i614.hasDepthOnlyPass = !!i615[10]
  i614.isCreatedByShaderGraph = !!i615[11]
  i614.disableBatching = !!i615[12]
  i614.compiled = !!i615[13]
  return i614
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i628 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i629 = data
  i628.shaderName = i629[0]
  i628.errorMessage = i629[1]
  return i628
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i634 = root || new pc.UnityShaderPass()
  var i635 = data
  i634.id = i635[0]
  i634.subShaderIndex = i635[1]
  i634.name = i635[2]
  i634.passType = i635[3]
  i634.grabPassTextureName = i635[4]
  i634.usePass = !!i635[5]
  i634.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i635[6], i634.zTest)
  i634.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i635[7], i634.zWrite)
  i634.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i635[8], i634.culling)
  i634.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i635[9], i634.blending)
  i634.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i635[10], i634.alphaBlending)
  i634.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i635[11], i634.colorWriteMask)
  i634.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i635[12], i634.offsetUnits)
  i634.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i635[13], i634.offsetFactor)
  i634.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i635[14], i634.stencilRef)
  i634.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i635[15], i634.stencilReadMask)
  i634.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i635[16], i634.stencilWriteMask)
  i634.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i635[17], i634.stencilOp)
  i634.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i635[18], i634.stencilOpFront)
  i634.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i635[19], i634.stencilOpBack)
  var i637 = i635[20]
  var i636 = []
  for(var i = 0; i < i637.length; i += 1) {
    i636.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i637[i + 0]) );
  }
  i634.tags = i636
  var i639 = i635[21]
  var i638 = []
  for(var i = 0; i < i639.length; i += 1) {
    i638.push( i639[i + 0] );
  }
  i634.passDefinedKeywords = i638
  var i641 = i635[22]
  var i640 = []
  for(var i = 0; i < i641.length; i += 1) {
    i640.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i641[i + 0]) );
  }
  i634.passDefinedKeywordGroups = i640
  var i643 = i635[23]
  var i642 = []
  for(var i = 0; i < i643.length; i += 1) {
    i642.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i643[i + 0]) );
  }
  i634.variants = i642
  var i645 = i635[24]
  var i644 = []
  for(var i = 0; i < i645.length; i += 1) {
    i644.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i645[i + 0]) );
  }
  i634.excludedVariants = i644
  i634.hasDepthReader = !!i635[25]
  return i634
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i646 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i647 = data
  i646.val = i647[0]
  i646.name = i647[1]
  return i646
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i648 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i649 = data
  i648.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i649[0], i648.src)
  i648.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i649[1], i648.dst)
  i648.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i649[2], i648.op)
  return i648
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i650 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i651 = data
  i650.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i651[0], i650.pass)
  i650.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i651[1], i650.fail)
  i650.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i651[2], i650.zFail)
  i650.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i651[3], i650.comp)
  return i650
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i654 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i655 = data
  i654.name = i655[0]
  i654.value = i655[1]
  return i654
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i658 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i659 = data
  var i661 = i659[0]
  var i660 = []
  for(var i = 0; i < i661.length; i += 1) {
    i660.push( i661[i + 0] );
  }
  i658.keywords = i660
  i658.hasDiscard = !!i659[1]
  return i658
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i664 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i665 = data
  i664.passId = i665[0]
  i664.subShaderIndex = i665[1]
  var i667 = i665[2]
  var i666 = []
  for(var i = 0; i < i667.length; i += 1) {
    i666.push( i667[i + 0] );
  }
  i664.keywords = i666
  i664.vertexProgram = i665[3]
  i664.fragmentProgram = i665[4]
  i664.exportedForWebGl2 = !!i665[5]
  i664.readDepth = !!i665[6]
  return i664
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i670 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i671 = data
  request.r(i671[0], i671[1], 0, i670, 'shader')
  i670.pass = i671[2]
  return i670
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i674 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i675 = data
  i674.name = i675[0]
  i674.type = i675[1]
  i674.value = new pc.Vec4( i675[2], i675[3], i675[4], i675[5] )
  i674.textureValue = i675[6]
  i674.shaderPropertyFlag = i675[7]
  return i674
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i676 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i677 = data
  i676.name = i677[0]
  request.r(i677[1], i677[2], 0, i676, 'texture')
  i676.aabb = i677[3]
  i676.vertices = i677[4]
  i676.triangles = i677[5]
  i676.textureRect = UnityEngine.Rect.MinMaxRect(i677[6], i677[7], i677[8], i677[9])
  i676.packedRect = UnityEngine.Rect.MinMaxRect(i677[10], i677[11], i677[12], i677[13])
  i676.border = new pc.Vec4( i677[14], i677[15], i677[16], i677[17] )
  i676.transparency = i677[18]
  i676.bounds = i677[19]
  i676.pixelsPerUnit = i677[20]
  i676.textureWidth = i677[21]
  i676.textureHeight = i677[22]
  i676.nativeSize = new pc.Vec2( i677[23], i677[24] )
  i676.pivot = new pc.Vec2( i677[25], i677[26] )
  i676.textureRectOffset = new pc.Vec2( i677[27], i677[28] )
  return i676
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i678 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i679 = data
  i678.name = i679[0]
  return i678
}

Deserializers["DG.Tweening.Core.DOTweenSettings"] = function (request, data, root) {
  var i680 = root || request.c( 'DG.Tweening.Core.DOTweenSettings' )
  var i681 = data
  i680.useSafeMode = !!i681[0]
  i680.safeModeOptions = request.d('DG.Tweening.Core.DOTweenSettings+SafeModeOptions', i681[1], i680.safeModeOptions)
  i680.timeScale = i681[2]
  i680.unscaledTimeScale = i681[3]
  i680.useSmoothDeltaTime = !!i681[4]
  i680.maxSmoothUnscaledTime = i681[5]
  i680.rewindCallbackMode = i681[6]
  i680.showUnityEditorReport = !!i681[7]
  i680.logBehaviour = i681[8]
  i680.drawGizmos = !!i681[9]
  i680.defaultRecyclable = !!i681[10]
  i680.defaultAutoPlay = i681[11]
  i680.defaultUpdateType = i681[12]
  i680.defaultTimeScaleIndependent = !!i681[13]
  i680.defaultEaseType = i681[14]
  i680.defaultEaseOvershootOrAmplitude = i681[15]
  i680.defaultEasePeriod = i681[16]
  i680.defaultAutoKill = !!i681[17]
  i680.defaultLoopType = i681[18]
  i680.debugMode = !!i681[19]
  i680.debugStoreTargetId = !!i681[20]
  i680.showPreviewPanel = !!i681[21]
  i680.storeSettingsLocation = i681[22]
  i680.modules = request.d('DG.Tweening.Core.DOTweenSettings+ModulesSetup', i681[23], i680.modules)
  i680.createASMDEF = !!i681[24]
  i680.showPlayingTweens = !!i681[25]
  i680.showPausedTweens = !!i681[26]
  return i680
}

Deserializers["DG.Tweening.Core.DOTweenSettings+SafeModeOptions"] = function (request, data, root) {
  var i682 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+SafeModeOptions' )
  var i683 = data
  i682.logBehaviour = i683[0]
  i682.nestedTweenFailureBehaviour = i683[1]
  return i682
}

Deserializers["DG.Tweening.Core.DOTweenSettings+ModulesSetup"] = function (request, data, root) {
  var i684 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+ModulesSetup' )
  var i685 = data
  i684.showPanel = !!i685[0]
  i684.audioEnabled = !!i685[1]
  i684.physicsEnabled = !!i685[2]
  i684.physics2DEnabled = !!i685[3]
  i684.spriteEnabled = !!i685[4]
  i684.uiEnabled = !!i685[5]
  i684.textMeshProEnabled = !!i685[6]
  i684.tk2DEnabled = !!i685[7]
  i684.deAudioEnabled = !!i685[8]
  i684.deUnityExtendedEnabled = !!i685[9]
  i684.epoOutlineEnabled = !!i685[10]
  return i684
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i686 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i687 = data
  var i689 = i687[0]
  var i688 = []
  for(var i = 0; i < i689.length; i += 1) {
    i688.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i689[i + 0]) );
  }
  i686.files = i688
  i686.componentToPrefabIds = i687[1]
  return i686
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i692 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i693 = data
  i692.path = i693[0]
  request.r(i693[1], i693[2], 0, i692, 'unityObject')
  return i692
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i694 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i695 = data
  var i697 = i695[0]
  var i696 = []
  for(var i = 0; i < i697.length; i += 1) {
    i696.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i697[i + 0]) );
  }
  i694.scriptsExecutionOrder = i696
  var i699 = i695[1]
  var i698 = []
  for(var i = 0; i < i699.length; i += 1) {
    i698.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i699[i + 0]) );
  }
  i694.sortingLayers = i698
  var i701 = i695[2]
  var i700 = []
  for(var i = 0; i < i701.length; i += 1) {
    i700.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i701[i + 0]) );
  }
  i694.cullingLayers = i700
  i694.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i695[3], i694.timeSettings)
  i694.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i695[4], i694.physicsSettings)
  i694.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i695[5], i694.physics2DSettings)
  i694.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i695[6], i694.qualitySettings)
  i694.enableRealtimeShadows = !!i695[7]
  i694.enableAutoInstancing = !!i695[8]
  i694.enableStaticBatching = !!i695[9]
  i694.enableDynamicBatching = !!i695[10]
  i694.usePreservativeDynamicBatching = !!i695[11]
  i694.lightmapEncodingQuality = i695[12]
  i694.desiredColorSpace = i695[13]
  var i703 = i695[14]
  var i702 = []
  for(var i = 0; i < i703.length; i += 1) {
    i702.push( i703[i + 0] );
  }
  i694.allTags = i702
  return i694
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i706 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i707 = data
  i706.name = i707[0]
  i706.value = i707[1]
  return i706
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i710 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i711 = data
  i710.id = i711[0]
  i710.name = i711[1]
  i710.value = i711[2]
  return i710
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i714 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i715 = data
  i714.id = i715[0]
  i714.name = i715[1]
  return i714
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i716 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i717 = data
  i716.fixedDeltaTime = i717[0]
  i716.maximumDeltaTime = i717[1]
  i716.timeScale = i717[2]
  i716.maximumParticleTimestep = i717[3]
  return i716
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i718 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i719 = data
  i718.gravity = new pc.Vec3( i719[0], i719[1], i719[2] )
  i718.defaultSolverIterations = i719[3]
  i718.bounceThreshold = i719[4]
  i718.autoSyncTransforms = !!i719[5]
  i718.autoSimulation = !!i719[6]
  var i721 = i719[7]
  var i720 = []
  for(var i = 0; i < i721.length; i += 1) {
    i720.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i721[i + 0]) );
  }
  i718.collisionMatrix = i720
  return i718
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i724 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i725 = data
  i724.enabled = !!i725[0]
  i724.layerId = i725[1]
  i724.otherLayerId = i725[2]
  return i724
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i726 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i727 = data
  request.r(i727[0], i727[1], 0, i726, 'material')
  i726.gravity = new pc.Vec2( i727[2], i727[3] )
  i726.positionIterations = i727[4]
  i726.velocityIterations = i727[5]
  i726.velocityThreshold = i727[6]
  i726.maxLinearCorrection = i727[7]
  i726.maxAngularCorrection = i727[8]
  i726.maxTranslationSpeed = i727[9]
  i726.maxRotationSpeed = i727[10]
  i726.baumgarteScale = i727[11]
  i726.baumgarteTOIScale = i727[12]
  i726.timeToSleep = i727[13]
  i726.linearSleepTolerance = i727[14]
  i726.angularSleepTolerance = i727[15]
  i726.defaultContactOffset = i727[16]
  i726.autoSimulation = !!i727[17]
  i726.queriesHitTriggers = !!i727[18]
  i726.queriesStartInColliders = !!i727[19]
  i726.callbacksOnDisable = !!i727[20]
  i726.reuseCollisionCallbacks = !!i727[21]
  i726.autoSyncTransforms = !!i727[22]
  var i729 = i727[23]
  var i728 = []
  for(var i = 0; i < i729.length; i += 1) {
    i728.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i729[i + 0]) );
  }
  i726.collisionMatrix = i728
  return i726
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i732 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i733 = data
  i732.enabled = !!i733[0]
  i732.layerId = i733[1]
  i732.otherLayerId = i733[2]
  return i732
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i734 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i735 = data
  var i737 = i735[0]
  var i736 = []
  for(var i = 0; i < i737.length; i += 1) {
    i736.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i737[i + 0]) );
  }
  i734.qualityLevels = i736
  var i739 = i735[1]
  var i738 = []
  for(var i = 0; i < i739.length; i += 1) {
    i738.push( i739[i + 0] );
  }
  i734.names = i738
  i734.shadows = i735[2]
  i734.anisotropicFiltering = i735[3]
  i734.antiAliasing = i735[4]
  i734.lodBias = i735[5]
  i734.shadowCascades = i735[6]
  i734.shadowDistance = i735[7]
  i734.shadowmaskMode = i735[8]
  i734.shadowProjection = i735[9]
  i734.shadowResolution = i735[10]
  i734.softParticles = !!i735[11]
  i734.softVegetation = !!i735[12]
  i734.activeColorSpace = i735[13]
  i734.desiredColorSpace = i735[14]
  i734.masterTextureLimit = i735[15]
  i734.maxQueuedFrames = i735[16]
  i734.particleRaycastBudget = i735[17]
  i734.pixelLightCount = i735[18]
  i734.realtimeReflectionProbes = !!i735[19]
  i734.shadowCascade2Split = i735[20]
  i734.shadowCascade4Split = new pc.Vec3( i735[21], i735[22], i735[23] )
  i734.streamingMipmapsActive = !!i735[24]
  i734.vSyncCount = i735[25]
  i734.asyncUploadBufferSize = i735[26]
  i734.asyncUploadTimeSlice = i735[27]
  i734.billboardsFaceCameraPosition = !!i735[28]
  i734.shadowNearPlaneOffset = i735[29]
  i734.streamingMipmapsMemoryBudget = i735[30]
  i734.maximumLODLevel = i735[31]
  i734.streamingMipmapsAddAllCameras = !!i735[32]
  i734.streamingMipmapsMaxLevelReduction = i735[33]
  i734.streamingMipmapsRenderersPerFrame = i735[34]
  i734.resolutionScalingFixedDPIFactor = i735[35]
  i734.streamingMipmapsMaxFileIORequests = i735[36]
  i734.currentQualityLevel = i735[37]
  return i734
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i742 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i743 = data
  request.r(i743[0], i743[1], 0, i742, 'm_ObjectArgument')
  i742.m_ObjectArgumentAssemblyTypeName = i743[2]
  i742.m_IntArgument = i743[3]
  i742.m_FloatArgument = i743[4]
  i742.m_StringArgument = i743[5]
  i742.m_BoolArgument = !!i743[6]
  return i742
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10,"graphicsFormat":11,"sRGBTexture":12,"desiredColorSpace":13,"wrapU":14,"wrapV":15},"Luna.Unity.DTO.UnityEngine.Components.Transform":{"position":0,"scale":3,"rotation":6},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystem":{"main":0,"colorBySpeed":1,"colorOverLifetime":2,"emission":3,"rotationBySpeed":4,"rotationOverLifetime":5,"shape":6,"sizeBySpeed":7,"sizeOverLifetime":8,"textureSheetAnimation":9,"velocityOverLifetime":10,"noise":11,"inheritVelocity":12,"forceOverLifetime":13,"limitVelocityOverLifetime":14,"useAutoRandomSeed":15,"randomSeed":16},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule":{"duration":0,"loop":1,"prewarm":2,"startDelay":3,"startLifetime":4,"startSpeed":5,"startSize3D":6,"startSizeX":7,"startSizeY":8,"startSizeZ":9,"startRotation3D":10,"startRotationX":11,"startRotationY":12,"startRotationZ":13,"startColor":14,"gravityModifier":15,"simulationSpace":16,"customSimulationSpace":17,"simulationSpeed":19,"useUnscaledTime":20,"scalingMode":21,"playOnAwake":22,"maxParticles":23,"emitterVelocityMode":24,"stopAction":25},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve":{"mode":0,"curveMin":1,"curveMax":2,"curveMultiplier":3,"constantMin":4,"constantMax":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient":{"mode":0,"gradientMin":1,"gradientMax":2,"colorMin":3,"colorMax":7},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient":{"mode":0,"colorKeys":1,"alphaKeys":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule":{"enabled":0,"color":1,"range":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey":{"color":0,"time":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey":{"alpha":0,"time":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule":{"enabled":0,"color":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule":{"enabled":0,"rateOverTime":1,"rateOverDistance":2,"bursts":3},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst":{"count":0,"cycleCount":1,"minCount":2,"maxCount":3,"repeatInterval":4,"time":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule":{"enabled":0,"shapeType":1,"randomDirectionAmount":2,"sphericalDirectionAmount":3,"randomPositionAmount":4,"alignToDirection":5,"radius":6,"radiusMode":7,"radiusSpread":8,"radiusSpeed":9,"radiusThickness":10,"angle":11,"length":12,"boxThickness":13,"meshShapeType":16,"mesh":17,"meshRenderer":19,"skinnedMeshRenderer":21,"useMeshMaterialIndex":23,"meshMaterialIndex":24,"useMeshColors":25,"normalOffset":26,"arc":27,"arcMode":28,"arcSpread":29,"arcSpeed":30,"donutRadius":31,"position":32,"rotation":35,"scale":38},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule":{"enabled":0,"mode":1,"animation":2,"numTilesX":3,"numTilesY":4,"useRandomRow":5,"frameOverTime":6,"startFrame":7,"cycleCount":8,"rowIndex":9,"flipU":10,"flipV":11,"spriteCount":12,"sprites":13},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"radial":4,"speedModifier":5,"space":6,"orbitalX":7,"orbitalY":8,"orbitalZ":9,"orbitalOffsetX":10,"orbitalOffsetY":11,"orbitalOffsetZ":12},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule":{"enabled":0,"separateAxes":1,"strengthX":2,"strengthY":3,"strengthZ":4,"frequency":5,"damping":6,"octaveCount":7,"octaveMultiplier":8,"octaveScale":9,"quality":10,"scrollSpeed":11,"scrollSpeedMultiplier":12,"remapEnabled":13,"remapX":14,"remapY":15,"remapZ":16,"positionAmount":17,"rotationAmount":18,"sizeAmount":19},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule":{"enabled":0,"mode":1,"curve":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"space":4,"randomized":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule":{"enabled":0,"limit":1,"limitX":2,"limitY":3,"limitZ":4,"dampen":5,"separateAxes":6,"space":7,"drag":8,"multiplyDragByParticleSize":9,"multiplyDragByParticleVelocity":10},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer":{"mesh":0,"meshCount":2,"activeVertexStreamsCount":3,"alignment":4,"renderMode":5,"sortMode":6,"lengthScale":7,"velocityScale":8,"cameraVelocityScale":9,"normalDirection":10,"sortingFudge":11,"minParticleSize":12,"maxParticleSize":13,"pivot":14,"trailMaterial":17,"applyActiveColorSpace":19,"enabled":20,"sharedMaterial":21,"sharedMaterials":23,"receiveShadows":24,"shadowCastingMode":25,"sortingLayerID":26,"sortingOrder":27,"lightmapIndex":28,"lightmapSceneIndex":29,"lightmapScaleOffset":30,"lightProbeUsage":34,"reflectionProbeUsage":35},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"aspect":0,"orthographic":1,"orthographicSize":2,"backgroundColor":3,"nearClipPlane":7,"farClipPlane":8,"fieldOfView":9,"depth":10,"clearFlags":11,"cullingMask":12,"rect":13,"targetTexture":14,"usePhysicalProperties":16,"focalLength":17,"sensorSize":18,"lensShift":20,"gateFit":22,"commandBufferCount":23,"cameraType":24,"enabled":25},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"planeDistance":0,"referencePixelsPerUnit":1,"isFallbackOverlay":2,"renderMode":3,"renderOrder":4,"sortingLayerName":5,"sortingOrder":6,"scaleFactor":7,"worldCamera":8,"overrideSorting":10,"pixelPerfect":11,"targetDisplay":12,"overridePixelPerfect":13,"enabled":14},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer":{"color":0,"sprite":4,"flipX":6,"flipY":7,"drawMode":8,"size":9,"tileMode":11,"adaptiveModeThreshold":12,"maskInteraction":13,"spriteSortPoint":14,"enabled":15,"sharedMaterial":16,"sharedMaterials":18,"receiveShadows":19,"shadowCastingMode":20,"sortingLayerID":21,"sortingOrder":22,"lightmapIndex":23,"lightmapSceneIndex":24,"lightmapScaleOffset":25,"lightProbeUsage":29,"reflectionProbeUsage":30},"Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D":{"usedByComposite":0,"autoTiling":1,"size":2,"edgeRadius":4,"enabled":5,"isTrigger":6,"usedByEffector":7,"density":8,"offset":9,"material":11},"Luna.Unity.DTO.UnityEngine.Components.SortingGroup":{"sortingLayerIndex":0,"sortingOrder":1,"sortingLayerName":2,"enabled":3},"Luna.Unity.DTO.UnityEngine.Components.Rigidbody2D":{"bodyType":0,"material":1,"simulated":3,"useAutoMass":4,"mass":5,"drag":6,"angularDrag":7,"gravityScale":8,"collisionDetectionMode":9,"sleepMode":10,"constraints":11},"Luna.Unity.DTO.UnityEngine.Components.HingeJoint2D":{"useLimits":0,"limits":1,"useMotor":2,"motor":3,"anchor":4,"connectedAnchor":6,"autoConfigureConnectedAnchor":8,"connectedBody":9,"breakForce":11,"breakTorque":12,"enableCollision":13,"enabled":14},"Luna.Unity.DTO.UnityEngine.Components.TargetJoint2D":{"autoConfigureTarget":0,"target":1,"anchor":3,"maxForce":5,"dampingRatio":6,"frequency":7,"connectedBody":8,"breakForce":10,"breakTorque":11,"enableCollision":12,"enabled":13},"Luna.Unity.DTO.UnityEngine.Components.CircleCollider2D":{"radius":0,"enabled":1,"isTrigger":2,"usedByEffector":3,"density":4,"offset":5,"material":7},"Luna.Unity.DTO.UnityEngine.Components.AudioSource":{"clip":0,"outputAudioMixerGroup":2,"playOnAwake":4,"loop":5,"time":6,"volume":7,"pitch":8,"enabled":9},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"customReflection":36,"defaultReflection":38,"defaultReflectionMode":40,"defaultReflectionResolution":41,"sunLightObjectId":42,"pixelLightCount":43,"defaultReflectionHDR":44,"hasLightDataAsset":45,"hasManualGenerate":46},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2,"shadowMask":4},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"hasDepthOnlyPass":10,"isCreatedByShaderGraph":11,"disableBatching":12,"compiled":13},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"exportedForWebGl2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.AudioClip":{"name":0},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableStaticBatching":9,"enableDynamicBatching":10,"usePreservativeDynamicBatching":11,"lightmapEncodingQuality":12,"desiredColorSpace":13,"allTags":14},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37}}

Deserializers.requiredComponents = {"41":[42],"43":[42],"44":[42],"45":[42],"46":[42],"47":[42],"48":[49],"50":[5],"51":[52],"53":[52],"54":[52],"55":[52],"56":[52],"57":[52],"58":[21],"59":[21],"60":[21],"61":[21],"62":[21],"63":[21],"26":[21],"64":[21],"65":[21],"24":[21],"66":[21],"67":[21],"68":[21],"69":[5],"70":[71],"72":[73],"74":[73],"11":[10],"75":[17],"76":[5],"77":[78],"79":[10],"80":[14,10],"81":[71],"82":[14,10],"83":[10],"84":[10],"85":[71,10],"86":[10,14],"87":[88],"89":[88],"90":[88],"91":[10],"92":[10],"13":[11],"30":[14,10],"15":[10],"12":[11],"93":[10],"94":[10],"95":[10],"96":[10],"97":[10],"98":[10],"99":[10],"100":[10],"101":[10],"16":[14,10],"102":[10],"103":[10],"104":[10],"105":[10],"106":[14,10],"107":[10],"108":[8],"109":[8],"9":[8],"110":[8],"111":[5],"112":[5]}

Deserializers.types = ["UnityEngine.Shader","UnityEngine.Transform","UnityEngine.ParticleSystem","UnityEngine.ParticleSystemRenderer","UnityEngine.Material","UnityEngine.Camera","UnityEngine.AudioListener","UnityEngine.EventSystems.UIBehaviour","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","UnityEngine.RectTransform","UnityEngine.Canvas","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","UnityEngine.CanvasRenderer","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.RawImage","UnityEngine.SpriteRenderer","UnityEngine.Sprite","UnityEngine.BoxCollider2D","UnityEngine.Rendering.SortingGroup","UnityEngine.Rigidbody2D","UnityEngine.MonoBehaviour","MonsterController","UnityEngine.TargetJoint2D","UnityEngine.AudioClip","UnityEngine.HingeJoint2D","BonkController","UnityEngine.CircleCollider2D","UnityEngine.UI.Button","UnityEngine.UI.Image","DG.Tweening.DOTweenAnimation","GameController","TargetController","UnityEngine.GameObject","LunaController","UnityEngine.Texture2D","AudioController","UnityEngine.AudioSource","VFXController","DG.Tweening.Core.DOTweenSettings","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.SkinnedMeshRenderer","UnityEngine.FlareLayer","UnityEngine.CharacterJoint","UnityEngine.Rigidbody","UnityEngine.ConfigurableJoint","UnityEngine.ConstantForce","UnityEngine.FixedJoint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.CompositeCollider2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.MeshRenderer","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","UnityEngine.U2D.Animation.SpriteSkin","UnityEngine.U2D.PixelPerfectCamera","UnityEngine.U2D.SpriteShapeController","UnityEngine.U2D.SpriteShapeRenderer","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text","TMPro.TextContainer","TMPro.TextMeshPro","TMPro.TextMeshProUGUI","Unity.VisualScripting.SceneVariables","Unity.VisualScripting.Variables","Unity.VisualScripting.ScriptMachine","Unity.VisualScripting.StateMachine","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.Mask","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RectMask2D","UnityEngine.UI.ScrollRect","UnityEngine.UI.Scrollbar","UnityEngine.UI.Slider","UnityEngine.UI.Text","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster"]

Deserializers.unityVersion = "6000.0.76f1";

Deserializers.productName = "SSP_Luna-SSP_V01";

Deserializers.lunaInitializationTime = "06/23/2026 02:29:54";

Deserializers.lunaDaysRunning = "2.0";

Deserializers.lunaVersion = "7.2.0";

Deserializers.lunaSHA = "ea08d29afe2968efcb8d91d5624f033c6485cc68";

Deserializers.creativeName = "SSP_V02_YenTTH_TamNTM";

Deserializers.lunaAppID = "40364";

Deserializers.projectId = "01d8b819bddb11e4ea7a644267642880";

Deserializers.packagesInfo = "com.unity.timeline: 1.8.12\ncom.unity.ugui: 2.0.0";

Deserializers.externalJsLibraries = "";

Deserializers.androidLink = ( typeof window !== "undefined")&&window.$environment.packageConfig.androidLink?window.$environment.packageConfig.androidLink:'Empty';

Deserializers.iosLink = ( typeof window !== "undefined")&&window.$environment.packageConfig.iosLink?window.$environment.packageConfig.iosLink:'Empty';

Deserializers.base64Enabled = "False";

Deserializers.minifyEnabled = "True";

Deserializers.isForceUncompressed = "False";

Deserializers.isAntiAliasingEnabled = "False";

Deserializers.isRuntimeAnalysisEnabledForCode = "False";

Deserializers.runtimeAnalysisExcludedClassesCount = "1801";

Deserializers.runtimeAnalysisExcludedMethodsCount = "4168";

Deserializers.runtimeAnalysisExcludedModules = "physics3d, mecanim-wasm";

Deserializers.isRuntimeAnalysisEnabledForShaders = "True";

Deserializers.isRealtimeShadowsEnabled = "False";

Deserializers.isLunaCompilerV2Used = "False";

Deserializers.companyName = "DefaultCompany";

Deserializers.buildPlatform = "Android";

Deserializers.applicationIdentifier = "com.DefaultCompany.SSP_LunaSSP_V01";

Deserializers.disableAntiAliasing = true;

Deserializers.graphicsConstraint = 24;

Deserializers.linearColorSpace = true;

Deserializers.buildID = "57a5193b-9ef7-4065-8941-f4dbccec1ba4";

Deserializers.runtimeInitializeOnLoadInfos = [[["UnityEngine","U2D","Animation","GpuDeformationSystem","CreateFallbackBuffer"],["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"],["UnityEngine","AI","NavMesh","ClearPreUpdateListeners"]],[["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"]],[],[["UnityEngine","Timeline","AnimatorBindingCache","ResetStaticsOnLoad"],["UnityEngine","Timeline","TrackAsset","ResetStaticsOnLoad"],["UnityEngine","Timeline","AnimationPreviewUtilities","ResetStaticsOnLoad"]]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

