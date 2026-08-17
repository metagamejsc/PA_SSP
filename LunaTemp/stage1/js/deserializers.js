var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i2240 = root || request.c( 'UnityEngine.JointSpring' )
  var i2241 = data
  i2240.spring = i2241[0]
  i2240.damper = i2241[1]
  i2240.targetPosition = i2241[2]
  return i2240
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i2242 = root || request.c( 'UnityEngine.JointMotor' )
  var i2243 = data
  i2242.m_TargetVelocity = i2243[0]
  i2242.m_Force = i2243[1]
  i2242.m_FreeSpin = i2243[2]
  return i2242
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i2244 = root || request.c( 'UnityEngine.JointLimits' )
  var i2245 = data
  i2244.m_Min = i2245[0]
  i2244.m_Max = i2245[1]
  i2244.m_Bounciness = i2245[2]
  i2244.m_BounceMinVelocity = i2245[3]
  i2244.m_ContactDistance = i2245[4]
  i2244.minBounce = i2245[5]
  i2244.maxBounce = i2245[6]
  return i2244
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i2246 = root || request.c( 'UnityEngine.JointDrive' )
  var i2247 = data
  i2246.m_PositionSpring = i2247[0]
  i2246.m_PositionDamper = i2247[1]
  i2246.m_MaximumForce = i2247[2]
  i2246.m_UseAcceleration = i2247[3]
  return i2246
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i2248 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i2249 = data
  i2248.m_Spring = i2249[0]
  i2248.m_Damper = i2249[1]
  return i2248
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i2250 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i2251 = data
  i2250.m_Limit = i2251[0]
  i2250.m_Bounciness = i2251[1]
  i2250.m_ContactDistance = i2251[2]
  return i2250
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i2252 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i2253 = data
  i2252.m_ExtremumSlip = i2253[0]
  i2252.m_ExtremumValue = i2253[1]
  i2252.m_AsymptoteSlip = i2253[2]
  i2252.m_AsymptoteValue = i2253[3]
  i2252.m_Stiffness = i2253[4]
  return i2252
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i2254 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i2255 = data
  i2254.m_LowerAngle = i2255[0]
  i2254.m_UpperAngle = i2255[1]
  return i2254
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i2256 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i2257 = data
  i2256.m_MotorSpeed = i2257[0]
  i2256.m_MaximumMotorTorque = i2257[1]
  return i2256
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i2258 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i2259 = data
  i2258.m_DampingRatio = i2259[0]
  i2258.m_Frequency = i2259[1]
  i2258.m_Angle = i2259[2]
  return i2258
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i2260 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i2261 = data
  i2260.m_LowerTranslation = i2261[0]
  i2260.m_UpperTranslation = i2261[1]
  return i2260
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i2262 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i2263 = data
  i2262.name = i2263[0]
  i2262.width = i2263[1]
  i2262.height = i2263[2]
  i2262.mipmapCount = i2263[3]
  i2262.anisoLevel = i2263[4]
  i2262.filterMode = i2263[5]
  i2262.hdr = !!i2263[6]
  i2262.format = i2263[7]
  i2262.wrapMode = i2263[8]
  i2262.alphaIsTransparency = !!i2263[9]
  i2262.alphaSource = i2263[10]
  i2262.graphicsFormat = i2263[11]
  i2262.sRGBTexture = !!i2263[12]
  i2262.desiredColorSpace = i2263[13]
  i2262.wrapU = i2263[14]
  i2262.wrapV = i2263[15]
  return i2262
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i2264 = root || new pc.UnityMaterial()
  var i2265 = data
  i2264.name = i2265[0]
  request.r(i2265[1], i2265[2], 0, i2264, 'shader')
  i2264.renderQueue = i2265[3]
  i2264.enableInstancing = !!i2265[4]
  var i2267 = i2265[5]
  var i2266 = []
  for(var i = 0; i < i2267.length; i += 1) {
    i2266.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i2267[i + 0]) );
  }
  i2264.floatParameters = i2266
  var i2269 = i2265[6]
  var i2268 = []
  for(var i = 0; i < i2269.length; i += 1) {
    i2268.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i2269[i + 0]) );
  }
  i2264.colorParameters = i2268
  var i2271 = i2265[7]
  var i2270 = []
  for(var i = 0; i < i2271.length; i += 1) {
    i2270.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i2271[i + 0]) );
  }
  i2264.vectorParameters = i2270
  var i2273 = i2265[8]
  var i2272 = []
  for(var i = 0; i < i2273.length; i += 1) {
    i2272.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i2273[i + 0]) );
  }
  i2264.textureParameters = i2272
  var i2275 = i2265[9]
  var i2274 = []
  for(var i = 0; i < i2275.length; i += 1) {
    i2274.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i2275[i + 0]) );
  }
  i2264.materialFlags = i2274
  return i2264
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i2278 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i2279 = data
  i2278.name = i2279[0]
  i2278.value = i2279[1]
  return i2278
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i2282 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i2283 = data
  i2282.name = i2283[0]
  i2282.value = new pc.Color(i2283[1], i2283[2], i2283[3], i2283[4])
  return i2282
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i2286 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i2287 = data
  i2286.name = i2287[0]
  i2286.value = new pc.Vec4( i2287[1], i2287[2], i2287[3], i2287[4] )
  return i2286
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i2290 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i2291 = data
  i2290.name = i2291[0]
  request.r(i2291[1], i2291[2], 0, i2290, 'value')
  return i2290
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i2294 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i2295 = data
  i2294.name = i2295[0]
  i2294.enabled = !!i2295[1]
  return i2294
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i2296 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i2297 = data
  i2296.position = new pc.Vec3( i2297[0], i2297[1], i2297[2] )
  i2296.scale = new pc.Vec3( i2297[3], i2297[4], i2297[5] )
  i2296.rotation = new pc.Quat(i2297[6], i2297[7], i2297[8], i2297[9])
  return i2296
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystem"] = function (request, data, root) {
  var i2298 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystem' )
  var i2299 = data
  i2298.main = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule', i2299[0], i2298.main)
  i2298.colorBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule', i2299[1], i2298.colorBySpeed)
  i2298.colorOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule', i2299[2], i2298.colorOverLifetime)
  i2298.emission = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule', i2299[3], i2298.emission)
  i2298.rotationBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule', i2299[4], i2298.rotationBySpeed)
  i2298.rotationOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule', i2299[5], i2298.rotationOverLifetime)
  i2298.shape = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule', i2299[6], i2298.shape)
  i2298.sizeBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule', i2299[7], i2298.sizeBySpeed)
  i2298.sizeOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule', i2299[8], i2298.sizeOverLifetime)
  i2298.textureSheetAnimation = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule', i2299[9], i2298.textureSheetAnimation)
  i2298.velocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule', i2299[10], i2298.velocityOverLifetime)
  i2298.noise = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule', i2299[11], i2298.noise)
  i2298.inheritVelocity = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule', i2299[12], i2298.inheritVelocity)
  i2298.forceOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule', i2299[13], i2298.forceOverLifetime)
  i2298.limitVelocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule', i2299[14], i2298.limitVelocityOverLifetime)
  i2298.useAutoRandomSeed = !!i2299[15]
  i2298.randomSeed = i2299[16]
  return i2298
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule"] = function (request, data, root) {
  var i2300 = root || new pc.ParticleSystemMain()
  var i2301 = data
  i2300.duration = i2301[0]
  i2300.loop = !!i2301[1]
  i2300.prewarm = !!i2301[2]
  i2300.startDelay = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2301[3], i2300.startDelay)
  i2300.startLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2301[4], i2300.startLifetime)
  i2300.startSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2301[5], i2300.startSpeed)
  i2300.startSize3D = !!i2301[6]
  i2300.startSizeX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2301[7], i2300.startSizeX)
  i2300.startSizeY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2301[8], i2300.startSizeY)
  i2300.startSizeZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2301[9], i2300.startSizeZ)
  i2300.startRotation3D = !!i2301[10]
  i2300.startRotationX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2301[11], i2300.startRotationX)
  i2300.startRotationY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2301[12], i2300.startRotationY)
  i2300.startRotationZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2301[13], i2300.startRotationZ)
  i2300.startColor = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i2301[14], i2300.startColor)
  i2300.gravityModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2301[15], i2300.gravityModifier)
  i2300.simulationSpace = i2301[16]
  request.r(i2301[17], i2301[18], 0, i2300, 'customSimulationSpace')
  i2300.simulationSpeed = i2301[19]
  i2300.useUnscaledTime = !!i2301[20]
  i2300.scalingMode = i2301[21]
  i2300.playOnAwake = !!i2301[22]
  i2300.maxParticles = i2301[23]
  i2300.emitterVelocityMode = i2301[24]
  i2300.stopAction = i2301[25]
  return i2300
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve"] = function (request, data, root) {
  var i2302 = root || new pc.MinMaxCurve()
  var i2303 = data
  i2302.mode = i2303[0]
  i2302.curveMin = new pc.AnimationCurve( { keys_flow: i2303[1] } )
  i2302.curveMax = new pc.AnimationCurve( { keys_flow: i2303[2] } )
  i2302.curveMultiplier = i2303[3]
  i2302.constantMin = i2303[4]
  i2302.constantMax = i2303[5]
  return i2302
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient"] = function (request, data, root) {
  var i2304 = root || new pc.MinMaxGradient()
  var i2305 = data
  i2304.mode = i2305[0]
  i2304.gradientMin = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i2305[1], i2304.gradientMin)
  i2304.gradientMax = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i2305[2], i2304.gradientMax)
  i2304.colorMin = new pc.Color(i2305[3], i2305[4], i2305[5], i2305[6])
  i2304.colorMax = new pc.Color(i2305[7], i2305[8], i2305[9], i2305[10])
  return i2304
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient"] = function (request, data, root) {
  var i2306 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient' )
  var i2307 = data
  i2306.mode = i2307[0]
  var i2309 = i2307[1]
  var i2308 = []
  for(var i = 0; i < i2309.length; i += 1) {
    i2308.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey', i2309[i + 0]) );
  }
  i2306.colorKeys = i2308
  var i2311 = i2307[2]
  var i2310 = []
  for(var i = 0; i < i2311.length; i += 1) {
    i2310.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey', i2311[i + 0]) );
  }
  i2306.alphaKeys = i2310
  return i2306
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule"] = function (request, data, root) {
  var i2312 = root || new pc.ParticleSystemColorBySpeed()
  var i2313 = data
  i2312.enabled = !!i2313[0]
  i2312.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i2313[1], i2312.color)
  i2312.range = new pc.Vec2( i2313[2], i2313[3] )
  return i2312
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey"] = function (request, data, root) {
  var i2316 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey' )
  var i2317 = data
  i2316.color = new pc.Color(i2317[0], i2317[1], i2317[2], i2317[3])
  i2316.time = i2317[4]
  return i2316
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey"] = function (request, data, root) {
  var i2320 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey' )
  var i2321 = data
  i2320.alpha = i2321[0]
  i2320.time = i2321[1]
  return i2320
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule"] = function (request, data, root) {
  var i2322 = root || new pc.ParticleSystemColorOverLifetime()
  var i2323 = data
  i2322.enabled = !!i2323[0]
  i2322.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i2323[1], i2322.color)
  return i2322
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule"] = function (request, data, root) {
  var i2324 = root || new pc.ParticleSystemEmitter()
  var i2325 = data
  i2324.enabled = !!i2325[0]
  i2324.rateOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2325[1], i2324.rateOverTime)
  i2324.rateOverDistance = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2325[2], i2324.rateOverDistance)
  var i2327 = i2325[3]
  var i2326 = []
  for(var i = 0; i < i2327.length; i += 1) {
    i2326.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst', i2327[i + 0]) );
  }
  i2324.bursts = i2326
  return i2324
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst"] = function (request, data, root) {
  var i2330 = root || new pc.ParticleSystemBurst()
  var i2331 = data
  i2330.count = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2331[0], i2330.count)
  i2330.cycleCount = i2331[1]
  i2330.minCount = i2331[2]
  i2330.maxCount = i2331[3]
  i2330.repeatInterval = i2331[4]
  i2330.time = i2331[5]
  return i2330
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule"] = function (request, data, root) {
  var i2332 = root || new pc.ParticleSystemRotationBySpeed()
  var i2333 = data
  i2332.enabled = !!i2333[0]
  i2332.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2333[1], i2332.x)
  i2332.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2333[2], i2332.y)
  i2332.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2333[3], i2332.z)
  i2332.separateAxes = !!i2333[4]
  i2332.range = new pc.Vec2( i2333[5], i2333[6] )
  return i2332
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule"] = function (request, data, root) {
  var i2334 = root || new pc.ParticleSystemRotationOverLifetime()
  var i2335 = data
  i2334.enabled = !!i2335[0]
  i2334.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2335[1], i2334.x)
  i2334.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2335[2], i2334.y)
  i2334.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2335[3], i2334.z)
  i2334.separateAxes = !!i2335[4]
  return i2334
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule"] = function (request, data, root) {
  var i2336 = root || new pc.ParticleSystemShape()
  var i2337 = data
  i2336.enabled = !!i2337[0]
  i2336.shapeType = i2337[1]
  i2336.randomDirectionAmount = i2337[2]
  i2336.sphericalDirectionAmount = i2337[3]
  i2336.randomPositionAmount = i2337[4]
  i2336.alignToDirection = !!i2337[5]
  i2336.radius = i2337[6]
  i2336.radiusMode = i2337[7]
  i2336.radiusSpread = i2337[8]
  i2336.radiusSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2337[9], i2336.radiusSpeed)
  i2336.radiusThickness = i2337[10]
  i2336.angle = i2337[11]
  i2336.length = i2337[12]
  i2336.boxThickness = new pc.Vec3( i2337[13], i2337[14], i2337[15] )
  i2336.meshShapeType = i2337[16]
  request.r(i2337[17], i2337[18], 0, i2336, 'mesh')
  request.r(i2337[19], i2337[20], 0, i2336, 'meshRenderer')
  request.r(i2337[21], i2337[22], 0, i2336, 'skinnedMeshRenderer')
  i2336.useMeshMaterialIndex = !!i2337[23]
  i2336.meshMaterialIndex = i2337[24]
  i2336.useMeshColors = !!i2337[25]
  i2336.normalOffset = i2337[26]
  i2336.arc = i2337[27]
  i2336.arcMode = i2337[28]
  i2336.arcSpread = i2337[29]
  i2336.arcSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2337[30], i2336.arcSpeed)
  i2336.donutRadius = i2337[31]
  i2336.position = new pc.Vec3( i2337[32], i2337[33], i2337[34] )
  i2336.rotation = new pc.Vec3( i2337[35], i2337[36], i2337[37] )
  i2336.scale = new pc.Vec3( i2337[38], i2337[39], i2337[40] )
  return i2336
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule"] = function (request, data, root) {
  var i2338 = root || new pc.ParticleSystemSizeBySpeed()
  var i2339 = data
  i2338.enabled = !!i2339[0]
  i2338.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2339[1], i2338.x)
  i2338.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2339[2], i2338.y)
  i2338.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2339[3], i2338.z)
  i2338.separateAxes = !!i2339[4]
  i2338.range = new pc.Vec2( i2339[5], i2339[6] )
  return i2338
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule"] = function (request, data, root) {
  var i2340 = root || new pc.ParticleSystemSizeOverLifetime()
  var i2341 = data
  i2340.enabled = !!i2341[0]
  i2340.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2341[1], i2340.x)
  i2340.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2341[2], i2340.y)
  i2340.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2341[3], i2340.z)
  i2340.separateAxes = !!i2341[4]
  return i2340
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule"] = function (request, data, root) {
  var i2342 = root || new pc.ParticleSystemTextureSheetAnimation()
  var i2343 = data
  i2342.enabled = !!i2343[0]
  i2342.mode = i2343[1]
  i2342.animation = i2343[2]
  i2342.numTilesX = i2343[3]
  i2342.numTilesY = i2343[4]
  i2342.useRandomRow = !!i2343[5]
  i2342.frameOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2343[6], i2342.frameOverTime)
  i2342.startFrame = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2343[7], i2342.startFrame)
  i2342.cycleCount = i2343[8]
  i2342.rowIndex = i2343[9]
  i2342.flipU = i2343[10]
  i2342.flipV = i2343[11]
  i2342.spriteCount = i2343[12]
  var i2345 = i2343[13]
  var i2344 = []
  for(var i = 0; i < i2345.length; i += 2) {
  request.r(i2345[i + 0], i2345[i + 1], 2, i2344, '')
  }
  i2342.sprites = i2344
  return i2342
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule"] = function (request, data, root) {
  var i2348 = root || new pc.ParticleSystemVelocityOverLifetime()
  var i2349 = data
  i2348.enabled = !!i2349[0]
  i2348.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2349[1], i2348.x)
  i2348.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2349[2], i2348.y)
  i2348.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2349[3], i2348.z)
  i2348.radial = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2349[4], i2348.radial)
  i2348.speedModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2349[5], i2348.speedModifier)
  i2348.space = i2349[6]
  i2348.orbitalX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2349[7], i2348.orbitalX)
  i2348.orbitalY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2349[8], i2348.orbitalY)
  i2348.orbitalZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2349[9], i2348.orbitalZ)
  i2348.orbitalOffsetX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2349[10], i2348.orbitalOffsetX)
  i2348.orbitalOffsetY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2349[11], i2348.orbitalOffsetY)
  i2348.orbitalOffsetZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2349[12], i2348.orbitalOffsetZ)
  return i2348
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule"] = function (request, data, root) {
  var i2350 = root || new pc.ParticleSystemNoise()
  var i2351 = data
  i2350.enabled = !!i2351[0]
  i2350.separateAxes = !!i2351[1]
  i2350.strengthX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2351[2], i2350.strengthX)
  i2350.strengthY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2351[3], i2350.strengthY)
  i2350.strengthZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2351[4], i2350.strengthZ)
  i2350.frequency = i2351[5]
  i2350.damping = !!i2351[6]
  i2350.octaveCount = i2351[7]
  i2350.octaveMultiplier = i2351[8]
  i2350.octaveScale = i2351[9]
  i2350.quality = i2351[10]
  i2350.scrollSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2351[11], i2350.scrollSpeed)
  i2350.scrollSpeedMultiplier = i2351[12]
  i2350.remapEnabled = !!i2351[13]
  i2350.remapX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2351[14], i2350.remapX)
  i2350.remapY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2351[15], i2350.remapY)
  i2350.remapZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2351[16], i2350.remapZ)
  i2350.positionAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2351[17], i2350.positionAmount)
  i2350.rotationAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2351[18], i2350.rotationAmount)
  i2350.sizeAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2351[19], i2350.sizeAmount)
  return i2350
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule"] = function (request, data, root) {
  var i2352 = root || new pc.ParticleSystemInheritVelocity()
  var i2353 = data
  i2352.enabled = !!i2353[0]
  i2352.mode = i2353[1]
  i2352.curve = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2353[2], i2352.curve)
  return i2352
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule"] = function (request, data, root) {
  var i2354 = root || new pc.ParticleSystemForceOverLifetime()
  var i2355 = data
  i2354.enabled = !!i2355[0]
  i2354.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2355[1], i2354.x)
  i2354.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2355[2], i2354.y)
  i2354.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2355[3], i2354.z)
  i2354.space = i2355[4]
  i2354.randomized = !!i2355[5]
  return i2354
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule"] = function (request, data, root) {
  var i2356 = root || new pc.ParticleSystemLimitVelocityOverLifetime()
  var i2357 = data
  i2356.enabled = !!i2357[0]
  i2356.limit = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2357[1], i2356.limit)
  i2356.limitX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2357[2], i2356.limitX)
  i2356.limitY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2357[3], i2356.limitY)
  i2356.limitZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2357[4], i2356.limitZ)
  i2356.dampen = i2357[5]
  i2356.separateAxes = !!i2357[6]
  i2356.space = i2357[7]
  i2356.drag = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i2357[8], i2356.drag)
  i2356.multiplyDragByParticleSize = !!i2357[9]
  i2356.multiplyDragByParticleVelocity = !!i2357[10]
  return i2356
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer"] = function (request, data, root) {
  var i2358 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer' )
  var i2359 = data
  request.r(i2359[0], i2359[1], 0, i2358, 'mesh')
  i2358.meshCount = i2359[2]
  i2358.activeVertexStreamsCount = i2359[3]
  i2358.alignment = i2359[4]
  i2358.renderMode = i2359[5]
  i2358.sortMode = i2359[6]
  i2358.lengthScale = i2359[7]
  i2358.velocityScale = i2359[8]
  i2358.cameraVelocityScale = i2359[9]
  i2358.normalDirection = i2359[10]
  i2358.sortingFudge = i2359[11]
  i2358.minParticleSize = i2359[12]
  i2358.maxParticleSize = i2359[13]
  i2358.pivot = new pc.Vec3( i2359[14], i2359[15], i2359[16] )
  request.r(i2359[17], i2359[18], 0, i2358, 'trailMaterial')
  i2358.applyActiveColorSpace = !!i2359[19]
  i2358.enabled = !!i2359[20]
  request.r(i2359[21], i2359[22], 0, i2358, 'sharedMaterial')
  var i2361 = i2359[23]
  var i2360 = []
  for(var i = 0; i < i2361.length; i += 2) {
  request.r(i2361[i + 0], i2361[i + 1], 2, i2360, '')
  }
  i2358.sharedMaterials = i2360
  i2358.receiveShadows = !!i2359[24]
  i2358.shadowCastingMode = i2359[25]
  i2358.sortingLayerID = i2359[26]
  i2358.sortingOrder = i2359[27]
  i2358.lightmapIndex = i2359[28]
  i2358.lightmapSceneIndex = i2359[29]
  i2358.lightmapScaleOffset = new pc.Vec4( i2359[30], i2359[31], i2359[32], i2359[33] )
  i2358.lightProbeUsage = i2359[34]
  i2358.reflectionProbeUsage = i2359[35]
  return i2358
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i2364 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i2365 = data
  i2364.name = i2365[0]
  i2364.tagId = i2365[1]
  i2364.enabled = !!i2365[2]
  i2364.isStatic = !!i2365[3]
  i2364.layer = i2365[4]
  return i2364
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh"] = function (request, data, root) {
  var i2366 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh' )
  var i2367 = data
  i2366.name = i2367[0]
  i2366.halfPrecision = !!i2367[1]
  i2366.useSimplification = !!i2367[2]
  i2366.useUInt32IndexFormat = !!i2367[3]
  i2366.vertexCount = i2367[4]
  i2366.aabb = i2367[5]
  var i2369 = i2367[6]
  var i2368 = []
  for(var i = 0; i < i2369.length; i += 1) {
    i2368.push( !!i2369[i + 0] );
  }
  i2366.streams = i2368
  i2366.vertices = i2367[7]
  var i2371 = i2367[8]
  var i2370 = []
  for(var i = 0; i < i2371.length; i += 1) {
    i2370.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh', i2371[i + 0]) );
  }
  i2366.subMeshes = i2370
  var i2373 = i2367[9]
  var i2372 = []
  for(var i = 0; i < i2373.length; i += 16) {
    i2372.push( new pc.Mat4().setData(i2373[i + 0], i2373[i + 1], i2373[i + 2], i2373[i + 3],  i2373[i + 4], i2373[i + 5], i2373[i + 6], i2373[i + 7],  i2373[i + 8], i2373[i + 9], i2373[i + 10], i2373[i + 11],  i2373[i + 12], i2373[i + 13], i2373[i + 14], i2373[i + 15]) );
  }
  i2366.bindposes = i2372
  var i2375 = i2367[10]
  var i2374 = []
  for(var i = 0; i < i2375.length; i += 1) {
    i2374.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape', i2375[i + 0]) );
  }
  i2366.blendShapes = i2374
  return i2366
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh"] = function (request, data, root) {
  var i2380 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh' )
  var i2381 = data
  i2380.triangles = i2381[0]
  return i2380
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape"] = function (request, data, root) {
  var i2386 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape' )
  var i2387 = data
  i2386.name = i2387[0]
  var i2389 = i2387[1]
  var i2388 = []
  for(var i = 0; i < i2389.length; i += 1) {
    i2388.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame', i2389[i + 0]) );
  }
  i2386.frames = i2388
  return i2386
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer"] = function (request, data, root) {
  var i2390 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer' )
  var i2391 = data
  i2390.color = new pc.Color(i2391[0], i2391[1], i2391[2], i2391[3])
  request.r(i2391[4], i2391[5], 0, i2390, 'sprite')
  i2390.flipX = !!i2391[6]
  i2390.flipY = !!i2391[7]
  i2390.drawMode = i2391[8]
  i2390.size = new pc.Vec2( i2391[9], i2391[10] )
  i2390.tileMode = i2391[11]
  i2390.adaptiveModeThreshold = i2391[12]
  i2390.maskInteraction = i2391[13]
  i2390.spriteSortPoint = i2391[14]
  i2390.enabled = !!i2391[15]
  request.r(i2391[16], i2391[17], 0, i2390, 'sharedMaterial')
  var i2393 = i2391[18]
  var i2392 = []
  for(var i = 0; i < i2393.length; i += 2) {
  request.r(i2393[i + 0], i2393[i + 1], 2, i2392, '')
  }
  i2390.sharedMaterials = i2392
  i2390.receiveShadows = !!i2391[19]
  i2390.shadowCastingMode = i2391[20]
  i2390.sortingLayerID = i2391[21]
  i2390.sortingOrder = i2391[22]
  i2390.lightmapIndex = i2391[23]
  i2390.lightmapSceneIndex = i2391[24]
  i2390.lightmapScaleOffset = new pc.Vec4( i2391[25], i2391[26], i2391[27], i2391[28] )
  i2390.lightProbeUsage = i2391[29]
  i2390.reflectionProbeUsage = i2391[30]
  return i2390
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CircleCollider2D"] = function (request, data, root) {
  var i2394 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CircleCollider2D' )
  var i2395 = data
  i2394.radius = i2395[0]
  i2394.enabled = !!i2395[1]
  i2394.isTrigger = !!i2395[2]
  i2394.usedByEffector = !!i2395[3]
  i2394.density = i2395[4]
  i2394.offset = new pc.Vec2( i2395[5], i2395[6] )
  request.r(i2395[7], i2395[8], 0, i2394, 'material')
  return i2394
}

Deserializers["BulletController"] = function (request, data, root) {
  var i2396 = root || request.c( 'BulletController' )
  var i2397 = data
  i2396.speed = i2397[0]
  i2396.damage = i2397[1]
  request.r(i2397[2], i2397[3], 0, i2396, 'hitMonsterSound')
  request.r(i2397[4], i2397[5], 0, i2396, 'hitSound')
  i2396.lifeTime = i2397[6]
  i2396.hit = !!i2397[7]
  return i2396
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i2398 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i2399 = data
  i2398.name = i2399[0]
  i2398.index = i2399[1]
  i2398.startup = !!i2399[2]
  return i2398
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i2400 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i2401 = data
  i2400.aspect = i2401[0]
  i2400.orthographic = !!i2401[1]
  i2400.orthographicSize = i2401[2]
  i2400.backgroundColor = new pc.Color(i2401[3], i2401[4], i2401[5], i2401[6])
  i2400.nearClipPlane = i2401[7]
  i2400.farClipPlane = i2401[8]
  i2400.fieldOfView = i2401[9]
  i2400.depth = i2401[10]
  i2400.clearFlags = i2401[11]
  i2400.cullingMask = i2401[12]
  i2400.rect = i2401[13]
  request.r(i2401[14], i2401[15], 0, i2400, 'targetTexture')
  i2400.usePhysicalProperties = !!i2401[16]
  i2400.focalLength = i2401[17]
  i2400.sensorSize = new pc.Vec2( i2401[18], i2401[19] )
  i2400.lensShift = new pc.Vec2( i2401[20], i2401[21] )
  i2400.gateFit = i2401[22]
  i2400.commandBufferCount = i2401[23]
  i2400.cameraType = i2401[24]
  i2400.enabled = !!i2401[25]
  return i2400
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i2402 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i2403 = data
  request.r(i2403[0], i2403[1], 0, i2402, 'm_FirstSelected')
  i2402.m_sendNavigationEvents = !!i2403[2]
  i2402.m_DragThreshold = i2403[3]
  return i2402
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i2404 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i2405 = data
  i2404.m_HorizontalAxis = i2405[0]
  i2404.m_VerticalAxis = i2405[1]
  i2404.m_SubmitButton = i2405[2]
  i2404.m_CancelButton = i2405[3]
  i2404.m_InputActionsPerSecond = i2405[4]
  i2404.m_RepeatDelay = i2405[5]
  i2404.m_ForceModuleActive = !!i2405[6]
  i2404.m_SendPointerHoverToParent = !!i2405[7]
  return i2404
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i2406 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i2407 = data
  i2406.pivot = new pc.Vec2( i2407[0], i2407[1] )
  i2406.anchorMin = new pc.Vec2( i2407[2], i2407[3] )
  i2406.anchorMax = new pc.Vec2( i2407[4], i2407[5] )
  i2406.sizeDelta = new pc.Vec2( i2407[6], i2407[7] )
  i2406.anchoredPosition3D = new pc.Vec3( i2407[8], i2407[9], i2407[10] )
  i2406.rotation = new pc.Quat(i2407[11], i2407[12], i2407[13], i2407[14])
  i2406.scale = new pc.Vec3( i2407[15], i2407[16], i2407[17] )
  return i2406
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i2408 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i2409 = data
  i2408.planeDistance = i2409[0]
  i2408.referencePixelsPerUnit = i2409[1]
  i2408.isFallbackOverlay = !!i2409[2]
  i2408.renderMode = i2409[3]
  i2408.renderOrder = i2409[4]
  i2408.sortingLayerName = i2409[5]
  i2408.sortingOrder = i2409[6]
  i2408.scaleFactor = i2409[7]
  request.r(i2409[8], i2409[9], 0, i2408, 'worldCamera')
  i2408.overrideSorting = !!i2409[10]
  i2408.pixelPerfect = !!i2409[11]
  i2408.targetDisplay = i2409[12]
  i2408.overridePixelPerfect = !!i2409[13]
  i2408.enabled = !!i2409[14]
  return i2408
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i2410 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i2411 = data
  i2410.m_UiScaleMode = i2411[0]
  i2410.m_ReferencePixelsPerUnit = i2411[1]
  i2410.m_ScaleFactor = i2411[2]
  i2410.m_ReferenceResolution = new pc.Vec2( i2411[3], i2411[4] )
  i2410.m_ScreenMatchMode = i2411[5]
  i2410.m_MatchWidthOrHeight = i2411[6]
  i2410.m_PhysicalUnit = i2411[7]
  i2410.m_FallbackScreenDPI = i2411[8]
  i2410.m_DefaultSpriteDPI = i2411[9]
  i2410.m_DynamicPixelsPerUnit = i2411[10]
  i2410.m_PresetInfoIsWorld = !!i2411[11]
  return i2410
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i2412 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i2413 = data
  i2412.m_IgnoreReversedGraphics = !!i2413[0]
  i2412.m_BlockingObjects = i2413[1]
  i2412.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i2413[2] )
  return i2412
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i2414 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i2415 = data
  i2414.cullTransparentMesh = !!i2415[0]
  return i2414
}

Deserializers["UnityEngine.UI.RawImage"] = function (request, data, root) {
  var i2416 = root || request.c( 'UnityEngine.UI.RawImage' )
  var i2417 = data
  request.r(i2417[0], i2417[1], 0, i2416, 'm_Texture')
  i2416.m_UVRect = UnityEngine.Rect.MinMaxRect(i2417[2], i2417[3], i2417[4], i2417[5])
  request.r(i2417[6], i2417[7], 0, i2416, 'm_Material')
  i2416.m_Maskable = !!i2417[8]
  i2416.m_Color = new pc.Color(i2417[9], i2417[10], i2417[11], i2417[12])
  i2416.m_RaycastTarget = !!i2417[13]
  i2416.m_RaycastPadding = new pc.Vec4( i2417[14], i2417[15], i2417[16], i2417[17] )
  return i2416
}

Deserializers["UnityEngine.UI.AspectRatioFitter"] = function (request, data, root) {
  var i2418 = root || request.c( 'UnityEngine.UI.AspectRatioFitter' )
  var i2419 = data
  i2418.m_AspectMode = i2419[0]
  i2418.m_AspectRatio = i2419[1]
  return i2418
}

Deserializers["UnityEngine.UI.Text"] = function (request, data, root) {
  var i2420 = root || request.c( 'UnityEngine.UI.Text' )
  var i2421 = data
  i2420.m_FontData = request.d('UnityEngine.UI.FontData', i2421[0], i2420.m_FontData)
  i2420.m_Text = i2421[1]
  request.r(i2421[2], i2421[3], 0, i2420, 'm_Material')
  i2420.m_Maskable = !!i2421[4]
  i2420.m_Color = new pc.Color(i2421[5], i2421[6], i2421[7], i2421[8])
  i2420.m_RaycastTarget = !!i2421[9]
  i2420.m_RaycastPadding = new pc.Vec4( i2421[10], i2421[11], i2421[12], i2421[13] )
  return i2420
}

Deserializers["UnityEngine.UI.FontData"] = function (request, data, root) {
  var i2422 = root || request.c( 'UnityEngine.UI.FontData' )
  var i2423 = data
  request.r(i2423[0], i2423[1], 0, i2422, 'm_Font')
  i2422.m_FontSize = i2423[2]
  i2422.m_FontStyle = i2423[3]
  i2422.m_BestFit = !!i2423[4]
  i2422.m_MinSize = i2423[5]
  i2422.m_MaxSize = i2423[6]
  i2422.m_Alignment = i2423[7]
  i2422.m_AlignByGeometry = !!i2423[8]
  i2422.m_RichText = !!i2423[9]
  i2422.m_HorizontalOverflow = i2423[10]
  i2422.m_VerticalOverflow = i2423[11]
  i2422.m_LineSpacing = i2423[12]
  return i2422
}

Deserializers["DG.Tweening.DOTweenAnimation"] = function (request, data, root) {
  var i2424 = root || request.c( 'DG.Tweening.DOTweenAnimation' )
  var i2425 = data
  i2424.targetIsSelf = !!i2425[0]
  request.r(i2425[1], i2425[2], 0, i2424, 'targetGO')
  i2424.tweenTargetIsTargetGO = !!i2425[3]
  i2424.delay = i2425[4]
  i2424.duration = i2425[5]
  i2424.easeType = i2425[6]
  i2424.easeCurve = new pc.AnimationCurve( { keys_flow: i2425[7] } )
  i2424.loopType = i2425[8]
  i2424.loops = i2425[9]
  i2424.id = i2425[10]
  i2424.isRelative = !!i2425[11]
  i2424.isFrom = !!i2425[12]
  i2424.isIndependentUpdate = !!i2425[13]
  i2424.autoKill = !!i2425[14]
  i2424.autoGenerate = !!i2425[15]
  i2424.isActive = !!i2425[16]
  i2424.isValid = !!i2425[17]
  request.r(i2425[18], i2425[19], 0, i2424, 'target')
  i2424.animationType = i2425[20]
  i2424.targetType = i2425[21]
  i2424.forcedTargetType = i2425[22]
  i2424.autoPlay = !!i2425[23]
  i2424.useTargetAsV3 = !!i2425[24]
  i2424.endValueFloat = i2425[25]
  i2424.endValueV3 = new pc.Vec3( i2425[26], i2425[27], i2425[28] )
  i2424.endValueV2 = new pc.Vec2( i2425[29], i2425[30] )
  i2424.endValueColor = new pc.Color(i2425[31], i2425[32], i2425[33], i2425[34])
  i2424.endValueString = i2425[35]
  i2424.endValueRect = UnityEngine.Rect.MinMaxRect(i2425[36], i2425[37], i2425[38], i2425[39])
  request.r(i2425[40], i2425[41], 0, i2424, 'endValueTransform')
  i2424.optionalBool0 = !!i2425[42]
  i2424.optionalBool1 = !!i2425[43]
  i2424.optionalFloat0 = i2425[44]
  i2424.optionalInt0 = i2425[45]
  i2424.optionalRotationMode = i2425[46]
  i2424.optionalScrambleMode = i2425[47]
  i2424.optionalShakeRandomnessMode = i2425[48]
  i2424.optionalString = i2425[49]
  i2424.updateType = i2425[50]
  i2424.isSpeedBased = !!i2425[51]
  i2424.hasOnStart = !!i2425[52]
  i2424.hasOnPlay = !!i2425[53]
  i2424.hasOnUpdate = !!i2425[54]
  i2424.hasOnStepComplete = !!i2425[55]
  i2424.hasOnComplete = !!i2425[56]
  i2424.hasOnTweenCreated = !!i2425[57]
  i2424.hasOnRewind = !!i2425[58]
  i2424.onStart = request.d('UnityEngine.Events.UnityEvent', i2425[59], i2424.onStart)
  i2424.onPlay = request.d('UnityEngine.Events.UnityEvent', i2425[60], i2424.onPlay)
  i2424.onUpdate = request.d('UnityEngine.Events.UnityEvent', i2425[61], i2424.onUpdate)
  i2424.onStepComplete = request.d('UnityEngine.Events.UnityEvent', i2425[62], i2424.onStepComplete)
  i2424.onComplete = request.d('UnityEngine.Events.UnityEvent', i2425[63], i2424.onComplete)
  i2424.onTweenCreated = request.d('UnityEngine.Events.UnityEvent', i2425[64], i2424.onTweenCreated)
  i2424.onRewind = request.d('UnityEngine.Events.UnityEvent', i2425[65], i2424.onRewind)
  return i2424
}

Deserializers["UnityEngine.Events.UnityEvent"] = function (request, data, root) {
  var i2426 = root || request.c( 'UnityEngine.Events.UnityEvent' )
  var i2427 = data
  i2426.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i2427[0], i2426.m_PersistentCalls)
  return i2426
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i2428 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i2429 = data
  var i2431 = i2429[0]
  var i2430 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i2431.length; i += 1) {
    i2430.add(request.d('UnityEngine.Events.PersistentCall', i2431[i + 0]));
  }
  i2428.m_Calls = i2430
  return i2428
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i2434 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i2435 = data
  request.r(i2435[0], i2435[1], 0, i2434, 'm_Target')
  i2434.m_TargetAssemblyTypeName = i2435[2]
  i2434.m_MethodName = i2435[3]
  i2434.m_Mode = i2435[4]
  i2434.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i2435[5], i2434.m_Arguments)
  i2434.m_CallState = i2435[6]
  return i2434
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i2436 = root || request.c( 'UnityEngine.UI.Image' )
  var i2437 = data
  request.r(i2437[0], i2437[1], 0, i2436, 'm_Sprite')
  i2436.m_Type = i2437[2]
  i2436.m_PreserveAspect = !!i2437[3]
  i2436.m_FillCenter = !!i2437[4]
  i2436.m_FillMethod = i2437[5]
  i2436.m_FillAmount = i2437[6]
  i2436.m_FillClockwise = !!i2437[7]
  i2436.m_FillOrigin = i2437[8]
  i2436.m_UseSpriteMesh = !!i2437[9]
  i2436.m_PixelsPerUnitMultiplier = i2437[10]
  request.r(i2437[11], i2437[12], 0, i2436, 'm_Material')
  i2436.m_Maskable = !!i2437[13]
  i2436.m_Color = new pc.Color(i2437[14], i2437[15], i2437[16], i2437[17])
  i2436.m_RaycastTarget = !!i2437[18]
  i2436.m_RaycastPadding = new pc.Vec4( i2437[19], i2437[20], i2437[21], i2437[22] )
  return i2436
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i2438 = root || request.c( 'UnityEngine.UI.Button' )
  var i2439 = data
  i2438.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i2439[0], i2438.m_OnClick)
  i2438.m_Navigation = request.d('UnityEngine.UI.Navigation', i2439[1], i2438.m_Navigation)
  i2438.m_Transition = i2439[2]
  i2438.m_Colors = request.d('UnityEngine.UI.ColorBlock', i2439[3], i2438.m_Colors)
  i2438.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i2439[4], i2438.m_SpriteState)
  i2438.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i2439[5], i2438.m_AnimationTriggers)
  i2438.m_Interactable = !!i2439[6]
  request.r(i2439[7], i2439[8], 0, i2438, 'm_TargetGraphic')
  return i2438
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i2440 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i2441 = data
  i2440.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i2441[0], i2440.m_PersistentCalls)
  return i2440
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i2442 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i2443 = data
  i2442.m_Mode = i2443[0]
  i2442.m_WrapAround = !!i2443[1]
  request.r(i2443[2], i2443[3], 0, i2442, 'm_SelectOnUp')
  request.r(i2443[4], i2443[5], 0, i2442, 'm_SelectOnDown')
  request.r(i2443[6], i2443[7], 0, i2442, 'm_SelectOnLeft')
  request.r(i2443[8], i2443[9], 0, i2442, 'm_SelectOnRight')
  return i2442
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i2444 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i2445 = data
  i2444.m_NormalColor = new pc.Color(i2445[0], i2445[1], i2445[2], i2445[3])
  i2444.m_HighlightedColor = new pc.Color(i2445[4], i2445[5], i2445[6], i2445[7])
  i2444.m_PressedColor = new pc.Color(i2445[8], i2445[9], i2445[10], i2445[11])
  i2444.m_SelectedColor = new pc.Color(i2445[12], i2445[13], i2445[14], i2445[15])
  i2444.m_DisabledColor = new pc.Color(i2445[16], i2445[17], i2445[18], i2445[19])
  i2444.m_ColorMultiplier = i2445[20]
  i2444.m_FadeDuration = i2445[21]
  return i2444
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i2446 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i2447 = data
  request.r(i2447[0], i2447[1], 0, i2446, 'm_HighlightedSprite')
  request.r(i2447[2], i2447[3], 0, i2446, 'm_PressedSprite')
  request.r(i2447[4], i2447[5], 0, i2446, 'm_SelectedSprite')
  request.r(i2447[6], i2447[7], 0, i2446, 'm_DisabledSprite')
  return i2446
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i2448 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i2449 = data
  i2448.m_NormalTrigger = i2449[0]
  i2448.m_HighlightedTrigger = i2449[1]
  i2448.m_PressedTrigger = i2449[2]
  i2448.m_SelectedTrigger = i2449[3]
  i2448.m_DisabledTrigger = i2449[4]
  return i2448
}

Deserializers["TutController"] = function (request, data, root) {
  var i2450 = root || request.c( 'TutController' )
  var i2451 = data
  var i2453 = i2451[0]
  var i2452 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Vector2')))
  for(var i = 0; i < i2453.length; i += 2) {
    i2452.add(new pc.Vec2( i2453[i + 0], i2453[i + 1] ));
  }
  i2450.movePos = i2452
  i2450.moveTime = i2451[1]
  i2450.fromScale = i2451[2]
  i2450.toScale = i2451[3]
  i2450.scaleTime = i2451[4]
  i2450.delayTime = i2451[5]
  return i2450
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D"] = function (request, data, root) {
  var i2456 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D' )
  var i2457 = data
  i2456.usedByComposite = !!i2457[0]
  i2456.autoTiling = !!i2457[1]
  i2456.size = new pc.Vec2( i2457[2], i2457[3] )
  i2456.edgeRadius = i2457[4]
  i2456.enabled = !!i2457[5]
  i2456.isTrigger = !!i2457[6]
  i2456.usedByEffector = !!i2457[7]
  i2456.density = i2457[8]
  i2456.offset = new pc.Vec2( i2457[9], i2457[10] )
  request.r(i2457[11], i2457[12], 0, i2456, 'material')
  return i2456
}

Deserializers["BlockController"] = function (request, data, root) {
  var i2458 = root || request.c( 'BlockController' )
  var i2459 = data
  i2458.maxHP = i2459[0]
  i2458.currentHP = i2459[1]
  i2458.isBreak = !!i2459[2]
  i2458.numMonster = i2459[3]
  request.r(i2459[4], i2459[5], 0, i2458, 'hitSFX')
  request.r(i2459[6], i2459[7], 0, i2458, 'breakVFX')
  request.r(i2459[8], i2459[9], 0, i2458, 'breakSFX')
  return i2458
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Rigidbody2D"] = function (request, data, root) {
  var i2460 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Rigidbody2D' )
  var i2461 = data
  i2460.bodyType = i2461[0]
  request.r(i2461[1], i2461[2], 0, i2460, 'material')
  i2460.simulated = !!i2461[3]
  i2460.useAutoMass = !!i2461[4]
  i2460.mass = i2461[5]
  i2460.drag = i2461[6]
  i2460.angularDrag = i2461[7]
  i2460.gravityScale = i2461[8]
  i2460.collisionDetectionMode = i2461[9]
  i2460.sleepMode = i2461[10]
  i2460.constraints = i2461[11]
  return i2460
}

Deserializers["LandmineController"] = function (request, data, root) {
  var i2462 = root || request.c( 'LandmineController' )
  var i2463 = data
  i2462.damage = i2463[0]
  i2462.layer = UnityEngine.LayerMask.FromIntegerValue( i2463[1] )
  request.r(i2463[2], i2463[3], 0, i2462, 'actionSound')
  request.r(i2463[4], i2463[5], 0, i2462, 'boomVFX')
  i2462.radius = i2463[6]
  return i2462
}

Deserializers["SmokeController"] = function (request, data, root) {
  var i2464 = root || request.c( 'SmokeController' )
  var i2465 = data
  i2464.delay = i2465[0]
  request.r(i2465[1], i2465[2], 0, i2464, 'startSound')
  request.r(i2465[3], i2465[4], 0, i2464, 'actionSound')
  request.r(i2465[5], i2465[6], 0, i2464, 'boomSound')
  return i2464
}

Deserializers["TriggerMonster"] = function (request, data, root) {
  var i2466 = root || request.c( 'TriggerMonster' )
  var i2467 = data
  return i2466
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SortingGroup"] = function (request, data, root) {
  var i2468 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SortingGroup' )
  var i2469 = data
  i2468.sortingLayerIndex = i2469[0]
  i2468.sortingOrder = i2469[1]
  i2468.sortingLayerName = i2469[2]
  i2468.enabled = !!i2469[3]
  return i2468
}

Deserializers["PlayerController"] = function (request, data, root) {
  var i2470 = root || request.c( 'PlayerController' )
  var i2471 = data
  var i2473 = i2471[0]
  var i2472 = new (System.Collections.Generic.List$1(Bridge.ns('Piece')))
  for(var i = 0; i < i2473.length; i += 1) {
    i2472.add(request.d('Piece', i2473[i + 0]));
  }
  i2470.pieces = i2472
  request.r(i2471[1], i2471[2], 0, i2470, 'head')
  request.r(i2471[3], i2471[4], 0, i2470, 'deadSFX')
  i2470.maxForce = new pc.Vec2( i2471[5], i2471[6] )
  i2470.minForce = new pc.Vec2( i2471[7], i2471[8] )
  var i2475 = i2471[9]
  var i2474 = new (System.Collections.Generic.List$1(Bridge.ns('FightOption')))
  for(var i = 0; i < i2475.length; i += 1) {
    i2474.add(request.d('FightOption', i2475[i + 0]));
  }
  i2470.fightOptions = i2474
  i2470.fight = request.d('FightOption', i2471[10], i2470.fight)
  request.r(i2471[11], i2471[12], 0, i2470, 'clickSound')
  request.r(i2471[13], i2471[14], 0, i2470, 'deadVFX')
  var i2477 = i2471[15]
  var i2476 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.SpriteRenderer')))
  for(var i = 0; i < i2477.length; i += 2) {
  request.r(i2477[i + 0], i2477[i + 1], 1, i2476, '')
  }
  i2470.renderers = i2476
  var i2479 = i2471[16]
  var i2478 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Sprite')))
  for(var i = 0; i < i2479.length; i += 2) {
  request.r(i2479[i + 0], i2479[i + 1], 1, i2478, '')
  }
  i2470.sprites = i2478
  i2470.isZombie = !!i2471[17]
  return i2470
}

Deserializers["Piece"] = function (request, data, root) {
  var i2482 = root || request.c( 'Piece' )
  var i2483 = data
  request.r(i2483[0], i2483[1], 0, i2482, 'Joint')
  request.r(i2483[2], i2483[3], 0, i2482, 'Rb')
  return i2482
}

Deserializers["FightOption"] = function (request, data, root) {
  var i2486 = root || request.c( 'FightOption' )
  var i2487 = data
  request.r(i2487[0], i2487[1], 0, i2486, 'Button')
  request.r(i2487[2], i2487[3], 0, i2486, 'Controller')
  return i2486
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.HingeJoint2D"] = function (request, data, root) {
  var i2492 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.HingeJoint2D' )
  var i2493 = data
  i2492.useLimits = !!i2493[0]
  i2492.limits = request.d('UnityEngine.JointAngleLimits2D', i2493[1], i2492.limits)
  i2492.useMotor = !!i2493[2]
  i2492.motor = request.d('UnityEngine.JointMotor2D', i2493[3], i2492.motor)
  i2492.anchor = new pc.Vec2( i2493[4], i2493[5] )
  i2492.connectedAnchor = new pc.Vec2( i2493[6], i2493[7] )
  i2492.autoConfigureConnectedAnchor = !!i2493[8]
  request.r(i2493[9], i2493[10], 0, i2492, 'connectedBody')
  i2492.breakForce = i2493[11]
  i2492.breakTorque = i2493[12]
  i2492.enableCollision = !!i2493[13]
  i2492.enabled = !!i2493[14]
  return i2492
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.TargetJoint2D"] = function (request, data, root) {
  var i2494 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.TargetJoint2D' )
  var i2495 = data
  i2494.autoConfigureTarget = !!i2495[0]
  i2494.target = new pc.Vec2( i2495[1], i2495[2] )
  i2494.anchor = new pc.Vec2( i2495[3], i2495[4] )
  i2494.maxForce = i2495[5]
  i2494.dampingRatio = i2495[6]
  i2494.frequency = i2495[7]
  request.r(i2495[8], i2495[9], 0, i2494, 'connectedBody')
  i2494.breakForce = i2495[10]
  i2494.breakTorque = i2495[11]
  i2494.enableCollision = !!i2495[12]
  i2494.enabled = !!i2495[13]
  return i2494
}

Deserializers["ShootController"] = function (request, data, root) {
  var i2496 = root || request.c( 'ShootController' )
  var i2497 = data
  request.r(i2497[0], i2497[1], 0, i2496, 'currentMonster')
  request.r(i2497[2], i2497[3], 0, i2496, 'left')
  request.r(i2497[4], i2497[5], 0, i2496, 'right')
  i2496.timeMotor = i2497[6]
  i2496.onCD = !!i2497[7]
  i2496.CD = i2497[8]
  request.r(i2497[9], i2497[10], 0, i2496, 'startPos')
  request.r(i2497[11], i2497[12], 0, i2496, 'attackSound')
  request.r(i2497[13], i2497[14], 0, i2496, 'spawnPrefab')
  request.r(i2497[15], i2497[16], 0, i2496, 'poolParent')
  return i2496
}

Deserializers["BalanceController"] = function (request, data, root) {
  var i2498 = root || request.c( 'BalanceController' )
  var i2499 = data
  i2498.targetRotation = i2499[0]
  i2498.force = i2499[1]
  return i2498
}

Deserializers["MonsterController"] = function (request, data, root) {
  var i2500 = root || request.c( 'MonsterController' )
  var i2501 = data
  i2500.maxHP = i2501[0]
  i2500.currentHP = i2501[1]
  var i2503 = i2501[2]
  var i2502 = new (System.Collections.Generic.List$1(Bridge.ns('Piece')))
  for(var i = 0; i < i2503.length; i += 1) {
    i2502.add(request.d('Piece', i2503[i + 0]));
  }
  i2500.pieces = i2502
  request.r(i2501[3], i2501[4], 0, i2500, 'deadSFX')
  i2500.maxForce = new pc.Vec2( i2501[5], i2501[6] )
  i2500.minForce = new pc.Vec2( i2501[7], i2501[8] )
  request.r(i2501[9], i2501[10], 0, i2500, 'balance')
  i2500.isDead = !!i2501[11]
  request.r(i2501[12], i2501[13], 0, i2500, 'monsterMove')
  request.r(i2501[14], i2501[15], 0, i2500, 'monsterTarget')
  request.r(i2501[16], i2501[17], 0, i2500, 'monsterAnimation')
  request.r(i2501[18], i2501[19], 0, i2500, 'voice')
  return i2500
}

Deserializers["MonsterMove"] = function (request, data, root) {
  var i2504 = root || request.c( 'MonsterMove' )
  var i2505 = data
  request.r(i2505[0], i2505[1], 0, i2504, 'body')
  i2504.speed = i2505[2]
  return i2504
}

Deserializers["MonsterAnimation"] = function (request, data, root) {
  var i2506 = root || request.c( 'MonsterAnimation' )
  var i2507 = data
  request.r(i2507[0], i2507[1], 0, i2506, 'leftHand')
  request.r(i2507[2], i2507[3], 0, i2506, 'rightHand')
  request.r(i2507[4], i2507[5], 0, i2506, 'leftLeg')
  request.r(i2507[6], i2507[7], 0, i2506, 'rightLeg')
  return i2506
}

Deserializers["MonsterTarget"] = function (request, data, root) {
  var i2508 = root || request.c( 'MonsterTarget' )
  var i2509 = data
  i2508.targetLeft = !!i2509[0]
  return i2508
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.AudioSource"] = function (request, data, root) {
  var i2510 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.AudioSource' )
  var i2511 = data
  request.r(i2511[0], i2511[1], 0, i2510, 'clip')
  request.r(i2511[2], i2511[3], 0, i2510, 'outputAudioMixerGroup')
  i2510.playOnAwake = !!i2511[4]
  i2510.loop = !!i2511[5]
  i2510.time = i2511[6]
  i2510.volume = i2511[7]
  i2510.pitch = i2511[8]
  i2510.enabled = !!i2511[9]
  return i2510
}

Deserializers["GameController"] = function (request, data, root) {
  var i2512 = root || request.c( 'GameController' )
  var i2513 = data
  i2512.Delay = i2513[0]
  i2512.OnPause = request.d('System.Action', i2513[1], i2512.OnPause)
  i2512.OnResume = request.d('System.Action', i2513[2], i2512.OnResume)
  i2512.OnGameOver = request.d('System.Action', i2513[3], i2512.OnGameOver)
  i2512.OnGameComplete = request.d('System.Action', i2513[4], i2512.OnGameComplete)
  request.r(i2513[5], i2513[6], 0, i2512, 'startScene')
  request.r(i2513[7], i2513[8], 0, i2512, 'header')
  request.r(i2513[9], i2513[10], 0, i2512, 'clickSound')
  request.r(i2513[11], i2513[12], 0, i2512, 'options')
  request.r(i2513[13], i2513[14], 0, i2512, 'smokeButton')
  request.r(i2513[15], i2513[16], 0, i2512, 'smoke')
  request.r(i2513[17], i2513[18], 0, i2512, 'landmindButton')
  request.r(i2513[19], i2513[20], 0, i2512, 'landmind')
  request.r(i2513[21], i2513[22], 0, i2512, 'gunButton')
  request.r(i2513[23], i2513[24], 0, i2512, 'tut')
  request.r(i2513[25], i2513[26], 0, i2512, 'endScene')
  request.r(i2513[27], i2513[28], 0, i2512, 'completeScene')
  request.r(i2513[29], i2513[30], 0, i2512, 'gameOverScene')
  request.r(i2513[31], i2513[32], 0, i2512, 'player')
  i2512.numMonster = i2513[33]
  request.r(i2513[34], i2513[35], 0, i2512, 'world')
  return i2512
}

Deserializers["System.Action"] = function (request, data, root) {
  var i2514 = root || request.c( 'System.Action' )
  var i2515 = data
  return i2514
}

Deserializers["LayoutController"] = function (request, data, root) {
  var i2516 = root || request.c( 'LayoutController' )
  var i2517 = data
  request.r(i2517[0], i2517[1], 0, i2516, 'main')
  return i2516
}

Deserializers["LunaController"] = function (request, data, root) {
  var i2518 = root || request.c( 'LunaController' )
  var i2519 = data
  i2518.oneClick = !!i2519[0]
  i2518.UseTime = !!i2519[1]
  i2518.TimePlay = i2519[2]
  request.r(i2519[3], i2519[4], 0, i2518, 'BGTexture')
  i2518.HeaderText1 = i2519[5]
  i2518.ColorHeaderText1 = new pc.Color(i2519[6], i2519[7], i2519[8], i2519[9])
  i2518.HeaderText2 = i2519[10]
  i2518.ColorHeaderText2 = new pc.Color(i2519[11], i2519[12], i2519[13], i2519[14])
  i2518.GameOverText = i2519[15]
  i2518.ColorGameOverText = new pc.Color(i2519[16], i2519[17], i2519[18], i2519[19])
  request.r(i2519[20], i2519[21], 0, i2518, 'header1')
  request.r(i2519[22], i2519[23], 0, i2518, 'header2')
  request.r(i2519[24], i2519[25], 0, i2518, 'lossText')
  request.r(i2519[26], i2519[27], 0, i2518, 'BGImage')
  var i2521 = i2519[28]
  var i2520 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.UI.Button')))
  for(var i = 0; i < i2521.length; i += 2) {
  request.r(i2521[i + 0], i2521[i + 1], 1, i2520, '')
  }
  i2518.CTA = i2520
  var i2523 = i2519[29]
  var i2522 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.UI.Button')))
  for(var i = 0; i < i2523.length; i += 2) {
  request.r(i2523[i + 0], i2523[i + 1], 1, i2522, '')
  }
  i2518.oneClickCTA = i2522
  return i2518
}

Deserializers["AudioController"] = function (request, data, root) {
  var i2526 = root || request.c( 'AudioController' )
  var i2527 = data
  request.r(i2527[0], i2527[1], 0, i2526, 'BGM')
  request.r(i2527[2], i2527[3], 0, i2526, 'musicSource')
  request.r(i2527[4], i2527[5], 0, i2526, 'pool')
  return i2526
}

Deserializers["VFXController"] = function (request, data, root) {
  var i2528 = root || request.c( 'VFXController' )
  var i2529 = data
  request.r(i2529[0], i2529[1], 0, i2528, 'poolParent')
  return i2528
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i2530 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i2531 = data
  i2530.ambientIntensity = i2531[0]
  i2530.reflectionIntensity = i2531[1]
  i2530.ambientMode = i2531[2]
  i2530.ambientLight = new pc.Color(i2531[3], i2531[4], i2531[5], i2531[6])
  i2530.ambientSkyColor = new pc.Color(i2531[7], i2531[8], i2531[9], i2531[10])
  i2530.ambientGroundColor = new pc.Color(i2531[11], i2531[12], i2531[13], i2531[14])
  i2530.ambientEquatorColor = new pc.Color(i2531[15], i2531[16], i2531[17], i2531[18])
  i2530.fogColor = new pc.Color(i2531[19], i2531[20], i2531[21], i2531[22])
  i2530.fogEndDistance = i2531[23]
  i2530.fogStartDistance = i2531[24]
  i2530.fogDensity = i2531[25]
  i2530.fog = !!i2531[26]
  request.r(i2531[27], i2531[28], 0, i2530, 'skybox')
  i2530.fogMode = i2531[29]
  var i2533 = i2531[30]
  var i2532 = []
  for(var i = 0; i < i2533.length; i += 1) {
    i2532.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i2533[i + 0]) );
  }
  i2530.lightmaps = i2532
  i2530.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i2531[31], i2530.lightProbes)
  i2530.lightmapsMode = i2531[32]
  i2530.mixedBakeMode = i2531[33]
  i2530.environmentLightingMode = i2531[34]
  i2530.ambientProbe = new pc.SphericalHarmonicsL2(i2531[35])
  request.r(i2531[36], i2531[37], 0, i2530, 'customReflection')
  request.r(i2531[38], i2531[39], 0, i2530, 'defaultReflection')
  i2530.defaultReflectionMode = i2531[40]
  i2530.defaultReflectionResolution = i2531[41]
  i2530.sunLightObjectId = i2531[42]
  i2530.pixelLightCount = i2531[43]
  i2530.defaultReflectionHDR = !!i2531[44]
  i2530.hasLightDataAsset = !!i2531[45]
  i2530.hasManualGenerate = !!i2531[46]
  return i2530
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i2536 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i2537 = data
  request.r(i2537[0], i2537[1], 0, i2536, 'lightmapColor')
  request.r(i2537[2], i2537[3], 0, i2536, 'lightmapDirection')
  request.r(i2537[4], i2537[5], 0, i2536, 'shadowMask')
  return i2536
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i2538 = root || new UnityEngine.LightProbes()
  var i2539 = data
  return i2538
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i2546 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i2547 = data
  var i2549 = i2547[0]
  var i2548 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i2549.length; i += 1) {
    i2548.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i2549[i + 0]));
  }
  i2546.ShaderCompilationErrors = i2548
  i2546.name = i2547[1]
  i2546.guid = i2547[2]
  var i2551 = i2547[3]
  var i2550 = []
  for(var i = 0; i < i2551.length; i += 1) {
    i2550.push( i2551[i + 0] );
  }
  i2546.shaderDefinedKeywords = i2550
  var i2553 = i2547[4]
  var i2552 = []
  for(var i = 0; i < i2553.length; i += 1) {
    i2552.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i2553[i + 0]) );
  }
  i2546.passes = i2552
  var i2555 = i2547[5]
  var i2554 = []
  for(var i = 0; i < i2555.length; i += 1) {
    i2554.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i2555[i + 0]) );
  }
  i2546.usePasses = i2554
  var i2557 = i2547[6]
  var i2556 = []
  for(var i = 0; i < i2557.length; i += 1) {
    i2556.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i2557[i + 0]) );
  }
  i2546.defaultParameterValues = i2556
  request.r(i2547[7], i2547[8], 0, i2546, 'unityFallbackShader')
  i2546.readDepth = !!i2547[9]
  i2546.hasDepthOnlyPass = !!i2547[10]
  i2546.isCreatedByShaderGraph = !!i2547[11]
  i2546.disableBatching = !!i2547[12]
  i2546.compiled = !!i2547[13]
  return i2546
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i2560 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i2561 = data
  i2560.shaderName = i2561[0]
  i2560.errorMessage = i2561[1]
  return i2560
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i2566 = root || new pc.UnityShaderPass()
  var i2567 = data
  i2566.id = i2567[0]
  i2566.subShaderIndex = i2567[1]
  i2566.name = i2567[2]
  i2566.passType = i2567[3]
  i2566.grabPassTextureName = i2567[4]
  i2566.usePass = !!i2567[5]
  i2566.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2567[6], i2566.zTest)
  i2566.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2567[7], i2566.zWrite)
  i2566.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2567[8], i2566.culling)
  i2566.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i2567[9], i2566.blending)
  i2566.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i2567[10], i2566.alphaBlending)
  i2566.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2567[11], i2566.colorWriteMask)
  i2566.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2567[12], i2566.offsetUnits)
  i2566.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2567[13], i2566.offsetFactor)
  i2566.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2567[14], i2566.stencilRef)
  i2566.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2567[15], i2566.stencilReadMask)
  i2566.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2567[16], i2566.stencilWriteMask)
  i2566.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i2567[17], i2566.stencilOp)
  i2566.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i2567[18], i2566.stencilOpFront)
  i2566.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i2567[19], i2566.stencilOpBack)
  var i2569 = i2567[20]
  var i2568 = []
  for(var i = 0; i < i2569.length; i += 1) {
    i2568.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i2569[i + 0]) );
  }
  i2566.tags = i2568
  var i2571 = i2567[21]
  var i2570 = []
  for(var i = 0; i < i2571.length; i += 1) {
    i2570.push( i2571[i + 0] );
  }
  i2566.passDefinedKeywords = i2570
  var i2573 = i2567[22]
  var i2572 = []
  for(var i = 0; i < i2573.length; i += 1) {
    i2572.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i2573[i + 0]) );
  }
  i2566.passDefinedKeywordGroups = i2572
  var i2575 = i2567[23]
  var i2574 = []
  for(var i = 0; i < i2575.length; i += 1) {
    i2574.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i2575[i + 0]) );
  }
  i2566.variants = i2574
  var i2577 = i2567[24]
  var i2576 = []
  for(var i = 0; i < i2577.length; i += 1) {
    i2576.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i2577[i + 0]) );
  }
  i2566.excludedVariants = i2576
  i2566.hasDepthReader = !!i2567[25]
  return i2566
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i2578 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i2579 = data
  i2578.val = i2579[0]
  i2578.name = i2579[1]
  return i2578
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i2580 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i2581 = data
  i2580.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2581[0], i2580.src)
  i2580.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2581[1], i2580.dst)
  i2580.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2581[2], i2580.op)
  return i2580
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i2582 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i2583 = data
  i2582.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2583[0], i2582.pass)
  i2582.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2583[1], i2582.fail)
  i2582.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2583[2], i2582.zFail)
  i2582.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i2583[3], i2582.comp)
  return i2582
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i2586 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i2587 = data
  i2586.name = i2587[0]
  i2586.value = i2587[1]
  return i2586
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i2590 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i2591 = data
  var i2593 = i2591[0]
  var i2592 = []
  for(var i = 0; i < i2593.length; i += 1) {
    i2592.push( i2593[i + 0] );
  }
  i2590.keywords = i2592
  i2590.hasDiscard = !!i2591[1]
  return i2590
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i2596 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i2597 = data
  i2596.passId = i2597[0]
  i2596.subShaderIndex = i2597[1]
  var i2599 = i2597[2]
  var i2598 = []
  for(var i = 0; i < i2599.length; i += 1) {
    i2598.push( i2599[i + 0] );
  }
  i2596.keywords = i2598
  i2596.vertexProgram = i2597[3]
  i2596.fragmentProgram = i2597[4]
  i2596.exportedForWebGl2 = !!i2597[5]
  i2596.readDepth = !!i2597[6]
  return i2596
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i2602 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i2603 = data
  request.r(i2603[0], i2603[1], 0, i2602, 'shader')
  i2602.pass = i2603[2]
  return i2602
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i2606 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i2607 = data
  i2606.name = i2607[0]
  i2606.type = i2607[1]
  i2606.value = new pc.Vec4( i2607[2], i2607[3], i2607[4], i2607[5] )
  i2606.textureValue = i2607[6]
  i2606.shaderPropertyFlag = i2607[7]
  return i2606
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i2608 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i2609 = data
  i2608.name = i2609[0]
  request.r(i2609[1], i2609[2], 0, i2608, 'texture')
  i2608.aabb = i2609[3]
  i2608.vertices = i2609[4]
  i2608.triangles = i2609[5]
  i2608.textureRect = UnityEngine.Rect.MinMaxRect(i2609[6], i2609[7], i2609[8], i2609[9])
  i2608.packedRect = UnityEngine.Rect.MinMaxRect(i2609[10], i2609[11], i2609[12], i2609[13])
  i2608.border = new pc.Vec4( i2609[14], i2609[15], i2609[16], i2609[17] )
  i2608.transparency = i2609[18]
  i2608.bounds = i2609[19]
  i2608.pixelsPerUnit = i2609[20]
  i2608.textureWidth = i2609[21]
  i2608.textureHeight = i2609[22]
  i2608.nativeSize = new pc.Vec2( i2609[23], i2609[24] )
  i2608.pivot = new pc.Vec2( i2609[25], i2609[26] )
  i2608.textureRectOffset = new pc.Vec2( i2609[27], i2609[28] )
  return i2608
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i2610 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i2611 = data
  i2610.name = i2611[0]
  return i2610
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font"] = function (request, data, root) {
  var i2612 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font' )
  var i2613 = data
  i2612.name = i2613[0]
  i2612.ascent = i2613[1]
  i2612.originalLineHeight = i2613[2]
  i2612.fontSize = i2613[3]
  var i2615 = i2613[4]
  var i2614 = []
  for(var i = 0; i < i2615.length; i += 1) {
    i2614.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo', i2615[i + 0]) );
  }
  i2612.characterInfo = i2614
  request.r(i2613[5], i2613[6], 0, i2612, 'texture')
  i2612.originalFontSize = i2613[7]
  return i2612
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo"] = function (request, data, root) {
  var i2618 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo' )
  var i2619 = data
  i2618.index = i2619[0]
  i2618.advance = i2619[1]
  i2618.bearing = i2619[2]
  i2618.glyphWidth = i2619[3]
  i2618.glyphHeight = i2619[4]
  i2618.minX = i2619[5]
  i2618.maxX = i2619[6]
  i2618.minY = i2619[7]
  i2618.maxY = i2619[8]
  i2618.uvBottomLeftX = i2619[9]
  i2618.uvBottomLeftY = i2619[10]
  i2618.uvBottomRightX = i2619[11]
  i2618.uvBottomRightY = i2619[12]
  i2618.uvTopLeftX = i2619[13]
  i2618.uvTopLeftY = i2619[14]
  i2618.uvTopRightX = i2619[15]
  i2618.uvTopRightY = i2619[16]
  return i2618
}

Deserializers["DG.Tweening.Core.DOTweenSettings"] = function (request, data, root) {
  var i2620 = root || request.c( 'DG.Tweening.Core.DOTweenSettings' )
  var i2621 = data
  i2620.useSafeMode = !!i2621[0]
  i2620.safeModeOptions = request.d('DG.Tweening.Core.DOTweenSettings+SafeModeOptions', i2621[1], i2620.safeModeOptions)
  i2620.timeScale = i2621[2]
  i2620.unscaledTimeScale = i2621[3]
  i2620.useSmoothDeltaTime = !!i2621[4]
  i2620.maxSmoothUnscaledTime = i2621[5]
  i2620.rewindCallbackMode = i2621[6]
  i2620.showUnityEditorReport = !!i2621[7]
  i2620.logBehaviour = i2621[8]
  i2620.drawGizmos = !!i2621[9]
  i2620.defaultRecyclable = !!i2621[10]
  i2620.defaultAutoPlay = i2621[11]
  i2620.defaultUpdateType = i2621[12]
  i2620.defaultTimeScaleIndependent = !!i2621[13]
  i2620.defaultEaseType = i2621[14]
  i2620.defaultEaseOvershootOrAmplitude = i2621[15]
  i2620.defaultEasePeriod = i2621[16]
  i2620.defaultAutoKill = !!i2621[17]
  i2620.defaultLoopType = i2621[18]
  i2620.debugMode = !!i2621[19]
  i2620.debugStoreTargetId = !!i2621[20]
  i2620.showPreviewPanel = !!i2621[21]
  i2620.storeSettingsLocation = i2621[22]
  i2620.modules = request.d('DG.Tweening.Core.DOTweenSettings+ModulesSetup', i2621[23], i2620.modules)
  i2620.createASMDEF = !!i2621[24]
  i2620.showPlayingTweens = !!i2621[25]
  i2620.showPausedTweens = !!i2621[26]
  return i2620
}

Deserializers["DG.Tweening.Core.DOTweenSettings+SafeModeOptions"] = function (request, data, root) {
  var i2622 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+SafeModeOptions' )
  var i2623 = data
  i2622.logBehaviour = i2623[0]
  i2622.nestedTweenFailureBehaviour = i2623[1]
  return i2622
}

Deserializers["DG.Tweening.Core.DOTweenSettings+ModulesSetup"] = function (request, data, root) {
  var i2624 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+ModulesSetup' )
  var i2625 = data
  i2624.showPanel = !!i2625[0]
  i2624.audioEnabled = !!i2625[1]
  i2624.physicsEnabled = !!i2625[2]
  i2624.physics2DEnabled = !!i2625[3]
  i2624.spriteEnabled = !!i2625[4]
  i2624.uiEnabled = !!i2625[5]
  i2624.textMeshProEnabled = !!i2625[6]
  i2624.tk2DEnabled = !!i2625[7]
  i2624.deAudioEnabled = !!i2625[8]
  i2624.deUnityExtendedEnabled = !!i2625[9]
  i2624.epoOutlineEnabled = !!i2625[10]
  return i2624
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i2626 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i2627 = data
  var i2629 = i2627[0]
  var i2628 = []
  for(var i = 0; i < i2629.length; i += 1) {
    i2628.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i2629[i + 0]) );
  }
  i2626.files = i2628
  i2626.componentToPrefabIds = i2627[1]
  return i2626
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i2632 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i2633 = data
  i2632.path = i2633[0]
  request.r(i2633[1], i2633[2], 0, i2632, 'unityObject')
  return i2632
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i2634 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i2635 = data
  var i2637 = i2635[0]
  var i2636 = []
  for(var i = 0; i < i2637.length; i += 1) {
    i2636.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i2637[i + 0]) );
  }
  i2634.scriptsExecutionOrder = i2636
  var i2639 = i2635[1]
  var i2638 = []
  for(var i = 0; i < i2639.length; i += 1) {
    i2638.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i2639[i + 0]) );
  }
  i2634.sortingLayers = i2638
  var i2641 = i2635[2]
  var i2640 = []
  for(var i = 0; i < i2641.length; i += 1) {
    i2640.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i2641[i + 0]) );
  }
  i2634.cullingLayers = i2640
  i2634.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i2635[3], i2634.timeSettings)
  i2634.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i2635[4], i2634.physicsSettings)
  i2634.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i2635[5], i2634.physics2DSettings)
  i2634.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i2635[6], i2634.qualitySettings)
  i2634.enableRealtimeShadows = !!i2635[7]
  i2634.enableAutoInstancing = !!i2635[8]
  i2634.enableStaticBatching = !!i2635[9]
  i2634.enableDynamicBatching = !!i2635[10]
  i2634.usePreservativeDynamicBatching = !!i2635[11]
  i2634.lightmapEncodingQuality = i2635[12]
  i2634.desiredColorSpace = i2635[13]
  var i2643 = i2635[14]
  var i2642 = []
  for(var i = 0; i < i2643.length; i += 1) {
    i2642.push( i2643[i + 0] );
  }
  i2634.allTags = i2642
  return i2634
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i2646 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i2647 = data
  i2646.name = i2647[0]
  i2646.value = i2647[1]
  return i2646
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i2650 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i2651 = data
  i2650.id = i2651[0]
  i2650.name = i2651[1]
  i2650.value = i2651[2]
  return i2650
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i2654 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i2655 = data
  i2654.id = i2655[0]
  i2654.name = i2655[1]
  return i2654
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i2656 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i2657 = data
  i2656.fixedDeltaTime = i2657[0]
  i2656.maximumDeltaTime = i2657[1]
  i2656.timeScale = i2657[2]
  i2656.maximumParticleTimestep = i2657[3]
  return i2656
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i2658 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i2659 = data
  i2658.gravity = new pc.Vec3( i2659[0], i2659[1], i2659[2] )
  i2658.defaultSolverIterations = i2659[3]
  i2658.bounceThreshold = i2659[4]
  i2658.autoSyncTransforms = !!i2659[5]
  i2658.autoSimulation = !!i2659[6]
  var i2661 = i2659[7]
  var i2660 = []
  for(var i = 0; i < i2661.length; i += 1) {
    i2660.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i2661[i + 0]) );
  }
  i2658.collisionMatrix = i2660
  return i2658
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i2664 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i2665 = data
  i2664.enabled = !!i2665[0]
  i2664.layerId = i2665[1]
  i2664.otherLayerId = i2665[2]
  return i2664
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i2666 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i2667 = data
  request.r(i2667[0], i2667[1], 0, i2666, 'material')
  i2666.gravity = new pc.Vec2( i2667[2], i2667[3] )
  i2666.positionIterations = i2667[4]
  i2666.velocityIterations = i2667[5]
  i2666.velocityThreshold = i2667[6]
  i2666.maxLinearCorrection = i2667[7]
  i2666.maxAngularCorrection = i2667[8]
  i2666.maxTranslationSpeed = i2667[9]
  i2666.maxRotationSpeed = i2667[10]
  i2666.baumgarteScale = i2667[11]
  i2666.baumgarteTOIScale = i2667[12]
  i2666.timeToSleep = i2667[13]
  i2666.linearSleepTolerance = i2667[14]
  i2666.angularSleepTolerance = i2667[15]
  i2666.defaultContactOffset = i2667[16]
  i2666.autoSimulation = !!i2667[17]
  i2666.queriesHitTriggers = !!i2667[18]
  i2666.queriesStartInColliders = !!i2667[19]
  i2666.callbacksOnDisable = !!i2667[20]
  i2666.reuseCollisionCallbacks = !!i2667[21]
  i2666.autoSyncTransforms = !!i2667[22]
  var i2669 = i2667[23]
  var i2668 = []
  for(var i = 0; i < i2669.length; i += 1) {
    i2668.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i2669[i + 0]) );
  }
  i2666.collisionMatrix = i2668
  return i2666
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i2672 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i2673 = data
  i2672.enabled = !!i2673[0]
  i2672.layerId = i2673[1]
  i2672.otherLayerId = i2673[2]
  return i2672
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i2674 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i2675 = data
  var i2677 = i2675[0]
  var i2676 = []
  for(var i = 0; i < i2677.length; i += 1) {
    i2676.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i2677[i + 0]) );
  }
  i2674.qualityLevels = i2676
  var i2679 = i2675[1]
  var i2678 = []
  for(var i = 0; i < i2679.length; i += 1) {
    i2678.push( i2679[i + 0] );
  }
  i2674.names = i2678
  i2674.shadows = i2675[2]
  i2674.anisotropicFiltering = i2675[3]
  i2674.antiAliasing = i2675[4]
  i2674.lodBias = i2675[5]
  i2674.shadowCascades = i2675[6]
  i2674.shadowDistance = i2675[7]
  i2674.shadowmaskMode = i2675[8]
  i2674.shadowProjection = i2675[9]
  i2674.shadowResolution = i2675[10]
  i2674.softParticles = !!i2675[11]
  i2674.softVegetation = !!i2675[12]
  i2674.activeColorSpace = i2675[13]
  i2674.desiredColorSpace = i2675[14]
  i2674.masterTextureLimit = i2675[15]
  i2674.maxQueuedFrames = i2675[16]
  i2674.particleRaycastBudget = i2675[17]
  i2674.pixelLightCount = i2675[18]
  i2674.realtimeReflectionProbes = !!i2675[19]
  i2674.shadowCascade2Split = i2675[20]
  i2674.shadowCascade4Split = new pc.Vec3( i2675[21], i2675[22], i2675[23] )
  i2674.streamingMipmapsActive = !!i2675[24]
  i2674.vSyncCount = i2675[25]
  i2674.asyncUploadBufferSize = i2675[26]
  i2674.asyncUploadTimeSlice = i2675[27]
  i2674.billboardsFaceCameraPosition = !!i2675[28]
  i2674.shadowNearPlaneOffset = i2675[29]
  i2674.streamingMipmapsMemoryBudget = i2675[30]
  i2674.maximumLODLevel = i2675[31]
  i2674.streamingMipmapsAddAllCameras = !!i2675[32]
  i2674.streamingMipmapsMaxLevelReduction = i2675[33]
  i2674.streamingMipmapsRenderersPerFrame = i2675[34]
  i2674.resolutionScalingFixedDPIFactor = i2675[35]
  i2674.streamingMipmapsMaxFileIORequests = i2675[36]
  i2674.currentQualityLevel = i2675[37]
  return i2674
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame"] = function (request, data, root) {
  var i2684 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame' )
  var i2685 = data
  i2684.weight = i2685[0]
  i2684.vertices = i2685[1]
  i2684.normals = i2685[2]
  i2684.tangents = i2685[3]
  return i2684
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i2686 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i2687 = data
  request.r(i2687[0], i2687[1], 0, i2686, 'm_ObjectArgument')
  i2686.m_ObjectArgumentAssemblyTypeName = i2687[2]
  i2686.m_IntArgument = i2687[3]
  i2686.m_FloatArgument = i2687[4]
  i2686.m_StringArgument = i2687[5]
  i2686.m_BoolArgument = !!i2687[6]
  return i2686
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

Deserializers.creativeName = "RSNM_V03_YenTTH_TamNTM";

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

Deserializers.buildID = "fb9cacc0-3d4c-427f-b1e2-11a6a59bbc9c";

Deserializers.runtimeInitializeOnLoadInfos = [[["Unity","PerformanceTesting","PerformanceTest","ResetStaticsOnLoad"],["UnityEngine","U2D","Animation","GpuDeformationSystem","CreateFallbackBuffer"],["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"],["UnityEngine","AI","NavMesh","ClearPreUpdateListeners"]],[["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"]],[],[["Unity","PerformanceTesting","Data","RunSettings","ResetStaticsOnLoad"],["Unity","PerformanceTesting","PlayerCallbacks","ResetStaticsOnLoad"]]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

