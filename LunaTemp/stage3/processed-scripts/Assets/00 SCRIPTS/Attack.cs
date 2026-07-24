using UnityEngine;

public class Attack : MonoBehaviour
{
    [SerializeField] private Vector3 offset;
    [SerializeField] private Vector3 boxSize;
    public void OnEvent()
    {
        Collider[] cols = Physics.OverlapBox(transform.position + offset, boxSize);
        if (cols.Length < 0) return;
        foreach (var col in cols)
        {
            if (col.transform.root == transform.root) continue;
            Debug.Log("hit");
        }

    }

    // private void OnDrawGizmos()
    // {
    //     Gizmos.DrawCube(transform.position + offset, boxSize);
    // }
}
