using System.Collections;
using UnityEngine;
using UnityEngine.EventSystems;

public class DropController : MonoBehaviour, IAction
{
    [SerializeField] private LayerMask surfaceLayer;

    [SerializeField] private GameObject currentDrop;
    [SerializeField] private Transform world;

    [SerializeField] private AudioSource sound;
    [SerializeField] protected float timeCD;
    [SerializeField] protected bool onCD;
    public bool Action()
    {
        if (onCD) return false;
        if (Input.touchCount > 0)
        {
            Ray ray = Camera.main.ScreenPointToRay(
                Input.GetTouch(0).position
            );

            if (Physics.Raycast(
                ray,
                out RaycastHit hit,
                Mathf.Infinity,
                surfaceLayer))
            {
                Spawn(hit.point);
                return true;
            }
        }
        else
        {
            Ray ray = Camera.main.ScreenPointToRay(Input.mousePosition);

            if (Physics.Raycast(
                ray,
                out RaycastHit hit,
                Mathf.Infinity,
                surfaceLayer))
            {
                Spawn(hit.point);
                return true;
            }
        }
        return false;
    }
    private void Spawn([Bridge.Ref] Vector3 position)
    {
        PoolController.Ins.SpawnObject(currentDrop, position, Quaternion.identity);
        sound.Play();
        StartCoroutine(CD());
    }
    private IEnumerator CD()
    {
        onCD = true;
        yield return new WaitForSeconds(timeCD);
        onCD = false;
    }
}