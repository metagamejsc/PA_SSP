using System.Collections;
using UnityEngine;

public class BombController : MonoBehaviour
{
    [SerializeField] private int damage;
    [SerializeField] private float delayAction;
    [SerializeField] private float radius;
    [SerializeField] private GameObject actionVFX;
    [SerializeField] private AudioClip actionSFX;
    private void OnEnable()
    {
        StartCoroutine(WaitForAction());
    }
    private void Action()
    {
        Collider[] cols = Physics.OverlapSphere(transform.position, transform.lossyScale.x * radius);
        if (cols.Length > 0)
        {
            for (int i = 0; i < cols.Length; i++)
            {
                cols[i].TryGetComponent<Damageable>(out Damageable target);
                if (target) target.TakeDamage(damage);
            }
        }
        PoolController.Ins.SpawnObject(actionVFX, transform.position, transform.rotation);
        AudioController.Ins.PlaySFX(actionSFX);
        gameObject.SetActive(false);
    }
    private IEnumerator WaitForAction()
    {
        yield return new WaitForSeconds(delayAction);
        Action();
    }
}