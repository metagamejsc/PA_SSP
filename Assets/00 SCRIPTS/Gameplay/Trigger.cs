using System;
using UnityEngine;

public class EnemyTrigger : MonoBehaviour
{
    private void OnTriggerEnter(Collider other)
    {
        OnTrigger?.Invoke();
    }
    public Action OnTrigger;
}