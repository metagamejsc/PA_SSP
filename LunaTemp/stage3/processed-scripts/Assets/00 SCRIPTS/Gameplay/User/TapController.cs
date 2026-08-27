using UnityEngine;
using UnityEngine.EventSystems;

public class TapController : MonoBehaviour
{
    [SerializeField] private IAction action;
    [SerializeField] private GameObject tapTut;
    private void Awake()
    {
        action = GetComponent<IAction>();
    }
    private void OnEnable()
    {
        if (tapTut) tapTut.SetActive(true);
    }
    private void OnDisable()
    {
        if (tapTut) tapTut.SetActive(false);
    }
    private void Update()
    {
        if (Input.touchCount > 0 && Input.GetTouch(0).phase == TouchPhase.Began)
        {
            if (EventSystem.current.IsPointerOverGameObject(Input.GetTouch(0).fingerId)) return;
            if (action.Action())
            {
                if (tapTut) Destroy(tapTut);
                GameController.Ins.Click();
            }
        }
        else if (Input.GetMouseButtonDown(0))
        {
            if (EventSystem.current.IsPointerOverGameObject()) return;
            if (action.Action())
            {
                if (tapTut) Destroy(tapTut);
                GameController.Ins.Click();
            }
        }
    }
}