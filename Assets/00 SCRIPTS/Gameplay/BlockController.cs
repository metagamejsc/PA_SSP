using System.Collections.Generic;
using UnityEngine;

public class BlockController : MonoBehaviour
{
    [SerializeField] private int heath;
    [SerializeField] private AudioClip breakSound;
    [SerializeField] private List<Damageable> damageables;
    [SerializeField] private GameObject breakVFX;
    private bool isBreak;
    private void Awake()
    {
        damageables.ForEach(d => d.OnTakeDamage += TakeDamage);
    }
    private void TakeDamage(int amount)
    {
        if (isBreak) return;
        heath -= amount;
        if (heath <= 0) Break();
    }
    private void Break()
    {
        isBreak = true;
        AudioController.Ins.PlaySFX(breakSound);
        if (breakVFX) PoolController.Ins.SpawnObject(breakVFX, transform.position, transform.rotation);
        Destroy(gameObject);
    }
}