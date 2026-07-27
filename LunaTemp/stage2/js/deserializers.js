var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i1662 = root || request.c( 'UnityEngine.JointSpring' )
  var i1663 = data
  i1662.spring = i1663[0]
  i1662.damper = i1663[1]
  i1662.targetPosition = i1663[2]
  return i1662
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i1664 = root || request.c( 'UnityEngine.JointMotor' )
  var i1665 = data
  i1664.m_TargetVelocity = i1665[0]
  i1664.m_Force = i1665[1]
  i1664.m_FreeSpin = i1665[2]
  return i1664
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i1666 = root || request.c( 'UnityEngine.JointLimits' )
  var i1667 = data
  i1666.m_Min = i1667[0]
  i1666.m_Max = i1667[1]
  i1666.m_Bounciness = i1667[2]
  i1666.m_BounceMinVelocity = i1667[3]
  i1666.m_ContactDistance = i1667[4]
  i1666.minBounce = i1667[5]
  i1666.maxBounce = i1667[6]
  return i1666
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i1668 = root || request.c( 'UnityEngine.JointDrive' )
  var i1669 = data
  i1668.m_PositionSpring = i1669[0]
  i1668.m_PositionDamper = i1669[1]
  i1668.m_MaximumForce = i1669[2]
  i1668.m_UseAcceleration = i1669[3]
  return i1668
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i1670 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i1671 = data
  i1670.m_Spring = i1671[0]
  i1670.m_Damper = i1671[1]
  return i1670
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i1672 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i1673 = data
  i1672.m_Limit = i1673[0]
  i1672.m_Bounciness = i1673[1]
  i1672.m_ContactDistance = i1673[2]
  return i1672
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i1674 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i1675 = data
  i1674.m_ExtremumSlip = i1675[0]
  i1674.m_ExtremumValue = i1675[1]
  i1674.m_AsymptoteSlip = i1675[2]
  i1674.m_AsymptoteValue = i1675[3]
  i1674.m_Stiffness = i1675[4]
  return i1674
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i1676 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i1677 = data
  i1676.m_LowerAngle = i1677[0]
  i1676.m_UpperAngle = i1677[1]
  return i1676
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i1678 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i1679 = data
  i1678.m_MotorSpeed = i1679[0]
  i1678.m_MaximumMotorTorque = i1679[1]
  return i1678
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i1680 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i1681 = data
  i1680.m_DampingRatio = i1681[0]
  i1680.m_Frequency = i1681[1]
  i1680.m_Angle = i1681[2]
  return i1680
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i1682 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i1683 = data
  i1682.m_LowerTranslation = i1683[0]
  i1682.m_UpperTranslation = i1683[1]
  return i1682
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i1684 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i1685 = data
  i1684.name = i1685[0]
  i1684.width = i1685[1]
  i1684.height = i1685[2]
  i1684.mipmapCount = i1685[3]
  i1684.anisoLevel = i1685[4]
  i1684.filterMode = i1685[5]
  i1684.hdr = !!i1685[6]
  i1684.format = i1685[7]
  i1684.wrapMode = i1685[8]
  i1684.alphaIsTransparency = !!i1685[9]
  i1684.alphaSource = i1685[10]
  i1684.graphicsFormat = i1685[11]
  i1684.sRGBTexture = !!i1685[12]
  i1684.desiredColorSpace = i1685[13]
  i1684.wrapU = i1685[14]
  i1684.wrapV = i1685[15]
  return i1684
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i1686 = root || new pc.UnityMaterial()
  var i1687 = data
  i1686.name = i1687[0]
  request.r(i1687[1], i1687[2], 0, i1686, 'shader')
  i1686.renderQueue = i1687[3]
  i1686.enableInstancing = !!i1687[4]
  var i1689 = i1687[5]
  var i1688 = []
  for(var i = 0; i < i1689.length; i += 1) {
    i1688.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i1689[i + 0]) );
  }
  i1686.floatParameters = i1688
  var i1691 = i1687[6]
  var i1690 = []
  for(var i = 0; i < i1691.length; i += 1) {
    i1690.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i1691[i + 0]) );
  }
  i1686.colorParameters = i1690
  var i1693 = i1687[7]
  var i1692 = []
  for(var i = 0; i < i1693.length; i += 1) {
    i1692.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i1693[i + 0]) );
  }
  i1686.vectorParameters = i1692
  var i1695 = i1687[8]
  var i1694 = []
  for(var i = 0; i < i1695.length; i += 1) {
    i1694.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i1695[i + 0]) );
  }
  i1686.textureParameters = i1694
  var i1697 = i1687[9]
  var i1696 = []
  for(var i = 0; i < i1697.length; i += 1) {
    i1696.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i1697[i + 0]) );
  }
  i1686.materialFlags = i1696
  return i1686
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i1700 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i1701 = data
  i1700.name = i1701[0]
  i1700.value = i1701[1]
  return i1700
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i1704 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i1705 = data
  i1704.name = i1705[0]
  i1704.value = new pc.Color(i1705[1], i1705[2], i1705[3], i1705[4])
  return i1704
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i1708 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i1709 = data
  i1708.name = i1709[0]
  i1708.value = new pc.Vec4( i1709[1], i1709[2], i1709[3], i1709[4] )
  return i1708
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i1712 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i1713 = data
  i1712.name = i1713[0]
  request.r(i1713[1], i1713[2], 0, i1712, 'value')
  return i1712
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i1716 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i1717 = data
  i1716.name = i1717[0]
  i1716.enabled = !!i1717[1]
  return i1716
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh"] = function (request, data, root) {
  var i1718 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh' )
  var i1719 = data
  i1718.name = i1719[0]
  i1718.halfPrecision = !!i1719[1]
  i1718.useSimplification = !!i1719[2]
  i1718.useUInt32IndexFormat = !!i1719[3]
  i1718.vertexCount = i1719[4]
  i1718.aabb = i1719[5]
  var i1721 = i1719[6]
  var i1720 = []
  for(var i = 0; i < i1721.length; i += 1) {
    i1720.push( !!i1721[i + 0] );
  }
  i1718.streams = i1720
  i1718.vertices = i1719[7]
  var i1723 = i1719[8]
  var i1722 = []
  for(var i = 0; i < i1723.length; i += 1) {
    i1722.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh', i1723[i + 0]) );
  }
  i1718.subMeshes = i1722
  var i1725 = i1719[9]
  var i1724 = []
  for(var i = 0; i < i1725.length; i += 16) {
    i1724.push( new pc.Mat4().setData(i1725[i + 0], i1725[i + 1], i1725[i + 2], i1725[i + 3],  i1725[i + 4], i1725[i + 5], i1725[i + 6], i1725[i + 7],  i1725[i + 8], i1725[i + 9], i1725[i + 10], i1725[i + 11],  i1725[i + 12], i1725[i + 13], i1725[i + 14], i1725[i + 15]) );
  }
  i1718.bindposes = i1724
  var i1727 = i1719[10]
  var i1726 = []
  for(var i = 0; i < i1727.length; i += 1) {
    i1726.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape', i1727[i + 0]) );
  }
  i1718.blendShapes = i1726
  return i1718
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh"] = function (request, data, root) {
  var i1732 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh' )
  var i1733 = data
  i1732.triangles = i1733[0]
  return i1732
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape"] = function (request, data, root) {
  var i1738 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape' )
  var i1739 = data
  i1738.name = i1739[0]
  var i1741 = i1739[1]
  var i1740 = []
  for(var i = 0; i < i1741.length; i += 1) {
    i1740.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame', i1741[i + 0]) );
  }
  i1738.frames = i1740
  return i1738
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i1742 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i1743 = data
  i1742.position = new pc.Vec3( i1743[0], i1743[1], i1743[2] )
  i1742.scale = new pc.Vec3( i1743[3], i1743[4], i1743[5] )
  i1742.rotation = new pc.Quat(i1743[6], i1743[7], i1743[8], i1743[9])
  return i1742
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystem"] = function (request, data, root) {
  var i1744 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystem' )
  var i1745 = data
  i1744.main = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule', i1745[0], i1744.main)
  i1744.colorBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule', i1745[1], i1744.colorBySpeed)
  i1744.colorOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule', i1745[2], i1744.colorOverLifetime)
  i1744.emission = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule', i1745[3], i1744.emission)
  i1744.rotationBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule', i1745[4], i1744.rotationBySpeed)
  i1744.rotationOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule', i1745[5], i1744.rotationOverLifetime)
  i1744.shape = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule', i1745[6], i1744.shape)
  i1744.sizeBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule', i1745[7], i1744.sizeBySpeed)
  i1744.sizeOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule', i1745[8], i1744.sizeOverLifetime)
  i1744.textureSheetAnimation = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule', i1745[9], i1744.textureSheetAnimation)
  i1744.velocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule', i1745[10], i1744.velocityOverLifetime)
  i1744.noise = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule', i1745[11], i1744.noise)
  i1744.inheritVelocity = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule', i1745[12], i1744.inheritVelocity)
  i1744.forceOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule', i1745[13], i1744.forceOverLifetime)
  i1744.limitVelocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule', i1745[14], i1744.limitVelocityOverLifetime)
  i1744.useAutoRandomSeed = !!i1745[15]
  i1744.randomSeed = i1745[16]
  return i1744
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule"] = function (request, data, root) {
  var i1746 = root || new pc.ParticleSystemMain()
  var i1747 = data
  i1746.duration = i1747[0]
  i1746.loop = !!i1747[1]
  i1746.prewarm = !!i1747[2]
  i1746.startDelay = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1747[3], i1746.startDelay)
  i1746.startLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1747[4], i1746.startLifetime)
  i1746.startSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1747[5], i1746.startSpeed)
  i1746.startSize3D = !!i1747[6]
  i1746.startSizeX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1747[7], i1746.startSizeX)
  i1746.startSizeY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1747[8], i1746.startSizeY)
  i1746.startSizeZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1747[9], i1746.startSizeZ)
  i1746.startRotation3D = !!i1747[10]
  i1746.startRotationX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1747[11], i1746.startRotationX)
  i1746.startRotationY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1747[12], i1746.startRotationY)
  i1746.startRotationZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1747[13], i1746.startRotationZ)
  i1746.startColor = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i1747[14], i1746.startColor)
  i1746.gravityModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1747[15], i1746.gravityModifier)
  i1746.simulationSpace = i1747[16]
  request.r(i1747[17], i1747[18], 0, i1746, 'customSimulationSpace')
  i1746.simulationSpeed = i1747[19]
  i1746.useUnscaledTime = !!i1747[20]
  i1746.scalingMode = i1747[21]
  i1746.playOnAwake = !!i1747[22]
  i1746.maxParticles = i1747[23]
  i1746.emitterVelocityMode = i1747[24]
  i1746.stopAction = i1747[25]
  return i1746
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve"] = function (request, data, root) {
  var i1748 = root || new pc.MinMaxCurve()
  var i1749 = data
  i1748.mode = i1749[0]
  i1748.curveMin = new pc.AnimationCurve( { keys_flow: i1749[1] } )
  i1748.curveMax = new pc.AnimationCurve( { keys_flow: i1749[2] } )
  i1748.curveMultiplier = i1749[3]
  i1748.constantMin = i1749[4]
  i1748.constantMax = i1749[5]
  return i1748
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient"] = function (request, data, root) {
  var i1750 = root || new pc.MinMaxGradient()
  var i1751 = data
  i1750.mode = i1751[0]
  i1750.gradientMin = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i1751[1], i1750.gradientMin)
  i1750.gradientMax = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i1751[2], i1750.gradientMax)
  i1750.colorMin = new pc.Color(i1751[3], i1751[4], i1751[5], i1751[6])
  i1750.colorMax = new pc.Color(i1751[7], i1751[8], i1751[9], i1751[10])
  return i1750
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient"] = function (request, data, root) {
  var i1752 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient' )
  var i1753 = data
  i1752.mode = i1753[0]
  var i1755 = i1753[1]
  var i1754 = []
  for(var i = 0; i < i1755.length; i += 1) {
    i1754.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey', i1755[i + 0]) );
  }
  i1752.colorKeys = i1754
  var i1757 = i1753[2]
  var i1756 = []
  for(var i = 0; i < i1757.length; i += 1) {
    i1756.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey', i1757[i + 0]) );
  }
  i1752.alphaKeys = i1756
  return i1752
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule"] = function (request, data, root) {
  var i1758 = root || new pc.ParticleSystemColorBySpeed()
  var i1759 = data
  i1758.enabled = !!i1759[0]
  i1758.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i1759[1], i1758.color)
  i1758.range = new pc.Vec2( i1759[2], i1759[3] )
  return i1758
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey"] = function (request, data, root) {
  var i1762 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey' )
  var i1763 = data
  i1762.color = new pc.Color(i1763[0], i1763[1], i1763[2], i1763[3])
  i1762.time = i1763[4]
  return i1762
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey"] = function (request, data, root) {
  var i1766 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey' )
  var i1767 = data
  i1766.alpha = i1767[0]
  i1766.time = i1767[1]
  return i1766
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule"] = function (request, data, root) {
  var i1768 = root || new pc.ParticleSystemColorOverLifetime()
  var i1769 = data
  i1768.enabled = !!i1769[0]
  i1768.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i1769[1], i1768.color)
  return i1768
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule"] = function (request, data, root) {
  var i1770 = root || new pc.ParticleSystemEmitter()
  var i1771 = data
  i1770.enabled = !!i1771[0]
  i1770.rateOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1771[1], i1770.rateOverTime)
  i1770.rateOverDistance = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1771[2], i1770.rateOverDistance)
  var i1773 = i1771[3]
  var i1772 = []
  for(var i = 0; i < i1773.length; i += 1) {
    i1772.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst', i1773[i + 0]) );
  }
  i1770.bursts = i1772
  return i1770
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst"] = function (request, data, root) {
  var i1776 = root || new pc.ParticleSystemBurst()
  var i1777 = data
  i1776.count = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1777[0], i1776.count)
  i1776.cycleCount = i1777[1]
  i1776.minCount = i1777[2]
  i1776.maxCount = i1777[3]
  i1776.repeatInterval = i1777[4]
  i1776.time = i1777[5]
  return i1776
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule"] = function (request, data, root) {
  var i1778 = root || new pc.ParticleSystemRotationBySpeed()
  var i1779 = data
  i1778.enabled = !!i1779[0]
  i1778.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1779[1], i1778.x)
  i1778.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1779[2], i1778.y)
  i1778.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1779[3], i1778.z)
  i1778.separateAxes = !!i1779[4]
  i1778.range = new pc.Vec2( i1779[5], i1779[6] )
  return i1778
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule"] = function (request, data, root) {
  var i1780 = root || new pc.ParticleSystemRotationOverLifetime()
  var i1781 = data
  i1780.enabled = !!i1781[0]
  i1780.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1781[1], i1780.x)
  i1780.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1781[2], i1780.y)
  i1780.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1781[3], i1780.z)
  i1780.separateAxes = !!i1781[4]
  return i1780
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule"] = function (request, data, root) {
  var i1782 = root || new pc.ParticleSystemShape()
  var i1783 = data
  i1782.enabled = !!i1783[0]
  i1782.shapeType = i1783[1]
  i1782.randomDirectionAmount = i1783[2]
  i1782.sphericalDirectionAmount = i1783[3]
  i1782.randomPositionAmount = i1783[4]
  i1782.alignToDirection = !!i1783[5]
  i1782.radius = i1783[6]
  i1782.radiusMode = i1783[7]
  i1782.radiusSpread = i1783[8]
  i1782.radiusSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1783[9], i1782.radiusSpeed)
  i1782.radiusThickness = i1783[10]
  i1782.angle = i1783[11]
  i1782.length = i1783[12]
  i1782.boxThickness = new pc.Vec3( i1783[13], i1783[14], i1783[15] )
  i1782.meshShapeType = i1783[16]
  request.r(i1783[17], i1783[18], 0, i1782, 'mesh')
  request.r(i1783[19], i1783[20], 0, i1782, 'meshRenderer')
  request.r(i1783[21], i1783[22], 0, i1782, 'skinnedMeshRenderer')
  i1782.useMeshMaterialIndex = !!i1783[23]
  i1782.meshMaterialIndex = i1783[24]
  i1782.useMeshColors = !!i1783[25]
  i1782.normalOffset = i1783[26]
  i1782.arc = i1783[27]
  i1782.arcMode = i1783[28]
  i1782.arcSpread = i1783[29]
  i1782.arcSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1783[30], i1782.arcSpeed)
  i1782.donutRadius = i1783[31]
  i1782.position = new pc.Vec3( i1783[32], i1783[33], i1783[34] )
  i1782.rotation = new pc.Vec3( i1783[35], i1783[36], i1783[37] )
  i1782.scale = new pc.Vec3( i1783[38], i1783[39], i1783[40] )
  return i1782
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule"] = function (request, data, root) {
  var i1784 = root || new pc.ParticleSystemSizeBySpeed()
  var i1785 = data
  i1784.enabled = !!i1785[0]
  i1784.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1785[1], i1784.x)
  i1784.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1785[2], i1784.y)
  i1784.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1785[3], i1784.z)
  i1784.separateAxes = !!i1785[4]
  i1784.range = new pc.Vec2( i1785[5], i1785[6] )
  return i1784
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule"] = function (request, data, root) {
  var i1786 = root || new pc.ParticleSystemSizeOverLifetime()
  var i1787 = data
  i1786.enabled = !!i1787[0]
  i1786.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1787[1], i1786.x)
  i1786.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1787[2], i1786.y)
  i1786.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1787[3], i1786.z)
  i1786.separateAxes = !!i1787[4]
  return i1786
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule"] = function (request, data, root) {
  var i1788 = root || new pc.ParticleSystemTextureSheetAnimation()
  var i1789 = data
  i1788.enabled = !!i1789[0]
  i1788.mode = i1789[1]
  i1788.animation = i1789[2]
  i1788.numTilesX = i1789[3]
  i1788.numTilesY = i1789[4]
  i1788.useRandomRow = !!i1789[5]
  i1788.frameOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1789[6], i1788.frameOverTime)
  i1788.startFrame = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1789[7], i1788.startFrame)
  i1788.cycleCount = i1789[8]
  i1788.rowIndex = i1789[9]
  i1788.flipU = i1789[10]
  i1788.flipV = i1789[11]
  i1788.spriteCount = i1789[12]
  var i1791 = i1789[13]
  var i1790 = []
  for(var i = 0; i < i1791.length; i += 2) {
  request.r(i1791[i + 0], i1791[i + 1], 2, i1790, '')
  }
  i1788.sprites = i1790
  return i1788
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule"] = function (request, data, root) {
  var i1794 = root || new pc.ParticleSystemVelocityOverLifetime()
  var i1795 = data
  i1794.enabled = !!i1795[0]
  i1794.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1795[1], i1794.x)
  i1794.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1795[2], i1794.y)
  i1794.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1795[3], i1794.z)
  i1794.radial = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1795[4], i1794.radial)
  i1794.speedModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1795[5], i1794.speedModifier)
  i1794.space = i1795[6]
  i1794.orbitalX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1795[7], i1794.orbitalX)
  i1794.orbitalY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1795[8], i1794.orbitalY)
  i1794.orbitalZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1795[9], i1794.orbitalZ)
  i1794.orbitalOffsetX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1795[10], i1794.orbitalOffsetX)
  i1794.orbitalOffsetY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1795[11], i1794.orbitalOffsetY)
  i1794.orbitalOffsetZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1795[12], i1794.orbitalOffsetZ)
  return i1794
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule"] = function (request, data, root) {
  var i1796 = root || new pc.ParticleSystemNoise()
  var i1797 = data
  i1796.enabled = !!i1797[0]
  i1796.separateAxes = !!i1797[1]
  i1796.strengthX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1797[2], i1796.strengthX)
  i1796.strengthY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1797[3], i1796.strengthY)
  i1796.strengthZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1797[4], i1796.strengthZ)
  i1796.frequency = i1797[5]
  i1796.damping = !!i1797[6]
  i1796.octaveCount = i1797[7]
  i1796.octaveMultiplier = i1797[8]
  i1796.octaveScale = i1797[9]
  i1796.quality = i1797[10]
  i1796.scrollSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1797[11], i1796.scrollSpeed)
  i1796.scrollSpeedMultiplier = i1797[12]
  i1796.remapEnabled = !!i1797[13]
  i1796.remapX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1797[14], i1796.remapX)
  i1796.remapY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1797[15], i1796.remapY)
  i1796.remapZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1797[16], i1796.remapZ)
  i1796.positionAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1797[17], i1796.positionAmount)
  i1796.rotationAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1797[18], i1796.rotationAmount)
  i1796.sizeAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1797[19], i1796.sizeAmount)
  return i1796
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule"] = function (request, data, root) {
  var i1798 = root || new pc.ParticleSystemInheritVelocity()
  var i1799 = data
  i1798.enabled = !!i1799[0]
  i1798.mode = i1799[1]
  i1798.curve = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1799[2], i1798.curve)
  return i1798
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule"] = function (request, data, root) {
  var i1800 = root || new pc.ParticleSystemForceOverLifetime()
  var i1801 = data
  i1800.enabled = !!i1801[0]
  i1800.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1801[1], i1800.x)
  i1800.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1801[2], i1800.y)
  i1800.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1801[3], i1800.z)
  i1800.space = i1801[4]
  i1800.randomized = !!i1801[5]
  return i1800
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule"] = function (request, data, root) {
  var i1802 = root || new pc.ParticleSystemLimitVelocityOverLifetime()
  var i1803 = data
  i1802.enabled = !!i1803[0]
  i1802.limit = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1803[1], i1802.limit)
  i1802.limitX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1803[2], i1802.limitX)
  i1802.limitY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1803[3], i1802.limitY)
  i1802.limitZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1803[4], i1802.limitZ)
  i1802.dampen = i1803[5]
  i1802.separateAxes = !!i1803[6]
  i1802.space = i1803[7]
  i1802.drag = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1803[8], i1802.drag)
  i1802.multiplyDragByParticleSize = !!i1803[9]
  i1802.multiplyDragByParticleVelocity = !!i1803[10]
  return i1802
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer"] = function (request, data, root) {
  var i1804 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer' )
  var i1805 = data
  request.r(i1805[0], i1805[1], 0, i1804, 'mesh')
  i1804.meshCount = i1805[2]
  i1804.activeVertexStreamsCount = i1805[3]
  i1804.alignment = i1805[4]
  i1804.renderMode = i1805[5]
  i1804.sortMode = i1805[6]
  i1804.lengthScale = i1805[7]
  i1804.velocityScale = i1805[8]
  i1804.cameraVelocityScale = i1805[9]
  i1804.normalDirection = i1805[10]
  i1804.sortingFudge = i1805[11]
  i1804.minParticleSize = i1805[12]
  i1804.maxParticleSize = i1805[13]
  i1804.pivot = new pc.Vec3( i1805[14], i1805[15], i1805[16] )
  request.r(i1805[17], i1805[18], 0, i1804, 'trailMaterial')
  i1804.applyActiveColorSpace = !!i1805[19]
  i1804.enabled = !!i1805[20]
  request.r(i1805[21], i1805[22], 0, i1804, 'sharedMaterial')
  var i1807 = i1805[23]
  var i1806 = []
  for(var i = 0; i < i1807.length; i += 2) {
  request.r(i1807[i + 0], i1807[i + 1], 2, i1806, '')
  }
  i1804.sharedMaterials = i1806
  i1804.receiveShadows = !!i1805[24]
  i1804.shadowCastingMode = i1805[25]
  i1804.sortingLayerID = i1805[26]
  i1804.sortingOrder = i1805[27]
  i1804.lightmapIndex = i1805[28]
  i1804.lightmapSceneIndex = i1805[29]
  i1804.lightmapScaleOffset = new pc.Vec4( i1805[30], i1805[31], i1805[32], i1805[33] )
  i1804.lightProbeUsage = i1805[34]
  i1804.reflectionProbeUsage = i1805[35]
  return i1804
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i1810 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i1811 = data
  i1810.name = i1811[0]
  i1810.tagId = i1811[1]
  i1810.enabled = !!i1811[2]
  i1810.isStatic = !!i1811[3]
  i1810.layer = i1811[4]
  return i1810
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Cubemap"] = function (request, data, root) {
  var i1812 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Cubemap' )
  var i1813 = data
  i1812.name = i1813[0]
  i1812.atlasId = i1813[1]
  i1812.mipmapCount = i1813[2]
  i1812.hdr = !!i1813[3]
  i1812.size = i1813[4]
  i1812.anisoLevel = i1813[5]
  i1812.filterMode = i1813[6]
  var i1815 = i1813[7]
  var i1814 = []
  for(var i = 0; i < i1815.length; i += 4) {
    i1814.push( UnityEngine.Rect.MinMaxRect(i1815[i + 0], i1815[i + 1], i1815[i + 2], i1815[i + 3]) );
  }
  i1812.rects = i1814
  i1812.wrapU = i1813[8]
  i1812.wrapV = i1813[9]
  return i1812
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i1818 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i1819 = data
  i1818.name = i1819[0]
  i1818.index = i1819[1]
  i1818.startup = !!i1819[2]
  return i1818
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i1820 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i1821 = data
  i1820.aspect = i1821[0]
  i1820.orthographic = !!i1821[1]
  i1820.orthographicSize = i1821[2]
  i1820.backgroundColor = new pc.Color(i1821[3], i1821[4], i1821[5], i1821[6])
  i1820.nearClipPlane = i1821[7]
  i1820.farClipPlane = i1821[8]
  i1820.fieldOfView = i1821[9]
  i1820.depth = i1821[10]
  i1820.clearFlags = i1821[11]
  i1820.cullingMask = i1821[12]
  i1820.rect = i1821[13]
  request.r(i1821[14], i1821[15], 0, i1820, 'targetTexture')
  i1820.usePhysicalProperties = !!i1821[16]
  i1820.focalLength = i1821[17]
  i1820.sensorSize = new pc.Vec2( i1821[18], i1821[19] )
  i1820.lensShift = new pc.Vec2( i1821[20], i1821[21] )
  i1820.gateFit = i1821[22]
  i1820.commandBufferCount = i1821[23]
  i1820.cameraType = i1821[24]
  i1820.enabled = !!i1821[25]
  return i1820
}

Deserializers["CameraController"] = function (request, data, root) {
  var i1822 = root || request.c( 'CameraController' )
  var i1823 = data
  request.r(i1823[0], i1823[1], 0, i1822, 'cam')
  i1822.por = i1823[2]
  i1822.land = i1823[3]
  return i1822
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i1824 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i1825 = data
  request.r(i1825[0], i1825[1], 0, i1824, 'm_FirstSelected')
  i1824.m_sendNavigationEvents = !!i1825[2]
  i1824.m_DragThreshold = i1825[3]
  return i1824
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i1826 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i1827 = data
  i1826.m_HorizontalAxis = i1827[0]
  i1826.m_VerticalAxis = i1827[1]
  i1826.m_SubmitButton = i1827[2]
  i1826.m_CancelButton = i1827[3]
  i1826.m_InputActionsPerSecond = i1827[4]
  i1826.m_RepeatDelay = i1827[5]
  i1826.m_ForceModuleActive = !!i1827[6]
  i1826.m_SendPointerHoverToParent = !!i1827[7]
  return i1826
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Light"] = function (request, data, root) {
  var i1828 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Light' )
  var i1829 = data
  i1828.type = i1829[0]
  i1828.color = new pc.Color(i1829[1], i1829[2], i1829[3], i1829[4])
  i1828.cullingMask = i1829[5]
  i1828.intensity = i1829[6]
  i1828.range = i1829[7]
  i1828.spotAngle = i1829[8]
  i1828.shadows = i1829[9]
  i1828.shadowNormalBias = i1829[10]
  i1828.shadowBias = i1829[11]
  i1828.shadowStrength = i1829[12]
  i1828.shadowResolution = i1829[13]
  i1828.lightmapBakeType = i1829[14]
  i1828.renderMode = i1829[15]
  request.r(i1829[16], i1829[17], 0, i1828, 'cookie')
  i1828.cookieSize = i1829[18]
  i1828.shadowNearPlane = i1829[19]
  i1828.occlusionMaskChannel = i1829[20]
  i1828.isBaked = !!i1829[21]
  i1828.mixedLightingMode = i1829[22]
  i1828.enabled = !!i1829[23]
  return i1828
}

Deserializers["GameController"] = function (request, data, root) {
  var i1830 = root || request.c( 'GameController' )
  var i1831 = data
  i1830.currentPhase = i1831[0]
  var i1833 = i1831[1]
  var i1832 = new (System.Collections.Generic.List$1(Bridge.ns('Phase')))
  for(var i = 0; i < i1833.length; i += 1) {
    i1832.add(request.d('Phase', i1833[i + 0]));
  }
  i1830.phases = i1832
  var i1835 = i1831[2]
  var i1834 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.UI.Button')))
  for(var i = 0; i < i1835.length; i += 2) {
  request.r(i1835[i + 0], i1835[i + 1], 1, i1834, '')
  }
  i1830.nextButton = i1834
  request.r(i1831[3], i1831[4], 0, i1830, 'nextSound')
  return i1830
}

Deserializers["Phase"] = function (request, data, root) {
  var i1838 = root || request.c( 'Phase' )
  var i1839 = data
  request.r(i1839[0], i1839[1], 0, i1838, 'Game')
  request.r(i1839[2], i1839[3], 0, i1838, 'UI')
  return i1838
}

Deserializers["LunaController"] = function (request, data, root) {
  var i1842 = root || request.c( 'LunaController' )
  var i1843 = data
  i1842.PortraitCameraZoom = i1843[0]
  i1842.LandscapeCameraZoom = i1843[1]
  i1842.TimePlay = i1843[2]
  i1842.LimitTimePlay = !!i1843[3]
  i1842.UseCustomBG = !!i1843[4]
  request.r(i1843[5], i1843[6], 0, i1842, 'BGTexture')
  request.r(i1843[7], i1843[8], 0, i1842, 'BGM')
  i1842.Phase1TextColor = new pc.Color(i1843[9], i1843[10], i1843[11], i1843[12])
  i1842.Phase2TextColor = new pc.Color(i1843[13], i1843[14], i1843[15], i1843[16])
  i1842.Phase3TextColor = new pc.Color(i1843[17], i1843[18], i1843[19], i1843[20])
  request.r(i1843[21], i1843[22], 0, i1842, 'cam')
  request.r(i1843[23], i1843[24], 0, i1842, 'phase1Text')
  request.r(i1843[25], i1843[26], 0, i1842, 'phase2Text')
  request.r(i1843[27], i1843[28], 0, i1842, 'phase3Text')
  request.r(i1843[29], i1843[30], 0, i1842, 'BGImage')
  request.r(i1843[31], i1843[32], 0, i1842, 'musicSource')
  var i1845 = i1843[33]
  var i1844 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.UI.Button')))
  for(var i = 0; i < i1845.length; i += 2) {
  request.r(i1845[i + 0], i1845[i + 1], 1, i1844, '')
  }
  i1842.CTA = i1844
  return i1842
}

Deserializers["AudioController"] = function (request, data, root) {
  var i1846 = root || request.c( 'AudioController' )
  var i1847 = data
  request.r(i1847[0], i1847[1], 0, i1846, 'poolParent')
  i1846.startSize = i1847[2]
  return i1846
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.AudioSource"] = function (request, data, root) {
  var i1848 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.AudioSource' )
  var i1849 = data
  request.r(i1849[0], i1849[1], 0, i1848, 'clip')
  request.r(i1849[2], i1849[3], 0, i1848, 'outputAudioMixerGroup')
  i1848.playOnAwake = !!i1849[4]
  i1848.loop = !!i1849[5]
  i1848.time = i1849[6]
  i1848.volume = i1849[7]
  i1848.pitch = i1849[8]
  i1848.enabled = !!i1849[9]
  return i1848
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i1850 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i1851 = data
  i1850.pivot = new pc.Vec2( i1851[0], i1851[1] )
  i1850.anchorMin = new pc.Vec2( i1851[2], i1851[3] )
  i1850.anchorMax = new pc.Vec2( i1851[4], i1851[5] )
  i1850.sizeDelta = new pc.Vec2( i1851[6], i1851[7] )
  i1850.anchoredPosition3D = new pc.Vec3( i1851[8], i1851[9], i1851[10] )
  i1850.rotation = new pc.Quat(i1851[11], i1851[12], i1851[13], i1851[14])
  i1850.scale = new pc.Vec3( i1851[15], i1851[16], i1851[17] )
  return i1850
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i1852 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i1853 = data
  i1852.planeDistance = i1853[0]
  i1852.referencePixelsPerUnit = i1853[1]
  i1852.isFallbackOverlay = !!i1853[2]
  i1852.renderMode = i1853[3]
  i1852.renderOrder = i1853[4]
  i1852.sortingLayerName = i1853[5]
  i1852.sortingOrder = i1853[6]
  i1852.scaleFactor = i1853[7]
  request.r(i1853[8], i1853[9], 0, i1852, 'worldCamera')
  i1852.overrideSorting = !!i1853[10]
  i1852.pixelPerfect = !!i1853[11]
  i1852.targetDisplay = i1853[12]
  i1852.overridePixelPerfect = !!i1853[13]
  i1852.enabled = !!i1853[14]
  return i1852
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i1854 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i1855 = data
  i1854.m_UiScaleMode = i1855[0]
  i1854.m_ReferencePixelsPerUnit = i1855[1]
  i1854.m_ScaleFactor = i1855[2]
  i1854.m_ReferenceResolution = new pc.Vec2( i1855[3], i1855[4] )
  i1854.m_ScreenMatchMode = i1855[5]
  i1854.m_MatchWidthOrHeight = i1855[6]
  i1854.m_PhysicalUnit = i1855[7]
  i1854.m_FallbackScreenDPI = i1855[8]
  i1854.m_DefaultSpriteDPI = i1855[9]
  i1854.m_DynamicPixelsPerUnit = i1855[10]
  i1854.m_PresetInfoIsWorld = !!i1855[11]
  return i1854
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i1856 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i1857 = data
  i1856.m_IgnoreReversedGraphics = !!i1857[0]
  i1856.m_BlockingObjects = i1857[1]
  i1856.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i1857[2] )
  return i1856
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i1858 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i1859 = data
  i1858.cullTransparentMesh = !!i1859[0]
  return i1858
}

Deserializers["UnityEngine.UI.Text"] = function (request, data, root) {
  var i1860 = root || request.c( 'UnityEngine.UI.Text' )
  var i1861 = data
  i1860.m_FontData = request.d('UnityEngine.UI.FontData', i1861[0], i1860.m_FontData)
  i1860.m_Text = i1861[1]
  request.r(i1861[2], i1861[3], 0, i1860, 'm_Material')
  i1860.m_Maskable = !!i1861[4]
  i1860.m_Color = new pc.Color(i1861[5], i1861[6], i1861[7], i1861[8])
  i1860.m_RaycastTarget = !!i1861[9]
  i1860.m_RaycastPadding = new pc.Vec4( i1861[10], i1861[11], i1861[12], i1861[13] )
  return i1860
}

Deserializers["UnityEngine.UI.FontData"] = function (request, data, root) {
  var i1862 = root || request.c( 'UnityEngine.UI.FontData' )
  var i1863 = data
  request.r(i1863[0], i1863[1], 0, i1862, 'm_Font')
  i1862.m_FontSize = i1863[2]
  i1862.m_FontStyle = i1863[3]
  i1862.m_BestFit = !!i1863[4]
  i1862.m_MinSize = i1863[5]
  i1862.m_MaxSize = i1863[6]
  i1862.m_Alignment = i1863[7]
  i1862.m_AlignByGeometry = !!i1863[8]
  i1862.m_RichText = !!i1863[9]
  i1862.m_HorizontalOverflow = i1863[10]
  i1862.m_VerticalOverflow = i1863[11]
  i1862.m_LineSpacing = i1863[12]
  return i1862
}

Deserializers["DG.Tweening.DOTweenAnimation"] = function (request, data, root) {
  var i1864 = root || request.c( 'DG.Tweening.DOTweenAnimation' )
  var i1865 = data
  i1864.targetIsSelf = !!i1865[0]
  request.r(i1865[1], i1865[2], 0, i1864, 'targetGO')
  i1864.tweenTargetIsTargetGO = !!i1865[3]
  i1864.delay = i1865[4]
  i1864.duration = i1865[5]
  i1864.easeType = i1865[6]
  i1864.easeCurve = new pc.AnimationCurve( { keys_flow: i1865[7] } )
  i1864.loopType = i1865[8]
  i1864.loops = i1865[9]
  i1864.id = i1865[10]
  i1864.isRelative = !!i1865[11]
  i1864.isFrom = !!i1865[12]
  i1864.isIndependentUpdate = !!i1865[13]
  i1864.autoKill = !!i1865[14]
  i1864.autoGenerate = !!i1865[15]
  i1864.isActive = !!i1865[16]
  i1864.isValid = !!i1865[17]
  request.r(i1865[18], i1865[19], 0, i1864, 'target')
  i1864.animationType = i1865[20]
  i1864.targetType = i1865[21]
  i1864.forcedTargetType = i1865[22]
  i1864.autoPlay = !!i1865[23]
  i1864.useTargetAsV3 = !!i1865[24]
  i1864.endValueFloat = i1865[25]
  i1864.endValueV3 = new pc.Vec3( i1865[26], i1865[27], i1865[28] )
  i1864.endValueV2 = new pc.Vec2( i1865[29], i1865[30] )
  i1864.endValueColor = new pc.Color(i1865[31], i1865[32], i1865[33], i1865[34])
  i1864.endValueString = i1865[35]
  i1864.endValueRect = UnityEngine.Rect.MinMaxRect(i1865[36], i1865[37], i1865[38], i1865[39])
  request.r(i1865[40], i1865[41], 0, i1864, 'endValueTransform')
  i1864.optionalBool0 = !!i1865[42]
  i1864.optionalBool1 = !!i1865[43]
  i1864.optionalFloat0 = i1865[44]
  i1864.optionalInt0 = i1865[45]
  i1864.optionalRotationMode = i1865[46]
  i1864.optionalScrambleMode = i1865[47]
  i1864.optionalShakeRandomnessMode = i1865[48]
  i1864.optionalString = i1865[49]
  i1864.updateType = i1865[50]
  i1864.isSpeedBased = !!i1865[51]
  i1864.hasOnStart = !!i1865[52]
  i1864.hasOnPlay = !!i1865[53]
  i1864.hasOnUpdate = !!i1865[54]
  i1864.hasOnStepComplete = !!i1865[55]
  i1864.hasOnComplete = !!i1865[56]
  i1864.hasOnTweenCreated = !!i1865[57]
  i1864.hasOnRewind = !!i1865[58]
  i1864.onStart = request.d('UnityEngine.Events.UnityEvent', i1865[59], i1864.onStart)
  i1864.onPlay = request.d('UnityEngine.Events.UnityEvent', i1865[60], i1864.onPlay)
  i1864.onUpdate = request.d('UnityEngine.Events.UnityEvent', i1865[61], i1864.onUpdate)
  i1864.onStepComplete = request.d('UnityEngine.Events.UnityEvent', i1865[62], i1864.onStepComplete)
  i1864.onComplete = request.d('UnityEngine.Events.UnityEvent', i1865[63], i1864.onComplete)
  i1864.onTweenCreated = request.d('UnityEngine.Events.UnityEvent', i1865[64], i1864.onTweenCreated)
  i1864.onRewind = request.d('UnityEngine.Events.UnityEvent', i1865[65], i1864.onRewind)
  return i1864
}

Deserializers["UnityEngine.Events.UnityEvent"] = function (request, data, root) {
  var i1866 = root || request.c( 'UnityEngine.Events.UnityEvent' )
  var i1867 = data
  i1866.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i1867[0], i1866.m_PersistentCalls)
  return i1866
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i1868 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i1869 = data
  var i1871 = i1869[0]
  var i1870 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i1871.length; i += 1) {
    i1870.add(request.d('UnityEngine.Events.PersistentCall', i1871[i + 0]));
  }
  i1868.m_Calls = i1870
  return i1868
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i1874 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i1875 = data
  request.r(i1875[0], i1875[1], 0, i1874, 'm_Target')
  i1874.m_TargetAssemblyTypeName = i1875[2]
  i1874.m_MethodName = i1875[3]
  i1874.m_Mode = i1875[4]
  i1874.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i1875[5], i1874.m_Arguments)
  i1874.m_CallState = i1875[6]
  return i1874
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i1876 = root || request.c( 'UnityEngine.UI.Button' )
  var i1877 = data
  i1876.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i1877[0], i1876.m_OnClick)
  i1876.m_Navigation = request.d('UnityEngine.UI.Navigation', i1877[1], i1876.m_Navigation)
  i1876.m_Transition = i1877[2]
  i1876.m_Colors = request.d('UnityEngine.UI.ColorBlock', i1877[3], i1876.m_Colors)
  i1876.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i1877[4], i1876.m_SpriteState)
  i1876.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i1877[5], i1876.m_AnimationTriggers)
  i1876.m_Interactable = !!i1877[6]
  request.r(i1877[7], i1877[8], 0, i1876, 'm_TargetGraphic')
  return i1876
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i1878 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i1879 = data
  i1878.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i1879[0], i1878.m_PersistentCalls)
  return i1878
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i1880 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i1881 = data
  i1880.m_Mode = i1881[0]
  i1880.m_WrapAround = !!i1881[1]
  request.r(i1881[2], i1881[3], 0, i1880, 'm_SelectOnUp')
  request.r(i1881[4], i1881[5], 0, i1880, 'm_SelectOnDown')
  request.r(i1881[6], i1881[7], 0, i1880, 'm_SelectOnLeft')
  request.r(i1881[8], i1881[9], 0, i1880, 'm_SelectOnRight')
  return i1880
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i1882 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i1883 = data
  i1882.m_NormalColor = new pc.Color(i1883[0], i1883[1], i1883[2], i1883[3])
  i1882.m_HighlightedColor = new pc.Color(i1883[4], i1883[5], i1883[6], i1883[7])
  i1882.m_PressedColor = new pc.Color(i1883[8], i1883[9], i1883[10], i1883[11])
  i1882.m_SelectedColor = new pc.Color(i1883[12], i1883[13], i1883[14], i1883[15])
  i1882.m_DisabledColor = new pc.Color(i1883[16], i1883[17], i1883[18], i1883[19])
  i1882.m_ColorMultiplier = i1883[20]
  i1882.m_FadeDuration = i1883[21]
  return i1882
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i1884 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i1885 = data
  request.r(i1885[0], i1885[1], 0, i1884, 'm_HighlightedSprite')
  request.r(i1885[2], i1885[3], 0, i1884, 'm_PressedSprite')
  request.r(i1885[4], i1885[5], 0, i1884, 'm_SelectedSprite')
  request.r(i1885[6], i1885[7], 0, i1884, 'm_DisabledSprite')
  return i1884
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i1886 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i1887 = data
  i1886.m_NormalTrigger = i1887[0]
  i1886.m_HighlightedTrigger = i1887[1]
  i1886.m_PressedTrigger = i1887[2]
  i1886.m_SelectedTrigger = i1887[3]
  i1886.m_DisabledTrigger = i1887[4]
  return i1886
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i1888 = root || request.c( 'UnityEngine.UI.Image' )
  var i1889 = data
  request.r(i1889[0], i1889[1], 0, i1888, 'm_Sprite')
  i1888.m_Type = i1889[2]
  i1888.m_PreserveAspect = !!i1889[3]
  i1888.m_FillCenter = !!i1889[4]
  i1888.m_FillMethod = i1889[5]
  i1888.m_FillAmount = i1889[6]
  i1888.m_FillClockwise = !!i1889[7]
  i1888.m_FillOrigin = i1889[8]
  i1888.m_UseSpriteMesh = !!i1889[9]
  i1888.m_PixelsPerUnitMultiplier = i1889[10]
  request.r(i1889[11], i1889[12], 0, i1888, 'm_Material')
  i1888.m_Maskable = !!i1889[13]
  i1888.m_Color = new pc.Color(i1889[14], i1889[15], i1889[16], i1889[17])
  i1888.m_RaycastTarget = !!i1889[18]
  i1888.m_RaycastPadding = new pc.Vec4( i1889[19], i1889[20], i1889[21], i1889[22] )
  return i1888
}

Deserializers["UnityEngine.UI.RawImage"] = function (request, data, root) {
  var i1890 = root || request.c( 'UnityEngine.UI.RawImage' )
  var i1891 = data
  request.r(i1891[0], i1891[1], 0, i1890, 'm_Texture')
  i1890.m_UVRect = UnityEngine.Rect.MinMaxRect(i1891[2], i1891[3], i1891[4], i1891[5])
  request.r(i1891[6], i1891[7], 0, i1890, 'm_Material')
  i1890.m_Maskable = !!i1891[8]
  i1890.m_Color = new pc.Color(i1891[9], i1891[10], i1891[11], i1891[12])
  i1890.m_RaycastTarget = !!i1891[13]
  i1890.m_RaycastPadding = new pc.Vec4( i1891[14], i1891[15], i1891[16], i1891[17] )
  return i1890
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer"] = function (request, data, root) {
  var i1892 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer' )
  var i1893 = data
  request.r(i1893[0], i1893[1], 0, i1892, 'sharedMesh')
  var i1895 = i1893[2]
  var i1894 = []
  for(var i = 0; i < i1895.length; i += 2) {
  request.r(i1895[i + 0], i1895[i + 1], 2, i1894, '')
  }
  i1892.bones = i1894
  i1892.updateWhenOffscreen = !!i1893[3]
  i1892.localBounds = i1893[4]
  request.r(i1893[5], i1893[6], 0, i1892, 'rootBone')
  var i1897 = i1893[7]
  var i1896 = []
  for(var i = 0; i < i1897.length; i += 1) {
    i1896.push( request.d('Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight', i1897[i + 0]) );
  }
  i1892.blendShapesWeights = i1896
  i1892.enabled = !!i1893[8]
  request.r(i1893[9], i1893[10], 0, i1892, 'sharedMaterial')
  var i1899 = i1893[11]
  var i1898 = []
  for(var i = 0; i < i1899.length; i += 2) {
  request.r(i1899[i + 0], i1899[i + 1], 2, i1898, '')
  }
  i1892.sharedMaterials = i1898
  i1892.receiveShadows = !!i1893[12]
  i1892.shadowCastingMode = i1893[13]
  i1892.sortingLayerID = i1893[14]
  i1892.sortingOrder = i1893[15]
  i1892.lightmapIndex = i1893[16]
  i1892.lightmapSceneIndex = i1893[17]
  i1892.lightmapScaleOffset = new pc.Vec4( i1893[18], i1893[19], i1893[20], i1893[21] )
  i1892.lightProbeUsage = i1893[22]
  i1892.reflectionProbeUsage = i1893[23]
  return i1892
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight"] = function (request, data, root) {
  var i1904 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight' )
  var i1905 = data
  i1904.weight = i1905[0]
  return i1904
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshFilter"] = function (request, data, root) {
  var i1906 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshFilter' )
  var i1907 = data
  request.r(i1907[0], i1907[1], 0, i1906, 'sharedMesh')
  return i1906
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshRenderer"] = function (request, data, root) {
  var i1908 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshRenderer' )
  var i1909 = data
  request.r(i1909[0], i1909[1], 0, i1908, 'additionalVertexStreams')
  i1908.enabled = !!i1909[2]
  request.r(i1909[3], i1909[4], 0, i1908, 'sharedMaterial')
  var i1911 = i1909[5]
  var i1910 = []
  for(var i = 0; i < i1911.length; i += 2) {
  request.r(i1911[i + 0], i1911[i + 1], 2, i1910, '')
  }
  i1908.sharedMaterials = i1910
  i1908.receiveShadows = !!i1909[6]
  i1908.shadowCastingMode = i1909[7]
  i1908.sortingLayerID = i1909[8]
  i1908.sortingOrder = i1909[9]
  i1908.lightmapIndex = i1909[10]
  i1908.lightmapSceneIndex = i1909[11]
  i1908.lightmapScaleOffset = new pc.Vec4( i1909[12], i1909[13], i1909[14], i1909[15] )
  i1908.lightProbeUsage = i1909[16]
  i1908.reflectionProbeUsage = i1909[17]
  return i1908
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.BoxCollider"] = function (request, data, root) {
  var i1912 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.BoxCollider' )
  var i1913 = data
  i1912.center = new pc.Vec3( i1913[0], i1913[1], i1913[2] )
  i1912.size = new pc.Vec3( i1913[3], i1913[4], i1913[5] )
  i1912.enabled = !!i1913[6]
  i1912.isTrigger = !!i1913[7]
  request.r(i1913[8], i1913[9], 0, i1912, 'material')
  return i1912
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Rigidbody"] = function (request, data, root) {
  var i1914 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Rigidbody' )
  var i1915 = data
  i1914.mass = i1915[0]
  i1914.drag = i1915[1]
  i1914.angularDrag = i1915[2]
  i1914.useGravity = !!i1915[3]
  i1914.isKinematic = !!i1915[4]
  i1914.constraints = i1915[5]
  i1914.maxAngularVelocity = i1915[6]
  i1914.collisionDetectionMode = i1915[7]
  i1914.interpolation = i1915[8]
  return i1914
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ConfigurableJoint"] = function (request, data, root) {
  var i1916 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ConfigurableJoint' )
  var i1917 = data
  i1916.angularXDrive = request.d('UnityEngine.JointDrive', i1917[0], i1916.angularXDrive)
  i1916.angularXLimitSpring = request.d('UnityEngine.SoftJointLimitSpring', i1917[1], i1916.angularXLimitSpring)
  i1916.angularXMotion = i1917[2]
  i1916.angularYLimit = request.d('UnityEngine.SoftJointLimit', i1917[3], i1916.angularYLimit)
  i1916.angularYMotion = i1917[4]
  i1916.angularYZDrive = request.d('UnityEngine.JointDrive', i1917[5], i1916.angularYZDrive)
  i1916.angularYZLimitSpring = request.d('UnityEngine.SoftJointLimitSpring', i1917[6], i1916.angularYZLimitSpring)
  i1916.angularZLimit = request.d('UnityEngine.SoftJointLimit', i1917[7], i1916.angularZLimit)
  i1916.angularZMotion = i1917[8]
  i1916.configuredInWorldSpace = !!i1917[9]
  i1916.highAngularXLimit = request.d('UnityEngine.SoftJointLimit', i1917[10], i1916.highAngularXLimit)
  i1916.linearLimit = request.d('UnityEngine.SoftJointLimit', i1917[11], i1916.linearLimit)
  i1916.linearLimitSpring = request.d('UnityEngine.SoftJointLimitSpring', i1917[12], i1916.linearLimitSpring)
  i1916.lowAngularXLimit = request.d('UnityEngine.SoftJointLimit', i1917[13], i1916.lowAngularXLimit)
  i1916.rotationDriveMode = i1917[14]
  i1916.secondaryAxis = new pc.Vec3( i1917[15], i1917[16], i1917[17] )
  i1916.slerpDrive = request.d('UnityEngine.JointDrive', i1917[18], i1916.slerpDrive)
  i1916.swapBodies = !!i1917[19]
  i1916.targetAngularVelocity = new pc.Vec3( i1917[20], i1917[21], i1917[22] )
  i1916.targetPosition = new pc.Vec3( i1917[23], i1917[24], i1917[25] )
  i1916.targetRotation = new pc.Quat(i1917[26], i1917[27], i1917[28], i1917[29])
  i1916.targetVelocity = new pc.Vec3( i1917[30], i1917[31], i1917[32] )
  i1916.xDrive = request.d('UnityEngine.JointDrive', i1917[33], i1916.xDrive)
  i1916.xMotion = i1917[34]
  i1916.yDrive = request.d('UnityEngine.JointDrive', i1917[35], i1916.yDrive)
  i1916.yMotion = i1917[36]
  i1916.zDrive = request.d('UnityEngine.JointDrive', i1917[37], i1916.zDrive)
  i1916.zMotion = i1917[38]
  request.r(i1917[39], i1917[40], 0, i1916, 'connectedBody')
  i1916.axis = new pc.Vec3( i1917[41], i1917[42], i1917[43] )
  i1916.anchor = new pc.Vec3( i1917[44], i1917[45], i1917[46] )
  i1916.connectedAnchor = new pc.Vec3( i1917[47], i1917[48], i1917[49] )
  i1916.autoConfigureConnectedAnchor = !!i1917[50]
  i1916.massScale = i1917[51]
  i1916.connectedMassScale = i1917[52]
  i1916.enableCollision = !!i1917[53]
  i1916.breakForce = i1917[54]
  i1916.breakTorque = i1917[55]
  return i1916
}

Deserializers["BodyPiece"] = function (request, data, root) {
  var i1918 = root || request.c( 'BodyPiece' )
  var i1919 = data
  i1918.notUseAnim = !!i1919[0]
  request.r(i1919[1], i1919[2], 0, i1918, 'colli')
  request.r(i1919[3], i1919[4], 0, i1918, 'skeleton')
  return i1918
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CapsuleCollider"] = function (request, data, root) {
  var i1920 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CapsuleCollider' )
  var i1921 = data
  i1920.center = new pc.Vec3( i1921[0], i1921[1], i1921[2] )
  i1920.radius = i1921[3]
  i1920.height = i1921[4]
  i1920.direction = i1921[5]
  i1920.enabled = !!i1921[6]
  i1920.isTrigger = !!i1921[7]
  request.r(i1921[8], i1921[9], 0, i1920, 'material')
  return i1920
}

Deserializers["TakeDamage"] = function (request, data, root) {
  var i1922 = root || request.c( 'TakeDamage' )
  var i1923 = data
  request.r(i1923[0], i1923[1], 0, i1922, 'phase')
  var i1925 = i1923[2]
  var i1924 = new (System.Collections.Generic.List$1(Bridge.ns('BodyPiece')))
  for(var i = 0; i < i1925.length; i += 2) {
  request.r(i1925[i + 0], i1925[i + 1], 1, i1924, '')
  }
  i1922.bodyPieces = i1924
  request.r(i1923[3], i1923[4], 0, i1922, 'root')
  i1922.timeCD = i1923[5]
  i1922.HP = i1923[6]
  i1922.onCD = !!i1923[7]
  i1922.currentHP = i1923[8]
  i1922.isDead = !!i1923[9]
  request.r(i1923[10], i1923[11], 0, i1922, 'anim')
  request.r(i1923[12], i1923[13], 0, i1922, 'hitSound')
  request.r(i1923[14], i1923[15], 0, i1922, 'deadSound')
  request.r(i1923[16], i1923[17], 0, i1922, 'bloodPrefab')
  return i1922
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Animator"] = function (request, data, root) {
  var i1928 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Animator' )
  var i1929 = data
  request.r(i1929[0], i1929[1], 0, i1928, 'animatorController')
  request.r(i1929[2], i1929[3], 0, i1928, 'avatar')
  i1928.updateMode = i1929[4]
  i1928.hasTransformHierarchy = !!i1929[5]
  i1928.applyRootMotion = !!i1929[6]
  var i1931 = i1929[7]
  var i1930 = []
  for(var i = 0; i < i1931.length; i += 2) {
  request.r(i1931[i + 0], i1931[i + 1], 2, i1930, '')
  }
  i1928.humanBones = i1930
  i1928.enabled = !!i1929[8]
  return i1928
}

Deserializers["BodyController"] = function (request, data, root) {
  var i1932 = root || request.c( 'BodyController' )
  var i1933 = data
  var i1935 = i1933[0]
  var i1934 = new (System.Collections.Generic.List$1(Bridge.ns('BodyPiece')))
  for(var i = 0; i < i1935.length; i += 2) {
  request.r(i1935[i + 0], i1935[i + 1], 1, i1934, '')
  }
  i1932.bodyPieces = i1934
  var i1937 = i1933[1]
  var i1936 = new (System.Collections.Generic.List$1(Bridge.ns('Dragable')))
  for(var i = 0; i < i1937.length; i += 2) {
  request.r(i1937[i + 0], i1937[i + 1], 1, i1936, '')
  }
  i1932.dragPieces = i1936
  request.r(i1933[2], i1933[3], 0, i1932, 'anim')
  return i1932
}

Deserializers["Dragable"] = function (request, data, root) {
  var i1940 = root || request.c( 'Dragable' )
  var i1941 = data
  i1940.OnDrag = request.d('System.Action', i1941[0], i1940.OnDrag)
  i1940.OnEndDrag = request.d('System.Action', i1941[1], i1940.OnEndDrag)
  return i1940
}

Deserializers["System.Action"] = function (request, data, root) {
  var i1942 = root || request.c( 'System.Action' )
  var i1943 = data
  return i1942
}

Deserializers["DragController"] = function (request, data, root) {
  var i1944 = root || request.c( 'DragController' )
  var i1945 = data
  request.r(i1945[0], i1945[1], 0, i1944, 'currentTarget')
  i1944.positionSpring = i1945[2]
  i1944.positionDamper = i1945[3]
  request.r(i1945[4], i1945[5], 0, i1944, 'tut1')
  request.r(i1945[6], i1945[7], 0, i1944, 'tut2')
  return i1944
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i1946 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i1947 = data
  i1946.ambientIntensity = i1947[0]
  i1946.reflectionIntensity = i1947[1]
  i1946.ambientMode = i1947[2]
  i1946.ambientLight = new pc.Color(i1947[3], i1947[4], i1947[5], i1947[6])
  i1946.ambientSkyColor = new pc.Color(i1947[7], i1947[8], i1947[9], i1947[10])
  i1946.ambientGroundColor = new pc.Color(i1947[11], i1947[12], i1947[13], i1947[14])
  i1946.ambientEquatorColor = new pc.Color(i1947[15], i1947[16], i1947[17], i1947[18])
  i1946.fogColor = new pc.Color(i1947[19], i1947[20], i1947[21], i1947[22])
  i1946.fogEndDistance = i1947[23]
  i1946.fogStartDistance = i1947[24]
  i1946.fogDensity = i1947[25]
  i1946.fog = !!i1947[26]
  request.r(i1947[27], i1947[28], 0, i1946, 'skybox')
  i1946.fogMode = i1947[29]
  var i1949 = i1947[30]
  var i1948 = []
  for(var i = 0; i < i1949.length; i += 1) {
    i1948.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i1949[i + 0]) );
  }
  i1946.lightmaps = i1948
  i1946.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i1947[31], i1946.lightProbes)
  i1946.lightmapsMode = i1947[32]
  i1946.mixedBakeMode = i1947[33]
  i1946.environmentLightingMode = i1947[34]
  i1946.ambientProbe = new pc.SphericalHarmonicsL2(i1947[35])
  request.r(i1947[36], i1947[37], 0, i1946, 'customReflection')
  request.r(i1947[38], i1947[39], 0, i1946, 'defaultReflection')
  i1946.defaultReflectionMode = i1947[40]
  i1946.defaultReflectionResolution = i1947[41]
  i1946.sunLightObjectId = i1947[42]
  i1946.pixelLightCount = i1947[43]
  i1946.defaultReflectionHDR = !!i1947[44]
  i1946.hasLightDataAsset = !!i1947[45]
  i1946.hasManualGenerate = !!i1947[46]
  return i1946
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i1952 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i1953 = data
  request.r(i1953[0], i1953[1], 0, i1952, 'lightmapColor')
  request.r(i1953[2], i1953[3], 0, i1952, 'lightmapDirection')
  request.r(i1953[4], i1953[5], 0, i1952, 'shadowMask')
  return i1952
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i1954 = root || new UnityEngine.LightProbes()
  var i1955 = data
  return i1954
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i1962 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i1963 = data
  var i1965 = i1963[0]
  var i1964 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i1965.length; i += 1) {
    i1964.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i1965[i + 0]));
  }
  i1962.ShaderCompilationErrors = i1964
  i1962.name = i1963[1]
  i1962.guid = i1963[2]
  var i1967 = i1963[3]
  var i1966 = []
  for(var i = 0; i < i1967.length; i += 1) {
    i1966.push( i1967[i + 0] );
  }
  i1962.shaderDefinedKeywords = i1966
  var i1969 = i1963[4]
  var i1968 = []
  for(var i = 0; i < i1969.length; i += 1) {
    i1968.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i1969[i + 0]) );
  }
  i1962.passes = i1968
  var i1971 = i1963[5]
  var i1970 = []
  for(var i = 0; i < i1971.length; i += 1) {
    i1970.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i1971[i + 0]) );
  }
  i1962.usePasses = i1970
  var i1973 = i1963[6]
  var i1972 = []
  for(var i = 0; i < i1973.length; i += 1) {
    i1972.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i1973[i + 0]) );
  }
  i1962.defaultParameterValues = i1972
  request.r(i1963[7], i1963[8], 0, i1962, 'unityFallbackShader')
  i1962.readDepth = !!i1963[9]
  i1962.hasDepthOnlyPass = !!i1963[10]
  i1962.isCreatedByShaderGraph = !!i1963[11]
  i1962.disableBatching = !!i1963[12]
  i1962.compiled = !!i1963[13]
  return i1962
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i1976 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i1977 = data
  i1976.shaderName = i1977[0]
  i1976.errorMessage = i1977[1]
  return i1976
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i1982 = root || new pc.UnityShaderPass()
  var i1983 = data
  i1982.id = i1983[0]
  i1982.subShaderIndex = i1983[1]
  i1982.name = i1983[2]
  i1982.passType = i1983[3]
  i1982.grabPassTextureName = i1983[4]
  i1982.usePass = !!i1983[5]
  i1982.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1983[6], i1982.zTest)
  i1982.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1983[7], i1982.zWrite)
  i1982.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1983[8], i1982.culling)
  i1982.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i1983[9], i1982.blending)
  i1982.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i1983[10], i1982.alphaBlending)
  i1982.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1983[11], i1982.colorWriteMask)
  i1982.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1983[12], i1982.offsetUnits)
  i1982.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1983[13], i1982.offsetFactor)
  i1982.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1983[14], i1982.stencilRef)
  i1982.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1983[15], i1982.stencilReadMask)
  i1982.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1983[16], i1982.stencilWriteMask)
  i1982.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1983[17], i1982.stencilOp)
  i1982.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1983[18], i1982.stencilOpFront)
  i1982.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1983[19], i1982.stencilOpBack)
  var i1985 = i1983[20]
  var i1984 = []
  for(var i = 0; i < i1985.length; i += 1) {
    i1984.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i1985[i + 0]) );
  }
  i1982.tags = i1984
  var i1987 = i1983[21]
  var i1986 = []
  for(var i = 0; i < i1987.length; i += 1) {
    i1986.push( i1987[i + 0] );
  }
  i1982.passDefinedKeywords = i1986
  var i1989 = i1983[22]
  var i1988 = []
  for(var i = 0; i < i1989.length; i += 1) {
    i1988.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i1989[i + 0]) );
  }
  i1982.passDefinedKeywordGroups = i1988
  var i1991 = i1983[23]
  var i1990 = []
  for(var i = 0; i < i1991.length; i += 1) {
    i1990.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i1991[i + 0]) );
  }
  i1982.variants = i1990
  var i1993 = i1983[24]
  var i1992 = []
  for(var i = 0; i < i1993.length; i += 1) {
    i1992.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i1993[i + 0]) );
  }
  i1982.excludedVariants = i1992
  i1982.hasDepthReader = !!i1983[25]
  return i1982
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i1994 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i1995 = data
  i1994.val = i1995[0]
  i1994.name = i1995[1]
  return i1994
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i1996 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i1997 = data
  i1996.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1997[0], i1996.src)
  i1996.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1997[1], i1996.dst)
  i1996.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1997[2], i1996.op)
  return i1996
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i1998 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i1999 = data
  i1998.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1999[0], i1998.pass)
  i1998.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1999[1], i1998.fail)
  i1998.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1999[2], i1998.zFail)
  i1998.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1999[3], i1998.comp)
  return i1998
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i2002 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i2003 = data
  i2002.name = i2003[0]
  i2002.value = i2003[1]
  return i2002
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i2006 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i2007 = data
  var i2009 = i2007[0]
  var i2008 = []
  for(var i = 0; i < i2009.length; i += 1) {
    i2008.push( i2009[i + 0] );
  }
  i2006.keywords = i2008
  i2006.hasDiscard = !!i2007[1]
  return i2006
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i2012 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i2013 = data
  i2012.passId = i2013[0]
  i2012.subShaderIndex = i2013[1]
  var i2015 = i2013[2]
  var i2014 = []
  for(var i = 0; i < i2015.length; i += 1) {
    i2014.push( i2015[i + 0] );
  }
  i2012.keywords = i2014
  i2012.vertexProgram = i2013[3]
  i2012.fragmentProgram = i2013[4]
  i2012.exportedForWebGl2 = !!i2013[5]
  i2012.readDepth = !!i2013[6]
  return i2012
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i2018 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i2019 = data
  request.r(i2019[0], i2019[1], 0, i2018, 'shader')
  i2018.pass = i2019[2]
  return i2018
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i2022 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i2023 = data
  i2022.name = i2023[0]
  i2022.type = i2023[1]
  i2022.value = new pc.Vec4( i2023[2], i2023[3], i2023[4], i2023[5] )
  i2022.textureValue = i2023[6]
  i2022.shaderPropertyFlag = i2023[7]
  return i2022
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i2024 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i2025 = data
  i2024.name = i2025[0]
  request.r(i2025[1], i2025[2], 0, i2024, 'texture')
  i2024.aabb = i2025[3]
  i2024.vertices = i2025[4]
  i2024.triangles = i2025[5]
  i2024.textureRect = UnityEngine.Rect.MinMaxRect(i2025[6], i2025[7], i2025[8], i2025[9])
  i2024.packedRect = UnityEngine.Rect.MinMaxRect(i2025[10], i2025[11], i2025[12], i2025[13])
  i2024.border = new pc.Vec4( i2025[14], i2025[15], i2025[16], i2025[17] )
  i2024.transparency = i2025[18]
  i2024.bounds = i2025[19]
  i2024.pixelsPerUnit = i2025[20]
  i2024.textureWidth = i2025[21]
  i2024.textureHeight = i2025[22]
  i2024.nativeSize = new pc.Vec2( i2025[23], i2025[24] )
  i2024.pivot = new pc.Vec2( i2025[25], i2025[26] )
  i2024.textureRectOffset = new pc.Vec2( i2025[27], i2025[28] )
  return i2024
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i2026 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i2027 = data
  i2026.name = i2027[0]
  return i2026
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip"] = function (request, data, root) {
  var i2028 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip' )
  var i2029 = data
  i2028.name = i2029[0]
  i2028.wrapMode = i2029[1]
  i2028.isLooping = !!i2029[2]
  i2028.length = i2029[3]
  var i2031 = i2029[4]
  var i2030 = []
  for(var i = 0; i < i2031.length; i += 1) {
    i2030.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve', i2031[i + 0]) );
  }
  i2028.curves = i2030
  var i2033 = i2029[5]
  var i2032 = []
  for(var i = 0; i < i2033.length; i += 1) {
    i2032.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent', i2033[i + 0]) );
  }
  i2028.events = i2032
  i2028.halfPrecision = !!i2029[6]
  i2028._frameRate = i2029[7]
  i2028.localBounds = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds', i2029[8], i2028.localBounds)
  i2028.hasMuscleCurves = !!i2029[9]
  var i2035 = i2029[10]
  var i2034 = []
  for(var i = 0; i < i2035.length; i += 1) {
    i2034.push( i2035[i + 0] );
  }
  i2028.clipMuscleConstant = i2034
  i2028.clipBindingConstant = request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant', i2029[11], i2028.clipBindingConstant)
  return i2028
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve"] = function (request, data, root) {
  var i2038 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve' )
  var i2039 = data
  i2038.path = i2039[0]
  i2038.hash = i2039[1]
  i2038.componentType = i2039[2]
  i2038.property = i2039[3]
  i2038.keys = i2039[4]
  var i2041 = i2039[5]
  var i2040 = []
  for(var i = 0; i < i2041.length; i += 1) {
    i2040.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey', i2041[i + 0]) );
  }
  i2038.objectReferenceKeys = i2040
  return i2038
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent"] = function (request, data, root) {
  var i2044 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent' )
  var i2045 = data
  i2044.functionName = i2045[0]
  i2044.floatParameter = i2045[1]
  i2044.intParameter = i2045[2]
  i2044.stringParameter = i2045[3]
  request.r(i2045[4], i2045[5], 0, i2044, 'objectReferenceParameter')
  i2044.time = i2045[6]
  return i2044
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds"] = function (request, data, root) {
  var i2046 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds' )
  var i2047 = data
  i2046.center = new pc.Vec3( i2047[0], i2047[1], i2047[2] )
  i2046.extends = new pc.Vec3( i2047[3], i2047[4], i2047[5] )
  return i2046
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant"] = function (request, data, root) {
  var i2050 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant' )
  var i2051 = data
  var i2053 = i2051[0]
  var i2052 = []
  for(var i = 0; i < i2053.length; i += 1) {
    i2052.push( i2053[i + 0] );
  }
  i2050.genericBindings = i2052
  var i2055 = i2051[1]
  var i2054 = []
  for(var i = 0; i < i2055.length; i += 1) {
    i2054.push( i2055[i + 0] );
  }
  i2050.pptrCurveMapping = i2054
  return i2050
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font"] = function (request, data, root) {
  var i2056 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font' )
  var i2057 = data
  i2056.name = i2057[0]
  i2056.ascent = i2057[1]
  i2056.originalLineHeight = i2057[2]
  i2056.fontSize = i2057[3]
  var i2059 = i2057[4]
  var i2058 = []
  for(var i = 0; i < i2059.length; i += 1) {
    i2058.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo', i2059[i + 0]) );
  }
  i2056.characterInfo = i2058
  request.r(i2057[5], i2057[6], 0, i2056, 'texture')
  i2056.originalFontSize = i2057[7]
  return i2056
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo"] = function (request, data, root) {
  var i2062 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo' )
  var i2063 = data
  i2062.index = i2063[0]
  i2062.advance = i2063[1]
  i2062.bearing = i2063[2]
  i2062.glyphWidth = i2063[3]
  i2062.glyphHeight = i2063[4]
  i2062.minX = i2063[5]
  i2062.maxX = i2063[6]
  i2062.minY = i2063[7]
  i2062.maxY = i2063[8]
  i2062.uvBottomLeftX = i2063[9]
  i2062.uvBottomLeftY = i2063[10]
  i2062.uvBottomRightX = i2063[11]
  i2062.uvBottomRightY = i2063[12]
  i2062.uvTopLeftX = i2063[13]
  i2062.uvTopLeftY = i2063[14]
  i2062.uvTopRightX = i2063[15]
  i2062.uvTopRightY = i2063[16]
  return i2062
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController"] = function (request, data, root) {
  var i2064 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController' )
  var i2065 = data
  i2064.name = i2065[0]
  var i2067 = i2065[1]
  var i2066 = []
  for(var i = 0; i < i2067.length; i += 1) {
    i2066.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer', i2067[i + 0]) );
  }
  i2064.layers = i2066
  var i2069 = i2065[2]
  var i2068 = []
  for(var i = 0; i < i2069.length; i += 1) {
    i2068.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter', i2069[i + 0]) );
  }
  i2064.parameters = i2068
  i2064.animationClips = i2065[3]
  i2064.avatarUnsupported = i2065[4]
  return i2064
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer"] = function (request, data, root) {
  var i2072 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer' )
  var i2073 = data
  i2072.name = i2073[0]
  i2072.defaultWeight = i2073[1]
  i2072.blendingMode = i2073[2]
  i2072.avatarMask = i2073[3]
  i2072.syncedLayerIndex = i2073[4]
  i2072.syncedLayerAffectsTiming = !!i2073[5]
  i2072.syncedLayers = i2073[6]
  i2072.stateMachine = request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i2073[7], i2072.stateMachine)
  return i2072
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine"] = function (request, data, root) {
  var i2074 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine' )
  var i2075 = data
  i2074.id = i2075[0]
  i2074.name = i2075[1]
  i2074.path = i2075[2]
  var i2077 = i2075[3]
  var i2076 = []
  for(var i = 0; i < i2077.length; i += 1) {
    i2076.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState', i2077[i + 0]) );
  }
  i2074.states = i2076
  var i2079 = i2075[4]
  var i2078 = []
  for(var i = 0; i < i2079.length; i += 1) {
    i2078.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i2079[i + 0]) );
  }
  i2074.machines = i2078
  var i2081 = i2075[5]
  var i2080 = []
  for(var i = 0; i < i2081.length; i += 1) {
    i2080.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i2081[i + 0]) );
  }
  i2074.entryStateTransitions = i2080
  var i2083 = i2075[6]
  var i2082 = []
  for(var i = 0; i < i2083.length; i += 1) {
    i2082.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i2083[i + 0]) );
  }
  i2074.exitStateTransitions = i2082
  var i2085 = i2075[7]
  var i2084 = []
  for(var i = 0; i < i2085.length; i += 1) {
    i2084.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i2085[i + 0]) );
  }
  i2074.anyStateTransitions = i2084
  i2074.defaultStateId = i2075[8]
  return i2074
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState"] = function (request, data, root) {
  var i2088 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState' )
  var i2089 = data
  i2088.id = i2089[0]
  i2088.name = i2089[1]
  i2088.cycleOffset = i2089[2]
  i2088.cycleOffsetParameter = i2089[3]
  i2088.cycleOffsetParameterActive = !!i2089[4]
  i2088.mirror = !!i2089[5]
  i2088.mirrorParameter = i2089[6]
  i2088.mirrorParameterActive = !!i2089[7]
  i2088.motionId = i2089[8]
  i2088.nameHash = i2089[9]
  i2088.fullPathHash = i2089[10]
  i2088.speed = i2089[11]
  i2088.speedParameter = i2089[12]
  i2088.speedParameterActive = !!i2089[13]
  i2088.tag = i2089[14]
  i2088.tagHash = i2089[15]
  i2088.writeDefaultValues = !!i2089[16]
  var i2091 = i2089[17]
  var i2090 = []
  for(var i = 0; i < i2091.length; i += 2) {
  request.r(i2091[i + 0], i2091[i + 1], 2, i2090, '')
  }
  i2088.behaviours = i2090
  var i2093 = i2089[18]
  var i2092 = []
  for(var i = 0; i < i2093.length; i += 1) {
    i2092.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i2093[i + 0]) );
  }
  i2088.transitions = i2092
  return i2088
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition"] = function (request, data, root) {
  var i2098 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition' )
  var i2099 = data
  i2098.fullPath = i2099[0]
  i2098.canTransitionToSelf = !!i2099[1]
  i2098.duration = i2099[2]
  i2098.exitTime = i2099[3]
  i2098.hasExitTime = !!i2099[4]
  i2098.hasFixedDuration = !!i2099[5]
  i2098.interruptionSource = i2099[6]
  i2098.offset = i2099[7]
  i2098.orderedInterruption = !!i2099[8]
  i2098.destinationStateId = i2099[9]
  i2098.isExit = !!i2099[10]
  i2098.mute = !!i2099[11]
  i2098.solo = !!i2099[12]
  var i2101 = i2099[13]
  var i2100 = []
  for(var i = 0; i < i2101.length; i += 1) {
    i2100.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i2101[i + 0]) );
  }
  i2098.conditions = i2100
  return i2098
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition"] = function (request, data, root) {
  var i2104 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition' )
  var i2105 = data
  i2104.mode = i2105[0]
  i2104.parameter = i2105[1]
  i2104.threshold = i2105[2]
  return i2104
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition"] = function (request, data, root) {
  var i2110 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition' )
  var i2111 = data
  i2110.destinationStateId = i2111[0]
  i2110.isExit = !!i2111[1]
  i2110.mute = !!i2111[2]
  i2110.solo = !!i2111[3]
  var i2113 = i2111[4]
  var i2112 = []
  for(var i = 0; i < i2113.length; i += 1) {
    i2112.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i2113[i + 0]) );
  }
  i2110.conditions = i2112
  return i2110
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter"] = function (request, data, root) {
  var i2116 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter' )
  var i2117 = data
  i2116.defaultBool = !!i2117[0]
  i2116.defaultFloat = i2117[1]
  i2116.defaultInt = i2117[2]
  i2116.name = i2117[3]
  i2116.nameHash = i2117[4]
  i2116.type = i2117[5]
  return i2116
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorOverrideController"] = function (request, data, root) {
  var i2118 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorOverrideController' )
  var i2119 = data
  i2118.name = i2119[0]
  request.r(i2119[1], i2119[2], 0, i2118, '_runtimeAnimatorController')
  var i2121 = i2119[3]
  var i2120 = []
  for(var i = 0; i < i2121.length; i += 2) {
  request.r(i2121[i + 0], i2121[i + 1], 2, i2120, '')
  }
  i2118._originalAnimationClips = i2120
  var i2123 = i2119[4]
  var i2122 = []
  for(var i = 0; i < i2123.length; i += 2) {
  request.r(i2123[i + 0], i2123[i + 1], 2, i2122, '')
  }
  i2118._overrideAnimationClips = i2122
  var i2125 = i2119[5]
  var i2124 = []
  for(var i = 0; i < i2125.length; i += 2) {
  request.r(i2125[i + 0], i2125[i + 1], 2, i2124, '')
  }
  i2118._animationClips = i2124
  var i2127 = i2119[6]
  var i2126 = []
  for(var i = 0; i < i2127.length; i += 1) {
    i2126.push( request.d('UnityEngine.AnimationClipPair', i2127[i + 0]) );
  }
  i2118._animationClipPairs = i2126
  return i2118
}

Deserializers["UnityEngine.AnimationClipPair"] = function (request, data, root) {
  var i2132 = root || request.c( 'UnityEngine.AnimationClipPair' )
  var i2133 = data
  request.r(i2133[0], i2133[1], 0, i2132, 'originalClip')
  request.r(i2133[2], i2133[3], 0, i2132, 'overrideClip')
  return i2132
}

Deserializers["DG.Tweening.Core.DOTweenSettings"] = function (request, data, root) {
  var i2134 = root || request.c( 'DG.Tweening.Core.DOTweenSettings' )
  var i2135 = data
  i2134.useSafeMode = !!i2135[0]
  i2134.safeModeOptions = request.d('DG.Tweening.Core.DOTweenSettings+SafeModeOptions', i2135[1], i2134.safeModeOptions)
  i2134.timeScale = i2135[2]
  i2134.unscaledTimeScale = i2135[3]
  i2134.useSmoothDeltaTime = !!i2135[4]
  i2134.maxSmoothUnscaledTime = i2135[5]
  i2134.rewindCallbackMode = i2135[6]
  i2134.showUnityEditorReport = !!i2135[7]
  i2134.logBehaviour = i2135[8]
  i2134.drawGizmos = !!i2135[9]
  i2134.defaultRecyclable = !!i2135[10]
  i2134.defaultAutoPlay = i2135[11]
  i2134.defaultUpdateType = i2135[12]
  i2134.defaultTimeScaleIndependent = !!i2135[13]
  i2134.defaultEaseType = i2135[14]
  i2134.defaultEaseOvershootOrAmplitude = i2135[15]
  i2134.defaultEasePeriod = i2135[16]
  i2134.defaultAutoKill = !!i2135[17]
  i2134.defaultLoopType = i2135[18]
  i2134.debugMode = !!i2135[19]
  i2134.debugStoreTargetId = !!i2135[20]
  i2134.showPreviewPanel = !!i2135[21]
  i2134.storeSettingsLocation = i2135[22]
  i2134.modules = request.d('DG.Tweening.Core.DOTweenSettings+ModulesSetup', i2135[23], i2134.modules)
  i2134.createASMDEF = !!i2135[24]
  i2134.showPlayingTweens = !!i2135[25]
  i2134.showPausedTweens = !!i2135[26]
  return i2134
}

Deserializers["DG.Tweening.Core.DOTweenSettings+SafeModeOptions"] = function (request, data, root) {
  var i2136 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+SafeModeOptions' )
  var i2137 = data
  i2136.logBehaviour = i2137[0]
  i2136.nestedTweenFailureBehaviour = i2137[1]
  return i2136
}

Deserializers["DG.Tweening.Core.DOTweenSettings+ModulesSetup"] = function (request, data, root) {
  var i2138 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+ModulesSetup' )
  var i2139 = data
  i2138.showPanel = !!i2139[0]
  i2138.audioEnabled = !!i2139[1]
  i2138.physicsEnabled = !!i2139[2]
  i2138.physics2DEnabled = !!i2139[3]
  i2138.spriteEnabled = !!i2139[4]
  i2138.uiEnabled = !!i2139[5]
  i2138.textMeshProEnabled = !!i2139[6]
  i2138.tk2DEnabled = !!i2139[7]
  i2138.deAudioEnabled = !!i2139[8]
  i2138.deUnityExtendedEnabled = !!i2139[9]
  i2138.epoOutlineEnabled = !!i2139[10]
  return i2138
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i2140 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i2141 = data
  var i2143 = i2141[0]
  var i2142 = []
  for(var i = 0; i < i2143.length; i += 1) {
    i2142.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i2143[i + 0]) );
  }
  i2140.files = i2142
  i2140.componentToPrefabIds = i2141[1]
  return i2140
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i2146 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i2147 = data
  i2146.path = i2147[0]
  request.r(i2147[1], i2147[2], 0, i2146, 'unityObject')
  return i2146
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i2148 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i2149 = data
  var i2151 = i2149[0]
  var i2150 = []
  for(var i = 0; i < i2151.length; i += 1) {
    i2150.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i2151[i + 0]) );
  }
  i2148.scriptsExecutionOrder = i2150
  var i2153 = i2149[1]
  var i2152 = []
  for(var i = 0; i < i2153.length; i += 1) {
    i2152.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i2153[i + 0]) );
  }
  i2148.sortingLayers = i2152
  var i2155 = i2149[2]
  var i2154 = []
  for(var i = 0; i < i2155.length; i += 1) {
    i2154.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i2155[i + 0]) );
  }
  i2148.cullingLayers = i2154
  i2148.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i2149[3], i2148.timeSettings)
  i2148.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i2149[4], i2148.physicsSettings)
  i2148.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i2149[5], i2148.physics2DSettings)
  i2148.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i2149[6], i2148.qualitySettings)
  i2148.enableRealtimeShadows = !!i2149[7]
  i2148.enableAutoInstancing = !!i2149[8]
  i2148.enableStaticBatching = !!i2149[9]
  i2148.enableDynamicBatching = !!i2149[10]
  i2148.usePreservativeDynamicBatching = !!i2149[11]
  i2148.lightmapEncodingQuality = i2149[12]
  i2148.desiredColorSpace = i2149[13]
  var i2157 = i2149[14]
  var i2156 = []
  for(var i = 0; i < i2157.length; i += 1) {
    i2156.push( i2157[i + 0] );
  }
  i2148.allTags = i2156
  return i2148
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i2160 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i2161 = data
  i2160.name = i2161[0]
  i2160.value = i2161[1]
  return i2160
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i2164 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i2165 = data
  i2164.id = i2165[0]
  i2164.name = i2165[1]
  i2164.value = i2165[2]
  return i2164
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i2168 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i2169 = data
  i2168.id = i2169[0]
  i2168.name = i2169[1]
  return i2168
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i2170 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i2171 = data
  i2170.fixedDeltaTime = i2171[0]
  i2170.maximumDeltaTime = i2171[1]
  i2170.timeScale = i2171[2]
  i2170.maximumParticleTimestep = i2171[3]
  return i2170
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i2172 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i2173 = data
  i2172.gravity = new pc.Vec3( i2173[0], i2173[1], i2173[2] )
  i2172.defaultSolverIterations = i2173[3]
  i2172.bounceThreshold = i2173[4]
  i2172.autoSyncTransforms = !!i2173[5]
  i2172.autoSimulation = !!i2173[6]
  var i2175 = i2173[7]
  var i2174 = []
  for(var i = 0; i < i2175.length; i += 1) {
    i2174.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i2175[i + 0]) );
  }
  i2172.collisionMatrix = i2174
  return i2172
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i2178 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i2179 = data
  i2178.enabled = !!i2179[0]
  i2178.layerId = i2179[1]
  i2178.otherLayerId = i2179[2]
  return i2178
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i2180 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i2181 = data
  request.r(i2181[0], i2181[1], 0, i2180, 'material')
  i2180.gravity = new pc.Vec2( i2181[2], i2181[3] )
  i2180.positionIterations = i2181[4]
  i2180.velocityIterations = i2181[5]
  i2180.velocityThreshold = i2181[6]
  i2180.maxLinearCorrection = i2181[7]
  i2180.maxAngularCorrection = i2181[8]
  i2180.maxTranslationSpeed = i2181[9]
  i2180.maxRotationSpeed = i2181[10]
  i2180.baumgarteScale = i2181[11]
  i2180.baumgarteTOIScale = i2181[12]
  i2180.timeToSleep = i2181[13]
  i2180.linearSleepTolerance = i2181[14]
  i2180.angularSleepTolerance = i2181[15]
  i2180.defaultContactOffset = i2181[16]
  i2180.autoSimulation = !!i2181[17]
  i2180.queriesHitTriggers = !!i2181[18]
  i2180.queriesStartInColliders = !!i2181[19]
  i2180.callbacksOnDisable = !!i2181[20]
  i2180.reuseCollisionCallbacks = !!i2181[21]
  i2180.autoSyncTransforms = !!i2181[22]
  var i2183 = i2181[23]
  var i2182 = []
  for(var i = 0; i < i2183.length; i += 1) {
    i2182.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i2183[i + 0]) );
  }
  i2180.collisionMatrix = i2182
  return i2180
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i2186 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i2187 = data
  i2186.enabled = !!i2187[0]
  i2186.layerId = i2187[1]
  i2186.otherLayerId = i2187[2]
  return i2186
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i2188 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i2189 = data
  var i2191 = i2189[0]
  var i2190 = []
  for(var i = 0; i < i2191.length; i += 1) {
    i2190.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i2191[i + 0]) );
  }
  i2188.qualityLevels = i2190
  var i2193 = i2189[1]
  var i2192 = []
  for(var i = 0; i < i2193.length; i += 1) {
    i2192.push( i2193[i + 0] );
  }
  i2188.names = i2192
  i2188.shadows = i2189[2]
  i2188.anisotropicFiltering = i2189[3]
  i2188.antiAliasing = i2189[4]
  i2188.lodBias = i2189[5]
  i2188.shadowCascades = i2189[6]
  i2188.shadowDistance = i2189[7]
  i2188.shadowmaskMode = i2189[8]
  i2188.shadowProjection = i2189[9]
  i2188.shadowResolution = i2189[10]
  i2188.softParticles = !!i2189[11]
  i2188.softVegetation = !!i2189[12]
  i2188.activeColorSpace = i2189[13]
  i2188.desiredColorSpace = i2189[14]
  i2188.masterTextureLimit = i2189[15]
  i2188.maxQueuedFrames = i2189[16]
  i2188.particleRaycastBudget = i2189[17]
  i2188.pixelLightCount = i2189[18]
  i2188.realtimeReflectionProbes = !!i2189[19]
  i2188.shadowCascade2Split = i2189[20]
  i2188.shadowCascade4Split = new pc.Vec3( i2189[21], i2189[22], i2189[23] )
  i2188.streamingMipmapsActive = !!i2189[24]
  i2188.vSyncCount = i2189[25]
  i2188.asyncUploadBufferSize = i2189[26]
  i2188.asyncUploadTimeSlice = i2189[27]
  i2188.billboardsFaceCameraPosition = !!i2189[28]
  i2188.shadowNearPlaneOffset = i2189[29]
  i2188.streamingMipmapsMemoryBudget = i2189[30]
  i2188.maximumLODLevel = i2189[31]
  i2188.streamingMipmapsAddAllCameras = !!i2189[32]
  i2188.streamingMipmapsMaxLevelReduction = i2189[33]
  i2188.streamingMipmapsRenderersPerFrame = i2189[34]
  i2188.resolutionScalingFixedDPIFactor = i2189[35]
  i2188.streamingMipmapsMaxFileIORequests = i2189[36]
  i2188.currentQualityLevel = i2189[37]
  return i2188
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.Avatar"] = function (request, data, root) {
  var i2196 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.Avatar' )
  var i2197 = data
  i2196.name = i2197[0]
  var i2199 = i2197[1]
  var i2198 = []
  for(var i = 0; i < i2199.length; i += 1) {
    i2198.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.Avatar+TOSPair', i2199[i + 0]) );
  }
  i2196.tos = i2198
  var i2201 = i2197[2]
  var i2200 = []
  for(var i = 0; i < i2201.length; i += 1) {
    i2200.push( i2201[i + 0] );
  }
  i2196.constant = i2200
  i2196.isValid = !!i2197[3]
  i2196.isHuman = !!i2197[4]
  i2196.hasRootMotion = !!i2197[5]
  return i2196
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.Avatar+TOSPair"] = function (request, data, root) {
  var i2204 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.Avatar+TOSPair' )
  var i2205 = data
  i2204.hash = i2205[0]
  i2204.path = i2205[1]
  return i2204
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame"] = function (request, data, root) {
  var i2208 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame' )
  var i2209 = data
  i2208.weight = i2209[0]
  i2208.vertices = i2209[1]
  i2208.normals = i2209[2]
  i2208.tangents = i2209[3]
  return i2208
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i2210 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i2211 = data
  request.r(i2211[0], i2211[1], 0, i2210, 'm_ObjectArgument')
  i2210.m_ObjectArgumentAssemblyTypeName = i2211[2]
  i2210.m_IntArgument = i2211[3]
  i2210.m_FloatArgument = i2211[4]
  i2210.m_StringArgument = i2211[5]
  i2210.m_BoolArgument = !!i2211[6]
  return i2210
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey"] = function (request, data, root) {
  var i2214 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey' )
  var i2215 = data
  i2214.time = i2215[0]
  request.r(i2215[1], i2215[2], 0, i2214, 'value')
  return i2214
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10,"graphicsFormat":11,"sRGBTexture":12,"desiredColorSpace":13,"wrapU":14,"wrapV":15},"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Assets.Mesh":{"name":0,"halfPrecision":1,"useSimplification":2,"useUInt32IndexFormat":3,"vertexCount":4,"aabb":5,"streams":6,"vertices":7,"subMeshes":8,"bindposes":9,"blendShapes":10},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh":{"triangles":0},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape":{"name":0,"frames":1},"Luna.Unity.DTO.UnityEngine.Components.Transform":{"position":0,"scale":3,"rotation":6},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystem":{"main":0,"colorBySpeed":1,"colorOverLifetime":2,"emission":3,"rotationBySpeed":4,"rotationOverLifetime":5,"shape":6,"sizeBySpeed":7,"sizeOverLifetime":8,"textureSheetAnimation":9,"velocityOverLifetime":10,"noise":11,"inheritVelocity":12,"forceOverLifetime":13,"limitVelocityOverLifetime":14,"useAutoRandomSeed":15,"randomSeed":16},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule":{"duration":0,"loop":1,"prewarm":2,"startDelay":3,"startLifetime":4,"startSpeed":5,"startSize3D":6,"startSizeX":7,"startSizeY":8,"startSizeZ":9,"startRotation3D":10,"startRotationX":11,"startRotationY":12,"startRotationZ":13,"startColor":14,"gravityModifier":15,"simulationSpace":16,"customSimulationSpace":17,"simulationSpeed":19,"useUnscaledTime":20,"scalingMode":21,"playOnAwake":22,"maxParticles":23,"emitterVelocityMode":24,"stopAction":25},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve":{"mode":0,"curveMin":1,"curveMax":2,"curveMultiplier":3,"constantMin":4,"constantMax":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient":{"mode":0,"gradientMin":1,"gradientMax":2,"colorMin":3,"colorMax":7},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient":{"mode":0,"colorKeys":1,"alphaKeys":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule":{"enabled":0,"color":1,"range":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey":{"color":0,"time":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey":{"alpha":0,"time":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule":{"enabled":0,"color":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule":{"enabled":0,"rateOverTime":1,"rateOverDistance":2,"bursts":3},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst":{"count":0,"cycleCount":1,"minCount":2,"maxCount":3,"repeatInterval":4,"time":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule":{"enabled":0,"shapeType":1,"randomDirectionAmount":2,"sphericalDirectionAmount":3,"randomPositionAmount":4,"alignToDirection":5,"radius":6,"radiusMode":7,"radiusSpread":8,"radiusSpeed":9,"radiusThickness":10,"angle":11,"length":12,"boxThickness":13,"meshShapeType":16,"mesh":17,"meshRenderer":19,"skinnedMeshRenderer":21,"useMeshMaterialIndex":23,"meshMaterialIndex":24,"useMeshColors":25,"normalOffset":26,"arc":27,"arcMode":28,"arcSpread":29,"arcSpeed":30,"donutRadius":31,"position":32,"rotation":35,"scale":38},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule":{"enabled":0,"mode":1,"animation":2,"numTilesX":3,"numTilesY":4,"useRandomRow":5,"frameOverTime":6,"startFrame":7,"cycleCount":8,"rowIndex":9,"flipU":10,"flipV":11,"spriteCount":12,"sprites":13},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"radial":4,"speedModifier":5,"space":6,"orbitalX":7,"orbitalY":8,"orbitalZ":9,"orbitalOffsetX":10,"orbitalOffsetY":11,"orbitalOffsetZ":12},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule":{"enabled":0,"separateAxes":1,"strengthX":2,"strengthY":3,"strengthZ":4,"frequency":5,"damping":6,"octaveCount":7,"octaveMultiplier":8,"octaveScale":9,"quality":10,"scrollSpeed":11,"scrollSpeedMultiplier":12,"remapEnabled":13,"remapX":14,"remapY":15,"remapZ":16,"positionAmount":17,"rotationAmount":18,"sizeAmount":19},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule":{"enabled":0,"mode":1,"curve":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"space":4,"randomized":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule":{"enabled":0,"limit":1,"limitX":2,"limitY":3,"limitZ":4,"dampen":5,"separateAxes":6,"space":7,"drag":8,"multiplyDragByParticleSize":9,"multiplyDragByParticleVelocity":10},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer":{"mesh":0,"meshCount":2,"activeVertexStreamsCount":3,"alignment":4,"renderMode":5,"sortMode":6,"lengthScale":7,"velocityScale":8,"cameraVelocityScale":9,"normalDirection":10,"sortingFudge":11,"minParticleSize":12,"maxParticleSize":13,"pivot":14,"trailMaterial":17,"applyActiveColorSpace":19,"enabled":20,"sharedMaterial":21,"sharedMaterials":23,"receiveShadows":24,"shadowCastingMode":25,"sortingLayerID":26,"sortingOrder":27,"lightmapIndex":28,"lightmapSceneIndex":29,"lightmapScaleOffset":30,"lightProbeUsage":34,"reflectionProbeUsage":35},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Textures.Cubemap":{"name":0,"atlasId":1,"mipmapCount":2,"hdr":3,"size":4,"anisoLevel":5,"filterMode":6,"rects":7,"wrapU":8,"wrapV":9},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"aspect":0,"orthographic":1,"orthographicSize":2,"backgroundColor":3,"nearClipPlane":7,"farClipPlane":8,"fieldOfView":9,"depth":10,"clearFlags":11,"cullingMask":12,"rect":13,"targetTexture":14,"usePhysicalProperties":16,"focalLength":17,"sensorSize":18,"lensShift":20,"gateFit":22,"commandBufferCount":23,"cameraType":24,"enabled":25},"Luna.Unity.DTO.UnityEngine.Components.Light":{"type":0,"color":1,"cullingMask":5,"intensity":6,"range":7,"spotAngle":8,"shadows":9,"shadowNormalBias":10,"shadowBias":11,"shadowStrength":12,"shadowResolution":13,"lightmapBakeType":14,"renderMode":15,"cookie":16,"cookieSize":18,"shadowNearPlane":19,"occlusionMaskChannel":20,"isBaked":21,"mixedLightingMode":22,"enabled":23},"Luna.Unity.DTO.UnityEngine.Components.AudioSource":{"clip":0,"outputAudioMixerGroup":2,"playOnAwake":4,"loop":5,"time":6,"volume":7,"pitch":8,"enabled":9},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"planeDistance":0,"referencePixelsPerUnit":1,"isFallbackOverlay":2,"renderMode":3,"renderOrder":4,"sortingLayerName":5,"sortingOrder":6,"scaleFactor":7,"worldCamera":8,"overrideSorting":10,"pixelPerfect":11,"targetDisplay":12,"overridePixelPerfect":13,"enabled":14},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer":{"sharedMesh":0,"bones":2,"updateWhenOffscreen":3,"localBounds":4,"rootBone":5,"blendShapesWeights":7,"enabled":8,"sharedMaterial":9,"sharedMaterials":11,"receiveShadows":12,"shadowCastingMode":13,"sortingLayerID":14,"sortingOrder":15,"lightmapIndex":16,"lightmapSceneIndex":17,"lightmapScaleOffset":18,"lightProbeUsage":22,"reflectionProbeUsage":23},"Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight":{"weight":0},"Luna.Unity.DTO.UnityEngine.Components.MeshFilter":{"sharedMesh":0},"Luna.Unity.DTO.UnityEngine.Components.MeshRenderer":{"additionalVertexStreams":0,"enabled":2,"sharedMaterial":3,"sharedMaterials":5,"receiveShadows":6,"shadowCastingMode":7,"sortingLayerID":8,"sortingOrder":9,"lightmapIndex":10,"lightmapSceneIndex":11,"lightmapScaleOffset":12,"lightProbeUsage":16,"reflectionProbeUsage":17},"Luna.Unity.DTO.UnityEngine.Components.BoxCollider":{"center":0,"size":3,"enabled":6,"isTrigger":7,"material":8},"Luna.Unity.DTO.UnityEngine.Components.Rigidbody":{"mass":0,"drag":1,"angularDrag":2,"useGravity":3,"isKinematic":4,"constraints":5,"maxAngularVelocity":6,"collisionDetectionMode":7,"interpolation":8},"Luna.Unity.DTO.UnityEngine.Components.ConfigurableJoint":{"angularXDrive":0,"angularXLimitSpring":1,"angularXMotion":2,"angularYLimit":3,"angularYMotion":4,"angularYZDrive":5,"angularYZLimitSpring":6,"angularZLimit":7,"angularZMotion":8,"configuredInWorldSpace":9,"highAngularXLimit":10,"linearLimit":11,"linearLimitSpring":12,"lowAngularXLimit":13,"rotationDriveMode":14,"secondaryAxis":15,"slerpDrive":18,"swapBodies":19,"targetAngularVelocity":20,"targetPosition":23,"targetRotation":26,"targetVelocity":30,"xDrive":33,"xMotion":34,"yDrive":35,"yMotion":36,"zDrive":37,"zMotion":38,"connectedBody":39,"axis":41,"anchor":44,"connectedAnchor":47,"autoConfigureConnectedAnchor":50,"massScale":51,"connectedMassScale":52,"enableCollision":53,"breakForce":54,"breakTorque":55},"Luna.Unity.DTO.UnityEngine.Components.CapsuleCollider":{"center":0,"radius":3,"height":4,"direction":5,"enabled":6,"isTrigger":7,"material":8},"Luna.Unity.DTO.UnityEngine.Components.Animator":{"animatorController":0,"avatar":2,"updateMode":4,"hasTransformHierarchy":5,"applyRootMotion":6,"humanBones":7,"enabled":8},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"customReflection":36,"defaultReflection":38,"defaultReflectionMode":40,"defaultReflectionResolution":41,"sunLightObjectId":42,"pixelLightCount":43,"defaultReflectionHDR":44,"hasLightDataAsset":45,"hasManualGenerate":46},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2,"shadowMask":4},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"hasDepthOnlyPass":10,"isCreatedByShaderGraph":11,"disableBatching":12,"compiled":13},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"exportedForWebGl2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.AudioClip":{"name":0},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip":{"name":0,"wrapMode":1,"isLooping":2,"length":3,"curves":4,"events":5,"halfPrecision":6,"_frameRate":7,"localBounds":8,"hasMuscleCurves":9,"clipMuscleConstant":10,"clipBindingConstant":11},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve":{"path":0,"hash":1,"componentType":2,"property":3,"keys":4,"objectReferenceKeys":5},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent":{"functionName":0,"floatParameter":1,"intParameter":2,"stringParameter":3,"objectReferenceParameter":4,"time":6},"Luna.Unity.DTO.UnityEngine.Animation.Data.Bounds":{"center":0,"extends":3},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip+AnimationClipBindingConstant":{"genericBindings":0,"pptrCurveMapping":1},"Luna.Unity.DTO.UnityEngine.Assets.Font":{"name":0,"ascent":1,"originalLineHeight":2,"fontSize":3,"characterInfo":4,"texture":5,"originalFontSize":7},"Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo":{"index":0,"advance":1,"bearing":2,"glyphWidth":3,"glyphHeight":4,"minX":5,"maxX":6,"minY":7,"maxY":8,"uvBottomLeftX":9,"uvBottomLeftY":10,"uvBottomRightX":11,"uvBottomRightY":12,"uvTopLeftX":13,"uvTopLeftY":14,"uvTopRightX":15,"uvTopRightY":16},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController":{"name":0,"layers":1,"parameters":2,"animationClips":3,"avatarUnsupported":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer":{"name":0,"defaultWeight":1,"blendingMode":2,"avatarMask":3,"syncedLayerIndex":4,"syncedLayerAffectsTiming":5,"syncedLayers":6,"stateMachine":7},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine":{"id":0,"name":1,"path":2,"states":3,"machines":4,"entryStateTransitions":5,"exitStateTransitions":6,"anyStateTransitions":7,"defaultStateId":8},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState":{"id":0,"name":1,"cycleOffset":2,"cycleOffsetParameter":3,"cycleOffsetParameterActive":4,"mirror":5,"mirrorParameter":6,"mirrorParameterActive":7,"motionId":8,"nameHash":9,"fullPathHash":10,"speed":11,"speedParameter":12,"speedParameterActive":13,"tag":14,"tagHash":15,"writeDefaultValues":16,"behaviours":17,"transitions":18},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition":{"fullPath":0,"canTransitionToSelf":1,"duration":2,"exitTime":3,"hasExitTime":4,"hasFixedDuration":5,"interruptionSource":6,"offset":7,"orderedInterruption":8,"destinationStateId":9,"isExit":10,"mute":11,"solo":12,"conditions":13},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition":{"mode":0,"parameter":1,"threshold":2},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition":{"destinationStateId":0,"isExit":1,"mute":2,"solo":3,"conditions":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter":{"defaultBool":0,"defaultFloat":1,"defaultInt":2,"name":3,"nameHash":4,"type":5},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorOverrideController":{"name":0,"_runtimeAnimatorController":1,"_originalAnimationClips":3,"_overrideAnimationClips":4,"_animationClips":5,"_animationClipPairs":6},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableStaticBatching":9,"enableDynamicBatching":10,"usePreservativeDynamicBatching":11,"lightmapEncodingQuality":12,"desiredColorSpace":13,"allTags":14},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.Avatar":{"name":0,"tos":1,"constant":2,"isValid":3,"isHuman":4,"hasRootMotion":5},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.Avatar+TOSPair":{"hash":0,"path":1},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame":{"weight":0,"vertices":1,"normals":2,"tangents":3},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey":{"time":0,"value":1}}

Deserializers.requiredComponents = {"52":[53],"54":[53],"55":[53],"56":[53],"57":[53],"58":[53],"59":[33],"60":[7],"61":[37],"38":[37],"62":[37],"63":[37],"64":[37],"65":[37],"66":[67],"68":[67],"69":[67],"70":[67],"71":[67],"72":[67],"73":[67],"74":[67],"75":[67],"76":[67],"77":[67],"78":[67],"79":[67],"80":[7],"81":[35],"82":[83],"84":[83],"25":[24],"85":[24],"86":[28,24],"87":[35],"88":[28,24],"89":[24],"90":[24],"91":[35,24],"92":[24,28],"93":[94],"95":[94],"96":[94],"97":[24],"98":[24],"27":[25],"31":[28,24],"99":[24],"26":[25],"100":[24],"101":[24],"102":[24],"103":[24],"104":[24],"105":[24],"106":[24],"107":[24],"108":[24],"21":[28,24],"109":[24],"110":[24],"111":[24],"112":[24],"20":[28,24],"113":[24],"114":[12],"115":[12],"13":[12],"116":[12],"117":[7],"118":[7]}

Deserializers.types = ["UnityEngine.Shader","UnityEngine.Texture2D","UnityEngine.Transform","UnityEngine.ParticleSystem","UnityEngine.ParticleSystemRenderer","UnityEngine.Mesh","UnityEngine.Material","UnityEngine.Camera","UnityEngine.AudioListener","UnityEngine.MonoBehaviour","CameraController","UnityEngine.EventSystems.UIBehaviour","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","UnityEngine.Light","GameController","UnityEngine.GameObject","UnityEngine.UI.Button","UnityEngine.AudioClip","LunaController","UnityEngine.UI.Text","UnityEngine.UI.RawImage","UnityEngine.AudioSource","AudioController","UnityEngine.RectTransform","UnityEngine.Canvas","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","UnityEngine.CanvasRenderer","UnityEngine.Font","DG.Tweening.DOTweenAnimation","UnityEngine.UI.Image","UnityEngine.Sprite","UnityEngine.SkinnedMeshRenderer","UnityEngine.MeshFilter","UnityEngine.MeshRenderer","UnityEngine.BoxCollider","UnityEngine.Rigidbody","UnityEngine.ConfigurableJoint","BodyPiece","UnityEngine.CapsuleCollider","TakeDamage","UnityEngine.Animator","UnityEngine.AnimatorOverrideController","UnityEngine.Avatar","BodyController","Dragable","UnityEditor.Animations.AnimatorController","DragController","UnityEngine.Cubemap","UnityEngine.AnimationClip","DG.Tweening.Core.DOTweenSettings","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.FlareLayer","UnityEngine.CharacterJoint","UnityEngine.ConstantForce","UnityEngine.FixedJoint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.CompositeCollider2D","UnityEngine.Rigidbody2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text","TMPro.TextContainer","TMPro.TextMeshPro","TMPro.TextMeshProUGUI","Unity.VisualScripting.SceneVariables","Unity.VisualScripting.Variables","Unity.VisualScripting.ScriptMachine","Unity.VisualScripting.StateMachine","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.Mask","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RectMask2D","UnityEngine.UI.ScrollRect","UnityEngine.UI.Scrollbar","UnityEngine.UI.Slider","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster"]

Deserializers.unityVersion = "6000.0.78f1";

Deserializers.productName = "SRG_V01";

Deserializers.lunaInitializationTime = "07/21/2026 03:45:20";

Deserializers.lunaDaysRunning = "5.9";

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

Deserializers.buildID = "8d0ec539-9567-45ab-b3e1-056843fb7ccc";

Deserializers.runtimeInitializeOnLoadInfos = [[["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"],["UnityEngine","AI","NavMesh","ClearPreUpdateListeners"]],[],[],[["UnityEngine","Timeline","AnimatorBindingCache","ResetStaticsOnLoad"],["UnityEngine","Timeline","TrackAsset","ResetStaticsOnLoad"],["UnityEngine","Timeline","AnimationPreviewUtilities","ResetStaticsOnLoad"]]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

