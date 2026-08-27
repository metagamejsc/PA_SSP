using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;

public class LunaController : MonoBehaviour
{
    [LunaPlaygroundField("Portrait Camera Zoom")] public float PortraitCameraZoom;
    [LunaPlaygroundField("Lanscape Camera Zoom")] public float LandscapeCameraZoom;
    [SerializeField] private CameraController cam;
    [LunaPlaygroundField("Time Play")] public float TimePlay;
    [LunaPlaygroundField("Limit Time Play?")] public bool LimitTimePlay;
    [LunaPlaygroundField("Limit Count Play?")] public bool LimitCountPlay;
    [LunaPlaygroundField("Count Play")] public int CountPlay;
    [LunaPlaygroundField("Use Custom BG?")] public bool UseCustomBG;
    [LunaPlaygroundAsset("BG (1300x1080)")] public Texture2D BGTexture;
    [LunaPlaygroundAsset("BMG")] public AudioClip BGM;
    [LunaPlaygroundField("Color Option Text")] public Color ColorOptionText;
    [LunaPlaygroundField("Color Tut Text")] public Color ColorTutText;

    [SerializeField] private List<Text> optionText;
    [SerializeField] private List<Text> tutText;


    [SerializeField] private RawImage BGImage;
    [SerializeField] private AudioSource musicSource;
    [SerializeField] private List<Button> CTA;
    [SerializeField] private int currentCount;

    private void Awake()
    {
        InitOption();
        cam.SetupCamera(PortraitCameraZoom, LandscapeCameraZoom);
        CTA.ForEach(b => b.onClick.AddListener(ClickCTA));

        if (UseCustomBG)
        {
            BGImage.texture = BGTexture;
            BGImage.gameObject.SetActive(true);
        }

        if (BGM) musicSource.clip = BGM;
        musicSource.Play();
    }

    private void InitOption()
    {
        optionText.ForEach(t => t.color = ColorOptionText);
        tutText.ForEach(t => t.color = ColorTutText);
    }
    private void Start()
    {
        if (LimitCountPlay) GameController.Ins.OnClick += Count;
        StartCoroutine(EndGame());
    }
    private void Count()
    {
        if (currentCount >= CountPlay)
        {
            ClickCTA();
            return;
        }
        currentCount++;
    }

    private void ClickCTA()
    {
        Luna.Unity.Playable.InstallFullGame();
    }
    private IEnumerator EndGame()
    {
        yield return new WaitForSeconds(TimePlay);
        Luna.Unity.LifeCycle.GameEnded();
        if (LimitTimePlay) ClickCTA();
    }
}

