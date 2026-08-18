var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i1796 = root || request.c( 'UnityEngine.JointSpring' )
  var i1797 = data
  i1796.spring = i1797[0]
  i1796.damper = i1797[1]
  i1796.targetPosition = i1797[2]
  return i1796
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i1798 = root || request.c( 'UnityEngine.JointMotor' )
  var i1799 = data
  i1798.m_TargetVelocity = i1799[0]
  i1798.m_Force = i1799[1]
  i1798.m_FreeSpin = i1799[2]
  return i1798
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i1800 = root || request.c( 'UnityEngine.JointLimits' )
  var i1801 = data
  i1800.m_Min = i1801[0]
  i1800.m_Max = i1801[1]
  i1800.m_Bounciness = i1801[2]
  i1800.m_BounceMinVelocity = i1801[3]
  i1800.m_ContactDistance = i1801[4]
  i1800.minBounce = i1801[5]
  i1800.maxBounce = i1801[6]
  return i1800
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i1802 = root || request.c( 'UnityEngine.JointDrive' )
  var i1803 = data
  i1802.m_PositionSpring = i1803[0]
  i1802.m_PositionDamper = i1803[1]
  i1802.m_MaximumForce = i1803[2]
  i1802.m_UseAcceleration = i1803[3]
  return i1802
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i1804 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i1805 = data
  i1804.m_Spring = i1805[0]
  i1804.m_Damper = i1805[1]
  return i1804
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i1806 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i1807 = data
  i1806.m_Limit = i1807[0]
  i1806.m_Bounciness = i1807[1]
  i1806.m_ContactDistance = i1807[2]
  return i1806
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i1808 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i1809 = data
  i1808.m_ExtremumSlip = i1809[0]
  i1808.m_ExtremumValue = i1809[1]
  i1808.m_AsymptoteSlip = i1809[2]
  i1808.m_AsymptoteValue = i1809[3]
  i1808.m_Stiffness = i1809[4]
  return i1808
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i1810 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i1811 = data
  i1810.m_LowerAngle = i1811[0]
  i1810.m_UpperAngle = i1811[1]
  return i1810
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i1812 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i1813 = data
  i1812.m_MotorSpeed = i1813[0]
  i1812.m_MaximumMotorTorque = i1813[1]
  return i1812
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i1814 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i1815 = data
  i1814.m_DampingRatio = i1815[0]
  i1814.m_Frequency = i1815[1]
  i1814.m_Angle = i1815[2]
  return i1814
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i1816 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i1817 = data
  i1816.m_LowerTranslation = i1817[0]
  i1816.m_UpperTranslation = i1817[1]
  return i1816
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i1818 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i1819 = data
  i1818.name = i1819[0]
  i1818.width = i1819[1]
  i1818.height = i1819[2]
  i1818.mipmapCount = i1819[3]
  i1818.anisoLevel = i1819[4]
  i1818.filterMode = i1819[5]
  i1818.hdr = !!i1819[6]
  i1818.format = i1819[7]
  i1818.wrapMode = i1819[8]
  i1818.alphaIsTransparency = !!i1819[9]
  i1818.alphaSource = i1819[10]
  i1818.graphicsFormat = i1819[11]
  i1818.sRGBTexture = !!i1819[12]
  i1818.desiredColorSpace = i1819[13]
  i1818.wrapU = i1819[14]
  i1818.wrapV = i1819[15]
  return i1818
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i1820 = root || new pc.UnityMaterial()
  var i1821 = data
  i1820.name = i1821[0]
  request.r(i1821[1], i1821[2], 0, i1820, 'shader')
  i1820.renderQueue = i1821[3]
  i1820.enableInstancing = !!i1821[4]
  var i1823 = i1821[5]
  var i1822 = []
  for(var i = 0; i < i1823.length; i += 1) {
    i1822.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i1823[i + 0]) );
  }
  i1820.floatParameters = i1822
  var i1825 = i1821[6]
  var i1824 = []
  for(var i = 0; i < i1825.length; i += 1) {
    i1824.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i1825[i + 0]) );
  }
  i1820.colorParameters = i1824
  var i1827 = i1821[7]
  var i1826 = []
  for(var i = 0; i < i1827.length; i += 1) {
    i1826.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i1827[i + 0]) );
  }
  i1820.vectorParameters = i1826
  var i1829 = i1821[8]
  var i1828 = []
  for(var i = 0; i < i1829.length; i += 1) {
    i1828.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i1829[i + 0]) );
  }
  i1820.textureParameters = i1828
  var i1831 = i1821[9]
  var i1830 = []
  for(var i = 0; i < i1831.length; i += 1) {
    i1830.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i1831[i + 0]) );
  }
  i1820.materialFlags = i1830
  return i1820
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i1834 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i1835 = data
  i1834.name = i1835[0]
  i1834.value = i1835[1]
  return i1834
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i1838 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i1839 = data
  i1838.name = i1839[0]
  i1838.value = new pc.Color(i1839[1], i1839[2], i1839[3], i1839[4])
  return i1838
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i1842 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i1843 = data
  i1842.name = i1843[0]
  i1842.value = new pc.Vec4( i1843[1], i1843[2], i1843[3], i1843[4] )
  return i1842
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i1846 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i1847 = data
  i1846.name = i1847[0]
  request.r(i1847[1], i1847[2], 0, i1846, 'value')
  return i1846
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i1850 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i1851 = data
  i1850.name = i1851[0]
  i1850.enabled = !!i1851[1]
  return i1850
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i1852 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i1853 = data
  i1852.position = new pc.Vec3( i1853[0], i1853[1], i1853[2] )
  i1852.scale = new pc.Vec3( i1853[3], i1853[4], i1853[5] )
  i1852.rotation = new pc.Quat(i1853[6], i1853[7], i1853[8], i1853[9])
  return i1852
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer"] = function (request, data, root) {
  var i1854 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer' )
  var i1855 = data
  i1854.color = new pc.Color(i1855[0], i1855[1], i1855[2], i1855[3])
  request.r(i1855[4], i1855[5], 0, i1854, 'sprite')
  i1854.flipX = !!i1855[6]
  i1854.flipY = !!i1855[7]
  i1854.drawMode = i1855[8]
  i1854.size = new pc.Vec2( i1855[9], i1855[10] )
  i1854.tileMode = i1855[11]
  i1854.adaptiveModeThreshold = i1855[12]
  i1854.maskInteraction = i1855[13]
  i1854.spriteSortPoint = i1855[14]
  i1854.enabled = !!i1855[15]
  request.r(i1855[16], i1855[17], 0, i1854, 'sharedMaterial')
  var i1857 = i1855[18]
  var i1856 = []
  for(var i = 0; i < i1857.length; i += 2) {
  request.r(i1857[i + 0], i1857[i + 1], 2, i1856, '')
  }
  i1854.sharedMaterials = i1856
  i1854.receiveShadows = !!i1855[19]
  i1854.shadowCastingMode = i1855[20]
  i1854.sortingLayerID = i1855[21]
  i1854.sortingOrder = i1855[22]
  i1854.lightmapIndex = i1855[23]
  i1854.lightmapSceneIndex = i1855[24]
  i1854.lightmapScaleOffset = new pc.Vec4( i1855[25], i1855[26], i1855[27], i1855[28] )
  i1854.lightProbeUsage = i1855[29]
  i1854.reflectionProbeUsage = i1855[30]
  return i1854
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CircleCollider2D"] = function (request, data, root) {
  var i1860 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CircleCollider2D' )
  var i1861 = data
  i1860.radius = i1861[0]
  i1860.enabled = !!i1861[1]
  i1860.isTrigger = !!i1861[2]
  i1860.usedByEffector = !!i1861[3]
  i1860.density = i1861[4]
  i1860.offset = new pc.Vec2( i1861[5], i1861[6] )
  request.r(i1861[7], i1861[8], 0, i1860, 'material')
  return i1860
}

Deserializers["BulletController"] = function (request, data, root) {
  var i1862 = root || request.c( 'BulletController' )
  var i1863 = data
  i1862.speed = i1863[0]
  i1862.damage = i1863[1]
  request.r(i1863[2], i1863[3], 0, i1862, 'hitMonsterSound')
  request.r(i1863[4], i1863[5], 0, i1862, 'hitSound')
  i1862.lifeTime = i1863[6]
  i1862.hit = !!i1863[7]
  return i1862
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i1864 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i1865 = data
  i1864.name = i1865[0]
  i1864.tagId = i1865[1]
  i1864.enabled = !!i1865[2]
  i1864.isStatic = !!i1865[3]
  i1864.layer = i1865[4]
  return i1864
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SortingGroup"] = function (request, data, root) {
  var i1866 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SortingGroup' )
  var i1867 = data
  i1866.sortingLayerIndex = i1867[0]
  i1866.sortingOrder = i1867[1]
  i1866.sortingLayerName = i1867[2]
  i1866.enabled = !!i1867[3]
  return i1866
}

Deserializers["MonsterController"] = function (request, data, root) {
  var i1868 = root || request.c( 'MonsterController' )
  var i1869 = data
  i1868.maxHP = i1869[0]
  i1868.currentHP = i1869[1]
  var i1871 = i1869[2]
  var i1870 = new (System.Collections.Generic.List$1(Bridge.ns('Piece')))
  for(var i = 0; i < i1871.length; i += 1) {
    i1870.add(request.d('Piece', i1871[i + 0]));
  }
  i1868.pieces = i1870
  request.r(i1869[3], i1869[4], 0, i1868, 'deadSFX')
  i1868.maxForce = new pc.Vec2( i1869[5], i1869[6] )
  i1868.minForce = new pc.Vec2( i1869[7], i1869[8] )
  request.r(i1869[9], i1869[10], 0, i1868, 'balance')
  i1868.isDead = !!i1869[11]
  request.r(i1869[12], i1869[13], 0, i1868, 'trigger')
  request.r(i1869[14], i1869[15], 0, i1868, 'groundCheck')
  i1868.speed = i1869[16]
  request.r(i1869[17], i1869[18], 0, i1868, 'body')
  request.r(i1869[19], i1869[20], 0, i1868, 'leftHand')
  request.r(i1869[21], i1869[22], 0, i1868, 'rightHand')
  request.r(i1869[23], i1869[24], 0, i1868, 'leftLeg')
  request.r(i1869[25], i1869[26], 0, i1868, 'rightLeg')
  return i1868
}

Deserializers["Piece"] = function (request, data, root) {
  var i1874 = root || request.c( 'Piece' )
  var i1875 = data
  request.r(i1875[0], i1875[1], 0, i1874, 'Joint')
  request.r(i1875[2], i1875[3], 0, i1874, 'Rb')
  return i1874
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Rigidbody2D"] = function (request, data, root) {
  var i1876 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Rigidbody2D' )
  var i1877 = data
  i1876.bodyType = i1877[0]
  request.r(i1877[1], i1877[2], 0, i1876, 'material')
  i1876.simulated = !!i1877[3]
  i1876.useAutoMass = !!i1877[4]
  i1876.mass = i1877[5]
  i1876.drag = i1877[6]
  i1876.angularDrag = i1877[7]
  i1876.gravityScale = i1877[8]
  i1876.collisionDetectionMode = i1877[9]
  i1876.sleepMode = i1877[10]
  i1876.constraints = i1877[11]
  return i1876
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.FixedJoint2D"] = function (request, data, root) {
  var i1878 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.FixedJoint2D' )
  var i1879 = data
  i1878.dampingRatio = i1879[0]
  i1878.frequency = i1879[1]
  i1878.anchor = new pc.Vec2( i1879[2], i1879[3] )
  i1878.connectedAnchor = new pc.Vec2( i1879[4], i1879[5] )
  i1878.autoConfigureConnectedAnchor = !!i1879[6]
  request.r(i1879[7], i1879[8], 0, i1878, 'connectedBody')
  i1878.breakForce = i1879[9]
  i1878.breakTorque = i1879[10]
  i1878.enableCollision = !!i1879[11]
  i1878.enabled = !!i1879[12]
  return i1878
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D"] = function (request, data, root) {
  var i1880 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D' )
  var i1881 = data
  i1880.usedByComposite = !!i1881[0]
  i1880.autoTiling = !!i1881[1]
  i1880.size = new pc.Vec2( i1881[2], i1881[3] )
  i1880.edgeRadius = i1881[4]
  i1880.enabled = !!i1881[5]
  i1880.isTrigger = !!i1881[6]
  i1880.usedByEffector = !!i1881[7]
  i1880.density = i1881[8]
  i1880.offset = new pc.Vec2( i1881[9], i1881[10] )
  request.r(i1881[11], i1881[12], 0, i1880, 'material')
  return i1880
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.HingeJoint2D"] = function (request, data, root) {
  var i1882 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.HingeJoint2D' )
  var i1883 = data
  i1882.useLimits = !!i1883[0]
  i1882.limits = request.d('UnityEngine.JointAngleLimits2D', i1883[1], i1882.limits)
  i1882.useMotor = !!i1883[2]
  i1882.motor = request.d('UnityEngine.JointMotor2D', i1883[3], i1882.motor)
  i1882.anchor = new pc.Vec2( i1883[4], i1883[5] )
  i1882.connectedAnchor = new pc.Vec2( i1883[6], i1883[7] )
  i1882.autoConfigureConnectedAnchor = !!i1883[8]
  request.r(i1883[9], i1883[10], 0, i1882, 'connectedBody')
  i1882.breakForce = i1883[11]
  i1882.breakTorque = i1883[12]
  i1882.enableCollision = !!i1883[13]
  i1882.enabled = !!i1883[14]
  return i1882
}

Deserializers["BalanceController"] = function (request, data, root) {
  var i1884 = root || request.c( 'BalanceController' )
  var i1885 = data
  i1884.targetRotation = i1885[0]
  i1884.force = i1885[1]
  return i1884
}

Deserializers["MonsterTrigger"] = function (request, data, root) {
  var i1886 = root || request.c( 'MonsterTrigger' )
  var i1887 = data
  request.r(i1887[0], i1887[1], 0, i1886, 'player')
  return i1886
}

Deserializers["GroundCheck"] = function (request, data, root) {
  var i1888 = root || request.c( 'GroundCheck' )
  var i1889 = data
  i1888.OnGround = !!i1889[0]
  return i1888
}

Deserializers["PlayerController"] = function (request, data, root) {
  var i1890 = root || request.c( 'PlayerController' )
  var i1891 = data
  i1890.IsZombie = !!i1891[0]
  i1890.OnDead = request.d('System.Action', i1891[1], i1890.OnDead)
  var i1893 = i1891[2]
  var i1892 = new (System.Collections.Generic.List$1(Bridge.ns('BodyRenderer')))
  for(var i = 0; i < i1893.length; i += 1) {
    i1892.add(request.d('BodyRenderer', i1893[i + 0]));
  }
  i1890.bodyRenderers = i1892
  request.r(i1891[3], i1891[4], 0, i1890, 'biteSound')
  request.r(i1891[5], i1891[6], 0, i1890, 'zombieSound')
  request.r(i1891[7], i1891[8], 0, i1890, 'body')
  return i1890
}

Deserializers["System.Action"] = function (request, data, root) {
  var i1894 = root || request.c( 'System.Action' )
  var i1895 = data
  return i1894
}

Deserializers["BodyRenderer"] = function (request, data, root) {
  var i1898 = root || request.c( 'BodyRenderer' )
  var i1899 = data
  request.r(i1899[0], i1899[1], 0, i1898, 'Renderer')
  request.r(i1899[2], i1899[3], 0, i1898, 'ZSprite')
  return i1898
}

Deserializers["PlayerAttack"] = function (request, data, root) {
  var i1900 = root || request.c( 'PlayerAttack' )
  var i1901 = data
  i1900.ShootCD = i1901[0]
  request.r(i1901[1], i1901[2], 0, i1900, 'left')
  request.r(i1901[3], i1901[4], 0, i1900, 'right')
  request.r(i1901[5], i1901[6], 0, i1900, 'gun')
  request.r(i1901[7], i1901[8], 0, i1900, 'bulletPrefab')
  i1900.onCD = !!i1901[9]
  request.r(i1901[10], i1901[11], 0, i1900, 'shootSound')
  i1900.timeMotor = i1901[12]
  request.r(i1901[13], i1901[14], 0, i1900, 'playerTrigger')
  request.r(i1901[15], i1901[16], 0, i1900, 'player')
  return i1900
}

Deserializers["BodyPiece"] = function (request, data, root) {
  var i1902 = root || request.c( 'BodyPiece' )
  var i1903 = data
  request.r(i1903[0], i1903[1], 0, i1902, 'player')
  return i1902
}

Deserializers["PlayerTrigger"] = function (request, data, root) {
  var i1904 = root || request.c( 'PlayerTrigger' )
  var i1905 = data
  request.r(i1905[0], i1905[1], 0, i1904, 'monster')
  return i1904
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i1906 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i1907 = data
  i1906.name = i1907[0]
  i1906.index = i1907[1]
  i1906.startup = !!i1907[2]
  return i1906
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i1908 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i1909 = data
  i1908.aspect = i1909[0]
  i1908.orthographic = !!i1909[1]
  i1908.orthographicSize = i1909[2]
  i1908.backgroundColor = new pc.Color(i1909[3], i1909[4], i1909[5], i1909[6])
  i1908.nearClipPlane = i1909[7]
  i1908.farClipPlane = i1909[8]
  i1908.fieldOfView = i1909[9]
  i1908.depth = i1909[10]
  i1908.clearFlags = i1909[11]
  i1908.cullingMask = i1909[12]
  i1908.rect = i1909[13]
  request.r(i1909[14], i1909[15], 0, i1908, 'targetTexture')
  i1908.usePhysicalProperties = !!i1909[16]
  i1908.focalLength = i1909[17]
  i1908.sensorSize = new pc.Vec2( i1909[18], i1909[19] )
  i1908.lensShift = new pc.Vec2( i1909[20], i1909[21] )
  i1908.gateFit = i1909[22]
  i1908.commandBufferCount = i1909[23]
  i1908.cameraType = i1909[24]
  i1908.enabled = !!i1909[25]
  return i1908
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i1910 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i1911 = data
  request.r(i1911[0], i1911[1], 0, i1910, 'm_FirstSelected')
  i1910.m_sendNavigationEvents = !!i1911[2]
  i1910.m_DragThreshold = i1911[3]
  return i1910
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i1912 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i1913 = data
  i1912.m_HorizontalAxis = i1913[0]
  i1912.m_VerticalAxis = i1913[1]
  i1912.m_SubmitButton = i1913[2]
  i1912.m_CancelButton = i1913[3]
  i1912.m_InputActionsPerSecond = i1913[4]
  i1912.m_RepeatDelay = i1913[5]
  i1912.m_ForceModuleActive = !!i1913[6]
  i1912.m_SendPointerHoverToParent = !!i1913[7]
  return i1912
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i1914 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i1915 = data
  i1914.pivot = new pc.Vec2( i1915[0], i1915[1] )
  i1914.anchorMin = new pc.Vec2( i1915[2], i1915[3] )
  i1914.anchorMax = new pc.Vec2( i1915[4], i1915[5] )
  i1914.sizeDelta = new pc.Vec2( i1915[6], i1915[7] )
  i1914.anchoredPosition3D = new pc.Vec3( i1915[8], i1915[9], i1915[10] )
  i1914.rotation = new pc.Quat(i1915[11], i1915[12], i1915[13], i1915[14])
  i1914.scale = new pc.Vec3( i1915[15], i1915[16], i1915[17] )
  return i1914
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i1916 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i1917 = data
  i1916.planeDistance = i1917[0]
  i1916.referencePixelsPerUnit = i1917[1]
  i1916.isFallbackOverlay = !!i1917[2]
  i1916.renderMode = i1917[3]
  i1916.renderOrder = i1917[4]
  i1916.sortingLayerName = i1917[5]
  i1916.sortingOrder = i1917[6]
  i1916.scaleFactor = i1917[7]
  request.r(i1917[8], i1917[9], 0, i1916, 'worldCamera')
  i1916.overrideSorting = !!i1917[10]
  i1916.pixelPerfect = !!i1917[11]
  i1916.targetDisplay = i1917[12]
  i1916.overridePixelPerfect = !!i1917[13]
  i1916.enabled = !!i1917[14]
  return i1916
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i1918 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i1919 = data
  i1918.m_UiScaleMode = i1919[0]
  i1918.m_ReferencePixelsPerUnit = i1919[1]
  i1918.m_ScaleFactor = i1919[2]
  i1918.m_ReferenceResolution = new pc.Vec2( i1919[3], i1919[4] )
  i1918.m_ScreenMatchMode = i1919[5]
  i1918.m_MatchWidthOrHeight = i1919[6]
  i1918.m_PhysicalUnit = i1919[7]
  i1918.m_FallbackScreenDPI = i1919[8]
  i1918.m_DefaultSpriteDPI = i1919[9]
  i1918.m_DynamicPixelsPerUnit = i1919[10]
  i1918.m_PresetInfoIsWorld = !!i1919[11]
  return i1918
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i1920 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i1921 = data
  i1920.m_IgnoreReversedGraphics = !!i1921[0]
  i1920.m_BlockingObjects = i1921[1]
  i1920.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i1921[2] )
  return i1920
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i1922 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i1923 = data
  i1922.cullTransparentMesh = !!i1923[0]
  return i1922
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i1924 = root || request.c( 'UnityEngine.UI.Image' )
  var i1925 = data
  request.r(i1925[0], i1925[1], 0, i1924, 'm_Sprite')
  i1924.m_Type = i1925[2]
  i1924.m_PreserveAspect = !!i1925[3]
  i1924.m_FillCenter = !!i1925[4]
  i1924.m_FillMethod = i1925[5]
  i1924.m_FillAmount = i1925[6]
  i1924.m_FillClockwise = !!i1925[7]
  i1924.m_FillOrigin = i1925[8]
  i1924.m_UseSpriteMesh = !!i1925[9]
  i1924.m_PixelsPerUnitMultiplier = i1925[10]
  request.r(i1925[11], i1925[12], 0, i1924, 'm_Material')
  i1924.m_Maskable = !!i1925[13]
  i1924.m_Color = new pc.Color(i1925[14], i1925[15], i1925[16], i1925[17])
  i1924.m_RaycastTarget = !!i1925[18]
  i1924.m_RaycastPadding = new pc.Vec4( i1925[19], i1925[20], i1925[21], i1925[22] )
  return i1924
}

Deserializers["UnityEngine.UI.Text"] = function (request, data, root) {
  var i1926 = root || request.c( 'UnityEngine.UI.Text' )
  var i1927 = data
  i1926.m_FontData = request.d('UnityEngine.UI.FontData', i1927[0], i1926.m_FontData)
  i1926.m_Text = i1927[1]
  request.r(i1927[2], i1927[3], 0, i1926, 'm_Material')
  i1926.m_Maskable = !!i1927[4]
  i1926.m_Color = new pc.Color(i1927[5], i1927[6], i1927[7], i1927[8])
  i1926.m_RaycastTarget = !!i1927[9]
  i1926.m_RaycastPadding = new pc.Vec4( i1927[10], i1927[11], i1927[12], i1927[13] )
  return i1926
}

Deserializers["UnityEngine.UI.FontData"] = function (request, data, root) {
  var i1928 = root || request.c( 'UnityEngine.UI.FontData' )
  var i1929 = data
  request.r(i1929[0], i1929[1], 0, i1928, 'm_Font')
  i1928.m_FontSize = i1929[2]
  i1928.m_FontStyle = i1929[3]
  i1928.m_BestFit = !!i1929[4]
  i1928.m_MinSize = i1929[5]
  i1928.m_MaxSize = i1929[6]
  i1928.m_Alignment = i1929[7]
  i1928.m_AlignByGeometry = !!i1929[8]
  i1928.m_RichText = !!i1929[9]
  i1928.m_HorizontalOverflow = i1929[10]
  i1928.m_VerticalOverflow = i1929[11]
  i1928.m_LineSpacing = i1929[12]
  return i1928
}

Deserializers["DG.Tweening.DOTweenAnimation"] = function (request, data, root) {
  var i1930 = root || request.c( 'DG.Tweening.DOTweenAnimation' )
  var i1931 = data
  i1930.targetIsSelf = !!i1931[0]
  request.r(i1931[1], i1931[2], 0, i1930, 'targetGO')
  i1930.tweenTargetIsTargetGO = !!i1931[3]
  i1930.delay = i1931[4]
  i1930.duration = i1931[5]
  i1930.easeType = i1931[6]
  i1930.easeCurve = new pc.AnimationCurve( { keys_flow: i1931[7] } )
  i1930.loopType = i1931[8]
  i1930.loops = i1931[9]
  i1930.id = i1931[10]
  i1930.isRelative = !!i1931[11]
  i1930.isFrom = !!i1931[12]
  i1930.isIndependentUpdate = !!i1931[13]
  i1930.autoKill = !!i1931[14]
  i1930.autoGenerate = !!i1931[15]
  i1930.isActive = !!i1931[16]
  i1930.isValid = !!i1931[17]
  request.r(i1931[18], i1931[19], 0, i1930, 'target')
  i1930.animationType = i1931[20]
  i1930.targetType = i1931[21]
  i1930.forcedTargetType = i1931[22]
  i1930.autoPlay = !!i1931[23]
  i1930.useTargetAsV3 = !!i1931[24]
  i1930.endValueFloat = i1931[25]
  i1930.endValueV3 = new pc.Vec3( i1931[26], i1931[27], i1931[28] )
  i1930.endValueV2 = new pc.Vec2( i1931[29], i1931[30] )
  i1930.endValueColor = new pc.Color(i1931[31], i1931[32], i1931[33], i1931[34])
  i1930.endValueString = i1931[35]
  i1930.endValueRect = UnityEngine.Rect.MinMaxRect(i1931[36], i1931[37], i1931[38], i1931[39])
  request.r(i1931[40], i1931[41], 0, i1930, 'endValueTransform')
  i1930.optionalBool0 = !!i1931[42]
  i1930.optionalBool1 = !!i1931[43]
  i1930.optionalFloat0 = i1931[44]
  i1930.optionalInt0 = i1931[45]
  i1930.optionalRotationMode = i1931[46]
  i1930.optionalScrambleMode = i1931[47]
  i1930.optionalShakeRandomnessMode = i1931[48]
  i1930.optionalString = i1931[49]
  i1930.updateType = i1931[50]
  i1930.isSpeedBased = !!i1931[51]
  i1930.hasOnStart = !!i1931[52]
  i1930.hasOnPlay = !!i1931[53]
  i1930.hasOnUpdate = !!i1931[54]
  i1930.hasOnStepComplete = !!i1931[55]
  i1930.hasOnComplete = !!i1931[56]
  i1930.hasOnTweenCreated = !!i1931[57]
  i1930.hasOnRewind = !!i1931[58]
  i1930.onStart = request.d('UnityEngine.Events.UnityEvent', i1931[59], i1930.onStart)
  i1930.onPlay = request.d('UnityEngine.Events.UnityEvent', i1931[60], i1930.onPlay)
  i1930.onUpdate = request.d('UnityEngine.Events.UnityEvent', i1931[61], i1930.onUpdate)
  i1930.onStepComplete = request.d('UnityEngine.Events.UnityEvent', i1931[62], i1930.onStepComplete)
  i1930.onComplete = request.d('UnityEngine.Events.UnityEvent', i1931[63], i1930.onComplete)
  i1930.onTweenCreated = request.d('UnityEngine.Events.UnityEvent', i1931[64], i1930.onTweenCreated)
  i1930.onRewind = request.d('UnityEngine.Events.UnityEvent', i1931[65], i1930.onRewind)
  return i1930
}

Deserializers["UnityEngine.Events.UnityEvent"] = function (request, data, root) {
  var i1932 = root || request.c( 'UnityEngine.Events.UnityEvent' )
  var i1933 = data
  i1932.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i1933[0], i1932.m_PersistentCalls)
  return i1932
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i1934 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i1935 = data
  var i1937 = i1935[0]
  var i1936 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i1937.length; i += 1) {
    i1936.add(request.d('UnityEngine.Events.PersistentCall', i1937[i + 0]));
  }
  i1934.m_Calls = i1936
  return i1934
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i1940 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i1941 = data
  request.r(i1941[0], i1941[1], 0, i1940, 'm_Target')
  i1940.m_TargetAssemblyTypeName = i1941[2]
  i1940.m_MethodName = i1941[3]
  i1940.m_Mode = i1941[4]
  i1940.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i1941[5], i1940.m_Arguments)
  i1940.m_CallState = i1941[6]
  return i1940
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i1942 = root || request.c( 'UnityEngine.UI.Button' )
  var i1943 = data
  i1942.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i1943[0], i1942.m_OnClick)
  i1942.m_Navigation = request.d('UnityEngine.UI.Navigation', i1943[1], i1942.m_Navigation)
  i1942.m_Transition = i1943[2]
  i1942.m_Colors = request.d('UnityEngine.UI.ColorBlock', i1943[3], i1942.m_Colors)
  i1942.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i1943[4], i1942.m_SpriteState)
  i1942.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i1943[5], i1942.m_AnimationTriggers)
  i1942.m_Interactable = !!i1943[6]
  request.r(i1943[7], i1943[8], 0, i1942, 'm_TargetGraphic')
  return i1942
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i1944 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i1945 = data
  i1944.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i1945[0], i1944.m_PersistentCalls)
  return i1944
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i1946 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i1947 = data
  i1946.m_Mode = i1947[0]
  i1946.m_WrapAround = !!i1947[1]
  request.r(i1947[2], i1947[3], 0, i1946, 'm_SelectOnUp')
  request.r(i1947[4], i1947[5], 0, i1946, 'm_SelectOnDown')
  request.r(i1947[6], i1947[7], 0, i1946, 'm_SelectOnLeft')
  request.r(i1947[8], i1947[9], 0, i1946, 'm_SelectOnRight')
  return i1946
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i1948 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i1949 = data
  i1948.m_NormalColor = new pc.Color(i1949[0], i1949[1], i1949[2], i1949[3])
  i1948.m_HighlightedColor = new pc.Color(i1949[4], i1949[5], i1949[6], i1949[7])
  i1948.m_PressedColor = new pc.Color(i1949[8], i1949[9], i1949[10], i1949[11])
  i1948.m_SelectedColor = new pc.Color(i1949[12], i1949[13], i1949[14], i1949[15])
  i1948.m_DisabledColor = new pc.Color(i1949[16], i1949[17], i1949[18], i1949[19])
  i1948.m_ColorMultiplier = i1949[20]
  i1948.m_FadeDuration = i1949[21]
  return i1948
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i1950 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i1951 = data
  request.r(i1951[0], i1951[1], 0, i1950, 'm_HighlightedSprite')
  request.r(i1951[2], i1951[3], 0, i1950, 'm_PressedSprite')
  request.r(i1951[4], i1951[5], 0, i1950, 'm_SelectedSprite')
  request.r(i1951[6], i1951[7], 0, i1950, 'm_DisabledSprite')
  return i1950
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i1952 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i1953 = data
  i1952.m_NormalTrigger = i1953[0]
  i1952.m_HighlightedTrigger = i1953[1]
  i1952.m_PressedTrigger = i1953[2]
  i1952.m_SelectedTrigger = i1953[3]
  i1952.m_DisabledTrigger = i1953[4]
  return i1952
}

Deserializers["UnityEngine.UI.RawImage"] = function (request, data, root) {
  var i1954 = root || request.c( 'UnityEngine.UI.RawImage' )
  var i1955 = data
  request.r(i1955[0], i1955[1], 0, i1954, 'm_Texture')
  i1954.m_UVRect = UnityEngine.Rect.MinMaxRect(i1955[2], i1955[3], i1955[4], i1955[5])
  request.r(i1955[6], i1955[7], 0, i1954, 'm_Material')
  i1954.m_Maskable = !!i1955[8]
  i1954.m_Color = new pc.Color(i1955[9], i1955[10], i1955[11], i1955[12])
  i1954.m_RaycastTarget = !!i1955[13]
  i1954.m_RaycastPadding = new pc.Vec4( i1955[14], i1955[15], i1955[16], i1955[17] )
  return i1954
}

Deserializers["UnityEngine.UI.AspectRatioFitter"] = function (request, data, root) {
  var i1956 = root || request.c( 'UnityEngine.UI.AspectRatioFitter' )
  var i1957 = data
  i1956.m_AspectMode = i1957[0]
  i1956.m_AspectRatio = i1957[1]
  return i1956
}

Deserializers["MonsterOptionController"] = function (request, data, root) {
  var i1958 = root || request.c( 'MonsterOptionController' )
  var i1959 = data
  i1958.OnSpawn = request.d('System.Action', i1959[0], i1958.OnSpawn)
  i1958.OnEmpty = request.d('System.Action', i1959[1], i1958.OnEmpty)
  i1958.OnEnd = request.d('System.Action', i1959[2], i1958.OnEnd)
  request.r(i1959[3], i1959[4], 0, i1958, 'spawnPrefab')
  i1958.numCharacter = i1959[5]
  request.r(i1959[6], i1959[7], 0, i1958, 'numText')
  request.r(i1959[8], i1959[9], 0, i1958, 'world')
  request.r(i1959[10], i1959[11], 0, i1958, 'area')
  request.r(i1959[12], i1959[13], 0, i1958, 'areaTut')
  return i1958
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.TargetJoint2D"] = function (request, data, root) {
  var i1960 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.TargetJoint2D' )
  var i1961 = data
  i1960.autoConfigureTarget = !!i1961[0]
  i1960.target = new pc.Vec2( i1961[1], i1961[2] )
  i1960.anchor = new pc.Vec2( i1961[3], i1961[4] )
  i1960.maxForce = i1961[5]
  i1960.dampingRatio = i1961[6]
  i1960.frequency = i1961[7]
  request.r(i1961[8], i1961[9], 0, i1960, 'connectedBody')
  i1960.breakForce = i1961[10]
  i1960.breakTorque = i1961[11]
  i1960.enableCollision = !!i1961[12]
  i1960.enabled = !!i1961[13]
  return i1960
}

Deserializers["HumanOptionController"] = function (request, data, root) {
  var i1962 = root || request.c( 'HumanOptionController' )
  var i1963 = data
  i1962.OnSpawn = request.d('System.Action', i1963[0], i1962.OnSpawn)
  i1962.OnEmpty = request.d('System.Action', i1963[1], i1962.OnEmpty)
  i1962.OnEnd = request.d('System.Action', i1963[2], i1962.OnEnd)
  request.r(i1963[3], i1963[4], 0, i1962, 'spawnPrefab')
  i1962.numCharacter = i1963[5]
  request.r(i1963[6], i1963[7], 0, i1962, 'numText')
  request.r(i1963[8], i1963[9], 0, i1962, 'world')
  request.r(i1963[10], i1963[11], 0, i1962, 'area')
  request.r(i1963[12], i1963[13], 0, i1962, 'areaTut')
  return i1962
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.AudioSource"] = function (request, data, root) {
  var i1964 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.AudioSource' )
  var i1965 = data
  request.r(i1965[0], i1965[1], 0, i1964, 'clip')
  request.r(i1965[2], i1965[3], 0, i1964, 'outputAudioMixerGroup')
  i1964.playOnAwake = !!i1965[4]
  i1964.loop = !!i1965[5]
  i1964.time = i1965[6]
  i1964.volume = i1965[7]
  i1964.pitch = i1965[8]
  i1964.enabled = !!i1965[9]
  return i1964
}

Deserializers["GameController"] = function (request, data, root) {
  var i1966 = root || request.c( 'GameController' )
  var i1967 = data
  i1966.maxSpawn = i1967[0]
  i1966.OnSpawn = request.d('System.Action', i1967[1], i1966.OnSpawn)
  i1966.OnEmpty = request.d('System.Action', i1967[2], i1966.OnEmpty)
  request.r(i1967[3], i1967[4], 0, i1966, 'startScene')
  request.r(i1967[5], i1967[6], 0, i1966, 'endScene')
  i1966.human = request.d('Option', i1967[7], i1966.human)
  i1966.monster = request.d('Option', i1967[8], i1966.monster)
  request.r(i1967[9], i1967[10], 0, i1966, 'clickSound')
  request.r(i1967[11], i1967[12], 0, i1966, 'optionController')
  return i1966
}

Deserializers["Option"] = function (request, data, root) {
  var i1968 = root || request.c( 'Option' )
  var i1969 = data
  request.r(i1969[0], i1969[1], 0, i1968, 'Button')
  request.r(i1969[2], i1969[3], 0, i1968, 'Controller')
  return i1968
}

Deserializers["LayoutController"] = function (request, data, root) {
  var i1970 = root || request.c( 'LayoutController' )
  var i1971 = data
  request.r(i1971[0], i1971[1], 0, i1970, 'main')
  request.r(i1971[2], i1971[3], 0, i1970, 'UI')
  return i1970
}

Deserializers["LunaController"] = function (request, data, root) {
  var i1972 = root || request.c( 'LunaController' )
  var i1973 = data
  i1972.OneClick = !!i1973[0]
  request.r(i1973[1], i1973[2], 0, i1972, 'BGTexture')
  i1972.Header = i1973[3]
  i1972.HeaderColor = new pc.Color(i1973[4], i1973[5], i1973[6], i1973[7])
  i1972.UseTime = !!i1973[8]
  i1972.TimePlay = i1973[9]
  i1972.MaxCountPlay = i1973[10]
  request.r(i1973[11], i1973[12], 0, i1972, 'clickCard')
  request.r(i1973[13], i1973[14], 0, i1972, 'BGImage')
  request.r(i1973[15], i1973[16], 0, i1972, 'headerText')
  var i1975 = i1973[17]
  var i1974 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.UI.Button')))
  for(var i = 0; i < i1975.length; i += 2) {
  request.r(i1975[i + 0], i1975[i + 1], 1, i1974, '')
  }
  i1972.CTA = i1974
  return i1972
}

Deserializers["AudioController"] = function (request, data, root) {
  var i1978 = root || request.c( 'AudioController' )
  var i1979 = data
  request.r(i1979[0], i1979[1], 0, i1978, 'BGM')
  request.r(i1979[2], i1979[3], 0, i1978, 'musicSource')
  request.r(i1979[4], i1979[5], 0, i1978, 'pool')
  return i1978
}

Deserializers["PoolController"] = function (request, data, root) {
  var i1980 = root || request.c( 'PoolController' )
  var i1981 = data
  request.r(i1981[0], i1981[1], 0, i1980, 'poolParent')
  return i1980
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i1982 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i1983 = data
  i1982.ambientIntensity = i1983[0]
  i1982.reflectionIntensity = i1983[1]
  i1982.ambientMode = i1983[2]
  i1982.ambientLight = new pc.Color(i1983[3], i1983[4], i1983[5], i1983[6])
  i1982.ambientSkyColor = new pc.Color(i1983[7], i1983[8], i1983[9], i1983[10])
  i1982.ambientGroundColor = new pc.Color(i1983[11], i1983[12], i1983[13], i1983[14])
  i1982.ambientEquatorColor = new pc.Color(i1983[15], i1983[16], i1983[17], i1983[18])
  i1982.fogColor = new pc.Color(i1983[19], i1983[20], i1983[21], i1983[22])
  i1982.fogEndDistance = i1983[23]
  i1982.fogStartDistance = i1983[24]
  i1982.fogDensity = i1983[25]
  i1982.fog = !!i1983[26]
  request.r(i1983[27], i1983[28], 0, i1982, 'skybox')
  i1982.fogMode = i1983[29]
  var i1985 = i1983[30]
  var i1984 = []
  for(var i = 0; i < i1985.length; i += 1) {
    i1984.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i1985[i + 0]) );
  }
  i1982.lightmaps = i1984
  i1982.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i1983[31], i1982.lightProbes)
  i1982.lightmapsMode = i1983[32]
  i1982.mixedBakeMode = i1983[33]
  i1982.environmentLightingMode = i1983[34]
  i1982.ambientProbe = new pc.SphericalHarmonicsL2(i1983[35])
  request.r(i1983[36], i1983[37], 0, i1982, 'customReflection')
  request.r(i1983[38], i1983[39], 0, i1982, 'defaultReflection')
  i1982.defaultReflectionMode = i1983[40]
  i1982.defaultReflectionResolution = i1983[41]
  i1982.sunLightObjectId = i1983[42]
  i1982.pixelLightCount = i1983[43]
  i1982.defaultReflectionHDR = !!i1983[44]
  i1982.hasLightDataAsset = !!i1983[45]
  i1982.hasManualGenerate = !!i1983[46]
  return i1982
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i1988 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i1989 = data
  request.r(i1989[0], i1989[1], 0, i1988, 'lightmapColor')
  request.r(i1989[2], i1989[3], 0, i1988, 'lightmapDirection')
  request.r(i1989[4], i1989[5], 0, i1988, 'shadowMask')
  return i1988
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i1990 = root || new UnityEngine.LightProbes()
  var i1991 = data
  return i1990
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i1998 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i1999 = data
  var i2001 = i1999[0]
  var i2000 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i2001.length; i += 1) {
    i2000.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i2001[i + 0]));
  }
  i1998.ShaderCompilationErrors = i2000
  i1998.name = i1999[1]
  i1998.guid = i1999[2]
  var i2003 = i1999[3]
  var i2002 = []
  for(var i = 0; i < i2003.length; i += 1) {
    i2002.push( i2003[i + 0] );
  }
  i1998.shaderDefinedKeywords = i2002
  var i2005 = i1999[4]
  var i2004 = []
  for(var i = 0; i < i2005.length; i += 1) {
    i2004.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i2005[i + 0]) );
  }
  i1998.passes = i2004
  var i2007 = i1999[5]
  var i2006 = []
  for(var i = 0; i < i2007.length; i += 1) {
    i2006.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i2007[i + 0]) );
  }
  i1998.usePasses = i2006
  var i2009 = i1999[6]
  var i2008 = []
  for(var i = 0; i < i2009.length; i += 1) {
    i2008.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i2009[i + 0]) );
  }
  i1998.defaultParameterValues = i2008
  request.r(i1999[7], i1999[8], 0, i1998, 'unityFallbackShader')
  i1998.readDepth = !!i1999[9]
  i1998.hasDepthOnlyPass = !!i1999[10]
  i1998.isCreatedByShaderGraph = !!i1999[11]
  i1998.disableBatching = !!i1999[12]
  i1998.compiled = !!i1999[13]
  return i1998
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i2012 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i2013 = data
  i2012.shaderName = i2013[0]
  i2012.errorMessage = i2013[1]
  return i2012
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i2018 = root || new pc.UnityShaderPass()
  var i2019 = data
  i2018.id = i2019[0]
  i2018.subShaderIndex = i2019[1]
  i2018.name = i2019[2]
  i2018.passType = i2019[3]
  i2018.grabPassTextureName = i2019[4]
  i2018.usePass = !!i2019[5]
  i2018.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2019[6], i2018.zTest)
  i2018.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2019[7], i2018.zWrite)
  i2018.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2019[8], i2018.culling)
  i2018.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i2019[9], i2018.blending)
  i2018.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i2019[10], i2018.alphaBlending)
  i2018.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2019[11], i2018.colorWriteMask)
  i2018.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2019[12], i2018.offsetUnits)
  i2018.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2019[13], i2018.offsetFactor)
  i2018.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2019[14], i2018.stencilRef)
  i2018.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2019[15], i2018.stencilReadMask)
  i2018.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2019[16], i2018.stencilWriteMask)
  i2018.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i2019[17], i2018.stencilOp)
  i2018.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i2019[18], i2018.stencilOpFront)
  i2018.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i2019[19], i2018.stencilOpBack)
  var i2021 = i2019[20]
  var i2020 = []
  for(var i = 0; i < i2021.length; i += 1) {
    i2020.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i2021[i + 0]) );
  }
  i2018.tags = i2020
  var i2023 = i2019[21]
  var i2022 = []
  for(var i = 0; i < i2023.length; i += 1) {
    i2022.push( i2023[i + 0] );
  }
  i2018.passDefinedKeywords = i2022
  var i2025 = i2019[22]
  var i2024 = []
  for(var i = 0; i < i2025.length; i += 1) {
    i2024.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i2025[i + 0]) );
  }
  i2018.passDefinedKeywordGroups = i2024
  var i2027 = i2019[23]
  var i2026 = []
  for(var i = 0; i < i2027.length; i += 1) {
    i2026.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i2027[i + 0]) );
  }
  i2018.variants = i2026
  var i2029 = i2019[24]
  var i2028 = []
  for(var i = 0; i < i2029.length; i += 1) {
    i2028.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i2029[i + 0]) );
  }
  i2018.excludedVariants = i2028
  i2018.hasDepthReader = !!i2019[25]
  return i2018
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i2030 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i2031 = data
  i2030.val = i2031[0]
  i2030.name = i2031[1]
  return i2030
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i2032 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i2033 = data
  i2032.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2033[0], i2032.src)
  i2032.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2033[1], i2032.dst)
  i2032.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2033[2], i2032.op)
  return i2032
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i2034 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i2035 = data
  i2034.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2035[0], i2034.pass)
  i2034.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2035[1], i2034.fail)
  i2034.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2035[2], i2034.zFail)
  i2034.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2035[3], i2034.comp)
  return i2034
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i2038 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i2039 = data
  i2038.name = i2039[0]
  i2038.value = i2039[1]
  return i2038
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i2042 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i2043 = data
  var i2045 = i2043[0]
  var i2044 = []
  for(var i = 0; i < i2045.length; i += 1) {
    i2044.push( i2045[i + 0] );
  }
  i2042.keywords = i2044
  i2042.hasDiscard = !!i2043[1]
  return i2042
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i2048 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i2049 = data
  i2048.passId = i2049[0]
  i2048.subShaderIndex = i2049[1]
  var i2051 = i2049[2]
  var i2050 = []
  for(var i = 0; i < i2051.length; i += 1) {
    i2050.push( i2051[i + 0] );
  }
  i2048.keywords = i2050
  i2048.vertexProgram = i2049[3]
  i2048.fragmentProgram = i2049[4]
  i2048.exportedForWebGl2 = !!i2049[5]
  i2048.readDepth = !!i2049[6]
  return i2048
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i2054 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i2055 = data
  request.r(i2055[0], i2055[1], 0, i2054, 'shader')
  i2054.pass = i2055[2]
  return i2054
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i2058 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i2059 = data
  i2058.name = i2059[0]
  i2058.type = i2059[1]
  i2058.value = new pc.Vec4( i2059[2], i2059[3], i2059[4], i2059[5] )
  i2058.textureValue = i2059[6]
  i2058.shaderPropertyFlag = i2059[7]
  return i2058
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i2060 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i2061 = data
  i2060.name = i2061[0]
  request.r(i2061[1], i2061[2], 0, i2060, 'texture')
  i2060.aabb = i2061[3]
  i2060.vertices = i2061[4]
  i2060.triangles = i2061[5]
  i2060.textureRect = UnityEngine.Rect.MinMaxRect(i2061[6], i2061[7], i2061[8], i2061[9])
  i2060.packedRect = UnityEngine.Rect.MinMaxRect(i2061[10], i2061[11], i2061[12], i2061[13])
  i2060.border = new pc.Vec4( i2061[14], i2061[15], i2061[16], i2061[17] )
  i2060.transparency = i2061[18]
  i2060.bounds = i2061[19]
  i2060.pixelsPerUnit = i2061[20]
  i2060.textureWidth = i2061[21]
  i2060.textureHeight = i2061[22]
  i2060.nativeSize = new pc.Vec2( i2061[23], i2061[24] )
  i2060.pivot = new pc.Vec2( i2061[25], i2061[26] )
  i2060.textureRectOffset = new pc.Vec2( i2061[27], i2061[28] )
  return i2060
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i2062 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i2063 = data
  i2062.name = i2063[0]
  return i2062
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font"] = function (request, data, root) {
  var i2064 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font' )
  var i2065 = data
  i2064.name = i2065[0]
  i2064.ascent = i2065[1]
  i2064.originalLineHeight = i2065[2]
  i2064.fontSize = i2065[3]
  var i2067 = i2065[4]
  var i2066 = []
  for(var i = 0; i < i2067.length; i += 1) {
    i2066.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo', i2067[i + 0]) );
  }
  i2064.characterInfo = i2066
  request.r(i2065[5], i2065[6], 0, i2064, 'texture')
  i2064.originalFontSize = i2065[7]
  return i2064
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo"] = function (request, data, root) {
  var i2070 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo' )
  var i2071 = data
  i2070.index = i2071[0]
  i2070.advance = i2071[1]
  i2070.bearing = i2071[2]
  i2070.glyphWidth = i2071[3]
  i2070.glyphHeight = i2071[4]
  i2070.minX = i2071[5]
  i2070.maxX = i2071[6]
  i2070.minY = i2071[7]
  i2070.maxY = i2071[8]
  i2070.uvBottomLeftX = i2071[9]
  i2070.uvBottomLeftY = i2071[10]
  i2070.uvBottomRightX = i2071[11]
  i2070.uvBottomRightY = i2071[12]
  i2070.uvTopLeftX = i2071[13]
  i2070.uvTopLeftY = i2071[14]
  i2070.uvTopRightX = i2071[15]
  i2070.uvTopRightY = i2071[16]
  return i2070
}

Deserializers["DG.Tweening.Core.DOTweenSettings"] = function (request, data, root) {
  var i2072 = root || request.c( 'DG.Tweening.Core.DOTweenSettings' )
  var i2073 = data
  i2072.useSafeMode = !!i2073[0]
  i2072.safeModeOptions = request.d('DG.Tweening.Core.DOTweenSettings+SafeModeOptions', i2073[1], i2072.safeModeOptions)
  i2072.timeScale = i2073[2]
  i2072.unscaledTimeScale = i2073[3]
  i2072.useSmoothDeltaTime = !!i2073[4]
  i2072.maxSmoothUnscaledTime = i2073[5]
  i2072.rewindCallbackMode = i2073[6]
  i2072.showUnityEditorReport = !!i2073[7]
  i2072.logBehaviour = i2073[8]
  i2072.drawGizmos = !!i2073[9]
  i2072.defaultRecyclable = !!i2073[10]
  i2072.defaultAutoPlay = i2073[11]
  i2072.defaultUpdateType = i2073[12]
  i2072.defaultTimeScaleIndependent = !!i2073[13]
  i2072.defaultEaseType = i2073[14]
  i2072.defaultEaseOvershootOrAmplitude = i2073[15]
  i2072.defaultEasePeriod = i2073[16]
  i2072.defaultAutoKill = !!i2073[17]
  i2072.defaultLoopType = i2073[18]
  i2072.debugMode = !!i2073[19]
  i2072.debugStoreTargetId = !!i2073[20]
  i2072.showPreviewPanel = !!i2073[21]
  i2072.storeSettingsLocation = i2073[22]
  i2072.modules = request.d('DG.Tweening.Core.DOTweenSettings+ModulesSetup', i2073[23], i2072.modules)
  i2072.createASMDEF = !!i2073[24]
  i2072.showPlayingTweens = !!i2073[25]
  i2072.showPausedTweens = !!i2073[26]
  return i2072
}

Deserializers["DG.Tweening.Core.DOTweenSettings+SafeModeOptions"] = function (request, data, root) {
  var i2074 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+SafeModeOptions' )
  var i2075 = data
  i2074.logBehaviour = i2075[0]
  i2074.nestedTweenFailureBehaviour = i2075[1]
  return i2074
}

Deserializers["DG.Tweening.Core.DOTweenSettings+ModulesSetup"] = function (request, data, root) {
  var i2076 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+ModulesSetup' )
  var i2077 = data
  i2076.showPanel = !!i2077[0]
  i2076.audioEnabled = !!i2077[1]
  i2076.physicsEnabled = !!i2077[2]
  i2076.physics2DEnabled = !!i2077[3]
  i2076.spriteEnabled = !!i2077[4]
  i2076.uiEnabled = !!i2077[5]
  i2076.textMeshProEnabled = !!i2077[6]
  i2076.tk2DEnabled = !!i2077[7]
  i2076.deAudioEnabled = !!i2077[8]
  i2076.deUnityExtendedEnabled = !!i2077[9]
  i2076.epoOutlineEnabled = !!i2077[10]
  return i2076
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i2078 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i2079 = data
  var i2081 = i2079[0]
  var i2080 = []
  for(var i = 0; i < i2081.length; i += 1) {
    i2080.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i2081[i + 0]) );
  }
  i2078.files = i2080
  i2078.componentToPrefabIds = i2079[1]
  return i2078
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i2084 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i2085 = data
  i2084.path = i2085[0]
  request.r(i2085[1], i2085[2], 0, i2084, 'unityObject')
  return i2084
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i2086 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i2087 = data
  var i2089 = i2087[0]
  var i2088 = []
  for(var i = 0; i < i2089.length; i += 1) {
    i2088.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i2089[i + 0]) );
  }
  i2086.scriptsExecutionOrder = i2088
  var i2091 = i2087[1]
  var i2090 = []
  for(var i = 0; i < i2091.length; i += 1) {
    i2090.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i2091[i + 0]) );
  }
  i2086.sortingLayers = i2090
  var i2093 = i2087[2]
  var i2092 = []
  for(var i = 0; i < i2093.length; i += 1) {
    i2092.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i2093[i + 0]) );
  }
  i2086.cullingLayers = i2092
  i2086.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i2087[3], i2086.timeSettings)
  i2086.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i2087[4], i2086.physicsSettings)
  i2086.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i2087[5], i2086.physics2DSettings)
  i2086.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i2087[6], i2086.qualitySettings)
  i2086.enableRealtimeShadows = !!i2087[7]
  i2086.enableAutoInstancing = !!i2087[8]
  i2086.enableStaticBatching = !!i2087[9]
  i2086.enableDynamicBatching = !!i2087[10]
  i2086.usePreservativeDynamicBatching = !!i2087[11]
  i2086.lightmapEncodingQuality = i2087[12]
  i2086.desiredColorSpace = i2087[13]
  var i2095 = i2087[14]
  var i2094 = []
  for(var i = 0; i < i2095.length; i += 1) {
    i2094.push( i2095[i + 0] );
  }
  i2086.allTags = i2094
  return i2086
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i2098 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i2099 = data
  i2098.name = i2099[0]
  i2098.value = i2099[1]
  return i2098
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i2102 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i2103 = data
  i2102.id = i2103[0]
  i2102.name = i2103[1]
  i2102.value = i2103[2]
  return i2102
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i2106 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i2107 = data
  i2106.id = i2107[0]
  i2106.name = i2107[1]
  return i2106
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i2108 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i2109 = data
  i2108.fixedDeltaTime = i2109[0]
  i2108.maximumDeltaTime = i2109[1]
  i2108.timeScale = i2109[2]
  i2108.maximumParticleTimestep = i2109[3]
  return i2108
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i2110 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i2111 = data
  i2110.gravity = new pc.Vec3( i2111[0], i2111[1], i2111[2] )
  i2110.defaultSolverIterations = i2111[3]
  i2110.bounceThreshold = i2111[4]
  i2110.autoSyncTransforms = !!i2111[5]
  i2110.autoSimulation = !!i2111[6]
  var i2113 = i2111[7]
  var i2112 = []
  for(var i = 0; i < i2113.length; i += 1) {
    i2112.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i2113[i + 0]) );
  }
  i2110.collisionMatrix = i2112
  return i2110
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i2116 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i2117 = data
  i2116.enabled = !!i2117[0]
  i2116.layerId = i2117[1]
  i2116.otherLayerId = i2117[2]
  return i2116
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i2118 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i2119 = data
  request.r(i2119[0], i2119[1], 0, i2118, 'material')
  i2118.gravity = new pc.Vec2( i2119[2], i2119[3] )
  i2118.positionIterations = i2119[4]
  i2118.velocityIterations = i2119[5]
  i2118.velocityThreshold = i2119[6]
  i2118.maxLinearCorrection = i2119[7]
  i2118.maxAngularCorrection = i2119[8]
  i2118.maxTranslationSpeed = i2119[9]
  i2118.maxRotationSpeed = i2119[10]
  i2118.baumgarteScale = i2119[11]
  i2118.baumgarteTOIScale = i2119[12]
  i2118.timeToSleep = i2119[13]
  i2118.linearSleepTolerance = i2119[14]
  i2118.angularSleepTolerance = i2119[15]
  i2118.defaultContactOffset = i2119[16]
  i2118.autoSimulation = !!i2119[17]
  i2118.queriesHitTriggers = !!i2119[18]
  i2118.queriesStartInColliders = !!i2119[19]
  i2118.callbacksOnDisable = !!i2119[20]
  i2118.reuseCollisionCallbacks = !!i2119[21]
  i2118.autoSyncTransforms = !!i2119[22]
  var i2121 = i2119[23]
  var i2120 = []
  for(var i = 0; i < i2121.length; i += 1) {
    i2120.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i2121[i + 0]) );
  }
  i2118.collisionMatrix = i2120
  return i2118
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i2124 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i2125 = data
  i2124.enabled = !!i2125[0]
  i2124.layerId = i2125[1]
  i2124.otherLayerId = i2125[2]
  return i2124
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i2126 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i2127 = data
  var i2129 = i2127[0]
  var i2128 = []
  for(var i = 0; i < i2129.length; i += 1) {
    i2128.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i2129[i + 0]) );
  }
  i2126.qualityLevels = i2128
  var i2131 = i2127[1]
  var i2130 = []
  for(var i = 0; i < i2131.length; i += 1) {
    i2130.push( i2131[i + 0] );
  }
  i2126.names = i2130
  i2126.shadows = i2127[2]
  i2126.anisotropicFiltering = i2127[3]
  i2126.antiAliasing = i2127[4]
  i2126.lodBias = i2127[5]
  i2126.shadowCascades = i2127[6]
  i2126.shadowDistance = i2127[7]
  i2126.shadowmaskMode = i2127[8]
  i2126.shadowProjection = i2127[9]
  i2126.shadowResolution = i2127[10]
  i2126.softParticles = !!i2127[11]
  i2126.softVegetation = !!i2127[12]
  i2126.activeColorSpace = i2127[13]
  i2126.desiredColorSpace = i2127[14]
  i2126.masterTextureLimit = i2127[15]
  i2126.maxQueuedFrames = i2127[16]
  i2126.particleRaycastBudget = i2127[17]
  i2126.pixelLightCount = i2127[18]
  i2126.realtimeReflectionProbes = !!i2127[19]
  i2126.shadowCascade2Split = i2127[20]
  i2126.shadowCascade4Split = new pc.Vec3( i2127[21], i2127[22], i2127[23] )
  i2126.streamingMipmapsActive = !!i2127[24]
  i2126.vSyncCount = i2127[25]
  i2126.asyncUploadBufferSize = i2127[26]
  i2126.asyncUploadTimeSlice = i2127[27]
  i2126.billboardsFaceCameraPosition = !!i2127[28]
  i2126.shadowNearPlaneOffset = i2127[29]
  i2126.streamingMipmapsMemoryBudget = i2127[30]
  i2126.maximumLODLevel = i2127[31]
  i2126.streamingMipmapsAddAllCameras = !!i2127[32]
  i2126.streamingMipmapsMaxLevelReduction = i2127[33]
  i2126.streamingMipmapsRenderersPerFrame = i2127[34]
  i2126.resolutionScalingFixedDPIFactor = i2127[35]
  i2126.streamingMipmapsMaxFileIORequests = i2127[36]
  i2126.currentQualityLevel = i2127[37]
  return i2126
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i2134 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i2135 = data
  request.r(i2135[0], i2135[1], 0, i2134, 'm_ObjectArgument')
  i2134.m_ObjectArgumentAssemblyTypeName = i2135[2]
  i2134.m_IntArgument = i2135[3]
  i2134.m_FloatArgument = i2135[4]
  i2134.m_StringArgument = i2135[5]
  i2134.m_BoolArgument = !!i2135[6]
  return i2134
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10,"graphicsFormat":11,"sRGBTexture":12,"desiredColorSpace":13,"wrapU":14,"wrapV":15},"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Components.Transform":{"position":0,"scale":3,"rotation":6},"Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer":{"color":0,"sprite":4,"flipX":6,"flipY":7,"drawMode":8,"size":9,"tileMode":11,"adaptiveModeThreshold":12,"maskInteraction":13,"spriteSortPoint":14,"enabled":15,"sharedMaterial":16,"sharedMaterials":18,"receiveShadows":19,"shadowCastingMode":20,"sortingLayerID":21,"sortingOrder":22,"lightmapIndex":23,"lightmapSceneIndex":24,"lightmapScaleOffset":25,"lightProbeUsage":29,"reflectionProbeUsage":30},"Luna.Unity.DTO.UnityEngine.Components.CircleCollider2D":{"radius":0,"enabled":1,"isTrigger":2,"usedByEffector":3,"density":4,"offset":5,"material":7},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Components.SortingGroup":{"sortingLayerIndex":0,"sortingOrder":1,"sortingLayerName":2,"enabled":3},"Luna.Unity.DTO.UnityEngine.Components.Rigidbody2D":{"bodyType":0,"material":1,"simulated":3,"useAutoMass":4,"mass":5,"drag":6,"angularDrag":7,"gravityScale":8,"collisionDetectionMode":9,"sleepMode":10,"constraints":11},"Luna.Unity.DTO.UnityEngine.Components.FixedJoint2D":{"dampingRatio":0,"frequency":1,"anchor":2,"connectedAnchor":4,"autoConfigureConnectedAnchor":6,"connectedBody":7,"breakForce":9,"breakTorque":10,"enableCollision":11,"enabled":12},"Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D":{"usedByComposite":0,"autoTiling":1,"size":2,"edgeRadius":4,"enabled":5,"isTrigger":6,"usedByEffector":7,"density":8,"offset":9,"material":11},"Luna.Unity.DTO.UnityEngine.Components.HingeJoint2D":{"useLimits":0,"limits":1,"useMotor":2,"motor":3,"anchor":4,"connectedAnchor":6,"autoConfigureConnectedAnchor":8,"connectedBody":9,"breakForce":11,"breakTorque":12,"enableCollision":13,"enabled":14},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"aspect":0,"orthographic":1,"orthographicSize":2,"backgroundColor":3,"nearClipPlane":7,"farClipPlane":8,"fieldOfView":9,"depth":10,"clearFlags":11,"cullingMask":12,"rect":13,"targetTexture":14,"usePhysicalProperties":16,"focalLength":17,"sensorSize":18,"lensShift":20,"gateFit":22,"commandBufferCount":23,"cameraType":24,"enabled":25},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"planeDistance":0,"referencePixelsPerUnit":1,"isFallbackOverlay":2,"renderMode":3,"renderOrder":4,"sortingLayerName":5,"sortingOrder":6,"scaleFactor":7,"worldCamera":8,"overrideSorting":10,"pixelPerfect":11,"targetDisplay":12,"overridePixelPerfect":13,"enabled":14},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Components.TargetJoint2D":{"autoConfigureTarget":0,"target":1,"anchor":3,"maxForce":5,"dampingRatio":6,"frequency":7,"connectedBody":8,"breakForce":10,"breakTorque":11,"enableCollision":12,"enabled":13},"Luna.Unity.DTO.UnityEngine.Components.AudioSource":{"clip":0,"outputAudioMixerGroup":2,"playOnAwake":4,"loop":5,"time":6,"volume":7,"pitch":8,"enabled":9},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"customReflection":36,"defaultReflection":38,"defaultReflectionMode":40,"defaultReflectionResolution":41,"sunLightObjectId":42,"pixelLightCount":43,"defaultReflectionHDR":44,"hasLightDataAsset":45,"hasManualGenerate":46},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2,"shadowMask":4},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"hasDepthOnlyPass":10,"isCreatedByShaderGraph":11,"disableBatching":12,"compiled":13},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"exportedForWebGl2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.AudioClip":{"name":0},"Luna.Unity.DTO.UnityEngine.Assets.Font":{"name":0,"ascent":1,"originalLineHeight":2,"fontSize":3,"characterInfo":4,"texture":5,"originalFontSize":7},"Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo":{"index":0,"advance":1,"bearing":2,"glyphWidth":3,"glyphHeight":4,"minX":5,"maxX":6,"minY":7,"maxY":8,"uvBottomLeftX":9,"uvBottomLeftY":10,"uvBottomRightX":11,"uvBottomRightY":12,"uvTopLeftX":13,"uvTopLeftY":14,"uvTopRightX":15,"uvTopRightY":16},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableStaticBatching":9,"enableDynamicBatching":10,"usePreservativeDynamicBatching":11,"lightmapEncodingQuality":12,"desiredColorSpace":13,"allTags":14},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37}}

Deserializers.requiredComponents = {"51":[52],"53":[52],"54":[52],"55":[52],"56":[52],"57":[52],"58":[59],"60":[23],"61":[62],"63":[62],"64":[62],"65":[62],"66":[62],"67":[62],"68":[12],"69":[12],"70":[12],"71":[12],"72":[12],"73":[12],"11":[12],"74":[12],"75":[12],"41":[12],"16":[12],"76":[12],"77":[12],"78":[23],"79":[80],"81":[82],"83":[82],"29":[28],"84":[2],"85":[23],"86":[87],"88":[28],"89":[32,28],"90":[80],"91":[32,28],"92":[28],"93":[28],"94":[80,28],"95":[28,32],"96":[97],"98":[97],"99":[97],"100":[28],"101":[28],"31":[29],"33":[32,28],"39":[28],"30":[29],"102":[28],"103":[28],"104":[28],"105":[28],"106":[28],"107":[28],"108":[28],"109":[28],"110":[28],"38":[32,28],"111":[28],"112":[28],"113":[28],"114":[28],"34":[32,28],"115":[28],"116":[26],"117":[26],"27":[26],"118":[26],"119":[23],"120":[23]}

Deserializers.types = ["UnityEngine.Shader","UnityEngine.Transform","UnityEngine.SpriteRenderer","UnityEngine.Sprite","UnityEngine.Material","UnityEngine.CircleCollider2D","UnityEngine.MonoBehaviour","BulletController","UnityEngine.AudioClip","UnityEngine.Rendering.SortingGroup","MonsterController","UnityEngine.HingeJoint2D","UnityEngine.Rigidbody2D","BalanceController","MonsterTrigger","GroundCheck","UnityEngine.FixedJoint2D","UnityEngine.BoxCollider2D","PlayerController","PlayerAttack","UnityEngine.GameObject","PlayerTrigger","BodyPiece","UnityEngine.Camera","UnityEngine.AudioListener","UnityEngine.EventSystems.UIBehaviour","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","UnityEngine.RectTransform","UnityEngine.Canvas","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","UnityEngine.CanvasRenderer","UnityEngine.UI.Image","UnityEngine.UI.Text","UnityEngine.Font","DG.Tweening.DOTweenAnimation","UnityEngine.UI.Button","UnityEngine.UI.RawImage","UnityEngine.UI.AspectRatioFitter","MonsterOptionController","UnityEngine.TargetJoint2D","HumanOptionController","UnityEngine.AudioSource","GameController","LayoutController","LunaController","UnityEngine.Texture2D","AudioController","PoolController","DG.Tweening.Core.DOTweenSettings","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.SkinnedMeshRenderer","UnityEngine.FlareLayer","UnityEngine.CharacterJoint","UnityEngine.Rigidbody","UnityEngine.ConfigurableJoint","UnityEngine.ConstantForce","UnityEngine.FixedJoint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.CompositeCollider2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.MeshRenderer","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","UnityEngine.U2D.Animation.SpriteSkin","UnityEngine.U2D.PixelPerfectCamera","UnityEngine.U2D.SpriteShapeController","UnityEngine.U2D.SpriteShapeRenderer","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text","TMPro.TextContainer","TMPro.TextMeshPro","TMPro.TextMeshProUGUI","Unity.VisualScripting.SceneVariables","Unity.VisualScripting.Variables","Unity.VisualScripting.ScriptMachine","Unity.VisualScripting.StateMachine","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.Mask","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RectMask2D","UnityEngine.UI.ScrollRect","UnityEngine.UI.Scrollbar","UnityEngine.UI.Slider","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster"]

Deserializers.unityVersion = "6000.0.78f1";

Deserializers.productName = "SSP_Luna-SSP_V03";

Deserializers.lunaInitializationTime = "08/17/2026 07:10:25";

Deserializers.lunaDaysRunning = "0.8";

Deserializers.lunaVersion = "7.2.0";

Deserializers.lunaSHA = "ea08d29afe2968efcb8d91d5624f033c6485cc68";

Deserializers.creativeName = "SSP_V06_YenTTH_TamNTM";

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

Deserializers.runtimeAnalysisExcludedClassesCount = "1793";

Deserializers.runtimeAnalysisExcludedMethodsCount = "4442";

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

Deserializers.buildID = "eb0ade62-d95a-4feb-93c7-fd5b50b8ae34";

Deserializers.runtimeInitializeOnLoadInfos = [[["Unity","PerformanceTesting","PerformanceTest","ResetStaticsOnLoad"],["UnityEngine","U2D","Animation","GpuDeformationSystem","CreateFallbackBuffer"],["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"],["UnityEngine","AI","NavMesh","ClearPreUpdateListeners"]],[["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"]],[],[["UnityEngine","Timeline","AnimatorBindingCache","ResetStaticsOnLoad"],["UnityEngine","Timeline","TrackAsset","ResetStaticsOnLoad"],["UnityEngine","Timeline","AnimationPreviewUtilities","ResetStaticsOnLoad"],["Unity","PerformanceTesting","Data","RunSettings","ResetStaticsOnLoad"],["Unity","PerformanceTesting","PlayerCallbacks","ResetStaticsOnLoad"]]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

