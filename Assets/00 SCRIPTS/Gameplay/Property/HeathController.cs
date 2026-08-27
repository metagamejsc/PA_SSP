using System;
using System.Collections.Generic;
using UnityEngine;

public class HeathController : MonoBehaviour
{
    [SerializeField] private int heath;
    [SerializeField] private List<Damageable> damageables;
    [SerializeField] private GameObject damageVFX;
    [SerializeField] private AudioClip damageSound;
    [SerializeField] private AudioClip deathSound;

    private bool isDeath;
    private void Awake()
    {
        damageables.ForEach(d => d.OnTakeDamage += TakeDamage);
    }
    private void TakeDamage(int amount)
    {
        if (isDeath) return;
        heath -= amount;
        AudioController.Ins.PlaySFX(damageSound);
        PoolController.Ins.SpawnObject(damageVFX, transform.position, transform.rotation);
        if (heath <= 0) Break();
    }
    public Action OnDeath;
    private void Break()
    {
        isDeath = true;
        damageables.ForEach(d => d.Death());
        AudioController.Ins.PlaySFX(deathSound);
        OnDeath?.Invoke();
    }
}