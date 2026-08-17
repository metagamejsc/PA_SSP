var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i1140 = root || request.c( 'UnityEngine.JointSpring' )
  var i1141 = data
  i1140.spring = i1141[0]
  i1140.damper = i1141[1]
  i1140.targetPosition = i1141[2]
  return i1140
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i1142 = root || request.c( 'UnityEngine.JointMotor' )
  var i1143 = data
  i1142.m_TargetVelocity = i1143[0]
  i1142.m_Force = i1143[1]
  i1142.m_FreeSpin = i1143[2]
  return i1142
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i1144 = root || request.c( 'UnityEngine.JointLimits' )
  var i1145 = data
  i1144.m_Min = i1145[0]
  i1144.m_Max = i1145[1]
  i1144.m_Bounciness = i1145[2]
  i1144.m_BounceMinVelocity = i1145[3]
  i1144.m_ContactDistance = i1145[4]
  i1144.minBounce = i1145[5]
  i1144.maxBounce = i1145[6]
  return i1144
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i1146 = root || request.c( 'UnityEngine.JointDrive' )
  var i1147 = data
  i1146.m_PositionSpring = i1147[0]
  i1146.m_PositionDamper = i1147[1]
  i1146.m_MaximumForce = i1147[2]
  i1146.m_UseAcceleration = i1147[3]
  return i1146
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i1148 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i1149 = data
  i1148.m_Spring = i1149[0]
  i1148.m_Damper = i1149[1]
  return i1148
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i1150 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i1151 = data
  i1150.m_Limit = i1151[0]
  i1150.m_Bounciness = i1151[1]
  i1150.m_ContactDistance = i1151[2]
  return i1150
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i1152 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i1153 = data
  i1152.m_ExtremumSlip = i1153[0]
  i1152.m_ExtremumValue = i1153[1]
  i1152.m_AsymptoteSlip = i1153[2]
  i1152.m_AsymptoteValue = i1153[3]
  i1152.m_Stiffness = i1153[4]
  return i1152
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i1154 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i1155 = data
  i1154.m_LowerAngle = i1155[0]
  i1154.m_UpperAngle = i1155[1]
  return i1154
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i1156 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i1157 = data
  i1156.m_MotorSpeed = i1157[0]
  i1156.m_MaximumMotorTorque = i1157[1]
  return i1156
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i1158 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i1159 = data
  i1158.m_DampingRatio = i1159[0]
  i1158.m_Frequency = i1159[1]
  i1158.m_Angle = i1159[2]
  return i1158
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i1160 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i1161 = data
  i1160.m_LowerTranslation = i1161[0]
  i1160.m_UpperTranslation = i1161[1]
  return i1160
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i1162 = root || new pc.UnityMaterial()
  var i1163 = data
  i1162.name = i1163[0]
  request.r(i1163[1], i1163[2], 0, i1162, 'shader')
  i1162.renderQueue = i1163[3]
  i1162.enableInstancing = !!i1163[4]
  var i1165 = i1163[5]
  var i1164 = []
  for(var i = 0; i < i1165.length; i += 1) {
    i1164.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i1165[i + 0]) );
  }
  i1162.floatParameters = i1164
  var i1167 = i1163[6]
  var i1166 = []
  for(var i = 0; i < i1167.length; i += 1) {
    i1166.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i1167[i + 0]) );
  }
  i1162.colorParameters = i1166
  var i1169 = i1163[7]
  var i1168 = []
  for(var i = 0; i < i1169.length; i += 1) {
    i1168.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i1169[i + 0]) );
  }
  i1162.vectorParameters = i1168
  var i1171 = i1163[8]
  var i1170 = []
  for(var i = 0; i < i1171.length; i += 1) {
    i1170.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i1171[i + 0]) );
  }
  i1162.textureParameters = i1170
  var i1173 = i1163[9]
  var i1172 = []
  for(var i = 0; i < i1173.length; i += 1) {
    i1172.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i1173[i + 0]) );
  }
  i1162.materialFlags = i1172
  return i1162
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i1176 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i1177 = data
  i1176.name = i1177[0]
  i1176.value = i1177[1]
  return i1176
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i1180 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i1181 = data
  i1180.name = i1181[0]
  i1180.value = new pc.Color(i1181[1], i1181[2], i1181[3], i1181[4])
  return i1180
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i1184 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i1185 = data
  i1184.name = i1185[0]
  i1184.value = new pc.Vec4( i1185[1], i1185[2], i1185[3], i1185[4] )
  return i1184
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i1188 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i1189 = data
  i1188.name = i1189[0]
  request.r(i1189[1], i1189[2], 0, i1188, 'value')
  return i1188
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i1192 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i1193 = data
  i1192.name = i1193[0]
  i1192.enabled = !!i1193[1]
  return i1192
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i1194 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i1195 = data
  i1194.name = i1195[0]
  i1194.width = i1195[1]
  i1194.height = i1195[2]
  i1194.mipmapCount = i1195[3]
  i1194.anisoLevel = i1195[4]
  i1194.filterMode = i1195[5]
  i1194.hdr = !!i1195[6]
  i1194.format = i1195[7]
  i1194.wrapMode = i1195[8]
  i1194.alphaIsTransparency = !!i1195[9]
  i1194.alphaSource = i1195[10]
  i1194.graphicsFormat = i1195[11]
  i1194.sRGBTexture = !!i1195[12]
  i1194.desiredColorSpace = i1195[13]
  i1194.wrapU = i1195[14]
  i1194.wrapV = i1195[15]
  return i1194
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i1196 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i1197 = data
  i1196.position = new pc.Vec3( i1197[0], i1197[1], i1197[2] )
  i1196.scale = new pc.Vec3( i1197[3], i1197[4], i1197[5] )
  i1196.rotation = new pc.Quat(i1197[6], i1197[7], i1197[8], i1197[9])
  return i1196
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystem"] = function (request, data, root) {
  var i1198 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystem' )
  var i1199 = data
  i1198.main = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule', i1199[0], i1198.main)
  i1198.colorBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule', i1199[1], i1198.colorBySpeed)
  i1198.colorOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule', i1199[2], i1198.colorOverLifetime)
  i1198.emission = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule', i1199[3], i1198.emission)
  i1198.rotationBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule', i1199[4], i1198.rotationBySpeed)
  i1198.rotationOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule', i1199[5], i1198.rotationOverLifetime)
  i1198.shape = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule', i1199[6], i1198.shape)
  i1198.sizeBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule', i1199[7], i1198.sizeBySpeed)
  i1198.sizeOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule', i1199[8], i1198.sizeOverLifetime)
  i1198.textureSheetAnimation = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule', i1199[9], i1198.textureSheetAnimation)
  i1198.velocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule', i1199[10], i1198.velocityOverLifetime)
  i1198.noise = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule', i1199[11], i1198.noise)
  i1198.inheritVelocity = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule', i1199[12], i1198.inheritVelocity)
  i1198.forceOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule', i1199[13], i1198.forceOverLifetime)
  i1198.limitVelocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule', i1199[14], i1198.limitVelocityOverLifetime)
  i1198.useAutoRandomSeed = !!i1199[15]
  i1198.randomSeed = i1199[16]
  return i1198
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule"] = function (request, data, root) {
  var i1200 = root || new pc.ParticleSystemMain()
  var i1201 = data
  i1200.duration = i1201[0]
  i1200.loop = !!i1201[1]
  i1200.prewarm = !!i1201[2]
  i1200.startDelay = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1201[3], i1200.startDelay)
  i1200.startLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1201[4], i1200.startLifetime)
  i1200.startSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1201[5], i1200.startSpeed)
  i1200.startSize3D = !!i1201[6]
  i1200.startSizeX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1201[7], i1200.startSizeX)
  i1200.startSizeY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1201[8], i1200.startSizeY)
  i1200.startSizeZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1201[9], i1200.startSizeZ)
  i1200.startRotation3D = !!i1201[10]
  i1200.startRotationX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1201[11], i1200.startRotationX)
  i1200.startRotationY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1201[12], i1200.startRotationY)
  i1200.startRotationZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1201[13], i1200.startRotationZ)
  i1200.startColor = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i1201[14], i1200.startColor)
  i1200.gravityModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1201[15], i1200.gravityModifier)
  i1200.simulationSpace = i1201[16]
  request.r(i1201[17], i1201[18], 0, i1200, 'customSimulationSpace')
  i1200.simulationSpeed = i1201[19]
  i1200.useUnscaledTime = !!i1201[20]
  i1200.scalingMode = i1201[21]
  i1200.playOnAwake = !!i1201[22]
  i1200.maxParticles = i1201[23]
  i1200.emitterVelocityMode = i1201[24]
  i1200.stopAction = i1201[25]
  return i1200
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve"] = function (request, data, root) {
  var i1202 = root || new pc.MinMaxCurve()
  var i1203 = data
  i1202.mode = i1203[0]
  i1202.curveMin = new pc.AnimationCurve( { keys_flow: i1203[1] } )
  i1202.curveMax = new pc.AnimationCurve( { keys_flow: i1203[2] } )
  i1202.curveMultiplier = i1203[3]
  i1202.constantMin = i1203[4]
  i1202.constantMax = i1203[5]
  return i1202
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient"] = function (request, data, root) {
  var i1204 = root || new pc.MinMaxGradient()
  var i1205 = data
  i1204.mode = i1205[0]
  i1204.gradientMin = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i1205[1], i1204.gradientMin)
  i1204.gradientMax = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i1205[2], i1204.gradientMax)
  i1204.colorMin = new pc.Color(i1205[3], i1205[4], i1205[5], i1205[6])
  i1204.colorMax = new pc.Color(i1205[7], i1205[8], i1205[9], i1205[10])
  return i1204
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient"] = function (request, data, root) {
  var i1206 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient' )
  var i1207 = data
  i1206.mode = i1207[0]
  var i1209 = i1207[1]
  var i1208 = []
  for(var i = 0; i < i1209.length; i += 1) {
    i1208.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey', i1209[i + 0]) );
  }
  i1206.colorKeys = i1208
  var i1211 = i1207[2]
  var i1210 = []
  for(var i = 0; i < i1211.length; i += 1) {
    i1210.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey', i1211[i + 0]) );
  }
  i1206.alphaKeys = i1210
  return i1206
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule"] = function (request, data, root) {
  var i1212 = root || new pc.ParticleSystemColorBySpeed()
  var i1213 = data
  i1212.enabled = !!i1213[0]
  i1212.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i1213[1], i1212.color)
  i1212.range = new pc.Vec2( i1213[2], i1213[3] )
  return i1212
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey"] = function (request, data, root) {
  var i1216 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey' )
  var i1217 = data
  i1216.color = new pc.Color(i1217[0], i1217[1], i1217[2], i1217[3])
  i1216.time = i1217[4]
  return i1216
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey"] = function (request, data, root) {
  var i1220 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey' )
  var i1221 = data
  i1220.alpha = i1221[0]
  i1220.time = i1221[1]
  return i1220
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule"] = function (request, data, root) {
  var i1222 = root || new pc.ParticleSystemColorOverLifetime()
  var i1223 = data
  i1222.enabled = !!i1223[0]
  i1222.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i1223[1], i1222.color)
  return i1222
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule"] = function (request, data, root) {
  var i1224 = root || new pc.ParticleSystemEmitter()
  var i1225 = data
  i1224.enabled = !!i1225[0]
  i1224.rateOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1225[1], i1224.rateOverTime)
  i1224.rateOverDistance = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1225[2], i1224.rateOverDistance)
  var i1227 = i1225[3]
  var i1226 = []
  for(var i = 0; i < i1227.length; i += 1) {
    i1226.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst', i1227[i + 0]) );
  }
  i1224.bursts = i1226
  return i1224
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst"] = function (request, data, root) {
  var i1230 = root || new pc.ParticleSystemBurst()
  var i1231 = data
  i1230.count = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1231[0], i1230.count)
  i1230.cycleCount = i1231[1]
  i1230.minCount = i1231[2]
  i1230.maxCount = i1231[3]
  i1230.repeatInterval = i1231[4]
  i1230.time = i1231[5]
  return i1230
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule"] = function (request, data, root) {
  var i1232 = root || new pc.ParticleSystemRotationBySpeed()
  var i1233 = data
  i1232.enabled = !!i1233[0]
  i1232.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1233[1], i1232.x)
  i1232.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1233[2], i1232.y)
  i1232.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1233[3], i1232.z)
  i1232.separateAxes = !!i1233[4]
  i1232.range = new pc.Vec2( i1233[5], i1233[6] )
  return i1232
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule"] = function (request, data, root) {
  var i1234 = root || new pc.ParticleSystemRotationOverLifetime()
  var i1235 = data
  i1234.enabled = !!i1235[0]
  i1234.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1235[1], i1234.x)
  i1234.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1235[2], i1234.y)
  i1234.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1235[3], i1234.z)
  i1234.separateAxes = !!i1235[4]
  return i1234
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule"] = function (request, data, root) {
  var i1236 = root || new pc.ParticleSystemShape()
  var i1237 = data
  i1236.enabled = !!i1237[0]
  i1236.shapeType = i1237[1]
  i1236.randomDirectionAmount = i1237[2]
  i1236.sphericalDirectionAmount = i1237[3]
  i1236.randomPositionAmount = i1237[4]
  i1236.alignToDirection = !!i1237[5]
  i1236.radius = i1237[6]
  i1236.radiusMode = i1237[7]
  i1236.radiusSpread = i1237[8]
  i1236.radiusSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1237[9], i1236.radiusSpeed)
  i1236.radiusThickness = i1237[10]
  i1236.angle = i1237[11]
  i1236.length = i1237[12]
  i1236.boxThickness = new pc.Vec3( i1237[13], i1237[14], i1237[15] )
  i1236.meshShapeType = i1237[16]
  request.r(i1237[17], i1237[18], 0, i1236, 'mesh')
  request.r(i1237[19], i1237[20], 0, i1236, 'meshRenderer')
  request.r(i1237[21], i1237[22], 0, i1236, 'skinnedMeshRenderer')
  i1236.useMeshMaterialIndex = !!i1237[23]
  i1236.meshMaterialIndex = i1237[24]
  i1236.useMeshColors = !!i1237[25]
  i1236.normalOffset = i1237[26]
  i1236.arc = i1237[27]
  i1236.arcMode = i1237[28]
  i1236.arcSpread = i1237[29]
  i1236.arcSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1237[30], i1236.arcSpeed)
  i1236.donutRadius = i1237[31]
  i1236.position = new pc.Vec3( i1237[32], i1237[33], i1237[34] )
  i1236.rotation = new pc.Vec3( i1237[35], i1237[36], i1237[37] )
  i1236.scale = new pc.Vec3( i1237[38], i1237[39], i1237[40] )
  return i1236
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule"] = function (request, data, root) {
  var i1238 = root || new pc.ParticleSystemSizeBySpeed()
  var i1239 = data
  i1238.enabled = !!i1239[0]
  i1238.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1239[1], i1238.x)
  i1238.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1239[2], i1238.y)
  i1238.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1239[3], i1238.z)
  i1238.separateAxes = !!i1239[4]
  i1238.range = new pc.Vec2( i1239[5], i1239[6] )
  return i1238
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule"] = function (request, data, root) {
  var i1240 = root || new pc.ParticleSystemSizeOverLifetime()
  var i1241 = data
  i1240.enabled = !!i1241[0]
  i1240.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1241[1], i1240.x)
  i1240.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1241[2], i1240.y)
  i1240.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1241[3], i1240.z)
  i1240.separateAxes = !!i1241[4]
  return i1240
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule"] = function (request, data, root) {
  var i1242 = root || new pc.ParticleSystemTextureSheetAnimation()
  var i1243 = data
  i1242.enabled = !!i1243[0]
  i1242.mode = i1243[1]
  i1242.animation = i1243[2]
  i1242.numTilesX = i1243[3]
  i1242.numTilesY = i1243[4]
  i1242.useRandomRow = !!i1243[5]
  i1242.frameOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1243[6], i1242.frameOverTime)
  i1242.startFrame = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1243[7], i1242.startFrame)
  i1242.cycleCount = i1243[8]
  i1242.rowIndex = i1243[9]
  i1242.flipU = i1243[10]
  i1242.flipV = i1243[11]
  i1242.spriteCount = i1243[12]
  var i1245 = i1243[13]
  var i1244 = []
  for(var i = 0; i < i1245.length; i += 2) {
  request.r(i1245[i + 0], i1245[i + 1], 2, i1244, '')
  }
  i1242.sprites = i1244
  return i1242
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule"] = function (request, data, root) {
  var i1248 = root || new pc.ParticleSystemVelocityOverLifetime()
  var i1249 = data
  i1248.enabled = !!i1249[0]
  i1248.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1249[1], i1248.x)
  i1248.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1249[2], i1248.y)
  i1248.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1249[3], i1248.z)
  i1248.radial = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1249[4], i1248.radial)
  i1248.speedModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1249[5], i1248.speedModifier)
  i1248.space = i1249[6]
  i1248.orbitalX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1249[7], i1248.orbitalX)
  i1248.orbitalY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1249[8], i1248.orbitalY)
  i1248.orbitalZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1249[9], i1248.orbitalZ)
  i1248.orbitalOffsetX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1249[10], i1248.orbitalOffsetX)
  i1248.orbitalOffsetY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1249[11], i1248.orbitalOffsetY)
  i1248.orbitalOffsetZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1249[12], i1248.orbitalOffsetZ)
  return i1248
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule"] = function (request, data, root) {
  var i1250 = root || new pc.ParticleSystemNoise()
  var i1251 = data
  i1250.enabled = !!i1251[0]
  i1250.separateAxes = !!i1251[1]
  i1250.strengthX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1251[2], i1250.strengthX)
  i1250.strengthY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1251[3], i1250.strengthY)
  i1250.strengthZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1251[4], i1250.strengthZ)
  i1250.frequency = i1251[5]
  i1250.damping = !!i1251[6]
  i1250.octaveCount = i1251[7]
  i1250.octaveMultiplier = i1251[8]
  i1250.octaveScale = i1251[9]
  i1250.quality = i1251[10]
  i1250.scrollSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1251[11], i1250.scrollSpeed)
  i1250.scrollSpeedMultiplier = i1251[12]
  i1250.remapEnabled = !!i1251[13]
  i1250.remapX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1251[14], i1250.remapX)
  i1250.remapY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1251[15], i1250.remapY)
  i1250.remapZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1251[16], i1250.remapZ)
  i1250.positionAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1251[17], i1250.positionAmount)
  i1250.rotationAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1251[18], i1250.rotationAmount)
  i1250.sizeAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1251[19], i1250.sizeAmount)
  return i1250
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule"] = function (request, data, root) {
  var i1252 = root || new pc.ParticleSystemInheritVelocity()
  var i1253 = data
  i1252.enabled = !!i1253[0]
  i1252.mode = i1253[1]
  i1252.curve = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1253[2], i1252.curve)
  return i1252
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule"] = function (request, data, root) {
  var i1254 = root || new pc.ParticleSystemForceOverLifetime()
  var i1255 = data
  i1254.enabled = !!i1255[0]
  i1254.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1255[1], i1254.x)
  i1254.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1255[2], i1254.y)
  i1254.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1255[3], i1254.z)
  i1254.space = i1255[4]
  i1254.randomized = !!i1255[5]
  return i1254
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule"] = function (request, data, root) {
  var i1256 = root || new pc.ParticleSystemLimitVelocityOverLifetime()
  var i1257 = data
  i1256.enabled = !!i1257[0]
  i1256.limit = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1257[1], i1256.limit)
  i1256.limitX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1257[2], i1256.limitX)
  i1256.limitY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1257[3], i1256.limitY)
  i1256.limitZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1257[4], i1256.limitZ)
  i1256.dampen = i1257[5]
  i1256.separateAxes = !!i1257[6]
  i1256.space = i1257[7]
  i1256.drag = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i1257[8], i1256.drag)
  i1256.multiplyDragByParticleSize = !!i1257[9]
  i1256.multiplyDragByParticleVelocity = !!i1257[10]
  return i1256
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer"] = function (request, data, root) {
  var i1258 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer' )
  var i1259 = data
  request.r(i1259[0], i1259[1], 0, i1258, 'mesh')
  i1258.meshCount = i1259[2]
  i1258.activeVertexStreamsCount = i1259[3]
  i1258.alignment = i1259[4]
  i1258.renderMode = i1259[5]
  i1258.sortMode = i1259[6]
  i1258.lengthScale = i1259[7]
  i1258.velocityScale = i1259[8]
  i1258.cameraVelocityScale = i1259[9]
  i1258.normalDirection = i1259[10]
  i1258.sortingFudge = i1259[11]
  i1258.minParticleSize = i1259[12]
  i1258.maxParticleSize = i1259[13]
  i1258.pivot = new pc.Vec3( i1259[14], i1259[15], i1259[16] )
  request.r(i1259[17], i1259[18], 0, i1258, 'trailMaterial')
  i1258.applyActiveColorSpace = !!i1259[19]
  i1258.enabled = !!i1259[20]
  request.r(i1259[21], i1259[22], 0, i1258, 'sharedMaterial')
  var i1261 = i1259[23]
  var i1260 = []
  for(var i = 0; i < i1261.length; i += 2) {
  request.r(i1261[i + 0], i1261[i + 1], 2, i1260, '')
  }
  i1258.sharedMaterials = i1260
  i1258.receiveShadows = !!i1259[24]
  i1258.shadowCastingMode = i1259[25]
  i1258.sortingLayerID = i1259[26]
  i1258.sortingOrder = i1259[27]
  i1258.lightmapIndex = i1259[28]
  i1258.lightmapSceneIndex = i1259[29]
  i1258.lightmapScaleOffset = new pc.Vec4( i1259[30], i1259[31], i1259[32], i1259[33] )
  i1258.lightProbeUsage = i1259[34]
  i1258.reflectionProbeUsage = i1259[35]
  return i1258
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i1264 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i1265 = data
  i1264.name = i1265[0]
  i1264.tagId = i1265[1]
  i1264.enabled = !!i1265[2]
  i1264.isStatic = !!i1265[3]
  i1264.layer = i1265[4]
  return i1264
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i1266 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i1267 = data
  i1266.name = i1267[0]
  i1266.index = i1267[1]
  i1266.startup = !!i1267[2]
  return i1266
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i1268 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i1269 = data
  i1268.aspect = i1269[0]
  i1268.orthographic = !!i1269[1]
  i1268.orthographicSize = i1269[2]
  i1268.backgroundColor = new pc.Color(i1269[3], i1269[4], i1269[5], i1269[6])
  i1268.nearClipPlane = i1269[7]
  i1268.farClipPlane = i1269[8]
  i1268.fieldOfView = i1269[9]
  i1268.depth = i1269[10]
  i1268.clearFlags = i1269[11]
  i1268.cullingMask = i1269[12]
  i1268.rect = i1269[13]
  request.r(i1269[14], i1269[15], 0, i1268, 'targetTexture')
  i1268.usePhysicalProperties = !!i1269[16]
  i1268.focalLength = i1269[17]
  i1268.sensorSize = new pc.Vec2( i1269[18], i1269[19] )
  i1268.lensShift = new pc.Vec2( i1269[20], i1269[21] )
  i1268.gateFit = i1269[22]
  i1268.commandBufferCount = i1269[23]
  i1268.cameraType = i1269[24]
  i1268.enabled = !!i1269[25]
  return i1268
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i1270 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i1271 = data
  request.r(i1271[0], i1271[1], 0, i1270, 'm_FirstSelected')
  i1270.m_sendNavigationEvents = !!i1271[2]
  i1270.m_DragThreshold = i1271[3]
  return i1270
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i1272 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i1273 = data
  i1272.m_HorizontalAxis = i1273[0]
  i1272.m_VerticalAxis = i1273[1]
  i1272.m_SubmitButton = i1273[2]
  i1272.m_CancelButton = i1273[3]
  i1272.m_InputActionsPerSecond = i1273[4]
  i1272.m_RepeatDelay = i1273[5]
  i1272.m_ForceModuleActive = !!i1273[6]
  i1272.m_SendPointerHoverToParent = !!i1273[7]
  return i1272
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i1274 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i1275 = data
  i1274.pivot = new pc.Vec2( i1275[0], i1275[1] )
  i1274.anchorMin = new pc.Vec2( i1275[2], i1275[3] )
  i1274.anchorMax = new pc.Vec2( i1275[4], i1275[5] )
  i1274.sizeDelta = new pc.Vec2( i1275[6], i1275[7] )
  i1274.anchoredPosition3D = new pc.Vec3( i1275[8], i1275[9], i1275[10] )
  i1274.rotation = new pc.Quat(i1275[11], i1275[12], i1275[13], i1275[14])
  i1274.scale = new pc.Vec3( i1275[15], i1275[16], i1275[17] )
  return i1274
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i1276 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i1277 = data
  i1276.planeDistance = i1277[0]
  i1276.referencePixelsPerUnit = i1277[1]
  i1276.isFallbackOverlay = !!i1277[2]
  i1276.renderMode = i1277[3]
  i1276.renderOrder = i1277[4]
  i1276.sortingLayerName = i1277[5]
  i1276.sortingOrder = i1277[6]
  i1276.scaleFactor = i1277[7]
  request.r(i1277[8], i1277[9], 0, i1276, 'worldCamera')
  i1276.overrideSorting = !!i1277[10]
  i1276.pixelPerfect = !!i1277[11]
  i1276.targetDisplay = i1277[12]
  i1276.overridePixelPerfect = !!i1277[13]
  i1276.enabled = !!i1277[14]
  return i1276
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i1278 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i1279 = data
  i1278.m_UiScaleMode = i1279[0]
  i1278.m_ReferencePixelsPerUnit = i1279[1]
  i1278.m_ScaleFactor = i1279[2]
  i1278.m_ReferenceResolution = new pc.Vec2( i1279[3], i1279[4] )
  i1278.m_ScreenMatchMode = i1279[5]
  i1278.m_MatchWidthOrHeight = i1279[6]
  i1278.m_PhysicalUnit = i1279[7]
  i1278.m_FallbackScreenDPI = i1279[8]
  i1278.m_DefaultSpriteDPI = i1279[9]
  i1278.m_DynamicPixelsPerUnit = i1279[10]
  i1278.m_PresetInfoIsWorld = !!i1279[11]
  return i1278
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i1280 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i1281 = data
  i1280.m_IgnoreReversedGraphics = !!i1281[0]
  i1280.m_BlockingObjects = i1281[1]
  i1280.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i1281[2] )
  return i1280
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i1282 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i1283 = data
  i1282.cullTransparentMesh = !!i1283[0]
  return i1282
}

Deserializers["UnityEngine.UI.AspectRatioFitter"] = function (request, data, root) {
  var i1284 = root || request.c( 'UnityEngine.UI.AspectRatioFitter' )
  var i1285 = data
  i1284.m_AspectMode = i1285[0]
  i1284.m_AspectRatio = i1285[1]
  return i1284
}

Deserializers["UnityEngine.UI.RawImage"] = function (request, data, root) {
  var i1286 = root || request.c( 'UnityEngine.UI.RawImage' )
  var i1287 = data
  request.r(i1287[0], i1287[1], 0, i1286, 'm_Texture')
  i1286.m_UVRect = UnityEngine.Rect.MinMaxRect(i1287[2], i1287[3], i1287[4], i1287[5])
  request.r(i1287[6], i1287[7], 0, i1286, 'm_Material')
  i1286.m_Maskable = !!i1287[8]
  i1286.m_Color = new pc.Color(i1287[9], i1287[10], i1287[11], i1287[12])
  i1286.m_RaycastTarget = !!i1287[13]
  i1286.m_RaycastPadding = new pc.Vec4( i1287[14], i1287[15], i1287[16], i1287[17] )
  return i1286
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer"] = function (request, data, root) {
  var i1288 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer' )
  var i1289 = data
  i1288.color = new pc.Color(i1289[0], i1289[1], i1289[2], i1289[3])
  request.r(i1289[4], i1289[5], 0, i1288, 'sprite')
  i1288.flipX = !!i1289[6]
  i1288.flipY = !!i1289[7]
  i1288.drawMode = i1289[8]
  i1288.size = new pc.Vec2( i1289[9], i1289[10] )
  i1288.tileMode = i1289[11]
  i1288.adaptiveModeThreshold = i1289[12]
  i1288.maskInteraction = i1289[13]
  i1288.spriteSortPoint = i1289[14]
  i1288.enabled = !!i1289[15]
  request.r(i1289[16], i1289[17], 0, i1288, 'sharedMaterial')
  var i1291 = i1289[18]
  var i1290 = []
  for(var i = 0; i < i1291.length; i += 2) {
  request.r(i1291[i + 0], i1291[i + 1], 2, i1290, '')
  }
  i1288.sharedMaterials = i1290
  i1288.receiveShadows = !!i1289[19]
  i1288.shadowCastingMode = i1289[20]
  i1288.sortingLayerID = i1289[21]
  i1288.sortingOrder = i1289[22]
  i1288.lightmapIndex = i1289[23]
  i1288.lightmapSceneIndex = i1289[24]
  i1288.lightmapScaleOffset = new pc.Vec4( i1289[25], i1289[26], i1289[27], i1289[28] )
  i1288.lightProbeUsage = i1289[29]
  i1288.reflectionProbeUsage = i1289[30]
  return i1288
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D"] = function (request, data, root) {
  var i1292 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D' )
  var i1293 = data
  i1292.usedByComposite = !!i1293[0]
  i1292.autoTiling = !!i1293[1]
  i1292.size = new pc.Vec2( i1293[2], i1293[3] )
  i1292.edgeRadius = i1293[4]
  i1292.enabled = !!i1293[5]
  i1292.isTrigger = !!i1293[6]
  i1292.usedByEffector = !!i1293[7]
  i1292.density = i1293[8]
  i1292.offset = new pc.Vec2( i1293[9], i1293[10] )
  request.r(i1293[11], i1293[12], 0, i1292, 'material')
  return i1292
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SortingGroup"] = function (request, data, root) {
  var i1294 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SortingGroup' )
  var i1295 = data
  i1294.sortingLayerIndex = i1295[0]
  i1294.sortingOrder = i1295[1]
  i1294.sortingLayerName = i1295[2]
  i1294.enabled = !!i1295[3]
  return i1294
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Rigidbody2D"] = function (request, data, root) {
  var i1296 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Rigidbody2D' )
  var i1297 = data
  i1296.bodyType = i1297[0]
  request.r(i1297[1], i1297[2], 0, i1296, 'material')
  i1296.simulated = !!i1297[3]
  i1296.useAutoMass = !!i1297[4]
  i1296.mass = i1297[5]
  i1296.drag = i1297[6]
  i1296.angularDrag = i1297[7]
  i1296.gravityScale = i1297[8]
  i1296.collisionDetectionMode = i1297[9]
  i1296.sleepMode = i1297[10]
  i1296.constraints = i1297[11]
  return i1296
}

Deserializers["MonsterController"] = function (request, data, root) {
  var i1298 = root || request.c( 'MonsterController' )
  var i1299 = data
  request.r(i1299[0], i1299[1], 0, i1298, 'joint')
  request.r(i1299[2], i1299[3], 0, i1298, 'rb')
  request.r(i1299[4], i1299[5], 0, i1298, 'deadSFX')
  i1298.force = new pc.Vec2( i1299[6], i1299[7] )
  return i1298
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.HingeJoint2D"] = function (request, data, root) {
  var i1300 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.HingeJoint2D' )
  var i1301 = data
  i1300.useLimits = !!i1301[0]
  i1300.limits = request.d('UnityEngine.JointAngleLimits2D', i1301[1], i1300.limits)
  i1300.useMotor = !!i1301[2]
  i1300.motor = request.d('UnityEngine.JointMotor2D', i1301[3], i1300.motor)
  i1300.anchor = new pc.Vec2( i1301[4], i1301[5] )
  i1300.connectedAnchor = new pc.Vec2( i1301[6], i1301[7] )
  i1300.autoConfigureConnectedAnchor = !!i1301[8]
  request.r(i1301[9], i1301[10], 0, i1300, 'connectedBody')
  i1300.breakForce = i1301[11]
  i1300.breakTorque = i1301[12]
  i1300.enableCollision = !!i1301[13]
  i1300.enabled = !!i1301[14]
  return i1300
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.TargetJoint2D"] = function (request, data, root) {
  var i1302 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.TargetJoint2D' )
  var i1303 = data
  i1302.autoConfigureTarget = !!i1303[0]
  i1302.target = new pc.Vec2( i1303[1], i1303[2] )
  i1302.anchor = new pc.Vec2( i1303[3], i1303[4] )
  i1302.maxForce = i1303[5]
  i1302.dampingRatio = i1303[6]
  i1302.frequency = i1303[7]
  request.r(i1303[8], i1303[9], 0, i1302, 'connectedBody')
  i1302.breakForce = i1303[10]
  i1302.breakTorque = i1303[11]
  i1302.enableCollision = !!i1303[12]
  i1302.enabled = !!i1303[13]
  return i1302
}

Deserializers["BonkController"] = function (request, data, root) {
  var i1304 = root || request.c( 'BonkController' )
  var i1305 = data
  i1304.target = i1305[0]
  i1304.maxBonk = i1305[1]
  request.r(i1305[2], i1305[3], 0, i1304, 'hitSound')
  return i1304
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CircleCollider2D"] = function (request, data, root) {
  var i1306 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CircleCollider2D' )
  var i1307 = data
  i1306.radius = i1307[0]
  i1306.enabled = !!i1307[1]
  i1306.isTrigger = !!i1307[2]
  i1306.usedByEffector = !!i1307[3]
  i1306.density = i1307[4]
  i1306.offset = new pc.Vec2( i1307[5], i1307[6] )
  request.r(i1307[7], i1307[8], 0, i1306, 'material')
  return i1306
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i1308 = root || request.c( 'UnityEngine.UI.Button' )
  var i1309 = data
  i1308.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i1309[0], i1308.m_OnClick)
  i1308.m_Navigation = request.d('UnityEngine.UI.Navigation', i1309[1], i1308.m_Navigation)
  i1308.m_Transition = i1309[2]
  i1308.m_Colors = request.d('UnityEngine.UI.ColorBlock', i1309[3], i1308.m_Colors)
  i1308.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i1309[4], i1308.m_SpriteState)
  i1308.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i1309[5], i1308.m_AnimationTriggers)
  i1308.m_Interactable = !!i1309[6]
  request.r(i1309[7], i1309[8], 0, i1308, 'm_TargetGraphic')
  return i1308
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i1310 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i1311 = data
  i1310.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i1311[0], i1310.m_PersistentCalls)
  return i1310
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i1312 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i1313 = data
  var i1315 = i1313[0]
  var i1314 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i1315.length; i += 1) {
    i1314.add(request.d('UnityEngine.Events.PersistentCall', i1315[i + 0]));
  }
  i1312.m_Calls = i1314
  return i1312
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i1318 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i1319 = data
  request.r(i1319[0], i1319[1], 0, i1318, 'm_Target')
  i1318.m_TargetAssemblyTypeName = i1319[2]
  i1318.m_MethodName = i1319[3]
  i1318.m_Mode = i1319[4]
  i1318.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i1319[5], i1318.m_Arguments)
  i1318.m_CallState = i1319[6]
  return i1318
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i1320 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i1321 = data
  i1320.m_Mode = i1321[0]
  i1320.m_WrapAround = !!i1321[1]
  request.r(i1321[2], i1321[3], 0, i1320, 'm_SelectOnUp')
  request.r(i1321[4], i1321[5], 0, i1320, 'm_SelectOnDown')
  request.r(i1321[6], i1321[7], 0, i1320, 'm_SelectOnLeft')
  request.r(i1321[8], i1321[9], 0, i1320, 'm_SelectOnRight')
  return i1320
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i1322 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i1323 = data
  i1322.m_NormalColor = new pc.Color(i1323[0], i1323[1], i1323[2], i1323[3])
  i1322.m_HighlightedColor = new pc.Color(i1323[4], i1323[5], i1323[6], i1323[7])
  i1322.m_PressedColor = new pc.Color(i1323[8], i1323[9], i1323[10], i1323[11])
  i1322.m_SelectedColor = new pc.Color(i1323[12], i1323[13], i1323[14], i1323[15])
  i1322.m_DisabledColor = new pc.Color(i1323[16], i1323[17], i1323[18], i1323[19])
  i1322.m_ColorMultiplier = i1323[20]
  i1322.m_FadeDuration = i1323[21]
  return i1322
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i1324 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i1325 = data
  request.r(i1325[0], i1325[1], 0, i1324, 'm_HighlightedSprite')
  request.r(i1325[2], i1325[3], 0, i1324, 'm_PressedSprite')
  request.r(i1325[4], i1325[5], 0, i1324, 'm_SelectedSprite')
  request.r(i1325[6], i1325[7], 0, i1324, 'm_DisabledSprite')
  return i1324
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i1326 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i1327 = data
  i1326.m_NormalTrigger = i1327[0]
  i1326.m_HighlightedTrigger = i1327[1]
  i1326.m_PressedTrigger = i1327[2]
  i1326.m_SelectedTrigger = i1327[3]
  i1326.m_DisabledTrigger = i1327[4]
  return i1326
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i1328 = root || request.c( 'UnityEngine.UI.Image' )
  var i1329 = data
  request.r(i1329[0], i1329[1], 0, i1328, 'm_Sprite')
  i1328.m_Type = i1329[2]
  i1328.m_PreserveAspect = !!i1329[3]
  i1328.m_FillCenter = !!i1329[4]
  i1328.m_FillMethod = i1329[5]
  i1328.m_FillAmount = i1329[6]
  i1328.m_FillClockwise = !!i1329[7]
  i1328.m_FillOrigin = i1329[8]
  i1328.m_UseSpriteMesh = !!i1329[9]
  i1328.m_PixelsPerUnitMultiplier = i1329[10]
  request.r(i1329[11], i1329[12], 0, i1328, 'm_Material')
  i1328.m_Maskable = !!i1329[13]
  i1328.m_Color = new pc.Color(i1329[14], i1329[15], i1329[16], i1329[17])
  i1328.m_RaycastTarget = !!i1329[18]
  i1328.m_RaycastPadding = new pc.Vec4( i1329[19], i1329[20], i1329[21], i1329[22] )
  return i1328
}

Deserializers["DG.Tweening.DOTweenAnimation"] = function (request, data, root) {
  var i1330 = root || request.c( 'DG.Tweening.DOTweenAnimation' )
  var i1331 = data
  i1330.targetIsSelf = !!i1331[0]
  request.r(i1331[1], i1331[2], 0, i1330, 'targetGO')
  i1330.tweenTargetIsTargetGO = !!i1331[3]
  i1330.delay = i1331[4]
  i1330.duration = i1331[5]
  i1330.easeType = i1331[6]
  i1330.easeCurve = new pc.AnimationCurve( { keys_flow: i1331[7] } )
  i1330.loopType = i1331[8]
  i1330.loops = i1331[9]
  i1330.id = i1331[10]
  i1330.isRelative = !!i1331[11]
  i1330.isFrom = !!i1331[12]
  i1330.isIndependentUpdate = !!i1331[13]
  i1330.autoKill = !!i1331[14]
  i1330.autoGenerate = !!i1331[15]
  i1330.isActive = !!i1331[16]
  i1330.isValid = !!i1331[17]
  request.r(i1331[18], i1331[19], 0, i1330, 'target')
  i1330.animationType = i1331[20]
  i1330.targetType = i1331[21]
  i1330.forcedTargetType = i1331[22]
  i1330.autoPlay = !!i1331[23]
  i1330.useTargetAsV3 = !!i1331[24]
  i1330.endValueFloat = i1331[25]
  i1330.endValueV3 = new pc.Vec3( i1331[26], i1331[27], i1331[28] )
  i1330.endValueV2 = new pc.Vec2( i1331[29], i1331[30] )
  i1330.endValueColor = new pc.Color(i1331[31], i1331[32], i1331[33], i1331[34])
  i1330.endValueString = i1331[35]
  i1330.endValueRect = UnityEngine.Rect.MinMaxRect(i1331[36], i1331[37], i1331[38], i1331[39])
  request.r(i1331[40], i1331[41], 0, i1330, 'endValueTransform')
  i1330.optionalBool0 = !!i1331[42]
  i1330.optionalBool1 = !!i1331[43]
  i1330.optionalFloat0 = i1331[44]
  i1330.optionalInt0 = i1331[45]
  i1330.optionalRotationMode = i1331[46]
  i1330.optionalScrambleMode = i1331[47]
  i1330.optionalShakeRandomnessMode = i1331[48]
  i1330.optionalString = i1331[49]
  i1330.updateType = i1331[50]
  i1330.isSpeedBased = !!i1331[51]
  i1330.hasOnStart = !!i1331[52]
  i1330.hasOnPlay = !!i1331[53]
  i1330.hasOnUpdate = !!i1331[54]
  i1330.hasOnStepComplete = !!i1331[55]
  i1330.hasOnComplete = !!i1331[56]
  i1330.hasOnTweenCreated = !!i1331[57]
  i1330.hasOnRewind = !!i1331[58]
  i1330.onStart = request.d('UnityEngine.Events.UnityEvent', i1331[59], i1330.onStart)
  i1330.onPlay = request.d('UnityEngine.Events.UnityEvent', i1331[60], i1330.onPlay)
  i1330.onUpdate = request.d('UnityEngine.Events.UnityEvent', i1331[61], i1330.onUpdate)
  i1330.onStepComplete = request.d('UnityEngine.Events.UnityEvent', i1331[62], i1330.onStepComplete)
  i1330.onComplete = request.d('UnityEngine.Events.UnityEvent', i1331[63], i1330.onComplete)
  i1330.onTweenCreated = request.d('UnityEngine.Events.UnityEvent', i1331[64], i1330.onTweenCreated)
  i1330.onRewind = request.d('UnityEngine.Events.UnityEvent', i1331[65], i1330.onRewind)
  return i1330
}

Deserializers["UnityEngine.Events.UnityEvent"] = function (request, data, root) {
  var i1332 = root || request.c( 'UnityEngine.Events.UnityEvent' )
  var i1333 = data
  i1332.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i1333[0], i1332.m_PersistentCalls)
  return i1332
}

Deserializers["UnityEngine.UI.Text"] = function (request, data, root) {
  var i1334 = root || request.c( 'UnityEngine.UI.Text' )
  var i1335 = data
  i1334.m_FontData = request.d('UnityEngine.UI.FontData', i1335[0], i1334.m_FontData)
  i1334.m_Text = i1335[1]
  request.r(i1335[2], i1335[3], 0, i1334, 'm_Material')
  i1334.m_Maskable = !!i1335[4]
  i1334.m_Color = new pc.Color(i1335[5], i1335[6], i1335[7], i1335[8])
  i1334.m_RaycastTarget = !!i1335[9]
  i1334.m_RaycastPadding = new pc.Vec4( i1335[10], i1335[11], i1335[12], i1335[13] )
  return i1334
}

Deserializers["UnityEngine.UI.FontData"] = function (request, data, root) {
  var i1336 = root || request.c( 'UnityEngine.UI.FontData' )
  var i1337 = data
  request.r(i1337[0], i1337[1], 0, i1336, 'm_Font')
  i1336.m_FontSize = i1337[2]
  i1336.m_FontStyle = i1337[3]
  i1336.m_BestFit = !!i1337[4]
  i1336.m_MinSize = i1337[5]
  i1336.m_MaxSize = i1337[6]
  i1336.m_Alignment = i1337[7]
  i1336.m_AlignByGeometry = !!i1337[8]
  i1336.m_RichText = !!i1337[9]
  i1336.m_HorizontalOverflow = i1337[10]
  i1336.m_VerticalOverflow = i1337[11]
  i1336.m_LineSpacing = i1337[12]
  return i1336
}

Deserializers["GameController"] = function (request, data, root) {
  var i1338 = root || request.c( 'GameController' )
  var i1339 = data
  var i1341 = i1339[0]
  var i1340 = new (System.Collections.Generic.List$1(Bridge.ns('MonsterController')))
  for(var i = 0; i < i1341.length; i += 2) {
  request.r(i1341[i + 0], i1341[i + 1], 1, i1340, '')
  }
  i1338.monsters = i1340
  var i1343 = i1339[1]
  var i1342 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Vector3')))
  for(var i = 0; i < i1343.length; i += 3) {
    i1342.add(new pc.Vec3( i1343[i + 0], i1343[i + 1], i1343[i + 2] ));
  }
  i1338.cameraPos = i1342
  i1338.speedMove = i1339[2]
  request.r(i1339[3], i1339[4], 0, i1338, 'target')
  i1338.index = i1339[5]
  i1338.end = !!i1339[6]
  request.r(i1339[7], i1339[8], 0, i1338, 'mainCamera')
  request.r(i1339[9], i1339[10], 0, i1338, 'endUI')
  return i1338
}

Deserializers["TargetController"] = function (request, data, root) {
  var i1348 = root || request.c( 'TargetController' )
  var i1349 = data
  var i1351 = i1349[0]
  var i1350 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TargetJoint2D')))
  for(var i = 0; i < i1351.length; i += 2) {
  request.r(i1351[i + 0], i1351[i + 1], 1, i1350, '')
  }
  i1348.listTarget = i1350
  request.r(i1349[1], i1349[2], 0, i1348, 'currentTarget')
  i1348.index = i1349[3]
  request.r(i1349[4], i1349[5], 0, i1348, 'tut')
  return i1348
}

Deserializers["LunaController"] = function (request, data, root) {
  var i1354 = root || request.c( 'LunaController' )
  var i1355 = data
  request.r(i1355[0], i1355[1], 0, i1354, 'BGTexture')
  i1354.UseTime = !!i1355[2]
  i1354.TimePlay = i1355[3]
  i1354.TutText = i1355[4]
  i1354.TutTextColor = new pc.Color(i1355[5], i1355[6], i1355[7], i1355[8])
  request.r(i1355[9], i1355[10], 0, i1354, 'BGImage')
  request.r(i1355[11], i1355[12], 0, i1354, 'text')
  var i1357 = i1355[13]
  var i1356 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.UI.Button')))
  for(var i = 0; i < i1357.length; i += 2) {
  request.r(i1357[i + 0], i1357[i + 1], 1, i1356, '')
  }
  i1354.CTA = i1356
  return i1354
}

Deserializers["AudioController"] = function (request, data, root) {
  var i1360 = root || request.c( 'AudioController' )
  var i1361 = data
  request.r(i1361[0], i1361[1], 0, i1360, 'BGM')
  request.r(i1361[2], i1361[3], 0, i1360, 'musicSource')
  request.r(i1361[4], i1361[5], 0, i1360, 'pool')
  return i1360
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.AudioSource"] = function (request, data, root) {
  var i1362 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.AudioSource' )
  var i1363 = data
  request.r(i1363[0], i1363[1], 0, i1362, 'clip')
  request.r(i1363[2], i1363[3], 0, i1362, 'outputAudioMixerGroup')
  i1362.playOnAwake = !!i1363[4]
  i1362.loop = !!i1363[5]
  i1362.time = i1363[6]
  i1362.volume = i1363[7]
  i1362.pitch = i1363[8]
  i1362.enabled = !!i1363[9]
  return i1362
}

Deserializers["VFXController"] = function (request, data, root) {
  var i1364 = root || request.c( 'VFXController' )
  var i1365 = data
  request.r(i1365[0], i1365[1], 0, i1364, 'bloodPrefab')
  request.r(i1365[2], i1365[3], 0, i1364, 'pool')
  return i1364
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i1366 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i1367 = data
  i1366.ambientIntensity = i1367[0]
  i1366.reflectionIntensity = i1367[1]
  i1366.ambientMode = i1367[2]
  i1366.ambientLight = new pc.Color(i1367[3], i1367[4], i1367[5], i1367[6])
  i1366.ambientSkyColor = new pc.Color(i1367[7], i1367[8], i1367[9], i1367[10])
  i1366.ambientGroundColor = new pc.Color(i1367[11], i1367[12], i1367[13], i1367[14])
  i1366.ambientEquatorColor = new pc.Color(i1367[15], i1367[16], i1367[17], i1367[18])
  i1366.fogColor = new pc.Color(i1367[19], i1367[20], i1367[21], i1367[22])
  i1366.fogEndDistance = i1367[23]
  i1366.fogStartDistance = i1367[24]
  i1366.fogDensity = i1367[25]
  i1366.fog = !!i1367[26]
  request.r(i1367[27], i1367[28], 0, i1366, 'skybox')
  i1366.fogMode = i1367[29]
  var i1369 = i1367[30]
  var i1368 = []
  for(var i = 0; i < i1369.length; i += 1) {
    i1368.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i1369[i + 0]) );
  }
  i1366.lightmaps = i1368
  i1366.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i1367[31], i1366.lightProbes)
  i1366.lightmapsMode = i1367[32]
  i1366.mixedBakeMode = i1367[33]
  i1366.environmentLightingMode = i1367[34]
  i1366.ambientProbe = new pc.SphericalHarmonicsL2(i1367[35])
  request.r(i1367[36], i1367[37], 0, i1366, 'customReflection')
  request.r(i1367[38], i1367[39], 0, i1366, 'defaultReflection')
  i1366.defaultReflectionMode = i1367[40]
  i1366.defaultReflectionResolution = i1367[41]
  i1366.sunLightObjectId = i1367[42]
  i1366.pixelLightCount = i1367[43]
  i1366.defaultReflectionHDR = !!i1367[44]
  i1366.hasLightDataAsset = !!i1367[45]
  i1366.hasManualGenerate = !!i1367[46]
  return i1366
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i1372 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i1373 = data
  request.r(i1373[0], i1373[1], 0, i1372, 'lightmapColor')
  request.r(i1373[2], i1373[3], 0, i1372, 'lightmapDirection')
  request.r(i1373[4], i1373[5], 0, i1372, 'shadowMask')
  return i1372
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i1374 = root || new UnityEngine.LightProbes()
  var i1375 = data
  return i1374
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i1382 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i1383 = data
  var i1385 = i1383[0]
  var i1384 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i1385.length; i += 1) {
    i1384.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i1385[i + 0]));
  }
  i1382.ShaderCompilationErrors = i1384
  i1382.name = i1383[1]
  i1382.guid = i1383[2]
  var i1387 = i1383[3]
  var i1386 = []
  for(var i = 0; i < i1387.length; i += 1) {
    i1386.push( i1387[i + 0] );
  }
  i1382.shaderDefinedKeywords = i1386
  var i1389 = i1383[4]
  var i1388 = []
  for(var i = 0; i < i1389.length; i += 1) {
    i1388.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i1389[i + 0]) );
  }
  i1382.passes = i1388
  var i1391 = i1383[5]
  var i1390 = []
  for(var i = 0; i < i1391.length; i += 1) {
    i1390.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i1391[i + 0]) );
  }
  i1382.usePasses = i1390
  var i1393 = i1383[6]
  var i1392 = []
  for(var i = 0; i < i1393.length; i += 1) {
    i1392.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i1393[i + 0]) );
  }
  i1382.defaultParameterValues = i1392
  request.r(i1383[7], i1383[8], 0, i1382, 'unityFallbackShader')
  i1382.readDepth = !!i1383[9]
  i1382.hasDepthOnlyPass = !!i1383[10]
  i1382.isCreatedByShaderGraph = !!i1383[11]
  i1382.disableBatching = !!i1383[12]
  i1382.compiled = !!i1383[13]
  return i1382
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i1396 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i1397 = data
  i1396.shaderName = i1397[0]
  i1396.errorMessage = i1397[1]
  return i1396
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i1402 = root || new pc.UnityShaderPass()
  var i1403 = data
  i1402.id = i1403[0]
  i1402.subShaderIndex = i1403[1]
  i1402.name = i1403[2]
  i1402.passType = i1403[3]
  i1402.grabPassTextureName = i1403[4]
  i1402.usePass = !!i1403[5]
  i1402.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1403[6], i1402.zTest)
  i1402.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1403[7], i1402.zWrite)
  i1402.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1403[8], i1402.culling)
  i1402.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i1403[9], i1402.blending)
  i1402.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i1403[10], i1402.alphaBlending)
  i1402.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1403[11], i1402.colorWriteMask)
  i1402.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1403[12], i1402.offsetUnits)
  i1402.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1403[13], i1402.offsetFactor)
  i1402.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1403[14], i1402.stencilRef)
  i1402.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1403[15], i1402.stencilReadMask)
  i1402.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1403[16], i1402.stencilWriteMask)
  i1402.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1403[17], i1402.stencilOp)
  i1402.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1403[18], i1402.stencilOpFront)
  i1402.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1403[19], i1402.stencilOpBack)
  var i1405 = i1403[20]
  var i1404 = []
  for(var i = 0; i < i1405.length; i += 1) {
    i1404.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i1405[i + 0]) );
  }
  i1402.tags = i1404
  var i1407 = i1403[21]
  var i1406 = []
  for(var i = 0; i < i1407.length; i += 1) {
    i1406.push( i1407[i + 0] );
  }
  i1402.passDefinedKeywords = i1406
  var i1409 = i1403[22]
  var i1408 = []
  for(var i = 0; i < i1409.length; i += 1) {
    i1408.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i1409[i + 0]) );
  }
  i1402.passDefinedKeywordGroups = i1408
  var i1411 = i1403[23]
  var i1410 = []
  for(var i = 0; i < i1411.length; i += 1) {
    i1410.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i1411[i + 0]) );
  }
  i1402.variants = i1410
  var i1413 = i1403[24]
  var i1412 = []
  for(var i = 0; i < i1413.length; i += 1) {
    i1412.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i1413[i + 0]) );
  }
  i1402.excludedVariants = i1412
  i1402.hasDepthReader = !!i1403[25]
  return i1402
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i1414 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i1415 = data
  i1414.val = i1415[0]
  i1414.name = i1415[1]
  return i1414
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i1416 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i1417 = data
  i1416.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1417[0], i1416.src)
  i1416.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1417[1], i1416.dst)
  i1416.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1417[2], i1416.op)
  return i1416
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i1418 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i1419 = data
  i1418.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1419[0], i1418.pass)
  i1418.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1419[1], i1418.fail)
  i1418.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1419[2], i1418.zFail)
  i1418.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1419[3], i1418.comp)
  return i1418
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i1422 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i1423 = data
  i1422.name = i1423[0]
  i1422.value = i1423[1]
  return i1422
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i1426 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i1427 = data
  var i1429 = i1427[0]
  var i1428 = []
  for(var i = 0; i < i1429.length; i += 1) {
    i1428.push( i1429[i + 0] );
  }
  i1426.keywords = i1428
  i1426.hasDiscard = !!i1427[1]
  return i1426
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i1432 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i1433 = data
  i1432.passId = i1433[0]
  i1432.subShaderIndex = i1433[1]
  var i1435 = i1433[2]
  var i1434 = []
  for(var i = 0; i < i1435.length; i += 1) {
    i1434.push( i1435[i + 0] );
  }
  i1432.keywords = i1434
  i1432.vertexProgram = i1433[3]
  i1432.fragmentProgram = i1433[4]
  i1432.exportedForWebGl2 = !!i1433[5]
  i1432.readDepth = !!i1433[6]
  return i1432
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i1438 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i1439 = data
  request.r(i1439[0], i1439[1], 0, i1438, 'shader')
  i1438.pass = i1439[2]
  return i1438
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i1442 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i1443 = data
  i1442.name = i1443[0]
  i1442.type = i1443[1]
  i1442.value = new pc.Vec4( i1443[2], i1443[3], i1443[4], i1443[5] )
  i1442.textureValue = i1443[6]
  i1442.shaderPropertyFlag = i1443[7]
  return i1442
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i1444 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i1445 = data
  i1444.name = i1445[0]
  request.r(i1445[1], i1445[2], 0, i1444, 'texture')
  i1444.aabb = i1445[3]
  i1444.vertices = i1445[4]
  i1444.triangles = i1445[5]
  i1444.textureRect = UnityEngine.Rect.MinMaxRect(i1445[6], i1445[7], i1445[8], i1445[9])
  i1444.packedRect = UnityEngine.Rect.MinMaxRect(i1445[10], i1445[11], i1445[12], i1445[13])
  i1444.border = new pc.Vec4( i1445[14], i1445[15], i1445[16], i1445[17] )
  i1444.transparency = i1445[18]
  i1444.bounds = i1445[19]
  i1444.pixelsPerUnit = i1445[20]
  i1444.textureWidth = i1445[21]
  i1444.textureHeight = i1445[22]
  i1444.nativeSize = new pc.Vec2( i1445[23], i1445[24] )
  i1444.pivot = new pc.Vec2( i1445[25], i1445[26] )
  i1444.textureRectOffset = new pc.Vec2( i1445[27], i1445[28] )
  return i1444
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i1446 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i1447 = data
  i1446.name = i1447[0]
  return i1446
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font"] = function (request, data, root) {
  var i1448 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font' )
  var i1449 = data
  i1448.name = i1449[0]
  i1448.ascent = i1449[1]
  i1448.originalLineHeight = i1449[2]
  i1448.fontSize = i1449[3]
  var i1451 = i1449[4]
  var i1450 = []
  for(var i = 0; i < i1451.length; i += 1) {
    i1450.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo', i1451[i + 0]) );
  }
  i1448.characterInfo = i1450
  request.r(i1449[5], i1449[6], 0, i1448, 'texture')
  i1448.originalFontSize = i1449[7]
  return i1448
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo"] = function (request, data, root) {
  var i1454 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo' )
  var i1455 = data
  i1454.index = i1455[0]
  i1454.advance = i1455[1]
  i1454.bearing = i1455[2]
  i1454.glyphWidth = i1455[3]
  i1454.glyphHeight = i1455[4]
  i1454.minX = i1455[5]
  i1454.maxX = i1455[6]
  i1454.minY = i1455[7]
  i1454.maxY = i1455[8]
  i1454.uvBottomLeftX = i1455[9]
  i1454.uvBottomLeftY = i1455[10]
  i1454.uvBottomRightX = i1455[11]
  i1454.uvBottomRightY = i1455[12]
  i1454.uvTopLeftX = i1455[13]
  i1454.uvTopLeftY = i1455[14]
  i1454.uvTopRightX = i1455[15]
  i1454.uvTopRightY = i1455[16]
  return i1454
}

Deserializers["DG.Tweening.Core.DOTweenSettings"] = function (request, data, root) {
  var i1456 = root || request.c( 'DG.Tweening.Core.DOTweenSettings' )
  var i1457 = data
  i1456.useSafeMode = !!i1457[0]
  i1456.safeModeOptions = request.d('DG.Tweening.Core.DOTweenSettings+SafeModeOptions', i1457[1], i1456.safeModeOptions)
  i1456.timeScale = i1457[2]
  i1456.unscaledTimeScale = i1457[3]
  i1456.useSmoothDeltaTime = !!i1457[4]
  i1456.maxSmoothUnscaledTime = i1457[5]
  i1456.rewindCallbackMode = i1457[6]
  i1456.showUnityEditorReport = !!i1457[7]
  i1456.logBehaviour = i1457[8]
  i1456.drawGizmos = !!i1457[9]
  i1456.defaultRecyclable = !!i1457[10]
  i1456.defaultAutoPlay = i1457[11]
  i1456.defaultUpdateType = i1457[12]
  i1456.defaultTimeScaleIndependent = !!i1457[13]
  i1456.defaultEaseType = i1457[14]
  i1456.defaultEaseOvershootOrAmplitude = i1457[15]
  i1456.defaultEasePeriod = i1457[16]
  i1456.defaultAutoKill = !!i1457[17]
  i1456.defaultLoopType = i1457[18]
  i1456.debugMode = !!i1457[19]
  i1456.debugStoreTargetId = !!i1457[20]
  i1456.showPreviewPanel = !!i1457[21]
  i1456.storeSettingsLocation = i1457[22]
  i1456.modules = request.d('DG.Tweening.Core.DOTweenSettings+ModulesSetup', i1457[23], i1456.modules)
  i1456.createASMDEF = !!i1457[24]
  i1456.showPlayingTweens = !!i1457[25]
  i1456.showPausedTweens = !!i1457[26]
  return i1456
}

Deserializers["DG.Tweening.Core.DOTweenSettings+SafeModeOptions"] = function (request, data, root) {
  var i1458 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+SafeModeOptions' )
  var i1459 = data
  i1458.logBehaviour = i1459[0]
  i1458.nestedTweenFailureBehaviour = i1459[1]
  return i1458
}

Deserializers["DG.Tweening.Core.DOTweenSettings+ModulesSetup"] = function (request, data, root) {
  var i1460 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+ModulesSetup' )
  var i1461 = data
  i1460.showPanel = !!i1461[0]
  i1460.audioEnabled = !!i1461[1]
  i1460.physicsEnabled = !!i1461[2]
  i1460.physics2DEnabled = !!i1461[3]
  i1460.spriteEnabled = !!i1461[4]
  i1460.uiEnabled = !!i1461[5]
  i1460.textMeshProEnabled = !!i1461[6]
  i1460.tk2DEnabled = !!i1461[7]
  i1460.deAudioEnabled = !!i1461[8]
  i1460.deUnityExtendedEnabled = !!i1461[9]
  i1460.epoOutlineEnabled = !!i1461[10]
  return i1460
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i1462 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i1463 = data
  var i1465 = i1463[0]
  var i1464 = []
  for(var i = 0; i < i1465.length; i += 1) {
    i1464.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i1465[i + 0]) );
  }
  i1462.files = i1464
  i1462.componentToPrefabIds = i1463[1]
  return i1462
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i1468 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i1469 = data
  i1468.path = i1469[0]
  request.r(i1469[1], i1469[2], 0, i1468, 'unityObject')
  return i1468
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i1470 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i1471 = data
  var i1473 = i1471[0]
  var i1472 = []
  for(var i = 0; i < i1473.length; i += 1) {
    i1472.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i1473[i + 0]) );
  }
  i1470.scriptsExecutionOrder = i1472
  var i1475 = i1471[1]
  var i1474 = []
  for(var i = 0; i < i1475.length; i += 1) {
    i1474.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i1475[i + 0]) );
  }
  i1470.sortingLayers = i1474
  var i1477 = i1471[2]
  var i1476 = []
  for(var i = 0; i < i1477.length; i += 1) {
    i1476.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i1477[i + 0]) );
  }
  i1470.cullingLayers = i1476
  i1470.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i1471[3], i1470.timeSettings)
  i1470.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i1471[4], i1470.physicsSettings)
  i1470.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i1471[5], i1470.physics2DSettings)
  i1470.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i1471[6], i1470.qualitySettings)
  i1470.enableRealtimeShadows = !!i1471[7]
  i1470.enableAutoInstancing = !!i1471[8]
  i1470.enableStaticBatching = !!i1471[9]
  i1470.enableDynamicBatching = !!i1471[10]
  i1470.usePreservativeDynamicBatching = !!i1471[11]
  i1470.lightmapEncodingQuality = i1471[12]
  i1470.desiredColorSpace = i1471[13]
  var i1479 = i1471[14]
  var i1478 = []
  for(var i = 0; i < i1479.length; i += 1) {
    i1478.push( i1479[i + 0] );
  }
  i1470.allTags = i1478
  return i1470
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i1482 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i1483 = data
  i1482.name = i1483[0]
  i1482.value = i1483[1]
  return i1482
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i1486 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i1487 = data
  i1486.id = i1487[0]
  i1486.name = i1487[1]
  i1486.value = i1487[2]
  return i1486
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i1490 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i1491 = data
  i1490.id = i1491[0]
  i1490.name = i1491[1]
  return i1490
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i1492 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i1493 = data
  i1492.fixedDeltaTime = i1493[0]
  i1492.maximumDeltaTime = i1493[1]
  i1492.timeScale = i1493[2]
  i1492.maximumParticleTimestep = i1493[3]
  return i1492
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i1494 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i1495 = data
  i1494.gravity = new pc.Vec3( i1495[0], i1495[1], i1495[2] )
  i1494.defaultSolverIterations = i1495[3]
  i1494.bounceThreshold = i1495[4]
  i1494.autoSyncTransforms = !!i1495[5]
  i1494.autoSimulation = !!i1495[6]
  var i1497 = i1495[7]
  var i1496 = []
  for(var i = 0; i < i1497.length; i += 1) {
    i1496.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i1497[i + 0]) );
  }
  i1494.collisionMatrix = i1496
  return i1494
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i1500 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i1501 = data
  i1500.enabled = !!i1501[0]
  i1500.layerId = i1501[1]
  i1500.otherLayerId = i1501[2]
  return i1500
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i1502 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i1503 = data
  request.r(i1503[0], i1503[1], 0, i1502, 'material')
  i1502.gravity = new pc.Vec2( i1503[2], i1503[3] )
  i1502.positionIterations = i1503[4]
  i1502.velocityIterations = i1503[5]
  i1502.velocityThreshold = i1503[6]
  i1502.maxLinearCorrection = i1503[7]
  i1502.maxAngularCorrection = i1503[8]
  i1502.maxTranslationSpeed = i1503[9]
  i1502.maxRotationSpeed = i1503[10]
  i1502.baumgarteScale = i1503[11]
  i1502.baumgarteTOIScale = i1503[12]
  i1502.timeToSleep = i1503[13]
  i1502.linearSleepTolerance = i1503[14]
  i1502.angularSleepTolerance = i1503[15]
  i1502.defaultContactOffset = i1503[16]
  i1502.autoSimulation = !!i1503[17]
  i1502.queriesHitTriggers = !!i1503[18]
  i1502.queriesStartInColliders = !!i1503[19]
  i1502.callbacksOnDisable = !!i1503[20]
  i1502.reuseCollisionCallbacks = !!i1503[21]
  i1502.autoSyncTransforms = !!i1503[22]
  var i1505 = i1503[23]
  var i1504 = []
  for(var i = 0; i < i1505.length; i += 1) {
    i1504.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i1505[i + 0]) );
  }
  i1502.collisionMatrix = i1504
  return i1502
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i1508 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i1509 = data
  i1508.enabled = !!i1509[0]
  i1508.layerId = i1509[1]
  i1508.otherLayerId = i1509[2]
  return i1508
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i1510 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i1511 = data
  var i1513 = i1511[0]
  var i1512 = []
  for(var i = 0; i < i1513.length; i += 1) {
    i1512.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i1513[i + 0]) );
  }
  i1510.qualityLevels = i1512
  var i1515 = i1511[1]
  var i1514 = []
  for(var i = 0; i < i1515.length; i += 1) {
    i1514.push( i1515[i + 0] );
  }
  i1510.names = i1514
  i1510.shadows = i1511[2]
  i1510.anisotropicFiltering = i1511[3]
  i1510.antiAliasing = i1511[4]
  i1510.lodBias = i1511[5]
  i1510.shadowCascades = i1511[6]
  i1510.shadowDistance = i1511[7]
  i1510.shadowmaskMode = i1511[8]
  i1510.shadowProjection = i1511[9]
  i1510.shadowResolution = i1511[10]
  i1510.softParticles = !!i1511[11]
  i1510.softVegetation = !!i1511[12]
  i1510.activeColorSpace = i1511[13]
  i1510.desiredColorSpace = i1511[14]
  i1510.masterTextureLimit = i1511[15]
  i1510.maxQueuedFrames = i1511[16]
  i1510.particleRaycastBudget = i1511[17]
  i1510.pixelLightCount = i1511[18]
  i1510.realtimeReflectionProbes = !!i1511[19]
  i1510.shadowCascade2Split = i1511[20]
  i1510.shadowCascade4Split = new pc.Vec3( i1511[21], i1511[22], i1511[23] )
  i1510.streamingMipmapsActive = !!i1511[24]
  i1510.vSyncCount = i1511[25]
  i1510.asyncUploadBufferSize = i1511[26]
  i1510.asyncUploadTimeSlice = i1511[27]
  i1510.billboardsFaceCameraPosition = !!i1511[28]
  i1510.shadowNearPlaneOffset = i1511[29]
  i1510.streamingMipmapsMemoryBudget = i1511[30]
  i1510.maximumLODLevel = i1511[31]
  i1510.streamingMipmapsAddAllCameras = !!i1511[32]
  i1510.streamingMipmapsMaxLevelReduction = i1511[33]
  i1510.streamingMipmapsRenderersPerFrame = i1511[34]
  i1510.resolutionScalingFixedDPIFactor = i1511[35]
  i1510.streamingMipmapsMaxFileIORequests = i1511[36]
  i1510.currentQualityLevel = i1511[37]
  return i1510
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i1518 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i1519 = data
  request.r(i1519[0], i1519[1], 0, i1518, 'm_ObjectArgument')
  i1518.m_ObjectArgumentAssemblyTypeName = i1519[2]
  i1518.m_IntArgument = i1519[3]
  i1518.m_FloatArgument = i1519[4]
  i1518.m_StringArgument = i1519[5]
  i1518.m_BoolArgument = !!i1519[6]
  return i1518
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10,"graphicsFormat":11,"sRGBTexture":12,"desiredColorSpace":13,"wrapU":14,"wrapV":15},"Luna.Unity.DTO.UnityEngine.Components.Transform":{"position":0,"scale":3,"rotation":6},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystem":{"main":0,"colorBySpeed":1,"colorOverLifetime":2,"emission":3,"rotationBySpeed":4,"rotationOverLifetime":5,"shape":6,"sizeBySpeed":7,"sizeOverLifetime":8,"textureSheetAnimation":9,"velocityOverLifetime":10,"noise":11,"inheritVelocity":12,"forceOverLifetime":13,"limitVelocityOverLifetime":14,"useAutoRandomSeed":15,"randomSeed":16},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule":{"duration":0,"loop":1,"prewarm":2,"startDelay":3,"startLifetime":4,"startSpeed":5,"startSize3D":6,"startSizeX":7,"startSizeY":8,"startSizeZ":9,"startRotation3D":10,"startRotationX":11,"startRotationY":12,"startRotationZ":13,"startColor":14,"gravityModifier":15,"simulationSpace":16,"customSimulationSpace":17,"simulationSpeed":19,"useUnscaledTime":20,"scalingMode":21,"playOnAwake":22,"maxParticles":23,"emitterVelocityMode":24,"stopAction":25},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve":{"mode":0,"curveMin":1,"curveMax":2,"curveMultiplier":3,"constantMin":4,"constantMax":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient":{"mode":0,"gradientMin":1,"gradientMax":2,"colorMin":3,"colorMax":7},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient":{"mode":0,"colorKeys":1,"alphaKeys":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule":{"enabled":0,"color":1,"range":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey":{"color":0,"time":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey":{"alpha":0,"time":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule":{"enabled":0,"color":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule":{"enabled":0,"rateOverTime":1,"rateOverDistance":2,"bursts":3},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst":{"count":0,"cycleCount":1,"minCount":2,"maxCount":3,"repeatInterval":4,"time":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule":{"enabled":0,"shapeType":1,"randomDirectionAmount":2,"sphericalDirectionAmount":3,"randomPositionAmount":4,"alignToDirection":5,"radius":6,"radiusMode":7,"radiusSpread":8,"radiusSpeed":9,"radiusThickness":10,"angle":11,"length":12,"boxThickness":13,"meshShapeType":16,"mesh":17,"meshRenderer":19,"skinnedMeshRenderer":21,"useMeshMaterialIndex":23,"meshMaterialIndex":24,"useMeshColors":25,"normalOffset":26,"arc":27,"arcMode":28,"arcSpread":29,"arcSpeed":30,"donutRadius":31,"position":32,"rotation":35,"scale":38},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule":{"enabled":0,"mode":1,"animation":2,"numTilesX":3,"numTilesY":4,"useRandomRow":5,"frameOverTime":6,"startFrame":7,"cycleCount":8,"rowIndex":9,"flipU":10,"flipV":11,"spriteCount":12,"sprites":13},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"radial":4,"speedModifier":5,"space":6,"orbitalX":7,"orbitalY":8,"orbitalZ":9,"orbitalOffsetX":10,"orbitalOffsetY":11,"orbitalOffsetZ":12},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule":{"enabled":0,"separateAxes":1,"strengthX":2,"strengthY":3,"strengthZ":4,"frequency":5,"damping":6,"octaveCount":7,"octaveMultiplier":8,"octaveScale":9,"quality":10,"scrollSpeed":11,"scrollSpeedMultiplier":12,"remapEnabled":13,"remapX":14,"remapY":15,"remapZ":16,"positionAmount":17,"rotationAmount":18,"sizeAmount":19},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule":{"enabled":0,"mode":1,"curve":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"space":4,"randomized":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule":{"enabled":0,"limit":1,"limitX":2,"limitY":3,"limitZ":4,"dampen":5,"separateAxes":6,"space":7,"drag":8,"multiplyDragByParticleSize":9,"multiplyDragByParticleVelocity":10},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer":{"mesh":0,"meshCount":2,"activeVertexStreamsCount":3,"alignment":4,"renderMode":5,"sortMode":6,"lengthScale":7,"velocityScale":8,"cameraVelocityScale":9,"normalDirection":10,"sortingFudge":11,"minParticleSize":12,"maxParticleSize":13,"pivot":14,"trailMaterial":17,"applyActiveColorSpace":19,"enabled":20,"sharedMaterial":21,"sharedMaterials":23,"receiveShadows":24,"shadowCastingMode":25,"sortingLayerID":26,"sortingOrder":27,"lightmapIndex":28,"lightmapSceneIndex":29,"lightmapScaleOffset":30,"lightProbeUsage":34,"reflectionProbeUsage":35},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"aspect":0,"orthographic":1,"orthographicSize":2,"backgroundColor":3,"nearClipPlane":7,"farClipPlane":8,"fieldOfView":9,"depth":10,"clearFlags":11,"cullingMask":12,"rect":13,"targetTexture":14,"usePhysicalProperties":16,"focalLength":17,"sensorSize":18,"lensShift":20,"gateFit":22,"commandBufferCount":23,"cameraType":24,"enabled":25},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"planeDistance":0,"referencePixelsPerUnit":1,"isFallbackOverlay":2,"renderMode":3,"renderOrder":4,"sortingLayerName":5,"sortingOrder":6,"scaleFactor":7,"worldCamera":8,"overrideSorting":10,"pixelPerfect":11,"targetDisplay":12,"overridePixelPerfect":13,"enabled":14},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer":{"color":0,"sprite":4,"flipX":6,"flipY":7,"drawMode":8,"size":9,"tileMode":11,"adaptiveModeThreshold":12,"maskInteraction":13,"spriteSortPoint":14,"enabled":15,"sharedMaterial":16,"sharedMaterials":18,"receiveShadows":19,"shadowCastingMode":20,"sortingLayerID":21,"sortingOrder":22,"lightmapIndex":23,"lightmapSceneIndex":24,"lightmapScaleOffset":25,"lightProbeUsage":29,"reflectionProbeUsage":30},"Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D":{"usedByComposite":0,"autoTiling":1,"size":2,"edgeRadius":4,"enabled":5,"isTrigger":6,"usedByEffector":7,"density":8,"offset":9,"material":11},"Luna.Unity.DTO.UnityEngine.Components.SortingGroup":{"sortingLayerIndex":0,"sortingOrder":1,"sortingLayerName":2,"enabled":3},"Luna.Unity.DTO.UnityEngine.Components.Rigidbody2D":{"bodyType":0,"material":1,"simulated":3,"useAutoMass":4,"mass":5,"drag":6,"angularDrag":7,"gravityScale":8,"collisionDetectionMode":9,"sleepMode":10,"constraints":11},"Luna.Unity.DTO.UnityEngine.Components.HingeJoint2D":{"useLimits":0,"limits":1,"useMotor":2,"motor":3,"anchor":4,"connectedAnchor":6,"autoConfigureConnectedAnchor":8,"connectedBody":9,"breakForce":11,"breakTorque":12,"enableCollision":13,"enabled":14},"Luna.Unity.DTO.UnityEngine.Components.TargetJoint2D":{"autoConfigureTarget":0,"target":1,"anchor":3,"maxForce":5,"dampingRatio":6,"frequency":7,"connectedBody":8,"breakForce":10,"breakTorque":11,"enableCollision":12,"enabled":13},"Luna.Unity.DTO.UnityEngine.Components.CircleCollider2D":{"radius":0,"enabled":1,"isTrigger":2,"usedByEffector":3,"density":4,"offset":5,"material":7},"Luna.Unity.DTO.UnityEngine.Components.AudioSource":{"clip":0,"outputAudioMixerGroup":2,"playOnAwake":4,"loop":5,"time":6,"volume":7,"pitch":8,"enabled":9},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"customReflection":36,"defaultReflection":38,"defaultReflectionMode":40,"defaultReflectionResolution":41,"sunLightObjectId":42,"pixelLightCount":43,"defaultReflectionHDR":44,"hasLightDataAsset":45,"hasManualGenerate":46},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2,"shadowMask":4},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"hasDepthOnlyPass":10,"isCreatedByShaderGraph":11,"disableBatching":12,"compiled":13},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"exportedForWebGl2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.AudioClip":{"name":0},"Luna.Unity.DTO.UnityEngine.Assets.Font":{"name":0,"ascent":1,"originalLineHeight":2,"fontSize":3,"characterInfo":4,"texture":5,"originalFontSize":7},"Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo":{"index":0,"advance":1,"bearing":2,"glyphWidth":3,"glyphHeight":4,"minX":5,"maxX":6,"minY":7,"maxY":8,"uvBottomLeftX":9,"uvBottomLeftY":10,"uvBottomRightX":11,"uvBottomRightY":12,"uvTopLeftX":13,"uvTopLeftY":14,"uvTopRightX":15,"uvTopRightY":16},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableStaticBatching":9,"enableDynamicBatching":10,"usePreservativeDynamicBatching":11,"lightmapEncodingQuality":12,"desiredColorSpace":13,"allTags":14},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37}}

Deserializers.requiredComponents = {"43":[44],"45":[44],"46":[44],"47":[44],"48":[44],"49":[44],"50":[51],"52":[5],"53":[54],"55":[54],"56":[54],"57":[54],"58":[54],"59":[54],"60":[21],"61":[21],"62":[21],"63":[21],"64":[21],"65":[21],"26":[21],"66":[21],"67":[21],"24":[21],"68":[21],"69":[21],"70":[21],"71":[5],"72":[73],"74":[75],"76":[75],"11":[10],"77":[17],"78":[5],"79":[80],"81":[10],"82":[14,10],"83":[73],"84":[14,10],"85":[10],"86":[10],"87":[73,10],"88":[10,14],"89":[90],"91":[90],"92":[90],"93":[10],"94":[10],"13":[11],"30":[14,10],"15":[10],"12":[11],"95":[10],"96":[10],"97":[10],"98":[10],"99":[10],"100":[10],"101":[10],"102":[10],"103":[10],"16":[14,10],"104":[10],"105":[10],"106":[10],"107":[10],"32":[14,10],"108":[10],"109":[8],"110":[8],"9":[8],"111":[8],"112":[5],"113":[5]}

Deserializers.types = ["UnityEngine.Shader","UnityEngine.Transform","UnityEngine.ParticleSystem","UnityEngine.ParticleSystemRenderer","UnityEngine.Material","UnityEngine.Camera","UnityEngine.AudioListener","UnityEngine.EventSystems.UIBehaviour","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","UnityEngine.RectTransform","UnityEngine.Canvas","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","UnityEngine.CanvasRenderer","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.RawImage","UnityEngine.SpriteRenderer","UnityEngine.Sprite","UnityEngine.BoxCollider2D","UnityEngine.Rendering.SortingGroup","UnityEngine.Rigidbody2D","UnityEngine.MonoBehaviour","MonsterController","UnityEngine.TargetJoint2D","UnityEngine.AudioClip","UnityEngine.HingeJoint2D","BonkController","UnityEngine.CircleCollider2D","UnityEngine.UI.Button","UnityEngine.UI.Image","DG.Tweening.DOTweenAnimation","UnityEngine.UI.Text","UnityEngine.Font","GameController","TargetController","UnityEngine.GameObject","LunaController","UnityEngine.Texture2D","AudioController","UnityEngine.AudioSource","VFXController","DG.Tweening.Core.DOTweenSettings","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.SkinnedMeshRenderer","UnityEngine.FlareLayer","UnityEngine.CharacterJoint","UnityEngine.Rigidbody","UnityEngine.ConfigurableJoint","UnityEngine.ConstantForce","UnityEngine.FixedJoint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.CompositeCollider2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.MeshRenderer","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","UnityEngine.U2D.Animation.SpriteSkin","UnityEngine.U2D.PixelPerfectCamera","UnityEngine.U2D.SpriteShapeController","UnityEngine.U2D.SpriteShapeRenderer","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text","TMPro.TextContainer","TMPro.TextMeshPro","TMPro.TextMeshProUGUI","Unity.VisualScripting.SceneVariables","Unity.VisualScripting.Variables","Unity.VisualScripting.ScriptMachine","Unity.VisualScripting.StateMachine","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.Mask","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RectMask2D","UnityEngine.UI.ScrollRect","UnityEngine.UI.Scrollbar","UnityEngine.UI.Slider","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster"]

Deserializers.unityVersion = "6000.0.78f1";

Deserializers.productName = "SSP_Luna-SSP_V01";

Deserializers.lunaInitializationTime = "08/12/2026 02:23:20";

Deserializers.lunaDaysRunning = "0.1";

Deserializers.lunaVersion = "7.2.0";

Deserializers.lunaSHA = "ea08d29afe2968efcb8d91d5624f033c6485cc68";

Deserializers.creativeName = "RSNM_V01_YenTTH_TamNTM";

Deserializers.lunaAppID = "40364";

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

Deserializers.runtimeAnalysisExcludedClassesCount = "1795";

Deserializers.runtimeAnalysisExcludedMethodsCount = "4180";

Deserializers.runtimeAnalysisExcludedModules = "physics3d, mecanim-wasm";

Deserializers.isRuntimeAnalysisEnabledForShaders = "True";

Deserializers.isRealtimeShadowsEnabled = "False";

Deserializers.isLunaCompilerV2Used = "False";

Deserializers.companyName = "DefaultCompany";

Deserializers.buildPlatform = "Android";

Deserializers.applicationIdentifier = "com.DefaultCompany.SSP_LunaSSP_V01";

Deserializers.disableAntiAliasing = true;

Deserializers.graphicsConstraint = 24;

Deserializers.linearColorSpace = true;

Deserializers.buildID = "818929c6-8a34-47ab-a6c1-84c816260796";

Deserializers.runtimeInitializeOnLoadInfos = [[["Unity","PerformanceTesting","PerformanceTest","ResetStaticsOnLoad"],["UnityEngine","U2D","Animation","GpuDeformationSystem","CreateFallbackBuffer"],["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"],["UnityEngine","AI","NavMesh","ClearPreUpdateListeners"]],[["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"]],[],[["UnityEngine","Timeline","AnimatorBindingCache","ResetStaticsOnLoad"],["UnityEngine","Timeline","TrackAsset","ResetStaticsOnLoad"],["UnityEngine","Timeline","AnimationPreviewUtilities","ResetStaticsOnLoad"],["Unity","PerformanceTesting","Data","RunSettings","ResetStaticsOnLoad"],["Unity","PerformanceTesting","PlayerCallbacks","ResetStaticsOnLoad"]]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

