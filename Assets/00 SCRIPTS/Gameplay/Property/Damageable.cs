using System;
using UnityEngine;

public class Damageable : MonoBehaviour
{
    private Collider colli;
    private void Awake()
    {
        colli = GetComponent<Collider>();
    }
    public void TakeDamage(int amount)
    {
        OnTakeDamage?.Invoke(amount);
    }
    public void Death()
    {
        colli.enabled = false;
    }
    public Action<int> OnTakeDamage;
}