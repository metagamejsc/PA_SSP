using System;
using System.Collections;
using UnityEngine;
using UnityEngine.UI;

public class GameController : MonoBehaviour
{
    [Header("Scene")]
    [SerializeField] private RectTransform startScene;
    [SerializeField] private RectTransform completeScene;
    [SerializeField] private RectTransform failScene;

    [Header("Option")]
    [SerializeField] private Button fightButton;
    [SerializeField] private OptionController fightController;
    [SerializeField] private Button defenseButton;
    [SerializeField] private OptionController defenseController;
    [SerializeField] private AudioClip clickSound;

    [Header("Progress")]
    [SerializeField] private bool isEnd;
    [SerializeField] private int numPlayer;
    [SerializeField] private int numEnemy;
    private Coroutine endCouroutine;
    private bool startGame;
    public void AddPlayer()
    {
        numPlayer++;
    }
    public void RemovePlayer()
    {
        if (isEnd) return;
        numPlayer--;
        if (numPlayer <= 0)
        {
            endCouroutine = endCouroutine ?? StartCoroutine(WaitForEnd());
        }
    }
    public void AddEnemy()
    {
        numEnemy++;
    }
    public void RemoveEnemy()
    {
        if (isEnd) return;
        numEnemy--;
        if (numEnemy <= 0)
        {
            endCouroutine = endCouroutine ?? StartCoroutine(WaitForEnd());
        }
    }

    public void Win()
    {
        completeScene.gameObject.SetActive(true);
    }
    public void Loss()
    {
        failScene.gameObject.SetActive(true);
    }
    private IEnumerator WaitForEnd()
    {
        OnEnd?.Invoke();
        yield return new WaitForSeconds(1f);
        isEnd = true;
        if (numPlayer > 0) Win();
        else Loss();
    }

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
        fightButton.onClick.AddListener(() =>
        {
            AudioController.Ins.PlaySFX(clickSound);
            fightController.gameObject.SetActive(true);
            ResumeGame();
        });
        defenseButton.onClick.AddListener(() =>
        {
            AudioController.Ins.PlaySFX(clickSound);
            defenseController.gameObject.SetActive(true);
            ResumeGame();
        });
    }
    public Action OnClick;
    public Action OnPause;
    public Action OnResume;
    public Action OnEnd;
    public void Click()
    {
        OnClick?.Invoke();
    }


    public void PauseGame()
    {
        if (startGame) return;
        startGame = true;
        startScene.gameObject.SetActive(true);
        OnPause?.Invoke();
    }
    private void ResumeGame()
    {
        startScene.gameObject.SetActive(false);
        OnResume?.Invoke();
    }
    public void Complete()
    {
        completeScene.gameObject.SetActive(true);
    }
    public void Fail()
    {
        failScene.gameObject.SetActive(true);
    }
}

