var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i554 = root || request.c( 'UnityEngine.JointSpring' )
  var i555 = data
  i554.spring = i555[0]
  i554.damper = i555[1]
  i554.targetPosition = i555[2]
  return i554
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i556 = root || request.c( 'UnityEngine.JointMotor' )
  var i557 = data
  i556.m_TargetVelocity = i557[0]
  i556.m_Force = i557[1]
  i556.m_FreeSpin = i557[2]
  return i556
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i558 = root || request.c( 'UnityEngine.JointLimits' )
  var i559 = data
  i558.m_Min = i559[0]
  i558.m_Max = i559[1]
  i558.m_Bounciness = i559[2]
  i558.m_BounceMinVelocity = i559[3]
  i558.m_ContactDistance = i559[4]
  i558.minBounce = i559[5]
  i558.maxBounce = i559[6]
  return i558
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i560 = root || request.c( 'UnityEngine.JointDrive' )
  var i561 = data
  i560.m_PositionSpring = i561[0]
  i560.m_PositionDamper = i561[1]
  i560.m_MaximumForce = i561[2]
  i560.m_UseAcceleration = i561[3]
  return i560
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i562 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i563 = data
  i562.m_Spring = i563[0]
  i562.m_Damper = i563[1]
  return i562
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i564 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i565 = data
  i564.m_Limit = i565[0]
  i564.m_Bounciness = i565[1]
  i564.m_ContactDistance = i565[2]
  return i564
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i566 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i567 = data
  i566.m_ExtremumSlip = i567[0]
  i566.m_ExtremumValue = i567[1]
  i566.m_AsymptoteSlip = i567[2]
  i566.m_AsymptoteValue = i567[3]
  i566.m_Stiffness = i567[4]
  return i566
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i568 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i569 = data
  i568.m_LowerAngle = i569[0]
  i568.m_UpperAngle = i569[1]
  return i568
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i570 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i571 = data
  i570.m_MotorSpeed = i571[0]
  i570.m_MaximumMotorTorque = i571[1]
  return i570
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i572 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i573 = data
  i572.m_DampingRatio = i573[0]
  i572.m_Frequency = i573[1]
  i572.m_Angle = i573[2]
  return i572
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i574 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i575 = data
  i574.m_LowerTranslation = i575[0]
  i574.m_UpperTranslation = i575[1]
  return i574
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i576 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i577 = data
  i576.name = i577[0]
  i576.width = i577[1]
  i576.height = i577[2]
  i576.mipmapCount = i577[3]
  i576.anisoLevel = i577[4]
  i576.filterMode = i577[5]
  i576.hdr = !!i577[6]
  i576.format = i577[7]
  i576.wrapMode = i577[8]
  i576.alphaIsTransparency = !!i577[9]
  i576.alphaSource = i577[10]
  i576.graphicsFormat = i577[11]
  i576.sRGBTexture = !!i577[12]
  i576.desiredColorSpace = i577[13]
  i576.wrapU = i577[14]
  i576.wrapV = i577[15]
  return i576
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i578 = root || new pc.UnityMaterial()
  var i579 = data
  i578.name = i579[0]
  request.r(i579[1], i579[2], 0, i578, 'shader')
  i578.renderQueue = i579[3]
  i578.enableInstancing = !!i579[4]
  var i581 = i579[5]
  var i580 = []
  for(var i = 0; i < i581.length; i += 1) {
    i580.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i581[i + 0]) );
  }
  i578.floatParameters = i580
  var i583 = i579[6]
  var i582 = []
  for(var i = 0; i < i583.length; i += 1) {
    i582.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i583[i + 0]) );
  }
  i578.colorParameters = i582
  var i585 = i579[7]
  var i584 = []
  for(var i = 0; i < i585.length; i += 1) {
    i584.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i585[i + 0]) );
  }
  i578.vectorParameters = i584
  var i587 = i579[8]
  var i586 = []
  for(var i = 0; i < i587.length; i += 1) {
    i586.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i587[i + 0]) );
  }
  i578.textureParameters = i586
  var i589 = i579[9]
  var i588 = []
  for(var i = 0; i < i589.length; i += 1) {
    i588.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i589[i + 0]) );
  }
  i578.materialFlags = i588
  return i578
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i592 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i593 = data
  i592.name = i593[0]
  i592.value = i593[1]
  return i592
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i596 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i597 = data
  i596.name = i597[0]
  i596.value = new pc.Color(i597[1], i597[2], i597[3], i597[4])
  return i596
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i600 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i601 = data
  i600.name = i601[0]
  i600.value = new pc.Vec4( i601[1], i601[2], i601[3], i601[4] )
  return i600
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i604 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i605 = data
  i604.name = i605[0]
  request.r(i605[1], i605[2], 0, i604, 'value')
  return i604
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i608 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i609 = data
  i608.name = i609[0]
  i608.enabled = !!i609[1]
  return i608
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh"] = function (request, data, root) {
  var i610 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh' )
  var i611 = data
  i610.name = i611[0]
  i610.halfPrecision = !!i611[1]
  i610.useSimplification = !!i611[2]
  i610.useUInt32IndexFormat = !!i611[3]
  i610.vertexCount = i611[4]
  i610.aabb = i611[5]
  var i613 = i611[6]
  var i612 = []
  for(var i = 0; i < i613.length; i += 1) {
    i612.push( !!i613[i + 0] );
  }
  i610.streams = i612
  i610.vertices = i611[7]
  var i615 = i611[8]
  var i614 = []
  for(var i = 0; i < i615.length; i += 1) {
    i614.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh', i615[i + 0]) );
  }
  i610.subMeshes = i614
  var i617 = i611[9]
  var i616 = []
  for(var i = 0; i < i617.length; i += 16) {
    i616.push( new pc.Mat4().setData(i617[i + 0], i617[i + 1], i617[i + 2], i617[i + 3],  i617[i + 4], i617[i + 5], i617[i + 6], i617[i + 7],  i617[i + 8], i617[i + 9], i617[i + 10], i617[i + 11],  i617[i + 12], i617[i + 13], i617[i + 14], i617[i + 15]) );
  }
  i610.bindposes = i616
  var i619 = i611[10]
  var i618 = []
  for(var i = 0; i < i619.length; i += 1) {
    i618.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape', i619[i + 0]) );
  }
  i610.blendShapes = i618
  return i610
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh"] = function (request, data, root) {
  var i624 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh' )
  var i625 = data
  i624.triangles = i625[0]
  return i624
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape"] = function (request, data, root) {
  var i630 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape' )
  var i631 = data
  i630.name = i631[0]
  var i633 = i631[1]
  var i632 = []
  for(var i = 0; i < i633.length; i += 1) {
    i632.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame', i633[i + 0]) );
  }
  i630.frames = i632
  return i630
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i634 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i635 = data
  i634.position = new pc.Vec3( i635[0], i635[1], i635[2] )
  i634.scale = new pc.Vec3( i635[3], i635[4], i635[5] )
  i634.rotation = new pc.Quat(i635[6], i635[7], i635[8], i635[9])
  return i634
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystem"] = function (request, data, root) {
  var i636 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystem' )
  var i637 = data
  i636.main = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule', i637[0], i636.main)
  i636.colorBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule', i637[1], i636.colorBySpeed)
  i636.colorOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule', i637[2], i636.colorOverLifetime)
  i636.emission = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule', i637[3], i636.emission)
  i636.rotationBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule', i637[4], i636.rotationBySpeed)
  i636.rotationOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule', i637[5], i636.rotationOverLifetime)
  i636.shape = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule', i637[6], i636.shape)
  i636.sizeBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule', i637[7], i636.sizeBySpeed)
  i636.sizeOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule', i637[8], i636.sizeOverLifetime)
  i636.textureSheetAnimation = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule', i637[9], i636.textureSheetAnimation)
  i636.velocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule', i637[10], i636.velocityOverLifetime)
  i636.noise = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule', i637[11], i636.noise)
  i636.inheritVelocity = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule', i637[12], i636.inheritVelocity)
  i636.forceOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule', i637[13], i636.forceOverLifetime)
  i636.limitVelocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule', i637[14], i636.limitVelocityOverLifetime)
  i636.useAutoRandomSeed = !!i637[15]
  i636.randomSeed = i637[16]
  return i636
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule"] = function (request, data, root) {
  var i638 = root || new pc.ParticleSystemMain()
  var i639 = data
  i638.duration = i639[0]
  i638.loop = !!i639[1]
  i638.prewarm = !!i639[2]
  i638.startDelay = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i639[3], i638.startDelay)
  i638.startLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i639[4], i638.startLifetime)
  i638.startSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i639[5], i638.startSpeed)
  i638.startSize3D = !!i639[6]
  i638.startSizeX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i639[7], i638.startSizeX)
  i638.startSizeY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i639[8], i638.startSizeY)
  i638.startSizeZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i639[9], i638.startSizeZ)
  i638.startRotation3D = !!i639[10]
  i638.startRotationX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i639[11], i638.startRotationX)
  i638.startRotationY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i639[12], i638.startRotationY)
  i638.startRotationZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i639[13], i638.startRotationZ)
  i638.startColor = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i639[14], i638.startColor)
  i638.gravityModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i639[15], i638.gravityModifier)
  i638.simulationSpace = i639[16]
  request.r(i639[17], i639[18], 0, i638, 'customSimulationSpace')
  i638.simulationSpeed = i639[19]
  i638.useUnscaledTime = !!i639[20]
  i638.scalingMode = i639[21]
  i638.playOnAwake = !!i639[22]
  i638.maxParticles = i639[23]
  i638.emitterVelocityMode = i639[24]
  i638.stopAction = i639[25]
  return i638
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve"] = function (request, data, root) {
  var i640 = root || new pc.MinMaxCurve()
  var i641 = data
  i640.mode = i641[0]
  i640.curveMin = new pc.AnimationCurve( { keys_flow: i641[1] } )
  i640.curveMax = new pc.AnimationCurve( { keys_flow: i641[2] } )
  i640.curveMultiplier = i641[3]
  i640.constantMin = i641[4]
  i640.constantMax = i641[5]
  return i640
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient"] = function (request, data, root) {
  var i642 = root || new pc.MinMaxGradient()
  var i643 = data
  i642.mode = i643[0]
  i642.gradientMin = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i643[1], i642.gradientMin)
  i642.gradientMax = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i643[2], i642.gradientMax)
  i642.colorMin = new pc.Color(i643[3], i643[4], i643[5], i643[6])
  i642.colorMax = new pc.Color(i643[7], i643[8], i643[9], i643[10])
  return i642
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient"] = function (request, data, root) {
  var i644 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient' )
  var i645 = data
  i644.mode = i645[0]
  var i647 = i645[1]
  var i646 = []
  for(var i = 0; i < i647.length; i += 1) {
    i646.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey', i647[i + 0]) );
  }
  i644.colorKeys = i646
  var i649 = i645[2]
  var i648 = []
  for(var i = 0; i < i649.length; i += 1) {
    i648.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey', i649[i + 0]) );
  }
  i644.alphaKeys = i648
  return i644
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule"] = function (request, data, root) {
  var i650 = root || new pc.ParticleSystemColorBySpeed()
  var i651 = data
  i650.enabled = !!i651[0]
  i650.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i651[1], i650.color)
  i650.range = new pc.Vec2( i651[2], i651[3] )
  return i650
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey"] = function (request, data, root) {
  var i654 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey' )
  var i655 = data
  i654.color = new pc.Color(i655[0], i655[1], i655[2], i655[3])
  i654.time = i655[4]
  return i654
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey"] = function (request, data, root) {
  var i658 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey' )
  var i659 = data
  i658.alpha = i659[0]
  i658.time = i659[1]
  return i658
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule"] = function (request, data, root) {
  var i660 = root || new pc.ParticleSystemColorOverLifetime()
  var i661 = data
  i660.enabled = !!i661[0]
  i660.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i661[1], i660.color)
  return i660
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule"] = function (request, data, root) {
  var i662 = root || new pc.ParticleSystemEmitter()
  var i663 = data
  i662.enabled = !!i663[0]
  i662.rateOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i663[1], i662.rateOverTime)
  i662.rateOverDistance = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i663[2], i662.rateOverDistance)
  var i665 = i663[3]
  var i664 = []
  for(var i = 0; i < i665.length; i += 1) {
    i664.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst', i665[i + 0]) );
  }
  i662.bursts = i664
  return i662
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst"] = function (request, data, root) {
  var i668 = root || new pc.ParticleSystemBurst()
  var i669 = data
  i668.count = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i669[0], i668.count)
  i668.cycleCount = i669[1]
  i668.minCount = i669[2]
  i668.maxCount = i669[3]
  i668.repeatInterval = i669[4]
  i668.time = i669[5]
  return i668
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule"] = function (request, data, root) {
  var i670 = root || new pc.ParticleSystemRotationBySpeed()
  var i671 = data
  i670.enabled = !!i671[0]
  i670.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i671[1], i670.x)
  i670.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i671[2], i670.y)
  i670.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i671[3], i670.z)
  i670.separateAxes = !!i671[4]
  i670.range = new pc.Vec2( i671[5], i671[6] )
  return i670
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule"] = function (request, data, root) {
  var i672 = root || new pc.ParticleSystemRotationOverLifetime()
  var i673 = data
  i672.enabled = !!i673[0]
  i672.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i673[1], i672.x)
  i672.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i673[2], i672.y)
  i672.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i673[3], i672.z)
  i672.separateAxes = !!i673[4]
  return i672
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule"] = function (request, data, root) {
  var i674 = root || new pc.ParticleSystemShape()
  var i675 = data
  i674.enabled = !!i675[0]
  i674.shapeType = i675[1]
  i674.randomDirectionAmount = i675[2]
  i674.sphericalDirectionAmount = i675[3]
  i674.randomPositionAmount = i675[4]
  i674.alignToDirection = !!i675[5]
  i674.radius = i675[6]
  i674.radiusMode = i675[7]
  i674.radiusSpread = i675[8]
  i674.radiusSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i675[9], i674.radiusSpeed)
  i674.radiusThickness = i675[10]
  i674.angle = i675[11]
  i674.length = i675[12]
  i674.boxThickness = new pc.Vec3( i675[13], i675[14], i675[15] )
  i674.meshShapeType = i675[16]
  request.r(i675[17], i675[18], 0, i674, 'mesh')
  request.r(i675[19], i675[20], 0, i674, 'meshRenderer')
  request.r(i675[21], i675[22], 0, i674, 'skinnedMeshRenderer')
  i674.useMeshMaterialIndex = !!i675[23]
  i674.meshMaterialIndex = i675[24]
  i674.useMeshColors = !!i675[25]
  i674.normalOffset = i675[26]
  i674.arc = i675[27]
  i674.arcMode = i675[28]
  i674.arcSpread = i675[29]
  i674.arcSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i675[30], i674.arcSpeed)
  i674.donutRadius = i675[31]
  i674.position = new pc.Vec3( i675[32], i675[33], i675[34] )
  i674.rotation = new pc.Vec3( i675[35], i675[36], i675[37] )
  i674.scale = new pc.Vec3( i675[38], i675[39], i675[40] )
  return i674
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule"] = function (request, data, root) {
  var i676 = root || new pc.ParticleSystemSizeBySpeed()
  var i677 = data
  i676.enabled = !!i677[0]
  i676.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i677[1], i676.x)
  i676.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i677[2], i676.y)
  i676.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i677[3], i676.z)
  i676.separateAxes = !!i677[4]
  i676.range = new pc.Vec2( i677[5], i677[6] )
  return i676
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule"] = function (request, data, root) {
  var i678 = root || new pc.ParticleSystemSizeOverLifetime()
  var i679 = data
  i678.enabled = !!i679[0]
  i678.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i679[1], i678.x)
  i678.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i679[2], i678.y)
  i678.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i679[3], i678.z)
  i678.separateAxes = !!i679[4]
  return i678
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule"] = function (request, data, root) {
  var i680 = root || new pc.ParticleSystemTextureSheetAnimation()
  var i681 = data
  i680.enabled = !!i681[0]
  i680.mode = i681[1]
  i680.animation = i681[2]
  i680.numTilesX = i681[3]
  i680.numTilesY = i681[4]
  i680.useRandomRow = !!i681[5]
  i680.frameOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i681[6], i680.frameOverTime)
  i680.startFrame = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i681[7], i680.startFrame)
  i680.cycleCount = i681[8]
  i680.rowIndex = i681[9]
  i680.flipU = i681[10]
  i680.flipV = i681[11]
  i680.spriteCount = i681[12]
  var i683 = i681[13]
  var i682 = []
  for(var i = 0; i < i683.length; i += 2) {
  request.r(i683[i + 0], i683[i + 1], 2, i682, '')
  }
  i680.sprites = i682
  return i680
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule"] = function (request, data, root) {
  var i686 = root || new pc.ParticleSystemVelocityOverLifetime()
  var i687 = data
  i686.enabled = !!i687[0]
  i686.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i687[1], i686.x)
  i686.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i687[2], i686.y)
  i686.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i687[3], i686.z)
  i686.radial = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i687[4], i686.radial)
  i686.speedModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i687[5], i686.speedModifier)
  i686.space = i687[6]
  i686.orbitalX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i687[7], i686.orbitalX)
  i686.orbitalY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i687[8], i686.orbitalY)
  i686.orbitalZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i687[9], i686.orbitalZ)
  i686.orbitalOffsetX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i687[10], i686.orbitalOffsetX)
  i686.orbitalOffsetY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i687[11], i686.orbitalOffsetY)
  i686.orbitalOffsetZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i687[12], i686.orbitalOffsetZ)
  return i686
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule"] = function (request, data, root) {
  var i688 = root || new pc.ParticleSystemNoise()
  var i689 = data
  i688.enabled = !!i689[0]
  i688.separateAxes = !!i689[1]
  i688.strengthX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i689[2], i688.strengthX)
  i688.strengthY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i689[3], i688.strengthY)
  i688.strengthZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i689[4], i688.strengthZ)
  i688.frequency = i689[5]
  i688.damping = !!i689[6]
  i688.octaveCount = i689[7]
  i688.octaveMultiplier = i689[8]
  i688.octaveScale = i689[9]
  i688.quality = i689[10]
  i688.scrollSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i689[11], i688.scrollSpeed)
  i688.scrollSpeedMultiplier = i689[12]
  i688.remapEnabled = !!i689[13]
  i688.remapX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i689[14], i688.remapX)
  i688.remapY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i689[15], i688.remapY)
  i688.remapZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i689[16], i688.remapZ)
  i688.positionAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i689[17], i688.positionAmount)
  i688.rotationAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i689[18], i688.rotationAmount)
  i688.sizeAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i689[19], i688.sizeAmount)
  return i688
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule"] = function (request, data, root) {
  var i690 = root || new pc.ParticleSystemInheritVelocity()
  var i691 = data
  i690.enabled = !!i691[0]
  i690.mode = i691[1]
  i690.curve = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i691[2], i690.curve)
  return i690
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule"] = function (request, data, root) {
  var i692 = root || new pc.ParticleSystemForceOverLifetime()
  var i693 = data
  i692.enabled = !!i693[0]
  i692.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i693[1], i692.x)
  i692.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i693[2], i692.y)
  i692.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i693[3], i692.z)
  i692.space = i693[4]
  i692.randomized = !!i693[5]
  return i692
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule"] = function (request, data, root) {
  var i694 = root || new pc.ParticleSystemLimitVelocityOverLifetime()
  var i695 = data
  i694.enabled = !!i695[0]
  i694.limit = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i695[1], i694.limit)
  i694.limitX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i695[2], i694.limitX)
  i694.limitY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i695[3], i694.limitY)
  i694.limitZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i695[4], i694.limitZ)
  i694.dampen = i695[5]
  i694.separateAxes = !!i695[6]
  i694.space = i695[7]
  i694.drag = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i695[8], i694.drag)
  i694.multiplyDragByParticleSize = !!i695[9]
  i694.multiplyDragByParticleVelocity = !!i695[10]
  return i694
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer"] = function (request, data, root) {
  var i696 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer' )
  var i697 = data
  request.r(i697[0], i697[1], 0, i696, 'mesh')
  i696.meshCount = i697[2]
  i696.activeVertexStreamsCount = i697[3]
  i696.alignment = i697[4]
  i696.renderMode = i697[5]
  i696.sortMode = i697[6]
  i696.lengthScale = i697[7]
  i696.velocityScale = i697[8]
  i696.cameraVelocityScale = i697[9]
  i696.normalDirection = i697[10]
  i696.sortingFudge = i697[11]
  i696.minParticleSize = i697[12]
  i696.maxParticleSize = i697[13]
  i696.pivot = new pc.Vec3( i697[14], i697[15], i697[16] )
  request.r(i697[17], i697[18], 0, i696, 'trailMaterial')
  i696.applyActiveColorSpace = !!i697[19]
  i696.enabled = !!i697[20]
  request.r(i697[21], i697[22], 0, i696, 'sharedMaterial')
  var i699 = i697[23]
  var i698 = []
  for(var i = 0; i < i699.length; i += 2) {
  request.r(i699[i + 0], i699[i + 1], 2, i698, '')
  }
  i696.sharedMaterials = i698
  i696.receiveShadows = !!i697[24]
  i696.shadowCastingMode = i697[25]
  i696.sortingLayerID = i697[26]
  i696.sortingOrder = i697[27]
  i696.lightmapIndex = i697[28]
  i696.lightmapSceneIndex = i697[29]
  i696.lightmapScaleOffset = new pc.Vec4( i697[30], i697[31], i697[32], i697[33] )
  i696.lightProbeUsage = i697[34]
  i696.reflectionProbeUsage = i697[35]
  return i696
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i702 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i703 = data
  i702.name = i703[0]
  i702.tagId = i703[1]
  i702.enabled = !!i703[2]
  i702.isStatic = !!i703[3]
  i702.layer = i703[4]
  return i702
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Cubemap"] = function (request, data, root) {
  var i704 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Cubemap' )
  var i705 = data
  i704.name = i705[0]
  i704.atlasId = i705[1]
  i704.mipmapCount = i705[2]
  i704.hdr = !!i705[3]
  i704.size = i705[4]
  i704.anisoLevel = i705[5]
  i704.filterMode = i705[6]
  var i707 = i705[7]
  var i706 = []
  for(var i = 0; i < i707.length; i += 4) {
    i706.push( UnityEngine.Rect.MinMaxRect(i707[i + 0], i707[i + 1], i707[i + 2], i707[i + 3]) );
  }
  i704.rects = i706
  i704.wrapU = i705[8]
  i704.wrapV = i705[9]
  return i704
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i710 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i711 = data
  i710.name = i711[0]
  i710.index = i711[1]
  i710.startup = !!i711[2]
  return i710
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i712 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i713 = data
  i712.aspect = i713[0]
  i712.orthographic = !!i713[1]
  i712.orthographicSize = i713[2]
  i712.backgroundColor = new pc.Color(i713[3], i713[4], i713[5], i713[6])
  i712.nearClipPlane = i713[7]
  i712.farClipPlane = i713[8]
  i712.fieldOfView = i713[9]
  i712.depth = i713[10]
  i712.clearFlags = i713[11]
  i712.cullingMask = i713[12]
  i712.rect = i713[13]
  request.r(i713[14], i713[15], 0, i712, 'targetTexture')
  i712.usePhysicalProperties = !!i713[16]
  i712.focalLength = i713[17]
  i712.sensorSize = new pc.Vec2( i713[18], i713[19] )
  i712.lensShift = new pc.Vec2( i713[20], i713[21] )
  i712.gateFit = i713[22]
  i712.commandBufferCount = i713[23]
  i712.cameraType = i713[24]
  i712.enabled = !!i713[25]
  return i712
}

Deserializers["CameraController"] = function (request, data, root) {
  var i714 = root || request.c( 'CameraController' )
  var i715 = data
  request.r(i715[0], i715[1], 0, i714, 'cam')
  i714.por = i715[2]
  i714.land = i715[3]
  return i714
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i716 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i717 = data
  request.r(i717[0], i717[1], 0, i716, 'm_FirstSelected')
  i716.m_sendNavigationEvents = !!i717[2]
  i716.m_DragThreshold = i717[3]
  return i716
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i718 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i719 = data
  i718.m_HorizontalAxis = i719[0]
  i718.m_VerticalAxis = i719[1]
  i718.m_SubmitButton = i719[2]
  i718.m_CancelButton = i719[3]
  i718.m_InputActionsPerSecond = i719[4]
  i718.m_RepeatDelay = i719[5]
  i718.m_ForceModuleActive = !!i719[6]
  i718.m_SendPointerHoverToParent = !!i719[7]
  return i718
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Light"] = function (request, data, root) {
  var i720 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Light' )
  var i721 = data
  i720.type = i721[0]
  i720.color = new pc.Color(i721[1], i721[2], i721[3], i721[4])
  i720.cullingMask = i721[5]
  i720.intensity = i721[6]
  i720.range = i721[7]
  i720.spotAngle = i721[8]
  i720.shadows = i721[9]
  i720.shadowNormalBias = i721[10]
  i720.shadowBias = i721[11]
  i720.shadowStrength = i721[12]
  i720.shadowResolution = i721[13]
  i720.lightmapBakeType = i721[14]
  i720.renderMode = i721[15]
  request.r(i721[16], i721[17], 0, i720, 'cookie')
  i720.cookieSize = i721[18]
  i720.shadowNearPlane = i721[19]
  i720.occlusionMaskChannel = i721[20]
  i720.isBaked = !!i721[21]
  i720.mixedLightingMode = i721[22]
  i720.enabled = !!i721[23]
  return i720
}

Deserializers["GameController"] = function (request, data, root) {
  var i722 = root || request.c( 'GameController' )
  var i723 = data
  i722.currentPhase = i723[0]
  var i725 = i723[1]
  var i724 = new (System.Collections.Generic.List$1(Bridge.ns('Phase')))
  for(var i = 0; i < i725.length; i += 1) {
    i724.add(request.d('Phase', i725[i + 0]));
  }
  i722.phases = i724
  var i727 = i723[2]
  var i726 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.UI.Button')))
  for(var i = 0; i < i727.length; i += 2) {
  request.r(i727[i + 0], i727[i + 1], 1, i726, '')
  }
  i722.nextButton = i726
  request.r(i723[3], i723[4], 0, i722, 'nextSound')
  return i722
}

Deserializers["Phase"] = function (request, data, root) {
  var i730 = root || request.c( 'Phase' )
  var i731 = data
  request.r(i731[0], i731[1], 0, i730, 'Game')
  request.r(i731[2], i731[3], 0, i730, 'UI')
  return i730
}

Deserializers["LunaController"] = function (request, data, root) {
  var i734 = root || request.c( 'LunaController' )
  var i735 = data
  i734.PortraitCameraZoom = i735[0]
  i734.LandscapeCameraZoom = i735[1]
  i734.TimePlay = i735[2]
  i734.LimitTimePlay = !!i735[3]
  i734.UseCustomBG = !!i735[4]
  request.r(i735[5], i735[6], 0, i734, 'BGTexture')
  request.r(i735[7], i735[8], 0, i734, 'BGM')
  i734.Phase1TextColor = new pc.Color(i735[9], i735[10], i735[11], i735[12])
  i734.Phase2TextColor = new pc.Color(i735[13], i735[14], i735[15], i735[16])
  i734.Phase3TextColor = new pc.Color(i735[17], i735[18], i735[19], i735[20])
  request.r(i735[21], i735[22], 0, i734, 'cam')
  request.r(i735[23], i735[24], 0, i734, 'phase1Text')
  request.r(i735[25], i735[26], 0, i734, 'phase2Text')
  request.r(i735[27], i735[28], 0, i734, 'phase3Text')
  request.r(i735[29], i735[30], 0, i734, 'BGImage')
  request.r(i735[31], i735[32], 0, i734, 'musicSource')
  var i737 = i735[33]
  var i736 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.UI.Button')))
  for(var i = 0; i < i737.length; i += 2) {
  request.r(i737[i + 0], i737[i + 1], 1, i736, '')
  }
  i734.CTA = i736
  return i734
}

Deserializers["AudioController"] = function (request, data, root) {
  var i738 = root || request.c( 'AudioController' )
  var i739 = data
  request.r(i739[0], i739[1], 0, i738, 'poolParent')
  i738.startSize = i739[2]
  return i738
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.AudioSource"] = function (request, data, root) {
  var i740 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.AudioSource' )
  var i741 = data
  request.r(i741[0], i741[1], 0, i740, 'clip')
  request.r(i741[2], i741[3], 0, i740, 'outputAudioMixerGroup')
  i740.playOnAwake = !!i741[4]
  i740.loop = !!i741[5]
  i740.time = i741[6]
  i740.volume = i741[7]
  i740.pitch = i741[8]
  i740.enabled = !!i741[9]
  return i740
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i742 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i743 = data
  i742.pivot = new pc.Vec2( i743[0], i743[1] )
  i742.anchorMin = new pc.Vec2( i743[2], i743[3] )
  i742.anchorMax = new pc.Vec2( i743[4], i743[5] )
  i742.sizeDelta = new pc.Vec2( i743[6], i743[7] )
  i742.anchoredPosition3D = new pc.Vec3( i743[8], i743[9], i743[10] )
  i742.rotation = new pc.Quat(i743[11], i743[12], i743[13], i743[14])
  i742.scale = new pc.Vec3( i743[15], i743[16], i743[17] )
  return i742
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i744 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i745 = data
  i744.planeDistance = i745[0]
  i744.referencePixelsPerUnit = i745[1]
  i744.isFallbackOverlay = !!i745[2]
  i744.renderMode = i745[3]
  i744.renderOrder = i745[4]
  i744.sortingLayerName = i745[5]
  i744.sortingOrder = i745[6]
  i744.scaleFactor = i745[7]
  request.r(i745[8], i745[9], 0, i744, 'worldCamera')
  i744.overrideSorting = !!i745[10]
  i744.pixelPerfect = !!i745[11]
  i744.targetDisplay = i745[12]
  i744.overridePixelPerfect = !!i745[13]
  i744.enabled = !!i745[14]
  return i744
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i746 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i747 = data
  i746.m_UiScaleMode = i747[0]
  i746.m_ReferencePixelsPerUnit = i747[1]
  i746.m_ScaleFactor = i747[2]
  i746.m_ReferenceResolution = new pc.Vec2( i747[3], i747[4] )
  i746.m_ScreenMatchMode = i747[5]
  i746.m_MatchWidthOrHeight = i747[6]
  i746.m_PhysicalUnit = i747[7]
  i746.m_FallbackScreenDPI = i747[8]
  i746.m_DefaultSpriteDPI = i747[9]
  i746.m_DynamicPixelsPerUnit = i747[10]
  i746.m_PresetInfoIsWorld = !!i747[11]
  return i746
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i748 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i749 = data
  i748.m_IgnoreReversedGraphics = !!i749[0]
  i748.m_BlockingObjects = i749[1]
  i748.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i749[2] )
  return i748
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i750 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i751 = data
  i750.cullTransparentMesh = !!i751[0]
  return i750
}

Deserializers["UnityEngine.UI.Text"] = function (request, data, root) {
  var i752 = root || request.c( 'UnityEngine.UI.Text' )
  var i753 = data
  i752.m_FontData = request.d('UnityEngine.UI.FontData', i753[0], i752.m_FontData)
  i752.m_Text = i753[1]
  request.r(i753[2], i753[3], 0, i752, 'm_Material')
  i752.m_Maskable = !!i753[4]
  i752.m_Color = new pc.Color(i753[5], i753[6], i753[7], i753[8])
  i752.m_RaycastTarget = !!i753[9]
  i752.m_RaycastPadding = new pc.Vec4( i753[10], i753[11], i753[12], i753[13] )
  return i752
}

Deserializers["UnityEngine.UI.FontData"] = function (request, data, root) {
  var i754 = root || request.c( 'UnityEngine.UI.FontData' )
  var i755 = data
  request.r(i755[0], i755[1], 0, i754, 'm_Font')
  i754.m_FontSize = i755[2]
  i754.m_FontStyle = i755[3]
  i754.m_BestFit = !!i755[4]
  i754.m_MinSize = i755[5]
  i754.m_MaxSize = i755[6]
  i754.m_Alignment = i755[7]
  i754.m_AlignByGeometry = !!i755[8]
  i754.m_RichText = !!i755[9]
  i754.m_HorizontalOverflow = i755[10]
  i754.m_VerticalOverflow = i755[11]
  i754.m_LineSpacing = i755[12]
  return i754
}

Deserializers["DG.Tweening.DOTweenAnimation"] = function (request, data, root) {
  var i756 = root || request.c( 'DG.Tweening.DOTweenAnimation' )
  var i757 = data
  i756.targetIsSelf = !!i757[0]
  request.r(i757[1], i757[2], 0, i756, 'targetGO')
  i756.tweenTargetIsTargetGO = !!i757[3]
  i756.delay = i757[4]
  i756.duration = i757[5]
  i756.easeType = i757[6]
  i756.easeCurve = new pc.AnimationCurve( { keys_flow: i757[7] } )
  i756.loopType = i757[8]
  i756.loops = i757[9]
  i756.id = i757[10]
  i756.isRelative = !!i757[11]
  i756.isFrom = !!i757[12]
  i756.isIndependentUpdate = !!i757[13]
  i756.autoKill = !!i757[14]
  i756.autoGenerate = !!i757[15]
  i756.isActive = !!i757[16]
  i756.isValid = !!i757[17]
  request.r(i757[18], i757[19], 0, i756, 'target')
  i756.animationType = i757[20]
  i756.targetType = i757[21]
  i756.forcedTargetType = i757[22]
  i756.autoPlay = !!i757[23]
  i756.useTargetAsV3 = !!i757[24]
  i756.endValueFloat = i757[25]
  i756.endValueV3 = new pc.Vec3( i757[26], i757[27], i757[28] )
  i756.endValueV2 = new pc.Vec2( i757[29], i757[30] )
  i756.endValueColor = new pc.Color(i757[31], i757[32], i757[33], i757[34])
  i756.endValueString = i757[35]
  i756.endValueRect = UnityEngine.Rect.MinMaxRect(i757[36], i757[37], i757[38], i757[39])
  request.r(i757[40], i757[41], 0, i756, 'endValueTransform')
  i756.optionalBool0 = !!i757[42]
  i756.optionalBool1 = !!i757[43]
  i756.optionalFloat0 = i757[44]
  i756.optionalInt0 = i757[45]
  i756.optionalRotationMode = i757[46]
  i756.optionalScrambleMode = i757[47]
  i756.optionalShakeRandomnessMode = i757[48]
  i756.optionalString = i757[49]
  i756.updateType = i757[50]
  i756.isSpeedBased = !!i757[51]
  i756.hasOnStart = !!i757[52]
  i756.hasOnPlay = !!i757[53]
  i756.hasOnUpdate = !!i757[54]
  i756.hasOnStepComplete = !!i757[55]
  i756.hasOnComplete = !!i757[56]
  i756.hasOnTweenCreated = !!i757[57]
  i756.hasOnRewind = !!i757[58]
  i756.onStart = request.d('UnityEngine.Events.UnityEvent', i757[59], i756.onStart)
  i756.onPlay = request.d('UnityEngine.Events.UnityEvent', i757[60], i756.onPlay)
  i756.onUpdate = request.d('UnityEngine.Events.UnityEvent', i757[61], i756.onUpdate)
  i756.onStepComplete = request.d('UnityEngine.Events.UnityEvent', i757[62], i756.onStepComplete)
  i756.onComplete = request.d('UnityEngine.Events.UnityEvent', i757[63], i756.onComplete)
  i756.onTweenCreated = request.d('UnityEngine.Events.UnityEvent', i757[64], i756.onTweenCreated)
  i756.onRewind = request.d('UnityEngine.Events.UnityEvent', i757[65], i756.onRewind)
  return i756
}

Deserializers["UnityEngine.Events.UnityEvent"] = function (request, data, root) {
  var i758 = root || request.c( 'UnityEngine.Events.UnityEvent' )
  var i759 = data
  i758.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i759[0], i758.m_PersistentCalls)
  return i758
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i760 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i761 = data
  var i763 = i761[0]
  var i762 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i763.length; i += 1) {
    i762.add(request.d('UnityEngine.Events.PersistentCall', i763[i + 0]));
  }
  i760.m_Calls = i762
  return i760
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i766 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i767 = data
  request.r(i767[0], i767[1], 0, i766, 'm_Target')
  i766.m_TargetAssemblyTypeName = i767[2]
  i766.m_MethodName = i767[3]
  i766.m_Mode = i767[4]
  i766.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i767[5], i766.m_Arguments)
  i766.m_CallState = i767[6]
  return i766
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i768 = root || request.c( 'UnityEngine.UI.Button' )
  var i769 = data
  i768.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i769[0], i768.m_OnClick)
  i768.m_Navigation = request.d('UnityEngine.UI.Navigation', i769[1], i768.m_Navigation)
  i768.m_Transition = i769[2]
  i768.m_Colors = request.d('UnityEngine.UI.ColorBlock', i769[3], i768.m_Colors)
  i768.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i769[4], i768.m_SpriteState)
  i768.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i769[5], i768.m_AnimationTriggers)
  i768.m_Interactable = !!i769[6]
  request.r(i769[7], i769[8], 0, i768, 'm_TargetGraphic')
  return i768
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i770 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i771 = data
  i770.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i771[0], i770.m_PersistentCalls)
  return i770
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i772 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i773 = data
  i772.m_Mode = i773[0]
  i772.m_WrapAround = !!i773[1]
  request.r(i773[2], i773[3], 0, i772, 'm_SelectOnUp')
  request.r(i773[4], i773[5], 0, i772, 'm_SelectOnDown')
  request.r(i773[6], i773[7], 0, i772, 'm_SelectOnLeft')
  request.r(i773[8], i773[9], 0, i772, 'm_SelectOnRight')
  return i772
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i774 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i775 = data
  i774.m_NormalColor = new pc.Color(i775[0], i775[1], i775[2], i775[3])
  i774.m_HighlightedColor = new pc.Color(i775[4], i775[5], i775[6], i775[7])
  i774.m_PressedColor = new pc.Color(i775[8], i775[9], i775[10], i775[11])
  i774.m_SelectedColor = new pc.Color(i775[12], i775[13], i775[14], i775[15])
  i774.m_DisabledColor = new pc.Color(i775[16], i775[17], i775[18], i775[19])
  i774.m_ColorMultiplier = i775[20]
  i774.m_FadeDuration = i775[21]
  return i774
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i776 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i777 = data
  request.r(i777[0], i777[1], 0, i776, 'm_HighlightedSprite')
  request.r(i777[2], i777[3], 0, i776, 'm_PressedSprite')
  request.r(i777[4], i777[5], 0, i776, 'm_SelectedSprite')
  request.r(i777[6], i777[7], 0, i776, 'm_DisabledSprite')
  return i776
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i778 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i779 = data
  i778.m_NormalTrigger = i779[0]
  i778.m_HighlightedTrigger = i779[1]
  i778.m_PressedTrigger = i779[2]
  i778.m_SelectedTrigger = i779[3]
  i778.m_DisabledTrigger = i779[4]
  return i778
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i780 = root || request.c( 'UnityEngine.UI.Image' )
  var i781 = data
  request.r(i781[0], i781[1], 0, i780, 'm_Sprite')
  i780.m_Type = i781[2]
  i780.m_PreserveAspect = !!i781[3]
  i780.m_FillCenter = !!i781[4]
  i780.m_FillMethod = i781[5]
  i780.m_FillAmount = i781[6]
  i780.m_FillClockwise = !!i781[7]
  i780.m_FillOrigin = i781[8]
  i780.m_UseSpriteMesh = !!i781[9]
  i780.m_PixelsPerUnitMultiplier = i781[10]
  request.r(i781[11], i781[12], 0, i780, 'm_Material')
  i780.m_Maskable = !!i781[13]
  i780.m_Color = new pc.Color(i781[14], i781[15], i781[16], i781[17])
  i780.m_RaycastTarget = !!i781[18]
  i780.m_RaycastPadding = new pc.Vec4( i781[19], i781[20], i781[21], i781[22] )
  return i780
}

Deserializers["UnityEngine.UI.RawImage"] = function (request, data, root) {
  var i782 = root || request.c( 'UnityEngine.UI.RawImage' )
  var i783 = data
  request.r(i783[0], i783[1], 0, i782, 'm_Texture')
  i782.m_UVRect = UnityEngine.Rect.MinMaxRect(i783[2], i783[3], i783[4], i783[5])
  request.r(i783[6], i783[7], 0, i782, 'm_Material')
  i782.m_Maskable = !!i783[8]
  i782.m_Color = new pc.Color(i783[9], i783[10], i783[11], i783[12])
  i782.m_RaycastTarget = !!i783[13]
  i782.m_RaycastPadding = new pc.Vec4( i783[14], i783[15], i783[16], i783[17] )
  return i782
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer"] = function (request, data, root) {
  var i784 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer' )
  var i785 = data
  request.r(i785[0], i785[1], 0, i784, 'sharedMesh')
  var i787 = i785[2]
  var i786 = []
  for(var i = 0; i < i787.length; i += 2) {
  request.r(i787[i + 0], i787[i + 1], 2, i786, '')
  }
  i784.bones = i786
  i784.updateWhenOffscreen = !!i785[3]
  i784.localBounds = i785[4]
  request.r(i785[5], i785[6], 0, i784, 'rootBone')
  var i789 = i785[7]
  var i788 = []
  for(var i = 0; i < i789.length; i += 1) {
    i788.push( request.d('Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight', i789[i + 0]) );
  }
  i784.blendShapesWeights = i788
  i784.enabled = !!i785[8]
  request.r(i785[9], i785[10], 0, i784, 'sharedMaterial')
  var i791 = i785[11]
  var i790 = []
  for(var i = 0; i < i791.length; i += 2) {
  request.r(i791[i + 0], i791[i + 1], 2, i790, '')
  }
  i784.sharedMaterials = i790
  i784.receiveShadows = !!i785[12]
  i784.shadowCastingMode = i785[13]
  i784.sortingLayerID = i785[14]
  i784.sortingOrder = i785[15]
  i784.lightmapIndex = i785[16]
  i784.lightmapSceneIndex = i785[17]
  i784.lightmapScaleOffset = new pc.Vec4( i785[18], i785[19], i785[20], i785[21] )
  i784.lightProbeUsage = i785[22]
  i784.reflectionProbeUsage = i785[23]
  return i784
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight"] = function (request, data, root) {
  var i796 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight' )
  var i797 = data
  i796.weight = i797[0]
  return i796
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshFilter"] = function (request, data, root) {
  var i798 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshFilter' )
  var i799 = data
  request.r(i799[0], i799[1], 0, i798, 'sharedMesh')
  return i798
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshRenderer"] = function (request, data, root) {
  var i800 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshRenderer' )
  var i801 = data
  request.r(i801[0], i801[1], 0, i800, 'additionalVertexStreams')
  i800.enabled = !!i801[2]
  request.r(i801[3], i801[4], 0, i800, 'sharedMaterial')
  var i803 = i801[5]
  var i802 = []
  for(var i = 0; i < i803.length; i += 2) {
  request.r(i803[i + 0], i803[i + 1], 2, i802, '')
  }
  i800.sharedMaterials = i802
  i800.receiveShadows = !!i801[6]
  i800.shadowCastingMode = i801[7]
  i800.sortingLayerID = i801[8]
  i800.sortingOrder = i801[9]
  i800.lightmapIndex = i801[10]
  i800.lightmapSceneIndex = i801[11]
  i800.lightmapScaleOffset = new pc.Vec4( i801[12], i801[13], i801[14], i801[15] )
  i800.lightProbeUsage = i801[16]
  i800.reflectionProbeUsage = i801[17]
  return i800
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.BoxCollider"] = function (request, data, root) {
  var i804 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.BoxCollider' )
  var i805 = data
  i804.center = new pc.Vec3( i805[0], i805[1], i805[2] )
  i804.size = new pc.Vec3( i805[3], i805[4], i805[5] )
  i804.enabled = !!i805[6]
  i804.isTrigger = !!i805[7]
  request.r(i805[8], i805[9], 0, i804, 'material')
  return i804
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Rigidbody"] = function (request, data, root) {
  var i806 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Rigidbody' )
  var i807 = data
  i806.mass = i807[0]
  i806.drag = i807[1]
  i806.angularDrag = i807[2]
  i806.useGravity = !!i807[3]
  i806.isKinematic = !!i807[4]
  i806.constraints = i807[5]
  i806.maxAngularVelocity = i807[6]
  i806.collisionDetectionMode = i807[7]
  i806.interpolation = i807[8]
  return i806
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ConfigurableJoint"] = function (request, data, root) {
  var i808 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ConfigurableJoint' )
  var i809 = data
  i808.angularXDrive = request.d('UnityEngine.JointDrive', i809[0], i808.angularXDrive)
  i808.angularXLimitSpring = request.d('UnityEngine.SoftJointLimitSpring', i809[1], i808.angularXLimitSpring)
  i808.angularXMotion = i809[2]
  i808.angularYLimit = request.d('UnityEngine.SoftJointLimit', i809[3], i808.angularYLimit)
  i808.angularYMotion = i809[4]
  i808.angularYZDrive = request.d('UnityEngine.JointDrive', i809[5], i808.angularYZDrive)
  i808.angularYZLimitSpring = request.d('UnityEngine.SoftJointLimitSpring', i809[6], i808.angularYZLimitSpring)
  i808.angularZLimit = request.d('UnityEngine.SoftJointLimit', i809[7], i808.angularZLimit)
  i808.angularZMotion = i809[8]
  i808.configuredInWorldSpace = !!i809[9]
  i808.highAngularXLimit = request.d('UnityEngine.SoftJointLimit', i809[10], i808.highAngularXLimit)
  i808.linearLimit = request.d('UnityEngine.SoftJointLimit', i809[11], i808.linearLimit)
  i808.linearLimitSpring = request.d('UnityEngine.SoftJointLimitSpring', i809[12], i808.linearLimitSpring)
  i808.lowAngularXLimit = request.d('UnityEngine.SoftJointLimit', i809[13], i808.lowAngularXLimit)
  i808.rotationDriveMode = i809[14]
  i808.secondaryAxis = new pc.Vec3( i809[15], i809[16], i809[17] )
  i808.slerpDrive = request.d('UnityEngine.JointDrive', i809[18], i808.slerpDrive)
  i808.swapBodies = !!i809[19]
  i808.targetAngularVelocity = new pc.Vec3( i809[20], i809[21], i809[22] )
  i808.targetPosition = new pc.Vec3( i809[23], i809[24], i809[25] )
  i808.targetRotation = new pc.Quat(i809[26], i809[27], i809[28], i809[29])
  i808.targetVelocity = new pc.Vec3( i809[30], i809[31], i809[32] )
  i808.xDrive = request.d('UnityEngine.JointDrive', i809[33], i808.xDrive)
  i808.xMotion = i809[34]
  i808.yDrive = request.d('UnityEngine.JointDrive', i809[35], i808.yDrive)
  i808.yMotion = i809[36]
  i808.zDrive = request.d('UnityEngine.JointDrive', i809[37], i808.zDrive)
  i808.zMotion = i809[38]
  request.r(i809[39], i809[40], 0, i808, 'connectedBody')
  i808.axis = new pc.Vec3( i809[41], i809[42], i809[43] )
  i808.anchor = new pc.Vec3( i809[44], i809[45], i809[46] )
  i808.connectedAnchor = new pc.Vec3( i809[47], i809[48], i809[49] )
  i808.autoConfigureConnectedAnchor = !!i809[50]
  i808.massScale = i809[51]
  i808.connectedMassScale = i809[52]
  i808.enableCollision = !!i809[53]
  i808.breakForce = i809[54]
  i808.breakTorque = i809[55]
  return i808
}

Deserializers["BodyPiece"] = function (request, data, root) {
  var i810 = root || request.c( 'BodyPiece' )
  var i811 = data
  i810.notUseAnim = !!i811[0]
  request.r(i811[1], i811[2], 0, i810, 'colli')
  request.r(i811[3], i811[4], 0, i810, 'skeleton')
  return i810
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CapsuleCollider"] = function (request, data, root) {
  var i812 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CapsuleCollider' )
  var i813 = data
  i812.center = new pc.Vec3( i813[0], i813[1], i813[2] )
  i812.radius = i813[3]
  i812.height = i813[4]
  i812.direction = i813[5]
  i812.enabled = !!i813[6]
  i812.isTrigger = !!i813[7]
  request.r(i813[8], i813[9], 0, i812, 'material')
  return i812
}

Deserializers["TakeDamage"] = function (request, data, root) {
  var i814 = root || request.c( 'TakeDamage' )
  var i815 = data
  request.r(i815[0], i815[1], 0, i814, 'phase')
  var i817 = i815[2]
  var i816 = new (System.Collections.Generic.List$1(Bridge.ns('BodyPiece')))
  for(var i = 0; i < i817.length; i += 2) {
  request.r(i817[i + 0], i817[i + 1], 1, i816, '')
  }
  i814.bodyPieces = i816
  request.r(i815[3], i815[4], 0, i814, 'root')
  i814.timeCD = i815[5]
  i814.HP = i815[6]
  i814.onCD = !!i815[7]
  i814.currentHP = i815[8]
  i814.isDead = !!i815[9]
  request.r(i815[10], i815[11], 0, i814, 'anim')
  request.r(i815[12], i815[13], 0, i814, 'hitSound')
  request.r(i815[14], i815[15], 0, i814, 'deadSound')
  request.r(i815[16], i815[17], 0, i814, 'bloodPrefab')
  return i814
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Animator"] = function (request, data, root) {
  var i820 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Animator' )
  var i821 = data
  request.r(i821[0], i821[1], 0, i820, 'animatorController')
  request.r(i821[2], i821[3], 0, i820, 'avatar')
  i820.updateMode = i821[4]
  i820.hasTransformHierarchy = !!i821[5]
  i820.applyRootMotion = !!i821[6]
  var i823 = i821[7]
  var i822 = []
  for(var i = 0; i < i823.length; i += 2) {
  request.r(i823[i + 0], i823[i + 1], 2, i822, '')
  }
  i820.humanBones = i822
  i820.enabled = !!i821[8]
  return i820
}

Deserializers["BodyController"] = function (request, data, root) {
  var i824 = root || request.c( 'BodyController' )
  var i825 = data
  var i827 = i825[0]
  var i826 = new (System.Collections.Generic.List$1(Bridge.ns('BodyPiece')))
  for(var i = 0; i < i827.length; i += 2) {
  request.r(i827[i + 0], i827[i + 1], 1, i826, '')
  }
  i824.bodyPieces = i826
  var i829 = i825[1]
  var i828 = new (System.Collections.Generic.List$1(Bridge.ns('Dragable')))
  for(var i = 0; i < i829.length; i += 2) {
  request.r(i829[i + 0], i829[i + 1], 1, i828, '')
  }
  i824.dragPieces = i828
  request.r(i825[2], i825[3], 0, i824, 'anim')
  return i824
}

Deserializers["Dragable"] = function (request, data, root) {
  var i832 = root || request.c( 'Dragable' )
  var i833 = data
  i832.OnDrag = request.d('System.Action', i833[0], i832.OnDrag)
  i832.OnEndDrag = request.d('System.Action', i833[1], i832.OnEndDrag)
  return i832
}

Deserializers["System.Action"] = function (request, data, root) {
  var i834 = root || request.c( 'System.Action' )
  var i835 = data
  return i834
}

Deserializers["DragController"] = function (request, data, root) {
  var i836 = root || request.c( 'DragController' )
  var i837 = data
  request.r(i837[0], i837[1], 0, i836, 'currentTarget')
  i836.positionSpring = i837[2]
  i836.positionDamper = i837[3]
  request.r(i837[4], i837[5], 0, i836, 'tut1')
  request.r(i837[6], i837[7], 0, i836, 'tut2')
  return i836
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i838 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i839 = data
  i838.ambientIntensity = i839[0]
  i838.reflectionIntensity = i839[1]
  i838.ambientMode = i839[2]
  i838.ambientLight = new pc.Color(i839[3], i839[4], i839[5], i839[6])
  i838.ambientSkyColor = new pc.Color(i839[7], i839[8], i839[9], i839[10])
  i838.ambientGroundColor = new pc.Color(i839[11], i839[12], i839[13], i839[14])
  i838.ambientEquatorColor = new pc.Color(i839[15], i839[16], i839[17], i839[18])
  i838.fogColor = new pc.Color(i839[19], i839[20], i839[21], i839[22])
  i838.fogEndDistance = i839[23]
  i838.fogStartDistance = i839[24]
  i838.fogDensity = i839[25]
  i838.fog = !!i839[26]
  request.r(i839[27], i839[28], 0, i838, 'skybox')
  i838.fogMode = i839[29]
  var i841 = i839[30]
  var i840 = []
  for(var i = 0; i < i841.length; i += 1) {
    i840.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i841[i + 0]) );
  }
  i838.lightmaps = i840
  i838.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i839[31], i838.lightProbes)
  i838.lightmapsMode = i839[32]
  i838.mixedBakeMode = i839[33]
  i838.environmentLightingMode = i839[34]
  i838.ambientProbe = new pc.SphericalHarmonicsL2(i839[35])
  request.r(i839[36], i839[37], 0, i838, 'customReflection')
  request.r(i839[38], i839[39], 0, i838, 'defaultReflection')
  i838.defaultReflectionMode = i839[40]
  i838.defaultReflectionResolution = i839[41]
  i838.sunLightObjectId = i839[42]
  i838.pixelLightCount = i839[43]
  i838.defaultReflectionHDR = !!i839[44]
  i838.hasLightDataAsset = !!i839[45]
  i838.hasManualGenerate = !!i839[46]
  return i838
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i844 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i845 = data
  request.r(i845[0], i845[1], 0, i844, 'lightmapColor')
  request.r(i845[2], i845[3], 0, i844, 'lightmapDirection')
  request.r(i845[4], i845[5], 0, i844, 'shadowMask')
  return i844
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i846 = root || new UnityEngine.LightProbes()
  var i847 = data
  return i846
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i854 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i855 = data
  var i857 = i855[0]
  var i856 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i857.length; i += 1) {
    i856.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i857[i + 0]));
  }
  i854.ShaderCompilationErrors = i856
  i854.name = i855[1]
  i854.guid = i855[2]
  var i859 = i855[3]
  var i858 = []
  for(var i = 0; i < i859.length; i += 1) {
    i858.push( i859[i + 0] );
  }
  i854.shaderDefinedKeywords = i858
  var i861 = i855[4]
  var i860 = []
  for(var i = 0; i < i861.length; i += 1) {
    i860.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i861[i + 0]) );
  }
  i854.passes = i860
  var i863 = i855[5]
  var i862 = []
  for(var i = 0; i < i863.length; i += 1) {
    i862.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i863[i + 0]) );
  }
  i854.usePasses = i862
  var i865 = i855[6]
  var i864 = []
  for(var i = 0; i < i865.length; i += 1) {
    i864.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i865[i + 0]) );
  }
  i854.defaultParameterValues = i864
  request.r(i855[7], i855[8], 0, i854, 'unityFallbackShader')
  i854.readDepth = !!i855[9]
  i854.hasDepthOnlyPass = !!i855[10]
  i854.isCreatedByShaderGraph = !!i855[11]
  i854.disableBatching = !!i855[12]
  i854.compiled = !!i855[13]
  return i854
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i868 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i869 = data
  i868.shaderName = i869[0]
  i868.errorMessage = i869[1]
  return i868
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i874 = root || new pc.UnityShaderPass()
  var i875 = data
  i874.id = i875[0]
  i874.subShaderIndex = i875[1]
  i874.name = i875[2]
  i874.passType = i875[3]
  i874.grabPassTextureName = i875[4]
  i874.usePass = !!i875[5]
  i874.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i875[6], i874.zTest)
  i874.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i875[7], i874.zWrite)
  i874.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i875[8], i874.culling)
  i874.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i875[9], i874.blending)
  i874.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i875[10], i874.alphaBlending)
  i874.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i875[11], i874.colorWriteMask)
  i874.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i875[12], i874.offsetUnits)
  i874.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i875[13], i874.offsetFactor)
  i874.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i875[14], i874.stencilRef)
  i874.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i875[15], i874.stencilReadMask)
  i874.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i875[16], i874.stencilWriteMask)
  i874.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i875[17], i874.stencilOp)
  i874.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i875[18], i874.stencilOpFront)
  i874.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i875[19], i874.stencilOpBack)
  var i877 = i875[20]
  var i876 = []
  for(var i = 0; i < i877.length; i += 1) {
    i876.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i877[i + 0]) );
  }
  i874.tags = i876
  var i879 = i875[21]
  var i878 = []
  for(var i = 0; i < i879.length; i += 1) {
    i878.push( i879[i + 0] );
  }
  i874.passDefinedKeywords = i878
  var i881 = i875[22]
  var i880 = []
  for(var i = 0; i < i881.length; i += 1) {
    i880.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i881[i + 0]) );
  }
  i874.passDefinedKeywordGroups = i880
  var i883 = i875[23]
  var i882 = []
  for(var i = 0; i < i883.length; i += 1) {
    i882.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i883[i + 0]) );
  }
  i874.variants = i882
  var i885 = i875[24]
  var i884 = []
  for(var i = 0; i < i885.length; i += 1) {
    i884.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i885[i + 0]) );
  }
  i874.excludedVariants = i884
  i874.hasDepthReader = !!i875[25]
  return i874
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i886 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i887 = data
  i886.val = i887[0]
  i886.name = i887[1]
  return i886
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i888 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i889 = data
  i888.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i889[0], i888.src)
  i888.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i889[1], i888.dst)
  i888.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i889[2], i888.op)
  return i888
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i890 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i891 = data
  i890.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i891[0], i890.pass)
  i890.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i891[1], i890.fail)
  i890.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i891[2], i890.zFail)
  i890.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i891[3], i890.comp)
  return i890
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i894 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i895 = data
  i894.name = i895[0]
  i894.value = i895[1]
  return i894
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i898 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i899 = data
  var i901 = i899[0]
  var i900 = []
  for(var i = 0; i < i901.length; i += 1) {
    i900.push( i901[i + 0] );
  }
  i898.keywords = i900
  i898.hasDiscard = !!i899[1]
  return i898
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i904 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i905 = data
  i904.passId = i905[0]
  i904.subShaderIndex = i905[1]
  var i907 = i905[2]
  var i906 = []
  for(var i = 0; i < i907.length; i += 1) {
    i906.push( i907[i + 0] );
  }
  i904.keywords = i906
  i904.vertexProgram = i905[3]
  i904.fragmentProgram = i905[4]
  i904.exportedForWebGl2 = !!i905[5]
  i904.readDepth = !!i905[6]
  return i904
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i910 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i911 = data
  request.r(i911[0], i911[1], 0, i910, 'shader')
  i910.pass = i911[2]
  return i910
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i914 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i915 = data
  i914.name = i915[0]
  i914.type = i915[1]
  i914.value = new pc.Vec4( i915[2], i915[3], i915[4], i915[5] )
  i914.textureValue = i915[6]
  i914.shaderPropertyFlag = i915[7]
  return i914
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i916 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i917 = data
  i916.name = i917[0]
  request.r(i917[1], i917[2], 0, i916, 'texture')
  i916.aabb = i917[3]
  i916.vertices = i917[4]
  i916.triangles = i917[5]
  i916.textureRect = UnityEngine.Rect.MinMaxRect(i917[6], i917[7], i917[8], i917[9])
  i916.packedRect = UnityEngine.Rect.MinMaxRect(i917[10], i917[11], i917[12], i917[13])
  i916.border = new pc.Vec4( i917[14], i917[15], i917[16], i917[17] )
  i916.transparency = i917[18]
  i916.bounds = i917[19]
  i916.pixelsPerUnit = i917[20]
  i916.textureWidth = i917[21]
  i916.textureHeight = i917[22]
  i916.nativeSize = new pc.Vec2( i917[23], i917[24] )
  i916.pivot = new pc.Vec2( i917[25], i917[26] )
  i916.textureRectOffset = new pc.Vec2( i917[27], i917[28] )
  return i916
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i918 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i919 = data
  i918.name = i919[0]
  return i918
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip"] = function (request, data, root) {
  var i920 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip' )
  var i921 = data
  i920.name = i921[0]
  i920.wrapMode = i921[1]
  i920.isLooping = !!i921[2]
  i920.length = i921[3]
  var i923 = i921[4]
  var i922 = []
  for(var i = 0; i < i923.length; i += 1) {
    i922.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve', i923[i + 0]) );
  }
  i920.curves = i922
  var i925 = i921[5]
  var i924 = []
  for(var i = 0; i < i925.length; i += 1) {
    i924.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent', i925[i + 0]) );
  }
  i920.events = i924
  i920.halfPrecision = !!i921[6]
  i920._frameRate = i921[7]
  i920.localBounds = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds', i921[8], i920.localBounds)
  i920.hasMuscleCurves = !!i921[9]
  var i927 = i921[10]
  var i926 = []
  for(var i = 0; i < i927.length; i += 1) {
    i926.push( i927[i + 0] );
  }
  i920.clipMuscleConstant = i926
  i920.clipBindingConstant = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant', i921[11], i920.clipBindingConstant)
  return i920
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve"] = function (request, data, root) {
  var i930 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve' )
  var i931 = data
  i930.path = i931[0]
  i930.hash = i931[1]
  i930.componentType = i931[2]
  i930.property = i931[3]
  i930.keys = i931[4]
  var i933 = i931[5]
  var i932 = []
  for(var i = 0; i < i933.length; i += 1) {
    i932.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey', i933[i + 0]) );
  }
  i930.objectReferenceKeys = i932
  return i930
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent"] = function (request, data, root) {
  var i936 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent' )
  var i937 = data
  i936.functionName = i937[0]
  i936.floatParameter = i937[1]
  i936.intParameter = i937[2]
  i936.stringParameter = i937[3]
  request.r(i937[4], i937[5], 0, i936, 'objectReferenceParameter')
  i936.time = i937[6]
  return i936
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds"] = function (request, data, root) {
  var i938 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds' )
  var i939 = data
  i938.center = new pc.Vec3( i939[0], i939[1], i939[2] )
  i938.extends = new pc.Vec3( i939[3], i939[4], i939[5] )
  return i938
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant"] = function (request, data, root) {
  var i942 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant' )
  var i943 = data
  var i945 = i943[0]
  var i944 = []
  for(var i = 0; i < i945.length; i += 1) {
    i944.push( i945[i + 0] );
  }
  i942.genericBindings = i944
  var i947 = i943[1]
  var i946 = []
  for(var i = 0; i < i947.length; i += 1) {
    i946.push( i947[i + 0] );
  }
  i942.pptrCurveMapping = i946
  return i942
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font"] = function (request, data, root) {
  var i948 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font' )
  var i949 = data
  i948.name = i949[0]
  i948.ascent = i949[1]
  i948.originalLineHeight = i949[2]
  i948.fontSize = i949[3]
  var i951 = i949[4]
  var i950 = []
  for(var i = 0; i < i951.length; i += 1) {
    i950.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo', i951[i + 0]) );
  }
  i948.characterInfo = i950
  request.r(i949[5], i949[6], 0, i948, 'texture')
  i948.originalFontSize = i949[7]
  return i948
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo"] = function (request, data, root) {
  var i954 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo' )
  var i955 = data
  i954.index = i955[0]
  i954.advance = i955[1]
  i954.bearing = i955[2]
  i954.glyphWidth = i955[3]
  i954.glyphHeight = i955[4]
  i954.minX = i955[5]
  i954.maxX = i955[6]
  i954.minY = i955[7]
  i954.maxY = i955[8]
  i954.uvBottomLeftX = i955[9]
  i954.uvBottomLeftY = i955[10]
  i954.uvBottomRightX = i955[11]
  i954.uvBottomRightY = i955[12]
  i954.uvTopLeftX = i955[13]
  i954.uvTopLeftY = i955[14]
  i954.uvTopRightX = i955[15]
  i954.uvTopRightY = i955[16]
  return i954
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController"] = function (request, data, root) {
  var i956 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController' )
  var i957 = data
  i956.name = i957[0]
  var i959 = i957[1]
  var i958 = []
  for(var i = 0; i < i959.length; i += 1) {
    i958.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer', i959[i + 0]) );
  }
  i956.layers = i958
  var i961 = i957[2]
  var i960 = []
  for(var i = 0; i < i961.length; i += 1) {
    i960.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter', i961[i + 0]) );
  }
  i956.parameters = i960
  i956.animationClips = i957[3]
  i956.avatarUnsupported = i957[4]
  return i956
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer"] = function (request, data, root) {
  var i964 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer' )
  var i965 = data
  i964.name = i965[0]
  i964.defaultWeight = i965[1]
  i964.blendingMode = i965[2]
  i964.avatarMask = i965[3]
  i964.syncedLayerIndex = i965[4]
  i964.syncedLayerAffectsTiming = !!i965[5]
  i964.syncedLayers = i965[6]
  i964.stateMachine = request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i965[7], i964.stateMachine)
  return i964
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine"] = function (request, data, root) {
  var i966 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine' )
  var i967 = data
  i966.id = i967[0]
  i966.name = i967[1]
  i966.path = i967[2]
  var i969 = i967[3]
  var i968 = []
  for(var i = 0; i < i969.length; i += 1) {
    i968.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState', i969[i + 0]) );
  }
  i966.states = i968
  var i971 = i967[4]
  var i970 = []
  for(var i = 0; i < i971.length; i += 1) {
    i970.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i971[i + 0]) );
  }
  i966.machines = i970
  var i973 = i967[5]
  var i972 = []
  for(var i = 0; i < i973.length; i += 1) {
    i972.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i973[i + 0]) );
  }
  i966.entryStateTransitions = i972
  var i975 = i967[6]
  var i974 = []
  for(var i = 0; i < i975.length; i += 1) {
    i974.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i975[i + 0]) );
  }
  i966.exitStateTransitions = i974
  var i977 = i967[7]
  var i976 = []
  for(var i = 0; i < i977.length; i += 1) {
    i976.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i977[i + 0]) );
  }
  i966.anyStateTransitions = i976
  i966.defaultStateId = i967[8]
  return i966
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState"] = function (request, data, root) {
  var i980 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState' )
  var i981 = data
  i980.id = i981[0]
  i980.name = i981[1]
  i980.cycleOffset = i981[2]
  i980.cycleOffsetParameter = i981[3]
  i980.cycleOffsetParameterActive = !!i981[4]
  i980.mirror = !!i981[5]
  i980.mirrorParameter = i981[6]
  i980.mirrorParameterActive = !!i981[7]
  i980.motionId = i981[8]
  i980.nameHash = i981[9]
  i980.fullPathHash = i981[10]
  i980.speed = i981[11]
  i980.speedParameter = i981[12]
  i980.speedParameterActive = !!i981[13]
  i980.tag = i981[14]
  i980.tagHash = i981[15]
  i980.writeDefaultValues = !!i981[16]
  var i983 = i981[17]
  var i982 = []
  for(var i = 0; i < i983.length; i += 2) {
  request.r(i983[i + 0], i983[i + 1], 2, i982, '')
  }
  i980.behaviours = i982
  var i985 = i981[18]
  var i984 = []
  for(var i = 0; i < i985.length; i += 1) {
    i984.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i985[i + 0]) );
  }
  i980.transitions = i984
  return i980
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition"] = function (request, data, root) {
  var i990 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition' )
  var i991 = data
  i990.fullPath = i991[0]
  i990.canTransitionToSelf = !!i991[1]
  i990.duration = i991[2]
  i990.exitTime = i991[3]
  i990.hasExitTime = !!i991[4]
  i990.hasFixedDuration = !!i991[5]
  i990.interruptionSource = i991[6]
  i990.offset = i991[7]
  i990.orderedInterruption = !!i991[8]
  i990.destinationStateId = i991[9]
  i990.isExit = !!i991[10]
  i990.mute = !!i991[11]
  i990.solo = !!i991[12]
  var i993 = i991[13]
  var i992 = []
  for(var i = 0; i < i993.length; i += 1) {
    i992.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i993[i + 0]) );
  }
  i990.conditions = i992
  return i990
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition"] = function (request, data, root) {
  var i996 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition' )
  var i997 = data
  i996.mode = i997[0]
  i996.parameter = i997[1]
  i996.threshold = i997[2]
  return i996
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition"] = function (request, data, root) {
  var i1002 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition' )
  var i1003 = data
  i1002.destinationStateId = i1003[0]
  i1002.isExit = !!i1003[1]
  i1002.mute = !!i1003[2]
  i1002.solo = !!i1003[3]
  var i1005 = i1003[4]
  var i1004 = []
  for(var i = 0; i < i1005.length; i += 1) {
    i1004.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i1005[i + 0]) );
  }
  i1002.conditions = i1004
  return i1002
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter"] = function (request, data, root) {
  var i1008 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter' )
  var i1009 = data
  i1008.defaultBool = !!i1009[0]
  i1008.defaultFloat = i1009[1]
  i1008.defaultInt = i1009[2]
  i1008.name = i1009[3]
  i1008.nameHash = i1009[4]
  i1008.type = i1009[5]
  return i1008
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorOverrideController"] = function (request, data, root) {
  var i1010 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorOverrideController' )
  var i1011 = data
  i1010.name = i1011[0]
  request.r(i1011[1], i1011[2], 0, i1010, '_runtimeAnimatorController')
  var i1013 = i1011[3]
  var i1012 = []
  for(var i = 0; i < i1013.length; i += 2) {
  request.r(i1013[i + 0], i1013[i + 1], 2, i1012, '')
  }
  i1010._originalAnimationClips = i1012
  var i1015 = i1011[4]
  var i1014 = []
  for(var i = 0; i < i1015.length; i += 2) {
  request.r(i1015[i + 0], i1015[i + 1], 2, i1014, '')
  }
  i1010._overrideAnimationClips = i1014
  var i1017 = i1011[5]
  var i1016 = []
  for(var i = 0; i < i1017.length; i += 2) {
  request.r(i1017[i + 0], i1017[i + 1], 2, i1016, '')
  }
  i1010._animationClips = i1016
  var i1019 = i1011[6]
  var i1018 = []
  for(var i = 0; i < i1019.length; i += 1) {
    i1018.push( request.d('UnityEngine.AnimationClipPair', i1019[i + 0]) );
  }
  i1010._animationClipPairs = i1018
  return i1010
}

Deserializers["UnityEngine.AnimationClipPair"] = function (request, data, root) {
  var i1024 = root || request.c( 'UnityEngine.AnimationClipPair' )
  var i1025 = data
  request.r(i1025[0], i1025[1], 0, i1024, 'originalClip')
  request.r(i1025[2], i1025[3], 0, i1024, 'overrideClip')
  return i1024
}

Deserializers["DG.Tweening.Core.DOTweenSettings"] = function (request, data, root) {
  var i1026 = root || request.c( 'DG.Tweening.Core.DOTweenSettings' )
  var i1027 = data
  i1026.useSafeMode = !!i1027[0]
  i1026.safeModeOptions = request.d('DG.Tweening.Core.DOTweenSettings+SafeModeOptions', i1027[1], i1026.safeModeOptions)
  i1026.timeScale = i1027[2]
  i1026.unscaledTimeScale = i1027[3]
  i1026.useSmoothDeltaTime = !!i1027[4]
  i1026.maxSmoothUnscaledTime = i1027[5]
  i1026.rewindCallbackMode = i1027[6]
  i1026.showUnityEditorReport = !!i1027[7]
  i1026.logBehaviour = i1027[8]
  i1026.drawGizmos = !!i1027[9]
  i1026.defaultRecyclable = !!i1027[10]
  i1026.defaultAutoPlay = i1027[11]
  i1026.defaultUpdateType = i1027[12]
  i1026.defaultTimeScaleIndependent = !!i1027[13]
  i1026.defaultEaseType = i1027[14]
  i1026.defaultEaseOvershootOrAmplitude = i1027[15]
  i1026.defaultEasePeriod = i1027[16]
  i1026.defaultAutoKill = !!i1027[17]
  i1026.defaultLoopType = i1027[18]
  i1026.debugMode = !!i1027[19]
  i1026.debugStoreTargetId = !!i1027[20]
  i1026.showPreviewPanel = !!i1027[21]
  i1026.storeSettingsLocation = i1027[22]
  i1026.modules = request.d('DG.Tweening.Core.DOTweenSettings+ModulesSetup', i1027[23], i1026.modules)
  i1026.createASMDEF = !!i1027[24]
  i1026.showPlayingTweens = !!i1027[25]
  i1026.showPausedTweens = !!i1027[26]
  return i1026
}

Deserializers["DG.Tweening.Core.DOTweenSettings+SafeModeOptions"] = function (request, data, root) {
  var i1028 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+SafeModeOptions' )
  var i1029 = data
  i1028.logBehaviour = i1029[0]
  i1028.nestedTweenFailureBehaviour = i1029[1]
  return i1028
}

Deserializers["DG.Tweening.Core.DOTweenSettings+ModulesSetup"] = function (request, data, root) {
  var i1030 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+ModulesSetup' )
  var i1031 = data
  i1030.showPanel = !!i1031[0]
  i1030.audioEnabled = !!i1031[1]
  i1030.physicsEnabled = !!i1031[2]
  i1030.physics2DEnabled = !!i1031[3]
  i1030.spriteEnabled = !!i1031[4]
  i1030.uiEnabled = !!i1031[5]
  i1030.textMeshProEnabled = !!i1031[6]
  i1030.tk2DEnabled = !!i1031[7]
  i1030.deAudioEnabled = !!i1031[8]
  i1030.deUnityExtendedEnabled = !!i1031[9]
  i1030.epoOutlineEnabled = !!i1031[10]
  return i1030
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i1032 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i1033 = data
  var i1035 = i1033[0]
  var i1034 = []
  for(var i = 0; i < i1035.length; i += 1) {
    i1034.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i1035[i + 0]) );
  }
  i1032.files = i1034
  i1032.componentToPrefabIds = i1033[1]
  return i1032
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i1038 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i1039 = data
  i1038.path = i1039[0]
  request.r(i1039[1], i1039[2], 0, i1038, 'unityObject')
  return i1038
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i1040 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i1041 = data
  var i1043 = i1041[0]
  var i1042 = []
  for(var i = 0; i < i1043.length; i += 1) {
    i1042.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i1043[i + 0]) );
  }
  i1040.scriptsExecutionOrder = i1042
  var i1045 = i1041[1]
  var i1044 = []
  for(var i = 0; i < i1045.length; i += 1) {
    i1044.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i1045[i + 0]) );
  }
  i1040.sortingLayers = i1044
  var i1047 = i1041[2]
  var i1046 = []
  for(var i = 0; i < i1047.length; i += 1) {
    i1046.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i1047[i + 0]) );
  }
  i1040.cullingLayers = i1046
  i1040.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i1041[3], i1040.timeSettings)
  i1040.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i1041[4], i1040.physicsSettings)
  i1040.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i1041[5], i1040.physics2DSettings)
  i1040.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i1041[6], i1040.qualitySettings)
  i1040.enableRealtimeShadows = !!i1041[7]
  i1040.enableAutoInstancing = !!i1041[8]
  i1040.enableStaticBatching = !!i1041[9]
  i1040.enableDynamicBatching = !!i1041[10]
  i1040.usePreservativeDynamicBatching = !!i1041[11]
  i1040.lightmapEncodingQuality = i1041[12]
  i1040.desiredColorSpace = i1041[13]
  var i1049 = i1041[14]
  var i1048 = []
  for(var i = 0; i < i1049.length; i += 1) {
    i1048.push( i1049[i + 0] );
  }
  i1040.allTags = i1048
  return i1040
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i1052 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i1053 = data
  i1052.name = i1053[0]
  i1052.value = i1053[1]
  return i1052
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i1056 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i1057 = data
  i1056.id = i1057[0]
  i1056.name = i1057[1]
  i1056.value = i1057[2]
  return i1056
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i1060 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i1061 = data
  i1060.id = i1061[0]
  i1060.name = i1061[1]
  return i1060
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i1062 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i1063 = data
  i1062.fixedDeltaTime = i1063[0]
  i1062.maximumDeltaTime = i1063[1]
  i1062.timeScale = i1063[2]
  i1062.maximumParticleTimestep = i1063[3]
  return i1062
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i1064 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i1065 = data
  i1064.gravity = new pc.Vec3( i1065[0], i1065[1], i1065[2] )
  i1064.defaultSolverIterations = i1065[3]
  i1064.bounceThreshold = i1065[4]
  i1064.autoSyncTransforms = !!i1065[5]
  i1064.autoSimulation = !!i1065[6]
  var i1067 = i1065[7]
  var i1066 = []
  for(var i = 0; i < i1067.length; i += 1) {
    i1066.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i1067[i + 0]) );
  }
  i1064.collisionMatrix = i1066
  return i1064
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i1070 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i1071 = data
  i1070.enabled = !!i1071[0]
  i1070.layerId = i1071[1]
  i1070.otherLayerId = i1071[2]
  return i1070
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i1072 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i1073 = data
  request.r(i1073[0], i1073[1], 0, i1072, 'material')
  i1072.gravity = new pc.Vec2( i1073[2], i1073[3] )
  i1072.positionIterations = i1073[4]
  i1072.velocityIterations = i1073[5]
  i1072.velocityThreshold = i1073[6]
  i1072.maxLinearCorrection = i1073[7]
  i1072.maxAngularCorrection = i1073[8]
  i1072.maxTranslationSpeed = i1073[9]
  i1072.maxRotationSpeed = i1073[10]
  i1072.baumgarteScale = i1073[11]
  i1072.baumgarteTOIScale = i1073[12]
  i1072.timeToSleep = i1073[13]
  i1072.linearSleepTolerance = i1073[14]
  i1072.angularSleepTolerance = i1073[15]
  i1072.defaultContactOffset = i1073[16]
  i1072.autoSimulation = !!i1073[17]
  i1072.queriesHitTriggers = !!i1073[18]
  i1072.queriesStartInColliders = !!i1073[19]
  i1072.callbacksOnDisable = !!i1073[20]
  i1072.reuseCollisionCallbacks = !!i1073[21]
  i1072.autoSyncTransforms = !!i1073[22]
  var i1075 = i1073[23]
  var i1074 = []
  for(var i = 0; i < i1075.length; i += 1) {
    i1074.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i1075[i + 0]) );
  }
  i1072.collisionMatrix = i1074
  return i1072
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i1078 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i1079 = data
  i1078.enabled = !!i1079[0]
  i1078.layerId = i1079[1]
  i1078.otherLayerId = i1079[2]
  return i1078
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i1080 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i1081 = data
  var i1083 = i1081[0]
  var i1082 = []
  for(var i = 0; i < i1083.length; i += 1) {
    i1082.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i1083[i + 0]) );
  }
  i1080.qualityLevels = i1082
  var i1085 = i1081[1]
  var i1084 = []
  for(var i = 0; i < i1085.length; i += 1) {
    i1084.push( i1085[i + 0] );
  }
  i1080.names = i1084
  i1080.shadows = i1081[2]
  i1080.anisotropicFiltering = i1081[3]
  i1080.antiAliasing = i1081[4]
  i1080.lodBias = i1081[5]
  i1080.shadowCascades = i1081[6]
  i1080.shadowDistance = i1081[7]
  i1080.shadowmaskMode = i1081[8]
  i1080.shadowProjection = i1081[9]
  i1080.shadowResolution = i1081[10]
  i1080.softParticles = !!i1081[11]
  i1080.softVegetation = !!i1081[12]
  i1080.activeColorSpace = i1081[13]
  i1080.desiredColorSpace = i1081[14]
  i1080.masterTextureLimit = i1081[15]
  i1080.maxQueuedFrames = i1081[16]
  i1080.particleRaycastBudget = i1081[17]
  i1080.pixelLightCount = i1081[18]
  i1080.realtimeReflectionProbes = !!i1081[19]
  i1080.shadowCascade2Split = i1081[20]
  i1080.shadowCascade4Split = new pc.Vec3( i1081[21], i1081[22], i1081[23] )
  i1080.streamingMipmapsActive = !!i1081[24]
  i1080.vSyncCount = i1081[25]
  i1080.asyncUploadBufferSize = i1081[26]
  i1080.asyncUploadTimeSlice = i1081[27]
  i1080.billboardsFaceCameraPosition = !!i1081[28]
  i1080.shadowNearPlaneOffset = i1081[29]
  i1080.streamingMipmapsMemoryBudget = i1081[30]
  i1080.maximumLODLevel = i1081[31]
  i1080.streamingMipmapsAddAllCameras = !!i1081[32]
  i1080.streamingMipmapsMaxLevelReduction = i1081[33]
  i1080.streamingMipmapsRenderersPerFrame = i1081[34]
  i1080.resolutionScalingFixedDPIFactor = i1081[35]
  i1080.streamingMipmapsMaxFileIORequests = i1081[36]
  i1080.currentQualityLevel = i1081[37]
  return i1080
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.Avatar"] = function (request, data, root) {
  var i1088 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.Avatar' )
  var i1089 = data
  i1088.name = i1089[0]
  var i1091 = i1089[1]
  var i1090 = []
  for(var i = 0; i < i1091.length; i += 1) {
    i1090.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.Avatar+TOSPair', i1091[i + 0]) );
  }
  i1088.tos = i1090
  var i1093 = i1089[2]
  var i1092 = []
  for(var i = 0; i < i1093.length; i += 1) {
    i1092.push( i1093[i + 0] );
  }
  i1088.constant = i1092
  i1088.isValid = !!i1089[3]
  i1088.isHuman = !!i1089[4]
  i1088.hasRootMotion = !!i1089[5]
  return i1088
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.Avatar+TOSPair"] = function (request, data, root) {
  var i1096 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.Avatar+TOSPair' )
  var i1097 = data
  i1096.hash = i1097[0]
  i1096.path = i1097[1]
  return i1096
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame"] = function (request, data, root) {
  var i1100 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame' )
  var i1101 = data
  i1100.weight = i1101[0]
  i1100.vertices = i1101[1]
  i1100.normals = i1101[2]
  i1100.tangents = i1101[3]
  return i1100
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i1102 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i1103 = data
  request.r(i1103[0], i1103[1], 0, i1102, 'm_ObjectArgument')
  i1102.m_ObjectArgumentAssemblyTypeName = i1103[2]
  i1102.m_IntArgument = i1103[3]
  i1102.m_FloatArgument = i1103[4]
  i1102.m_StringArgument = i1103[5]
  i1102.m_BoolArgument = !!i1103[6]
  return i1102
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey"] = function (request, data, root) {
  var i1106 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey' )
  var i1107 = data
  i1106.time = i1107[0]
  request.r(i1107[1], i1107[2], 0, i1106, 'value')
  return i1106
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10,"graphicsFormat":11,"sRGBTexture":12,"desiredColorSpace":13,"wrapU":14,"wrapV":15},"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Assets.Mesh":{"name":0,"halfPrecision":1,"useSimplification":2,"useUInt32IndexFormat":3,"vertexCount":4,"aabb":5,"streams":6,"vertices":7,"subMeshes":8,"bindposes":9,"blendShapes":10},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh":{"triangles":0},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape":{"name":0,"frames":1},"Luna.Unity.DTO.UnityEngine.Components.Transform":{"position":0,"scale":3,"rotation":6},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystem":{"main":0,"colorBySpeed":1,"colorOverLifetime":2,"emission":3,"rotationBySpeed":4,"rotationOverLifetime":5,"shape":6,"sizeBySpeed":7,"sizeOverLifetime":8,"textureSheetAnimation":9,"velocityOverLifetime":10,"noise":11,"inheritVelocity":12,"forceOverLifetime":13,"limitVelocityOverLifetime":14,"useAutoRandomSeed":15,"randomSeed":16},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule":{"duration":0,"loop":1,"prewarm":2,"startDelay":3,"startLifetime":4,"startSpeed":5,"startSize3D":6,"startSizeX":7,"startSizeY":8,"startSizeZ":9,"startRotation3D":10,"startRotationX":11,"startRotationY":12,"startRotationZ":13,"startColor":14,"gravityModifier":15,"simulationSpace":16,"customSimulationSpace":17,"simulationSpeed":19,"useUnscaledTime":20,"scalingMode":21,"playOnAwake":22,"maxParticles":23,"emitterVelocityMode":24,"stopAction":25},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve":{"mode":0,"curveMin":1,"curveMax":2,"curveMultiplier":3,"constantMin":4,"constantMax":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient":{"mode":0,"gradientMin":1,"gradientMax":2,"colorMin":3,"colorMax":7},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient":{"mode":0,"colorKeys":1,"alphaKeys":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule":{"enabled":0,"color":1,"range":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey":{"color":0,"time":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey":{"alpha":0,"time":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule":{"enabled":0,"color":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule":{"enabled":0,"rateOverTime":1,"rateOverDistance":2,"bursts":3},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst":{"count":0,"cycleCount":1,"minCount":2,"maxCount":3,"repeatInterval":4,"time":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule":{"enabled":0,"shapeType":1,"randomDirectionAmount":2,"sphericalDirectionAmount":3,"randomPositionAmount":4,"alignToDirection":5,"radius":6,"radiusMode":7,"radiusSpread":8,"radiusSpeed":9,"radiusThickness":10,"angle":11,"length":12,"boxThickness":13,"meshShapeType":16,"mesh":17,"meshRenderer":19,"skinnedMeshRenderer":21,"useMeshMaterialIndex":23,"meshMaterialIndex":24,"useMeshColors":25,"normalOffset":26,"arc":27,"arcMode":28,"arcSpread":29,"arcSpeed":30,"donutRadius":31,"position":32,"rotation":35,"scale":38},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule":{"enabled":0,"mode":1,"animation":2,"numTilesX":3,"numTilesY":4,"useRandomRow":5,"frameOverTime":6,"startFrame":7,"cycleCount":8,"rowIndex":9,"flipU":10,"flipV":11,"spriteCount":12,"sprites":13},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"radial":4,"speedModifier":5,"space":6,"orbitalX":7,"orbitalY":8,"orbitalZ":9,"orbitalOffsetX":10,"orbitalOffsetY":11,"orbitalOffsetZ":12},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule":{"enabled":0,"separateAxes":1,"strengthX":2,"strengthY":3,"strengthZ":4,"frequency":5,"damping":6,"octaveCount":7,"octaveMultiplier":8,"octaveScale":9,"quality":10,"scrollSpeed":11,"scrollSpeedMultiplier":12,"remapEnabled":13,"remapX":14,"remapY":15,"remapZ":16,"positionAmount":17,"rotationAmount":18,"sizeAmount":19},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule":{"enabled":0,"mode":1,"curve":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"space":4,"randomized":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule":{"enabled":0,"limit":1,"limitX":2,"limitY":3,"limitZ":4,"dampen":5,"separateAxes":6,"space":7,"drag":8,"multiplyDragByParticleSize":9,"multiplyDragByParticleVelocity":10},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer":{"mesh":0,"meshCount":2,"activeVertexStreamsCount":3,"alignment":4,"renderMode":5,"sortMode":6,"lengthScale":7,"velocityScale":8,"cameraVelocityScale":9,"normalDirection":10,"sortingFudge":11,"minParticleSize":12,"maxParticleSize":13,"pivot":14,"trailMaterial":17,"applyActiveColorSpace":19,"enabled":20,"sharedMaterial":21,"sharedMaterials":23,"receiveShadows":24,"shadowCastingMode":25,"sortingLayerID":26,"sortingOrder":27,"lightmapIndex":28,"lightmapSceneIndex":29,"lightmapScaleOffset":30,"lightProbeUsage":34,"reflectionProbeUsage":35},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Textures.Cubemap":{"name":0,"atlasId":1,"mipmapCount":2,"hdr":3,"size":4,"anisoLevel":5,"filterMode":6,"rects":7,"wrapU":8,"wrapV":9},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"aspect":0,"orthographic":1,"orthographicSize":2,"backgroundColor":3,"nearClipPlane":7,"farClipPlane":8,"fieldOfView":9,"depth":10,"clearFlags":11,"cullingMask":12,"rect":13,"targetTexture":14,"usePhysicalProperties":16,"focalLength":17,"sensorSize":18,"lensShift":20,"gateFit":22,"commandBufferCount":23,"cameraType":24,"enabled":25},"Luna.Unity.DTO.UnityEngine.Components.Light":{"type":0,"color":1,"cullingMask":5,"intensity":6,"range":7,"spotAngle":8,"shadows":9,"shadowNormalBias":10,"shadowBias":11,"shadowStrength":12,"shadowResolution":13,"lightmapBakeType":14,"renderMode":15,"cookie":16,"cookieSize":18,"shadowNearPlane":19,"occlusionMaskChannel":20,"isBaked":21,"mixedLightingMode":22,"enabled":23},"Luna.Unity.DTO.UnityEngine.Components.AudioSource":{"clip":0,"outputAudioMixerGroup":2,"playOnAwake":4,"loop":5,"time":6,"volume":7,"pitch":8,"enabled":9},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"planeDistance":0,"referencePixelsPerUnit":1,"isFallbackOverlay":2,"renderMode":3,"renderOrder":4,"sortingLayerName":5,"sortingOrder":6,"scaleFactor":7,"worldCamera":8,"overrideSorting":10,"pixelPerfect":11,"targetDisplay":12,"overridePixelPerfect":13,"enabled":14},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer":{"sharedMesh":0,"bones":2,"updateWhenOffscreen":3,"localBounds":4,"rootBone":5,"blendShapesWeights":7,"enabled":8,"sharedMaterial":9,"sharedMaterials":11,"receiveShadows":12,"shadowCastingMode":13,"sortingLayerID":14,"sortingOrder":15,"lightmapIndex":16,"lightmapSceneIndex":17,"lightmapScaleOffset":18,"lightProbeUsage":22,"reflectionProbeUsage":23},"Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight":{"weight":0},"Luna.Unity.DTO.UnityEngine.Components.MeshFilter":{"sharedMesh":0},"Luna.Unity.DTO.UnityEngine.Components.MeshRenderer":{"additionalVertexStreams":0,"enabled":2,"sharedMaterial":3,"sharedMaterials":5,"receiveShadows":6,"shadowCastingMode":7,"sortingLayerID":8,"sortingOrder":9,"lightmapIndex":10,"lightmapSceneIndex":11,"lightmapScaleOffset":12,"lightProbeUsage":16,"reflectionProbeUsage":17},"Luna.Unity.DTO.UnityEngine.Components.BoxCollider":{"center":0,"size":3,"enabled":6,"isTrigger":7,"material":8},"Luna.Unity.DTO.UnityEngine.Components.Rigidbody":{"mass":0,"drag":1,"angularDrag":2,"useGravity":3,"isKinematic":4,"constraints":5,"maxAngularVelocity":6,"collisionDetectionMode":7,"interpolation":8},"Luna.Unity.DTO.UnityEngine.Components.ConfigurableJoint":{"angularXDrive":0,"angularXLimitSpring":1,"angularXMotion":2,"angularYLimit":3,"angularYMotion":4,"angularYZDrive":5,"angularYZLimitSpring":6,"angularZLimit":7,"angularZMotion":8,"configuredInWorldSpace":9,"highAngularXLimit":10,"linearLimit":11,"linearLimitSpring":12,"lowAngularXLimit":13,"rotationDriveMode":14,"secondaryAxis":15,"slerpDrive":18,"swapBodies":19,"targetAngularVelocity":20,"targetPosition":23,"targetRotation":26,"targetVelocity":30,"xDrive":33,"xMotion":34,"yDrive":35,"yMotion":36,"zDrive":37,"zMotion":38,"connectedBody":39,"axis":41,"anchor":44,"connectedAnchor":47,"autoConfigureConnectedAnchor":50,"massScale":51,"connectedMassScale":52,"enableCollision":53,"breakForce":54,"breakTorque":55},"Luna.Unity.DTO.UnityEngine.Components.CapsuleCollider":{"center":0,"radius":3,"height":4,"direction":5,"enabled":6,"isTrigger":7,"material":8},"Luna.Unity.DTO.UnityEngine.Components.Animator":{"animatorController":0,"avatar":2,"updateMode":4,"hasTransformHierarchy":5,"applyRootMotion":6,"humanBones":7,"enabled":8},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"customReflection":36,"defaultReflection":38,"defaultReflectionMode":40,"defaultReflectionResolution":41,"sunLightObjectId":42,"pixelLightCount":43,"defaultReflectionHDR":44,"hasLightDataAsset":45,"hasManualGenerate":46},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2,"shadowMask":4},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"hasDepthOnlyPass":10,"isCreatedByShaderGraph":11,"disableBatching":12,"compiled":13},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"exportedForWebGl2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.AudioClip":{"name":0},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip":{"name":0,"wrapMode":1,"isLooping":2,"length":3,"curves":4,"events":5,"halfPrecision":6,"_frameRate":7,"localBounds":8,"hasMuscleCurves":9,"clipMuscleConstant":10,"clipBindingConstant":11},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve":{"path":0,"hash":1,"componentType":2,"property":3,"keys":4,"objectReferenceKeys":5},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent":{"functionName":0,"floatParameter":1,"intParameter":2,"stringParameter":3,"objectReferenceParameter":4,"time":6},"Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds":{"center":0,"extends":3},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant":{"genericBindings":0,"pptrCurveMapping":1},"Luna.Unity.DTO.UnityEngine.Assets.Font":{"name":0,"ascent":1,"originalLineHeight":2,"fontSize":3,"characterInfo":4,"texture":5,"originalFontSize":7},"Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo":{"index":0,"advance":1,"bearing":2,"glyphWidth":3,"glyphHeight":4,"minX":5,"maxX":6,"minY":7,"maxY":8,"uvBottomLeftX":9,"uvBottomLeftY":10,"uvBottomRightX":11,"uvBottomRightY":12,"uvTopLeftX":13,"uvTopLeftY":14,"uvTopRightX":15,"uvTopRightY":16},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController":{"name":0,"layers":1,"parameters":2,"animationClips":3,"avatarUnsupported":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer":{"name":0,"defaultWeight":1,"blendingMode":2,"avatarMask":3,"syncedLayerIndex":4,"syncedLayerAffectsTiming":5,"syncedLayers":6,"stateMachine":7},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine":{"id":0,"name":1,"path":2,"states":3,"machines":4,"entryStateTransitions":5,"exitStateTransitions":6,"anyStateTransitions":7,"defaultStateId":8},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState":{"id":0,"name":1,"cycleOffset":2,"cycleOffsetParameter":3,"cycleOffsetParameterActive":4,"mirror":5,"mirrorParameter":6,"mirrorParameterActive":7,"motionId":8,"nameHash":9,"fullPathHash":10,"speed":11,"speedParameter":12,"speedParameterActive":13,"tag":14,"tagHash":15,"writeDefaultValues":16,"behaviours":17,"transitions":18},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition":{"fullPath":0,"canTransitionToSelf":1,"duration":2,"exitTime":3,"hasExitTime":4,"hasFixedDuration":5,"interruptionSource":6,"offset":7,"orderedInterruption":8,"destinationStateId":9,"isExit":10,"mute":11,"solo":12,"conditions":13},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition":{"mode":0,"parameter":1,"threshold":2},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition":{"destinationStateId":0,"isExit":1,"mute":2,"solo":3,"conditions":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter":{"defaultBool":0,"defaultFloat":1,"defaultInt":2,"name":3,"nameHash":4,"type":5},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorOverrideController":{"name":0,"_runtimeAnimatorController":1,"_originalAnimationClips":3,"_overrideAnimationClips":4,"_animationClips":5,"_animationClipPairs":6},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableStaticBatching":9,"enableDynamicBatching":10,"usePreservativeDynamicBatching":11,"lightmapEncodingQuality":12,"desiredColorSpace":13,"allTags":14},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.Avatar":{"name":0,"tos":1,"constant":2,"isValid":3,"isHuman":4,"hasRootMotion":5},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.Avatar+TOSPair":{"hash":0,"path":1},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame":{"weight":0,"vertices":1,"normals":2,"tangents":3},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey":{"time":0,"value":1}}

Deserializers.requiredComponents = {"52":[53],"54":[53],"55":[53],"56":[53],"57":[53],"58":[53],"59":[33],"60":[7],"61":[37],"38":[37],"62":[37],"63":[37],"64":[37],"65":[37],"66":[67],"68":[67],"69":[67],"70":[67],"71":[67],"72":[67],"73":[67],"74":[67],"75":[67],"76":[67],"77":[67],"78":[67],"79":[67],"80":[7],"81":[35],"82":[83],"84":[83],"25":[24],"85":[24],"86":[28,24],"87":[35],"88":[28,24],"89":[24],"90":[24],"91":[35,24],"92":[24,28],"93":[94],"95":[94],"96":[94],"97":[24],"98":[24],"27":[25],"31":[28,24],"99":[24],"26":[25],"100":[24],"101":[24],"102":[24],"103":[24],"104":[24],"105":[24],"106":[24],"107":[24],"108":[24],"21":[28,24],"109":[24],"110":[24],"111":[24],"112":[24],"20":[28,24],"113":[24],"114":[12],"115":[12],"13":[12],"116":[12],"117":[7],"118":[7]}

Deserializers.types = ["UnityEngine.Shader","UnityEngine.Texture2D","UnityEngine.Transform","UnityEngine.ParticleSystem","UnityEngine.ParticleSystemRenderer","UnityEngine.Mesh","UnityEngine.Material","UnityEngine.Camera","UnityEngine.AudioListener","UnityEngine.MonoBehaviour","CameraController","UnityEngine.EventSystems.UIBehaviour","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","UnityEngine.Light","GameController","UnityEngine.GameObject","UnityEngine.UI.Button","UnityEngine.AudioClip","LunaController","UnityEngine.UI.Text","UnityEngine.UI.RawImage","UnityEngine.AudioSource","AudioController","UnityEngine.RectTransform","UnityEngine.Canvas","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","UnityEngine.CanvasRenderer","UnityEngine.Font","DG.Tweening.DOTweenAnimation","UnityEngine.UI.Image","UnityEngine.Sprite","UnityEngine.SkinnedMeshRenderer","UnityEngine.MeshFilter","UnityEngine.MeshRenderer","UnityEngine.BoxCollider","UnityEngine.Rigidbody","UnityEngine.ConfigurableJoint","BodyPiece","UnityEngine.CapsuleCollider","TakeDamage","UnityEngine.Animator","UnityEngine.AnimatorOverrideController","UnityEngine.Avatar","BodyController","Dragable","UnityEditor.Animations.AnimatorController","DragController","UnityEngine.Cubemap","UnityEngine.AnimationClip","DG.Tweening.Core.DOTweenSettings","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.FlareLayer","UnityEngine.CharacterJoint","UnityEngine.ConstantForce","UnityEngine.FixedJoint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.CompositeCollider2D","UnityEngine.Rigidbody2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text","TMPro.TextContainer","TMPro.TextMeshPro","TMPro.TextMeshProUGUI","Unity.VisualScripting.SceneVariables","Unity.VisualScripting.Variables","Unity.VisualScripting.ScriptMachine","Unity.VisualScripting.StateMachine","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.Mask","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RectMask2D","UnityEngine.UI.ScrollRect","UnityEngine.UI.Scrollbar","UnityEngine.UI.Slider","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster"]

Deserializers.unityVersion = "6000.0.78f1";

Deserializers.productName = "SRG_V01";

Deserializers.lunaInitializationTime = "07/21/2026 03:45:20";

Deserializers.lunaDaysRunning = "4.3";

Deserializers.lunaVersion = "7.2.0";

Deserializers.lunaSHA = "ea08d29afe2968efcb8d91d5624f033c6485cc68";

Deserializers.creativeName = "SRG_V02_YenTTH_TamNTM";

Deserializers.lunaAppID = "41207";

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

Deserializers.runtimeAnalysisExcludedClassesCount = "1738";

Deserializers.runtimeAnalysisExcludedMethodsCount = "4523";

Deserializers.runtimeAnalysisExcludedModules = "physics2d";

Deserializers.isRuntimeAnalysisEnabledForShaders = "True";

Deserializers.isRealtimeShadowsEnabled = "True";

Deserializers.isLunaCompilerV2Used = "False";

Deserializers.companyName = "DefaultCompany";

Deserializers.buildPlatform = "Android";

Deserializers.applicationIdentifier = "com.DefaultCompany.SRG_V01";

Deserializers.disableAntiAliasing = true;

Deserializers.graphicsConstraint = 24;

Deserializers.linearColorSpace = true;

Deserializers.buildID = "e7b45a4c-8f6e-4075-b580-485fe16349ca";

Deserializers.runtimeInitializeOnLoadInfos = [[["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"],["UnityEngine","AI","NavMesh","ClearPreUpdateListeners"]],[],[],[["UnityEngine","Timeline","AnimatorBindingCache","ResetStaticsOnLoad"],["UnityEngine","Timeline","TrackAsset","ResetStaticsOnLoad"],["UnityEngine","Timeline","AnimationPreviewUtilities","ResetStaticsOnLoad"]]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

