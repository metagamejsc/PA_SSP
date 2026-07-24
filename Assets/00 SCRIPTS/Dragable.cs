using System;
using UnityEngine;

public class Dragable : MonoBehaviour
{
    private Rigidbody rigid;
    private void Awake()
    {
        rigid = GetComponent<Rigidbody>();
    }
    public Action OnDrag;
    public Action OnEndDrag;

    public void StartMove()
    {
        OnDrag?.Invoke();
    }
    public void EndMove()
    {
        OnEndDrag?.Invoke();
    }
    public void Move(Vector3 pos)
    {
        Vector2 force = (pos - transform.position) * 100f;
        Debug.Log(force);

        rigid.AddForce(force, ForceMode.Acceleration);
    }
}