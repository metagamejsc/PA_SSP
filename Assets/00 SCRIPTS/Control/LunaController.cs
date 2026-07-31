using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;

public class LunaController : MonoBehaviour
{
    [LunaPlaygroundAsset("BG Image")] public Texture2D BGTexture;
    [LunaPlaygroundField("Limit Time Play?")] public bool UseTime;
    [LunaPlaygroundField("Time Play")] public float TimePlay;
    [LunaPlaygroundField("Limit Count Play?")] public bool UseCountPlay;
    [LunaPlaygroundField("Count Play")] public int MaxCountPlay;
    [LunaPlaygroundField("Type Monster 1 0 ->3")] public int TypeMonster1;
    [LunaPlaygroundField("Type Monster 1 0 ->3")] public int TypeMonster2;
    [LunaPlaygroundField("Header 1")] public string Header1;
    [LunaPlaygroundField("Header 2")] public string Header2;

    [SerializeField] private Text Header1Text;
    [SerializeField] private Text Header2Text;

    [SerializeField] private RawImage BGImage;
    [SerializeField] private List<Button> CTA;
    [SerializeField] private int count;
    void Start()
    {
        Header1Text.text = Header1;
        Header2Text.text = Header2;

        BGImage.texture = BGTexture;
        CTA.ForEach(b => b.onClick.AddListener(ClickCTA));
        StartCoroutine(EndGame());
        if (UseCountPlay) GameController.Ins.OnClick += UpdateCount;
        GameController.Ins.SpawnMonster(TypeMonster1, TypeMonster2);
    }
    private void UpdateCount()
    {
        if (!UseCountPlay) return;
        count++;
        if (count > MaxCountPlay)
        {
            ClickCTA();
        }
    }
    private void ClickCTA()
    {
        Luna.Unity.Playable.InstallFullGame();
    }
    private IEnumerator EndGame()
    {
        yield return new WaitForSeconds(TimePlay);
        Luna.Unity.LifeCycle.GameEnded();
        if (UseTime) ClickCTA();
    }
}
