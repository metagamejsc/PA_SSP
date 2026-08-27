var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i600 = root || request.c( 'UnityEngine.JointSpring' )
  var i601 = data
  i600.spring = i601[0]
  i600.damper = i601[1]
  i600.targetPosition = i601[2]
  return i600
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i602 = root || request.c( 'UnityEngine.JointMotor' )
  var i603 = data
  i602.m_TargetVelocity = i603[0]
  i602.m_Force = i603[1]
  i602.m_FreeSpin = i603[2]
  return i602
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i604 = root || request.c( 'UnityEngine.JointLimits' )
  var i605 = data
  i604.m_Min = i605[0]
  i604.m_Max = i605[1]
  i604.m_Bounciness = i605[2]
  i604.m_BounceMinVelocity = i605[3]
  i604.m_ContactDistance = i605[4]
  i604.minBounce = i605[5]
  i604.maxBounce = i605[6]
  return i604
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i606 = root || request.c( 'UnityEngine.JointDrive' )
  var i607 = data
  i606.m_PositionSpring = i607[0]
  i606.m_PositionDamper = i607[1]
  i606.m_MaximumForce = i607[2]
  i606.m_UseAcceleration = i607[3]
  return i606
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i608 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i609 = data
  i608.m_Spring = i609[0]
  i608.m_Damper = i609[1]
  return i608
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i610 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i611 = data
  i610.m_Limit = i611[0]
  i610.m_Bounciness = i611[1]
  i610.m_ContactDistance = i611[2]
  return i610
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i612 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i613 = data
  i612.m_ExtremumSlip = i613[0]
  i612.m_ExtremumValue = i613[1]
  i612.m_AsymptoteSlip = i613[2]
  i612.m_AsymptoteValue = i613[3]
  i612.m_Stiffness = i613[4]
  return i612
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i614 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i615 = data
  i614.m_LowerAngle = i615[0]
  i614.m_UpperAngle = i615[1]
  return i614
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i616 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i617 = data
  i616.m_MotorSpeed = i617[0]
  i616.m_MaximumMotorTorque = i617[1]
  return i616
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i618 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i619 = data
  i618.m_DampingRatio = i619[0]
  i618.m_Frequency = i619[1]
  i618.m_Angle = i619[2]
  return i618
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i620 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i621 = data
  i620.m_LowerTranslation = i621[0]
  i620.m_UpperTranslation = i621[1]
  return i620
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i622 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i623 = data
  i622.name = i623[0]
  i622.width = i623[1]
  i622.height = i623[2]
  i622.mipmapCount = i623[3]
  i622.anisoLevel = i623[4]
  i622.filterMode = i623[5]
  i622.hdr = !!i623[6]
  i622.format = i623[7]
  i622.wrapMode = i623[8]
  i622.alphaIsTransparency = !!i623[9]
  i622.alphaSource = i623[10]
  i622.graphicsFormat = i623[11]
  i622.sRGBTexture = !!i623[12]
  i622.desiredColorSpace = i623[13]
  i622.wrapU = i623[14]
  i622.wrapV = i623[15]
  return i622
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh"] = function (request, data, root) {
  var i624 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh' )
  var i625 = data
  i624.name = i625[0]
  i624.halfPrecision = !!i625[1]
  i624.useSimplification = !!i625[2]
  i624.useUInt32IndexFormat = !!i625[3]
  i624.vertexCount = i625[4]
  i624.aabb = i625[5]
  var i627 = i625[6]
  var i626 = []
  for(var i = 0; i < i627.length; i += 1) {
    i626.push( !!i627[i + 0] );
  }
  i624.streams = i626
  i624.vertices = i625[7]
  var i629 = i625[8]
  var i628 = []
  for(var i = 0; i < i629.length; i += 1) {
    i628.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh', i629[i + 0]) );
  }
  i624.subMeshes = i628
  var i631 = i625[9]
  var i630 = []
  for(var i = 0; i < i631.length; i += 16) {
    i630.push( new pc.Mat4().setData(i631[i + 0], i631[i + 1], i631[i + 2], i631[i + 3],  i631[i + 4], i631[i + 5], i631[i + 6], i631[i + 7],  i631[i + 8], i631[i + 9], i631[i + 10], i631[i + 11],  i631[i + 12], i631[i + 13], i631[i + 14], i631[i + 15]) );
  }
  i624.bindposes = i630
  var i633 = i625[10]
  var i632 = []
  for(var i = 0; i < i633.length; i += 1) {
    i632.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape', i633[i + 0]) );
  }
  i624.blendShapes = i632
  return i624
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh"] = function (request, data, root) {
  var i638 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh' )
  var i639 = data
  i638.triangles = i639[0]
  return i638
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape"] = function (request, data, root) {
  var i644 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape' )
  var i645 = data
  i644.name = i645[0]
  var i647 = i645[1]
  var i646 = []
  for(var i = 0; i < i647.length; i += 1) {
    i646.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame', i647[i + 0]) );
  }
  i644.frames = i646
  return i644
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i648 = root || new pc.UnityMaterial()
  var i649 = data
  i648.name = i649[0]
  request.r(i649[1], i649[2], 0, i648, 'shader')
  i648.renderQueue = i649[3]
  i648.enableInstancing = !!i649[4]
  var i651 = i649[5]
  var i650 = []
  for(var i = 0; i < i651.length; i += 1) {
    i650.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i651[i + 0]) );
  }
  i648.floatParameters = i650
  var i653 = i649[6]
  var i652 = []
  for(var i = 0; i < i653.length; i += 1) {
    i652.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i653[i + 0]) );
  }
  i648.colorParameters = i652
  var i655 = i649[7]
  var i654 = []
  for(var i = 0; i < i655.length; i += 1) {
    i654.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i655[i + 0]) );
  }
  i648.vectorParameters = i654
  var i657 = i649[8]
  var i656 = []
  for(var i = 0; i < i657.length; i += 1) {
    i656.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i657[i + 0]) );
  }
  i648.textureParameters = i656
  var i659 = i649[9]
  var i658 = []
  for(var i = 0; i < i659.length; i += 1) {
    i658.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i659[i + 0]) );
  }
  i648.materialFlags = i658
  return i648
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i662 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i663 = data
  i662.name = i663[0]
  i662.value = i663[1]
  return i662
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i666 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i667 = data
  i666.name = i667[0]
  i666.value = new pc.Color(i667[1], i667[2], i667[3], i667[4])
  return i666
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i670 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i671 = data
  i670.name = i671[0]
  i670.value = new pc.Vec4( i671[1], i671[2], i671[3], i671[4] )
  return i670
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i674 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i675 = data
  i674.name = i675[0]
  request.r(i675[1], i675[2], 0, i674, 'value')
  return i674
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i678 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i679 = data
  i678.name = i679[0]
  i678.enabled = !!i679[1]
  return i678
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i680 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i681 = data
  i680.position = new pc.Vec3( i681[0], i681[1], i681[2] )
  i680.scale = new pc.Vec3( i681[3], i681[4], i681[5] )
  i680.rotation = new pc.Quat(i681[6], i681[7], i681[8], i681[9])
  return i680
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Rigidbody"] = function (request, data, root) {
  var i682 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Rigidbody' )
  var i683 = data
  i682.mass = i683[0]
  i682.drag = i683[1]
  i682.angularDrag = i683[2]
  i682.useGravity = !!i683[3]
  i682.isKinematic = !!i683[4]
  i682.constraints = i683[5]
  i682.maxAngularVelocity = i683[6]
  i682.collisionDetectionMode = i683[7]
  i682.interpolation = i683[8]
  return i682
}

Deserializers["BulletController"] = function (request, data, root) {
  var i684 = root || request.c( 'BulletController' )
  var i685 = data
  request.r(i685[0], i685[1], 0, i684, 'rigid')
  i684.damage = i685[2]
  i684.speed = i685[3]
  i684.lifeTime = i685[4]
  request.r(i685[5], i685[6], 0, i684, 'hitSound')
  return i684
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshFilter"] = function (request, data, root) {
  var i686 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshFilter' )
  var i687 = data
  request.r(i687[0], i687[1], 0, i686, 'sharedMesh')
  return i686
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshRenderer"] = function (request, data, root) {
  var i688 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshRenderer' )
  var i689 = data
  request.r(i689[0], i689[1], 0, i688, 'additionalVertexStreams')
  i688.enabled = !!i689[2]
  request.r(i689[3], i689[4], 0, i688, 'sharedMaterial')
  var i691 = i689[5]
  var i690 = []
  for(var i = 0; i < i691.length; i += 2) {
  request.r(i691[i + 0], i691[i + 1], 2, i690, '')
  }
  i688.sharedMaterials = i690
  i688.receiveShadows = !!i689[6]
  i688.shadowCastingMode = i689[7]
  i688.sortingLayerID = i689[8]
  i688.sortingOrder = i689[9]
  i688.lightmapIndex = i689[10]
  i688.lightmapSceneIndex = i689[11]
  i688.lightmapScaleOffset = new pc.Vec4( i689[12], i689[13], i689[14], i689[15] )
  i688.lightProbeUsage = i689[16]
  i688.reflectionProbeUsage = i689[17]
  return i688
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i694 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i695 = data
  i694.name = i695[0]
  i694.tagId = i695[1]
  i694.enabled = !!i695[2]
  i694.isStatic = !!i695[3]
  i694.layer = i695[4]
  return i694
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.BoxCollider"] = function (request, data, root) {
  var i696 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.BoxCollider' )
  var i697 = data
  i696.center = new pc.Vec3( i697[0], i697[1], i697[2] )
  i696.size = new pc.Vec3( i697[3], i697[4], i697[5] )
  i696.enabled = !!i697[6]
  i696.isTrigger = !!i697[7]
  request.r(i697[8], i697[9], 0, i696, 'material')
  return i696
}

Deserializers["BombController"] = function (request, data, root) {
  var i698 = root || request.c( 'BombController' )
  var i699 = data
  i698.damage = i699[0]
  i698.delayAction = i699[1]
  i698.radius = i699[2]
  request.r(i699[3], i699[4], 0, i698, 'actionVFX')
  request.r(i699[5], i699[6], 0, i698, 'actionSFX')
  return i698
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshCollider"] = function (request, data, root) {
  var i700 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshCollider' )
  var i701 = data
  request.r(i701[0], i701[1], 0, i700, 'sharedMesh')
  i700.convex = !!i701[2]
  i700.enabled = !!i701[3]
  i700.isTrigger = !!i701[4]
  request.r(i701[5], i701[6], 0, i700, 'material')
  return i700
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystem"] = function (request, data, root) {
  var i702 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystem' )
  var i703 = data
  i702.main = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule', i703[0], i702.main)
  i702.colorBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule', i703[1], i702.colorBySpeed)
  i702.colorOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule', i703[2], i702.colorOverLifetime)
  i702.emission = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule', i703[3], i702.emission)
  i702.rotationBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule', i703[4], i702.rotationBySpeed)
  i702.rotationOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule', i703[5], i702.rotationOverLifetime)
  i702.shape = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule', i703[6], i702.shape)
  i702.sizeBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule', i703[7], i702.sizeBySpeed)
  i702.sizeOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule', i703[8], i702.sizeOverLifetime)
  i702.textureSheetAnimation = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule', i703[9], i702.textureSheetAnimation)
  i702.velocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule', i703[10], i702.velocityOverLifetime)
  i702.noise = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule', i703[11], i702.noise)
  i702.inheritVelocity = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule', i703[12], i702.inheritVelocity)
  i702.forceOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule', i703[13], i702.forceOverLifetime)
  i702.limitVelocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule', i703[14], i702.limitVelocityOverLifetime)
  i702.useAutoRandomSeed = !!i703[15]
  i702.randomSeed = i703[16]
  return i702
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule"] = function (request, data, root) {
  var i704 = root || new pc.ParticleSystemMain()
  var i705 = data
  i704.duration = i705[0]
  i704.loop = !!i705[1]
  i704.prewarm = !!i705[2]
  i704.startDelay = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i705[3], i704.startDelay)
  i704.startLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i705[4], i704.startLifetime)
  i704.startSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i705[5], i704.startSpeed)
  i704.startSize3D = !!i705[6]
  i704.startSizeX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i705[7], i704.startSizeX)
  i704.startSizeY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i705[8], i704.startSizeY)
  i704.startSizeZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i705[9], i704.startSizeZ)
  i704.startRotation3D = !!i705[10]
  i704.startRotationX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i705[11], i704.startRotationX)
  i704.startRotationY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i705[12], i704.startRotationY)
  i704.startRotationZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i705[13], i704.startRotationZ)
  i704.startColor = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i705[14], i704.startColor)
  i704.gravityModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i705[15], i704.gravityModifier)
  i704.simulationSpace = i705[16]
  request.r(i705[17], i705[18], 0, i704, 'customSimulationSpace')
  i704.simulationSpeed = i705[19]
  i704.useUnscaledTime = !!i705[20]
  i704.scalingMode = i705[21]
  i704.playOnAwake = !!i705[22]
  i704.maxParticles = i705[23]
  i704.emitterVelocityMode = i705[24]
  i704.stopAction = i705[25]
  return i704
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve"] = function (request, data, root) {
  var i706 = root || new pc.MinMaxCurve()
  var i707 = data
  i706.mode = i707[0]
  i706.curveMin = new pc.AnimationCurve( { keys_flow: i707[1] } )
  i706.curveMax = new pc.AnimationCurve( { keys_flow: i707[2] } )
  i706.curveMultiplier = i707[3]
  i706.constantMin = i707[4]
  i706.constantMax = i707[5]
  return i706
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient"] = function (request, data, root) {
  var i708 = root || new pc.MinMaxGradient()
  var i709 = data
  i708.mode = i709[0]
  i708.gradientMin = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i709[1], i708.gradientMin)
  i708.gradientMax = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i709[2], i708.gradientMax)
  i708.colorMin = new pc.Color(i709[3], i709[4], i709[5], i709[6])
  i708.colorMax = new pc.Color(i709[7], i709[8], i709[9], i709[10])
  return i708
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient"] = function (request, data, root) {
  var i710 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient' )
  var i711 = data
  i710.mode = i711[0]
  var i713 = i711[1]
  var i712 = []
  for(var i = 0; i < i713.length; i += 1) {
    i712.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey', i713[i + 0]) );
  }
  i710.colorKeys = i712
  var i715 = i711[2]
  var i714 = []
  for(var i = 0; i < i715.length; i += 1) {
    i714.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey', i715[i + 0]) );
  }
  i710.alphaKeys = i714
  return i710
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule"] = function (request, data, root) {
  var i716 = root || new pc.ParticleSystemColorBySpeed()
  var i717 = data
  i716.enabled = !!i717[0]
  i716.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i717[1], i716.color)
  i716.range = new pc.Vec2( i717[2], i717[3] )
  return i716
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey"] = function (request, data, root) {
  var i720 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey' )
  var i721 = data
  i720.color = new pc.Color(i721[0], i721[1], i721[2], i721[3])
  i720.time = i721[4]
  return i720
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey"] = function (request, data, root) {
  var i724 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey' )
  var i725 = data
  i724.alpha = i725[0]
  i724.time = i725[1]
  return i724
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule"] = function (request, data, root) {
  var i726 = root || new pc.ParticleSystemColorOverLifetime()
  var i727 = data
  i726.enabled = !!i727[0]
  i726.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i727[1], i726.color)
  return i726
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule"] = function (request, data, root) {
  var i728 = root || new pc.ParticleSystemEmitter()
  var i729 = data
  i728.enabled = !!i729[0]
  i728.rateOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i729[1], i728.rateOverTime)
  i728.rateOverDistance = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i729[2], i728.rateOverDistance)
  var i731 = i729[3]
  var i730 = []
  for(var i = 0; i < i731.length; i += 1) {
    i730.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst', i731[i + 0]) );
  }
  i728.bursts = i730
  return i728
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst"] = function (request, data, root) {
  var i734 = root || new pc.ParticleSystemBurst()
  var i735 = data
  i734.count = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i735[0], i734.count)
  i734.cycleCount = i735[1]
  i734.minCount = i735[2]
  i734.maxCount = i735[3]
  i734.repeatInterval = i735[4]
  i734.time = i735[5]
  return i734
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule"] = function (request, data, root) {
  var i736 = root || new pc.ParticleSystemRotationBySpeed()
  var i737 = data
  i736.enabled = !!i737[0]
  i736.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i737[1], i736.x)
  i736.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i737[2], i736.y)
  i736.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i737[3], i736.z)
  i736.separateAxes = !!i737[4]
  i736.range = new pc.Vec2( i737[5], i737[6] )
  return i736
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule"] = function (request, data, root) {
  var i738 = root || new pc.ParticleSystemRotationOverLifetime()
  var i739 = data
  i738.enabled = !!i739[0]
  i738.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i739[1], i738.x)
  i738.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i739[2], i738.y)
  i738.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i739[3], i738.z)
  i738.separateAxes = !!i739[4]
  return i738
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule"] = function (request, data, root) {
  var i740 = root || new pc.ParticleSystemShape()
  var i741 = data
  i740.enabled = !!i741[0]
  i740.shapeType = i741[1]
  i740.randomDirectionAmount = i741[2]
  i740.sphericalDirectionAmount = i741[3]
  i740.randomPositionAmount = i741[4]
  i740.alignToDirection = !!i741[5]
  i740.radius = i741[6]
  i740.radiusMode = i741[7]
  i740.radiusSpread = i741[8]
  i740.radiusSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i741[9], i740.radiusSpeed)
  i740.radiusThickness = i741[10]
  i740.angle = i741[11]
  i740.length = i741[12]
  i740.boxThickness = new pc.Vec3( i741[13], i741[14], i741[15] )
  i740.meshShapeType = i741[16]
  request.r(i741[17], i741[18], 0, i740, 'mesh')
  request.r(i741[19], i741[20], 0, i740, 'meshRenderer')
  request.r(i741[21], i741[22], 0, i740, 'skinnedMeshRenderer')
  i740.useMeshMaterialIndex = !!i741[23]
  i740.meshMaterialIndex = i741[24]
  i740.useMeshColors = !!i741[25]
  i740.normalOffset = i741[26]
  i740.arc = i741[27]
  i740.arcMode = i741[28]
  i740.arcSpread = i741[29]
  i740.arcSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i741[30], i740.arcSpeed)
  i740.donutRadius = i741[31]
  i740.position = new pc.Vec3( i741[32], i741[33], i741[34] )
  i740.rotation = new pc.Vec3( i741[35], i741[36], i741[37] )
  i740.scale = new pc.Vec3( i741[38], i741[39], i741[40] )
  return i740
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule"] = function (request, data, root) {
  var i742 = root || new pc.ParticleSystemSizeBySpeed()
  var i743 = data
  i742.enabled = !!i743[0]
  i742.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i743[1], i742.x)
  i742.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i743[2], i742.y)
  i742.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i743[3], i742.z)
  i742.separateAxes = !!i743[4]
  i742.range = new pc.Vec2( i743[5], i743[6] )
  return i742
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule"] = function (request, data, root) {
  var i744 = root || new pc.ParticleSystemSizeOverLifetime()
  var i745 = data
  i744.enabled = !!i745[0]
  i744.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i745[1], i744.x)
  i744.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i745[2], i744.y)
  i744.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i745[3], i744.z)
  i744.separateAxes = !!i745[4]
  return i744
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule"] = function (request, data, root) {
  var i746 = root || new pc.ParticleSystemTextureSheetAnimation()
  var i747 = data
  i746.enabled = !!i747[0]
  i746.mode = i747[1]
  i746.animation = i747[2]
  i746.numTilesX = i747[3]
  i746.numTilesY = i747[4]
  i746.useRandomRow = !!i747[5]
  i746.frameOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i747[6], i746.frameOverTime)
  i746.startFrame = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i747[7], i746.startFrame)
  i746.cycleCount = i747[8]
  i746.rowIndex = i747[9]
  i746.flipU = i747[10]
  i746.flipV = i747[11]
  i746.spriteCount = i747[12]
  var i749 = i747[13]
  var i748 = []
  for(var i = 0; i < i749.length; i += 2) {
  request.r(i749[i + 0], i749[i + 1], 2, i748, '')
  }
  i746.sprites = i748
  return i746
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule"] = function (request, data, root) {
  var i752 = root || new pc.ParticleSystemVelocityOverLifetime()
  var i753 = data
  i752.enabled = !!i753[0]
  i752.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i753[1], i752.x)
  i752.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i753[2], i752.y)
  i752.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i753[3], i752.z)
  i752.radial = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i753[4], i752.radial)
  i752.speedModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i753[5], i752.speedModifier)
  i752.space = i753[6]
  i752.orbitalX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i753[7], i752.orbitalX)
  i752.orbitalY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i753[8], i752.orbitalY)
  i752.orbitalZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i753[9], i752.orbitalZ)
  i752.orbitalOffsetX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i753[10], i752.orbitalOffsetX)
  i752.orbitalOffsetY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i753[11], i752.orbitalOffsetY)
  i752.orbitalOffsetZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i753[12], i752.orbitalOffsetZ)
  return i752
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule"] = function (request, data, root) {
  var i754 = root || new pc.ParticleSystemNoise()
  var i755 = data
  i754.enabled = !!i755[0]
  i754.separateAxes = !!i755[1]
  i754.strengthX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i755[2], i754.strengthX)
  i754.strengthY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i755[3], i754.strengthY)
  i754.strengthZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i755[4], i754.strengthZ)
  i754.frequency = i755[5]
  i754.damping = !!i755[6]
  i754.octaveCount = i755[7]
  i754.octaveMultiplier = i755[8]
  i754.octaveScale = i755[9]
  i754.quality = i755[10]
  i754.scrollSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i755[11], i754.scrollSpeed)
  i754.scrollSpeedMultiplier = i755[12]
  i754.remapEnabled = !!i755[13]
  i754.remapX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i755[14], i754.remapX)
  i754.remapY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i755[15], i754.remapY)
  i754.remapZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i755[16], i754.remapZ)
  i754.positionAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i755[17], i754.positionAmount)
  i754.rotationAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i755[18], i754.rotationAmount)
  i754.sizeAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i755[19], i754.sizeAmount)
  return i754
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule"] = function (request, data, root) {
  var i756 = root || new pc.ParticleSystemInheritVelocity()
  var i757 = data
  i756.enabled = !!i757[0]
  i756.mode = i757[1]
  i756.curve = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i757[2], i756.curve)
  return i756
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule"] = function (request, data, root) {
  var i758 = root || new pc.ParticleSystemForceOverLifetime()
  var i759 = data
  i758.enabled = !!i759[0]
  i758.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i759[1], i758.x)
  i758.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i759[2], i758.y)
  i758.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i759[3], i758.z)
  i758.space = i759[4]
  i758.randomized = !!i759[5]
  return i758
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule"] = function (request, data, root) {
  var i760 = root || new pc.ParticleSystemLimitVelocityOverLifetime()
  var i761 = data
  i760.enabled = !!i761[0]
  i760.limit = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i761[1], i760.limit)
  i760.limitX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i761[2], i760.limitX)
  i760.limitY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i761[3], i760.limitY)
  i760.limitZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i761[4], i760.limitZ)
  i760.dampen = i761[5]
  i760.separateAxes = !!i761[6]
  i760.space = i761[7]
  i760.drag = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i761[8], i760.drag)
  i760.multiplyDragByParticleSize = !!i761[9]
  i760.multiplyDragByParticleVelocity = !!i761[10]
  return i760
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer"] = function (request, data, root) {
  var i762 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer' )
  var i763 = data
  request.r(i763[0], i763[1], 0, i762, 'mesh')
  i762.meshCount = i763[2]
  i762.activeVertexStreamsCount = i763[3]
  i762.alignment = i763[4]
  i762.renderMode = i763[5]
  i762.sortMode = i763[6]
  i762.lengthScale = i763[7]
  i762.velocityScale = i763[8]
  i762.cameraVelocityScale = i763[9]
  i762.normalDirection = i763[10]
  i762.sortingFudge = i763[11]
  i762.minParticleSize = i763[12]
  i762.maxParticleSize = i763[13]
  i762.pivot = new pc.Vec3( i763[14], i763[15], i763[16] )
  request.r(i763[17], i763[18], 0, i762, 'trailMaterial')
  i762.applyActiveColorSpace = !!i763[19]
  i762.enabled = !!i763[20]
  request.r(i763[21], i763[22], 0, i762, 'sharedMaterial')
  var i765 = i763[23]
  var i764 = []
  for(var i = 0; i < i765.length; i += 2) {
  request.r(i765[i + 0], i765[i + 1], 2, i764, '')
  }
  i762.sharedMaterials = i764
  i762.receiveShadows = !!i763[24]
  i762.shadowCastingMode = i763[25]
  i762.sortingLayerID = i763[26]
  i762.sortingOrder = i763[27]
  i762.lightmapIndex = i763[28]
  i762.lightmapSceneIndex = i763[29]
  i762.lightmapScaleOffset = new pc.Vec4( i763[30], i763[31], i763[32], i763[33] )
  i762.lightProbeUsage = i763[34]
  i762.reflectionProbeUsage = i763[35]
  return i762
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CapsuleCollider"] = function (request, data, root) {
  var i766 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CapsuleCollider' )
  var i767 = data
  i766.center = new pc.Vec3( i767[0], i767[1], i767[2] )
  i766.radius = i767[3]
  i766.height = i767[4]
  i766.direction = i767[5]
  i766.enabled = !!i767[6]
  i766.isTrigger = !!i767[7]
  request.r(i767[8], i767[9], 0, i766, 'material')
  return i766
}

Deserializers["BlockController"] = function (request, data, root) {
  var i768 = root || request.c( 'BlockController' )
  var i769 = data
  i768.heath = i769[0]
  request.r(i769[1], i769[2], 0, i768, 'breakSound')
  var i771 = i769[3]
  var i770 = new (System.Collections.Generic.List$1(Bridge.ns('Damageable')))
  for(var i = 0; i < i771.length; i += 2) {
  request.r(i771[i + 0], i771[i + 1], 1, i770, '')
  }
  i768.damageables = i770
  request.r(i769[4], i769[5], 0, i768, 'breakVFX')
  return i768
}

Deserializers["Damageable"] = function (request, data, root) {
  var i774 = root || request.c( 'Damageable' )
  var i775 = data
  return i774
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Cubemap"] = function (request, data, root) {
  var i776 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Cubemap' )
  var i777 = data
  i776.name = i777[0]
  i776.atlasId = i777[1]
  i776.mipmapCount = i777[2]
  i776.hdr = !!i777[3]
  i776.size = i777[4]
  i776.anisoLevel = i777[5]
  i776.filterMode = i777[6]
  var i779 = i777[7]
  var i778 = []
  for(var i = 0; i < i779.length; i += 4) {
    i778.push( UnityEngine.Rect.MinMaxRect(i779[i + 0], i779[i + 1], i779[i + 2], i779[i + 3]) );
  }
  i776.rects = i778
  i776.wrapU = i777[8]
  i776.wrapV = i777[9]
  return i776
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i782 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i783 = data
  i782.name = i783[0]
  i782.index = i783[1]
  i782.startup = !!i783[2]
  return i782
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i784 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i785 = data
  i784.aspect = i785[0]
  i784.orthographic = !!i785[1]
  i784.orthographicSize = i785[2]
  i784.backgroundColor = new pc.Color(i785[3], i785[4], i785[5], i785[6])
  i784.nearClipPlane = i785[7]
  i784.farClipPlane = i785[8]
  i784.fieldOfView = i785[9]
  i784.depth = i785[10]
  i784.clearFlags = i785[11]
  i784.cullingMask = i785[12]
  i784.rect = i785[13]
  request.r(i785[14], i785[15], 0, i784, 'targetTexture')
  i784.usePhysicalProperties = !!i785[16]
  i784.focalLength = i785[17]
  i784.sensorSize = new pc.Vec2( i785[18], i785[19] )
  i784.lensShift = new pc.Vec2( i785[20], i785[21] )
  i784.gateFit = i785[22]
  i784.commandBufferCount = i785[23]
  i784.cameraType = i785[24]
  i784.enabled = !!i785[25]
  return i784
}

Deserializers["CameraController"] = function (request, data, root) {
  var i786 = root || request.c( 'CameraController' )
  var i787 = data
  request.r(i787[0], i787[1], 0, i786, 'cam')
  i786.por = i787[2]
  i786.land = i787[3]
  return i786
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i788 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i789 = data
  request.r(i789[0], i789[1], 0, i788, 'm_FirstSelected')
  i788.m_sendNavigationEvents = !!i789[2]
  i788.m_DragThreshold = i789[3]
  return i788
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i790 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i791 = data
  i790.m_HorizontalAxis = i791[0]
  i790.m_VerticalAxis = i791[1]
  i790.m_SubmitButton = i791[2]
  i790.m_CancelButton = i791[3]
  i790.m_InputActionsPerSecond = i791[4]
  i790.m_RepeatDelay = i791[5]
  i790.m_ForceModuleActive = !!i791[6]
  i790.m_SendPointerHoverToParent = !!i791[7]
  return i790
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Light"] = function (request, data, root) {
  var i792 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Light' )
  var i793 = data
  i792.type = i793[0]
  i792.color = new pc.Color(i793[1], i793[2], i793[3], i793[4])
  i792.cullingMask = i793[5]
  i792.intensity = i793[6]
  i792.range = i793[7]
  i792.spotAngle = i793[8]
  i792.shadows = i793[9]
  i792.shadowNormalBias = i793[10]
  i792.shadowBias = i793[11]
  i792.shadowStrength = i793[12]
  i792.shadowResolution = i793[13]
  i792.lightmapBakeType = i793[14]
  i792.renderMode = i793[15]
  request.r(i793[16], i793[17], 0, i792, 'cookie')
  i792.cookieSize = i793[18]
  i792.shadowNearPlane = i793[19]
  i792.occlusionMaskChannel = i793[20]
  i792.isBaked = !!i793[21]
  i792.mixedLightingMode = i793[22]
  i792.enabled = !!i793[23]
  return i792
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i794 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i795 = data
  i794.pivot = new pc.Vec2( i795[0], i795[1] )
  i794.anchorMin = new pc.Vec2( i795[2], i795[3] )
  i794.anchorMax = new pc.Vec2( i795[4], i795[5] )
  i794.sizeDelta = new pc.Vec2( i795[6], i795[7] )
  i794.anchoredPosition3D = new pc.Vec3( i795[8], i795[9], i795[10] )
  i794.rotation = new pc.Quat(i795[11], i795[12], i795[13], i795[14])
  i794.scale = new pc.Vec3( i795[15], i795[16], i795[17] )
  return i794
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i796 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i797 = data
  i796.planeDistance = i797[0]
  i796.referencePixelsPerUnit = i797[1]
  i796.isFallbackOverlay = !!i797[2]
  i796.renderMode = i797[3]
  i796.renderOrder = i797[4]
  i796.sortingLayerName = i797[5]
  i796.sortingOrder = i797[6]
  i796.scaleFactor = i797[7]
  request.r(i797[8], i797[9], 0, i796, 'worldCamera')
  i796.overrideSorting = !!i797[10]
  i796.pixelPerfect = !!i797[11]
  i796.targetDisplay = i797[12]
  i796.overridePixelPerfect = !!i797[13]
  i796.enabled = !!i797[14]
  return i796
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i798 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i799 = data
  i798.m_UiScaleMode = i799[0]
  i798.m_ReferencePixelsPerUnit = i799[1]
  i798.m_ScaleFactor = i799[2]
  i798.m_ReferenceResolution = new pc.Vec2( i799[3], i799[4] )
  i798.m_ScreenMatchMode = i799[5]
  i798.m_MatchWidthOrHeight = i799[6]
  i798.m_PhysicalUnit = i799[7]
  i798.m_FallbackScreenDPI = i799[8]
  i798.m_DefaultSpriteDPI = i799[9]
  i798.m_DynamicPixelsPerUnit = i799[10]
  i798.m_PresetInfoIsWorld = !!i799[11]
  return i798
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i800 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i801 = data
  i800.m_IgnoreReversedGraphics = !!i801[0]
  i800.m_BlockingObjects = i801[1]
  i800.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i801[2] )
  return i800
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i802 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i803 = data
  i802.cullTransparentMesh = !!i803[0]
  return i802
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i804 = root || request.c( 'UnityEngine.UI.Image' )
  var i805 = data
  request.r(i805[0], i805[1], 0, i804, 'm_Sprite')
  i804.m_Type = i805[2]
  i804.m_PreserveAspect = !!i805[3]
  i804.m_FillCenter = !!i805[4]
  i804.m_FillMethod = i805[5]
  i804.m_FillAmount = i805[6]
  i804.m_FillClockwise = !!i805[7]
  i804.m_FillOrigin = i805[8]
  i804.m_UseSpriteMesh = !!i805[9]
  i804.m_PixelsPerUnitMultiplier = i805[10]
  request.r(i805[11], i805[12], 0, i804, 'm_Material')
  i804.m_Maskable = !!i805[13]
  i804.m_Color = new pc.Color(i805[14], i805[15], i805[16], i805[17])
  i804.m_RaycastTarget = !!i805[18]
  i804.m_RaycastPadding = new pc.Vec4( i805[19], i805[20], i805[21], i805[22] )
  return i804
}

Deserializers["UnityEngine.UI.Text"] = function (request, data, root) {
  var i806 = root || request.c( 'UnityEngine.UI.Text' )
  var i807 = data
  i806.m_FontData = request.d('UnityEngine.UI.FontData', i807[0], i806.m_FontData)
  i806.m_Text = i807[1]
  request.r(i807[2], i807[3], 0, i806, 'm_Material')
  i806.m_Maskable = !!i807[4]
  i806.m_Color = new pc.Color(i807[5], i807[6], i807[7], i807[8])
  i806.m_RaycastTarget = !!i807[9]
  i806.m_RaycastPadding = new pc.Vec4( i807[10], i807[11], i807[12], i807[13] )
  return i806
}

Deserializers["UnityEngine.UI.FontData"] = function (request, data, root) {
  var i808 = root || request.c( 'UnityEngine.UI.FontData' )
  var i809 = data
  request.r(i809[0], i809[1], 0, i808, 'm_Font')
  i808.m_FontSize = i809[2]
  i808.m_FontStyle = i809[3]
  i808.m_BestFit = !!i809[4]
  i808.m_MinSize = i809[5]
  i808.m_MaxSize = i809[6]
  i808.m_Alignment = i809[7]
  i808.m_AlignByGeometry = !!i809[8]
  i808.m_RichText = !!i809[9]
  i808.m_HorizontalOverflow = i809[10]
  i808.m_VerticalOverflow = i809[11]
  i808.m_LineSpacing = i809[12]
  return i808
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i810 = root || request.c( 'UnityEngine.UI.Button' )
  var i811 = data
  i810.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i811[0], i810.m_OnClick)
  i810.m_Navigation = request.d('UnityEngine.UI.Navigation', i811[1], i810.m_Navigation)
  i810.m_Transition = i811[2]
  i810.m_Colors = request.d('UnityEngine.UI.ColorBlock', i811[3], i810.m_Colors)
  i810.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i811[4], i810.m_SpriteState)
  i810.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i811[5], i810.m_AnimationTriggers)
  i810.m_Interactable = !!i811[6]
  request.r(i811[7], i811[8], 0, i810, 'm_TargetGraphic')
  return i810
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i812 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i813 = data
  i812.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i813[0], i812.m_PersistentCalls)
  return i812
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i814 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i815 = data
  var i817 = i815[0]
  var i816 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i817.length; i += 1) {
    i816.add(request.d('UnityEngine.Events.PersistentCall', i817[i + 0]));
  }
  i814.m_Calls = i816
  return i814
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i820 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i821 = data
  request.r(i821[0], i821[1], 0, i820, 'm_Target')
  i820.m_TargetAssemblyTypeName = i821[2]
  i820.m_MethodName = i821[3]
  i820.m_Mode = i821[4]
  i820.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i821[5], i820.m_Arguments)
  i820.m_CallState = i821[6]
  return i820
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i822 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i823 = data
  i822.m_Mode = i823[0]
  i822.m_WrapAround = !!i823[1]
  request.r(i823[2], i823[3], 0, i822, 'm_SelectOnUp')
  request.r(i823[4], i823[5], 0, i822, 'm_SelectOnDown')
  request.r(i823[6], i823[7], 0, i822, 'm_SelectOnLeft')
  request.r(i823[8], i823[9], 0, i822, 'm_SelectOnRight')
  return i822
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i824 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i825 = data
  i824.m_NormalColor = new pc.Color(i825[0], i825[1], i825[2], i825[3])
  i824.m_HighlightedColor = new pc.Color(i825[4], i825[5], i825[6], i825[7])
  i824.m_PressedColor = new pc.Color(i825[8], i825[9], i825[10], i825[11])
  i824.m_SelectedColor = new pc.Color(i825[12], i825[13], i825[14], i825[15])
  i824.m_DisabledColor = new pc.Color(i825[16], i825[17], i825[18], i825[19])
  i824.m_ColorMultiplier = i825[20]
  i824.m_FadeDuration = i825[21]
  return i824
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i826 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i827 = data
  request.r(i827[0], i827[1], 0, i826, 'm_HighlightedSprite')
  request.r(i827[2], i827[3], 0, i826, 'm_PressedSprite')
  request.r(i827[4], i827[5], 0, i826, 'm_SelectedSprite')
  request.r(i827[6], i827[7], 0, i826, 'm_DisabledSprite')
  return i826
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i828 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i829 = data
  i828.m_NormalTrigger = i829[0]
  i828.m_HighlightedTrigger = i829[1]
  i828.m_PressedTrigger = i829[2]
  i828.m_SelectedTrigger = i829[3]
  i828.m_DisabledTrigger = i829[4]
  return i828
}

Deserializers["DG.Tweening.DOTweenAnimation"] = function (request, data, root) {
  var i830 = root || request.c( 'DG.Tweening.DOTweenAnimation' )
  var i831 = data
  i830.targetIsSelf = !!i831[0]
  request.r(i831[1], i831[2], 0, i830, 'targetGO')
  i830.tweenTargetIsTargetGO = !!i831[3]
  i830.delay = i831[4]
  i830.duration = i831[5]
  i830.easeType = i831[6]
  i830.easeCurve = new pc.AnimationCurve( { keys_flow: i831[7] } )
  i830.loopType = i831[8]
  i830.loops = i831[9]
  i830.id = i831[10]
  i830.isRelative = !!i831[11]
  i830.isFrom = !!i831[12]
  i830.isIndependentUpdate = !!i831[13]
  i830.autoKill = !!i831[14]
  i830.autoGenerate = !!i831[15]
  i830.isActive = !!i831[16]
  i830.isValid = !!i831[17]
  request.r(i831[18], i831[19], 0, i830, 'target')
  i830.animationType = i831[20]
  i830.targetType = i831[21]
  i830.forcedTargetType = i831[22]
  i830.autoPlay = !!i831[23]
  i830.useTargetAsV3 = !!i831[24]
  i830.endValueFloat = i831[25]
  i830.endValueV3 = new pc.Vec3( i831[26], i831[27], i831[28] )
  i830.endValueV2 = new pc.Vec2( i831[29], i831[30] )
  i830.endValueColor = new pc.Color(i831[31], i831[32], i831[33], i831[34])
  i830.endValueString = i831[35]
  i830.endValueRect = UnityEngine.Rect.MinMaxRect(i831[36], i831[37], i831[38], i831[39])
  request.r(i831[40], i831[41], 0, i830, 'endValueTransform')
  i830.optionalBool0 = !!i831[42]
  i830.optionalBool1 = !!i831[43]
  i830.optionalFloat0 = i831[44]
  i830.optionalInt0 = i831[45]
  i830.optionalRotationMode = i831[46]
  i830.optionalScrambleMode = i831[47]
  i830.optionalShakeRandomnessMode = i831[48]
  i830.optionalString = i831[49]
  i830.updateType = i831[50]
  i830.isSpeedBased = !!i831[51]
  i830.hasOnStart = !!i831[52]
  i830.hasOnPlay = !!i831[53]
  i830.hasOnUpdate = !!i831[54]
  i830.hasOnStepComplete = !!i831[55]
  i830.hasOnComplete = !!i831[56]
  i830.hasOnTweenCreated = !!i831[57]
  i830.hasOnRewind = !!i831[58]
  i830.onStart = request.d('UnityEngine.Events.UnityEvent', i831[59], i830.onStart)
  i830.onPlay = request.d('UnityEngine.Events.UnityEvent', i831[60], i830.onPlay)
  i830.onUpdate = request.d('UnityEngine.Events.UnityEvent', i831[61], i830.onUpdate)
  i830.onStepComplete = request.d('UnityEngine.Events.UnityEvent', i831[62], i830.onStepComplete)
  i830.onComplete = request.d('UnityEngine.Events.UnityEvent', i831[63], i830.onComplete)
  i830.onTweenCreated = request.d('UnityEngine.Events.UnityEvent', i831[64], i830.onTweenCreated)
  i830.onRewind = request.d('UnityEngine.Events.UnityEvent', i831[65], i830.onRewind)
  return i830
}

Deserializers["UnityEngine.Events.UnityEvent"] = function (request, data, root) {
  var i832 = root || request.c( 'UnityEngine.Events.UnityEvent' )
  var i833 = data
  i832.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i833[0], i832.m_PersistentCalls)
  return i832
}

Deserializers["TutController"] = function (request, data, root) {
  var i834 = root || request.c( 'TutController' )
  var i835 = data
  var i837 = i835[0]
  var i836 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Vector2')))
  for(var i = 0; i < i837.length; i += 2) {
    i836.add(new pc.Vec2( i837[i + 0], i837[i + 1] ));
  }
  i834.movePos = i836
  i834.moveTime = i835[1]
  i834.fromScale = i835[2]
  i834.toScale = i835[3]
  i834.scaleTime = i835[4]
  return i834
}

Deserializers["UnityEngine.UI.RawImage"] = function (request, data, root) {
  var i840 = root || request.c( 'UnityEngine.UI.RawImage' )
  var i841 = data
  request.r(i841[0], i841[1], 0, i840, 'm_Texture')
  i840.m_UVRect = UnityEngine.Rect.MinMaxRect(i841[2], i841[3], i841[4], i841[5])
  request.r(i841[6], i841[7], 0, i840, 'm_Material')
  i840.m_Maskable = !!i841[8]
  i840.m_Color = new pc.Color(i841[9], i841[10], i841[11], i841[12])
  i840.m_RaycastTarget = !!i841[13]
  i840.m_RaycastPadding = new pc.Vec4( i841[14], i841[15], i841[16], i841[17] )
  return i840
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer"] = function (request, data, root) {
  var i842 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer' )
  var i843 = data
  request.r(i843[0], i843[1], 0, i842, 'sharedMesh')
  var i845 = i843[2]
  var i844 = []
  for(var i = 0; i < i845.length; i += 2) {
  request.r(i845[i + 0], i845[i + 1], 2, i844, '')
  }
  i842.bones = i844
  i842.updateWhenOffscreen = !!i843[3]
  i842.localBounds = i843[4]
  request.r(i843[5], i843[6], 0, i842, 'rootBone')
  var i847 = i843[7]
  var i846 = []
  for(var i = 0; i < i847.length; i += 1) {
    i846.push( request.d('Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight', i847[i + 0]) );
  }
  i842.blendShapesWeights = i846
  i842.enabled = !!i843[8]
  request.r(i843[9], i843[10], 0, i842, 'sharedMaterial')
  var i849 = i843[11]
  var i848 = []
  for(var i = 0; i < i849.length; i += 2) {
  request.r(i849[i + 0], i849[i + 1], 2, i848, '')
  }
  i842.sharedMaterials = i848
  i842.receiveShadows = !!i843[12]
  i842.shadowCastingMode = i843[13]
  i842.sortingLayerID = i843[14]
  i842.sortingOrder = i843[15]
  i842.lightmapIndex = i843[16]
  i842.lightmapSceneIndex = i843[17]
  i842.lightmapScaleOffset = new pc.Vec4( i843[18], i843[19], i843[20], i843[21] )
  i842.lightProbeUsage = i843[22]
  i842.reflectionProbeUsage = i843[23]
  return i842
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight"] = function (request, data, root) {
  var i854 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight' )
  var i855 = data
  i854.weight = i855[0]
  return i854
}

Deserializers["CharacterController"] = function (request, data, root) {
  var i856 = root || request.c( 'CharacterController' )
  var i857 = data
  request.r(i857[0], i857[1], 0, i856, 'heath')
  request.r(i857[2], i857[3], 0, i856, 'body')
  request.r(i857[4], i857[5], 0, i856, 'anim')
  var i859 = i857[6]
  var i858 = new (System.Collections.Generic.List$1(Bridge.ns('BodyPiece')))
  for(var i = 0; i < i859.length; i += 2) {
  request.r(i859[i + 0], i859[i + 1], 1, i858, '')
  }
  i856.bodyPieces = i858
  var i861 = i857[7]
  var i860 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.GameObject')))
  for(var i = 0; i < i861.length; i += 2) {
  request.r(i861[i + 0], i861[i + 1], 1, i860, '')
  }
  i856.weapons = i860
  return i856
}

Deserializers["HeathController"] = function (request, data, root) {
  var i866 = root || request.c( 'HeathController' )
  var i867 = data
  i866.OnDeath = request.d('System.Action', i867[0], i866.OnDeath)
  i866.heath = i867[1]
  var i869 = i867[2]
  var i868 = new (System.Collections.Generic.List$1(Bridge.ns('Damageable')))
  for(var i = 0; i < i869.length; i += 2) {
  request.r(i869[i + 0], i869[i + 1], 1, i868, '')
  }
  i866.damageables = i868
  request.r(i867[3], i867[4], 0, i866, 'damageVFX')
  request.r(i867[5], i867[6], 0, i866, 'damageSound')
  request.r(i867[7], i867[8], 0, i866, 'deathSound')
  return i866
}

Deserializers["System.Action"] = function (request, data, root) {
  var i870 = root || request.c( 'System.Action' )
  var i871 = data
  return i870
}

Deserializers["AnimationController"] = function (request, data, root) {
  var i872 = root || request.c( 'AnimationController' )
  var i873 = data
  request.r(i873[0], i873[1], 0, i872, 'animator')
  return i872
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ConfigurableJoint"] = function (request, data, root) {
  var i874 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ConfigurableJoint' )
  var i875 = data
  i874.angularXDrive = request.d('UnityEngine.JointDrive', i875[0], i874.angularXDrive)
  i874.angularXLimitSpring = request.d('UnityEngine.SoftJointLimitSpring', i875[1], i874.angularXLimitSpring)
  i874.angularXMotion = i875[2]
  i874.angularYLimit = request.d('UnityEngine.SoftJointLimit', i875[3], i874.angularYLimit)
  i874.angularYMotion = i875[4]
  i874.angularYZDrive = request.d('UnityEngine.JointDrive', i875[5], i874.angularYZDrive)
  i874.angularYZLimitSpring = request.d('UnityEngine.SoftJointLimitSpring', i875[6], i874.angularYZLimitSpring)
  i874.angularZLimit = request.d('UnityEngine.SoftJointLimit', i875[7], i874.angularZLimit)
  i874.angularZMotion = i875[8]
  i874.configuredInWorldSpace = !!i875[9]
  i874.highAngularXLimit = request.d('UnityEngine.SoftJointLimit', i875[10], i874.highAngularXLimit)
  i874.linearLimit = request.d('UnityEngine.SoftJointLimit', i875[11], i874.linearLimit)
  i874.linearLimitSpring = request.d('UnityEngine.SoftJointLimitSpring', i875[12], i874.linearLimitSpring)
  i874.lowAngularXLimit = request.d('UnityEngine.SoftJointLimit', i875[13], i874.lowAngularXLimit)
  i874.rotationDriveMode = i875[14]
  i874.secondaryAxis = new pc.Vec3( i875[15], i875[16], i875[17] )
  i874.slerpDrive = request.d('UnityEngine.JointDrive', i875[18], i874.slerpDrive)
  i874.swapBodies = !!i875[19]
  i874.targetAngularVelocity = new pc.Vec3( i875[20], i875[21], i875[22] )
  i874.targetPosition = new pc.Vec3( i875[23], i875[24], i875[25] )
  i874.targetRotation = new pc.Quat(i875[26], i875[27], i875[28], i875[29])
  i874.targetVelocity = new pc.Vec3( i875[30], i875[31], i875[32] )
  i874.xDrive = request.d('UnityEngine.JointDrive', i875[33], i874.xDrive)
  i874.xMotion = i875[34]
  i874.yDrive = request.d('UnityEngine.JointDrive', i875[35], i874.yDrive)
  i874.yMotion = i875[36]
  i874.zDrive = request.d('UnityEngine.JointDrive', i875[37], i874.zDrive)
  i874.zMotion = i875[38]
  request.r(i875[39], i875[40], 0, i874, 'connectedBody')
  i874.axis = new pc.Vec3( i875[41], i875[42], i875[43] )
  i874.anchor = new pc.Vec3( i875[44], i875[45], i875[46] )
  i874.connectedAnchor = new pc.Vec3( i875[47], i875[48], i875[49] )
  i874.autoConfigureConnectedAnchor = !!i875[50]
  i874.massScale = i875[51]
  i874.connectedMassScale = i875[52]
  i874.enableCollision = !!i875[53]
  i874.breakForce = i875[54]
  i874.breakTorque = i875[55]
  return i874
}

Deserializers["BodyPiece"] = function (request, data, root) {
  var i876 = root || request.c( 'BodyPiece' )
  var i877 = data
  i876.notUseAnim = !!i877[0]
  request.r(i877[1], i877[2], 0, i876, 'rigid')
  request.r(i877[3], i877[4], 0, i876, 'skeleton')
  return i876
}

Deserializers["GunController"] = function (request, data, root) {
  var i878 = root || request.c( 'GunController' )
  var i879 = data
  i878.delayActive = i879[0]
  i878.delayAction = i879[1]
  request.r(i879[2], i879[3], 0, i878, 'aim')
  request.r(i879[4], i879[5], 0, i878, 'bulletPrefab')
  request.r(i879[6], i879[7], 0, i878, 'sound')
  request.r(i879[8], i879[9], 0, i878, 'anim')
  i878.activeKey = i879[10]
  i878.actionKey = i879[11]
  request.r(i879[12], i879[13], 0, i878, 'gun')
  i878.timeCD = i879[14]
  i878.onCD = !!i879[15]
  request.r(i879[16], i879[17], 0, i878, 'fakegun')
  return i878
}

Deserializers["TapController"] = function (request, data, root) {
  var i880 = root || request.c( 'TapController' )
  var i881 = data
  request.r(i881[0], i881[1], 0, i880, 'tapTut')
  return i880
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.AudioSource"] = function (request, data, root) {
  var i882 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.AudioSource' )
  var i883 = data
  request.r(i883[0], i883[1], 0, i882, 'clip')
  request.r(i883[2], i883[3], 0, i882, 'outputAudioMixerGroup')
  i882.playOnAwake = !!i883[4]
  i882.loop = !!i883[5]
  i882.time = i883[6]
  i882.volume = i883[7]
  i882.pitch = i883[8]
  i882.enabled = !!i883[9]
  return i882
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Animator"] = function (request, data, root) {
  var i884 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Animator' )
  var i885 = data
  request.r(i885[0], i885[1], 0, i884, 'animatorController')
  request.r(i885[2], i885[3], 0, i884, 'avatar')
  i884.updateMode = i885[4]
  i884.hasTransformHierarchy = !!i885[5]
  i884.applyRootMotion = !!i885[6]
  var i887 = i885[7]
  var i886 = []
  for(var i = 0; i < i887.length; i += 2) {
  request.r(i887[i + 0], i887[i + 1], 2, i886, '')
  }
  i884.humanBones = i886
  i884.enabled = !!i885[8]
  return i884
}

Deserializers["DropController"] = function (request, data, root) {
  var i888 = root || request.c( 'DropController' )
  var i889 = data
  i888.surfaceLayer = UnityEngine.LayerMask.FromIntegerValue( i889[0] )
  request.r(i889[1], i889[2], 0, i888, 'currentDrop')
  request.r(i889[3], i889[4], 0, i888, 'world')
  request.r(i889[5], i889[6], 0, i888, 'sound')
  i888.timeCD = i889[7]
  i888.onCD = !!i889[8]
  return i888
}

Deserializers["EnemyController"] = function (request, data, root) {
  var i890 = root || request.c( 'EnemyController' )
  var i891 = data
  request.r(i891[0], i891[1], 0, i890, 'joint')
  request.r(i891[2], i891[3], 0, i890, 'gun')
  request.r(i891[4], i891[5], 0, i890, 'heath')
  request.r(i891[6], i891[7], 0, i890, 'anim')
  request.r(i891[8], i891[9], 0, i890, 'trigger')
  request.r(i891[10], i891[11], 0, i890, 'rigid')
  i890.speed = i891[12]
  i890.IsEnd = !!i891[13]
  i890.IsPause = !!i891[14]
  i890.IsStay = !!i891[15]
  i890.IsDeath = !!i891[16]
  var i893 = i891[17]
  var i892 = new (System.Collections.Generic.List$1(Bridge.ns('BodyPiece')))
  for(var i = 0; i < i893.length; i += 2) {
  request.r(i893[i + 0], i893[i + 1], 1, i892, '')
  }
  i890.bodyPieces = i892
  return i890
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.FixedJoint"] = function (request, data, root) {
  var i894 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.FixedJoint' )
  var i895 = data
  request.r(i895[0], i895[1], 0, i894, 'connectedBody')
  i894.axis = new pc.Vec3( i895[2], i895[3], i895[4] )
  i894.anchor = new pc.Vec3( i895[5], i895[6], i895[7] )
  i894.connectedAnchor = new pc.Vec3( i895[8], i895[9], i895[10] )
  i894.autoConfigureConnectedAnchor = !!i895[11]
  i894.massScale = i895[12]
  i894.connectedMassScale = i895[13]
  i894.enableCollision = !!i895[14]
  i894.breakForce = i895[15]
  i894.breakTorque = i895[16]
  return i894
}

Deserializers["EnemyTrigger"] = function (request, data, root) {
  var i896 = root || request.c( 'EnemyTrigger' )
  var i897 = data
  i896.OnTrigger = request.d('System.Action', i897[0], i896.OnTrigger)
  return i896
}

Deserializers["GameController"] = function (request, data, root) {
  var i898 = root || request.c( 'GameController' )
  var i899 = data
  i898.OnClick = request.d('System.Action', i899[0], i898.OnClick)
  i898.OnPause = request.d('System.Action', i899[1], i898.OnPause)
  i898.OnResume = request.d('System.Action', i899[2], i898.OnResume)
  i898.OnEnd = request.d('System.Action', i899[3], i898.OnEnd)
  request.r(i899[4], i899[5], 0, i898, 'startScene')
  request.r(i899[6], i899[7], 0, i898, 'completeScene')
  request.r(i899[8], i899[9], 0, i898, 'failScene')
  request.r(i899[10], i899[11], 0, i898, 'fightButton')
  request.r(i899[12], i899[13], 0, i898, 'fightController')
  request.r(i899[14], i899[15], 0, i898, 'defenseButton')
  request.r(i899[16], i899[17], 0, i898, 'defenseController')
  request.r(i899[18], i899[19], 0, i898, 'clickSound')
  i898.isEnd = !!i899[20]
  i898.numPlayer = i899[21]
  i898.numEnemy = i899[22]
  return i898
}

Deserializers["PoolController"] = function (request, data, root) {
  var i900 = root || request.c( 'PoolController' )
  var i901 = data
  request.r(i901[0], i901[1], 0, i900, 'poolParent')
  return i900
}

Deserializers["LunaController"] = function (request, data, root) {
  var i902 = root || request.c( 'LunaController' )
  var i903 = data
  i902.PortraitCameraZoom = i903[0]
  i902.LandscapeCameraZoom = i903[1]
  i902.TimePlay = i903[2]
  i902.LimitTimePlay = !!i903[3]
  i902.LimitCountPlay = !!i903[4]
  i902.CountPlay = i903[5]
  i902.UseCustomBG = !!i903[6]
  request.r(i903[7], i903[8], 0, i902, 'BGTexture')
  request.r(i903[9], i903[10], 0, i902, 'BGM')
  i902.ColorOptionText = new pc.Color(i903[11], i903[12], i903[13], i903[14])
  i902.ColorTutText = new pc.Color(i903[15], i903[16], i903[17], i903[18])
  request.r(i903[19], i903[20], 0, i902, 'cam')
  var i905 = i903[21]
  var i904 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.UI.Text')))
  for(var i = 0; i < i905.length; i += 2) {
  request.r(i905[i + 0], i905[i + 1], 1, i904, '')
  }
  i902.optionText = i904
  var i907 = i903[22]
  var i906 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.UI.Text')))
  for(var i = 0; i < i907.length; i += 2) {
  request.r(i907[i + 0], i907[i + 1], 1, i906, '')
  }
  i902.tutText = i906
  request.r(i903[23], i903[24], 0, i902, 'BGImage')
  request.r(i903[25], i903[26], 0, i902, 'musicSource')
  var i909 = i903[27]
  var i908 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.UI.Button')))
  for(var i = 0; i < i909.length; i += 2) {
  request.r(i909[i + 0], i909[i + 1], 1, i908, '')
  }
  i902.CTA = i908
  i902.currentCount = i903[28]
  return i902
}

Deserializers["AudioController"] = function (request, data, root) {
  var i914 = root || request.c( 'AudioController' )
  var i915 = data
  request.r(i915[0], i915[1], 0, i914, 'poolParent')
  i914.startSize = i915[2]
  return i914
}

Deserializers["FightController"] = function (request, data, root) {
  var i916 = root || request.c( 'FightController' )
  var i917 = data
  request.r(i917[0], i917[1], 0, i916, 'optionScene')
  var i919 = i917[2]
  var i918 = new (System.Collections.Generic.List$1(Bridge.ns('Option')))
  for(var i = 0; i < i919.length; i += 1) {
    i918.add(request.d('Option', i919[i + 0]));
  }
  i916.options = i918
  request.r(i917[3], i917[4], 0, i916, 'clickSound')
  request.r(i917[5], i917[6], 0, i916, 'optionTut')
  i916.currentOption = request.d('Option', i917[7], i916.currentOption)
  return i916
}

Deserializers["Option"] = function (request, data, root) {
  var i922 = root || request.c( 'Option' )
  var i923 = data
  request.r(i923[0], i923[1], 0, i922, 'Button')
  request.r(i923[2], i923[3], 0, i922, 'Selected')
  request.r(i923[4], i923[5], 0, i922, 'ActiveObject')
  return i922
}

Deserializers["DefenseController"] = function (request, data, root) {
  var i924 = root || request.c( 'DefenseController' )
  var i925 = data
  i924.surfaceLayer = UnityEngine.LayerMask.FromIntegerValue( i925[0] )
  i924.blockingLayer = UnityEngine.LayerMask.FromIntegerValue( i925[1] )
  request.r(i925[2], i925[3], 0, i924, 'world')
  i924.cellSize = i925[4]
  i924.offset = new pc.Vec3( i925[5], i925[6], i925[7] )
  request.r(i925[8], i925[9], 0, i924, 'putSound')
  request.r(i925[10], i925[11], 0, i924, 'currentBlock')
  request.r(i925[12], i925[13], 0, i924, 'buildTut')
  request.r(i925[14], i925[15], 0, i924, 'optionScene')
  var i927 = i925[16]
  var i926 = new (System.Collections.Generic.List$1(Bridge.ns('Option')))
  for(var i = 0; i < i927.length; i += 1) {
    i926.add(request.d('Option', i927[i + 0]));
  }
  i924.options = i926
  request.r(i925[17], i925[18], 0, i924, 'clickSound')
  request.r(i925[19], i925[20], 0, i924, 'optionTut')
  i924.currentOption = request.d('Option', i925[21], i924.currentOption)
  return i924
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i928 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i929 = data
  i928.ambientIntensity = i929[0]
  i928.reflectionIntensity = i929[1]
  i928.ambientMode = i929[2]
  i928.ambientLight = new pc.Color(i929[3], i929[4], i929[5], i929[6])
  i928.ambientSkyColor = new pc.Color(i929[7], i929[8], i929[9], i929[10])
  i928.ambientGroundColor = new pc.Color(i929[11], i929[12], i929[13], i929[14])
  i928.ambientEquatorColor = new pc.Color(i929[15], i929[16], i929[17], i929[18])
  i928.fogColor = new pc.Color(i929[19], i929[20], i929[21], i929[22])
  i928.fogEndDistance = i929[23]
  i928.fogStartDistance = i929[24]
  i928.fogDensity = i929[25]
  i928.fog = !!i929[26]
  request.r(i929[27], i929[28], 0, i928, 'skybox')
  i928.fogMode = i929[29]
  var i931 = i929[30]
  var i930 = []
  for(var i = 0; i < i931.length; i += 1) {
    i930.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i931[i + 0]) );
  }
  i928.lightmaps = i930
  i928.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i929[31], i928.lightProbes)
  i928.lightmapsMode = i929[32]
  i928.mixedBakeMode = i929[33]
  i928.environmentLightingMode = i929[34]
  i928.ambientProbe = new pc.SphericalHarmonicsL2(i929[35])
  request.r(i929[36], i929[37], 0, i928, 'customReflection')
  request.r(i929[38], i929[39], 0, i928, 'defaultReflection')
  i928.defaultReflectionMode = i929[40]
  i928.defaultReflectionResolution = i929[41]
  i928.sunLightObjectId = i929[42]
  i928.pixelLightCount = i929[43]
  i928.defaultReflectionHDR = !!i929[44]
  i928.hasLightDataAsset = !!i929[45]
  i928.hasManualGenerate = !!i929[46]
  return i928
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i934 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i935 = data
  request.r(i935[0], i935[1], 0, i934, 'lightmapColor')
  request.r(i935[2], i935[3], 0, i934, 'lightmapDirection')
  request.r(i935[4], i935[5], 0, i934, 'shadowMask')
  return i934
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i936 = root || new UnityEngine.LightProbes()
  var i937 = data
  return i936
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.PhysicMaterial"] = function (request, data, root) {
  var i944 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.PhysicMaterial' )
  var i945 = data
  i944.name = i945[0]
  i944.bounciness = i945[1]
  i944.dynamicFriction = i945[2]
  i944.staticFriction = i945[3]
  i944.frictionCombine = i945[4]
  i944.bounceCombine = i945[5]
  return i944
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i946 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i947 = data
  var i949 = i947[0]
  var i948 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i949.length; i += 1) {
    i948.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i949[i + 0]));
  }
  i946.ShaderCompilationErrors = i948
  i946.name = i947[1]
  i946.guid = i947[2]
  var i951 = i947[3]
  var i950 = []
  for(var i = 0; i < i951.length; i += 1) {
    i950.push( i951[i + 0] );
  }
  i946.shaderDefinedKeywords = i950
  var i953 = i947[4]
  var i952 = []
  for(var i = 0; i < i953.length; i += 1) {
    i952.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i953[i + 0]) );
  }
  i946.passes = i952
  var i955 = i947[5]
  var i954 = []
  for(var i = 0; i < i955.length; i += 1) {
    i954.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i955[i + 0]) );
  }
  i946.usePasses = i954
  var i957 = i947[6]
  var i956 = []
  for(var i = 0; i < i957.length; i += 1) {
    i956.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i957[i + 0]) );
  }
  i946.defaultParameterValues = i956
  request.r(i947[7], i947[8], 0, i946, 'unityFallbackShader')
  i946.readDepth = !!i947[9]
  i946.hasDepthOnlyPass = !!i947[10]
  i946.isCreatedByShaderGraph = !!i947[11]
  i946.disableBatching = !!i947[12]
  i946.compiled = !!i947[13]
  return i946
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i960 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i961 = data
  i960.shaderName = i961[0]
  i960.errorMessage = i961[1]
  return i960
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i966 = root || new pc.UnityShaderPass()
  var i967 = data
  i966.id = i967[0]
  i966.subShaderIndex = i967[1]
  i966.name = i967[2]
  i966.passType = i967[3]
  i966.grabPassTextureName = i967[4]
  i966.usePass = !!i967[5]
  i966.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i967[6], i966.zTest)
  i966.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i967[7], i966.zWrite)
  i966.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i967[8], i966.culling)
  i966.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i967[9], i966.blending)
  i966.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i967[10], i966.alphaBlending)
  i966.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i967[11], i966.colorWriteMask)
  i966.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i967[12], i966.offsetUnits)
  i966.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i967[13], i966.offsetFactor)
  i966.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i967[14], i966.stencilRef)
  i966.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i967[15], i966.stencilReadMask)
  i966.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i967[16], i966.stencilWriteMask)
  i966.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i967[17], i966.stencilOp)
  i966.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i967[18], i966.stencilOpFront)
  i966.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i967[19], i966.stencilOpBack)
  var i969 = i967[20]
  var i968 = []
  for(var i = 0; i < i969.length; i += 1) {
    i968.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i969[i + 0]) );
  }
  i966.tags = i968
  var i971 = i967[21]
  var i970 = []
  for(var i = 0; i < i971.length; i += 1) {
    i970.push( i971[i + 0] );
  }
  i966.passDefinedKeywords = i970
  var i973 = i967[22]
  var i972 = []
  for(var i = 0; i < i973.length; i += 1) {
    i972.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i973[i + 0]) );
  }
  i966.passDefinedKeywordGroups = i972
  var i975 = i967[23]
  var i974 = []
  for(var i = 0; i < i975.length; i += 1) {
    i974.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i975[i + 0]) );
  }
  i966.variants = i974
  var i977 = i967[24]
  var i976 = []
  for(var i = 0; i < i977.length; i += 1) {
    i976.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i977[i + 0]) );
  }
  i966.excludedVariants = i976
  i966.hasDepthReader = !!i967[25]
  return i966
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i978 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i979 = data
  i978.val = i979[0]
  i978.name = i979[1]
  return i978
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i980 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i981 = data
  i980.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i981[0], i980.src)
  i980.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i981[1], i980.dst)
  i980.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i981[2], i980.op)
  return i980
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i982 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i983 = data
  i982.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i983[0], i982.pass)
  i982.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i983[1], i982.fail)
  i982.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i983[2], i982.zFail)
  i982.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i983[3], i982.comp)
  return i982
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i986 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i987 = data
  i986.name = i987[0]
  i986.value = i987[1]
  return i986
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i990 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i991 = data
  var i993 = i991[0]
  var i992 = []
  for(var i = 0; i < i993.length; i += 1) {
    i992.push( i993[i + 0] );
  }
  i990.keywords = i992
  i990.hasDiscard = !!i991[1]
  return i990
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i996 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i997 = data
  i996.passId = i997[0]
  i996.subShaderIndex = i997[1]
  var i999 = i997[2]
  var i998 = []
  for(var i = 0; i < i999.length; i += 1) {
    i998.push( i999[i + 0] );
  }
  i996.keywords = i998
  i996.vertexProgram = i997[3]
  i996.fragmentProgram = i997[4]
  i996.exportedForWebGl2 = !!i997[5]
  i996.readDepth = !!i997[6]
  return i996
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i1002 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i1003 = data
  request.r(i1003[0], i1003[1], 0, i1002, 'shader')
  i1002.pass = i1003[2]
  return i1002
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i1006 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i1007 = data
  i1006.name = i1007[0]
  i1006.type = i1007[1]
  i1006.value = new pc.Vec4( i1007[2], i1007[3], i1007[4], i1007[5] )
  i1006.textureValue = i1007[6]
  i1006.shaderPropertyFlag = i1007[7]
  return i1006
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i1008 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i1009 = data
  i1008.name = i1009[0]
  request.r(i1009[1], i1009[2], 0, i1008, 'texture')
  i1008.aabb = i1009[3]
  i1008.vertices = i1009[4]
  i1008.triangles = i1009[5]
  i1008.textureRect = UnityEngine.Rect.MinMaxRect(i1009[6], i1009[7], i1009[8], i1009[9])
  i1008.packedRect = UnityEngine.Rect.MinMaxRect(i1009[10], i1009[11], i1009[12], i1009[13])
  i1008.border = new pc.Vec4( i1009[14], i1009[15], i1009[16], i1009[17] )
  i1008.transparency = i1009[18]
  i1008.bounds = i1009[19]
  i1008.pixelsPerUnit = i1009[20]
  i1008.textureWidth = i1009[21]
  i1008.textureHeight = i1009[22]
  i1008.nativeSize = new pc.Vec2( i1009[23], i1009[24] )
  i1008.pivot = new pc.Vec2( i1009[25], i1009[26] )
  i1008.textureRectOffset = new pc.Vec2( i1009[27], i1009[28] )
  return i1008
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i1010 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i1011 = data
  i1010.name = i1011[0]
  return i1010
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip"] = function (request, data, root) {
  var i1012 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip' )
  var i1013 = data
  i1012.name = i1013[0]
  i1012.wrapMode = i1013[1]
  i1012.isLooping = !!i1013[2]
  i1012.length = i1013[3]
  var i1015 = i1013[4]
  var i1014 = []
  for(var i = 0; i < i1015.length; i += 1) {
    i1014.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve', i1015[i + 0]) );
  }
  i1012.curves = i1014
  var i1017 = i1013[5]
  var i1016 = []
  for(var i = 0; i < i1017.length; i += 1) {
    i1016.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent', i1017[i + 0]) );
  }
  i1012.events = i1016
  i1012.halfPrecision = !!i1013[6]
  i1012._frameRate = i1013[7]
  i1012.localBounds = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds', i1013[8], i1012.localBounds)
  i1012.hasMuscleCurves = !!i1013[9]
  var i1019 = i1013[10]
  var i1018 = []
  for(var i = 0; i < i1019.length; i += 1) {
    i1018.push( i1019[i + 0] );
  }
  i1012.clipMuscleConstant = i1018
  i1012.clipBindingConstant = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant', i1013[11], i1012.clipBindingConstant)
  return i1012
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve"] = function (request, data, root) {
  var i1022 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve' )
  var i1023 = data
  i1022.path = i1023[0]
  i1022.hash = i1023[1]
  i1022.componentType = i1023[2]
  i1022.property = i1023[3]
  i1022.keys = i1023[4]
  var i1025 = i1023[5]
  var i1024 = []
  for(var i = 0; i < i1025.length; i += 1) {
    i1024.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey', i1025[i + 0]) );
  }
  i1022.objectReferenceKeys = i1024
  return i1022
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent"] = function (request, data, root) {
  var i1028 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent' )
  var i1029 = data
  i1028.functionName = i1029[0]
  i1028.floatParameter = i1029[1]
  i1028.intParameter = i1029[2]
  i1028.stringParameter = i1029[3]
  request.r(i1029[4], i1029[5], 0, i1028, 'objectReferenceParameter')
  i1028.time = i1029[6]
  return i1028
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds"] = function (request, data, root) {
  var i1030 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds' )
  var i1031 = data
  i1030.center = new pc.Vec3( i1031[0], i1031[1], i1031[2] )
  i1030.extends = new pc.Vec3( i1031[3], i1031[4], i1031[5] )
  return i1030
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant"] = function (request, data, root) {
  var i1034 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant' )
  var i1035 = data
  var i1037 = i1035[0]
  var i1036 = []
  for(var i = 0; i < i1037.length; i += 1) {
    i1036.push( i1037[i + 0] );
  }
  i1034.genericBindings = i1036
  var i1039 = i1035[1]
  var i1038 = []
  for(var i = 0; i < i1039.length; i += 1) {
    i1038.push( i1039[i + 0] );
  }
  i1034.pptrCurveMapping = i1038
  return i1034
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font"] = function (request, data, root) {
  var i1040 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font' )
  var i1041 = data
  i1040.name = i1041[0]
  i1040.ascent = i1041[1]
  i1040.originalLineHeight = i1041[2]
  i1040.fontSize = i1041[3]
  var i1043 = i1041[4]
  var i1042 = []
  for(var i = 0; i < i1043.length; i += 1) {
    i1042.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo', i1043[i + 0]) );
  }
  i1040.characterInfo = i1042
  request.r(i1041[5], i1041[6], 0, i1040, 'texture')
  i1040.originalFontSize = i1041[7]
  return i1040
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo"] = function (request, data, root) {
  var i1046 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo' )
  var i1047 = data
  i1046.index = i1047[0]
  i1046.advance = i1047[1]
  i1046.bearing = i1047[2]
  i1046.glyphWidth = i1047[3]
  i1046.glyphHeight = i1047[4]
  i1046.minX = i1047[5]
  i1046.maxX = i1047[6]
  i1046.minY = i1047[7]
  i1046.maxY = i1047[8]
  i1046.uvBottomLeftX = i1047[9]
  i1046.uvBottomLeftY = i1047[10]
  i1046.uvBottomRightX = i1047[11]
  i1046.uvBottomRightY = i1047[12]
  i1046.uvTopLeftX = i1047[13]
  i1046.uvTopLeftY = i1047[14]
  i1046.uvTopRightX = i1047[15]
  i1046.uvTopRightY = i1047[16]
  return i1046
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController"] = function (request, data, root) {
  var i1048 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController' )
  var i1049 = data
  i1048.name = i1049[0]
  var i1051 = i1049[1]
  var i1050 = []
  for(var i = 0; i < i1051.length; i += 1) {
    i1050.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer', i1051[i + 0]) );
  }
  i1048.layers = i1050
  var i1053 = i1049[2]
  var i1052 = []
  for(var i = 0; i < i1053.length; i += 1) {
    i1052.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter', i1053[i + 0]) );
  }
  i1048.parameters = i1052
  i1048.animationClips = i1049[3]
  i1048.avatarUnsupported = i1049[4]
  return i1048
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer"] = function (request, data, root) {
  var i1056 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer' )
  var i1057 = data
  i1056.name = i1057[0]
  i1056.defaultWeight = i1057[1]
  i1056.blendingMode = i1057[2]
  i1056.avatarMask = i1057[3]
  i1056.syncedLayerIndex = i1057[4]
  i1056.syncedLayerAffectsTiming = !!i1057[5]
  i1056.syncedLayers = i1057[6]
  i1056.stateMachine = request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i1057[7], i1056.stateMachine)
  return i1056
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine"] = function (request, data, root) {
  var i1058 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine' )
  var i1059 = data
  i1058.id = i1059[0]
  i1058.name = i1059[1]
  i1058.path = i1059[2]
  var i1061 = i1059[3]
  var i1060 = []
  for(var i = 0; i < i1061.length; i += 1) {
    i1060.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState', i1061[i + 0]) );
  }
  i1058.states = i1060
  var i1063 = i1059[4]
  var i1062 = []
  for(var i = 0; i < i1063.length; i += 1) {
    i1062.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i1063[i + 0]) );
  }
  i1058.machines = i1062
  var i1065 = i1059[5]
  var i1064 = []
  for(var i = 0; i < i1065.length; i += 1) {
    i1064.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i1065[i + 0]) );
  }
  i1058.entryStateTransitions = i1064
  var i1067 = i1059[6]
  var i1066 = []
  for(var i = 0; i < i1067.length; i += 1) {
    i1066.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i1067[i + 0]) );
  }
  i1058.exitStateTransitions = i1066
  var i1069 = i1059[7]
  var i1068 = []
  for(var i = 0; i < i1069.length; i += 1) {
    i1068.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i1069[i + 0]) );
  }
  i1058.anyStateTransitions = i1068
  i1058.defaultStateId = i1059[8]
  return i1058
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState"] = function (request, data, root) {
  var i1072 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState' )
  var i1073 = data
  i1072.id = i1073[0]
  i1072.name = i1073[1]
  i1072.cycleOffset = i1073[2]
  i1072.cycleOffsetParameter = i1073[3]
  i1072.cycleOffsetParameterActive = !!i1073[4]
  i1072.mirror = !!i1073[5]
  i1072.mirrorParameter = i1073[6]
  i1072.mirrorParameterActive = !!i1073[7]
  i1072.motionId = i1073[8]
  i1072.nameHash = i1073[9]
  i1072.fullPathHash = i1073[10]
  i1072.speed = i1073[11]
  i1072.speedParameter = i1073[12]
  i1072.speedParameterActive = !!i1073[13]
  i1072.tag = i1073[14]
  i1072.tagHash = i1073[15]
  i1072.writeDefaultValues = !!i1073[16]
  var i1075 = i1073[17]
  var i1074 = []
  for(var i = 0; i < i1075.length; i += 2) {
  request.r(i1075[i + 0], i1075[i + 1], 2, i1074, '')
  }
  i1072.behaviours = i1074
  var i1077 = i1073[18]
  var i1076 = []
  for(var i = 0; i < i1077.length; i += 1) {
    i1076.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i1077[i + 0]) );
  }
  i1072.transitions = i1076
  return i1072
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition"] = function (request, data, root) {
  var i1082 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition' )
  var i1083 = data
  i1082.fullPath = i1083[0]
  i1082.canTransitionToSelf = !!i1083[1]
  i1082.duration = i1083[2]
  i1082.exitTime = i1083[3]
  i1082.hasExitTime = !!i1083[4]
  i1082.hasFixedDuration = !!i1083[5]
  i1082.interruptionSource = i1083[6]
  i1082.offset = i1083[7]
  i1082.orderedInterruption = !!i1083[8]
  i1082.destinationStateId = i1083[9]
  i1082.isExit = !!i1083[10]
  i1082.mute = !!i1083[11]
  i1082.solo = !!i1083[12]
  var i1085 = i1083[13]
  var i1084 = []
  for(var i = 0; i < i1085.length; i += 1) {
    i1084.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i1085[i + 0]) );
  }
  i1082.conditions = i1084
  return i1082
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition"] = function (request, data, root) {
  var i1088 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition' )
  var i1089 = data
  i1088.mode = i1089[0]
  i1088.parameter = i1089[1]
  i1088.threshold = i1089[2]
  return i1088
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition"] = function (request, data, root) {
  var i1094 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition' )
  var i1095 = data
  i1094.destinationStateId = i1095[0]
  i1094.isExit = !!i1095[1]
  i1094.mute = !!i1095[2]
  i1094.solo = !!i1095[3]
  var i1097 = i1095[4]
  var i1096 = []
  for(var i = 0; i < i1097.length; i += 1) {
    i1096.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i1097[i + 0]) );
  }
  i1094.conditions = i1096
  return i1094
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter"] = function (request, data, root) {
  var i1100 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter' )
  var i1101 = data
  i1100.defaultBool = !!i1101[0]
  i1100.defaultFloat = i1101[1]
  i1100.defaultInt = i1101[2]
  i1100.name = i1101[3]
  i1100.nameHash = i1101[4]
  i1100.type = i1101[5]
  return i1100
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorOverrideController"] = function (request, data, root) {
  var i1102 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorOverrideController' )
  var i1103 = data
  i1102.name = i1103[0]
  request.r(i1103[1], i1103[2], 0, i1102, '_runtimeAnimatorController')
  var i1105 = i1103[3]
  var i1104 = []
  for(var i = 0; i < i1105.length; i += 2) {
  request.r(i1105[i + 0], i1105[i + 1], 2, i1104, '')
  }
  i1102._originalAnimationClips = i1104
  var i1107 = i1103[4]
  var i1106 = []
  for(var i = 0; i < i1107.length; i += 2) {
  request.r(i1107[i + 0], i1107[i + 1], 2, i1106, '')
  }
  i1102._overrideAnimationClips = i1106
  var i1109 = i1103[5]
  var i1108 = []
  for(var i = 0; i < i1109.length; i += 2) {
  request.r(i1109[i + 0], i1109[i + 1], 2, i1108, '')
  }
  i1102._animationClips = i1108
  var i1111 = i1103[6]
  var i1110 = []
  for(var i = 0; i < i1111.length; i += 1) {
    i1110.push( request.d('UnityEngine.AnimationClipPair', i1111[i + 0]) );
  }
  i1102._animationClipPairs = i1110
  return i1102
}

Deserializers["UnityEngine.AnimationClipPair"] = function (request, data, root) {
  var i1116 = root || request.c( 'UnityEngine.AnimationClipPair' )
  var i1117 = data
  request.r(i1117[0], i1117[1], 0, i1116, 'originalClip')
  request.r(i1117[2], i1117[3], 0, i1116, 'overrideClip')
  return i1116
}

Deserializers["DG.Tweening.Core.DOTweenSettings"] = function (request, data, root) {
  var i1118 = root || request.c( 'DG.Tweening.Core.DOTweenSettings' )
  var i1119 = data
  i1118.useSafeMode = !!i1119[0]
  i1118.safeModeOptions = request.d('DG.Tweening.Core.DOTweenSettings+SafeModeOptions', i1119[1], i1118.safeModeOptions)
  i1118.timeScale = i1119[2]
  i1118.unscaledTimeScale = i1119[3]
  i1118.useSmoothDeltaTime = !!i1119[4]
  i1118.maxSmoothUnscaledTime = i1119[5]
  i1118.rewindCallbackMode = i1119[6]
  i1118.showUnityEditorReport = !!i1119[7]
  i1118.logBehaviour = i1119[8]
  i1118.drawGizmos = !!i1119[9]
  i1118.defaultRecyclable = !!i1119[10]
  i1118.defaultAutoPlay = i1119[11]
  i1118.defaultUpdateType = i1119[12]
  i1118.defaultTimeScaleIndependent = !!i1119[13]
  i1118.defaultEaseType = i1119[14]
  i1118.defaultEaseOvershootOrAmplitude = i1119[15]
  i1118.defaultEasePeriod = i1119[16]
  i1118.defaultAutoKill = !!i1119[17]
  i1118.defaultLoopType = i1119[18]
  i1118.debugMode = !!i1119[19]
  i1118.debugStoreTargetId = !!i1119[20]
  i1118.showPreviewPanel = !!i1119[21]
  i1118.storeSettingsLocation = i1119[22]
  i1118.modules = request.d('DG.Tweening.Core.DOTweenSettings+ModulesSetup', i1119[23], i1118.modules)
  i1118.createASMDEF = !!i1119[24]
  i1118.showPlayingTweens = !!i1119[25]
  i1118.showPausedTweens = !!i1119[26]
  return i1118
}

Deserializers["DG.Tweening.Core.DOTweenSettings+SafeModeOptions"] = function (request, data, root) {
  var i1120 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+SafeModeOptions' )
  var i1121 = data
  i1120.logBehaviour = i1121[0]
  i1120.nestedTweenFailureBehaviour = i1121[1]
  return i1120
}

Deserializers["DG.Tweening.Core.DOTweenSettings+ModulesSetup"] = function (request, data, root) {
  var i1122 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+ModulesSetup' )
  var i1123 = data
  i1122.showPanel = !!i1123[0]
  i1122.audioEnabled = !!i1123[1]
  i1122.physicsEnabled = !!i1123[2]
  i1122.physics2DEnabled = !!i1123[3]
  i1122.spriteEnabled = !!i1123[4]
  i1122.uiEnabled = !!i1123[5]
  i1122.textMeshProEnabled = !!i1123[6]
  i1122.tk2DEnabled = !!i1123[7]
  i1122.deAudioEnabled = !!i1123[8]
  i1122.deUnityExtendedEnabled = !!i1123[9]
  i1122.epoOutlineEnabled = !!i1123[10]
  return i1122
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i1124 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i1125 = data
  var i1127 = i1125[0]
  var i1126 = []
  for(var i = 0; i < i1127.length; i += 1) {
    i1126.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i1127[i + 0]) );
  }
  i1124.files = i1126
  i1124.componentToPrefabIds = i1125[1]
  return i1124
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i1130 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i1131 = data
  i1130.path = i1131[0]
  request.r(i1131[1], i1131[2], 0, i1130, 'unityObject')
  return i1130
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i1132 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i1133 = data
  var i1135 = i1133[0]
  var i1134 = []
  for(var i = 0; i < i1135.length; i += 1) {
    i1134.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i1135[i + 0]) );
  }
  i1132.scriptsExecutionOrder = i1134
  var i1137 = i1133[1]
  var i1136 = []
  for(var i = 0; i < i1137.length; i += 1) {
    i1136.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i1137[i + 0]) );
  }
  i1132.sortingLayers = i1136
  var i1139 = i1133[2]
  var i1138 = []
  for(var i = 0; i < i1139.length; i += 1) {
    i1138.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i1139[i + 0]) );
  }
  i1132.cullingLayers = i1138
  i1132.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i1133[3], i1132.timeSettings)
  i1132.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i1133[4], i1132.physicsSettings)
  i1132.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i1133[5], i1132.physics2DSettings)
  i1132.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i1133[6], i1132.qualitySettings)
  i1132.enableRealtimeShadows = !!i1133[7]
  i1132.enableAutoInstancing = !!i1133[8]
  i1132.enableStaticBatching = !!i1133[9]
  i1132.enableDynamicBatching = !!i1133[10]
  i1132.usePreservativeDynamicBatching = !!i1133[11]
  i1132.lightmapEncodingQuality = i1133[12]
  i1132.desiredColorSpace = i1133[13]
  var i1141 = i1133[14]
  var i1140 = []
  for(var i = 0; i < i1141.length; i += 1) {
    i1140.push( i1141[i + 0] );
  }
  i1132.allTags = i1140
  return i1132
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i1144 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i1145 = data
  i1144.name = i1145[0]
  i1144.value = i1145[1]
  return i1144
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i1148 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i1149 = data
  i1148.id = i1149[0]
  i1148.name = i1149[1]
  i1148.value = i1149[2]
  return i1148
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i1152 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i1153 = data
  i1152.id = i1153[0]
  i1152.name = i1153[1]
  return i1152
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i1154 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i1155 = data
  i1154.fixedDeltaTime = i1155[0]
  i1154.maximumDeltaTime = i1155[1]
  i1154.timeScale = i1155[2]
  i1154.maximumParticleTimestep = i1155[3]
  return i1154
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i1156 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i1157 = data
  i1156.gravity = new pc.Vec3( i1157[0], i1157[1], i1157[2] )
  i1156.defaultSolverIterations = i1157[3]
  i1156.bounceThreshold = i1157[4]
  i1156.autoSyncTransforms = !!i1157[5]
  i1156.autoSimulation = !!i1157[6]
  var i1159 = i1157[7]
  var i1158 = []
  for(var i = 0; i < i1159.length; i += 1) {
    i1158.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i1159[i + 0]) );
  }
  i1156.collisionMatrix = i1158
  return i1156
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i1162 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i1163 = data
  i1162.enabled = !!i1163[0]
  i1162.layerId = i1163[1]
  i1162.otherLayerId = i1163[2]
  return i1162
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i1164 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i1165 = data
  request.r(i1165[0], i1165[1], 0, i1164, 'material')
  i1164.gravity = new pc.Vec2( i1165[2], i1165[3] )
  i1164.positionIterations = i1165[4]
  i1164.velocityIterations = i1165[5]
  i1164.velocityThreshold = i1165[6]
  i1164.maxLinearCorrection = i1165[7]
  i1164.maxAngularCorrection = i1165[8]
  i1164.maxTranslationSpeed = i1165[9]
  i1164.maxRotationSpeed = i1165[10]
  i1164.baumgarteScale = i1165[11]
  i1164.baumgarteTOIScale = i1165[12]
  i1164.timeToSleep = i1165[13]
  i1164.linearSleepTolerance = i1165[14]
  i1164.angularSleepTolerance = i1165[15]
  i1164.defaultContactOffset = i1165[16]
  i1164.autoSimulation = !!i1165[17]
  i1164.queriesHitTriggers = !!i1165[18]
  i1164.queriesStartInColliders = !!i1165[19]
  i1164.callbacksOnDisable = !!i1165[20]
  i1164.reuseCollisionCallbacks = !!i1165[21]
  i1164.autoSyncTransforms = !!i1165[22]
  var i1167 = i1165[23]
  var i1166 = []
  for(var i = 0; i < i1167.length; i += 1) {
    i1166.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i1167[i + 0]) );
  }
  i1164.collisionMatrix = i1166
  return i1164
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i1170 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i1171 = data
  i1170.enabled = !!i1171[0]
  i1170.layerId = i1171[1]
  i1170.otherLayerId = i1171[2]
  return i1170
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i1172 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i1173 = data
  var i1175 = i1173[0]
  var i1174 = []
  for(var i = 0; i < i1175.length; i += 1) {
    i1174.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i1175[i + 0]) );
  }
  i1172.qualityLevels = i1174
  var i1177 = i1173[1]
  var i1176 = []
  for(var i = 0; i < i1177.length; i += 1) {
    i1176.push( i1177[i + 0] );
  }
  i1172.names = i1176
  i1172.shadows = i1173[2]
  i1172.anisotropicFiltering = i1173[3]
  i1172.antiAliasing = i1173[4]
  i1172.lodBias = i1173[5]
  i1172.shadowCascades = i1173[6]
  i1172.shadowDistance = i1173[7]
  i1172.shadowmaskMode = i1173[8]
  i1172.shadowProjection = i1173[9]
  i1172.shadowResolution = i1173[10]
  i1172.softParticles = !!i1173[11]
  i1172.softVegetation = !!i1173[12]
  i1172.activeColorSpace = i1173[13]
  i1172.desiredColorSpace = i1173[14]
  i1172.masterTextureLimit = i1173[15]
  i1172.maxQueuedFrames = i1173[16]
  i1172.particleRaycastBudget = i1173[17]
  i1172.pixelLightCount = i1173[18]
  i1172.realtimeReflectionProbes = !!i1173[19]
  i1172.shadowCascade2Split = i1173[20]
  i1172.shadowCascade4Split = new pc.Vec3( i1173[21], i1173[22], i1173[23] )
  i1172.streamingMipmapsActive = !!i1173[24]
  i1172.vSyncCount = i1173[25]
  i1172.asyncUploadBufferSize = i1173[26]
  i1172.asyncUploadTimeSlice = i1173[27]
  i1172.billboardsFaceCameraPosition = !!i1173[28]
  i1172.shadowNearPlaneOffset = i1173[29]
  i1172.streamingMipmapsMemoryBudget = i1173[30]
  i1172.maximumLODLevel = i1173[31]
  i1172.streamingMipmapsAddAllCameras = !!i1173[32]
  i1172.streamingMipmapsMaxLevelReduction = i1173[33]
  i1172.streamingMipmapsRenderersPerFrame = i1173[34]
  i1172.resolutionScalingFixedDPIFactor = i1173[35]
  i1172.streamingMipmapsMaxFileIORequests = i1173[36]
  i1172.currentQualityLevel = i1173[37]
  return i1172
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.Avatar"] = function (request, data, root) {
  var i1180 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.Avatar' )
  var i1181 = data
  i1180.name = i1181[0]
  var i1183 = i1181[1]
  var i1182 = []
  for(var i = 0; i < i1183.length; i += 1) {
    i1182.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.Avatar+TOSPair', i1183[i + 0]) );
  }
  i1180.tos = i1182
  var i1185 = i1181[2]
  var i1184 = []
  for(var i = 0; i < i1185.length; i += 1) {
    i1184.push( i1185[i + 0] );
  }
  i1180.constant = i1184
  i1180.isValid = !!i1181[3]
  i1180.isHuman = !!i1181[4]
  i1180.hasRootMotion = !!i1181[5]
  return i1180
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.Avatar+TOSPair"] = function (request, data, root) {
  var i1188 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.Avatar+TOSPair' )
  var i1189 = data
  i1188.hash = i1189[0]
  i1188.path = i1189[1]
  return i1188
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame"] = function (request, data, root) {
  var i1192 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame' )
  var i1193 = data
  i1192.weight = i1193[0]
  i1192.vertices = i1193[1]
  i1192.normals = i1193[2]
  i1192.tangents = i1193[3]
  return i1192
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i1194 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i1195 = data
  request.r(i1195[0], i1195[1], 0, i1194, 'm_ObjectArgument')
  i1194.m_ObjectArgumentAssemblyTypeName = i1195[2]
  i1194.m_IntArgument = i1195[3]
  i1194.m_FloatArgument = i1195[4]
  i1194.m_StringArgument = i1195[5]
  i1194.m_BoolArgument = !!i1195[6]
  return i1194
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey"] = function (request, data, root) {
  var i1198 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey' )
  var i1199 = data
  i1198.time = i1199[0]
  request.r(i1199[1], i1199[2], 0, i1198, 'value')
  return i1198
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10,"graphicsFormat":11,"sRGBTexture":12,"desiredColorSpace":13,"wrapU":14,"wrapV":15},"Luna.Unity.DTO.UnityEngine.Assets.Mesh":{"name":0,"halfPrecision":1,"useSimplification":2,"useUInt32IndexFormat":3,"vertexCount":4,"aabb":5,"streams":6,"vertices":7,"subMeshes":8,"bindposes":9,"blendShapes":10},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh":{"triangles":0},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape":{"name":0,"frames":1},"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Components.Transform":{"position":0,"scale":3,"rotation":6},"Luna.Unity.DTO.UnityEngine.Components.Rigidbody":{"mass":0,"drag":1,"angularDrag":2,"useGravity":3,"isKinematic":4,"constraints":5,"maxAngularVelocity":6,"collisionDetectionMode":7,"interpolation":8},"Luna.Unity.DTO.UnityEngine.Components.MeshFilter":{"sharedMesh":0},"Luna.Unity.DTO.UnityEngine.Components.MeshRenderer":{"additionalVertexStreams":0,"enabled":2,"sharedMaterial":3,"sharedMaterials":5,"receiveShadows":6,"shadowCastingMode":7,"sortingLayerID":8,"sortingOrder":9,"lightmapIndex":10,"lightmapSceneIndex":11,"lightmapScaleOffset":12,"lightProbeUsage":16,"reflectionProbeUsage":17},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Components.BoxCollider":{"center":0,"size":3,"enabled":6,"isTrigger":7,"material":8},"Luna.Unity.DTO.UnityEngine.Components.MeshCollider":{"sharedMesh":0,"convex":2,"enabled":3,"isTrigger":4,"material":5},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystem":{"main":0,"colorBySpeed":1,"colorOverLifetime":2,"emission":3,"rotationBySpeed":4,"rotationOverLifetime":5,"shape":6,"sizeBySpeed":7,"sizeOverLifetime":8,"textureSheetAnimation":9,"velocityOverLifetime":10,"noise":11,"inheritVelocity":12,"forceOverLifetime":13,"limitVelocityOverLifetime":14,"useAutoRandomSeed":15,"randomSeed":16},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule":{"duration":0,"loop":1,"prewarm":2,"startDelay":3,"startLifetime":4,"startSpeed":5,"startSize3D":6,"startSizeX":7,"startSizeY":8,"startSizeZ":9,"startRotation3D":10,"startRotationX":11,"startRotationY":12,"startRotationZ":13,"startColor":14,"gravityModifier":15,"simulationSpace":16,"customSimulationSpace":17,"simulationSpeed":19,"useUnscaledTime":20,"scalingMode":21,"playOnAwake":22,"maxParticles":23,"emitterVelocityMode":24,"stopAction":25},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve":{"mode":0,"curveMin":1,"curveMax":2,"curveMultiplier":3,"constantMin":4,"constantMax":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient":{"mode":0,"gradientMin":1,"gradientMax":2,"colorMin":3,"colorMax":7},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient":{"mode":0,"colorKeys":1,"alphaKeys":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule":{"enabled":0,"color":1,"range":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey":{"color":0,"time":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey":{"alpha":0,"time":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule":{"enabled":0,"color":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule":{"enabled":0,"rateOverTime":1,"rateOverDistance":2,"bursts":3},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst":{"count":0,"cycleCount":1,"minCount":2,"maxCount":3,"repeatInterval":4,"time":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule":{"enabled":0,"shapeType":1,"randomDirectionAmount":2,"sphericalDirectionAmount":3,"randomPositionAmount":4,"alignToDirection":5,"radius":6,"radiusMode":7,"radiusSpread":8,"radiusSpeed":9,"radiusThickness":10,"angle":11,"length":12,"boxThickness":13,"meshShapeType":16,"mesh":17,"meshRenderer":19,"skinnedMeshRenderer":21,"useMeshMaterialIndex":23,"meshMaterialIndex":24,"useMeshColors":25,"normalOffset":26,"arc":27,"arcMode":28,"arcSpread":29,"arcSpeed":30,"donutRadius":31,"position":32,"rotation":35,"scale":38},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule":{"enabled":0,"mode":1,"animation":2,"numTilesX":3,"numTilesY":4,"useRandomRow":5,"frameOverTime":6,"startFrame":7,"cycleCount":8,"rowIndex":9,"flipU":10,"flipV":11,"spriteCount":12,"sprites":13},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"radial":4,"speedModifier":5,"space":6,"orbitalX":7,"orbitalY":8,"orbitalZ":9,"orbitalOffsetX":10,"orbitalOffsetY":11,"orbitalOffsetZ":12},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule":{"enabled":0,"separateAxes":1,"strengthX":2,"strengthY":3,"strengthZ":4,"frequency":5,"damping":6,"octaveCount":7,"octaveMultiplier":8,"octaveScale":9,"quality":10,"scrollSpeed":11,"scrollSpeedMultiplier":12,"remapEnabled":13,"remapX":14,"remapY":15,"remapZ":16,"positionAmount":17,"rotationAmount":18,"sizeAmount":19},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule":{"enabled":0,"mode":1,"curve":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"space":4,"randomized":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule":{"enabled":0,"limit":1,"limitX":2,"limitY":3,"limitZ":4,"dampen":5,"separateAxes":6,"space":7,"drag":8,"multiplyDragByParticleSize":9,"multiplyDragByParticleVelocity":10},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer":{"mesh":0,"meshCount":2,"activeVertexStreamsCount":3,"alignment":4,"renderMode":5,"sortMode":6,"lengthScale":7,"velocityScale":8,"cameraVelocityScale":9,"normalDirection":10,"sortingFudge":11,"minParticleSize":12,"maxParticleSize":13,"pivot":14,"trailMaterial":17,"applyActiveColorSpace":19,"enabled":20,"sharedMaterial":21,"sharedMaterials":23,"receiveShadows":24,"shadowCastingMode":25,"sortingLayerID":26,"sortingOrder":27,"lightmapIndex":28,"lightmapSceneIndex":29,"lightmapScaleOffset":30,"lightProbeUsage":34,"reflectionProbeUsage":35},"Luna.Unity.DTO.UnityEngine.Components.CapsuleCollider":{"center":0,"radius":3,"height":4,"direction":5,"enabled":6,"isTrigger":7,"material":8},"Luna.Unity.DTO.UnityEngine.Textures.Cubemap":{"name":0,"atlasId":1,"mipmapCount":2,"hdr":3,"size":4,"anisoLevel":5,"filterMode":6,"rects":7,"wrapU":8,"wrapV":9},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"aspect":0,"orthographic":1,"orthographicSize":2,"backgroundColor":3,"nearClipPlane":7,"farClipPlane":8,"fieldOfView":9,"depth":10,"clearFlags":11,"cullingMask":12,"rect":13,"targetTexture":14,"usePhysicalProperties":16,"focalLength":17,"sensorSize":18,"lensShift":20,"gateFit":22,"commandBufferCount":23,"cameraType":24,"enabled":25},"Luna.Unity.DTO.UnityEngine.Components.Light":{"type":0,"color":1,"cullingMask":5,"intensity":6,"range":7,"spotAngle":8,"shadows":9,"shadowNormalBias":10,"shadowBias":11,"shadowStrength":12,"shadowResolution":13,"lightmapBakeType":14,"renderMode":15,"cookie":16,"cookieSize":18,"shadowNearPlane":19,"occlusionMaskChannel":20,"isBaked":21,"mixedLightingMode":22,"enabled":23},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"planeDistance":0,"referencePixelsPerUnit":1,"isFallbackOverlay":2,"renderMode":3,"renderOrder":4,"sortingLayerName":5,"sortingOrder":6,"scaleFactor":7,"worldCamera":8,"overrideSorting":10,"pixelPerfect":11,"targetDisplay":12,"overridePixelPerfect":13,"enabled":14},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer":{"sharedMesh":0,"bones":2,"updateWhenOffscreen":3,"localBounds":4,"rootBone":5,"blendShapesWeights":7,"enabled":8,"sharedMaterial":9,"sharedMaterials":11,"receiveShadows":12,"shadowCastingMode":13,"sortingLayerID":14,"sortingOrder":15,"lightmapIndex":16,"lightmapSceneIndex":17,"lightmapScaleOffset":18,"lightProbeUsage":22,"reflectionProbeUsage":23},"Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight":{"weight":0},"Luna.Unity.DTO.UnityEngine.Components.ConfigurableJoint":{"angularXDrive":0,"angularXLimitSpring":1,"angularXMotion":2,"angularYLimit":3,"angularYMotion":4,"angularYZDrive":5,"angularYZLimitSpring":6,"angularZLimit":7,"angularZMotion":8,"configuredInWorldSpace":9,"highAngularXLimit":10,"linearLimit":11,"linearLimitSpring":12,"lowAngularXLimit":13,"rotationDriveMode":14,"secondaryAxis":15,"slerpDrive":18,"swapBodies":19,"targetAngularVelocity":20,"targetPosition":23,"targetRotation":26,"targetVelocity":30,"xDrive":33,"xMotion":34,"yDrive":35,"yMotion":36,"zDrive":37,"zMotion":38,"connectedBody":39,"axis":41,"anchor":44,"connectedAnchor":47,"autoConfigureConnectedAnchor":50,"massScale":51,"connectedMassScale":52,"enableCollision":53,"breakForce":54,"breakTorque":55},"Luna.Unity.DTO.UnityEngine.Components.AudioSource":{"clip":0,"outputAudioMixerGroup":2,"playOnAwake":4,"loop":5,"time":6,"volume":7,"pitch":8,"enabled":9},"Luna.Unity.DTO.UnityEngine.Components.Animator":{"animatorController":0,"avatar":2,"updateMode":4,"hasTransformHierarchy":5,"applyRootMotion":6,"humanBones":7,"enabled":8},"Luna.Unity.DTO.UnityEngine.Components.FixedJoint":{"connectedBody":0,"axis":2,"anchor":5,"connectedAnchor":8,"autoConfigureConnectedAnchor":11,"massScale":12,"connectedMassScale":13,"enableCollision":14,"breakForce":15,"breakTorque":16},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"customReflection":36,"defaultReflection":38,"defaultReflectionMode":40,"defaultReflectionResolution":41,"sunLightObjectId":42,"pixelLightCount":43,"defaultReflectionHDR":44,"hasLightDataAsset":45,"hasManualGenerate":46},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2,"shadowMask":4},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.PhysicMaterial":{"name":0,"bounciness":1,"dynamicFriction":2,"staticFriction":3,"frictionCombine":4,"bounceCombine":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"hasDepthOnlyPass":10,"isCreatedByShaderGraph":11,"disableBatching":12,"compiled":13},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"exportedForWebGl2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.AudioClip":{"name":0},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip":{"name":0,"wrapMode":1,"isLooping":2,"length":3,"curves":4,"events":5,"halfPrecision":6,"_frameRate":7,"localBounds":8,"hasMuscleCurves":9,"clipMuscleConstant":10,"clipBindingConstant":11},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve":{"path":0,"hash":1,"componentType":2,"property":3,"keys":4,"objectReferenceKeys":5},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent":{"functionName":0,"floatParameter":1,"intParameter":2,"stringParameter":3,"objectReferenceParameter":4,"time":6},"Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds":{"center":0,"extends":3},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant":{"genericBindings":0,"pptrCurveMapping":1},"Luna.Unity.DTO.UnityEngine.Assets.Font":{"name":0,"ascent":1,"originalLineHeight":2,"fontSize":3,"characterInfo":4,"texture":5,"originalFontSize":7},"Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo":{"index":0,"advance":1,"bearing":2,"glyphWidth":3,"glyphHeight":4,"minX":5,"maxX":6,"minY":7,"maxY":8,"uvBottomLeftX":9,"uvBottomLeftY":10,"uvBottomRightX":11,"uvBottomRightY":12,"uvTopLeftX":13,"uvTopLeftY":14,"uvTopRightX":15,"uvTopRightY":16},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController":{"name":0,"layers":1,"parameters":2,"animationClips":3,"avatarUnsupported":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer":{"name":0,"defaultWeight":1,"blendingMode":2,"avatarMask":3,"syncedLayerIndex":4,"syncedLayerAffectsTiming":5,"syncedLayers":6,"stateMachine":7},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine":{"id":0,"name":1,"path":2,"states":3,"machines":4,"entryStateTransitions":5,"exitStateTransitions":6,"anyStateTransitions":7,"defaultStateId":8},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState":{"id":0,"name":1,"cycleOffset":2,"cycleOffsetParameter":3,"cycleOffsetParameterActive":4,"mirror":5,"mirrorParameter":6,"mirrorParameterActive":7,"motionId":8,"nameHash":9,"fullPathHash":10,"speed":11,"speedParameter":12,"speedParameterActive":13,"tag":14,"tagHash":15,"writeDefaultValues":16,"behaviours":17,"transitions":18},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition":{"fullPath":0,"canTransitionToSelf":1,"duration":2,"exitTime":3,"hasExitTime":4,"hasFixedDuration":5,"interruptionSource":6,"offset":7,"orderedInterruption":8,"destinationStateId":9,"isExit":10,"mute":11,"solo":12,"conditions":13},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition":{"mode":0,"parameter":1,"threshold":2},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition":{"destinationStateId":0,"isExit":1,"mute":2,"solo":3,"conditions":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter":{"defaultBool":0,"defaultFloat":1,"defaultInt":2,"name":3,"nameHash":4,"type":5},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorOverrideController":{"name":0,"_runtimeAnimatorController":1,"_originalAnimationClips":3,"_overrideAnimationClips":4,"_animationClips":5,"_animationClipPairs":6},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableStaticBatching":9,"enableDynamicBatching":10,"usePreservativeDynamicBatching":11,"lightmapEncodingQuality":12,"desiredColorSpace":13,"allTags":14},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.Avatar":{"name":0,"tos":1,"constant":2,"isValid":3,"isHuman":4,"hasRootMotion":5},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.Avatar+TOSPair":{"hash":0,"path":1},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame":{"weight":0,"vertices":1,"normals":2,"tangents":3},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey":{"time":0,"value":1}}

Deserializers.requiredComponents = {"67":[68],"69":[68],"70":[68],"71":[68],"72":[68],"73":[68],"74":[41],"75":[21],"76":[3],"47":[3],"77":[3],"56":[3],"78":[3],"79":[3],"80":[81],"82":[81],"83":[81],"84":[81],"85":[81],"86":[81],"87":[81],"88":[81],"89":[81],"90":[81],"91":[81],"92":[81],"93":[81],"94":[21],"95":[9],"96":[97],"98":[97],"29":[28],"99":[28],"100":[32,28],"101":[9],"102":[32,28],"103":[28],"104":[28],"105":[9,28],"106":[28,32],"107":[108],"109":[108],"110":[108],"111":[28],"112":[28],"31":[29],"33":[32,28],"113":[28],"30":[29],"114":[28],"115":[28],"116":[28],"117":[28],"118":[28],"119":[28],"120":[28],"121":[28],"122":[28],"40":[32,28],"123":[28],"124":[28],"125":[28],"126":[28],"34":[32,28],"127":[28],"128":[25],"129":[25],"26":[25],"130":[25],"131":[21],"132":[21]}

Deserializers.types = ["UnityEngine.Shader","UnityEngine.Texture2D","UnityEngine.Transform","UnityEngine.Rigidbody","UnityEngine.MonoBehaviour","BulletController","UnityEngine.AudioClip","UnityEngine.MeshFilter","UnityEngine.Mesh","UnityEngine.MeshRenderer","UnityEngine.Material","UnityEngine.BoxCollider","UnityEngine.PhysicsMaterial","BombController","UnityEngine.GameObject","UnityEngine.MeshCollider","UnityEngine.ParticleSystem","UnityEngine.ParticleSystemRenderer","UnityEngine.CapsuleCollider","BlockController","Damageable","UnityEngine.Camera","UnityEngine.AudioListener","CameraController","UnityEngine.EventSystems.UIBehaviour","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","UnityEngine.Light","UnityEngine.RectTransform","UnityEngine.Canvas","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","UnityEngine.CanvasRenderer","UnityEngine.UI.Image","UnityEngine.UI.Text","UnityEngine.Font","UnityEngine.UI.Button","UnityEngine.Sprite","DG.Tweening.DOTweenAnimation","TutController","UnityEngine.UI.RawImage","UnityEngine.SkinnedMeshRenderer","CharacterController","HeathController","AnimationController","BodyPiece","UnityEngine.Animator","UnityEngine.ConfigurableJoint","GunController","UnityEngine.AudioSource","TapController","UnityEngine.AnimatorOverrideController","UnityEngine.Avatar","DropController","EnemyController","EnemyTrigger","UnityEngine.FixedJoint","GameController","FightController","DefenseController","PoolController","LunaController","AudioController","UnityEngine.Cubemap","UnityEditor.Animations.AnimatorController","UnityEngine.AnimationClip","DG.Tweening.Core.DOTweenSettings","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.FlareLayer","UnityEngine.CharacterJoint","UnityEngine.ConstantForce","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.CompositeCollider2D","UnityEngine.Rigidbody2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text","TMPro.TextContainer","TMPro.TextMeshPro","TMPro.TextMeshProUGUI","Unity.VisualScripting.SceneVariables","Unity.VisualScripting.Variables","Unity.VisualScripting.ScriptMachine","Unity.VisualScripting.StateMachine","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.Mask","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RectMask2D","UnityEngine.UI.ScrollRect","UnityEngine.UI.Scrollbar","UnityEngine.UI.Slider","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster"]

Deserializers.unityVersion = "6000.0.78f1";

Deserializers.productName = "SRG_V01";

Deserializers.lunaInitializationTime = "08/18/2026 04:20:33";

Deserializers.lunaDaysRunning = "3.2";

Deserializers.lunaVersion = "7.2.0";

Deserializers.lunaSHA = "ea08d29afe2968efcb8d91d5624f033c6485cc68";

Deserializers.creativeName = "SRG_V03_YenTTH_TamNTM";

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

Deserializers.runtimeAnalysisExcludedClassesCount = "1723";

Deserializers.runtimeAnalysisExcludedMethodsCount = "4623";

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

Deserializers.buildID = "a9fd6bc7-f7a1-4d5a-9518-6a5237f89ea5";

Deserializers.runtimeInitializeOnLoadInfos = [[["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"],["UnityEngine","AI","NavMesh","ClearPreUpdateListeners"]],[],[],[["UnityEngine","Timeline","AnimatorBindingCache","ResetStaticsOnLoad"],["UnityEngine","Timeline","TrackAsset","ResetStaticsOnLoad"],["UnityEngine","Timeline","AnimationPreviewUtilities","ResetStaticsOnLoad"]]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

