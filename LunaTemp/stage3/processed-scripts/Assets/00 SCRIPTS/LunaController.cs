using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;

public class LunaController : MonoBehaviour
{
    [LunaPlaygroundField("Time Play")] public float TimePlay;
    [LunaPlaygroundField("Limit Time Play?")] public bool LimitTimePlay;
    [LunaPlaygroundField("Use Custom BG?")] public bool UseCustomBG;
    [LunaPlaygroundAsset("BG")] public Texture2D BGTexture;
    [SerializeField] private RawImage BGImage;
    [SerializeField] private List<Button> CTA;

    private void Awake()
    {
        CTA.ForEach(b => b.onClick.AddListener(ClickCTA));
        if (UseCustomBG)
        {
            BGImage.texture = BGTexture;
            BGImage.gameObject.SetActive(true);
        }

    }
    private void Start()
    {
        StartCoroutine(EndGame());
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

