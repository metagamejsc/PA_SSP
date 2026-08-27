using System.Collections;
using UnityEngine;

public class GunController : MonoBehaviour, IAction
{
    [SerializeField] private float delayActive;
    [SerializeField] private float delayAction;
    [SerializeField] private Transform aim;
    [SerializeField] private GameObject bulletPrefab;
    [SerializeField] private AudioSource sound;
    [SerializeField] private AnimationController anim;
    [SerializeField] private string activeKey;
    [SerializeField] private string actionKey;
    [SerializeField] private MeshRenderer gun;
    [SerializeField] protected float timeCD;
    [SerializeField] protected bool onCD;
    [SerializeField] private MeshRenderer fakegun;
    public bool Action()
    {
        if (onCD) return false;
        StartCoroutine(Spawn());
        return true;
    }
    private IEnumerator CD()
    {
        onCD = true;
        yield return new WaitForSeconds(timeCD);
        onCD = false;
    }
    private void OnEnable()
    {
        StartCoroutine(WaitForReady());
    }
    private void OnDisable()
    {
        anim.PlayAnimation("Idle");
        if (gun) gun.enabled = false;
        StopAllCoroutines();
    }
    private IEnumerator WaitForReady()
    {
        onCD = true;
        anim.PlayAnimation(activeKey);
        yield return new WaitForSeconds(delayActive);
        if (fakegun) fakegun.enabled = false;
        if (gun) gun.enabled = true;
        onCD = false;
    }
    public IEnumerator Spawn()
    {
        StartCoroutine(CD());
        anim.PlayAnimation(actionKey);
        yield return new WaitForSeconds(delayAction);
        sound.Play();
        PoolController.Ins.SpawnObject(bulletPrefab, aim.position, aim.rotation);
    }
}