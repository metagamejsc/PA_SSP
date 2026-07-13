var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i1596 = root || request.c( 'UnityEngine.JointSpring' )
  var i1597 = data
  i1596.spring = i1597[0]
  i1596.damper = i1597[1]
  i1596.targetPosition = i1597[2]
  return i1596
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i1598 = root || request.c( 'UnityEngine.JointMotor' )
  var i1599 = data
  i1598.m_TargetVelocity = i1599[0]
  i1598.m_Force = i1599[1]
  i1598.m_FreeSpin = i1599[2]
  return i1598
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i1600 = root || request.c( 'UnityEngine.JointLimits' )
  var i1601 = data
  i1600.m_Min = i1601[0]
  i1600.m_Max = i1601[1]
  i1600.m_Bounciness = i1601[2]
  i1600.m_BounceMinVelocity = i1601[3]
  i1600.m_ContactDistance = i1601[4]
  i1600.minBounce = i1601[5]
  i1600.maxBounce = i1601[6]
  return i1600
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i1602 = root || request.c( 'UnityEngine.JointDrive' )
  var i1603 = data
  i1602.m_PositionSpring = i1603[0]
  i1602.m_PositionDamper = i1603[1]
  i1602.m_MaximumForce = i1603[2]
  i1602.m_UseAcceleration = i1603[3]
  return i1602
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i1604 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i1605 = data
  i1604.m_Spring = i1605[0]
  i1604.m_Damper = i1605[1]
  return i1604
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i1606 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i1607 = data
  i1606.m_Limit = i1607[0]
  i1606.m_Bounciness = i1607[1]
  i1606.m_ContactDistance = i1607[2]
  return i1606
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i1608 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i1609 = data
  i1608.m_ExtremumSlip = i1609[0]
  i1608.m_ExtremumValue = i1609[1]
  i1608.m_AsymptoteSlip = i1609[2]
  i1608.m_AsymptoteValue = i1609[3]
  i1608.m_Stiffness = i1609[4]
  return i1608
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i1610 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i1611 = data
  i1610.m_LowerAngle = i1611[0]
  i1610.m_UpperAngle = i1611[1]
  return i1610
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i1612 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i1613 = data
  i1612.m_MotorSpeed = i1613[0]
  i1612.m_MaximumMotorTorque = i1613[1]
  return i1612
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i1614 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i1615 = data
  i1614.m_DampingRatio = i1615[0]
  i1614.m_Frequency = i1615[1]
  i1614.m_Angle = i1615[2]
  return i1614
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i1616 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i1617 = data
  i1616.m_LowerTranslation = i1617[0]
  i1616.m_UpperTranslation = i1617[1]
  return i1616
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i1618 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i1619 = data
  i1618.name = i1619[0]
  i1618.width = i1619[1]
  i1618.height = i1619[2]
  i1618.mipmapCount = i1619[3]
  i1618.anisoLevel = i1619[4]
  i1618.filterMode = i1619[5]
  i1618.hdr = !!i1619[6]
  i1618.format = i1619[7]
  i1618.wrapMode = i1619[8]
  i1618.alphaIsTransparency = !!i1619[9]
  i1618.alphaSource = i1619[10]
  i1618.graphicsFormat = i1619[11]
  i1618.sRGBTexture = !!i1619[12]
  i1618.desiredColorSpace = i1619[13]
  i1618.wrapU = i1619[14]
  i1618.wrapV = i1619[15]
  return i1618
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i1620 = root || new pc.UnityMaterial()
  var i1621 = data
  i1620.name = i1621[0]
  request.r(i1621[1], i1621[2], 0, i1620, 'shader')
  i1620.renderQueue = i1621[3]
  i1620.enableInstancing = !!i1621[4]
  var i1623 = i1621[5]
  var i1622 = []
  for(var i = 0; i < i1623.length; i += 1) {
    i1622.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i1623[i + 0]) );
  }
  i1620.floatParameters = i1622
  var i1625 = i1621[6]
  var i1624 = []
  for(var i = 0; i < i1625.length; i += 1) {
    i1624.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i1625[i + 0]) );
  }
  i1620.colorParameters = i1624
  var i1627 = i1621[7]
  var i1626 = []
  for(var i = 0; i < i1627.length; i += 1) {
    i1626.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i1627[i + 0]) );
  }
  i1620.vectorParameters = i1626
  var i1629 = i1621[8]
  var i1628 = []
  for(var i = 0; i < i1629.length; i += 1) {
    i1628.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i1629[i + 0]) );
  }
  i1620.textureParameters = i1628
  var i1631 = i1621[9]
  var i1630 = []
  for(var i = 0; i < i1631.length; i += 1) {
    i1630.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i1631[i + 0]) );
  }
  i1620.materialFlags = i1630
  return i1620
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i1634 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i1635 = data
  i1634.name = i1635[0]
  i1634.value = i1635[1]
  return i1634
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i1638 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i1639 = data
  i1638.name = i1639[0]
  i1638.value = new pc.Color(i1639[1], i1639[2], i1639[3], i1639[4])
  return i1638
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i1642 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i1643 = data
  i1642.name = i1643[0]
  i1642.value = new pc.Vec4( i1643[1], i1643[2], i1643[3], i1643[4] )
  return i1642
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i1646 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i1647 = data
  i1646.name = i1647[0]
  request.r(i1647[1], i1647[2], 0, i1646, 'value')
  return i1646
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i1650 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i1651 = data
  i1650.name = i1651[0]
  i1650.enabled = !!i1651[1]
  return i1650
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i1652 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i1653 = data
  i1652.position = new pc.Vec3( i1653[0], i1653[1], i1653[2] )
  i1652.scale = new pc.Vec3( i1653[3], i1653[4], i1653[5] )
  i1652.rotation = new pc.Quat(i1653[6], i1653[7], i1653[8], i1653[9])
  return i1652
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer"] = function (request, data, root) {
  var i1654 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer' )
  var i1655 = data
  i1654.color = new pc.Color(i1655[0], i1655[1], i1655[2], i1655[3])
  request.r(i1655[4], i1655[5], 0, i1654, 'sprite')
  i1654.flipX = !!i1655[6]
  i1654.flipY = !!i1655[7]
  i1654.drawMode = i1655[8]
  i1654.size = new pc.Vec2( i1655[9], i1655[10] )
  i1654.tileMode = i1655[11]
  i1654.adaptiveModeThreshold = i1655[12]
  i1654.maskInteraction = i1655[13]
  i1654.spriteSortPoint = i1655[14]
  i1654.enabled = !!i1655[15]
  request.r(i1655[16], i1655[17], 0, i1654, 'sharedMaterial')
  var i1657 = i1655[18]
  var i1656 = []
  for(var i = 0; i < i1657.length; i += 2) {
  request.r(i1657[i + 0], i1657[i + 1], 2, i1656, '')
  }
  i1654.sharedMaterials = i1656
  i1654.receiveShadows = !!i1655[19]
  i1654.shadowCastingMode = i1655[20]
  i1654.sortingLayerID = i1655[21]
  i1654.sortingOrder = i1655[22]
  i1654.lightmapIndex = i1655[23]
  i1654.lightmapSceneIndex = i1655[24]
  i1654.lightmapScaleOffset = new pc.Vec4( i1655[25], i1655[26], i1655[27], i1655[28] )
  i1654.lightProbeUsage = i1655[29]
  i1654.reflectionProbeUsage = i1655[30]
  return i1654
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CircleCollider2D"] = function (request, data, root) {
  var i1660 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CircleCollider2D' )
  var i1661 = data
  i1660.radius = i1661[0]
  i1660.enabled = !!i1661[1]
  i1660.isTrigger = !!i1661[2]
  i1660.usedByEffector = !!i1661[3]
  i1660.density = i1661[4]
  i1660.offset = new pc.Vec2( i1661[5], i1661[6] )
  request.r(i1661[7], i1661[8], 0, i1660, 'material')
  return i1660
}

Deserializers["BulletController"] = function (request, data, root) {
  var i1662 = root || request.c( 'BulletController' )
  var i1663 = data
  i1662.speed = i1663[0]
  i1662.damage = i1663[1]
  request.r(i1663[2], i1663[3], 0, i1662, 'hitMonsterSound')
  request.r(i1663[4], i1663[5], 0, i1662, 'hitSound')
  i1662.lifeTime = i1663[6]
  i1662.hit = !!i1663[7]
  return i1662
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i1664 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i1665 = data
  i1664.name = i1665[0]
  i1664.tagId = i1665[1]
  i1664.enabled = !!i1665[2]
  i1664.isStatic = !!i1665[3]
  i1664.layer = i1665[4]
  return i1664
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D"] = function (request, data, root) {
  var i1666 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D' )
  var i1667 = data
  i1666.usedByComposite = !!i1667[0]
  i1666.autoTiling = !!i1667[1]
  i1666.size = new pc.Vec2( i1667[2], i1667[3] )
  i1666.edgeRadius = i1667[4]
  i1666.enabled = !!i1667[5]
  i1666.isTrigger = !!i1667[6]
  i1666.usedByEffector = !!i1667[7]
  i1666.density = i1667[8]
  i1666.offset = new pc.Vec2( i1667[9], i1667[10] )
  request.r(i1667[11], i1667[12], 0, i1666, 'material')
  return i1666
}

Deserializers["KunaiController"] = function (request, data, root) {
  var i1668 = root || request.c( 'KunaiController' )
  var i1669 = data
  i1668.damage = i1669[0]
  request.r(i1669[1], i1669[2], 0, i1668, 'hitMonsterSound')
  request.r(i1669[3], i1669[4], 0, i1668, 'hitSound')
  i1668.lifeTime = i1669[5]
  i1668.rotateSpeed = i1669[6]
  i1668.moveSpeed = i1669[7]
  i1668.hit = !!i1669[8]
  return i1668
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Rigidbody2D"] = function (request, data, root) {
  var i1670 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Rigidbody2D' )
  var i1671 = data
  i1670.bodyType = i1671[0]
  request.r(i1671[1], i1671[2], 0, i1670, 'material')
  i1670.simulated = !!i1671[3]
  i1670.useAutoMass = !!i1671[4]
  i1670.mass = i1671[5]
  i1670.drag = i1671[6]
  i1670.angularDrag = i1671[7]
  i1670.gravityScale = i1671[8]
  i1670.collisionDetectionMode = i1671[9]
  i1670.sleepMode = i1671[10]
  i1670.constraints = i1671[11]
  return i1670
}

Deserializers["BombController"] = function (request, data, root) {
  var i1672 = root || request.c( 'BombController' )
  var i1673 = data
  i1672.damage = i1673[0]
  i1672.layer = UnityEngine.LayerMask.FromIntegerValue( i1673[1] )
  request.r(i1673[2], i1673[3], 0, i1672, 'startSound')
  request.r(i1673[4], i1673[5], 0, i1672, 'actionSound')
  i1672.delay = i1673[6]
  request.r(i1673[7], i1673[8], 0, i1672, 'anim')
  request.r(i1673[9], i1673[10], 0, i1672, 'vfx1')
  request.r(i1673[11], i1673[12], 0, i1672, 'vfx2')
  i1672.scale = i1673[13]
  i1672.radius = i1673[14]
  return i1672
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Animator"] = function (request, data, root) {
  var i1674 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Animator' )
  var i1675 = data
  request.r(i1675[0], i1675[1], 0, i1674, 'animatorController')
  request.r(i1675[2], i1675[3], 0, i1674, 'avatar')
  i1674.updateMode = i1675[4]
  i1674.hasTransformHierarchy = !!i1675[5]
  i1674.applyRootMotion = !!i1675[6]
  var i1677 = i1675[7]
  var i1676 = []
  for(var i = 0; i < i1677.length; i += 2) {
  request.r(i1677[i + 0], i1677[i + 1], 2, i1676, '')
  }
  i1674.humanBones = i1676
  i1674.enabled = !!i1675[8]
  return i1674
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystem"] = function (request, data, root) {
  var i1680 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystem' )
  var i1681 = data
  i1680.main = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule', i1681[0], i1680.main)
  i1680.colorBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule', i1681[1], i1680.colorBySpeed)
  i1680.colorOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule', i1681[2], i1680.colorOverLifetime)
  i1680.emission = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule', i1681[3], i1680.emission)
  i1680.rotationBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule', i1681[4], i1680.rotationBySpeed)
  i1680.rotationOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule', i1681[5], i1680.rotationOverLifetime)
  i1680.shape = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule', i1681[6], i1680.shape)
  i1680.sizeBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule', i1681[7], i1680.sizeBySpeed)
  i1680.sizeOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule', i1681[8], i1680.sizeOverLifetime)
  i1680.textureSheetAnimation = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule', i1681[9], i1680.textureSheetAnimation)
  i1680.velocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule', i1681[10], i1680.velocityOverLifetime)
  i1680.noise = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule', i1681[11], i1680.noise)
  i1680.inheritVelocity = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule', i1681[12], i1680.inheritVelocity)
  i1680.forceOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule', i1681[13], i1680.forceOverLifetime)
  i1680.limitVelocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule', i1681[14], i1680.limitVelocityOverLifetime)
  i1680.useAutoRandomSeed = !!i1681[15]
  i1680.randomSeed = i1681[16]
  return i1680
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule"] = function (request, data, root) {
  var i1682 = root || new pc.ParticleSystemMain()
  var i1683 = data
  i1682.duration = i1683[0]
  i1682.loop = !!i1683[1]
  i1682.prewarm = !!i1683[2]
  i1682.startDelay = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1683[3], i1682.startDelay)
  i1682.startLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1683[4], i1682.startLifetime)
  i1682.startSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1683[5], i1682.startSpeed)
  i1682.startSize3D = !!i1683[6]
  i1682.startSizeX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1683[7], i1682.startSizeX)
  i1682.startSizeY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1683[8], i1682.startSizeY)
  i1682.startSizeZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1683[9], i1682.startSizeZ)
  i1682.startRotation3D = !!i1683[10]
  i1682.startRotationX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1683[11], i1682.startRotationX)
  i1682.startRotationY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1683[12], i1682.startRotationY)
  i1682.startRotationZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1683[13], i1682.startRotationZ)
  i1682.startColor = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i1683[14], i1682.startColor)
  i1682.gravityModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1683[15], i1682.gravityModifier)
  i1682.simulationSpace = i1683[16]
  request.r(i1683[17], i1683[18], 0, i1682, 'customSimulationSpace')
  i1682.simulationSpeed = i1683[19]
  i1682.useUnscaledTime = !!i1683[20]
  i1682.scalingMode = i1683[21]
  i1682.playOnAwake = !!i1683[22]
  i1682.maxParticles = i1683[23]
  i1682.emitterVelocityMode = i1683[24]
  i1682.stopAction = i1683[25]
  return i1682
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve"] = function (request, data, root) {
  var i1684 = root || new pc.MinMaxCurve()
  var i1685 = data
  i1684.mode = i1685[0]
  i1684.curveMin = new pc.AnimationCurve( { keys_flow: i1685[1] } )
  i1684.curveMax = new pc.AnimationCurve( { keys_flow: i1685[2] } )
  i1684.curveMultiplier = i1685[3]
  i1684.constantMin = i1685[4]
  i1684.constantMax = i1685[5]
  return i1684
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient"] = function (request, data, root) {
  var i1686 = root || new pc.MinMaxGradient()
  var i1687 = data
  i1686.mode = i1687[0]
  i1686.gradientMin = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i1687[1], i1686.gradientMin)
  i1686.gradientMax = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i1687[2], i1686.gradientMax)
  i1686.colorMin = new pc.Color(i1687[3], i1687[4], i1687[5], i1687[6])
  i1686.colorMax = new pc.Color(i1687[7], i1687[8], i1687[9], i1687[10])
  return i1686
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient"] = function (request, data, root) {
  var i1688 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient' )
  var i1689 = data
  i1688.mode = i1689[0]
  var i1691 = i1689[1]
  var i1690 = []
  for(var i = 0; i < i1691.length; i += 1) {
    i1690.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey', i1691[i + 0]) );
  }
  i1688.colorKeys = i1690
  var i1693 = i1689[2]
  var i1692 = []
  for(var i = 0; i < i1693.length; i += 1) {
    i1692.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey', i1693[i + 0]) );
  }
  i1688.alphaKeys = i1692
  return i1688
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule"] = function (request, data, root) {
  var i1694 = root || new pc.ParticleSystemColorBySpeed()
  var i1695 = data
  i1694.enabled = !!i1695[0]
  i1694.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i1695[1], i1694.color)
  i1694.range = new pc.Vec2( i1695[2], i1695[3] )
  return i1694
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey"] = function (request, data, root) {
  var i1698 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey' )
  var i1699 = data
  i1698.color = new pc.Color(i1699[0], i1699[1], i1699[2], i1699[3])
  i1698.time = i1699[4]
  return i1698
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey"] = function (request, data, root) {
  var i1702 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey' )
  var i1703 = data
  i1702.alpha = i1703[0]
  i1702.time = i1703[1]
  return i1702
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule"] = function (request, data, root) {
  var i1704 = root || new pc.ParticleSystemColorOverLifetime()
  var i1705 = data
  i1704.enabled = !!i1705[0]
  i1704.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i1705[1], i1704.color)
  return i1704
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule"] = function (request, data, root) {
  var i1706 = root || new pc.ParticleSystemEmitter()
  var i1707 = data
  i1706.enabled = !!i1707[0]
  i1706.rateOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1707[1], i1706.rateOverTime)
  i1706.rateOverDistance = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1707[2], i1706.rateOverDistance)
  var i1709 = i1707[3]
  var i1708 = []
  for(var i = 0; i < i1709.length; i += 1) {
    i1708.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst', i1709[i + 0]) );
  }
  i1706.bursts = i1708
  return i1706
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst"] = function (request, data, root) {
  var i1712 = root || new pc.ParticleSystemBurst()
  var i1713 = data
  i1712.count = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1713[0], i1712.count)
  i1712.cycleCount = i1713[1]
  i1712.minCount = i1713[2]
  i1712.maxCount = i1713[3]
  i1712.repeatInterval = i1713[4]
  i1712.time = i1713[5]
  return i1712
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule"] = function (request, data, root) {
  var i1714 = root || new pc.ParticleSystemRotationBySpeed()
  var i1715 = data
  i1714.enabled = !!i1715[0]
  i1714.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1715[1], i1714.x)
  i1714.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1715[2], i1714.y)
  i1714.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1715[3], i1714.z)
  i1714.separateAxes = !!i1715[4]
  i1714.range = new pc.Vec2( i1715[5], i1715[6] )
  return i1714
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule"] = function (request, data, root) {
  var i1716 = root || new pc.ParticleSystemRotationOverLifetime()
  var i1717 = data
  i1716.enabled = !!i1717[0]
  i1716.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1717[1], i1716.x)
  i1716.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1717[2], i1716.y)
  i1716.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1717[3], i1716.z)
  i1716.separateAxes = !!i1717[4]
  return i1716
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule"] = function (request, data, root) {
  var i1718 = root || new pc.ParticleSystemShape()
  var i1719 = data
  i1718.enabled = !!i1719[0]
  i1718.shapeType = i1719[1]
  i1718.randomDirectionAmount = i1719[2]
  i1718.sphericalDirectionAmount = i1719[3]
  i1718.randomPositionAmount = i1719[4]
  i1718.alignToDirection = !!i1719[5]
  i1718.radius = i1719[6]
  i1718.radiusMode = i1719[7]
  i1718.radiusSpread = i1719[8]
  i1718.radiusSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1719[9], i1718.radiusSpeed)
  i1718.radiusThickness = i1719[10]
  i1718.angle = i1719[11]
  i1718.length = i1719[12]
  i1718.boxThickness = new pc.Vec3( i1719[13], i1719[14], i1719[15] )
  i1718.meshShapeType = i1719[16]
  request.r(i1719[17], i1719[18], 0, i1718, 'mesh')
  request.r(i1719[19], i1719[20], 0, i1718, 'meshRenderer')
  request.r(i1719[21], i1719[22], 0, i1718, 'skinnedMeshRenderer')
  i1718.useMeshMaterialIndex = !!i1719[23]
  i1718.meshMaterialIndex = i1719[24]
  i1718.useMeshColors = !!i1719[25]
  i1718.normalOffset = i1719[26]
  i1718.arc = i1719[27]
  i1718.arcMode = i1719[28]
  i1718.arcSpread = i1719[29]
  i1718.arcSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1719[30], i1718.arcSpeed)
  i1718.donutRadius = i1719[31]
  i1718.position = new pc.Vec3( i1719[32], i1719[33], i1719[34] )
  i1718.rotation = new pc.Vec3( i1719[35], i1719[36], i1719[37] )
  i1718.scale = new pc.Vec3( i1719[38], i1719[39], i1719[40] )
  return i1718
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule"] = function (request, data, root) {
  var i1720 = root || new pc.ParticleSystemSizeBySpeed()
  var i1721 = data
  i1720.enabled = !!i1721[0]
  i1720.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1721[1], i1720.x)
  i1720.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1721[2], i1720.y)
  i1720.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1721[3], i1720.z)
  i1720.separateAxes = !!i1721[4]
  i1720.range = new pc.Vec2( i1721[5], i1721[6] )
  return i1720
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule"] = function (request, data, root) {
  var i1722 = root || new pc.ParticleSystemSizeOverLifetime()
  var i1723 = data
  i1722.enabled = !!i1723[0]
  i1722.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1723[1], i1722.x)
  i1722.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1723[2], i1722.y)
  i1722.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1723[3], i1722.z)
  i1722.separateAxes = !!i1723[4]
  return i1722
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule"] = function (request, data, root) {
  var i1724 = root || new pc.ParticleSystemTextureSheetAnimation()
  var i1725 = data
  i1724.enabled = !!i1725[0]
  i1724.mode = i1725[1]
  i1724.animation = i1725[2]
  i1724.numTilesX = i1725[3]
  i1724.numTilesY = i1725[4]
  i1724.useRandomRow = !!i1725[5]
  i1724.frameOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1725[6], i1724.frameOverTime)
  i1724.startFrame = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1725[7], i1724.startFrame)
  i1724.cycleCount = i1725[8]
  i1724.rowIndex = i1725[9]
  i1724.flipU = i1725[10]
  i1724.flipV = i1725[11]
  i1724.spriteCount = i1725[12]
  var i1727 = i1725[13]
  var i1726 = []
  for(var i = 0; i < i1727.length; i += 2) {
  request.r(i1727[i + 0], i1727[i + 1], 2, i1726, '')
  }
  i1724.sprites = i1726
  return i1724
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule"] = function (request, data, root) {
  var i1730 = root || new pc.ParticleSystemVelocityOverLifetime()
  var i1731 = data
  i1730.enabled = !!i1731[0]
  i1730.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1731[1], i1730.x)
  i1730.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1731[2], i1730.y)
  i1730.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1731[3], i1730.z)
  i1730.radial = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1731[4], i1730.radial)
  i1730.speedModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1731[5], i1730.speedModifier)
  i1730.space = i1731[6]
  i1730.orbitalX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1731[7], i1730.orbitalX)
  i1730.orbitalY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1731[8], i1730.orbitalY)
  i1730.orbitalZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1731[9], i1730.orbitalZ)
  i1730.orbitalOffsetX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1731[10], i1730.orbitalOffsetX)
  i1730.orbitalOffsetY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1731[11], i1730.orbitalOffsetY)
  i1730.orbitalOffsetZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1731[12], i1730.orbitalOffsetZ)
  return i1730
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule"] = function (request, data, root) {
  var i1732 = root || new pc.ParticleSystemNoise()
  var i1733 = data
  i1732.enabled = !!i1733[0]
  i1732.separateAxes = !!i1733[1]
  i1732.strengthX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1733[2], i1732.strengthX)
  i1732.strengthY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1733[3], i1732.strengthY)
  i1732.strengthZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1733[4], i1732.strengthZ)
  i1732.frequency = i1733[5]
  i1732.damping = !!i1733[6]
  i1732.octaveCount = i1733[7]
  i1732.octaveMultiplier = i1733[8]
  i1732.octaveScale = i1733[9]
  i1732.quality = i1733[10]
  i1732.scrollSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1733[11], i1732.scrollSpeed)
  i1732.scrollSpeedMultiplier = i1733[12]
  i1732.remapEnabled = !!i1733[13]
  i1732.remapX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1733[14], i1732.remapX)
  i1732.remapY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1733[15], i1732.remapY)
  i1732.remapZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1733[16], i1732.remapZ)
  i1732.positionAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1733[17], i1732.positionAmount)
  i1732.rotationAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1733[18], i1732.rotationAmount)
  i1732.sizeAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1733[19], i1732.sizeAmount)
  return i1732
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule"] = function (request, data, root) {
  var i1734 = root || new pc.ParticleSystemInheritVelocity()
  var i1735 = data
  i1734.enabled = !!i1735[0]
  i1734.mode = i1735[1]
  i1734.curve = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1735[2], i1734.curve)
  return i1734
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule"] = function (request, data, root) {
  var i1736 = root || new pc.ParticleSystemForceOverLifetime()
  var i1737 = data
  i1736.enabled = !!i1737[0]
  i1736.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1737[1], i1736.x)
  i1736.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1737[2], i1736.y)
  i1736.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1737[3], i1736.z)
  i1736.space = i1737[4]
  i1736.randomized = !!i1737[5]
  return i1736
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule"] = function (request, data, root) {
  var i1738 = root || new pc.ParticleSystemLimitVelocityOverLifetime()
  var i1739 = data
  i1738.enabled = !!i1739[0]
  i1738.limit = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1739[1], i1738.limit)
  i1738.limitX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1739[2], i1738.limitX)
  i1738.limitY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1739[3], i1738.limitY)
  i1738.limitZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1739[4], i1738.limitZ)
  i1738.dampen = i1739[5]
  i1738.separateAxes = !!i1739[6]
  i1738.space = i1739[7]
  i1738.drag = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1739[8], i1738.drag)
  i1738.multiplyDragByParticleSize = !!i1739[9]
  i1738.multiplyDragByParticleVelocity = !!i1739[10]
  return i1738
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer"] = function (request, data, root) {
  var i1740 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer' )
  var i1741 = data
  request.r(i1741[0], i1741[1], 0, i1740, 'mesh')
  i1740.meshCount = i1741[2]
  i1740.activeVertexStreamsCount = i1741[3]
  i1740.alignment = i1741[4]
  i1740.renderMode = i1741[5]
  i1740.sortMode = i1741[6]
  i1740.lengthScale = i1741[7]
  i1740.velocityScale = i1741[8]
  i1740.cameraVelocityScale = i1741[9]
  i1740.normalDirection = i1741[10]
  i1740.sortingFudge = i1741[11]
  i1740.minParticleSize = i1741[12]
  i1740.maxParticleSize = i1741[13]
  i1740.pivot = new pc.Vec3( i1741[14], i1741[15], i1741[16] )
  request.r(i1741[17], i1741[18], 0, i1740, 'trailMaterial')
  i1740.applyActiveColorSpace = !!i1741[19]
  i1740.enabled = !!i1741[20]
  request.r(i1741[21], i1741[22], 0, i1740, 'sharedMaterial')
  var i1743 = i1741[23]
  var i1742 = []
  for(var i = 0; i < i1743.length; i += 2) {
  request.r(i1743[i + 0], i1743[i + 1], 2, i1742, '')
  }
  i1740.sharedMaterials = i1742
  i1740.receiveShadows = !!i1741[24]
  i1740.shadowCastingMode = i1741[25]
  i1740.sortingLayerID = i1741[26]
  i1740.sortingOrder = i1741[27]
  i1740.lightmapIndex = i1741[28]
  i1740.lightmapSceneIndex = i1741[29]
  i1740.lightmapScaleOffset = new pc.Vec4( i1741[30], i1741[31], i1741[32], i1741[33] )
  i1740.lightProbeUsage = i1741[34]
  i1740.reflectionProbeUsage = i1741[35]
  return i1740
}

Deserializers["BlockController"] = function (request, data, root) {
  var i1744 = root || request.c( 'BlockController' )
  var i1745 = data
  i1744.maxHP = i1745[0]
  i1744.currentHP = i1745[1]
  i1744.isBreak = !!i1745[2]
  i1744.numMonster = i1745[3]
  request.r(i1745[4], i1745[5], 0, i1744, 'hitSFX')
  request.r(i1745[6], i1745[7], 0, i1744, 'breakVFX')
  request.r(i1745[8], i1745[9], 0, i1744, 'breakSFX')
  return i1744
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh"] = function (request, data, root) {
  var i1746 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh' )
  var i1747 = data
  i1746.name = i1747[0]
  i1746.halfPrecision = !!i1747[1]
  i1746.useSimplification = !!i1747[2]
  i1746.useUInt32IndexFormat = !!i1747[3]
  i1746.vertexCount = i1747[4]
  i1746.aabb = i1747[5]
  var i1749 = i1747[6]
  var i1748 = []
  for(var i = 0; i < i1749.length; i += 1) {
    i1748.push( !!i1749[i + 0] );
  }
  i1746.streams = i1748
  i1746.vertices = i1747[7]
  var i1751 = i1747[8]
  var i1750 = []
  for(var i = 0; i < i1751.length; i += 1) {
    i1750.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh', i1751[i + 0]) );
  }
  i1746.subMeshes = i1750
  var i1753 = i1747[9]
  var i1752 = []
  for(var i = 0; i < i1753.length; i += 16) {
    i1752.push( new pc.Mat4().setData(i1753[i + 0], i1753[i + 1], i1753[i + 2], i1753[i + 3],  i1753[i + 4], i1753[i + 5], i1753[i + 6], i1753[i + 7],  i1753[i + 8], i1753[i + 9], i1753[i + 10], i1753[i + 11],  i1753[i + 12], i1753[i + 13], i1753[i + 14], i1753[i + 15]) );
  }
  i1746.bindposes = i1752
  var i1755 = i1747[10]
  var i1754 = []
  for(var i = 0; i < i1755.length; i += 1) {
    i1754.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape', i1755[i + 0]) );
  }
  i1746.blendShapes = i1754
  return i1746
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh"] = function (request, data, root) {
  var i1760 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh' )
  var i1761 = data
  i1760.triangles = i1761[0]
  return i1760
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape"] = function (request, data, root) {
  var i1766 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape' )
  var i1767 = data
  i1766.name = i1767[0]
  var i1769 = i1767[1]
  var i1768 = []
  for(var i = 0; i < i1769.length; i += 1) {
    i1768.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame', i1769[i + 0]) );
  }
  i1766.frames = i1768
  return i1766
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i1770 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i1771 = data
  i1770.name = i1771[0]
  i1770.index = i1771[1]
  i1770.startup = !!i1771[2]
  return i1770
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i1772 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i1773 = data
  i1772.aspect = i1773[0]
  i1772.orthographic = !!i1773[1]
  i1772.orthographicSize = i1773[2]
  i1772.backgroundColor = new pc.Color(i1773[3], i1773[4], i1773[5], i1773[6])
  i1772.nearClipPlane = i1773[7]
  i1772.farClipPlane = i1773[8]
  i1772.fieldOfView = i1773[9]
  i1772.depth = i1773[10]
  i1772.clearFlags = i1773[11]
  i1772.cullingMask = i1773[12]
  i1772.rect = i1773[13]
  request.r(i1773[14], i1773[15], 0, i1772, 'targetTexture')
  i1772.usePhysicalProperties = !!i1773[16]
  i1772.focalLength = i1773[17]
  i1772.sensorSize = new pc.Vec2( i1773[18], i1773[19] )
  i1772.lensShift = new pc.Vec2( i1773[20], i1773[21] )
  i1772.gateFit = i1773[22]
  i1772.commandBufferCount = i1773[23]
  i1772.cameraType = i1773[24]
  i1772.enabled = !!i1773[25]
  return i1772
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i1774 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i1775 = data
  request.r(i1775[0], i1775[1], 0, i1774, 'm_FirstSelected')
  i1774.m_sendNavigationEvents = !!i1775[2]
  i1774.m_DragThreshold = i1775[3]
  return i1774
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i1776 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i1777 = data
  i1776.m_HorizontalAxis = i1777[0]
  i1776.m_VerticalAxis = i1777[1]
  i1776.m_SubmitButton = i1777[2]
  i1776.m_CancelButton = i1777[3]
  i1776.m_InputActionsPerSecond = i1777[4]
  i1776.m_RepeatDelay = i1777[5]
  i1776.m_ForceModuleActive = !!i1777[6]
  i1776.m_SendPointerHoverToParent = !!i1777[7]
  return i1776
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i1778 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i1779 = data
  i1778.pivot = new pc.Vec2( i1779[0], i1779[1] )
  i1778.anchorMin = new pc.Vec2( i1779[2], i1779[3] )
  i1778.anchorMax = new pc.Vec2( i1779[4], i1779[5] )
  i1778.sizeDelta = new pc.Vec2( i1779[6], i1779[7] )
  i1778.anchoredPosition3D = new pc.Vec3( i1779[8], i1779[9], i1779[10] )
  i1778.rotation = new pc.Quat(i1779[11], i1779[12], i1779[13], i1779[14])
  i1778.scale = new pc.Vec3( i1779[15], i1779[16], i1779[17] )
  return i1778
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i1780 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i1781 = data
  i1780.planeDistance = i1781[0]
  i1780.referencePixelsPerUnit = i1781[1]
  i1780.isFallbackOverlay = !!i1781[2]
  i1780.renderMode = i1781[3]
  i1780.renderOrder = i1781[4]
  i1780.sortingLayerName = i1781[5]
  i1780.sortingOrder = i1781[6]
  i1780.scaleFactor = i1781[7]
  request.r(i1781[8], i1781[9], 0, i1780, 'worldCamera')
  i1780.overrideSorting = !!i1781[10]
  i1780.pixelPerfect = !!i1781[11]
  i1780.targetDisplay = i1781[12]
  i1780.overridePixelPerfect = !!i1781[13]
  i1780.enabled = !!i1781[14]
  return i1780
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i1782 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i1783 = data
  i1782.m_UiScaleMode = i1783[0]
  i1782.m_ReferencePixelsPerUnit = i1783[1]
  i1782.m_ScaleFactor = i1783[2]
  i1782.m_ReferenceResolution = new pc.Vec2( i1783[3], i1783[4] )
  i1782.m_ScreenMatchMode = i1783[5]
  i1782.m_MatchWidthOrHeight = i1783[6]
  i1782.m_PhysicalUnit = i1783[7]
  i1782.m_FallbackScreenDPI = i1783[8]
  i1782.m_DefaultSpriteDPI = i1783[9]
  i1782.m_DynamicPixelsPerUnit = i1783[10]
  i1782.m_PresetInfoIsWorld = !!i1783[11]
  return i1782
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i1784 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i1785 = data
  i1784.m_IgnoreReversedGraphics = !!i1785[0]
  i1784.m_BlockingObjects = i1785[1]
  i1784.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i1785[2] )
  return i1784
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i1786 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i1787 = data
  i1786.cullTransparentMesh = !!i1787[0]
  return i1786
}

Deserializers["UnityEngine.UI.RawImage"] = function (request, data, root) {
  var i1788 = root || request.c( 'UnityEngine.UI.RawImage' )
  var i1789 = data
  request.r(i1789[0], i1789[1], 0, i1788, 'm_Texture')
  i1788.m_UVRect = UnityEngine.Rect.MinMaxRect(i1789[2], i1789[3], i1789[4], i1789[5])
  request.r(i1789[6], i1789[7], 0, i1788, 'm_Material')
  i1788.m_Maskable = !!i1789[8]
  i1788.m_Color = new pc.Color(i1789[9], i1789[10], i1789[11], i1789[12])
  i1788.m_RaycastTarget = !!i1789[13]
  i1788.m_RaycastPadding = new pc.Vec4( i1789[14], i1789[15], i1789[16], i1789[17] )
  return i1788
}

Deserializers["UnityEngine.UI.AspectRatioFitter"] = function (request, data, root) {
  var i1790 = root || request.c( 'UnityEngine.UI.AspectRatioFitter' )
  var i1791 = data
  i1790.m_AspectMode = i1791[0]
  i1790.m_AspectRatio = i1791[1]
  return i1790
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i1792 = root || request.c( 'UnityEngine.UI.Image' )
  var i1793 = data
  request.r(i1793[0], i1793[1], 0, i1792, 'm_Sprite')
  i1792.m_Type = i1793[2]
  i1792.m_PreserveAspect = !!i1793[3]
  i1792.m_FillCenter = !!i1793[4]
  i1792.m_FillMethod = i1793[5]
  i1792.m_FillAmount = i1793[6]
  i1792.m_FillClockwise = !!i1793[7]
  i1792.m_FillOrigin = i1793[8]
  i1792.m_UseSpriteMesh = !!i1793[9]
  i1792.m_PixelsPerUnitMultiplier = i1793[10]
  request.r(i1793[11], i1793[12], 0, i1792, 'm_Material')
  i1792.m_Maskable = !!i1793[13]
  i1792.m_Color = new pc.Color(i1793[14], i1793[15], i1793[16], i1793[17])
  i1792.m_RaycastTarget = !!i1793[18]
  i1792.m_RaycastPadding = new pc.Vec4( i1793[19], i1793[20], i1793[21], i1793[22] )
  return i1792
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i1794 = root || request.c( 'UnityEngine.UI.Button' )
  var i1795 = data
  i1794.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i1795[0], i1794.m_OnClick)
  i1794.m_Navigation = request.d('UnityEngine.UI.Navigation', i1795[1], i1794.m_Navigation)
  i1794.m_Transition = i1795[2]
  i1794.m_Colors = request.d('UnityEngine.UI.ColorBlock', i1795[3], i1794.m_Colors)
  i1794.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i1795[4], i1794.m_SpriteState)
  i1794.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i1795[5], i1794.m_AnimationTriggers)
  i1794.m_Interactable = !!i1795[6]
  request.r(i1795[7], i1795[8], 0, i1794, 'm_TargetGraphic')
  return i1794
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i1796 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i1797 = data
  i1796.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i1797[0], i1796.m_PersistentCalls)
  return i1796
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i1798 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i1799 = data
  var i1801 = i1799[0]
  var i1800 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i1801.length; i += 1) {
    i1800.add(request.d('UnityEngine.Events.PersistentCall', i1801[i + 0]));
  }
  i1798.m_Calls = i1800
  return i1798
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i1804 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i1805 = data
  request.r(i1805[0], i1805[1], 0, i1804, 'm_Target')
  i1804.m_TargetAssemblyTypeName = i1805[2]
  i1804.m_MethodName = i1805[3]
  i1804.m_Mode = i1805[4]
  i1804.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i1805[5], i1804.m_Arguments)
  i1804.m_CallState = i1805[6]
  return i1804
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i1806 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i1807 = data
  i1806.m_Mode = i1807[0]
  i1806.m_WrapAround = !!i1807[1]
  request.r(i1807[2], i1807[3], 0, i1806, 'm_SelectOnUp')
  request.r(i1807[4], i1807[5], 0, i1806, 'm_SelectOnDown')
  request.r(i1807[6], i1807[7], 0, i1806, 'm_SelectOnLeft')
  request.r(i1807[8], i1807[9], 0, i1806, 'm_SelectOnRight')
  return i1806
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i1808 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i1809 = data
  i1808.m_NormalColor = new pc.Color(i1809[0], i1809[1], i1809[2], i1809[3])
  i1808.m_HighlightedColor = new pc.Color(i1809[4], i1809[5], i1809[6], i1809[7])
  i1808.m_PressedColor = new pc.Color(i1809[8], i1809[9], i1809[10], i1809[11])
  i1808.m_SelectedColor = new pc.Color(i1809[12], i1809[13], i1809[14], i1809[15])
  i1808.m_DisabledColor = new pc.Color(i1809[16], i1809[17], i1809[18], i1809[19])
  i1808.m_ColorMultiplier = i1809[20]
  i1808.m_FadeDuration = i1809[21]
  return i1808
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i1810 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i1811 = data
  request.r(i1811[0], i1811[1], 0, i1810, 'm_HighlightedSprite')
  request.r(i1811[2], i1811[3], 0, i1810, 'm_PressedSprite')
  request.r(i1811[4], i1811[5], 0, i1810, 'm_SelectedSprite')
  request.r(i1811[6], i1811[7], 0, i1810, 'm_DisabledSprite')
  return i1810
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i1812 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i1813 = data
  i1812.m_NormalTrigger = i1813[0]
  i1812.m_HighlightedTrigger = i1813[1]
  i1812.m_PressedTrigger = i1813[2]
  i1812.m_SelectedTrigger = i1813[3]
  i1812.m_DisabledTrigger = i1813[4]
  return i1812
}

Deserializers["UnityEngine.UI.Text"] = function (request, data, root) {
  var i1814 = root || request.c( 'UnityEngine.UI.Text' )
  var i1815 = data
  i1814.m_FontData = request.d('UnityEngine.UI.FontData', i1815[0], i1814.m_FontData)
  i1814.m_Text = i1815[1]
  request.r(i1815[2], i1815[3], 0, i1814, 'm_Material')
  i1814.m_Maskable = !!i1815[4]
  i1814.m_Color = new pc.Color(i1815[5], i1815[6], i1815[7], i1815[8])
  i1814.m_RaycastTarget = !!i1815[9]
  i1814.m_RaycastPadding = new pc.Vec4( i1815[10], i1815[11], i1815[12], i1815[13] )
  return i1814
}

Deserializers["UnityEngine.UI.FontData"] = function (request, data, root) {
  var i1816 = root || request.c( 'UnityEngine.UI.FontData' )
  var i1817 = data
  request.r(i1817[0], i1817[1], 0, i1816, 'm_Font')
  i1816.m_FontSize = i1817[2]
  i1816.m_FontStyle = i1817[3]
  i1816.m_BestFit = !!i1817[4]
  i1816.m_MinSize = i1817[5]
  i1816.m_MaxSize = i1817[6]
  i1816.m_Alignment = i1817[7]
  i1816.m_AlignByGeometry = !!i1817[8]
  i1816.m_RichText = !!i1817[9]
  i1816.m_HorizontalOverflow = i1817[10]
  i1816.m_VerticalOverflow = i1817[11]
  i1816.m_LineSpacing = i1817[12]
  return i1816
}

Deserializers["TutController"] = function (request, data, root) {
  var i1818 = root || request.c( 'TutController' )
  var i1819 = data
  var i1821 = i1819[0]
  var i1820 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Vector2')))
  for(var i = 0; i < i1821.length; i += 2) {
    i1820.add(new pc.Vec2( i1821[i + 0], i1821[i + 1] ));
  }
  i1818.movePos = i1820
  i1818.moveTime = i1819[1]
  i1818.fromScale = i1819[2]
  i1818.toScale = i1819[3]
  i1818.scaleTime = i1819[4]
  return i1818
}

Deserializers["DG.Tweening.DOTweenAnimation"] = function (request, data, root) {
  var i1824 = root || request.c( 'DG.Tweening.DOTweenAnimation' )
  var i1825 = data
  i1824.targetIsSelf = !!i1825[0]
  request.r(i1825[1], i1825[2], 0, i1824, 'targetGO')
  i1824.tweenTargetIsTargetGO = !!i1825[3]
  i1824.delay = i1825[4]
  i1824.duration = i1825[5]
  i1824.easeType = i1825[6]
  i1824.easeCurve = new pc.AnimationCurve( { keys_flow: i1825[7] } )
  i1824.loopType = i1825[8]
  i1824.loops = i1825[9]
  i1824.id = i1825[10]
  i1824.isRelative = !!i1825[11]
  i1824.isFrom = !!i1825[12]
  i1824.isIndependentUpdate = !!i1825[13]
  i1824.autoKill = !!i1825[14]
  i1824.autoGenerate = !!i1825[15]
  i1824.isActive = !!i1825[16]
  i1824.isValid = !!i1825[17]
  request.r(i1825[18], i1825[19], 0, i1824, 'target')
  i1824.animationType = i1825[20]
  i1824.targetType = i1825[21]
  i1824.forcedTargetType = i1825[22]
  i1824.autoPlay = !!i1825[23]
  i1824.useTargetAsV3 = !!i1825[24]
  i1824.endValueFloat = i1825[25]
  i1824.endValueV3 = new pc.Vec3( i1825[26], i1825[27], i1825[28] )
  i1824.endValueV2 = new pc.Vec2( i1825[29], i1825[30] )
  i1824.endValueColor = new pc.Color(i1825[31], i1825[32], i1825[33], i1825[34])
  i1824.endValueString = i1825[35]
  i1824.endValueRect = UnityEngine.Rect.MinMaxRect(i1825[36], i1825[37], i1825[38], i1825[39])
  request.r(i1825[40], i1825[41], 0, i1824, 'endValueTransform')
  i1824.optionalBool0 = !!i1825[42]
  i1824.optionalBool1 = !!i1825[43]
  i1824.optionalFloat0 = i1825[44]
  i1824.optionalInt0 = i1825[45]
  i1824.optionalRotationMode = i1825[46]
  i1824.optionalScrambleMode = i1825[47]
  i1824.optionalShakeRandomnessMode = i1825[48]
  i1824.optionalString = i1825[49]
  i1824.updateType = i1825[50]
  i1824.isSpeedBased = !!i1825[51]
  i1824.hasOnStart = !!i1825[52]
  i1824.hasOnPlay = !!i1825[53]
  i1824.hasOnUpdate = !!i1825[54]
  i1824.hasOnStepComplete = !!i1825[55]
  i1824.hasOnComplete = !!i1825[56]
  i1824.hasOnTweenCreated = !!i1825[57]
  i1824.hasOnRewind = !!i1825[58]
  i1824.onStart = request.d('UnityEngine.Events.UnityEvent', i1825[59], i1824.onStart)
  i1824.onPlay = request.d('UnityEngine.Events.UnityEvent', i1825[60], i1824.onPlay)
  i1824.onUpdate = request.d('UnityEngine.Events.UnityEvent', i1825[61], i1824.onUpdate)
  i1824.onStepComplete = request.d('UnityEngine.Events.UnityEvent', i1825[62], i1824.onStepComplete)
  i1824.onComplete = request.d('UnityEngine.Events.UnityEvent', i1825[63], i1824.onComplete)
  i1824.onTweenCreated = request.d('UnityEngine.Events.UnityEvent', i1825[64], i1824.onTweenCreated)
  i1824.onRewind = request.d('UnityEngine.Events.UnityEvent', i1825[65], i1824.onRewind)
  return i1824
}

Deserializers["UnityEngine.Events.UnityEvent"] = function (request, data, root) {
  var i1826 = root || request.c( 'UnityEngine.Events.UnityEvent' )
  var i1827 = data
  i1826.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i1827[0], i1826.m_PersistentCalls)
  return i1826
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SortingGroup"] = function (request, data, root) {
  var i1828 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SortingGroup' )
  var i1829 = data
  i1828.sortingLayerIndex = i1829[0]
  i1828.sortingOrder = i1829[1]
  i1828.sortingLayerName = i1829[2]
  i1828.enabled = !!i1829[3]
  return i1828
}

Deserializers["PlayerController"] = function (request, data, root) {
  var i1830 = root || request.c( 'PlayerController' )
  var i1831 = data
  var i1833 = i1831[0]
  var i1832 = new (System.Collections.Generic.List$1(Bridge.ns('Piece')))
  for(var i = 0; i < i1833.length; i += 1) {
    i1832.add(request.d('Piece', i1833[i + 0]));
  }
  i1830.pieces = i1832
  request.r(i1831[1], i1831[2], 0, i1830, 'head')
  request.r(i1831[3], i1831[4], 0, i1830, 'deadSFX')
  i1830.maxForce = new pc.Vec2( i1831[5], i1831[6] )
  i1830.minForce = new pc.Vec2( i1831[7], i1831[8] )
  var i1835 = i1831[9]
  var i1834 = new (System.Collections.Generic.List$1(Bridge.ns('FightOption')))
  for(var i = 0; i < i1835.length; i += 1) {
    i1834.add(request.d('FightOption', i1835[i + 0]));
  }
  i1830.fightOptions = i1834
  request.r(i1831[10], i1831[11], 0, i1830, 'optionTut')
  request.r(i1831[12], i1831[13], 0, i1830, 'attackTut')
  i1830.fight = request.d('FightOption', i1831[14], i1830.fight)
  request.r(i1831[15], i1831[16], 0, i1830, 'clickSound')
  return i1830
}

Deserializers["Piece"] = function (request, data, root) {
  var i1838 = root || request.c( 'Piece' )
  var i1839 = data
  request.r(i1839[0], i1839[1], 0, i1838, 'Joint')
  request.r(i1839[2], i1839[3], 0, i1838, 'Rb')
  return i1838
}

Deserializers["FightOption"] = function (request, data, root) {
  var i1842 = root || request.c( 'FightOption' )
  var i1843 = data
  request.r(i1843[0], i1843[1], 0, i1842, 'Button')
  request.r(i1843[2], i1843[3], 0, i1842, 'Selected')
  request.r(i1843[4], i1843[5], 0, i1842, 'Controller')
  return i1842
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.HingeJoint2D"] = function (request, data, root) {
  var i1844 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.HingeJoint2D' )
  var i1845 = data
  i1844.useLimits = !!i1845[0]
  i1844.limits = request.d('UnityEngine.JointAngleLimits2D', i1845[1], i1844.limits)
  i1844.useMotor = !!i1845[2]
  i1844.motor = request.d('UnityEngine.JointMotor2D', i1845[3], i1844.motor)
  i1844.anchor = new pc.Vec2( i1845[4], i1845[5] )
  i1844.connectedAnchor = new pc.Vec2( i1845[6], i1845[7] )
  i1844.autoConfigureConnectedAnchor = !!i1845[8]
  request.r(i1845[9], i1845[10], 0, i1844, 'connectedBody')
  i1844.breakForce = i1845[11]
  i1844.breakTorque = i1845[12]
  i1844.enableCollision = !!i1845[13]
  i1844.enabled = !!i1845[14]
  return i1844
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.TargetJoint2D"] = function (request, data, root) {
  var i1846 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.TargetJoint2D' )
  var i1847 = data
  i1846.autoConfigureTarget = !!i1847[0]
  i1846.target = new pc.Vec2( i1847[1], i1847[2] )
  i1846.anchor = new pc.Vec2( i1847[3], i1847[4] )
  i1846.maxForce = i1847[5]
  i1846.dampingRatio = i1847[6]
  i1846.frequency = i1847[7]
  request.r(i1847[8], i1847[9], 0, i1846, 'connectedBody')
  i1846.breakForce = i1847[10]
  i1846.breakTorque = i1847[11]
  i1846.enableCollision = !!i1847[12]
  i1846.enabled = !!i1847[13]
  return i1846
}

Deserializers["ShootController"] = function (request, data, root) {
  var i1848 = root || request.c( 'ShootController' )
  var i1849 = data
  request.r(i1849[0], i1849[1], 0, i1848, 'currentMonster')
  request.r(i1849[2], i1849[3], 0, i1848, 'left')
  request.r(i1849[4], i1849[5], 0, i1848, 'right')
  i1848.timeMotor = i1849[6]
  i1848.onCD = !!i1849[7]
  i1848.CD = i1849[8]
  request.r(i1849[9], i1849[10], 0, i1848, 'startPos')
  request.r(i1849[11], i1849[12], 0, i1848, 'attackSound')
  request.r(i1849[13], i1849[14], 0, i1848, 'spawnPrefab')
  request.r(i1849[15], i1849[16], 0, i1848, 'poolParent')
  return i1848
}

Deserializers["DropController"] = function (request, data, root) {
  var i1850 = root || request.c( 'DropController' )
  var i1851 = data
  request.r(i1851[0], i1851[1], 0, i1850, 'attackSound')
  request.r(i1851[2], i1851[3], 0, i1850, 'spawnPrefab')
  request.r(i1851[4], i1851[5], 0, i1850, 'poolParent')
  return i1850
}

Deserializers["BalanceController"] = function (request, data, root) {
  var i1852 = root || request.c( 'BalanceController' )
  var i1853 = data
  i1852.targetRotation = i1853[0]
  i1852.force = i1853[1]
  return i1852
}

Deserializers["MonsterController"] = function (request, data, root) {
  var i1854 = root || request.c( 'MonsterController' )
  var i1855 = data
  i1854.maxHP = i1855[0]
  i1854.currentHP = i1855[1]
  var i1857 = i1855[2]
  var i1856 = new (System.Collections.Generic.List$1(Bridge.ns('Piece')))
  for(var i = 0; i < i1857.length; i += 1) {
    i1856.add(request.d('Piece', i1857[i + 0]));
  }
  i1854.pieces = i1856
  request.r(i1855[3], i1855[4], 0, i1854, 'deadSFX')
  i1854.maxForce = new pc.Vec2( i1855[5], i1855[6] )
  i1854.minForce = new pc.Vec2( i1855[7], i1855[8] )
  request.r(i1855[9], i1855[10], 0, i1854, 'balance')
  i1854.isDead = !!i1855[11]
  i1854.speed = i1855[12]
  request.r(i1855[13], i1855[14], 0, i1854, 'body')
  request.r(i1855[15], i1855[16], 0, i1854, 'leftHand')
  request.r(i1855[17], i1855[18], 0, i1854, 'rightHand')
  request.r(i1855[19], i1855[20], 0, i1854, 'leftLeg')
  request.r(i1855[21], i1855[22], 0, i1854, 'rightLeg')
  return i1854
}

Deserializers["DefenseController"] = function (request, data, root) {
  var i1858 = root || request.c( 'DefenseController' )
  var i1859 = data
  request.r(i1859[0], i1859[1], 0, i1858, 'world')
  i1858.offset = new pc.Vec2( i1859[2], i1859[3] )
  i1858.cellSize = i1859[4]
  request.r(i1859[5], i1859[6], 0, i1858, 'putSound')
  request.r(i1859[7], i1859[8], 0, i1858, 'clickSound')
  var i1861 = i1859[9]
  var i1860 = new (System.Collections.Generic.List$1(Bridge.ns('BlockType')))
  for(var i = 0; i < i1861.length; i += 1) {
    i1860.add(request.d('BlockType', i1861[i + 0]));
  }
  i1858.blockTypes = i1860
  request.r(i1859[10], i1859[11], 0, i1858, 'optionTut')
  request.r(i1859[12], i1859[13], 0, i1858, 'buildTut')
  return i1858
}

Deserializers["BlockType"] = function (request, data, root) {
  var i1864 = root || request.c( 'BlockType' )
  var i1865 = data
  request.r(i1865[0], i1865[1], 0, i1864, 'Button')
  request.r(i1865[2], i1865[3], 0, i1864, 'Selected')
  request.r(i1865[4], i1865[5], 0, i1864, 'Prefab')
  i1864.blockSize = new pc.Vec2( i1865[6], i1865[7] )
  return i1864
}

Deserializers["GameController"] = function (request, data, root) {
  var i1866 = root || request.c( 'GameController' )
  var i1867 = data
  i1866.OnStart = request.d('System.Action', i1867[0], i1866.OnStart)
  i1866.OnClick = request.d('System.Action', i1867[1], i1866.OnClick)
  i1866.OnGameOver = request.d('System.Action', i1867[2], i1866.OnGameOver)
  i1866.OnGameComplete = request.d('System.Action', i1867[3], i1866.OnGameComplete)
  request.r(i1867[4], i1867[5], 0, i1866, 'startScene')
  request.r(i1867[6], i1867[7], 0, i1866, 'buttonFight')
  request.r(i1867[8], i1867[9], 0, i1866, 'buttonDefense')
  request.r(i1867[10], i1867[11], 0, i1866, 'clickSound')
  request.r(i1867[12], i1867[13], 0, i1866, 'fightOptions')
  request.r(i1867[14], i1867[15], 0, i1866, 'tut')
  request.r(i1867[16], i1867[17], 0, i1866, 'defenseOptions')
  request.r(i1867[18], i1867[19], 0, i1866, 'defense')
  request.r(i1867[20], i1867[21], 0, i1866, 'endScene')
  request.r(i1867[22], i1867[23], 0, i1866, 'completeScene')
  request.r(i1867[24], i1867[25], 0, i1866, 'gameOverScene')
  request.r(i1867[26], i1867[27], 0, i1866, 'player')
  i1866.numMonster = i1867[28]
  request.r(i1867[29], i1867[30], 0, i1866, 'world')
  return i1866
}

Deserializers["System.Action"] = function (request, data, root) {
  var i1868 = root || request.c( 'System.Action' )
  var i1869 = data
  return i1868
}

Deserializers["LayoutController"] = function (request, data, root) {
  var i1870 = root || request.c( 'LayoutController' )
  var i1871 = data
  request.r(i1871[0], i1871[1], 0, i1870, 'main')
  request.r(i1871[2], i1871[3], 0, i1870, 'fight')
  request.r(i1871[4], i1871[5], 0, i1870, 'defense')
  return i1870
}

Deserializers["LunaController"] = function (request, data, root) {
  var i1872 = root || request.c( 'LunaController' )
  var i1873 = data
  request.r(i1873[0], i1873[1], 0, i1872, 'BGTexture')
  i1872.UseTime = !!i1873[2]
  i1872.TimePlay = i1873[3]
  i1872.UseCountPlay = !!i1873[4]
  i1872.MaxCountPlay = i1873[5]
  request.r(i1873[6], i1873[7], 0, i1872, 'BGImage')
  var i1875 = i1873[8]
  var i1874 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.UI.Button')))
  for(var i = 0; i < i1875.length; i += 2) {
  request.r(i1875[i + 0], i1875[i + 1], 1, i1874, '')
  }
  i1872.CTA = i1874
  i1872.count = i1873[9]
  return i1872
}

Deserializers["AudioController"] = function (request, data, root) {
  var i1878 = root || request.c( 'AudioController' )
  var i1879 = data
  request.r(i1879[0], i1879[1], 0, i1878, 'BGM')
  request.r(i1879[2], i1879[3], 0, i1878, 'musicSource')
  request.r(i1879[4], i1879[5], 0, i1878, 'pool')
  return i1878
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.AudioSource"] = function (request, data, root) {
  var i1880 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.AudioSource' )
  var i1881 = data
  request.r(i1881[0], i1881[1], 0, i1880, 'clip')
  request.r(i1881[2], i1881[3], 0, i1880, 'outputAudioMixerGroup')
  i1880.playOnAwake = !!i1881[4]
  i1880.loop = !!i1881[5]
  i1880.time = i1881[6]
  i1880.volume = i1881[7]
  i1880.pitch = i1881[8]
  i1880.enabled = !!i1881[9]
  return i1880
}

Deserializers["VFXController"] = function (request, data, root) {
  var i1882 = root || request.c( 'VFXController' )
  var i1883 = data
  request.r(i1883[0], i1883[1], 0, i1882, 'poolParent')
  return i1882
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i1884 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i1885 = data
  i1884.ambientIntensity = i1885[0]
  i1884.reflectionIntensity = i1885[1]
  i1884.ambientMode = i1885[2]
  i1884.ambientLight = new pc.Color(i1885[3], i1885[4], i1885[5], i1885[6])
  i1884.ambientSkyColor = new pc.Color(i1885[7], i1885[8], i1885[9], i1885[10])
  i1884.ambientGroundColor = new pc.Color(i1885[11], i1885[12], i1885[13], i1885[14])
  i1884.ambientEquatorColor = new pc.Color(i1885[15], i1885[16], i1885[17], i1885[18])
  i1884.fogColor = new pc.Color(i1885[19], i1885[20], i1885[21], i1885[22])
  i1884.fogEndDistance = i1885[23]
  i1884.fogStartDistance = i1885[24]
  i1884.fogDensity = i1885[25]
  i1884.fog = !!i1885[26]
  request.r(i1885[27], i1885[28], 0, i1884, 'skybox')
  i1884.fogMode = i1885[29]
  var i1887 = i1885[30]
  var i1886 = []
  for(var i = 0; i < i1887.length; i += 1) {
    i1886.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i1887[i + 0]) );
  }
  i1884.lightmaps = i1886
  i1884.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i1885[31], i1884.lightProbes)
  i1884.lightmapsMode = i1885[32]
  i1884.mixedBakeMode = i1885[33]
  i1884.environmentLightingMode = i1885[34]
  i1884.ambientProbe = new pc.SphericalHarmonicsL2(i1885[35])
  request.r(i1885[36], i1885[37], 0, i1884, 'customReflection')
  request.r(i1885[38], i1885[39], 0, i1884, 'defaultReflection')
  i1884.defaultReflectionMode = i1885[40]
  i1884.defaultReflectionResolution = i1885[41]
  i1884.sunLightObjectId = i1885[42]
  i1884.pixelLightCount = i1885[43]
  i1884.defaultReflectionHDR = !!i1885[44]
  i1884.hasLightDataAsset = !!i1885[45]
  i1884.hasManualGenerate = !!i1885[46]
  return i1884
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i1890 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i1891 = data
  request.r(i1891[0], i1891[1], 0, i1890, 'lightmapColor')
  request.r(i1891[2], i1891[3], 0, i1890, 'lightmapDirection')
  request.r(i1891[4], i1891[5], 0, i1890, 'shadowMask')
  return i1890
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i1892 = root || new UnityEngine.LightProbes()
  var i1893 = data
  return i1892
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i1900 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i1901 = data
  var i1903 = i1901[0]
  var i1902 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i1903.length; i += 1) {
    i1902.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i1903[i + 0]));
  }
  i1900.ShaderCompilationErrors = i1902
  i1900.name = i1901[1]
  i1900.guid = i1901[2]
  var i1905 = i1901[3]
  var i1904 = []
  for(var i = 0; i < i1905.length; i += 1) {
    i1904.push( i1905[i + 0] );
  }
  i1900.shaderDefinedKeywords = i1904
  var i1907 = i1901[4]
  var i1906 = []
  for(var i = 0; i < i1907.length; i += 1) {
    i1906.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i1907[i + 0]) );
  }
  i1900.passes = i1906
  var i1909 = i1901[5]
  var i1908 = []
  for(var i = 0; i < i1909.length; i += 1) {
    i1908.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i1909[i + 0]) );
  }
  i1900.usePasses = i1908
  var i1911 = i1901[6]
  var i1910 = []
  for(var i = 0; i < i1911.length; i += 1) {
    i1910.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i1911[i + 0]) );
  }
  i1900.defaultParameterValues = i1910
  request.r(i1901[7], i1901[8], 0, i1900, 'unityFallbackShader')
  i1900.readDepth = !!i1901[9]
  i1900.hasDepthOnlyPass = !!i1901[10]
  i1900.isCreatedByShaderGraph = !!i1901[11]
  i1900.disableBatching = !!i1901[12]
  i1900.compiled = !!i1901[13]
  return i1900
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i1914 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i1915 = data
  i1914.shaderName = i1915[0]
  i1914.errorMessage = i1915[1]
  return i1914
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i1920 = root || new pc.UnityShaderPass()
  var i1921 = data
  i1920.id = i1921[0]
  i1920.subShaderIndex = i1921[1]
  i1920.name = i1921[2]
  i1920.passType = i1921[3]
  i1920.grabPassTextureName = i1921[4]
  i1920.usePass = !!i1921[5]
  i1920.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1921[6], i1920.zTest)
  i1920.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1921[7], i1920.zWrite)
  i1920.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1921[8], i1920.culling)
  i1920.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i1921[9], i1920.blending)
  i1920.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i1921[10], i1920.alphaBlending)
  i1920.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1921[11], i1920.colorWriteMask)
  i1920.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1921[12], i1920.offsetUnits)
  i1920.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1921[13], i1920.offsetFactor)
  i1920.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1921[14], i1920.stencilRef)
  i1920.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1921[15], i1920.stencilReadMask)
  i1920.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1921[16], i1920.stencilWriteMask)
  i1920.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1921[17], i1920.stencilOp)
  i1920.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1921[18], i1920.stencilOpFront)
  i1920.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1921[19], i1920.stencilOpBack)
  var i1923 = i1921[20]
  var i1922 = []
  for(var i = 0; i < i1923.length; i += 1) {
    i1922.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i1923[i + 0]) );
  }
  i1920.tags = i1922
  var i1925 = i1921[21]
  var i1924 = []
  for(var i = 0; i < i1925.length; i += 1) {
    i1924.push( i1925[i + 0] );
  }
  i1920.passDefinedKeywords = i1924
  var i1927 = i1921[22]
  var i1926 = []
  for(var i = 0; i < i1927.length; i += 1) {
    i1926.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i1927[i + 0]) );
  }
  i1920.passDefinedKeywordGroups = i1926
  var i1929 = i1921[23]
  var i1928 = []
  for(var i = 0; i < i1929.length; i += 1) {
    i1928.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i1929[i + 0]) );
  }
  i1920.variants = i1928
  var i1931 = i1921[24]
  var i1930 = []
  for(var i = 0; i < i1931.length; i += 1) {
    i1930.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i1931[i + 0]) );
  }
  i1920.excludedVariants = i1930
  i1920.hasDepthReader = !!i1921[25]
  return i1920
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i1932 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i1933 = data
  i1932.val = i1933[0]
  i1932.name = i1933[1]
  return i1932
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i1934 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i1935 = data
  i1934.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1935[0], i1934.src)
  i1934.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1935[1], i1934.dst)
  i1934.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1935[2], i1934.op)
  return i1934
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i1936 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i1937 = data
  i1936.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1937[0], i1936.pass)
  i1936.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1937[1], i1936.fail)
  i1936.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1937[2], i1936.zFail)
  i1936.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1937[3], i1936.comp)
  return i1936
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i1940 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i1941 = data
  i1940.name = i1941[0]
  i1940.value = i1941[1]
  return i1940
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i1944 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i1945 = data
  var i1947 = i1945[0]
  var i1946 = []
  for(var i = 0; i < i1947.length; i += 1) {
    i1946.push( i1947[i + 0] );
  }
  i1944.keywords = i1946
  i1944.hasDiscard = !!i1945[1]
  return i1944
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i1950 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i1951 = data
  i1950.passId = i1951[0]
  i1950.subShaderIndex = i1951[1]
  var i1953 = i1951[2]
  var i1952 = []
  for(var i = 0; i < i1953.length; i += 1) {
    i1952.push( i1953[i + 0] );
  }
  i1950.keywords = i1952
  i1950.vertexProgram = i1951[3]
  i1950.fragmentProgram = i1951[4]
  i1950.exportedForWebGl2 = !!i1951[5]
  i1950.readDepth = !!i1951[6]
  return i1950
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i1956 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i1957 = data
  request.r(i1957[0], i1957[1], 0, i1956, 'shader')
  i1956.pass = i1957[2]
  return i1956
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i1960 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i1961 = data
  i1960.name = i1961[0]
  i1960.type = i1961[1]
  i1960.value = new pc.Vec4( i1961[2], i1961[3], i1961[4], i1961[5] )
  i1960.textureValue = i1961[6]
  i1960.shaderPropertyFlag = i1961[7]
  return i1960
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i1962 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i1963 = data
  i1962.name = i1963[0]
  request.r(i1963[1], i1963[2], 0, i1962, 'texture')
  i1962.aabb = i1963[3]
  i1962.vertices = i1963[4]
  i1962.triangles = i1963[5]
  i1962.textureRect = UnityEngine.Rect.MinMaxRect(i1963[6], i1963[7], i1963[8], i1963[9])
  i1962.packedRect = UnityEngine.Rect.MinMaxRect(i1963[10], i1963[11], i1963[12], i1963[13])
  i1962.border = new pc.Vec4( i1963[14], i1963[15], i1963[16], i1963[17] )
  i1962.transparency = i1963[18]
  i1962.bounds = i1963[19]
  i1962.pixelsPerUnit = i1963[20]
  i1962.textureWidth = i1963[21]
  i1962.textureHeight = i1963[22]
  i1962.nativeSize = new pc.Vec2( i1963[23], i1963[24] )
  i1962.pivot = new pc.Vec2( i1963[25], i1963[26] )
  i1962.textureRectOffset = new pc.Vec2( i1963[27], i1963[28] )
  return i1962
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i1964 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i1965 = data
  i1964.name = i1965[0]
  return i1964
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip"] = function (request, data, root) {
  var i1966 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip' )
  var i1967 = data
  i1966.name = i1967[0]
  i1966.wrapMode = i1967[1]
  i1966.isLooping = !!i1967[2]
  i1966.length = i1967[3]
  var i1969 = i1967[4]
  var i1968 = []
  for(var i = 0; i < i1969.length; i += 1) {
    i1968.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve', i1969[i + 0]) );
  }
  i1966.curves = i1968
  var i1971 = i1967[5]
  var i1970 = []
  for(var i = 0; i < i1971.length; i += 1) {
    i1970.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent', i1971[i + 0]) );
  }
  i1966.events = i1970
  i1966.halfPrecision = !!i1967[6]
  i1966._frameRate = i1967[7]
  i1966.localBounds = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds', i1967[8], i1966.localBounds)
  i1966.hasMuscleCurves = !!i1967[9]
  var i1973 = i1967[10]
  var i1972 = []
  for(var i = 0; i < i1973.length; i += 1) {
    i1972.push( i1973[i + 0] );
  }
  i1966.clipMuscleConstant = i1972
  i1966.clipBindingConstant = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant', i1967[11], i1966.clipBindingConstant)
  return i1966
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve"] = function (request, data, root) {
  var i1976 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve' )
  var i1977 = data
  i1976.path = i1977[0]
  i1976.hash = i1977[1]
  i1976.componentType = i1977[2]
  i1976.property = i1977[3]
  i1976.keys = i1977[4]
  var i1979 = i1977[5]
  var i1978 = []
  for(var i = 0; i < i1979.length; i += 1) {
    i1978.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey', i1979[i + 0]) );
  }
  i1976.objectReferenceKeys = i1978
  return i1976
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey"] = function (request, data, root) {
  var i1982 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey' )
  var i1983 = data
  i1982.time = i1983[0]
  request.r(i1983[1], i1983[2], 0, i1982, 'value')
  return i1982
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent"] = function (request, data, root) {
  var i1986 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent' )
  var i1987 = data
  i1986.functionName = i1987[0]
  i1986.floatParameter = i1987[1]
  i1986.intParameter = i1987[2]
  i1986.stringParameter = i1987[3]
  request.r(i1987[4], i1987[5], 0, i1986, 'objectReferenceParameter')
  i1986.time = i1987[6]
  return i1986
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds"] = function (request, data, root) {
  var i1988 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds' )
  var i1989 = data
  i1988.center = new pc.Vec3( i1989[0], i1989[1], i1989[2] )
  i1988.extends = new pc.Vec3( i1989[3], i1989[4], i1989[5] )
  return i1988
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant"] = function (request, data, root) {
  var i1992 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant' )
  var i1993 = data
  var i1995 = i1993[0]
  var i1994 = []
  for(var i = 0; i < i1995.length; i += 1) {
    i1994.push( i1995[i + 0] );
  }
  i1992.genericBindings = i1994
  var i1997 = i1993[1]
  var i1996 = []
  for(var i = 0; i < i1997.length; i += 1) {
    i1996.push( i1997[i + 0] );
  }
  i1992.pptrCurveMapping = i1996
  return i1992
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font"] = function (request, data, root) {
  var i1998 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font' )
  var i1999 = data
  i1998.name = i1999[0]
  i1998.ascent = i1999[1]
  i1998.originalLineHeight = i1999[2]
  i1998.fontSize = i1999[3]
  var i2001 = i1999[4]
  var i2000 = []
  for(var i = 0; i < i2001.length; i += 1) {
    i2000.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo', i2001[i + 0]) );
  }
  i1998.characterInfo = i2000
  request.r(i1999[5], i1999[6], 0, i1998, 'texture')
  i1998.originalFontSize = i1999[7]
  return i1998
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo"] = function (request, data, root) {
  var i2004 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo' )
  var i2005 = data
  i2004.index = i2005[0]
  i2004.advance = i2005[1]
  i2004.bearing = i2005[2]
  i2004.glyphWidth = i2005[3]
  i2004.glyphHeight = i2005[4]
  i2004.minX = i2005[5]
  i2004.maxX = i2005[6]
  i2004.minY = i2005[7]
  i2004.maxY = i2005[8]
  i2004.uvBottomLeftX = i2005[9]
  i2004.uvBottomLeftY = i2005[10]
  i2004.uvBottomRightX = i2005[11]
  i2004.uvBottomRightY = i2005[12]
  i2004.uvTopLeftX = i2005[13]
  i2004.uvTopLeftY = i2005[14]
  i2004.uvTopRightX = i2005[15]
  i2004.uvTopRightY = i2005[16]
  return i2004
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController"] = function (request, data, root) {
  var i2006 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController' )
  var i2007 = data
  i2006.name = i2007[0]
  var i2009 = i2007[1]
  var i2008 = []
  for(var i = 0; i < i2009.length; i += 1) {
    i2008.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer', i2009[i + 0]) );
  }
  i2006.layers = i2008
  var i2011 = i2007[2]
  var i2010 = []
  for(var i = 0; i < i2011.length; i += 1) {
    i2010.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter', i2011[i + 0]) );
  }
  i2006.parameters = i2010
  i2006.animationClips = i2007[3]
  i2006.avatarUnsupported = i2007[4]
  return i2006
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer"] = function (request, data, root) {
  var i2014 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer' )
  var i2015 = data
  i2014.name = i2015[0]
  i2014.defaultWeight = i2015[1]
  i2014.blendingMode = i2015[2]
  i2014.avatarMask = i2015[3]
  i2014.syncedLayerIndex = i2015[4]
  i2014.syncedLayerAffectsTiming = !!i2015[5]
  i2014.syncedLayers = i2015[6]
  i2014.stateMachine = request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i2015[7], i2014.stateMachine)
  return i2014
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine"] = function (request, data, root) {
  var i2016 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine' )
  var i2017 = data
  i2016.id = i2017[0]
  i2016.name = i2017[1]
  i2016.path = i2017[2]
  var i2019 = i2017[3]
  var i2018 = []
  for(var i = 0; i < i2019.length; i += 1) {
    i2018.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState', i2019[i + 0]) );
  }
  i2016.states = i2018
  var i2021 = i2017[4]
  var i2020 = []
  for(var i = 0; i < i2021.length; i += 1) {
    i2020.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i2021[i + 0]) );
  }
  i2016.machines = i2020
  var i2023 = i2017[5]
  var i2022 = []
  for(var i = 0; i < i2023.length; i += 1) {
    i2022.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i2023[i + 0]) );
  }
  i2016.entryStateTransitions = i2022
  var i2025 = i2017[6]
  var i2024 = []
  for(var i = 0; i < i2025.length; i += 1) {
    i2024.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i2025[i + 0]) );
  }
  i2016.exitStateTransitions = i2024
  var i2027 = i2017[7]
  var i2026 = []
  for(var i = 0; i < i2027.length; i += 1) {
    i2026.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i2027[i + 0]) );
  }
  i2016.anyStateTransitions = i2026
  i2016.defaultStateId = i2017[8]
  return i2016
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState"] = function (request, data, root) {
  var i2030 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState' )
  var i2031 = data
  i2030.id = i2031[0]
  i2030.name = i2031[1]
  i2030.cycleOffset = i2031[2]
  i2030.cycleOffsetParameter = i2031[3]
  i2030.cycleOffsetParameterActive = !!i2031[4]
  i2030.mirror = !!i2031[5]
  i2030.mirrorParameter = i2031[6]
  i2030.mirrorParameterActive = !!i2031[7]
  i2030.motionId = i2031[8]
  i2030.nameHash = i2031[9]
  i2030.fullPathHash = i2031[10]
  i2030.speed = i2031[11]
  i2030.speedParameter = i2031[12]
  i2030.speedParameterActive = !!i2031[13]
  i2030.tag = i2031[14]
  i2030.tagHash = i2031[15]
  i2030.writeDefaultValues = !!i2031[16]
  var i2033 = i2031[17]
  var i2032 = []
  for(var i = 0; i < i2033.length; i += 2) {
  request.r(i2033[i + 0], i2033[i + 1], 2, i2032, '')
  }
  i2030.behaviours = i2032
  var i2035 = i2031[18]
  var i2034 = []
  for(var i = 0; i < i2035.length; i += 1) {
    i2034.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i2035[i + 0]) );
  }
  i2030.transitions = i2034
  return i2030
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition"] = function (request, data, root) {
  var i2040 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition' )
  var i2041 = data
  i2040.fullPath = i2041[0]
  i2040.canTransitionToSelf = !!i2041[1]
  i2040.duration = i2041[2]
  i2040.exitTime = i2041[3]
  i2040.hasExitTime = !!i2041[4]
  i2040.hasFixedDuration = !!i2041[5]
  i2040.interruptionSource = i2041[6]
  i2040.offset = i2041[7]
  i2040.orderedInterruption = !!i2041[8]
  i2040.destinationStateId = i2041[9]
  i2040.isExit = !!i2041[10]
  i2040.mute = !!i2041[11]
  i2040.solo = !!i2041[12]
  var i2043 = i2041[13]
  var i2042 = []
  for(var i = 0; i < i2043.length; i += 1) {
    i2042.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i2043[i + 0]) );
  }
  i2040.conditions = i2042
  return i2040
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition"] = function (request, data, root) {
  var i2046 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition' )
  var i2047 = data
  i2046.mode = i2047[0]
  i2046.parameter = i2047[1]
  i2046.threshold = i2047[2]
  return i2046
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition"] = function (request, data, root) {
  var i2052 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition' )
  var i2053 = data
  i2052.destinationStateId = i2053[0]
  i2052.isExit = !!i2053[1]
  i2052.mute = !!i2053[2]
  i2052.solo = !!i2053[3]
  var i2055 = i2053[4]
  var i2054 = []
  for(var i = 0; i < i2055.length; i += 1) {
    i2054.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i2055[i + 0]) );
  }
  i2052.conditions = i2054
  return i2052
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter"] = function (request, data, root) {
  var i2058 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter' )
  var i2059 = data
  i2058.defaultBool = !!i2059[0]
  i2058.defaultFloat = i2059[1]
  i2058.defaultInt = i2059[2]
  i2058.name = i2059[3]
  i2058.nameHash = i2059[4]
  i2058.type = i2059[5]
  return i2058
}

Deserializers["DG.Tweening.Core.DOTweenSettings"] = function (request, data, root) {
  var i2060 = root || request.c( 'DG.Tweening.Core.DOTweenSettings' )
  var i2061 = data
  i2060.useSafeMode = !!i2061[0]
  i2060.safeModeOptions = request.d('DG.Tweening.Core.DOTweenSettings+SafeModeOptions', i2061[1], i2060.safeModeOptions)
  i2060.timeScale = i2061[2]
  i2060.unscaledTimeScale = i2061[3]
  i2060.useSmoothDeltaTime = !!i2061[4]
  i2060.maxSmoothUnscaledTime = i2061[5]
  i2060.rewindCallbackMode = i2061[6]
  i2060.showUnityEditorReport = !!i2061[7]
  i2060.logBehaviour = i2061[8]
  i2060.drawGizmos = !!i2061[9]
  i2060.defaultRecyclable = !!i2061[10]
  i2060.defaultAutoPlay = i2061[11]
  i2060.defaultUpdateType = i2061[12]
  i2060.defaultTimeScaleIndependent = !!i2061[13]
  i2060.defaultEaseType = i2061[14]
  i2060.defaultEaseOvershootOrAmplitude = i2061[15]
  i2060.defaultEasePeriod = i2061[16]
  i2060.defaultAutoKill = !!i2061[17]
  i2060.defaultLoopType = i2061[18]
  i2060.debugMode = !!i2061[19]
  i2060.debugStoreTargetId = !!i2061[20]
  i2060.showPreviewPanel = !!i2061[21]
  i2060.storeSettingsLocation = i2061[22]
  i2060.modules = request.d('DG.Tweening.Core.DOTweenSettings+ModulesSetup', i2061[23], i2060.modules)
  i2060.createASMDEF = !!i2061[24]
  i2060.showPlayingTweens = !!i2061[25]
  i2060.showPausedTweens = !!i2061[26]
  return i2060
}

Deserializers["DG.Tweening.Core.DOTweenSettings+SafeModeOptions"] = function (request, data, root) {
  var i2062 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+SafeModeOptions' )
  var i2063 = data
  i2062.logBehaviour = i2063[0]
  i2062.nestedTweenFailureBehaviour = i2063[1]
  return i2062
}

Deserializers["DG.Tweening.Core.DOTweenSettings+ModulesSetup"] = function (request, data, root) {
  var i2064 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+ModulesSetup' )
  var i2065 = data
  i2064.showPanel = !!i2065[0]
  i2064.audioEnabled = !!i2065[1]
  i2064.physicsEnabled = !!i2065[2]
  i2064.physics2DEnabled = !!i2065[3]
  i2064.spriteEnabled = !!i2065[4]
  i2064.uiEnabled = !!i2065[5]
  i2064.textMeshProEnabled = !!i2065[6]
  i2064.tk2DEnabled = !!i2065[7]
  i2064.deAudioEnabled = !!i2065[8]
  i2064.deUnityExtendedEnabled = !!i2065[9]
  i2064.epoOutlineEnabled = !!i2065[10]
  return i2064
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i2066 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i2067 = data
  var i2069 = i2067[0]
  var i2068 = []
  for(var i = 0; i < i2069.length; i += 1) {
    i2068.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i2069[i + 0]) );
  }
  i2066.files = i2068
  i2066.componentToPrefabIds = i2067[1]
  return i2066
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i2072 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i2073 = data
  i2072.path = i2073[0]
  request.r(i2073[1], i2073[2], 0, i2072, 'unityObject')
  return i2072
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i2074 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i2075 = data
  var i2077 = i2075[0]
  var i2076 = []
  for(var i = 0; i < i2077.length; i += 1) {
    i2076.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i2077[i + 0]) );
  }
  i2074.scriptsExecutionOrder = i2076
  var i2079 = i2075[1]
  var i2078 = []
  for(var i = 0; i < i2079.length; i += 1) {
    i2078.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i2079[i + 0]) );
  }
  i2074.sortingLayers = i2078
  var i2081 = i2075[2]
  var i2080 = []
  for(var i = 0; i < i2081.length; i += 1) {
    i2080.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i2081[i + 0]) );
  }
  i2074.cullingLayers = i2080
  i2074.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i2075[3], i2074.timeSettings)
  i2074.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i2075[4], i2074.physicsSettings)
  i2074.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i2075[5], i2074.physics2DSettings)
  i2074.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i2075[6], i2074.qualitySettings)
  i2074.enableRealtimeShadows = !!i2075[7]
  i2074.enableAutoInstancing = !!i2075[8]
  i2074.enableStaticBatching = !!i2075[9]
  i2074.enableDynamicBatching = !!i2075[10]
  i2074.usePreservativeDynamicBatching = !!i2075[11]
  i2074.lightmapEncodingQuality = i2075[12]
  i2074.desiredColorSpace = i2075[13]
  var i2083 = i2075[14]
  var i2082 = []
  for(var i = 0; i < i2083.length; i += 1) {
    i2082.push( i2083[i + 0] );
  }
  i2074.allTags = i2082
  return i2074
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i2086 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i2087 = data
  i2086.name = i2087[0]
  i2086.value = i2087[1]
  return i2086
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i2090 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i2091 = data
  i2090.id = i2091[0]
  i2090.name = i2091[1]
  i2090.value = i2091[2]
  return i2090
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i2094 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i2095 = data
  i2094.id = i2095[0]
  i2094.name = i2095[1]
  return i2094
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i2096 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i2097 = data
  i2096.fixedDeltaTime = i2097[0]
  i2096.maximumDeltaTime = i2097[1]
  i2096.timeScale = i2097[2]
  i2096.maximumParticleTimestep = i2097[3]
  return i2096
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i2098 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i2099 = data
  i2098.gravity = new pc.Vec3( i2099[0], i2099[1], i2099[2] )
  i2098.defaultSolverIterations = i2099[3]
  i2098.bounceThreshold = i2099[4]
  i2098.autoSyncTransforms = !!i2099[5]
  i2098.autoSimulation = !!i2099[6]
  var i2101 = i2099[7]
  var i2100 = []
  for(var i = 0; i < i2101.length; i += 1) {
    i2100.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i2101[i + 0]) );
  }
  i2098.collisionMatrix = i2100
  return i2098
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i2104 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i2105 = data
  i2104.enabled = !!i2105[0]
  i2104.layerId = i2105[1]
  i2104.otherLayerId = i2105[2]
  return i2104
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i2106 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i2107 = data
  request.r(i2107[0], i2107[1], 0, i2106, 'material')
  i2106.gravity = new pc.Vec2( i2107[2], i2107[3] )
  i2106.positionIterations = i2107[4]
  i2106.velocityIterations = i2107[5]
  i2106.velocityThreshold = i2107[6]
  i2106.maxLinearCorrection = i2107[7]
  i2106.maxAngularCorrection = i2107[8]
  i2106.maxTranslationSpeed = i2107[9]
  i2106.maxRotationSpeed = i2107[10]
  i2106.baumgarteScale = i2107[11]
  i2106.baumgarteTOIScale = i2107[12]
  i2106.timeToSleep = i2107[13]
  i2106.linearSleepTolerance = i2107[14]
  i2106.angularSleepTolerance = i2107[15]
  i2106.defaultContactOffset = i2107[16]
  i2106.autoSimulation = !!i2107[17]
  i2106.queriesHitTriggers = !!i2107[18]
  i2106.queriesStartInColliders = !!i2107[19]
  i2106.callbacksOnDisable = !!i2107[20]
  i2106.reuseCollisionCallbacks = !!i2107[21]
  i2106.autoSyncTransforms = !!i2107[22]
  var i2109 = i2107[23]
  var i2108 = []
  for(var i = 0; i < i2109.length; i += 1) {
    i2108.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i2109[i + 0]) );
  }
  i2106.collisionMatrix = i2108
  return i2106
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i2112 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i2113 = data
  i2112.enabled = !!i2113[0]
  i2112.layerId = i2113[1]
  i2112.otherLayerId = i2113[2]
  return i2112
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i2114 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i2115 = data
  var i2117 = i2115[0]
  var i2116 = []
  for(var i = 0; i < i2117.length; i += 1) {
    i2116.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i2117[i + 0]) );
  }
  i2114.qualityLevels = i2116
  var i2119 = i2115[1]
  var i2118 = []
  for(var i = 0; i < i2119.length; i += 1) {
    i2118.push( i2119[i + 0] );
  }
  i2114.names = i2118
  i2114.shadows = i2115[2]
  i2114.anisotropicFiltering = i2115[3]
  i2114.antiAliasing = i2115[4]
  i2114.lodBias = i2115[5]
  i2114.shadowCascades = i2115[6]
  i2114.shadowDistance = i2115[7]
  i2114.shadowmaskMode = i2115[8]
  i2114.shadowProjection = i2115[9]
  i2114.shadowResolution = i2115[10]
  i2114.softParticles = !!i2115[11]
  i2114.softVegetation = !!i2115[12]
  i2114.activeColorSpace = i2115[13]
  i2114.desiredColorSpace = i2115[14]
  i2114.masterTextureLimit = i2115[15]
  i2114.maxQueuedFrames = i2115[16]
  i2114.particleRaycastBudget = i2115[17]
  i2114.pixelLightCount = i2115[18]
  i2114.realtimeReflectionProbes = !!i2115[19]
  i2114.shadowCascade2Split = i2115[20]
  i2114.shadowCascade4Split = new pc.Vec3( i2115[21], i2115[22], i2115[23] )
  i2114.streamingMipmapsActive = !!i2115[24]
  i2114.vSyncCount = i2115[25]
  i2114.asyncUploadBufferSize = i2115[26]
  i2114.asyncUploadTimeSlice = i2115[27]
  i2114.billboardsFaceCameraPosition = !!i2115[28]
  i2114.shadowNearPlaneOffset = i2115[29]
  i2114.streamingMipmapsMemoryBudget = i2115[30]
  i2114.maximumLODLevel = i2115[31]
  i2114.streamingMipmapsAddAllCameras = !!i2115[32]
  i2114.streamingMipmapsMaxLevelReduction = i2115[33]
  i2114.streamingMipmapsRenderersPerFrame = i2115[34]
  i2114.resolutionScalingFixedDPIFactor = i2115[35]
  i2114.streamingMipmapsMaxFileIORequests = i2115[36]
  i2114.currentQualityLevel = i2115[37]
  return i2114
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame"] = function (request, data, root) {
  var i2124 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame' )
  var i2125 = data
  i2124.weight = i2125[0]
  i2124.vertices = i2125[1]
  i2124.normals = i2125[2]
  i2124.tangents = i2125[3]
  return i2124
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i2126 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i2127 = data
  request.r(i2127[0], i2127[1], 0, i2126, 'm_ObjectArgument')
  i2126.m_ObjectArgumentAssemblyTypeName = i2127[2]
  i2126.m_IntArgument = i2127[3]
  i2126.m_FloatArgument = i2127[4]
  i2126.m_StringArgument = i2127[5]
  i2126.m_BoolArgument = !!i2127[6]
  return i2126
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10,"graphicsFormat":11,"sRGBTexture":12,"desiredColorSpace":13,"wrapU":14,"wrapV":15},"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Components.Transform":{"position":0,"scale":3,"rotation":6},"Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer":{"color":0,"sprite":4,"flipX":6,"flipY":7,"drawMode":8,"size":9,"tileMode":11,"adaptiveModeThreshold":12,"maskInteraction":13,"spriteSortPoint":14,"enabled":15,"sharedMaterial":16,"sharedMaterials":18,"receiveShadows":19,"shadowCastingMode":20,"sortingLayerID":21,"sortingOrder":22,"lightmapIndex":23,"lightmapSceneIndex":24,"lightmapScaleOffset":25,"lightProbeUsage":29,"reflectionProbeUsage":30},"Luna.Unity.DTO.UnityEngine.Components.CircleCollider2D":{"radius":0,"enabled":1,"isTrigger":2,"usedByEffector":3,"density":4,"offset":5,"material":7},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D":{"usedByComposite":0,"autoTiling":1,"size":2,"edgeRadius":4,"enabled":5,"isTrigger":6,"usedByEffector":7,"density":8,"offset":9,"material":11},"Luna.Unity.DTO.UnityEngine.Components.Rigidbody2D":{"bodyType":0,"material":1,"simulated":3,"useAutoMass":4,"mass":5,"drag":6,"angularDrag":7,"gravityScale":8,"collisionDetectionMode":9,"sleepMode":10,"constraints":11},"Luna.Unity.DTO.UnityEngine.Components.Animator":{"animatorController":0,"avatar":2,"updateMode":4,"hasTransformHierarchy":5,"applyRootMotion":6,"humanBones":7,"enabled":8},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystem":{"main":0,"colorBySpeed":1,"colorOverLifetime":2,"emission":3,"rotationBySpeed":4,"rotationOverLifetime":5,"shape":6,"sizeBySpeed":7,"sizeOverLifetime":8,"textureSheetAnimation":9,"velocityOverLifetime":10,"noise":11,"inheritVelocity":12,"forceOverLifetime":13,"limitVelocityOverLifetime":14,"useAutoRandomSeed":15,"randomSeed":16},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule":{"duration":0,"loop":1,"prewarm":2,"startDelay":3,"startLifetime":4,"startSpeed":5,"startSize3D":6,"startSizeX":7,"startSizeY":8,"startSizeZ":9,"startRotation3D":10,"startRotationX":11,"startRotationY":12,"startRotationZ":13,"startColor":14,"gravityModifier":15,"simulationSpace":16,"customSimulationSpace":17,"simulationSpeed":19,"useUnscaledTime":20,"scalingMode":21,"playOnAwake":22,"maxParticles":23,"emitterVelocityMode":24,"stopAction":25},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve":{"mode":0,"curveMin":1,"curveMax":2,"curveMultiplier":3,"constantMin":4,"constantMax":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient":{"mode":0,"gradientMin":1,"gradientMax":2,"colorMin":3,"colorMax":7},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient":{"mode":0,"colorKeys":1,"alphaKeys":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule":{"enabled":0,"color":1,"range":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey":{"color":0,"time":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey":{"alpha":0,"time":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule":{"enabled":0,"color":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule":{"enabled":0,"rateOverTime":1,"rateOverDistance":2,"bursts":3},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst":{"count":0,"cycleCount":1,"minCount":2,"maxCount":3,"repeatInterval":4,"time":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule":{"enabled":0,"shapeType":1,"randomDirectionAmount":2,"sphericalDirectionAmount":3,"randomPositionAmount":4,"alignToDirection":5,"radius":6,"radiusMode":7,"radiusSpread":8,"radiusSpeed":9,"radiusThickness":10,"angle":11,"length":12,"boxThickness":13,"meshShapeType":16,"mesh":17,"meshRenderer":19,"skinnedMeshRenderer":21,"useMeshMaterialIndex":23,"meshMaterialIndex":24,"useMeshColors":25,"normalOffset":26,"arc":27,"arcMode":28,"arcSpread":29,"arcSpeed":30,"donutRadius":31,"position":32,"rotation":35,"scale":38},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule":{"enabled":0,"mode":1,"animation":2,"numTilesX":3,"numTilesY":4,"useRandomRow":5,"frameOverTime":6,"startFrame":7,"cycleCount":8,"rowIndex":9,"flipU":10,"flipV":11,"spriteCount":12,"sprites":13},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"radial":4,"speedModifier":5,"space":6,"orbitalX":7,"orbitalY":8,"orbitalZ":9,"orbitalOffsetX":10,"orbitalOffsetY":11,"orbitalOffsetZ":12},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule":{"enabled":0,"separateAxes":1,"strengthX":2,"strengthY":3,"strengthZ":4,"frequency":5,"damping":6,"octaveCount":7,"octaveMultiplier":8,"octaveScale":9,"quality":10,"scrollSpeed":11,"scrollSpeedMultiplier":12,"remapEnabled":13,"remapX":14,"remapY":15,"remapZ":16,"positionAmount":17,"rotationAmount":18,"sizeAmount":19},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule":{"enabled":0,"mode":1,"curve":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"space":4,"randomized":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule":{"enabled":0,"limit":1,"limitX":2,"limitY":3,"limitZ":4,"dampen":5,"separateAxes":6,"space":7,"drag":8,"multiplyDragByParticleSize":9,"multiplyDragByParticleVelocity":10},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer":{"mesh":0,"meshCount":2,"activeVertexStreamsCount":3,"alignment":4,"renderMode":5,"sortMode":6,"lengthScale":7,"velocityScale":8,"cameraVelocityScale":9,"normalDirection":10,"sortingFudge":11,"minParticleSize":12,"maxParticleSize":13,"pivot":14,"trailMaterial":17,"applyActiveColorSpace":19,"enabled":20,"sharedMaterial":21,"sharedMaterials":23,"receiveShadows":24,"shadowCastingMode":25,"sortingLayerID":26,"sortingOrder":27,"lightmapIndex":28,"lightmapSceneIndex":29,"lightmapScaleOffset":30,"lightProbeUsage":34,"reflectionProbeUsage":35},"Luna.Unity.DTO.UnityEngine.Assets.Mesh":{"name":0,"halfPrecision":1,"useSimplification":2,"useUInt32IndexFormat":3,"vertexCount":4,"aabb":5,"streams":6,"vertices":7,"subMeshes":8,"bindposes":9,"blendShapes":10},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh":{"triangles":0},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape":{"name":0,"frames":1},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"aspect":0,"orthographic":1,"orthographicSize":2,"backgroundColor":3,"nearClipPlane":7,"farClipPlane":8,"fieldOfView":9,"depth":10,"clearFlags":11,"cullingMask":12,"rect":13,"targetTexture":14,"usePhysicalProperties":16,"focalLength":17,"sensorSize":18,"lensShift":20,"gateFit":22,"commandBufferCount":23,"cameraType":24,"enabled":25},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"planeDistance":0,"referencePixelsPerUnit":1,"isFallbackOverlay":2,"renderMode":3,"renderOrder":4,"sortingLayerName":5,"sortingOrder":6,"scaleFactor":7,"worldCamera":8,"overrideSorting":10,"pixelPerfect":11,"targetDisplay":12,"overridePixelPerfect":13,"enabled":14},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Components.SortingGroup":{"sortingLayerIndex":0,"sortingOrder":1,"sortingLayerName":2,"enabled":3},"Luna.Unity.DTO.UnityEngine.Components.HingeJoint2D":{"useLimits":0,"limits":1,"useMotor":2,"motor":3,"anchor":4,"connectedAnchor":6,"autoConfigureConnectedAnchor":8,"connectedBody":9,"breakForce":11,"breakTorque":12,"enableCollision":13,"enabled":14},"Luna.Unity.DTO.UnityEngine.Components.TargetJoint2D":{"autoConfigureTarget":0,"target":1,"anchor":3,"maxForce":5,"dampingRatio":6,"frequency":7,"connectedBody":8,"breakForce":10,"breakTorque":11,"enableCollision":12,"enabled":13},"Luna.Unity.DTO.UnityEngine.Components.AudioSource":{"clip":0,"outputAudioMixerGroup":2,"playOnAwake":4,"loop":5,"time":6,"volume":7,"pitch":8,"enabled":9},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"customReflection":36,"defaultReflection":38,"defaultReflectionMode":40,"defaultReflectionResolution":41,"sunLightObjectId":42,"pixelLightCount":43,"defaultReflectionHDR":44,"hasLightDataAsset":45,"hasManualGenerate":46},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2,"shadowMask":4},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"hasDepthOnlyPass":10,"isCreatedByShaderGraph":11,"disableBatching":12,"compiled":13},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"exportedForWebGl2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.AudioClip":{"name":0},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip":{"name":0,"wrapMode":1,"isLooping":2,"length":3,"curves":4,"events":5,"halfPrecision":6,"_frameRate":7,"localBounds":8,"hasMuscleCurves":9,"clipMuscleConstant":10,"clipBindingConstant":11},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve":{"path":0,"hash":1,"componentType":2,"property":3,"keys":4,"objectReferenceKeys":5},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey":{"time":0,"value":1},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent":{"functionName":0,"floatParameter":1,"intParameter":2,"stringParameter":3,"objectReferenceParameter":4,"time":6},"Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds":{"center":0,"extends":3},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant":{"genericBindings":0,"pptrCurveMapping":1},"Luna.Unity.DTO.UnityEngine.Assets.Font":{"name":0,"ascent":1,"originalLineHeight":2,"fontSize":3,"characterInfo":4,"texture":5,"originalFontSize":7},"Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo":{"index":0,"advance":1,"bearing":2,"glyphWidth":3,"glyphHeight":4,"minX":5,"maxX":6,"minY":7,"maxY":8,"uvBottomLeftX":9,"uvBottomLeftY":10,"uvBottomRightX":11,"uvBottomRightY":12,"uvTopLeftX":13,"uvTopLeftY":14,"uvTopRightX":15,"uvTopRightY":16},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController":{"name":0,"layers":1,"parameters":2,"animationClips":3,"avatarUnsupported":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer":{"name":0,"defaultWeight":1,"blendingMode":2,"avatarMask":3,"syncedLayerIndex":4,"syncedLayerAffectsTiming":5,"syncedLayers":6,"stateMachine":7},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine":{"id":0,"name":1,"path":2,"states":3,"machines":4,"entryStateTransitions":5,"exitStateTransitions":6,"anyStateTransitions":7,"defaultStateId":8},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState":{"id":0,"name":1,"cycleOffset":2,"cycleOffsetParameter":3,"cycleOffsetParameterActive":4,"mirror":5,"mirrorParameter":6,"mirrorParameterActive":7,"motionId":8,"nameHash":9,"fullPathHash":10,"speed":11,"speedParameter":12,"speedParameterActive":13,"tag":14,"tagHash":15,"writeDefaultValues":16,"behaviours":17,"transitions":18},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition":{"fullPath":0,"canTransitionToSelf":1,"duration":2,"exitTime":3,"hasExitTime":4,"hasFixedDuration":5,"interruptionSource":6,"offset":7,"orderedInterruption":8,"destinationStateId":9,"isExit":10,"mute":11,"solo":12,"conditions":13},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition":{"mode":0,"parameter":1,"threshold":2},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition":{"destinationStateId":0,"isExit":1,"mute":2,"solo":3,"conditions":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter":{"defaultBool":0,"defaultFloat":1,"defaultInt":2,"name":3,"nameHash":4,"type":5},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableStaticBatching":9,"enableDynamicBatching":10,"usePreservativeDynamicBatching":11,"lightmapEncodingQuality":12,"desiredColorSpace":13,"allTags":14},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame":{"weight":0,"vertices":1,"normals":2,"tangents":3}}

Deserializers.requiredComponents = {"55":[56],"57":[56],"58":[56],"59":[56],"60":[56],"61":[56],"62":[63],"64":[20],"65":[66],"67":[66],"68":[66],"69":[66],"70":[66],"71":[66],"72":[11],"73":[11],"74":[11],"75":[11],"76":[11],"77":[11],"41":[11],"78":[11],"79":[11],"42":[11],"80":[11],"81":[11],"82":[11],"83":[20],"84":[85],"86":[87],"88":[87],"26":[25],"89":[2],"90":[20],"91":[92],"93":[25],"94":[29,25],"95":[85],"96":[29,25],"97":[25],"98":[25],"99":[85,25],"100":[25,29],"101":[102],"103":[102],"104":[102],"105":[25],"106":[25],"28":[26],"33":[29,25],"32":[25],"27":[26],"107":[25],"108":[25],"109":[25],"110":[25],"111":[25],"112":[25],"113":[25],"114":[25],"115":[25],"30":[29,25],"116":[25],"117":[25],"118":[25],"119":[25],"35":[29,25],"120":[25],"121":[23],"122":[23],"24":[23],"123":[23],"124":[20],"125":[20]}

Deserializers.types = ["UnityEngine.Shader","UnityEngine.Transform","UnityEngine.SpriteRenderer","UnityEngine.Sprite","UnityEngine.Material","UnityEngine.CircleCollider2D","UnityEngine.MonoBehaviour","BulletController","UnityEngine.AudioClip","UnityEngine.BoxCollider2D","KunaiController","UnityEngine.Rigidbody2D","BombController","UnityEngine.Animator","UnityEditor.Animations.AnimatorController","UnityEngine.ParticleSystem","UnityEngine.ParticleSystemRenderer","BlockController","UnityEngine.GameObject","UnityEngine.Mesh","UnityEngine.Camera","UnityEngine.AudioListener","UnityEngine.EventSystems.UIBehaviour","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","UnityEngine.RectTransform","UnityEngine.Canvas","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","UnityEngine.CanvasRenderer","UnityEngine.UI.RawImage","UnityEngine.Texture2D","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.Image","UnityEngine.UI.Button","UnityEngine.UI.Text","UnityEngine.Font","TutController","DG.Tweening.DOTweenAnimation","UnityEngine.Rendering.SortingGroup","PlayerController","UnityEngine.HingeJoint2D","UnityEngine.TargetJoint2D","ShootController","DropController","BalanceController","MonsterController","DefenseController","GameController","LayoutController","LunaController","AudioController","UnityEngine.AudioSource","VFXController","DG.Tweening.Core.DOTweenSettings","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.SkinnedMeshRenderer","UnityEngine.FlareLayer","UnityEngine.CharacterJoint","UnityEngine.Rigidbody","UnityEngine.ConfigurableJoint","UnityEngine.ConstantForce","UnityEngine.FixedJoint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.CompositeCollider2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.MeshRenderer","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","UnityEngine.U2D.Animation.SpriteSkin","UnityEngine.U2D.PixelPerfectCamera","UnityEngine.U2D.SpriteShapeController","UnityEngine.U2D.SpriteShapeRenderer","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text","TMPro.TextContainer","TMPro.TextMeshPro","TMPro.TextMeshProUGUI","Unity.VisualScripting.SceneVariables","Unity.VisualScripting.Variables","Unity.VisualScripting.ScriptMachine","Unity.VisualScripting.StateMachine","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.Mask","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RectMask2D","UnityEngine.UI.ScrollRect","UnityEngine.UI.Scrollbar","UnityEngine.UI.Slider","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster"]

Deserializers.unityVersion = "6000.0.78f1";

Deserializers.productName = "SSP_Luna-SSP_V03";

Deserializers.lunaInitializationTime = "07/10/2026 11:06:18";

Deserializers.lunaDaysRunning = "2.7";

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

Deserializers.buildPlatform = "Android";

Deserializers.applicationIdentifier = "com.DefaultCompany.SSP_LunaSSP_V03";

Deserializers.disableAntiAliasing = true;

Deserializers.graphicsConstraint = 24;

Deserializers.linearColorSpace = true;

Deserializers.buildID = "593ef186-5fd0-4169-9d0f-d689375473d5";

Deserializers.runtimeInitializeOnLoadInfos = [[["Unity","PerformanceTesting","PerformanceTest","ResetStaticsOnLoad"],["UnityEngine","U2D","Animation","GpuDeformationSystem","CreateFallbackBuffer"],["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"],["UnityEngine","AI","NavMesh","ClearPreUpdateListeners"]],[["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"]],[],[["Unity","PerformanceTesting","Data","RunSettings","ResetStaticsOnLoad"],["Unity","PerformanceTesting","PlayerCallbacks","ResetStaticsOnLoad"]]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

