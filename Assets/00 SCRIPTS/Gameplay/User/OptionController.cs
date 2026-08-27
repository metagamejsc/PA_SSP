using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;

public class OptionController : MonoBehaviour
{
    [SerializeField] protected RectTransform optionScene;
    [SerializeField] protected List<Option> options;
    [SerializeField] protected AudioClip clickSound;
    [SerializeField] protected GameObject optionTut;
    [SerializeField] protected Option currentOption;

    protected void Awake()
    {
        options.ForEach(opt => opt.Button.onClick.AddListener(() => ChangeOption(opt)));
    }
    protected void Start()
    {
        GameController.Ins.OnEnd += () =>
        {
            optionScene.gameObject.SetActive(false);
            if (optionTut) optionTut.SetActive(false);
            if (!currentOption.IsEmpty) currentOption.ActiveObject.SetActive(false);
            gameObject.SetActive(false);
        };
        optionScene.gameObject.SetActive(true);
    }
    protected void ChangeOption(Option newOption)
    {
        if (optionTut) Destroy(optionTut);
        if (!currentOption.IsEmpty)
        {
            if (currentOption.ActiveObject == newOption.ActiveObject) return;
            DeactiveCurrent();
        }
        AudioController.Ins.PlaySFX(clickSound);
        currentOption = newOption;
        ActiveCurrent();
    }
    protected virtual void DeactiveCurrent()
    {
        currentOption.Selected.SetActive(false);
    }
    protected virtual void ActiveCurrent()
    {
        currentOption.Selected.SetActive(true);
    }
}
[System.Serializable]
public struct Option
{
    public Button Button;
    public GameObject Selected;
    public GameObject ActiveObject;
    public readonly bool IsEmpty => !Button || !ActiveObject || !Selected;
}