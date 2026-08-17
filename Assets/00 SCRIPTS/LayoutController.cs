using UnityEngine;

public class LayoutController : MonoBehaviour
{
    [SerializeField] private Transform main;
    [SerializeField] private RectTransform UI;
    private float oldRatio;
    void Start()
    {
        Fit();
    }

    void Update()
    {
        Fit();
    }
    private void Fit()
    {
        float ratio = (float)Screen.width / Screen.height;
        if (ratio == oldRatio) return;
        oldRatio = ratio;
        if (ratio > 1f)
        {
            main.transform.localScale = Vector3.one * 2;
            UI.transform.localScale = Vector3.one * 1.5f;
        }
        else
        {
            main.transform.localScale = Vector3.one;
            UI.transform.localScale = Vector3.one;
        }
    }

}
