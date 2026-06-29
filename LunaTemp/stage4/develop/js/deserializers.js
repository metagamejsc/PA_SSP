var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i4800 = root || request.c( 'UnityEngine.JointSpring' )
  var i4801 = data
  i4800.spring = i4801[0]
  i4800.damper = i4801[1]
  i4800.targetPosition = i4801[2]
  return i4800
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i4802 = root || request.c( 'UnityEngine.JointMotor' )
  var i4803 = data
  i4802.m_TargetVelocity = i4803[0]
  i4802.m_Force = i4803[1]
  i4802.m_FreeSpin = i4803[2]
  return i4802
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i4804 = root || request.c( 'UnityEngine.JointLimits' )
  var i4805 = data
  i4804.m_Min = i4805[0]
  i4804.m_Max = i4805[1]
  i4804.m_Bounciness = i4805[2]
  i4804.m_BounceMinVelocity = i4805[3]
  i4804.m_ContactDistance = i4805[4]
  i4804.minBounce = i4805[5]
  i4804.maxBounce = i4805[6]
  return i4804
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i4806 = root || request.c( 'UnityEngine.JointDrive' )
  var i4807 = data
  i4806.m_PositionSpring = i4807[0]
  i4806.m_PositionDamper = i4807[1]
  i4806.m_MaximumForce = i4807[2]
  i4806.m_UseAcceleration = i4807[3]
  return i4806
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i4808 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i4809 = data
  i4808.m_Spring = i4809[0]
  i4808.m_Damper = i4809[1]
  return i4808
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i4810 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i4811 = data
  i4810.m_Limit = i4811[0]
  i4810.m_Bounciness = i4811[1]
  i4810.m_ContactDistance = i4811[2]
  return i4810
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i4812 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i4813 = data
  i4812.m_ExtremumSlip = i4813[0]
  i4812.m_ExtremumValue = i4813[1]
  i4812.m_AsymptoteSlip = i4813[2]
  i4812.m_AsymptoteValue = i4813[3]
  i4812.m_Stiffness = i4813[4]
  return i4812
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i4814 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i4815 = data
  i4814.m_LowerAngle = i4815[0]
  i4814.m_UpperAngle = i4815[1]
  return i4814
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i4816 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i4817 = data
  i4816.m_MotorSpeed = i4817[0]
  i4816.m_MaximumMotorTorque = i4817[1]
  return i4816
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i4818 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i4819 = data
  i4818.m_DampingRatio = i4819[0]
  i4818.m_Frequency = i4819[1]
  i4818.m_Angle = i4819[2]
  return i4818
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i4820 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i4821 = data
  i4820.m_LowerTranslation = i4821[0]
  i4820.m_UpperTranslation = i4821[1]
  return i4820
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i4822 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i4823 = data
  i4822.name = i4823[0]
  i4822.width = i4823[1]
  i4822.height = i4823[2]
  i4822.mipmapCount = i4823[3]
  i4822.anisoLevel = i4823[4]
  i4822.filterMode = i4823[5]
  i4822.hdr = !!i4823[6]
  i4822.format = i4823[7]
  i4822.wrapMode = i4823[8]
  i4822.alphaIsTransparency = !!i4823[9]
  i4822.alphaSource = i4823[10]
  i4822.graphicsFormat = i4823[11]
  i4822.sRGBTexture = !!i4823[12]
  i4822.desiredColorSpace = i4823[13]
  i4822.wrapU = i4823[14]
  i4822.wrapV = i4823[15]
  return i4822
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i4824 = root || new pc.UnityMaterial()
  var i4825 = data
  i4824.name = i4825[0]
  request.r(i4825[1], i4825[2], 0, i4824, 'shader')
  i4824.renderQueue = i4825[3]
  i4824.enableInstancing = !!i4825[4]
  var i4827 = i4825[5]
  var i4826 = []
  for(var i = 0; i < i4827.length; i += 1) {
    i4826.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i4827[i + 0]) );
  }
  i4824.floatParameters = i4826
  var i4829 = i4825[6]
  var i4828 = []
  for(var i = 0; i < i4829.length; i += 1) {
    i4828.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i4829[i + 0]) );
  }
  i4824.colorParameters = i4828
  var i4831 = i4825[7]
  var i4830 = []
  for(var i = 0; i < i4831.length; i += 1) {
    i4830.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i4831[i + 0]) );
  }
  i4824.vectorParameters = i4830
  var i4833 = i4825[8]
  var i4832 = []
  for(var i = 0; i < i4833.length; i += 1) {
    i4832.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i4833[i + 0]) );
  }
  i4824.textureParameters = i4832
  var i4835 = i4825[9]
  var i4834 = []
  for(var i = 0; i < i4835.length; i += 1) {
    i4834.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i4835[i + 0]) );
  }
  i4824.materialFlags = i4834
  return i4824
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i4838 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i4839 = data
  i4838.name = i4839[0]
  i4838.value = i4839[1]
  return i4838
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i4842 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i4843 = data
  i4842.name = i4843[0]
  i4842.value = new pc.Color(i4843[1], i4843[2], i4843[3], i4843[4])
  return i4842
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i4846 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i4847 = data
  i4846.name = i4847[0]
  i4846.value = new pc.Vec4( i4847[1], i4847[2], i4847[3], i4847[4] )
  return i4846
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i4850 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i4851 = data
  i4850.name = i4851[0]
  request.r(i4851[1], i4851[2], 0, i4850, 'value')
  return i4850
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i4854 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i4855 = data
  i4854.name = i4855[0]
  i4854.enabled = !!i4855[1]
  return i4854
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i4856 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i4857 = data
  i4856.position = new pc.Vec3( i4857[0], i4857[1], i4857[2] )
  i4856.scale = new pc.Vec3( i4857[3], i4857[4], i4857[5] )
  i4856.rotation = new pc.Quat(i4857[6], i4857[7], i4857[8], i4857[9])
  return i4856
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer"] = function (request, data, root) {
  var i4858 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer' )
  var i4859 = data
  i4858.color = new pc.Color(i4859[0], i4859[1], i4859[2], i4859[3])
  request.r(i4859[4], i4859[5], 0, i4858, 'sprite')
  i4858.flipX = !!i4859[6]
  i4858.flipY = !!i4859[7]
  i4858.drawMode = i4859[8]
  i4858.size = new pc.Vec2( i4859[9], i4859[10] )
  i4858.tileMode = i4859[11]
  i4858.adaptiveModeThreshold = i4859[12]
  i4858.maskInteraction = i4859[13]
  i4858.spriteSortPoint = i4859[14]
  i4858.enabled = !!i4859[15]
  request.r(i4859[16], i4859[17], 0, i4858, 'sharedMaterial')
  var i4861 = i4859[18]
  var i4860 = []
  for(var i = 0; i < i4861.length; i += 2) {
  request.r(i4861[i + 0], i4861[i + 1], 2, i4860, '')
  }
  i4858.sharedMaterials = i4860
  i4858.receiveShadows = !!i4859[19]
  i4858.shadowCastingMode = i4859[20]
  i4858.sortingLayerID = i4859[21]
  i4858.sortingOrder = i4859[22]
  i4858.lightmapIndex = i4859[23]
  i4858.lightmapSceneIndex = i4859[24]
  i4858.lightmapScaleOffset = new pc.Vec4( i4859[25], i4859[26], i4859[27], i4859[28] )
  i4858.lightProbeUsage = i4859[29]
  i4858.reflectionProbeUsage = i4859[30]
  return i4858
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CircleCollider2D"] = function (request, data, root) {
  var i4864 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CircleCollider2D' )
  var i4865 = data
  i4864.radius = i4865[0]
  i4864.enabled = !!i4865[1]
  i4864.isTrigger = !!i4865[2]
  i4864.usedByEffector = !!i4865[3]
  i4864.density = i4865[4]
  i4864.offset = new pc.Vec2( i4865[5], i4865[6] )
  request.r(i4865[7], i4865[8], 0, i4864, 'material')
  return i4864
}

Deserializers["BulletController"] = function (request, data, root) {
  var i4866 = root || request.c( 'BulletController' )
  var i4867 = data
  i4866.speed = i4867[0]
  i4866.damage = i4867[1]
  request.r(i4867[2], i4867[3], 0, i4866, 'hitMonsterSound')
  request.r(i4867[4], i4867[5], 0, i4866, 'hitSound')
  i4866.lifeTime = i4867[6]
  i4866.hit = !!i4867[7]
  return i4866
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i4868 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i4869 = data
  i4868.name = i4869[0]
  i4868.tagId = i4869[1]
  i4868.enabled = !!i4869[2]
  i4868.isStatic = !!i4869[3]
  i4868.layer = i4869[4]
  return i4868
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SortingGroup"] = function (request, data, root) {
  var i4870 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SortingGroup' )
  var i4871 = data
  i4870.sortingLayerIndex = i4871[0]
  i4870.sortingOrder = i4871[1]
  i4870.sortingLayerName = i4871[2]
  i4870.enabled = !!i4871[3]
  return i4870
}

Deserializers["MonsterController"] = function (request, data, root) {
  var i4872 = root || request.c( 'MonsterController' )
  var i4873 = data
  i4872.maxHP = i4873[0]
  i4872.currentHP = i4873[1]
  var i4875 = i4873[2]
  var i4874 = new (System.Collections.Generic.List$1(Bridge.ns('Piece')))
  for(var i = 0; i < i4875.length; i += 1) {
    i4874.add(request.d('Piece', i4875[i + 0]));
  }
  i4872.pieces = i4874
  request.r(i4873[3], i4873[4], 0, i4872, 'deadSFX')
  i4872.maxForce = new pc.Vec2( i4873[5], i4873[6] )
  i4872.minForce = new pc.Vec2( i4873[7], i4873[8] )
  request.r(i4873[9], i4873[10], 0, i4872, 'balance')
  i4872.isDead = !!i4873[11]
  return i4872
}

Deserializers["Piece"] = function (request, data, root) {
  var i4878 = root || request.c( 'Piece' )
  var i4879 = data
  request.r(i4879[0], i4879[1], 0, i4878, 'Joint')
  request.r(i4879[2], i4879[3], 0, i4878, 'Rb')
  return i4878
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Rigidbody2D"] = function (request, data, root) {
  var i4880 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Rigidbody2D' )
  var i4881 = data
  i4880.bodyType = i4881[0]
  request.r(i4881[1], i4881[2], 0, i4880, 'material')
  i4880.simulated = !!i4881[3]
  i4880.useAutoMass = !!i4881[4]
  i4880.mass = i4881[5]
  i4880.drag = i4881[6]
  i4880.angularDrag = i4881[7]
  i4880.gravityScale = i4881[8]
  i4880.collisionDetectionMode = i4881[9]
  i4880.sleepMode = i4881[10]
  i4880.constraints = i4881[11]
  return i4880
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D"] = function (request, data, root) {
  var i4882 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D' )
  var i4883 = data
  i4882.usedByComposite = !!i4883[0]
  i4882.autoTiling = !!i4883[1]
  i4882.size = new pc.Vec2( i4883[2], i4883[3] )
  i4882.edgeRadius = i4883[4]
  i4882.enabled = !!i4883[5]
  i4882.isTrigger = !!i4883[6]
  i4882.usedByEffector = !!i4883[7]
  i4882.density = i4883[8]
  i4882.offset = new pc.Vec2( i4883[9], i4883[10] )
  request.r(i4883[11], i4883[12], 0, i4882, 'material')
  return i4882
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.HingeJoint2D"] = function (request, data, root) {
  var i4884 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.HingeJoint2D' )
  var i4885 = data
  i4884.useLimits = !!i4885[0]
  i4884.limits = request.d('UnityEngine.JointAngleLimits2D', i4885[1], i4884.limits)
  i4884.useMotor = !!i4885[2]
  i4884.motor = request.d('UnityEngine.JointMotor2D', i4885[3], i4884.motor)
  i4884.anchor = new pc.Vec2( i4885[4], i4885[5] )
  i4884.connectedAnchor = new pc.Vec2( i4885[6], i4885[7] )
  i4884.autoConfigureConnectedAnchor = !!i4885[8]
  request.r(i4885[9], i4885[10], 0, i4884, 'connectedBody')
  i4884.breakForce = i4885[11]
  i4884.breakTorque = i4885[12]
  i4884.enableCollision = !!i4885[13]
  i4884.enabled = !!i4885[14]
  return i4884
}

Deserializers["BalanceController"] = function (request, data, root) {
  var i4886 = root || request.c( 'BalanceController' )
  var i4887 = data
  i4886.targetRotation = i4887[0]
  i4886.force = i4887[1]
  return i4886
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i4888 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i4889 = data
  i4888.name = i4889[0]
  i4888.index = i4889[1]
  i4888.startup = !!i4889[2]
  return i4888
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i4890 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i4891 = data
  i4890.aspect = i4891[0]
  i4890.orthographic = !!i4891[1]
  i4890.orthographicSize = i4891[2]
  i4890.backgroundColor = new pc.Color(i4891[3], i4891[4], i4891[5], i4891[6])
  i4890.nearClipPlane = i4891[7]
  i4890.farClipPlane = i4891[8]
  i4890.fieldOfView = i4891[9]
  i4890.depth = i4891[10]
  i4890.clearFlags = i4891[11]
  i4890.cullingMask = i4891[12]
  i4890.rect = i4891[13]
  request.r(i4891[14], i4891[15], 0, i4890, 'targetTexture')
  i4890.usePhysicalProperties = !!i4891[16]
  i4890.focalLength = i4891[17]
  i4890.sensorSize = new pc.Vec2( i4891[18], i4891[19] )
  i4890.lensShift = new pc.Vec2( i4891[20], i4891[21] )
  i4890.gateFit = i4891[22]
  i4890.commandBufferCount = i4891[23]
  i4890.cameraType = i4891[24]
  i4890.enabled = !!i4891[25]
  return i4890
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i4892 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i4893 = data
  request.r(i4893[0], i4893[1], 0, i4892, 'm_FirstSelected')
  i4892.m_sendNavigationEvents = !!i4893[2]
  i4892.m_DragThreshold = i4893[3]
  return i4892
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i4894 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i4895 = data
  i4894.m_HorizontalAxis = i4895[0]
  i4894.m_VerticalAxis = i4895[1]
  i4894.m_SubmitButton = i4895[2]
  i4894.m_CancelButton = i4895[3]
  i4894.m_InputActionsPerSecond = i4895[4]
  i4894.m_RepeatDelay = i4895[5]
  i4894.m_ForceModuleActive = !!i4895[6]
  i4894.m_SendPointerHoverToParent = !!i4895[7]
  return i4894
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i4896 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i4897 = data
  i4896.pivot = new pc.Vec2( i4897[0], i4897[1] )
  i4896.anchorMin = new pc.Vec2( i4897[2], i4897[3] )
  i4896.anchorMax = new pc.Vec2( i4897[4], i4897[5] )
  i4896.sizeDelta = new pc.Vec2( i4897[6], i4897[7] )
  i4896.anchoredPosition3D = new pc.Vec3( i4897[8], i4897[9], i4897[10] )
  i4896.rotation = new pc.Quat(i4897[11], i4897[12], i4897[13], i4897[14])
  i4896.scale = new pc.Vec3( i4897[15], i4897[16], i4897[17] )
  return i4896
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i4898 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i4899 = data
  i4898.planeDistance = i4899[0]
  i4898.referencePixelsPerUnit = i4899[1]
  i4898.isFallbackOverlay = !!i4899[2]
  i4898.renderMode = i4899[3]
  i4898.renderOrder = i4899[4]
  i4898.sortingLayerName = i4899[5]
  i4898.sortingOrder = i4899[6]
  i4898.scaleFactor = i4899[7]
  request.r(i4899[8], i4899[9], 0, i4898, 'worldCamera')
  i4898.overrideSorting = !!i4899[10]
  i4898.pixelPerfect = !!i4899[11]
  i4898.targetDisplay = i4899[12]
  i4898.overridePixelPerfect = !!i4899[13]
  i4898.enabled = !!i4899[14]
  return i4898
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i4900 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i4901 = data
  i4900.m_UiScaleMode = i4901[0]
  i4900.m_ReferencePixelsPerUnit = i4901[1]
  i4900.m_ScaleFactor = i4901[2]
  i4900.m_ReferenceResolution = new pc.Vec2( i4901[3], i4901[4] )
  i4900.m_ScreenMatchMode = i4901[5]
  i4900.m_MatchWidthOrHeight = i4901[6]
  i4900.m_PhysicalUnit = i4901[7]
  i4900.m_FallbackScreenDPI = i4901[8]
  i4900.m_DefaultSpriteDPI = i4901[9]
  i4900.m_DynamicPixelsPerUnit = i4901[10]
  i4900.m_PresetInfoIsWorld = !!i4901[11]
  return i4900
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i4902 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i4903 = data
  i4902.m_IgnoreReversedGraphics = !!i4903[0]
  i4902.m_BlockingObjects = i4903[1]
  i4902.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i4903[2] )
  return i4902
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i4904 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i4905 = data
  i4904.cullTransparentMesh = !!i4905[0]
  return i4904
}

Deserializers["UnityEngine.UI.RawImage"] = function (request, data, root) {
  var i4906 = root || request.c( 'UnityEngine.UI.RawImage' )
  var i4907 = data
  request.r(i4907[0], i4907[1], 0, i4906, 'm_Texture')
  i4906.m_UVRect = UnityEngine.Rect.MinMaxRect(i4907[2], i4907[3], i4907[4], i4907[5])
  request.r(i4907[6], i4907[7], 0, i4906, 'm_Material')
  i4906.m_Maskable = !!i4907[8]
  i4906.m_Color = new pc.Color(i4907[9], i4907[10], i4907[11], i4907[12])
  i4906.m_RaycastTarget = !!i4907[13]
  i4906.m_RaycastPadding = new pc.Vec4( i4907[14], i4907[15], i4907[16], i4907[17] )
  return i4906
}

Deserializers["UnityEngine.UI.AspectRatioFitter"] = function (request, data, root) {
  var i4908 = root || request.c( 'UnityEngine.UI.AspectRatioFitter' )
  var i4909 = data
  i4908.m_AspectMode = i4909[0]
  i4908.m_AspectRatio = i4909[1]
  return i4908
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i4910 = root || request.c( 'UnityEngine.UI.Button' )
  var i4911 = data
  i4910.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i4911[0], i4910.m_OnClick)
  i4910.m_Navigation = request.d('UnityEngine.UI.Navigation', i4911[1], i4910.m_Navigation)
  i4910.m_Transition = i4911[2]
  i4910.m_Colors = request.d('UnityEngine.UI.ColorBlock', i4911[3], i4910.m_Colors)
  i4910.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i4911[4], i4910.m_SpriteState)
  i4910.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i4911[5], i4910.m_AnimationTriggers)
  i4910.m_Interactable = !!i4911[6]
  request.r(i4911[7], i4911[8], 0, i4910, 'm_TargetGraphic')
  return i4910
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i4912 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i4913 = data
  i4912.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i4913[0], i4912.m_PersistentCalls)
  return i4912
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i4914 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i4915 = data
  var i4917 = i4915[0]
  var i4916 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i4917.length; i += 1) {
    i4916.add(request.d('UnityEngine.Events.PersistentCall', i4917[i + 0]));
  }
  i4914.m_Calls = i4916
  return i4914
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i4920 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i4921 = data
  request.r(i4921[0], i4921[1], 0, i4920, 'm_Target')
  i4920.m_TargetAssemblyTypeName = i4921[2]
  i4920.m_MethodName = i4921[3]
  i4920.m_Mode = i4921[4]
  i4920.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i4921[5], i4920.m_Arguments)
  i4920.m_CallState = i4921[6]
  return i4920
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i4922 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i4923 = data
  i4922.m_Mode = i4923[0]
  i4922.m_WrapAround = !!i4923[1]
  request.r(i4923[2], i4923[3], 0, i4922, 'm_SelectOnUp')
  request.r(i4923[4], i4923[5], 0, i4922, 'm_SelectOnDown')
  request.r(i4923[6], i4923[7], 0, i4922, 'm_SelectOnLeft')
  request.r(i4923[8], i4923[9], 0, i4922, 'm_SelectOnRight')
  return i4922
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i4924 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i4925 = data
  i4924.m_NormalColor = new pc.Color(i4925[0], i4925[1], i4925[2], i4925[3])
  i4924.m_HighlightedColor = new pc.Color(i4925[4], i4925[5], i4925[6], i4925[7])
  i4924.m_PressedColor = new pc.Color(i4925[8], i4925[9], i4925[10], i4925[11])
  i4924.m_SelectedColor = new pc.Color(i4925[12], i4925[13], i4925[14], i4925[15])
  i4924.m_DisabledColor = new pc.Color(i4925[16], i4925[17], i4925[18], i4925[19])
  i4924.m_ColorMultiplier = i4925[20]
  i4924.m_FadeDuration = i4925[21]
  return i4924
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i4926 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i4927 = data
  request.r(i4927[0], i4927[1], 0, i4926, 'm_HighlightedSprite')
  request.r(i4927[2], i4927[3], 0, i4926, 'm_PressedSprite')
  request.r(i4927[4], i4927[5], 0, i4926, 'm_SelectedSprite')
  request.r(i4927[6], i4927[7], 0, i4926, 'm_DisabledSprite')
  return i4926
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i4928 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i4929 = data
  i4928.m_NormalTrigger = i4929[0]
  i4928.m_HighlightedTrigger = i4929[1]
  i4928.m_PressedTrigger = i4929[2]
  i4928.m_SelectedTrigger = i4929[3]
  i4928.m_DisabledTrigger = i4929[4]
  return i4928
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i4930 = root || request.c( 'UnityEngine.UI.Image' )
  var i4931 = data
  request.r(i4931[0], i4931[1], 0, i4930, 'm_Sprite')
  i4930.m_Type = i4931[2]
  i4930.m_PreserveAspect = !!i4931[3]
  i4930.m_FillCenter = !!i4931[4]
  i4930.m_FillMethod = i4931[5]
  i4930.m_FillAmount = i4931[6]
  i4930.m_FillClockwise = !!i4931[7]
  i4930.m_FillOrigin = i4931[8]
  i4930.m_UseSpriteMesh = !!i4931[9]
  i4930.m_PixelsPerUnitMultiplier = i4931[10]
  request.r(i4931[11], i4931[12], 0, i4930, 'm_Material')
  i4930.m_Maskable = !!i4931[13]
  i4930.m_Color = new pc.Color(i4931[14], i4931[15], i4931[16], i4931[17])
  i4930.m_RaycastTarget = !!i4931[18]
  i4930.m_RaycastPadding = new pc.Vec4( i4931[19], i4931[20], i4931[21], i4931[22] )
  return i4930
}

Deserializers["UnityEngine.UI.Text"] = function (request, data, root) {
  var i4932 = root || request.c( 'UnityEngine.UI.Text' )
  var i4933 = data
  i4932.m_FontData = request.d('UnityEngine.UI.FontData', i4933[0], i4932.m_FontData)
  i4932.m_Text = i4933[1]
  request.r(i4933[2], i4933[3], 0, i4932, 'm_Material')
  i4932.m_Maskable = !!i4933[4]
  i4932.m_Color = new pc.Color(i4933[5], i4933[6], i4933[7], i4933[8])
  i4932.m_RaycastTarget = !!i4933[9]
  i4932.m_RaycastPadding = new pc.Vec4( i4933[10], i4933[11], i4933[12], i4933[13] )
  return i4932
}

Deserializers["UnityEngine.UI.FontData"] = function (request, data, root) {
  var i4934 = root || request.c( 'UnityEngine.UI.FontData' )
  var i4935 = data
  request.r(i4935[0], i4935[1], 0, i4934, 'm_Font')
  i4934.m_FontSize = i4935[2]
  i4934.m_FontStyle = i4935[3]
  i4934.m_BestFit = !!i4935[4]
  i4934.m_MinSize = i4935[5]
  i4934.m_MaxSize = i4935[6]
  i4934.m_Alignment = i4935[7]
  i4934.m_AlignByGeometry = !!i4935[8]
  i4934.m_RichText = !!i4935[9]
  i4934.m_HorizontalOverflow = i4935[10]
  i4934.m_VerticalOverflow = i4935[11]
  i4934.m_LineSpacing = i4935[12]
  return i4934
}

Deserializers["DG.Tweening.DOTweenAnimation"] = function (request, data, root) {
  var i4936 = root || request.c( 'DG.Tweening.DOTweenAnimation' )
  var i4937 = data
  i4936.targetIsSelf = !!i4937[0]
  request.r(i4937[1], i4937[2], 0, i4936, 'targetGO')
  i4936.tweenTargetIsTargetGO = !!i4937[3]
  i4936.delay = i4937[4]
  i4936.duration = i4937[5]
  i4936.easeType = i4937[6]
  i4936.easeCurve = new pc.AnimationCurve( { keys_flow: i4937[7] } )
  i4936.loopType = i4937[8]
  i4936.loops = i4937[9]
  i4936.id = i4937[10]
  i4936.isRelative = !!i4937[11]
  i4936.isFrom = !!i4937[12]
  i4936.isIndependentUpdate = !!i4937[13]
  i4936.autoKill = !!i4937[14]
  i4936.autoGenerate = !!i4937[15]
  i4936.isActive = !!i4937[16]
  i4936.isValid = !!i4937[17]
  request.r(i4937[18], i4937[19], 0, i4936, 'target')
  i4936.animationType = i4937[20]
  i4936.targetType = i4937[21]
  i4936.forcedTargetType = i4937[22]
  i4936.autoPlay = !!i4937[23]
  i4936.useTargetAsV3 = !!i4937[24]
  i4936.endValueFloat = i4937[25]
  i4936.endValueV3 = new pc.Vec3( i4937[26], i4937[27], i4937[28] )
  i4936.endValueV2 = new pc.Vec2( i4937[29], i4937[30] )
  i4936.endValueColor = new pc.Color(i4937[31], i4937[32], i4937[33], i4937[34])
  i4936.endValueString = i4937[35]
  i4936.endValueRect = UnityEngine.Rect.MinMaxRect(i4937[36], i4937[37], i4937[38], i4937[39])
  request.r(i4937[40], i4937[41], 0, i4936, 'endValueTransform')
  i4936.optionalBool0 = !!i4937[42]
  i4936.optionalBool1 = !!i4937[43]
  i4936.optionalFloat0 = i4937[44]
  i4936.optionalInt0 = i4937[45]
  i4936.optionalRotationMode = i4937[46]
  i4936.optionalScrambleMode = i4937[47]
  i4936.optionalShakeRandomnessMode = i4937[48]
  i4936.optionalString = i4937[49]
  i4936.updateType = i4937[50]
  i4936.isSpeedBased = !!i4937[51]
  i4936.hasOnStart = !!i4937[52]
  i4936.hasOnPlay = !!i4937[53]
  i4936.hasOnUpdate = !!i4937[54]
  i4936.hasOnStepComplete = !!i4937[55]
  i4936.hasOnComplete = !!i4937[56]
  i4936.hasOnTweenCreated = !!i4937[57]
  i4936.hasOnRewind = !!i4937[58]
  i4936.onStart = request.d('UnityEngine.Events.UnityEvent', i4937[59], i4936.onStart)
  i4936.onPlay = request.d('UnityEngine.Events.UnityEvent', i4937[60], i4936.onPlay)
  i4936.onUpdate = request.d('UnityEngine.Events.UnityEvent', i4937[61], i4936.onUpdate)
  i4936.onStepComplete = request.d('UnityEngine.Events.UnityEvent', i4937[62], i4936.onStepComplete)
  i4936.onComplete = request.d('UnityEngine.Events.UnityEvent', i4937[63], i4936.onComplete)
  i4936.onTweenCreated = request.d('UnityEngine.Events.UnityEvent', i4937[64], i4936.onTweenCreated)
  i4936.onRewind = request.d('UnityEngine.Events.UnityEvent', i4937[65], i4936.onRewind)
  return i4936
}

Deserializers["UnityEngine.Events.UnityEvent"] = function (request, data, root) {
  var i4938 = root || request.c( 'UnityEngine.Events.UnityEvent' )
  var i4939 = data
  i4938.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i4939[0], i4938.m_PersistentCalls)
  return i4938
}

Deserializers["PlayerController"] = function (request, data, root) {
  var i4940 = root || request.c( 'PlayerController' )
  var i4941 = data
  i4940.ShootCD = i4941[0]
  request.r(i4941[1], i4941[2], 0, i4940, 'currentMonster')
  request.r(i4941[3], i4941[4], 0, i4940, 'left')
  request.r(i4941[5], i4941[6], 0, i4940, 'right')
  request.r(i4941[7], i4941[8], 0, i4940, 'gun')
  request.r(i4941[9], i4941[10], 0, i4940, 'bulletPrefab')
  i4940.canShoot = !!i4941[11]
  i4940.onCD = !!i4941[12]
  request.r(i4941[13], i4941[14], 0, i4940, 'poolParent')
  request.r(i4941[15], i4941[16], 0, i4940, 'shootSound')
  i4940.timeMotor = i4941[17]
  return i4940
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.TargetJoint2D"] = function (request, data, root) {
  var i4942 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.TargetJoint2D' )
  var i4943 = data
  i4942.autoConfigureTarget = !!i4943[0]
  i4942.target = new pc.Vec2( i4943[1], i4943[2] )
  i4942.anchor = new pc.Vec2( i4943[3], i4943[4] )
  i4942.maxForce = i4943[5]
  i4942.dampingRatio = i4943[6]
  i4942.frequency = i4943[7]
  request.r(i4943[8], i4943[9], 0, i4942, 'connectedBody')
  i4942.breakForce = i4943[10]
  i4942.breakTorque = i4943[11]
  i4942.enableCollision = !!i4943[12]
  i4942.enabled = !!i4943[13]
  return i4942
}

Deserializers["GameController"] = function (request, data, root) {
  var i4944 = root || request.c( 'GameController' )
  var i4945 = data
  i4944.OnAddMonster = request.d('System.Action', i4945[0], i4944.OnAddMonster)
  request.r(i4945[1], i4945[2], 0, i4944, 'area')
  request.r(i4945[3], i4945[4], 0, i4944, 'player')
  request.r(i4945[5], i4945[6], 0, i4944, 'areaTut')
  request.r(i4945[7], i4945[8], 0, i4944, 'tut')
  i4944.numMonster = i4945[9]
  var i4947 = i4945[10]
  var i4946 = new (System.Collections.Generic.List$1(Bridge.ns('Monster')))
  for(var i = 0; i < i4947.length; i += 1) {
    i4946.add(request.d('Monster', i4947[i + 0]));
  }
  i4944.monsters = i4946
  i4944.currentMonster = request.d('Monster', i4945[11], i4944.currentMonster)
  request.r(i4945[12], i4945[13], 0, i4944, 'world')
  request.r(i4945[14], i4945[15], 0, i4944, 'clickSound')
  return i4944
}

Deserializers["System.Action"] = function (request, data, root) {
  var i4948 = root || request.c( 'System.Action' )
  var i4949 = data
  return i4948
}

Deserializers["Monster"] = function (request, data, root) {
  var i4952 = root || request.c( 'Monster' )
  var i4953 = data
  request.r(i4953[0], i4953[1], 0, i4952, 'Button')
  request.r(i4953[2], i4953[3], 0, i4952, 'Selected')
  request.r(i4953[4], i4953[5], 0, i4952, 'Prefab')
  return i4952
}

Deserializers["LayoutController"] = function (request, data, root) {
  var i4954 = root || request.c( 'LayoutController' )
  var i4955 = data
  request.r(i4955[0], i4955[1], 0, i4954, 'main')
  request.r(i4955[2], i4955[3], 0, i4954, 'button')
  return i4954
}

Deserializers["LunaController"] = function (request, data, root) {
  var i4956 = root || request.c( 'LunaController' )
  var i4957 = data
  request.r(i4957[0], i4957[1], 0, i4956, 'BGTexture')
  i4956.UseTime = !!i4957[2]
  i4956.TimePlay = i4957[3]
  i4956.UseCountPlay = !!i4957[4]
  i4956.MaxCountPlay = i4957[5]
  request.r(i4957[6], i4957[7], 0, i4956, 'BGImage')
  var i4959 = i4957[8]
  var i4958 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.UI.Button')))
  for(var i = 0; i < i4959.length; i += 2) {
  request.r(i4959[i + 0], i4959[i + 1], 1, i4958, '')
  }
  i4956.CTA = i4958
  i4956.count = i4957[9]
  return i4956
}

Deserializers["AudioController"] = function (request, data, root) {
  var i4962 = root || request.c( 'AudioController' )
  var i4963 = data
  request.r(i4963[0], i4963[1], 0, i4962, 'BGM')
  request.r(i4963[2], i4963[3], 0, i4962, 'musicSource')
  request.r(i4963[4], i4963[5], 0, i4962, 'pool')
  return i4962
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.AudioSource"] = function (request, data, root) {
  var i4964 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.AudioSource' )
  var i4965 = data
  request.r(i4965[0], i4965[1], 0, i4964, 'clip')
  request.r(i4965[2], i4965[3], 0, i4964, 'outputAudioMixerGroup')
  i4964.playOnAwake = !!i4965[4]
  i4964.loop = !!i4965[5]
  i4964.time = i4965[6]
  i4964.volume = i4965[7]
  i4964.pitch = i4965[8]
  i4964.enabled = !!i4965[9]
  return i4964
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i4966 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i4967 = data
  i4966.ambientIntensity = i4967[0]
  i4966.reflectionIntensity = i4967[1]
  i4966.ambientMode = i4967[2]
  i4966.ambientLight = new pc.Color(i4967[3], i4967[4], i4967[5], i4967[6])
  i4966.ambientSkyColor = new pc.Color(i4967[7], i4967[8], i4967[9], i4967[10])
  i4966.ambientGroundColor = new pc.Color(i4967[11], i4967[12], i4967[13], i4967[14])
  i4966.ambientEquatorColor = new pc.Color(i4967[15], i4967[16], i4967[17], i4967[18])
  i4966.fogColor = new pc.Color(i4967[19], i4967[20], i4967[21], i4967[22])
  i4966.fogEndDistance = i4967[23]
  i4966.fogStartDistance = i4967[24]
  i4966.fogDensity = i4967[25]
  i4966.fog = !!i4967[26]
  request.r(i4967[27], i4967[28], 0, i4966, 'skybox')
  i4966.fogMode = i4967[29]
  var i4969 = i4967[30]
  var i4968 = []
  for(var i = 0; i < i4969.length; i += 1) {
    i4968.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i4969[i + 0]) );
  }
  i4966.lightmaps = i4968
  i4966.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i4967[31], i4966.lightProbes)
  i4966.lightmapsMode = i4967[32]
  i4966.mixedBakeMode = i4967[33]
  i4966.environmentLightingMode = i4967[34]
  i4966.ambientProbe = new pc.SphericalHarmonicsL2(i4967[35])
  request.r(i4967[36], i4967[37], 0, i4966, 'customReflection')
  request.r(i4967[38], i4967[39], 0, i4966, 'defaultReflection')
  i4966.defaultReflectionMode = i4967[40]
  i4966.defaultReflectionResolution = i4967[41]
  i4966.sunLightObjectId = i4967[42]
  i4966.pixelLightCount = i4967[43]
  i4966.defaultReflectionHDR = !!i4967[44]
  i4966.hasLightDataAsset = !!i4967[45]
  i4966.hasManualGenerate = !!i4967[46]
  return i4966
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i4972 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i4973 = data
  request.r(i4973[0], i4973[1], 0, i4972, 'lightmapColor')
  request.r(i4973[2], i4973[3], 0, i4972, 'lightmapDirection')
  request.r(i4973[4], i4973[5], 0, i4972, 'shadowMask')
  return i4972
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i4974 = root || new UnityEngine.LightProbes()
  var i4975 = data
  return i4974
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i4982 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i4983 = data
  var i4985 = i4983[0]
  var i4984 = new (System.Collections.Generic.List$1(Bridge.ns('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError')))
  for(var i = 0; i < i4985.length; i += 1) {
    i4984.add(request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError', i4985[i + 0]));
  }
  i4982.ShaderCompilationErrors = i4984
  i4982.name = i4983[1]
  i4982.guid = i4983[2]
  var i4987 = i4983[3]
  var i4986 = []
  for(var i = 0; i < i4987.length; i += 1) {
    i4986.push( i4987[i + 0] );
  }
  i4982.shaderDefinedKeywords = i4986
  var i4989 = i4983[4]
  var i4988 = []
  for(var i = 0; i < i4989.length; i += 1) {
    i4988.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i4989[i + 0]) );
  }
  i4982.passes = i4988
  var i4991 = i4983[5]
  var i4990 = []
  for(var i = 0; i < i4991.length; i += 1) {
    i4990.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i4991[i + 0]) );
  }
  i4982.usePasses = i4990
  var i4993 = i4983[6]
  var i4992 = []
  for(var i = 0; i < i4993.length; i += 1) {
    i4992.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i4993[i + 0]) );
  }
  i4982.defaultParameterValues = i4992
  request.r(i4983[7], i4983[8], 0, i4982, 'unityFallbackShader')
  i4982.readDepth = !!i4983[9]
  i4982.hasDepthOnlyPass = !!i4983[10]
  i4982.isCreatedByShaderGraph = !!i4983[11]
  i4982.disableBatching = !!i4983[12]
  i4982.compiled = !!i4983[13]
  return i4982
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError"] = function (request, data, root) {
  var i4996 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError' )
  var i4997 = data
  i4996.shaderName = i4997[0]
  i4996.errorMessage = i4997[1]
  return i4996
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i5002 = root || new pc.UnityShaderPass()
  var i5003 = data
  i5002.id = i5003[0]
  i5002.subShaderIndex = i5003[1]
  i5002.name = i5003[2]
  i5002.passType = i5003[3]
  i5002.grabPassTextureName = i5003[4]
  i5002.usePass = !!i5003[5]
  i5002.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i5003[6], i5002.zTest)
  i5002.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i5003[7], i5002.zWrite)
  i5002.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i5003[8], i5002.culling)
  i5002.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i5003[9], i5002.blending)
  i5002.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i5003[10], i5002.alphaBlending)
  i5002.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i5003[11], i5002.colorWriteMask)
  i5002.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i5003[12], i5002.offsetUnits)
  i5002.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i5003[13], i5002.offsetFactor)
  i5002.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i5003[14], i5002.stencilRef)
  i5002.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i5003[15], i5002.stencilReadMask)
  i5002.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i5003[16], i5002.stencilWriteMask)
  i5002.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i5003[17], i5002.stencilOp)
  i5002.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i5003[18], i5002.stencilOpFront)
  i5002.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i5003[19], i5002.stencilOpBack)
  var i5005 = i5003[20]
  var i5004 = []
  for(var i = 0; i < i5005.length; i += 1) {
    i5004.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i5005[i + 0]) );
  }
  i5002.tags = i5004
  var i5007 = i5003[21]
  var i5006 = []
  for(var i = 0; i < i5007.length; i += 1) {
    i5006.push( i5007[i + 0] );
  }
  i5002.passDefinedKeywords = i5006
  var i5009 = i5003[22]
  var i5008 = []
  for(var i = 0; i < i5009.length; i += 1) {
    i5008.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup', i5009[i + 0]) );
  }
  i5002.passDefinedKeywordGroups = i5008
  var i5011 = i5003[23]
  var i5010 = []
  for(var i = 0; i < i5011.length; i += 1) {
    i5010.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i5011[i + 0]) );
  }
  i5002.variants = i5010
  var i5013 = i5003[24]
  var i5012 = []
  for(var i = 0; i < i5013.length; i += 1) {
    i5012.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i5013[i + 0]) );
  }
  i5002.excludedVariants = i5012
  i5002.hasDepthReader = !!i5003[25]
  return i5002
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i5014 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i5015 = data
  i5014.val = i5015[0]
  i5014.name = i5015[1]
  return i5014
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i5016 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i5017 = data
  i5016.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i5017[0], i5016.src)
  i5016.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i5017[1], i5016.dst)
  i5016.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i5017[2], i5016.op)
  return i5016
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i5018 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i5019 = data
  i5018.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i5019[0], i5018.pass)
  i5018.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i5019[1], i5018.fail)
  i5018.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i5019[2], i5018.zFail)
  i5018.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i5019[3], i5018.comp)
  return i5018
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i5022 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i5023 = data
  i5022.name = i5023[0]
  i5022.value = i5023[1]
  return i5022
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup"] = function (request, data, root) {
  var i5026 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup' )
  var i5027 = data
  var i5029 = i5027[0]
  var i5028 = []
  for(var i = 0; i < i5029.length; i += 1) {
    i5028.push( i5029[i + 0] );
  }
  i5026.keywords = i5028
  i5026.hasDiscard = !!i5027[1]
  return i5026
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i5032 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i5033 = data
  i5032.passId = i5033[0]
  i5032.subShaderIndex = i5033[1]
  var i5035 = i5033[2]
  var i5034 = []
  for(var i = 0; i < i5035.length; i += 1) {
    i5034.push( i5035[i + 0] );
  }
  i5032.keywords = i5034
  i5032.vertexProgram = i5033[3]
  i5032.fragmentProgram = i5033[4]
  i5032.exportedForWebGl2 = !!i5033[5]
  i5032.readDepth = !!i5033[6]
  return i5032
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i5038 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i5039 = data
  request.r(i5039[0], i5039[1], 0, i5038, 'shader')
  i5038.pass = i5039[2]
  return i5038
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i5042 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i5043 = data
  i5042.name = i5043[0]
  i5042.type = i5043[1]
  i5042.value = new pc.Vec4( i5043[2], i5043[3], i5043[4], i5043[5] )
  i5042.textureValue = i5043[6]
  i5042.shaderPropertyFlag = i5043[7]
  return i5042
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i5044 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i5045 = data
  i5044.name = i5045[0]
  request.r(i5045[1], i5045[2], 0, i5044, 'texture')
  i5044.aabb = i5045[3]
  i5044.vertices = i5045[4]
  i5044.triangles = i5045[5]
  i5044.textureRect = UnityEngine.Rect.MinMaxRect(i5045[6], i5045[7], i5045[8], i5045[9])
  i5044.packedRect = UnityEngine.Rect.MinMaxRect(i5045[10], i5045[11], i5045[12], i5045[13])
  i5044.border = new pc.Vec4( i5045[14], i5045[15], i5045[16], i5045[17] )
  i5044.transparency = i5045[18]
  i5044.bounds = i5045[19]
  i5044.pixelsPerUnit = i5045[20]
  i5044.textureWidth = i5045[21]
  i5044.textureHeight = i5045[22]
  i5044.nativeSize = new pc.Vec2( i5045[23], i5045[24] )
  i5044.pivot = new pc.Vec2( i5045[25], i5045[26] )
  i5044.textureRectOffset = new pc.Vec2( i5045[27], i5045[28] )
  return i5044
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i5046 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i5047 = data
  i5046.name = i5047[0]
  return i5046
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font"] = function (request, data, root) {
  var i5048 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font' )
  var i5049 = data
  i5048.name = i5049[0]
  i5048.ascent = i5049[1]
  i5048.originalLineHeight = i5049[2]
  i5048.fontSize = i5049[3]
  var i5051 = i5049[4]
  var i5050 = []
  for(var i = 0; i < i5051.length; i += 1) {
    i5050.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo', i5051[i + 0]) );
  }
  i5048.characterInfo = i5050
  request.r(i5049[5], i5049[6], 0, i5048, 'texture')
  i5048.originalFontSize = i5049[7]
  return i5048
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo"] = function (request, data, root) {
  var i5054 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo' )
  var i5055 = data
  i5054.index = i5055[0]
  i5054.advance = i5055[1]
  i5054.bearing = i5055[2]
  i5054.glyphWidth = i5055[3]
  i5054.glyphHeight = i5055[4]
  i5054.minX = i5055[5]
  i5054.maxX = i5055[6]
  i5054.minY = i5055[7]
  i5054.maxY = i5055[8]
  i5054.uvBottomLeftX = i5055[9]
  i5054.uvBottomLeftY = i5055[10]
  i5054.uvBottomRightX = i5055[11]
  i5054.uvBottomRightY = i5055[12]
  i5054.uvTopLeftX = i5055[13]
  i5054.uvTopLeftY = i5055[14]
  i5054.uvTopRightX = i5055[15]
  i5054.uvTopRightY = i5055[16]
  return i5054
}

Deserializers["DG.Tweening.Core.DOTweenSettings"] = function (request, data, root) {
  var i5056 = root || request.c( 'DG.Tweening.Core.DOTweenSettings' )
  var i5057 = data
  i5056.useSafeMode = !!i5057[0]
  i5056.safeModeOptions = request.d('DG.Tweening.Core.DOTweenSettings+SafeModeOptions', i5057[1], i5056.safeModeOptions)
  i5056.timeScale = i5057[2]
  i5056.unscaledTimeScale = i5057[3]
  i5056.useSmoothDeltaTime = !!i5057[4]
  i5056.maxSmoothUnscaledTime = i5057[5]
  i5056.rewindCallbackMode = i5057[6]
  i5056.showUnityEditorReport = !!i5057[7]
  i5056.logBehaviour = i5057[8]
  i5056.drawGizmos = !!i5057[9]
  i5056.defaultRecyclable = !!i5057[10]
  i5056.defaultAutoPlay = i5057[11]
  i5056.defaultUpdateType = i5057[12]
  i5056.defaultTimeScaleIndependent = !!i5057[13]
  i5056.defaultEaseType = i5057[14]
  i5056.defaultEaseOvershootOrAmplitude = i5057[15]
  i5056.defaultEasePeriod = i5057[16]
  i5056.defaultAutoKill = !!i5057[17]
  i5056.defaultLoopType = i5057[18]
  i5056.debugMode = !!i5057[19]
  i5056.debugStoreTargetId = !!i5057[20]
  i5056.showPreviewPanel = !!i5057[21]
  i5056.storeSettingsLocation = i5057[22]
  i5056.modules = request.d('DG.Tweening.Core.DOTweenSettings+ModulesSetup', i5057[23], i5056.modules)
  i5056.createASMDEF = !!i5057[24]
  i5056.showPlayingTweens = !!i5057[25]
  i5056.showPausedTweens = !!i5057[26]
  return i5056
}

Deserializers["DG.Tweening.Core.DOTweenSettings+SafeModeOptions"] = function (request, data, root) {
  var i5058 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+SafeModeOptions' )
  var i5059 = data
  i5058.logBehaviour = i5059[0]
  i5058.nestedTweenFailureBehaviour = i5059[1]
  return i5058
}

Deserializers["DG.Tweening.Core.DOTweenSettings+ModulesSetup"] = function (request, data, root) {
  var i5060 = root || request.c( 'DG.Tweening.Core.DOTweenSettings+ModulesSetup' )
  var i5061 = data
  i5060.showPanel = !!i5061[0]
  i5060.audioEnabled = !!i5061[1]
  i5060.physicsEnabled = !!i5061[2]
  i5060.physics2DEnabled = !!i5061[3]
  i5060.spriteEnabled = !!i5061[4]
  i5060.uiEnabled = !!i5061[5]
  i5060.textMeshProEnabled = !!i5061[6]
  i5060.tk2DEnabled = !!i5061[7]
  i5060.deAudioEnabled = !!i5061[8]
  i5060.deUnityExtendedEnabled = !!i5061[9]
  i5060.epoOutlineEnabled = !!i5061[10]
  return i5060
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i5062 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i5063 = data
  var i5065 = i5063[0]
  var i5064 = []
  for(var i = 0; i < i5065.length; i += 1) {
    i5064.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i5065[i + 0]) );
  }
  i5062.files = i5064
  i5062.componentToPrefabIds = i5063[1]
  return i5062
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i5068 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i5069 = data
  i5068.path = i5069[0]
  request.r(i5069[1], i5069[2], 0, i5068, 'unityObject')
  return i5068
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i5070 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i5071 = data
  var i5073 = i5071[0]
  var i5072 = []
  for(var i = 0; i < i5073.length; i += 1) {
    i5072.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i5073[i + 0]) );
  }
  i5070.scriptsExecutionOrder = i5072
  var i5075 = i5071[1]
  var i5074 = []
  for(var i = 0; i < i5075.length; i += 1) {
    i5074.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i5075[i + 0]) );
  }
  i5070.sortingLayers = i5074
  var i5077 = i5071[2]
  var i5076 = []
  for(var i = 0; i < i5077.length; i += 1) {
    i5076.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i5077[i + 0]) );
  }
  i5070.cullingLayers = i5076
  i5070.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i5071[3], i5070.timeSettings)
  i5070.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i5071[4], i5070.physicsSettings)
  i5070.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i5071[5], i5070.physics2DSettings)
  i5070.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i5071[6], i5070.qualitySettings)
  i5070.enableRealtimeShadows = !!i5071[7]
  i5070.enableAutoInstancing = !!i5071[8]
  i5070.enableStaticBatching = !!i5071[9]
  i5070.enableDynamicBatching = !!i5071[10]
  i5070.usePreservativeDynamicBatching = !!i5071[11]
  i5070.lightmapEncodingQuality = i5071[12]
  i5070.desiredColorSpace = i5071[13]
  var i5079 = i5071[14]
  var i5078 = []
  for(var i = 0; i < i5079.length; i += 1) {
    i5078.push( i5079[i + 0] );
  }
  i5070.allTags = i5078
  return i5070
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i5082 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i5083 = data
  i5082.name = i5083[0]
  i5082.value = i5083[1]
  return i5082
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i5086 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i5087 = data
  i5086.id = i5087[0]
  i5086.name = i5087[1]
  i5086.value = i5087[2]
  return i5086
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i5090 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i5091 = data
  i5090.id = i5091[0]
  i5090.name = i5091[1]
  return i5090
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i5092 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i5093 = data
  i5092.fixedDeltaTime = i5093[0]
  i5092.maximumDeltaTime = i5093[1]
  i5092.timeScale = i5093[2]
  i5092.maximumParticleTimestep = i5093[3]
  return i5092
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i5094 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i5095 = data
  i5094.gravity = new pc.Vec3( i5095[0], i5095[1], i5095[2] )
  i5094.defaultSolverIterations = i5095[3]
  i5094.bounceThreshold = i5095[4]
  i5094.autoSyncTransforms = !!i5095[5]
  i5094.autoSimulation = !!i5095[6]
  var i5097 = i5095[7]
  var i5096 = []
  for(var i = 0; i < i5097.length; i += 1) {
    i5096.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i5097[i + 0]) );
  }
  i5094.collisionMatrix = i5096
  return i5094
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i5100 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i5101 = data
  i5100.enabled = !!i5101[0]
  i5100.layerId = i5101[1]
  i5100.otherLayerId = i5101[2]
  return i5100
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i5102 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i5103 = data
  request.r(i5103[0], i5103[1], 0, i5102, 'material')
  i5102.gravity = new pc.Vec2( i5103[2], i5103[3] )
  i5102.positionIterations = i5103[4]
  i5102.velocityIterations = i5103[5]
  i5102.velocityThreshold = i5103[6]
  i5102.maxLinearCorrection = i5103[7]
  i5102.maxAngularCorrection = i5103[8]
  i5102.maxTranslationSpeed = i5103[9]
  i5102.maxRotationSpeed = i5103[10]
  i5102.baumgarteScale = i5103[11]
  i5102.baumgarteTOIScale = i5103[12]
  i5102.timeToSleep = i5103[13]
  i5102.linearSleepTolerance = i5103[14]
  i5102.angularSleepTolerance = i5103[15]
  i5102.defaultContactOffset = i5103[16]
  i5102.autoSimulation = !!i5103[17]
  i5102.queriesHitTriggers = !!i5103[18]
  i5102.queriesStartInColliders = !!i5103[19]
  i5102.callbacksOnDisable = !!i5103[20]
  i5102.reuseCollisionCallbacks = !!i5103[21]
  i5102.autoSyncTransforms = !!i5103[22]
  var i5105 = i5103[23]
  var i5104 = []
  for(var i = 0; i < i5105.length; i += 1) {
    i5104.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i5105[i + 0]) );
  }
  i5102.collisionMatrix = i5104
  return i5102
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i5108 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i5109 = data
  i5108.enabled = !!i5109[0]
  i5108.layerId = i5109[1]
  i5108.otherLayerId = i5109[2]
  return i5108
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i5110 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i5111 = data
  var i5113 = i5111[0]
  var i5112 = []
  for(var i = 0; i < i5113.length; i += 1) {
    i5112.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i5113[i + 0]) );
  }
  i5110.qualityLevels = i5112
  var i5115 = i5111[1]
  var i5114 = []
  for(var i = 0; i < i5115.length; i += 1) {
    i5114.push( i5115[i + 0] );
  }
  i5110.names = i5114
  i5110.shadows = i5111[2]
  i5110.anisotropicFiltering = i5111[3]
  i5110.antiAliasing = i5111[4]
  i5110.lodBias = i5111[5]
  i5110.shadowCascades = i5111[6]
  i5110.shadowDistance = i5111[7]
  i5110.shadowmaskMode = i5111[8]
  i5110.shadowProjection = i5111[9]
  i5110.shadowResolution = i5111[10]
  i5110.softParticles = !!i5111[11]
  i5110.softVegetation = !!i5111[12]
  i5110.activeColorSpace = i5111[13]
  i5110.desiredColorSpace = i5111[14]
  i5110.masterTextureLimit = i5111[15]
  i5110.maxQueuedFrames = i5111[16]
  i5110.particleRaycastBudget = i5111[17]
  i5110.pixelLightCount = i5111[18]
  i5110.realtimeReflectionProbes = !!i5111[19]
  i5110.shadowCascade2Split = i5111[20]
  i5110.shadowCascade4Split = new pc.Vec3( i5111[21], i5111[22], i5111[23] )
  i5110.streamingMipmapsActive = !!i5111[24]
  i5110.vSyncCount = i5111[25]
  i5110.asyncUploadBufferSize = i5111[26]
  i5110.asyncUploadTimeSlice = i5111[27]
  i5110.billboardsFaceCameraPosition = !!i5111[28]
  i5110.shadowNearPlaneOffset = i5111[29]
  i5110.streamingMipmapsMemoryBudget = i5111[30]
  i5110.maximumLODLevel = i5111[31]
  i5110.streamingMipmapsAddAllCameras = !!i5111[32]
  i5110.streamingMipmapsMaxLevelReduction = i5111[33]
  i5110.streamingMipmapsRenderersPerFrame = i5111[34]
  i5110.resolutionScalingFixedDPIFactor = i5111[35]
  i5110.streamingMipmapsMaxFileIORequests = i5111[36]
  i5110.currentQualityLevel = i5111[37]
  return i5110
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i5118 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i5119 = data
  request.r(i5119[0], i5119[1], 0, i5118, 'm_ObjectArgument')
  i5118.m_ObjectArgumentAssemblyTypeName = i5119[2]
  i5118.m_IntArgument = i5119[3]
  i5118.m_FloatArgument = i5119[4]
  i5118.m_StringArgument = i5119[5]
  i5118.m_BoolArgument = !!i5119[6]
  return i5118
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10,"graphicsFormat":11,"sRGBTexture":12,"desiredColorSpace":13,"wrapU":14,"wrapV":15},"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Components.Transform":{"position":0,"scale":3,"rotation":6},"Luna.Unity.DTO.UnityEngine.Components.SpriteRenderer":{"color":0,"sprite":4,"flipX":6,"flipY":7,"drawMode":8,"size":9,"tileMode":11,"adaptiveModeThreshold":12,"maskInteraction":13,"spriteSortPoint":14,"enabled":15,"sharedMaterial":16,"sharedMaterials":18,"receiveShadows":19,"shadowCastingMode":20,"sortingLayerID":21,"sortingOrder":22,"lightmapIndex":23,"lightmapSceneIndex":24,"lightmapScaleOffset":25,"lightProbeUsage":29,"reflectionProbeUsage":30},"Luna.Unity.DTO.UnityEngine.Components.CircleCollider2D":{"radius":0,"enabled":1,"isTrigger":2,"usedByEffector":3,"density":4,"offset":5,"material":7},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tagId":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Components.SortingGroup":{"sortingLayerIndex":0,"sortingOrder":1,"sortingLayerName":2,"enabled":3},"Luna.Unity.DTO.UnityEngine.Components.Rigidbody2D":{"bodyType":0,"material":1,"simulated":3,"useAutoMass":4,"mass":5,"drag":6,"angularDrag":7,"gravityScale":8,"collisionDetectionMode":9,"sleepMode":10,"constraints":11},"Luna.Unity.DTO.UnityEngine.Components.BoxCollider2D":{"usedByComposite":0,"autoTiling":1,"size":2,"edgeRadius":4,"enabled":5,"isTrigger":6,"usedByEffector":7,"density":8,"offset":9,"material":11},"Luna.Unity.DTO.UnityEngine.Components.HingeJoint2D":{"useLimits":0,"limits":1,"useMotor":2,"motor":3,"anchor":4,"connectedAnchor":6,"autoConfigureConnectedAnchor":8,"connectedBody":9,"breakForce":11,"breakTorque":12,"enableCollision":13,"enabled":14},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"aspect":0,"orthographic":1,"orthographicSize":2,"backgroundColor":3,"nearClipPlane":7,"farClipPlane":8,"fieldOfView":9,"depth":10,"clearFlags":11,"cullingMask":12,"rect":13,"targetTexture":14,"usePhysicalProperties":16,"focalLength":17,"sensorSize":18,"lensShift":20,"gateFit":22,"commandBufferCount":23,"cameraType":24,"enabled":25},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"planeDistance":0,"referencePixelsPerUnit":1,"isFallbackOverlay":2,"renderMode":3,"renderOrder":4,"sortingLayerName":5,"sortingOrder":6,"scaleFactor":7,"worldCamera":8,"overrideSorting":10,"pixelPerfect":11,"targetDisplay":12,"overridePixelPerfect":13,"enabled":14},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Components.TargetJoint2D":{"autoConfigureTarget":0,"target":1,"anchor":3,"maxForce":5,"dampingRatio":6,"frequency":7,"connectedBody":8,"breakForce":10,"breakTorque":11,"enableCollision":12,"enabled":13},"Luna.Unity.DTO.UnityEngine.Components.AudioSource":{"clip":0,"outputAudioMixerGroup":2,"playOnAwake":4,"loop":5,"time":6,"volume":7,"pitch":8,"enabled":9},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"mixedBakeMode":33,"environmentLightingMode":34,"ambientProbe":35,"customReflection":36,"defaultReflection":38,"defaultReflectionMode":40,"defaultReflectionResolution":41,"sunLightObjectId":42,"pixelLightCount":43,"defaultReflectionHDR":44,"hasLightDataAsset":45,"hasManualGenerate":46},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2,"shadowMask":4},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"ShaderCompilationErrors":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"hasDepthOnlyPass":10,"isCreatedByShaderGraph":11,"disableBatching":12,"compiled":13},"Luna.Unity.DTO.UnityEngine.Assets.Shader+ShaderCompilationError":{"shaderName":0,"errorMessage":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"grabPassTextureName":4,"usePass":5,"zTest":6,"zWrite":7,"culling":8,"blending":9,"alphaBlending":10,"colorWriteMask":11,"offsetUnits":12,"offsetFactor":13,"stencilRef":14,"stencilReadMask":15,"stencilWriteMask":16,"stencilOp":17,"stencilOpFront":18,"stencilOpBack":19,"tags":20,"passDefinedKeywords":21,"passDefinedKeywordGroups":22,"variants":23,"excludedVariants":24,"hasDepthReader":25},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+KeywordGroup":{"keywords":0,"hasDiscard":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"exportedForWebGl2":5,"readDepth":6},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6,"shaderPropertyFlag":7},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.AudioClip":{"name":0},"Luna.Unity.DTO.UnityEngine.Assets.Font":{"name":0,"ascent":1,"originalLineHeight":2,"fontSize":3,"characterInfo":4,"texture":5,"originalFontSize":7},"Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo":{"index":0,"advance":1,"bearing":2,"glyphWidth":3,"glyphHeight":4,"minX":5,"maxX":6,"minY":7,"maxY":8,"uvBottomLeftX":9,"uvBottomLeftY":10,"uvBottomRightX":11,"uvBottomRightY":12,"uvTopLeftX":13,"uvTopLeftY":14,"uvTopRightX":15,"uvTopRightY":16},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"enableRealtimeShadows":7,"enableAutoInstancing":8,"enableStaticBatching":9,"enableDynamicBatching":10,"usePreservativeDynamicBatching":11,"lightmapEncodingQuality":12,"desiredColorSpace":13,"allTags":14},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"baumgarteScale":11,"baumgarteTOIScale":12,"timeToSleep":13,"linearSleepTolerance":14,"angularSleepTolerance":15,"defaultContactOffset":16,"autoSimulation":17,"queriesHitTriggers":18,"queriesStartInColliders":19,"callbacksOnDisable":20,"reuseCollisionCallbacks":21,"autoSyncTransforms":22,"collisionMatrix":23},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37}}

Deserializers.requiredComponents = {"42":[43],"44":[43],"45":[43],"46":[43],"47":[43],"48":[43],"49":[50],"51":[15],"52":[53],"54":[53],"55":[53],"56":[53],"57":[53],"58":[53],"59":[12],"60":[12],"61":[12],"62":[12],"63":[12],"64":[12],"11":[12],"65":[12],"66":[12],"35":[12],"67":[12],"68":[12],"69":[12],"70":[15],"71":[72],"73":[74],"75":[74],"21":[20],"76":[2],"77":[15],"78":[79],"80":[20],"81":[24,20],"82":[72],"83":[24,20],"84":[20],"85":[20],"86":[72,20],"87":[20,24],"88":[89],"90":[89],"91":[89],"92":[20],"93":[20],"23":[21],"29":[24,20],"27":[20],"22":[21],"94":[20],"95":[20],"96":[20],"97":[20],"98":[20],"99":[20],"100":[20],"101":[20],"102":[20],"25":[24,20],"103":[20],"104":[20],"105":[20],"106":[20],"30":[24,20],"107":[20],"108":[18],"109":[18],"19":[18],"110":[18],"111":[15],"112":[15]}

Deserializers.types = ["UnityEngine.Shader","UnityEngine.Transform","UnityEngine.SpriteRenderer","UnityEngine.Sprite","UnityEngine.Material","UnityEngine.CircleCollider2D","UnityEngine.MonoBehaviour","BulletController","UnityEngine.AudioClip","UnityEngine.Rendering.SortingGroup","MonsterController","UnityEngine.HingeJoint2D","UnityEngine.Rigidbody2D","BalanceController","UnityEngine.BoxCollider2D","UnityEngine.Camera","UnityEngine.AudioListener","UnityEngine.EventSystems.UIBehaviour","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","UnityEngine.RectTransform","UnityEngine.Canvas","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","UnityEngine.CanvasRenderer","UnityEngine.UI.RawImage","UnityEngine.Texture2D","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.Button","UnityEngine.UI.Image","UnityEngine.UI.Text","UnityEngine.Font","DG.Tweening.DOTweenAnimation","PlayerController","UnityEngine.GameObject","UnityEngine.TargetJoint2D","GameController","LayoutController","LunaController","AudioController","UnityEngine.AudioSource","DG.Tweening.Core.DOTweenSettings","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.SkinnedMeshRenderer","UnityEngine.FlareLayer","UnityEngine.CharacterJoint","UnityEngine.Rigidbody","UnityEngine.ConfigurableJoint","UnityEngine.ConstantForce","UnityEngine.FixedJoint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.CompositeCollider2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.MeshRenderer","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","UnityEngine.U2D.Animation.SpriteSkin","UnityEngine.U2D.PixelPerfectCamera","UnityEngine.U2D.SpriteShapeController","UnityEngine.U2D.SpriteShapeRenderer","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text","TMPro.TextContainer","TMPro.TextMeshPro","TMPro.TextMeshProUGUI","Unity.VisualScripting.SceneVariables","Unity.VisualScripting.Variables","Unity.VisualScripting.ScriptMachine","Unity.VisualScripting.StateMachine","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.Mask","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RectMask2D","UnityEngine.UI.ScrollRect","UnityEngine.UI.Scrollbar","UnityEngine.UI.Slider","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster"]

Deserializers.unityVersion = "6000.0.76f1";

Deserializers.productName = "SSP_Luna-SSP_V03";

Deserializers.lunaInitializationTime = "06/25/2026 07:40:14";

Deserializers.lunaDaysRunning = "1.0";

Deserializers.lunaVersion = "7.2.0";

Deserializers.lunaSHA = "ea08d29afe2968efcb8d91d5624f033c6485cc68";

Deserializers.creativeName = "SSP_V03_YenTTH_TamNTM";

Deserializers.lunaAppID = "40364";

Deserializers.projectId = "ff24b2211bd970c4d920bad068d2912a";

Deserializers.packagesInfo = "com.unity.timeline: 1.8.12\ncom.unity.ugui: 2.0.0";

Deserializers.externalJsLibraries = "";

Deserializers.androidLink = ( typeof window !== "undefined")&&window.$environment.packageConfig.androidLink?window.$environment.packageConfig.androidLink:'Empty';

Deserializers.iosLink = ( typeof window !== "undefined")&&window.$environment.packageConfig.iosLink?window.$environment.packageConfig.iosLink:'Empty';

Deserializers.base64Enabled = "False";

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

Deserializers.buildID = "7bdec01e-9364-402f-951b-2ef2330d3443";

Deserializers.runtimeInitializeOnLoadInfos = [[["UnityEngine","U2D","Animation","GpuDeformationSystem","CreateFallbackBuffer"],["UnityEngine","Experimental","Rendering","ScriptableRuntimeReflectionSystemSettings","ScriptingDirtyReflectionSystemInstance"]],[["Unity","VisualScripting","RuntimeVSUsageUtility","RuntimeInitializeOnLoadBeforeSceneLoad"],["UnityEngine","AI","NavMesh","ClearPreUpdateListeners"]],[["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"],["$BurstDirectCallInitializer","Initialize"]],[],[["UnityEngine","Timeline","AnimatorBindingCache","ResetStaticsOnLoad"],["UnityEngine","Timeline","TrackAsset","ResetStaticsOnLoad"],["UnityEngine","Timeline","AnimationPreviewUtilities","ResetStaticsOnLoad"]]];

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

