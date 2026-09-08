using System.Collections;
using TMPro;
using UnityEngine;
using UnityEngine.UI;

public class LunaController : MonoBehaviour
{
    [Header("Time")]
    [LunaPlaygroundField("Time Play")] public float TimePlay;
    [LunaPlaygroundField("Limit Time Play?")] public bool LimitTimePlay;

    [Header("BG")]
    [LunaPlaygroundAsset("BG Image (1920 x 1080)")] public Texture2D BGTexture;
    [LunaPlaygroundField("BG Image Color")] public Color BGColor;
    [SerializeField] private RawImage BGImage;
    [LunaPlaygroundAsset("BG Music")] public AudioClip BGM;
    [SerializeField] private AudioSource musicSource;

    [Header("Logo")]
    [LunaPlaygroundAsset("Logo (512 x 311)")] public Texture2D LogoTexture;
    [SerializeField] private RawImage logoImage;

    [Header("Demo 1")]
    [LunaPlaygroundAsset("Demo 1 Image (320 x 333)")] public Texture2D Demo1Texture;
    [SerializeField] private RawImage demo1Image;
    [LunaPlaygroundField("Demo 1 Name")] public string Demo1Name;
    [SerializeField] private TextMeshProUGUI demo1Text;

    [Header("Demo 2")]
    [LunaPlaygroundAsset("Demo 2 Image (320 x 333)")] public Texture2D Demo2Texture;
    [SerializeField] private RawImage demo2Image;
    [LunaPlaygroundField("Demo 2 Name")] public string Demo2Name;
    [SerializeField] private TextMeshProUGUI demo2Text;

    [Header("Demo 3")]
    [LunaPlaygroundAsset("Demo 3 Image (320 x 333)")] public Texture2D Demo3Texture;
    [SerializeField] private RawImage demo3Image;
    [LunaPlaygroundField("Demo 3 Name")] public string Demo3Name;
    [SerializeField] private TextMeshProUGUI demo3Text;

    [Header("Demo 4")]
    [LunaPlaygroundAsset("Demo 4 Image (320 x 333)")] public Texture2D Demo4Texture;
    [SerializeField] private RawImage demo4Image;
    [LunaPlaygroundField("Demo 4 Name")] public string Demo4Name;
    [SerializeField] private TextMeshProUGUI demo4Text;

    [Header("CTA")]
    [LunaPlaygroundAsset("CTA Button Image (390 x 145)")] public Texture2D CTATexture;
    [LunaPlaygroundField("CTA Button Color")] public Color CTAColor;
    [SerializeField] private RawImage CTAImage;
    [LunaPlaygroundField("CTA Text")] public string CTAText;
    [LunaPlaygroundField("CTA Text Color")] public Color CTATextColor;
    [SerializeField] private TextMeshProUGUI CTATextField;

    [Header("End Card")]
    [SerializeField] private Button endCard;
    private void Start()
    {
        StartCoroutine(EndGame());
        Init();
        endCard.onClick.AddListener(ClickCTA);
        musicSource.Play();
    }
    private void Init()
    {
        BGImage.texture = BGTexture;
        BGImage.color = BGColor;
        musicSource.clip = BGM;

        logoImage.texture = LogoTexture;

        demo1Image.texture = Demo1Texture;
        demo1Text.text = Demo1Name;

        demo2Image.texture = Demo2Texture;
        demo2Text.text = Demo2Name;

        demo3Image.texture = Demo3Texture;
        demo3Text.text = Demo3Name;

        demo4Image.texture = Demo4Texture;
        demo4Text.text = Demo4Name;

        CTAImage.texture = CTATexture;
        CTAImage.color = CTAColor;
        CTATextField.text = CTAText;
        CTATextField.color = CTATextColor;
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
