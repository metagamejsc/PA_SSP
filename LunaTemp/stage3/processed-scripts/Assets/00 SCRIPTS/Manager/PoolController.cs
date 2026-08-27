using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class PoolController : MonoBehaviour
{
    [SerializeField] private Transform poolParent;
    private Dictionary<string, Queue<GameObject>> pool;
    public static PoolController Ins { get; private set; }
    private void CreateIns()
    {
        if (Ins && Ins != this)
        {
            Destroy(gameObject);
            return;
        }
        Ins = this;
        DontDestroyOnLoad(gameObject);
    }
    private void Awake()
    {
        CreateIns();
        pool = new Dictionary<string, Queue<GameObject>>();
    }
    private GameObject GetFreeObject(GameObject prefab)
    {
        if (!pool.TryGetValue(prefab.name, out Queue<GameObject> queue))
        {
            queue = new Queue<GameObject>();
            pool.Add(prefab.name, queue);
        }
        return queue.Count > 0 ? queue.Dequeue() : CreateNewObject(prefab);
    }
    private GameObject CreateNewObject(GameObject prefab)
    {
        GameObject g = Instantiate(prefab, poolParent);
        g.SetActive(false);
        return g;
    }

    public void SpawnObject(GameObject prefab, [Bridge.Ref] Vector3 position, [Bridge.Ref] Quaternion rotation)
    {
        GameObject g = GetFreeObject(prefab);
        g.transform.position = position;
        g.transform.rotation = rotation;
        g.SetActive(true);
        StartCoroutine(ReturnToPool(prefab, g));
    }
    private IEnumerator ReturnToPool(GameObject prefab, GameObject g)
    {
        yield return new WaitUntil(() => !g.activeSelf);
        pool[prefab.name].Enqueue(g);
    }
}