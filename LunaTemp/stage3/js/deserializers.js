var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i1020 = root || request.c( 'UnityEngine.JointSpring' )
  var i1021 = data
  i1020.spring = i1021[0]
  i1020.damper = i1021[1]
  i1020.targetPosition = i1021[2]
  return i1020
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i1022 = root || request.c( 'UnityEngine.JointMotor' )
  var i1023 = data
  i1022.m_TargetVelocity = i1023[0]
  i1022.m_Force = i1023[1]
  i1022.m_FreeSpin = i1023[2]
  return i1022
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i1024 = root || request.c( 'UnityEngine.JointLimits' )
  var i1025 = data
  i1024.m_Min = i1025[0]
  i1024.m_Max = i1025[1]
  i1024.m_Bounciness = i1025[2]
  i1024.m_BounceMinVelocity = i1025[3]
  i1024.m_ContactDistance = i1025[4]
  i1024.minBounce = i1025[5]
  i1024.maxBounce = i1025[6]
  return i1024
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i1026 = root || request.c( 'UnityEngine.JointDrive' )
  var i1027 = data
  i1026.m_PositionSpring = i1027[0]
  i1026.m_PositionDamper = i1027[1]
  i1026.m_MaximumForce = i1027[2]
  i1026.m_UseAcceleration = i1027[3]
  return i1026
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i1028 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i1029 = data
  i1028.m_Spring = i1029[0]
  i1028.m_Damper = i1029[1]
  return i1028
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i1030 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i1031 = data
  i1030.m_Limit = i1031[0]
  i1030.m_Bounciness = i1031[1]
  i1030.m_ContactDistance = i1031[2]
  return i1030
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i1032 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i1033 = data
  i1032.m_ExtremumSlip = i1033[0]
  i1032.m_ExtremumValue = i1033[1]
  i1032.m_AsymptoteSlip = i1033[2]
  i1032.m_AsymptoteValue = i1033[3]
  i1032.m_Stiffness = i1033[4]
  return i1032
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i1034 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i1035 = data
  i1034.m_LowerAngle = i1035[0]
  i1034.m_UpperAngle = i1035[1]
  return i1034
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i1036 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i1037 = data
  i1036.m_MotorSpeed = i1037[0]
  i1036.m_MaximumMotorTorque = i1037[1]
  return i1036
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i1038 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i1039 = data
  i1038.m_DampingRatio = i1039[0]
  i1038.m_Frequency = i1039[1]
  i1038.m_Angle = i1039[2]
  return i1038
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i1040 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i1041 = data
  i1040.m_LowerTranslation = i1041[0]
  i1040.m_UpperTranslation = i1041[1]
  return i1040
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i1042 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i1043 = data
  i1042.name = i1043[0]
  i1042.width = i1043[1]
  i1042.height = i1043[2]
  i1042.mipmapCount = i1043[3]
  i1042.anisoLevel = i1043[4]
  i1042.filterMode = i1043[5]
  i1042.hdr = !!i1043[6]
  i1042.format = i1043[7]
  i1042.wrapMode = i1043[8]
  i1042.alphaIsTransparency = !!i1043[9]
  i1042.alphaSource = i1043[10]
  i1042.graphicsFormat = i1043[11]
  i1042.sRGBTexture = !!i1043[12]
  i1042.desiredColorSpace = i1043[13]
  i1042.wrapU = i1043[14]
  i1042.wrapV = i1043[15]
  return i1042
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i1044 = root || new pc.UnityMaterial()
  var i1045 = data
  i1044.name = i1045[0]
  request.r(i1045[1], i1045[2], 0, i1044, 'shader')
  i1044.renderQueue = i1045[3]
  i1044.enableInstancing = !!i1045[4]
  var i1047 = i1045[5]
  var i1046 = []
  for(var i = 0; i < i1047.length; i += 1) {
    i1046.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i1047[i + 0]) );
  }
  i1044.floatParameters = i1046
  var i1049 = i1045[6]
  var i1048 = []
  for(var i = 0; i < i1049.length; i += 1) {
    i1048.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i1049[i + 0]) );
  }
  i1044.colorParameters = i1048
  var i1051 = i1045[7]
  var i1050 = []
  for(var i = 0; i < i1051.length; i += 1) {
    i1050.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i1051[i + 0]) );
  }
  i1044.vectorParameters = i1050
  var i1053 = i1045[8]
  var i1052 = []
  for(var i = 0; i < i1053.length; i += 1) {
    i1052.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i1053[i + 0]) );
  }
  i1044.textureParameters = i1052
  var i1055 = i1045[9]
  var i1054 = []
  for(var i = 0; i < i1055.length; i += 1) {
    i1054.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i1055[i + 0]) );
  }
  i1044.materialFlags = i1054
  return i1044
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i1058 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i1059 = data
  i1058.name = i1059[0]
  i1058.value = i1059[1]
  return i1058
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i1062 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i1063 = data
  i1062.name = i1063[0]
  i1062.value = new pc.Color(i1063[1], i1063[2], i1063[3], i1063[4])
  return i1062
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i1066 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i1067 = data
  i1066.name = i1067[0]
  i1066.value = new pc.Vec4( i1067[1], i1067[2], i1067[3], i1067[4] )
  return i1066
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i1070 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i1071 = data
  i1070.name = i1071[0]
  request.r(i1071[1], i1071[2], 0, i1070, 'value')
  return i1070
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i1074 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i1075 = data
  i1074.name = i1075[0]
  i1074.enabled = !!i1075[1]
  return i1074
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i1076 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i1077 = data
  i1076.position = new pc.Vec3( i1077[0], i1077[1], i1077[2] )
  i1076.scale = new pc.Vec3( i1077[3], i1077[4], i1077[5] )
  i1076.rotation = new pc.Quat(i1077[6], i1077[7], i1077[8], i1077[9])
  return i1076
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer"] = function (request, data, root) {
  var i1078 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer' )
  var i1079 = data
  i1078.color = new pc.Color(i1079[0], i1079[1], i1079[2], i1079[3])
  request.r(i1079[4], i1079[5], 0, i1078, 'sprite')
  i1078.flipX = !!i1079[6]
  i1078.flipY = !!i1079[7]
  i1078.drawMode = i1079[8]
  i1078.size = new pc.Vec2( i1079[9], i1079[10] )
  i1078.tileMode = i1079[11]
  i1078.adaptiveModeThreshold = i1079[12]
  i1078.maskInteraction = i1079[13]
  i1078.spriteSortPoint = i1079[14]
  i1078.enabled = !!i1079[15]
  request.r(i1079[16], i1079[17], 0, i1078, 'sharedMaterial')
  var i1081 = i1079[18]
  var i1080 = []
  for(var i = 0; i < i1081.length; i += 2) {
  request.r(i1081[i + 0], i1081[i + 1], 2, i1080, '')
  }
  i1078.sharedMaterials = i1080
  i1078.receiveShadows = !!i1079[19]
  i1078.shadowCastingMode = i1079[20]
  i1078.sortingLayerID = i1079[21]
  i1078.sortingOrder = i1079[22]
  i1078.lightmapIndex = i1079[23]
  i1078.lightmapSceneIndex = i1079[24]
  i1078.lightmapScaleOffset = new pc.Vec4( i1079[25], i1079[26], i1079[27], i1079[28] )
  i1078.lightProbeUsage = i1079[29]
  i1078.reflectionProbeUsage = i1079[30]
  return i1078
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CircleCollider2D"] = function (request, data, root) {
  var i1084 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CircleCollider2D' )
  var i1085 = data
  i1084.radius = i1085[0]
  i1084.enabled = !!i1085[1]
  i1084.isTrigger = !!i1085[2]
  i1084.usedByEffector = !!i1085[3]
  i1084.density = i1085[4]
  i1084.offset = new pc.Vec2( i1085[5], i1085[6] )
  request.r(i1085[7], i1085[8], 0, i1084, 'material')
  return i1084
}

Deserializers["BulletController"] = function (request, data, root) {
  var i1086 = root || request.c( 'BulletController' )
  var i1087 = data
  i1086.speed = i1087[0]
  i1086.damage = i1087[1]
  request.r(i1087[2], i1087[3], 0, i1086, 'hitMonsterSound')
  request.r(i1087[4], i1087[5], 0, i1086, 'hitSound')
  i1086.lifeTime = i1087[6]
  i1086.hit = !!i1087[7]
  return i1086
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i1088 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i1089 = data
  i1088.name = i1089[0]
  i1088.tagId = i1089[1]
  i1088.enabled = !!i1089[2]
  i1088.isStatic = !!i1089[3]
  i1088.layer = i1089[4]
  return i1088
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SortingGroup"] = function (request, data, root) {
  var i1090 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SortingGroup' )
  var i1091 = data
  i1090.sortingLayerIndex = i1091[0]
  i1090.sortingOrder = i1091[1]
  i1090.sortingLayerName = i1091[2]
  i1090.enabled = !!i1091[3]
  return i1090
}

Deserializers["MonsterController"] = function (request, data, root) {
  var i1092 = root || request.c( 'MonsterController' )
  var i1093 = data
  i1092.maxHP = i1093[0]
  i1092.currentHP = i1093[1]
  var i1095 = i1093[2]
  var i1094 = new (System.Collections.Generic.List$1(Bridge.ns('Piece')))
  for(var i = 0; i < i1095.length; i += 1) {
    i1094.add(request.d('Piece', i1095[i + 0]));
  }
  i1092.pieces = i1094
  request.r(i1093[3], i1093[4], 0, i1092, 'deadSFX')
  i1092.maxForce = new pc.Vec2( i1093[5], i1093[6] )
  i1092.minForce = new pc.Vec2( i1093[7], i1093[8] )
  request.r(i1093[9], i1093[10], 0, i1092, 'balance')
  i1092.isDead = !!i1093[11]
  request.r(i1093[12], i1093[13], 0, i1092, 'trigger')
  request.r(i1093[14], i1093[15], 0, i1092, 'groundCheck')
  i1092.speed = i1093[16]
  request.r(i1093[17], i1093[18], 0, i1092, 'body')
  request.r(i1093[19], i1093[20], 0, i1092, 'leftHand')
  request.r(i1093[21], i1093[22], 0, i1092, 'rightHand')
  request.r(i1093[23], i1093[24], 0, i1092, 'leftLeg')
  request.r(i1093[25], i1093[26], 0, i1092, 'rightLeg')
  return i1092
}

Deserializers["Piece"] = function (request, data, root) {
  var i1098 = root || request.c( 'Piece' )
  var i1099 = data
  request.r(i1099[0], i1099[1], 0, i1098, 'Joint')
  request.r(i1099[2], i1099[3], 0, i1098, 'Rb')
  return i1098
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Rigidbody2D"] = function (request, data, root) {
  var i1100 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Rigidbody2D' )
  var i1101 = data
  i1100.bodyType = i1101[0]
  request.r(i1101[1], i1101[2], 0, i1100, 'material')
  i1100.simulated = !!i1101[3]
  i1100.useAutoMass = !!i1101[4]
  i1100.mass = i1101[5]
  i1100.drag = i1101[6]
  i1100.angularDrag = i1101[7]
  i1100.gravityScale = i1101[8]
  i1100.collisionDetectionMode = i1101[9]
  i1100.sleepMode = i1101[10]
  i1100.constraints = i1101[11]
  return i1100
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.FixedJoint2D"] = function (request, data, root) {
  var i1102 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.FixedJoint2D' )
  var i1103 = data
  i1102.dampingRatio = i1103[0]
  i1102.frequency = i1103[1]
  i1102.anchor = new pc.Vec2( i1103[2], i1103[3] )
  i1102.connectedAnchor = new pc.Vec2( i1103[4], i1103[5] )
  i1102.autoConfigureConnectedAnchor = !!i1103[6]
  request.r(i1103[7], i1103[8], 0, i1102, 'connectedBody')
  i1102.breakForce = i1103[9]
  i1102.breakTorque = i1103[10]
  i1102.enableCollision = !!i1103[11]
  i1102.enabled = !!i1103[12]
  return i1102
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D"] = function (request, data, root) {
  var i1104 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D' )
  var i1105 = data
  i1104.usedByComposite = !!i1105[0]
  i1104.autoTiling = !!i1105[1]
  i1104.size = new pc.Vec2( i1105[2], i1105[3] )
  i1104.edgeRadius = i1105[4]
  i1104.enabled = !!i1105[5]
  i1104.isTrigger = !!i1105[6]
  i1104.usedByEffector = !!i1105[7]
  i1104.density = i1105[8]
  i1104.offset = new pc.Vec2( i1105[9], i1105[10] )
  request.r(i1105[11], i1105[12], 0, i1104, 'material')
  return i1104
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.HingeJoint2D"] = function (request, data, root) {
  var i1106 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.HingeJoint2D' )
  var i1107 = data
  i1106.useLimits = !!i1107[0]
  i1106.limits = request.d('UnityEngine.JointAngleLimits2D', i1107[1], i1106.limits)
  i1106.useMotor = !!i1107[2]
  i1106.motor = request.d('UnityEngine.JointMotor2D', i1107[3], i1106.motor)
  i1106.anchor = new pc.Vec2( i1107[4], i1107[5] )
  i1106.connectedAnchor = new pc.Vec2( i1107[6], i1107[7] )
  i1106.autoConfigureConnectedAnchor = !!i1107[8]
  request.r(i1107[9], i1107[10], 0, i1106, 'connectedBody')
  i1106.breakForce = i1107[11]
  i1106.breakTorque = i1107[12]
  i1106.enableCollision = !!i1107[13]
  i1106.enabled = !!i1107[14]
  return i1106
}

Deserializers["BalanceController"] = function (request, data, root) {
  var i1108 = root || request.c( 'BalanceController' )
  var i1109 = data
  i1108.targetRotation = i1109[0]
  i1108.force = i1109[1]
  return i1108
}

Deserializers["MonsterTrigger"] = function (request, data, root) {
  var i1110 = root || request.c( 'MonsterTrigger' )
  var i1111 = data
  request.r(i1111[0], i1111[1], 0, i1110, 'player')
  return i1110
}

Deserializers["GroundCheck"] = function (request, data, root) {
  var i1112 = root || request.c( 'GroundCheck' )
  var i1113 = data
  i1112.OnGround = !!i1113[0]
  return i1112
}

Deserializers["PlayerController"] = function (request, data, root) {
  var i1114 = root || request.c( 'PlayerController' )
  var i1115 = data
  i1114.IsZombie = !!i1115[0]
  i1114.OnDead = request.d('System.Action', i1115[1], i1114.OnDead)
  var i1117 = i1115[2]
  var i1116 = new (System.Collections.Generic.List$1(Bridge.ns('BodyRenderer')))
  for(var i = 0; i < i1117.length; i += 1) {
    i1116.add(request.d('BodyRenderer', i1117[i + 0]));
  }
  i1114.bodyRenderers = i1116
  request.r(i1115[3], i1115[4], 0, i1114, 'biteSound')
  request.r(i1115[5], i1115[6], 0, i1114, 'zombieSound')
  request.r(i1115[7], i1115[8], 0, i1114, 'body')
  return i1114
}

Deserializers["System.Action"] = function (request, data, root) {
  var i1118 = root || request.c( 'System.Action' )
  var i1119 = data
  return i1118
}

Deserializers["BodyRenderer"] = function (request, data, root) {
  var i1122 = root || request.c( 'BodyRenderer' )
  var i1123 = data
  request.r(i1123[0], i1123[1], 0, i1122, 'Renderer')
  request.r(i1123[2], i1123[3], 0, i1122, 'ZSprite')
  return i1122
}

Deserializers["PlayerAttack"] = function (request, data, root) {
  var i1124 = root || request.c( 'PlayerAttack' )
  var i1125 = data
  i1124.ShootCD = i1125[0]
  request.r(i1125[1], i1125[2], 0, i1124, 'left')
  request.r(i1125[3], i1125[4], 0, i1124, 'right')
  request.r(i1125[5], i1125[6], 0, i1124, 'gun')
  request.r(i1125[7], i1125[8], 0, i1124, 'bulletPrefab')
  i1124.onCD = !!i1125[9]
  request.r(i1125[10], i1125[11], 0, i1124, 'shootSound')
  i1124.timeMotor = i1125[12]
  request.r(i1125[13], i1125[14], 0, i1124, 'playerTrigger')
  request.r(i1125[15], i1125[16], 0, i1124, 'player')
  return i1124
}

Deserializers["BodyPiece"] = function (request, data, root) {
  var i1126 = root || request.c( 'BodyPiece' )
  var i1127 = data
  request.r(i1127[0], i1127[1], 0, i1126, 'player')
  return i1126
}

Deserializers["PlayerTrigger"] = function (request, data, root) {
  var i1128 = root || request.c( 'PlayerTrigger' )
  var i1129 = data
  request.r(i1129[0], i1129[1], 0, i1128, 'monster')
  return i1128
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i1130 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i1131 = data
  i1130.name = i1131[0]
  i1130.index = i1131[1]
  i1130.startup = !!i1131[2]
  return i1130
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i1132 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i1133 = data
  i1132.aspect = i1133[0]
  i1132.orthographic = !!i1133[1]
  i1132.orthographicSize = i1133[2]
  i1132.backgroundColor = new pc.Color(i1133[3], i1133[4], i1133[5], i1133[6])
  i1132.nearClipPlane = i1133[7]
  i1132.farClipPlane = i1133[8]
  i1132.fieldOfView = i1133[9]
  i1132.depth = i1133[10]
  i1132.clearFlags = i1133[11]
  i1132.cullingMask = i1133[12]
  i1132.rect = i1133[13]
  request.r(i1133[14], i1133[15], 0, i1132, 'targetTexture')
  i1132.usePhysicalProperties = !!i1133[16]
  i1132.focalLength = i1133[17]
  i1132.sensorSize = new pc.Vec2( i1133[18], i1133[19] )
  i1132.lensShift = new pc.Vec2( i1133[20], i1133[21] )
  i1132.gateFit = i1133[22]
  i1132.commandBufferCount = i1133[23]
  i1132.cameraType = i1133[24]
  i1132.enabled = !!i1133[25]
  return i1132
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i1134 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i1135 = data
  request.r(i1135[0], i1135[1], 0, i1134, 'm_FirstSelected')
  i1134.m_sendNavigationEvents = !!i1135[2]
  i1134.m_DragThreshold = i1135[3]
  return i1134
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i1136 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i1137 = data
  i1136.m_HorizontalAxis = i1137[0]
  i1136.m_VerticalAxis = i1137[1]
  i1136.m_SubmitButton = i1137[2]
  i1136.m_CancelButton = i1137[3]
  i1136.m_InputActionsPerSecond = i1137[4]
  i1136.m_RepeatDelay = i1137[5]
  i1136.m_ForceModuleActive = !!i1137[6]
  i1136.m_SendPointerHoverToParent = !!i1137[7]
  return i1136
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i1138 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i1139 = data
  i1138.pivot = new pc.Vec2( i1139[0], i1139[1] )
  i1138.anchorMin = new pc.Vec2( i1139[2], i1139[3] )
  i1138.anchorMax = new pc.Vec2( i1139[4], i1139[5] )
  i1138.sizeDelta = new pc.Vec2( i1139[6], i1139[7] )
  i1138.anchoredPosition3D = new pc.Vec3( i1139[8], i1139[9], i1139[10] )
  i1138.rotation = new pc.Quat(i1139[11], i1139[12], i1139[13], i1139[14])
  i1138.scale = new pc.Vec3( i1139[15], i1139[16], i1139[17] )
  return i1138
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i1140 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i1141 = data
  i1140.planeDistance = i1141[0]
  i1140.referencePixelsPerUnit = i1141[1]
  i1140.isFallbackOverlay = !!i1141[2]
  i1140.renderMode = i1141[3]
  i1140.renderOrder = i1141[4]
  i1140.sortingLayerName = i1141[5]
  i1140.sortingOrder = i1141[6]
  i1140.scaleFactor = i1141[7]
  request.r(i1141[8], i1141[9], 0, i1140, 'worldCamera')
  i1140.overrideSorting = !!i1141[10]
  i1140.pixelPerfect = !!i1141[11]
  i1140.targetDisplay = i1141[12]
  i1140.overridePixelPerfect = !!i1141[13]
  i1140.enabled = !!i1141[14]
  return i1140
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i1142 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i1143 = data
  i1142.m_UiScaleMode = i1143[0]
  i1142.m_ReferencePixelsPerUnit = i1143[1]
  i1142.m_ScaleFactor = i1143[2]
  i1142.m_ReferenceResolution = new pc.Vec2( i1143[3], i1143[4] )
  i1142.m_ScreenMatchMode = i1143[5]
  i1142.m_MatchWidthOrHeight = i1143[6]
  i1142.m_PhysicalUnit = i1143[7]
  i1142.m_FallbackScreenDPI = i1143[8]
  i1142.m_DefaultSpriteDPI = i1143[9]
  i1142.m_DynamicPixelsPerUnit = i1143[10]
  i1142.m_PresetInfoIsWorld = !!i1143[11]
  return i1142
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i1144 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i1145 = data
  i1144.m_IgnoreReversedGraphics = !!i1145[0]
  i1144.m_BlockingObjects = i1145[1]
  i1144.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i1145[2] )
  return i1144
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i1146 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i1147 = data
  i1146.cullTransparentMesh = !!i1147[0]
  return i1146
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i1148 = root || request.c( 'UnityEngine.UI.Image' )
  var i1149 = data
  request.r(i1149[0], i1149[1], 0, i1148, 'm_Sprite')
  i1148.m_Type = i1149[2]
  i1148.m_PreserveAspect = !!i1149[3]
  i1148.m_FillCenter = !!i1149[4]
  i1148.m_FillMethod = i1149[5]
  i1148.m_FillAmount = i1149[6]
  i1148.m_FillClockwise = !!i1149[7]
  i1148.m_FillOrigin = i1149[8]
  i1148.m_UseSpriteMesh = !!i1149[9]
  i1148.m_PixelsPerUnitMultiplier = i1149[10]
  request.r(i1149[11], i1149[12], 0, i1148, 'm_Material')
  i1148.m_Maskable = !!i1149[13]
  i1148.m_Color = new pc.Color(i1149[14], i1149[15], i1149[16], i1149[17])
  i1148.m_RaycastTarget = !!i1149[18]
  i1148.m_RaycastPadding = new pc.Vec4( i1149[19], i1149[20], i1149[21], i1149[22] )
  return i1148
}

Deserializers["UnityEngine.UI.Text"] = function (request, data, root) {
  var i1150 = root || request.c( 'UnityEngine.UI.Text' )
  var i1151 = data
  i1150.m_FontData = request.d('UnityEngine.UI.FontData', i1151[0], i1150.m_FontData)
  i1150.m_Text = i1151[1]
  request.r(i1151[2], i1151[3], 0, i1150, 'm_Material')
  i1150.m_Maskable = !!i1151[4]
  i1150.m_Color = new pc.Color(i1151[5], i1151[6], i1151[7], i1151[8])
  i1150.m_RaycastTarget = !!i1151[9]
  i1150.m_RaycastPadding = new pc.Vec4( i1151[10], i1151[11], i1151[12], i1151[13] )
  return i1150
}

Deserializers["UnityEngine.UI.FontData"] = function (request, data, root) {
  var i1152 = root || request.c( 'UnityEngine.UI.FontData' )
  var i1153 = data
  request.r(i1153[0], i1153[1], 0, i1152, 'm_Font')
  i1152.m_FontSize = i1153[2]
  i1152.m_FontStyle = i1153[3]
  i1152.m_BestFit = !!i1153[4]
  i1152.m_MinSize = i1153[5]
  i1152.m_MaxSize = i1153[6]
  i1152.m_Alignment = i1153[7]
  i1152.m_AlignByGeometry = !!i1153[8]
  i1152.m_RichText = !!i1153[9]
  i1152.m_HorizontalOverflow = i1153[10]
  i1152.m_VerticalOverflow = i1153[11]
  i1152.m_LineSpacing = i1153[12]
  return i1152
}

Deserializers["DG.Tweening.DOTweenAnimation"] = function (request, data, root) {
  var i1154 = root || request.c( 'DG.Tweening.DOTweenAnimation' )
  var i1155 = data
  i1154.targetIsSelf = !!i1155[0]
  request.r(i1155[1], i1155[2], 0, i1154, 'targetGO')
  i1154.tweenTargetIsTargetGO = !!i1155[3]
  i1154.delay = i1155[4]
  i1154.duration = i1155[5]
  i1154.easeType = i1155[6]
  i1154.easeCurve = new pc.AnimationCurve( { keys_flow: i1155[7] } )
  i1154.loopType = i1155[8]
  i1154.loops = i1155[9]
  i1154.id = i1155[10]
  i1154.isRelative = !!i1155[11]
  i1154.isFrom = !!i1155[12]
  i1154.isIndependentUpdate = !!i1155[13]
  i1154.autoKill = !!i1155[14]
  i1154.autoGenerate = !!i1155[15]
  i1154.isActive = !!i1155[16]
  i1154.isValid = !!i1155[17]
  request.r(i1155[18], i1155[19], 0, i1154, 'target')
  i1154.animationType = i1155[20]
  i1154.targetType = i1155[21]
  i1154.forcedTargetType = i1155[22]
  i1154.autoPlay = !!i1155[23]
  i1154.useTargetAsV3 = !!i1155[24]
  i1154.endValueFloat = i1155[25]
  i1154.endValueV3 = new pc.Vec3( i1155[26], i1155[27], i1155[28] )
  i1154.endValueV2 = new pc.Vec2( i1155[29], i1155[30] )
  i1154.endValueColor = new pc.Color(i1155[31], i1155[32], i1155[33], i1155[34])
  i1154.endValueString = i1155[35]
  i1154.endValueRect = UnityEngine.Rect.MinMaxRect(i1155[36], i1155[37], i1155[38], i1155[39])
  request.r(i1155[40], i1155[41], 0, i1154, 'endValueTransform')
  i1154.optionalBool0 = !!i1155[42]
  i1154.optionalBool1 = !!i1155[43]
  i1154.optionalFloat0 = i1155[44]
  i1154.optionalInt0 = i1155[45]
  i1154.optionalRotationMode = i1155[46]
  i1154.optionalScrambleMode = i1155[47]
  i1154.optionalShakeRandomnessMode = i1155[48]
  i1154.optionalString = i1155[49]
  i1154.updateType = i1155[50]
  i1154.isSpeedBased = !!i1155[51]
  i1154.hasOnStart = !!i1155[52]
  i1154.hasOnPlay = !!i1155[53]
  i1154.hasOnUpdate = !!i1155[54]
  i1154.hasOnStepComplete = !!i1155[55]
  i1154.hasOnComplete = !!i1155[56]
  i1154.hasOnTweenCreated = !!i1155[57]
  i1154.hasOnRewind = !!i1155[58]
  i1154.onStart = request.d('UnityEngine.Events.UnityEvent', i1155[59], i1154.onStart)
  i1154.onPlay = request.d('UnityEngine.Events.UnityEvent', i1155[60], i1154.onPlay)
  i1154.onUpdate = request.d('UnityEngine.Events.UnityEvent', i1155[61], i1154.onUpdate)
  i1154.onStepComplete = request.d('UnityEngine.Events.UnityEvent', i1155[62], i1154.onStepComplete)
  i1154.onComplete = request.d('UnityEngine.Events.UnityEvent', i1155[63], i1154.onComplete)
  i1154.onTweenCreated = request.d('UnityEngine.Events.UnityEvent', i1155[64], i1154.onTweenCreated)
  i1154.onRewind = request.d('UnityEngine.Events.UnityEvent', i1155[65], i1154.onRewind)
  return i1154
}

Deserializers["UnityEngine.Events.UnityEvent"] = function (request, data, root) {
  var i1156 = root || request.c( 'UnityEngine.Events.UnityEvent' )
  var i1157 = data
  i1156.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i1157[0], i1156.m_PersistentCalls)
  return i1156
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i1158 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i1159 = data
  var i1161 = i1159[0]
  var i1160 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i1161.length; i += 1) {
    i1160.add(request.d('UnityEngine.Events.PersistentCall', i1161[i + 0]));
  }
  i1158.m_Calls = i1160
  return i1158
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i1164 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i1165 = data
  request.r(i1165[0], i1165[1], 0, i1164, 'm_Target')
  i1164.m_TargetAssemblyTypeName = i1165[2]
  i1164.m_MethodName = i1165[3]
  i1164.m_Mode = i1165[4]
  i1164.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i1165[5], i1164.m_Arguments)
  i1164.m_CallState = i1165[6]
  return i1164
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i1166 = root || request.c( 'UnityEngine.UI.Button' )
  var i1167 = data
  i1166.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i1167[0], i1166.m_OnClick)
  i1166.m_Navigation = request.d('UnityEngine.UI.Navigation', i1167[1], i1166.m_Navigation)
  i1166.m_Transition = i1167[2]
  i1166.m_Colors = request.d('UnityEngine.UI.ColorBlock', i1167[3], i1166.m_Colors)
  i1166.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i1167[4], i1166.m_SpriteState)
  i1166.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i1167[5], i1166.m_AnimationTriggers)
  i1166.m_Interactable = !!i1167[6]
  request.r(i1167[7], i1167[8], 0, i1166, 'm_TargetGraphic')
  return i1166
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i1168 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i1169 = data
  i1168.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i1169[0], i1168.m_PersistentCalls)
  return i1168
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i1170 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i1171 = data
  i1170.m_Mode = i1171[0]
  i1170.m_WrapAround = !!i1171[1]
  request.r(i1171[2], i1171[3], 0, i1170, 'm_SelectOnUp')
  request.r(i1171[4], i1171[5], 0, i1170, 'm_SelectOnDown')
  request.r(i1171[6], i1171[7], 0, i1170, 'm_SelectOnLeft')
  request.r(i1171[8], i1171[9], 0, i1170, 'm_SelectOnRight')
  return i1170
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i1172 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i1173 = data
  i1172.m_NormalColor = new pc.Color(i1173[0], i1173[1], i1173[2], i1173[3])
  i1172.m_HighlightedColor = new pc.Color(i1173[4], i1173[5], i1173[6], i1173[7])
  i1172.m_PressedColor = new pc.Color(i1173[8], i1173[9], i1173[10], i1173[11])
  i1172.m_SelectedColor = new pc.Color(i1173[12], i1173[13], i1173[14], i1173[15])
  i1172.m_DisabledColor = new pc.Color(i1173[16], i1173[17], i1173[18], i1173[19])
  i1172.m_ColorMultiplier = i1173[20]
  i1172.m_FadeDuration = i1173[21]
  return i1172
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i1174 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i1175 = data
  request.r(i1175[0], i1175[1], 0, i1174, 'm_HighlightedSprite')
  request.r(i1175[2], i1175[3], 0, i1174, 'm_PressedSprite')
  request.r(i1175[4], i1175[5], 0, i1174, 'm_SelectedSprite')
  request.r(i1175[6], i1175[7], 0, i1174, 'm_DisabledSprite')
  return i1174
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i1176 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i1177 = data
  i1176.m_NormalTrigger = i1177[0]
  i1176.m_HighlightedTrigger = i1177[1]
  i1176.m_PressedTrigger = i1177[2]
  i1176.m_SelectedTrigger = i1177[3]
  i1176.m_DisabledTrigger = i1177[4]
  return i1176
}

Deserializers["UnityEngine.UI.RawImage"] = function (request, data, root) {
  var i1178 = root || request.c( 'UnityEngine.UI.RawImage' )
  var i1179 = data
  request.r(i1179[0], i1179[1], 0, i1178, 'm_Texture')
  i1178.m_UVRect = UnityEngine.Rect.MinMaxRect(i1179[2], i1179[3], i1179[4], i1179[5])
  request.r(i1179[6], i1179[7], 0, i1178, 'm_Material')
  i1178.m_Maskable = !!i1179[8]
  i1178.m_Color = new pc.Color(i1179[9], i1179[10], i1179[11], i1179[12])
  i1178.m_RaycastTarget = !!i1179[13]
  i1178.m_RaycastPadding = new pc.Vec4( i1179[14], i1179[15], i1179[16], i1179[17] )
  return i1178
}

Deserializers["UnityEngine.UI.AspectRatioFitter"] = function (request, data, root) {
  var i1180 = root || request.c( 'UnityEngine.UI.AspectRatioFitter' )
  var i1181 = data
  i1180.m_AspectMode = i1181[0]
  i1180.m_AspectRatio = i1181[1]
  return i1180
}

Deserializers["MonsterOptionController"] = function (request, data, root) {
  var i1182 = root || request.c( 'MonsterOptionController' )
  var i1183 = data
  i1182.OnSpawn = request.d('System.Action', i1183[0], i1182.OnSpawn)
  i1182.OnEmpty = request.d('System.Action', i1183[1], i1182.OnEmpty)
  i1182.OnEnd = request.d('System.Action', i1183[2], i1182.OnEnd)
  request.r(i1183[3], i1183[4], 0, i1182, 'spawnPrefab')
  i1182.numCharacter = i1183[5]
  request.r(i1183[6], i1183[7], 0, i1182, 'numText')
  request.r(i1183[8], i1183[9], 0, i1182, 'world')
  request.r(i1183[10], i1183[11], 0, i1182, 'area')
  request.r(i1183[12], i1183[13], 0, i1182, 'areaTut')
  return i1182
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.TargetJoint2D"] = function (request, data, root) {
  var i1184 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.TargetJoint2D' )
  var i1185 = data
  i1184.autoConfigureTarget = !!i1185[0]
  i1184.target = new pc.Vec2( i1185[1], i1185[2] )
  i1184.anchor = new pc.Vec2( i1185[3], i1185[4] )
  i1184.maxForce = i1185[5]
  i1184.dampingRatio = i1185[6]
  i1184.frequency = i1185[7]
  request.r(i1185[8], i1185[9], 0, i1184, 'connectedBody')
  i1184.breakForce = i1185[10]
  i1184.breakTorque = i1185[11]
  i1184.enableCollision = !!i1185[12]
  i1184.enabled = !!i1185[13]
  return i1184
}

Deserializers["HumanOptionController"] = function (request, data, root) {
  var i1186 = root || request.c( 'HumanOptionController' )
  var i1187 = data
  i1186.OnSpawn = request.d('System.Action', i1187[0], i1186.OnSpawn)
  i1186.OnEmpty = request.d('System.Action', i1187[1], i1186.OnEmpty)
  i1186.OnEnd = request.d('System.Action', i1187[2], i1186.OnEnd)
  request.r(i1187[3], i1187[4], 0, i1186, 'spawnPrefab')
  i1186.numCharacter = i1187[5]
  request.r(i1187[6], i1187[7], 0, i1186, 'numText')
  request.r(i1187[8], i1187[9], 0, i1186, 'world')
  request.r(i1187[10], i1187[11], 0, i1186, 'area')
  request.r(i1187[12], i1187[13], 0, i1186, 'areaTut')
  return i1186
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.AudioSource"] = function (request, data, root) {
  var i1188 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.AudioSource' )
  var i1189 = data
  request.r(i1189[0], i1189[1], 0, i1188, 'clip')
  request.r(i1189[2], i1189[3], 0, i1188, 'outputAudioMixerGroup')
  i1188.playOnAwake = !!i1189[4]
  i1188.loop = !!i1189[5]
  i1188.time = i1189[6]
  i1188.volume = i1189[7]
  i1188.pitch = i1189[8]
  i1188.enabled = !!i1189[9]
  return i1188
}

Deserializers["GameController"] = function (request, data, root) {
  var i1190 = root || request.c( 'GameController' )
  var i1191 = data
  i1190.maxSpawn = i1191[0]
  i1190.OnSpawn = request.d('System.Action', i1191[1], i1190.OnSpawn)
  i1190.OnEmpty = request.d('System.Action', i1191[2], i1190.OnEmpty)
  request.r(i1191[3], i1191[4], 0, i1190, 'startScene')
  request.r(i1191[5], i1191[6], 0, i1190, 'endScene')
  i1190.human = request.d('Option', i1191[7], i1190.human)
  i1190.monster = request.d('Option', i1191[8], i1190.monster)
  request.r(i1191[9], i1191[10], 0, i1190, 'clickSound')
  request.r(i1191[11], i1191[12], 0, i1190, 'optionController')
  return i1190
}

Deserializers["Option"] = function (request, data, root) {
  var i1192 = root || request.c( 'Option' )
  var i1193 = data
  request.r(i1193[0], i1193[1], 0, i1192, 'Button')
  request.r(i1193[2], i1193[3], 0, i1192, 'Controller')
  return i1192
}

Deserializers["LayoutController"] = function (request, data, root) {
  var i1194 = root || request.c( 'LayoutController' )
  var i1195 = data
  request.r(i1195[0], i1195[1], 0, i1194, 'main')
  request.r(i1195[2], i1195[3], 0, i1194, 'UI')
  return i1194
}

Deserializers["LunaController"] = function (request, data, root) {
  var i1196 = root || request.c( 'LunaController' )
  var i1197 = data
  i1196.OneClick = !!i1197[0]
  request.r(i1197[1], i1197[2], 0, i1196, 'BGTexture')
  i1196.Header = i1197[3]
  i1196.HeaderColor = new pc.Color(i1197[4], i1197[5], i1197[6], i1197[7])
  i1196.UseTime = !!i1197[8]
  i1196.TimePlay = i1197[9]
  i1196.MaxCountPlay = i1197[10]
  request.r(i1197[11], i1197[12], 0, i1196, 'clickCard')
  request.r(i1197[13], i1197[14], 0, i1196, 'BGImage')
  request.r(i1197[15], i1197[16], 0, i1196, 'headerText')
  var i1199 = i1197[17]
  var i1198 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.UI.Button')))
  for(var i = 0; i < i1199.length; i += 2) {
  request.r(i1199[i + 0], i1199[i + 1], 1, i1198, '')
  }
  i1196.CTA = i1198
  return i1196
}

Deserializers["AudioController"] = function (request, data, root) {
  var i1202 = root || request.c( 'AudioController' )
  var i1203 = data
  request.r(i1203[0], i1203[1], 0, i1202, 'BGM')
  request.r(i1203[2], i1203[3], 0, i1202, 'musicSource')
  request.r(i1203[4], i1203[5], 0, i1202, 'pool')
  return i1202
}

Deserializers["PoolController"] = function (request, data, root) {
  var i1204 = root || request.c( 'PoolController' )
  var i1205 = data
  request.r(i1205[0], i1205[1], 0, i1204, 'poolParent')
  return i1204
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i1206 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i1207 = data
  i1206.ambientIntensity = i1207[0]
  i1206.reflectionIntensity = i1207[1]
  i1206.ambientMode = i1207[2]
  i1206.ambientLight = new pc.Color(i1207[3], i1207[4], i1207[5], i1207[6])
  i1206.ambientSkyColor = new pc.Color(i1207[7], i1207[8], i1207[9], i1207[10])
  i1206.ambientGroundColor = new pc.Color(i1207[11], i1207[12], i1207[13], i1207[14])
  i1206.ambientEquatorColor = new pc.Color(i1207[15], i1207[16], i1207[17], i1207[18])
  i1206.fogColor = new pc.Color(i1207[19], i1207[20], i1207[21], i1207[22])
  i1206.fogEndDistance = i1207[23]
  i1206.fogStartDistance = i1207[24]
  i1206.fogDensity = i1207[25]
  i1206.fog = !!i1207[26]
  request.r(i1207[27], i1207[28], 0, i1206, 'skybox')
  i1206.fogMode = i1207[29]
  var i1209 = i1207[30]
  var i1208 = []
  for(var i = 0; i < i1209.length; i += 1) {
    i1208.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i1209[i + 0]) );
  }
  i1206.lightmaps = i1208
  i1206.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i1207[31], i1206.lightProbes)
  i1206.lightmapsMode = i1207[32]
  i1206.mixedBakeMode = i1207[33]
  i1206.environmentLightingMode = i1207[34]
  i1206.ambientProbe = new pc.SphericalHarmonicsL2(i1207[35])
  request.r(i1207[36], i1207[37], 0, i1206, 'customReflection')
  request.r(i1207[38], i1207[39], 0, i1206, 'defaultReflection')
  i1206.defaultReflectionMode = i1207[40]
  i1206.defaultReflectionResolution = i1207[41]
  i1206.sunLightObjectId = i1207[42]
  i1206.pixelLightCount = i1207[43]
  i1206.defaultReflectionHDR = !!i1207[44]
  i1206.hasLightDataAsset = !!i1207[45]
  i1206.hasManualGenerate = !!i1207[46]
  return i1206
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i1212 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i1213 = data
  request.r(i1213[0], i1213[1], 0, i1212, 'lightmapColor')
  request.r(i1213[2], i1213[3], 0, i1212, 'lightmapDirection')
  request.r(i1213[4], i1213[5], 0, i1212, 'shadowMask')
  return i1212
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i1214 = root || new UnityEngine.LightProbes()
  var i1215 = data
  return i1214
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i1222 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i1223 = data
  var i1225 = i1223[0]
  var i1224 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i1225.length; i += 1) {
    i1224.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i1225[i + 0]));
  }
  i1222.ShaderCompilationErrors = i1224
  i1222.name = i1223[1]
  i1222.guid = i1223[2]
  var i1227 = i1223[3]
  var i1226 = []
  for(var i = 0; i < i1227.length; i += 1) {
    i1226.push( i1227[i + 0] );
  }
  i1222.shaderDefinedKeywords = i1226
  var i1229 = i1223[4]
  var i1228 = []
  for(var i = 0; i < i1229.length; i += 1) {
    i1228.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i1229[i + 0]) );
  }
  i1222.passes = i1228
  var i1231 = i1223[5]
  var i1230 = []
  for(var i = 0; i < i1231.length; i += 1) {
    i1230.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i1231[i + 0]) );
  }
  i1222.usePasses = i1230
  var i1233 = i1223[6]
  var i1232 = []
  for(var i = 0; i < i1233.length; i += 1) {
    i1232.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i1233[i + 0]) );
  }
  i1222.defaultParameterValues = i1232
  request.r(i1223[7], i1223[8], 0, i1222, 'unityFallbackShader')
  i1222.readDepth = !!i1223[9]
  i1222.hasDepthOnlyPass = !!i1223[10]
  i1222.isCreatedByShaderGraph = !!i1223[11]
  i1222.disableBatching = !!i1223[12]
  i1222.compiled = !!i1223[13]
  return i1222
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i1236 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i1237 = data
  i1236.shaderName = i1237[0]
  i1236.errorMessage = i1237[1]
  return i1236
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i1242 = root || new pc.UnityShaderPass()
  var i1243 = data
  i1242.id = i1243[0]
  i1242.subShaderIndex = i1243[1]
  i1242.name = i1243[2]
  i1242.passType = i1243[3]
  i1242.grabPassTextureName = i1243[4]
  i1242.usePass = !!i1243[5]
  i1242.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1243[6], i1242.zTest)
  i1242.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1243[7], i1242.zWrite)
  i1242.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1243[8], i1242.culling)
  i1242.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i1243[9], i1242.blending)
  i1242.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i1243[10], i1242.alphaBlending)
  i1242.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1243[11], i1242.colorWriteMask)
  i1242.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1243[12], i1242.offsetUnits)
  i1242.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1243[13], i1242.offsetFactor)
  i1242.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1243[14], i1242.stencilRef)
  i1242.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1243[15], i1242.stencilReadMask)
  i1242.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1243[16], i1242.stencilWriteMask)
  i1242.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1243[17], i1242.stencilOp)
  i1242.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1243[18], i1242.stencilOpFront)
  i1242.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1243[19], i1242.stencilOpBack)
  var i1245 = i1243[20]
  var i1244 = []
  for(var i = 0; i < i1245.length; i += 1) {
    i1244.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i1245[i + 0]) );
  }
  i1242.tags = i1244
  var i1247 = i1243[21]
  var i1246 = []
  for(var i = 0; i < i1247.length; i += 1) {
    i1246.push( i1247[i + 0] );
  }
  i1242.passDefinedKeywords = i1246
  var i1249 = i1243[22]
  var i1248 = []
  for(var i = 0; i < i1249.length; i += 1) {
    i1248.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i1249[i + 0]) );
  }
  i1242.passDefinedKeywordGroups = i1248
  var i1251 = i1243[23]
  var i1250 = []
  for(var i = 0; i < i1251.length; i += 1) {
    i1250.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i1251[i + 0]) );
  }
  i1242.variants = i1250
  var i1253 = i1243[24]
  var i1252 = []
  for(var i = 0; i < i1253.length; i += 1) {
    i1252.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i1253[i + 0]) );
  }
  i1242.excludedVariants = i1252
  i1242.hasDepthReader = !!i1243[25]
  return i1242
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i1254 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i1255 = data
  i1254.val = i1255[0]
  i1254.name = i1255[1]
  return i1254
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i1256 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i1257 = data
  i1256.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1257[0], i1256.src)
  i1256.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1257[1], i1256.dst)
  i1256.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1257[2], i1256.op)
  return i1256
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i1258 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i1259 = data
  i1258.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1259[0], i1258.pass)
  i1258.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1259[1], i1258.fail)
  i1258.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1259[2], i1258.zFail)
  i1258.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1259[3], i1258.comp)
  return i1258
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i1262 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i1263 = data
  i1262.name = i1263[0]
  i1262.value = i1263[1]
  return i1262
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i1266 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i1267 = data
  var i1269 = i1267[0]
  var i1268 = []
  for(var i = 0; i < i1269.length; i += 1) {
    i1268.push( i1269[i + 0] );
  }
  i1266.keywords = i1268
  i1266.hasDiscard = !!i1267[1]
  return i1266
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i1272 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i1273 = data
  i1272.passId = i1273[0]
  i1272.subShaderIndex = i1273[1]
  var i1275 = i1273[2]
  var i1274 = []
  for(var i = 0; i < i1275.length; i += 1) {
    i1274.push( i1275[i + 0] );
  }
  i1272.keywords = i1274
  i1272.vertexProgram = i1273[3]
  i1272.fragmentProgram = i1273[4]
  i1272.exportedForWebGl2 = !!i1273[5]
  i1272.readDepth = !!i1273[6]
  return i1272
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i1278 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i1279 = data
  request.r(i1279[0], i1279[1], 0, i1278, 'shader')
  i1278.pass = i1279[2]
  return i1278
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i1282 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i1283 = data
  i1282.name = i1283[0]
  i1282.type = i1283[1]
  i1282.value = new pc.Vec4( i1283[2], i1283[3], i1283[4], i1283[5] )
  i1282.textureValue = i1283[6]
  i1282.shaderPropertyFlag = i1283[7]
  return i1282
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i1284 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i1285 = data
  i1284.name = i1285[0]
  request.r(i1285[1], i1285[2], 0, i1284, 'texture')
  i1284.aabb = i1285[3]
  i1284.vertices = i1285[4]
  i1284.triangles = i1285[5]
  i1284.textureRect = UnityEngine.Rect.MinMaxRect(i1285[6], i1285[7], i1285[8], i1285[9])
  i1284.packedRect = UnityEngine.Rect.MinMaxRect(i1285[10], i1285[11], i1285[12], i1285[13])
  i1284.border = new pc.Vec4( i1285[14], i1285[15], i1285[16], i1285[17] )
  i1284.transparency = i1285[18]
  i1284.bounds = i1285[19]
  i1284.pixelsPerUnit = i1285[20]
  i1284.textureWidth = i1285[21]
  i1284.textureHeight = i1285[22]
  i1284.nativeSize = new pc.Vec2( i1285[23], i1285[24] )
  i1284.pivot = new pc.Vec2( i1285[25], i1285[26] )
  i1284.textureRectOffset = new pc.Vec2( i1285[27], i1285[28] )
  return i1284
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i1286 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i1287 = data
  i1286.name = i1287[0]
  return i1286
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font"] = function (request, data, root) {
  var i1288 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font' )
  var i1289 = data
  i1288.name = i1289[0]
  i1288.ascent = i1289[1]
  i1288.originalLineHeight = i1289[2]
  i1288.fontSize = i1289[3]
  var i1291 = i1289[4]
  var i1290 = []
  for(var i = 0; i < i1291.length; i += 1) {
    i1290.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo', i1291[i + 0]) );
  }
  i1288.characterInfo = i1290
  request.r(i1289[5], i1289[6], 0, i1288, 'texture')
  i1288.originalFontSize = i1289[7]
  return i1288
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo"] = function (request, data, root) {
  var i1294 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo' )
  var i1295 = data
  i1294.index = i1295[0]
  i1294.advance = i1295[1]
  i1294.bearing = i1295[2]
  i1294.glyphWidth = i1295[3]
  i1294.glyphHeight = i1295[4]
  i1294.minX = i1295[5]
  i1294.maxX = i1295[6]
  i1294.minY = i1295[7]
  i1294.maxY = i1295[8]
  i1294.uvBottomLeftX = i1295[9]
  i1294.uvBottomLeftY = i1295[10]
  i1294.uvBottomRightX = i1295[11]
  i1294.uvBottomRightY = i1295[12]
  i1294.uvTopLeftX = i1295[13]
  i1294.uvTopLeftY = i1295[14]
  i1294.uvTopRightX = i1295[15]
  i1294.uvTopRightY = i1295[16]
  return i1294
}

Deserializers["DG.Tweening.Core.DOTweenSettings"] = function (request, data, root) {
  var i1296 = root || request.c( 'DG.Tweening.Core.DOTweenSettings' )
  var i1297 = data
  i1296.useSafeMode = !!i1297[0]
  i1296.safeModeOptions = request.d('DG.Tweening.Core.DOTweenSettings+SafeModeOptions', i1297[1], i1296.safeModeOptions)
  i1296.timeScale = i1297[2]
  i1296.unscaledTimeScale = i1297[3]
  i1296.useSmoothDeltaTime = !!i1297[4]
  i1296.maxSmoothUnscaledTime = i1297[5]
  i1296.rewindCallbackMode = i1297[6]
  i1296.showUnityEditorReport = !!i1297[7]
  i1296.logBehaviour = i1297[8]
  i1296.drawGizmos = !!i1297[9]
  i1296.defaultRecyclable = !!i1297[10]
  i1296.defaultAutoPlay = i1297[11]
  i1296.defaultUpdateType = i1297[12]
  i1296.defaultTimeScaleIndependent = !!i1297[13]
  i1296.defaultEaseType = i1297[14]
  i1296.defaultEaseOvershootOrAmplitude = i1297[15]
  i1296.defaultEasePeriod = i1297[16]
  i1296.defaultAutoKill = !!i1297[17]
  i1296.defaultLoopType = i1297[18]
  i1296.debugMode = !!i1297[19]
  i1296.debugStoreTargetId = !!i1297[20]
  i1296.showPreviewPanel = !!i1297[21]
  i1296.storeSettingsLocation = i1297[22]
  i1296.modules = request.d('DG.Tweening.Core.DOTweenSettings+ModulesSetup', i1297[23], i1296.modules)
  i1296.createASMDEF = !!i1297[24]
  i1296.showPlayingTweens = !!i1297[25]
  i1296.showPausedTweens = !!i1297[26]
  return i1296
}

Deserializers["DG.Tweening.Core.DOTweenSettings+SafeModeOptions"] = function (request, data, root) {
  var i1298 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+SafeModeOptions' )
  var i1299 = data
  i1298.logBehaviour = i1299[0]
  i1298.nestedTweenFailureBehaviour = i1299[1]
  return i1298
}

Deserializers["DG.Tweening.Core.DOTweenSettings+ModulesSetup"] = function (request, data, root) {
  var i1300 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+ModulesSetup' )
  var i1301 = data
  i1300.showPanel = !!i1301[0]
  i1300.audioEnabled = !!i1301[1]
  i1300.physicsEnabled = !!i1301[2]
  i1300.physics2DEnabled = !!i1301[3]
  i1300.spriteEnabled = !!i1301[4]
  i1300.uiEnabled = !!i1301[5]
  i1300.textMeshProEnabled = !!i1301[6]
  i1300.tk2DEnabled = !!i1301[7]
  i1300.deAudioEnabled = !!i1301[8]
  i1300.deUnityExtendedEnabled = !!i1301[9]
  i1300.epoOutlineEnabled = !!i1301[10]
  return i1300
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i1302 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i1303 = data
  var i1305 = i1303[0]
  var i1304 = []
  for(var i = 0; i < i1305.length; i += 1) {
    i1304.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i1305[i + 0]) );
  }
  i1302.files = i1304
  i1302.componentToPrefabIds = i1303[1]
  return i1302
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i1308 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i1309 = data
  i1308.path = i1309[0]
  request.r(i1309[1], i1309[2], 0, i1308, 'unityObject')
  return i1308
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i1310 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i1311 = data
  var i1313 = i1311[0]
  var i1312 = []
  for(var i = 0; i < i1313.length; i += 1) {
    i1312.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i1313[i + 0]) );
  }
  i1310.scriptsExecutionOrder = i1312
  var i1315 = i1311[1]
  var i1314 = []
  for(var i = 0; i < i1315.length; i += 1) {
    i1314.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i1315[i + 0]) );
  }
  i1310.sortingLayers = i1314
  var i1317 = i1311[2]
  var i1316 = []
  for(var i = 0; i < i1317.length; i += 1) {
    i1316.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i1317[i + 0]) );
  }
  i1310.cullingLayers = i1316
  i1310.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i1311[3], i1310.timeSettings)
  i1310.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i1311[4], i1310.physicsSettings)
  i1310.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i1311[5], i1310.physics2DSettings)
  i1310.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i1311[6], i1310.qualitySettings)
  i1310.enableRealtimeShadows = !!i1311[7]
  i1310.enableAutoInstancing = !!i1311[8]
  i1310.enableStaticBatching = !!i1311[9]
  i1310.enableDynamicBatching = !!i1311[10]
  i1310.usePreservativeDynamicBatching = !!i1311[11]
  i1310.lightmapEncodingQuality = i1311[12]
  i1310.desiredColorSpace = i1311[13]
  var i1319 = i1311[14]
  var i1318 = []
  for(var i = 0; i < i1319.length; i += 1) {
    i1318.push( i1319[i + 0] );
  }
  i1310.allTags = i1318
  return i1310
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i1322 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i1323 = data
  i1322.name = i1323[0]
  i1322.value = i1323[1]
  return i1322
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i1326 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i1327 = data
  i1326.id = i1327[0]
  i1326.name = i1327[1]
  i1326.value = i1327[2]
  return i1326
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i1330 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i1331 = data
  i1330.id = i1331[0]
  i1330.name = i1331[1]
  return i1330
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i1332 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i1333 = data
  i1332.fixedDeltaTime = i1333[0]
  i1332.maximumDeltaTime = i1333[1]
  i1332.timeScale = i1333[2]
  i1332.maximumParticleTimestep = i1333[3]
  return i1332
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i1334 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i1335 = data
  i1334.gravity = new pc.Vec3( i1335[0], i1335[1], i1335[2] )
  i1334.defaultSolverIterations = i1335[3]
  i1334.bounceThreshold = i1335[4]
  i1334.autoSyncTransforms = !!i1335[5]
  i1334.autoSimulation = !!i1335[6]
  var i1337 = i1335[7]
  var i1336 = []
  for(var i = 0; i < i1337.length; i += 1) {
    i1336.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i1337[i + 0]) );
  }
  i1334.collisionMatrix = i1336
  return i1334
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i1340 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i1341 = data
  i1340.enabled = !!i1341[0]
  i1340.layerId = i1341[1]
  i1340.otherLayerId = i1341[2]
  return i1340
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i1342 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i1343 = data
  request.r(i1343[0], i1343[1], 0, i1342, 'material')
  i1342.gravity = new pc.Vec2( i1343[2], i1343[3] )
  i1342.positionIterations = i1343[4]
  i1342.velocityIterations = i1343[5]
  i1342.velocityThreshold = i1343[6]
  i1342.maxLinearCorrection = i1343[7]
  i1342.maxAngularCorrection = i1343[8]
  i1342.maxTranslationSpeed = i1343[9]
  i1342.maxRotationSpeed = i1343[10]
  i1342.baumgarteScale = i1343[11]
  i1342.baumgarteTOIScale = i1343[12]
  i1342.timeToSleep = i1343[13]
  i1342.linearSleepTolerance = i1343[14]
  i1342.angularSleepTolerance = i1343[15]
  i1342.defaultContactOffset = i1343[16]
  i1342.autoSimulation = !!i1343[17]
  i1342.queriesHitTriggers = !!i1343[18]
  i1342.queriesStartInColliders = !!i1343[19]
  i1342.callbacksOnDisable = !!i1343[20]
  i1342.reuseCollisionCallbacks = !!i1343[21]
  i1342.autoSyncTransforms = !!i1343[22]
  var i1345 = i1343[23]
  var i1344 = []
  for(var i = 0; i < i1345.length; i += 1) {
    i1344.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i1345[i + 0]) );
  }
  i1342.collisionMatrix = i1344
  return i1342
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i1348 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i1349 = data
  i1348.enabled = !!i1349[0]
  i1348.layerId = i1349[1]
  i1348.otherLayerId = i1349[2]
  return i1348
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i1350 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i1351 = data
  var i1353 = i1351[0]
  var i1352 = []
  for(var i = 0; i < i1353.length; i += 1) {
    i1352.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i1353[i + 0]) );
  }
  i1350.qualityLevels = i1352
  var i1355 = i1351[1]
  var i1354 = []
  for(var i = 0; i < i1355.length; i += 1) {
    i1354.push( i1355[i + 0] );
  }
  i1350.names = i1354
  i1350.shadows = i1351[2]
  i1350.anisotropicFiltering = i1351[3]
  i1350.antiAliasing = i1351[4]
  i1350.lodBias = i1351[5]
  i1350.shadowCascades = i1351[6]
  i1350.shadowDistance = i1351[7]
  i1350.shadowmaskMode = i1351[8]
  i1350.shadowProjection = i1351[9]
  i1350.shadowResolution = i1351[10]
  i1350.softParticles = !!i1351[11]
  i1350.softVegetation = !!i1351[12]
  i1350.activeColorSpace = i1351[13]
  i1350.desiredColorSpace = i1351[14]
  i1350.masterTextureLimit = i1351[15]
  i1350.maxQueuedFrames = i1351[16]
  i1350.particleRaycastBudget = i1351[17]
  i1350.pixelLightCount = i1351[18]
  i1350.realtimeReflectionProbes = !!i1351[19]
  i1350.shadowCascade2Split = i1351[20]
  i1350.shadowCascade4Split = new pc.Vec3( i1351[21], i1351[22], i1351[23] )
  i1350.streamingMipmapsActive = !!i1351[24]
  i1350.vSyncCount = i1351[25]
  i1350.asyncUploadBufferSize = i1351[26]
  i1350.asyncUploadTimeSlice = i1351[27]
  i1350.billboardsFaceCameraPosition = !!i1351[28]
  i1350.shadowNearPlaneOffset = i1351[29]
  i1350.streamingMipmapsMemoryBudget = i1351[30]
  i1350.maximumLODLevel = i1351[31]
  i1350.streamingMipmapsAddAllCameras = !!i1351[32]
  i1350.streamingMipmapsMaxLevelReduction = i1351[33]
  i1350.streamingMipmapsRenderersPerFrame = i1351[34]
  i1350.resolutionScalingFixedDPIFactor = i1351[35]
  i1350.streamingMipmapsMaxFileIORequests = i1351[36]
  i1350.currentQualityLevel = i1351[37]
  return i1350
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i1358 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i1359 = data
  request.r(i1359[0], i1359[1], 0, i1358, 'm_ObjectArgument')
  i1358.m_ObjectArgumentAssemblyTypeName = i1359[2]
  i1358.m_IntArgument = i1359[3]
  i1358.m_FloatArgument = i1359[4]
  i1358.m_StringArgument = i1359[5]
  i1358.m_BoolArgument = !!i1359[6]
  return i1358
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10,"graphicsFormat":11,"sRGBTexture":12,"desiredColorSpace":13,"wrapU":14,"wrapV":15},"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Components.Transform":{"position":0,"scale":3,"rotation":6},"Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer":{"color":0,"sprite":4,"flipX":6,"flipY":7,"drawMode":8,"size":9,"tileMode":11,"adaptiveModeThreshold":12,"maskInteraction":13,"spriteSortPoint":14,"enabled":15,"sharedMaterial":16,"sharedMaterials":18,"receiveShadows":19,"shadowCastingMode":20,"sortingLayerID":21,"sortingOrder":22,"lightmapIndex":23,"lightmapSceneIndex":24,"lightmapScaleOffset":25,"lightProbeUsage":29,"reflectionProbeUsage":30},"Luna.Unity.DTO.UnityEngine.Components.CircleCollider2D":{"radius":0,"enabled":1,"isTrigger":2,"usedByEffector":3,"density":4,"offset":5,"material":7},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Components.SortingGroup":{"sortingLayerIndex":0,"sortingOrder":1,"sortingLayerName":2,"enabled":3},"Luna.Unity.DTO.UnityEngine.Components.Rigidbody2D":{"bodyType":0,"material":1,"simulated":3,"useAutoMass":4,"mass":5,"drag":6,"angularDrag":7,"gravityScale":8,"collisionDetectionMode":9,"sleepMode":10,"constraints":11},"Luna.Unity.DTO.UnityEngine.Components.FixedJoint2D":{"dampingRatio":0,"frequency":1,"anchor":2,"connectedAnchor":4,"autoConfigureConnectedAnchor":6,"connectedBody":7,"breakForce":9,"breakTorque":10,"enableCollision":11,"enabled":12},"Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D":{"usedByComposite":0,"autoTiling":1,"size":2,"edgeRadius":4,"enabled":5,"isTrigger":6,"usedByEffector":7,"density":8,"offset":9,"material":11},"Luna.Unity.DTO.UnityEngine.Components.HingeJoint2D":{"useLimits":0,"limits":1,"useMotor":2,"motor":3,"anchor":4,"connectedAnchor":6,"autoConfigureConnectedAnchor":8,"connectedBody":9,"breakForce":11,"breakTorque":12,"enableCollision":13,"enabled":14},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"aspect":0,"orthographic":1,"orthographicSize":2,"backgroundColor":3,"nearClipPlane":7,"farClipPlane":8,"fieldOfView":9,"depth":10,"clearFlags":11,"cullingMask":12,"rect":13,"targetTexture":14,"usePhysicalProperties":16,"focalLength":17,"sensorSize":18,"lensShift":20,"gateFit":22,"commandBufferCount":23,"cameraType":24,"enabled":25},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"planeDistance":0,"referencePixelsPerUnit":1,"isFallbackOverlay":2,"renderMode":3,"renderOrder":4,"sortingLayerName":5,"sortingOrder":6,"scaleFactor":7,"worldCamera":8,"overrideSorting":10,"pixelPerfect":11,"targetDisplay":12,"overridePixelPerfect":13,"enabled":14},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Components.TargetJoint2D":{"autoConfigureTarget":0,"target":1,"anchor":3,"maxForce":5,"dampingRatio":6,"frequency":7,"connectedBody":8,"breakForce":10,"breakTorque":11,"enableCollision":12,"enabled":13},"Luna.Unity.DTO.UnityEngine.Components.AudioSource":{"clip":0,"outputAudioMixerGroup":2,"playOnAwake":4,"loop":5,"time":6,"volume":7,"pitch":8,"enabled":9},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"customReflection":36,"defaultReflection":38,"defaultReflectionMode":40,"defaultReflectionResolution":41,"sunLightObjectId":42,"pixelLightCount":43,"defaultReflectionHDR":44,"hasLightDataAsset":45,"hasManualGenerate":46},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2,"shadowMask":4},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"hasDepthOnlyPass":10,"isCreatedByShaderGraph":11,"disableBatching":12,"compiled":13},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"exportedForWebGl2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.AudioClip":{"name":0},"Luna.Unity.DTO.UnityEngine.Assets.Font":{"name":0,"ascent":1,"originalLineHeight":2,"fontSize":3,"characterInfo":4,"texture":5,"originalFontSize":7},"Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo":{"index":0,"advance":1,"bearing":2,"glyphWidth":3,"glyphHeight":4,"minX":5,"maxX":6,"minY":7,"maxY":8,"uvBottomLeftX":9,"uvBottomLeftY":10,"uvBottomRightX":11,"uvBottomRightY":12,"uvTopLeftX":13,"uvTopLeftY":14,"uvTopRightX":15,"uvTopRightY":16},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableStaticBatching":9,"enableDynamicBatching":10,"usePreservativeDynamicBatching":11,"lightmapEncodingQuality":12,"desiredColorSpace":13,"allTags":14},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37}}

Deserializers.requiredComponents = {"51":[52],"53":[52],"54":[52],"55":[52],"56":[52],"57":[52],"58":[59],"60":[23],"61":[62],"63":[62],"64":[62],"65":[62],"66":[62],"67":[62],"68":[12],"69":[12],"70":[12],"71":[12],"72":[12],"73":[12],"11":[12],"74":[12],"75":[12],"41":[12],"16":[12],"76":[12],"77":[12],"78":[23],"79":[80],"81":[82],"83":[82],"29":[28],"84":[2],"85":[23],"86":[87],"88":[28],"89":[32,28],"90":[80],"91":[32,28],"92":[28],"93":[28],"94":[80,28],"95":[28,32],"96":[97],"98":[97],"99":[97],"100":[28],"101":[28],"31":[29],"33":[32,28],"39":[28],"30":[29],"102":[28],"103":[28],"104":[28],"105":[28],"106":[28],"107":[28],"108":[28],"109":[28],"110":[28],"38":[32,28],"111":[28],"112":[28],"113":[28],"114":[28],"34":[32,28],"115":[28],"116":[26],"117":[26],"27":[26],"118":[26],"119":[23],"120":[23]}

Deserializers.types = ["UnityEngine.Shader","UnityEngine.Transform","UnityEngine.SpriteRenderer","UnityEngine.Sprite","UnityEngine.Material","UnityEngine.CircleCollider2D","UnityEngine.MonoBehaviour","BulletController","UnityEngine.AudioClip","UnityEngine.Rendering.SortingGroup","MonsterController","UnityEngine.HingeJoint2D","UnityEngine.Rigidbody2D","BalanceController","MonsterTrigger","GroundCheck","UnityEngine.FixedJoint2D","UnityEngine.BoxCollider2D","PlayerController","PlayerAttack","UnityEngine.GameObject","PlayerTrigger","BodyPiece","UnityEngine.Camera","UnityEngine.AudioListener","UnityEngine.EventSystems.UIBehaviour","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","UnityEngine.RectTransform","UnityEngine.Canvas","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","UnityEngine.CanvasRenderer","UnityEngine.UI.Image","UnityEngine.UI.Text","UnityEngine.Font","DG.Tweening.DOTweenAnimation","UnityEngine.UI.Button","UnityEngine.UI.RawImage","UnityEngine.UI.AspectRatioFitter","MonsterOptionController","UnityEngine.TargetJoint2D","HumanOptionController","UnityEngine.AudioSource","GameController","LayoutController","LunaController","UnityEngine.Texture2D","AudioController","PoolController","DG.Tweening.Core.DOTweenSettings","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.SkinnedMeshRenderer","UnityEngine.FlareLayer","UnityEngine.CharacterJoint","UnityEngine.Rigidbody","UnityEngine.ConfigurableJoint","UnityEngine.ConstantForce","UnityEngine.FixedJoint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.CompositeCollider2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.MeshRenderer","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","UnityEngine.U2D.Animation.SpriteSkin","UnityEngine.U2D.PixelPerfectCamera","UnityEngine.U2D.SpriteShapeController","UnityEngine.U2D.SpriteShapeRenderer","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text","TMPro.TextContainer","TMPro.TextMeshPro","TMPro.TextMeshProUGUI","Unity.VisualScripting.SceneVariables","Unity.VisualScripting.Variables","Unity.VisualScripting.ScriptMachine","Unity.VisualScripting.StateMachine","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.Mask","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RectMask2D","UnityEngine.UI.ScrollRect","UnityEngine.UI.Scrollbar","UnityEngine.UI.Slider","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster"]

Deserializers.unityVersion = "6000.0.78f1";

Deserializers.productName = "SSP_Luna-SSP_V03";

Deserializers.lunaInitializationTime = "08/17/2026 07:10:25";

Deserializers.lunaDaysRunning = "0.1";

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

Deserializers.buildID = "eaed7cde-5571-47cc-a91b-7dc7bd5c1e43";

Deserializers.runtimeInitializeOnLoadInfos = [[["Unity","PerformanceTesting","PerformanceTest","ResetStaticsOnLoad"],["UnityEngine","U2D","Animation","GpuDeformationSystem","CreateFallbackBuffer"],["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"],["UnityEngine","AI","NavMesh","ClearPreUpdateListeners"]],[["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"]],[],[["UnityEngine","Timeline","AnimatorBindingCache","ResetStaticsOnLoad"],["UnityEngine","Timeline","TrackAsset","ResetStaticsOnLoad"],["UnityEngine","Timeline","AnimationPreviewUtilities","ResetStaticsOnLoad"],["Unity","PerformanceTesting","Data","RunSettings","ResetStaticsOnLoad"],["Unity","PerformanceTesting","PlayerCallbacks","ResetStaticsOnLoad"]]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

