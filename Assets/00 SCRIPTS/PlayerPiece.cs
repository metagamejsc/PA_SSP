using UnityEngine;

public class BodyPiece : MonoBehaviour
{
    [SerializeField] private PlayerController player;
    private void OnCollisionEnter2D(Collision2D collision)
    {
        if (player.IsZombie) return;
        if (!collision.gameObject.CompareTag("Monster")) return;
        collision.transform.parent.gameObject.TryGetComponent<MonsterController>(out MonsterController monster);
        if (!monster || monster.IsDead) return;
        player.Zombie();
    }
}