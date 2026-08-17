var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i1344 = root || request.c( 'UnityEngine.JointSpring' )
  var i1345 = data
  i1344.spring = i1345[0]
  i1344.damper = i1345[1]
  i1344.targetPosition = i1345[2]
  return i1344
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i1346 = root || request.c( 'UnityEngine.JointMotor' )
  var i1347 = data
  i1346.m_TargetVelocity = i1347[0]
  i1346.m_Force = i1347[1]
  i1346.m_FreeSpin = i1347[2]
  return i1346
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i1348 = root || request.c( 'UnityEngine.JointLimits' )
  var i1349 = data
  i1348.m_Min = i1349[0]
  i1348.m_Max = i1349[1]
  i1348.m_Bounciness = i1349[2]
  i1348.m_BounceMinVelocity = i1349[3]
  i1348.m_ContactDistance = i1349[4]
  i1348.minBounce = i1349[5]
  i1348.maxBounce = i1349[6]
  return i1348
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i1350 = root || request.c( 'UnityEngine.JointDrive' )
  var i1351 = data
  i1350.m_PositionSpring = i1351[0]
  i1350.m_PositionDamper = i1351[1]
  i1350.m_MaximumForce = i1351[2]
  i1350.m_UseAcceleration = i1351[3]
  return i1350
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i1352 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i1353 = data
  i1352.m_Spring = i1353[0]
  i1352.m_Damper = i1353[1]
  return i1352
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i1354 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i1355 = data
  i1354.m_Limit = i1355[0]
  i1354.m_Bounciness = i1355[1]
  i1354.m_ContactDistance = i1355[2]
  return i1354
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i1356 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i1357 = data
  i1356.m_ExtremumSlip = i1357[0]
  i1356.m_ExtremumValue = i1357[1]
  i1356.m_AsymptoteSlip = i1357[2]
  i1356.m_AsymptoteValue = i1357[3]
  i1356.m_Stiffness = i1357[4]
  return i1356
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i1358 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i1359 = data
  i1358.m_LowerAngle = i1359[0]
  i1358.m_UpperAngle = i1359[1]
  return i1358
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i1360 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i1361 = data
  i1360.m_MotorSpeed = i1361[0]
  i1360.m_MaximumMotorTorque = i1361[1]
  return i1360
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i1362 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i1363 = data
  i1362.m_DampingRatio = i1363[0]
  i1362.m_Frequency = i1363[1]
  i1362.m_Angle = i1363[2]
  return i1362
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i1364 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i1365 = data
  i1364.m_LowerTranslation = i1365[0]
  i1364.m_UpperTranslation = i1365[1]
  return i1364
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i1366 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i1367 = data
  i1366.name = i1367[0]
  i1366.width = i1367[1]
  i1366.height = i1367[2]
  i1366.mipmapCount = i1367[3]
  i1366.anisoLevel = i1367[4]
  i1366.filterMode = i1367[5]
  i1366.hdr = !!i1367[6]
  i1366.format = i1367[7]
  i1366.wrapMode = i1367[8]
  i1366.alphaIsTransparency = !!i1367[9]
  i1366.alphaSource = i1367[10]
  i1366.graphicsFormat = i1367[11]
  i1366.sRGBTexture = !!i1367[12]
  i1366.desiredColorSpace = i1367[13]
  i1366.wrapU = i1367[14]
  i1366.wrapV = i1367[15]
  return i1366
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i1368 = root || new pc.UnityMaterial()
  var i1369 = data
  i1368.name = i1369[0]
  request.r(i1369[1], i1369[2], 0, i1368, 'shader')
  i1368.renderQueue = i1369[3]
  i1368.enableInstancing = !!i1369[4]
  var i1371 = i1369[5]
  var i1370 = []
  for(var i = 0; i < i1371.length; i += 1) {
    i1370.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i1371[i + 0]) );
  }
  i1368.floatParameters = i1370
  var i1373 = i1369[6]
  var i1372 = []
  for(var i = 0; i < i1373.length; i += 1) {
    i1372.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i1373[i + 0]) );
  }
  i1368.colorParameters = i1372
  var i1375 = i1369[7]
  var i1374 = []
  for(var i = 0; i < i1375.length; i += 1) {
    i1374.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i1375[i + 0]) );
  }
  i1368.vectorParameters = i1374
  var i1377 = i1369[8]
  var i1376 = []
  for(var i = 0; i < i1377.length; i += 1) {
    i1376.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i1377[i + 0]) );
  }
  i1368.textureParameters = i1376
  var i1379 = i1369[9]
  var i1378 = []
  for(var i = 0; i < i1379.length; i += 1) {
    i1378.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i1379[i + 0]) );
  }
  i1368.materialFlags = i1378
  return i1368
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i1382 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i1383 = data
  i1382.name = i1383[0]
  i1382.value = i1383[1]
  return i1382
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i1386 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i1387 = data
  i1386.name = i1387[0]
  i1386.value = new pc.Color(i1387[1], i1387[2], i1387[3], i1387[4])
  return i1386
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i1390 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i1391 = data
  i1390.name = i1391[0]
  i1390.value = new pc.Vec4( i1391[1], i1391[2], i1391[3], i1391[4] )
  return i1390
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i1394 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i1395 = data
  i1394.name = i1395[0]
  request.r(i1395[1], i1395[2], 0, i1394, 'value')
  return i1394
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i1398 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i1399 = data
  i1398.name = i1399[0]
  i1398.enabled = !!i1399[1]
  return i1398
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i1400 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i1401 = data
  i1400.position = new pc.Vec3( i1401[0], i1401[1], i1401[2] )
  i1400.scale = new pc.Vec3( i1401[3], i1401[4], i1401[5] )
  i1400.rotation = new pc.Quat(i1401[6], i1401[7], i1401[8], i1401[9])
  return i1400
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystem"] = function (request, data, root) {
  var i1402 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystem' )
  var i1403 = data
  i1402.main = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule', i1403[0], i1402.main)
  i1402.colorBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule', i1403[1], i1402.colorBySpeed)
  i1402.colorOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule', i1403[2], i1402.colorOverLifetime)
  i1402.emission = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule', i1403[3], i1402.emission)
  i1402.rotationBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule', i1403[4], i1402.rotationBySpeed)
  i1402.rotationOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule', i1403[5], i1402.rotationOverLifetime)
  i1402.shape = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule', i1403[6], i1402.shape)
  i1402.sizeBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule', i1403[7], i1402.sizeBySpeed)
  i1402.sizeOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule', i1403[8], i1402.sizeOverLifetime)
  i1402.textureSheetAnimation = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule', i1403[9], i1402.textureSheetAnimation)
  i1402.velocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule', i1403[10], i1402.velocityOverLifetime)
  i1402.noise = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule', i1403[11], i1402.noise)
  i1402.inheritVelocity = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule', i1403[12], i1402.inheritVelocity)
  i1402.forceOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule', i1403[13], i1402.forceOverLifetime)
  i1402.limitVelocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule', i1403[14], i1402.limitVelocityOverLifetime)
  i1402.useAutoRandomSeed = !!i1403[15]
  i1402.randomSeed = i1403[16]
  return i1402
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule"] = function (request, data, root) {
  var i1404 = root || new pc.ParticleSystemMain()
  var i1405 = data
  i1404.duration = i1405[0]
  i1404.loop = !!i1405[1]
  i1404.prewarm = !!i1405[2]
  i1404.startDelay = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1405[3], i1404.startDelay)
  i1404.startLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1405[4], i1404.startLifetime)
  i1404.startSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1405[5], i1404.startSpeed)
  i1404.startSize3D = !!i1405[6]
  i1404.startSizeX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1405[7], i1404.startSizeX)
  i1404.startSizeY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1405[8], i1404.startSizeY)
  i1404.startSizeZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1405[9], i1404.startSizeZ)
  i1404.startRotation3D = !!i1405[10]
  i1404.startRotationX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1405[11], i1404.startRotationX)
  i1404.startRotationY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1405[12], i1404.startRotationY)
  i1404.startRotationZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1405[13], i1404.startRotationZ)
  i1404.startColor = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i1405[14], i1404.startColor)
  i1404.gravityModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1405[15], i1404.gravityModifier)
  i1404.simulationSpace = i1405[16]
  request.r(i1405[17], i1405[18], 0, i1404, 'customSimulationSpace')
  i1404.simulationSpeed = i1405[19]
  i1404.useUnscaledTime = !!i1405[20]
  i1404.scalingMode = i1405[21]
  i1404.playOnAwake = !!i1405[22]
  i1404.maxParticles = i1405[23]
  i1404.emitterVelocityMode = i1405[24]
  i1404.stopAction = i1405[25]
  return i1404
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve"] = function (request, data, root) {
  var i1406 = root || new pc.MinMaxCurve()
  var i1407 = data
  i1406.mode = i1407[0]
  i1406.curveMin = new pc.AnimationCurve( { keys_flow: i1407[1] } )
  i1406.curveMax = new pc.AnimationCurve( { keys_flow: i1407[2] } )
  i1406.curveMultiplier = i1407[3]
  i1406.constantMin = i1407[4]
  i1406.constantMax = i1407[5]
  return i1406
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient"] = function (request, data, root) {
  var i1408 = root || new pc.MinMaxGradient()
  var i1409 = data
  i1408.mode = i1409[0]
  i1408.gradientMin = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i1409[1], i1408.gradientMin)
  i1408.gradientMax = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i1409[2], i1408.gradientMax)
  i1408.colorMin = new pc.Color(i1409[3], i1409[4], i1409[5], i1409[6])
  i1408.colorMax = new pc.Color(i1409[7], i1409[8], i1409[9], i1409[10])
  return i1408
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient"] = function (request, data, root) {
  var i1410 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient' )
  var i1411 = data
  i1410.mode = i1411[0]
  var i1413 = i1411[1]
  var i1412 = []
  for(var i = 0; i < i1413.length; i += 1) {
    i1412.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey', i1413[i + 0]) );
  }
  i1410.colorKeys = i1412
  var i1415 = i1411[2]
  var i1414 = []
  for(var i = 0; i < i1415.length; i += 1) {
    i1414.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey', i1415[i + 0]) );
  }
  i1410.alphaKeys = i1414
  return i1410
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule"] = function (request, data, root) {
  var i1416 = root || new pc.ParticleSystemColorBySpeed()
  var i1417 = data
  i1416.enabled = !!i1417[0]
  i1416.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i1417[1], i1416.color)
  i1416.range = new pc.Vec2( i1417[2], i1417[3] )
  return i1416
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey"] = function (request, data, root) {
  var i1420 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey' )
  var i1421 = data
  i1420.color = new pc.Color(i1421[0], i1421[1], i1421[2], i1421[3])
  i1420.time = i1421[4]
  return i1420
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey"] = function (request, data, root) {
  var i1424 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey' )
  var i1425 = data
  i1424.alpha = i1425[0]
  i1424.time = i1425[1]
  return i1424
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule"] = function (request, data, root) {
  var i1426 = root || new pc.ParticleSystemColorOverLifetime()
  var i1427 = data
  i1426.enabled = !!i1427[0]
  i1426.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i1427[1], i1426.color)
  return i1426
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule"] = function (request, data, root) {
  var i1428 = root || new pc.ParticleSystemEmitter()
  var i1429 = data
  i1428.enabled = !!i1429[0]
  i1428.rateOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1429[1], i1428.rateOverTime)
  i1428.rateOverDistance = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1429[2], i1428.rateOverDistance)
  var i1431 = i1429[3]
  var i1430 = []
  for(var i = 0; i < i1431.length; i += 1) {
    i1430.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst', i1431[i + 0]) );
  }
  i1428.bursts = i1430
  return i1428
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst"] = function (request, data, root) {
  var i1434 = root || new pc.ParticleSystemBurst()
  var i1435 = data
  i1434.count = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1435[0], i1434.count)
  i1434.cycleCount = i1435[1]
  i1434.minCount = i1435[2]
  i1434.maxCount = i1435[3]
  i1434.repeatInterval = i1435[4]
  i1434.time = i1435[5]
  return i1434
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule"] = function (request, data, root) {
  var i1436 = root || new pc.ParticleSystemRotationBySpeed()
  var i1437 = data
  i1436.enabled = !!i1437[0]
  i1436.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1437[1], i1436.x)
  i1436.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1437[2], i1436.y)
  i1436.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1437[3], i1436.z)
  i1436.separateAxes = !!i1437[4]
  i1436.range = new pc.Vec2( i1437[5], i1437[6] )
  return i1436
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule"] = function (request, data, root) {
  var i1438 = root || new pc.ParticleSystemRotationOverLifetime()
  var i1439 = data
  i1438.enabled = !!i1439[0]
  i1438.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1439[1], i1438.x)
  i1438.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1439[2], i1438.y)
  i1438.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1439[3], i1438.z)
  i1438.separateAxes = !!i1439[4]
  return i1438
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule"] = function (request, data, root) {
  var i1440 = root || new pc.ParticleSystemShape()
  var i1441 = data
  i1440.enabled = !!i1441[0]
  i1440.shapeType = i1441[1]
  i1440.randomDirectionAmount = i1441[2]
  i1440.sphericalDirectionAmount = i1441[3]
  i1440.randomPositionAmount = i1441[4]
  i1440.alignToDirection = !!i1441[5]
  i1440.radius = i1441[6]
  i1440.radiusMode = i1441[7]
  i1440.radiusSpread = i1441[8]
  i1440.radiusSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1441[9], i1440.radiusSpeed)
  i1440.radiusThickness = i1441[10]
  i1440.angle = i1441[11]
  i1440.length = i1441[12]
  i1440.boxThickness = new pc.Vec3( i1441[13], i1441[14], i1441[15] )
  i1440.meshShapeType = i1441[16]
  request.r(i1441[17], i1441[18], 0, i1440, 'mesh')
  request.r(i1441[19], i1441[20], 0, i1440, 'meshRenderer')
  request.r(i1441[21], i1441[22], 0, i1440, 'skinnedMeshRenderer')
  i1440.useMeshMaterialIndex = !!i1441[23]
  i1440.meshMaterialIndex = i1441[24]
  i1440.useMeshColors = !!i1441[25]
  i1440.normalOffset = i1441[26]
  i1440.arc = i1441[27]
  i1440.arcMode = i1441[28]
  i1440.arcSpread = i1441[29]
  i1440.arcSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1441[30], i1440.arcSpeed)
  i1440.donutRadius = i1441[31]
  i1440.position = new pc.Vec3( i1441[32], i1441[33], i1441[34] )
  i1440.rotation = new pc.Vec3( i1441[35], i1441[36], i1441[37] )
  i1440.scale = new pc.Vec3( i1441[38], i1441[39], i1441[40] )
  return i1440
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule"] = function (request, data, root) {
  var i1442 = root || new pc.ParticleSystemSizeBySpeed()
  var i1443 = data
  i1442.enabled = !!i1443[0]
  i1442.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1443[1], i1442.x)
  i1442.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1443[2], i1442.y)
  i1442.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1443[3], i1442.z)
  i1442.separateAxes = !!i1443[4]
  i1442.range = new pc.Vec2( i1443[5], i1443[6] )
  return i1442
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule"] = function (request, data, root) {
  var i1444 = root || new pc.ParticleSystemSizeOverLifetime()
  var i1445 = data
  i1444.enabled = !!i1445[0]
  i1444.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1445[1], i1444.x)
  i1444.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1445[2], i1444.y)
  i1444.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1445[3], i1444.z)
  i1444.separateAxes = !!i1445[4]
  return i1444
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule"] = function (request, data, root) {
  var i1446 = root || new pc.ParticleSystemTextureSheetAnimation()
  var i1447 = data
  i1446.enabled = !!i1447[0]
  i1446.mode = i1447[1]
  i1446.animation = i1447[2]
  i1446.numTilesX = i1447[3]
  i1446.numTilesY = i1447[4]
  i1446.useRandomRow = !!i1447[5]
  i1446.frameOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1447[6], i1446.frameOverTime)
  i1446.startFrame = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1447[7], i1446.startFrame)
  i1446.cycleCount = i1447[8]
  i1446.rowIndex = i1447[9]
  i1446.flipU = i1447[10]
  i1446.flipV = i1447[11]
  i1446.spriteCount = i1447[12]
  var i1449 = i1447[13]
  var i1448 = []
  for(var i = 0; i < i1449.length; i += 2) {
  request.r(i1449[i + 0], i1449[i + 1], 2, i1448, '')
  }
  i1446.sprites = i1448
  return i1446
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule"] = function (request, data, root) {
  var i1452 = root || new pc.ParticleSystemVelocityOverLifetime()
  var i1453 = data
  i1452.enabled = !!i1453[0]
  i1452.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1453[1], i1452.x)
  i1452.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1453[2], i1452.y)
  i1452.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1453[3], i1452.z)
  i1452.radial = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1453[4], i1452.radial)
  i1452.speedModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1453[5], i1452.speedModifier)
  i1452.space = i1453[6]
  i1452.orbitalX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1453[7], i1452.orbitalX)
  i1452.orbitalY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1453[8], i1452.orbitalY)
  i1452.orbitalZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1453[9], i1452.orbitalZ)
  i1452.orbitalOffsetX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1453[10], i1452.orbitalOffsetX)
  i1452.orbitalOffsetY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1453[11], i1452.orbitalOffsetY)
  i1452.orbitalOffsetZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1453[12], i1452.orbitalOffsetZ)
  return i1452
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule"] = function (request, data, root) {
  var i1454 = root || new pc.ParticleSystemNoise()
  var i1455 = data
  i1454.enabled = !!i1455[0]
  i1454.separateAxes = !!i1455[1]
  i1454.strengthX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1455[2], i1454.strengthX)
  i1454.strengthY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1455[3], i1454.strengthY)
  i1454.strengthZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1455[4], i1454.strengthZ)
  i1454.frequency = i1455[5]
  i1454.damping = !!i1455[6]
  i1454.octaveCount = i1455[7]
  i1454.octaveMultiplier = i1455[8]
  i1454.octaveScale = i1455[9]
  i1454.quality = i1455[10]
  i1454.scrollSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1455[11], i1454.scrollSpeed)
  i1454.scrollSpeedMultiplier = i1455[12]
  i1454.remapEnabled = !!i1455[13]
  i1454.remapX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1455[14], i1454.remapX)
  i1454.remapY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1455[15], i1454.remapY)
  i1454.remapZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1455[16], i1454.remapZ)
  i1454.positionAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1455[17], i1454.positionAmount)
  i1454.rotationAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1455[18], i1454.rotationAmount)
  i1454.sizeAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1455[19], i1454.sizeAmount)
  return i1454
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule"] = function (request, data, root) {
  var i1456 = root || new pc.ParticleSystemInheritVelocity()
  var i1457 = data
  i1456.enabled = !!i1457[0]
  i1456.mode = i1457[1]
  i1456.curve = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1457[2], i1456.curve)
  return i1456
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule"] = function (request, data, root) {
  var i1458 = root || new pc.ParticleSystemForceOverLifetime()
  var i1459 = data
  i1458.enabled = !!i1459[0]
  i1458.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1459[1], i1458.x)
  i1458.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1459[2], i1458.y)
  i1458.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1459[3], i1458.z)
  i1458.space = i1459[4]
  i1458.randomized = !!i1459[5]
  return i1458
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule"] = function (request, data, root) {
  var i1460 = root || new pc.ParticleSystemLimitVelocityOverLifetime()
  var i1461 = data
  i1460.enabled = !!i1461[0]
  i1460.limit = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1461[1], i1460.limit)
  i1460.limitX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1461[2], i1460.limitX)
  i1460.limitY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1461[3], i1460.limitY)
  i1460.limitZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1461[4], i1460.limitZ)
  i1460.dampen = i1461[5]
  i1460.separateAxes = !!i1461[6]
  i1460.space = i1461[7]
  i1460.drag = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1461[8], i1460.drag)
  i1460.multiplyDragByParticleSize = !!i1461[9]
  i1460.multiplyDragByParticleVelocity = !!i1461[10]
  return i1460
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer"] = function (request, data, root) {
  var i1462 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer' )
  var i1463 = data
  request.r(i1463[0], i1463[1], 0, i1462, 'mesh')
  i1462.meshCount = i1463[2]
  i1462.activeVertexStreamsCount = i1463[3]
  i1462.alignment = i1463[4]
  i1462.renderMode = i1463[5]
  i1462.sortMode = i1463[6]
  i1462.lengthScale = i1463[7]
  i1462.velocityScale = i1463[8]
  i1462.cameraVelocityScale = i1463[9]
  i1462.normalDirection = i1463[10]
  i1462.sortingFudge = i1463[11]
  i1462.minParticleSize = i1463[12]
  i1462.maxParticleSize = i1463[13]
  i1462.pivot = new pc.Vec3( i1463[14], i1463[15], i1463[16] )
  request.r(i1463[17], i1463[18], 0, i1462, 'trailMaterial')
  i1462.applyActiveColorSpace = !!i1463[19]
  i1462.enabled = !!i1463[20]
  request.r(i1463[21], i1463[22], 0, i1462, 'sharedMaterial')
  var i1465 = i1463[23]
  var i1464 = []
  for(var i = 0; i < i1465.length; i += 2) {
  request.r(i1465[i + 0], i1465[i + 1], 2, i1464, '')
  }
  i1462.sharedMaterials = i1464
  i1462.receiveShadows = !!i1463[24]
  i1462.shadowCastingMode = i1463[25]
  i1462.sortingLayerID = i1463[26]
  i1462.sortingOrder = i1463[27]
  i1462.lightmapIndex = i1463[28]
  i1462.lightmapSceneIndex = i1463[29]
  i1462.lightmapScaleOffset = new pc.Vec4( i1463[30], i1463[31], i1463[32], i1463[33] )
  i1462.lightProbeUsage = i1463[34]
  i1462.reflectionProbeUsage = i1463[35]
  return i1462
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i1468 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i1469 = data
  i1468.name = i1469[0]
  i1468.tagId = i1469[1]
  i1468.enabled = !!i1469[2]
  i1468.isStatic = !!i1469[3]
  i1468.layer = i1469[4]
  return i1468
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh"] = function (request, data, root) {
  var i1470 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh' )
  var i1471 = data
  i1470.name = i1471[0]
  i1470.halfPrecision = !!i1471[1]
  i1470.useSimplification = !!i1471[2]
  i1470.useUInt32IndexFormat = !!i1471[3]
  i1470.vertexCount = i1471[4]
  i1470.aabb = i1471[5]
  var i1473 = i1471[6]
  var i1472 = []
  for(var i = 0; i < i1473.length; i += 1) {
    i1472.push( !!i1473[i + 0] );
  }
  i1470.streams = i1472
  i1470.vertices = i1471[7]
  var i1475 = i1471[8]
  var i1474 = []
  for(var i = 0; i < i1475.length; i += 1) {
    i1474.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh', i1475[i + 0]) );
  }
  i1470.subMeshes = i1474
  var i1477 = i1471[9]
  var i1476 = []
  for(var i = 0; i < i1477.length; i += 16) {
    i1476.push( new pc.Mat4().setData(i1477[i + 0], i1477[i + 1], i1477[i + 2], i1477[i + 3],  i1477[i + 4], i1477[i + 5], i1477[i + 6], i1477[i + 7],  i1477[i + 8], i1477[i + 9], i1477[i + 10], i1477[i + 11],  i1477[i + 12], i1477[i + 13], i1477[i + 14], i1477[i + 15]) );
  }
  i1470.bindposes = i1476
  var i1479 = i1471[10]
  var i1478 = []
  for(var i = 0; i < i1479.length; i += 1) {
    i1478.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape', i1479[i + 0]) );
  }
  i1470.blendShapes = i1478
  return i1470
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh"] = function (request, data, root) {
  var i1484 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh' )
  var i1485 = data
  i1484.triangles = i1485[0]
  return i1484
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape"] = function (request, data, root) {
  var i1490 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape' )
  var i1491 = data
  i1490.name = i1491[0]
  var i1493 = i1491[1]
  var i1492 = []
  for(var i = 0; i < i1493.length; i += 1) {
    i1492.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame', i1493[i + 0]) );
  }
  i1490.frames = i1492
  return i1490
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer"] = function (request, data, root) {
  var i1494 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer' )
  var i1495 = data
  i1494.color = new pc.Color(i1495[0], i1495[1], i1495[2], i1495[3])
  request.r(i1495[4], i1495[5], 0, i1494, 'sprite')
  i1494.flipX = !!i1495[6]
  i1494.flipY = !!i1495[7]
  i1494.drawMode = i1495[8]
  i1494.size = new pc.Vec2( i1495[9], i1495[10] )
  i1494.tileMode = i1495[11]
  i1494.adaptiveModeThreshold = i1495[12]
  i1494.maskInteraction = i1495[13]
  i1494.spriteSortPoint = i1495[14]
  i1494.enabled = !!i1495[15]
  request.r(i1495[16], i1495[17], 0, i1494, 'sharedMaterial')
  var i1497 = i1495[18]
  var i1496 = []
  for(var i = 0; i < i1497.length; i += 2) {
  request.r(i1497[i + 0], i1497[i + 1], 2, i1496, '')
  }
  i1494.sharedMaterials = i1496
  i1494.receiveShadows = !!i1495[19]
  i1494.shadowCastingMode = i1495[20]
  i1494.sortingLayerID = i1495[21]
  i1494.sortingOrder = i1495[22]
  i1494.lightmapIndex = i1495[23]
  i1494.lightmapSceneIndex = i1495[24]
  i1494.lightmapScaleOffset = new pc.Vec4( i1495[25], i1495[26], i1495[27], i1495[28] )
  i1494.lightProbeUsage = i1495[29]
  i1494.reflectionProbeUsage = i1495[30]
  return i1494
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CircleCollider2D"] = function (request, data, root) {
  var i1498 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CircleCollider2D' )
  var i1499 = data
  i1498.radius = i1499[0]
  i1498.enabled = !!i1499[1]
  i1498.isTrigger = !!i1499[2]
  i1498.usedByEffector = !!i1499[3]
  i1498.density = i1499[4]
  i1498.offset = new pc.Vec2( i1499[5], i1499[6] )
  request.r(i1499[7], i1499[8], 0, i1498, 'material')
  return i1498
}

Deserializers["BulletController"] = function (request, data, root) {
  var i1500 = root || request.c( 'BulletController' )
  var i1501 = data
  i1500.speed = i1501[0]
  i1500.damage = i1501[1]
  request.r(i1501[2], i1501[3], 0, i1500, 'hitMonsterSound')
  request.r(i1501[4], i1501[5], 0, i1500, 'hitSound')
  i1500.lifeTime = i1501[6]
  i1500.hit = !!i1501[7]
  return i1500
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i1502 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i1503 = data
  i1502.name = i1503[0]
  i1502.index = i1503[1]
  i1502.startup = !!i1503[2]
  return i1502
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i1504 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i1505 = data
  i1504.aspect = i1505[0]
  i1504.orthographic = !!i1505[1]
  i1504.orthographicSize = i1505[2]
  i1504.backgroundColor = new pc.Color(i1505[3], i1505[4], i1505[5], i1505[6])
  i1504.nearClipPlane = i1505[7]
  i1504.farClipPlane = i1505[8]
  i1504.fieldOfView = i1505[9]
  i1504.depth = i1505[10]
  i1504.clearFlags = i1505[11]
  i1504.cullingMask = i1505[12]
  i1504.rect = i1505[13]
  request.r(i1505[14], i1505[15], 0, i1504, 'targetTexture')
  i1504.usePhysicalProperties = !!i1505[16]
  i1504.focalLength = i1505[17]
  i1504.sensorSize = new pc.Vec2( i1505[18], i1505[19] )
  i1504.lensShift = new pc.Vec2( i1505[20], i1505[21] )
  i1504.gateFit = i1505[22]
  i1504.commandBufferCount = i1505[23]
  i1504.cameraType = i1505[24]
  i1504.enabled = !!i1505[25]
  return i1504
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i1506 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i1507 = data
  request.r(i1507[0], i1507[1], 0, i1506, 'm_FirstSelected')
  i1506.m_sendNavigationEvents = !!i1507[2]
  i1506.m_DragThreshold = i1507[3]
  return i1506
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i1508 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i1509 = data
  i1508.m_HorizontalAxis = i1509[0]
  i1508.m_VerticalAxis = i1509[1]
  i1508.m_SubmitButton = i1509[2]
  i1508.m_CancelButton = i1509[3]
  i1508.m_InputActionsPerSecond = i1509[4]
  i1508.m_RepeatDelay = i1509[5]
  i1508.m_ForceModuleActive = !!i1509[6]
  i1508.m_SendPointerHoverToParent = !!i1509[7]
  return i1508
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i1510 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i1511 = data
  i1510.pivot = new pc.Vec2( i1511[0], i1511[1] )
  i1510.anchorMin = new pc.Vec2( i1511[2], i1511[3] )
  i1510.anchorMax = new pc.Vec2( i1511[4], i1511[5] )
  i1510.sizeDelta = new pc.Vec2( i1511[6], i1511[7] )
  i1510.anchoredPosition3D = new pc.Vec3( i1511[8], i1511[9], i1511[10] )
  i1510.rotation = new pc.Quat(i1511[11], i1511[12], i1511[13], i1511[14])
  i1510.scale = new pc.Vec3( i1511[15], i1511[16], i1511[17] )
  return i1510
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i1512 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i1513 = data
  i1512.planeDistance = i1513[0]
  i1512.referencePixelsPerUnit = i1513[1]
  i1512.isFallbackOverlay = !!i1513[2]
  i1512.renderMode = i1513[3]
  i1512.renderOrder = i1513[4]
  i1512.sortingLayerName = i1513[5]
  i1512.sortingOrder = i1513[6]
  i1512.scaleFactor = i1513[7]
  request.r(i1513[8], i1513[9], 0, i1512, 'worldCamera')
  i1512.overrideSorting = !!i1513[10]
  i1512.pixelPerfect = !!i1513[11]
  i1512.targetDisplay = i1513[12]
  i1512.overridePixelPerfect = !!i1513[13]
  i1512.enabled = !!i1513[14]
  return i1512
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i1514 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i1515 = data
  i1514.m_UiScaleMode = i1515[0]
  i1514.m_ReferencePixelsPerUnit = i1515[1]
  i1514.m_ScaleFactor = i1515[2]
  i1514.m_ReferenceResolution = new pc.Vec2( i1515[3], i1515[4] )
  i1514.m_ScreenMatchMode = i1515[5]
  i1514.m_MatchWidthOrHeight = i1515[6]
  i1514.m_PhysicalUnit = i1515[7]
  i1514.m_FallbackScreenDPI = i1515[8]
  i1514.m_DefaultSpriteDPI = i1515[9]
  i1514.m_DynamicPixelsPerUnit = i1515[10]
  i1514.m_PresetInfoIsWorld = !!i1515[11]
  return i1514
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i1516 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i1517 = data
  i1516.m_IgnoreReversedGraphics = !!i1517[0]
  i1516.m_BlockingObjects = i1517[1]
  i1516.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i1517[2] )
  return i1516
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i1518 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i1519 = data
  i1518.cullTransparentMesh = !!i1519[0]
  return i1518
}

Deserializers["UnityEngine.UI.RawImage"] = function (request, data, root) {
  var i1520 = root || request.c( 'UnityEngine.UI.RawImage' )
  var i1521 = data
  request.r(i1521[0], i1521[1], 0, i1520, 'm_Texture')
  i1520.m_UVRect = UnityEngine.Rect.MinMaxRect(i1521[2], i1521[3], i1521[4], i1521[5])
  request.r(i1521[6], i1521[7], 0, i1520, 'm_Material')
  i1520.m_Maskable = !!i1521[8]
  i1520.m_Color = new pc.Color(i1521[9], i1521[10], i1521[11], i1521[12])
  i1520.m_RaycastTarget = !!i1521[13]
  i1520.m_RaycastPadding = new pc.Vec4( i1521[14], i1521[15], i1521[16], i1521[17] )
  return i1520
}

Deserializers["UnityEngine.UI.AspectRatioFitter"] = function (request, data, root) {
  var i1522 = root || request.c( 'UnityEngine.UI.AspectRatioFitter' )
  var i1523 = data
  i1522.m_AspectMode = i1523[0]
  i1522.m_AspectRatio = i1523[1]
  return i1522
}

Deserializers["UnityEngine.UI.Text"] = function (request, data, root) {
  var i1524 = root || request.c( 'UnityEngine.UI.Text' )
  var i1525 = data
  i1524.m_FontData = request.d('UnityEngine.UI.FontData', i1525[0], i1524.m_FontData)
  i1524.m_Text = i1525[1]
  request.r(i1525[2], i1525[3], 0, i1524, 'm_Material')
  i1524.m_Maskable = !!i1525[4]
  i1524.m_Color = new pc.Color(i1525[5], i1525[6], i1525[7], i1525[8])
  i1524.m_RaycastTarget = !!i1525[9]
  i1524.m_RaycastPadding = new pc.Vec4( i1525[10], i1525[11], i1525[12], i1525[13] )
  return i1524
}

Deserializers["UnityEngine.UI.FontData"] = function (request, data, root) {
  var i1526 = root || request.c( 'UnityEngine.UI.FontData' )
  var i1527 = data
  request.r(i1527[0], i1527[1], 0, i1526, 'm_Font')
  i1526.m_FontSize = i1527[2]
  i1526.m_FontStyle = i1527[3]
  i1526.m_BestFit = !!i1527[4]
  i1526.m_MinSize = i1527[5]
  i1526.m_MaxSize = i1527[6]
  i1526.m_Alignment = i1527[7]
  i1526.m_AlignByGeometry = !!i1527[8]
  i1526.m_RichText = !!i1527[9]
  i1526.m_HorizontalOverflow = i1527[10]
  i1526.m_VerticalOverflow = i1527[11]
  i1526.m_LineSpacing = i1527[12]
  return i1526
}

Deserializers["DG.Tweening.DOTweenAnimation"] = function (request, data, root) {
  var i1528 = root || request.c( 'DG.Tweening.DOTweenAnimation' )
  var i1529 = data
  i1528.targetIsSelf = !!i1529[0]
  request.r(i1529[1], i1529[2], 0, i1528, 'targetGO')
  i1528.tweenTargetIsTargetGO = !!i1529[3]
  i1528.delay = i1529[4]
  i1528.duration = i1529[5]
  i1528.easeType = i1529[6]
  i1528.easeCurve = new pc.AnimationCurve( { keys_flow: i1529[7] } )
  i1528.loopType = i1529[8]
  i1528.loops = i1529[9]
  i1528.id = i1529[10]
  i1528.isRelative = !!i1529[11]
  i1528.isFrom = !!i1529[12]
  i1528.isIndependentUpdate = !!i1529[13]
  i1528.autoKill = !!i1529[14]
  i1528.autoGenerate = !!i1529[15]
  i1528.isActive = !!i1529[16]
  i1528.isValid = !!i1529[17]
  request.r(i1529[18], i1529[19], 0, i1528, 'target')
  i1528.animationType = i1529[20]
  i1528.targetType = i1529[21]
  i1528.forcedTargetType = i1529[22]
  i1528.autoPlay = !!i1529[23]
  i1528.useTargetAsV3 = !!i1529[24]
  i1528.endValueFloat = i1529[25]
  i1528.endValueV3 = new pc.Vec3( i1529[26], i1529[27], i1529[28] )
  i1528.endValueV2 = new pc.Vec2( i1529[29], i1529[30] )
  i1528.endValueColor = new pc.Color(i1529[31], i1529[32], i1529[33], i1529[34])
  i1528.endValueString = i1529[35]
  i1528.endValueRect = UnityEngine.Rect.MinMaxRect(i1529[36], i1529[37], i1529[38], i1529[39])
  request.r(i1529[40], i1529[41], 0, i1528, 'endValueTransform')
  i1528.optionalBool0 = !!i1529[42]
  i1528.optionalBool1 = !!i1529[43]
  i1528.optionalFloat0 = i1529[44]
  i1528.optionalInt0 = i1529[45]
  i1528.optionalRotationMode = i1529[46]
  i1528.optionalScrambleMode = i1529[47]
  i1528.optionalShakeRandomnessMode = i1529[48]
  i1528.optionalString = i1529[49]
  i1528.updateType = i1529[50]
  i1528.isSpeedBased = !!i1529[51]
  i1528.hasOnStart = !!i1529[52]
  i1528.hasOnPlay = !!i1529[53]
  i1528.hasOnUpdate = !!i1529[54]
  i1528.hasOnStepComplete = !!i1529[55]
  i1528.hasOnComplete = !!i1529[56]
  i1528.hasOnTweenCreated = !!i1529[57]
  i1528.hasOnRewind = !!i1529[58]
  i1528.onStart = request.d('UnityEngine.Events.UnityEvent', i1529[59], i1528.onStart)
  i1528.onPlay = request.d('UnityEngine.Events.UnityEvent', i1529[60], i1528.onPlay)
  i1528.onUpdate = request.d('UnityEngine.Events.UnityEvent', i1529[61], i1528.onUpdate)
  i1528.onStepComplete = request.d('UnityEngine.Events.UnityEvent', i1529[62], i1528.onStepComplete)
  i1528.onComplete = request.d('UnityEngine.Events.UnityEvent', i1529[63], i1528.onComplete)
  i1528.onTweenCreated = request.d('UnityEngine.Events.UnityEvent', i1529[64], i1528.onTweenCreated)
  i1528.onRewind = request.d('UnityEngine.Events.UnityEvent', i1529[65], i1528.onRewind)
  return i1528
}

Deserializers["UnityEngine.Events.UnityEvent"] = function (request, data, root) {
  var i1530 = root || request.c( 'UnityEngine.Events.UnityEvent' )
  var i1531 = data
  i1530.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i1531[0], i1530.m_PersistentCalls)
  return i1530
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i1532 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i1533 = data
  var i1535 = i1533[0]
  var i1534 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i1535.length; i += 1) {
    i1534.add(request.d('UnityEngine.Events.PersistentCall', i1535[i + 0]));
  }
  i1532.m_Calls = i1534
  return i1532
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i1538 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i1539 = data
  request.r(i1539[0], i1539[1], 0, i1538, 'm_Target')
  i1538.m_TargetAssemblyTypeName = i1539[2]
  i1538.m_MethodName = i1539[3]
  i1538.m_Mode = i1539[4]
  i1538.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i1539[5], i1538.m_Arguments)
  i1538.m_CallState = i1539[6]
  return i1538
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i1540 = root || request.c( 'UnityEngine.UI.Image' )
  var i1541 = data
  request.r(i1541[0], i1541[1], 0, i1540, 'm_Sprite')
  i1540.m_Type = i1541[2]
  i1540.m_PreserveAspect = !!i1541[3]
  i1540.m_FillCenter = !!i1541[4]
  i1540.m_FillMethod = i1541[5]
  i1540.m_FillAmount = i1541[6]
  i1540.m_FillClockwise = !!i1541[7]
  i1540.m_FillOrigin = i1541[8]
  i1540.m_UseSpriteMesh = !!i1541[9]
  i1540.m_PixelsPerUnitMultiplier = i1541[10]
  request.r(i1541[11], i1541[12], 0, i1540, 'm_Material')
  i1540.m_Maskable = !!i1541[13]
  i1540.m_Color = new pc.Color(i1541[14], i1541[15], i1541[16], i1541[17])
  i1540.m_RaycastTarget = !!i1541[18]
  i1540.m_RaycastPadding = new pc.Vec4( i1541[19], i1541[20], i1541[21], i1541[22] )
  return i1540
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i1542 = root || request.c( 'UnityEngine.UI.Button' )
  var i1543 = data
  i1542.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i1543[0], i1542.m_OnClick)
  i1542.m_Navigation = request.d('UnityEngine.UI.Navigation', i1543[1], i1542.m_Navigation)
  i1542.m_Transition = i1543[2]
  i1542.m_Colors = request.d('UnityEngine.UI.ColorBlock', i1543[3], i1542.m_Colors)
  i1542.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i1543[4], i1542.m_SpriteState)
  i1542.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i1543[5], i1542.m_AnimationTriggers)
  i1542.m_Interactable = !!i1543[6]
  request.r(i1543[7], i1543[8], 0, i1542, 'm_TargetGraphic')
  return i1542
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i1544 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i1545 = data
  i1544.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i1545[0], i1544.m_PersistentCalls)
  return i1544
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i1546 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i1547 = data
  i1546.m_Mode = i1547[0]
  i1546.m_WrapAround = !!i1547[1]
  request.r(i1547[2], i1547[3], 0, i1546, 'm_SelectOnUp')
  request.r(i1547[4], i1547[5], 0, i1546, 'm_SelectOnDown')
  request.r(i1547[6], i1547[7], 0, i1546, 'm_SelectOnLeft')
  request.r(i1547[8], i1547[9], 0, i1546, 'm_SelectOnRight')
  return i1546
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i1548 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i1549 = data
  i1548.m_NormalColor = new pc.Color(i1549[0], i1549[1], i1549[2], i1549[3])
  i1548.m_HighlightedColor = new pc.Color(i1549[4], i1549[5], i1549[6], i1549[7])
  i1548.m_PressedColor = new pc.Color(i1549[8], i1549[9], i1549[10], i1549[11])
  i1548.m_SelectedColor = new pc.Color(i1549[12], i1549[13], i1549[14], i1549[15])
  i1548.m_DisabledColor = new pc.Color(i1549[16], i1549[17], i1549[18], i1549[19])
  i1548.m_ColorMultiplier = i1549[20]
  i1548.m_FadeDuration = i1549[21]
  return i1548
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i1550 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i1551 = data
  request.r(i1551[0], i1551[1], 0, i1550, 'm_HighlightedSprite')
  request.r(i1551[2], i1551[3], 0, i1550, 'm_PressedSprite')
  request.r(i1551[4], i1551[5], 0, i1550, 'm_SelectedSprite')
  request.r(i1551[6], i1551[7], 0, i1550, 'm_DisabledSprite')
  return i1550
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i1552 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i1553 = data
  i1552.m_NormalTrigger = i1553[0]
  i1552.m_HighlightedTrigger = i1553[1]
  i1552.m_PressedTrigger = i1553[2]
  i1552.m_SelectedTrigger = i1553[3]
  i1552.m_DisabledTrigger = i1553[4]
  return i1552
}

Deserializers["TutController"] = function (request, data, root) {
  var i1554 = root || request.c( 'TutController' )
  var i1555 = data
  var i1557 = i1555[0]
  var i1556 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Vector2')))
  for(var i = 0; i < i1557.length; i += 2) {
    i1556.add(new pc.Vec2( i1557[i + 0], i1557[i + 1] ));
  }
  i1554.movePos = i1556
  i1554.moveTime = i1555[1]
  i1554.fromScale = i1555[2]
  i1554.toScale = i1555[3]
  i1554.scaleTime = i1555[4]
  i1554.delayTime = i1555[5]
  return i1554
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D"] = function (request, data, root) {
  var i1560 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D' )
  var i1561 = data
  i1560.usedByComposite = !!i1561[0]
  i1560.autoTiling = !!i1561[1]
  i1560.size = new pc.Vec2( i1561[2], i1561[3] )
  i1560.edgeRadius = i1561[4]
  i1560.enabled = !!i1561[5]
  i1560.isTrigger = !!i1561[6]
  i1560.usedByEffector = !!i1561[7]
  i1560.density = i1561[8]
  i1560.offset = new pc.Vec2( i1561[9], i1561[10] )
  request.r(i1561[11], i1561[12], 0, i1560, 'material')
  return i1560
}

Deserializers["BlockController"] = function (request, data, root) {
  var i1562 = root || request.c( 'BlockController' )
  var i1563 = data
  i1562.maxHP = i1563[0]
  i1562.currentHP = i1563[1]
  i1562.isBreak = !!i1563[2]
  i1562.numMonster = i1563[3]
  request.r(i1563[4], i1563[5], 0, i1562, 'hitSFX')
  request.r(i1563[6], i1563[7], 0, i1562, 'breakVFX')
  request.r(i1563[8], i1563[9], 0, i1562, 'breakSFX')
  return i1562
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Rigidbody2D"] = function (request, data, root) {
  var i1564 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Rigidbody2D' )
  var i1565 = data
  i1564.bodyType = i1565[0]
  request.r(i1565[1], i1565[2], 0, i1564, 'material')
  i1564.simulated = !!i1565[3]
  i1564.useAutoMass = !!i1565[4]
  i1564.mass = i1565[5]
  i1564.drag = i1565[6]
  i1564.angularDrag = i1565[7]
  i1564.gravityScale = i1565[8]
  i1564.collisionDetectionMode = i1565[9]
  i1564.sleepMode = i1565[10]
  i1564.constraints = i1565[11]
  return i1564
}

Deserializers["LandmineController"] = function (request, data, root) {
  var i1566 = root || request.c( 'LandmineController' )
  var i1567 = data
  i1566.damage = i1567[0]
  i1566.layer = UnityEngine.LayerMask.FromIntegerValue( i1567[1] )
  request.r(i1567[2], i1567[3], 0, i1566, 'actionSound')
  request.r(i1567[4], i1567[5], 0, i1566, 'boomVFX')
  i1566.radius = i1567[6]
  return i1566
}

Deserializers["SmokeController"] = function (request, data, root) {
  var i1568 = root || request.c( 'SmokeController' )
  var i1569 = data
  i1568.delay = i1569[0]
  request.r(i1569[1], i1569[2], 0, i1568, 'startSound')
  request.r(i1569[3], i1569[4], 0, i1568, 'actionSound')
  request.r(i1569[5], i1569[6], 0, i1568, 'boomSound')
  return i1568
}

Deserializers["TriggerMonster"] = function (request, data, root) {
  var i1570 = root || request.c( 'TriggerMonster' )
  var i1571 = data
  return i1570
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SortingGroup"] = function (request, data, root) {
  var i1572 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SortingGroup' )
  var i1573 = data
  i1572.sortingLayerIndex = i1573[0]
  i1572.sortingOrder = i1573[1]
  i1572.sortingLayerName = i1573[2]
  i1572.enabled = !!i1573[3]
  return i1572
}

Deserializers["PlayerController"] = function (request, data, root) {
  var i1574 = root || request.c( 'PlayerController' )
  var i1575 = data
  var i1577 = i1575[0]
  var i1576 = new (System.Collections.Generic.List$1(Bridge.ns('Piece')))
  for(var i = 0; i < i1577.length; i += 1) {
    i1576.add(request.d('Piece', i1577[i + 0]));
  }
  i1574.pieces = i1576
  request.r(i1575[1], i1575[2], 0, i1574, 'head')
  request.r(i1575[3], i1575[4], 0, i1574, 'deadSFX')
  i1574.maxForce = new pc.Vec2( i1575[5], i1575[6] )
  i1574.minForce = new pc.Vec2( i1575[7], i1575[8] )
  var i1579 = i1575[9]
  var i1578 = new (System.Collections.Generic.List$1(Bridge.ns('FightOption')))
  for(var i = 0; i < i1579.length; i += 1) {
    i1578.add(request.d('FightOption', i1579[i + 0]));
  }
  i1574.fightOptions = i1578
  i1574.fight = request.d('FightOption', i1575[10], i1574.fight)
  request.r(i1575[11], i1575[12], 0, i1574, 'clickSound')
  request.r(i1575[13], i1575[14], 0, i1574, 'deadVFX')
  var i1581 = i1575[15]
  var i1580 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.SpriteRenderer')))
  for(var i = 0; i < i1581.length; i += 2) {
  request.r(i1581[i + 0], i1581[i + 1], 1, i1580, '')
  }
  i1574.renderers = i1580
  var i1583 = i1575[16]
  var i1582 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Sprite')))
  for(var i = 0; i < i1583.length; i += 2) {
  request.r(i1583[i + 0], i1583[i + 1], 1, i1582, '')
  }
  i1574.sprites = i1582
  i1574.isZombie = !!i1575[17]
  return i1574
}

Deserializers["Piece"] = function (request, data, root) {
  var i1586 = root || request.c( 'Piece' )
  var i1587 = data
  request.r(i1587[0], i1587[1], 0, i1586, 'Joint')
  request.r(i1587[2], i1587[3], 0, i1586, 'Rb')
  return i1586
}

Deserializers["FightOption"] = function (request, data, root) {
  var i1590 = root || request.c( 'FightOption' )
  var i1591 = data
  request.r(i1591[0], i1591[1], 0, i1590, 'Button')
  request.r(i1591[2], i1591[3], 0, i1590, 'Controller')
  return i1590
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.HingeJoint2D"] = function (request, data, root) {
  var i1596 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.HingeJoint2D' )
  var i1597 = data
  i1596.useLimits = !!i1597[0]
  i1596.limits = request.d('UnityEngine.JointAngleLimits2D', i1597[1], i1596.limits)
  i1596.useMotor = !!i1597[2]
  i1596.motor = request.d('UnityEngine.JointMotor2D', i1597[3], i1596.motor)
  i1596.anchor = new pc.Vec2( i1597[4], i1597[5] )
  i1596.connectedAnchor = new pc.Vec2( i1597[6], i1597[7] )
  i1596.autoConfigureConnectedAnchor = !!i1597[8]
  request.r(i1597[9], i1597[10], 0, i1596, 'connectedBody')
  i1596.breakForce = i1597[11]
  i1596.breakTorque = i1597[12]
  i1596.enableCollision = !!i1597[13]
  i1596.enabled = !!i1597[14]
  return i1596
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.TargetJoint2D"] = function (request, data, root) {
  var i1598 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.TargetJoint2D' )
  var i1599 = data
  i1598.autoConfigureTarget = !!i1599[0]
  i1598.target = new pc.Vec2( i1599[1], i1599[2] )
  i1598.anchor = new pc.Vec2( i1599[3], i1599[4] )
  i1598.maxForce = i1599[5]
  i1598.dampingRatio = i1599[6]
  i1598.frequency = i1599[7]
  request.r(i1599[8], i1599[9], 0, i1598, 'connectedBody')
  i1598.breakForce = i1599[10]
  i1598.breakTorque = i1599[11]
  i1598.enableCollision = !!i1599[12]
  i1598.enabled = !!i1599[13]
  return i1598
}

Deserializers["ShootController"] = function (request, data, root) {
  var i1600 = root || request.c( 'ShootController' )
  var i1601 = data
  request.r(i1601[0], i1601[1], 0, i1600, 'currentMonster')
  request.r(i1601[2], i1601[3], 0, i1600, 'left')
  request.r(i1601[4], i1601[5], 0, i1600, 'right')
  i1600.timeMotor = i1601[6]
  i1600.onCD = !!i1601[7]
  i1600.CD = i1601[8]
  request.r(i1601[9], i1601[10], 0, i1600, 'startPos')
  request.r(i1601[11], i1601[12], 0, i1600, 'attackSound')
  request.r(i1601[13], i1601[14], 0, i1600, 'spawnPrefab')
  request.r(i1601[15], i1601[16], 0, i1600, 'poolParent')
  return i1600
}

Deserializers["BalanceController"] = function (request, data, root) {
  var i1602 = root || request.c( 'BalanceController' )
  var i1603 = data
  i1602.targetRotation = i1603[0]
  i1602.force = i1603[1]
  return i1602
}

Deserializers["MonsterController"] = function (request, data, root) {
  var i1604 = root || request.c( 'MonsterController' )
  var i1605 = data
  i1604.maxHP = i1605[0]
  i1604.currentHP = i1605[1]
  var i1607 = i1605[2]
  var i1606 = new (System.Collections.Generic.List$1(Bridge.ns('Piece')))
  for(var i = 0; i < i1607.length; i += 1) {
    i1606.add(request.d('Piece', i1607[i + 0]));
  }
  i1604.pieces = i1606
  request.r(i1605[3], i1605[4], 0, i1604, 'deadSFX')
  i1604.maxForce = new pc.Vec2( i1605[5], i1605[6] )
  i1604.minForce = new pc.Vec2( i1605[7], i1605[8] )
  request.r(i1605[9], i1605[10], 0, i1604, 'balance')
  i1604.isDead = !!i1605[11]
  request.r(i1605[12], i1605[13], 0, i1604, 'monsterMove')
  request.r(i1605[14], i1605[15], 0, i1604, 'monsterTarget')
  request.r(i1605[16], i1605[17], 0, i1604, 'monsterAnimation')
  request.r(i1605[18], i1605[19], 0, i1604, 'voice')
  return i1604
}

Deserializers["MonsterMove"] = function (request, data, root) {
  var i1608 = root || request.c( 'MonsterMove' )
  var i1609 = data
  request.r(i1609[0], i1609[1], 0, i1608, 'body')
  i1608.speed = i1609[2]
  return i1608
}

Deserializers["MonsterAnimation"] = function (request, data, root) {
  var i1610 = root || request.c( 'MonsterAnimation' )
  var i1611 = data
  request.r(i1611[0], i1611[1], 0, i1610, 'leftHand')
  request.r(i1611[2], i1611[3], 0, i1610, 'rightHand')
  request.r(i1611[4], i1611[5], 0, i1610, 'leftLeg')
  request.r(i1611[6], i1611[7], 0, i1610, 'rightLeg')
  return i1610
}

Deserializers["MonsterTarget"] = function (request, data, root) {
  var i1612 = root || request.c( 'MonsterTarget' )
  var i1613 = data
  i1612.targetLeft = !!i1613[0]
  return i1612
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.AudioSource"] = function (request, data, root) {
  var i1614 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.AudioSource' )
  var i1615 = data
  request.r(i1615[0], i1615[1], 0, i1614, 'clip')
  request.r(i1615[2], i1615[3], 0, i1614, 'outputAudioMixerGroup')
  i1614.playOnAwake = !!i1615[4]
  i1614.loop = !!i1615[5]
  i1614.time = i1615[6]
  i1614.volume = i1615[7]
  i1614.pitch = i1615[8]
  i1614.enabled = !!i1615[9]
  return i1614
}

Deserializers["GameController"] = function (request, data, root) {
  var i1616 = root || request.c( 'GameController' )
  var i1617 = data
  i1616.Delay = i1617[0]
  i1616.OnPause = request.d('System.Action', i1617[1], i1616.OnPause)
  i1616.OnResume = request.d('System.Action', i1617[2], i1616.OnResume)
  i1616.OnGameOver = request.d('System.Action', i1617[3], i1616.OnGameOver)
  i1616.OnGameComplete = request.d('System.Action', i1617[4], i1616.OnGameComplete)
  request.r(i1617[5], i1617[6], 0, i1616, 'startScene')
  request.r(i1617[7], i1617[8], 0, i1616, 'header')
  request.r(i1617[9], i1617[10], 0, i1616, 'clickSound')
  request.r(i1617[11], i1617[12], 0, i1616, 'options')
  request.r(i1617[13], i1617[14], 0, i1616, 'smokeButton')
  request.r(i1617[15], i1617[16], 0, i1616, 'smoke')
  request.r(i1617[17], i1617[18], 0, i1616, 'landmindButton')
  request.r(i1617[19], i1617[20], 0, i1616, 'landmind')
  request.r(i1617[21], i1617[22], 0, i1616, 'gunButton')
  request.r(i1617[23], i1617[24], 0, i1616, 'tut')
  request.r(i1617[25], i1617[26], 0, i1616, 'endScene')
  request.r(i1617[27], i1617[28], 0, i1616, 'completeScene')
  request.r(i1617[29], i1617[30], 0, i1616, 'gameOverScene')
  request.r(i1617[31], i1617[32], 0, i1616, 'player')
  i1616.numMonster = i1617[33]
  request.r(i1617[34], i1617[35], 0, i1616, 'world')
  return i1616
}

Deserializers["System.Action"] = function (request, data, root) {
  var i1618 = root || request.c( 'System.Action' )
  var i1619 = data
  return i1618
}

Deserializers["LayoutController"] = function (request, data, root) {
  var i1620 = root || request.c( 'LayoutController' )
  var i1621 = data
  request.r(i1621[0], i1621[1], 0, i1620, 'main')
  return i1620
}

Deserializers["LunaController"] = function (request, data, root) {
  var i1622 = root || request.c( 'LunaController' )
  var i1623 = data
  i1622.oneClick = !!i1623[0]
  i1622.UseTime = !!i1623[1]
  i1622.TimePlay = i1623[2]
  request.r(i1623[3], i1623[4], 0, i1622, 'BGTexture')
  i1622.HeaderText1 = i1623[5]
  i1622.ColorHeaderText1 = new pc.Color(i1623[6], i1623[7], i1623[8], i1623[9])
  i1622.HeaderText2 = i1623[10]
  i1622.ColorHeaderText2 = new pc.Color(i1623[11], i1623[12], i1623[13], i1623[14])
  i1622.GameOverText = i1623[15]
  i1622.ColorGameOverText = new pc.Color(i1623[16], i1623[17], i1623[18], i1623[19])
  request.r(i1623[20], i1623[21], 0, i1622, 'header1')
  request.r(i1623[22], i1623[23], 0, i1622, 'header2')
  request.r(i1623[24], i1623[25], 0, i1622, 'lossText')
  request.r(i1623[26], i1623[27], 0, i1622, 'BGImage')
  var i1625 = i1623[28]
  var i1624 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.UI.Button')))
  for(var i = 0; i < i1625.length; i += 2) {
  request.r(i1625[i + 0], i1625[i + 1], 1, i1624, '')
  }
  i1622.CTA = i1624
  var i1627 = i1623[29]
  var i1626 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.UI.Button')))
  for(var i = 0; i < i1627.length; i += 2) {
  request.r(i1627[i + 0], i1627[i + 1], 1, i1626, '')
  }
  i1622.oneClickCTA = i1626
  return i1622
}

Deserializers["AudioController"] = function (request, data, root) {
  var i1630 = root || request.c( 'AudioController' )
  var i1631 = data
  request.r(i1631[0], i1631[1], 0, i1630, 'BGM')
  request.r(i1631[2], i1631[3], 0, i1630, 'musicSource')
  request.r(i1631[4], i1631[5], 0, i1630, 'pool')
  return i1630
}

Deserializers["VFXController"] = function (request, data, root) {
  var i1632 = root || request.c( 'VFXController' )
  var i1633 = data
  request.r(i1633[0], i1633[1], 0, i1632, 'poolParent')
  return i1632
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i1634 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i1635 = data
  i1634.ambientIntensity = i1635[0]
  i1634.reflectionIntensity = i1635[1]
  i1634.ambientMode = i1635[2]
  i1634.ambientLight = new pc.Color(i1635[3], i1635[4], i1635[5], i1635[6])
  i1634.ambientSkyColor = new pc.Color(i1635[7], i1635[8], i1635[9], i1635[10])
  i1634.ambientGroundColor = new pc.Color(i1635[11], i1635[12], i1635[13], i1635[14])
  i1634.ambientEquatorColor = new pc.Color(i1635[15], i1635[16], i1635[17], i1635[18])
  i1634.fogColor = new pc.Color(i1635[19], i1635[20], i1635[21], i1635[22])
  i1634.fogEndDistance = i1635[23]
  i1634.fogStartDistance = i1635[24]
  i1634.fogDensity = i1635[25]
  i1634.fog = !!i1635[26]
  request.r(i1635[27], i1635[28], 0, i1634, 'skybox')
  i1634.fogMode = i1635[29]
  var i1637 = i1635[30]
  var i1636 = []
  for(var i = 0; i < i1637.length; i += 1) {
    i1636.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i1637[i + 0]) );
  }
  i1634.lightmaps = i1636
  i1634.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i1635[31], i1634.lightProbes)
  i1634.lightmapsMode = i1635[32]
  i1634.mixedBakeMode = i1635[33]
  i1634.environmentLightingMode = i1635[34]
  i1634.ambientProbe = new pc.SphericalHarmonicsL2(i1635[35])
  request.r(i1635[36], i1635[37], 0, i1634, 'customReflection')
  request.r(i1635[38], i1635[39], 0, i1634, 'defaultReflection')
  i1634.defaultReflectionMode = i1635[40]
  i1634.defaultReflectionResolution = i1635[41]
  i1634.sunLightObjectId = i1635[42]
  i1634.pixelLightCount = i1635[43]
  i1634.defaultReflectionHDR = !!i1635[44]
  i1634.hasLightDataAsset = !!i1635[45]
  i1634.hasManualGenerate = !!i1635[46]
  return i1634
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i1640 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i1641 = data
  request.r(i1641[0], i1641[1], 0, i1640, 'lightmapColor')
  request.r(i1641[2], i1641[3], 0, i1640, 'lightmapDirection')
  request.r(i1641[4], i1641[5], 0, i1640, 'shadowMask')
  return i1640
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i1642 = root || new UnityEngine.LightProbes()
  var i1643 = data
  return i1642
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i1650 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i1651 = data
  var i1653 = i1651[0]
  var i1652 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i1653.length; i += 1) {
    i1652.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i1653[i + 0]));
  }
  i1650.ShaderCompilationErrors = i1652
  i1650.name = i1651[1]
  i1650.guid = i1651[2]
  var i1655 = i1651[3]
  var i1654 = []
  for(var i = 0; i < i1655.length; i += 1) {
    i1654.push( i1655[i + 0] );
  }
  i1650.shaderDefinedKeywords = i1654
  var i1657 = i1651[4]
  var i1656 = []
  for(var i = 0; i < i1657.length; i += 1) {
    i1656.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i1657[i + 0]) );
  }
  i1650.passes = i1656
  var i1659 = i1651[5]
  var i1658 = []
  for(var i = 0; i < i1659.length; i += 1) {
    i1658.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i1659[i + 0]) );
  }
  i1650.usePasses = i1658
  var i1661 = i1651[6]
  var i1660 = []
  for(var i = 0; i < i1661.length; i += 1) {
    i1660.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i1661[i + 0]) );
  }
  i1650.defaultParameterValues = i1660
  request.r(i1651[7], i1651[8], 0, i1650, 'unityFallbackShader')
  i1650.readDepth = !!i1651[9]
  i1650.hasDepthOnlyPass = !!i1651[10]
  i1650.isCreatedByShaderGraph = !!i1651[11]
  i1650.disableBatching = !!i1651[12]
  i1650.compiled = !!i1651[13]
  return i1650
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i1664 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i1665 = data
  i1664.shaderName = i1665[0]
  i1664.errorMessage = i1665[1]
  return i1664
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i1670 = root || new pc.UnityShaderPass()
  var i1671 = data
  i1670.id = i1671[0]
  i1670.subShaderIndex = i1671[1]
  i1670.name = i1671[2]
  i1670.passType = i1671[3]
  i1670.grabPassTextureName = i1671[4]
  i1670.usePass = !!i1671[5]
  i1670.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1671[6], i1670.zTest)
  i1670.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1671[7], i1670.zWrite)
  i1670.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1671[8], i1670.culling)
  i1670.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i1671[9], i1670.blending)
  i1670.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i1671[10], i1670.alphaBlending)
  i1670.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1671[11], i1670.colorWriteMask)
  i1670.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1671[12], i1670.offsetUnits)
  i1670.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1671[13], i1670.offsetFactor)
  i1670.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1671[14], i1670.stencilRef)
  i1670.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1671[15], i1670.stencilReadMask)
  i1670.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1671[16], i1670.stencilWriteMask)
  i1670.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1671[17], i1670.stencilOp)
  i1670.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1671[18], i1670.stencilOpFront)
  i1670.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1671[19], i1670.stencilOpBack)
  var i1673 = i1671[20]
  var i1672 = []
  for(var i = 0; i < i1673.length; i += 1) {
    i1672.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i1673[i + 0]) );
  }
  i1670.tags = i1672
  var i1675 = i1671[21]
  var i1674 = []
  for(var i = 0; i < i1675.length; i += 1) {
    i1674.push( i1675[i + 0] );
  }
  i1670.passDefinedKeywords = i1674
  var i1677 = i1671[22]
  var i1676 = []
  for(var i = 0; i < i1677.length; i += 1) {
    i1676.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i1677[i + 0]) );
  }
  i1670.passDefinedKeywordGroups = i1676
  var i1679 = i1671[23]
  var i1678 = []
  for(var i = 0; i < i1679.length; i += 1) {
    i1678.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i1679[i + 0]) );
  }
  i1670.variants = i1678
  var i1681 = i1671[24]
  var i1680 = []
  for(var i = 0; i < i1681.length; i += 1) {
    i1680.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i1681[i + 0]) );
  }
  i1670.excludedVariants = i1680
  i1670.hasDepthReader = !!i1671[25]
  return i1670
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i1682 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i1683 = data
  i1682.val = i1683[0]
  i1682.name = i1683[1]
  return i1682
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i1684 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i1685 = data
  i1684.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1685[0], i1684.src)
  i1684.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1685[1], i1684.dst)
  i1684.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1685[2], i1684.op)
  return i1684
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i1686 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i1687 = data
  i1686.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1687[0], i1686.pass)
  i1686.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1687[1], i1686.fail)
  i1686.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1687[2], i1686.zFail)
  i1686.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1687[3], i1686.comp)
  return i1686
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i1690 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i1691 = data
  i1690.name = i1691[0]
  i1690.value = i1691[1]
  return i1690
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i1694 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i1695 = data
  var i1697 = i1695[0]
  var i1696 = []
  for(var i = 0; i < i1697.length; i += 1) {
    i1696.push( i1697[i + 0] );
  }
  i1694.keywords = i1696
  i1694.hasDiscard = !!i1695[1]
  return i1694
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i1700 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i1701 = data
  i1700.passId = i1701[0]
  i1700.subShaderIndex = i1701[1]
  var i1703 = i1701[2]
  var i1702 = []
  for(var i = 0; i < i1703.length; i += 1) {
    i1702.push( i1703[i + 0] );
  }
  i1700.keywords = i1702
  i1700.vertexProgram = i1701[3]
  i1700.fragmentProgram = i1701[4]
  i1700.exportedForWebGl2 = !!i1701[5]
  i1700.readDepth = !!i1701[6]
  return i1700
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i1706 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i1707 = data
  request.r(i1707[0], i1707[1], 0, i1706, 'shader')
  i1706.pass = i1707[2]
  return i1706
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i1710 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i1711 = data
  i1710.name = i1711[0]
  i1710.type = i1711[1]
  i1710.value = new pc.Vec4( i1711[2], i1711[3], i1711[4], i1711[5] )
  i1710.textureValue = i1711[6]
  i1710.shaderPropertyFlag = i1711[7]
  return i1710
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i1712 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i1713 = data
  i1712.name = i1713[0]
  request.r(i1713[1], i1713[2], 0, i1712, 'texture')
  i1712.aabb = i1713[3]
  i1712.vertices = i1713[4]
  i1712.triangles = i1713[5]
  i1712.textureRect = UnityEngine.Rect.MinMaxRect(i1713[6], i1713[7], i1713[8], i1713[9])
  i1712.packedRect = UnityEngine.Rect.MinMaxRect(i1713[10], i1713[11], i1713[12], i1713[13])
  i1712.border = new pc.Vec4( i1713[14], i1713[15], i1713[16], i1713[17] )
  i1712.transparency = i1713[18]
  i1712.bounds = i1713[19]
  i1712.pixelsPerUnit = i1713[20]
  i1712.textureWidth = i1713[21]
  i1712.textureHeight = i1713[22]
  i1712.nativeSize = new pc.Vec2( i1713[23], i1713[24] )
  i1712.pivot = new pc.Vec2( i1713[25], i1713[26] )
  i1712.textureRectOffset = new pc.Vec2( i1713[27], i1713[28] )
  return i1712
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i1714 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i1715 = data
  i1714.name = i1715[0]
  return i1714
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font"] = function (request, data, root) {
  var i1716 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font' )
  var i1717 = data
  i1716.name = i1717[0]
  i1716.ascent = i1717[1]
  i1716.originalLineHeight = i1717[2]
  i1716.fontSize = i1717[3]
  var i1719 = i1717[4]
  var i1718 = []
  for(var i = 0; i < i1719.length; i += 1) {
    i1718.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo', i1719[i + 0]) );
  }
  i1716.characterInfo = i1718
  request.r(i1717[5], i1717[6], 0, i1716, 'texture')
  i1716.originalFontSize = i1717[7]
  return i1716
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo"] = function (request, data, root) {
  var i1722 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo' )
  var i1723 = data
  i1722.index = i1723[0]
  i1722.advance = i1723[1]
  i1722.bearing = i1723[2]
  i1722.glyphWidth = i1723[3]
  i1722.glyphHeight = i1723[4]
  i1722.minX = i1723[5]
  i1722.maxX = i1723[6]
  i1722.minY = i1723[7]
  i1722.maxY = i1723[8]
  i1722.uvBottomLeftX = i1723[9]
  i1722.uvBottomLeftY = i1723[10]
  i1722.uvBottomRightX = i1723[11]
  i1722.uvBottomRightY = i1723[12]
  i1722.uvTopLeftX = i1723[13]
  i1722.uvTopLeftY = i1723[14]
  i1722.uvTopRightX = i1723[15]
  i1722.uvTopRightY = i1723[16]
  return i1722
}

Deserializers["DG.Tweening.Core.DOTweenSettings"] = function (request, data, root) {
  var i1724 = root || request.c( 'DG.Tweening.Core.DOTweenSettings' )
  var i1725 = data
  i1724.useSafeMode = !!i1725[0]
  i1724.safeModeOptions = request.d('DG.Tweening.Core.DOTweenSettings+SafeModeOptions', i1725[1], i1724.safeModeOptions)
  i1724.timeScale = i1725[2]
  i1724.unscaledTimeScale = i1725[3]
  i1724.useSmoothDeltaTime = !!i1725[4]
  i1724.maxSmoothUnscaledTime = i1725[5]
  i1724.rewindCallbackMode = i1725[6]
  i1724.showUnityEditorReport = !!i1725[7]
  i1724.logBehaviour = i1725[8]
  i1724.drawGizmos = !!i1725[9]
  i1724.defaultRecyclable = !!i1725[10]
  i1724.defaultAutoPlay = i1725[11]
  i1724.defaultUpdateType = i1725[12]
  i1724.defaultTimeScaleIndependent = !!i1725[13]
  i1724.defaultEaseType = i1725[14]
  i1724.defaultEaseOvershootOrAmplitude = i1725[15]
  i1724.defaultEasePeriod = i1725[16]
  i1724.defaultAutoKill = !!i1725[17]
  i1724.defaultLoopType = i1725[18]
  i1724.debugMode = !!i1725[19]
  i1724.debugStoreTargetId = !!i1725[20]
  i1724.showPreviewPanel = !!i1725[21]
  i1724.storeSettingsLocation = i1725[22]
  i1724.modules = request.d('DG.Tweening.Core.DOTweenSettings+ModulesSetup', i1725[23], i1724.modules)
  i1724.createASMDEF = !!i1725[24]
  i1724.showPlayingTweens = !!i1725[25]
  i1724.showPausedTweens = !!i1725[26]
  return i1724
}

Deserializers["DG.Tweening.Core.DOTweenSettings+SafeModeOptions"] = function (request, data, root) {
  var i1726 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+SafeModeOptions' )
  var i1727 = data
  i1726.logBehaviour = i1727[0]
  i1726.nestedTweenFailureBehaviour = i1727[1]
  return i1726
}

Deserializers["DG.Tweening.Core.DOTweenSettings+ModulesSetup"] = function (request, data, root) {
  var i1728 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+ModulesSetup' )
  var i1729 = data
  i1728.showPanel = !!i1729[0]
  i1728.audioEnabled = !!i1729[1]
  i1728.physicsEnabled = !!i1729[2]
  i1728.physics2DEnabled = !!i1729[3]
  i1728.spriteEnabled = !!i1729[4]
  i1728.uiEnabled = !!i1729[5]
  i1728.textMeshProEnabled = !!i1729[6]
  i1728.tk2DEnabled = !!i1729[7]
  i1728.deAudioEnabled = !!i1729[8]
  i1728.deUnityExtendedEnabled = !!i1729[9]
  i1728.epoOutlineEnabled = !!i1729[10]
  return i1728
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i1730 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i1731 = data
  var i1733 = i1731[0]
  var i1732 = []
  for(var i = 0; i < i1733.length; i += 1) {
    i1732.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i1733[i + 0]) );
  }
  i1730.files = i1732
  i1730.componentToPrefabIds = i1731[1]
  return i1730
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i1736 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i1737 = data
  i1736.path = i1737[0]
  request.r(i1737[1], i1737[2], 0, i1736, 'unityObject')
  return i1736
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i1738 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i1739 = data
  var i1741 = i1739[0]
  var i1740 = []
  for(var i = 0; i < i1741.length; i += 1) {
    i1740.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i1741[i + 0]) );
  }
  i1738.scriptsExecutionOrder = i1740
  var i1743 = i1739[1]
  var i1742 = []
  for(var i = 0; i < i1743.length; i += 1) {
    i1742.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i1743[i + 0]) );
  }
  i1738.sortingLayers = i1742
  var i1745 = i1739[2]
  var i1744 = []
  for(var i = 0; i < i1745.length; i += 1) {
    i1744.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i1745[i + 0]) );
  }
  i1738.cullingLayers = i1744
  i1738.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i1739[3], i1738.timeSettings)
  i1738.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i1739[4], i1738.physicsSettings)
  i1738.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i1739[5], i1738.physics2DSettings)
  i1738.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i1739[6], i1738.qualitySettings)
  i1738.enableRealtimeShadows = !!i1739[7]
  i1738.enableAutoInstancing = !!i1739[8]
  i1738.enableStaticBatching = !!i1739[9]
  i1738.enableDynamicBatching = !!i1739[10]
  i1738.usePreservativeDynamicBatching = !!i1739[11]
  i1738.lightmapEncodingQuality = i1739[12]
  i1738.desiredColorSpace = i1739[13]
  var i1747 = i1739[14]
  var i1746 = []
  for(var i = 0; i < i1747.length; i += 1) {
    i1746.push( i1747[i + 0] );
  }
  i1738.allTags = i1746
  return i1738
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i1750 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i1751 = data
  i1750.name = i1751[0]
  i1750.value = i1751[1]
  return i1750
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i1754 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i1755 = data
  i1754.id = i1755[0]
  i1754.name = i1755[1]
  i1754.value = i1755[2]
  return i1754
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i1758 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i1759 = data
  i1758.id = i1759[0]
  i1758.name = i1759[1]
  return i1758
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i1760 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i1761 = data
  i1760.fixedDeltaTime = i1761[0]
  i1760.maximumDeltaTime = i1761[1]
  i1760.timeScale = i1761[2]
  i1760.maximumParticleTimestep = i1761[3]
  return i1760
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i1762 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i1763 = data
  i1762.gravity = new pc.Vec3( i1763[0], i1763[1], i1763[2] )
  i1762.defaultSolverIterations = i1763[3]
  i1762.bounceThreshold = i1763[4]
  i1762.autoSyncTransforms = !!i1763[5]
  i1762.autoSimulation = !!i1763[6]
  var i1765 = i1763[7]
  var i1764 = []
  for(var i = 0; i < i1765.length; i += 1) {
    i1764.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i1765[i + 0]) );
  }
  i1762.collisionMatrix = i1764
  return i1762
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i1768 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i1769 = data
  i1768.enabled = !!i1769[0]
  i1768.layerId = i1769[1]
  i1768.otherLayerId = i1769[2]
  return i1768
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i1770 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i1771 = data
  request.r(i1771[0], i1771[1], 0, i1770, 'material')
  i1770.gravity = new pc.Vec2( i1771[2], i1771[3] )
  i1770.positionIterations = i1771[4]
  i1770.velocityIterations = i1771[5]
  i1770.velocityThreshold = i1771[6]
  i1770.maxLinearCorrection = i1771[7]
  i1770.maxAngularCorrection = i1771[8]
  i1770.maxTranslationSpeed = i1771[9]
  i1770.maxRotationSpeed = i1771[10]
  i1770.baumgarteScale = i1771[11]
  i1770.baumgarteTOIScale = i1771[12]
  i1770.timeToSleep = i1771[13]
  i1770.linearSleepTolerance = i1771[14]
  i1770.angularSleepTolerance = i1771[15]
  i1770.defaultContactOffset = i1771[16]
  i1770.autoSimulation = !!i1771[17]
  i1770.queriesHitTriggers = !!i1771[18]
  i1770.queriesStartInColliders = !!i1771[19]
  i1770.callbacksOnDisable = !!i1771[20]
  i1770.reuseCollisionCallbacks = !!i1771[21]
  i1770.autoSyncTransforms = !!i1771[22]
  var i1773 = i1771[23]
  var i1772 = []
  for(var i = 0; i < i1773.length; i += 1) {
    i1772.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i1773[i + 0]) );
  }
  i1770.collisionMatrix = i1772
  return i1770
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i1776 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i1777 = data
  i1776.enabled = !!i1777[0]
  i1776.layerId = i1777[1]
  i1776.otherLayerId = i1777[2]
  return i1776
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i1778 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i1779 = data
  var i1781 = i1779[0]
  var i1780 = []
  for(var i = 0; i < i1781.length; i += 1) {
    i1780.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i1781[i + 0]) );
  }
  i1778.qualityLevels = i1780
  var i1783 = i1779[1]
  var i1782 = []
  for(var i = 0; i < i1783.length; i += 1) {
    i1782.push( i1783[i + 0] );
  }
  i1778.names = i1782
  i1778.shadows = i1779[2]
  i1778.anisotropicFiltering = i1779[3]
  i1778.antiAliasing = i1779[4]
  i1778.lodBias = i1779[5]
  i1778.shadowCascades = i1779[6]
  i1778.shadowDistance = i1779[7]
  i1778.shadowmaskMode = i1779[8]
  i1778.shadowProjection = i1779[9]
  i1778.shadowResolution = i1779[10]
  i1778.softParticles = !!i1779[11]
  i1778.softVegetation = !!i1779[12]
  i1778.activeColorSpace = i1779[13]
  i1778.desiredColorSpace = i1779[14]
  i1778.masterTextureLimit = i1779[15]
  i1778.maxQueuedFrames = i1779[16]
  i1778.particleRaycastBudget = i1779[17]
  i1778.pixelLightCount = i1779[18]
  i1778.realtimeReflectionProbes = !!i1779[19]
  i1778.shadowCascade2Split = i1779[20]
  i1778.shadowCascade4Split = new pc.Vec3( i1779[21], i1779[22], i1779[23] )
  i1778.streamingMipmapsActive = !!i1779[24]
  i1778.vSyncCount = i1779[25]
  i1778.asyncUploadBufferSize = i1779[26]
  i1778.asyncUploadTimeSlice = i1779[27]
  i1778.billboardsFaceCameraPosition = !!i1779[28]
  i1778.shadowNearPlaneOffset = i1779[29]
  i1778.streamingMipmapsMemoryBudget = i1779[30]
  i1778.maximumLODLevel = i1779[31]
  i1778.streamingMipmapsAddAllCameras = !!i1779[32]
  i1778.streamingMipmapsMaxLevelReduction = i1779[33]
  i1778.streamingMipmapsRenderersPerFrame = i1779[34]
  i1778.resolutionScalingFixedDPIFactor = i1779[35]
  i1778.streamingMipmapsMaxFileIORequests = i1779[36]
  i1778.currentQualityLevel = i1779[37]
  return i1778
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame"] = function (request, data, root) {
  var i1788 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame' )
  var i1789 = data
  i1788.weight = i1789[0]
  i1788.vertices = i1789[1]
  i1788.normals = i1789[2]
  i1788.tangents = i1789[3]
  return i1788
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i1790 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i1791 = data
  request.r(i1791[0], i1791[1], 0, i1790, 'm_ObjectArgument')
  i1790.m_ObjectArgumentAssemblyTypeName = i1791[2]
  i1790.m_IntArgument = i1791[3]
  i1790.m_FloatArgument = i1791[4]
  i1790.m_StringArgument = i1791[5]
  i1790.m_BoolArgument = !!i1791[6]
  return i1790
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10,"graphicsFormat":11,"sRGBTexture":12,"desiredColorSpace":13,"wrapU":14,"wrapV":15},"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Components.Transform":{"position":0,"scale":3,"rotation":6},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystem":{"main":0,"colorBySpeed":1,"colorOverLifetime":2,"emission":3,"rotationBySpeed":4,"rotationOverLifetime":5,"shape":6,"sizeBySpeed":7,"sizeOverLifetime":8,"textureSheetAnimation":9,"velocityOverLifetime":10,"noise":11,"inheritVelocity":12,"forceOverLifetime":13,"limitVelocityOverLifetime":14,"useAutoRandomSeed":15,"randomSeed":16},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule":{"duration":0,"loop":1,"prewarm":2,"startDelay":3,"startLifetime":4,"startSpeed":5,"startSize3D":6,"startSizeX":7,"startSizeY":8,"startSizeZ":9,"startRotation3D":10,"startRotationX":11,"startRotationY":12,"startRotationZ":13,"startColor":14,"gravityModifier":15,"simulationSpace":16,"customSimulationSpace":17,"simulationSpeed":19,"useUnscaledTime":20,"scalingMode":21,"playOnAwake":22,"maxParticles":23,"emitterVelocityMode":24,"stopAction":25},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve":{"mode":0,"curveMin":1,"curveMax":2,"curveMultiplier":3,"constantMin":4,"constantMax":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient":{"mode":0,"gradientMin":1,"gradientMax":2,"colorMin":3,"colorMax":7},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient":{"mode":0,"colorKeys":1,"alphaKeys":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule":{"enabled":0,"color":1,"range":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey":{"color":0,"time":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey":{"alpha":0,"time":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule":{"enabled":0,"color":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule":{"enabled":0,"rateOverTime":1,"rateOverDistance":2,"bursts":3},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst":{"count":0,"cycleCount":1,"minCount":2,"maxCount":3,"repeatInterval":4,"time":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule":{"enabled":0,"shapeType":1,"randomDirectionAmount":2,"sphericalDirectionAmount":3,"randomPositionAmount":4,"alignToDirection":5,"radius":6,"radiusMode":7,"radiusSpread":8,"radiusSpeed":9,"radiusThickness":10,"angle":11,"length":12,"boxThickness":13,"meshShapeType":16,"mesh":17,"meshRenderer":19,"skinnedMeshRenderer":21,"useMeshMaterialIndex":23,"meshMaterialIndex":24,"useMeshColors":25,"normalOffset":26,"arc":27,"arcMode":28,"arcSpread":29,"arcSpeed":30,"donutRadius":31,"position":32,"rotation":35,"scale":38},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule":{"enabled":0,"mode":1,"animation":2,"numTilesX":3,"numTilesY":4,"useRandomRow":5,"frameOverTime":6,"startFrame":7,"cycleCount":8,"rowIndex":9,"flipU":10,"flipV":11,"spriteCount":12,"sprites":13},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"radial":4,"speedModifier":5,"space":6,"orbitalX":7,"orbitalY":8,"orbitalZ":9,"orbitalOffsetX":10,"orbitalOffsetY":11,"orbitalOffsetZ":12},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule":{"enabled":0,"separateAxes":1,"strengthX":2,"strengthY":3,"strengthZ":4,"frequency":5,"damping":6,"octaveCount":7,"octaveMultiplier":8,"octaveScale":9,"quality":10,"scrollSpeed":11,"scrollSpeedMultiplier":12,"remapEnabled":13,"remapX":14,"remapY":15,"remapZ":16,"positionAmount":17,"rotationAmount":18,"sizeAmount":19},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule":{"enabled":0,"mode":1,"curve":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"space":4,"randomized":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule":{"enabled":0,"limit":1,"limitX":2,"limitY":3,"limitZ":4,"dampen":5,"separateAxes":6,"space":7,"drag":8,"multiplyDragByParticleSize":9,"multiplyDragByParticleVelocity":10},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer":{"mesh":0,"meshCount":2,"activeVertexStreamsCount":3,"alignment":4,"renderMode":5,"sortMode":6,"lengthScale":7,"velocityScale":8,"cameraVelocityScale":9,"normalDirection":10,"sortingFudge":11,"minParticleSize":12,"maxParticleSize":13,"pivot":14,"trailMaterial":17,"applyActiveColorSpace":19,"enabled":20,"sharedMaterial":21,"sharedMaterials":23,"receiveShadows":24,"shadowCastingMode":25,"sortingLayerID":26,"sortingOrder":27,"lightmapIndex":28,"lightmapSceneIndex":29,"lightmapScaleOffset":30,"lightProbeUsage":34,"reflectionProbeUsage":35},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Assets.Mesh":{"name":0,"halfPrecision":1,"useSimplification":2,"useUInt32IndexFormat":3,"vertexCount":4,"aabb":5,"streams":6,"vertices":7,"subMeshes":8,"bindposes":9,"blendShapes":10},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh":{"triangles":0},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape":{"name":0,"frames":1},"Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer":{"color":0,"sprite":4,"flipX":6,"flipY":7,"drawMode":8,"size":9,"tileMode":11,"adaptiveModeThreshold":12,"maskInteraction":13,"spriteSortPoint":14,"enabled":15,"sharedMaterial":16,"sharedMaterials":18,"receiveShadows":19,"shadowCastingMode":20,"sortingLayerID":21,"sortingOrder":22,"lightmapIndex":23,"lightmapSceneIndex":24,"lightmapScaleOffset":25,"lightProbeUsage":29,"reflectionProbeUsage":30},"Luna.Unity.DTO.UnityEngine.Components.CircleCollider2D":{"radius":0,"enabled":1,"isTrigger":2,"usedByEffector":3,"density":4,"offset":5,"material":7},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"aspect":0,"orthographic":1,"orthographicSize":2,"backgroundColor":3,"nearClipPlane":7,"farClipPlane":8,"fieldOfView":9,"depth":10,"clearFlags":11,"cullingMask":12,"rect":13,"targetTexture":14,"usePhysicalProperties":16,"focalLength":17,"sensorSize":18,"lensShift":20,"gateFit":22,"commandBufferCount":23,"cameraType":24,"enabled":25},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"planeDistance":0,"referencePixelsPerUnit":1,"isFallbackOverlay":2,"renderMode":3,"renderOrder":4,"sortingLayerName":5,"sortingOrder":6,"scaleFactor":7,"worldCamera":8,"overrideSorting":10,"pixelPerfect":11,"targetDisplay":12,"overridePixelPerfect":13,"enabled":14},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D":{"usedByComposite":0,"autoTiling":1,"size":2,"edgeRadius":4,"enabled":5,"isTrigger":6,"usedByEffector":7,"density":8,"offset":9,"material":11},"Luna.Unity.DTO.UnityEngine.Components.Rigidbody2D":{"bodyType":0,"material":1,"simulated":3,"useAutoMass":4,"mass":5,"drag":6,"angularDrag":7,"gravityScale":8,"collisionDetectionMode":9,"sleepMode":10,"constraints":11},"Luna.Unity.DTO.UnityEngine.Components.SortingGroup":{"sortingLayerIndex":0,"sortingOrder":1,"sortingLayerName":2,"enabled":3},"Luna.Unity.DTO.UnityEngine.Components.HingeJoint2D":{"useLimits":0,"limits":1,"useMotor":2,"motor":3,"anchor":4,"connectedAnchor":6,"autoConfigureConnectedAnchor":8,"connectedBody":9,"breakForce":11,"breakTorque":12,"enableCollision":13,"enabled":14},"Luna.Unity.DTO.UnityEngine.Components.TargetJoint2D":{"autoConfigureTarget":0,"target":1,"anchor":3,"maxForce":5,"dampingRatio":6,"frequency":7,"connectedBody":8,"breakForce":10,"breakTorque":11,"enableCollision":12,"enabled":13},"Luna.Unity.DTO.UnityEngine.Components.AudioSource":{"clip":0,"outputAudioMixerGroup":2,"playOnAwake":4,"loop":5,"time":6,"volume":7,"pitch":8,"enabled":9},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"customReflection":36,"defaultReflection":38,"defaultReflectionMode":40,"defaultReflectionResolution":41,"sunLightObjectId":42,"pixelLightCount":43,"defaultReflectionHDR":44,"hasLightDataAsset":45,"hasManualGenerate":46},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2,"shadowMask":4},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"hasDepthOnlyPass":10,"isCreatedByShaderGraph":11,"disableBatching":12,"compiled":13},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"exportedForWebGl2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.AudioClip":{"name":0},"Luna.Unity.DTO.UnityEngine.Assets.Font":{"name":0,"ascent":1,"originalLineHeight":2,"fontSize":3,"characterInfo":4,"texture":5,"originalFontSize":7},"Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo":{"index":0,"advance":1,"bearing":2,"glyphWidth":3,"glyphHeight":4,"minX":5,"maxX":6,"minY":7,"maxY":8,"uvBottomLeftX":9,"uvBottomLeftY":10,"uvBottomRightX":11,"uvBottomRightY":12,"uvTopLeftX":13,"uvTopLeftY":14,"uvTopRightX":15,"uvTopRightY":16},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableStaticBatching":9,"enableDynamicBatching":10,"usePreservativeDynamicBatching":11,"lightmapEncodingQuality":12,"desiredColorSpace":13,"allTags":14},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame":{"weight":0,"vertices":1,"normals":2,"tangents":3}}

Deserializers.requiredComponents = {"55":[56],"57":[56],"58":[56],"59":[56],"60":[56],"61":[56],"62":[63],"64":[12],"65":[66],"67":[66],"68":[66],"69":[66],"70":[66],"71":[66],"72":[34],"73":[34],"74":[34],"75":[34],"76":[34],"77":[34],"40":[34],"78":[34],"79":[34],"41":[34],"80":[34],"81":[34],"82":[34],"83":[12],"84":[85],"86":[87],"88":[87],"18":[17],"89":[7],"90":[12],"91":[92],"93":[17],"94":[21,17],"95":[85],"96":[21,17],"97":[17],"98":[17],"99":[85,17],"100":[17,21],"101":[102],"103":[102],"104":[102],"105":[17],"106":[17],"20":[18],"28":[21,17],"24":[17],"19":[18],"107":[17],"108":[17],"109":[17],"110":[17],"111":[17],"112":[17],"113":[17],"114":[17],"115":[17],"22":[21,17],"116":[17],"117":[17],"118":[17],"119":[17],"25":[21,17],"120":[17],"121":[15],"122":[15],"16":[15],"123":[15],"124":[12],"125":[12]}

Deserializers.types = ["UnityEngine.Shader","UnityEngine.Transform","UnityEngine.ParticleSystem","UnityEngine.Sprite","UnityEngine.ParticleSystemRenderer","UnityEngine.Mesh","UnityEngine.Material","UnityEngine.SpriteRenderer","UnityEngine.CircleCollider2D","UnityEngine.MonoBehaviour","BulletController","UnityEngine.AudioClip","UnityEngine.Camera","UnityEngine.AudioListener","UnityEngine.EventSystems.UIBehaviour","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","UnityEngine.RectTransform","UnityEngine.Canvas","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","UnityEngine.CanvasRenderer","UnityEngine.UI.RawImage","UnityEngine.Texture2D","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.Text","UnityEngine.Font","DG.Tweening.DOTweenAnimation","UnityEngine.UI.Image","UnityEngine.UI.Button","TutController","UnityEngine.BoxCollider2D","BlockController","UnityEngine.GameObject","UnityEngine.Rigidbody2D","LandmineController","SmokeController","TriggerMonster","UnityEngine.Rendering.SortingGroup","PlayerController","UnityEngine.HingeJoint2D","UnityEngine.TargetJoint2D","ShootController","BalanceController","MonsterController","MonsterMove","MonsterTarget","MonsterAnimation","UnityEngine.AudioSource","GameController","LayoutController","LunaController","AudioController","VFXController","DG.Tweening.Core.DOTweenSettings","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.SkinnedMeshRenderer","UnityEngine.FlareLayer","UnityEngine.CharacterJoint","UnityEngine.Rigidbody","UnityEngine.ConfigurableJoint","UnityEngine.ConstantForce","UnityEngine.FixedJoint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.CompositeCollider2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.MeshRenderer","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","UnityEngine.U2D.Animation.SpriteSkin","UnityEngine.U2D.PixelPerfectCamera","UnityEngine.U2D.SpriteShapeController","UnityEngine.U2D.SpriteShapeRenderer","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text","TMPro.TextContainer","TMPro.TextMeshPro","TMPro.TextMeshProUGUI","Unity.VisualScripting.SceneVariables","Unity.VisualScripting.Variables","Unity.VisualScripting.ScriptMachine","Unity.VisualScripting.StateMachine","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.Mask","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RectMask2D","UnityEngine.UI.ScrollRect","UnityEngine.UI.Scrollbar","UnityEngine.UI.Slider","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster"]

Deserializers.unityVersion = "6000.0.78f1";

Deserializers.productName = "SSP_Luna-SSP_V03";

Deserializers.lunaInitializationTime = "08/17/2026 08:51:04";

Deserializers.lunaDaysRunning = "0.0";

Deserializers.lunaVersion = "7.2.0";

Deserializers.lunaSHA = "ea08d29afe2968efcb8d91d5624f033c6485cc68";

Deserializers.creativeName = "SSP_V05_YenTTH_TamNTM";

Deserializers.lunaAppID = "40364";

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

Deserializers.runtimeAnalysisExcludedClassesCount = "1755";

Deserializers.runtimeAnalysisExcludedMethodsCount = "4460";

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

Deserializers.buildID = "c982a3f4-d94e-4daa-ace5-75dd9c0dada2";

Deserializers.runtimeInitializeOnLoadInfos = [[["Unity","PerformanceTesting","PerformanceTest","ResetStaticsOnLoad"],["UnityEngine","U2D","Animation","GpuDeformationSystem","CreateFallbackBuffer"],["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"],["UnityEngine","AI","NavMesh","ClearPreUpdateListeners"]],[["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"]],[],[["Unity","PerformanceTesting","Data","RunSettings","ResetStaticsOnLoad"],["Unity","PerformanceTesting","PlayerCallbacks","ResetStaticsOnLoad"]]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

