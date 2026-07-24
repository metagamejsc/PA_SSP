using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;

public class GameController : MonoBehaviour
{
    [SerializeField] private int currentPhase;
    [SerializeField] private List<Phase> phases;
    [SerializeField] private List<Button> nextButton;
    [SerializeField] private AudioClip nextSound;
    public static GameController Ins { get; private set; }

    private void CreateIns()
    {
        if (Ins && Ins != this)
        {
            Destroy(gameObject);
            return;
        }
        Ins = this;
        DontDestroyOnLoad(gameObject);
    }
    private void Awake()
    {
        CreateIns();
        nextButton.ForEach(b => b.onClick.AddListener(NextPhase));
    }
    void Start()
    {
        SetPhase(0, true);
    }
    private void Update()
    {
        if(Input.GetKeyDown(KeyCode.K)) EndPhase();
    }
    public void EndPhase()
    {
        nextButton[currentPhase].gameObject.SetActive(true);
    }
    private void NextPhase()
    {
        if (currentPhase >= phases.Count - 1) return;
        AudioController.Ins.PlaySFX(nextSound);
        SetPhase(currentPhase, false);
        currentPhase++;
        SetPhase(currentPhase, true);
    }
    private void SetPhase(int index, bool active)
    {
        phases[index].Game.SetActive(active);
        phases[index].UI.SetActive(active);
    }
}
[System.Serializable]
public struct Phase
{
    public GameObject Game;
    public GameObject UI;
}
