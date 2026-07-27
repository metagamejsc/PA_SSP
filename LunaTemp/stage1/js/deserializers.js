var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i1850 = root || request.c( 'UnityEngine.JointSpring' )
  var i1851 = data
  i1850.spring = i1851[0]
  i1850.damper = i1851[1]
  i1850.targetPosition = i1851[2]
  return i1850
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i1852 = root || request.c( 'UnityEngine.JointMotor' )
  var i1853 = data
  i1852.m_TargetVelocity = i1853[0]
  i1852.m_Force = i1853[1]
  i1852.m_FreeSpin = i1853[2]
  return i1852
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i1854 = root || request.c( 'UnityEngine.JointLimits' )
  var i1855 = data
  i1854.m_Min = i1855[0]
  i1854.m_Max = i1855[1]
  i1854.m_Bounciness = i1855[2]
  i1854.m_BounceMinVelocity = i1855[3]
  i1854.m_ContactDistance = i1855[4]
  i1854.minBounce = i1855[5]
  i1854.maxBounce = i1855[6]
  return i1854
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i1856 = root || request.c( 'UnityEngine.JointDrive' )
  var i1857 = data
  i1856.m_PositionSpring = i1857[0]
  i1856.m_PositionDamper = i1857[1]
  i1856.m_MaximumForce = i1857[2]
  i1856.m_UseAcceleration = i1857[3]
  return i1856
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i1858 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i1859 = data
  i1858.m_Spring = i1859[0]
  i1858.m_Damper = i1859[1]
  return i1858
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i1860 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i1861 = data
  i1860.m_Limit = i1861[0]
  i1860.m_Bounciness = i1861[1]
  i1860.m_ContactDistance = i1861[2]
  return i1860
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i1862 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i1863 = data
  i1862.m_ExtremumSlip = i1863[0]
  i1862.m_ExtremumValue = i1863[1]
  i1862.m_AsymptoteSlip = i1863[2]
  i1862.m_AsymptoteValue = i1863[3]
  i1862.m_Stiffness = i1863[4]
  return i1862
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i1864 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i1865 = data
  i1864.m_LowerAngle = i1865[0]
  i1864.m_UpperAngle = i1865[1]
  return i1864
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i1866 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i1867 = data
  i1866.m_MotorSpeed = i1867[0]
  i1866.m_MaximumMotorTorque = i1867[1]
  return i1866
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i1868 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i1869 = data
  i1868.m_DampingRatio = i1869[0]
  i1868.m_Frequency = i1869[1]
  i1868.m_Angle = i1869[2]
  return i1868
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i1870 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i1871 = data
  i1870.m_LowerTranslation = i1871[0]
  i1870.m_UpperTranslation = i1871[1]
  return i1870
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i1872 = root || new pc.UnityMaterial()
  var i1873 = data
  i1872.name = i1873[0]
  request.r(i1873[1], i1873[2], 0, i1872, 'shader')
  i1872.renderQueue = i1873[3]
  i1872.enableInstancing = !!i1873[4]
  var i1875 = i1873[5]
  var i1874 = []
  for(var i = 0; i < i1875.length; i += 1) {
    i1874.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i1875[i + 0]) );
  }
  i1872.floatParameters = i1874
  var i1877 = i1873[6]
  var i1876 = []
  for(var i = 0; i < i1877.length; i += 1) {
    i1876.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i1877[i + 0]) );
  }
  i1872.colorParameters = i1876
  var i1879 = i1873[7]
  var i1878 = []
  for(var i = 0; i < i1879.length; i += 1) {
    i1878.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i1879[i + 0]) );
  }
  i1872.vectorParameters = i1878
  var i1881 = i1873[8]
  var i1880 = []
  for(var i = 0; i < i1881.length; i += 1) {
    i1880.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i1881[i + 0]) );
  }
  i1872.textureParameters = i1880
  var i1883 = i1873[9]
  var i1882 = []
  for(var i = 0; i < i1883.length; i += 1) {
    i1882.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i1883[i + 0]) );
  }
  i1872.materialFlags = i1882
  return i1872
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i1886 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i1887 = data
  i1886.name = i1887[0]
  i1886.value = i1887[1]
  return i1886
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i1890 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i1891 = data
  i1890.name = i1891[0]
  i1890.value = new pc.Color(i1891[1], i1891[2], i1891[3], i1891[4])
  return i1890
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i1894 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i1895 = data
  i1894.name = i1895[0]
  i1894.value = new pc.Vec4( i1895[1], i1895[2], i1895[3], i1895[4] )
  return i1894
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i1898 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i1899 = data
  i1898.name = i1899[0]
  request.r(i1899[1], i1899[2], 0, i1898, 'value')
  return i1898
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i1902 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i1903 = data
  i1902.name = i1903[0]
  i1902.enabled = !!i1903[1]
  return i1902
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i1904 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i1905 = data
  i1904.name = i1905[0]
  i1904.width = i1905[1]
  i1904.height = i1905[2]
  i1904.mipmapCount = i1905[3]
  i1904.anisoLevel = i1905[4]
  i1904.filterMode = i1905[5]
  i1904.hdr = !!i1905[6]
  i1904.format = i1905[7]
  i1904.wrapMode = i1905[8]
  i1904.alphaIsTransparency = !!i1905[9]
  i1904.alphaSource = i1905[10]
  i1904.graphicsFormat = i1905[11]
  i1904.sRGBTexture = !!i1905[12]
  i1904.desiredColorSpace = i1905[13]
  i1904.wrapU = i1905[14]
  i1904.wrapV = i1905[15]
  return i1904
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i1906 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i1907 = data
  i1906.position = new pc.Vec3( i1907[0], i1907[1], i1907[2] )
  i1906.scale = new pc.Vec3( i1907[3], i1907[4], i1907[5] )
  i1906.rotation = new pc.Quat(i1907[6], i1907[7], i1907[8], i1907[9])
  return i1906
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystem"] = function (request, data, root) {
  var i1908 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystem' )
  var i1909 = data
  i1908.main = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule', i1909[0], i1908.main)
  i1908.colorBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule', i1909[1], i1908.colorBySpeed)
  i1908.colorOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule', i1909[2], i1908.colorOverLifetime)
  i1908.emission = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule', i1909[3], i1908.emission)
  i1908.rotationBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule', i1909[4], i1908.rotationBySpeed)
  i1908.rotationOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule', i1909[5], i1908.rotationOverLifetime)
  i1908.shape = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule', i1909[6], i1908.shape)
  i1908.sizeBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule', i1909[7], i1908.sizeBySpeed)
  i1908.sizeOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule', i1909[8], i1908.sizeOverLifetime)
  i1908.textureSheetAnimation = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule', i1909[9], i1908.textureSheetAnimation)
  i1908.velocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule', i1909[10], i1908.velocityOverLifetime)
  i1908.noise = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule', i1909[11], i1908.noise)
  i1908.inheritVelocity = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule', i1909[12], i1908.inheritVelocity)
  i1908.forceOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule', i1909[13], i1908.forceOverLifetime)
  i1908.limitVelocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule', i1909[14], i1908.limitVelocityOverLifetime)
  i1908.useAutoRandomSeed = !!i1909[15]
  i1908.randomSeed = i1909[16]
  return i1908
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule"] = function (request, data, root) {
  var i1910 = root || new pc.ParticleSystemMain()
  var i1911 = data
  i1910.duration = i1911[0]
  i1910.loop = !!i1911[1]
  i1910.prewarm = !!i1911[2]
  i1910.startDelay = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1911[3], i1910.startDelay)
  i1910.startLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1911[4], i1910.startLifetime)
  i1910.startSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1911[5], i1910.startSpeed)
  i1910.startSize3D = !!i1911[6]
  i1910.startSizeX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1911[7], i1910.startSizeX)
  i1910.startSizeY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1911[8], i1910.startSizeY)
  i1910.startSizeZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1911[9], i1910.startSizeZ)
  i1910.startRotation3D = !!i1911[10]
  i1910.startRotationX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1911[11], i1910.startRotationX)
  i1910.startRotationY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1911[12], i1910.startRotationY)
  i1910.startRotationZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1911[13], i1910.startRotationZ)
  i1910.startColor = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i1911[14], i1910.startColor)
  i1910.gravityModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1911[15], i1910.gravityModifier)
  i1910.simulationSpace = i1911[16]
  request.r(i1911[17], i1911[18], 0, i1910, 'customSimulationSpace')
  i1910.simulationSpeed = i1911[19]
  i1910.useUnscaledTime = !!i1911[20]
  i1910.scalingMode = i1911[21]
  i1910.playOnAwake = !!i1911[22]
  i1910.maxParticles = i1911[23]
  i1910.emitterVelocityMode = i1911[24]
  i1910.stopAction = i1911[25]
  return i1910
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve"] = function (request, data, root) {
  var i1912 = root || new pc.MinMaxCurve()
  var i1913 = data
  i1912.mode = i1913[0]
  i1912.curveMin = new pc.AnimationCurve( { keys_flow: i1913[1] } )
  i1912.curveMax = new pc.AnimationCurve( { keys_flow: i1913[2] } )
  i1912.curveMultiplier = i1913[3]
  i1912.constantMin = i1913[4]
  i1912.constantMax = i1913[5]
  return i1912
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient"] = function (request, data, root) {
  var i1914 = root || new pc.MinMaxGradient()
  var i1915 = data
  i1914.mode = i1915[0]
  i1914.gradientMin = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i1915[1], i1914.gradientMin)
  i1914.gradientMax = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i1915[2], i1914.gradientMax)
  i1914.colorMin = new pc.Color(i1915[3], i1915[4], i1915[5], i1915[6])
  i1914.colorMax = new pc.Color(i1915[7], i1915[8], i1915[9], i1915[10])
  return i1914
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient"] = function (request, data, root) {
  var i1916 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient' )
  var i1917 = data
  i1916.mode = i1917[0]
  var i1919 = i1917[1]
  var i1918 = []
  for(var i = 0; i < i1919.length; i += 1) {
    i1918.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey', i1919[i + 0]) );
  }
  i1916.colorKeys = i1918
  var i1921 = i1917[2]
  var i1920 = []
  for(var i = 0; i < i1921.length; i += 1) {
    i1920.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey', i1921[i + 0]) );
  }
  i1916.alphaKeys = i1920
  return i1916
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule"] = function (request, data, root) {
  var i1922 = root || new pc.ParticleSystemColorBySpeed()
  var i1923 = data
  i1922.enabled = !!i1923[0]
  i1922.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i1923[1], i1922.color)
  i1922.range = new pc.Vec2( i1923[2], i1923[3] )
  return i1922
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey"] = function (request, data, root) {
  var i1926 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey' )
  var i1927 = data
  i1926.color = new pc.Color(i1927[0], i1927[1], i1927[2], i1927[3])
  i1926.time = i1927[4]
  return i1926
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey"] = function (request, data, root) {
  var i1930 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey' )
  var i1931 = data
  i1930.alpha = i1931[0]
  i1930.time = i1931[1]
  return i1930
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule"] = function (request, data, root) {
  var i1932 = root || new pc.ParticleSystemColorOverLifetime()
  var i1933 = data
  i1932.enabled = !!i1933[0]
  i1932.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i1933[1], i1932.color)
  return i1932
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule"] = function (request, data, root) {
  var i1934 = root || new pc.ParticleSystemEmitter()
  var i1935 = data
  i1934.enabled = !!i1935[0]
  i1934.rateOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1935[1], i1934.rateOverTime)
  i1934.rateOverDistance = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1935[2], i1934.rateOverDistance)
  var i1937 = i1935[3]
  var i1936 = []
  for(var i = 0; i < i1937.length; i += 1) {
    i1936.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst', i1937[i + 0]) );
  }
  i1934.bursts = i1936
  return i1934
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst"] = function (request, data, root) {
  var i1940 = root || new pc.ParticleSystemBurst()
  var i1941 = data
  i1940.count = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1941[0], i1940.count)
  i1940.cycleCount = i1941[1]
  i1940.minCount = i1941[2]
  i1940.maxCount = i1941[3]
  i1940.repeatInterval = i1941[4]
  i1940.time = i1941[5]
  return i1940
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule"] = function (request, data, root) {
  var i1942 = root || new pc.ParticleSystemRotationBySpeed()
  var i1943 = data
  i1942.enabled = !!i1943[0]
  i1942.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1943[1], i1942.x)
  i1942.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1943[2], i1942.y)
  i1942.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1943[3], i1942.z)
  i1942.separateAxes = !!i1943[4]
  i1942.range = new pc.Vec2( i1943[5], i1943[6] )
  return i1942
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule"] = function (request, data, root) {
  var i1944 = root || new pc.ParticleSystemRotationOverLifetime()
  var i1945 = data
  i1944.enabled = !!i1945[0]
  i1944.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1945[1], i1944.x)
  i1944.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1945[2], i1944.y)
  i1944.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1945[3], i1944.z)
  i1944.separateAxes = !!i1945[4]
  return i1944
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule"] = function (request, data, root) {
  var i1946 = root || new pc.ParticleSystemShape()
  var i1947 = data
  i1946.enabled = !!i1947[0]
  i1946.shapeType = i1947[1]
  i1946.randomDirectionAmount = i1947[2]
  i1946.sphericalDirectionAmount = i1947[3]
  i1946.randomPositionAmount = i1947[4]
  i1946.alignToDirection = !!i1947[5]
  i1946.radius = i1947[6]
  i1946.radiusMode = i1947[7]
  i1946.radiusSpread = i1947[8]
  i1946.radiusSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1947[9], i1946.radiusSpeed)
  i1946.radiusThickness = i1947[10]
  i1946.angle = i1947[11]
  i1946.length = i1947[12]
  i1946.boxThickness = new pc.Vec3( i1947[13], i1947[14], i1947[15] )
  i1946.meshShapeType = i1947[16]
  request.r(i1947[17], i1947[18], 0, i1946, 'mesh')
  request.r(i1947[19], i1947[20], 0, i1946, 'meshRenderer')
  request.r(i1947[21], i1947[22], 0, i1946, 'skinnedMeshRenderer')
  i1946.useMeshMaterialIndex = !!i1947[23]
  i1946.meshMaterialIndex = i1947[24]
  i1946.useMeshColors = !!i1947[25]
  i1946.normalOffset = i1947[26]
  i1946.arc = i1947[27]
  i1946.arcMode = i1947[28]
  i1946.arcSpread = i1947[29]
  i1946.arcSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1947[30], i1946.arcSpeed)
  i1946.donutRadius = i1947[31]
  i1946.position = new pc.Vec3( i1947[32], i1947[33], i1947[34] )
  i1946.rotation = new pc.Vec3( i1947[35], i1947[36], i1947[37] )
  i1946.scale = new pc.Vec3( i1947[38], i1947[39], i1947[40] )
  return i1946
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule"] = function (request, data, root) {
  var i1948 = root || new pc.ParticleSystemSizeBySpeed()
  var i1949 = data
  i1948.enabled = !!i1949[0]
  i1948.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1949[1], i1948.x)
  i1948.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1949[2], i1948.y)
  i1948.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1949[3], i1948.z)
  i1948.separateAxes = !!i1949[4]
  i1948.range = new pc.Vec2( i1949[5], i1949[6] )
  return i1948
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule"] = function (request, data, root) {
  var i1950 = root || new pc.ParticleSystemSizeOverLifetime()
  var i1951 = data
  i1950.enabled = !!i1951[0]
  i1950.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1951[1], i1950.x)
  i1950.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1951[2], i1950.y)
  i1950.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1951[3], i1950.z)
  i1950.separateAxes = !!i1951[4]
  return i1950
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule"] = function (request, data, root) {
  var i1952 = root || new pc.ParticleSystemTextureSheetAnimation()
  var i1953 = data
  i1952.enabled = !!i1953[0]
  i1952.mode = i1953[1]
  i1952.animation = i1953[2]
  i1952.numTilesX = i1953[3]
  i1952.numTilesY = i1953[4]
  i1952.useRandomRow = !!i1953[5]
  i1952.frameOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1953[6], i1952.frameOverTime)
  i1952.startFrame = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1953[7], i1952.startFrame)
  i1952.cycleCount = i1953[8]
  i1952.rowIndex = i1953[9]
  i1952.flipU = i1953[10]
  i1952.flipV = i1953[11]
  i1952.spriteCount = i1953[12]
  var i1955 = i1953[13]
  var i1954 = []
  for(var i = 0; i < i1955.length; i += 2) {
  request.r(i1955[i + 0], i1955[i + 1], 2, i1954, '')
  }
  i1952.sprites = i1954
  return i1952
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule"] = function (request, data, root) {
  var i1958 = root || new pc.ParticleSystemVelocityOverLifetime()
  var i1959 = data
  i1958.enabled = !!i1959[0]
  i1958.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1959[1], i1958.x)
  i1958.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1959[2], i1958.y)
  i1958.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1959[3], i1958.z)
  i1958.radial = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1959[4], i1958.radial)
  i1958.speedModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1959[5], i1958.speedModifier)
  i1958.space = i1959[6]
  i1958.orbitalX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1959[7], i1958.orbitalX)
  i1958.orbitalY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1959[8], i1958.orbitalY)
  i1958.orbitalZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1959[9], i1958.orbitalZ)
  i1958.orbitalOffsetX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1959[10], i1958.orbitalOffsetX)
  i1958.orbitalOffsetY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1959[11], i1958.orbitalOffsetY)
  i1958.orbitalOffsetZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1959[12], i1958.orbitalOffsetZ)
  return i1958
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule"] = function (request, data, root) {
  var i1960 = root || new pc.ParticleSystemNoise()
  var i1961 = data
  i1960.enabled = !!i1961[0]
  i1960.separateAxes = !!i1961[1]
  i1960.strengthX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1961[2], i1960.strengthX)
  i1960.strengthY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1961[3], i1960.strengthY)
  i1960.strengthZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1961[4], i1960.strengthZ)
  i1960.frequency = i1961[5]
  i1960.damping = !!i1961[6]
  i1960.octaveCount = i1961[7]
  i1960.octaveMultiplier = i1961[8]
  i1960.octaveScale = i1961[9]
  i1960.quality = i1961[10]
  i1960.scrollSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1961[11], i1960.scrollSpeed)
  i1960.scrollSpeedMultiplier = i1961[12]
  i1960.remapEnabled = !!i1961[13]
  i1960.remapX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1961[14], i1960.remapX)
  i1960.remapY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1961[15], i1960.remapY)
  i1960.remapZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1961[16], i1960.remapZ)
  i1960.positionAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1961[17], i1960.positionAmount)
  i1960.rotationAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1961[18], i1960.rotationAmount)
  i1960.sizeAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1961[19], i1960.sizeAmount)
  return i1960
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule"] = function (request, data, root) {
  var i1962 = root || new pc.ParticleSystemInheritVelocity()
  var i1963 = data
  i1962.enabled = !!i1963[0]
  i1962.mode = i1963[1]
  i1962.curve = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1963[2], i1962.curve)
  return i1962
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule"] = function (request, data, root) {
  var i1964 = root || new pc.ParticleSystemForceOverLifetime()
  var i1965 = data
  i1964.enabled = !!i1965[0]
  i1964.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1965[1], i1964.x)
  i1964.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1965[2], i1964.y)
  i1964.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1965[3], i1964.z)
  i1964.space = i1965[4]
  i1964.randomized = !!i1965[5]
  return i1964
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule"] = function (request, data, root) {
  var i1966 = root || new pc.ParticleSystemLimitVelocityOverLifetime()
  var i1967 = data
  i1966.enabled = !!i1967[0]
  i1966.limit = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1967[1], i1966.limit)
  i1966.limitX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1967[2], i1966.limitX)
  i1966.limitY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1967[3], i1966.limitY)
  i1966.limitZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1967[4], i1966.limitZ)
  i1966.dampen = i1967[5]
  i1966.separateAxes = !!i1967[6]
  i1966.space = i1967[7]
  i1966.drag = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1967[8], i1966.drag)
  i1966.multiplyDragByParticleSize = !!i1967[9]
  i1966.multiplyDragByParticleVelocity = !!i1967[10]
  return i1966
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer"] = function (request, data, root) {
  var i1968 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer' )
  var i1969 = data
  request.r(i1969[0], i1969[1], 0, i1968, 'mesh')
  i1968.meshCount = i1969[2]
  i1968.activeVertexStreamsCount = i1969[3]
  i1968.alignment = i1969[4]
  i1968.renderMode = i1969[5]
  i1968.sortMode = i1969[6]
  i1968.lengthScale = i1969[7]
  i1968.velocityScale = i1969[8]
  i1968.cameraVelocityScale = i1969[9]
  i1968.normalDirection = i1969[10]
  i1968.sortingFudge = i1969[11]
  i1968.minParticleSize = i1969[12]
  i1968.maxParticleSize = i1969[13]
  i1968.pivot = new pc.Vec3( i1969[14], i1969[15], i1969[16] )
  request.r(i1969[17], i1969[18], 0, i1968, 'trailMaterial')
  i1968.applyActiveColorSpace = !!i1969[19]
  i1968.enabled = !!i1969[20]
  request.r(i1969[21], i1969[22], 0, i1968, 'sharedMaterial')
  var i1971 = i1969[23]
  var i1970 = []
  for(var i = 0; i < i1971.length; i += 2) {
  request.r(i1971[i + 0], i1971[i + 1], 2, i1970, '')
  }
  i1968.sharedMaterials = i1970
  i1968.receiveShadows = !!i1969[24]
  i1968.shadowCastingMode = i1969[25]
  i1968.sortingLayerID = i1969[26]
  i1968.sortingOrder = i1969[27]
  i1968.lightmapIndex = i1969[28]
  i1968.lightmapSceneIndex = i1969[29]
  i1968.lightmapScaleOffset = new pc.Vec4( i1969[30], i1969[31], i1969[32], i1969[33] )
  i1968.lightProbeUsage = i1969[34]
  i1968.reflectionProbeUsage = i1969[35]
  return i1968
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i1974 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i1975 = data
  i1974.name = i1975[0]
  i1974.tagId = i1975[1]
  i1974.enabled = !!i1975[2]
  i1974.isStatic = !!i1975[3]
  i1974.layer = i1975[4]
  return i1974
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i1976 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i1977 = data
  i1976.name = i1977[0]
  i1976.index = i1977[1]
  i1976.startup = !!i1977[2]
  return i1976
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i1978 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i1979 = data
  i1978.aspect = i1979[0]
  i1978.orthographic = !!i1979[1]
  i1978.orthographicSize = i1979[2]
  i1978.backgroundColor = new pc.Color(i1979[3], i1979[4], i1979[5], i1979[6])
  i1978.nearClipPlane = i1979[7]
  i1978.farClipPlane = i1979[8]
  i1978.fieldOfView = i1979[9]
  i1978.depth = i1979[10]
  i1978.clearFlags = i1979[11]
  i1978.cullingMask = i1979[12]
  i1978.rect = i1979[13]
  request.r(i1979[14], i1979[15], 0, i1978, 'targetTexture')
  i1978.usePhysicalProperties = !!i1979[16]
  i1978.focalLength = i1979[17]
  i1978.sensorSize = new pc.Vec2( i1979[18], i1979[19] )
  i1978.lensShift = new pc.Vec2( i1979[20], i1979[21] )
  i1978.gateFit = i1979[22]
  i1978.commandBufferCount = i1979[23]
  i1978.cameraType = i1979[24]
  i1978.enabled = !!i1979[25]
  return i1978
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i1980 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i1981 = data
  request.r(i1981[0], i1981[1], 0, i1980, 'm_FirstSelected')
  i1980.m_sendNavigationEvents = !!i1981[2]
  i1980.m_DragThreshold = i1981[3]
  return i1980
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i1982 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i1983 = data
  i1982.m_HorizontalAxis = i1983[0]
  i1982.m_VerticalAxis = i1983[1]
  i1982.m_SubmitButton = i1983[2]
  i1982.m_CancelButton = i1983[3]
  i1982.m_InputActionsPerSecond = i1983[4]
  i1982.m_RepeatDelay = i1983[5]
  i1982.m_ForceModuleActive = !!i1983[6]
  i1982.m_SendPointerHoverToParent = !!i1983[7]
  return i1982
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i1984 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i1985 = data
  i1984.pivot = new pc.Vec2( i1985[0], i1985[1] )
  i1984.anchorMin = new pc.Vec2( i1985[2], i1985[3] )
  i1984.anchorMax = new pc.Vec2( i1985[4], i1985[5] )
  i1984.sizeDelta = new pc.Vec2( i1985[6], i1985[7] )
  i1984.anchoredPosition3D = new pc.Vec3( i1985[8], i1985[9], i1985[10] )
  i1984.rotation = new pc.Quat(i1985[11], i1985[12], i1985[13], i1985[14])
  i1984.scale = new pc.Vec3( i1985[15], i1985[16], i1985[17] )
  return i1984
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i1986 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i1987 = data
  i1986.planeDistance = i1987[0]
  i1986.referencePixelsPerUnit = i1987[1]
  i1986.isFallbackOverlay = !!i1987[2]
  i1986.renderMode = i1987[3]
  i1986.renderOrder = i1987[4]
  i1986.sortingLayerName = i1987[5]
  i1986.sortingOrder = i1987[6]
  i1986.scaleFactor = i1987[7]
  request.r(i1987[8], i1987[9], 0, i1986, 'worldCamera')
  i1986.overrideSorting = !!i1987[10]
  i1986.pixelPerfect = !!i1987[11]
  i1986.targetDisplay = i1987[12]
  i1986.overridePixelPerfect = !!i1987[13]
  i1986.enabled = !!i1987[14]
  return i1986
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i1988 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i1989 = data
  i1988.m_UiScaleMode = i1989[0]
  i1988.m_ReferencePixelsPerUnit = i1989[1]
  i1988.m_ScaleFactor = i1989[2]
  i1988.m_ReferenceResolution = new pc.Vec2( i1989[3], i1989[4] )
  i1988.m_ScreenMatchMode = i1989[5]
  i1988.m_MatchWidthOrHeight = i1989[6]
  i1988.m_PhysicalUnit = i1989[7]
  i1988.m_FallbackScreenDPI = i1989[8]
  i1988.m_DefaultSpriteDPI = i1989[9]
  i1988.m_DynamicPixelsPerUnit = i1989[10]
  i1988.m_PresetInfoIsWorld = !!i1989[11]
  return i1988
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i1990 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i1991 = data
  i1990.m_IgnoreReversedGraphics = !!i1991[0]
  i1990.m_BlockingObjects = i1991[1]
  i1990.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i1991[2] )
  return i1990
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i1992 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i1993 = data
  i1992.cullTransparentMesh = !!i1993[0]
  return i1992
}

Deserializers["UnityEngine.UI.AspectRatioFitter"] = function (request, data, root) {
  var i1994 = root || request.c( 'UnityEngine.UI.AspectRatioFitter' )
  var i1995 = data
  i1994.m_AspectMode = i1995[0]
  i1994.m_AspectRatio = i1995[1]
  return i1994
}

Deserializers["UnityEngine.UI.RawImage"] = function (request, data, root) {
  var i1996 = root || request.c( 'UnityEngine.UI.RawImage' )
  var i1997 = data
  request.r(i1997[0], i1997[1], 0, i1996, 'm_Texture')
  i1996.m_UVRect = UnityEngine.Rect.MinMaxRect(i1997[2], i1997[3], i1997[4], i1997[5])
  request.r(i1997[6], i1997[7], 0, i1996, 'm_Material')
  i1996.m_Maskable = !!i1997[8]
  i1996.m_Color = new pc.Color(i1997[9], i1997[10], i1997[11], i1997[12])
  i1996.m_RaycastTarget = !!i1997[13]
  i1996.m_RaycastPadding = new pc.Vec4( i1997[14], i1997[15], i1997[16], i1997[17] )
  return i1996
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer"] = function (request, data, root) {
  var i1998 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer' )
  var i1999 = data
  i1998.color = new pc.Color(i1999[0], i1999[1], i1999[2], i1999[3])
  request.r(i1999[4], i1999[5], 0, i1998, 'sprite')
  i1998.flipX = !!i1999[6]
  i1998.flipY = !!i1999[7]
  i1998.drawMode = i1999[8]
  i1998.size = new pc.Vec2( i1999[9], i1999[10] )
  i1998.tileMode = i1999[11]
  i1998.adaptiveModeThreshold = i1999[12]
  i1998.maskInteraction = i1999[13]
  i1998.spriteSortPoint = i1999[14]
  i1998.enabled = !!i1999[15]
  request.r(i1999[16], i1999[17], 0, i1998, 'sharedMaterial')
  var i2001 = i1999[18]
  var i2000 = []
  for(var i = 0; i < i2001.length; i += 2) {
  request.r(i2001[i + 0], i2001[i + 1], 2, i2000, '')
  }
  i1998.sharedMaterials = i2000
  i1998.receiveShadows = !!i1999[19]
  i1998.shadowCastingMode = i1999[20]
  i1998.sortingLayerID = i1999[21]
  i1998.sortingOrder = i1999[22]
  i1998.lightmapIndex = i1999[23]
  i1998.lightmapSceneIndex = i1999[24]
  i1998.lightmapScaleOffset = new pc.Vec4( i1999[25], i1999[26], i1999[27], i1999[28] )
  i1998.lightProbeUsage = i1999[29]
  i1998.reflectionProbeUsage = i1999[30]
  return i1998
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D"] = function (request, data, root) {
  var i2002 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D' )
  var i2003 = data
  i2002.usedByComposite = !!i2003[0]
  i2002.autoTiling = !!i2003[1]
  i2002.size = new pc.Vec2( i2003[2], i2003[3] )
  i2002.edgeRadius = i2003[4]
  i2002.enabled = !!i2003[5]
  i2002.isTrigger = !!i2003[6]
  i2002.usedByEffector = !!i2003[7]
  i2002.density = i2003[8]
  i2002.offset = new pc.Vec2( i2003[9], i2003[10] )
  request.r(i2003[11], i2003[12], 0, i2002, 'material')
  return i2002
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SortingGroup"] = function (request, data, root) {
  var i2004 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SortingGroup' )
  var i2005 = data
  i2004.sortingLayerIndex = i2005[0]
  i2004.sortingOrder = i2005[1]
  i2004.sortingLayerName = i2005[2]
  i2004.enabled = !!i2005[3]
  return i2004
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Rigidbody2D"] = function (request, data, root) {
  var i2006 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Rigidbody2D' )
  var i2007 = data
  i2006.bodyType = i2007[0]
  request.r(i2007[1], i2007[2], 0, i2006, 'material')
  i2006.simulated = !!i2007[3]
  i2006.useAutoMass = !!i2007[4]
  i2006.mass = i2007[5]
  i2006.drag = i2007[6]
  i2006.angularDrag = i2007[7]
  i2006.gravityScale = i2007[8]
  i2006.collisionDetectionMode = i2007[9]
  i2006.sleepMode = i2007[10]
  i2006.constraints = i2007[11]
  return i2006
}

Deserializers["MonsterController"] = function (request, data, root) {
  var i2008 = root || request.c( 'MonsterController' )
  var i2009 = data
  request.r(i2009[0], i2009[1], 0, i2008, 'joint')
  request.r(i2009[2], i2009[3], 0, i2008, 'rb')
  request.r(i2009[4], i2009[5], 0, i2008, 'deadSFX')
  i2008.force = new pc.Vec2( i2009[6], i2009[7] )
  return i2008
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.HingeJoint2D"] = function (request, data, root) {
  var i2010 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.HingeJoint2D' )
  var i2011 = data
  i2010.useLimits = !!i2011[0]
  i2010.limits = request.d('UnityEngine.JointAngleLimits2D', i2011[1], i2010.limits)
  i2010.useMotor = !!i2011[2]
  i2010.motor = request.d('UnityEngine.JointMotor2D', i2011[3], i2010.motor)
  i2010.anchor = new pc.Vec2( i2011[4], i2011[5] )
  i2010.connectedAnchor = new pc.Vec2( i2011[6], i2011[7] )
  i2010.autoConfigureConnectedAnchor = !!i2011[8]
  request.r(i2011[9], i2011[10], 0, i2010, 'connectedBody')
  i2010.breakForce = i2011[11]
  i2010.breakTorque = i2011[12]
  i2010.enableCollision = !!i2011[13]
  i2010.enabled = !!i2011[14]
  return i2010
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.TargetJoint2D"] = function (request, data, root) {
  var i2012 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.TargetJoint2D' )
  var i2013 = data
  i2012.autoConfigureTarget = !!i2013[0]
  i2012.target = new pc.Vec2( i2013[1], i2013[2] )
  i2012.anchor = new pc.Vec2( i2013[3], i2013[4] )
  i2012.maxForce = i2013[5]
  i2012.dampingRatio = i2013[6]
  i2012.frequency = i2013[7]
  request.r(i2013[8], i2013[9], 0, i2012, 'connectedBody')
  i2012.breakForce = i2013[10]
  i2012.breakTorque = i2013[11]
  i2012.enableCollision = !!i2013[12]
  i2012.enabled = !!i2013[13]
  return i2012
}

Deserializers["BonkController"] = function (request, data, root) {
  var i2014 = root || request.c( 'BonkController' )
  var i2015 = data
  i2014.target = i2015[0]
  i2014.maxBonk = i2015[1]
  request.r(i2015[2], i2015[3], 0, i2014, 'hitSound')
  return i2014
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CircleCollider2D"] = function (request, data, root) {
  var i2016 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CircleCollider2D' )
  var i2017 = data
  i2016.radius = i2017[0]
  i2016.enabled = !!i2017[1]
  i2016.isTrigger = !!i2017[2]
  i2016.usedByEffector = !!i2017[3]
  i2016.density = i2017[4]
  i2016.offset = new pc.Vec2( i2017[5], i2017[6] )
  request.r(i2017[7], i2017[8], 0, i2016, 'material')
  return i2016
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i2018 = root || request.c( 'UnityEngine.UI.Button' )
  var i2019 = data
  i2018.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i2019[0], i2018.m_OnClick)
  i2018.m_Navigation = request.d('UnityEngine.UI.Navigation', i2019[1], i2018.m_Navigation)
  i2018.m_Transition = i2019[2]
  i2018.m_Colors = request.d('UnityEngine.UI.ColorBlock', i2019[3], i2018.m_Colors)
  i2018.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i2019[4], i2018.m_SpriteState)
  i2018.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i2019[5], i2018.m_AnimationTriggers)
  i2018.m_Interactable = !!i2019[6]
  request.r(i2019[7], i2019[8], 0, i2018, 'm_TargetGraphic')
  return i2018
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i2020 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i2021 = data
  i2020.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i2021[0], i2020.m_PersistentCalls)
  return i2020
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i2022 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i2023 = data
  var i2025 = i2023[0]
  var i2024 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i2025.length; i += 1) {
    i2024.add(request.d('UnityEngine.Events.PersistentCall', i2025[i + 0]));
  }
  i2022.m_Calls = i2024
  return i2022
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i2028 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i2029 = data
  request.r(i2029[0], i2029[1], 0, i2028, 'm_Target')
  i2028.m_TargetAssemblyTypeName = i2029[2]
  i2028.m_MethodName = i2029[3]
  i2028.m_Mode = i2029[4]
  i2028.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i2029[5], i2028.m_Arguments)
  i2028.m_CallState = i2029[6]
  return i2028
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i2030 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i2031 = data
  i2030.m_Mode = i2031[0]
  i2030.m_WrapAround = !!i2031[1]
  request.r(i2031[2], i2031[3], 0, i2030, 'm_SelectOnUp')
  request.r(i2031[4], i2031[5], 0, i2030, 'm_SelectOnDown')
  request.r(i2031[6], i2031[7], 0, i2030, 'm_SelectOnLeft')
  request.r(i2031[8], i2031[9], 0, i2030, 'm_SelectOnRight')
  return i2030
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i2032 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i2033 = data
  i2032.m_NormalColor = new pc.Color(i2033[0], i2033[1], i2033[2], i2033[3])
  i2032.m_HighlightedColor = new pc.Color(i2033[4], i2033[5], i2033[6], i2033[7])
  i2032.m_PressedColor = new pc.Color(i2033[8], i2033[9], i2033[10], i2033[11])
  i2032.m_SelectedColor = new pc.Color(i2033[12], i2033[13], i2033[14], i2033[15])
  i2032.m_DisabledColor = new pc.Color(i2033[16], i2033[17], i2033[18], i2033[19])
  i2032.m_ColorMultiplier = i2033[20]
  i2032.m_FadeDuration = i2033[21]
  return i2032
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i2034 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i2035 = data
  request.r(i2035[0], i2035[1], 0, i2034, 'm_HighlightedSprite')
  request.r(i2035[2], i2035[3], 0, i2034, 'm_PressedSprite')
  request.r(i2035[4], i2035[5], 0, i2034, 'm_SelectedSprite')
  request.r(i2035[6], i2035[7], 0, i2034, 'm_DisabledSprite')
  return i2034
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i2036 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i2037 = data
  i2036.m_NormalTrigger = i2037[0]
  i2036.m_HighlightedTrigger = i2037[1]
  i2036.m_PressedTrigger = i2037[2]
  i2036.m_SelectedTrigger = i2037[3]
  i2036.m_DisabledTrigger = i2037[4]
  return i2036
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i2038 = root || request.c( 'UnityEngine.UI.Image' )
  var i2039 = data
  request.r(i2039[0], i2039[1], 0, i2038, 'm_Sprite')
  i2038.m_Type = i2039[2]
  i2038.m_PreserveAspect = !!i2039[3]
  i2038.m_FillCenter = !!i2039[4]
  i2038.m_FillMethod = i2039[5]
  i2038.m_FillAmount = i2039[6]
  i2038.m_FillClockwise = !!i2039[7]
  i2038.m_FillOrigin = i2039[8]
  i2038.m_UseSpriteMesh = !!i2039[9]
  i2038.m_PixelsPerUnitMultiplier = i2039[10]
  request.r(i2039[11], i2039[12], 0, i2038, 'm_Material')
  i2038.m_Maskable = !!i2039[13]
  i2038.m_Color = new pc.Color(i2039[14], i2039[15], i2039[16], i2039[17])
  i2038.m_RaycastTarget = !!i2039[18]
  i2038.m_RaycastPadding = new pc.Vec4( i2039[19], i2039[20], i2039[21], i2039[22] )
  return i2038
}

Deserializers["DG.Tweening.DOTweenAnimation"] = function (request, data, root) {
  var i2040 = root || request.c( 'DG.Tweening.DOTweenAnimation' )
  var i2041 = data
  i2040.targetIsSelf = !!i2041[0]
  request.r(i2041[1], i2041[2], 0, i2040, 'targetGO')
  i2040.tweenTargetIsTargetGO = !!i2041[3]
  i2040.delay = i2041[4]
  i2040.duration = i2041[5]
  i2040.easeType = i2041[6]
  i2040.easeCurve = new pc.AnimationCurve( { keys_flow: i2041[7] } )
  i2040.loopType = i2041[8]
  i2040.loops = i2041[9]
  i2040.id = i2041[10]
  i2040.isRelative = !!i2041[11]
  i2040.isFrom = !!i2041[12]
  i2040.isIndependentUpdate = !!i2041[13]
  i2040.autoKill = !!i2041[14]
  i2040.autoGenerate = !!i2041[15]
  i2040.isActive = !!i2041[16]
  i2040.isValid = !!i2041[17]
  request.r(i2041[18], i2041[19], 0, i2040, 'target')
  i2040.animationType = i2041[20]
  i2040.targetType = i2041[21]
  i2040.forcedTargetType = i2041[22]
  i2040.autoPlay = !!i2041[23]
  i2040.useTargetAsV3 = !!i2041[24]
  i2040.endValueFloat = i2041[25]
  i2040.endValueV3 = new pc.Vec3( i2041[26], i2041[27], i2041[28] )
  i2040.endValueV2 = new pc.Vec2( i2041[29], i2041[30] )
  i2040.endValueColor = new pc.Color(i2041[31], i2041[32], i2041[33], i2041[34])
  i2040.endValueString = i2041[35]
  i2040.endValueRect = UnityEngine.Rect.MinMaxRect(i2041[36], i2041[37], i2041[38], i2041[39])
  request.r(i2041[40], i2041[41], 0, i2040, 'endValueTransform')
  i2040.optionalBool0 = !!i2041[42]
  i2040.optionalBool1 = !!i2041[43]
  i2040.optionalFloat0 = i2041[44]
  i2040.optionalInt0 = i2041[45]
  i2040.optionalRotationMode = i2041[46]
  i2040.optionalScrambleMode = i2041[47]
  i2040.optionalShakeRandomnessMode = i2041[48]
  i2040.optionalString = i2041[49]
  i2040.updateType = i2041[50]
  i2040.isSpeedBased = !!i2041[51]
  i2040.hasOnStart = !!i2041[52]
  i2040.hasOnPlay = !!i2041[53]
  i2040.hasOnUpdate = !!i2041[54]
  i2040.hasOnStepComplete = !!i2041[55]
  i2040.hasOnComplete = !!i2041[56]
  i2040.hasOnTweenCreated = !!i2041[57]
  i2040.hasOnRewind = !!i2041[58]
  i2040.onStart = request.d('UnityEngine.Events.UnityEvent', i2041[59], i2040.onStart)
  i2040.onPlay = request.d('UnityEngine.Events.UnityEvent', i2041[60], i2040.onPlay)
  i2040.onUpdate = request.d('UnityEngine.Events.UnityEvent', i2041[61], i2040.onUpdate)
  i2040.onStepComplete = request.d('UnityEngine.Events.UnityEvent', i2041[62], i2040.onStepComplete)
  i2040.onComplete = request.d('UnityEngine.Events.UnityEvent', i2041[63], i2040.onComplete)
  i2040.onTweenCreated = request.d('UnityEngine.Events.UnityEvent', i2041[64], i2040.onTweenCreated)
  i2040.onRewind = request.d('UnityEngine.Events.UnityEvent', i2041[65], i2040.onRewind)
  return i2040
}

Deserializers["UnityEngine.Events.UnityEvent"] = function (request, data, root) {
  var i2042 = root || request.c( 'UnityEngine.Events.UnityEvent' )
  var i2043 = data
  i2042.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i2043[0], i2042.m_PersistentCalls)
  return i2042
}

Deserializers["GameController"] = function (request, data, root) {
  var i2044 = root || request.c( 'GameController' )
  var i2045 = data
  var i2047 = i2045[0]
  var i2046 = new (System.Collections.Generic.List$1(Bridge.ns('MonsterController')))
  for(var i = 0; i < i2047.length; i += 2) {
  request.r(i2047[i + 0], i2047[i + 1], 1, i2046, '')
  }
  i2044.monsters = i2046
  var i2049 = i2045[1]
  var i2048 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Vector3')))
  for(var i = 0; i < i2049.length; i += 3) {
    i2048.add(new pc.Vec3( i2049[i + 0], i2049[i + 1], i2049[i + 2] ));
  }
  i2044.cameraPos = i2048
  i2044.speedMove = i2045[2]
  request.r(i2045[3], i2045[4], 0, i2044, 'target')
  i2044.index = i2045[5]
  i2044.end = !!i2045[6]
  request.r(i2045[7], i2045[8], 0, i2044, 'mainCamera')
  request.r(i2045[9], i2045[10], 0, i2044, 'endUI')
  return i2044
}

Deserializers["TargetController"] = function (request, data, root) {
  var i2054 = root || request.c( 'TargetController' )
  var i2055 = data
  var i2057 = i2055[0]
  var i2056 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TargetJoint2D')))
  for(var i = 0; i < i2057.length; i += 2) {
  request.r(i2057[i + 0], i2057[i + 1], 1, i2056, '')
  }
  i2054.listTarget = i2056
  request.r(i2055[1], i2055[2], 0, i2054, 'currentTarget')
  i2054.index = i2055[3]
  request.r(i2055[4], i2055[5], 0, i2054, 'tut')
  return i2054
}

Deserializers["LunaController"] = function (request, data, root) {
  var i2060 = root || request.c( 'LunaController' )
  var i2061 = data
  request.r(i2061[0], i2061[1], 0, i2060, 'BGTexture')
  i2060.UseTime = !!i2061[2]
  i2060.TimePlay = i2061[3]
  i2060.RedLeft = !!i2061[4]
  i2060.UseHuman = !!i2061[5]
  request.r(i2061[6], i2061[7], 0, i2060, 'setup')
  request.r(i2061[8], i2061[9], 0, i2060, 'BGImage')
  var i2063 = i2061[10]
  var i2062 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.UI.Button')))
  for(var i = 0; i < i2063.length; i += 2) {
  request.r(i2063[i + 0], i2063[i + 1], 1, i2062, '')
  }
  i2060.CTA = i2062
  return i2060
}

Deserializers["SetupGame"] = function (request, data, root) {
  var i2066 = root || request.c( 'SetupGame' )
  var i2067 = data
  request.r(i2067[0], i2067[1], 0, i2066, 'red1')
  request.r(i2067[2], i2067[3], 0, i2066, 'orange1')
  request.r(i2067[4], i2067[5], 0, i2066, 'human1')
  request.r(i2067[6], i2067[7], 0, i2066, 'red1_0')
  request.r(i2067[8], i2067[9], 0, i2066, 'orange1_0')
  request.r(i2067[10], i2067[11], 0, i2066, 'red2')
  request.r(i2067[12], i2067[13], 0, i2066, 'orange2')
  request.r(i2067[14], i2067[15], 0, i2066, 'human2')
  request.r(i2067[16], i2067[17], 0, i2066, 'red2_0')
  request.r(i2067[18], i2067[19], 0, i2066, 'orange2_0')
  request.r(i2067[20], i2067[21], 0, i2066, 'red3_1')
  request.r(i2067[22], i2067[23], 0, i2066, 'red3_2')
  request.r(i2067[24], i2067[25], 0, i2066, 'orange3_1')
  request.r(i2067[26], i2067[27], 0, i2066, 'orange3_2')
  request.r(i2067[28], i2067[29], 0, i2066, 'human3')
  request.r(i2067[30], i2067[31], 0, i2066, 'red3_0')
  request.r(i2067[32], i2067[33], 0, i2066, 'orange3_0')
  request.r(i2067[34], i2067[35], 0, i2066, 'target')
  return i2066
}

Deserializers["AudioController"] = function (request, data, root) {
  var i2068 = root || request.c( 'AudioController' )
  var i2069 = data
  request.r(i2069[0], i2069[1], 0, i2068, 'BGM')
  request.r(i2069[2], i2069[3], 0, i2068, 'musicSource')
  request.r(i2069[4], i2069[5], 0, i2068, 'pool')
  return i2068
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.AudioSource"] = function (request, data, root) {
  var i2070 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.AudioSource' )
  var i2071 = data
  request.r(i2071[0], i2071[1], 0, i2070, 'clip')
  request.r(i2071[2], i2071[3], 0, i2070, 'outputAudioMixerGroup')
  i2070.playOnAwake = !!i2071[4]
  i2070.loop = !!i2071[5]
  i2070.time = i2071[6]
  i2070.volume = i2071[7]
  i2070.pitch = i2071[8]
  i2070.enabled = !!i2071[9]
  return i2070
}

Deserializers["VFXController"] = function (request, data, root) {
  var i2072 = root || request.c( 'VFXController' )
  var i2073 = data
  request.r(i2073[0], i2073[1], 0, i2072, 'bloodPrefab')
  request.r(i2073[2], i2073[3], 0, i2072, 'pool')
  return i2072
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i2074 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i2075 = data
  i2074.ambientIntensity = i2075[0]
  i2074.reflectionIntensity = i2075[1]
  i2074.ambientMode = i2075[2]
  i2074.ambientLight = new pc.Color(i2075[3], i2075[4], i2075[5], i2075[6])
  i2074.ambientSkyColor = new pc.Color(i2075[7], i2075[8], i2075[9], i2075[10])
  i2074.ambientGroundColor = new pc.Color(i2075[11], i2075[12], i2075[13], i2075[14])
  i2074.ambientEquatorColor = new pc.Color(i2075[15], i2075[16], i2075[17], i2075[18])
  i2074.fogColor = new pc.Color(i2075[19], i2075[20], i2075[21], i2075[22])
  i2074.fogEndDistance = i2075[23]
  i2074.fogStartDistance = i2075[24]
  i2074.fogDensity = i2075[25]
  i2074.fog = !!i2075[26]
  request.r(i2075[27], i2075[28], 0, i2074, 'skybox')
  i2074.fogMode = i2075[29]
  var i2077 = i2075[30]
  var i2076 = []
  for(var i = 0; i < i2077.length; i += 1) {
    i2076.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i2077[i + 0]) );
  }
  i2074.lightmaps = i2076
  i2074.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i2075[31], i2074.lightProbes)
  i2074.lightmapsMode = i2075[32]
  i2074.mixedBakeMode = i2075[33]
  i2074.environmentLightingMode = i2075[34]
  i2074.ambientProbe = new pc.SphericalHarmonicsL2(i2075[35])
  request.r(i2075[36], i2075[37], 0, i2074, 'customReflection')
  request.r(i2075[38], i2075[39], 0, i2074, 'defaultReflection')
  i2074.defaultReflectionMode = i2075[40]
  i2074.defaultReflectionResolution = i2075[41]
  i2074.sunLightObjectId = i2075[42]
  i2074.pixelLightCount = i2075[43]
  i2074.defaultReflectionHDR = !!i2075[44]
  i2074.hasLightDataAsset = !!i2075[45]
  i2074.hasManualGenerate = !!i2075[46]
  return i2074
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i2080 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i2081 = data
  request.r(i2081[0], i2081[1], 0, i2080, 'lightmapColor')
  request.r(i2081[2], i2081[3], 0, i2080, 'lightmapDirection')
  request.r(i2081[4], i2081[5], 0, i2080, 'shadowMask')
  return i2080
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i2082 = root || new UnityEngine.LightProbes()
  var i2083 = data
  return i2082
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i2090 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i2091 = data
  var i2093 = i2091[0]
  var i2092 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i2093.length; i += 1) {
    i2092.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i2093[i + 0]));
  }
  i2090.ShaderCompilationErrors = i2092
  i2090.name = i2091[1]
  i2090.guid = i2091[2]
  var i2095 = i2091[3]
  var i2094 = []
  for(var i = 0; i < i2095.length; i += 1) {
    i2094.push( i2095[i + 0] );
  }
  i2090.shaderDefinedKeywords = i2094
  var i2097 = i2091[4]
  var i2096 = []
  for(var i = 0; i < i2097.length; i += 1) {
    i2096.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i2097[i + 0]) );
  }
  i2090.passes = i2096
  var i2099 = i2091[5]
  var i2098 = []
  for(var i = 0; i < i2099.length; i += 1) {
    i2098.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i2099[i + 0]) );
  }
  i2090.usePasses = i2098
  var i2101 = i2091[6]
  var i2100 = []
  for(var i = 0; i < i2101.length; i += 1) {
    i2100.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i2101[i + 0]) );
  }
  i2090.defaultParameterValues = i2100
  request.r(i2091[7], i2091[8], 0, i2090, 'unityFallbackShader')
  i2090.readDepth = !!i2091[9]
  i2090.hasDepthOnlyPass = !!i2091[10]
  i2090.isCreatedByShaderGraph = !!i2091[11]
  i2090.disableBatching = !!i2091[12]
  i2090.compiled = !!i2091[13]
  return i2090
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i2104 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i2105 = data
  i2104.shaderName = i2105[0]
  i2104.errorMessage = i2105[1]
  return i2104
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i2110 = root || new pc.UnityShaderPass()
  var i2111 = data
  i2110.id = i2111[0]
  i2110.subShaderIndex = i2111[1]
  i2110.name = i2111[2]
  i2110.passType = i2111[3]
  i2110.grabPassTextureName = i2111[4]
  i2110.usePass = !!i2111[5]
  i2110.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2111[6], i2110.zTest)
  i2110.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2111[7], i2110.zWrite)
  i2110.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2111[8], i2110.culling)
  i2110.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i2111[9], i2110.blending)
  i2110.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i2111[10], i2110.alphaBlending)
  i2110.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2111[11], i2110.colorWriteMask)
  i2110.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2111[12], i2110.offsetUnits)
  i2110.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2111[13], i2110.offsetFactor)
  i2110.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2111[14], i2110.stencilRef)
  i2110.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2111[15], i2110.stencilReadMask)
  i2110.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2111[16], i2110.stencilWriteMask)
  i2110.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i2111[17], i2110.stencilOp)
  i2110.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i2111[18], i2110.stencilOpFront)
  i2110.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i2111[19], i2110.stencilOpBack)
  var i2113 = i2111[20]
  var i2112 = []
  for(var i = 0; i < i2113.length; i += 1) {
    i2112.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i2113[i + 0]) );
  }
  i2110.tags = i2112
  var i2115 = i2111[21]
  var i2114 = []
  for(var i = 0; i < i2115.length; i += 1) {
    i2114.push( i2115[i + 0] );
  }
  i2110.passDefinedKeywords = i2114
  var i2117 = i2111[22]
  var i2116 = []
  for(var i = 0; i < i2117.length; i += 1) {
    i2116.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i2117[i + 0]) );
  }
  i2110.passDefinedKeywordGroups = i2116
  var i2119 = i2111[23]
  var i2118 = []
  for(var i = 0; i < i2119.length; i += 1) {
    i2118.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i2119[i + 0]) );
  }
  i2110.variants = i2118
  var i2121 = i2111[24]
  var i2120 = []
  for(var i = 0; i < i2121.length; i += 1) {
    i2120.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i2121[i + 0]) );
  }
  i2110.excludedVariants = i2120
  i2110.hasDepthReader = !!i2111[25]
  return i2110
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i2122 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i2123 = data
  i2122.val = i2123[0]
  i2122.name = i2123[1]
  return i2122
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i2124 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i2125 = data
  i2124.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2125[0], i2124.src)
  i2124.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2125[1], i2124.dst)
  i2124.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2125[2], i2124.op)
  return i2124
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i2126 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i2127 = data
  i2126.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2127[0], i2126.pass)
  i2126.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2127[1], i2126.fail)
  i2126.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2127[2], i2126.zFail)
  i2126.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2127[3], i2126.comp)
  return i2126
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i2130 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i2131 = data
  i2130.name = i2131[0]
  i2130.value = i2131[1]
  return i2130
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i2134 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i2135 = data
  var i2137 = i2135[0]
  var i2136 = []
  for(var i = 0; i < i2137.length; i += 1) {
    i2136.push( i2137[i + 0] );
  }
  i2134.keywords = i2136
  i2134.hasDiscard = !!i2135[1]
  return i2134
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i2140 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i2141 = data
  i2140.passId = i2141[0]
  i2140.subShaderIndex = i2141[1]
  var i2143 = i2141[2]
  var i2142 = []
  for(var i = 0; i < i2143.length; i += 1) {
    i2142.push( i2143[i + 0] );
  }
  i2140.keywords = i2142
  i2140.vertexProgram = i2141[3]
  i2140.fragmentProgram = i2141[4]
  i2140.exportedForWebGl2 = !!i2141[5]
  i2140.readDepth = !!i2141[6]
  return i2140
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i2146 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i2147 = data
  request.r(i2147[0], i2147[1], 0, i2146, 'shader')
  i2146.pass = i2147[2]
  return i2146
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i2150 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i2151 = data
  i2150.name = i2151[0]
  i2150.type = i2151[1]
  i2150.value = new pc.Vec4( i2151[2], i2151[3], i2151[4], i2151[5] )
  i2150.textureValue = i2151[6]
  i2150.shaderPropertyFlag = i2151[7]
  return i2150
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i2152 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i2153 = data
  i2152.name = i2153[0]
  request.r(i2153[1], i2153[2], 0, i2152, 'texture')
  i2152.aabb = i2153[3]
  i2152.vertices = i2153[4]
  i2152.triangles = i2153[5]
  i2152.textureRect = UnityEngine.Rect.MinMaxRect(i2153[6], i2153[7], i2153[8], i2153[9])
  i2152.packedRect = UnityEngine.Rect.MinMaxRect(i2153[10], i2153[11], i2153[12], i2153[13])
  i2152.border = new pc.Vec4( i2153[14], i2153[15], i2153[16], i2153[17] )
  i2152.transparency = i2153[18]
  i2152.bounds = i2153[19]
  i2152.pixelsPerUnit = i2153[20]
  i2152.textureWidth = i2153[21]
  i2152.textureHeight = i2153[22]
  i2152.nativeSize = new pc.Vec2( i2153[23], i2153[24] )
  i2152.pivot = new pc.Vec2( i2153[25], i2153[26] )
  i2152.textureRectOffset = new pc.Vec2( i2153[27], i2153[28] )
  return i2152
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i2154 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i2155 = data
  i2154.name = i2155[0]
  return i2154
}

Deserializers["DG.Tweening.Core.DOTweenSettings"] = function (request, data, root) {
  var i2156 = root || request.c( 'DG.Tweening.Core.DOTweenSettings' )
  var i2157 = data
  i2156.useSafeMode = !!i2157[0]
  i2156.safeModeOptions = request.d('DG.Tweening.Core.DOTweenSettings+SafeModeOptions', i2157[1], i2156.safeModeOptions)
  i2156.timeScale = i2157[2]
  i2156.unscaledTimeScale = i2157[3]
  i2156.useSmoothDeltaTime = !!i2157[4]
  i2156.maxSmoothUnscaledTime = i2157[5]
  i2156.rewindCallbackMode = i2157[6]
  i2156.showUnityEditorReport = !!i2157[7]
  i2156.logBehaviour = i2157[8]
  i2156.drawGizmos = !!i2157[9]
  i2156.defaultRecyclable = !!i2157[10]
  i2156.defaultAutoPlay = i2157[11]
  i2156.defaultUpdateType = i2157[12]
  i2156.defaultTimeScaleIndependent = !!i2157[13]
  i2156.defaultEaseType = i2157[14]
  i2156.defaultEaseOvershootOrAmplitude = i2157[15]
  i2156.defaultEasePeriod = i2157[16]
  i2156.defaultAutoKill = !!i2157[17]
  i2156.defaultLoopType = i2157[18]
  i2156.debugMode = !!i2157[19]
  i2156.debugStoreTargetId = !!i2157[20]
  i2156.showPreviewPanel = !!i2157[21]
  i2156.storeSettingsLocation = i2157[22]
  i2156.modules = request.d('DG.Tweening.Core.DOTweenSettings+ModulesSetup', i2157[23], i2156.modules)
  i2156.createASMDEF = !!i2157[24]
  i2156.showPlayingTweens = !!i2157[25]
  i2156.showPausedTweens = !!i2157[26]
  return i2156
}

Deserializers["DG.Tweening.Core.DOTweenSettings+SafeModeOptions"] = function (request, data, root) {
  var i2158 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+SafeModeOptions' )
  var i2159 = data
  i2158.logBehaviour = i2159[0]
  i2158.nestedTweenFailureBehaviour = i2159[1]
  return i2158
}

Deserializers["DG.Tweening.Core.DOTweenSettings+ModulesSetup"] = function (request, data, root) {
  var i2160 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+ModulesSetup' )
  var i2161 = data
  i2160.showPanel = !!i2161[0]
  i2160.audioEnabled = !!i2161[1]
  i2160.physicsEnabled = !!i2161[2]
  i2160.physics2DEnabled = !!i2161[3]
  i2160.spriteEnabled = !!i2161[4]
  i2160.uiEnabled = !!i2161[5]
  i2160.textMeshProEnabled = !!i2161[6]
  i2160.tk2DEnabled = !!i2161[7]
  i2160.deAudioEnabled = !!i2161[8]
  i2160.deUnityExtendedEnabled = !!i2161[9]
  i2160.epoOutlineEnabled = !!i2161[10]
  return i2160
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i2162 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i2163 = data
  var i2165 = i2163[0]
  var i2164 = []
  for(var i = 0; i < i2165.length; i += 1) {
    i2164.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i2165[i + 0]) );
  }
  i2162.files = i2164
  i2162.componentToPrefabIds = i2163[1]
  return i2162
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i2168 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i2169 = data
  i2168.path = i2169[0]
  request.r(i2169[1], i2169[2], 0, i2168, 'unityObject')
  return i2168
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i2170 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i2171 = data
  var i2173 = i2171[0]
  var i2172 = []
  for(var i = 0; i < i2173.length; i += 1) {
    i2172.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i2173[i + 0]) );
  }
  i2170.scriptsExecutionOrder = i2172
  var i2175 = i2171[1]
  var i2174 = []
  for(var i = 0; i < i2175.length; i += 1) {
    i2174.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i2175[i + 0]) );
  }
  i2170.sortingLayers = i2174
  var i2177 = i2171[2]
  var i2176 = []
  for(var i = 0; i < i2177.length; i += 1) {
    i2176.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i2177[i + 0]) );
  }
  i2170.cullingLayers = i2176
  i2170.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i2171[3], i2170.timeSettings)
  i2170.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i2171[4], i2170.physicsSettings)
  i2170.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i2171[5], i2170.physics2DSettings)
  i2170.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i2171[6], i2170.qualitySettings)
  i2170.enableRealtimeShadows = !!i2171[7]
  i2170.enableAutoInstancing = !!i2171[8]
  i2170.enableStaticBatching = !!i2171[9]
  i2170.enableDynamicBatching = !!i2171[10]
  i2170.usePreservativeDynamicBatching = !!i2171[11]
  i2170.lightmapEncodingQuality = i2171[12]
  i2170.desiredColorSpace = i2171[13]
  var i2179 = i2171[14]
  var i2178 = []
  for(var i = 0; i < i2179.length; i += 1) {
    i2178.push( i2179[i + 0] );
  }
  i2170.allTags = i2178
  return i2170
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i2182 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i2183 = data
  i2182.name = i2183[0]
  i2182.value = i2183[1]
  return i2182
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i2186 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i2187 = data
  i2186.id = i2187[0]
  i2186.name = i2187[1]
  i2186.value = i2187[2]
  return i2186
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i2190 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i2191 = data
  i2190.id = i2191[0]
  i2190.name = i2191[1]
  return i2190
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i2192 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i2193 = data
  i2192.fixedDeltaTime = i2193[0]
  i2192.maximumDeltaTime = i2193[1]
  i2192.timeScale = i2193[2]
  i2192.maximumParticleTimestep = i2193[3]
  return i2192
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i2194 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i2195 = data
  i2194.gravity = new pc.Vec3( i2195[0], i2195[1], i2195[2] )
  i2194.defaultSolverIterations = i2195[3]
  i2194.bounceThreshold = i2195[4]
  i2194.autoSyncTransforms = !!i2195[5]
  i2194.autoSimulation = !!i2195[6]
  var i2197 = i2195[7]
  var i2196 = []
  for(var i = 0; i < i2197.length; i += 1) {
    i2196.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i2197[i + 0]) );
  }
  i2194.collisionMatrix = i2196
  return i2194
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i2200 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i2201 = data
  i2200.enabled = !!i2201[0]
  i2200.layerId = i2201[1]
  i2200.otherLayerId = i2201[2]
  return i2200
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i2202 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i2203 = data
  request.r(i2203[0], i2203[1], 0, i2202, 'material')
  i2202.gravity = new pc.Vec2( i2203[2], i2203[3] )
  i2202.positionIterations = i2203[4]
  i2202.velocityIterations = i2203[5]
  i2202.velocityThreshold = i2203[6]
  i2202.maxLinearCorrection = i2203[7]
  i2202.maxAngularCorrection = i2203[8]
  i2202.maxTranslationSpeed = i2203[9]
  i2202.maxRotationSpeed = i2203[10]
  i2202.baumgarteScale = i2203[11]
  i2202.baumgarteTOIScale = i2203[12]
  i2202.timeToSleep = i2203[13]
  i2202.linearSleepTolerance = i2203[14]
  i2202.angularSleepTolerance = i2203[15]
  i2202.defaultContactOffset = i2203[16]
  i2202.autoSimulation = !!i2203[17]
  i2202.queriesHitTriggers = !!i2203[18]
  i2202.queriesStartInColliders = !!i2203[19]
  i2202.callbacksOnDisable = !!i2203[20]
  i2202.reuseCollisionCallbacks = !!i2203[21]
  i2202.autoSyncTransforms = !!i2203[22]
  var i2205 = i2203[23]
  var i2204 = []
  for(var i = 0; i < i2205.length; i += 1) {
    i2204.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i2205[i + 0]) );
  }
  i2202.collisionMatrix = i2204
  return i2202
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i2208 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i2209 = data
  i2208.enabled = !!i2209[0]
  i2208.layerId = i2209[1]
  i2208.otherLayerId = i2209[2]
  return i2208
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i2210 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i2211 = data
  var i2213 = i2211[0]
  var i2212 = []
  for(var i = 0; i < i2213.length; i += 1) {
    i2212.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i2213[i + 0]) );
  }
  i2210.qualityLevels = i2212
  var i2215 = i2211[1]
  var i2214 = []
  for(var i = 0; i < i2215.length; i += 1) {
    i2214.push( i2215[i + 0] );
  }
  i2210.names = i2214
  i2210.shadows = i2211[2]
  i2210.anisotropicFiltering = i2211[3]
  i2210.antiAliasing = i2211[4]
  i2210.lodBias = i2211[5]
  i2210.shadowCascades = i2211[6]
  i2210.shadowDistance = i2211[7]
  i2210.shadowmaskMode = i2211[8]
  i2210.shadowProjection = i2211[9]
  i2210.shadowResolution = i2211[10]
  i2210.softParticles = !!i2211[11]
  i2210.softVegetation = !!i2211[12]
  i2210.activeColorSpace = i2211[13]
  i2210.desiredColorSpace = i2211[14]
  i2210.masterTextureLimit = i2211[15]
  i2210.maxQueuedFrames = i2211[16]
  i2210.particleRaycastBudget = i2211[17]
  i2210.pixelLightCount = i2211[18]
  i2210.realtimeReflectionProbes = !!i2211[19]
  i2210.shadowCascade2Split = i2211[20]
  i2210.shadowCascade4Split = new pc.Vec3( i2211[21], i2211[22], i2211[23] )
  i2210.streamingMipmapsActive = !!i2211[24]
  i2210.vSyncCount = i2211[25]
  i2210.asyncUploadBufferSize = i2211[26]
  i2210.asyncUploadTimeSlice = i2211[27]
  i2210.billboardsFaceCameraPosition = !!i2211[28]
  i2210.shadowNearPlaneOffset = i2211[29]
  i2210.streamingMipmapsMemoryBudget = i2211[30]
  i2210.maximumLODLevel = i2211[31]
  i2210.streamingMipmapsAddAllCameras = !!i2211[32]
  i2210.streamingMipmapsMaxLevelReduction = i2211[33]
  i2210.streamingMipmapsRenderersPerFrame = i2211[34]
  i2210.resolutionScalingFixedDPIFactor = i2211[35]
  i2210.streamingMipmapsMaxFileIORequests = i2211[36]
  i2210.currentQualityLevel = i2211[37]
  return i2210
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i2218 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i2219 = data
  request.r(i2219[0], i2219[1], 0, i2218, 'm_ObjectArgument')
  i2218.m_ObjectArgumentAssemblyTypeName = i2219[2]
  i2218.m_IntArgument = i2219[3]
  i2218.m_FloatArgument = i2219[4]
  i2218.m_StringArgument = i2219[5]
  i2218.m_BoolArgument = !!i2219[6]
  return i2218
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10,"graphicsFormat":11,"sRGBTexture":12,"desiredColorSpace":13,"wrapU":14,"wrapV":15},"Luna.Unity.DTO.UnityEngine.Components.Transform":{"position":0,"scale":3,"rotation":6},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystem":{"main":0,"colorBySpeed":1,"colorOverLifetime":2,"emission":3,"rotationBySpeed":4,"rotationOverLifetime":5,"shape":6,"sizeBySpeed":7,"sizeOverLifetime":8,"textureSheetAnimation":9,"velocityOverLifetime":10,"noise":11,"inheritVelocity":12,"forceOverLifetime":13,"limitVelocityOverLifetime":14,"useAutoRandomSeed":15,"randomSeed":16},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule":{"duration":0,"loop":1,"prewarm":2,"startDelay":3,"startLifetime":4,"startSpeed":5,"startSize3D":6,"startSizeX":7,"startSizeY":8,"startSizeZ":9,"startRotation3D":10,"startRotationX":11,"startRotationY":12,"startRotationZ":13,"startColor":14,"gravityModifier":15,"simulationSpace":16,"customSimulationSpace":17,"simulationSpeed":19,"useUnscaledTime":20,"scalingMode":21,"playOnAwake":22,"maxParticles":23,"emitterVelocityMode":24,"stopAction":25},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve":{"mode":0,"curveMin":1,"curveMax":2,"curveMultiplier":3,"constantMin":4,"constantMax":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient":{"mode":0,"gradientMin":1,"gradientMax":2,"colorMin":3,"colorMax":7},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient":{"mode":0,"colorKeys":1,"alphaKeys":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule":{"enabled":0,"color":1,"range":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey":{"color":0,"time":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey":{"alpha":0,"time":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule":{"enabled":0,"color":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule":{"enabled":0,"rateOverTime":1,"rateOverDistance":2,"bursts":3},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst":{"count":0,"cycleCount":1,"minCount":2,"maxCount":3,"repeatInterval":4,"time":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule":{"enabled":0,"shapeType":1,"randomDirectionAmount":2,"sphericalDirectionAmount":3,"randomPositionAmount":4,"alignToDirection":5,"radius":6,"radiusMode":7,"radiusSpread":8,"radiusSpeed":9,"radiusThickness":10,"angle":11,"length":12,"boxThickness":13,"meshShapeType":16,"mesh":17,"meshRenderer":19,"skinnedMeshRenderer":21,"useMeshMaterialIndex":23,"meshMaterialIndex":24,"useMeshColors":25,"normalOffset":26,"arc":27,"arcMode":28,"arcSpread":29,"arcSpeed":30,"donutRadius":31,"position":32,"rotation":35,"scale":38},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule":{"enabled":0,"mode":1,"animation":2,"numTilesX":3,"numTilesY":4,"useRandomRow":5,"frameOverTime":6,"startFrame":7,"cycleCount":8,"rowIndex":9,"flipU":10,"flipV":11,"spriteCount":12,"sprites":13},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"radial":4,"speedModifier":5,"space":6,"orbitalX":7,"orbitalY":8,"orbitalZ":9,"orbitalOffsetX":10,"orbitalOffsetY":11,"orbitalOffsetZ":12},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule":{"enabled":0,"separateAxes":1,"strengthX":2,"strengthY":3,"strengthZ":4,"frequency":5,"damping":6,"octaveCount":7,"octaveMultiplier":8,"octaveScale":9,"quality":10,"scrollSpeed":11,"scrollSpeedMultiplier":12,"remapEnabled":13,"remapX":14,"remapY":15,"remapZ":16,"positionAmount":17,"rotationAmount":18,"sizeAmount":19},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule":{"enabled":0,"mode":1,"curve":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"space":4,"randomized":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule":{"enabled":0,"limit":1,"limitX":2,"limitY":3,"limitZ":4,"dampen":5,"separateAxes":6,"space":7,"drag":8,"multiplyDragByParticleSize":9,"multiplyDragByParticleVelocity":10},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer":{"mesh":0,"meshCount":2,"activeVertexStreamsCount":3,"alignment":4,"renderMode":5,"sortMode":6,"lengthScale":7,"velocityScale":8,"cameraVelocityScale":9,"normalDirection":10,"sortingFudge":11,"minParticleSize":12,"maxParticleSize":13,"pivot":14,"trailMaterial":17,"applyActiveColorSpace":19,"enabled":20,"sharedMaterial":21,"sharedMaterials":23,"receiveShadows":24,"shadowCastingMode":25,"sortingLayerID":26,"sortingOrder":27,"lightmapIndex":28,"lightmapSceneIndex":29,"lightmapScaleOffset":30,"lightProbeUsage":34,"reflectionProbeUsage":35},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"aspect":0,"orthographic":1,"orthographicSize":2,"backgroundColor":3,"nearClipPlane":7,"farClipPlane":8,"fieldOfView":9,"depth":10,"clearFlags":11,"cullingMask":12,"rect":13,"targetTexture":14,"usePhysicalProperties":16,"focalLength":17,"sensorSize":18,"lensShift":20,"gateFit":22,"commandBufferCount":23,"cameraType":24,"enabled":25},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"planeDistance":0,"referencePixelsPerUnit":1,"isFallbackOverlay":2,"renderMode":3,"renderOrder":4,"sortingLayerName":5,"sortingOrder":6,"scaleFactor":7,"worldCamera":8,"overrideSorting":10,"pixelPerfect":11,"targetDisplay":12,"overridePixelPerfect":13,"enabled":14},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer":{"color":0,"sprite":4,"flipX":6,"flipY":7,"drawMode":8,"size":9,"tileMode":11,"adaptiveModeThreshold":12,"maskInteraction":13,"spriteSortPoint":14,"enabled":15,"sharedMaterial":16,"sharedMaterials":18,"receiveShadows":19,"shadowCastingMode":20,"sortingLayerID":21,"sortingOrder":22,"lightmapIndex":23,"lightmapSceneIndex":24,"lightmapScaleOffset":25,"lightProbeUsage":29,"reflectionProbeUsage":30},"Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D":{"usedByComposite":0,"autoTiling":1,"size":2,"edgeRadius":4,"enabled":5,"isTrigger":6,"usedByEffector":7,"density":8,"offset":9,"material":11},"Luna.Unity.DTO.UnityEngine.Components.SortingGroup":{"sortingLayerIndex":0,"sortingOrder":1,"sortingLayerName":2,"enabled":3},"Luna.Unity.DTO.UnityEngine.Components.Rigidbody2D":{"bodyType":0,"material":1,"simulated":3,"useAutoMass":4,"mass":5,"drag":6,"angularDrag":7,"gravityScale":8,"collisionDetectionMode":9,"sleepMode":10,"constraints":11},"Luna.Unity.DTO.UnityEngine.Components.HingeJoint2D":{"useLimits":0,"limits":1,"useMotor":2,"motor":3,"anchor":4,"connectedAnchor":6,"autoConfigureConnectedAnchor":8,"connectedBody":9,"breakForce":11,"breakTorque":12,"enableCollision":13,"enabled":14},"Luna.Unity.DTO.UnityEngine.Components.TargetJoint2D":{"autoConfigureTarget":0,"target":1,"anchor":3,"maxForce":5,"dampingRatio":6,"frequency":7,"connectedBody":8,"breakForce":10,"breakTorque":11,"enableCollision":12,"enabled":13},"Luna.Unity.DTO.UnityEngine.Components.CircleCollider2D":{"radius":0,"enabled":1,"isTrigger":2,"usedByEffector":3,"density":4,"offset":5,"material":7},"Luna.Unity.DTO.UnityEngine.Components.AudioSource":{"clip":0,"outputAudioMixerGroup":2,"playOnAwake":4,"loop":5,"time":6,"volume":7,"pitch":8,"enabled":9},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"customReflection":36,"defaultReflection":38,"defaultReflectionMode":40,"defaultReflectionResolution":41,"sunLightObjectId":42,"pixelLightCount":43,"defaultReflectionHDR":44,"hasLightDataAsset":45,"hasManualGenerate":46},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2,"shadowMask":4},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"hasDepthOnlyPass":10,"isCreatedByShaderGraph":11,"disableBatching":12,"compiled":13},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"exportedForWebGl2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.AudioClip":{"name":0},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableStaticBatching":9,"enableDynamicBatching":10,"usePreservativeDynamicBatching":11,"lightmapEncodingQuality":12,"desiredColorSpace":13,"allTags":14},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37}}

Deserializers.requiredComponents = {"42":[43],"44":[43],"45":[43],"46":[43],"47":[43],"48":[43],"49":[50],"51":[5],"52":[53],"54":[53],"55":[53],"56":[53],"57":[53],"58":[53],"59":[21],"60":[21],"61":[21],"62":[21],"63":[21],"64":[21],"26":[21],"65":[21],"66":[21],"24":[21],"67":[21],"68":[21],"69":[21],"70":[5],"71":[72],"73":[74],"75":[74],"11":[10],"76":[17],"77":[5],"78":[79],"80":[10],"81":[14,10],"82":[72],"83":[14,10],"84":[10],"85":[10],"86":[72,10],"87":[10,14],"88":[89],"90":[89],"91":[89],"92":[10],"93":[10],"13":[11],"30":[14,10],"15":[10],"12":[11],"94":[10],"95":[10],"96":[10],"97":[10],"98":[10],"99":[10],"100":[10],"101":[10],"102":[10],"16":[14,10],"103":[10],"104":[10],"105":[10],"106":[10],"107":[14,10],"108":[10],"109":[8],"110":[8],"9":[8],"111":[8],"112":[5],"113":[5]}

Deserializers.types = ["UnityEngine.Shader","UnityEngine.Transform","UnityEngine.ParticleSystem","UnityEngine.ParticleSystemRenderer","UnityEngine.Material","UnityEngine.Camera","UnityEngine.AudioListener","UnityEngine.EventSystems.UIBehaviour","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","UnityEngine.RectTransform","UnityEngine.Canvas","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","UnityEngine.CanvasRenderer","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.RawImage","UnityEngine.SpriteRenderer","UnityEngine.Sprite","UnityEngine.BoxCollider2D","UnityEngine.Rendering.SortingGroup","UnityEngine.Rigidbody2D","UnityEngine.MonoBehaviour","MonsterController","UnityEngine.TargetJoint2D","UnityEngine.AudioClip","UnityEngine.HingeJoint2D","BonkController","UnityEngine.CircleCollider2D","UnityEngine.UI.Button","UnityEngine.UI.Image","DG.Tweening.DOTweenAnimation","GameController","TargetController","UnityEngine.GameObject","LunaController","UnityEngine.Texture2D","SetupGame","AudioController","UnityEngine.AudioSource","VFXController","DG.Tweening.Core.DOTweenSettings","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.SkinnedMeshRenderer","UnityEngine.FlareLayer","UnityEngine.CharacterJoint","UnityEngine.Rigidbody","UnityEngine.ConfigurableJoint","UnityEngine.ConstantForce","UnityEngine.FixedJoint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.CompositeCollider2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.MeshRenderer","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","UnityEngine.U2D.Animation.SpriteSkin","UnityEngine.U2D.PixelPerfectCamera","UnityEngine.U2D.SpriteShapeController","UnityEngine.U2D.SpriteShapeRenderer","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text","TMPro.TextContainer","TMPro.TextMeshPro","TMPro.TextMeshProUGUI","Unity.VisualScripting.SceneVariables","Unity.VisualScripting.Variables","Unity.VisualScripting.ScriptMachine","Unity.VisualScripting.StateMachine","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.Mask","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RectMask2D","UnityEngine.UI.ScrollRect","UnityEngine.UI.Scrollbar","UnityEngine.UI.Slider","UnityEngine.UI.Text","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster"]

Deserializers.unityVersion = "6000.0.78f1";

Deserializers.productName = "SSP_Luna-SSP_V01";

Deserializers.lunaInitializationTime = "07/25/2026 10:55:43";

Deserializers.lunaDaysRunning = "0.0";

Deserializers.lunaVersion = "7.2.0";

Deserializers.lunaSHA = "ea08d29afe2968efcb8d91d5624f033c6485cc68";

Deserializers.creativeName = "SSP_V02_YenTTH_TamNTM_";

Deserializers.lunaAppID = "0";

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

Deserializers.runtimeAnalysisExcludedClassesCount = "1801";

Deserializers.runtimeAnalysisExcludedMethodsCount = "4168";

Deserializers.runtimeAnalysisExcludedModules = "physics3d, mecanim-wasm";

Deserializers.isRuntimeAnalysisEnabledForShaders = "True";

Deserializers.isRealtimeShadowsEnabled = "False";

Deserializers.isLunaCompilerV2Used = "False";

Deserializers.companyName = "DefaultCompany";

Deserializers.buildPlatform = "StandaloneWindows64";

Deserializers.applicationIdentifier = "com.DefaultCompany.2D-Project";

Deserializers.disableAntiAliasing = true;

Deserializers.graphicsConstraint = 24;

Deserializers.linearColorSpace = true;

Deserializers.buildID = "e2f77010-a03b-4ba0-b0f9-5ca2984d1e7b";

Deserializers.runtimeInitializeOnLoadInfos = [[["Unity","PerformanceTesting","PerformanceTest","ResetStaticsOnLoad"],["UnityEngine","U2D","Animation","GpuDeformationSystem","CreateFallbackBuffer"],["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"],["UnityEngine","AI","NavMesh","ClearPreUpdateListeners"]],[["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"]],[],[["UnityEngine","Timeline","AnimatorBindingCache","ResetStaticsOnLoad"],["UnityEngine","Timeline","TrackAsset","ResetStaticsOnLoad"],["UnityEngine","Timeline","AnimationPreviewUtilities","ResetStaticsOnLoad"],["Unity","PerformanceTesting","Data","RunSettings","ResetStaticsOnLoad"],["Unity","PerformanceTesting","PlayerCallbacks","ResetStaticsOnLoad"]]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

