var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i1600 = root || request.c( 'UnityEngine.JointSpring' )
  var i1601 = data
  i1600.spring = i1601[0]
  i1600.damper = i1601[1]
  i1600.targetPosition = i1601[2]
  return i1600
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i1602 = root || request.c( 'UnityEngine.JointMotor' )
  var i1603 = data
  i1602.m_TargetVelocity = i1603[0]
  i1602.m_Force = i1603[1]
  i1602.m_FreeSpin = i1603[2]
  return i1602
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i1604 = root || request.c( 'UnityEngine.JointLimits' )
  var i1605 = data
  i1604.m_Min = i1605[0]
  i1604.m_Max = i1605[1]
  i1604.m_Bounciness = i1605[2]
  i1604.m_BounceMinVelocity = i1605[3]
  i1604.m_ContactDistance = i1605[4]
  i1604.minBounce = i1605[5]
  i1604.maxBounce = i1605[6]
  return i1604
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i1606 = root || request.c( 'UnityEngine.JointDrive' )
  var i1607 = data
  i1606.m_PositionSpring = i1607[0]
  i1606.m_PositionDamper = i1607[1]
  i1606.m_MaximumForce = i1607[2]
  i1606.m_UseAcceleration = i1607[3]
  return i1606
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i1608 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i1609 = data
  i1608.m_Spring = i1609[0]
  i1608.m_Damper = i1609[1]
  return i1608
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i1610 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i1611 = data
  i1610.m_Limit = i1611[0]
  i1610.m_Bounciness = i1611[1]
  i1610.m_ContactDistance = i1611[2]
  return i1610
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i1612 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i1613 = data
  i1612.m_ExtremumSlip = i1613[0]
  i1612.m_ExtremumValue = i1613[1]
  i1612.m_AsymptoteSlip = i1613[2]
  i1612.m_AsymptoteValue = i1613[3]
  i1612.m_Stiffness = i1613[4]
  return i1612
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i1614 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i1615 = data
  i1614.m_LowerAngle = i1615[0]
  i1614.m_UpperAngle = i1615[1]
  return i1614
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i1616 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i1617 = data
  i1616.m_MotorSpeed = i1617[0]
  i1616.m_MaximumMotorTorque = i1617[1]
  return i1616
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i1618 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i1619 = data
  i1618.m_DampingRatio = i1619[0]
  i1618.m_Frequency = i1619[1]
  i1618.m_Angle = i1619[2]
  return i1618
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i1620 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i1621 = data
  i1620.m_LowerTranslation = i1621[0]
  i1620.m_UpperTranslation = i1621[1]
  return i1620
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i1622 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i1623 = data
  i1622.name = i1623[0]
  i1622.width = i1623[1]
  i1622.height = i1623[2]
  i1622.mipmapCount = i1623[3]
  i1622.anisoLevel = i1623[4]
  i1622.filterMode = i1623[5]
  i1622.hdr = !!i1623[6]
  i1622.format = i1623[7]
  i1622.wrapMode = i1623[8]
  i1622.alphaIsTransparency = !!i1623[9]
  i1622.alphaSource = i1623[10]
  i1622.graphicsFormat = i1623[11]
  i1622.sRGBTexture = !!i1623[12]
  i1622.desiredColorSpace = i1623[13]
  i1622.wrapU = i1623[14]
  i1622.wrapV = i1623[15]
  return i1622
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i1624 = root || new pc.UnityMaterial()
  var i1625 = data
  i1624.name = i1625[0]
  request.r(i1625[1], i1625[2], 0, i1624, 'shader')
  i1624.renderQueue = i1625[3]
  i1624.enableInstancing = !!i1625[4]
  var i1627 = i1625[5]
  var i1626 = []
  for(var i = 0; i < i1627.length; i += 1) {
    i1626.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i1627[i + 0]) );
  }
  i1624.floatParameters = i1626
  var i1629 = i1625[6]
  var i1628 = []
  for(var i = 0; i < i1629.length; i += 1) {
    i1628.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i1629[i + 0]) );
  }
  i1624.colorParameters = i1628
  var i1631 = i1625[7]
  var i1630 = []
  for(var i = 0; i < i1631.length; i += 1) {
    i1630.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i1631[i + 0]) );
  }
  i1624.vectorParameters = i1630
  var i1633 = i1625[8]
  var i1632 = []
  for(var i = 0; i < i1633.length; i += 1) {
    i1632.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i1633[i + 0]) );
  }
  i1624.textureParameters = i1632
  var i1635 = i1625[9]
  var i1634 = []
  for(var i = 0; i < i1635.length; i += 1) {
    i1634.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i1635[i + 0]) );
  }
  i1624.materialFlags = i1634
  return i1624
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i1638 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i1639 = data
  i1638.name = i1639[0]
  i1638.value = i1639[1]
  return i1638
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i1642 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i1643 = data
  i1642.name = i1643[0]
  i1642.value = new pc.Color(i1643[1], i1643[2], i1643[3], i1643[4])
  return i1642
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i1646 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i1647 = data
  i1646.name = i1647[0]
  i1646.value = new pc.Vec4( i1647[1], i1647[2], i1647[3], i1647[4] )
  return i1646
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i1650 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i1651 = data
  i1650.name = i1651[0]
  request.r(i1651[1], i1651[2], 0, i1650, 'value')
  return i1650
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i1654 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i1655 = data
  i1654.name = i1655[0]
  i1654.enabled = !!i1655[1]
  return i1654
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i1656 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i1657 = data
  i1656.position = new pc.Vec3( i1657[0], i1657[1], i1657[2] )
  i1656.scale = new pc.Vec3( i1657[3], i1657[4], i1657[5] )
  i1656.rotation = new pc.Quat(i1657[6], i1657[7], i1657[8], i1657[9])
  return i1656
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer"] = function (request, data, root) {
  var i1658 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer' )
  var i1659 = data
  i1658.color = new pc.Color(i1659[0], i1659[1], i1659[2], i1659[3])
  request.r(i1659[4], i1659[5], 0, i1658, 'sprite')
  i1658.flipX = !!i1659[6]
  i1658.flipY = !!i1659[7]
  i1658.drawMode = i1659[8]
  i1658.size = new pc.Vec2( i1659[9], i1659[10] )
  i1658.tileMode = i1659[11]
  i1658.adaptiveModeThreshold = i1659[12]
  i1658.maskInteraction = i1659[13]
  i1658.spriteSortPoint = i1659[14]
  i1658.enabled = !!i1659[15]
  request.r(i1659[16], i1659[17], 0, i1658, 'sharedMaterial')
  var i1661 = i1659[18]
  var i1660 = []
  for(var i = 0; i < i1661.length; i += 2) {
  request.r(i1661[i + 0], i1661[i + 1], 2, i1660, '')
  }
  i1658.sharedMaterials = i1660
  i1658.receiveShadows = !!i1659[19]
  i1658.shadowCastingMode = i1659[20]
  i1658.sortingLayerID = i1659[21]
  i1658.sortingOrder = i1659[22]
  i1658.lightmapIndex = i1659[23]
  i1658.lightmapSceneIndex = i1659[24]
  i1658.lightmapScaleOffset = new pc.Vec4( i1659[25], i1659[26], i1659[27], i1659[28] )
  i1658.lightProbeUsage = i1659[29]
  i1658.reflectionProbeUsage = i1659[30]
  return i1658
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CircleCollider2D"] = function (request, data, root) {
  var i1664 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CircleCollider2D' )
  var i1665 = data
  i1664.radius = i1665[0]
  i1664.enabled = !!i1665[1]
  i1664.isTrigger = !!i1665[2]
  i1664.usedByEffector = !!i1665[3]
  i1664.density = i1665[4]
  i1664.offset = new pc.Vec2( i1665[5], i1665[6] )
  request.r(i1665[7], i1665[8], 0, i1664, 'material')
  return i1664
}

Deserializers["BulletController"] = function (request, data, root) {
  var i1666 = root || request.c( 'BulletController' )
  var i1667 = data
  i1666.speed = i1667[0]
  i1666.damage = i1667[1]
  request.r(i1667[2], i1667[3], 0, i1666, 'hitMonsterSound')
  request.r(i1667[4], i1667[5], 0, i1666, 'hitSound')
  i1666.lifeTime = i1667[6]
  i1666.hit = !!i1667[7]
  return i1666
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i1668 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i1669 = data
  i1668.name = i1669[0]
  i1668.tagId = i1669[1]
  i1668.enabled = !!i1669[2]
  i1668.isStatic = !!i1669[3]
  i1668.layer = i1669[4]
  return i1668
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SortingGroup"] = function (request, data, root) {
  var i1670 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SortingGroup' )
  var i1671 = data
  i1670.sortingLayerIndex = i1671[0]
  i1670.sortingOrder = i1671[1]
  i1670.sortingLayerName = i1671[2]
  i1670.enabled = !!i1671[3]
  return i1670
}

Deserializers["MonsterController"] = function (request, data, root) {
  var i1672 = root || request.c( 'MonsterController' )
  var i1673 = data
  i1672.maxHP = i1673[0]
  i1672.currentHP = i1673[1]
  var i1675 = i1673[2]
  var i1674 = new (System.Collections.Generic.List$1(Bridge.ns('Piece')))
  for(var i = 0; i < i1675.length; i += 1) {
    i1674.add(request.d('Piece', i1675[i + 0]));
  }
  i1672.pieces = i1674
  request.r(i1673[3], i1673[4], 0, i1672, 'deadSFX')
  i1672.maxForce = new pc.Vec2( i1673[5], i1673[6] )
  i1672.minForce = new pc.Vec2( i1673[7], i1673[8] )
  request.r(i1673[9], i1673[10], 0, i1672, 'balance')
  i1672.isDead = !!i1673[11]
  return i1672
}

Deserializers["Piece"] = function (request, data, root) {
  var i1678 = root || request.c( 'Piece' )
  var i1679 = data
  request.r(i1679[0], i1679[1], 0, i1678, 'Joint')
  request.r(i1679[2], i1679[3], 0, i1678, 'Rb')
  return i1678
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Rigidbody2D"] = function (request, data, root) {
  var i1680 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Rigidbody2D' )
  var i1681 = data
  i1680.bodyType = i1681[0]
  request.r(i1681[1], i1681[2], 0, i1680, 'material')
  i1680.simulated = !!i1681[3]
  i1680.useAutoMass = !!i1681[4]
  i1680.mass = i1681[5]
  i1680.drag = i1681[6]
  i1680.angularDrag = i1681[7]
  i1680.gravityScale = i1681[8]
  i1680.collisionDetectionMode = i1681[9]
  i1680.sleepMode = i1681[10]
  i1680.constraints = i1681[11]
  return i1680
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D"] = function (request, data, root) {
  var i1682 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D' )
  var i1683 = data
  i1682.usedByComposite = !!i1683[0]
  i1682.autoTiling = !!i1683[1]
  i1682.size = new pc.Vec2( i1683[2], i1683[3] )
  i1682.edgeRadius = i1683[4]
  i1682.enabled = !!i1683[5]
  i1682.isTrigger = !!i1683[6]
  i1682.usedByEffector = !!i1683[7]
  i1682.density = i1683[8]
  i1682.offset = new pc.Vec2( i1683[9], i1683[10] )
  request.r(i1683[11], i1683[12], 0, i1682, 'material')
  return i1682
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.HingeJoint2D"] = function (request, data, root) {
  var i1684 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.HingeJoint2D' )
  var i1685 = data
  i1684.useLimits = !!i1685[0]
  i1684.limits = request.d('UnityEngine.JointAngleLimits2D', i1685[1], i1684.limits)
  i1684.useMotor = !!i1685[2]
  i1684.motor = request.d('UnityEngine.JointMotor2D', i1685[3], i1684.motor)
  i1684.anchor = new pc.Vec2( i1685[4], i1685[5] )
  i1684.connectedAnchor = new pc.Vec2( i1685[6], i1685[7] )
  i1684.autoConfigureConnectedAnchor = !!i1685[8]
  request.r(i1685[9], i1685[10], 0, i1684, 'connectedBody')
  i1684.breakForce = i1685[11]
  i1684.breakTorque = i1685[12]
  i1684.enableCollision = !!i1685[13]
  i1684.enabled = !!i1685[14]
  return i1684
}

Deserializers["BalanceController"] = function (request, data, root) {
  var i1686 = root || request.c( 'BalanceController' )
  var i1687 = data
  i1686.targetRotation = i1687[0]
  i1686.force = i1687[1]
  return i1686
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i1688 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i1689 = data
  i1688.name = i1689[0]
  i1688.index = i1689[1]
  i1688.startup = !!i1689[2]
  return i1688
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i1690 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i1691 = data
  i1690.aspect = i1691[0]
  i1690.orthographic = !!i1691[1]
  i1690.orthographicSize = i1691[2]
  i1690.backgroundColor = new pc.Color(i1691[3], i1691[4], i1691[5], i1691[6])
  i1690.nearClipPlane = i1691[7]
  i1690.farClipPlane = i1691[8]
  i1690.fieldOfView = i1691[9]
  i1690.depth = i1691[10]
  i1690.clearFlags = i1691[11]
  i1690.cullingMask = i1691[12]
  i1690.rect = i1691[13]
  request.r(i1691[14], i1691[15], 0, i1690, 'targetTexture')
  i1690.usePhysicalProperties = !!i1691[16]
  i1690.focalLength = i1691[17]
  i1690.sensorSize = new pc.Vec2( i1691[18], i1691[19] )
  i1690.lensShift = new pc.Vec2( i1691[20], i1691[21] )
  i1690.gateFit = i1691[22]
  i1690.commandBufferCount = i1691[23]
  i1690.cameraType = i1691[24]
  i1690.enabled = !!i1691[25]
  return i1690
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i1692 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i1693 = data
  request.r(i1693[0], i1693[1], 0, i1692, 'm_FirstSelected')
  i1692.m_sendNavigationEvents = !!i1693[2]
  i1692.m_DragThreshold = i1693[3]
  return i1692
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i1694 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i1695 = data
  i1694.m_HorizontalAxis = i1695[0]
  i1694.m_VerticalAxis = i1695[1]
  i1694.m_SubmitButton = i1695[2]
  i1694.m_CancelButton = i1695[3]
  i1694.m_InputActionsPerSecond = i1695[4]
  i1694.m_RepeatDelay = i1695[5]
  i1694.m_ForceModuleActive = !!i1695[6]
  i1694.m_SendPointerHoverToParent = !!i1695[7]
  return i1694
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i1696 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i1697 = data
  i1696.pivot = new pc.Vec2( i1697[0], i1697[1] )
  i1696.anchorMin = new pc.Vec2( i1697[2], i1697[3] )
  i1696.anchorMax = new pc.Vec2( i1697[4], i1697[5] )
  i1696.sizeDelta = new pc.Vec2( i1697[6], i1697[7] )
  i1696.anchoredPosition3D = new pc.Vec3( i1697[8], i1697[9], i1697[10] )
  i1696.rotation = new pc.Quat(i1697[11], i1697[12], i1697[13], i1697[14])
  i1696.scale = new pc.Vec3( i1697[15], i1697[16], i1697[17] )
  return i1696
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i1698 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i1699 = data
  i1698.planeDistance = i1699[0]
  i1698.referencePixelsPerUnit = i1699[1]
  i1698.isFallbackOverlay = !!i1699[2]
  i1698.renderMode = i1699[3]
  i1698.renderOrder = i1699[4]
  i1698.sortingLayerName = i1699[5]
  i1698.sortingOrder = i1699[6]
  i1698.scaleFactor = i1699[7]
  request.r(i1699[8], i1699[9], 0, i1698, 'worldCamera')
  i1698.overrideSorting = !!i1699[10]
  i1698.pixelPerfect = !!i1699[11]
  i1698.targetDisplay = i1699[12]
  i1698.overridePixelPerfect = !!i1699[13]
  i1698.enabled = !!i1699[14]
  return i1698
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i1700 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i1701 = data
  i1700.m_UiScaleMode = i1701[0]
  i1700.m_ReferencePixelsPerUnit = i1701[1]
  i1700.m_ScaleFactor = i1701[2]
  i1700.m_ReferenceResolution = new pc.Vec2( i1701[3], i1701[4] )
  i1700.m_ScreenMatchMode = i1701[5]
  i1700.m_MatchWidthOrHeight = i1701[6]
  i1700.m_PhysicalUnit = i1701[7]
  i1700.m_FallbackScreenDPI = i1701[8]
  i1700.m_DefaultSpriteDPI = i1701[9]
  i1700.m_DynamicPixelsPerUnit = i1701[10]
  i1700.m_PresetInfoIsWorld = !!i1701[11]
  return i1700
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i1702 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i1703 = data
  i1702.m_IgnoreReversedGraphics = !!i1703[0]
  i1702.m_BlockingObjects = i1703[1]
  i1702.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i1703[2] )
  return i1702
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i1704 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i1705 = data
  i1704.cullTransparentMesh = !!i1705[0]
  return i1704
}

Deserializers["UnityEngine.UI.RawImage"] = function (request, data, root) {
  var i1706 = root || request.c( 'UnityEngine.UI.RawImage' )
  var i1707 = data
  request.r(i1707[0], i1707[1], 0, i1706, 'm_Texture')
  i1706.m_UVRect = UnityEngine.Rect.MinMaxRect(i1707[2], i1707[3], i1707[4], i1707[5])
  request.r(i1707[6], i1707[7], 0, i1706, 'm_Material')
  i1706.m_Maskable = !!i1707[8]
  i1706.m_Color = new pc.Color(i1707[9], i1707[10], i1707[11], i1707[12])
  i1706.m_RaycastTarget = !!i1707[13]
  i1706.m_RaycastPadding = new pc.Vec4( i1707[14], i1707[15], i1707[16], i1707[17] )
  return i1706
}

Deserializers["UnityEngine.UI.AspectRatioFitter"] = function (request, data, root) {
  var i1708 = root || request.c( 'UnityEngine.UI.AspectRatioFitter' )
  var i1709 = data
  i1708.m_AspectMode = i1709[0]
  i1708.m_AspectRatio = i1709[1]
  return i1708
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i1710 = root || request.c( 'UnityEngine.UI.Button' )
  var i1711 = data
  i1710.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i1711[0], i1710.m_OnClick)
  i1710.m_Navigation = request.d('UnityEngine.UI.Navigation', i1711[1], i1710.m_Navigation)
  i1710.m_Transition = i1711[2]
  i1710.m_Colors = request.d('UnityEngine.UI.ColorBlock', i1711[3], i1710.m_Colors)
  i1710.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i1711[4], i1710.m_SpriteState)
  i1710.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i1711[5], i1710.m_AnimationTriggers)
  i1710.m_Interactable = !!i1711[6]
  request.r(i1711[7], i1711[8], 0, i1710, 'm_TargetGraphic')
  return i1710
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i1712 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i1713 = data
  i1712.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i1713[0], i1712.m_PersistentCalls)
  return i1712
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i1714 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i1715 = data
  var i1717 = i1715[0]
  var i1716 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i1717.length; i += 1) {
    i1716.add(request.d('UnityEngine.Events.PersistentCall', i1717[i + 0]));
  }
  i1714.m_Calls = i1716
  return i1714
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i1720 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i1721 = data
  request.r(i1721[0], i1721[1], 0, i1720, 'm_Target')
  i1720.m_TargetAssemblyTypeName = i1721[2]
  i1720.m_MethodName = i1721[3]
  i1720.m_Mode = i1721[4]
  i1720.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i1721[5], i1720.m_Arguments)
  i1720.m_CallState = i1721[6]
  return i1720
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i1722 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i1723 = data
  i1722.m_Mode = i1723[0]
  i1722.m_WrapAround = !!i1723[1]
  request.r(i1723[2], i1723[3], 0, i1722, 'm_SelectOnUp')
  request.r(i1723[4], i1723[5], 0, i1722, 'm_SelectOnDown')
  request.r(i1723[6], i1723[7], 0, i1722, 'm_SelectOnLeft')
  request.r(i1723[8], i1723[9], 0, i1722, 'm_SelectOnRight')
  return i1722
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i1724 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i1725 = data
  i1724.m_NormalColor = new pc.Color(i1725[0], i1725[1], i1725[2], i1725[3])
  i1724.m_HighlightedColor = new pc.Color(i1725[4], i1725[5], i1725[6], i1725[7])
  i1724.m_PressedColor = new pc.Color(i1725[8], i1725[9], i1725[10], i1725[11])
  i1724.m_SelectedColor = new pc.Color(i1725[12], i1725[13], i1725[14], i1725[15])
  i1724.m_DisabledColor = new pc.Color(i1725[16], i1725[17], i1725[18], i1725[19])
  i1724.m_ColorMultiplier = i1725[20]
  i1724.m_FadeDuration = i1725[21]
  return i1724
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i1726 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i1727 = data
  request.r(i1727[0], i1727[1], 0, i1726, 'm_HighlightedSprite')
  request.r(i1727[2], i1727[3], 0, i1726, 'm_PressedSprite')
  request.r(i1727[4], i1727[5], 0, i1726, 'm_SelectedSprite')
  request.r(i1727[6], i1727[7], 0, i1726, 'm_DisabledSprite')
  return i1726
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i1728 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i1729 = data
  i1728.m_NormalTrigger = i1729[0]
  i1728.m_HighlightedTrigger = i1729[1]
  i1728.m_PressedTrigger = i1729[2]
  i1728.m_SelectedTrigger = i1729[3]
  i1728.m_DisabledTrigger = i1729[4]
  return i1728
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i1730 = root || request.c( 'UnityEngine.UI.Image' )
  var i1731 = data
  request.r(i1731[0], i1731[1], 0, i1730, 'm_Sprite')
  i1730.m_Type = i1731[2]
  i1730.m_PreserveAspect = !!i1731[3]
  i1730.m_FillCenter = !!i1731[4]
  i1730.m_FillMethod = i1731[5]
  i1730.m_FillAmount = i1731[6]
  i1730.m_FillClockwise = !!i1731[7]
  i1730.m_FillOrigin = i1731[8]
  i1730.m_UseSpriteMesh = !!i1731[9]
  i1730.m_PixelsPerUnitMultiplier = i1731[10]
  request.r(i1731[11], i1731[12], 0, i1730, 'm_Material')
  i1730.m_Maskable = !!i1731[13]
  i1730.m_Color = new pc.Color(i1731[14], i1731[15], i1731[16], i1731[17])
  i1730.m_RaycastTarget = !!i1731[18]
  i1730.m_RaycastPadding = new pc.Vec4( i1731[19], i1731[20], i1731[21], i1731[22] )
  return i1730
}

Deserializers["UnityEngine.UI.Text"] = function (request, data, root) {
  var i1732 = root || request.c( 'UnityEngine.UI.Text' )
  var i1733 = data
  i1732.m_FontData = request.d('UnityEngine.UI.FontData', i1733[0], i1732.m_FontData)
  i1732.m_Text = i1733[1]
  request.r(i1733[2], i1733[3], 0, i1732, 'm_Material')
  i1732.m_Maskable = !!i1733[4]
  i1732.m_Color = new pc.Color(i1733[5], i1733[6], i1733[7], i1733[8])
  i1732.m_RaycastTarget = !!i1733[9]
  i1732.m_RaycastPadding = new pc.Vec4( i1733[10], i1733[11], i1733[12], i1733[13] )
  return i1732
}

Deserializers["UnityEngine.UI.FontData"] = function (request, data, root) {
  var i1734 = root || request.c( 'UnityEngine.UI.FontData' )
  var i1735 = data
  request.r(i1735[0], i1735[1], 0, i1734, 'm_Font')
  i1734.m_FontSize = i1735[2]
  i1734.m_FontStyle = i1735[3]
  i1734.m_BestFit = !!i1735[4]
  i1734.m_MinSize = i1735[5]
  i1734.m_MaxSize = i1735[6]
  i1734.m_Alignment = i1735[7]
  i1734.m_AlignByGeometry = !!i1735[8]
  i1734.m_RichText = !!i1735[9]
  i1734.m_HorizontalOverflow = i1735[10]
  i1734.m_VerticalOverflow = i1735[11]
  i1734.m_LineSpacing = i1735[12]
  return i1734
}

Deserializers["DG.Tweening.DOTweenAnimation"] = function (request, data, root) {
  var i1736 = root || request.c( 'DG.Tweening.DOTweenAnimation' )
  var i1737 = data
  i1736.targetIsSelf = !!i1737[0]
  request.r(i1737[1], i1737[2], 0, i1736, 'targetGO')
  i1736.tweenTargetIsTargetGO = !!i1737[3]
  i1736.delay = i1737[4]
  i1736.duration = i1737[5]
  i1736.easeType = i1737[6]
  i1736.easeCurve = new pc.AnimationCurve( { keys_flow: i1737[7] } )
  i1736.loopType = i1737[8]
  i1736.loops = i1737[9]
  i1736.id = i1737[10]
  i1736.isRelative = !!i1737[11]
  i1736.isFrom = !!i1737[12]
  i1736.isIndependentUpdate = !!i1737[13]
  i1736.autoKill = !!i1737[14]
  i1736.autoGenerate = !!i1737[15]
  i1736.isActive = !!i1737[16]
  i1736.isValid = !!i1737[17]
  request.r(i1737[18], i1737[19], 0, i1736, 'target')
  i1736.animationType = i1737[20]
  i1736.targetType = i1737[21]
  i1736.forcedTargetType = i1737[22]
  i1736.autoPlay = !!i1737[23]
  i1736.useTargetAsV3 = !!i1737[24]
  i1736.endValueFloat = i1737[25]
  i1736.endValueV3 = new pc.Vec3( i1737[26], i1737[27], i1737[28] )
  i1736.endValueV2 = new pc.Vec2( i1737[29], i1737[30] )
  i1736.endValueColor = new pc.Color(i1737[31], i1737[32], i1737[33], i1737[34])
  i1736.endValueString = i1737[35]
  i1736.endValueRect = UnityEngine.Rect.MinMaxRect(i1737[36], i1737[37], i1737[38], i1737[39])
  request.r(i1737[40], i1737[41], 0, i1736, 'endValueTransform')
  i1736.optionalBool0 = !!i1737[42]
  i1736.optionalBool1 = !!i1737[43]
  i1736.optionalFloat0 = i1737[44]
  i1736.optionalInt0 = i1737[45]
  i1736.optionalRotationMode = i1737[46]
  i1736.optionalScrambleMode = i1737[47]
  i1736.optionalShakeRandomnessMode = i1737[48]
  i1736.optionalString = i1737[49]
  i1736.updateType = i1737[50]
  i1736.isSpeedBased = !!i1737[51]
  i1736.hasOnStart = !!i1737[52]
  i1736.hasOnPlay = !!i1737[53]
  i1736.hasOnUpdate = !!i1737[54]
  i1736.hasOnStepComplete = !!i1737[55]
  i1736.hasOnComplete = !!i1737[56]
  i1736.hasOnTweenCreated = !!i1737[57]
  i1736.hasOnRewind = !!i1737[58]
  i1736.onStart = request.d('UnityEngine.Events.UnityEvent', i1737[59], i1736.onStart)
  i1736.onPlay = request.d('UnityEngine.Events.UnityEvent', i1737[60], i1736.onPlay)
  i1736.onUpdate = request.d('UnityEngine.Events.UnityEvent', i1737[61], i1736.onUpdate)
  i1736.onStepComplete = request.d('UnityEngine.Events.UnityEvent', i1737[62], i1736.onStepComplete)
  i1736.onComplete = request.d('UnityEngine.Events.UnityEvent', i1737[63], i1736.onComplete)
  i1736.onTweenCreated = request.d('UnityEngine.Events.UnityEvent', i1737[64], i1736.onTweenCreated)
  i1736.onRewind = request.d('UnityEngine.Events.UnityEvent', i1737[65], i1736.onRewind)
  return i1736
}

Deserializers["UnityEngine.Events.UnityEvent"] = function (request, data, root) {
  var i1738 = root || request.c( 'UnityEngine.Events.UnityEvent' )
  var i1739 = data
  i1738.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i1739[0], i1738.m_PersistentCalls)
  return i1738
}

Deserializers["PlayerController"] = function (request, data, root) {
  var i1740 = root || request.c( 'PlayerController' )
  var i1741 = data
  i1740.ShootCD = i1741[0]
  request.r(i1741[1], i1741[2], 0, i1740, 'currentMonster')
  request.r(i1741[3], i1741[4], 0, i1740, 'left')
  request.r(i1741[5], i1741[6], 0, i1740, 'right')
  request.r(i1741[7], i1741[8], 0, i1740, 'gun')
  request.r(i1741[9], i1741[10], 0, i1740, 'bulletPrefab')
  i1740.canShoot = !!i1741[11]
  i1740.onCD = !!i1741[12]
  request.r(i1741[13], i1741[14], 0, i1740, 'poolParent')
  request.r(i1741[15], i1741[16], 0, i1740, 'shootSound')
  i1740.timeMotor = i1741[17]
  return i1740
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.TargetJoint2D"] = function (request, data, root) {
  var i1742 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.TargetJoint2D' )
  var i1743 = data
  i1742.autoConfigureTarget = !!i1743[0]
  i1742.target = new pc.Vec2( i1743[1], i1743[2] )
  i1742.anchor = new pc.Vec2( i1743[3], i1743[4] )
  i1742.maxForce = i1743[5]
  i1742.dampingRatio = i1743[6]
  i1742.frequency = i1743[7]
  request.r(i1743[8], i1743[9], 0, i1742, 'connectedBody')
  i1742.breakForce = i1743[10]
  i1742.breakTorque = i1743[11]
  i1742.enableCollision = !!i1743[12]
  i1742.enabled = !!i1743[13]
  return i1742
}

Deserializers["GameController"] = function (request, data, root) {
  var i1744 = root || request.c( 'GameController' )
  var i1745 = data
  i1744.OnAddMonster = request.d('System.Action', i1745[0], i1744.OnAddMonster)
  request.r(i1745[1], i1745[2], 0, i1744, 'area')
  request.r(i1745[3], i1745[4], 0, i1744, 'player')
  request.r(i1745[5], i1745[6], 0, i1744, 'areaTut')
  request.r(i1745[7], i1745[8], 0, i1744, 'tut')
  i1744.numMonster = i1745[9]
  var i1747 = i1745[10]
  var i1746 = new (System.Collections.Generic.List$1(Bridge.ns('Monster')))
  for(var i = 0; i < i1747.length; i += 1) {
    i1746.add(request.d('Monster', i1747[i + 0]));
  }
  i1744.monsters = i1746
  i1744.currentMonster = request.d('Monster', i1745[11], i1744.currentMonster)
  request.r(i1745[12], i1745[13], 0, i1744, 'world')
  request.r(i1745[14], i1745[15], 0, i1744, 'clickSound')
  return i1744
}

Deserializers["System.Action"] = function (request, data, root) {
  var i1748 = root || request.c( 'System.Action' )
  var i1749 = data
  return i1748
}

Deserializers["Monster"] = function (request, data, root) {
  var i1752 = root || request.c( 'Monster' )
  var i1753 = data
  request.r(i1753[0], i1753[1], 0, i1752, 'Button')
  request.r(i1753[2], i1753[3], 0, i1752, 'Selected')
  request.r(i1753[4], i1753[5], 0, i1752, 'Prefab')
  return i1752
}

Deserializers["LayoutController"] = function (request, data, root) {
  var i1754 = root || request.c( 'LayoutController' )
  var i1755 = data
  request.r(i1755[0], i1755[1], 0, i1754, 'main')
  request.r(i1755[2], i1755[3], 0, i1754, 'button')
  return i1754
}

Deserializers["LunaController"] = function (request, data, root) {
  var i1756 = root || request.c( 'LunaController' )
  var i1757 = data
  request.r(i1757[0], i1757[1], 0, i1756, 'BGTexture')
  i1756.UseTime = !!i1757[2]
  i1756.TimePlay = i1757[3]
  i1756.UseCountPlay = !!i1757[4]
  i1756.MaxCountPlay = i1757[5]
  request.r(i1757[6], i1757[7], 0, i1756, 'BGImage')
  var i1759 = i1757[8]
  var i1758 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.UI.Button')))
  for(var i = 0; i < i1759.length; i += 2) {
  request.r(i1759[i + 0], i1759[i + 1], 1, i1758, '')
  }
  i1756.CTA = i1758
  i1756.count = i1757[9]
  return i1756
}

Deserializers["AudioController"] = function (request, data, root) {
  var i1762 = root || request.c( 'AudioController' )
  var i1763 = data
  request.r(i1763[0], i1763[1], 0, i1762, 'BGM')
  request.r(i1763[2], i1763[3], 0, i1762, 'musicSource')
  request.r(i1763[4], i1763[5], 0, i1762, 'pool')
  return i1762
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.AudioSource"] = function (request, data, root) {
  var i1764 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.AudioSource' )
  var i1765 = data
  request.r(i1765[0], i1765[1], 0, i1764, 'clip')
  request.r(i1765[2], i1765[3], 0, i1764, 'outputAudioMixerGroup')
  i1764.playOnAwake = !!i1765[4]
  i1764.loop = !!i1765[5]
  i1764.time = i1765[6]
  i1764.volume = i1765[7]
  i1764.pitch = i1765[8]
  i1764.enabled = !!i1765[9]
  return i1764
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i1766 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i1767 = data
  i1766.ambientIntensity = i1767[0]
  i1766.reflectionIntensity = i1767[1]
  i1766.ambientMode = i1767[2]
  i1766.ambientLight = new pc.Color(i1767[3], i1767[4], i1767[5], i1767[6])
  i1766.ambientSkyColor = new pc.Color(i1767[7], i1767[8], i1767[9], i1767[10])
  i1766.ambientGroundColor = new pc.Color(i1767[11], i1767[12], i1767[13], i1767[14])
  i1766.ambientEquatorColor = new pc.Color(i1767[15], i1767[16], i1767[17], i1767[18])
  i1766.fogColor = new pc.Color(i1767[19], i1767[20], i1767[21], i1767[22])
  i1766.fogEndDistance = i1767[23]
  i1766.fogStartDistance = i1767[24]
  i1766.fogDensity = i1767[25]
  i1766.fog = !!i1767[26]
  request.r(i1767[27], i1767[28], 0, i1766, 'skybox')
  i1766.fogMode = i1767[29]
  var i1769 = i1767[30]
  var i1768 = []
  for(var i = 0; i < i1769.length; i += 1) {
    i1768.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i1769[i + 0]) );
  }
  i1766.lightmaps = i1768
  i1766.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i1767[31], i1766.lightProbes)
  i1766.lightmapsMode = i1767[32]
  i1766.mixedBakeMode = i1767[33]
  i1766.environmentLightingMode = i1767[34]
  i1766.ambientProbe = new pc.SphericalHarmonicsL2(i1767[35])
  request.r(i1767[36], i1767[37], 0, i1766, 'customReflection')
  request.r(i1767[38], i1767[39], 0, i1766, 'defaultReflection')
  i1766.defaultReflectionMode = i1767[40]
  i1766.defaultReflectionResolution = i1767[41]
  i1766.sunLightObjectId = i1767[42]
  i1766.pixelLightCount = i1767[43]
  i1766.defaultReflectionHDR = !!i1767[44]
  i1766.hasLightDataAsset = !!i1767[45]
  i1766.hasManualGenerate = !!i1767[46]
  return i1766
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i1772 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i1773 = data
  request.r(i1773[0], i1773[1], 0, i1772, 'lightmapColor')
  request.r(i1773[2], i1773[3], 0, i1772, 'lightmapDirection')
  request.r(i1773[4], i1773[5], 0, i1772, 'shadowMask')
  return i1772
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i1774 = root || new UnityEngine.LightProbes()
  var i1775 = data
  return i1774
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i1782 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i1783 = data
  var i1785 = i1783[0]
  var i1784 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i1785.length; i += 1) {
    i1784.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i1785[i + 0]));
  }
  i1782.ShaderCompilationErrors = i1784
  i1782.name = i1783[1]
  i1782.guid = i1783[2]
  var i1787 = i1783[3]
  var i1786 = []
  for(var i = 0; i < i1787.length; i += 1) {
    i1786.push( i1787[i + 0] );
  }
  i1782.shaderDefinedKeywords = i1786
  var i1789 = i1783[4]
  var i1788 = []
  for(var i = 0; i < i1789.length; i += 1) {
    i1788.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i1789[i + 0]) );
  }
  i1782.passes = i1788
  var i1791 = i1783[5]
  var i1790 = []
  for(var i = 0; i < i1791.length; i += 1) {
    i1790.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i1791[i + 0]) );
  }
  i1782.usePasses = i1790
  var i1793 = i1783[6]
  var i1792 = []
  for(var i = 0; i < i1793.length; i += 1) {
    i1792.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i1793[i + 0]) );
  }
  i1782.defaultParameterValues = i1792
  request.r(i1783[7], i1783[8], 0, i1782, 'unityFallbackShader')
  i1782.readDepth = !!i1783[9]
  i1782.hasDepthOnlyPass = !!i1783[10]
  i1782.isCreatedByShaderGraph = !!i1783[11]
  i1782.disableBatching = !!i1783[12]
  i1782.compiled = !!i1783[13]
  return i1782
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i1796 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i1797 = data
  i1796.shaderName = i1797[0]
  i1796.errorMessage = i1797[1]
  return i1796
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i1802 = root || new pc.UnityShaderPass()
  var i1803 = data
  i1802.id = i1803[0]
  i1802.subShaderIndex = i1803[1]
  i1802.name = i1803[2]
  i1802.passType = i1803[3]
  i1802.grabPassTextureName = i1803[4]
  i1802.usePass = !!i1803[5]
  i1802.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1803[6], i1802.zTest)
  i1802.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1803[7], i1802.zWrite)
  i1802.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1803[8], i1802.culling)
  i1802.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i1803[9], i1802.blending)
  i1802.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i1803[10], i1802.alphaBlending)
  i1802.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1803[11], i1802.colorWriteMask)
  i1802.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1803[12], i1802.offsetUnits)
  i1802.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1803[13], i1802.offsetFactor)
  i1802.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1803[14], i1802.stencilRef)
  i1802.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1803[15], i1802.stencilReadMask)
  i1802.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1803[16], i1802.stencilWriteMask)
  i1802.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1803[17], i1802.stencilOp)
  i1802.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1803[18], i1802.stencilOpFront)
  i1802.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1803[19], i1802.stencilOpBack)
  var i1805 = i1803[20]
  var i1804 = []
  for(var i = 0; i < i1805.length; i += 1) {
    i1804.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i1805[i + 0]) );
  }
  i1802.tags = i1804
  var i1807 = i1803[21]
  var i1806 = []
  for(var i = 0; i < i1807.length; i += 1) {
    i1806.push( i1807[i + 0] );
  }
  i1802.passDefinedKeywords = i1806
  var i1809 = i1803[22]
  var i1808 = []
  for(var i = 0; i < i1809.length; i += 1) {
    i1808.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i1809[i + 0]) );
  }
  i1802.passDefinedKeywordGroups = i1808
  var i1811 = i1803[23]
  var i1810 = []
  for(var i = 0; i < i1811.length; i += 1) {
    i1810.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i1811[i + 0]) );
  }
  i1802.variants = i1810
  var i1813 = i1803[24]
  var i1812 = []
  for(var i = 0; i < i1813.length; i += 1) {
    i1812.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i1813[i + 0]) );
  }
  i1802.excludedVariants = i1812
  i1802.hasDepthReader = !!i1803[25]
  return i1802
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i1814 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i1815 = data
  i1814.val = i1815[0]
  i1814.name = i1815[1]
  return i1814
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i1816 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i1817 = data
  i1816.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1817[0], i1816.src)
  i1816.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1817[1], i1816.dst)
  i1816.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1817[2], i1816.op)
  return i1816
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i1818 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i1819 = data
  i1818.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1819[0], i1818.pass)
  i1818.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1819[1], i1818.fail)
  i1818.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1819[2], i1818.zFail)
  i1818.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1819[3], i1818.comp)
  return i1818
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i1822 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i1823 = data
  i1822.name = i1823[0]
  i1822.value = i1823[1]
  return i1822
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i1826 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i1827 = data
  var i1829 = i1827[0]
  var i1828 = []
  for(var i = 0; i < i1829.length; i += 1) {
    i1828.push( i1829[i + 0] );
  }
  i1826.keywords = i1828
  i1826.hasDiscard = !!i1827[1]
  return i1826
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i1832 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i1833 = data
  i1832.passId = i1833[0]
  i1832.subShaderIndex = i1833[1]
  var i1835 = i1833[2]
  var i1834 = []
  for(var i = 0; i < i1835.length; i += 1) {
    i1834.push( i1835[i + 0] );
  }
  i1832.keywords = i1834
  i1832.vertexProgram = i1833[3]
  i1832.fragmentProgram = i1833[4]
  i1832.exportedForWebGl2 = !!i1833[5]
  i1832.readDepth = !!i1833[6]
  return i1832
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i1838 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i1839 = data
  request.r(i1839[0], i1839[1], 0, i1838, 'shader')
  i1838.pass = i1839[2]
  return i1838
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i1842 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i1843 = data
  i1842.name = i1843[0]
  i1842.type = i1843[1]
  i1842.value = new pc.Vec4( i1843[2], i1843[3], i1843[4], i1843[5] )
  i1842.textureValue = i1843[6]
  i1842.shaderPropertyFlag = i1843[7]
  return i1842
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i1844 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i1845 = data
  i1844.name = i1845[0]
  request.r(i1845[1], i1845[2], 0, i1844, 'texture')
  i1844.aabb = i1845[3]
  i1844.vertices = i1845[4]
  i1844.triangles = i1845[5]
  i1844.textureRect = UnityEngine.Rect.MinMaxRect(i1845[6], i1845[7], i1845[8], i1845[9])
  i1844.packedRect = UnityEngine.Rect.MinMaxRect(i1845[10], i1845[11], i1845[12], i1845[13])
  i1844.border = new pc.Vec4( i1845[14], i1845[15], i1845[16], i1845[17] )
  i1844.transparency = i1845[18]
  i1844.bounds = i1845[19]
  i1844.pixelsPerUnit = i1845[20]
  i1844.textureWidth = i1845[21]
  i1844.textureHeight = i1845[22]
  i1844.nativeSize = new pc.Vec2( i1845[23], i1845[24] )
  i1844.pivot = new pc.Vec2( i1845[25], i1845[26] )
  i1844.textureRectOffset = new pc.Vec2( i1845[27], i1845[28] )
  return i1844
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i1846 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i1847 = data
  i1846.name = i1847[0]
  return i1846
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font"] = function (request, data, root) {
  var i1848 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font' )
  var i1849 = data
  i1848.name = i1849[0]
  i1848.ascent = i1849[1]
  i1848.originalLineHeight = i1849[2]
  i1848.fontSize = i1849[3]
  var i1851 = i1849[4]
  var i1850 = []
  for(var i = 0; i < i1851.length; i += 1) {
    i1850.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo', i1851[i + 0]) );
  }
  i1848.characterInfo = i1850
  request.r(i1849[5], i1849[6], 0, i1848, 'texture')
  i1848.originalFontSize = i1849[7]
  return i1848
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo"] = function (request, data, root) {
  var i1854 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo' )
  var i1855 = data
  i1854.index = i1855[0]
  i1854.advance = i1855[1]
  i1854.bearing = i1855[2]
  i1854.glyphWidth = i1855[3]
  i1854.glyphHeight = i1855[4]
  i1854.minX = i1855[5]
  i1854.maxX = i1855[6]
  i1854.minY = i1855[7]
  i1854.maxY = i1855[8]
  i1854.uvBottomLeftX = i1855[9]
  i1854.uvBottomLeftY = i1855[10]
  i1854.uvBottomRightX = i1855[11]
  i1854.uvBottomRightY = i1855[12]
  i1854.uvTopLeftX = i1855[13]
  i1854.uvTopLeftY = i1855[14]
  i1854.uvTopRightX = i1855[15]
  i1854.uvTopRightY = i1855[16]
  return i1854
}

Deserializers["DG.Tweening.Core.DOTweenSettings"] = function (request, data, root) {
  var i1856 = root || request.c( 'DG.Tweening.Core.DOTweenSettings' )
  var i1857 = data
  i1856.useSafeMode = !!i1857[0]
  i1856.safeModeOptions = request.d('DG.Tweening.Core.DOTweenSettings+SafeModeOptions', i1857[1], i1856.safeModeOptions)
  i1856.timeScale = i1857[2]
  i1856.unscaledTimeScale = i1857[3]
  i1856.useSmoothDeltaTime = !!i1857[4]
  i1856.maxSmoothUnscaledTime = i1857[5]
  i1856.rewindCallbackMode = i1857[6]
  i1856.showUnityEditorReport = !!i1857[7]
  i1856.logBehaviour = i1857[8]
  i1856.drawGizmos = !!i1857[9]
  i1856.defaultRecyclable = !!i1857[10]
  i1856.defaultAutoPlay = i1857[11]
  i1856.defaultUpdateType = i1857[12]
  i1856.defaultTimeScaleIndependent = !!i1857[13]
  i1856.defaultEaseType = i1857[14]
  i1856.defaultEaseOvershootOrAmplitude = i1857[15]
  i1856.defaultEasePeriod = i1857[16]
  i1856.defaultAutoKill = !!i1857[17]
  i1856.defaultLoopType = i1857[18]
  i1856.debugMode = !!i1857[19]
  i1856.debugStoreTargetId = !!i1857[20]
  i1856.showPreviewPanel = !!i1857[21]
  i1856.storeSettingsLocation = i1857[22]
  i1856.modules = request.d('DG.Tweening.Core.DOTweenSettings+ModulesSetup', i1857[23], i1856.modules)
  i1856.createASMDEF = !!i1857[24]
  i1856.showPlayingTweens = !!i1857[25]
  i1856.showPausedTweens = !!i1857[26]
  return i1856
}

Deserializers["DG.Tweening.Core.DOTweenSettings+SafeModeOptions"] = function (request, data, root) {
  var i1858 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+SafeModeOptions' )
  var i1859 = data
  i1858.logBehaviour = i1859[0]
  i1858.nestedTweenFailureBehaviour = i1859[1]
  return i1858
}

Deserializers["DG.Tweening.Core.DOTweenSettings+ModulesSetup"] = function (request, data, root) {
  var i1860 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+ModulesSetup' )
  var i1861 = data
  i1860.showPanel = !!i1861[0]
  i1860.audioEnabled = !!i1861[1]
  i1860.physicsEnabled = !!i1861[2]
  i1860.physics2DEnabled = !!i1861[3]
  i1860.spriteEnabled = !!i1861[4]
  i1860.uiEnabled = !!i1861[5]
  i1860.textMeshProEnabled = !!i1861[6]
  i1860.tk2DEnabled = !!i1861[7]
  i1860.deAudioEnabled = !!i1861[8]
  i1860.deUnityExtendedEnabled = !!i1861[9]
  i1860.epoOutlineEnabled = !!i1861[10]
  return i1860
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i1862 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i1863 = data
  var i1865 = i1863[0]
  var i1864 = []
  for(var i = 0; i < i1865.length; i += 1) {
    i1864.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i1865[i + 0]) );
  }
  i1862.files = i1864
  i1862.componentToPrefabIds = i1863[1]
  return i1862
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i1868 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i1869 = data
  i1868.path = i1869[0]
  request.r(i1869[1], i1869[2], 0, i1868, 'unityObject')
  return i1868
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i1870 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i1871 = data
  var i1873 = i1871[0]
  var i1872 = []
  for(var i = 0; i < i1873.length; i += 1) {
    i1872.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i1873[i + 0]) );
  }
  i1870.scriptsExecutionOrder = i1872
  var i1875 = i1871[1]
  var i1874 = []
  for(var i = 0; i < i1875.length; i += 1) {
    i1874.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i1875[i + 0]) );
  }
  i1870.sortingLayers = i1874
  var i1877 = i1871[2]
  var i1876 = []
  for(var i = 0; i < i1877.length; i += 1) {
    i1876.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i1877[i + 0]) );
  }
  i1870.cullingLayers = i1876
  i1870.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i1871[3], i1870.timeSettings)
  i1870.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i1871[4], i1870.physicsSettings)
  i1870.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i1871[5], i1870.physics2DSettings)
  i1870.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i1871[6], i1870.qualitySettings)
  i1870.enableRealtimeShadows = !!i1871[7]
  i1870.enableAutoInstancing = !!i1871[8]
  i1870.enableStaticBatching = !!i1871[9]
  i1870.enableDynamicBatching = !!i1871[10]
  i1870.usePreservativeDynamicBatching = !!i1871[11]
  i1870.lightmapEncodingQuality = i1871[12]
  i1870.desiredColorSpace = i1871[13]
  var i1879 = i1871[14]
  var i1878 = []
  for(var i = 0; i < i1879.length; i += 1) {
    i1878.push( i1879[i + 0] );
  }
  i1870.allTags = i1878
  return i1870
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i1882 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i1883 = data
  i1882.name = i1883[0]
  i1882.value = i1883[1]
  return i1882
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i1886 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i1887 = data
  i1886.id = i1887[0]
  i1886.name = i1887[1]
  i1886.value = i1887[2]
  return i1886
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i1890 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i1891 = data
  i1890.id = i1891[0]
  i1890.name = i1891[1]
  return i1890
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i1892 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i1893 = data
  i1892.fixedDeltaTime = i1893[0]
  i1892.maximumDeltaTime = i1893[1]
  i1892.timeScale = i1893[2]
  i1892.maximumParticleTimestep = i1893[3]
  return i1892
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i1894 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i1895 = data
  i1894.gravity = new pc.Vec3( i1895[0], i1895[1], i1895[2] )
  i1894.defaultSolverIterations = i1895[3]
  i1894.bounceThreshold = i1895[4]
  i1894.autoSyncTransforms = !!i1895[5]
  i1894.autoSimulation = !!i1895[6]
  var i1897 = i1895[7]
  var i1896 = []
  for(var i = 0; i < i1897.length; i += 1) {
    i1896.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i1897[i + 0]) );
  }
  i1894.collisionMatrix = i1896
  return i1894
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i1900 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i1901 = data
  i1900.enabled = !!i1901[0]
  i1900.layerId = i1901[1]
  i1900.otherLayerId = i1901[2]
  return i1900
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i1902 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i1903 = data
  request.r(i1903[0], i1903[1], 0, i1902, 'material')
  i1902.gravity = new pc.Vec2( i1903[2], i1903[3] )
  i1902.positionIterations = i1903[4]
  i1902.velocityIterations = i1903[5]
  i1902.velocityThreshold = i1903[6]
  i1902.maxLinearCorrection = i1903[7]
  i1902.maxAngularCorrection = i1903[8]
  i1902.maxTranslationSpeed = i1903[9]
  i1902.maxRotationSpeed = i1903[10]
  i1902.baumgarteScale = i1903[11]
  i1902.baumgarteTOIScale = i1903[12]
  i1902.timeToSleep = i1903[13]
  i1902.linearSleepTolerance = i1903[14]
  i1902.angularSleepTolerance = i1903[15]
  i1902.defaultContactOffset = i1903[16]
  i1902.autoSimulation = !!i1903[17]
  i1902.queriesHitTriggers = !!i1903[18]
  i1902.queriesStartInColliders = !!i1903[19]
  i1902.callbacksOnDisable = !!i1903[20]
  i1902.reuseCollisionCallbacks = !!i1903[21]
  i1902.autoSyncTransforms = !!i1903[22]
  var i1905 = i1903[23]
  var i1904 = []
  for(var i = 0; i < i1905.length; i += 1) {
    i1904.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i1905[i + 0]) );
  }
  i1902.collisionMatrix = i1904
  return i1902
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i1908 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i1909 = data
  i1908.enabled = !!i1909[0]
  i1908.layerId = i1909[1]
  i1908.otherLayerId = i1909[2]
  return i1908
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i1910 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i1911 = data
  var i1913 = i1911[0]
  var i1912 = []
  for(var i = 0; i < i1913.length; i += 1) {
    i1912.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i1913[i + 0]) );
  }
  i1910.qualityLevels = i1912
  var i1915 = i1911[1]
  var i1914 = []
  for(var i = 0; i < i1915.length; i += 1) {
    i1914.push( i1915[i + 0] );
  }
  i1910.names = i1914
  i1910.shadows = i1911[2]
  i1910.anisotropicFiltering = i1911[3]
  i1910.antiAliasing = i1911[4]
  i1910.lodBias = i1911[5]
  i1910.shadowCascades = i1911[6]
  i1910.shadowDistance = i1911[7]
  i1910.shadowmaskMode = i1911[8]
  i1910.shadowProjection = i1911[9]
  i1910.shadowResolution = i1911[10]
  i1910.softParticles = !!i1911[11]
  i1910.softVegetation = !!i1911[12]
  i1910.activeColorSpace = i1911[13]
  i1910.desiredColorSpace = i1911[14]
  i1910.masterTextureLimit = i1911[15]
  i1910.maxQueuedFrames = i1911[16]
  i1910.particleRaycastBudget = i1911[17]
  i1910.pixelLightCount = i1911[18]
  i1910.realtimeReflectionProbes = !!i1911[19]
  i1910.shadowCascade2Split = i1911[20]
  i1910.shadowCascade4Split = new pc.Vec3( i1911[21], i1911[22], i1911[23] )
  i1910.streamingMipmapsActive = !!i1911[24]
  i1910.vSyncCount = i1911[25]
  i1910.asyncUploadBufferSize = i1911[26]
  i1910.asyncUploadTimeSlice = i1911[27]
  i1910.billboardsFaceCameraPosition = !!i1911[28]
  i1910.shadowNearPlaneOffset = i1911[29]
  i1910.streamingMipmapsMemoryBudget = i1911[30]
  i1910.maximumLODLevel = i1911[31]
  i1910.streamingMipmapsAddAllCameras = !!i1911[32]
  i1910.streamingMipmapsMaxLevelReduction = i1911[33]
  i1910.streamingMipmapsRenderersPerFrame = i1911[34]
  i1910.resolutionScalingFixedDPIFactor = i1911[35]
  i1910.streamingMipmapsMaxFileIORequests = i1911[36]
  i1910.currentQualityLevel = i1911[37]
  return i1910
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i1918 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i1919 = data
  request.r(i1919[0], i1919[1], 0, i1918, 'm_ObjectArgument')
  i1918.m_ObjectArgumentAssemblyTypeName = i1919[2]
  i1918.m_IntArgument = i1919[3]
  i1918.m_FloatArgument = i1919[4]
  i1918.m_StringArgument = i1919[5]
  i1918.m_BoolArgument = !!i1919[6]
  return i1918
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10,"graphicsFormat":11,"sRGBTexture":12,"desiredColorSpace":13,"wrapU":14,"wrapV":15},"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Components.Transform":{"position":0,"scale":3,"rotation":6},"Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer":{"color":0,"sprite":4,"flipX":6,"flipY":7,"drawMode":8,"size":9,"tileMode":11,"adaptiveModeThreshold":12,"maskInteraction":13,"spriteSortPoint":14,"enabled":15,"sharedMaterial":16,"sharedMaterials":18,"receiveShadows":19,"shadowCastingMode":20,"sortingLayerID":21,"sortingOrder":22,"lightmapIndex":23,"lightmapSceneIndex":24,"lightmapScaleOffset":25,"lightProbeUsage":29,"reflectionProbeUsage":30},"Luna.Unity.DTO.UnityEngine.Components.CircleCollider2D":{"radius":0,"enabled":1,"isTrigger":2,"usedByEffector":3,"density":4,"offset":5,"material":7},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Components.SortingGroup":{"sortingLayerIndex":0,"sortingOrder":1,"sortingLayerName":2,"enabled":3},"Luna.Unity.DTO.UnityEngine.Components.Rigidbody2D":{"bodyType":0,"material":1,"simulated":3,"useAutoMass":4,"mass":5,"drag":6,"angularDrag":7,"gravityScale":8,"collisionDetectionMode":9,"sleepMode":10,"constraints":11},"Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D":{"usedByComposite":0,"autoTiling":1,"size":2,"edgeRadius":4,"enabled":5,"isTrigger":6,"usedByEffector":7,"density":8,"offset":9,"material":11},"Luna.Unity.DTO.UnityEngine.Components.HingeJoint2D":{"useLimits":0,"limits":1,"useMotor":2,"motor":3,"anchor":4,"connectedAnchor":6,"autoConfigureConnectedAnchor":8,"connectedBody":9,"breakForce":11,"breakTorque":12,"enableCollision":13,"enabled":14},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"aspect":0,"orthographic":1,"orthographicSize":2,"backgroundColor":3,"nearClipPlane":7,"farClipPlane":8,"fieldOfView":9,"depth":10,"clearFlags":11,"cullingMask":12,"rect":13,"targetTexture":14,"usePhysicalProperties":16,"focalLength":17,"sensorSize":18,"lensShift":20,"gateFit":22,"commandBufferCount":23,"cameraType":24,"enabled":25},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"planeDistance":0,"referencePixelsPerUnit":1,"isFallbackOverlay":2,"renderMode":3,"renderOrder":4,"sortingLayerName":5,"sortingOrder":6,"scaleFactor":7,"worldCamera":8,"overrideSorting":10,"pixelPerfect":11,"targetDisplay":12,"overridePixelPerfect":13,"enabled":14},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Components.TargetJoint2D":{"autoConfigureTarget":0,"target":1,"anchor":3,"maxForce":5,"dampingRatio":6,"frequency":7,"connectedBody":8,"breakForce":10,"breakTorque":11,"enableCollision":12,"enabled":13},"Luna.Unity.DTO.UnityEngine.Components.AudioSource":{"clip":0,"outputAudioMixerGroup":2,"playOnAwake":4,"loop":5,"time":6,"volume":7,"pitch":8,"enabled":9},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"customReflection":36,"defaultReflection":38,"defaultReflectionMode":40,"defaultReflectionResolution":41,"sunLightObjectId":42,"pixelLightCount":43,"defaultReflectionHDR":44,"hasLightDataAsset":45,"hasManualGenerate":46},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2,"shadowMask":4},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"hasDepthOnlyPass":10,"isCreatedByShaderGraph":11,"disableBatching":12,"compiled":13},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"exportedForWebGl2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.AudioClip":{"name":0},"Luna.Unity.DTO.UnityEngine.Assets.Font":{"name":0,"ascent":1,"originalLineHeight":2,"fontSize":3,"characterInfo":4,"texture":5,"originalFontSize":7},"Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo":{"index":0,"advance":1,"bearing":2,"glyphWidth":3,"glyphHeight":4,"minX":5,"maxX":6,"minY":7,"maxY":8,"uvBottomLeftX":9,"uvBottomLeftY":10,"uvBottomRightX":11,"uvBottomRightY":12,"uvTopLeftX":13,"uvTopLeftY":14,"uvTopRightX":15,"uvTopRightY":16},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableStaticBatching":9,"enableDynamicBatching":10,"usePreservativeDynamicBatching":11,"lightmapEncodingQuality":12,"desiredColorSpace":13,"allTags":14},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37}}

Deserializers.requiredComponents = {"42":[43],"44":[43],"45":[43],"46":[43],"47":[43],"48":[43],"49":[50],"51":[15],"52":[53],"54":[53],"55":[53],"56":[53],"57":[53],"58":[53],"59":[12],"60":[12],"61":[12],"62":[12],"63":[12],"64":[12],"11":[12],"65":[12],"66":[12],"35":[12],"67":[12],"68":[12],"69":[12],"70":[15],"71":[72],"73":[74],"75":[74],"21":[20],"76":[2],"77":[15],"78":[79],"80":[20],"81":[24,20],"82":[72],"83":[24,20],"84":[20],"85":[20],"86":[72,20],"87":[20,24],"88":[89],"90":[89],"91":[89],"92":[20],"93":[20],"23":[21],"29":[24,20],"27":[20],"22":[21],"94":[20],"95":[20],"96":[20],"97":[20],"98":[20],"99":[20],"100":[20],"101":[20],"102":[20],"25":[24,20],"103":[20],"104":[20],"105":[20],"106":[20],"30":[24,20],"107":[20],"108":[18],"109":[18],"19":[18],"110":[18],"111":[15],"112":[15]}

Deserializers.types = ["UnityEngine.Shader","UnityEngine.Transform","UnityEngine.SpriteRenderer","UnityEngine.Sprite","UnityEngine.Material","UnityEngine.CircleCollider2D","UnityEngine.MonoBehaviour","BulletController","UnityEngine.AudioClip","UnityEngine.Rendering.SortingGroup","MonsterController","UnityEngine.HingeJoint2D","UnityEngine.Rigidbody2D","BalanceController","UnityEngine.BoxCollider2D","UnityEngine.Camera","UnityEngine.AudioListener","UnityEngine.EventSystems.UIBehaviour","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","UnityEngine.RectTransform","UnityEngine.Canvas","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","UnityEngine.CanvasRenderer","UnityEngine.UI.RawImage","UnityEngine.Texture2D","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.Button","UnityEngine.UI.Image","UnityEngine.UI.Text","UnityEngine.Font","DG.Tweening.DOTweenAnimation","PlayerController","UnityEngine.GameObject","UnityEngine.TargetJoint2D","GameController","LayoutController","LunaController","AudioController","UnityEngine.AudioSource","DG.Tweening.Core.DOTweenSettings","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.SkinnedMeshRenderer","UnityEngine.FlareLayer","UnityEngine.CharacterJoint","UnityEngine.Rigidbody","UnityEngine.ConfigurableJoint","UnityEngine.ConstantForce","UnityEngine.FixedJoint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.CompositeCollider2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.MeshRenderer","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","UnityEngine.U2D.Animation.SpriteSkin","UnityEngine.U2D.PixelPerfectCamera","UnityEngine.U2D.SpriteShapeController","UnityEngine.U2D.SpriteShapeRenderer","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text","TMPro.TextContainer","TMPro.TextMeshPro","TMPro.TextMeshProUGUI","Unity.VisualScripting.SceneVariables","Unity.VisualScripting.Variables","Unity.VisualScripting.ScriptMachine","Unity.VisualScripting.StateMachine","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.Mask","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RectMask2D","UnityEngine.UI.ScrollRect","UnityEngine.UI.Scrollbar","UnityEngine.UI.Slider","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster"]

Deserializers.unityVersion = "6000.0.76f1";

Deserializers.productName = "SSP_Luna-SSP_V03";

Deserializers.lunaInitializationTime = "06/25/2026 07:40:14";

Deserializers.lunaDaysRunning = "4.8";

Deserializers.lunaVersion = "7.2.0";

Deserializers.lunaSHA = "ea08d29afe2968efcb8d91d5624f033c6485cc68";

Deserializers.creativeName = "SSP_V03_YenTTH_TamNTM";

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

Deserializers.runtimeAnalysisExcludedClassesCount = "1818";

Deserializers.runtimeAnalysisExcludedMethodsCount = "4036";

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

Deserializers.buildID = "44505c1a-d71f-4a34-9186-d502575cda50";

Deserializers.runtimeInitializeOnLoadInfos = [[["UnityEngine","U2D","Animation","GpuDeformationSystem","CreateFallbackBuffer"],["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"],["UnityEngine","AI","NavMesh","ClearPreUpdateListeners"]],[["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"]],[],[["UnityEngine","Timeline","AnimatorBindingCache","ResetStaticsOnLoad"],["UnityEngine","Timeline","TrackAsset","ResetStaticsOnLoad"],["UnityEngine","Timeline","AnimationPreviewUtilities","ResetStaticsOnLoad"]]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

