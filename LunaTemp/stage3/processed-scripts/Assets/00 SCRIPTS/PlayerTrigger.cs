using UnityEngine;

public class PlayerTrigger : MonoBehaviour
{
    [SerializeField] private MonsterController monster;
    public MonsterController Monster => monster;
    private void OnTriggerStay2D(Collider2D collision)
    {
        if (monster && !monster.IsDead) return;
        collision.transform.parent.TryGetComponent<MonsterController>(out MonsterController m);
        if (!m || m.IsDead)
        {
            monster = null;
            return;
        }

        monster = m;
    }
    private void OnTriggerExit2D(Collider2D collision)
    {
        if (!monster) return;
        if (collision.transform.parent.gameObject == monster.gameObject) monster = null;
    }
}