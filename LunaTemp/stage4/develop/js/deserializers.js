var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i380 = root || request.c( 'UnityEngine.JointSpring' )
  var i381 = data
  i380.spring = i381[0]
  i380.damper = i381[1]
  i380.targetPosition = i381[2]
  return i380
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i382 = root || request.c( 'UnityEngine.JointMotor' )
  var i383 = data
  i382.m_TargetVelocity = i383[0]
  i382.m_Force = i383[1]
  i382.m_FreeSpin = i383[2]
  return i382
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i384 = root || request.c( 'UnityEngine.JointLimits' )
  var i385 = data
  i384.m_Min = i385[0]
  i384.m_Max = i385[1]
  i384.m_Bounciness = i385[2]
  i384.m_BounceMinVelocity = i385[3]
  i384.m_ContactDistance = i385[4]
  i384.minBounce = i385[5]
  i384.maxBounce = i385[6]
  return i384
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i386 = root || request.c( 'UnityEngine.JointDrive' )
  var i387 = data
  i386.m_PositionSpring = i387[0]
  i386.m_PositionDamper = i387[1]
  i386.m_MaximumForce = i387[2]
  i386.m_UseAcceleration = i387[3]
  return i386
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i388 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i389 = data
  i388.m_Spring = i389[0]
  i388.m_Damper = i389[1]
  return i388
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i390 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i391 = data
  i390.m_Limit = i391[0]
  i390.m_Bounciness = i391[1]
  i390.m_ContactDistance = i391[2]
  return i390
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i392 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i393 = data
  i392.m_ExtremumSlip = i393[0]
  i392.m_ExtremumValue = i393[1]
  i392.m_AsymptoteSlip = i393[2]
  i392.m_AsymptoteValue = i393[3]
  i392.m_Stiffness = i393[4]
  return i392
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i394 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i395 = data
  i394.m_LowerAngle = i395[0]
  i394.m_UpperAngle = i395[1]
  return i394
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i396 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i397 = data
  i396.m_MotorSpeed = i397[0]
  i396.m_MaximumMotorTorque = i397[1]
  return i396
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i398 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i399 = data
  i398.m_DampingRatio = i399[0]
  i398.m_Frequency = i399[1]
  i398.m_Angle = i399[2]
  return i398
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i400 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i401 = data
  i400.m_LowerTranslation = i401[0]
  i400.m_UpperTranslation = i401[1]
  return i400
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i402 = root || new pc.UnityMaterial()
  var i403 = data
  i402.name = i403[0]
  request.r(i403[1], i403[2], 0, i402, 'shader')
  i402.renderQueue = i403[3]
  i402.enableInstancing = !!i403[4]
  var i405 = i403[5]
  var i404 = []
  for(var i = 0; i < i405.length; i += 1) {
    i404.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i405[i + 0]) );
  }
  i402.floatParameters = i404
  var i407 = i403[6]
  var i406 = []
  for(var i = 0; i < i407.length; i += 1) {
    i406.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i407[i + 0]) );
  }
  i402.colorParameters = i406
  var i409 = i403[7]
  var i408 = []
  for(var i = 0; i < i409.length; i += 1) {
    i408.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i409[i + 0]) );
  }
  i402.vectorParameters = i408
  var i411 = i403[8]
  var i410 = []
  for(var i = 0; i < i411.length; i += 1) {
    i410.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i411[i + 0]) );
  }
  i402.textureParameters = i410
  var i413 = i403[9]
  var i412 = []
  for(var i = 0; i < i413.length; i += 1) {
    i412.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i413[i + 0]) );
  }
  i402.materialFlags = i412
  return i402
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i416 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i417 = data
  i416.name = i417[0]
  i416.value = i417[1]
  return i416
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i420 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i421 = data
  i420.name = i421[0]
  i420.value = new pc.Color(i421[1], i421[2], i421[3], i421[4])
  return i420
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i424 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i425 = data
  i424.name = i425[0]
  i424.value = new pc.Vec4( i425[1], i425[2], i425[3], i425[4] )
  return i424
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i428 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i429 = data
  i428.name = i429[0]
  request.r(i429[1], i429[2], 0, i428, 'value')
  return i428
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i432 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i433 = data
  i432.name = i433[0]
  i432.enabled = !!i433[1]
  return i432
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i434 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i435 = data
  i434.name = i435[0]
  i434.width = i435[1]
  i434.height = i435[2]
  i434.mipmapCount = i435[3]
  i434.anisoLevel = i435[4]
  i434.filterMode = i435[5]
  i434.hdr = !!i435[6]
  i434.format = i435[7]
  i434.wrapMode = i435[8]
  i434.alphaIsTransparency = !!i435[9]
  i434.alphaSource = i435[10]
  i434.graphicsFormat = i435[11]
  i434.sRGBTexture = !!i435[12]
  i434.desiredColorSpace = i435[13]
  i434.wrapU = i435[14]
  i434.wrapV = i435[15]
  return i434
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i436 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i437 = data
  i436.position = new pc.Vec3( i437[0], i437[1], i437[2] )
  i436.scale = new pc.Vec3( i437[3], i437[4], i437[5] )
  i436.rotation = new pc.Quat(i437[6], i437[7], i437[8], i437[9])
  return i436
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystem"] = function (request, data, root) {
  var i438 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystem' )
  var i439 = data
  i438.main = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule', i439[0], i438.main)
  i438.colorBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule', i439[1], i438.colorBySpeed)
  i438.colorOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule', i439[2], i438.colorOverLifetime)
  i438.emission = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule', i439[3], i438.emission)
  i438.rotationBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule', i439[4], i438.rotationBySpeed)
  i438.rotationOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule', i439[5], i438.rotationOverLifetime)
  i438.shape = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule', i439[6], i438.shape)
  i438.sizeBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule', i439[7], i438.sizeBySpeed)
  i438.sizeOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule', i439[8], i438.sizeOverLifetime)
  i438.textureSheetAnimation = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule', i439[9], i438.textureSheetAnimation)
  i438.velocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule', i439[10], i438.velocityOverLifetime)
  i438.noise = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule', i439[11], i438.noise)
  i438.inheritVelocity = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule', i439[12], i438.inheritVelocity)
  i438.forceOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule', i439[13], i438.forceOverLifetime)
  i438.limitVelocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule', i439[14], i438.limitVelocityOverLifetime)
  i438.useAutoRandomSeed = !!i439[15]
  i438.randomSeed = i439[16]
  return i438
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule"] = function (request, data, root) {
  var i440 = root || new pc.ParticleSystemMain()
  var i441 = data
  i440.duration = i441[0]
  i440.loop = !!i441[1]
  i440.prewarm = !!i441[2]
  i440.startDelay = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i441[3], i440.startDelay)
  i440.startLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i441[4], i440.startLifetime)
  i440.startSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i441[5], i440.startSpeed)
  i440.startSize3D = !!i441[6]
  i440.startSizeX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i441[7], i440.startSizeX)
  i440.startSizeY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i441[8], i440.startSizeY)
  i440.startSizeZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i441[9], i440.startSizeZ)
  i440.startRotation3D = !!i441[10]
  i440.startRotationX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i441[11], i440.startRotationX)
  i440.startRotationY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i441[12], i440.startRotationY)
  i440.startRotationZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i441[13], i440.startRotationZ)
  i440.startColor = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i441[14], i440.startColor)
  i440.gravityModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i441[15], i440.gravityModifier)
  i440.simulationSpace = i441[16]
  request.r(i441[17], i441[18], 0, i440, 'customSimulationSpace')
  i440.simulationSpeed = i441[19]
  i440.useUnscaledTime = !!i441[20]
  i440.scalingMode = i441[21]
  i440.playOnAwake = !!i441[22]
  i440.maxParticles = i441[23]
  i440.emitterVelocityMode = i441[24]
  i440.stopAction = i441[25]
  return i440
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve"] = function (request, data, root) {
  var i442 = root || new pc.MinMaxCurve()
  var i443 = data
  i442.mode = i443[0]
  i442.curveMin = new pc.AnimationCurve( { keys_flow: i443[1] } )
  i442.curveMax = new pc.AnimationCurve( { keys_flow: i443[2] } )
  i442.curveMultiplier = i443[3]
  i442.constantMin = i443[4]
  i442.constantMax = i443[5]
  return i442
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient"] = function (request, data, root) {
  var i444 = root || new pc.MinMaxGradient()
  var i445 = data
  i444.mode = i445[0]
  i444.gradientMin = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i445[1], i444.gradientMin)
  i444.gradientMax = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i445[2], i444.gradientMax)
  i444.colorMin = new pc.Color(i445[3], i445[4], i445[5], i445[6])
  i444.colorMax = new pc.Color(i445[7], i445[8], i445[9], i445[10])
  return i444
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient"] = function (request, data, root) {
  var i446 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient' )
  var i447 = data
  i446.mode = i447[0]
  var i449 = i447[1]
  var i448 = []
  for(var i = 0; i < i449.length; i += 1) {
    i448.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey', i449[i + 0]) );
  }
  i446.colorKeys = i448
  var i451 = i447[2]
  var i450 = []
  for(var i = 0; i < i451.length; i += 1) {
    i450.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey', i451[i + 0]) );
  }
  i446.alphaKeys = i450
  return i446
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule"] = function (request, data, root) {
  var i452 = root || new pc.ParticleSystemColorBySpeed()
  var i453 = data
  i452.enabled = !!i453[0]
  i452.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i453[1], i452.color)
  i452.range = new pc.Vec2( i453[2], i453[3] )
  return i452
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey"] = function (request, data, root) {
  var i456 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey' )
  var i457 = data
  i456.color = new pc.Color(i457[0], i457[1], i457[2], i457[3])
  i456.time = i457[4]
  return i456
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey"] = function (request, data, root) {
  var i460 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey' )
  var i461 = data
  i460.alpha = i461[0]
  i460.time = i461[1]
  return i460
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule"] = function (request, data, root) {
  var i462 = root || new pc.ParticleSystemColorOverLifetime()
  var i463 = data
  i462.enabled = !!i463[0]
  i462.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i463[1], i462.color)
  return i462
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule"] = function (request, data, root) {
  var i464 = root || new pc.ParticleSystemEmitter()
  var i465 = data
  i464.enabled = !!i465[0]
  i464.rateOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i465[1], i464.rateOverTime)
  i464.rateOverDistance = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i465[2], i464.rateOverDistance)
  var i467 = i465[3]
  var i466 = []
  for(var i = 0; i < i467.length; i += 1) {
    i466.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst', i467[i + 0]) );
  }
  i464.bursts = i466
  return i464
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst"] = function (request, data, root) {
  var i470 = root || new pc.ParticleSystemBurst()
  var i471 = data
  i470.count = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i471[0], i470.count)
  i470.cycleCount = i471[1]
  i470.minCount = i471[2]
  i470.maxCount = i471[3]
  i470.repeatInterval = i471[4]
  i470.time = i471[5]
  return i470
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule"] = function (request, data, root) {
  var i472 = root || new pc.ParticleSystemRotationBySpeed()
  var i473 = data
  i472.enabled = !!i473[0]
  i472.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i473[1], i472.x)
  i472.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i473[2], i472.y)
  i472.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i473[3], i472.z)
  i472.separateAxes = !!i473[4]
  i472.range = new pc.Vec2( i473[5], i473[6] )
  return i472
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule"] = function (request, data, root) {
  var i474 = root || new pc.ParticleSystemRotationOverLifetime()
  var i475 = data
  i474.enabled = !!i475[0]
  i474.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i475[1], i474.x)
  i474.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i475[2], i474.y)
  i474.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i475[3], i474.z)
  i474.separateAxes = !!i475[4]
  return i474
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule"] = function (request, data, root) {
  var i476 = root || new pc.ParticleSystemShape()
  var i477 = data
  i476.enabled = !!i477[0]
  i476.shapeType = i477[1]
  i476.randomDirectionAmount = i477[2]
  i476.sphericalDirectionAmount = i477[3]
  i476.randomPositionAmount = i477[4]
  i476.alignToDirection = !!i477[5]
  i476.radius = i477[6]
  i476.radiusMode = i477[7]
  i476.radiusSpread = i477[8]
  i476.radiusSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i477[9], i476.radiusSpeed)
  i476.radiusThickness = i477[10]
  i476.angle = i477[11]
  i476.length = i477[12]
  i476.boxThickness = new pc.Vec3( i477[13], i477[14], i477[15] )
  i476.meshShapeType = i477[16]
  request.r(i477[17], i477[18], 0, i476, 'mesh')
  request.r(i477[19], i477[20], 0, i476, 'meshRenderer')
  request.r(i477[21], i477[22], 0, i476, 'skinnedMeshRenderer')
  i476.useMeshMaterialIndex = !!i477[23]
  i476.meshMaterialIndex = i477[24]
  i476.useMeshColors = !!i477[25]
  i476.normalOffset = i477[26]
  i476.arc = i477[27]
  i476.arcMode = i477[28]
  i476.arcSpread = i477[29]
  i476.arcSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i477[30], i476.arcSpeed)
  i476.donutRadius = i477[31]
  i476.position = new pc.Vec3( i477[32], i477[33], i477[34] )
  i476.rotation = new pc.Vec3( i477[35], i477[36], i477[37] )
  i476.scale = new pc.Vec3( i477[38], i477[39], i477[40] )
  return i476
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule"] = function (request, data, root) {
  var i478 = root || new pc.ParticleSystemSizeBySpeed()
  var i479 = data
  i478.enabled = !!i479[0]
  i478.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i479[1], i478.x)
  i478.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i479[2], i478.y)
  i478.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i479[3], i478.z)
  i478.separateAxes = !!i479[4]
  i478.range = new pc.Vec2( i479[5], i479[6] )
  return i478
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule"] = function (request, data, root) {
  var i480 = root || new pc.ParticleSystemSizeOverLifetime()
  var i481 = data
  i480.enabled = !!i481[0]
  i480.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i481[1], i480.x)
  i480.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i481[2], i480.y)
  i480.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i481[3], i480.z)
  i480.separateAxes = !!i481[4]
  return i480
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule"] = function (request, data, root) {
  var i482 = root || new pc.ParticleSystemTextureSheetAnimation()
  var i483 = data
  i482.enabled = !!i483[0]
  i482.mode = i483[1]
  i482.animation = i483[2]
  i482.numTilesX = i483[3]
  i482.numTilesY = i483[4]
  i482.useRandomRow = !!i483[5]
  i482.frameOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i483[6], i482.frameOverTime)
  i482.startFrame = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i483[7], i482.startFrame)
  i482.cycleCount = i483[8]
  i482.rowIndex = i483[9]
  i482.flipU = i483[10]
  i482.flipV = i483[11]
  i482.spriteCount = i483[12]
  var i485 = i483[13]
  var i484 = []
  for(var i = 0; i < i485.length; i += 2) {
  request.r(i485[i + 0], i485[i + 1], 2, i484, '')
  }
  i482.sprites = i484
  return i482
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule"] = function (request, data, root) {
  var i488 = root || new pc.ParticleSystemVelocityOverLifetime()
  var i489 = data
  i488.enabled = !!i489[0]
  i488.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i489[1], i488.x)
  i488.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i489[2], i488.y)
  i488.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i489[3], i488.z)
  i488.radial = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i489[4], i488.radial)
  i488.speedModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i489[5], i488.speedModifier)
  i488.space = i489[6]
  i488.orbitalX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i489[7], i488.orbitalX)
  i488.orbitalY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i489[8], i488.orbitalY)
  i488.orbitalZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i489[9], i488.orbitalZ)
  i488.orbitalOffsetX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i489[10], i488.orbitalOffsetX)
  i488.orbitalOffsetY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i489[11], i488.orbitalOffsetY)
  i488.orbitalOffsetZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i489[12], i488.orbitalOffsetZ)
  return i488
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule"] = function (request, data, root) {
  var i490 = root || new pc.ParticleSystemNoise()
  var i491 = data
  i490.enabled = !!i491[0]
  i490.separateAxes = !!i491[1]
  i490.strengthX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i491[2], i490.strengthX)
  i490.strengthY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i491[3], i490.strengthY)
  i490.strengthZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i491[4], i490.strengthZ)
  i490.frequency = i491[5]
  i490.damping = !!i491[6]
  i490.octaveCount = i491[7]
  i490.octaveMultiplier = i491[8]
  i490.octaveScale = i491[9]
  i490.quality = i491[10]
  i490.scrollSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i491[11], i490.scrollSpeed)
  i490.scrollSpeedMultiplier = i491[12]
  i490.remapEnabled = !!i491[13]
  i490.remapX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i491[14], i490.remapX)
  i490.remapY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i491[15], i490.remapY)
  i490.remapZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i491[16], i490.remapZ)
  i490.positionAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i491[17], i490.positionAmount)
  i490.rotationAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i491[18], i490.rotationAmount)
  i490.sizeAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i491[19], i490.sizeAmount)
  return i490
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule"] = function (request, data, root) {
  var i492 = root || new pc.ParticleSystemInheritVelocity()
  var i493 = data
  i492.enabled = !!i493[0]
  i492.mode = i493[1]
  i492.curve = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i493[2], i492.curve)
  return i492
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule"] = function (request, data, root) {
  var i494 = root || new pc.ParticleSystemForceOverLifetime()
  var i495 = data
  i494.enabled = !!i495[0]
  i494.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i495[1], i494.x)
  i494.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i495[2], i494.y)
  i494.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i495[3], i494.z)
  i494.space = i495[4]
  i494.randomized = !!i495[5]
  return i494
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule"] = function (request, data, root) {
  var i496 = root || new pc.ParticleSystemLimitVelocityOverLifetime()
  var i497 = data
  i496.enabled = !!i497[0]
  i496.limit = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i497[1], i496.limit)
  i496.limitX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i497[2], i496.limitX)
  i496.limitY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i497[3], i496.limitY)
  i496.limitZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i497[4], i496.limitZ)
  i496.dampen = i497[5]
  i496.separateAxes = !!i497[6]
  i496.space = i497[7]
  i496.drag = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i497[8], i496.drag)
  i496.multiplyDragByParticleSize = !!i497[9]
  i496.multiplyDragByParticleVelocity = !!i497[10]
  return i496
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer"] = function (request, data, root) {
  var i498 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer' )
  var i499 = data
  request.r(i499[0], i499[1], 0, i498, 'mesh')
  i498.meshCount = i499[2]
  i498.activeVertexStreamsCount = i499[3]
  i498.alignment = i499[4]
  i498.renderMode = i499[5]
  i498.sortMode = i499[6]
  i498.lengthScale = i499[7]
  i498.velocityScale = i499[8]
  i498.cameraVelocityScale = i499[9]
  i498.normalDirection = i499[10]
  i498.sortingFudge = i499[11]
  i498.minParticleSize = i499[12]
  i498.maxParticleSize = i499[13]
  i498.pivot = new pc.Vec3( i499[14], i499[15], i499[16] )
  request.r(i499[17], i499[18], 0, i498, 'trailMaterial')
  i498.applyActiveColorSpace = !!i499[19]
  i498.enabled = !!i499[20]
  request.r(i499[21], i499[22], 0, i498, 'sharedMaterial')
  var i501 = i499[23]
  var i500 = []
  for(var i = 0; i < i501.length; i += 2) {
  request.r(i501[i + 0], i501[i + 1], 2, i500, '')
  }
  i498.sharedMaterials = i500
  i498.receiveShadows = !!i499[24]
  i498.shadowCastingMode = i499[25]
  i498.sortingLayerID = i499[26]
  i498.sortingOrder = i499[27]
  i498.lightmapIndex = i499[28]
  i498.lightmapSceneIndex = i499[29]
  i498.lightmapScaleOffset = new pc.Vec4( i499[30], i499[31], i499[32], i499[33] )
  i498.lightProbeUsage = i499[34]
  i498.reflectionProbeUsage = i499[35]
  return i498
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i504 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i505 = data
  i504.name = i505[0]
  i504.tagId = i505[1]
  i504.enabled = !!i505[2]
  i504.isStatic = !!i505[3]
  i504.layer = i505[4]
  return i504
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i506 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i507 = data
  i506.name = i507[0]
  i506.index = i507[1]
  i506.startup = !!i507[2]
  return i506
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i508 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i509 = data
  i508.aspect = i509[0]
  i508.orthographic = !!i509[1]
  i508.orthographicSize = i509[2]
  i508.backgroundColor = new pc.Color(i509[3], i509[4], i509[5], i509[6])
  i508.nearClipPlane = i509[7]
  i508.farClipPlane = i509[8]
  i508.fieldOfView = i509[9]
  i508.depth = i509[10]
  i508.clearFlags = i509[11]
  i508.cullingMask = i509[12]
  i508.rect = i509[13]
  request.r(i509[14], i509[15], 0, i508, 'targetTexture')
  i508.usePhysicalProperties = !!i509[16]
  i508.focalLength = i509[17]
  i508.sensorSize = new pc.Vec2( i509[18], i509[19] )
  i508.lensShift = new pc.Vec2( i509[20], i509[21] )
  i508.gateFit = i509[22]
  i508.commandBufferCount = i509[23]
  i508.cameraType = i509[24]
  i508.enabled = !!i509[25]
  return i508
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i510 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i511 = data
  request.r(i511[0], i511[1], 0, i510, 'm_FirstSelected')
  i510.m_sendNavigationEvents = !!i511[2]
  i510.m_DragThreshold = i511[3]
  return i510
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i512 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i513 = data
  i512.m_HorizontalAxis = i513[0]
  i512.m_VerticalAxis = i513[1]
  i512.m_SubmitButton = i513[2]
  i512.m_CancelButton = i513[3]
  i512.m_InputActionsPerSecond = i513[4]
  i512.m_RepeatDelay = i513[5]
  i512.m_ForceModuleActive = !!i513[6]
  i512.m_SendPointerHoverToParent = !!i513[7]
  return i512
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i514 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i515 = data
  i514.pivot = new pc.Vec2( i515[0], i515[1] )
  i514.anchorMin = new pc.Vec2( i515[2], i515[3] )
  i514.anchorMax = new pc.Vec2( i515[4], i515[5] )
  i514.sizeDelta = new pc.Vec2( i515[6], i515[7] )
  i514.anchoredPosition3D = new pc.Vec3( i515[8], i515[9], i515[10] )
  i514.rotation = new pc.Quat(i515[11], i515[12], i515[13], i515[14])
  i514.scale = new pc.Vec3( i515[15], i515[16], i515[17] )
  return i514
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i516 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i517 = data
  i516.planeDistance = i517[0]
  i516.referencePixelsPerUnit = i517[1]
  i516.isFallbackOverlay = !!i517[2]
  i516.renderMode = i517[3]
  i516.renderOrder = i517[4]
  i516.sortingLayerName = i517[5]
  i516.sortingOrder = i517[6]
  i516.scaleFactor = i517[7]
  request.r(i517[8], i517[9], 0, i516, 'worldCamera')
  i516.overrideSorting = !!i517[10]
  i516.pixelPerfect = !!i517[11]
  i516.targetDisplay = i517[12]
  i516.overridePixelPerfect = !!i517[13]
  i516.enabled = !!i517[14]
  return i516
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i518 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i519 = data
  i518.m_UiScaleMode = i519[0]
  i518.m_ReferencePixelsPerUnit = i519[1]
  i518.m_ScaleFactor = i519[2]
  i518.m_ReferenceResolution = new pc.Vec2( i519[3], i519[4] )
  i518.m_ScreenMatchMode = i519[5]
  i518.m_MatchWidthOrHeight = i519[6]
  i518.m_PhysicalUnit = i519[7]
  i518.m_FallbackScreenDPI = i519[8]
  i518.m_DefaultSpriteDPI = i519[9]
  i518.m_DynamicPixelsPerUnit = i519[10]
  i518.m_PresetInfoIsWorld = !!i519[11]
  return i518
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i520 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i521 = data
  i520.m_IgnoreReversedGraphics = !!i521[0]
  i520.m_BlockingObjects = i521[1]
  i520.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i521[2] )
  return i520
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i522 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i523 = data
  i522.cullTransparentMesh = !!i523[0]
  return i522
}

Deserializers["UnityEngine.UI.AspectRatioFitter"] = function (request, data, root) {
  var i524 = root || request.c( 'UnityEngine.UI.AspectRatioFitter' )
  var i525 = data
  i524.m_AspectMode = i525[0]
  i524.m_AspectRatio = i525[1]
  return i524
}

Deserializers["UnityEngine.UI.RawImage"] = function (request, data, root) {
  var i526 = root || request.c( 'UnityEngine.UI.RawImage' )
  var i527 = data
  request.r(i527[0], i527[1], 0, i526, 'm_Texture')
  i526.m_UVRect = UnityEngine.Rect.MinMaxRect(i527[2], i527[3], i527[4], i527[5])
  request.r(i527[6], i527[7], 0, i526, 'm_Material')
  i526.m_Maskable = !!i527[8]
  i526.m_Color = new pc.Color(i527[9], i527[10], i527[11], i527[12])
  i526.m_RaycastTarget = !!i527[13]
  i526.m_RaycastPadding = new pc.Vec4( i527[14], i527[15], i527[16], i527[17] )
  return i526
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer"] = function (request, data, root) {
  var i528 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer' )
  var i529 = data
  i528.color = new pc.Color(i529[0], i529[1], i529[2], i529[3])
  request.r(i529[4], i529[5], 0, i528, 'sprite')
  i528.flipX = !!i529[6]
  i528.flipY = !!i529[7]
  i528.drawMode = i529[8]
  i528.size = new pc.Vec2( i529[9], i529[10] )
  i528.tileMode = i529[11]
  i528.adaptiveModeThreshold = i529[12]
  i528.maskInteraction = i529[13]
  i528.spriteSortPoint = i529[14]
  i528.enabled = !!i529[15]
  request.r(i529[16], i529[17], 0, i528, 'sharedMaterial')
  var i531 = i529[18]
  var i530 = []
  for(var i = 0; i < i531.length; i += 2) {
  request.r(i531[i + 0], i531[i + 1], 2, i530, '')
  }
  i528.sharedMaterials = i530
  i528.receiveShadows = !!i529[19]
  i528.shadowCastingMode = i529[20]
  i528.sortingLayerID = i529[21]
  i528.sortingOrder = i529[22]
  i528.lightmapIndex = i529[23]
  i528.lightmapSceneIndex = i529[24]
  i528.lightmapScaleOffset = new pc.Vec4( i529[25], i529[26], i529[27], i529[28] )
  i528.lightProbeUsage = i529[29]
  i528.reflectionProbeUsage = i529[30]
  return i528
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D"] = function (request, data, root) {
  var i532 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D' )
  var i533 = data
  i532.usedByComposite = !!i533[0]
  i532.autoTiling = !!i533[1]
  i532.size = new pc.Vec2( i533[2], i533[3] )
  i532.edgeRadius = i533[4]
  i532.enabled = !!i533[5]
  i532.isTrigger = !!i533[6]
  i532.usedByEffector = !!i533[7]
  i532.density = i533[8]
  i532.offset = new pc.Vec2( i533[9], i533[10] )
  request.r(i533[11], i533[12], 0, i532, 'material')
  return i532
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SortingGroup"] = function (request, data, root) {
  var i534 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SortingGroup' )
  var i535 = data
  i534.sortingLayerIndex = i535[0]
  i534.sortingOrder = i535[1]
  i534.sortingLayerName = i535[2]
  i534.enabled = !!i535[3]
  return i534
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Rigidbody2D"] = function (request, data, root) {
  var i536 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Rigidbody2D' )
  var i537 = data
  i536.bodyType = i537[0]
  request.r(i537[1], i537[2], 0, i536, 'material')
  i536.simulated = !!i537[3]
  i536.useAutoMass = !!i537[4]
  i536.mass = i537[5]
  i536.drag = i537[6]
  i536.angularDrag = i537[7]
  i536.gravityScale = i537[8]
  i536.collisionDetectionMode = i537[9]
  i536.sleepMode = i537[10]
  i536.constraints = i537[11]
  return i536
}

Deserializers["MonsterController"] = function (request, data, root) {
  var i538 = root || request.c( 'MonsterController' )
  var i539 = data
  request.r(i539[0], i539[1], 0, i538, 'joint')
  request.r(i539[2], i539[3], 0, i538, 'rb')
  request.r(i539[4], i539[5], 0, i538, 'deadSFX')
  i538.force = new pc.Vec2( i539[6], i539[7] )
  return i538
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.HingeJoint2D"] = function (request, data, root) {
  var i540 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.HingeJoint2D' )
  var i541 = data
  i540.useLimits = !!i541[0]
  i540.limits = request.d('UnityEngine.JointAngleLimits2D', i541[1], i540.limits)
  i540.useMotor = !!i541[2]
  i540.motor = request.d('UnityEngine.JointMotor2D', i541[3], i540.motor)
  i540.anchor = new pc.Vec2( i541[4], i541[5] )
  i540.connectedAnchor = new pc.Vec2( i541[6], i541[7] )
  i540.autoConfigureConnectedAnchor = !!i541[8]
  request.r(i541[9], i541[10], 0, i540, 'connectedBody')
  i540.breakForce = i541[11]
  i540.breakTorque = i541[12]
  i540.enableCollision = !!i541[13]
  i540.enabled = !!i541[14]
  return i540
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.TargetJoint2D"] = function (request, data, root) {
  var i542 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.TargetJoint2D' )
  var i543 = data
  i542.autoConfigureTarget = !!i543[0]
  i542.target = new pc.Vec2( i543[1], i543[2] )
  i542.anchor = new pc.Vec2( i543[3], i543[4] )
  i542.maxForce = i543[5]
  i542.dampingRatio = i543[6]
  i542.frequency = i543[7]
  request.r(i543[8], i543[9], 0, i542, 'connectedBody')
  i542.breakForce = i543[10]
  i542.breakTorque = i543[11]
  i542.enableCollision = !!i543[12]
  i542.enabled = !!i543[13]
  return i542
}

Deserializers["BonkController"] = function (request, data, root) {
  var i544 = root || request.c( 'BonkController' )
  var i545 = data
  i544.target = i545[0]
  i544.maxBonk = i545[1]
  request.r(i545[2], i545[3], 0, i544, 'hitSound')
  return i544
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CircleCollider2D"] = function (request, data, root) {
  var i546 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CircleCollider2D' )
  var i547 = data
  i546.radius = i547[0]
  i546.enabled = !!i547[1]
  i546.isTrigger = !!i547[2]
  i546.usedByEffector = !!i547[3]
  i546.density = i547[4]
  i546.offset = new pc.Vec2( i547[5], i547[6] )
  request.r(i547[7], i547[8], 0, i546, 'material')
  return i546
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i548 = root || request.c( 'UnityEngine.UI.Button' )
  var i549 = data
  i548.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i549[0], i548.m_OnClick)
  i548.m_Navigation = request.d('UnityEngine.UI.Navigation', i549[1], i548.m_Navigation)
  i548.m_Transition = i549[2]
  i548.m_Colors = request.d('UnityEngine.UI.ColorBlock', i549[3], i548.m_Colors)
  i548.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i549[4], i548.m_SpriteState)
  i548.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i549[5], i548.m_AnimationTriggers)
  i548.m_Interactable = !!i549[6]
  request.r(i549[7], i549[8], 0, i548, 'm_TargetGraphic')
  return i548
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i550 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i551 = data
  i550.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i551[0], i550.m_PersistentCalls)
  return i550
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i552 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i553 = data
  var i555 = i553[0]
  var i554 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i555.length; i += 1) {
    i554.add(request.d('UnityEngine.Events.PersistentCall', i555[i + 0]));
  }
  i552.m_Calls = i554
  return i552
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i558 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i559 = data
  request.r(i559[0], i559[1], 0, i558, 'm_Target')
  i558.m_TargetAssemblyTypeName = i559[2]
  i558.m_MethodName = i559[3]
  i558.m_Mode = i559[4]
  i558.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i559[5], i558.m_Arguments)
  i558.m_CallState = i559[6]
  return i558
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i560 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i561 = data
  i560.m_Mode = i561[0]
  i560.m_WrapAround = !!i561[1]
  request.r(i561[2], i561[3], 0, i560, 'm_SelectOnUp')
  request.r(i561[4], i561[5], 0, i560, 'm_SelectOnDown')
  request.r(i561[6], i561[7], 0, i560, 'm_SelectOnLeft')
  request.r(i561[8], i561[9], 0, i560, 'm_SelectOnRight')
  return i560
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i562 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i563 = data
  i562.m_NormalColor = new pc.Color(i563[0], i563[1], i563[2], i563[3])
  i562.m_HighlightedColor = new pc.Color(i563[4], i563[5], i563[6], i563[7])
  i562.m_PressedColor = new pc.Color(i563[8], i563[9], i563[10], i563[11])
  i562.m_SelectedColor = new pc.Color(i563[12], i563[13], i563[14], i563[15])
  i562.m_DisabledColor = new pc.Color(i563[16], i563[17], i563[18], i563[19])
  i562.m_ColorMultiplier = i563[20]
  i562.m_FadeDuration = i563[21]
  return i562
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i564 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i565 = data
  request.r(i565[0], i565[1], 0, i564, 'm_HighlightedSprite')
  request.r(i565[2], i565[3], 0, i564, 'm_PressedSprite')
  request.r(i565[4], i565[5], 0, i564, 'm_SelectedSprite')
  request.r(i565[6], i565[7], 0, i564, 'm_DisabledSprite')
  return i564
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i566 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i567 = data
  i566.m_NormalTrigger = i567[0]
  i566.m_HighlightedTrigger = i567[1]
  i566.m_PressedTrigger = i567[2]
  i566.m_SelectedTrigger = i567[3]
  i566.m_DisabledTrigger = i567[4]
  return i566
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i568 = root || request.c( 'UnityEngine.UI.Image' )
  var i569 = data
  request.r(i569[0], i569[1], 0, i568, 'm_Sprite')
  i568.m_Type = i569[2]
  i568.m_PreserveAspect = !!i569[3]
  i568.m_FillCenter = !!i569[4]
  i568.m_FillMethod = i569[5]
  i568.m_FillAmount = i569[6]
  i568.m_FillClockwise = !!i569[7]
  i568.m_FillOrigin = i569[8]
  i568.m_UseSpriteMesh = !!i569[9]
  i568.m_PixelsPerUnitMultiplier = i569[10]
  request.r(i569[11], i569[12], 0, i568, 'm_Material')
  i568.m_Maskable = !!i569[13]
  i568.m_Color = new pc.Color(i569[14], i569[15], i569[16], i569[17])
  i568.m_RaycastTarget = !!i569[18]
  i568.m_RaycastPadding = new pc.Vec4( i569[19], i569[20], i569[21], i569[22] )
  return i568
}

Deserializers["DG.Tweening.DOTweenAnimation"] = function (request, data, root) {
  var i570 = root || request.c( 'DG.Tweening.DOTweenAnimation' )
  var i571 = data
  i570.targetIsSelf = !!i571[0]
  request.r(i571[1], i571[2], 0, i570, 'targetGO')
  i570.tweenTargetIsTargetGO = !!i571[3]
  i570.delay = i571[4]
  i570.duration = i571[5]
  i570.easeType = i571[6]
  i570.easeCurve = new pc.AnimationCurve( { keys_flow: i571[7] } )
  i570.loopType = i571[8]
  i570.loops = i571[9]
  i570.id = i571[10]
  i570.isRelative = !!i571[11]
  i570.isFrom = !!i571[12]
  i570.isIndependentUpdate = !!i571[13]
  i570.autoKill = !!i571[14]
  i570.autoGenerate = !!i571[15]
  i570.isActive = !!i571[16]
  i570.isValid = !!i571[17]
  request.r(i571[18], i571[19], 0, i570, 'target')
  i570.animationType = i571[20]
  i570.targetType = i571[21]
  i570.forcedTargetType = i571[22]
  i570.autoPlay = !!i571[23]
  i570.useTargetAsV3 = !!i571[24]
  i570.endValueFloat = i571[25]
  i570.endValueV3 = new pc.Vec3( i571[26], i571[27], i571[28] )
  i570.endValueV2 = new pc.Vec2( i571[29], i571[30] )
  i570.endValueColor = new pc.Color(i571[31], i571[32], i571[33], i571[34])
  i570.endValueString = i571[35]
  i570.endValueRect = UnityEngine.Rect.MinMaxRect(i571[36], i571[37], i571[38], i571[39])
  request.r(i571[40], i571[41], 0, i570, 'endValueTransform')
  i570.optionalBool0 = !!i571[42]
  i570.optionalBool1 = !!i571[43]
  i570.optionalFloat0 = i571[44]
  i570.optionalInt0 = i571[45]
  i570.optionalRotationMode = i571[46]
  i570.optionalScrambleMode = i571[47]
  i570.optionalShakeRandomnessMode = i571[48]
  i570.optionalString = i571[49]
  i570.updateType = i571[50]
  i570.isSpeedBased = !!i571[51]
  i570.hasOnStart = !!i571[52]
  i570.hasOnPlay = !!i571[53]
  i570.hasOnUpdate = !!i571[54]
  i570.hasOnStepComplete = !!i571[55]
  i570.hasOnComplete = !!i571[56]
  i570.hasOnTweenCreated = !!i571[57]
  i570.hasOnRewind = !!i571[58]
  i570.onStart = request.d('UnityEngine.Events.UnityEvent', i571[59], i570.onStart)
  i570.onPlay = request.d('UnityEngine.Events.UnityEvent', i571[60], i570.onPlay)
  i570.onUpdate = request.d('UnityEngine.Events.UnityEvent', i571[61], i570.onUpdate)
  i570.onStepComplete = request.d('UnityEngine.Events.UnityEvent', i571[62], i570.onStepComplete)
  i570.onComplete = request.d('UnityEngine.Events.UnityEvent', i571[63], i570.onComplete)
  i570.onTweenCreated = request.d('UnityEngine.Events.UnityEvent', i571[64], i570.onTweenCreated)
  i570.onRewind = request.d('UnityEngine.Events.UnityEvent', i571[65], i570.onRewind)
  return i570
}

Deserializers["UnityEngine.Events.UnityEvent"] = function (request, data, root) {
  var i572 = root || request.c( 'UnityEngine.Events.UnityEvent' )
  var i573 = data
  i572.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i573[0], i572.m_PersistentCalls)
  return i572
}

Deserializers["UnityEngine.UI.Text"] = function (request, data, root) {
  var i574 = root || request.c( 'UnityEngine.UI.Text' )
  var i575 = data
  i574.m_FontData = request.d('UnityEngine.UI.FontData', i575[0], i574.m_FontData)
  i574.m_Text = i575[1]
  request.r(i575[2], i575[3], 0, i574, 'm_Material')
  i574.m_Maskable = !!i575[4]
  i574.m_Color = new pc.Color(i575[5], i575[6], i575[7], i575[8])
  i574.m_RaycastTarget = !!i575[9]
  i574.m_RaycastPadding = new pc.Vec4( i575[10], i575[11], i575[12], i575[13] )
  return i574
}

Deserializers["UnityEngine.UI.FontData"] = function (request, data, root) {
  var i576 = root || request.c( 'UnityEngine.UI.FontData' )
  var i577 = data
  request.r(i577[0], i577[1], 0, i576, 'm_Font')
  i576.m_FontSize = i577[2]
  i576.m_FontStyle = i577[3]
  i576.m_BestFit = !!i577[4]
  i576.m_MinSize = i577[5]
  i576.m_MaxSize = i577[6]
  i576.m_Alignment = i577[7]
  i576.m_AlignByGeometry = !!i577[8]
  i576.m_RichText = !!i577[9]
  i576.m_HorizontalOverflow = i577[10]
  i576.m_VerticalOverflow = i577[11]
  i576.m_LineSpacing = i577[12]
  return i576
}

Deserializers["GameController"] = function (request, data, root) {
  var i578 = root || request.c( 'GameController' )
  var i579 = data
  var i581 = i579[0]
  var i580 = new (System.Collections.Generic.List$1(Bridge.ns('MonsterController')))
  for(var i = 0; i < i581.length; i += 2) {
  request.r(i581[i + 0], i581[i + 1], 1, i580, '')
  }
  i578.monsters = i580
  var i583 = i579[1]
  var i582 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Vector3')))
  for(var i = 0; i < i583.length; i += 3) {
    i582.add(new pc.Vec3( i583[i + 0], i583[i + 1], i583[i + 2] ));
  }
  i578.cameraPos = i582
  i578.speedMove = i579[2]
  request.r(i579[3], i579[4], 0, i578, 'target')
  i578.index = i579[5]
  i578.end = !!i579[6]
  request.r(i579[7], i579[8], 0, i578, 'mainCamera')
  request.r(i579[9], i579[10], 0, i578, 'endUI')
  return i578
}

Deserializers["TargetController"] = function (request, data, root) {
  var i588 = root || request.c( 'TargetController' )
  var i589 = data
  var i591 = i589[0]
  var i590 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TargetJoint2D')))
  for(var i = 0; i < i591.length; i += 2) {
  request.r(i591[i + 0], i591[i + 1], 1, i590, '')
  }
  i588.listTarget = i590
  request.r(i589[1], i589[2], 0, i588, 'currentTarget')
  i588.index = i589[3]
  request.r(i589[4], i589[5], 0, i588, 'tut')
  return i588
}

Deserializers["LunaController"] = function (request, data, root) {
  var i594 = root || request.c( 'LunaController' )
  var i595 = data
  request.r(i595[0], i595[1], 0, i594, 'BGTexture')
  i594.UseTime = !!i595[2]
  i594.TimePlay = i595[3]
  i594.TutText = i595[4]
  i594.TutTextColor = new pc.Color(i595[5], i595[6], i595[7], i595[8])
  request.r(i595[9], i595[10], 0, i594, 'BGImage')
  request.r(i595[11], i595[12], 0, i594, 'text')
  var i597 = i595[13]
  var i596 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.UI.Button')))
  for(var i = 0; i < i597.length; i += 2) {
  request.r(i597[i + 0], i597[i + 1], 1, i596, '')
  }
  i594.CTA = i596
  return i594
}

Deserializers["AudioController"] = function (request, data, root) {
  var i600 = root || request.c( 'AudioController' )
  var i601 = data
  request.r(i601[0], i601[1], 0, i600, 'BGM')
  request.r(i601[2], i601[3], 0, i600, 'musicSource')
  request.r(i601[4], i601[5], 0, i600, 'pool')
  return i600
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.AudioSource"] = function (request, data, root) {
  var i602 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.AudioSource' )
  var i603 = data
  request.r(i603[0], i603[1], 0, i602, 'clip')
  request.r(i603[2], i603[3], 0, i602, 'outputAudioMixerGroup')
  i602.playOnAwake = !!i603[4]
  i602.loop = !!i603[5]
  i602.time = i603[6]
  i602.volume = i603[7]
  i602.pitch = i603[8]
  i602.enabled = !!i603[9]
  return i602
}

Deserializers["VFXController"] = function (request, data, root) {
  var i604 = root || request.c( 'VFXController' )
  var i605 = data
  request.r(i605[0], i605[1], 0, i604, 'bloodPrefab')
  request.r(i605[2], i605[3], 0, i604, 'pool')
  return i604
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i606 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i607 = data
  i606.ambientIntensity = i607[0]
  i606.reflectionIntensity = i607[1]
  i606.ambientMode = i607[2]
  i606.ambientLight = new pc.Color(i607[3], i607[4], i607[5], i607[6])
  i606.ambientSkyColor = new pc.Color(i607[7], i607[8], i607[9], i607[10])
  i606.ambientGroundColor = new pc.Color(i607[11], i607[12], i607[13], i607[14])
  i606.ambientEquatorColor = new pc.Color(i607[15], i607[16], i607[17], i607[18])
  i606.fogColor = new pc.Color(i607[19], i607[20], i607[21], i607[22])
  i606.fogEndDistance = i607[23]
  i606.fogStartDistance = i607[24]
  i606.fogDensity = i607[25]
  i606.fog = !!i607[26]
  request.r(i607[27], i607[28], 0, i606, 'skybox')
  i606.fogMode = i607[29]
  var i609 = i607[30]
  var i608 = []
  for(var i = 0; i < i609.length; i += 1) {
    i608.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i609[i + 0]) );
  }
  i606.lightmaps = i608
  i606.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i607[31], i606.lightProbes)
  i606.lightmapsMode = i607[32]
  i606.mixedBakeMode = i607[33]
  i606.environmentLightingMode = i607[34]
  i606.ambientProbe = new pc.SphericalHarmonicsL2(i607[35])
  request.r(i607[36], i607[37], 0, i606, 'customReflection')
  request.r(i607[38], i607[39], 0, i606, 'defaultReflection')
  i606.defaultReflectionMode = i607[40]
  i606.defaultReflectionResolution = i607[41]
  i606.sunLightObjectId = i607[42]
  i606.pixelLightCount = i607[43]
  i606.defaultReflectionHDR = !!i607[44]
  i606.hasLightDataAsset = !!i607[45]
  i606.hasManualGenerate = !!i607[46]
  return i606
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i612 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i613 = data
  request.r(i613[0], i613[1], 0, i612, 'lightmapColor')
  request.r(i613[2], i613[3], 0, i612, 'lightmapDirection')
  request.r(i613[4], i613[5], 0, i612, 'shadowMask')
  return i612
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i614 = root || new UnityEngine.LightProbes()
  var i615 = data
  return i614
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i622 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i623 = data
  var i625 = i623[0]
  var i624 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i625.length; i += 1) {
    i624.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i625[i + 0]));
  }
  i622.ShaderCompilationErrors = i624
  i622.name = i623[1]
  i622.guid = i623[2]
  var i627 = i623[3]
  var i626 = []
  for(var i = 0; i < i627.length; i += 1) {
    i626.push( i627[i + 0] );
  }
  i622.shaderDefinedKeywords = i626
  var i629 = i623[4]
  var i628 = []
  for(var i = 0; i < i629.length; i += 1) {
    i628.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i629[i + 0]) );
  }
  i622.passes = i628
  var i631 = i623[5]
  var i630 = []
  for(var i = 0; i < i631.length; i += 1) {
    i630.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i631[i + 0]) );
  }
  i622.usePasses = i630
  var i633 = i623[6]
  var i632 = []
  for(var i = 0; i < i633.length; i += 1) {
    i632.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i633[i + 0]) );
  }
  i622.defaultParameterValues = i632
  request.r(i623[7], i623[8], 0, i622, 'unityFallbackShader')
  i622.readDepth = !!i623[9]
  i622.hasDepthOnlyPass = !!i623[10]
  i622.isCreatedByShaderGraph = !!i623[11]
  i622.disableBatching = !!i623[12]
  i622.compiled = !!i623[13]
  return i622
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i636 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i637 = data
  i636.shaderName = i637[0]
  i636.errorMessage = i637[1]
  return i636
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i642 = root || new pc.UnityShaderPass()
  var i643 = data
  i642.id = i643[0]
  i642.subShaderIndex = i643[1]
  i642.name = i643[2]
  i642.passType = i643[3]
  i642.grabPassTextureName = i643[4]
  i642.usePass = !!i643[5]
  i642.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i643[6], i642.zTest)
  i642.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i643[7], i642.zWrite)
  i642.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i643[8], i642.culling)
  i642.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i643[9], i642.blending)
  i642.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i643[10], i642.alphaBlending)
  i642.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i643[11], i642.colorWriteMask)
  i642.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i643[12], i642.offsetUnits)
  i642.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i643[13], i642.offsetFactor)
  i642.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i643[14], i642.stencilRef)
  i642.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i643[15], i642.stencilReadMask)
  i642.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i643[16], i642.stencilWriteMask)
  i642.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i643[17], i642.stencilOp)
  i642.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i643[18], i642.stencilOpFront)
  i642.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i643[19], i642.stencilOpBack)
  var i645 = i643[20]
  var i644 = []
  for(var i = 0; i < i645.length; i += 1) {
    i644.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i645[i + 0]) );
  }
  i642.tags = i644
  var i647 = i643[21]
  var i646 = []
  for(var i = 0; i < i647.length; i += 1) {
    i646.push( i647[i + 0] );
  }
  i642.passDefinedKeywords = i646
  var i649 = i643[22]
  var i648 = []
  for(var i = 0; i < i649.length; i += 1) {
    i648.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i649[i + 0]) );
  }
  i642.passDefinedKeywordGroups = i648
  var i651 = i643[23]
  var i650 = []
  for(var i = 0; i < i651.length; i += 1) {
    i650.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i651[i + 0]) );
  }
  i642.variants = i650
  var i653 = i643[24]
  var i652 = []
  for(var i = 0; i < i653.length; i += 1) {
    i652.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i653[i + 0]) );
  }
  i642.excludedVariants = i652
  i642.hasDepthReader = !!i643[25]
  return i642
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i654 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i655 = data
  i654.val = i655[0]
  i654.name = i655[1]
  return i654
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i656 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i657 = data
  i656.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i657[0], i656.src)
  i656.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i657[1], i656.dst)
  i656.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i657[2], i656.op)
  return i656
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i658 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i659 = data
  i658.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i659[0], i658.pass)
  i658.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i659[1], i658.fail)
  i658.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i659[2], i658.zFail)
  i658.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i659[3], i658.comp)
  return i658
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i662 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i663 = data
  i662.name = i663[0]
  i662.value = i663[1]
  return i662
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i666 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i667 = data
  var i669 = i667[0]
  var i668 = []
  for(var i = 0; i < i669.length; i += 1) {
    i668.push( i669[i + 0] );
  }
  i666.keywords = i668
  i666.hasDiscard = !!i667[1]
  return i666
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i672 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i673 = data
  i672.passId = i673[0]
  i672.subShaderIndex = i673[1]
  var i675 = i673[2]
  var i674 = []
  for(var i = 0; i < i675.length; i += 1) {
    i674.push( i675[i + 0] );
  }
  i672.keywords = i674
  i672.vertexProgram = i673[3]
  i672.fragmentProgram = i673[4]
  i672.exportedForWebGl2 = !!i673[5]
  i672.readDepth = !!i673[6]
  return i672
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i678 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i679 = data
  request.r(i679[0], i679[1], 0, i678, 'shader')
  i678.pass = i679[2]
  return i678
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i682 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i683 = data
  i682.name = i683[0]
  i682.type = i683[1]
  i682.value = new pc.Vec4( i683[2], i683[3], i683[4], i683[5] )
  i682.textureValue = i683[6]
  i682.shaderPropertyFlag = i683[7]
  return i682
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i684 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i685 = data
  i684.name = i685[0]
  request.r(i685[1], i685[2], 0, i684, 'texture')
  i684.aabb = i685[3]
  i684.vertices = i685[4]
  i684.triangles = i685[5]
  i684.textureRect = UnityEngine.Rect.MinMaxRect(i685[6], i685[7], i685[8], i685[9])
  i684.packedRect = UnityEngine.Rect.MinMaxRect(i685[10], i685[11], i685[12], i685[13])
  i684.border = new pc.Vec4( i685[14], i685[15], i685[16], i685[17] )
  i684.transparency = i685[18]
  i684.bounds = i685[19]
  i684.pixelsPerUnit = i685[20]
  i684.textureWidth = i685[21]
  i684.textureHeight = i685[22]
  i684.nativeSize = new pc.Vec2( i685[23], i685[24] )
  i684.pivot = new pc.Vec2( i685[25], i685[26] )
  i684.textureRectOffset = new pc.Vec2( i685[27], i685[28] )
  return i684
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i686 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i687 = data
  i686.name = i687[0]
  return i686
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font"] = function (request, data, root) {
  var i688 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font' )
  var i689 = data
  i688.name = i689[0]
  i688.ascent = i689[1]
  i688.originalLineHeight = i689[2]
  i688.fontSize = i689[3]
  var i691 = i689[4]
  var i690 = []
  for(var i = 0; i < i691.length; i += 1) {
    i690.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo', i691[i + 0]) );
  }
  i688.characterInfo = i690
  request.r(i689[5], i689[6], 0, i688, 'texture')
  i688.originalFontSize = i689[7]
  return i688
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo"] = function (request, data, root) {
  var i694 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo' )
  var i695 = data
  i694.index = i695[0]
  i694.advance = i695[1]
  i694.bearing = i695[2]
  i694.glyphWidth = i695[3]
  i694.glyphHeight = i695[4]
  i694.minX = i695[5]
  i694.maxX = i695[6]
  i694.minY = i695[7]
  i694.maxY = i695[8]
  i694.uvBottomLeftX = i695[9]
  i694.uvBottomLeftY = i695[10]
  i694.uvBottomRightX = i695[11]
  i694.uvBottomRightY = i695[12]
  i694.uvTopLeftX = i695[13]
  i694.uvTopLeftY = i695[14]
  i694.uvTopRightX = i695[15]
  i694.uvTopRightY = i695[16]
  return i694
}

Deserializers["DG.Tweening.Core.DOTweenSettings"] = function (request, data, root) {
  var i696 = root || request.c( 'DG.Tweening.Core.DOTweenSettings' )
  var i697 = data
  i696.useSafeMode = !!i697[0]
  i696.safeModeOptions = request.d('DG.Tweening.Core.DOTweenSettings+SafeModeOptions', i697[1], i696.safeModeOptions)
  i696.timeScale = i697[2]
  i696.unscaledTimeScale = i697[3]
  i696.useSmoothDeltaTime = !!i697[4]
  i696.maxSmoothUnscaledTime = i697[5]
  i696.rewindCallbackMode = i697[6]
  i696.showUnityEditorReport = !!i697[7]
  i696.logBehaviour = i697[8]
  i696.drawGizmos = !!i697[9]
  i696.defaultRecyclable = !!i697[10]
  i696.defaultAutoPlay = i697[11]
  i696.defaultUpdateType = i697[12]
  i696.defaultTimeScaleIndependent = !!i697[13]
  i696.defaultEaseType = i697[14]
  i696.defaultEaseOvershootOrAmplitude = i697[15]
  i696.defaultEasePeriod = i697[16]
  i696.defaultAutoKill = !!i697[17]
  i696.defaultLoopType = i697[18]
  i696.debugMode = !!i697[19]
  i696.debugStoreTargetId = !!i697[20]
  i696.showPreviewPanel = !!i697[21]
  i696.storeSettingsLocation = i697[22]
  i696.modules = request.d('DG.Tweening.Core.DOTweenSettings+ModulesSetup', i697[23], i696.modules)
  i696.createASMDEF = !!i697[24]
  i696.showPlayingTweens = !!i697[25]
  i696.showPausedTweens = !!i697[26]
  return i696
}

Deserializers["DG.Tweening.Core.DOTweenSettings+SafeModeOptions"] = function (request, data, root) {
  var i698 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+SafeModeOptions' )
  var i699 = data
  i698.logBehaviour = i699[0]
  i698.nestedTweenFailureBehaviour = i699[1]
  return i698
}

Deserializers["DG.Tweening.Core.DOTweenSettings+ModulesSetup"] = function (request, data, root) {
  var i700 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+ModulesSetup' )
  var i701 = data
  i700.showPanel = !!i701[0]
  i700.audioEnabled = !!i701[1]
  i700.physicsEnabled = !!i701[2]
  i700.physics2DEnabled = !!i701[3]
  i700.spriteEnabled = !!i701[4]
  i700.uiEnabled = !!i701[5]
  i700.textMeshProEnabled = !!i701[6]
  i700.tk2DEnabled = !!i701[7]
  i700.deAudioEnabled = !!i701[8]
  i700.deUnityExtendedEnabled = !!i701[9]
  i700.epoOutlineEnabled = !!i701[10]
  return i700
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i702 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i703 = data
  var i705 = i703[0]
  var i704 = []
  for(var i = 0; i < i705.length; i += 1) {
    i704.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i705[i + 0]) );
  }
  i702.files = i704
  i702.componentToPrefabIds = i703[1]
  return i702
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i708 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i709 = data
  i708.path = i709[0]
  request.r(i709[1], i709[2], 0, i708, 'unityObject')
  return i708
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i710 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i711 = data
  var i713 = i711[0]
  var i712 = []
  for(var i = 0; i < i713.length; i += 1) {
    i712.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i713[i + 0]) );
  }
  i710.scriptsExecutionOrder = i712
  var i715 = i711[1]
  var i714 = []
  for(var i = 0; i < i715.length; i += 1) {
    i714.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i715[i + 0]) );
  }
  i710.sortingLayers = i714
  var i717 = i711[2]
  var i716 = []
  for(var i = 0; i < i717.length; i += 1) {
    i716.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i717[i + 0]) );
  }
  i710.cullingLayers = i716
  i710.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i711[3], i710.timeSettings)
  i710.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i711[4], i710.physicsSettings)
  i710.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i711[5], i710.physics2DSettings)
  i710.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i711[6], i710.qualitySettings)
  i710.enableRealtimeShadows = !!i711[7]
  i710.enableAutoInstancing = !!i711[8]
  i710.enableStaticBatching = !!i711[9]
  i710.enableDynamicBatching = !!i711[10]
  i710.usePreservativeDynamicBatching = !!i711[11]
  i710.lightmapEncodingQuality = i711[12]
  i710.desiredColorSpace = i711[13]
  var i719 = i711[14]
  var i718 = []
  for(var i = 0; i < i719.length; i += 1) {
    i718.push( i719[i + 0] );
  }
  i710.allTags = i718
  return i710
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i722 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i723 = data
  i722.name = i723[0]
  i722.value = i723[1]
  return i722
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i726 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i727 = data
  i726.id = i727[0]
  i726.name = i727[1]
  i726.value = i727[2]
  return i726
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i730 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i731 = data
  i730.id = i731[0]
  i730.name = i731[1]
  return i730
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i732 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i733 = data
  i732.fixedDeltaTime = i733[0]
  i732.maximumDeltaTime = i733[1]
  i732.timeScale = i733[2]
  i732.maximumParticleTimestep = i733[3]
  return i732
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i734 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i735 = data
  i734.gravity = new pc.Vec3( i735[0], i735[1], i735[2] )
  i734.defaultSolverIterations = i735[3]
  i734.bounceThreshold = i735[4]
  i734.autoSyncTransforms = !!i735[5]
  i734.autoSimulation = !!i735[6]
  var i737 = i735[7]
  var i736 = []
  for(var i = 0; i < i737.length; i += 1) {
    i736.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i737[i + 0]) );
  }
  i734.collisionMatrix = i736
  return i734
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i740 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i741 = data
  i740.enabled = !!i741[0]
  i740.layerId = i741[1]
  i740.otherLayerId = i741[2]
  return i740
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i742 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i743 = data
  request.r(i743[0], i743[1], 0, i742, 'material')
  i742.gravity = new pc.Vec2( i743[2], i743[3] )
  i742.positionIterations = i743[4]
  i742.velocityIterations = i743[5]
  i742.velocityThreshold = i743[6]
  i742.maxLinearCorrection = i743[7]
  i742.maxAngularCorrection = i743[8]
  i742.maxTranslationSpeed = i743[9]
  i742.maxRotationSpeed = i743[10]
  i742.baumgarteScale = i743[11]
  i742.baumgarteTOIScale = i743[12]
  i742.timeToSleep = i743[13]
  i742.linearSleepTolerance = i743[14]
  i742.angularSleepTolerance = i743[15]
  i742.defaultContactOffset = i743[16]
  i742.autoSimulation = !!i743[17]
  i742.queriesHitTriggers = !!i743[18]
  i742.queriesStartInColliders = !!i743[19]
  i742.callbacksOnDisable = !!i743[20]
  i742.reuseCollisionCallbacks = !!i743[21]
  i742.autoSyncTransforms = !!i743[22]
  var i745 = i743[23]
  var i744 = []
  for(var i = 0; i < i745.length; i += 1) {
    i744.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i745[i + 0]) );
  }
  i742.collisionMatrix = i744
  return i742
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i748 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i749 = data
  i748.enabled = !!i749[0]
  i748.layerId = i749[1]
  i748.otherLayerId = i749[2]
  return i748
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i750 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i751 = data
  var i753 = i751[0]
  var i752 = []
  for(var i = 0; i < i753.length; i += 1) {
    i752.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i753[i + 0]) );
  }
  i750.qualityLevels = i752
  var i755 = i751[1]
  var i754 = []
  for(var i = 0; i < i755.length; i += 1) {
    i754.push( i755[i + 0] );
  }
  i750.names = i754
  i750.shadows = i751[2]
  i750.anisotropicFiltering = i751[3]
  i750.antiAliasing = i751[4]
  i750.lodBias = i751[5]
  i750.shadowCascades = i751[6]
  i750.shadowDistance = i751[7]
  i750.shadowmaskMode = i751[8]
  i750.shadowProjection = i751[9]
  i750.shadowResolution = i751[10]
  i750.softParticles = !!i751[11]
  i750.softVegetation = !!i751[12]
  i750.activeColorSpace = i751[13]
  i750.desiredColorSpace = i751[14]
  i750.masterTextureLimit = i751[15]
  i750.maxQueuedFrames = i751[16]
  i750.particleRaycastBudget = i751[17]
  i750.pixelLightCount = i751[18]
  i750.realtimeReflectionProbes = !!i751[19]
  i750.shadowCascade2Split = i751[20]
  i750.shadowCascade4Split = new pc.Vec3( i751[21], i751[22], i751[23] )
  i750.streamingMipmapsActive = !!i751[24]
  i750.vSyncCount = i751[25]
  i750.asyncUploadBufferSize = i751[26]
  i750.asyncUploadTimeSlice = i751[27]
  i750.billboardsFaceCameraPosition = !!i751[28]
  i750.shadowNearPlaneOffset = i751[29]
  i750.streamingMipmapsMemoryBudget = i751[30]
  i750.maximumLODLevel = i751[31]
  i750.streamingMipmapsAddAllCameras = !!i751[32]
  i750.streamingMipmapsMaxLevelReduction = i751[33]
  i750.streamingMipmapsRenderersPerFrame = i751[34]
  i750.resolutionScalingFixedDPIFactor = i751[35]
  i750.streamingMipmapsMaxFileIORequests = i751[36]
  i750.currentQualityLevel = i751[37]
  return i750
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i758 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i759 = data
  request.r(i759[0], i759[1], 0, i758, 'm_ObjectArgument')
  i758.m_ObjectArgumentAssemblyTypeName = i759[2]
  i758.m_IntArgument = i759[3]
  i758.m_FloatArgument = i759[4]
  i758.m_StringArgument = i759[5]
  i758.m_BoolArgument = !!i759[6]
  return i758
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10,"graphicsFormat":11,"sRGBTexture":12,"desiredColorSpace":13,"wrapU":14,"wrapV":15},"Luna.Unity.DTO.UnityEngine.Components.Transform":{"position":0,"scale":3,"rotation":6},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystem":{"main":0,"colorBySpeed":1,"colorOverLifetime":2,"emission":3,"rotationBySpeed":4,"rotationOverLifetime":5,"shape":6,"sizeBySpeed":7,"sizeOverLifetime":8,"textureSheetAnimation":9,"velocityOverLifetime":10,"noise":11,"inheritVelocity":12,"forceOverLifetime":13,"limitVelocityOverLifetime":14,"useAutoRandomSeed":15,"randomSeed":16},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule":{"duration":0,"loop":1,"prewarm":2,"startDelay":3,"startLifetime":4,"startSpeed":5,"startSize3D":6,"startSizeX":7,"startSizeY":8,"startSizeZ":9,"startRotation3D":10,"startRotationX":11,"startRotationY":12,"startRotationZ":13,"startColor":14,"gravityModifier":15,"simulationSpace":16,"customSimulationSpace":17,"simulationSpeed":19,"useUnscaledTime":20,"scalingMode":21,"playOnAwake":22,"maxParticles":23,"emitterVelocityMode":24,"stopAction":25},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve":{"mode":0,"curveMin":1,"curveMax":2,"curveMultiplier":3,"constantMin":4,"constantMax":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient":{"mode":0,"gradientMin":1,"gradientMax":2,"colorMin":3,"colorMax":7},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient":{"mode":0,"colorKeys":1,"alphaKeys":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule":{"enabled":0,"color":1,"range":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey":{"color":0,"time":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey":{"alpha":0,"time":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule":{"enabled":0,"color":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule":{"enabled":0,"rateOverTime":1,"rateOverDistance":2,"bursts":3},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst":{"count":0,"cycleCount":1,"minCount":2,"maxCount":3,"repeatInterval":4,"time":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule":{"enabled":0,"shapeType":1,"randomDirectionAmount":2,"sphericalDirectionAmount":3,"randomPositionAmount":4,"alignToDirection":5,"radius":6,"radiusMode":7,"radiusSpread":8,"radiusSpeed":9,"radiusThickness":10,"angle":11,"length":12,"boxThickness":13,"meshShapeType":16,"mesh":17,"meshRenderer":19,"skinnedMeshRenderer":21,"useMeshMaterialIndex":23,"meshMaterialIndex":24,"useMeshColors":25,"normalOffset":26,"arc":27,"arcMode":28,"arcSpread":29,"arcSpeed":30,"donutRadius":31,"position":32,"rotation":35,"scale":38},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule":{"enabled":0,"mode":1,"animation":2,"numTilesX":3,"numTilesY":4,"useRandomRow":5,"frameOverTime":6,"startFrame":7,"cycleCount":8,"rowIndex":9,"flipU":10,"flipV":11,"spriteCount":12,"sprites":13},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"radial":4,"speedModifier":5,"space":6,"orbitalX":7,"orbitalY":8,"orbitalZ":9,"orbitalOffsetX":10,"orbitalOffsetY":11,"orbitalOffsetZ":12},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule":{"enabled":0,"separateAxes":1,"strengthX":2,"strengthY":3,"strengthZ":4,"frequency":5,"damping":6,"octaveCount":7,"octaveMultiplier":8,"octaveScale":9,"quality":10,"scrollSpeed":11,"scrollSpeedMultiplier":12,"remapEnabled":13,"remapX":14,"remapY":15,"remapZ":16,"positionAmount":17,"rotationAmount":18,"sizeAmount":19},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule":{"enabled":0,"mode":1,"curve":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"space":4,"randomized":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule":{"enabled":0,"limit":1,"limitX":2,"limitY":3,"limitZ":4,"dampen":5,"separateAxes":6,"space":7,"drag":8,"multiplyDragByParticleSize":9,"multiplyDragByParticleVelocity":10},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer":{"mesh":0,"meshCount":2,"activeVertexStreamsCount":3,"alignment":4,"renderMode":5,"sortMode":6,"lengthScale":7,"velocityScale":8,"cameraVelocityScale":9,"normalDirection":10,"sortingFudge":11,"minParticleSize":12,"maxParticleSize":13,"pivot":14,"trailMaterial":17,"applyActiveColorSpace":19,"enabled":20,"sharedMaterial":21,"sharedMaterials":23,"receiveShadows":24,"shadowCastingMode":25,"sortingLayerID":26,"sortingOrder":27,"lightmapIndex":28,"lightmapSceneIndex":29,"lightmapScaleOffset":30,"lightProbeUsage":34,"reflectionProbeUsage":35},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"aspect":0,"orthographic":1,"orthographicSize":2,"backgroundColor":3,"nearClipPlane":7,"farClipPlane":8,"fieldOfView":9,"depth":10,"clearFlags":11,"cullingMask":12,"rect":13,"targetTexture":14,"usePhysicalProperties":16,"focalLength":17,"sensorSize":18,"lensShift":20,"gateFit":22,"commandBufferCount":23,"cameraType":24,"enabled":25},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"planeDistance":0,"referencePixelsPerUnit":1,"isFallbackOverlay":2,"renderMode":3,"renderOrder":4,"sortingLayerName":5,"sortingOrder":6,"scaleFactor":7,"worldCamera":8,"overrideSorting":10,"pixelPerfect":11,"targetDisplay":12,"overridePixelPerfect":13,"enabled":14},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer":{"color":0,"sprite":4,"flipX":6,"flipY":7,"drawMode":8,"size":9,"tileMode":11,"adaptiveModeThreshold":12,"maskInteraction":13,"spriteSortPoint":14,"enabled":15,"sharedMaterial":16,"sharedMaterials":18,"receiveShadows":19,"shadowCastingMode":20,"sortingLayerID":21,"sortingOrder":22,"lightmapIndex":23,"lightmapSceneIndex":24,"lightmapScaleOffset":25,"lightProbeUsage":29,"reflectionProbeUsage":30},"Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D":{"usedByComposite":0,"autoTiling":1,"size":2,"edgeRadius":4,"enabled":5,"isTrigger":6,"usedByEffector":7,"density":8,"offset":9,"material":11},"Luna.Unity.DTO.UnityEngine.Components.SortingGroup":{"sortingLayerIndex":0,"sortingOrder":1,"sortingLayerName":2,"enabled":3},"Luna.Unity.DTO.UnityEngine.Components.Rigidbody2D":{"bodyType":0,"material":1,"simulated":3,"useAutoMass":4,"mass":5,"drag":6,"angularDrag":7,"gravityScale":8,"collisionDetectionMode":9,"sleepMode":10,"constraints":11},"Luna.Unity.DTO.UnityEngine.Components.HingeJoint2D":{"useLimits":0,"limits":1,"useMotor":2,"motor":3,"anchor":4,"connectedAnchor":6,"autoConfigureConnectedAnchor":8,"connectedBody":9,"breakForce":11,"breakTorque":12,"enableCollision":13,"enabled":14},"Luna.Unity.DTO.UnityEngine.Components.TargetJoint2D":{"autoConfigureTarget":0,"target":1,"anchor":3,"maxForce":5,"dampingRatio":6,"frequency":7,"connectedBody":8,"breakForce":10,"breakTorque":11,"enableCollision":12,"enabled":13},"Luna.Unity.DTO.UnityEngine.Components.CircleCollider2D":{"radius":0,"enabled":1,"isTrigger":2,"usedByEffector":3,"density":4,"offset":5,"material":7},"Luna.Unity.DTO.UnityEngine.Components.AudioSource":{"clip":0,"outputAudioMixerGroup":2,"playOnAwake":4,"loop":5,"time":6,"volume":7,"pitch":8,"enabled":9},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"customReflection":36,"defaultReflection":38,"defaultReflectionMode":40,"defaultReflectionResolution":41,"sunLightObjectId":42,"pixelLightCount":43,"defaultReflectionHDR":44,"hasLightDataAsset":45,"hasManualGenerate":46},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2,"shadowMask":4},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"hasDepthOnlyPass":10,"isCreatedByShaderGraph":11,"disableBatching":12,"compiled":13},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"exportedForWebGl2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.AudioClip":{"name":0},"Luna.Unity.DTO.UnityEngine.Assets.Font":{"name":0,"ascent":1,"originalLineHeight":2,"fontSize":3,"characterInfo":4,"texture":5,"originalFontSize":7},"Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo":{"index":0,"advance":1,"bearing":2,"glyphWidth":3,"glyphHeight":4,"minX":5,"maxX":6,"minY":7,"maxY":8,"uvBottomLeftX":9,"uvBottomLeftY":10,"uvBottomRightX":11,"uvBottomRightY":12,"uvTopLeftX":13,"uvTopLeftY":14,"uvTopRightX":15,"uvTopRightY":16},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableStaticBatching":9,"enableDynamicBatching":10,"usePreservativeDynamicBatching":11,"lightmapEncodingQuality":12,"desiredColorSpace":13,"allTags":14},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37}}

Deserializers.requiredComponents = {"43":[44],"45":[44],"46":[44],"47":[44],"48":[44],"49":[44],"50":[51],"52":[5],"53":[54],"55":[54],"56":[54],"57":[54],"58":[54],"59":[54],"60":[21],"61":[21],"62":[21],"63":[21],"64":[21],"65":[21],"26":[21],"66":[21],"67":[21],"24":[21],"68":[21],"69":[21],"70":[21],"71":[5],"72":[73],"74":[75],"76":[75],"11":[10],"77":[17],"78":[5],"79":[80],"81":[10],"82":[14,10],"83":[73],"84":[14,10],"85":[10],"86":[10],"87":[73,10],"88":[10,14],"89":[90],"91":[90],"92":[90],"93":[10],"94":[10],"13":[11],"30":[14,10],"15":[10],"12":[11],"95":[10],"96":[10],"97":[10],"98":[10],"99":[10],"100":[10],"101":[10],"102":[10],"103":[10],"16":[14,10],"104":[10],"105":[10],"106":[10],"107":[10],"32":[14,10],"108":[10],"109":[8],"110":[8],"9":[8],"111":[8],"112":[5],"113":[5]}

Deserializers.types = ["UnityEngine.Shader","UnityEngine.Transform","UnityEngine.ParticleSystem","UnityEngine.ParticleSystemRenderer","UnityEngine.Material","UnityEngine.Camera","UnityEngine.AudioListener","UnityEngine.EventSystems.UIBehaviour","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","UnityEngine.RectTransform","UnityEngine.Canvas","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","UnityEngine.CanvasRenderer","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.RawImage","UnityEngine.SpriteRenderer","UnityEngine.Sprite","UnityEngine.BoxCollider2D","UnityEngine.Rendering.SortingGroup","UnityEngine.Rigidbody2D","UnityEngine.MonoBehaviour","MonsterController","UnityEngine.TargetJoint2D","UnityEngine.AudioClip","UnityEngine.HingeJoint2D","BonkController","UnityEngine.CircleCollider2D","UnityEngine.UI.Button","UnityEngine.UI.Image","DG.Tweening.DOTweenAnimation","UnityEngine.UI.Text","UnityEngine.Font","GameController","TargetController","UnityEngine.GameObject","LunaController","UnityEngine.Texture2D","AudioController","UnityEngine.AudioSource","VFXController","DG.Tweening.Core.DOTweenSettings","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.SkinnedMeshRenderer","UnityEngine.FlareLayer","UnityEngine.CharacterJoint","UnityEngine.Rigidbody","UnityEngine.ConfigurableJoint","UnityEngine.ConstantForce","UnityEngine.FixedJoint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.CompositeCollider2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.MeshRenderer","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","UnityEngine.U2D.Animation.SpriteSkin","UnityEngine.U2D.PixelPerfectCamera","UnityEngine.U2D.SpriteShapeController","UnityEngine.U2D.SpriteShapeRenderer","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text","TMPro.TextContainer","TMPro.TextMeshPro","TMPro.TextMeshProUGUI","Unity.VisualScripting.SceneVariables","Unity.VisualScripting.Variables","Unity.VisualScripting.ScriptMachine","Unity.VisualScripting.StateMachine","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.Mask","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RectMask2D","UnityEngine.UI.ScrollRect","UnityEngine.UI.Scrollbar","UnityEngine.UI.Slider","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster"]

Deserializers.unityVersion = "6000.0.78f1";

Deserializers.productName = "SSP_Luna-SSP_V01";

Deserializers.lunaInitializationTime = "08/12/2026 02:23:20";

Deserializers.lunaDaysRunning = "0.1";

Deserializers.lunaVersion = "7.2.0";

Deserializers.lunaSHA = "ea08d29afe2968efcb8d91d5624f033c6485cc68";

Deserializers.creativeName = "RSNM_V01_YenTTH_TamNTM";

Deserializers.lunaAppID = "40364";

Deserializers.projectId = "01d8b819bddb11e4ea7a644267642880";

Deserializers.packagesInfo = "com.unity.timeline: 1.8.12\ncom.unity.ugui: 2.0.0";

Deserializers.externalJsLibraries = "";

Deserializers.androidLink = ( typeof window !== "undefined")&&window.$environment.packageConfig.androidLink?window.$environment.packageConfig.androidLink:'Empty';

Deserializers.iosLink = ( typeof window !== "undefined")&&window.$environment.packageConfig.iosLink?window.$environment.packageConfig.iosLink:'Empty';

Deserializers.base64Enabled = "True";

Deserializers.minifyEnabled = "True";

Deserializers.isForceUncompressed = "False";

Deserializers.isAntiAliasingEnabled = "False";

Deserializers.isRuntimeAnalysisEnabledForCode = "False";

Deserializers.runtimeAnalysisExcludedClassesCount = "1795";

Deserializers.runtimeAnalysisExcludedMethodsCount = "4180";

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

Deserializers.buildID = "032c7b8d-b095-4a37-9ee4-93d4c661b945";

Deserializers.runtimeInitializeOnLoadInfos = [[["Unity","PerformanceTesting","PerformanceTest","ResetStaticsOnLoad"],["UnityEngine","U2D","Animation","GpuDeformationSystem","CreateFallbackBuffer"],["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"],["UnityEngine","AI","NavMesh","ClearPreUpdateListeners"]],[["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"]],[],[["UnityEngine","Timeline","AnimatorBindingCache","ResetStaticsOnLoad"],["UnityEngine","Timeline","TrackAsset","ResetStaticsOnLoad"],["UnityEngine","Timeline","AnimationPreviewUtilities","ResetStaticsOnLoad"],["Unity","PerformanceTesting","Data","RunSettings","ResetStaticsOnLoad"],["Unity","PerformanceTesting","PlayerCallbacks","ResetStaticsOnLoad"]]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

