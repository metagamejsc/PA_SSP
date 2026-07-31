var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i1626 = root || request.c( 'UnityEngine.JointSpring' )
  var i1627 = data
  i1626.spring = i1627[0]
  i1626.damper = i1627[1]
  i1626.targetPosition = i1627[2]
  return i1626
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i1628 = root || request.c( 'UnityEngine.JointMotor' )
  var i1629 = data
  i1628.m_TargetVelocity = i1629[0]
  i1628.m_Force = i1629[1]
  i1628.m_FreeSpin = i1629[2]
  return i1628
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i1630 = root || request.c( 'UnityEngine.JointLimits' )
  var i1631 = data
  i1630.m_Min = i1631[0]
  i1630.m_Max = i1631[1]
  i1630.m_Bounciness = i1631[2]
  i1630.m_BounceMinVelocity = i1631[3]
  i1630.m_ContactDistance = i1631[4]
  i1630.minBounce = i1631[5]
  i1630.maxBounce = i1631[6]
  return i1630
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i1632 = root || request.c( 'UnityEngine.JointDrive' )
  var i1633 = data
  i1632.m_PositionSpring = i1633[0]
  i1632.m_PositionDamper = i1633[1]
  i1632.m_MaximumForce = i1633[2]
  i1632.m_UseAcceleration = i1633[3]
  return i1632
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i1634 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i1635 = data
  i1634.m_Spring = i1635[0]
  i1634.m_Damper = i1635[1]
  return i1634
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i1636 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i1637 = data
  i1636.m_Limit = i1637[0]
  i1636.m_Bounciness = i1637[1]
  i1636.m_ContactDistance = i1637[2]
  return i1636
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i1638 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i1639 = data
  i1638.m_ExtremumSlip = i1639[0]
  i1638.m_ExtremumValue = i1639[1]
  i1638.m_AsymptoteSlip = i1639[2]
  i1638.m_AsymptoteValue = i1639[3]
  i1638.m_Stiffness = i1639[4]
  return i1638
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i1640 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i1641 = data
  i1640.m_LowerAngle = i1641[0]
  i1640.m_UpperAngle = i1641[1]
  return i1640
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i1642 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i1643 = data
  i1642.m_MotorSpeed = i1643[0]
  i1642.m_MaximumMotorTorque = i1643[1]
  return i1642
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i1644 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i1645 = data
  i1644.m_DampingRatio = i1645[0]
  i1644.m_Frequency = i1645[1]
  i1644.m_Angle = i1645[2]
  return i1644
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i1646 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i1647 = data
  i1646.m_LowerTranslation = i1647[0]
  i1646.m_UpperTranslation = i1647[1]
  return i1646
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i1648 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i1649 = data
  i1648.name = i1649[0]
  i1648.width = i1649[1]
  i1648.height = i1649[2]
  i1648.mipmapCount = i1649[3]
  i1648.anisoLevel = i1649[4]
  i1648.filterMode = i1649[5]
  i1648.hdr = !!i1649[6]
  i1648.format = i1649[7]
  i1648.wrapMode = i1649[8]
  i1648.alphaIsTransparency = !!i1649[9]
  i1648.alphaSource = i1649[10]
  i1648.graphicsFormat = i1649[11]
  i1648.sRGBTexture = !!i1649[12]
  i1648.desiredColorSpace = i1649[13]
  i1648.wrapU = i1649[14]
  i1648.wrapV = i1649[15]
  return i1648
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i1650 = root || new pc.UnityMaterial()
  var i1651 = data
  i1650.name = i1651[0]
  request.r(i1651[1], i1651[2], 0, i1650, 'shader')
  i1650.renderQueue = i1651[3]
  i1650.enableInstancing = !!i1651[4]
  var i1653 = i1651[5]
  var i1652 = []
  for(var i = 0; i < i1653.length; i += 1) {
    i1652.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i1653[i + 0]) );
  }
  i1650.floatParameters = i1652
  var i1655 = i1651[6]
  var i1654 = []
  for(var i = 0; i < i1655.length; i += 1) {
    i1654.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i1655[i + 0]) );
  }
  i1650.colorParameters = i1654
  var i1657 = i1651[7]
  var i1656 = []
  for(var i = 0; i < i1657.length; i += 1) {
    i1656.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i1657[i + 0]) );
  }
  i1650.vectorParameters = i1656
  var i1659 = i1651[8]
  var i1658 = []
  for(var i = 0; i < i1659.length; i += 1) {
    i1658.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i1659[i + 0]) );
  }
  i1650.textureParameters = i1658
  var i1661 = i1651[9]
  var i1660 = []
  for(var i = 0; i < i1661.length; i += 1) {
    i1660.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i1661[i + 0]) );
  }
  i1650.materialFlags = i1660
  return i1650
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i1664 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i1665 = data
  i1664.name = i1665[0]
  i1664.value = i1665[1]
  return i1664
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i1668 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i1669 = data
  i1668.name = i1669[0]
  i1668.value = new pc.Color(i1669[1], i1669[2], i1669[3], i1669[4])
  return i1668
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i1672 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i1673 = data
  i1672.name = i1673[0]
  i1672.value = new pc.Vec4( i1673[1], i1673[2], i1673[3], i1673[4] )
  return i1672
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i1676 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i1677 = data
  i1676.name = i1677[0]
  request.r(i1677[1], i1677[2], 0, i1676, 'value')
  return i1676
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i1680 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i1681 = data
  i1680.name = i1681[0]
  i1680.enabled = !!i1681[1]
  return i1680
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i1682 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i1683 = data
  i1682.position = new pc.Vec3( i1683[0], i1683[1], i1683[2] )
  i1682.scale = new pc.Vec3( i1683[3], i1683[4], i1683[5] )
  i1682.rotation = new pc.Quat(i1683[6], i1683[7], i1683[8], i1683[9])
  return i1682
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer"] = function (request, data, root) {
  var i1684 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer' )
  var i1685 = data
  i1684.color = new pc.Color(i1685[0], i1685[1], i1685[2], i1685[3])
  request.r(i1685[4], i1685[5], 0, i1684, 'sprite')
  i1684.flipX = !!i1685[6]
  i1684.flipY = !!i1685[7]
  i1684.drawMode = i1685[8]
  i1684.size = new pc.Vec2( i1685[9], i1685[10] )
  i1684.tileMode = i1685[11]
  i1684.adaptiveModeThreshold = i1685[12]
  i1684.maskInteraction = i1685[13]
  i1684.spriteSortPoint = i1685[14]
  i1684.enabled = !!i1685[15]
  request.r(i1685[16], i1685[17], 0, i1684, 'sharedMaterial')
  var i1687 = i1685[18]
  var i1686 = []
  for(var i = 0; i < i1687.length; i += 2) {
  request.r(i1687[i + 0], i1687[i + 1], 2, i1686, '')
  }
  i1684.sharedMaterials = i1686
  i1684.receiveShadows = !!i1685[19]
  i1684.shadowCastingMode = i1685[20]
  i1684.sortingLayerID = i1685[21]
  i1684.sortingOrder = i1685[22]
  i1684.lightmapIndex = i1685[23]
  i1684.lightmapSceneIndex = i1685[24]
  i1684.lightmapScaleOffset = new pc.Vec4( i1685[25], i1685[26], i1685[27], i1685[28] )
  i1684.lightProbeUsage = i1685[29]
  i1684.reflectionProbeUsage = i1685[30]
  return i1684
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CircleCollider2D"] = function (request, data, root) {
  var i1690 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CircleCollider2D' )
  var i1691 = data
  i1690.radius = i1691[0]
  i1690.enabled = !!i1691[1]
  i1690.isTrigger = !!i1691[2]
  i1690.usedByEffector = !!i1691[3]
  i1690.density = i1691[4]
  i1690.offset = new pc.Vec2( i1691[5], i1691[6] )
  request.r(i1691[7], i1691[8], 0, i1690, 'material')
  return i1690
}

Deserializers["BulletController"] = function (request, data, root) {
  var i1692 = root || request.c( 'BulletController' )
  var i1693 = data
  i1692.speed = i1693[0]
  i1692.damage = i1693[1]
  request.r(i1693[2], i1693[3], 0, i1692, 'hitMonsterSound')
  request.r(i1693[4], i1693[5], 0, i1692, 'hitSound')
  i1692.lifeTime = i1693[6]
  i1692.hit = !!i1693[7]
  return i1692
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i1694 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i1695 = data
  i1694.name = i1695[0]
  i1694.tagId = i1695[1]
  i1694.enabled = !!i1695[2]
  i1694.isStatic = !!i1695[3]
  i1694.layer = i1695[4]
  return i1694
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D"] = function (request, data, root) {
  var i1696 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D' )
  var i1697 = data
  i1696.usedByComposite = !!i1697[0]
  i1696.autoTiling = !!i1697[1]
  i1696.size = new pc.Vec2( i1697[2], i1697[3] )
  i1696.edgeRadius = i1697[4]
  i1696.enabled = !!i1697[5]
  i1696.isTrigger = !!i1697[6]
  i1696.usedByEffector = !!i1697[7]
  i1696.density = i1697[8]
  i1696.offset = new pc.Vec2( i1697[9], i1697[10] )
  request.r(i1697[11], i1697[12], 0, i1696, 'material')
  return i1696
}

Deserializers["KunaiController"] = function (request, data, root) {
  var i1698 = root || request.c( 'KunaiController' )
  var i1699 = data
  i1698.damage = i1699[0]
  request.r(i1699[1], i1699[2], 0, i1698, 'hitMonsterSound')
  request.r(i1699[3], i1699[4], 0, i1698, 'hitSound')
  i1698.lifeTime = i1699[5]
  i1698.rotateSpeed = i1699[6]
  i1698.moveSpeed = i1699[7]
  i1698.hit = !!i1699[8]
  return i1698
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Rigidbody2D"] = function (request, data, root) {
  var i1700 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Rigidbody2D' )
  var i1701 = data
  i1700.bodyType = i1701[0]
  request.r(i1701[1], i1701[2], 0, i1700, 'material')
  i1700.simulated = !!i1701[3]
  i1700.useAutoMass = !!i1701[4]
  i1700.mass = i1701[5]
  i1700.drag = i1701[6]
  i1700.angularDrag = i1701[7]
  i1700.gravityScale = i1701[8]
  i1700.collisionDetectionMode = i1701[9]
  i1700.sleepMode = i1701[10]
  i1700.constraints = i1701[11]
  return i1700
}

Deserializers["BombController"] = function (request, data, root) {
  var i1702 = root || request.c( 'BombController' )
  var i1703 = data
  i1702.damage = i1703[0]
  i1702.layer = UnityEngine.LayerMask.FromIntegerValue( i1703[1] )
  request.r(i1703[2], i1703[3], 0, i1702, 'startSound')
  request.r(i1703[4], i1703[5], 0, i1702, 'actionSound')
  i1702.delay = i1703[6]
  request.r(i1703[7], i1703[8], 0, i1702, 'anim')
  request.r(i1703[9], i1703[10], 0, i1702, 'vfx1')
  request.r(i1703[11], i1703[12], 0, i1702, 'vfx2')
  i1702.scale = i1703[13]
  i1702.radius = i1703[14]
  return i1702
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Animator"] = function (request, data, root) {
  var i1704 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Animator' )
  var i1705 = data
  request.r(i1705[0], i1705[1], 0, i1704, 'animatorController')
  request.r(i1705[2], i1705[3], 0, i1704, 'avatar')
  i1704.updateMode = i1705[4]
  i1704.hasTransformHierarchy = !!i1705[5]
  i1704.applyRootMotion = !!i1705[6]
  var i1707 = i1705[7]
  var i1706 = []
  for(var i = 0; i < i1707.length; i += 2) {
  request.r(i1707[i + 0], i1707[i + 1], 2, i1706, '')
  }
  i1704.humanBones = i1706
  i1704.enabled = !!i1705[8]
  return i1704
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystem"] = function (request, data, root) {
  var i1710 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystem' )
  var i1711 = data
  i1710.main = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule', i1711[0], i1710.main)
  i1710.colorBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule', i1711[1], i1710.colorBySpeed)
  i1710.colorOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule', i1711[2], i1710.colorOverLifetime)
  i1710.emission = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule', i1711[3], i1710.emission)
  i1710.rotationBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule', i1711[4], i1710.rotationBySpeed)
  i1710.rotationOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule', i1711[5], i1710.rotationOverLifetime)
  i1710.shape = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule', i1711[6], i1710.shape)
  i1710.sizeBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule', i1711[7], i1710.sizeBySpeed)
  i1710.sizeOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule', i1711[8], i1710.sizeOverLifetime)
  i1710.textureSheetAnimation = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule', i1711[9], i1710.textureSheetAnimation)
  i1710.velocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule', i1711[10], i1710.velocityOverLifetime)
  i1710.noise = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule', i1711[11], i1710.noise)
  i1710.inheritVelocity = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule', i1711[12], i1710.inheritVelocity)
  i1710.forceOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule', i1711[13], i1710.forceOverLifetime)
  i1710.limitVelocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule', i1711[14], i1710.limitVelocityOverLifetime)
  i1710.useAutoRandomSeed = !!i1711[15]
  i1710.randomSeed = i1711[16]
  return i1710
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule"] = function (request, data, root) {
  var i1712 = root || new pc.ParticleSystemMain()
  var i1713 = data
  i1712.duration = i1713[0]
  i1712.loop = !!i1713[1]
  i1712.prewarm = !!i1713[2]
  i1712.startDelay = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1713[3], i1712.startDelay)
  i1712.startLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1713[4], i1712.startLifetime)
  i1712.startSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1713[5], i1712.startSpeed)
  i1712.startSize3D = !!i1713[6]
  i1712.startSizeX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1713[7], i1712.startSizeX)
  i1712.startSizeY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1713[8], i1712.startSizeY)
  i1712.startSizeZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1713[9], i1712.startSizeZ)
  i1712.startRotation3D = !!i1713[10]
  i1712.startRotationX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1713[11], i1712.startRotationX)
  i1712.startRotationY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1713[12], i1712.startRotationY)
  i1712.startRotationZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1713[13], i1712.startRotationZ)
  i1712.startColor = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i1713[14], i1712.startColor)
  i1712.gravityModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1713[15], i1712.gravityModifier)
  i1712.simulationSpace = i1713[16]
  request.r(i1713[17], i1713[18], 0, i1712, 'customSimulationSpace')
  i1712.simulationSpeed = i1713[19]
  i1712.useUnscaledTime = !!i1713[20]
  i1712.scalingMode = i1713[21]
  i1712.playOnAwake = !!i1713[22]
  i1712.maxParticles = i1713[23]
  i1712.emitterVelocityMode = i1713[24]
  i1712.stopAction = i1713[25]
  return i1712
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve"] = function (request, data, root) {
  var i1714 = root || new pc.MinMaxCurve()
  var i1715 = data
  i1714.mode = i1715[0]
  i1714.curveMin = new pc.AnimationCurve( { keys_flow: i1715[1] } )
  i1714.curveMax = new pc.AnimationCurve( { keys_flow: i1715[2] } )
  i1714.curveMultiplier = i1715[3]
  i1714.constantMin = i1715[4]
  i1714.constantMax = i1715[5]
  return i1714
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient"] = function (request, data, root) {
  var i1716 = root || new pc.MinMaxGradient()
  var i1717 = data
  i1716.mode = i1717[0]
  i1716.gradientMin = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i1717[1], i1716.gradientMin)
  i1716.gradientMax = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i1717[2], i1716.gradientMax)
  i1716.colorMin = new pc.Color(i1717[3], i1717[4], i1717[5], i1717[6])
  i1716.colorMax = new pc.Color(i1717[7], i1717[8], i1717[9], i1717[10])
  return i1716
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient"] = function (request, data, root) {
  var i1718 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient' )
  var i1719 = data
  i1718.mode = i1719[0]
  var i1721 = i1719[1]
  var i1720 = []
  for(var i = 0; i < i1721.length; i += 1) {
    i1720.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey', i1721[i + 0]) );
  }
  i1718.colorKeys = i1720
  var i1723 = i1719[2]
  var i1722 = []
  for(var i = 0; i < i1723.length; i += 1) {
    i1722.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey', i1723[i + 0]) );
  }
  i1718.alphaKeys = i1722
  return i1718
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule"] = function (request, data, root) {
  var i1724 = root || new pc.ParticleSystemColorBySpeed()
  var i1725 = data
  i1724.enabled = !!i1725[0]
  i1724.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i1725[1], i1724.color)
  i1724.range = new pc.Vec2( i1725[2], i1725[3] )
  return i1724
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey"] = function (request, data, root) {
  var i1728 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey' )
  var i1729 = data
  i1728.color = new pc.Color(i1729[0], i1729[1], i1729[2], i1729[3])
  i1728.time = i1729[4]
  return i1728
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey"] = function (request, data, root) {
  var i1732 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey' )
  var i1733 = data
  i1732.alpha = i1733[0]
  i1732.time = i1733[1]
  return i1732
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule"] = function (request, data, root) {
  var i1734 = root || new pc.ParticleSystemColorOverLifetime()
  var i1735 = data
  i1734.enabled = !!i1735[0]
  i1734.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i1735[1], i1734.color)
  return i1734
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule"] = function (request, data, root) {
  var i1736 = root || new pc.ParticleSystemEmitter()
  var i1737 = data
  i1736.enabled = !!i1737[0]
  i1736.rateOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1737[1], i1736.rateOverTime)
  i1736.rateOverDistance = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1737[2], i1736.rateOverDistance)
  var i1739 = i1737[3]
  var i1738 = []
  for(var i = 0; i < i1739.length; i += 1) {
    i1738.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst', i1739[i + 0]) );
  }
  i1736.bursts = i1738
  return i1736
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst"] = function (request, data, root) {
  var i1742 = root || new pc.ParticleSystemBurst()
  var i1743 = data
  i1742.count = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1743[0], i1742.count)
  i1742.cycleCount = i1743[1]
  i1742.minCount = i1743[2]
  i1742.maxCount = i1743[3]
  i1742.repeatInterval = i1743[4]
  i1742.time = i1743[5]
  return i1742
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule"] = function (request, data, root) {
  var i1744 = root || new pc.ParticleSystemRotationBySpeed()
  var i1745 = data
  i1744.enabled = !!i1745[0]
  i1744.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1745[1], i1744.x)
  i1744.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1745[2], i1744.y)
  i1744.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1745[3], i1744.z)
  i1744.separateAxes = !!i1745[4]
  i1744.range = new pc.Vec2( i1745[5], i1745[6] )
  return i1744
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule"] = function (request, data, root) {
  var i1746 = root || new pc.ParticleSystemRotationOverLifetime()
  var i1747 = data
  i1746.enabled = !!i1747[0]
  i1746.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1747[1], i1746.x)
  i1746.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1747[2], i1746.y)
  i1746.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1747[3], i1746.z)
  i1746.separateAxes = !!i1747[4]
  return i1746
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule"] = function (request, data, root) {
  var i1748 = root || new pc.ParticleSystemShape()
  var i1749 = data
  i1748.enabled = !!i1749[0]
  i1748.shapeType = i1749[1]
  i1748.randomDirectionAmount = i1749[2]
  i1748.sphericalDirectionAmount = i1749[3]
  i1748.randomPositionAmount = i1749[4]
  i1748.alignToDirection = !!i1749[5]
  i1748.radius = i1749[6]
  i1748.radiusMode = i1749[7]
  i1748.radiusSpread = i1749[8]
  i1748.radiusSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1749[9], i1748.radiusSpeed)
  i1748.radiusThickness = i1749[10]
  i1748.angle = i1749[11]
  i1748.length = i1749[12]
  i1748.boxThickness = new pc.Vec3( i1749[13], i1749[14], i1749[15] )
  i1748.meshShapeType = i1749[16]
  request.r(i1749[17], i1749[18], 0, i1748, 'mesh')
  request.r(i1749[19], i1749[20], 0, i1748, 'meshRenderer')
  request.r(i1749[21], i1749[22], 0, i1748, 'skinnedMeshRenderer')
  i1748.useMeshMaterialIndex = !!i1749[23]
  i1748.meshMaterialIndex = i1749[24]
  i1748.useMeshColors = !!i1749[25]
  i1748.normalOffset = i1749[26]
  i1748.arc = i1749[27]
  i1748.arcMode = i1749[28]
  i1748.arcSpread = i1749[29]
  i1748.arcSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1749[30], i1748.arcSpeed)
  i1748.donutRadius = i1749[31]
  i1748.position = new pc.Vec3( i1749[32], i1749[33], i1749[34] )
  i1748.rotation = new pc.Vec3( i1749[35], i1749[36], i1749[37] )
  i1748.scale = new pc.Vec3( i1749[38], i1749[39], i1749[40] )
  return i1748
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule"] = function (request, data, root) {
  var i1750 = root || new pc.ParticleSystemSizeBySpeed()
  var i1751 = data
  i1750.enabled = !!i1751[0]
  i1750.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1751[1], i1750.x)
  i1750.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1751[2], i1750.y)
  i1750.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1751[3], i1750.z)
  i1750.separateAxes = !!i1751[4]
  i1750.range = new pc.Vec2( i1751[5], i1751[6] )
  return i1750
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule"] = function (request, data, root) {
  var i1752 = root || new pc.ParticleSystemSizeOverLifetime()
  var i1753 = data
  i1752.enabled = !!i1753[0]
  i1752.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1753[1], i1752.x)
  i1752.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1753[2], i1752.y)
  i1752.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1753[3], i1752.z)
  i1752.separateAxes = !!i1753[4]
  return i1752
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule"] = function (request, data, root) {
  var i1754 = root || new pc.ParticleSystemTextureSheetAnimation()
  var i1755 = data
  i1754.enabled = !!i1755[0]
  i1754.mode = i1755[1]
  i1754.animation = i1755[2]
  i1754.numTilesX = i1755[3]
  i1754.numTilesY = i1755[4]
  i1754.useRandomRow = !!i1755[5]
  i1754.frameOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1755[6], i1754.frameOverTime)
  i1754.startFrame = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1755[7], i1754.startFrame)
  i1754.cycleCount = i1755[8]
  i1754.rowIndex = i1755[9]
  i1754.flipU = i1755[10]
  i1754.flipV = i1755[11]
  i1754.spriteCount = i1755[12]
  var i1757 = i1755[13]
  var i1756 = []
  for(var i = 0; i < i1757.length; i += 2) {
  request.r(i1757[i + 0], i1757[i + 1], 2, i1756, '')
  }
  i1754.sprites = i1756
  return i1754
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule"] = function (request, data, root) {
  var i1760 = root || new pc.ParticleSystemVelocityOverLifetime()
  var i1761 = data
  i1760.enabled = !!i1761[0]
  i1760.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1761[1], i1760.x)
  i1760.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1761[2], i1760.y)
  i1760.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1761[3], i1760.z)
  i1760.radial = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1761[4], i1760.radial)
  i1760.speedModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1761[5], i1760.speedModifier)
  i1760.space = i1761[6]
  i1760.orbitalX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1761[7], i1760.orbitalX)
  i1760.orbitalY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1761[8], i1760.orbitalY)
  i1760.orbitalZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1761[9], i1760.orbitalZ)
  i1760.orbitalOffsetX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1761[10], i1760.orbitalOffsetX)
  i1760.orbitalOffsetY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1761[11], i1760.orbitalOffsetY)
  i1760.orbitalOffsetZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1761[12], i1760.orbitalOffsetZ)
  return i1760
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule"] = function (request, data, root) {
  var i1762 = root || new pc.ParticleSystemNoise()
  var i1763 = data
  i1762.enabled = !!i1763[0]
  i1762.separateAxes = !!i1763[1]
  i1762.strengthX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1763[2], i1762.strengthX)
  i1762.strengthY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1763[3], i1762.strengthY)
  i1762.strengthZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1763[4], i1762.strengthZ)
  i1762.frequency = i1763[5]
  i1762.damping = !!i1763[6]
  i1762.octaveCount = i1763[7]
  i1762.octaveMultiplier = i1763[8]
  i1762.octaveScale = i1763[9]
  i1762.quality = i1763[10]
  i1762.scrollSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1763[11], i1762.scrollSpeed)
  i1762.scrollSpeedMultiplier = i1763[12]
  i1762.remapEnabled = !!i1763[13]
  i1762.remapX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1763[14], i1762.remapX)
  i1762.remapY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1763[15], i1762.remapY)
  i1762.remapZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1763[16], i1762.remapZ)
  i1762.positionAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1763[17], i1762.positionAmount)
  i1762.rotationAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1763[18], i1762.rotationAmount)
  i1762.sizeAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1763[19], i1762.sizeAmount)
  return i1762
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule"] = function (request, data, root) {
  var i1764 = root || new pc.ParticleSystemInheritVelocity()
  var i1765 = data
  i1764.enabled = !!i1765[0]
  i1764.mode = i1765[1]
  i1764.curve = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1765[2], i1764.curve)
  return i1764
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule"] = function (request, data, root) {
  var i1766 = root || new pc.ParticleSystemForceOverLifetime()
  var i1767 = data
  i1766.enabled = !!i1767[0]
  i1766.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1767[1], i1766.x)
  i1766.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1767[2], i1766.y)
  i1766.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1767[3], i1766.z)
  i1766.space = i1767[4]
  i1766.randomized = !!i1767[5]
  return i1766
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule"] = function (request, data, root) {
  var i1768 = root || new pc.ParticleSystemLimitVelocityOverLifetime()
  var i1769 = data
  i1768.enabled = !!i1769[0]
  i1768.limit = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1769[1], i1768.limit)
  i1768.limitX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1769[2], i1768.limitX)
  i1768.limitY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1769[3], i1768.limitY)
  i1768.limitZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1769[4], i1768.limitZ)
  i1768.dampen = i1769[5]
  i1768.separateAxes = !!i1769[6]
  i1768.space = i1769[7]
  i1768.drag = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1769[8], i1768.drag)
  i1768.multiplyDragByParticleSize = !!i1769[9]
  i1768.multiplyDragByParticleVelocity = !!i1769[10]
  return i1768
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer"] = function (request, data, root) {
  var i1770 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer' )
  var i1771 = data
  request.r(i1771[0], i1771[1], 0, i1770, 'mesh')
  i1770.meshCount = i1771[2]
  i1770.activeVertexStreamsCount = i1771[3]
  i1770.alignment = i1771[4]
  i1770.renderMode = i1771[5]
  i1770.sortMode = i1771[6]
  i1770.lengthScale = i1771[7]
  i1770.velocityScale = i1771[8]
  i1770.cameraVelocityScale = i1771[9]
  i1770.normalDirection = i1771[10]
  i1770.sortingFudge = i1771[11]
  i1770.minParticleSize = i1771[12]
  i1770.maxParticleSize = i1771[13]
  i1770.pivot = new pc.Vec3( i1771[14], i1771[15], i1771[16] )
  request.r(i1771[17], i1771[18], 0, i1770, 'trailMaterial')
  i1770.applyActiveColorSpace = !!i1771[19]
  i1770.enabled = !!i1771[20]
  request.r(i1771[21], i1771[22], 0, i1770, 'sharedMaterial')
  var i1773 = i1771[23]
  var i1772 = []
  for(var i = 0; i < i1773.length; i += 2) {
  request.r(i1773[i + 0], i1773[i + 1], 2, i1772, '')
  }
  i1770.sharedMaterials = i1772
  i1770.receiveShadows = !!i1771[24]
  i1770.shadowCastingMode = i1771[25]
  i1770.sortingLayerID = i1771[26]
  i1770.sortingOrder = i1771[27]
  i1770.lightmapIndex = i1771[28]
  i1770.lightmapSceneIndex = i1771[29]
  i1770.lightmapScaleOffset = new pc.Vec4( i1771[30], i1771[31], i1771[32], i1771[33] )
  i1770.lightProbeUsage = i1771[34]
  i1770.reflectionProbeUsage = i1771[35]
  return i1770
}

Deserializers["BlockController"] = function (request, data, root) {
  var i1774 = root || request.c( 'BlockController' )
  var i1775 = data
  i1774.maxHP = i1775[0]
  i1774.currentHP = i1775[1]
  i1774.isBreak = !!i1775[2]
  i1774.numMonster = i1775[3]
  request.r(i1775[4], i1775[5], 0, i1774, 'hitSFX')
  request.r(i1775[6], i1775[7], 0, i1774, 'breakVFX')
  request.r(i1775[8], i1775[9], 0, i1774, 'breakSFX')
  return i1774
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh"] = function (request, data, root) {
  var i1776 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh' )
  var i1777 = data
  i1776.name = i1777[0]
  i1776.halfPrecision = !!i1777[1]
  i1776.useSimplification = !!i1777[2]
  i1776.useUInt32IndexFormat = !!i1777[3]
  i1776.vertexCount = i1777[4]
  i1776.aabb = i1777[5]
  var i1779 = i1777[6]
  var i1778 = []
  for(var i = 0; i < i1779.length; i += 1) {
    i1778.push( !!i1779[i + 0] );
  }
  i1776.streams = i1778
  i1776.vertices = i1777[7]
  var i1781 = i1777[8]
  var i1780 = []
  for(var i = 0; i < i1781.length; i += 1) {
    i1780.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh', i1781[i + 0]) );
  }
  i1776.subMeshes = i1780
  var i1783 = i1777[9]
  var i1782 = []
  for(var i = 0; i < i1783.length; i += 16) {
    i1782.push( new pc.Mat4().setData(i1783[i + 0], i1783[i + 1], i1783[i + 2], i1783[i + 3],  i1783[i + 4], i1783[i + 5], i1783[i + 6], i1783[i + 7],  i1783[i + 8], i1783[i + 9], i1783[i + 10], i1783[i + 11],  i1783[i + 12], i1783[i + 13], i1783[i + 14], i1783[i + 15]) );
  }
  i1776.bindposes = i1782
  var i1785 = i1777[10]
  var i1784 = []
  for(var i = 0; i < i1785.length; i += 1) {
    i1784.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape', i1785[i + 0]) );
  }
  i1776.blendShapes = i1784
  return i1776
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh"] = function (request, data, root) {
  var i1790 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh' )
  var i1791 = data
  i1790.triangles = i1791[0]
  return i1790
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape"] = function (request, data, root) {
  var i1796 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape' )
  var i1797 = data
  i1796.name = i1797[0]
  var i1799 = i1797[1]
  var i1798 = []
  for(var i = 0; i < i1799.length; i += 1) {
    i1798.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame', i1799[i + 0]) );
  }
  i1796.frames = i1798
  return i1796
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SortingGroup"] = function (request, data, root) {
  var i1800 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SortingGroup' )
  var i1801 = data
  i1800.sortingLayerIndex = i1801[0]
  i1800.sortingOrder = i1801[1]
  i1800.sortingLayerName = i1801[2]
  i1800.enabled = !!i1801[3]
  return i1800
}

Deserializers["MonsterController"] = function (request, data, root) {
  var i1802 = root || request.c( 'MonsterController' )
  var i1803 = data
  i1802.maxHP = i1803[0]
  i1802.currentHP = i1803[1]
  var i1805 = i1803[2]
  var i1804 = new (System.Collections.Generic.List$1(Bridge.ns('Piece')))
  for(var i = 0; i < i1805.length; i += 1) {
    i1804.add(request.d('Piece', i1805[i + 0]));
  }
  i1802.pieces = i1804
  request.r(i1803[3], i1803[4], 0, i1802, 'deadSFX')
  i1802.maxForce = new pc.Vec2( i1803[5], i1803[6] )
  i1802.minForce = new pc.Vec2( i1803[7], i1803[8] )
  request.r(i1803[9], i1803[10], 0, i1802, 'balance')
  i1802.isDead = !!i1803[11]
  i1802.speed = i1803[12]
  request.r(i1803[13], i1803[14], 0, i1802, 'body')
  request.r(i1803[15], i1803[16], 0, i1802, 'leftHand')
  request.r(i1803[17], i1803[18], 0, i1802, 'rightHand')
  request.r(i1803[19], i1803[20], 0, i1802, 'leftLeg')
  request.r(i1803[21], i1803[22], 0, i1802, 'rightLeg')
  return i1802
}

Deserializers["Piece"] = function (request, data, root) {
  var i1808 = root || request.c( 'Piece' )
  var i1809 = data
  request.r(i1809[0], i1809[1], 0, i1808, 'Joint')
  request.r(i1809[2], i1809[3], 0, i1808, 'Rb')
  return i1808
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.HingeJoint2D"] = function (request, data, root) {
  var i1810 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.HingeJoint2D' )
  var i1811 = data
  i1810.useLimits = !!i1811[0]
  i1810.limits = request.d('UnityEngine.JointAngleLimits2D', i1811[1], i1810.limits)
  i1810.useMotor = !!i1811[2]
  i1810.motor = request.d('UnityEngine.JointMotor2D', i1811[3], i1810.motor)
  i1810.anchor = new pc.Vec2( i1811[4], i1811[5] )
  i1810.connectedAnchor = new pc.Vec2( i1811[6], i1811[7] )
  i1810.autoConfigureConnectedAnchor = !!i1811[8]
  request.r(i1811[9], i1811[10], 0, i1810, 'connectedBody')
  i1810.breakForce = i1811[11]
  i1810.breakTorque = i1811[12]
  i1810.enableCollision = !!i1811[13]
  i1810.enabled = !!i1811[14]
  return i1810
}

Deserializers["BalanceController"] = function (request, data, root) {
  var i1812 = root || request.c( 'BalanceController' )
  var i1813 = data
  i1812.targetRotation = i1813[0]
  i1812.force = i1813[1]
  return i1812
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i1814 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i1815 = data
  i1814.name = i1815[0]
  i1814.index = i1815[1]
  i1814.startup = !!i1815[2]
  return i1814
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i1816 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i1817 = data
  i1816.aspect = i1817[0]
  i1816.orthographic = !!i1817[1]
  i1816.orthographicSize = i1817[2]
  i1816.backgroundColor = new pc.Color(i1817[3], i1817[4], i1817[5], i1817[6])
  i1816.nearClipPlane = i1817[7]
  i1816.farClipPlane = i1817[8]
  i1816.fieldOfView = i1817[9]
  i1816.depth = i1817[10]
  i1816.clearFlags = i1817[11]
  i1816.cullingMask = i1817[12]
  i1816.rect = i1817[13]
  request.r(i1817[14], i1817[15], 0, i1816, 'targetTexture')
  i1816.usePhysicalProperties = !!i1817[16]
  i1816.focalLength = i1817[17]
  i1816.sensorSize = new pc.Vec2( i1817[18], i1817[19] )
  i1816.lensShift = new pc.Vec2( i1817[20], i1817[21] )
  i1816.gateFit = i1817[22]
  i1816.commandBufferCount = i1817[23]
  i1816.cameraType = i1817[24]
  i1816.enabled = !!i1817[25]
  return i1816
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i1818 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i1819 = data
  request.r(i1819[0], i1819[1], 0, i1818, 'm_FirstSelected')
  i1818.m_sendNavigationEvents = !!i1819[2]
  i1818.m_DragThreshold = i1819[3]
  return i1818
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i1820 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i1821 = data
  i1820.m_HorizontalAxis = i1821[0]
  i1820.m_VerticalAxis = i1821[1]
  i1820.m_SubmitButton = i1821[2]
  i1820.m_CancelButton = i1821[3]
  i1820.m_InputActionsPerSecond = i1821[4]
  i1820.m_RepeatDelay = i1821[5]
  i1820.m_ForceModuleActive = !!i1821[6]
  i1820.m_SendPointerHoverToParent = !!i1821[7]
  return i1820
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i1822 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i1823 = data
  i1822.pivot = new pc.Vec2( i1823[0], i1823[1] )
  i1822.anchorMin = new pc.Vec2( i1823[2], i1823[3] )
  i1822.anchorMax = new pc.Vec2( i1823[4], i1823[5] )
  i1822.sizeDelta = new pc.Vec2( i1823[6], i1823[7] )
  i1822.anchoredPosition3D = new pc.Vec3( i1823[8], i1823[9], i1823[10] )
  i1822.rotation = new pc.Quat(i1823[11], i1823[12], i1823[13], i1823[14])
  i1822.scale = new pc.Vec3( i1823[15], i1823[16], i1823[17] )
  return i1822
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i1824 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i1825 = data
  i1824.planeDistance = i1825[0]
  i1824.referencePixelsPerUnit = i1825[1]
  i1824.isFallbackOverlay = !!i1825[2]
  i1824.renderMode = i1825[3]
  i1824.renderOrder = i1825[4]
  i1824.sortingLayerName = i1825[5]
  i1824.sortingOrder = i1825[6]
  i1824.scaleFactor = i1825[7]
  request.r(i1825[8], i1825[9], 0, i1824, 'worldCamera')
  i1824.overrideSorting = !!i1825[10]
  i1824.pixelPerfect = !!i1825[11]
  i1824.targetDisplay = i1825[12]
  i1824.overridePixelPerfect = !!i1825[13]
  i1824.enabled = !!i1825[14]
  return i1824
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i1826 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i1827 = data
  i1826.m_UiScaleMode = i1827[0]
  i1826.m_ReferencePixelsPerUnit = i1827[1]
  i1826.m_ScaleFactor = i1827[2]
  i1826.m_ReferenceResolution = new pc.Vec2( i1827[3], i1827[4] )
  i1826.m_ScreenMatchMode = i1827[5]
  i1826.m_MatchWidthOrHeight = i1827[6]
  i1826.m_PhysicalUnit = i1827[7]
  i1826.m_FallbackScreenDPI = i1827[8]
  i1826.m_DefaultSpriteDPI = i1827[9]
  i1826.m_DynamicPixelsPerUnit = i1827[10]
  i1826.m_PresetInfoIsWorld = !!i1827[11]
  return i1826
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i1828 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i1829 = data
  i1828.m_IgnoreReversedGraphics = !!i1829[0]
  i1828.m_BlockingObjects = i1829[1]
  i1828.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i1829[2] )
  return i1828
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i1830 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i1831 = data
  i1830.cullTransparentMesh = !!i1831[0]
  return i1830
}

Deserializers["UnityEngine.UI.RawImage"] = function (request, data, root) {
  var i1832 = root || request.c( 'UnityEngine.UI.RawImage' )
  var i1833 = data
  request.r(i1833[0], i1833[1], 0, i1832, 'm_Texture')
  i1832.m_UVRect = UnityEngine.Rect.MinMaxRect(i1833[2], i1833[3], i1833[4], i1833[5])
  request.r(i1833[6], i1833[7], 0, i1832, 'm_Material')
  i1832.m_Maskable = !!i1833[8]
  i1832.m_Color = new pc.Color(i1833[9], i1833[10], i1833[11], i1833[12])
  i1832.m_RaycastTarget = !!i1833[13]
  i1832.m_RaycastPadding = new pc.Vec4( i1833[14], i1833[15], i1833[16], i1833[17] )
  return i1832
}

Deserializers["UnityEngine.UI.AspectRatioFitter"] = function (request, data, root) {
  var i1834 = root || request.c( 'UnityEngine.UI.AspectRatioFitter' )
  var i1835 = data
  i1834.m_AspectMode = i1835[0]
  i1834.m_AspectRatio = i1835[1]
  return i1834
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i1836 = root || request.c( 'UnityEngine.UI.Image' )
  var i1837 = data
  request.r(i1837[0], i1837[1], 0, i1836, 'm_Sprite')
  i1836.m_Type = i1837[2]
  i1836.m_PreserveAspect = !!i1837[3]
  i1836.m_FillCenter = !!i1837[4]
  i1836.m_FillMethod = i1837[5]
  i1836.m_FillAmount = i1837[6]
  i1836.m_FillClockwise = !!i1837[7]
  i1836.m_FillOrigin = i1837[8]
  i1836.m_UseSpriteMesh = !!i1837[9]
  i1836.m_PixelsPerUnitMultiplier = i1837[10]
  request.r(i1837[11], i1837[12], 0, i1836, 'm_Material')
  i1836.m_Maskable = !!i1837[13]
  i1836.m_Color = new pc.Color(i1837[14], i1837[15], i1837[16], i1837[17])
  i1836.m_RaycastTarget = !!i1837[18]
  i1836.m_RaycastPadding = new pc.Vec4( i1837[19], i1837[20], i1837[21], i1837[22] )
  return i1836
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i1838 = root || request.c( 'UnityEngine.UI.Button' )
  var i1839 = data
  i1838.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i1839[0], i1838.m_OnClick)
  i1838.m_Navigation = request.d('UnityEngine.UI.Navigation', i1839[1], i1838.m_Navigation)
  i1838.m_Transition = i1839[2]
  i1838.m_Colors = request.d('UnityEngine.UI.ColorBlock', i1839[3], i1838.m_Colors)
  i1838.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i1839[4], i1838.m_SpriteState)
  i1838.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i1839[5], i1838.m_AnimationTriggers)
  i1838.m_Interactable = !!i1839[6]
  request.r(i1839[7], i1839[8], 0, i1838, 'm_TargetGraphic')
  return i1838
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i1840 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i1841 = data
  i1840.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i1841[0], i1840.m_PersistentCalls)
  return i1840
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i1842 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i1843 = data
  var i1845 = i1843[0]
  var i1844 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i1845.length; i += 1) {
    i1844.add(request.d('UnityEngine.Events.PersistentCall', i1845[i + 0]));
  }
  i1842.m_Calls = i1844
  return i1842
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i1848 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i1849 = data
  request.r(i1849[0], i1849[1], 0, i1848, 'm_Target')
  i1848.m_TargetAssemblyTypeName = i1849[2]
  i1848.m_MethodName = i1849[3]
  i1848.m_Mode = i1849[4]
  i1848.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i1849[5], i1848.m_Arguments)
  i1848.m_CallState = i1849[6]
  return i1848
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i1850 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i1851 = data
  i1850.m_Mode = i1851[0]
  i1850.m_WrapAround = !!i1851[1]
  request.r(i1851[2], i1851[3], 0, i1850, 'm_SelectOnUp')
  request.r(i1851[4], i1851[5], 0, i1850, 'm_SelectOnDown')
  request.r(i1851[6], i1851[7], 0, i1850, 'm_SelectOnLeft')
  request.r(i1851[8], i1851[9], 0, i1850, 'm_SelectOnRight')
  return i1850
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i1852 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i1853 = data
  i1852.m_NormalColor = new pc.Color(i1853[0], i1853[1], i1853[2], i1853[3])
  i1852.m_HighlightedColor = new pc.Color(i1853[4], i1853[5], i1853[6], i1853[7])
  i1852.m_PressedColor = new pc.Color(i1853[8], i1853[9], i1853[10], i1853[11])
  i1852.m_SelectedColor = new pc.Color(i1853[12], i1853[13], i1853[14], i1853[15])
  i1852.m_DisabledColor = new pc.Color(i1853[16], i1853[17], i1853[18], i1853[19])
  i1852.m_ColorMultiplier = i1853[20]
  i1852.m_FadeDuration = i1853[21]
  return i1852
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i1854 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i1855 = data
  request.r(i1855[0], i1855[1], 0, i1854, 'm_HighlightedSprite')
  request.r(i1855[2], i1855[3], 0, i1854, 'm_PressedSprite')
  request.r(i1855[4], i1855[5], 0, i1854, 'm_SelectedSprite')
  request.r(i1855[6], i1855[7], 0, i1854, 'm_DisabledSprite')
  return i1854
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i1856 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i1857 = data
  i1856.m_NormalTrigger = i1857[0]
  i1856.m_HighlightedTrigger = i1857[1]
  i1856.m_PressedTrigger = i1857[2]
  i1856.m_SelectedTrigger = i1857[3]
  i1856.m_DisabledTrigger = i1857[4]
  return i1856
}

Deserializers["UnityEngine.UI.Text"] = function (request, data, root) {
  var i1858 = root || request.c( 'UnityEngine.UI.Text' )
  var i1859 = data
  i1858.m_FontData = request.d('UnityEngine.UI.FontData', i1859[0], i1858.m_FontData)
  i1858.m_Text = i1859[1]
  request.r(i1859[2], i1859[3], 0, i1858, 'm_Material')
  i1858.m_Maskable = !!i1859[4]
  i1858.m_Color = new pc.Color(i1859[5], i1859[6], i1859[7], i1859[8])
  i1858.m_RaycastTarget = !!i1859[9]
  i1858.m_RaycastPadding = new pc.Vec4( i1859[10], i1859[11], i1859[12], i1859[13] )
  return i1858
}

Deserializers["UnityEngine.UI.FontData"] = function (request, data, root) {
  var i1860 = root || request.c( 'UnityEngine.UI.FontData' )
  var i1861 = data
  request.r(i1861[0], i1861[1], 0, i1860, 'm_Font')
  i1860.m_FontSize = i1861[2]
  i1860.m_FontStyle = i1861[3]
  i1860.m_BestFit = !!i1861[4]
  i1860.m_MinSize = i1861[5]
  i1860.m_MaxSize = i1861[6]
  i1860.m_Alignment = i1861[7]
  i1860.m_AlignByGeometry = !!i1861[8]
  i1860.m_RichText = !!i1861[9]
  i1860.m_HorizontalOverflow = i1861[10]
  i1860.m_VerticalOverflow = i1861[11]
  i1860.m_LineSpacing = i1861[12]
  return i1860
}

Deserializers["TutController"] = function (request, data, root) {
  var i1862 = root || request.c( 'TutController' )
  var i1863 = data
  var i1865 = i1863[0]
  var i1864 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Vector2')))
  for(var i = 0; i < i1865.length; i += 2) {
    i1864.add(new pc.Vec2( i1865[i + 0], i1865[i + 1] ));
  }
  i1862.movePos = i1864
  i1862.moveTime = i1863[1]
  i1862.fromScale = i1863[2]
  i1862.toScale = i1863[3]
  i1862.scaleTime = i1863[4]
  return i1862
}

Deserializers["DG.Tweening.DOTweenAnimation"] = function (request, data, root) {
  var i1868 = root || request.c( 'DG.Tweening.DOTweenAnimation' )
  var i1869 = data
  i1868.targetIsSelf = !!i1869[0]
  request.r(i1869[1], i1869[2], 0, i1868, 'targetGO')
  i1868.tweenTargetIsTargetGO = !!i1869[3]
  i1868.delay = i1869[4]
  i1868.duration = i1869[5]
  i1868.easeType = i1869[6]
  i1868.easeCurve = new pc.AnimationCurve( { keys_flow: i1869[7] } )
  i1868.loopType = i1869[8]
  i1868.loops = i1869[9]
  i1868.id = i1869[10]
  i1868.isRelative = !!i1869[11]
  i1868.isFrom = !!i1869[12]
  i1868.isIndependentUpdate = !!i1869[13]
  i1868.autoKill = !!i1869[14]
  i1868.autoGenerate = !!i1869[15]
  i1868.isActive = !!i1869[16]
  i1868.isValid = !!i1869[17]
  request.r(i1869[18], i1869[19], 0, i1868, 'target')
  i1868.animationType = i1869[20]
  i1868.targetType = i1869[21]
  i1868.forcedTargetType = i1869[22]
  i1868.autoPlay = !!i1869[23]
  i1868.useTargetAsV3 = !!i1869[24]
  i1868.endValueFloat = i1869[25]
  i1868.endValueV3 = new pc.Vec3( i1869[26], i1869[27], i1869[28] )
  i1868.endValueV2 = new pc.Vec2( i1869[29], i1869[30] )
  i1868.endValueColor = new pc.Color(i1869[31], i1869[32], i1869[33], i1869[34])
  i1868.endValueString = i1869[35]
  i1868.endValueRect = UnityEngine.Rect.MinMaxRect(i1869[36], i1869[37], i1869[38], i1869[39])
  request.r(i1869[40], i1869[41], 0, i1868, 'endValueTransform')
  i1868.optionalBool0 = !!i1869[42]
  i1868.optionalBool1 = !!i1869[43]
  i1868.optionalFloat0 = i1869[44]
  i1868.optionalInt0 = i1869[45]
  i1868.optionalRotationMode = i1869[46]
  i1868.optionalScrambleMode = i1869[47]
  i1868.optionalShakeRandomnessMode = i1869[48]
  i1868.optionalString = i1869[49]
  i1868.updateType = i1869[50]
  i1868.isSpeedBased = !!i1869[51]
  i1868.hasOnStart = !!i1869[52]
  i1868.hasOnPlay = !!i1869[53]
  i1868.hasOnUpdate = !!i1869[54]
  i1868.hasOnStepComplete = !!i1869[55]
  i1868.hasOnComplete = !!i1869[56]
  i1868.hasOnTweenCreated = !!i1869[57]
  i1868.hasOnRewind = !!i1869[58]
  i1868.onStart = request.d('UnityEngine.Events.UnityEvent', i1869[59], i1868.onStart)
  i1868.onPlay = request.d('UnityEngine.Events.UnityEvent', i1869[60], i1868.onPlay)
  i1868.onUpdate = request.d('UnityEngine.Events.UnityEvent', i1869[61], i1868.onUpdate)
  i1868.onStepComplete = request.d('UnityEngine.Events.UnityEvent', i1869[62], i1868.onStepComplete)
  i1868.onComplete = request.d('UnityEngine.Events.UnityEvent', i1869[63], i1868.onComplete)
  i1868.onTweenCreated = request.d('UnityEngine.Events.UnityEvent', i1869[64], i1868.onTweenCreated)
  i1868.onRewind = request.d('UnityEngine.Events.UnityEvent', i1869[65], i1868.onRewind)
  return i1868
}

Deserializers["UnityEngine.Events.UnityEvent"] = function (request, data, root) {
  var i1870 = root || request.c( 'UnityEngine.Events.UnityEvent' )
  var i1871 = data
  i1870.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i1871[0], i1870.m_PersistentCalls)
  return i1870
}

Deserializers["PlayerController"] = function (request, data, root) {
  var i1872 = root || request.c( 'PlayerController' )
  var i1873 = data
  var i1875 = i1873[0]
  var i1874 = new (System.Collections.Generic.List$1(Bridge.ns('Piece')))
  for(var i = 0; i < i1875.length; i += 1) {
    i1874.add(request.d('Piece', i1875[i + 0]));
  }
  i1872.pieces = i1874
  request.r(i1873[1], i1873[2], 0, i1872, 'head')
  request.r(i1873[3], i1873[4], 0, i1872, 'deadSFX')
  i1872.maxForce = new pc.Vec2( i1873[5], i1873[6] )
  i1872.minForce = new pc.Vec2( i1873[7], i1873[8] )
  var i1877 = i1873[9]
  var i1876 = new (System.Collections.Generic.List$1(Bridge.ns('FightOption')))
  for(var i = 0; i < i1877.length; i += 1) {
    i1876.add(request.d('FightOption', i1877[i + 0]));
  }
  i1872.fightOptions = i1876
  request.r(i1873[10], i1873[11], 0, i1872, 'optionTut')
  request.r(i1873[12], i1873[13], 0, i1872, 'attackTut')
  i1872.fight = request.d('FightOption', i1873[14], i1872.fight)
  request.r(i1873[15], i1873[16], 0, i1872, 'clickSound')
  return i1872
}

Deserializers["FightOption"] = function (request, data, root) {
  var i1880 = root || request.c( 'FightOption' )
  var i1881 = data
  request.r(i1881[0], i1881[1], 0, i1880, 'Button')
  request.r(i1881[2], i1881[3], 0, i1880, 'Selected')
  request.r(i1881[4], i1881[5], 0, i1880, 'Controller')
  return i1880
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.TargetJoint2D"] = function (request, data, root) {
  var i1882 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.TargetJoint2D' )
  var i1883 = data
  i1882.autoConfigureTarget = !!i1883[0]
  i1882.target = new pc.Vec2( i1883[1], i1883[2] )
  i1882.anchor = new pc.Vec2( i1883[3], i1883[4] )
  i1882.maxForce = i1883[5]
  i1882.dampingRatio = i1883[6]
  i1882.frequency = i1883[7]
  request.r(i1883[8], i1883[9], 0, i1882, 'connectedBody')
  i1882.breakForce = i1883[10]
  i1882.breakTorque = i1883[11]
  i1882.enableCollision = !!i1883[12]
  i1882.enabled = !!i1883[13]
  return i1882
}

Deserializers["ShootController"] = function (request, data, root) {
  var i1884 = root || request.c( 'ShootController' )
  var i1885 = data
  request.r(i1885[0], i1885[1], 0, i1884, 'currentMonster')
  request.r(i1885[2], i1885[3], 0, i1884, 'left')
  request.r(i1885[4], i1885[5], 0, i1884, 'right')
  i1884.timeMotor = i1885[6]
  i1884.onCD = !!i1885[7]
  i1884.CD = i1885[8]
  request.r(i1885[9], i1885[10], 0, i1884, 'startPos')
  request.r(i1885[11], i1885[12], 0, i1884, 'attackSound')
  request.r(i1885[13], i1885[14], 0, i1884, 'spawnPrefab')
  request.r(i1885[15], i1885[16], 0, i1884, 'poolParent')
  return i1884
}

Deserializers["DropController"] = function (request, data, root) {
  var i1886 = root || request.c( 'DropController' )
  var i1887 = data
  request.r(i1887[0], i1887[1], 0, i1886, 'attackSound')
  request.r(i1887[2], i1887[3], 0, i1886, 'spawnPrefab')
  request.r(i1887[4], i1887[5], 0, i1886, 'poolParent')
  return i1886
}

Deserializers["DefenseController"] = function (request, data, root) {
  var i1888 = root || request.c( 'DefenseController' )
  var i1889 = data
  request.r(i1889[0], i1889[1], 0, i1888, 'world')
  i1888.offset = new pc.Vec2( i1889[2], i1889[3] )
  i1888.cellSize = i1889[4]
  request.r(i1889[5], i1889[6], 0, i1888, 'putSound')
  request.r(i1889[7], i1889[8], 0, i1888, 'clickSound')
  var i1891 = i1889[9]
  var i1890 = new (System.Collections.Generic.List$1(Bridge.ns('BlockType')))
  for(var i = 0; i < i1891.length; i += 1) {
    i1890.add(request.d('BlockType', i1891[i + 0]));
  }
  i1888.blockTypes = i1890
  request.r(i1889[10], i1889[11], 0, i1888, 'optionTut')
  request.r(i1889[12], i1889[13], 0, i1888, 'buildTut')
  return i1888
}

Deserializers["BlockType"] = function (request, data, root) {
  var i1894 = root || request.c( 'BlockType' )
  var i1895 = data
  request.r(i1895[0], i1895[1], 0, i1894, 'Button')
  request.r(i1895[2], i1895[3], 0, i1894, 'Selected')
  request.r(i1895[4], i1895[5], 0, i1894, 'Prefab')
  i1894.blockSize = new pc.Vec2( i1895[6], i1895[7] )
  return i1894
}

Deserializers["GameController"] = function (request, data, root) {
  var i1896 = root || request.c( 'GameController' )
  var i1897 = data
  i1896.OnStart = request.d('System.Action', i1897[0], i1896.OnStart)
  i1896.OnClick = request.d('System.Action', i1897[1], i1896.OnClick)
  i1896.OnGameOver = request.d('System.Action', i1897[2], i1896.OnGameOver)
  i1896.OnGameComplete = request.d('System.Action', i1897[3], i1896.OnGameComplete)
  var i1899 = i1897[4]
  var i1898 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.GameObject')))
  for(var i = 0; i < i1899.length; i += 2) {
  request.r(i1899[i + 0], i1899[i + 1], 1, i1898, '')
  }
  i1896.monsterList = i1898
  var i1901 = i1897[5]
  var i1900 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Vector3')))
  for(var i = 0; i < i1901.length; i += 3) {
    i1900.add(new pc.Vec3( i1901[i + 0], i1901[i + 1], i1901[i + 2] ));
  }
  i1896.posM1 = i1900
  var i1903 = i1897[6]
  var i1902 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Vector3')))
  for(var i = 0; i < i1903.length; i += 3) {
    i1902.add(new pc.Vec3( i1903[i + 0], i1903[i + 1], i1903[i + 2] ));
  }
  i1896.posM2 = i1902
  request.r(i1897[7], i1897[8], 0, i1896, 'startScene')
  request.r(i1897[9], i1897[10], 0, i1896, 'buttonFight')
  request.r(i1897[11], i1897[12], 0, i1896, 'buttonDefense')
  request.r(i1897[13], i1897[14], 0, i1896, 'clickSound')
  request.r(i1897[15], i1897[16], 0, i1896, 'fightOptions')
  request.r(i1897[17], i1897[18], 0, i1896, 'tut')
  request.r(i1897[19], i1897[20], 0, i1896, 'defenseOptions')
  request.r(i1897[21], i1897[22], 0, i1896, 'defense')
  request.r(i1897[23], i1897[24], 0, i1896, 'endScene')
  request.r(i1897[25], i1897[26], 0, i1896, 'completeScene')
  request.r(i1897[27], i1897[28], 0, i1896, 'gameOverScene')
  request.r(i1897[29], i1897[30], 0, i1896, 'player')
  i1896.numMonster = i1897[31]
  request.r(i1897[32], i1897[33], 0, i1896, 'world')
  return i1896
}

Deserializers["System.Action"] = function (request, data, root) {
  var i1904 = root || request.c( 'System.Action' )
  var i1905 = data
  return i1904
}

Deserializers["LayoutController"] = function (request, data, root) {
  var i1910 = root || request.c( 'LayoutController' )
  var i1911 = data
  request.r(i1911[0], i1911[1], 0, i1910, 'main')
  request.r(i1911[2], i1911[3], 0, i1910, 'fight')
  request.r(i1911[4], i1911[5], 0, i1910, 'defense')
  return i1910
}

Deserializers["LunaController"] = function (request, data, root) {
  var i1912 = root || request.c( 'LunaController' )
  var i1913 = data
  request.r(i1913[0], i1913[1], 0, i1912, 'BGTexture')
  i1912.UseTime = !!i1913[2]
  i1912.TimePlay = i1913[3]
  i1912.UseCountPlay = !!i1913[4]
  i1912.MaxCountPlay = i1913[5]
  i1912.TypeMonster1 = i1913[6]
  i1912.TypeMonster2 = i1913[7]
  i1912.Header1 = i1913[8]
  i1912.Header2 = i1913[9]
  request.r(i1913[10], i1913[11], 0, i1912, 'Header1Text')
  request.r(i1913[12], i1913[13], 0, i1912, 'Header2Text')
  request.r(i1913[14], i1913[15], 0, i1912, 'BGImage')
  var i1915 = i1913[16]
  var i1914 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.UI.Button')))
  for(var i = 0; i < i1915.length; i += 2) {
  request.r(i1915[i + 0], i1915[i + 1], 1, i1914, '')
  }
  i1912.CTA = i1914
  i1912.count = i1913[17]
  return i1912
}

Deserializers["AudioController"] = function (request, data, root) {
  var i1918 = root || request.c( 'AudioController' )
  var i1919 = data
  request.r(i1919[0], i1919[1], 0, i1918, 'BGM')
  request.r(i1919[2], i1919[3], 0, i1918, 'musicSource')
  request.r(i1919[4], i1919[5], 0, i1918, 'pool')
  return i1918
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.AudioSource"] = function (request, data, root) {
  var i1920 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.AudioSource' )
  var i1921 = data
  request.r(i1921[0], i1921[1], 0, i1920, 'clip')
  request.r(i1921[2], i1921[3], 0, i1920, 'outputAudioMixerGroup')
  i1920.playOnAwake = !!i1921[4]
  i1920.loop = !!i1921[5]
  i1920.time = i1921[6]
  i1920.volume = i1921[7]
  i1920.pitch = i1921[8]
  i1920.enabled = !!i1921[9]
  return i1920
}

Deserializers["VFXController"] = function (request, data, root) {
  var i1922 = root || request.c( 'VFXController' )
  var i1923 = data
  request.r(i1923[0], i1923[1], 0, i1922, 'poolParent')
  return i1922
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i1924 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i1925 = data
  i1924.ambientIntensity = i1925[0]
  i1924.reflectionIntensity = i1925[1]
  i1924.ambientMode = i1925[2]
  i1924.ambientLight = new pc.Color(i1925[3], i1925[4], i1925[5], i1925[6])
  i1924.ambientSkyColor = new pc.Color(i1925[7], i1925[8], i1925[9], i1925[10])
  i1924.ambientGroundColor = new pc.Color(i1925[11], i1925[12], i1925[13], i1925[14])
  i1924.ambientEquatorColor = new pc.Color(i1925[15], i1925[16], i1925[17], i1925[18])
  i1924.fogColor = new pc.Color(i1925[19], i1925[20], i1925[21], i1925[22])
  i1924.fogEndDistance = i1925[23]
  i1924.fogStartDistance = i1925[24]
  i1924.fogDensity = i1925[25]
  i1924.fog = !!i1925[26]
  request.r(i1925[27], i1925[28], 0, i1924, 'skybox')
  i1924.fogMode = i1925[29]
  var i1927 = i1925[30]
  var i1926 = []
  for(var i = 0; i < i1927.length; i += 1) {
    i1926.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i1927[i + 0]) );
  }
  i1924.lightmaps = i1926
  i1924.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i1925[31], i1924.lightProbes)
  i1924.lightmapsMode = i1925[32]
  i1924.mixedBakeMode = i1925[33]
  i1924.environmentLightingMode = i1925[34]
  i1924.ambientProbe = new pc.SphericalHarmonicsL2(i1925[35])
  request.r(i1925[36], i1925[37], 0, i1924, 'customReflection')
  request.r(i1925[38], i1925[39], 0, i1924, 'defaultReflection')
  i1924.defaultReflectionMode = i1925[40]
  i1924.defaultReflectionResolution = i1925[41]
  i1924.sunLightObjectId = i1925[42]
  i1924.pixelLightCount = i1925[43]
  i1924.defaultReflectionHDR = !!i1925[44]
  i1924.hasLightDataAsset = !!i1925[45]
  i1924.hasManualGenerate = !!i1925[46]
  return i1924
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i1930 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i1931 = data
  request.r(i1931[0], i1931[1], 0, i1930, 'lightmapColor')
  request.r(i1931[2], i1931[3], 0, i1930, 'lightmapDirection')
  request.r(i1931[4], i1931[5], 0, i1930, 'shadowMask')
  return i1930
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i1932 = root || new UnityEngine.LightProbes()
  var i1933 = data
  return i1932
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i1940 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i1941 = data
  var i1943 = i1941[0]
  var i1942 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i1943.length; i += 1) {
    i1942.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i1943[i + 0]));
  }
  i1940.ShaderCompilationErrors = i1942
  i1940.name = i1941[1]
  i1940.guid = i1941[2]
  var i1945 = i1941[3]
  var i1944 = []
  for(var i = 0; i < i1945.length; i += 1) {
    i1944.push( i1945[i + 0] );
  }
  i1940.shaderDefinedKeywords = i1944
  var i1947 = i1941[4]
  var i1946 = []
  for(var i = 0; i < i1947.length; i += 1) {
    i1946.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i1947[i + 0]) );
  }
  i1940.passes = i1946
  var i1949 = i1941[5]
  var i1948 = []
  for(var i = 0; i < i1949.length; i += 1) {
    i1948.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i1949[i + 0]) );
  }
  i1940.usePasses = i1948
  var i1951 = i1941[6]
  var i1950 = []
  for(var i = 0; i < i1951.length; i += 1) {
    i1950.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i1951[i + 0]) );
  }
  i1940.defaultParameterValues = i1950
  request.r(i1941[7], i1941[8], 0, i1940, 'unityFallbackShader')
  i1940.readDepth = !!i1941[9]
  i1940.hasDepthOnlyPass = !!i1941[10]
  i1940.isCreatedByShaderGraph = !!i1941[11]
  i1940.disableBatching = !!i1941[12]
  i1940.compiled = !!i1941[13]
  return i1940
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i1954 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i1955 = data
  i1954.shaderName = i1955[0]
  i1954.errorMessage = i1955[1]
  return i1954
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i1960 = root || new pc.UnityShaderPass()
  var i1961 = data
  i1960.id = i1961[0]
  i1960.subShaderIndex = i1961[1]
  i1960.name = i1961[2]
  i1960.passType = i1961[3]
  i1960.grabPassTextureName = i1961[4]
  i1960.usePass = !!i1961[5]
  i1960.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1961[6], i1960.zTest)
  i1960.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1961[7], i1960.zWrite)
  i1960.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1961[8], i1960.culling)
  i1960.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i1961[9], i1960.blending)
  i1960.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i1961[10], i1960.alphaBlending)
  i1960.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1961[11], i1960.colorWriteMask)
  i1960.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1961[12], i1960.offsetUnits)
  i1960.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1961[13], i1960.offsetFactor)
  i1960.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1961[14], i1960.stencilRef)
  i1960.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1961[15], i1960.stencilReadMask)
  i1960.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1961[16], i1960.stencilWriteMask)
  i1960.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1961[17], i1960.stencilOp)
  i1960.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1961[18], i1960.stencilOpFront)
  i1960.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1961[19], i1960.stencilOpBack)
  var i1963 = i1961[20]
  var i1962 = []
  for(var i = 0; i < i1963.length; i += 1) {
    i1962.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i1963[i + 0]) );
  }
  i1960.tags = i1962
  var i1965 = i1961[21]
  var i1964 = []
  for(var i = 0; i < i1965.length; i += 1) {
    i1964.push( i1965[i + 0] );
  }
  i1960.passDefinedKeywords = i1964
  var i1967 = i1961[22]
  var i1966 = []
  for(var i = 0; i < i1967.length; i += 1) {
    i1966.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i1967[i + 0]) );
  }
  i1960.passDefinedKeywordGroups = i1966
  var i1969 = i1961[23]
  var i1968 = []
  for(var i = 0; i < i1969.length; i += 1) {
    i1968.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i1969[i + 0]) );
  }
  i1960.variants = i1968
  var i1971 = i1961[24]
  var i1970 = []
  for(var i = 0; i < i1971.length; i += 1) {
    i1970.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i1971[i + 0]) );
  }
  i1960.excludedVariants = i1970
  i1960.hasDepthReader = !!i1961[25]
  return i1960
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i1972 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i1973 = data
  i1972.val = i1973[0]
  i1972.name = i1973[1]
  return i1972
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i1974 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i1975 = data
  i1974.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1975[0], i1974.src)
  i1974.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1975[1], i1974.dst)
  i1974.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1975[2], i1974.op)
  return i1974
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i1976 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i1977 = data
  i1976.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1977[0], i1976.pass)
  i1976.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1977[1], i1976.fail)
  i1976.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1977[2], i1976.zFail)
  i1976.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1977[3], i1976.comp)
  return i1976
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i1980 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i1981 = data
  i1980.name = i1981[0]
  i1980.value = i1981[1]
  return i1980
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i1984 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i1985 = data
  var i1987 = i1985[0]
  var i1986 = []
  for(var i = 0; i < i1987.length; i += 1) {
    i1986.push( i1987[i + 0] );
  }
  i1984.keywords = i1986
  i1984.hasDiscard = !!i1985[1]
  return i1984
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i1990 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i1991 = data
  i1990.passId = i1991[0]
  i1990.subShaderIndex = i1991[1]
  var i1993 = i1991[2]
  var i1992 = []
  for(var i = 0; i < i1993.length; i += 1) {
    i1992.push( i1993[i + 0] );
  }
  i1990.keywords = i1992
  i1990.vertexProgram = i1991[3]
  i1990.fragmentProgram = i1991[4]
  i1990.exportedForWebGl2 = !!i1991[5]
  i1990.readDepth = !!i1991[6]
  return i1990
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i1996 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i1997 = data
  request.r(i1997[0], i1997[1], 0, i1996, 'shader')
  i1996.pass = i1997[2]
  return i1996
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i2000 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i2001 = data
  i2000.name = i2001[0]
  i2000.type = i2001[1]
  i2000.value = new pc.Vec4( i2001[2], i2001[3], i2001[4], i2001[5] )
  i2000.textureValue = i2001[6]
  i2000.shaderPropertyFlag = i2001[7]
  return i2000
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i2002 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i2003 = data
  i2002.name = i2003[0]
  request.r(i2003[1], i2003[2], 0, i2002, 'texture')
  i2002.aabb = i2003[3]
  i2002.vertices = i2003[4]
  i2002.triangles = i2003[5]
  i2002.textureRect = UnityEngine.Rect.MinMaxRect(i2003[6], i2003[7], i2003[8], i2003[9])
  i2002.packedRect = UnityEngine.Rect.MinMaxRect(i2003[10], i2003[11], i2003[12], i2003[13])
  i2002.border = new pc.Vec4( i2003[14], i2003[15], i2003[16], i2003[17] )
  i2002.transparency = i2003[18]
  i2002.bounds = i2003[19]
  i2002.pixelsPerUnit = i2003[20]
  i2002.textureWidth = i2003[21]
  i2002.textureHeight = i2003[22]
  i2002.nativeSize = new pc.Vec2( i2003[23], i2003[24] )
  i2002.pivot = new pc.Vec2( i2003[25], i2003[26] )
  i2002.textureRectOffset = new pc.Vec2( i2003[27], i2003[28] )
  return i2002
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i2004 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i2005 = data
  i2004.name = i2005[0]
  return i2004
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip"] = function (request, data, root) {
  var i2006 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip' )
  var i2007 = data
  i2006.name = i2007[0]
  i2006.wrapMode = i2007[1]
  i2006.isLooping = !!i2007[2]
  i2006.length = i2007[3]
  var i2009 = i2007[4]
  var i2008 = []
  for(var i = 0; i < i2009.length; i += 1) {
    i2008.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve', i2009[i + 0]) );
  }
  i2006.curves = i2008
  var i2011 = i2007[5]
  var i2010 = []
  for(var i = 0; i < i2011.length; i += 1) {
    i2010.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent', i2011[i + 0]) );
  }
  i2006.events = i2010
  i2006.halfPrecision = !!i2007[6]
  i2006._frameRate = i2007[7]
  i2006.localBounds = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds', i2007[8], i2006.localBounds)
  i2006.hasMuscleCurves = !!i2007[9]
  var i2013 = i2007[10]
  var i2012 = []
  for(var i = 0; i < i2013.length; i += 1) {
    i2012.push( i2013[i + 0] );
  }
  i2006.clipMuscleConstant = i2012
  i2006.clipBindingConstant = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant', i2007[11], i2006.clipBindingConstant)
  return i2006
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve"] = function (request, data, root) {
  var i2016 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve' )
  var i2017 = data
  i2016.path = i2017[0]
  i2016.hash = i2017[1]
  i2016.componentType = i2017[2]
  i2016.property = i2017[3]
  i2016.keys = i2017[4]
  var i2019 = i2017[5]
  var i2018 = []
  for(var i = 0; i < i2019.length; i += 1) {
    i2018.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey', i2019[i + 0]) );
  }
  i2016.objectReferenceKeys = i2018
  return i2016
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey"] = function (request, data, root) {
  var i2022 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey' )
  var i2023 = data
  i2022.time = i2023[0]
  request.r(i2023[1], i2023[2], 0, i2022, 'value')
  return i2022
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent"] = function (request, data, root) {
  var i2026 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent' )
  var i2027 = data
  i2026.functionName = i2027[0]
  i2026.floatParameter = i2027[1]
  i2026.intParameter = i2027[2]
  i2026.stringParameter = i2027[3]
  request.r(i2027[4], i2027[5], 0, i2026, 'objectReferenceParameter')
  i2026.time = i2027[6]
  return i2026
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds"] = function (request, data, root) {
  var i2028 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds' )
  var i2029 = data
  i2028.center = new pc.Vec3( i2029[0], i2029[1], i2029[2] )
  i2028.extends = new pc.Vec3( i2029[3], i2029[4], i2029[5] )
  return i2028
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant"] = function (request, data, root) {
  var i2032 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant' )
  var i2033 = data
  var i2035 = i2033[0]
  var i2034 = []
  for(var i = 0; i < i2035.length; i += 1) {
    i2034.push( i2035[i + 0] );
  }
  i2032.genericBindings = i2034
  var i2037 = i2033[1]
  var i2036 = []
  for(var i = 0; i < i2037.length; i += 1) {
    i2036.push( i2037[i + 0] );
  }
  i2032.pptrCurveMapping = i2036
  return i2032
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font"] = function (request, data, root) {
  var i2038 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font' )
  var i2039 = data
  i2038.name = i2039[0]
  i2038.ascent = i2039[1]
  i2038.originalLineHeight = i2039[2]
  i2038.fontSize = i2039[3]
  var i2041 = i2039[4]
  var i2040 = []
  for(var i = 0; i < i2041.length; i += 1) {
    i2040.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo', i2041[i + 0]) );
  }
  i2038.characterInfo = i2040
  request.r(i2039[5], i2039[6], 0, i2038, 'texture')
  i2038.originalFontSize = i2039[7]
  return i2038
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo"] = function (request, data, root) {
  var i2044 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo' )
  var i2045 = data
  i2044.index = i2045[0]
  i2044.advance = i2045[1]
  i2044.bearing = i2045[2]
  i2044.glyphWidth = i2045[3]
  i2044.glyphHeight = i2045[4]
  i2044.minX = i2045[5]
  i2044.maxX = i2045[6]
  i2044.minY = i2045[7]
  i2044.maxY = i2045[8]
  i2044.uvBottomLeftX = i2045[9]
  i2044.uvBottomLeftY = i2045[10]
  i2044.uvBottomRightX = i2045[11]
  i2044.uvBottomRightY = i2045[12]
  i2044.uvTopLeftX = i2045[13]
  i2044.uvTopLeftY = i2045[14]
  i2044.uvTopRightX = i2045[15]
  i2044.uvTopRightY = i2045[16]
  return i2044
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController"] = function (request, data, root) {
  var i2046 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController' )
  var i2047 = data
  i2046.name = i2047[0]
  var i2049 = i2047[1]
  var i2048 = []
  for(var i = 0; i < i2049.length; i += 1) {
    i2048.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer', i2049[i + 0]) );
  }
  i2046.layers = i2048
  var i2051 = i2047[2]
  var i2050 = []
  for(var i = 0; i < i2051.length; i += 1) {
    i2050.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter', i2051[i + 0]) );
  }
  i2046.parameters = i2050
  i2046.animationClips = i2047[3]
  i2046.avatarUnsupported = i2047[4]
  return i2046
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer"] = function (request, data, root) {
  var i2054 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer' )
  var i2055 = data
  i2054.name = i2055[0]
  i2054.defaultWeight = i2055[1]
  i2054.blendingMode = i2055[2]
  i2054.avatarMask = i2055[3]
  i2054.syncedLayerIndex = i2055[4]
  i2054.syncedLayerAffectsTiming = !!i2055[5]
  i2054.syncedLayers = i2055[6]
  i2054.stateMachine = request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i2055[7], i2054.stateMachine)
  return i2054
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine"] = function (request, data, root) {
  var i2056 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine' )
  var i2057 = data
  i2056.id = i2057[0]
  i2056.name = i2057[1]
  i2056.path = i2057[2]
  var i2059 = i2057[3]
  var i2058 = []
  for(var i = 0; i < i2059.length; i += 1) {
    i2058.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState', i2059[i + 0]) );
  }
  i2056.states = i2058
  var i2061 = i2057[4]
  var i2060 = []
  for(var i = 0; i < i2061.length; i += 1) {
    i2060.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i2061[i + 0]) );
  }
  i2056.machines = i2060
  var i2063 = i2057[5]
  var i2062 = []
  for(var i = 0; i < i2063.length; i += 1) {
    i2062.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i2063[i + 0]) );
  }
  i2056.entryStateTransitions = i2062
  var i2065 = i2057[6]
  var i2064 = []
  for(var i = 0; i < i2065.length; i += 1) {
    i2064.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i2065[i + 0]) );
  }
  i2056.exitStateTransitions = i2064
  var i2067 = i2057[7]
  var i2066 = []
  for(var i = 0; i < i2067.length; i += 1) {
    i2066.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i2067[i + 0]) );
  }
  i2056.anyStateTransitions = i2066
  i2056.defaultStateId = i2057[8]
  return i2056
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState"] = function (request, data, root) {
  var i2070 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState' )
  var i2071 = data
  i2070.id = i2071[0]
  i2070.name = i2071[1]
  i2070.cycleOffset = i2071[2]
  i2070.cycleOffsetParameter = i2071[3]
  i2070.cycleOffsetParameterActive = !!i2071[4]
  i2070.mirror = !!i2071[5]
  i2070.mirrorParameter = i2071[6]
  i2070.mirrorParameterActive = !!i2071[7]
  i2070.motionId = i2071[8]
  i2070.nameHash = i2071[9]
  i2070.fullPathHash = i2071[10]
  i2070.speed = i2071[11]
  i2070.speedParameter = i2071[12]
  i2070.speedParameterActive = !!i2071[13]
  i2070.tag = i2071[14]
  i2070.tagHash = i2071[15]
  i2070.writeDefaultValues = !!i2071[16]
  var i2073 = i2071[17]
  var i2072 = []
  for(var i = 0; i < i2073.length; i += 2) {
  request.r(i2073[i + 0], i2073[i + 1], 2, i2072, '')
  }
  i2070.behaviours = i2072
  var i2075 = i2071[18]
  var i2074 = []
  for(var i = 0; i < i2075.length; i += 1) {
    i2074.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i2075[i + 0]) );
  }
  i2070.transitions = i2074
  return i2070
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition"] = function (request, data, root) {
  var i2080 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition' )
  var i2081 = data
  i2080.fullPath = i2081[0]
  i2080.canTransitionToSelf = !!i2081[1]
  i2080.duration = i2081[2]
  i2080.exitTime = i2081[3]
  i2080.hasExitTime = !!i2081[4]
  i2080.hasFixedDuration = !!i2081[5]
  i2080.interruptionSource = i2081[6]
  i2080.offset = i2081[7]
  i2080.orderedInterruption = !!i2081[8]
  i2080.destinationStateId = i2081[9]
  i2080.isExit = !!i2081[10]
  i2080.mute = !!i2081[11]
  i2080.solo = !!i2081[12]
  var i2083 = i2081[13]
  var i2082 = []
  for(var i = 0; i < i2083.length; i += 1) {
    i2082.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i2083[i + 0]) );
  }
  i2080.conditions = i2082
  return i2080
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition"] = function (request, data, root) {
  var i2086 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition' )
  var i2087 = data
  i2086.mode = i2087[0]
  i2086.parameter = i2087[1]
  i2086.threshold = i2087[2]
  return i2086
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition"] = function (request, data, root) {
  var i2092 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition' )
  var i2093 = data
  i2092.destinationStateId = i2093[0]
  i2092.isExit = !!i2093[1]
  i2092.mute = !!i2093[2]
  i2092.solo = !!i2093[3]
  var i2095 = i2093[4]
  var i2094 = []
  for(var i = 0; i < i2095.length; i += 1) {
    i2094.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i2095[i + 0]) );
  }
  i2092.conditions = i2094
  return i2092
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter"] = function (request, data, root) {
  var i2098 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter' )
  var i2099 = data
  i2098.defaultBool = !!i2099[0]
  i2098.defaultFloat = i2099[1]
  i2098.defaultInt = i2099[2]
  i2098.name = i2099[3]
  i2098.nameHash = i2099[4]
  i2098.type = i2099[5]
  return i2098
}

Deserializers["DG.Tweening.Core.DOTweenSettings"] = function (request, data, root) {
  var i2100 = root || request.c( 'DG.Tweening.Core.DOTweenSettings' )
  var i2101 = data
  i2100.useSafeMode = !!i2101[0]
  i2100.safeModeOptions = request.d('DG.Tweening.Core.DOTweenSettings+SafeModeOptions', i2101[1], i2100.safeModeOptions)
  i2100.timeScale = i2101[2]
  i2100.unscaledTimeScale = i2101[3]
  i2100.useSmoothDeltaTime = !!i2101[4]
  i2100.maxSmoothUnscaledTime = i2101[5]
  i2100.rewindCallbackMode = i2101[6]
  i2100.showUnityEditorReport = !!i2101[7]
  i2100.logBehaviour = i2101[8]
  i2100.drawGizmos = !!i2101[9]
  i2100.defaultRecyclable = !!i2101[10]
  i2100.defaultAutoPlay = i2101[11]
  i2100.defaultUpdateType = i2101[12]
  i2100.defaultTimeScaleIndependent = !!i2101[13]
  i2100.defaultEaseType = i2101[14]
  i2100.defaultEaseOvershootOrAmplitude = i2101[15]
  i2100.defaultEasePeriod = i2101[16]
  i2100.defaultAutoKill = !!i2101[17]
  i2100.defaultLoopType = i2101[18]
  i2100.debugMode = !!i2101[19]
  i2100.debugStoreTargetId = !!i2101[20]
  i2100.showPreviewPanel = !!i2101[21]
  i2100.storeSettingsLocation = i2101[22]
  i2100.modules = request.d('DG.Tweening.Core.DOTweenSettings+ModulesSetup', i2101[23], i2100.modules)
  i2100.createASMDEF = !!i2101[24]
  i2100.showPlayingTweens = !!i2101[25]
  i2100.showPausedTweens = !!i2101[26]
  return i2100
}

Deserializers["DG.Tweening.Core.DOTweenSettings+SafeModeOptions"] = function (request, data, root) {
  var i2102 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+SafeModeOptions' )
  var i2103 = data
  i2102.logBehaviour = i2103[0]
  i2102.nestedTweenFailureBehaviour = i2103[1]
  return i2102
}

Deserializers["DG.Tweening.Core.DOTweenSettings+ModulesSetup"] = function (request, data, root) {
  var i2104 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+ModulesSetup' )
  var i2105 = data
  i2104.showPanel = !!i2105[0]
  i2104.audioEnabled = !!i2105[1]
  i2104.physicsEnabled = !!i2105[2]
  i2104.physics2DEnabled = !!i2105[3]
  i2104.spriteEnabled = !!i2105[4]
  i2104.uiEnabled = !!i2105[5]
  i2104.textMeshProEnabled = !!i2105[6]
  i2104.tk2DEnabled = !!i2105[7]
  i2104.deAudioEnabled = !!i2105[8]
  i2104.deUnityExtendedEnabled = !!i2105[9]
  i2104.epoOutlineEnabled = !!i2105[10]
  return i2104
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i2106 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i2107 = data
  var i2109 = i2107[0]
  var i2108 = []
  for(var i = 0; i < i2109.length; i += 1) {
    i2108.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i2109[i + 0]) );
  }
  i2106.files = i2108
  i2106.componentToPrefabIds = i2107[1]
  return i2106
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i2112 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i2113 = data
  i2112.path = i2113[0]
  request.r(i2113[1], i2113[2], 0, i2112, 'unityObject')
  return i2112
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i2114 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i2115 = data
  var i2117 = i2115[0]
  var i2116 = []
  for(var i = 0; i < i2117.length; i += 1) {
    i2116.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i2117[i + 0]) );
  }
  i2114.scriptsExecutionOrder = i2116
  var i2119 = i2115[1]
  var i2118 = []
  for(var i = 0; i < i2119.length; i += 1) {
    i2118.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i2119[i + 0]) );
  }
  i2114.sortingLayers = i2118
  var i2121 = i2115[2]
  var i2120 = []
  for(var i = 0; i < i2121.length; i += 1) {
    i2120.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i2121[i + 0]) );
  }
  i2114.cullingLayers = i2120
  i2114.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i2115[3], i2114.timeSettings)
  i2114.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i2115[4], i2114.physicsSettings)
  i2114.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i2115[5], i2114.physics2DSettings)
  i2114.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i2115[6], i2114.qualitySettings)
  i2114.enableRealtimeShadows = !!i2115[7]
  i2114.enableAutoInstancing = !!i2115[8]
  i2114.enableStaticBatching = !!i2115[9]
  i2114.enableDynamicBatching = !!i2115[10]
  i2114.usePreservativeDynamicBatching = !!i2115[11]
  i2114.lightmapEncodingQuality = i2115[12]
  i2114.desiredColorSpace = i2115[13]
  var i2123 = i2115[14]
  var i2122 = []
  for(var i = 0; i < i2123.length; i += 1) {
    i2122.push( i2123[i + 0] );
  }
  i2114.allTags = i2122
  return i2114
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i2126 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i2127 = data
  i2126.name = i2127[0]
  i2126.value = i2127[1]
  return i2126
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i2130 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i2131 = data
  i2130.id = i2131[0]
  i2130.name = i2131[1]
  i2130.value = i2131[2]
  return i2130
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i2134 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i2135 = data
  i2134.id = i2135[0]
  i2134.name = i2135[1]
  return i2134
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i2136 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i2137 = data
  i2136.fixedDeltaTime = i2137[0]
  i2136.maximumDeltaTime = i2137[1]
  i2136.timeScale = i2137[2]
  i2136.maximumParticleTimestep = i2137[3]
  return i2136
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i2138 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i2139 = data
  i2138.gravity = new pc.Vec3( i2139[0], i2139[1], i2139[2] )
  i2138.defaultSolverIterations = i2139[3]
  i2138.bounceThreshold = i2139[4]
  i2138.autoSyncTransforms = !!i2139[5]
  i2138.autoSimulation = !!i2139[6]
  var i2141 = i2139[7]
  var i2140 = []
  for(var i = 0; i < i2141.length; i += 1) {
    i2140.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i2141[i + 0]) );
  }
  i2138.collisionMatrix = i2140
  return i2138
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i2144 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i2145 = data
  i2144.enabled = !!i2145[0]
  i2144.layerId = i2145[1]
  i2144.otherLayerId = i2145[2]
  return i2144
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i2146 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i2147 = data
  request.r(i2147[0], i2147[1], 0, i2146, 'material')
  i2146.gravity = new pc.Vec2( i2147[2], i2147[3] )
  i2146.positionIterations = i2147[4]
  i2146.velocityIterations = i2147[5]
  i2146.velocityThreshold = i2147[6]
  i2146.maxLinearCorrection = i2147[7]
  i2146.maxAngularCorrection = i2147[8]
  i2146.maxTranslationSpeed = i2147[9]
  i2146.maxRotationSpeed = i2147[10]
  i2146.baumgarteScale = i2147[11]
  i2146.baumgarteTOIScale = i2147[12]
  i2146.timeToSleep = i2147[13]
  i2146.linearSleepTolerance = i2147[14]
  i2146.angularSleepTolerance = i2147[15]
  i2146.defaultContactOffset = i2147[16]
  i2146.autoSimulation = !!i2147[17]
  i2146.queriesHitTriggers = !!i2147[18]
  i2146.queriesStartInColliders = !!i2147[19]
  i2146.callbacksOnDisable = !!i2147[20]
  i2146.reuseCollisionCallbacks = !!i2147[21]
  i2146.autoSyncTransforms = !!i2147[22]
  var i2149 = i2147[23]
  var i2148 = []
  for(var i = 0; i < i2149.length; i += 1) {
    i2148.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i2149[i + 0]) );
  }
  i2146.collisionMatrix = i2148
  return i2146
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i2152 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i2153 = data
  i2152.enabled = !!i2153[0]
  i2152.layerId = i2153[1]
  i2152.otherLayerId = i2153[2]
  return i2152
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i2154 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i2155 = data
  var i2157 = i2155[0]
  var i2156 = []
  for(var i = 0; i < i2157.length; i += 1) {
    i2156.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i2157[i + 0]) );
  }
  i2154.qualityLevels = i2156
  var i2159 = i2155[1]
  var i2158 = []
  for(var i = 0; i < i2159.length; i += 1) {
    i2158.push( i2159[i + 0] );
  }
  i2154.names = i2158
  i2154.shadows = i2155[2]
  i2154.anisotropicFiltering = i2155[3]
  i2154.antiAliasing = i2155[4]
  i2154.lodBias = i2155[5]
  i2154.shadowCascades = i2155[6]
  i2154.shadowDistance = i2155[7]
  i2154.shadowmaskMode = i2155[8]
  i2154.shadowProjection = i2155[9]
  i2154.shadowResolution = i2155[10]
  i2154.softParticles = !!i2155[11]
  i2154.softVegetation = !!i2155[12]
  i2154.activeColorSpace = i2155[13]
  i2154.desiredColorSpace = i2155[14]
  i2154.masterTextureLimit = i2155[15]
  i2154.maxQueuedFrames = i2155[16]
  i2154.particleRaycastBudget = i2155[17]
  i2154.pixelLightCount = i2155[18]
  i2154.realtimeReflectionProbes = !!i2155[19]
  i2154.shadowCascade2Split = i2155[20]
  i2154.shadowCascade4Split = new pc.Vec3( i2155[21], i2155[22], i2155[23] )
  i2154.streamingMipmapsActive = !!i2155[24]
  i2154.vSyncCount = i2155[25]
  i2154.asyncUploadBufferSize = i2155[26]
  i2154.asyncUploadTimeSlice = i2155[27]
  i2154.billboardsFaceCameraPosition = !!i2155[28]
  i2154.shadowNearPlaneOffset = i2155[29]
  i2154.streamingMipmapsMemoryBudget = i2155[30]
  i2154.maximumLODLevel = i2155[31]
  i2154.streamingMipmapsAddAllCameras = !!i2155[32]
  i2154.streamingMipmapsMaxLevelReduction = i2155[33]
  i2154.streamingMipmapsRenderersPerFrame = i2155[34]
  i2154.resolutionScalingFixedDPIFactor = i2155[35]
  i2154.streamingMipmapsMaxFileIORequests = i2155[36]
  i2154.currentQualityLevel = i2155[37]
  return i2154
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame"] = function (request, data, root) {
  var i2164 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame' )
  var i2165 = data
  i2164.weight = i2165[0]
  i2164.vertices = i2165[1]
  i2164.normals = i2165[2]
  i2164.tangents = i2165[3]
  return i2164
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i2166 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i2167 = data
  request.r(i2167[0], i2167[1], 0, i2166, 'm_ObjectArgument')
  i2166.m_ObjectArgumentAssemblyTypeName = i2167[2]
  i2166.m_IntArgument = i2167[3]
  i2166.m_FloatArgument = i2167[4]
  i2166.m_StringArgument = i2167[5]
  i2166.m_BoolArgument = !!i2167[6]
  return i2166
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

Deserializers.runtimeAnalysisExcludedClassesCount = "1760";

Deserializers.runtimeAnalysisExcludedMethodsCount = "4465";

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

Deserializers.buildID = "22e03b55-0c72-4267-b2dd-8ab99924353d";

Deserializers.runtimeInitializeOnLoadInfos = [[["Unity","PerformanceTesting","PerformanceTest","ResetStaticsOnLoad"],["UnityEngine","U2D","Animation","GpuDeformationSystem","CreateFallbackBuffer"],["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"],["UnityEngine","AI","NavMesh","ClearPreUpdateListeners"]],[["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"]],[],[["Unity","PerformanceTesting","Data","RunSettings","ResetStaticsOnLoad"],["Unity","PerformanceTesting","PlayerCallbacks","ResetStaticsOnLoad"]]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

